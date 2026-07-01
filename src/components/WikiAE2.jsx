import React from 'react';
import { Database, Zap, Cpu, Network, Crown } from 'lucide-react';

export default function WikiAE2({ onOpenRecipe }) {
  return (
    <div className="doc-layout">
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Database size={28} /> Applied Energistics 2
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          O ápice do armazenamento digital e automação logística. Transforme seus 500 baús em um único terminal de pesquisa instantânea.
        </p>
      </div>

      <section className="doc-section">
        <h3 className="doc-section-title"><Network size={24}/> Primeiros Passos (Meteoritos)</h3>
        <p className="doc-text">
          O AE2 exige que você encontre peças raras de tecnologia alienígena antes de começar a montar sua rede.
          Você deve criar um Meteorite Compass para localizar crateras de meteoros geradas pelo mapa.
        </p>
        <ul className="doc-list">
          <li><strong>O Baú Central:</strong> Cave até o centro do meteoro (o Skystone é muito duro de quebrar) para achar um báu escondido contendo as famosas Inscriber Presses. Elas são os moldes para seus processadores lógicos.</li>
          <li><strong>Fluix Crystals:</strong> Para criar as sementes que formam os cabos do sistema, você não usa a bancada. Jogue na água: 1 Redstone, 1 Nether Quartz e 1 Charged Certus Quartz. O choque entre eles vai criar o Fluix Crystal.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Cpu size={24}/> Configurando a Rede Básica</h3>
        <p className="doc-text">
          Para criar um inventário digital sem usar um ME Controller (que exige recursos absurdos iniciais), você precisa fornecer energia e espaço em disco.
        </p>
        <ul className="doc-list">
          <li>
            <button className="craft-btn" onClick={() => onOpenRecipe('energy_acceptor')}>Energy Acceptor</button>: 
            O AE2 usa sua própria energia (AE), portanto você precisa deste bloco para receber energia de outros mods (como o Powah ou Create) e convertê-la.
          </li>
          <li>
            <button className="craft-btn" onClick={() => onOpenRecipe('me_drive')}>ME Drive</button>: 
            O cérebro de armazenamento. Sozinho não faz nada, mas possui 10 gavetas para você inserir Discos de Armazenamento (Storage Cells de 1k, 4k, 16k...).
          </li>
          <li>
            <strong>Crafting Terminal:</strong> Conecte-o ao Drive usando um Glass Cable. É a sua "tela do computador" onde você pesquisa, pega itens e usa uma bancada de trabalho embutida 3x3 que já puxa itens da rede.
          </li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Crown size={24}/> Dicas Avançadas do Warlord</h3>
        <p className="doc-text">
          Um cabo normal do AE2 (Glass Cable) suporta apenas 8 "Canais" (Channels). Um cabo grosso (Dense Cable) suporta 32 canais. 
          Se você ligar 33 máquinas na sua rede, tudo desliga. Para contornar esse limite em bases gigantescas sem fazer uma teia de aranha de cabos grossos, use tecnologia avançada:
        </p>
        <ul className="doc-list">
          <li>
            <button className="craft-btn" onClick={() => onOpenRecipe('p2p_tunnel')}>ME P2P Tunnel</button> (A Mágica da Densidade): 
            Coloque túneis P2P diretamente nas faces do seu ME Controller. Copie o código de um túnel de Entrada com um Memory Card (Shift+Right-Click) e cole em um túnel de Saída. Isso permite encapsular <strong>32 cabos densos (1024 canais)</strong> através de um <em>único cabo genérico</em>, descompactando-os do outro lado da base. É a engenharia definitiva.
          </li>
          <li>
            <button className="craft-btn" onClick={() => onOpenRecipe('quantum_ring')}>Quantum Network Bridge</button>: 
            Uma estrutura 3x3 com 8 Quantum Rings conectada com uma Quantum Entangled Singularity. Permite que a sua rede AE2 cruze dimensões. Você pode colocar uma ponta na sua base e a outra ponta no The End, e acessar todo o seu inventário de lá. <strong>Aviso:</strong> Ambas as pontas da ponte devem estar Chunk-loaded (carregadas no servidor) ou a conexão cairá.
          </li>
        </ul>
      </section>
    </div>
  );
}
