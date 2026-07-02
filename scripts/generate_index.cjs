const fs = require('fs');
const path = require('path');

const itemsDir = path.join(__dirname, '../public/assets/items');
const outFile = path.join(__dirname, '../public/data/allItems.json');

function capitalizeWord(word) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function getBaseId(id) {
  // Exception for music discs or other items that naturally have numbers
  if (id.startsWith('music_disc')) return id;
  if (id.match(/^dye_[0-9]+$/)) return id; // If there are numbered dyes
  
  let base = id;
  // Remove block side suffixes and states
  base = base.replace(/_(top|bottom|side|front|back|overlay|inner|outer|on|off|lit|unlit|active|inactive|open|closed)$/i, '');
  // Remove animation frames (end in _0, _1, _2...)
  base = base.replace(/_[0-9]+$/g, '');
  // Remove ctm (Connected Textures Mod)
  base = base.replace(/_ctm.*/g, '');
  
  // Recursively clean if there were multiple suffixes like furnace_front_on
  if (base !== id && (base.match(/_(top|bottom|side|front|back|overlay|inner|outer|on|off|lit|unlit|active|inactive|open|closed)$/i) || base.match(/_[0-9]+$/))) {
     return getBaseId(base); 
  }
  return base;
}

const itemsMap = new Map();

if (fs.existsSync(itemsDir)) {
  const files = fs.readdirSync(itemsDir);
  
  files.forEach(file => {
    if (file.endsWith('.png')) {
      const fileId = file.replace('.png', '');
      
      // Ignore obvious non-items
      if (fileId.includes('_bloom') || fileId.includes('_normal') || fileId.includes('_specular')) return;
      
      // Ignore purely numeric filenames (like "00", "14", "130") which are usually GUI elements or font sprites misplaced by modders
      if (/^[0-9]+$/.test(fileId)) return;
      
      // Ignore single letter filenames (rarely real items, often junk sprites)
      if (fileId.length <= 1) return;
      
      // Ignore GUI elements, widget parts, and particles
      const isJunk = /(_gui|gui_|_particle|particle_|_border|border_|_slot|slot_|empty_armor|empty_slot|button|tab_icon|cursor|_bg|bg_|background|overlay_side)/i.test(fileId);
      if (isJunk && !fileId.includes('gui_pattern')) return; // Just in case a real item has 'gui' we exclude if it's junk, but usually they are junk. 
      // Note: "empty_bottle" is a real item, so we specifically target "empty_armor" or "empty_slot" or just "_slot"

      // Ignore 3D models flat UV textures (like Macaw's Furniture couches, chairs, roofs, tables, bridges)
      const isUVMap = /(^|_)(couch|chair|desk|drawer|blind|roof|awning|bridge|catwalk|actuator|cabinet|wardrobe|counter|stool|door_top|door_bottom|bed_head|bed_foot|chest_top|chest_side|chest_front)(_|$)/i.test(fileId);
      if (isUVMap) return;

      // Ignore block geometric side textures (often look like distorted fragments in 2D)
      const isBlockSide = /(^|_)(bottom|top|side|front|back|inner|outer|connected|window)(_|$)/i.test(fileId);
      if (isBlockSide && !fileId.includes('window_pane')) return;

      const baseId = getBaseId(fileId);
      
      // If we don't have this base item yet, OR if the current file is the EXACT base item (e.g. glass vs glass_ctm_1), we prefer the exact match.
      if (!itemsMap.has(baseId) || fileId === baseId) {
        itemsMap.set(baseId, fileId);
      }
    }
  });
}

const allItems = [];
itemsMap.forEach((fileId, baseId) => {
  // Clean name from the baseId: "iron_ingot" -> "Iron Ingot"
  const name = baseId.split(/[_|-]/).map(w => capitalizeWord(w)).join(' ');
  
  allItems.push({
    id: fileId, // We use the actual fileId for the image src so it loads correctly
    name: name,
    type: 'item'
  });
});

// Sort alphabetically
allItems.sort((a, b) => a.name.localeCompare(b.name));

fs.writeFileSync(outFile, JSON.stringify(allItems, null, 2));
console.log(`Generated index for ${allItems.length} items.`);
