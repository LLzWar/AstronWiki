import React from 'react';
import { Backpack, Sparkles, Factory, Crown, Shield, Zap, Skull, Gem } from 'lucide-react';

export default function WarlordPath({ phase, onOpenRecipe }) {
  if (phase === 'early') {
    return (
      <div className="doc-layout" style={{ maxWidth: '100%' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Backpack size={28} /> Fase 1: Early Game (Sobrevivência & Saque)
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Estabeleça a sua presença no mundo. Foque em mobilidade, estocagem básica e armas rústicas.
          </p>
        </div>

        <section className="doc-section">
          <h3 className="doc-section-title"><Shield size={24}/> As Primeiras Ferramentas (Silent Gear)</h3>
          <p className="doc-text">
            Não desperdice minérios fazendo ferramentas Vanilla. Desde o dia 1, adote o Silent Gear.
          </p>
          <ul className="doc-list">
            <li>Faça Blueprints de Picareta e Espada com Papel.</li>
            <li>Forje suas primeiras armas de Ferro no Silent Gear. Elas terão mais durabilidade e poderão ser consertadas com um <em>Repair Kit</em> na própria mão, sem usar Bigornas.</li>
            <li>Crie sua base próxima a minérios para evoluir logo para o tier de <em>Crimson Steel</em> (se tiver acesso fácil ao Nether).</li>
          </ul>
        </section>

        <section className="doc-section">
          <h3 className="doc-section-title"><Backpack size={24}/> A Revolução do Inventário (Sophisticated Backpacks)</h3>
          <p className="doc-text">
            O ASTRON CITY tem centenas de itens por chunk minerado. Seu inventário não durará 5 minutos.
          </p>
          <ul className="doc-list">
            <li>
              Crie uma 
              <button className="craft-btn" onClick={() => onOpenRecipe('magnet_upgrade')}>Magnet Upgrade</button> básica 
              e equipe na mochila de Ferro. Ela sugará minérios diretamente para a bolsa.
            </li>
            <li>Use <em>Stack Upgrades</em> para carregar packs de Cobblestone ou Terra durante suas explorações.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h3 className="doc-section-title"><Sparkles size={24}/> Cura Primordial (Iron's Spells)</h3>
          <p className="doc-text">
            Para economizar comida (que será escassa), inicie seu treinamento em feitiços de luz divina ou sangue.
          </p>
          <ul className="doc-list">
            <li>Crie o grimório de madeira e uma <em>Inscription Table</em>.</li>
            <li>Encontre pergaminhos (Scrolls) básicos de <em>Heal</em> (Magia Sagrada) ou <em>Blood Needles</em> (Magia de Sangue). Lançar feitiços de cura gasta Mana (que regenera de graça), poupando suas maçãs e bifes para emergências reais.</li>
          </ul>
        </section>
      </div>
    );
  }

  if (phase === 'tech') {
    return (
      <div className="doc-layout" style={{ maxWidth: '100%' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Factory size={28} /> Fase 2: Tech (Revolução Industrial)
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            A fase em que você deixa de minerar com as mãos e passa a esmagar rochas com motores.
          </p>
        </div>

        <section className="doc-section">
          <h3 className="doc-section-title"><Factory size={24}/> Produção em Massa (Create Ecosystem)</h3>
          <p className="doc-text">
            Sua prioridade máxima é multiplicar recursos. Cada minério puro vale o dobro se você esmagá-lo no Create.
          </p>
          <ul className="doc-list">
            <li>Crie uma roda d'água (Water Wheel) e ligue a <em>Mechanical Belts</em>.</li>
            <li>Instale <em>Crushing Wheels</em> para moer minérios brutos de Ferro e Ouro, triplicando o seu rendimento diário.</li>
            <li>Automatize o Latão (Brass) usando um <em>Mechanical Mixer</em> e um <em>Blaze Burner</em>, pavimentando o caminho para os Braços Robóticos e engrenagens inteligentes.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h3 className="doc-section-title"><Zap size={24}/> A Primeira Energia (Powah!)</h3>
          <p className="doc-text">
            Enquanto o Create funciona com força cinética, o restante dos mods exigirá FE (Forge Energy).
          </p>
          <ul className="doc-list">
            <li>
              Crie o seu 
              <button className="craft-btn" onClick={() => onOpenRecipe('thermo_generator')}>Thermo Generator</button> (Tier Starter). 
              Coloque magma embaixo dele e injete água na lateral. Ele gerará energia limpa para sempre, 24 horas por dia.
            </li>
            <li>Inicie a produção de <em>Dielectric Paste</em> misturando carvão e argila, pois você precisará de toneladas dela para os cabos.</li>
          </ul>
        </section>
      </div>
    );
  }

  if (phase === 'magic') {
    return (
      <div className="doc-layout" style={{ maxWidth: '100%' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={28} /> Fase 3: Magic (Domínio Interdimensional)
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Quando as fábricas não são suficientes, a magia corrompe a realidade e centraliza seu poder.
          </p>
        </div>

        <section className="doc-section">
          <h3 className="doc-section-title"><Gem size={24}/> Encantamentos que quebram limites (Apothic Ecosystem)</h3>
          <p className="doc-text">
            As armaduras vanilla já não suportam mais o dano dos mobs do servidor.
          </p>
          <ul className="doc-list">
            <li>Substitua as estantes de livros normais por estantes do The End e Seahelves.</li>
            <li>Eleve sua Eterna para atingir encantamentos Nível 50+. Forje espadas com Sharpness X e armaduras com Protection VIII.</li>
            <li>
              Construa a 
              <button className="craft-btn" onClick={() => onOpenRecipe('library_of_alexandria')}>Library of Alexandria</button> 
              para unificar centenas de livros mágicos que você obteve pescando ou explorando, gerando a "Espada Perfeita".
            </li>
          </ul>
        </section>

        <section className="doc-section">
          <h3 className="doc-section-title"><Crown size={24}/> A Consciência Digital (AE2 & Add-ons)</h3>
          <p className="doc-text">
            Com as automações gerando milhares de itens por hora, baús de diamante viram um problema.
          </p>
          <ul className="doc-list">
            <li>Forje <em>Storage Cells</em> de 64k ou superiores.</li>
            <li>Destrua todos os seus baús e centralize-os em um único <em>Crafting Terminal</em> do AE2.</li>
            <li>
              Use 
              <button className="craft-btn" onClick={() => onOpenRecipe('p2p_tunnel')}>ME P2P Tunnels</button> para 
              levar a capacidade extrema do seu Controller de rede para todos os cômodos da base através de um único cabo.
            </li>
          </ul>
        </section>

        <section className="doc-section">
          <h3 className="doc-section-title"><Skull size={24}/> Armas Místicas e Feitiços Pesados</h3>
          <p className="doc-text">
            Com recursos massivos fluindo, chegou a hora de dominar o verdadeiro dano do Iron's Spells.
          </p>
          <ul className="doc-list">
            <li>Crie Pergaminhos de feitiços nível Épico ou Lendário na <em>Inscription Table</em> (Raio Cósmico, Explosão Estelar).</li>
            <li>Adote uma Armadura de Mago avançada focada num tipo elementar e refine sua mana regen.</li>
          </ul>
        </section>
      </div>
    );
  }

  if (phase === 'late') {
    return (
      <div className="doc-layout" style={{ maxWidth: '100%' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Crown size={28} /> Fase 4: Late Game (A Ascensão aos Deuses)
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Você não é mais um sobrevivente. Você é uma entidade capaz de aniquilar montanhas e deuses.
          </p>
        </div>

        <section className="doc-section">
          <h3 className="doc-section-title"><Shield size={24}/> O Despertar do Dragão (Draconic Evolution)</h3>
          <p className="doc-text">
            O ápice tecnológico absoluto. Para matar os deuses do servidor, armaduras mundanas falham.
          </p>
          <ul className="doc-list">
            <li>Minere <em>Draconium</em> e inicie o ritual de <em>Fusion Crafting</em> usando Injectors massivos.</li>
            <li>
              Forje a armadura Draconic: ela não possui defesa comum. Ela usa uma barra de Escudo que absorve 100% de TODO o dano recebido contanto que você tenha milhões de RF (Energia Powah) fluindo nela.
            </li>
            <li>Construa o Cajado do Poder (Staff of Power), capaz de minerar 9x9 blocos instantaneamente e oblitera chefes com ataques de plasma.</li>
          </ul>
        </section>

        <section className="doc-section">
          <h3 className="doc-section-title"><Skull size={24}/> Caçando Deuses (L'Ender's Cataclysm)</h3>
          <p className="doc-text">
            É hora de testar sua armadura milionária nas maiores masmorras que o jogo pode gerar.
          </p>
          <ul className="doc-list">
            <li>
              Adentre a masmorra de fogo infernal para enfrentar o <em>Ignis</em>. Usando sua armadura Draconic alimentada por 
              <button className="craft-btn" onClick={() => onOpenRecipe('nitro_crystal')}>Cristais Nitro do Powah!</button> no inventário, 
              absorva as erupções vulcânicas do chefe e saqueie *The Incinerator*.
            </li>
            <li>
              Suba ao The End, invada a ruína esquecida e derrote o <em>Ender Golem</em> para forjar o mítico 
              <button className="craft-btn" onClick={() => onOpenRecipe('void_core')}>Void Core</button>, garantindo o controle antigravitacional permanente.
            </li>
            <li>Enfrente The Harbinger. Sobreviva aos ataques a laser (Death Rays) que aniquilam montanhas desviando deles com vôo infinito (gravidade zero).</li>
          </ul>
        </section>
        
        <section className="doc-section warlord-section">
          <h3 className="doc-section-title warlord-title"><Crown size={24}/> A Imortalidade do Warlord</h3>
          <p className="doc-text">
            Com as almas de Deuses em sua parede, uma rede AE2 que conecta todo o multiverso e uma armadura que suga energia infinita de reatores gigantes do Powah... Você zerou a infraestrutura do Astron City.
          </p>
        </section>
      </div>
    );
  }

  return null;
}
