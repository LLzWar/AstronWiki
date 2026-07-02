import fs from 'fs';
import path from 'path';

const bosses = [
  { name: 'ignis', wiki: 'lenders-cataclysm', file: 'File:Ignis.png' },
  { name: 'ender_golem', wiki: 'lenders-cataclysm', file: 'File:Ender_Golem.png' },
  { name: 'netherite_monstrosity', wiki: 'lenders-cataclysm', file: 'File:Netherite_Monstrosity.png' },
  { name: 'harbinger', wiki: 'lenders-cataclysm', file: 'File:The_Harbinger.png' },
  { name: 'frostmaw', wiki: 'mowziesmobs', file: 'File:Frostmaw.png' },
  { name: 'wroughtnaut', wiki: 'mowziesmobs', file: 'File:Ferrous_Wroughtnaut.png' }
];

const dir = './public/assets/bosses';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function run() {
  for (const b of bosses) {
    console.log(`Buscando URL para ${b.name} via API...`);
    try {
      const apiUrl = `https://${b.wiki}.fandom.com/api.php?action=query&titles=${b.file}&prop=imageinfo&iiprop=url&format=json`;
      const res = await fetch(apiUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      const data = await res.json();
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      
      if (pageId === '-1' || !pages[pageId].imageinfo) {
        console.log(`Nenhuma imagem info encontrada para ${b.name}`);
        continue;
      }
      
      const imgUrl = pages[pageId].imageinfo[0].url;
      console.log(`Encontrado: ${imgUrl}. Baixando...`);
      
      const imgRes = await fetch(imgUrl, {
        headers: { 
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Referer': `https://${b.wiki}.fandom.com/`
        }
      });
      
      if (!imgRes.ok) throw new Error(`HTTP ${imgRes.status}`);
      const arrayBuffer = await imgRes.arrayBuffer();
      fs.writeFileSync(path.join(dir, `${b.name}.png`), Buffer.from(arrayBuffer));
      console.log(`Salvo: ${b.name}.png`);
      
    } catch (e) {
      console.error(`Falha em ${b.name}: ${e.message}`);
    }
  }
}

run();
