import React from 'react';
import { Skull, Flame, Castle, Sword, Crown } from 'lucide-react';

export default function WikiCataclysm({ onOpenRecipe }) {
  return (
    <div className="doc-layout">
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Skull size={28} /> L'Ender's Cataclysm
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Chefes colossais de estilo Souls-like e as masmorras finais que governam as dimensões.
        </p>
      </div>

      <section className="doc-section">
        <h3 className="doc-section-title"><Castle size={24}/> Altares e Deuses</h3>
        <p className="doc-text">
          O Cataclysm adiciona estruturas arquitetônicas massivas (Dungeons) e Deuses apocalípticos espalhados pelos mundos.
        </p>
        <ul className="doc-list">
          <li><strong>Ignis (Nether):</strong> O mestre do fogo, localizado nas fornalhas maciças no fundo do Nether. Luta com uma enorme lâmina incandescente e puxa jogadores pelo ar.</li>
          <li><strong>Netherite Monstrosity:</strong> Encontrada no Soul Blacksmith. É um golem colossal forjado na escuridão. Cuidado com o terremoto.</li>
          <li><strong>Ender Golem & Ender Guardian:</strong> Os deuses do The End. Controlam os blocos do Vazio e exigem atenção para não ser arremessado no abismo (Void) instantaneamente.</li>
          <li><strong>The Harbinger:</strong> A entidade bélica suprema armada com tecnologia Wither. Seus raios aniquilam tudo em volta.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Sword size={24}/> Armas Lendárias e Espólios</h3>
        <p className="doc-text">
          Matar deuses recompensa com o gear mais intimidador do jogo inteiro.
        </p>
        <ul className="doc-list">
          <li><strong>The Incinerator:</strong> Drop direto do Ignis. Uma espada colossal, lenta, porém capaz de golpear o chão evocando erupções em linha reta iguais aos poderes originais do chefe.</li>
          <li><strong>Void Core:</strong> O fragmento instável do fim (Drop). É essencial usá-lo para forjar armaduras ou equipamentos gravitacionais, permitindo que você ignore dano de queda ou voe.</li>
          <li><strong>Infernal Forge:</strong> A forja profana. Você usa os minérios e chifres obtidos nessas masmorras misturados ao clássico Netherite para criar armaduras inquebráveis.</li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Crown size={24}/> Dicas Avançadas do Warlord</h3>
        <p className="doc-text">
          Lutar contra esses deuses requer mecânicas que a força bruta não resolve. Um guerreiro de endgame se adapta ao ambiente do chefe:
        </p>
        <ul className="doc-list">
          <li>
            <strong>Verticalidade (The Harbinger):</strong> O Harbinger é notório por um ataque horizontal devastador (Death Ray), um feixe de plasma que extermina tudo e ignora escudos mundanos. Ficar no chão é morte na certa. O Warlord entra na arena usando poções prolongadas de <em>Slow Falling</em> e ativa o poder gravitacional da armadura de 
            <button className="craft-btn" onClick={() => onOpenRecipe('void_core')}>Void Core (Pulo Duplo Avançado)</button> 
            para se manter no ar atirando magia (ou flechas cósmicas) de cima.
          </li>
          <li>
            <strong>Farming de Altares:</strong> Diferente de chefes que somem pra sempre, você pode reconstruir o pilar de convocação (Shrine) para enfrentar os deuses repetidas vezes e pegar todo o set para sua facção no servidor. Ao construir a arena para reviver o Ignis repetidas vezes, faça o piso inteiro e o teto da sala de <strong>Obsidian Duplo</strong>, ou a masmorra deixará de existir após a segunda luta devido ao dano destrutivo ambiental.
          </li>
        </ul>
      </section>
    </div>
  );
}
