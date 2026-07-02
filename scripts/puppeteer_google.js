import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const cataclysmBosses = {
  'ignis': 'Ignis L Ender Cataclysm boss',
  'ender_golem': 'Ender Golem L Ender Cataclysm',
  'netherite_monstrosity': 'Netherite Monstrosity L Ender Cataclysm',
  'harbinger': 'The Harbinger L Ender Cataclysm'
};

const dir = './public/assets/bosses';

async function bypassGoogleImages() {
  console.log('Iniciando Puppeteer Stealth para invadir cache do Google Imagens...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  for (const [name, query] of Object.entries(cataclysmBosses)) {
    console.log(`\nRastreando alvo: ${name}...`);
    try {
      const searchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Extrair o primeiro thumbnail de imagem renderizado em base64
      const imgData = await page.evaluate(() => {
        // Encontra todas as tags de imagem
        const imgs = Array.from(document.querySelectorAll('img'));
        // Pega a primeira que seja um thumbnail válido base64 (começa com data:image) ou http
        const target = imgs.find(img => (img.src && img.src.startsWith('data:image/jpeg;base64,')) || (img.src && img.src.includes('encrypted-tbn0.gstatic.com')));
        return target ? target.src : null;
      });
      
      if (imgData) {
        if (imgData.startsWith('data:image')) {
            const base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
            const buf = Buffer.from(base64Data, 'base64');
            fs.writeFileSync(path.join(dir, `${name}.png`), buf);
            console.log(`[+] Sucesso! Defesa quebrada e base64 interceptado: ${name}.png`);
        } else {
            // Se for um link http gstatic
            console.log(`Interceptando gstatic: ${imgData}`);
            const imgRes = await fetch(imgData);
            const arrayBuffer = await imgRes.arrayBuffer();
            fs.writeFileSync(path.join(dir, `${name}.png`), Buffer.from(arrayBuffer));
            console.log(`[+] Sucesso! Defesa quebrada e gstatic baixado: ${name}.png`);
        }
      } else {
        console.log(`[-] Nenhuma evidência visual encontrada para ${name}`);
      }
    } catch (e) {
      console.log(`[x] Erro durante a infiltração de ${name}: ${e.message}`);
    }
  }
  
  await browser.close();
}

bypassGoogleImages();
