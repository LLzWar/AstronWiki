---
title: "Create - Guia Completo"
modpack: "ASTRON CITY"
minecraft: "1.21.1"
loader: "NeoForge"
mods_cobertos:
  - "Create 6.0.10"
  - "Create Aeronautics 1.3.0"
  - "AeronauticsCompat 1.1.2"
  - "Create: Aeroworks 1.2.11"
  - "Create Crafts & Additions 1.6.0"
  - "Create: Steam 'n' Rails 0.2.0"
  - "Create Railways Navigator beta 0.9.1-C6"
  - "Create: The Factory Must Grow 1.2.2"
  - "Create: New Age 1.2.0"
  - "Create: Ultimate Factory 1.9.0 / jar 2.2.4"
  - "Applied Create 1.1.5"
  - "Create: Connected 1.3.2"
  - "Create: Copycats+ 3.0.4"
  - "Create: Bells & Whistles 0.4.7"
  - "Create Deco 2.1.3"
  - "Create: Interiors 0.6.1"
  - "Create Confectionery 1.1.x"
  - "Create: Central Kitchen 2.5.0"
  - "Create Slice & Dice 4.3.2"
  - "Create: Enchantment Industry 2.5.0 preview"
  - "Create: Trading Floor 3.0.16"
  - "Create: Vibrant Vaults 0.3.2"
  - "Create: Colorful Pipes 2.4.2"
  - "Create: Dragons Plus 1.11.2b"
  - "Create Goggles 6.1.1"
  - "CreateBetterFps 1.1.4"
status: "Guia wiki-ready"
ultima_revisao: "2026-07-01"
---

# Create - Guia Completo para o Astron City

> Guia escrito para o **ASTRON CITY**, um modpack NeoForge 1.21.1 de tecnologia, aventura, magia, espaço, construção coletiva e progressão longa em servidor survival.
>
> Este guia cobre **Create** e o ecossistema de addons do pack, com foco em progressão step-by-step, recursos, máquinas, energia cinética, fábricas, trens, contraptions, logística, decoração, óleo/diesel, eletricidade, AE2, farms populares, HOT TOPICS e boas práticas para servidor multiplayer.

---

## Sumário

