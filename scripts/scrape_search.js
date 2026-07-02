import fs from 'fs';
import path from 'path';

const bosses = {
  'ignis': 'L_Enders_Cataclysm_Ignis',
  'ender_golem': 'Ender_Golem_Cataclysm',
  'netherite_monstrosity': 'Netherite_Monstrosity_Minecraft',
  'harbinger': 'The_Harbinger_Cataclysm_Mod',
  'frostmaw': 'Mowzies_Mobs_Frostmaw',
  'wroughtnaut': 'Ferrous_Wroughtnaut_Mowzies_Mobs'
};

const dir = './public/assets/bosses';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function run() {
  for (const [name, query] of Object.entries(bosses)) {
    console.log(`Buscando no Google: ${name}...`);
    try {
      const q = encodeURIComponent(query + ' minecraft boss');
      const url = `https://html.duckduckgo.com/html/?q=${q}+image`;
      
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      });
      const html = await res.text();
      
      const match = html.match(/src="\/\/external-content\.duckduckgo\.com\/iu\/\?u=([^"]+)"/);
      if (match && match[1]) {
        const imgUrl = decodeURIComponent(match[1]);
        console.log(`Imagem encontrada via DDG: ${imgUrl}`);
        
        const imgRes = await fetch(imgUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        if (!imgRes.ok) throw new Error(`HTTP ${imgRes.status}`);
        const arrayBuffer = await imgRes.arrayBuffer();
        fs.writeFileSync(path.join(dir, `${name}.png`), Buffer.from(arrayBuffer));
        console.log(`Salvo com sucesso: ${name}.png`);
      } else {
        console.log(`DuckDuckGo falhou. Tentando API do Yahoo...`);
        const yUrl = `https://images.search.yahoo.com/search/images?p=${q}`;
        const yRes = await fetch(yUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const yHtml = await yRes.text();
        const yMatch = yHtml.match(/src='(https:\/\/tse[0-9]\.mm\.bing\.net\/th\?id=[^']+)'/);
        
        if (yMatch && yMatch[1]) {
          console.log(`Imagem encontrada via Yahoo: ${yMatch[1]}`);
          const imgRes = await fetch(yMatch[1]);
          const arrayBuffer = await imgRes.arrayBuffer();
          fs.writeFileSync(path.join(dir, `${name}.png`), Buffer.from(arrayBuffer));
          console.log(`Salvo com sucesso: ${name}.png`);
        } else {
           console.log(`Nenhuma imagem encontrada para ${name}`);
        }
      }
    } catch (e) {
      console.error(`Falha em ${name}: ${e.message}`);
    }
  }
}

run();
