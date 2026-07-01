import React from 'react';
import { BatteryCharging, Zap, Thermometer, Radio, Crown } from 'lucide-react';

export default function WikiPowah({ onOpenRecipe }) {
  return (
    <div className="doc-layout">
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={28} /> Powah!
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Mecânica de energia elétrica em escala industrial. Baterias massivas, Reatores Nucleares e Wi-Fi elétrico.
        </p>
      </div>

      <section className="doc-section">
        <h3 className="doc-section-title"><Thermometer size={24}/> Progressão e Tiers</h3>
        <p className="doc-text">
          No Powah, os geradores, baterias e cabos não são "um único bloco final". Eles possuem <strong>Tiers de evolução contínua</strong>.
          Tudo começa no Tier "Starter" (Pedra) e sobe até o absurdo tier "Nitro". Cada vez que você forja um tier superior, a capacidade e a eficiência pulam de forma absurda.
        </p>
        <ul className="doc-list">
          <li><strong>Energizing Orb:</strong> Esta é a "forja elétrica". Você bota itens nela, aponta lasers para o Orb e ele condensa eletricidade no item, forjando os minerais raros do Powah!.</li>
          <li><strong>Dielectric Paste:</strong> Você gastará dezenas de milhares deste material. A massa base (feita derretendo carvão no barro). Sempre mantenha a produção ativa.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><BatteryCharging size={24}/> Reatores e Geradores de Massa</h3>
        <p className="doc-text">
          Esqueça fornalhas a carvão. O mundo de Powah oferece as fontes absolutas de infraestrutura pesada.
        </p>
        <ul className="doc-list">
          <li>
            A máquina primordial é o 
            <button className="craft-btn" onClick={() => onOpenRecipe('thermo_generator')}>Thermo Generator</button>. 
            Ele requer um bloco quente LOGO ABAIXO dele (Magma, Blazing Crystal Block, etc) e a entrada contínua de fluidos (Água) para resfriar a placa. Em Tiers médios para cima, apenas 4 deles ligados lado a lado e bem nutridos de calor e água alimentam uma base inteira sem consumir absolutamente nada do seu inventário de minérios.
          </li>
          <li>
            <strong>Reactor:</strong> O Multi-Bloco supremo do jogo. A maravilha que consome o minério verde chamado <strong>Uraninite</strong>. Gera quantidades imensas de poder, mas se você esquecer de fornecer Gelo/Água constante, ele vai gerar problemas gravíssimos.
          </li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Crown size={24}/> Dicas Avançadas do Warlord</h3>
        <p className="doc-text">
          Quando o seu equipamento e sua armadura começam a exigir dezenas de milhões de RF por segundo (ex: Draconic Armor e Meka-Suit), o Powah! é a resposta de infraestrutura.
        </p>
        <ul className="doc-list">
          <li>
            <strong>Automação do Nitro:</strong> 
            Para chegar ao topo da pirâmide bélica, você precisará do 
            <button className="craft-btn" onClick={() => onOpenRecipe('nitro_crystal')}>Nitro Crystal</button>. 
            Fazer um exige inserir Nether Stars e injetar absurdos 20.000.000 FE por item. Automatize isso colocando a sua <em>Energizing Orb</em> ligada à rede AE2: conecte um Export Bus fornecendo estrelas na parte de cima, e um Funil (Hopper) embaixo do Orb puxando apenas quando o item terminar de ser eletrificado.
          </li>
          <li>
            <strong>Wireless Interdimensional (Ender Gates):</strong> 
            Cabos de energia são péssimos a longa distância, causam lag no servidor. O Warlord constrói pares de <em>Ender Gates</em> (ou Ender Cells) configurados no mesmo canal criptografado. Um fica na parede da sua Sala de Reatores base, o outro você carrega na mochila e joga no chão ao lado de uma <em>Quarry</em> (Escavadeira) lá na dimensão de mineração, e ela sugará a energia infinita instantaneamente, cortando as barreiras físicas do mapa!
          </li>
        </ul>
      </section>
    </div>
  );
}
