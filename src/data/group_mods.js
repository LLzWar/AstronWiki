const fs = require('fs');

const fileContent = fs.readFileSync('C:/Users/LuisL/.gemini/antigravity/scratch/astron-wiki/src/data/modsList.js', 'utf8');
const match = fileContent.match(/export const modsList = \[([\s\S]*?)\];/);
if (!match) {
    console.error('Could not parse modsList.js');
    process.exit(1);
}

const rawMods = match[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(s => s.length > 0);

const groups = [
    { name: 'Applied Energistics 2', core: 'appliedenergistics2', keywords: ['ae2', 'applied', 'megacells', 'merequester'] },
    { name: 'Create', core: 'create', keywords: ['create', 'railways', 'sliceanddice'] },
    { name: 'Apotheosis', core: 'Apotheosis', keywords: ['apothic'] },
    { name: 'Iron''s Spells', core: 'irons spellbooks', keywords: ['irons'] },
    { name: 'Sophisticated Mods', core: 'sophisticatedcore', keywords: ['sophisticated'] },
    { name: 'Farmer''s Delight', core: 'FarmersDelight', keywords: ['delight'] },
    { name: 'Cataclysm', core: 'L Ender''s Cataclysm ', keywords: ['cataclysm'] },
    { name: 'Silent Gear', core: 'silent gear', keywords: ['silent', 'sgear'] },
    { name: 'Draconic Evolution', core: 'Draconic Evolution', keywords: ['draconic', 'brandon'] },
    { name: 'FTB', core: 'ftb library neoforge', keywords: ['ftb '] },
    { name: 'Productive Mods', core: 'productivebees', keywords: ['productive'] },
    { name: 'KubeJS', core: 'kubejs neoforge', keywords: ['kubejs', 'rhino'] },
    { name: 'Jade', core: 'Jade', keywords: ['jade'] },
    { name: 'Optimization & Libs', core: 'sodium neoforge', keywords: ['sodium', 'iris', 'ferritecore', 'lithium', 'modernfix', 'immediatelyfast', 'entityculling', 'lib', 'api', 'core', 'config', 'architectury', 'balm', 'bookshelf', 'cloth', 'curios', 'geckolib', 'owo', 'puzzles'] }
];

let grouped = [];
let assigned = new Set();

// Assign exact cores first
for (const g of groups) {
    let groupObj = { name: g.name, core: '', addons: [] };
    const coreMod = rawMods.find(m => m.toLowerCase() === g.core.toLowerCase() || m.includes(g.core));
    if (coreMod) {
        groupObj.core = coreMod;
        assigned.add(coreMod);
    }
    grouped.push(groupObj);
}

// Assign addons
for (const mod of rawMods) {
    if (assigned.has(mod)) continue;
    
    let matchedGroup = null;
    for (const g of groups) {
        if (g.keywords.some(k => mod.toLowerCase().includes(k.toLowerCase()))) {
            matchedGroup = grouped.find(x => x.name === g.name);
            break;
        }
    }
    
    if (matchedGroup) {
        matchedGroup.addons.push(mod);
        assigned.add(mod);
    }
}

// Independent
let independent = rawMods.filter(m => !assigned.has(m));
grouped.push({ name: 'Independent Mods', core: 'Vários', addons: independent });

const output = 'export const groupedMods = ' + JSON.stringify(grouped, null, 2) + ';\n';
fs.writeFileSync('C:/Users/LuisL/.gemini/antigravity/scratch/astron-wiki/src/data/groupedModsList.js', output);
console.log('Grouped successfully.');
