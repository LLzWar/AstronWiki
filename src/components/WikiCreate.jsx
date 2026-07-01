import React from 'react';
import { Settings, Droplets, Wind, Flame, Crown } from 'lucide-react';

export default function WikiCreate({ onOpenRecipe }) {
  return (
    <div className="doc-layout">
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Settings size={28} /> Create
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          A revolução industrial estética. Engrenagens, trens e automação mecânica.
        </p>
      </div>

      <section className="doc-section">
        <h3 className="doc-section-title"><Wind size={24}/> Força Cinética (Stress Capacity)</h3>
        <p className="doc-text">
          No Create, você não usa energia elétrica. Tudo é movido por força cinética, medida em SU (Stress Units). Cada motor gera uma quantidade, e cada máquina consome.
        </p>
        <ul className="doc-list">
          <li><strong>Water Wheel:</strong> A roda d'água é sua primeira fonte de força. Funciona melhor com água fluindo em volta dela.</li>
          <li><strong>Windmill:</strong> O moinho de vento. Requer <em>Windmill Bearing</em> e muitas velas (sails). Quanto mais velas, mais força ele gera.</li>
          <li><strong>Steam Engine:</strong> O ápice da energia mecânica. Requer aquecimento (caldeiras) e água constante. Produz milhões de SU.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Settings size={24}/> Mecânicas de Rotação</h3>
        <p className="doc-text">
          Levar a força do motor até a máquina requer cuidado com os eixos e a velocidade de rotação.
        </p>
        <ul className="doc-list">
          <li><strong>Gearbox:</strong> Ferramenta essencial. Permite curvar o eixo de rotação em 90 graus. Reverte a direção de rotação da saída em relação à entrada.</li>
          <li><strong>Rotation Speed Controller:</strong> Permite acelerar ou desacelerar uma linha de eixos perfeitamente. Aumentar a velocidade das máquinas consome muito mais SU proporcionalmente.</li>
          <li><strong>Engineer's Goggles:</strong> NUNCA jogue sem este óculos equipado. Ele é a única forma de ver na sua tela (HUD) o SU restante em uma rede e quanto uma máquina consome.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Flame size={24}/> A Era do Latão (Brass)</h3>
        <p className="doc-text">
          Para criar máquinas verdadeiramente inteligentes (Filtros, Braços Robóticos, Deployers lógicos), você precisa de Latão (Brass), a liga metálica fundamental do mid-game.
        </p>
        <ul className="doc-list">
          <li>
            Para automatizar ligas você precisará do 
            <button className="craft-btn" onClick={() => onOpenRecipe('mechanical_mixer')}>Mechanical Mixer</button>. Coloque-o pendurado sobre uma <em>Basin</em> (Bacia).
          </li>
          <li>Coloque Cobre e Zinco na Bacia.</li>
          <li>Aqueça a bacia usando um <em>Blaze Burner</em> embaixo dela (você precisa capturar um Blaze nele).</li>
          <li>Forneça força cinética ao Mixer. Ele descerá e misturará os minérios fundidos, criando o Brass.</li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Crown size={24}/> Dicas Avançadas do Warlord</h3>
        <p className="doc-text">
          A verdadeira progressão late-game do Create reside na <strong>Logística de Trens Automáticos</strong>. Para montar redes infalíveis e transcontinentais:
        </p>
        <ul className="doc-list">
          <li>
            <button className="craft-btn" onClick={() => onOpenRecipe('chain_signal')}>Chain Signals</button>: 
            Sinais normais de trem evitam colisões em linha reta. Mas nunca construa cruzamentos em "X" sem usar Chain Signals na entrada! O Chain Signal verifica se a SAÍDA do cruzamento está livre antes de deixar o trem entrar. Sem isso, um trem grande pode parar no meio do cruzamento e bloquear a rede inteira para sempre.
          </li>
          <li><strong>O Pathfinder Drill (Broca Corta-Mapas):</strong> Quando quiser levar trilhos a milhares de blocos de distância, monte um trem focado em engenharia: instale <em>Deployers</em> virados para baixo (alimentados com trilhos) e uma parede frontal absurda de <em>Mechanical Drills</em>. Você senta no trem, acelera, e ele destruirá literalmente qualquer montanha na sua frente pavimentando os trilhos atrás dele automaticamente!</li>
        </ul>
      </section>
    </div>
  );
}