1. [O que é Create no Astron City](#1-o-que-e-create-no-astron-city)
2. [Mods cobertos e papel de cada addon](#2-mods-cobertos-e-papel-de-cada-addon)
3. [Como usar este guia](#3-como-usar-este-guia)
4. [Glossário rápido](#4-glossario-rapido)
5. [Mapa de progressão completo](#5-mapa-de-progressao-completo)
6. [Preparação antes de começar](#6-preparacao-antes-de-comecar)
7. [Fundamentos de Create: rotação, stress e velocidade](#7-fundamentos-de-create-rotacao-stress-e-velocidade)
8. [Early Game - primeira oficina cinética](#8-early-game---primeira-oficina-cinetica)
9. [Andesite Age - componentes básicos e primeiras linhas](#9-andesite-age---componentes-basicos-e-primeiras-linhas)
10. [Brass Age - logística inteligente e automação séria](#10-brass-age---logistica-inteligente-e-automacao-seria)
11. [Fluidos, tanques, pumps, spouts e pipes](#11-fluidos-tanques-pumps-spouts-e-pipes)
12. [Contraptions - farms móveis, elevadores e máquinas vivas](#12-contraptions---farms-moveis-elevadores-e-maquinas-vivas)
13. [Trens e infraestrutura pública](#13-trens-e-infraestrutura-publica)
14. [Create 6 - logística de estoque, pacotes e Stock Keeper](#14-create-6---logistica-de-estoque-pacotes-e-stock-keeper)
15. [Create Crafts & Additions - FE, alternator, motor e fios](#15-create-crafts--additions---fe-alternator-motor-e-fios)
16. [Create: New Age - eletricidade, heat, energizer e nuclear](#16-create-new-age---eletricidade-heat-energizer-e-nuclear)
17. [Create: The Factory Must Grow - oil, diesel, steel e indústria pesada](#17-create-the-factory-must-grow---oil-diesel-steel-e-industria-pesada)
18. [Applied Create - AE2 + Create](#18-applied-create---ae2--create)
19. [Create: Enchantment Industry - XP líquido e encantamento automático](#19-create-enchantment-industry---xp-liquido-e-encantamento-automatico)
20. [Create food addons - cozinha, slicing, confectionery e restaurantes](#20-create-food-addons---cozinha-slicing-confectionery-e-restaurantes)
21. [Decoração e construção industrial](#21-decoracao-e-construcao-industrial)
22. [Aeronautics, Aeroworks e hangar de aeronaves](#22-aeronautics-aeroworks-e-hangar-de-aeronaves)
23. [Catálogo de recursos e itens por família](#23-catalogo-de-recursos-e-itens-por-familia)
24. [Catálogo de máquinas e blocos funcionais](#24-catalogo-de-maquinas-e-blocos-funcionais)
25. [Fábricas populares e soluções de survival](#25-fabricas-populares-e-solucoes-de-survival)
26. [HOT TOPICS - o que é muito forte e útil](#26-hot-topics---o-que-e-muito-forte-e-util)
27. [Integração com AE2, MI, Oritech, Ender IO, Powah e Productive](#27-integracao-com-ae2-mi-oritech-ender-io-powah-e-productive)
28. [Checklists de progresso e estoque](#28-checklists-de-progresso-e-estoque)
29. [Performance e regras de servidor](#29-performance-e-regras-de-servidor)
30. [Sugestão de capítulos para FTB Quests](#30-sugestao-de-capitulos-para-ftb-quests)
31. [Notas para mantenedores do wiki](#31-notas-para-mantenedores-do-wiki)
32. [Fontes e observações de precisão](#32-fontes-e-observacoes-de-precisao)

---

<div class="mc-recipe" style="margin: 2rem auto;">
  <div class="mc-grid">
    <div class="mc-slot"></div>
    <div class="mc-slot" title="Electron Tube"><img src="/assets/sprites/electron_tube.png" alt="Electron Tube" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot"></div>
    <div class="mc-slot" title="[item:Brass Casing]"><img src="/assets/sprites/brass_casing.png" alt="Brass Casing" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Crafting Table"><img src="/assets/sprites/crafting_table.png" alt="Crafting Table" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
  </div>
  <div class="mc-arrow"></div>
  <div class="mc-result" title="Mechanical Crafter"><img src="/assets/sprites/mechanical_crafter.png" alt="Mechanical Crafter" onError="this.src='/assets/sprites/barrier.png'" /></div>
</div>

# 1. O que é Create no Astron City

**Create** é o coração visual e mecânico do Astron City. Enquanto AE2 organiza a cidade digitalmente e Modern Industrialization/Oritech empurram a tecnologia pesada, Create é o mod que faz o servidor **parecer vivo**: engrenagens girando, trens chegando, correias transportando itens, braços mecânicos trabalhando, elevadores subindo, fábricas visíveis e máquinas integradas à arquitetura.

A fantasia de Create no Astron City é:

> **Construir uma cidade industrial-fantasia onde a automação não fica escondida em interfaces: ela vira paisagem, infraestrutura pública e memória do servidor.**

## 1.1. Papel no ecossistema do pack

| Sistema | Papel |
|---|---|
| Create | Identidade visual, máquinas aparentes, transporte, trens, contraptions, farms e fábricas públicas. |
| AE2 | Storage central, autocrafting, controle de estoque e integração digital. |
| Modern Industrialization | Indústria pesada, química, tiers longos, multiblocos, diesel/nuclear e materiais avançados. |
| Oritech | Tech visual, lasers, drones, quarries, reatores e augments. |
| Ender IO / LaserIO / Modular Routers | Automação compacta, filtros e logística de precisão. |
| Powah | Energia FE simples e escalável. |
| Farmer's Delight / Productive | Culinária, farming e recursos renováveis. |

Create não deve ser tratado como “o mod de começo que depois fica obsoleto”. No Astron City, Create deve continuar útil até o endgame por três motivos:

- é a melhor ferramenta para fábricas visuais e builds industriais;
- tem trens e contraptions que viram infraestrutura pública;
- seus addons conectam Create com energia, óleo, encantamento, comida, decoração, AE2 e até aeronaves.

---

# 2. Mods cobertos e papel de cada addon

| Mod | Versão no pack | Papel no guia |
|---|---:|---|
| Create | 6.0.10 | Core: rotação, stress, máquinas, belts, farms, trens, contraptions, logística e Ponder. |
| Create Goggles | 6.1.1 | Leitura visual de stress, RPM, estado de máquinas e diagnóstico. |
| Create Aeronautics | 1.3.0 | Contraptions avançadas/flying builds; uso com regras de servidor. |
| AeronauticsCompat | 1.1.2 | Compatibilidade para Aeronautics. |
| Create: Aeroworks | 1.2.11 | Conteúdo complementar para aeronaves/peças de voo. |
| Create Crafts & Additions | 1.6.0 | Ponte entre FE e energia cinética: Electric Motor, Alternator, Rolling Mill, wires/connectors. |
| Create: Steam 'n' Rails | 0.2.0 | Expansão de ferrovias, trilhos, semáforos, conductors e estética ferroviária. |
| Create Railways Navigator | beta 0.9.1-C6 | Navegação/UX para redes ferroviárias grandes. |
| Create: The Factory Must Grow | 1.2.2 | Diesel-punk: oil, refinery, steel, engines, electricity/voltage, materiais industriais. |
| Create: New Age | 1.2.0 | Eletricidade, motores, geração com bobinas/magnetos, heat, energizer e nuclear. |
| Create: Ultimate Factory | 1.9.0 / jar 2.2.4 | Expansões de fábrica; validar conteúdo via EMI no servidor. |
| Applied Create | 1.1.5 | Ponte AE2 + Create: stress em ME, Stress P2P e Mechanical Crafting autocraftável. |
| Create: Connected | 1.3.2 | Blocos de conexão, decoração funcional e melhorias de building. |
| Create: Copycats+ | 3.0.4 | Blocos copycat para acabamento visual, fachadas e builds industriais detalhados. |
| Create: Bells & Whistles | 0.4.7 | Decoração ferroviária/industrial, painéis e blocos para trens/builds. |
| Create Deco | 2.1.3 | Decoração industrial: portas, janelas, suportes, props, blocos urbanos. |
| Create: Interiors | 0.6.1 | Interiores, móveis e decoração para vagões, estações e bases. |
| Create Confectionery | 1.1.x | Doces e alimentos ligados ao ecossistema Create. |
| Create: Central Kitchen | 2.5.0 | Integração entre Create e Farmer's Delight/culinária. |
| Create Slice & Dice | 4.3.2 | Automação de corte/preparo de alimentos com Create. |
| Create: Enchantment Industry | 2.5.0 preview | XP líquido, enchant automation, hyper enchanting e compat com Apotheosis. |
| Create: Trading Floor | 3.0.16 | Automação/comércio com villagers e economia. |
| Create: Vibrant Vaults | 0.3.2 | Variações visuais/organização para vaults. |
| Create: Colorful Pipes | 2.4.2 | Pipes coloridos e diferenciação visual de linhas. |
| Create: Dragons Plus | 1.11.2b | Addon DragonsPlus; validar blocos/receitas via EMI. |
| CreateBetterFps | 1.1.4 | Otimização específica para Create. |

<div class="callout warning">
  <div class="callout-title">?? AVISO SOBRE RECEITAS</div>
  <p>O Astron City usa muitos mods que podem alterar receitas, tags, materiais e integração: **AlmostUnified**, **JAOPCA**, **KubeJS**, EMI, JEI, AE2, Modern Industrialization, Oritech, Ender IO, Immersive Engineering, Productive Metalworks e vários addons Create.<br><br>Por isso, este guia ensina:<br><br>- ordem de progressão;<br>- função das máquinas;<br>- fábricas populares;<br>- prioridades de materiais;<br>- soluções de survival multiplayer;<br>- integração com outros sistemas;<br>- boas práticas de performance.<br><br>Para receitas exatas do servidor, sempre confirme com:<br><br>- **Ponder**: documentação visual in-game do Create;<br>- **EMI/JEI**: receitas e usos de itens;<br>- **Jade + Create Goggles**: diagnóstico de máquinas, stress, RPM, fluidos e estados;<br>- busca por `@create`, `@tfmg`, `@createaddition`, `@create_new_age`, `@railways`, `@create_enchantment_industry`.<br><br>---<br><br># 3. Como usar este guia</p>
</div>

## Modo jogador iniciante

Siga em ordem:

1. Faça uma base pequena e colete andesite, iron, copper, zinc, redstone e logs.
2. Faça [item:Shaft]s, [item:Cogwheel]s e [item:Andesite Alloy].
3. Monte um gerador de rotação simples com [item:Water Wheel].
4. Faça [item:Mechanical Press], [item:Mechanical Mixer], [item:Millstone] e [item:Mechanical Saw].
5. Comece com [item:Belt]s, depots, [item:Funnel]s e chutes.
6. Monte uma primeira linha de crushing/washing/smelting.
7. Produza brass e entre na fase de filtros inteligentes.
8. Faça Mechanical Crafter e Precision Mechanism.
9. Avance para steam engine, trains, contraptions e addons.

## Modo engenheiro do servidor

Use os capítulos de trens, infraestrutura pública, logística, performance e fábricas populares. O objetivo é criar:

- oficina pública de Create;
- estação central com rotas por distrito;
- fábrica pública de [item:andesite alloy], shafts, belts e casings;
- farms visuais e desligáveis;
- refino TFMG em área industrial;
- ponte FE/stress com Crafts & Additions ou New Age;
- integração AE2 + Applied Create para autocrafting.

## Modo mantenedor do wiki

Quebre este guia em páginas menores:

- Create: primeiros passos.
- Guia de stress e RPM.
- Guia de máquinas básicas.
- Brass logistics.
- Fábricas populares.
- Trens e cidade.
- TFMG: óleo e diesel.
- New Age: eletricidade e nuclear.
- Applied Create.
- HOT TOPICS de Create.

---

# 4. Glossário rápido

| Termo | Significado prático |
|---|---|
| Kinetic Power | Energia mecânica rotacional do Create. |
| RPM | Velocidade de rotação. Máquinas mais rápidas processam mais rápido, mas consomem mais stress. |
| SU / Stress Units | Capacidade/custo de stress da rede cinética. |
| Stress Capacity | Quanto stress a rede gera. |
| Stress Impact | Quanto uma máquina consome. |
| Overstressed | Rede sobrecarregada. Tudo para até aumentar geração, reduzir carga ou velocidade. |
| [item:Shaft] | Eixo básico de transmissão. |
| [item:Cogwheel] | Engrenagem para transmissão e mudança de direção. |
| Large Cogwheel | Engrenagem grande, útil para mudanças de velocidade. |
| Gearbox | Muda direção da rotação. |
| Encased Chain Drive | Transmite rotação em linha e mantém velocidade/direção. |
| Clutch | Liga/desliga uma linha com redstone. |
| Gearshift | Inverte direção com redstone. |
| Sequenced Gearshift | Controla movimentos por sequência, essencial para máquinas automáticas. |
| [item:Belt] | Correia transportadora. |
| Depot | Ponto de processamento simples para itens. |
| [item:Basin] | Recipiente de crafting/fluidos usado por Mixer, Press e [item:Spout]. |
| [item:Funnel] | Entrada/saída de inventários em belts/depots. |
| Tunnel | Divide/une fluxo de itens em belts. |
| Filter | Define quais itens uma máquina/logística aceita. |
| [item:Mechanical Press] | Prensa itens, plates e receitas com [item:basin]/depot/belt. |
| [item:Mechanical Mixer] | Mistura itens/fluidos em basin. |
| Millstone | Processamento inicial de grãos/minérios simples. |
| [item:Crushing Wheel] | Processamento forte de minério/blocos. |
| Encased Fan | Sopro para washing, smelting, smoking e haunting. |
| [item:Deployer] | Simula interação de jogador com item na mão. |
| Mechanical Arm | Move itens entre depots, belts, basins e inventários. |
| Mechanical Crafter | Crafting multibloco para receitas grandes. |
| Contraption | Estrutura móvel com bearings, pistons, gantry, rope pulley, trains ou aeronaves. |
| Portable Storage Interface | Transfere itens/fluidos entre contraption e mundo fixo. |
| Train Station | Bloco central para criar e gerenciar trens Create. |
| Schedule | Roteiro automático para trens. |
| [item:Stock Keeper] | Sistema de gerenciamento de estoque/logística do Create 6. |

---

# 5. Mapa de progressão completo

```text
Sobrevivência vanilla
  -> recursos: andesite, iron, copper, zinc, redstone, slime, blaze, quartz
  -> shafts + cogwheels + andesite alloy
  -> [item:water wheel] / large water wheel
  -> mechanical press + mixer + millstone + saw
  -> belts + depots + funnels + chutes
  -> encased fan: washing/smelting/smoking/haunting
  -> crushing wheels + primeiros ore processing setups
  -> brass: acesso a filtros inteligentes e logística avançada
  -> deployers + mechanical arms + sequenced assembly
  -> precision mechanism + mechanical crafter
  -> steam engine + boiler + [item:blaze burner]
  -> trains + estação central + rotas de recursos
  -> contraptions grandes: tree farm, crop farm, quarry, elevadores, fábricas móveis
  -> Create 6 logistics: stock keeper, package/stock systems se habilitados
  -> Crafts & Additions: alternator/motor, rolling mill, FE <-> stress
  -> New Age: electricity, energizer, heat/nuclear
  -> TFMG: oil, diesel, steel, refinery, engines e indústria pesada
  -> Enchantment Industry: XP líquido, encantamento automático e integração Apotheosis
  -> Applied Create: stress em ME, Stress P2P, Mechanical Crafting autocraftável
  -> Aeronautics/Aeroworks: hangar, aeronaves e megaprojetos móveis
  -> megabase final: cidade com distritos, trens, refinaria, central AE2 e fábricas visuais
```

## 5.1. Tiers por objetivo

| Fase | Meta principal | O que desbloqueia |
|---|---|---|
| Preparação | Recursos vanilla + andesite alloy | Shafts, cogwheels, máquinas simples. |
| Early | Primeira oficina cinética | Press, Mixer, Millstone, Saw, Belts. |
| Early+ | Processamento e farms simples | Encased Fan, Washing, Crushing, Tree/Crop farm. |
| Midgame | Brass e filtros inteligentes | Smart Funnel, Brass Tunnel, Mechanical Arm, autocrafting. |
| Midgame+ | Steam, trains e contraptions | Boiler, Steam Engine, Mechanical Crafter, trens, elevadores. |
| Late | Addons industriais | TFMG, New Age, Crafts & Additions, Enchantment Industry. |
| Endgame | Integração digital e megaprojetos | AE2 + Applied Create, rotas ferroviárias, fábricas públicas, aeronaves. |

---

# 6. Preparação antes de começar

## 6.1. Recursos prioritários

| Recurso | Quantidade inicial sugerida | Uso |
|---|---:|---|
| Andesite | 4-8 stacks | Andesite alloy, casings, shafts, máquinas. |
| Iron | 3-6 stacks | Casings, shafts, belts, press, saw, arms, rails. |
| Copper | 2-4 stacks | Copper casing, fluid pipes, tanks, spout, steam, addons. |
| Zinc | 1-3 stacks | Brass, componentes midgame. |
| Logs | 4-8 stacks | Casings, belts, shafts, decoração. |
| Kelp | 1-2 stacks | Belts. |
| Redstone | 1-2 stacks | Contraptions, redstone controls, precision lines. |
| Gold | 1 stack | Precision mechanisms e componentes. |
| Quartz | 1 stack | Redstone/precision e algumas receitas. |
| Slime | 1 stack | Super glue, contraptions e farms. |
| [item:Blaze Burner] | 1+ | Heated/superheated recipes e boiler. |
| Brass | variável | Logística avançada. |

## 6.2. Base inicial recomendada

Faça uma oficina com quatro zonas:

| Zona | Função |
|---|---|
| Geração cinética | Water wheels/[item:windmill]/steam separados das máquinas. |
| Linha de máquinas | Press, Mixer, Saw, Millstone, Crushing, Fan. |
| Logística | Belts, depots, funnels, vaults e filtros. |
| Expansão | Espaço livre para Mechanical Crafter, boiler e trens. |

Regra de ouro: **não faça sua primeira sala de Create minúscula**. Create cresce em largura, altura e comprimento. Uma fábrica bonita precisa de espaço para respirar.

---

# 7. Fundamentos de Create: rotação, stress e velocidade

Create funciona com **energia cinética rotacional**, não com FE por padrão. Uma rede cinética tem:

- fontes de rotação;
- transmissão por shafts, cogwheels, belts, gearboxes e chain drives;
- máquinas consumidoras;
- velocidade em RPM;
- capacidade de stress.

## 7.1. Stress Capacity vs Stress Impact

| Conceito | Explicação |
|---|---|
| Stress Capacity | Quanto sua geração aguenta. Water wheels, windmills e steam engines aumentam capacidade. |
| Stress Impact | Quanto cada máquina consome. Quanto maior a velocidade, maior o consumo. |
| RPM | Velocidade. Acelerar uma máquina melhora produção, mas pode estressar a rede. |
| Overstressed | O sistema para. Solução: mais geração, menos máquinas ou menos velocidade. |

## 7.2. Fontes de rotação

| Fonte | Fase | Uso recomendado |
|---|---|---|
| Hand Crank | Tutorial | Testes rápidos, não fábrica real. |
| Water Wheel | Early | Primeira fonte estável. |
| Large Water Wheel | Early+ | Melhor para oficina inicial. |
| [item:Windmill Bearing] | Early/Mid | Energia renovável visual, ótima para cidades. |
| Furnace Engine/Steam Engine/Boiler | Mid/Late | Alta potência; ideal para fábricas centrais. |
| Electric Motor (Crafts & Additions) | Mid/Late | Converte FE em rotação. |
| Motors (New Age) | Mid/Late | Ponte eletricidade -> rotação. |
| ME Gearbox / Applied Create | Late | Integra rede AE2 e stress. |

## 7.3. Controle de velocidade

| Peça | Uso |
|---|---|
| Cogwheel + Large Cogwheel | Aumenta/reduz RPM por relação de engrenagem. |
| Rotation Speed Controller | Controle preciso de RPM; item-chave de midgame. |
| Encased Chain Drive | Distribui rotação com organização. |
| Adjustable Chain Gearshift | Ajustes e redstone avançados. |
| Clutch | Liga/desliga uma linha. |
| Gearshift | Inverte sentido com redstone. |
| Sequenced Gearshift | Controla movimentos temporizados, pistons, bearings e máquinas móveis. |

## 7.4. Diagnóstico

Use sempre:

- **Create Goggles** para ver stress/capacidade;
- **Jade** para olhar máquinas;
- **Ponder** para entender comportamento;
- alavancas/clutches para desligar linhas;
- placas na fábrica indicando RPM, objetivo e dono da linha.

---

# 8. Early Game - primeira oficina cinética

## 8.1. Objetivo da fase

Ao final do early game, o jogador deve ter:

| Meta | Resultado |
|---|---|
| Andesite Alloy automático ou semi-automático | Base de quase tudo. |
| Water Wheel estável | Primeira energia. |
| Mechanical Press | Plates e compactação. |
| Mechanical Mixer | Misturas, alloy e basin recipes. |
| Millstone | Processamento simples. |
| Mechanical Saw | Madeira automatizada. |
| Belts + Funnels | Transporte básico. |
| Encased Fan | Washing/smelting/smoking/haunting inicial. |

## 8.2. Step-by-step

### Passo 1 - colete andesite e iron

Andesite Alloy é a “madeira tecnológica” do Create. Sem ele, você não escala.

Prioridade inicial:

```text
Andesite + Iron/Zinc Nugget -> Andesite Alloy
Andesite Alloy -> Shaft/Cogwheel/Machines
```

### Passo 2 - faça shafts e cogwheels

Monte uma bancada de testes. Aprenda a inverter direção, transferir rotação e controlar velocidade antes de automatizar tudo.

### Passo 3 - faça uma water wheel

Comece simples. Uma water wheel alimentando Press, Mixer e Saw já resolve muito. Depois atualize para large water wheels ou windmill.

### Passo 4 - faça Mechanical Press

A Press é a primeira máquina realmente importante. Use para:

- iron plates;
- copper sheets;
- gold sheets;
- compactações;
- recipes com basin quando aplicável.

### Passo 5 - faça Mechanical Mixer + Basin

O Mixer permite misturas e crafts com fluido. É o começo de linhas como:

- andesite alloy em lote;
- massa/dough;
- ligas simples se habilitadas;
- receitas de addons.

### Passo 6 - faça Mechanical Saw

Com Saw você pode:

- cortar logs em tábuas;
- automatizar madeira;
- montar tree farms;
- processar recipes de corte.

### Passo 7 - faça belts e funnels

Belts transformam a fábrica em linha de produção. Comece com:

```text
Chest -> Funnel -> Belt -> Depot/Machine -> Belt -> Funnel -> Chest
```

### Passo 8 - faça Encased Fan

Encased Fan com blocos específicos permite:

| Setup | Efeito |
|---|---|
| Fan + Water | Washing. |
| Fan + Lava/Fire | Smelting. |
| Fan + Campfire | Smoking. |
| Fan + Soul Fire | Haunting. |

Use isso para linhas compactas de gravel, sand, food, ores e recipes especiais.

---

# 9. Andesite Age - componentes básicos e primeiras linhas

A Andesite Age é o momento em que o jogador para de craftar manualmente e começa a montar máquinas repetíveis.

## 9.1. Máquinas prioritárias

| Máquina | Prioridade | Por que fazer cedo |
|---|---:|---|
| Mechanical Press | Alta | Plates, compactação e vários componentes. |
| Mechanical Mixer | Alta | Misturas e basin recipes. |
| Mechanical Saw | Alta | Madeira, tree farms, corte. |
| Millstone | Média | Processamento simples, seeds/flour e materiais básicos. |
| Encased Fan | Alta | Washing, smelting, smoking, haunting. |
| Mechanical Belt | Alta | Transporte visual e barato. |
| Depot | Alta | Ponto de processamento simples. |
| Chute | Média | Queda vertical e entrada/saída simples. |
| Andesite Funnel | Alta | Entrada/saída sem filtro avançado. |
| Basin | Alta | Crafting com Mixer/Press/Spout. |

## 9.2. Primeira linha recomendada: placas

```text
Chest de ingots
  -> Funnel
  -> Belt
  -> Depot sob Mechanical Press
  -> Belt de saída
  -> Chest de plates
```

Use para iron, copper, gold e outros materiais compatíveis. Depois, conecte isso a AE2 com processing patterns.

## 9.3. Primeira linha recomendada: madeira

```text
Log chest
  -> Mechanical Saw
  -> Planks
  -> Chest/Drawer/Vault
```

Depois evolua para tree farm com Mechanical Bearing ou Gantry.

## 9.4. Primeira linha recomendada: lavagem

```text
Gravel/Sand/Crushed Ore
  -> Belt
  -> Encased Fan soprando por água
  -> Output chest
```

Use filtros para separar nuggets, flint, clay, dyes ou subprodutos conforme receitas do servidor.

---

# 10. Brass Age - logística inteligente e automação séria

Brass é o divisor de águas do Create. A partir dele você começa a trabalhar com filtros melhores, tunnels mais inteligentes, arms e sistemas de logística decentes.

## 10.1. Como pensar em Brass

Brass deve ser usado primeiro em infraestrutura que economiza tempo:

| Item | Prioridade |
|---|---:|
| Brass Funnel | Alta |
| Brass Tunnel | Alta |
| [item:Smart Chute] | Alta |
| Mechanical Arm | Alta |
| Content Observer | Média |
| Stockpile Switch | Média |
| Display Link | Média |
| Mechanical Crafter | Alta |
| Rotation Speed Controller | Muito alta |

## 10.2. Blaze Burner e recipes heated

Muitas receitas de midgame exigem heat. Priorize:

1. capturar blaze;
2. montar um burner seguro;
3. automatizar combustível;
4. depois pensar em superheated se necessário.

## 10.3. Precision Mechanism

Precision Mechanism normalmente é gargalo porque usa **sequenced assembly**. Prepare uma linha própria.

Fluxo conceitual:

```text
Base item
  -> [item:Deployer] aplica item A
  -> Deployer aplica item B
  -> Press/Saw/Deployer aplica etapa C
  -> chance de sucesso
  -> Precision Mechanism
```

Boas práticas:

- use filtros em cada Deployer;
- faça buffer de inputs;
- tenha output para itens falhados;
- use brass funnels/tunnels para controlar fluxo;
- deixe espaço para expansão.

## 10.4. Mechanical Crafter

Mechanical Crafter é essencial para recipes grandes. Ele permite criar itens como:

- Crushing Wheels;
- Extendo Grip ou ferramentas específicas se habilitadas;
- grandes componentes de addons;
- crafts customizados de pack;
- receitas de Create e integração com Applied Create.

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>sempre construa arrays de Mechanical Crafters com acesso visual. Players novos entendem melhor quando a máquina está exposta.</p>
</div>

---

# 11. Fluidos, tanques, pumps, spouts e pipes

Create tem um sistema excelente de fluidos. Ele é útil em farms, food, refino, lava, chocolate, honey, XP líquido e addons industriais.

## 11.1. Componentes principais

| Bloco | Uso |
|---|---|
| Fluid Pipe | Transporte de fluidos. |
| Mechanical Pump | Move fluido pela rede. |
| Fluid Tank | Buffer e armazenamento. |
| Hose Pulley | Coleta/deposita grandes volumes; pode tratar reservatórios como infinitos conforme tamanho/config. |
| [item:Spout] | Insere fluido em itens passando por baixo. |
| Item Drain | Remove fluido de itens ou recebe fluido de recipientes. |
| Portable Fluid Interface | Transfere fluido entre contraption e mundo fixo. |
| Smart Fluid Pipe | Filtro/controle avançado, se disponível na versão. |

## 11.2. Fábricas populares com fluidos

| Fábrica | Função |
|---|---|
| Lava buffer | Abastecer smelting, boilers, farms ou FE via outros mods. |
| Chocolate/honey line | Food/confectionery e decoração. |
| XP líquido | Create Enchantment Industry. |
| Refinaria TFMG | Oil -> frações -> combustíveis. |
| Potion/brew line | Integração com food/magic se disponível. |
| Concrete/cement line | Decoração industrial, se habilitada por addon. |

## 11.3. Erros comuns

- Bombas em direção errada.
- Falta de velocidade na pump.
- Sem rota para subprodutos.
- Tanque enchendo e travando a linha.
- Contraption móvel sem Portable Fluid Interface.
- Tubulação passando por chunks não carregados.

---

# 12. Contraptions - farms móveis, elevadores e máquinas vivas

Contraptions são a alma de Create. Elas permitem mover blocos funcionais como se fossem máquinas vivas.

## 12.1. Peças principais

| Peça | Função |
|---|---|
| Super Glue | Cola blocos para montar contraptions. |
| Linear Chassis / Radial Chassis | Estrutura que conecta blocos por alcance. |
| Mechanical Bearing | Rotação contínua; ideal para farms circulares. |
| Windmill Bearing | Geração com velas e rotação. |
| Mechanical Piston | Movimento linear. |
| Gantry Shaft + Gantry Carriage | Movimento linear controlável e longo. |
| Rope Pulley | Elevação vertical; elevadores e mineração vertical. |
| Cart Assembler | Contraption em minecart. |
| Train | Contraption ferroviária persistente. |
| Portable Storage Interface | Transferência de itens. |
| Portable Fluid Interface | Transferência de fluidos. |
| Contraption Controls | Controle manual de certas máquinas montadas. |

## 12.2. Tree farm clássica

Estrutura:

```text
Mechanical Bearing
  -> Radial Chassis
  -> Saws na frente
  -> Deployers com saplings
  -> Storage Interface
  -> Chest/Barrel na contraption
```

Entrada:

- saplings;
- bone meal opcional;
- combustível/energia se a fazenda tiver outros sistemas.

Saída:

- logs;
- sticks;
- apples;
- saplings excedentes.

Boas práticas:

- use filtro para manter saplings;
- descarte excesso com Trash Can se necessário;
- evite farms girando 24/7 sem necessidade;
- instale clutch para desligar.

## 12.3. Crop farm circular

Estrutura:

```text
Mechanical Bearing
  -> chassis
  -> Harvesters
  -> Deployers se precisar replantar
  -> Portable Storage Interface
```

Use para:

- wheat;
- carrots;
- potatoes;
- beetroot;
- crops de Farmer's Delight, se compatíveis;
- farms temáticas de cidade.

## 12.4. Elevador de cidade

Use Rope Pulley ou Gantry para:

- elevador público;
- acesso a minas;
- plataforma de construção;
- elevador de estação;
- transporte vertical industrial.

Checklist de segurança:

- botão claro de chamar/subir/descer;
- área livre;
- proteção contra queda;
- limite de velocidade;
- sinalização.

---

# 13. Trens e infraestrutura pública

Trens são um dos maiores motivos para Create ser central no Astron City. Eles conectam distritos, bases, minas, farms, portos, refinarias, áreas de boss e projetos espaciais.

## 13.1. Progressão ferroviária

1. Produza tracks.
2. Faça Train Station.
3. Monte bogeys e estrutura do trem.
4. Cole blocos com Super Glue.
5. Monte locomotiva/vagões.
6. Crie schedule.
7. Configure stops, conditions e loops.
8. Expanda com Steam 'n' Rails, semáforos e navegação.

## 13.2. Componentes importantes

| Item | Uso |
|---|---|
| Track | Trilho base. |
| Train Station | Criação, montagem e rota. |
| Train Controls | Controle manual. |
| Schedule | Automação de rota. |
| Track Signal | Evita colisão e controla blocos. |
| Track Observer | Detecta trens. |
| Train Cargo | Transporte de itens/fluidos. |
| Portable Storage/Fluid Interface | Carregamento/descarregamento. |
| Display Board | Informação pública. |
| Steam 'n' Rails tracks | Variedade visual e ferroviária. |
| Semaphores | Sinalização estética e funcional. |
| Conductor | Automação/operador remoto e elemento de estação. |
| Railways Navigator | UX para redes maiores. |

## 13.3. Tipos de linha recomendados

| Linha | Uso |
|---|---|
| Linha Central | Spawn/cidade principal/distritos. |
| Linha Industrial | Minas, MI, Oritech, refinaria TFMG. |
| Linha Agrícola | Farms, comida, Productive Bees/Trees, madeira. |
| Linha de Aventura | Dungeons, bosses, portais, fronteiras de exploração. |
| Linha Espacial | Centro de foguetes, Stellaris, observatório, hangar. |
| Linha Portuária | Seven Seas, ocean farms, navios, aquaculture. |

## 13.4. Estações boas para servidor

Uma estação pública deve ter:

- nome claro;
- mapa/placa de linhas;
- horários ou display board;
- baús/vaults de carga;
- área de segurança;
- chunkloading apenas se autorizado;
- decoração com Steam 'n' Rails, Deco, Copycats e Bells & Whistles.

## 13.5. Regras para trens em survival multiplayer

- Evite trilhos infinitos sem destino.
- Use sinais em cruzamentos.
- Nomeie estações com padrão: `Cidade - Distrito - Função`.
- Não deixe schedules quebrados causando loop de trem vazio.
- Trens de carga devem ter buffer para evitar item spill.
- Evite excesso de trens rodando sem demanda.

---

# 14. Create 6 - logística de estoque, pacotes e Stock Keeper

Create 6 fortalece o lado de logística e estoque. No Astron City, isso deve ser explorado como uma alternativa visual e temática ao AE2, principalmente antes do storage digital completo.

## 14.1. Conceito

Em vez de jogar tudo direto no AE2, uma cidade Create pode ter:

- depósitos físicos;
- vaults visíveis;
- linhas de belts;
- estação de pacotes;
- controle de estoque;
- pedidos internos;
- comércio e distribuição por trem.

## 14.2. Uso recomendado

| Sistema | Onde usar |
|---|---|
| Stock Keeper | Manter estoque de itens em uma oficina pública. |
| Stock Links | Conectar inventários relevantes. |
| Packagers / packages se disponíveis | Envio de pedidos e logística visual. |
| Postboxes se disponíveis | Entrega entre áreas/distritos. |
| Display Links | Painéis de estoque. |

## 14.3. Exemplo: Almoxarifado Create

```text
Fábricas básicas
  -> Vaults por categoria
  -> Stock Links / observadores
  -> Stock Keeper
  -> Display Board público
  -> Saída para trem de carga
```

Itens ideais:

- shafts;
- cogwheels;
- belts;
- andesite alloy;
- casings;
- funnels;
- rails;
- pipes;
- copper sheets;
- iron plates.

---

# 15. Create Crafts & Additions - FE, alternator, motor e fios

**Create Crafts & Additions** conecta Create com energia FE. No Astron City, ele é essencial porque o pack tem Powah, Ender IO, Oritech, Modern Industrialization, AppliedFlux e outras rotas de energia.

## 15.1. Componentes principais

| Item | Função |
|---|---|
| Rolling Mill | Produz rods e wires para receitas do addon. |
| Alternator | Converte rotação Create em FE. |
| Electric Motor | Converte FE em rotação Create. |
| Connectors/Wires | Transferência de energia. |
| Accumulator se disponível | Armazenamento de energia do addon. |

## 15.2. Quando usar

| Situação | Melhor solução |
|---|---|
| Quero alimentar máquinas FE com Create | Alternator. |
| Quero alimentar Create com Powah/Oritech/Ender IO | Electric Motor. |
| Quero usar Create como gerador visual | Windmill/Steam -> Alternator. |
| Quero estabilizar fábrica Create com energia externa | FE -> Motor -> clutch/line. |

## 15.3. Fábrica popular: Power Bridge

```text
Steam Engine / Windmill / Water Wheels
  -> rotação
  -> Alternator
  -> FE buffer / cabos
  -> Powah/Ender IO/Oritech/AE2
```

E o inverso:

```text
FE grid
  -> Electric Motor
  -> shaft backbone
  -> Create factory
```

Boas práticas:

- não dependa de uma única linha sem backup;
- instale clutches para desligar consumidores;
- use displays para indicar produção/consumo;
- não transforme FE -> Create -> FE em loop inútil.

---

# 16. Create: New Age - eletricidade, heat, energizer e nuclear

**Create: New Age** adiciona uma rota de eletricidade e energia moderna ao Create. Ele combina rotação, bobinas, magnetos, motores, heat, energizer e nuclear.

## 16.1. Papel no Astron City

New Age é excelente para jogadores que querem uma progressão tecnológica ainda com visual Create, mas mais próxima de energia moderna.

Use como:

- ponte entre Create e sistemas elétricos;
- geração/transferência de eletricidade;
- crafting avançado com Energizer;
- rota de heat/nuclear para projetos de mid/late game;
- alternativa temática a Powah/MI/Oritech.

## 16.2. Conceitos principais

| Sistema | Função |
|---|---|
| Copper Coils + Magnets | Geração elétrica por rotação. |
| Motors | Eletricidade -> rotação. |
| Energizer | Crafting com energia/rotação. |
| Wires | Transferência de energia. |
| Heat system | Calor para sistemas avançados. |
| Nuclear Reactor | Heat/energia em escala maior, com risco e infraestrutura. |
| Solar/Heat transfer se disponível | Geração térmica complementar. |

## 16.3. Fábrica popular: New Age Power Plant

```text
Rotação Create forte
  -> coils/magnets generator
  -> wires
  -> energizer/motors
  -> fábricas ou storage FE
```

## 16.4. Segurança para nuclear

- Faça em prédio separado.
- Tenha shutdown manual.
- Documente input/output.
- Evite chunkloading sem monitoramento.
- Não deixe heat/reactor em área pública sem proteção.

---

# 17. Create: The Factory Must Grow - oil, diesel, steel e indústria pesada

**Create: The Factory Must Grow** expande Create para uma estética diesel-punk: óleo, refino, combustíveis, steel, eletricidade/voltage, motores e materiais industriais.

## 17.1. Papel no Astron City

TFMG deve ser o “distrito petroquímico” do servidor. Ele combina muito bem com:

- refinaria grande;
- power plant industrial;
- estação ferroviária de carga;
- tubos e tanques;
- integração com MI/Oritech/Ender IO;
- construção pesada com concreto, supports e blocos industriais.

## 17.2. Progressão conceitual

```text
Recursos TFMG
  -> steel e componentes industriais
  -> oil extraction
  -> crude oil buffer
  -> distillation tower
  -> combustíveis: diesel/gasoline/LPG/kerosene/etc conforme versão
  -> engines/generators
  -> electricity/voltage
  -> materiais avançados e fábricas pesadas
```

## 17.3. Refinaria popular

```text
Oil source / pump
  -> crude oil tank farm
  -> distillation tower
  -> frações de combustível
  -> tanks separados
  -> engines/generators
  -> trem de carga ou pipes para distrito industrial
```

Subprodutos precisam de rota. Uma refinaria ruim trava quando um fluido enche.

## 17.4. Integração com trens

A melhor forma de usar TFMG no Astron City é com logística ferroviária:

- trem de crude oil;
- trem de diesel;
- trem de materiais industriais;
- estação da refinaria;
- estação da power plant;
- estação da fábrica de aço.

---

# 18. Applied Create - AE2 + Create

**Applied Create** conecta AE2 e Create. No Astron City, isso é extremamente importante porque impede que AE2 mate a identidade visual do pack: AE2 pode solicitar, mas Create continua executando.

## 18.1. Recursos principais

| Recurso | Uso |
|---|---|
| ME Gearbox | Ponte bidirecional entre stress e rede ME/energia, conforme addon/config. |
| Stress P2P | Transmitir rotação/stress por P2P. |
| Kinetic Energy Acceptor | Aceitar energia cinética para integração. |
| Andesite/Brass Pattern Provider | Pattern providers pensados para Mechanical Crafters. |
| Mechanical Crafting automation | AE2 pede, Create crafta visualmente. |

## 18.2. Melhor uso

Use Applied Create para:

- crafts grandes com Mechanical Crafters;
- centralizar pedidos AE2 sem esconder a fábrica;
- manter contraptions e máquinas Create relevantes no late game;
- levar stress por infraestrutura digital quando fizer sentido.

## 18.3. Exemplo: AE2 pede Crushing Wheels

```text
AE2 Crafting Terminal
  -> Pattern Provider Applied Create
  -> Mechanical Crafter array
  -> Output volta para ME
```

## 18.4. Regras de balanceamento

- Não use Applied Create para transformar toda fábrica em caixa invisível.
- Preserve pelo menos as linhas principais visíveis.
- Use em autocrafts repetitivos e megaprojetos.
- Para o wiki, recomende Applied Create como endgame/logística avançada, não como primeiro passo.

---

# 19. Create: Enchantment Industry - XP líquido e encantamento automático

Esse addon conecta Create ao mundo de XP, enchant e, no Astron City, também conversa muito bem com Apotheosis.

## 19.1. Sistemas principais

| Sistema | Uso |
|---|---|
| Liquid Experience | Armazenar XP como fluido. |
| Disenchanter | Extrair encantamentos/XP de itens encantados. |
| Printer/Copier se disponível | Copiar livros/encantos conforme config. |
| Mechanical Enchanter se disponível | Automatizar encantamento. |
| Hyper Experience | Rotas de encantamento acima de limites comuns, se habilitadas. |
| Compat Apotheosis | Importante para setups avançados de enchant. |

## 19.2. Fábrica popular: XP Recycling

```text
Mob farm / dungeon loot
  -> filtro de itens encantados
  -> Disenchanter
  -> Liquid Experience tank
  -> enchant/copy/hyper setup
  -> livros/gear para jogadores
```

## 19.3. Por que isso é forte

- Transforma lixo encantado de mob farm em recurso.
- Ajuda a abastecer enchanting do servidor.
- Sinergiza com Apotheosis.
- Pode virar serviço público: “Biblioteca Arcano-Industrial Astron”.

---

# 20. Create food addons - cozinha, slicing, confectionery e restaurantes

O Astron City tem Farmer's Delight e addons de comida. Create pode transformar comida em infraestrutura social: cozinhas automáticas, padarias, restaurantes e buffs de comida.

## 20.1. Mods envolvidos

| Mod | Papel |
|---|---|
| Farmer's Delight | Base de culinária. |
| Create: Central Kitchen | Integra culinária com automação Create. |
| Create Slice & Dice | Automação de corte e preparo. |
| Create Confectionery | Doces, chocolate, confeitaria e alimentos temáticos. |
| Ender's Delight / My Nether's Delight / Ocean's Delight | Expansão de ingredientes e pratos. |
| Spice of Life: Carrot Edition | Incentiva variedade alimentar. |

## 20.2. Fábricas populares

| Fábrica | Resultado |
|---|---|
| Padaria automática | Wheat -> flour/dough -> bread. |
| Cozinha de sopas | Crops + bowls + cooking. |
| Chocolate/honey line | Confectionery e doces. |
| Restaurante da cidade | Comida variada para jogadores. |
| Slice & Dice prep line | Cortar ingredientes automaticamente. |

## 20.3. Serviço público sugerido

Crie uma **Cantina Astron**:

- entrada de crops por trem;
- processamento com Create;
- storage por AE2 ou vaults;
- distribuição gratuita ou trading floor;
- pratos melhores para expedições/bosses.

---

# 21. Decoração e construção industrial

Create é também um mod de construção. Os addons decorativos são essenciais para transformar fábrica funcional em cidade memorável.

## 21.1. Addons de decoração

| Addon | Uso |
|---|---|
| Create Deco | Portas industriais, janelas, props, suportes, decoração urbana. |
| Create: Interiors | Interiores de vagões, salas, bases e estações. |
| Create: Copycats+ | Fachadas, shapes e blocos copiando textura. |
| Create: Connected | Conexões visuais e blocos |

# ⚙️ Guia Completo: Create Ecosystem (Engrenagens, Trens e Automação Mecânica)

<div class="mc-recipe" style="margin: 2rem auto;">
  <div class="mc-grid">
    <div class="mc-slot"></div>
    <div class="mc-slot" title="Electron Tube"><img src="/assets/sprites/electron_tube.png" alt="Electron Tube" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot"></div>
    <div class="mc-slot" title="Brass Casing"><img src="/assets/sprites/brass_casing.png" alt="Brass Casing" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Crafting Table"><img src="/assets/sprites/crafting_table.png" alt="Crafting Table" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
  </div>
  <div class="mc-arrow"></div>
  <div class="mc-result" title="Mechanical Crafter"><img src="/assets/sprites/mechanical_crafter.png" alt="Mechanical Crafter" onError="this.src='/assets/sprites/barrier.png'" /></div>
</div>

> A revolução industrial estética. No **Create**, você não verá cabos ou lasers. Todo o progresso visualmente visível. |
| Create: Colorful Pipes | Organização visual de linhas de fluidos. |
| Create: Dragons Plus | Complementos estéticos/funcionais; verificar via EMI. |

## 21.2. Padrões visuais para Astron City

| Distrito | Paleta sugerida |
|---|---|
| Oficina inicial | Andesite, spruce, copper, iron. |
| Distrito industrial | Brass, copper oxidized, dark stone, cinder/concrete. |
| Estação central | Brass, zinc, polished stone, glass, signs. |
| Refinaria TFMG | Steel, blackstone, concrete, pipes coloridos. |
| Laboratório New Age | Copper coils, white blocks, cyan lights, glass. |
| Hangar Aeronautics | Metal, warning stripes, large doors, platforms. |

## 21.3. Regra de ouro

> Toda fábrica importante deve ter forma, nome, sinalização e acesso. No Astron City, infraestrutura é parte da história do servidor.

---

# 22. Aeronautics, Aeroworks e hangar de aeronaves

Create Aeronautics e Aeroworks são addons ambiciosos para builds móveis/flying. Eles devem ser tratados como **conteúdo de projeto grande**, não como ferramenta descartável.

## 22.1. Uso recomendado

- hangares;
- dirigíveis;
- plataformas aéreas;
- transportes lentos/temáticos;
- expedições;
- megaprojetos de cidade;
- builds cinematográficas.

## 22.2. Regras de servidor

Como aeronaves e contraptions móveis podem afetar performance e chunks:

- teste em área separada;
- evite máquinas gigantes sem autorização;
- não use para griefing;
- não deixe aeronaves abandonadas em chunks públicos;
- defina limite de tamanho;
- documente hangar/dono/função.

## 22.3. Hangar Astron

Estrutura ideal:

- pista/plataforma;
- área de montagem;
- storage de peças;
- oficina de Create;
- acesso por trem;
- sala de controle;
- regras de voo no wiki.

---

# 23. Catálogo de recursos e itens por família

## 23.1. Materiais base

| Família | Exemplos | Uso |
|---|---|---|
| Andesite | Andesite, Andesite Alloy | Early Create. |
| Wood | logs, planks, stripped logs | Casings, decoração, farms. |
| Iron | ingots, sheets, nuggets | Máquinas, rails, plates, mecanismos. |
| Copper | ingots, sheets, pipes, tanks | Fluidos, steam, decoração, addons. |
| Zinc | ingots | Brass. |
| Brass | ingots, sheets, casing | Logística avançada. |
| Gold | sheets | Precision lines e componentes. |
| Redstone | dust, components | Controle, deployers, logística. |
| Quartz | nether quartz | Redstone/precision e recipes. |
| Slime | slimeballs | Super Glue e contraptions. |
| Blaze | Blaze Burner, blaze cakes | Heat, steam, recipes avançadas. |

## 23.2. Casings

| Casing | Uso |
|---|---|
| [item:Andesite Casing] | Máquinas early/mid. |
| [item:Brass Casing] | Logística avançada, braços, precision, filtros. |
| Copper Casing | Fluidos, pipes e steam-related. |
| Railway Casing se disponível | Trens/addons. |
| Addon casings | TFMG/New Age/others conforme EMI. |

## 23.3. Componentes cinéticos

- Shaft.
- Cogwheel.
- Large Cogwheel.
- Gearbox.
- Vertical Gearbox.
- Encased Chain Drive.
- Adjustable Chain Gearshift.
- Clutch.
- Gearshift.
- Sequenced Gearshift.
- Rotation Speed Controller.
- Belt Connector.
- Mechanical Belt.

## 23.4. Componentes de logística

- Andesite Funnel.
- Brass Funnel.
- Andesite Tunnel.
- Brass Tunnel.
- Chute.
- [item:Smart Chute].
- Depot.
- Weighted Ejector.
- Mechanical Arm.
- Content Observer.
- Stockpile Switch.
- Display Link.
- Display Board.
- Clipboard.
- Stock Link/Stock Keeper/Package items se habilitados.

## 23.5. Componentes de contraption

- Super Glue.
- Linear Chassis.
- Radial Chassis.
- Mechanical Bearing.
- Windmill Bearing.
- Clockwork Bearing.
- Mechanical Piston.
- Piston Extension Pole.
- Gantry Shaft.
- Gantry Carriage.
- Rope Pulley.
- Cart Assembler.
- Portable Storage Interface.
- Portable Fluid Interface.
- Contraption Controls.
- Seat.

## 23.6. Componentes ferroviários

- Track.
- Train Station.
- Train Controls.
- Schedule.
- Track Signal.
- Track Observer.
- Bogey.
- Display Board.
- Steam 'n' Rails tracks.
- Semaphores.
- Conductors.
- Workbench Cart se disponível.
- Navigator/UX items.

## 23.7. Addon tech materials

| Addon | Materiais/sistemas |
|---|---|
| Crafts & Additions | wires, rods, connectors, motor/alternator parts. |
| TFMG | oil, diesel, gasoline, LPG, steel, sulfur, aluminum, lead, industrial blocks. |
| New Age | magnets, coils, energized materials, wires, heat/nuclear components. |
| Enchantment Industry | liquid experience, hyper experience, enchanted books/items. |
| Applied Create | stress cells/components, ME Gearbox, pattern providers. |

---

# 24. Catálogo de máquinas e blocos funcionais

## 24.1. Processamento

| Máquina | Uso |
|---|---|
| Mechanical Press | Plates, compacting e basin pressing. |
| Mechanical Mixer | Misturas, alloys, dough, fluid recipes. |
| Millstone | Moagem simples. |
| Crushing Wheels | Moagem pesada e ore processing. |
| Mechanical Saw | Corte de madeira e farms. |
| Encased Fan | Washing, smelting, smoking, haunting. |
| Deployer | Interação automática com item/mundo. |
| Spout | Aplicar fluido em item. |
| Item Drain | Remover/receber fluido de itens. |
| Mechanical Crafter | Crafting grande/multibloco. |
| Mechanical Arm | Mover itens entre pontos. |
| Blaze Burner | Heat para recipes e boiler. |

## 24.2. Energia e controle

| Bloco | Uso |
|---|---|
| Water Wheel / Large Water Wheel | Rotação early. |
| Windmill Bearing | Rotação renovável e visual. |
| Steam Engine | Alta capacidade com boiler. |
| Fluid Tank Boiler | Geração steam com heat/water. |
| Rotation Speed Controller | Controle de RPM. |
| Clutch | Liga/desliga rede. |
| Gearshift | Inverte rotação. |
| Sequenced Gearshift | Sequências temporizadas. |
| Redstone Link | Controle wireless por frequência. |

## 24.3. Storage e logística

| Bloco | Uso |
|---|---|
| Item Vault | Armazenamento grande, visual e conectável. |
| Fluid Tank | Armazenamento de fluidos. |
| Funnels/Tunnels | Entrada/saída e roteamento. |
| Smart Chute | Filtro vertical inteligente. |
| Stockpile Switch | Sinal por nível de estoque. |
| Content Observer | Detecta conteúdo em belt/depot/inventário. |
| Display Link | Envia dados para displays. |
| Display Board | Painel público. |

## 24.4. Mobilidade e mundo

| Bloco | Uso |
|---|---|
| Mechanical Bearing | Farms circulares. |
| Mechanical Piston | Movimento linear. |
| Gantry Carriage | Movimento linear longo. |
| Rope Pulley | Elevadores e minas. |
| Cart Assembler | Contraption sobre minecart. |
| Train Station | Montar trens. |
| Track Signal/Observer | Ferrovias seguras. |
| Schematicannon | Construção a partir de schematics. |
| Schematic Table | Preparar schematics. |

---

# 25. Fábricas populares e soluções de survival

## 25.1. Fábrica de Andesite Alloy

**Objetivo:** abastecer todo o early/mid game.

```text
Andesite input
Iron/Zinc nugget input
  -> Mixer/Basin ou crafting automatizado
  -> Andesite Alloy output
```

Estoque recomendado: 512+.

## 25.2. Fábrica de shafts/cogwheels/belts

**Objetivo:** kit básico para todo jogador.

Entradas:

- logs/planks;
- andesite alloy;
- wool/kelp dried conforme receita de belts.

Saídas:

- shafts;
- cogwheels;
- large cogwheels;
- belts.

## 25.3. Linha de plates

**Objetivo:** iron/copper/gold sheets automáticos.

```text
Input ingots
  -> Mechanical Press
  -> Output sheets
```

Integração AE2: processing pattern simples.

## 25.4. Ore Processing com Crushing Wheels

**Objetivo:** aumentar rendimento de minério.

```text
Raw Ore / Ore Block
  -> Crushing Wheels
  -> Crushed Ore
  -> Washing/Smelting conforme receita
  -> Ingots + byproducts
```

Use filtros para separar produtos. Confirme rendimento no EMI/JEI, pois o pack tem JAOPCA/AlmostUnified.

## 25.5. Iron farm clássica

Dependendo das receitas habilitadas:

```text
Cobblestone generator
  -> Crushing / Milling
  -> Gravel
  -> Washing
  -> Iron nuggets + flint/byproducts
  -> Compacting
  -> Iron ingots
```

Essa é uma das farms mais fortes de Create. Em servidor, deve ter limite, botão liga/desliga e storage controlado.

## 25.6. Gold farm / redstone farm / byproduct lines

Alguns packs permitem rotas de gold/redstone/quartz por crushing/washing/haunting. No Astron City, confirme com EMI/JEI. Se existirem, trate como midgame e monitore performance.

## 25.7. Tree farm

Ver capítulo de contraptions. Use para:

- madeira infinita;
- carvão vegetal;
- sticks;
- decoração;
- Create casings.

## 25.8. Crop farm + cozinha

```text
Crop farm
  -> Slice & Dice / Central Kitchen
  -> cozinha automática
  -> comida para expedições
```

Excelente para servidor, porque transforma comida em infraestrutura coletiva.

## 25.9. Lava farm e boiler fuel

Use lava/dripstone/pumps/tanks conforme receitas/config. Aplicações:

- smelting com fan;
- steam boiler;
- FE via outros mods;
- refino/heat systems.

## 25.10. Blaze Cake / superheat line

**Objetivo:** abastecer burners superheated.

Use para:

- recipes avançadas;
- boilers fortes;
- produção de materiais mid/late game.

Faça estoque e não dependa de crafting manual.

## 25.11. Precision Mechanism factory

**Objetivo:** automatizar o maior gargalo do midgame.

```text
Input base item
  -> Deployer 1
  -> Deployer 2
  -> Press/Saw/Deployer
  -> Output success/fail
```

Use brass funnel e filtros rígidos.

## 25.12. Mechanical Crafter wall

**Objetivo:** recipes grandes e Applied Create.

Use para:

- crushing wheels;
- components de addon;
- recipes custom do pack;
- autocrafting AE2.

## 25.13. Refinaria TFMG

Ver capítulo TFMG. Deve ser uma fábrica separada da base principal.

## 25.14. Central ferroviária

**Objetivo:** conectar distritos e recursos.

Inclua:

- estação central;
- linha industrial;
- linha agrícola;
- linha de aventura;
- sinalização;
- displays;
- mapa no wiki.

## 25.15. Biblioteca de schematics

Use Schematic Table e Schematicannon para padronizar:

- postes;
- estações;
- torres de energia;
- módulos de fábrica;
- casas de máquinas;
- pontes;
- vagões.

---

# 26. HOT TOPICS - o que é muito forte e útil

## 26.1. Water Wheel / Large Water Wheel

**Por que é forte:** energia early estável, barata e renovável.

**Uso:** primeira oficina, farms pequenas, linhas de plates.

## 26.2. Rotation Speed Controller

**Por que é forte:** resolve controle de RPM sem gambiarras enormes.

**Uso:** fábricas compactas, linhas rápidas, setups organizados.

## 26.3. Encased Fan

**Por que é forte:** uma máquina faz washing, smelting, smoking e haunting.

**Uso:** ore processing, comida, bulk smelting, recipes especiais.

## 26.4. Crushing Wheels

**Por que é forte:** base do ore processing e várias farms de recursos.

**Uso:** minério, cobble->gravel, reciclagem e byproducts.

## 26.5. Mechanical Arm

**Por que é forte:** logística inteligente e visual sem esconder tudo em pipes.

**Uso:** alimentar basins, depots, assemblers, cozinhas e linhas compactas.

## 26.6. Brass Funnel / Brass Tunnel / Smart Chute

**Por que é forte:** filtros inteligentes são o salto real da automação Create.

**Uso:** sorting, controle de output, farms com múltiplos produtos.

## 26.7. Deployer

**Por que é forte:** simula jogador e habilita farms/recipes complexas.

**Uso:** precision mechanism, plantio, uso de itens, sequenced assembly.

## 26.8. Portable Storage Interface

**Por que é forte:** faz contraptions conversarem com a base.

**Uso:** tree farms, crop farms, quarry contraptions, trens e máquinas móveis.

## 26.9. Steam Engine + Boiler

**Por que é forte:** energia Create em escala de cidade.

**Uso:** fábrica central, crushing array, mechanical crafting, refinaria.

## 26.10. Trains

**Por que é forte:** logística, estética e identidade de servidor.

**Uso:** linhas públicas, distritos, farms remotas, refinaria, exploração.

## 26.11. Schematicannon

**Por que é forte:** padroniza infraestrutura e acelera megaprojetos.

**Uso:** estações, pontes, módulos de fábrica, postes, prédios públicos.

## 26.12. Stock Keeper / Create 6 logistics

**Por que é forte:** cria almoxarifado visual antes/ao lado do AE2.

**Uso:** manter itens básicos disponíveis para jogadores.

## 26.13. Alternator + Electric Motor

**Por que é forte:** conecta Create e FE.

**Uso:** Powah/Ender IO/Oritech/AE2 com fábricas Create.

## 26.14. TFMG Distillation Tower

**Por que é forte:** abre oil, diesel, combustíveis e indústria pesada.

**Uso:** refinaria pública, power plant, distrito diesel-punk.

## 26.15. Applied Create Pattern Providers

**Por que é forte:** AE2 pede, Create crafta.

**Uso:** Mechanical Crafter automation, late game, megabase.

## 26.16. Create Enchantment Industry + Apotheosis

**Por que é forte:** transforma loot encantado/XP em indústria.

**Uso:** biblioteca de encantamentos, hyper enchanting, setups públicos.

## 26.17. Aeronautics hangar

**Por que é forte:** megaprojeto único e memorável.

**Uso:** dirigíveis, bases móveis, eventos e identidade Astron.

---

# 27. Integração com AE2, MI, Oritech, Ender IO, Powah e Productive

## 27.1. AE2

AE2 deve controlar pedidos; Create deve executar linhas visuais.

Exemplos:

| Pedido AE2 | Execução Create |
|---|---|
| Iron Plate | Mechanical Press. |
| Crushed Ore | Crushing Wheels. |
| Precision Mechanism | Sequenced Assembly. |
| [item:Crushing Wheel] | Mechanical Crafter. |
| Food | Central Kitchen/Slice & Dice. |
| Enchanted Books | Enchantment Industry. |

## 27.2. Modern Industrialization

Use Create para:

- pré-processamento visual;
- transporte de itens;
- trens levando minérios para MI;
- produção de recursos básicos;
- logística de fluidos quando fizer sentido.

Use MI para:

- química pesada;
- ligas avançadas;
- máquinas elétricas;
- nuclear/alta pressão;
- componentes industriais late game.

## 27.3. Oritech

Use Create para abastecer Oritech com:

- materiais básicos;
- farms de madeira/crops;
- trens de minério;
- FE via Crafts & Additions/New Age se necessário;
- builds industriais visuais ao redor de máquinas Oritech.

## 27.4. Ender IO / LaserIO / Modular Routers

Use esses mods quando Create ficar grande demais para uma tarefa compacta. Exemplo:

- filtros NBT;
- inserção em lados específicos;
- automações escondidas dentro de paredes;
- linhas de mob farm.

Regra: Create para visual e infraestrutura; pipes/routers para precisão compacta.

## 27.5. Powah

Powah pode alimentar Electric Motors ou rede FE que conversa com Create. Excelente para estabilizar fábricas grandes.

## 27.6. Productive Bees/Trees/Metalworks

Use Create para processar recursos renováveis:

- logs de Productive Trees;
- outputs de bees;
- metal/resource inputs;
- transporte e compactação.

---

# 28. Checklists de progresso e estoque

## 28.1. Checklist early

- [ ] 4 stacks de andesite.
- [ ] Andesite Alloy inicial.
- [ ] Shafts e cogwheels.
- [ ] Water Wheel.
- [ ] Mechanical Press.
- [ ] Mechanical Mixer + Basin.
- [ ] Mechanical Saw.
- [ ] Belts + funnels.
- [ ] Encased Fan.
- [ ] Primeira linha de plates.

## 28.2. Checklist midgame

- [ ] Brass production.
- [ ] Brass Funnel/Tunnel.
- [ ] Smart Chute.
- [ ] Mechanical Arm.
- [ ] Rotation Speed Controller.
- [ ] Deployer.
- [ ] Precision Mechanism factory.
- [ ] Crushing Wheels.
- [ ] Mechanical Crafter.
- [ ] Blaze Burner estável.

## 28.3. Checklist infraestrutura

- [ ] Boiler/Steam Engine.
- [ ] Tree farm.
- [ ] Crop farm.
- [ ] Ore processing.
- [ ] Linha de andesite alloy.
- [ ] Linha de shafts/cogwheels/belts.
- [ ] Estação ferroviária.
- [ ] Almoxarifado visual.
- [ ] Display de estoque.

## 28.4. Checklist late/endgame

- [ ] Trens públicos.
- [ ] TFMG refinery.
- [ ] Crafts & Additions FE bridge.
- [ ] New Age power/energizer.
- [ ] Enchantment Industry.
- [ ] Applied Create com AE2.
- [ ] Schematicannon library.
- [ ] Hangar Aeronautics.
- [ ] Regras de performance aplicadas.

## 28.5. Estoque sugerido para almoxarifado

| Item | Estoque sugerido |
|---|---:|
| Andesite Alloy | 1024 |
| Shaft | 512 |
| Cogwheel | 256 |
| Large Cogwheel | 128 |
| Belt Connector | 512 |
| [item:Andesite Casing] | 256 |
| Brass Casing | 128 |
| Copper Casing | 128 |
| Iron Sheet | 512 |
| Copper Sheet | 512 |
| Brass Sheet | 256 |
| Funnels | 128 |
| Chutes | 128 |
| Fluid Pipes | 256 |
| Train Track | 2048+ |
| Super Glue | 64 |
| Deployers | 32 |
| Mechanical Crafters | 128 |

---

# 29. Performance e regras de servidor

Create é visual e poderoso, mas precisa de disciplina em servidor.

## 29.1. Principais riscos

| Risco | Solução |
|---|---|
| Muitos belts com itens soltos | Use vaults, buffers, stacks, desligamento por estoque. |
| Contraptions gigantes | Defina limite e teste com spark. |
| Farms 24/7 | Use clutch, stockpile switch e redstone. |
| Trens demais | Rotas com demanda, schedules limpos e sinais. |
| Refino com fluidos travando | Rota para todos os subprodutos. |
| Chunk borders | Evite máquinas cruzando chunks críticos. |
| Entidades/drop no chão | Capture output imediatamente. |
| Aeronautics sem controle | Regras de tamanho e uso. |

## 29.2. Boas práticas

- Toda fábrica pública deve ter botão liga/desliga.
- Use Stockpile Switch para parar quando storage estiver cheio.
- Use Trash Cans apenas com filtros seguros.
- Evite deixar belts enormes renderizando itens raros.
- Prefira vaults/inventários em pontos intermediários.
- Use CreateBetterFps e mantenha o client atualizado.
- Use spark para diagnosticar farms pesadas.
- Use Chunky para pré-geração do mundo.
- Não chunkloade refinarias, trens ou aeronaves sem regra.

## 29.3. Padrão de placa para fábrica

```text
[FÁBRICA] Nome
Dono/Equipe:
Função:
Input:
Output:
Liga/desliga:
Pode mexer? Sim/Não
Observações:
```

---

# 30. Sugestão de capítulos para FTB Quests

## Capítulo: Mechanical Beginnings

- Coletar andesite.
- Fazer Andesite Alloy.
- Fazer Shaft.
- Fazer Cogwheel.
- Fazer Water Wheel.
- Fazer Mechanical Press.
- Fazer Mechanical Mixer.
- Fazer Belt.

## Capítulo: The Heart of the City

- Fazer Encased Fan.
- Fazer Mechanical Saw.
- Fazer primeira tree farm.
- Fazer Crushing Wheels.
- Fazer ore processing.
- Fazer Brass.
- Fazer Brass Funnel/Tunnel.
- Fazer Mechanical Arm.

## Capítulo: Trains and Infrastructure

- Fazer Train Track.
- Fazer Train Station.
- Montar primeiro trem.
- Criar schedule.
- Usar Track Signal.
- Criar estação pública.

## Capítulo: Industrial Expansion

- Fazer boiler.
- Fazer steam engine.
- Fazer Crafts & Additions Alternator/Motor.
- Fazer New Age generator/motor.
- Começar TFMG oil.
- Construir refinaria.

## Capítulo: Digital Mechanics

- Conectar AE2 ao Create.
- Automatizar Mechanical Crafter.
- Criar processing patterns para Press/Mixer/Crushing.
- Usar Applied Create.

## Capítulo: Eternal City Projects

- Estação central.
- Almoxarifado público.
- Refinaria pública.
- Fábrica de comida.
- Hangar Aeronautics.
- Biblioteca de schematics.

---

# 31. Notas para mantenedores do wiki

## 31.1. Estrutura sugerida no AstronWiki

```text
src/components/guides/CreateGuide.jsx
src/data/guides/create.js
src/data/recipes/createRecipes.js
src/data/factories/createFactories.js
```

## 31.2. Páginas menores recomendadas

- `/create/primeiros-passos`
- `/create/stress-rpm`
- `/create/fabricas-populares`
- `/create/trens`
- `/create/contraptions`
- `/create/tfmg`
- `/create/new-age`
- `/create/crafts-additions`
- `/create/applied-create`
- `/create/hot-topics`

## 31.3. Componentes úteis

- Cards de máquina.
- Tabs por fase.
- Tabelas de estoque.
- Diagrama ASCII ou visual de fábricas.
- Aviso fixo “confirme no EMI/JEI”.
- Tags: `early`, `midgame`, `trains`, `factory`, `server`, `hot-topic`.

## 31.4. Avisos permanentes

- Receitas podem mudar por KubeJS/config.
- Create deve permanecer relevante no pack.
- Nem toda automação precisa virar AE2 invisível.
- Use Ponder.
- Use spark se houver lag.

---

# 32. Fontes e observações de precisão

Este guia foi construído para o Astron City usando:

- contexto interno do modpack Astron City;
- modlist atual conhecida do pack;
- documentação/descrições públicas do Create e addons;
- conhecimento geral de progressão Create;
- validação conceitual com CurseForge/Modrinth e wikis públicas.

Fontes públicas úteis para atualização futura:

- Create CurseForge: https://www.curseforge.com/minecraft/mc-mods/create
- Create 6.0.10 for Minecraft 1.21.1: https://www.curseforge.com/minecraft/mc-mods/create/files/7963363
- Create Mod Wiki: https://create.fandom.com/wiki/Create_Mod_Wiki
- Kinetic Stress: https://create.fandom.com/wiki/Kinetic_Stress
- Create Crafts & Additions: https://www.curseforge.com/minecraft/mc-mods/createaddition
- Create: Steam 'n' Rails: https://www.curseforge.com/minecraft/mc-mods/create-steam-n-rails
- Create: The Factory Must Grow: https://www.curseforge.com/minecraft/mc-mods/create-industry
- TFMG Wiki: https://tfmg.miraheze.org/wiki/Main_Page
- Create: New Age: https://www.curseforge.com/minecraft/mc-mods/create-new-age
- Applied Create: https://www.curseforge.com/minecraft/mc-mods/applied-create
- Create: Enchantment Industry: https://www.curseforge.com/minecraft/mc-mods/create-enchantment-industry

## 32.1. Observação de precisão

Create e seus addons mudam bastante entre versões, especialmente em Minecraft 1.21.1. Alguns nomes, receitas e mecânicas podem variar por versão, config ou KubeJS. O wiki deve orientar o jogador a confirmar recipes no **EMI/JEI** e comportamento no **Ponder**.

## 32.2. Filosofia final

No Astron City, Create não é apenas tecnologia. É arquitetura, transporte, comunidade e memória visual.

> Uma boa fábrica Create não só produz itens. Ela vira lugar, ponto de encontro, landmark e parte da história do servidor.

