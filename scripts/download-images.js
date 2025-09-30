import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create directories if they don't exist
const createDirectories = () => {
  const dirs = [
    path.join(__dirname, '../public/images/properties'),
    path.join(__dirname, '../public/images/agents')
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
};

// Download a single image
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve(true);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
};

// Download all property images
const downloadPropertyImages = async () => {
  const properties = [
    // Property 1
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    // Property 2
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800',
    // Property 3
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
    // Property 4
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800',
    // Property 5
    'https://images.unsplash.com/photo-1475855581698-2815c6a5b02e?w=800',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800',
    // Property 6
    'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?w=800',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800',
    // Property 7
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
    // Property 8
    'https://images.unsplash.com/photo-1475855581698-2815c6a5b02e?w=800',
    'https://images.unsplash.com/photo-1472220625704-91e1462799b2?w=800'
  ];

  // Download agent image
  await downloadImage(
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
    path.join(__dirname, '../public/images/agents/1.jpg')
  );

  // Download property images
  for (let i = 0; i < properties.length; i++) {
    const propIndex = Math.floor(i / 2) + 1;
    const imageNum = (i % 2) + 1;
    const filename = `${propIndex}-${imageNum}.jpg`;
    
    await downloadImage(
      properties[i],
      path.join(__dirname, `../public/images/properties/${filename}`)
    );
  }
};

// Main function
const main = async () => {
  try {
    console.log('Starting image download...');
    createDirectories();
    await downloadPropertyImages();
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
    process.exit(1);
  }
};

main();
