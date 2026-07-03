import React from 'react';
import { Hammer, Wrench, Shield, Pickaxe, Crown } from 'lucide-react';

export default function WikiSilentGear({ onOpenRecipe, onOpenWebJEI }) {
  const JEI = ({ name, id }) => (
    <button className="craft-btn" style={{ padding: '2px 8px', fontSize: '0.85rem', backgroundColor: 'rgba(88,166,255,0.1)', border: '1px solid rgba(88,166,255,0.3)', color: 'var(--accent-blue)' }}
      onClick={(e) => { e.stopPropagation(); onOpenWebJEI?.({ id: id || name.toLowerCase().replace(/ /g, '_'), name }); }}>
      ✨ {name}
    </button>
  );
  return (
    <div className="doc-layout">
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Hammer size={28} /> Silent Gear
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          O sucessor espiritual moderno do clássico Tinker's Construct. Forjando armas e ligas incomparáveis.
        </p>
      </div>

      <section className="doc-section">
        <h3 className="doc-section-title"><Wrench size={24}/> Blueprints e Componentes</h3>
        <p className="doc-text">
          No Silent Gear, ferramentas nunca usam o padrão da bancada vanilla. Elas são desenhadas e modulares.
          As partes de uma picareta se dividem em: Lâmina Principal, Haste (Cabo), Adornos (Tip, Coating, Grip).
        </p>
        <ul className="doc-list">
          <li><strong>Blueprints (Plantas Livro):</strong> Use papel e o molde do item que quer fazer. Depois, aplique os minerais no blueprint.</li>
          <li><strong>Carregamento Noturno:</strong> 
            Você pode fabricar a 
            <button className="craft-btn" onClick={() => onOpenRecipe('starlight_charger')}>Starlight Charger</button>. 
            Deixando minérios cruciais banhados pela energia das estrelas, no teto da sua base (a céu aberto) durante a noite, você cria as ligas mais apelativas da magia (<JEI name="Crimson Steel" /> e <JEI name="Azure Electrum" />).
          </li>
          <li><strong>Repair Kits Rápidos:</strong> Esqueça as Bigornas. Faça um <JEI name="Crimson Steel Repair Kit" />, abra seu inventário 2x2 sem nenhuma bancada e combine o kit com sua picareta quebrada e alguns pedaços de minério. Reparada na hora, gratuitamente.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Shield size={24}/> A Ciência da Sinergia</h3>
        <p className="doc-text">
          Este não é apenas um mod de minérios, é um sistema logístico. Fazer uma picareta de 3 diamantes crus é o pior desperdício de potencial humano.
        </p>
        <ul className="doc-list">
          <li>
            <strong>O multiplicador Sinergia (Synergy):</strong> Se a cabeça de uma picareta for 100% de diamante, sua sinergia é 100. Se você no Blueprint injetar 1 Diamante + 1 Ferro + 1 Ouro, a sinergia sobe para mais de 110%. Isso gera uma ressonância que turbina TODOS os atributos passivos da espada ou ferramenta acima dos valores brutos que ela teria pura!
          </li>
          <li>
            Para amplificar e testar esse bônus, use a 
            <button className="craft-btn" onClick={() => onOpenRecipe('material_grader')}>Material Grader</button>. 
            Ela gasta Glowstone Dust ou pedras similares para "verificar a qualidade" do bloco de minério. Ferros básicos sairão classificados de "E" (lixo) a "SS" e até "MAX". Se você usar pedras de classificação "MAX" na forja, os atributos bônus da arma rompem o limite do servidor.
          </li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Crown size={24}/> Dicas Avançadas do Warlord</h3>
        <p className="doc-text">
          Quando bater em deuses com milhões de HP, atributos numéricos de dano bruto não importam tanto quanto os *Traits* (Traços utilitários):
        </p>
        <ul className="doc-list">
          <li><strong>Não sacrifique Lâminas (Tyrian Steel MAX Grade):</strong> Sua Haste deve ser pura para Dano ou Durabilidade Extrema (<JEI name="Tyrian Steel Ingot" /> MAX). Para atributos engraçadinhos ou convenientes como <em>Indestructible</em> ou <em>Magnetic</em> (que puxa os drops automaticamente de longe), NÃO USE ELES NA LÂMINA PRINCIPAL! Ao invés disso, misture os materiais utilitários nas cordas e adornos secundários do cabo (Tip / Coating). Isso aplica a propriedade mágica sem abaixar a eficiência cortante.</li>
          <li><strong>O Coating (Banho Mágico):</strong> As espadas podem receber um <JEI name="Coating" /> final, um "banho" de material raro de outra dimensão, misturando as defesas. Espadas com Coating de minérios celestiais infligem punições passivas absurdas a chefões.</li>
        </ul>
      </section>
    </div>
  );
}
