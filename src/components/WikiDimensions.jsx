import React from 'react';
import { Compass, Flame, Box, Zap, Map } from 'lucide-react';

export default function WikiDimensions({ onOpenRecipe }) {
  return (
    <div className="doc-layout" style={{ maxWidth: '100%' }}>
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Map size={28} /> Guia de Dimensões & Exploração
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          O terreno no Astron City não perdoa erros. Como navegar as dimensões sem perder sua base.
        </p>
      </div>

      <section className="doc-section">
        <h3 className="doc-section-title"><Flame size={24}/> The Nether (Profundezas Corrompidas)</h3>
        <p className="doc-text">
          O Nether clássico não existe mais. Ele é regido pelas gerações monstruosas do <em>MyNether's Delight</em> e pelas colossais construções do <em>Cataclysm</em>.
        </p>
        <ul className="doc-list">
          <li><strong>Soul Blacksmith:</strong> Uma forja massiva incrustada nos paredões do Nether (feita de Blackstone). É o lar da <em>Netherite Monstrosity</em>. Para encontrá-la, negocie com Piglins até dropar ouro em pó, ou explore a superfície dos biomas de Soul Sand.</li>
          <li><strong>Burning Arena (O Altar de Ignis):</strong> O núcleo do fogo. Se você encontrar blocos maciços avermelhados protegidos por Berserkers Flamejantes e poços de lava gigantes, você encontrou a masmorra de Ignis. Fica sempre nas profundezas mais baixas.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Box size={24}/> The End (Vazio Fragmentado)</h3>
        <p className="doc-text">
          Não pule no portal achando que só matará o dragão. O The End é onde o late-game começa.
        </p>
        <ul className="doc-list">
          <li><strong>Ruined Citadel:</strong> Uma cidade em ruínas, muito superior à End City original. Lar do <em>Ender Golem</em> e <em>Ender Guardian</em>. Usar asas (Elytra) é perigoso devido aos feixes magnéticos do Guardian, que te prendem no ar.</li>
          <li><strong>Ender's Delight:</strong> Se estiver passando fome no The End, procure pelos arbustos alienígenas e carnes dos novos tipos de Shulkers para sobreviver indefinidamente lá.</li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Compass size={24}/> Dicas Avançadas: Radar e Chunk Loading</h3>
        <p className="doc-text">
          Exploradores morrem e perdem semanas de avanço porque não sabem cruzar as dimensões mantendo a base segura.
        </p>
        <ul className="doc-list">
          <li><strong>Nature's Compass:</strong> Está perdido e precisa achar uma Savana (para encontrar o Barako) ou picos nevados (Frostmaw)? Faça uma <em>Nature's Compass</em>. Ela scaneia o mundo e aponta a direção e a distância exata de qualquer bioma do jogo.</li>
          <li>
            <button className="craft-btn" onClick={() => onOpenRecipe('quantum_ring')}>Quantum Bridge (Interdimensional)</button>: 
            A pior coisa de ir pro The End é não ter os blocos que você deixou no baú em casa. Construindo uma Ponte Quântica na sua base e levando a contraparte para a dimensão, você puxa todo o seu inventário (via cabo AE2) cruzando mundos.
          </li>
        </ul>
      </section>
    </div>
  );
}
