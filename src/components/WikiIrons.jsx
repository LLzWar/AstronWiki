import React from 'react';
import { Book, Wand2, Shield, Flame, Crown } from 'lucide-react';

export default function WikiIrons({ onOpenRecipe }) {
  return (
    <div className="doc-layout">
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Book size={28} /> Iron's Spells 'n Spellbooks
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          O sistema clássico de RPG. Fogo, Raio, Gelo, Sangue e magias divinas em grimórios densos.
        </p>
      </div>

      <section className="doc-section">
        <h3 className="doc-section-title"><Wand2 size={24}/> Criando o seu Spell Book</h3>
        <p className="doc-text">
          Você não conjura feitiços pelas mãos, você precisa de um grimório focado na sua cintura e mana.
        </p>
        <ul className="doc-list">
          <li>
            Faça um 
            <button className="craft-btn" onClick={() => onOpenRecipe('iron_spell_book')}>Iron Spell Book</button> 
            básico para poder armazenar magias.
          </li>
          <li>
            Faça uma 
            <button className="craft-btn" onClick={() => onOpenRecipe('inscription_table')}>Inscription Table</button>. 
            É nela que você insere o livro e "escreve" as magias que encontrou no mundo.
          </li>
          <li>A Armadura do mod (ex: Wandering Magician) provê muito bônus de Mana Máxima e Regeneração.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Flame size={24}/> A Caçada aos Scrolls</h3>
        <p className="doc-text">
          Feitiços são aprendidos lendo Scrolls (Pergaminhos). Eles são craftados com Tinta Mágica em bancadas próprias, ou saqueados em Dungeons de Magos.
        </p>
        <ul className="doc-list">
          <li><strong>Raridade dita o nível:</strong> Você não pode criar uma magia de nível Épico usando tinta Comum. Você precisa de tintas mais raras.</li>
          <li><strong>Extração:</strong> Se você achar um scroll raro de Gelo, mas você só foca em Fogo, esmague o scroll no chão ou na bancada de reciclagem para extrair a tinta. Use essa tinta extraída para forjar o pergaminho de Fogo equivalente.</li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Crown size={24}/> Dicas Avançadas do Warlord</h3>
        <p className="doc-text">
          Em batalhas de proporções apocalípticas (como contra os Deuses de L'Ender's Cataclysm), o seu limite de Mana e regeneração sempre serão um problema constante. A barreira arcana será rompida com as táticas abaixo:
        </p>
        <ul className="doc-list">
          <li>
            <button className="craft-btn" onClick={() => onOpenRecipe('blood_step')}>Blood Magic (Sacrifício Vital)</button>: 
            A escola de sangue usa magias que **não gastam Mana, gastam o seu HP (Vida)**! Como um Warlord, você estará constantemente sendo curado pela sua Mochila de Auto-Alimentação ou poções absurdas. Você pode conjurar feitiços como <em>Blood Needles</em> e <em>Ray of Siphoning</em> indefinidamente trocando o excesso de HP por dano brutal quando sua barra de Mana seca.
          </li>
          <li>
            <strong>Sinergia de Foco Arcana:</strong> Ser mestre de todas as escolas é pedir para ser morto contra deuses. Escolha UMA escola primária. Use o set de armadura correspondente (Ex: Cultist Armor foca 100% em Blood Magic) e joias de curios com afixos que buffam essa escola específica. Isso fará seu <em>Blood Step</em> recarregar instantaneamente e seus danos críticos dispararem.
          </li>
        </ul>
      </section>
    </div>
  );
}
