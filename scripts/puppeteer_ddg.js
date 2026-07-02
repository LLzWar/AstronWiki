import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const cataclysmBosses = {
  'ignis': 'Ignis L Ender Cataclysm boss',
  'ender_golem': 'Ender Golem Cataclysm mod boss',
  'netherite_monstrosity': 'Netherite Monstrosity Cataclysm mod',
  'harbinger': 'The Harbinger Cataclysm boss'
};

const dir = './public/assets/bosses';

async function bypassDDG() {
  console.log('Iniciando Puppeteer Stealth para invadir DuckDuckGo...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  for (const [name, query] of Object.entries(cataclysmBosses)) {
    console.log(`\nRastreando alvo: ${name}...`);
    try {
      const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`;
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // DuckDuckGo loads images asynchronously. Wait a bit for them to render.
      await new Promise(r => setTimeout(r, 2000));
      
      const imgData = await page.evaluate(() => {
        // As imagens do DDG Images geralmente vêm de external-content
        const imgs = Array.from(document.querySelectorAll('img.tile--img__img'));
        const target = imgs.find(img => img.src && img.src.includes('external-content'));
        return target ? target.src : null;
      });
      
      if (imgData) {
        console.log(`Interceptando DDG: ${imgData}`);
        const imgRes = await fetch(imgData);
        const arrayBuffer = await imgRes.arrayBuffer();
        fs.writeFileSync(path.join(dir, `${name}.png`), Buffer.from(arrayBuffer));
        console.log(`[+] Sucesso! Defesa quebrada e gstatic baixado: ${name}.png`);
      } else {
        console.log(`[-] Nenhuma evidência visual encontrada para ${name} no DDG`);
      }
    } catch (e) {
      console.log(`[x] Erro durante a infiltração de ${name}: ${e.message}`);
    }
  }
  
  await browser.close();
}

bypassDDG();
