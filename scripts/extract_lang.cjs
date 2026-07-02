const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const MODS_DIR = 'C:\\Users\\LuisL\\AppData\\Roaming\\PrismLauncher\\instances\\ASTRON CITY PRISM\\minecraft\\mods';
const VANILLA_JAR = 'C:\\Users\\LuisL\\AppData\\Roaming\\PrismLauncher\\libraries\\com\\mojang\\minecraft\\1.21.1\\minecraft-1.21.1-client.jar';
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'data', 'idMap.json');

// Helper to slugify names exactly like Item Icon Exporter does
// Usually, it removes non-alphanumeric (except spaces), trims, and replaces spaces with underscores.
function slugify(name) {
  if (!name) return '';
  return name.replace(/\(.*?\)/g, '').trim().replace(/['\s-]+/g, '_').toLowerCase();
}

async function run() {
  console.log('Scanning mods in:', MODS_DIR);
  const files = fs.readdirSync(MODS_DIR).filter(f => f.endsWith('.jar'));
  files.push(VANILLA_JAR); // Add Vanilla Minecraft to the list of JARs to scan
  console.log(`Found ${files.length} JAR files (including Vanilla).`);
  
  const idMap = {};
  
  for (let i = 0; i < files.length; i++) {
    const jarName = files[i];
    const jarPath = path.isAbsolute(jarName) ? jarName : path.join(MODS_DIR, jarName);
    
    try {
      const zip = new AdmZip(jarPath);
      const zipEntries = zip.getEntries();
      
      // We look for en_us.json
      let enUsEntry = null;

      for (const e of zipEntries) {
        if (e.entryName.match(/^assets\/[a-z0-9_-]+\/lang\/en_us\.json$/)) enUsEntry = e;
      }

      if (enUsEntry) {
        process.stdout.write(`\rProcessing lang [${i+1}/${files.length}]: ${jarName}        `);
        
        let langObj = {};
        if (enUsEntry) {
          try { langObj = JSON.parse(zip.readAsText(enUsEntry)); } catch(e){}
        }

        // Now we parse keys like "item.minecraft.iron_sword" or "block.create.andesite_alloy"
        for (const [key, value] of Object.entries(langObj)) {
          if (typeof value === 'string' && (key.startsWith('item.') || key.startsWith('block.'))) {
            const parts = key.split('.');
            if (parts.length >= 3) {
              const modid = parts[1];
              const itemId = parts.slice(2).join('.');
              const fullId = `${modid}:${itemId}`;
              idMap[fullId] = slugify(value);
            }
          }
        }
      }
    } catch(err) {
    }
  }
  
  // Also we need Minecraft vanilla translations. They are not in the mods folder!
  // We can just rely on English fallback for vanilla if we don't have the minecraft jar.
  // Wait, I can just hardcode the most common vanilla items if needed, or extract from vanilla jar.
  // Let's see how many mappings we get.
  
  console.log(`\nLang extraction complete. Mapped ${Object.keys(idMap).length} items.`);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(idMap));
  console.log(`Saved to ${OUTPUT_FILE}`);
}

run();
