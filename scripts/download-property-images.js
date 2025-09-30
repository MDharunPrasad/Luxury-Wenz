import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { properties } from '../src/data/properties.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create images directory if it doesn't exist
const imageDir = path.join(__dirname, '../public/images/properties');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

// Download a single image
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(imageDir, filename));
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve(true);
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
};

// Process all properties
const processProperties = async () => {
  const updatedProperties = [];
  let imageIndex = 1;
  const imageMap = new Map(); // To track downloaded images and avoid duplicates

  for (const property of properties) {
    const updatedProperty = { ...property };
    const newImages = [];

    for (const imageUrl of property.images) {
      const url = new URL(imageUrl);
      const filename = `property-${imageIndex}${path.extname(url.pathname) || '.jpg'}`;
      
      // If we've already downloaded this image, use the existing filename
      if (imageMap.has(imageUrl)) {
        newImages.push(`/images/properties/${imageMap.get(imageUrl)}`);
        continue;
      }

      try {
        await downloadImage(imageUrl, filename);
        newImages.push(`/images/properties/${filename}`);
        imageMap.set(imageUrl, filename);
        imageIndex++;
      } catch (error) {
        console.error(`Failed to download ${imageUrl}:`, error.message);
        // Keep the original URL as fallback
        newImages.push(imageUrl);
      }
    }

    updatedProperty.images = newImages;
    updatedProperties.push(updatedProperty);
  }

  // Save updated properties
  const outputPath = path.join(__dirname, '../src/data/properties-updated.ts');
  const content = `// This file is auto-generated. Do not edit manually.
import type { Property } from './properties';

export const propertiesUpdated: Property[] = ${JSON.stringify(updatedProperties, null, 2)};`;
  
  fs.writeFileSync(outputPath, content);
  console.log(`\nUpdated properties saved to ${outputPath}`);
};

processProperties().catch(console.error);
