import React from 'react';
import { Skull, Sword, Shield, Crown } from 'lucide-react';

export default function WikiBestiary({ onOpenRecipe }) {
  return (
    <div className="doc-layout" style={{ maxWidth: '100%' }}>
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Skull size={28} /> Bestiário do Warlord
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Estatísticas exatas, mecânicas e espólios dos deuses e feras do servidor.
        </p>
      </div>

      {/* CATACLYSM */}
      <h3 style={{ color: 'var(--danger)', fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--danger)', paddingBottom: '0.5rem' }}>
        L'Ender's Cataclysm
      </h3>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Sword size={24}/> Ignis (O Arauto do Fogo)</h3>
        <p className="doc-text">Localizado nas fornalhas gigantes (Burning Arena) no fundo do Nether.</p>
        <ul className="doc-list">
          <li><strong>HP Máximo:</strong> 450 HP (Sem contar escudos extras no Hard/Warlord).</li>
          <li><strong>Mecânica Focada:</strong> Ele absorve fogo e ataca com espadadas de plasma. Cuidado com o ataque em que ele gira puxando você para o ar.</li>
          <li><strong>Drops Garantidos:</strong> 3x Ignitium Ingots (Essenciais para forjar sua armadura ou espadas finais) e Música.</li>
          <li><strong>Drops Lendários:</strong> The Incinerator (A espada gigante que solta erupções vulcânicas no chão).</li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Shield size={24}/> Netherite Monstrosity</h3>
        <p className="doc-text">O Golem guardião da Soul Blacksmith (Masmorra de Netherite no Nether).</p>
        <ul className="doc-list">
          <li><strong>HP Máximo:</strong> 500 HP. O boss mais tanque do mid-game.</li>
          <li><strong>Mecânica Focada:</strong> Dano puramente físico. Ele soca o chão (Earthquake) causando repulsão em área. Não lute perto de lagos de lava ou você será jogado lá dentro.</li>
          <li><strong>Drops Lendários:</strong> Monstrous Horn (Usado na Infernal Forge para criar a armadura de Ignitium inquebrável) e Infernal Forge.</li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Crown size={24}/> The Harbinger</h3>
        <p className="doc-text">Uma máquina bélica feita de energia Wither nas Ruínas Cidades antigas (Overworld).</p>
        <ul className="doc-list">
          <li><strong>HP Máximo:</strong> 390 HP.</li>
          <li><strong>Mecânica Focada:</strong> Ele voa e dispara o <em>Death Ray</em>, um feixe vermelho constante que varre a sala em um arco horizontal, causando dano extremo (quase impossível de bloquear). Usar vôo (Void Core) para ficar no teto é a única forma de evitar o Raio.</li>
          <li><strong>Drops Lendários:</strong> Wither Assault Shoulder Weapon (Lança-Mísseis Wither acoplável ao jogador).</li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Skull size={24}/> Ender Golem & Guardian</h3>
        <p className="doc-text">A guarda real da Ruined Citadel no The End.</p>
        <ul className="doc-list">
          <li><strong>Mecânica Focada:</strong> Os ataques do Guardian lançam Void Runes que engolem tudo num raio (Mini buracos negros). O dano de gravidade é massivo.</li>
          <li><strong>Drops Lendários:</strong> 
            <button className="craft-btn" onClick={() => onOpenRecipe('void_core')}>Void Core</button>. (Núcleo usado para a Void Forge e itens gravitacionais).
          </li>
        </ul>
      </section>

      {/* MOWZIES MOBS */}
      <h3 style={{ color: 'var(--accent-blue)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', borderBottom: '1px solid var(--accent-blue)', paddingBottom: '0.5rem' }}>
        Mowzie's Mobs
      </h3>

      <section className="doc-section">
        <h3 className="doc-section-title"><Sword size={24}/> Ferrous Wroughtnaut</h3>
        <p className="doc-text">O cavaleiro de aço inquebrável trancado em masmorras no subsolo.</p>
        <ul className="doc-list">
          <li><strong>HP Máximo:</strong> 40 HP (Mas é imune a TODO o dano comum pelas costas ou de frente).</li>
          <li><strong>Mecânica Focada:</strong> Você não pode feri-lo balançando a espada. Provoque-o até ele dar o golpe massivo no chão (O machado fica preso na pedra). Enquanto ele tentar puxar o machado de volta, ataque o núcleo nas costas dele.</li>
          <li><strong>Drops Lendários:</strong> Axe of a Thousand Metals (O Machado Giratório que atinge a área toda em 360 graus) e Wrought Helm.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Crown size={24}/> Frostmaw & Barako</h3>
        <p className="doc-text">Os regentes elementais.</p>
        <ul className="doc-list">
          <li><strong>Frostmaw (Gelo):</strong> Uma besta gigante nos picos nevados (250 HP). Cuidado com o bafo congelante que te tranca num cubo de gelo. Dropa o <em>Ice Crystal</em> (Congela tudo em área ao seu redor).</li>
          <li><strong>Barako (Sol):</strong> O chefe da vila na Savana. Invoca seguidores e solta <em>Solar Beams</em> (Feixes de Luz). Dropa o <em>Sun's Blessing</em>, permitindo invocar sóis bélicos.</li>
        </ul>
      </section>

    </div>
  );
}
