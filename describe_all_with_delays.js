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

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function describeImages() {
  const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images');
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

  console.log(`Found ${files.length} images to analyze with delays...`);

  // Sort files
  files.sort((a, b) => {
    const aNum = a.match(/\d+/);
    const bNum = b.match(/\d+/);
    if (aNum && bNum) {
      return parseInt(aNum[0]) - parseInt(bNum[0]);
    }
    return a.localeCompare(b);
  });

  let existing = {};
  if (fs.existsSync('image_analysis.json')) {
    try {
      existing = JSON.parse(fs.readFileSync('image_analysis.json', 'utf8'));
    } catch(e) {}
  }

  for (const file of files) {
    if (existing[file] && !existing[file].includes('ApiError') && !existing[file].includes('Error')) {
      console.log(`[Skipping] ${file}: ${existing[file]}`);
      continue;
    }

    // Wait 13 seconds to completely reset the 5 req/min quota
    console.log(`Waiting 13s before analyzing ${file}...`);
    await delay(13000);

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
              text: "In 1 clear sentence, describe the subject of this photo. Be very specific about which food (e.g. msemmen stack, glass of cappuccino, cookies, colorful macarons, red fruit tart, cold clear Spanish latte bottle with coffee/milk layers) or cafe part is shown."
            }
          ]
        }
      });

      const text = response.text?.trim() || "No description returned";
      console.log(`[SUCCESS] ${file} -> ${text}`);
      existing[file] = text;
      fs.writeFileSync('image_analysis.json', JSON.stringify(existing, null, 2));
    } catch (e) {
      console.error(`Failed to analyze ${file}:`, e);
      existing[file] = `Error: ${e.message}`;
    }
  }

  console.log('Analysis completed!');
}

describeImages();
