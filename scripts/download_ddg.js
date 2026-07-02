import fs from 'fs';
import path from 'path';

const bosses = {
  'ignis': 'L Ender Cataclysm Ignis boss minecraft',
  'ender_golem': 'L Ender Cataclysm Ender Golem minecraft',
  'netherite_monstrosity': 'L Ender Cataclysm Netherite Monstrosity',
  'frostmaw': 'Mowzies Mobs Frostmaw',
  'wroughtnaut': 'Mowzies Mobs Ferrous Wroughtnaut',
  'harbinger': 'L Ender Cataclysm Harbinger'
};

const dir = './public/assets/bosses';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function searchAndDownload() {
  for (const [name, query] of Object.entries(bosses)) {
    console.log(`Buscando ${name}...`);
    try {
      const searchUrl = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query + ' image');
      const res = await fetch(searchUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      const html = await res.text();
      
      const match = html.match(/src="\/\/external-content\.duckduckgo\.com\/iu\/\?u=([^"]+)"/);
      if (match && match[1]) {
        let imgUrl = decodeURIComponent(match[1]);
        console.log(`Encontrado: ${imgUrl}`);
        
        const imgRes = await fetch(imgUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        
        if (!imgRes.ok) throw new Error(`HTTP ${imgRes.status}`);
        
        const arrayBuffer = await imgRes.arrayBuffer();
        fs.writeFileSync(path.join(dir, `${name}.jpg`), Buffer.from(arrayBuffer));
        console.log(`Salvo: ${name}.jpg`);
      } else {
        console.log(`Sem imagem para ${name}`);
      }
    } catch (e) {
      console.error(`Falha em ${name}: ${e.message}`);
    }
  }
}

searchAndDownload();
