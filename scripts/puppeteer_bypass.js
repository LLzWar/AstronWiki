import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const bosses = [
  { name: 'ignis', url: 'https://lenders-cataclysm.fandom.com/wiki/Ignis' },
  { name: 'ender_golem', url: 'https://lenders-cataclysm.fandom.com/wiki/Ender_Golem' },
  { name: 'netherite_monstrosity', url: 'https://lenders-cataclysm.fandom.com/wiki/Netherite_Monstrosity' },
  { name: 'harbinger', url: 'https://lenders-cataclysm.fandom.com/wiki/The_Harbinger' },
  { name: 'frostmaw', url: 'https://mowziesmobs.fandom.com/wiki/Frostmaw' },
  { name: 'wroughtnaut', url: 'https://mowziesmobs.fandom.com/wiki/Ferrous_Wroughtnaut' }
];

const dir = './public/assets/bosses';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function bypass() {
  console.log('Iniciando navegador com Stealth...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  for (const b of bosses) {
    console.log(`\nInfiltrando em: ${b.url}`);
    try {
      await page.goto(b.url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Encontrar a imagem principal do infobox
      const imgSrc = await page.evaluate(() => {
        const img = document.querySelector('img.pi-image-thumbnail');
        return img ? img.src : null;
      });
      
      if (imgSrc) {
        console.log(`Alvo encontrado: ${imgSrc}`);
        
        // Fazer download da imagem dentro do contexto da página para herdar cookies/headers
        const base64Img = await page.evaluate(async (url) => {
          const res = await fetch(url);
          const blob = await res.blob();
          return new Promise((resolve) => {
             const reader = new FileReader();
             reader.onloadend = () => resolve(reader.result);
             reader.readAsDataURL(blob);
          });
        }, imgSrc);
        
        const data = base64Img.replace(/^data:image\/\w+;base64,/, "");
        const buf = Buffer.from(data, 'base64');
        
        fs.writeFileSync(path.join(dir, `${b.name}.png`), buf);
        console.log(`[+] Sucesso! Defesa quebrada e imagem salva: ${b.name}.png`);
      } else {
        console.log(`[-] Imagem não encontrada para ${b.name}`);
      }
    } catch (e) {
      console.log(`[x] Falha ao infiltrar ${b.name}: ${e.message}`);
    }
  }
  
  await browser.close();
}

bypass();
