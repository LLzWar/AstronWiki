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

      <section className="doc-section warlord-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="doc-section-title warlord-title"><Sword size={24}/> Ignis (O Arauto do Fogo)</h3>
          <p className="doc-text">Localizado nas fornalhas gigantes (Burning Arena) no fundo do Nether.</p>
          <ul className="doc-list">
            <li><strong>HP Máximo:</strong> 450 HP (Sem contar escudos extras no Hard/Warlord).</li>
            <li><strong>Localizador (Eye):</strong> <button className="craft-btn" onClick={() => onOpenRecipe('eye_of_flame')}>Eye of Flame</button> (Localiza a Burning Arena).</li>
            <li><strong>Mecânica Focada:</strong> Ele absorve fogo e ataca com espadadas de plasma. Cuidado com o ataque em que ele gira puxando você para o ar.</li>
            <li><strong>Drops Garantidos:</strong> 3x Ignitium Ingots (Essenciais para forjar sua armadura ou espadas finais) e Música.</li>
            <li><strong>Drops Lendários:</strong> The Incinerator (A espada gigante que solta erupções vulcânicas no chão).</li>
          </ul>
        </div>
        <img src="/assets/bosses/ignis.png" alt="Ignis" style={{ width: '280px', height: 'auto', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 10px rgba(255, 60, 0, 0.5))' }} />
      </section>

      <section className="doc-section warlord-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="doc-section-title warlord-title"><Shield size={24}/> Netherite Monstrosity</h3>
          <p className="doc-text">O Golem guardião da Soul Blacksmith (Masmorra de Netherite no Nether).</p>
          <ul className="doc-list">
            <li><strong>HP Máximo:</strong> 500 HP. O boss mais tanque do mid-game.</li>
            <li><strong>Localizador (Eye):</strong> <button className="craft-btn" onClick={() => onOpenRecipe('eye_of_monstrous')}>Eye of Monstrous</button> (Localiza a Soul Blacksmith).</li>
            <li><strong>Mecânica Focada:</strong> Dano puramente físico. Ele soca o chão (Earthquake) causando repulsão em área. Não lute perto de lagos de lava ou você será jogado lá dentro.</li>
            <li><strong>Drops Garantidos:</strong> Netherite Ingots e Soul Sand.</li>
            <li><strong>Drops Lendários:</strong> Monstrous Horn (Usado na Infernal Forge para criar a armadura de Ignitium inquebrável) e Infernal Forge.</li>
          </ul>
        </div>
        <img src="/assets/bosses/netherite_monstrosity.png" alt="Netherite Monstrosity" style={{ width: '280px', height: 'auto', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 10px rgba(100, 100, 100, 0.8))' }} />
      </section>

      <section className="doc-section warlord-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="doc-section-title warlord-title"><Crown size={24}/> The Harbinger</h3>
          <p className="doc-text">Uma máquina bélica feita de energia Wither nas Ruínas Cidades antigas (Overworld).</p>
          <ul className="doc-list">
            <li><strong>HP Máximo:</strong> 390 HP.</li>
            <li><strong>Localizador (Eye):</strong> <button className="craft-btn" onClick={() => onOpenRecipe('eye_of_mech')}>Eye of Mech</button> (Localiza a Ancient Factory).</li>
            <li><strong>Mecânica Focada:</strong> Ele voa e dispara o <em>Death Ray</em>, um feixe vermelho constante que varre a sala em um arco horizontal, causando dano extremo (quase impossível de bloquear). Usar vôo (Void Core) para ficar no teto é a única forma de evitar o Raio.</li>
            <li><strong>Drops Garantidos:</strong> Witherite Ingots.</li>
            <li><strong>Drops Lendários:</strong> Wither Assault Shoulder Weapon (Lança-Mísseis Wither acoplável ao jogador).</li>
          </ul>
        </div>
        <img src="/assets/bosses/harbinger.png" alt="The Harbinger" style={{ width: '280px', height: 'auto', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 10px rgba(200, 0, 50, 0.6))' }} />
      </section>

      <section className="doc-section warlord-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="doc-section-title warlord-title"><Skull size={24}/> Ender Golem</h3>
          <p className="doc-text">O guardião de elite da Ruined Citadel no The End.</p>
          <ul className="doc-list">
            <li><strong>HP Máximo:</strong> 150 HP.</li>
            <li><strong>Localizador (Eye):</strong> <button className="craft-btn" onClick={() => onOpenRecipe('eye_of_void')}>Eye of Void</button> (Localiza a Ruined Citadel).</li>
            <li><strong>Mecânica Focada:</strong> Muito ágil e ataca fisicamente com alta precisão e repulsão. Ocasionalmente invoca escudos. Bater nele sem quebrar as defesas não surtirá muito efeito.</li>
            <li><strong>Drops Garantidos:</strong> Void Core e Ender Golem Horn.</li>
          </ul>
        </div>
        <img src="/assets/bosses/ender_golem.png" alt="Ender Golem" style={{ width: '280px', height: 'auto', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 10px rgba(150, 0, 255, 0.5))' }} />
      </section>

      <section className="doc-section warlord-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="doc-section-title warlord-title"><Skull size={24}/> Ender Guardian</h3>
          <p className="doc-text">O Lorde da gravidade no topo da Ruined Citadel.</p>
          <ul className="doc-list">
            <li><strong>Localizador (Eye):</strong> <button className="craft-btn" onClick={() => onOpenRecipe('eye_of_void')}>Eye of Void</button> (Localiza a Ruined Citadel).</li>
            <li><strong>Mecânica Focada:</strong> Os ataques do Guardian lançam Void Runes que engolem tudo num raio (Mini buracos negros). O dano de gravidade é massivo e ele usa ataques em área difíceis de desviar.</li>
            <li><strong>Drops Lendários:</strong> 
              <button className="craft-btn" onClick={() => onOpenRecipe('void_core')} style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}>Void Core</button> e Gauntlet of Guard.
            </li>
          </ul>
        </div>
        <img src="/assets/bosses/ender_guardian.png" alt="Ender Guardian" style={{ width: '280px', height: 'auto', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 10px rgba(200, 50, 255, 0.5))' }} />
      </section>

      <section className="doc-section warlord-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="doc-section-title warlord-title"><Crown size={24}/> The Leviathan</h3>
          <p className="doc-text">A besta abissal da Sunken City, submersa no oceano.</p>
          <ul className="doc-list">
            <li><strong>Localizador (Eye):</strong> <button className="craft-btn" onClick={() => onOpenRecipe('eye_of_abyss')}>Eye of Abyss</button> (Localiza a Sunken City).</li>
            <li><strong>Mecânica Focada:</strong> Um combate inteiramente aquático. Ele possui ataques de mordida massivos e feixes abissais, além de invocar armadilhas submarinas. Mobilidade debaixo d'água é obrigatória (Depths Riser ou Magia Aquática).</li>
            <li><strong>Drops Garantidos:</strong> Abyssal Egg.</li>
            <li><strong>Drops Lendários:</strong> Tidal Claws e The Leviathan's Tooth.</li>
          </ul>
        </div>
        <img src="/assets/bosses/leviathan.png" alt="The Leviathan" style={{ width: '280px', height: 'auto', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 10px rgba(0, 150, 255, 0.5))' }} />
      </section>

      <section className="doc-section warlord-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="doc-section-title warlord-title"><Shield size={24}/> Ancient Remnant</h3>
          <p className="doc-text">A fera ancestral adormecida nas profundezas das Cavernas.</p>
          <ul className="doc-list">
            <li><strong>Localizador (Eye):</strong> <button className="craft-btn" onClick={() => onOpenRecipe('eye_of_desert')}>Eye of Desert</button> (Localiza a Cursed Pyramid).</li>
            <li><strong>Mecânica Focada:</strong> Muito focado em dano sísmico. Semelhante ao Monstrosity, ele usa ondas de choque e tempestades de areia no local. É altamente resistente a projéteis.</li>
            <li><strong>Drops Garantidos:</strong> Desert Core e Ancient Metal.</li>
            <li><strong>Drops Lendários:</strong> Sandstorm in a Bottle e Remnant Skull.</li>
          </ul>
        </div>
        <img src="/assets/bosses/ancient_remnant.png" alt="Ancient Remnant" style={{ width: '280px', height: 'auto', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 10px rgba(255, 200, 50, 0.5))' }} />
      </section>

      {/* MOWZIES MOBS */}
      <h3 style={{ color: 'var(--accent-blue)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', borderBottom: '1px solid var(--accent-blue)', paddingBottom: '0.5rem' }}>
        Mowzie's Mobs
      </h3>

      <section className="doc-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="doc-section-title"><Sword size={24}/> Ferrous Wroughtnaut</h3>
          <p className="doc-text">O cavaleiro de aço inquebrável trancado em masmorras no subsolo.</p>
          <ul className="doc-list">
            <li><strong>HP Máximo:</strong> 40 HP (Mas é imune a TODO o dano comum pelas costas ou de frente).</li>
            <li><strong>Mecânica Focada:</strong> Você não pode feri-lo balançando a espada. Provoque-o até ele dar o golpe massivo no chão (O machado fica preso na pedra). Enquanto ele tentar puxar o machado de volta, ataque o núcleo nas costas dele.</li>
            <li><strong>Drops Lendários:</strong> Axe of a Thousand Metals (O Machado Giratório que atinge a área toda em 360 graus) e Wrought Helm.</li>
          </ul>
        </div>
        <img src="/assets/bosses/wroughtnaut.png" alt="Ferrous Wroughtnaut" style={{ width: '280px', height: 'auto', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))' }} />
      </section>

      <section className="doc-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="doc-section-title"><Crown size={24}/> Frostmaw & Barako</h3>
          <p className="doc-text">Os regentes elementais.</p>
          <ul className="doc-list">
            <li><strong>Frostmaw (Gelo):</strong> Uma besta gigante nos picos nevados (250 HP). Cuidado com o bafo congelante que te tranca num cubo de gelo. Dropa o <em>Ice Crystal</em> (Congela tudo em área ao seu redor).</li>
            <li><strong>Barako (Sol):</strong> O chefe da vila na Savana. Invoca seguidores e solta <em>Solar Beams</em> (Feixes de Luz). Dropa o <em>Sun's Blessing</em>, permitindo invocar sóis bélicos.</li>
          </ul>
        </div>
        <img src="/assets/bosses/frostmaw.png" alt="Frostmaw" style={{ width: '280px', height: 'auto', objectFit: 'contain', borderRadius: '8px', filter: 'drop-shadow(0 0 10px rgba(0, 200, 255, 0.5))' }} />
      </section>

    </div>
  );
}
