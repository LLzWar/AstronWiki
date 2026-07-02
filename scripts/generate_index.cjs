const fs = require('fs');
const path = require('path');

const itemsDir = path.join(__dirname, '../public/assets/items');
const outFile = path.join(__dirname, '../src/data/allItems.json');

function capitalizeWord(word) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const allItems = [];

if (fs.existsSync(itemsDir)) {
  const files = fs.readdirSync(itemsDir);
  
  files.forEach(file => {
    if (file.endsWith('.png')) {
      const id = file.replace('.png', '');
      
      // Clean name: "iron_ingot" -> "Iron Ingot"
      const name = id.split(/[_|-]/).map(w => capitalizeWord(w)).join(' ');
      
      allItems.push({
        id: id,
        name: name,
        type: 'item'
      });
    }
  });
}

// Sort alphabetically
allItems.sort((a, b) => a.name.localeCompare(b.name));

fs.writeFileSync(outFile, JSON.stringify(allItems, null, 2));
console.log(`Generated index for ${allItems.length} items.`);
