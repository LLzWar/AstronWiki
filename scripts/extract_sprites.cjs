const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/assets/items');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const modsDir = 'C:\\Users\\LuisL\\AppData\\Roaming\\PrismLauncher\\instances\\ASTRON CITY PRISM\\minecraft\\mods';
const vanillaJar = 'C:\\Users\\LuisL\\AppData\\Roaming\\PrismLauncher\\libraries\\com\\mojang\\minecraft\\1.20.1\\minecraft-1.20.1-client.jar';

const targetMods = ['cataclysm', 'iceandfire', 'mowziesmobs', 'apotheosis'];

function extractTextures(jarPath) {
  console.log(`Processing: ${jarPath}`);
  try {
    const zip = new AdmZip(jarPath);
    const zipEntries = zip.getEntries();
    
    let count = 0;
    zipEntries.forEach(entry => {
      // Look for PNG files in textures/item/ or textures/block/
      const name = entry.entryName;
      if (name.endsWith('.png') && (name.includes('textures/item/') || name.includes('textures/block/'))) {
        const fileName = path.basename(name);
        const outPath = path.join(targetDir, fileName);
        
        // Don't overwrite if it already exists (e.g. some blocks have same name as items in different mods, 
        // but typically vanilla vs mod is unique enough, or we don't care about collisions right now)
        if (!fs.existsSync(outPath)) {
          zip.extractEntryTo(entry.entryName, targetDir, false, true);
          count++;
        }
      }
    });
    console.log(`Extracted ${count} textures from ${path.basename(jarPath)}`);
  } catch(e) {
    console.error(`Failed to process ${jarPath}:`, e.message);
  }
}

// 1. Process Vanilla
if (fs.existsSync(vanillaJar)) {
  extractTextures(vanillaJar);
}

// 2. Process Mods
if (fs.existsSync(modsDir)) {
  const files = fs.readdirSync(modsDir);
  files.forEach(file => {
    if (file.endsWith('.jar')) {
      extractTextures(path.join(modsDir, file));
    }
  });
}

console.log('Extraction complete!');
