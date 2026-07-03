import React from 'react';
import { Backpack, Heart, Crown } from 'lucide-react';

export default function WikiBackpacks({ onOpenRecipe }) {
  return (
    <div className="doc-layout">
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Backpack size={28} /> Sophisticated Backpacks
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          O sistema de inventário modular. Mochilas blindadas, com inteligência artificial e purificadoras automáticas.
        </p>
      </div>

      <section className="doc-section">
        <h3 className="doc-section-title"><Backpack size={24}/> Progressão e Nesting</h3>
        <p className="doc-text">
          Uma mochila não é um mero baú pendurado, ela possui slots lógicos onde você insere chips eletrônicos e mágicos ("Upgrades") que fazem ela se comportar como um assistente invisível durante o gameplay.
        </p>
        <ul className="doc-list">
          <li><strong>Evolução:</strong> Você inicia com uma mochila de Couro (fraca). Você usa upgrades diretos (Ferro, Ouro, Diamante e Netherite) em cima dela. No nível Netherite ela possui páginas colossais e dezenas de slots modulares para placas eletrônicas.</li>
          <li><strong>Nesting (Aviso):</strong> Colocar mochilas dentro de outras mochilas. Muito cuidado ao abusar disso no nível Netherite: empacotar milhões de itens recursivamente pode dar Timeout (Crashar) o servidor ao tentar ler todos os bytes comprimidos. Cuidado.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3 className="doc-section-title"><Heart size={24}/> A Trindade de Batalha (Warlord's Kit)</h3>
        <p className="doc-text">
          Se você quer encarar centenas de mobs em masmorras infernais, não perca tempo selecionando maçãs ou pegando lixo do chão. Use a mecânica sagrada de três slots:
        </p>
        <ul className="doc-list">
          <li>
            <strong style={{color: 'var(--accent-blue)'}}>1. The Magnet:</strong> 
            Você deve investir rapidamente num 
            <button className="craft-btn" onClick={() => onOpenRecipe('magnet_upgrade')}>Magnet Upgrade</button>. 
            Ele anula a necessidade de encostar em itens, sugando todo o loot num raio gigante da arena para dentro da mochila enquanto você está matando.
          </li>
          <li>
            <strong style={{color: '#da3633'}}>2. The Void (Destruidor):</strong> 
            A pior coisa que pode acontecer ao usar ímãs em masmorras é a mochila entupir com Carne Podre, Terra e Ossos. A solução é o <em>Void Upgrade</em>: abra o filtro dele, insira os blocos que você considera "Lixo". Assim que entrarem, o Void destruirá o item instantaneamente da matriz, sem ocupar espaço da mochila.
          </li>
          <li>
            <strong style={{color: '#2ea043'}}>3. Auto-Feeding Upgrade:</strong> 
            Não aperte o número 9 para comer uma Maçã Dourada encantada enquanto foge de ataques elétricos. Configure este upgrade para a sua comida suprema ou poções de cura instantânea. A mochila alimentará você invisivelmente assim que o seu HP atingir a zona perigosa. Foco total em DPM (Dano por minuto).
          </li>
        </ul>
      </section>

      <section className="doc-section warlord-section">
        <h3 className="doc-section-title warlord-title"><Crown size={24}/> Dicas Avançadas do Warlord</h3>
        <p className="doc-text">
          A mochila se transforma na maior aliada logística durante megaconstruções da base e estocagem pesada. Para contornar os limites arquitetônicos do Minecraft, instale esses algoritmos:
        </p>
        <ul className="doc-list">
          <li>
            <button className="craft-btn" onClick={() => onOpenRecipe('stack_upgrade')}>Stack Upgrades</button>: 
            O limite padrão do inventário do Minecraft é 64 blocos por slot. Se você está fazendo o chão de uma nova cidade ou arranha-céu, não pode carregar dezenas de baús. Um Stack Upgrade Tier IV na sua mochila multiplica o limite de empilhamento de um único slot por 16. Você passará a carregar <strong>mais de 1000 pedras concentradas em um milímetro cúbico do espaço</strong>!
          </li>
          <li>
            <strong>Restock Upgrade (A Construção Fluida):</strong> 
            Se você estiver pendurado na ponta de uma ponte imensa erguendo as paredes de uma torre de defesa de "Pedra Negra", quando a pilha que está na sua mão (hotbar) acaba, você precisa parar, abrir o inventário e jogar outra pilha pra baixo. O Restock Upgrade cancela isso: se ele detectar que o bloco na sua mão vai sumir, ele injeta automaticamente outro pacote idêntico da mochila direto pros seus dedos sem interromper sua contagem de frames.
          </li>
        </ul>
      </section>
    </div>
  );
}
