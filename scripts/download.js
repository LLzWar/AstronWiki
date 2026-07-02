import fs from 'fs';
import path from 'path';

const bosses = {
  'ignis': 'https://static.wikia.nocookie.net/lenders-cataclysm/images/b/b3/Ignis.png',
  'ender_golem': 'https://static.wikia.nocookie.net/lenders-cataclysm/images/e/ec/Ender_Golem.png',
  'netherite_monstrosity': 'https://static.wikia.nocookie.net/lenders-cataclysm/images/2/23/Netherite_Monstrosity.png',
  'frostmaw': 'https://static.wikia.nocookie.net/mowziesmobs/images/2/24/Frostmaw.png',
  'wroughtnaut': 'https://static.wikia.nocookie.net/mowziesmobs/images/6/6d/Ferrous_Wroughtnaut.png',
  'harbinger': 'https://static.wikia.nocookie.net/lenders-cataclysm/images/b/b9/The_Harbinger.png'
};

const dir = './public/assets/bosses';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download() {
  for (const [name, url] of Object.entries(bosses)) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Accept': 'image/webp,image/png,image/*,*/*;q=0.8',
          'Referer': 'https://lenders-cataclysm.fandom.com/'
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(path.join(dir, `${name}.png`), buffer);
      console.log(`Sucesso: ${name}`);
    } catch (e) {
      console.error(`Falha ${name}: ${e.message}`);
    }
  }
}

download();
