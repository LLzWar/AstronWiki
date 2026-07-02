import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const bosses = ['ignis', 'ender_golem', 'netherite_monstrosity', 'harbinger'];
const dir = './public/assets/bosses';

async function scan() {
  console.log('Infiltrando minecraft-guides.com...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://www.minecraft-guides.com/wiki/cataclysm/', { waitUntil: 'networkidle2', timeout: 30000 });
    
    const imgs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).map(img => img.src);
    });
    
    console.log(`Encontradas ${imgs.length} imagens no total. Filtrando...`);
    
    for (const b of bosses) {
      // Procurar imagens que contenham o nome do boss (ignorando case e undercores)
      const keyword = b.replace('_', '');
      const match = imgs.find(src => src.toLowerCase().includes(keyword) || src.toLowerCase().includes(b.split('_')[0]));
      
      if (match) {
        console.log(`Encontrado alvo para ${b}: ${match}`);
        const imgRes = await fetch(match);
        const arrayBuffer = await imgRes.arrayBuffer();
        fs.writeFileSync(path.join(dir, `${b}.png`), Buffer.from(arrayBuffer));
        console.log(`[+] Imagem capturada: ${b}.png`);
      } else {
        console.log(`[-] Nenhuma imagem correspondente para ${b}`);
      }
    }
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  }
  
  await browser.close();
}

scan();
