import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('No GEMINI_API_KEY found in environment');
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build'
    }
  }
});

async function describeImages() {
  const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images');
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

  console.log(`Found ${files.length} images to analyze...`);

  // Sort files numerically if possible
  files.sort((a, b) => {
    const aNum = a.match(/\d+/);
    const bNum = b.match(/\d+/);
    if (aNum && bNum) {
      return parseInt(aNum[0]) - parseInt(bNum[0]);
    }
    return a.localeCompare(b);
  });

  const results = {};

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    try {
      const fileData = fs.readFileSync(filePath);
      const base64Data = fileData.toString('base64');
      const ext = path.extname(file).toLowerCase();
      const mimeType = ext === '.png' ? 'image/png' : 'image/jpeg';

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType
              }
            },
            {
              text: "Explain in 1 short clear English sentence what this image displays. Be extremely specific: identify the exact food item (e.g. Msemmen, Cappuccino art, Harcha, Pancakes, French Fruit Tart, Cookies, Milkshake with whipped cream, Espresso machine, Spanish latte bottle) or cafe interior section (e.g. Staircase, family salon upstairs, green velvet chairs downstairs, yellow gray seating, cafe facade, outside terrace patio)."
            }
          ]
        }
      });

      console.log(`[${file}]: ${response.text?.trim()}`);
      results[file] = response.text?.trim();
    } catch (e) {
      console.error(`Failed to analyze ${file}:`, e);
    }
  }

  fs.writeFileSync('image_analysis.json', JSON.stringify(results, null, 2));
  console.log('Analysis saved to image_analysis.json');
}

describeImages();
