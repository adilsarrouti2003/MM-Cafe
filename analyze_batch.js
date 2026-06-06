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

async function runBatch() {
  const filesToAnalyze = process.argv.slice(2);
  const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images');

  console.log(`Analyzing batch: ${filesToAnalyze.join(', ')}`);

  let existing = {};
  if (fs.existsSync('image_analysis.json')) {
    try {
      existing = JSON.parse(fs.readFileSync('image_analysis.json', 'utf8'));
    } catch(e) {}
  }

  for (let i = 0; i < filesToAnalyze.length; i++) {
    const file = filesToAnalyze[i];
    const filePath = path.join(imagesDir, file);

    if (!fs.existsSync(filePath)) {
      console.log(`File path does not exist: ${filePath}`);
      continue;
    }

    if (i > 0) {
      console.log('Waiting 13 seconds to respect rate limit...');
      await delay(13000);
    }

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
              text: "Explain in 1 short clear English sentence what this image displays. Be extremely specific: identify the exact food item (e.g. Msemmen stack, pancakes, harcha, cookies, macarons, red fruit tart, cold espanish latte, hot glass of coffee, black/white coffee with art) or cafe/interior view."
            }
          ]
        }
      });

      const text = response.text?.trim() || 'No description';
      console.log(`[SUCCESS] ${file} -> ${text}`);
      existing[file] = text;
      fs.writeFileSync('image_analysis.json', JSON.stringify(existing, null, 2));
    } catch (e) {
      console.error(`Failed to analyze ${file}:`, e);
      existing[file] = `Error: ${e.message}`;
    }
  }
}

runBatch();
