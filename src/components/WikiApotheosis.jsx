import React from 'react';
import { Sparkles, Skull, BookOpen, Gem, Crown } from 'lucide-react';

export default function WikiApotheosis({ onOpenRecipe }) {
  return (
    <div className="doc-layout">
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={28} /> Apotheosis
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          O overhaul definitivo de magia, encantamentos e spawners. Quebre os limites do vanilla.
        </p>
      </div>

      <section className="doc-section">
        <h3 className="doc-section-title"><BookOpen size={24}/> A Mesa de Encantamentos (Eterna, Quanta, Arcana)</h3>
        <p className="doc-text">
          Esqueça estantes de livros normais. Apotheosis revoluciona o sistema e permite encantamentos de até nível 100 se você usar estantes de materiais exóticos (End, Nether, Sea).
        </p>
        <ul className="doc-list">
          <li><strong>Eterna:</strong> O nível bruto do encantamento. Quanto mais Eterna, maior o custo de XP, mas libera níveis insanos (ex: Sharpness X).</li>
          <li><strong>Quanta:</strong> A sorte mística. Alto Quanta significa que seu encantamento pode pular níveis acima do prometido (Sharpness XII), ou pode dar terrivelmente errado e te dar Bane of Arthropods I. É o fator de risco.</li>
          <li><strong>Arcana:</strong> Garante que você receberá MÚLTIPLOS encantamentos no mesmo item. Com Arcana 100%, é comum um item sair com 5 encantamentos raros de uma vez.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Skull size={24}/> Hacking de Spawners</h3>
        <p className="doc-text">
          O mod permite usar Silk Touch em Monster Spawners normais e levá-los para sua base. Comprimindo certos materiais no spawner (botão direito), você altera as regras do universo para ele.
        </p>
        <ul className="doc-list">
          <li><strong>Açúcar:</strong> Diminui o delay (tempo de espera) entre os spawns.</li>
          <li><strong>Relógio (Clock):</strong> Ignora as condições de jogadores por perto. O spawner funciona mesmo se você estiver a centenas de blocos.</li>
          <li><strong>Olho de Aranha Fermentado:</strong> Ignora as restrições ambientais (nascer no fogo, no gelo, blocos invisíveis).</li>
          <li><strong>Estrela do Nether:</strong> O Spawner nunca é desativado por sinal de Redstone. Ficará ativo permanentemente.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Gem size={24}/> Afixos e Gemas Místicas</h3>
        <p className="doc-text">
          Ao vagar pelo mundo, você verá mobs gigantes chamados "Affix Bosses". Eles têm barras de vida especiais e dropam loot classificado por raridade (Comum, Épico, Mítico).
        </p>
        <ul className="doc-list">
          <li><strong>Salvaging Table:</strong> Equipamentos velhos e coloridos que você não quer devem ser jogados na Salvaging Table para virarem pó místico.</li>
          <li><strong>Sockets & Gems:</strong> Algumas armas vêm com "furos" (sockets). Você pode acoplar gemas místicas dropadas de chefes para ganhar Velocidade de Ataque, Dano Percentual ou Roubo de Vida gigantesco.</li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Crown size={24}/> Dicas Avançadas do Warlord</h3>
        <p className="doc-text">
          Para atingir o poder divino, pare de encher baús com livros encantados fracos. Faça o upgrade logístico e o refinamento do seu loot:
        </p>
        <ul className="doc-list">
          <li>
            <button className="craft-btn" onClick={() => onOpenRecipe('library_of_alexandria')}>Library of Alexandria</button>: 
            Construa este bloco o mais rápido possível. Insira TODOS os seus livros nela. Ela absorve e "soma" os níveis dos encantamentos. Coloque dez livros <em>Sharpness II</em> e ela permitirá extrair um único <em>Sharpness VI</em> direto pro seu inventário, sem bigornas e sem gastar XP!
          </li>
          <li>
            <strong>Gem Cutting (Lapidação):</strong> Não engaste gemas "Flawed" (defeituosas) na sua espada principal (Ex: The Incinerator). No late-game, leve as gemas normais a uma <em>Gem Cutting Table</em> e use pó de afixo mítico para aprimorá-las ao nível "Perfect". Só assim você alcança +50% Dano Crítico por slot de joia.
          </li>
        </ul>
      </section>
    </div>
  );
}
