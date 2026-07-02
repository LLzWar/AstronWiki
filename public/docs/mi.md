---
title: "Modern Industrialization - Guia Completo"
modpack: "ASTRON CITY"
minecraft: "1.21.1"
loader: "NeoForge"
mods_cobertos:
  - "Modern Industrialization 2.4.3"
  - "Extended Industrialization 1.15.42"
  - "Modern Dynamics 0.9.6"
status: "Guia wiki-ready"
ultima_revisao: "2026-07-01"
---

# Modern Industrialization - Guia Completo para o Astron City

> Guia escrito para o **ASTRON CITY**, um modpack NeoForge 1.21.1 de tecnologia, aventura, magia, construção coletiva e progressão longa em servidor survival.
>
> Este guia cobre **Modern Industrialization**, **Extended Industrialization** e **Modern Dynamics**, com foco em progressão step-by-step, fábricas úteis, recursos, máquinas, integração com AE2/Create e decisões de survival multiplayer.

---

## Sumário

1. [O que é Modern Industrialization no Astron City](#1-o-que-e-modern-industrialization-no-astron-city)
2. [Mods cobertos e papel de cada addon](#2-mods-cobertos-e-papel-de-cada-addon)
3. [Como usar este guia](#3-como-usar-este-guia)
4. [Glossário industrial rápido](#4-glossario-industrial-rapido)
5. [Mapa de progressão completo](#5-mapa-de-progressao-completo)
6. [Preparação antes de começar](#6-preparacao-antes-de-comecar)
7. [Steam Age - bronze, vapor e primeira indústria](#7-steam-age---bronze-vapor-e-primeira-industria)
8. [Steel Age - coke, aço e estrutura industrial](#8-steel-age---coke-aco-e-estrutura-industrial)
9. [Electric Age - cabos, EU e máquinas elétricas](#9-electric-age---cabos-eu-e-maquinas-eletricas)
10. [Midgame - multiblocos, óleo, diesel e stainless steel](#10-midgame---multiblocos-oleo-diesel-e-stainless-steel)
11. [Late Game - alta pressão, nuclear, implosão e produção massiva](#11-late-game---alta-pressao-nuclear-implosao-e-producao-massiva)
12. [End Game - quantum, fusão, plasma e megaprojetos](#12-end-game---quantum-fusao-plasma-e-megaprojetos)
13. [Extended Industrialization - máquinas, energia e automação avançada](#13-extended-industrialization---maquinas-energia-e-automacao-avancada)
14. [Modern Dynamics - pipes, cabos, filtros e Machine Extenders](#14-modern-dynamics---pipes-cabos-filtros-e-machine-extenders)
15. [Catálogo de recursos e itens por família](#15-catalogo-de-recursos-e-itens-por-familia)
16. [Catálogo de máquinas e multiblocos](#16-catalogo-de-maquinas-e-multiblocos)
17. [Fábricas populares e soluções de survival](#17-fabricas-populares-e-solucoes-de-survival)
18. [HOT TOPICS - o que é muito forte e útil](#18-hot-topics---o-que-e-muito-forte-e-util)
19. [Integração com AE2](#19-integracao-com-ae2)
20. [Integração com Create e infraestrutura da cidade](#20-integracao-com-create-e-infraestrutura-da-cidade)
21. [Checklists de estoque e progresso](#21-checklists-de-estoque-e-progresso)
22. [Performance e regras de servidor](#22-performance-e-regras-de-servidor)
23. [Sugestão de capítulos para FTB Quests](#23-sugestao-de-capitulos-para-ftb-quests)
24. [Notas para mantenedores do wiki](#24-notas-para-mantenedores-do-wiki)
25. [Fontes e observações de precisão](#25-fontes-e-observacoes-de-precisao)

---

<div class="mc-recipe" style="margin: 2rem auto;">
  <div class="mc-grid">
    <div class="mc-slot" title="Bronze Plate"><img src="/assets/sprites/bronze_plate.png" alt="Bronze Plate" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Bronze Plate"><img src="/assets/sprites/bronze_plate.png" alt="Bronze Plate" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Bronze Plate"><img src="/assets/sprites/bronze_plate.png" alt="Bronze Plate" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Bronze Plate"><img src="/assets/sprites/bronze_plate.png" alt="Bronze Plate" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Bronze Gear"><img src="/assets/sprites/bronze_gear.png" alt="Bronze Gear" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Bronze Plate"><img src="/assets/sprites/bronze_plate.png" alt="Bronze Plate" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Bronze Plate"><img src="/assets/sprites/bronze_plate.png" alt="Bronze Plate" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Bronze Plate"><img src="/assets/sprites/bronze_plate.png" alt="Bronze Plate" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Bronze Plate"><img src="/assets/sprites/bronze_plate.png" alt="Bronze Plate" onError="this.src='/assets/sprites/barrier.png'" /></div>
  </div>
  <div class="mc-arrow"></div>
  <div class="mc-result" title="Bronze Machine Casing"><img src="/assets/sprites/bronze_machine_casing.png" alt="Bronze Machine Casing" onError="this.src='/assets/sprites/barrier.png'" /></div>
</div>

# 1. O que é Modern Industrialization no Astron City

**Modern Industrialization**, ou **MI**, é o grande caminho de indústria pesada do Astron City. Ele transforma o jogador em engenheiro industrial: você começa com bronze, vapor e máquinas simples, passa para aço, eletricidade, cabos, química, multiblocos, petróleo, diesel, aço inox, energia nuclear, materiais avançados e, no fim, estruturas de escala absurda como fusão, plasma e tecnologia quantum.

No Astron City, MI deve ser entendido assim:

- **Create** dá vida visual à cidade: engrenagens, esteiras, trens, contraptions e fábricas aparentes.
- **AE2** organiza storage, autocrafting, pedidos e controle de estoque.
- **MI** faz a indústria pesada: metais, ligas, processamento de minério, química, diesel, energia e componentes complexos.
- **Modern Dynamics** conecta máquinas com pipes/cabos/filtros sem virar bagunça.
- **Extended Industrialization** adiciona máquinas, energia, ferramentas, recursos e sistemas avançados para expandir o papel de MI.

A fantasia principal do MI é: **tudo que você faz manualmente no começo deve virar uma linha automática no futuro**.

---

# 2. Mods cobertos e papel de cada addon

| Mod | Versão no Astron City | Papel no guia |
|---|---:|---|
| Modern Industrialization | 2.4.3 | Core do sistema industrial: vapor, máquinas, EU, multiblocos, óleo, diesel, nuclear, fusão, quantum. |
| Extended Industrialization | 1.15.42 | Expansão de MI com novas máquinas, energia, ferramentas, recursos, Processing Array, Tesla/wireless e automações avançadas. |
| Modern Dynamics | 0.9.6 | Logistics: pipes de itens/fluidos, cabos de energia compatíveis com MI, filtros, attachments e Machine Extenders. |

## 2.1. Por que MI é importante no pack

MI é uma rota de progressão longa e profunda. Ele é excelente para survival multiplayer porque cria especializações reais:

- jogador minerador vira fornecedor de ores;
- jogador engenheiro vira operador de siderúrgica;
- jogador de AE2 vira arquiteto de autocrafting;
- jogador builder transforma usinas e refinarias em marcos da cidade;
- jogador explorador fornece materiais raros para tiers avançados.

<div class="callout warning">
  <div class="callout-title">?? AVISO SOBRE RECEITAS</div>
  <p>O Astron City usa vários mods que podem alterar, unificar ou adicionar receitas: **AlmostUnified**, **JAOPCA**, **KubeJS**, **EMI**, **JEI**, Create, AE2, Oritech, Ender IO, Productive Bees/Metalworks e outros.<br><br>Por isso, este guia ensina **ordem de progressão, uso das máquinas, fábricas e arquitetura de automação**. Para receitas exatas, sempre confirme no jogo usando:<br><br>- **EMI/JEI** para receita final do servidor;<br>- **Jade** para diagnosticar máquinas, tanques e estados;<br>- **GuideME / guia in-game**, quando disponível;<br>- busca por `@modern_industrialization`, `@extended_industrialization` e `@modern_dynamics`.<br><br>---<br><br># 3. Como usar este guia<br><br>Use este guia em três modos:</p>
</div>

## Modo jogador iniciante

Siga a progressão em ordem:

1. Preparação.
2. Steam Age.
3. Steel Age.
4. Electric Age.
5. Midgame.
6. Late Game.
7. End Game.

Não tente montar nuclear, fusão ou oil processing antes de entender boiler, steam, hatches, pipes e máquinas elétricas.

## Modo engenheiro do servidor

Use os capítulos de fábricas, checklists e performance. O objetivo não é só zerar o mod; é criar infraestrutura estável para a cidade.

## Modo mantenedor do wiki

Use as tabelas como base para páginas menores:

- “Primeira sala de MI”.
- “Como fazer aço”.
- “Como montar energia diesel”.
- “Como integrar MI com AE2”.
- “Hot Topics de MI”.

---

# 4. Glossário industrial rápido

| Termo | Significado prático |
|---|---|
| EU | Unidade de energia do Modern Industrialization. |
| Steam | Vapor. No começo, é o “combustível energético” das máquinas de bronze/steel. |
| Hatch | Bloco de entrada/saída usado em multiblocos: item, fluido ou energia. |
| Bus | Entrada/saída de itens em alguns sistemas; no AE2, conecta autocrafting e storage. |
| Overclock | Fazer uma máquina trabalhar mais rápido, geralmente com mais consumo de energia. |
| Tier | Nível tecnológico: bronze, steel, LV, MV, HV, nuclear, quantum etc. |
| Multibloco | Estrutura grande montada com vários blocos, que funciona como uma máquina. |
| Buffer | Baú, barrel, tank ou interface intermediária entre duas etapas. |
| Overflow | Rota de descarte/backup quando um item ou fluido enche demais. |
| Processing Pattern | Padrão do AE2 que envia itens para uma máquina externa e espera um resultado. |
| Stockkeeping | Manter estoque mínimo automático de itens críticos, geralmente com ME Requester. |

---

# 5. Mapa de progressão completo

A progressão ideal do MI no Astron City pode ser vista como uma escada:

```text
Sobrevivência vanilla
  -> Mineração de cobre, estanho, ferro, carvão, redstone e clay
  -> Bronze e ferramentas iniciais
  -> Bronze Boiler + máquinas de bronze
  -> Coke Oven + creosote + fire clay
  -> Steel + Steam Blast Furnace
  -> Steam Quarry e automação inicial
  -> Steam Turbine + primeira rede EU
  -> Máquinas elétricas LV
  -> Assembler, Wiremill, Chemical Reactor, Electrolyzer, Centrifuge
  -> Electric Blast Furnace
  -> Stainless Steel
  -> Oil Drilling Rig + Distillation Tower
  -> Diesel Power
  -> Vacuum Freezer + Pressurizer + Implosion Compressor
  -> Large Steam Boiler / HP Steam / Large Turbine / Heat Exchanger
  -> Nuclear Reactor
  -> Quantum gear/storage
  -> Fusion Reactor + Plasma Turbine
  -> AE2 autocrafting completo
```

## 5.1. Tiers por objetivo

| Fase | Meta principal | O que desbloqueia |
|---|---|---|
| Preparação | Recursos e base industrial | Bronze, primeiras máquinas, espaço para expansão. |
| Steam Age | Vapor e bronze | Compressor, Mixer, Macerator, Cutting Machine, primeira automação. |
| Steel Age | Coke, fire clay e aço | Steel machines, blast furnace, quarry, peças melhores. |
| Electric Age | EU, cabos e máquinas elétricas | Assembler, circuitos, química, processamento melhor. |
| Midgame | Multiblocos e petróleo | EBF, stainless, diesel, distillation, vacuum. |
| Late Game | Energia grande e materiais avançados | HP steam, nuclear, implosion, grandes plantas industriais. |
| End Game | Quantum, fusão e plasma | Gear poderoso, armazenamento extremo, megaprojetos. |

---

# 6. Preparação antes de começar

## 6.1. Recursos que você deve juntar antes de entrar no MI

Antes de montar a primeira sala de MI, junte:

| Recurso | Quantidade inicial sugerida | Uso |
|---|---:|---|
| Copper | 2-4 stacks | Bronze, cabos, componentes. |
| Tin | 2-4 stacks | Bronze e primeiros componentes. |
| Iron | 4-8 stacks | Máquinas, plates, estruturas, aço. |
| Coal/Charcoal | 4-8 stacks | Combustível, coke, steel. |
| Clay | 2-4 stacks | Fire clay, bricks, estruturas térmicas. |
| Sand/Gravel | 2-4 stacks | Vidro, concreto/partes, processos. |
| Redstone | 1-2 stacks | Circuitos e máquinas elétricas. |
| Quartz/Nether Quartz | 1 stack+ | Circuitos e eletrônica. |
| Rubber/resina, se disponível | quanto achar | Cabos e componentes elétricos. |
| Água infinita | obrigatório | Steam, boilers, química. |
| Espaço plano | grande | Multiblocos crescem muito. |

## 6.2. Local ideal para sua primeira fábrica

Escolha um local com:

- água por perto;
- espaço para expandir para os lados;
- acesso a mineração ou trem Create;
- distância segura de casas decorativas, para evitar barulho e lag visual;
- chunkloading controlado, se o servidor permitir;
- corredor técnico para pipes/cabos.

## 6.3. Layout recomendado de base industrial

Para um servidor de amigos, evite “bola de spaghetti”. Use uma planta simples:

```text
[Entrada de recursos] -> [Processamento bruto] -> [Componentes] -> [Multiblocos]
              |                 |                    |
              v                 v                    v
          [Storage]         [AE2 futuro]          [Power plant]
```

Divida em setores:

| Setor | Função |
|---|---|
| Sala Steam | Boilers, máquinas de bronze/steel, água e combustível. |
| Siderúrgica | Coke Oven, Blast Furnace, steel e fire clay. |
| Machine Hall | Máquinas elétricas repetitivas. |
| Refinaria | Oil, distillation, diesel, tanques. |
| Power Plant | Boilers grandes, turbines, diesel, nuclear. |
| AE2 Control | Pattern Providers, interfaces, storage, requests. |
| Storage técnico | Barrels/tanks externos, bulk storage, overflow. |

---

# 7. Steam Age - bronze, vapor e primeira indústria

A Steam Age é a primeira fase real do MI. Ela ensina três coisas: máquinas precisam de energia, recursos intermediários importam, e automação começa antes do AE2.

## 7.1. Objetivos da Steam Age

Ao terminar esta fase, você deve ter:

- Bronze Boiler funcionando sem parar.
- Produção de bronze estável.
- Bronze Compressor.
- Bronze Mixer.
- Bronze Macerator.
- Bronze Cutting Machine.
- Primeiros pipes/tanks.
- Primeiro processamento de minério.
- Preparação para Coke Oven e steel.

## 7.2. Step-by-step da Steam Age

### Step 1 - Faça bronze

Bronze normalmente vem de **copper + tin**. Use EMI/JEI para confirmar a receita exata do pack.

Use bronze para:

- máquinas de bronze;
- pipes iniciais;
- plates;
- casings;
- primeiros componentes.

### Step 2 - Faça ferramentas e componentes manuais

Priorize itens que reduzem crafting manual:

| Item | Por que é importante |
|---|---|
| Forge Hammer | Permite plates/peças iniciais antes do Compressor. |
| Wrench | Configuração e rotação de máquinas/pipes. |
| Cutter/File/Saw, se presentes | Componentes, rods, wires, plates especiais. |
| Buckets/Tanks | Água, steam e fluidos iniciais. |

### Step 3 - Monte o Bronze Boiler

O Bronze Boiler é o coração do começo. Ele consome combustível e água para produzir steam.

Checklist:

- entrada constante de água;
- combustível armazenado por perto;
- saída de steam conectada corretamente;
- espaço para máquinas ao redor;
- rota de desligamento manual.

Erro comum: colocar boiler sem água suficiente. Em survival, isso causa paradas constantes e irrita todo mundo no servidor.

### Step 4 - Coloque as primeiras máquinas de bronze

A ordem sugerida:

1. **Bronze Compressor** - transforma ingots em plates de forma mais eficiente que o martelo.
2. **Bronze Mixer** - faz misturas como bronze e materiais de transição.
3. **Bronze Macerator** - processa ores/dusts e melhora rendimento.
4. **Bronze Cutting Machine** - corta materiais e ajuda em componentes.
5. **Bronze Furnace** - smelting industrial inicial.

### Step 5 - Faça buffers de entrada e saída

Mesmo no começo, use buffers:

```text
[Baú de entrada] -> [Máquina] -> [Baú de saída]
```

Com Modern Dynamics:

```text
[Baú] -> [Item Pipe + filtro] -> [Máquina] -> [Item Pipe] -> [Baú de saída]
```

Nunca jogue tudo direto em uma máquina sem filtro quando a linha tiver mais de um item.

### Step 6 - Automatize água

Toda base MI depende de água. Faça um sistema que você não precise abastecer manualmente.

Boas soluções:

- pump do MI, se disponível no seu tier;
- Create hose pulley/pump, se configurado no pack;
- tanques intermediários;
- Modern Dynamics Fluid Pipes;
- AE2 ou outro sistema de fluidos no mid/late game.

### Step 7 - Primeira linha de minério

Comece simples:

```text
Ore / Raw Ore
  -> Macerator
  -> Furnace
  -> Ingots
```

Depois expanda para:

```text
Ore / Raw Ore
  -> Macerator
  -> etapas secundárias, se disponíveis
  -> Furnace / Blast Furnace
  -> Ingots + subprodutos
```

## 7.3. Primeira fábrica: Steam Starter Room

**Função:** tirar o jogador do crafting manual.

### Componentes

- 1 Bronze Boiler.
- 1 sistema de água.
- 1 buffer de combustível.
- 1 Bronze Compressor.
- 1 Bronze Mixer.
- 1 Bronze Macerator.
- 1 Bronze Cutting Machine.
- 1 Bronze Furnace.
- 2-4 baús/barrels.
- Pipes de item/fluid quando possível.

### Layout recomendado

```text
                [Water Tank]
                    |
[Fuel Chest] -> [Bronze Boiler] -> [Steam Line]
                                  /   |    |    \
                           Compressor Mixer Macerator Furnace
                                  \   |    |    /
                                  [Output Chest]
```

### Upgrades futuros

- Substituir baús por drawers/barrels maiores.
- Ligar input/output ao AE2.
- Separar ore processing em sala própria.
- Transformar boiler pequeno em boiler grande.

---

# 8. Steel Age - coke, aço e estrutura industrial

Steel é a primeira grande virada do MI. A partir daqui, você para de brincar de “máquina inicial” e começa a construir uma siderúrgica.

## 8.1. Objetivos da Steel Age

Ao terminar esta fase, você deve ter:

- Coke Oven.
- Produção de coke e creosote.
- Fire clay / bricks térmicos, conforme receitas do pack.
- Steam Blast Furnace ou estrutura equivalente para steel.
- Steel machines.
- Steam Quarry ou preparação para quarry.
- Primeiras peças elétricas.

## 8.2. Step-by-step da Steel Age

### Step 1 - Construa Coke Oven

O Coke Oven é uma máquina/multibloco essencial para transformar carvão em coke e gerar creosote.

Use coke para:

- combustível melhor;
- processos térmicos;
- cadeia de steel.

Use creosote para:

- treated wood, se receitas pedirem;
- química inicial;
- produção de componentes ou combustível, dependendo do pack.

### Step 2 - Crie uma linha de fire clay

Fire clay normalmente usa clay + dusts/processos específicos. Confirme no EMI.

Use para:

- bricks térmicos;
- estruturas de blast furnace;
- progressão para steel.

### Step 3 - Faça steel

Steel é necessário para:

- máquinas de steel;
- peças melhores;
- casings;
- multiblocos;
- transição elétrica.

Fábrica recomendada:

```text
Coal -> Coke Oven -> Coke
Iron + Coke + Fire Clay chain -> Blast Furnace -> Steel
Steel -> Compressor/Cutting/Wiremill -> Plates/Rods/Components
```

### Step 4 - Atualize máquinas críticas para steel

Priorize:

1. Steel Compressor.
2. Steel Macerator.
3. Steel Cutting Machine.
4. Steel Furnace.
5. Steel Mixer.
6. Packer/Unpacker, se disponível.
7. Wiremill, quando começar a parte elétrica.

### Step 5 - Prepare cabos e circuitos

Antes da Electric Age, produza:

- rubber/cable insulation;
- copper wires;
- tin wires, se necessário;
- steel plates;
- redstone components;
- primeiros circuits.

## 8.3. Fábrica: Mini Siderúrgica

**Função:** tornar steel uma produção regular, não uma gambiarra manual.

### Entradas

- Coal/charcoal.
- Iron.
- Clay.
- Dusts necessários para fire clay.
- Água/steam.

### Saídas

- Coke.
- Creosote.
- Steel ingots.
- Steel plates.
- Steel rods.
- Machine casings.

### Layout

```text
[Coal Input] -> [Coke Oven] -> [Coke Buffer]
                         \-> [Creosote Tank]

[Iron Input] + [Coke] + [Fire Clay chain]
             -> [Blast Furnace]
             -> [Steel Buffer]
             -> [Compressor/Cutting]
             -> [Steel Parts]
```

<div class="callout info">
  <div class="callout-title">?? DICA DE SERVIDOR</div>
  <p>Transforme a siderúrgica em um prédio. No Astron City, fábricas devem virar marcos visuais, não apenas máquinas enterradas.</p>
</div>

# 9. Electric Age - cabos, EU e máquinas elétricas

A Electric Age é a fase onde MI acelera muito. Aqui você sai de máquinas a vapor e entra em cabos, redes, EU, circuitos, máquinas elétricas e automação real.

## 9.1. Objetivos da Electric Age

Ao terminar esta fase, você deve ter:

- Steam Turbine ou fonte inicial de EU.
- Cabos LV.
- Máquinas elétricas básicas.
- Assembler.
- Wiremill.
- Circuit line.
- Primeira química.
- Primeira rede organizada de energia.
- Preparação para Electric Blast Furnace.

## 9.2. Entendendo EU e cabos

MI usa tiers de energia. O jogador deve aprender cedo:

- máquinas precisam receber energia no tier correto;
- cabos têm limite de transferência;
- sobrecarga e gargalos travam fábricas;
- distância e topologia importam;
- energia centralizada precisa de buffers.

Estratégia recomendada:

```text
[Boiler] -> [Steam Turbine] -> [Energy Cable] -> [Machine Hall]
```

Depois:

```text
[Power Plant] -> [Energy Storage/Buffer] -> [Backbone] -> [Setores]
```

## 9.3. Step-by-step da Electric Age

### Step 1 - Faça Steam Turbine

Converta steam em EU. Comece pequeno, mas planeje expansão.

### Step 2 - Faça cabos LV

Use cabos LV para máquinas iniciais. Separe linhas:

- linha de processamento;
- linha de componentes;
- linha de química;
- linha de multiblocos.

### Step 3 - Monte a LV Machine Hall

A LV Machine Hall é a sala das máquinas elétricas básicas.

Prioridade de máquinas:

| Máquina | Uso principal |
|---|---|
| Electric Compressor | Plates, componentes comprimidos. |
| Electric Macerator | Dusts, processamento de minério. |
| Electric Mixer | Misturas, alloys, química básica. |
| Electric Cutting Machine | Corte de plates, componentes. |
| Electric Furnace | Smelting rápido e automatizável. |
| Assembler | Crafting industrial de componentes e máquinas. |
| Wiremill | Wires/cables. |
| Chemical Reactor | Química, borracha, combustíveis, intermediários. |
| Centrifuge | Separação de dusts/fluidos. |
| Electrolyzer | Separação química e gases. |
| Distillery | Destilação simples. |
| Polarizer | Itens magnéticos, quando receitas exigirem. |
| Packer/Unpacker | Conversão compacta/descompacta e recipes específicas. |

### Step 4 - Comece a usar side configuration

Configure entradas e saídas de forma padronizada:

```text
Topo: entrada de itens
Baixo: saída de itens
Esquerda: fluido de entrada
Direita: fluido de saída
Traseira: energia
Frente: acesso/manual
```

Esse padrão facilita AE2 e Modern Dynamics depois.

### Step 5 - Automatize circuitos

Circuitos são gargalo constante. Faça uma linha dedicada:

```text
Copper/Tin/Gold/etc -> Wiremill -> Wires
Rubber/Silicon/etc -> Componentes
Redstone/Quartz/etc -> Circuit parts
Assembler -> Circuits
```

### Step 6 - Prepare o Electric Blast Furnace

O Electric Blast Furnace é um marco. Ele abre ligas e materiais importantes para midgame.

Antes de montar:

- estoque de steel;
- energia estável;
- casings/hatches;
- cabos do tier correto;
- buffer de input/output;
- espaço para manutenção.

## 9.4. Fábrica: LV Machine Hall

**Função:** sala modular de máquinas elétricas.

### Entradas

- Ingots.
- Dusts.
- Wires.
- Plates.
- Redstone.
- Rubber.
- Pequenos fluidos.

### Saídas

- Plates.
- Rods.
- Wires.
- Circuits.
- Casings.
- Machine hulls.
- Componentes.

### Layout recomendado

```text
[Energy Backbone]
      |
-------------------------------------------------
| Compressor | Macerator | Mixer | Cutting | Furnace |
-------------------------------------------------
| Assembler  | Wiremill  | Chem  | Centri  | Electro |
-------------------------------------------------
      |
[Output Bus / Chest / AE2 Import futuro]
```

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>Deixe um espaço atrás das máquinas para cabos e pipes. Manutenção fica muito mais fácil.</p>
</div>

# 10. Midgame - multiblocos, óleo, diesel e stainless steel

No midgame, MI vira indústria de verdade. Você começa a criar multiblocos grandes, refinar óleo, gerar diesel, produzir stainless steel e montar plantas automáticas que ficam ligadas por horas.

## 10.1. Objetivos do Midgame

- Electric Blast Furnace funcional.
- Stainless Steel.
- Large Tank.
- Oil Drilling Rig.
- Distillation Tower.
- Large Diesel Generator.
- Vacuum Freezer.
- Pressurizer.
- Linha de circuitos avançada.
- AE2 processing patterns para máquinas principais.

## 10.2. Electric Blast Furnace

O Electric Blast Furnace, ou EBF, é usado para materiais e ligas de temperatura alta.

Use para:

- ligas avançadas;
- stainless steel;
- materiais que exigem calor/energia maior;
- progressão para mid/late game.

### Setup recomendado

```text
[Input Buffer] -> [Item Input Hatch]
[Energy Cable] -> [Energy Hatch]
[Output Hatch] -> [Output Buffer]
```

Nunca construa EBF sem buffer, porque ele vira gargalo de autocrafting.

## 10.3. Stainless Steel

Stainless Steel é um divisor de águas. Use para:

- casings avançados;
- hatches melhores;
- máquinas de midgame;
- estruturas industriais duráveis;
- upgrades.

### Fábrica: Stainless Line

```text
Metals/Dusts -> Mixer -> Blend/Dust
Blend/Dust -> Electric Blast Furnace -> Stainless Steel
Stainless -> Compressor/Cutting/Assembler -> Casings/Hulls/Hatches
```

### Estoque sugerido

| Item | Estoque mínimo |
|---|---:|
| Stainless Steel Ingot | 512 |
| Stainless Steel Plate | 256 |
| Advanced Machine Hull | 32 |
| Hatches comuns | 16 de cada |
| Casings | 128+ |

## 10.4. Oil Drilling Rig

O Oil Drilling Rig extrai petróleo/óleo para a cadeia de combustíveis.

### Antes de montar

- tenha energia estável;
- tenha fluid pipes;
- tenha tanks grandes;
- tenha plano para subprodutos;
- tenha área separada da base principal.

## 10.5. Distillation Tower

A Distillation Tower separa óleo em frações e subprodutos. É o coração da refinaria.

### Regra de ouro

**Todo fluido produzido precisa de destino.**

Destino pode ser:

- consumo em máquina;
- tanque;
- processamento secundário;
- descarte controlado;
- export para outra fábrica.

Se um subproduto lotar, a refinaria inteira pode travar.

## 10.6. Large Diesel Generator

Gera energia usando diesel/combustível líquido.

### Por que é forte

- energia mais estável que setups pequenos de steam;
- bom para base média;
- combina com Oil Drilling Rig e Distillation Tower;
- vira backbone até nuclear/HP steam.

## 10.7. Vacuum Freezer

Usado para processos de resfriamento avançado.

Use para:

- materiais quentes;
- componentes avançados;
- transição para tiers maiores;
- cadeia de superconductors/cryogenic, conforme receitas do pack.

## 10.8. Pressurizer

Máquina de processos sob pressão. Normalmente entra em química, materiais avançados e produção de componentes.

Use com buffers e controle de fluido.

## 10.9. Fábrica: Refinaria Diesel

### Entradas

- Oil/crude oil.
- Energia inicial.
- Tanks.
- Pipes de fluido.

### Saídas

- Diesel/fuel.
- Frações leves/pesadas.
- Subprodutos químicos.
- Energia via Large Diesel Generator.

### Layout

```text
[Oil Drilling Rig]
        |
   [Crude Oil Tank]
        |
[Distillation Tower]
   |       |        |
Diesel  Light    Heavy/Other
   |       |        |
[Generator] [Chem chain] [Tank/Overflow]
```

### Checklist anti-travamento

- Cada saída tem tank.
- Cada tank tem indicador visual.
- Fluido sem uso tem overflow seguro.
- Generator pode ser desligado manualmente.
- Chunks da refinaria são conhecidos e documentados.

---

# 11. Late Game - alta pressão, nuclear, implosão e produção massiva

Late Game é quando MI vira infraestrutura de cidade. Não é mais “minha máquina”; é “a usina do servidor”.

## 11.1. Objetivos do Late Game

- Large Steam Boiler / Advanced Large Steam Boiler.
- High Pressure boilers.
- Large Steam Turbine.
- Heat Exchanger.
- Implosion Compressor.
- Nuclear Reactor.
- Large Tank network.
- Processing em lote com Extended Industrialization.
- AE2 controlando estoque e pedidos.

## 11.2. Large Steam Boiler e High Pressure Steam

Boilers grandes produzem muito steam. Variantes avançadas/high pressure produzem volumes maiores e exigem infraestrutura melhor.

### Uso ideal

- alimentar Large Steam Turbine;
- criar power plant central;
- sustentar machine halls;
- servir de ponte antes de nuclear/fusão.

### Setup conceitual

```text
[Fuel Input] + [Water Input]
          -> [Large Steam Boiler]
          -> [Steam Buffer / Pipe]
          -> [Large Steam Turbine]
          -> [EU Backbone]
```

## 11.3. Heat Exchanger

O Heat Exchanger entra em plantas avançadas de energia, especialmente quando você quer transformar calor/fluido quente em steam útil.

Use em salas próprias, com controle visual e cutoff.

## 11.4. Implosion Compressor

O Implosion Compressor é usado para materiais de alta pressão/explosão.

### Por que é importante

- destrava materiais avançados;
- costuma ser gargalo de recipes high-tier;
- merece autocrafting dedicado;
- pode exigir TNT/explosivos ou recursos específicos.

### Fábrica: Implosion Cell

```text
[AE2 Pattern Provider]
      |
[Input Buffer] -> [Implosion Compressor] -> [Output Buffer]
      |
[Explosive Supply / Safety Buffer]
```

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>Coloque em sala separada por tema e segurança visual. Mesmo se não explodir como vanilla, o nome pede respeito.<br><br>## 11.5. Nuclear Reactor<br><br>O Nuclear Reactor é uma fonte avançada de energia e também um megaprojeto do servidor.<br><br>### Antes de montar<br><br>- entenda o guia in-game;<br>- teste em criativo se o servidor permitir;<br>- prepare shutdown manual;<br>- prepare estoque de combustível;<br>- prepare armazenamento de subprodutos;<br>- isole a área;<br>- documente chunkloading.<br><br>### Design recomendado para Astron City<br><br>```text<br>[Fuel Processing] -> [Fuel Buffer] -> [Nuclear Reactor]<br>                         |                |<br>                         v                v<br>                  [Waste/Byproduct]   [Energy Output]<br>                                          |<br>                                   [Power Backbone]<br>```<br><br>### Regra de servidor<br><br>Toda usina nuclear deve ter:<br><br>- dono/responsável;<br>- placa explicando input/output;<br>- botão de desligamento;<br>- rota de acesso;<br>- backup de energia;<br>- controle de overflow;<br>- chunkloading explícito.<br><br>## 11.6. Large Tank<br><br>Large Tank é essencial para fluido em escala.<br><br>Use para:<br><br>- steam;<br>- water;<br>- crude oil;<br>- diesel;<br>- creosote;<br>- fluidos químicos;<br>- buffers de usina.<br><br>### Dica<br><br>Nunca dependa de um único tank invisível. Use indicadores visuais, Jade e placas.</p>
</div>

# 12. End Game - quantum, fusão, plasma e megaprojetos

End Game do MI é para jogadores que querem dominar tudo: autocrafting completo, energia absurda, armazenamento massivo e equipamentos extremamente fortes.

## 12.1. Objetivos do End Game

- Quantum gear.
- Quantum Barrel/Tank/Storage.
- Fusion Reactor.
- Plasma Turbine.
- Rede AE2 controlando todas as linhas.
- Produção automática de todos os intermediários críticos.
- Power plant final.

## 12.2. Quantum Tier

Quantum Tier inclui itens de altíssimo poder. Em mapas survival, trate como objetivo final.

### Itens e usos comuns

| Item/família | Uso |
|---|---|
| Quantum Armor | Mobilidade/defesa extrema, dependendo da config. |
| Quantum Sword/Tools | Ferramentas e combate de endgame. |
| Quantum Barrel | Armazenamento massivo de item específico. |
| Quantum Tank | Armazenamento massivo de fluido específico. |
| Quantum upgrades/components | Componentes para crafts finais. |

### Recomendação de balanceamento para Astron City

Não entregue Quantum cedo. Ele deve exigir:

- infraestrutura MI completa;
- AE2 avançado;
- materiais de bosses/exploração/espaço, se o pack decidir customizar;
- energia alta;
- multiblocos late game.

## 12.3. Fusion Reactor

Fusion Reactor é a etapa de energia/materiais final.

### Use para

- produção de energia avançada;
- processos high-tier;
- cadeia de plasma;
- megaprojetos de servidor.

### Antes de construir

- complete oil/diesel ou nuclear;
- automatize circuitos;
- automatize plates, wires e casings;
- tenha tanks gigantes;
- tenha AE2 para pedidos complexos;
- reserve área grande.

## 12.4. Plasma Turbine

Plasma Turbine é a sequência natural de fusão/plasma.

### Recomendação

Construa como power plant final, com estética de “reator astral” para combinar com Astron City.

```text
[Fusion Reactor] -> [Plasma/Hot Fluid Handling] -> [Plasma Turbine] -> [EU Backbone]
```

---

# 13. Extended Industrialization - máquinas, energia e automação avançada

**Extended Industrialization** expande MI com máquinas, fontes de energia, ferramentas, recursos e sistemas de automação. No Astron City, ele deve ser tratado como expansão natural de mid/late game: quando MI básico já está funcionando, EI ajuda a escalar.

> Importante: a lista exata pode variar por versão. Use `@extended_industrialization` no EMI/JEI para confirmar nomes e receitas no servidor.

## 13.1. Função do addon

Extended Industrialization serve para:

- adicionar máquinas especializadas;
- melhorar produção em lote;
- oferecer energia alternativa;
- facilitar automações agrícolas/químicas;
- expandir recursos e ferramentas;
- criar sistemas wireless/avançados.

## 13.2. Máquinas e sistemas importantes

| Sistema | Uso prático |
|---|---|
| Alloy Smelter | Produção direta de ligas. Útil para reduzir etapas de mixer + furnace em alguns casos. |
| Bending Machine | Produção de plates/curvaturas/componentes, boa para linhas de casings. |
| Brewery | Processos líquidos/biológicos, útil para alimentos, químicos ou integração de farming. |
| Canning Machine | Inserir/remover fluidos ou conteúdos em recipientes, dependendo das receitas. |
| Composter | Produção orgânica/biomassa/fertilizantes, conforme configs. |
| Farmer/Agricultural Harvester | Automação agrícola integrada ao ecossistema industrial. |
| Honey Extractor | Excelente se usado com Productive Bees ou farms de mel. |
| Large Furnace | Smelting em grande escala. Muito útil para bases com quarry. |
| Large Macerator / Powerful Crusher | Processamento de minério em volume maior. |
| Machine Chainer | Encadeamento de máquinas/processos, bom para linhas compactas. |
| Processing Array | Executa recipes em lote com várias máquinas, fortíssimo para autocrafting. |
| Universal Transformer | Conversão/compatibilidade de energia, quando disponível. |
| Tesla Coil / Tesla Tower | Energia wireless/carregamento/transmissão avançada, conforme versão/config. |
| Wireless Charging Station | Carregamento de itens/equipamentos. |
| Solar Boiler / Solar Panels | Geração alternativa/passiva, boa para bases remotas. |
| Waste Collector | Coleta/gerenciamento de resíduos ou subprodutos, conforme versão. |

## 13.3. Quando entrar em Extended Industrialization

| Momento | O que usar |
|---|---|
| Após Steel | Bending/Alloy Smelter se receitas estiverem acessíveis. |
| Após Electric Age | Large Furnace, Large Macerator, Machine Chainer. |
| Após AE2 | Processing Array para craft sob demanda. |
| Mid/Late game | Tesla/wireless, Universal Transformer, energia alternativa. |
| Com Productive Bees/Farming | Honey Extractor, Farmer, Composter, Brewery/Canning. |

## 13.4. Processing Array - por que é absurdo

Processing Array é um dos sistemas mais fortes do addon porque permite processar em lote ou em paralelo. Em survival, isso resolve o problema de “tenho autocrafting, mas só uma máquina processa tudo devagar”.

### Use para

- plates muito usados;
- dusts de minério;
- circuit components;
- fios/cabos;
- ligas recorrentes;
- smelting em massa;
- recipes de autocrafting muito chamadas.

### Exemplo de uso

```text
AE2 pede 512 Steel Plates
  -> Pattern Provider envia Steel Ingots
  -> Processing Array executa várias operações equivalentes
  -> Output volta para AE2
```

### Regra

Coloque Processing Array em linhas de alto volume, não em receitas raras.

## 13.5. Machine Chainer

Machine Chainer é útil quando uma receita tem várias etapas fixas.

Exemplo conceitual:

```text
Ingot -> Plate -> Curved Plate -> Casing Part
```

Em vez de espalhar máquinas pela sala inteira, você cria uma linha encadeada.

## 13.6. Tesla Tower / Tesla Coil / Wireless

Sistemas Tesla são hot topics de energia porque reduzem cabos longos e simplificam bases grandes.

Use para:

- carregar equipamentos;
- alimentar outposts;
- reduzir backbone físico em áreas decorativas;
- conectar distritos técnicos.

Cuidado:

- documente onde a energia entra e sai;
- evite redes invisíveis que ninguém entende;
- meça consumo com Jade/diagnóstico;
- não deixe chunkloaded sem necessidade.

## 13.7. EI + Productive Bees / Farming

O Astron City tem Productive Bees, Productive Trees e Productive Metalworks. EI pode ajudar a transformar farming em cadeia industrial.

Exemplo:

```text
Bee/Farm output -> Honey Extractor/Composter/Farmer -> Fluids/Items -> MI processing -> AE2 stock
```

Use para:

- mel e derivados;
- biomassa;
- crops industriais;
- fertilizantes;
- produção renovável de insumos.

---

# 14. Modern Dynamics - pipes, cabos, filtros e Machine Extenders

Modern Dynamics é o melhor amigo do MI. Ele adiciona logística moderna para NeoForge, especialmente item pipes, fluid pipes, cabos de energia e ferramentas para conectar máquinas com menos dor.

## 14.1. O que Modern Dynamics resolve

Sem logística, MI vira caos:

- baús lotam;
- fluidos travam;
- subprodutos param a fábrica;
- máquinas têm poucas faces;
- AE2 fica sobrecarregado cedo demais.

Modern Dynamics resolve isso com:

- pipes de itens;
- pipes de fluidos;
- cabos de energia compatíveis com MI quando MI está presente;
- attachments/filtros/extractors, conforme versão;
- wrench;
- Machine Extenders.

## 14.2. Machine Extender

Machine Extender é extremamente útil porque “estende” uma máquina para outra face/posição, permitindo mais conexões.

Use quando:

- uma máquina precisa de muitos pipes;
- o multibloco tem hatch difícil de alcançar;
- AE2 precisa acessar uma face e Modern Dynamics outra;
- você quer esconder cabos sem perder acesso.

Exemplo:

```text
[AE2 Pattern Provider]
        |
[Machine Extender]
        |
[MI Machine]
        |
[Output Pipe]
```

## 14.3. Regras de pipe limpo

1. Todo pipe de entrada deve ter filtro.
2. Todo pipe de saída deve ter destino claro.
3. Nunca faça loop sem necessidade.
4. Fluido com múltiplas saídas precisa de prioridade.
5. Itens raros não devem ir para trash sem whitelist.
6. Cada fábrica deve ter um baú/tank de inspeção.

## 14.4. Padrão de automação com Modern Dynamics

```text
[Input Chest]
     |
[Filtered Item Pipe]
     |
[Machine / Hatch]
     |
[Output Pipe]
     |
[Output Chest / AE2 Import]
```

Para fluidos:

```text
[Fluid Source]
     |
[Fluid Pipe]
     |
[Tank Buffer]
     |
[Machine Fluid Input]
     |
[Output Tank]
```

## 14.5. Modern Dynamics no early vs late

| Fase | Uso |
|---|---|
| Early | Mover itens entre baús e máquinas a vapor. |
| Steel | Alimentar coke/steel lines. |
| Electric | Conectar Machine Hall. |
| Midgame | Transportar óleo, diesel e químicos. |
| Late | Gerenciar power plants e multiblocos. |
| Endgame | Complementar AE2 em linhas de alto volume. |

---

# 15. Catálogo de recursos e itens por família

Este capítulo organiza “tudo que há para extrair do mod” por família. MI tem muitas variantes de material, e cada material pode existir como ingot, nugget, dust, tiny dust, plate, rod, bolt, ring, gear, wire, cable, block, casing, pipe e componentes. Em vez de repetir centenas de variações, esta tabela mostra como pensar o catálogo inteiro.

## 15.1. Minérios e matérias-primas

| Família | Exemplos / uso |
|---|---|
| Vanilla metals | Iron, Copper, Gold; base para máquinas, cabos e componentes. |
| Tin | Bronze e componentes iniciais. |
| Lead | Baterias, blindagens, química e alguns circuitos. |
| Silver | Electrum, circuitos e componentes. |
| Nickel | Invar, stainless e ligas. |
| Bauxite/Aluminium | Alumínio e ligas intermediárias, conforme worldgen/receitas. |
| Tungsten | Materiais late game, EBF, alta temperatura. |
| Antimony | Ligas e processos específicos. |
| Uranium | Nuclear e cadeia de energia avançada. |
| Iridium/Platinum/Chrome/Titanium, se presentes | Tiers avançados e endgame. Confirme obtenção no EMI/JER. |
| Coal/Lignite/Carbon | Coke, combustível, steel, química. |
| Quartz/Certus/Nether materials | Circuitos, eletrônica e integração com AE2. |
| Clay/Sand/Gravel | Fire clay, vidro, bricks, construção industrial. |

## 15.2. Ligas e metais processados

| Liga/material | Papel na progressão |
|---|---|
| Bronze | Primeiro tier real, máquinas a vapor. |
| Steel | Transição para máquinas melhores e Electric Age. |
| Invar | Máquinas, casings e componentes térmicos. |
| Electrum | Eletrônica, condutores e componentes. |
| Cupronickel | Resistências/aquecimento, conforme recipes. |
| Aluminium | Cabos/peças leves/intermediários. |
| Stainless Steel | Midgame avançado, casings e máquinas melhores. |
| Titanium | Late game, química e componentes fortes. |
| Tungsten Steel | Alta temperatura e late/endgame. |
| Superconductor materials | Energia avançada, fusion/endgame. |
| Quantum materials | Endgame, gear/storage. |

## 15.3. Formas de material

Quase todo metal importante pode aparecer em várias formas:

| Forma | Uso |
|---|---|
| Ingot | Forma básica refinada. |
| Nugget | Craft menor/descompactação. |
| Block | Armazenamento/estrutura. |
| Dust | Mistura, química, smelting e ore processing. |
| Tiny Dust | Subproduto e recombinação. |
| Plate | Máquinas, casings, hulls. |
| Curved Plate / Double Plate, se presente | Componentes avançados e máquinas. |
| Rod | Estruturas, ferramentas, máquinas. |
| Bolt/Screw | Componentes pequenos. |
| Ring | Bombas, motores, máquinas. |
| Gear | Máquinas e transmissão. |
| Wire | Cabos e circuitos. |
| Cable | Energia, rede e máquinas elétricas. |
| Rotor | Turbinas, máquinas rotativas. |
| Pipe | Itens/fluidos, hatches, máquinas. |
| Casing | Multiblocos e machine hulls. |

## 15.4. Fluidos e gases

| Fluido/gás | Uso típico |
|---|---|
| Water | Steam, química, boilers. |
| Steam | Energia inicial e geração EU. |
| High Pressure Steam | Energia late game. |
| Creosote | Subproduto do Coke Oven, tratado como insumo químico/industrial. |
| Crude Oil / Oil | Base da refinaria. |
| Diesel/Fuel | Energia líquida. |
| Light/Heavy fractions | Cadeia de refinaria, química e combustíveis. |
| Lubricant | Máquinas avançadas e manutenção, conforme receita. |
| Oxygen | Química, EBF e processos. |
| Hydrogen | Química, combustível, fusion, conforme progressão. |
| Nitrogen | Química e processos criogênicos. |
| Sulfuric Acid | Baterias, química e processamento. |
| Hydrochloric Acid / outros ácidos | Processos químicos específicos. |
| Plasma / hot plasma | Endgame com Fusion/Plasma Turbine. |

## 15.5. Circuitos e eletrônica

| Família | Uso |
|---|---|
| Resistors | Circuitos básicos. |
| Capacitors | Circuitos, energia e eletrônica. |
| Inductors | Circuitos e tiers elétricos. |
| Diodes/Transistors, se presentes | Circuitos intermediários. |
| Analog Circuits | Primeiros circuitos elétricos. |
| Electronic Circuits | Máquinas e recipes de midgame. |
| Advanced/Digital Circuits | Mid/late game. |
| Quantum Circuits | Endgame. |
| Silicon/Printed parts | Integração com eletrônica e AE2. |

## 15.6. Componentes mecânicos

| Componente | Uso |
|---|---|
| Motor | Máquinas, pumps, conveyors. |
| Pump | Fluidos e máquinas. |
| Conveyor | Movimento de itens/recipes. |
| Piston/Robot Arm, se presente | Assembler e automação. |
| Machine Hull | Corpo de máquina single-block. |
| Machine Casing | Multiblocos e estrutura. |
| Item Input/Output Hatch | Itens em multiblocos. |
| Fluid Input/Output Hatch | Fluidos em multiblocos. |
| Energy Input Hatch | Energia em multiblocos. |
| Maintenance/Control components, se presentes | Gestão de multiblocos. |

## 15.7. Ferramentas, equipamentos e utilidades

| Item | Uso |
|---|---|
| Forge Hammer | Plates iniciais/manual. |
| Wrench | Configuração/rotação de máquinas e pipes. |
| Drill / Mining Drill | Mineração mais rápida. |
| Chainsaw, se presente | Madeira/farming. |
| Jetpack, se presente | Mobilidade. |
| Rubber Boots / proteção, se presente | Utility/segurança. |
| Quantum Armor | Defesa/mobilidade endgame. |
| Quantum Sword/Tools | Combate e ferramentas endgame. |
| Batteries | Energia portátil ou buffers. |
| Upgrades | Overclock, capacidade e performance de máquinas. |

## 15.8. Armazenamento e tanks

| Item | Uso |
|---|---|
| Barrels/Tanks básicos | Buffers iniciais. |
| Large Tank | Fluidos em escala industrial. |
| Quantum Barrel | Item único em volume massivo. |
| Quantum Tank | Fluido único em volume massivo. |
| AE2 Storage Bus em tank/barrel | Expor storage externo à rede. |

## 15.9. Recursos do Extended Industrialization

| Família | Uso |
|---|---|
| Máquinas extras | Alloy, bending, large processing, farming, canning, brewing. |
| Energia extra | Solar, wireless/Tesla, transformers. |
| Ferramentas/equipamentos | Carregamento, upgrades e utilidades. |
| Processing Array components | Processamento paralelo/batch. |
| Machine Chainer components | Linhas encadeadas. |

## 15.10. Recursos do Modern Dynamics

| Família | Uso |
|---|---|
| Item Pipes | Transporte de itens. |
| Fluid Pipes | Transporte de fluidos. |
| Energy Cables | Energia, compatível com MI quando aplicável. |
| Attachments | Extração/inserção/filtros, conforme versão. |
| Filters | Whitelist/blacklist/prioridade. |
| Wrench | Configuração e conexão. |
| Machine Extender | Mais faces/conexões para máquinas. |

---

# 16. Catálogo de máquinas e multiblocos

## 16.1. Máquinas single-block do MI

| Máquina | Tiers conhecidos | Uso |
|---|---|---|
| Assembler | Electric | Crafting industrial, componentes, máquinas. |
| Centrifuge | Electric | Separação de materiais/fluidos. |
| Chemical Reactor | Electric | Química, borracha, combustíveis, intermediários. |
| Compressor | Bronze, Steel, Electric | Plates e compressão. |
| Cutting Machine | Bronze, Steel, Electric | Corte de plates, peças e componentes. |
| Distillery | Electric | Destilação simples. |
| Electrolyzer | Electric | Separação química/gases. |
| Furnace | Bronze, Steel, Electric | Smelting. |
| Macerator | Bronze, Steel, Electric | Dusts e processamento de minério. |
| Mixer | Bronze, Steel, Electric | Misturas, ligas, compounds. |
| Packer | Steel, Electric | Compactação/pack recipes. |
| Polarizer | Electric | Magnetização/itens especiais. |
| Unpacker | Steel, Electric | Descompactação/unpack recipes. |
| Wiremill | Steel, Electric | Wires/cables. |

## 16.2. Multiblocos do MI

| Multibloco | Fase | Uso |
|---|---|---|
| Coke Oven | Steam/Steel | Coke e creosote. |
| Steam Blast Furnace | Steel | Aço e processos térmicos iniciais. |
| Electric Blast Furnace | Electric/Mid | Ligas avançadas, stainless, materiais de alta temperatura. |
| Large Steam Boiler | Mid | Produção grande de steam. |
| Advanced Large Steam Boiler | Mid/Late | Steam em volume maior. |
| High Pressure Large Steam Boiler | Late | High pressure steam. |
| High Pressure Advanced Large Steam Boiler | Late | Produção massiva de HP steam. |
| Steam Quarry | Steel/Early-Mid | Mineração automática inicial. |
| Electric Quarry | Electric/Mid | Mineração automática melhor. |
| Oil Drilling Rig | Mid | Extração de óleo. |
| Distillation Tower | Mid | Refinaria e separação de fluidos. |
| Large Diesel Generator | Mid | Geração EU com diesel/fuel. |
| Vacuum Freezer | Mid/Late | Resfriamento avançado. |
| Large Steam Turbine | Late | Converte steam em energia em grande escala. |
| Heat Exchanger | Late | Troca térmica para plantas avançadas. |
| Pressurizer | Mid/Late | Processos de pressão/química. |
| Implosion Compressor | Late | Materiais por compressão/explosão. |
| Nuclear Reactor | Late | Energia nuclear e megaprojeto. |
| Large Tank | Mid/Late | Armazenamento de fluidos em escala. |
| Fusion Reactor | End | Energia/processos de fusão. |
| Plasma Turbine | End | Energia com plasma/endgame. |

## 16.3. Máquinas/sistemas principais do Extended Industrialization

| Máquina/sistema | Fase sugerida | Uso |
|---|---|---|
| Alloy Smelter | Steel/Electric | Ligas diretas. |
| Bending Machine | Electric | Plates/curvaturas/componentes. |
| Brewery | Mid | Processos orgânicos/fluidos. |
| Canning Machine | Mid | Recipientes e fluidos. |
| Composter | Early/Mid | Biomassa/fertilizantes. |
| Farmer/Agricultural Harvester | Mid | Farming automático. |
| Honey Extractor | Mid | Mel e integração com bees. |
| Large Furnace | Mid | Smelting em massa. |
| Large Macerator / Powerful Crusher | Mid/Late | Ore processing em massa. |
| Machine Chainer | Mid/Late | Encadeamento de processos. |
| Processing Array | Late | Processamento paralelo/batch. |
| Universal Transformer | Mid/Late | Conversão/compatibilidade de energia. |
| Tesla Coil/Tower | Late | Energia wireless/carregamento/transmissão. |
| Solar Boiler/Panels | Mid/Late | Energia alternativa/passiva. |
| Wireless Charging Station | Mid/Late | Carregar itens/equipamentos. |
| Waste Collector | Mid/Late | Gerenciar resíduos/subprodutos, conforme versão. |

---

# 17. Fábricas populares e soluções de survival

Este capítulo é o coração prático do guia. Cada fábrica tem função, entradas, máquinas, saídas, automação e notas de servidor.

---

## 17.1. Fábrica 1 - Steam Starter Room

**Fase:** Early game.  
**Função:** sair do crafting manual e começar a produzir componentes.

### Entradas

- Água.
- Fuel.
- Copper.
- Tin.
- Iron.
- Ores.

### Máquinas

- Bronze Boiler.
- Bronze Compressor.
- Bronze Mixer.
- Bronze Macerator.
- Bronze Cutting Machine.
- Bronze Furnace.

### Saídas

- Plates.
- Dusts.
- Bronze.
- Ingots processados.
- Componentes iniciais.

### Automação

Comece com baús. Depois use Modern Dynamics. No futuro, AE2 Pattern Provider + Import Bus.

---

## 17.2. Fábrica 2 - Bronze/Steel Components Line

**Fase:** Steam/Steel.  
**Função:** produzir plates, rods, casings e peças repetitivas.

### Fluxo

```text
Ingots -> Compressor -> Plates
Plates -> Cutting/Bending -> Parts
Parts + Circuits -> Assembler -> Machine Components
```

### Saídas importantes

- Bronze plates.
- Steel plates.
- Rods.
- Gears.
- Machine casings.
- Machine hulls.

### Por que fazer cedo

Toda máquina futura usa componentes. Se você não automatizar isso, vai ficar preso em crafting manual.

---

## 17.3. Fábrica 3 - Coke + Creosote + Fire Clay

**Fase:** Steel transition.  
**Função:** produzir coke, creosote e materiais térmicos.

### Fluxo

```text
Coal -> Coke Oven -> Coke + Creosote
Clay + Dust chain -> Mixer -> Fire Clay
Fire Clay -> Furnace/Compressor/etc -> Bricks/Parts
```

### Saídas

- Coke.
- Creosote.
- Fire clay.
- Fire clay bricks.

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>Creosote precisa de tank. Não deixe o Coke Oven travar porque o fluido encheu.</p>
</div>

## 17.4. Fábrica 4 - Siderúrgica

**Fase:** Steel.  
**Função:** steel constante.

### Fluxo

```text
Iron + Coke + estrutura térmica -> Steam Blast Furnace -> Steel
Steel -> Compressor/Cutting/Wiremill -> Steel parts
```

### Saídas

- Steel ingots.
- Steel plates.
- Steel rods.
- Steel machine hulls.
- Componentes para Electric Age.

### Hot tip

Faça estoque mínimo de steel assim que tiver AE2. Steel é usado para sempre.

---

## 17.5. Fábrica 5 - Ore Processing Inicial

**Fase:** Steam/Electric.  
**Função:** multiplicar/otimizar minérios.

### Fluxo simples

```text
Raw Ore -> Macerator -> Dust -> Furnace -> Ingot
```

### Fluxo melhorado

```text
Ore/Raw Ore -> Macerator -> Secondary Processing -> Furnace/EBF -> Ingots + Byproducts
```

### Automação

- Early: baú + pipe + máquina.
- Mid: Modern Dynamics com filtros.
- Late: AE2 processing patterns.

---

## 17.6. Fábrica 6 - Steam Quarry / Electric Quarry Hub

**Fase:** Steel/Electric.  
**Função:** mineração automática.

### Por que é forte

Quarry muda completamente o survival: você para de depender só de mineração manual.

### Requisitos

- energia/steam estável;
- storage grande;
- filtro de lixo;
- rota para processar ores;
- controle de chunkloading;
- área permitida pelas regras do servidor.

### Fluxo

```text
Quarry Output -> Sorting Buffer -> Ore Processing -> Ingots
                         \-> Stone/Dirt/etc -> Bulk Storage/Trash/Building
```

### Regra de servidor

Toda quarry deve ter dono, placa, área definida e storage suficiente. Quarry sem overflow pode derrubar TPS com item spill.

---

## 17.7. Fábrica 7 - LV Machine Hall

**Fase:** Electric Age.  
**Função:** hub de processamento elétrico.

### Máquinas

- Compressor.
- Macerator.
- Mixer.
- Cutting Machine.
- Furnace.
- Wiremill.
- Assembler.
- Chemical Reactor.
- Centrifuge.
- Electrolyzer.
- Distillery.

### Fluxo

```text
AE2/Chest Input -> Machines -> Output Buffer -> AE2/Storage
```

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>Padronize as faces antes de ligar AE2.</p>
</div>

## 17.8. Fábrica 8 - Circuit Factory

**Fase:** Electric/Mid.  
**Função:** circuitos automáticos.

### Entradas

- Copper/gold/tin wires.
- Rubber/plastic/silicon.
- Redstone.
- Quartz.
- Plates.
- Fine wires, se presentes.

### Máquinas

- Wiremill.
- Cutting Machine.
- Assembler.
- Chemical Reactor.
- Compressor.

### Saídas

- Analog circuits.
- Electronic circuits.
- Advanced circuits.
- Digital/quantum circuits, conforme progressão.

### Por que é essencial

Sem circuito automático, todo autocrafting trava.

---

## 17.9. Fábrica 9 - Rubber/Plastic/Chemical Line

**Fase:** Electric/Mid.  
**Função:** produzir isolamento de cabos e intermediários químicos.

### Fluxo conceitual

```text
Raw material / Oil products -> Chemical Reactor -> Rubber/Plastic intermediates
Rubber/Plastic -> Assembler/Wiremill -> Cables/Circuits
```

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>Use tanks pequenos para intermediários e tanques grandes para fluidos de alto volume.</p>
</div>

## 17.10. Fábrica 10 - Electric Blast Furnace Hub

**Fase:** Midgame.  
**Função:** ligas avançadas e stainless.

### Fluxo

```text
Dust/Blend -> Input Hatch
Energy -> Energy Hatch
EBF -> Output Hatch -> Buffer
```

### Saídas

- Stainless Steel.
- Aluminium/Titanium/Tungsten chain, conforme pack.
- Ligas avançadas.
- Materiais de alta temperatura.

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>Um EBF sem energia estável é só decoração cara.</p>
</div>

## 17.11. Fábrica 11 - Refinaria Diesel

**Fase:** Midgame.  
**Função:** energia líquida e química.

### Fluxo

```text
Oil Drilling Rig -> Crude Oil Tank -> Distillation Tower
                                  -> Diesel -> Large Diesel Generator
                                  -> Subproducts -> Chemical Line/Tanks
```

### Saídas

- Diesel/fuel.
- Subprodutos de óleo.
- Energia EU.
- Intermediários químicos.

### Hot tip

A refinaria só é boa se todos os subprodutos tiverem destino.

---

## 17.12. Fábrica 12 - Stainless Steel Line

**Fase:** Midgame.  
**Função:** alimentar todas as estruturas avançadas.

### Fluxo

```text
Metal Dusts -> Mixer -> Stainless Blend -> EBF -> Stainless Steel
Stainless -> Compressor/Cutting/Assembler -> Advanced Parts
```

### Saídas

- Stainless Steel ingots.
- Stainless plates.
- Advanced machine hulls.
- Hatches/casings.

---

## 17.13. Fábrica 13 - Large Furnace / Large Macerator Array

**Fase:** Mid/Late com Extended Industrialization.  
**Função:** processar minério em massa.

### Fluxo

```text
Quarry Output -> Large Macerator/Crusher -> Dust Buffer -> Large Furnace -> Ingots
```

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>Ideal para bases com quarry ou bees/metals renováveis.</p>
</div>

## 17.14. Fábrica 14 - Processing Array Autocrafting

**Fase:** Late com Extended Industrialization + AE2.  
**Função:** processar recipes repetitivas em lote.

### Bons candidatos

- Iron plates.
- Steel plates.
- Copper wires.
- Circuits básicos.
- Dust processing.
- Smelting massivo.

### Fluxo

```text
AE2 Pattern Provider -> Processing Array -> Output Buffer -> AE2 Import
```

### Por que é forte

É uma das melhores formas de transformar AE2 em fábrica industrial real.

---

## 17.15. Fábrica 15 - Large Steam Power Plant

**Fase:** Late.  
**Função:** energia grande antes de nuclear/fusão.

### Fluxo

```text
Fuel + Water -> Large/HP Steam Boiler -> Steam Buffer -> Large Steam Turbine -> EU
```

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>Use medidores visuais, tanks e desligamento manual.</p>
</div>

## 17.16. Fábrica 16 - Nuclear Power Plant

**Fase:** Late.  
**Função:** energia avançada e projeto coletivo.

### Fluxo conceitual

```text
Ore/Fuel Processing -> Reactor Fuel -> Nuclear Reactor -> Energy
                                  \-> Waste/Subproducts -> Storage/Processing
```

### Regras

- Área isolada.
- Dono/responsável.
- Desligamento manual.
- Documentação in-game.
- Teste antes de chunkload permanente.

---

## 17.17. Fábrica 17 - Quantum Storage Hub

**Fase:** Endgame.  
**Função:** armazenar quantidades absurdas de itens/fluidos específicos.

### Bons usos

| Quantum Barrel | Quantum Tank |
|---|---|
| Cobblestone | Water |
| Iron Ingots | Steam |
| Steel Ingots | Diesel |
| Ores processados | Crude Oil |
| Bees/metal outputs | Chemical fluids |

### Integração

Use AE2 Storage Bus para expor Quantum Barrel/Tank à rede, quando compatível.

---

## 17.18. Fábrica 18 - Fusion + Plasma Power Plant

**Fase:** Endgame.  
**Função:** energia final e tema astral do pack.

### Fluxo

```text
Fuel/Gases -> Fusion Reactor -> Plasma/Hot Fluid -> Plasma Turbine -> EU Backbone
```

<div class="callout info">
  <div class="callout-title">?? DICA DE DESIGN</div>
  <p>Faça como megaprojeto público. Combine com construção espacial/astral do Astron City.</p>
</div>

## 17.19. Fábrica 19 - EI Farming/Bio Industry

**Fase:** Mid/Late.  
**Função:** transformar recursos orgânicos em produção industrial.

### Fluxo

```text
Farmer/Harvester -> Composter/Brewery/Canning -> Fluids/Items -> MI Processing
```

### Integrações

- Farmer's Delight.
- Productive Bees.
- Productive Trees.
- AE2 estoque mínimo.
- Create para transporte visual.

---

## 17.20. Fábrica 20 - Modern Dynamics Logistics Spine

**Fase:** Todas.  
**Função:** backbone de pipes e cabos da fábrica.

### Padrão

```text
[Input Wall] -> [Filtered Pipes] -> [Machines] -> [Output Pipes] -> [Storage/AE2]
```

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>Uma boa fábrica tem corredor técnico. Se você não consegue ver para onde um pipe vai, a fábrica já está ficando perigosa.</p>
</div>

# 18. HOT TOPICS - o que é muito forte e útil

Esta seção lista itens, máquinas e soluções que são especialmente poderosas em survival. Use como “prioridades” para jogadores do Astron City.

## 18.1. Steam Quarry / Electric Quarry

**Por que é forte:** automatiza mineração e alimenta todo o servidor.

### Use para

- ores;
- stone para construção;
- materiais de base;
- alimentar ore processing.

### Cuidado

- precisa de storage;
- precisa de filtro;
- pode gerar muito item inútil;
- deve seguir regras de chunkloading.

---

## 18.2. Macerator + Ore Processing

**Por que é forte:** aumenta rendimento e gera subprodutos.

### Prioridade

Automatize antes de gastar ores manualmente.

### Combo

```text
Quarry -> Macerator -> Secondary Processing -> Furnace/EBF -> Ingots
```

---

## 18.3. Compressor / Cutting Machine / Wiremill

**Por que é forte:** removem o trabalho manual mais chato.

### Use para

- plates;
- rods;
- wires;
- cabos;
- componentes;
- casings.

### Hot tip

Tenha pelo menos uma máquina dedicada para cada item ultra usado.

---

## 18.4. Assembler

**Por que é forte:** é o braço industrial do autocrafting.

### Use para

- máquinas;
- casings;
- circuitos;
- cabos;
- componentes complexos.

### Com AE2

O Assembler vira uma das máquinas mais importantes do pack.

---

## 18.5. Electric Blast Furnace

**Por que é forte:** destrava materiais de midgame e late game.

### Use para

- stainless steel;
- ligas avançadas;
- materiais de alta temperatura;
- progressão para nuclear/fusão.

---

## 18.6. Distillation Tower + Diesel Generator

**Por que é forte:** cria uma economia de energia líquida.

### Use para

- energia estável;
- química;
- base média/grande;
- power plant industrial.

### Cuidado

Subprodutos travam a torre se não tiverem destino.

---

## 18.7. Large Tank

**Por que é forte:** fluidos em MI existem em volumes enormes.

### Use para

- steam;
- crude oil;
- diesel;
- water;
- químicos;
- buffers de reator.

---

## 18.8. Processing Array - Extended Industrialization

**Por que é forte:** transforma processamento lento em processamento em massa.

### Melhor uso

- plates;
- wires;
- smelting;
- dusts;
- circuit parts;
- pedidos AE2 repetitivos.

### Sobrevivência

É uma das maiores melhorias de qualidade de vida para bases grandes.

---

## 18.9. Machine Chainer - Extended Industrialization

**Por que é forte:** reduz linhas longas e compacta processos sequenciais.

### Use para

- recipes de múltiplas etapas;
- componentes repetitivos;
- automações que seriam spaghetti.

---

## 18.10. Tesla Tower / Wireless Energy - Extended Industrialization

**Por que é forte:** simplifica energia em bases grandes.

### Use para

- outposts;
- distritos da cidade;
- máquinas remotas;
- carregamento.

### Cuidado

Energia wireless invisível precisa de documentação.

---

## 18.11. Machine Extender - Modern Dynamics

**Por que é forte:** resolve o problema de poucas faces em máquinas/multiblocos.

### Use quando

- AE2 ocupa uma face;
- pipe ocupa outra;
- energia precisa entrar atrás;
- fluido precisa entrar dos lados;
- saída está bloqueada.

---

## 18.12. Modern Dynamics Filters

**Por que é forte:** evita travamento, item errado e overflow.

### Use em

- quarry output;
- ore processing;
- refinaria;
- circuit line;
- AE2 import/export;
- trash cans.

---

## 18.13. Nuclear Reactor

**Por que é forte:** energia enorme e marco de late game.

### Use como

- projeto comunitário;
- power plant central;
- objetivo de engenharia.

### Cuidado

Não faça nuclear sem documentação e shutdown.

---

## 18.14. Quantum Armor / Quantum Gear

**Por que é forte:** pode trivializar combate, exploração e mobilidade se liberado cedo.

### Use como

- recompensa de endgame;
- objetivo após bosses/espaço/MI avançado;
- símbolo de jogador engenheiro final.

---

## 18.15. Quantum Barrel / Quantum Tank

**Por que é forte:** resolve bulk storage extremo.

### Use para

- item/fluid único em volume absurdo;
- outputs de farms;
- fluido de refinaria;
- materiais de quarry.

### Não use para

- itens NBT variados;
- tools danificadas;
- drops aleatórios sem filtro.

---

## 18.16. Fusion Reactor + Plasma Turbine

**Por que é forte:** objetivo final de energia e estética perfeita para Astron City.

### Use como

- megaprojeto da cidade;
- power plant final;
- integração com espaço/Stellaris;
- sala de reator astral.

---

## 18.17. ME Requester + MI

**Por que é forte:** mantém estoque mínimo de peças industriais.

### Estoques ideais

- steel plates;
- circuits;
- machine hulls;
- cables;
- hatches;
- casings;
- diesel;
- rubber;
- quantum components.

---

## 18.18. AE2 Processing Patterns + MI Machines

**Por que é forte:** você pede uma máquina e o sistema fabrica plates, wires, circuits e hulls automaticamente.

### Fluxo

```text
AE2 pedido -> Pattern Provider -> MI Machine -> Output -> AE2 Import
```

---

# 19. Integração com AE2

AE2 é o cérebro; MI é o músculo.

## 19.1. Regra principal

Não coloque tudo diretamente na rede AE2 cedo demais. Primeiro, faça fábricas estáveis com buffers. Depois conecte AE2.

## 19.2. Padrão de processing pattern

```text
[AE2 Pattern Provider]
       |
[Input Buffer / Machine]
       |
[MI Machine]
       |
[Output Buffer]
       |
[AE2 Import Bus]
```

## 19.3. Quando usar buffer

Sempre que:

- a máquina for lenta;
- o output tiver subprodutos;
- a recipe consumir fluidos;
- houver risco de item errado;
- múltiplas recipes usam a mesma máquina;
- a máquina é multibloco.

## 19.4. Machines boas para AE2 processing

| Máquina | Tipo de pattern |
|---|---|
| Compressor | Ingot -> Plate. |
| Macerator | Ore -> Dust. |
| Cutting Machine | Plate -> component. |
| Wiremill | Ingot/plate -> wire. |
| Assembler | Componentes -> máquina/circuito. |
| Mixer | Dusts -> blend/alloy. |
| Chemical Reactor | Input + fluid -> chemical output. |
| EBF | Dust/blend -> advanced ingot. |
| Distillation Tower | Fluido -> múltiplos fluidos; use cuidado. |
| Processing Array | Recipes repetitivas em lote. |

## 19.5. ME Requester para estoque mínimo

Itens para manter sempre:

| Item | Early | Mid | Late |
|---|---:|---:|---:|
| Iron Plate | 128 | 512 | 2048 |
| Copper Wire | 128 | 512 | 2048 |
| Steel Ingot | 128 | 512 | 4096 |
| Steel Plate | 64 | 256 | 2048 |
| Bronze Plate | 64 | 128 | 512 |
| Rubber/Cable Insulation | 128 | 512 | 2048 |
| Basic Circuit | 32 | 128 | 512 |
| Advanced Circuit | 0 | 64 | 512 |
| Machine Hull | 16 | 64 | 256 |
| Item Hatch | 4 | 16 | 64 |
| Fluid Hatch | 4 | 16 | 64 |
| Energy Hatch | 2 | 8 | 32 |
| Stainless Plate | 0 | 128 | 1024 |
| Diesel | 0 | 8-16 buckets/tank | tank cheio |

## 19.6. Evite estes erros

- Pattern Provider direto em máquina sem saída configurada.
- Receita com subproduto sem importar todos os outputs.
- Múltiplas recipes incompatíveis na mesma máquina.
- Fluido travando a máquina.
- AE2 enviando mais item do que a máquina comporta.
- Usar Import Bus sem filtro em output com lixo.

---

# 20. Integração com Create e infraestrutura da cidade

MI não precisa substituir Create. No Astron City, eles devem trabalhar juntos.

## 20.1. Papéis ideais

| Sistema | Papel |
|---|---|
| Create | Transporte visual, trens, esteiras, fábricas aparentes, estética. |
| MI | Processamento pesado, química, energia, ligas, multiblocos. |
| AE2 | Storage, pedidos, autocrafting e controle de estoque. |
| Modern Dynamics | Pipes/cabos entre máquinas industriais. |

## 20.2. Soluções bonitas

- Trem Create levando carvão/ores até a siderúrgica MI.
- Esteiras Create alimentando baús de entrada de uma fábrica MI.
- Tanques visuais de refinaria com Create decorativo e MI funcional.
- Power plant MI com sala de controle decorada por Create Deco/Bells & Whistles.
- AE2 escondido como “data center” da cidade.

## 20.3. Exemplo de infraestrutura pública

```text
[Minas/Quarry] -> [Trem Create] -> [Central Industrial MI]
                                      |
                                      v
                                [AE2 Data Center]
                                      |
                                      v
                              [Distritos da Cidade]
```

---

# 21. Checklists de estoque e progresso

## 21.1. Checklist Early Game

- [ ] Base industrial com espaço.
- [ ] Cobre e estanho suficientes.
- [ ] Bronze produzido.
- [ ] Bronze Boiler.
- [ ] Bronze Compressor.
- [ ] Bronze Mixer.
- [ ] Bronze Macerator.
- [ ] Bronze Cutting Machine.
- [ ] Água automática.
- [ ] Baús de entrada/saída.
- [ ] Primeira linha de ore processing.

## 21.2. Checklist Steel

- [ ] Coke Oven.
- [ ] Tank de creosote.
- [ ] Fire clay chain.
- [ ] Steel produzido.
- [ ] Steel machines.
- [ ] Steel plates automáticas.
- [ ] Wiremill preparada.
- [ ] Primeiros cabos/circuitos.
- [ ] Steam Quarry ou preparação de quarry.

## 21.3. Checklist Electric

- [ ] Steam Turbine.
- [ ] Cabos LV.
- [ ] LV Machine Hall.
- [ ] Electric Compressor.
- [ ] Electric Macerator.
- [ ] Electric Mixer.
- [ ] Electric Cutting Machine.
- [ ] Assembler.
- [ ] Wiremill.
- [ ] Chemical Reactor.
- [ ] Circuit factory.
- [ ] Primeiros processing patterns AE2.

## 21.4. Checklist Midgame

- [ ] Electric Blast Furnace.
- [ ] Stainless Steel.
- [ ] Large Tank.
- [ ] Oil Drilling Rig.
- [ ] Distillation Tower.
- [ ] Large Diesel Generator.
- [ ] Vacuum Freezer.
- [ ] Pressurizer.
- [ ] Refinaria com overflow.
- [ ] ME Requester mantendo componentes.

## 21.5. Checklist Late Game

- [ ] Large Steam Boiler.
- [ ] High Pressure Steam.
- [ ] Large Steam Turbine.
- [ ] Heat Exchanger.
- [ ] Implosion Compressor.
- [ ] Nuclear Reactor.
- [ ] Processing Array.
- [ ] Machine Chainer.
- [ ] Tesla/wireless energy, se desejado.
- [ ] Storage bulk para quarry/refinaria.

## 21.6. Checklist Endgame

- [ ] Quantum Barrel/Tank.
- [ ] Quantum Armor/Tools.
- [ ] Fusion Reactor.
- [ ] Plasma Turbine.
- [ ] AE2 autocrafting completo.
- [ ] Todos os circuitos automatizados.
- [ ] Todos os plates/wires/casings automatizados.
- [ ] Power plant com documentação.
- [ ] Rotas de shutdown.
- [ ] Integração com projetos espaciais.

---

# 22. Performance e regras de servidor

MI é poderoso, mas pode causar problemas em servidor se mal usado.

## 22.1. Regras de ouro

1. Toda fábrica precisa de overflow.
2. Toda quarry precisa de storage suficiente.
3. Todo fluido precisa de destino.
4. Toda power plant precisa de desligamento manual.
5. Todo chunkloader precisa ter dono.
6. Toda linha com subprodutos precisa importar ou descartar todos os outputs.
7. Todo pipe de item crítico precisa de filtro.
8. Nenhuma máquina deve cuspir item no chão.
9. Redstone clocks rápidos devem ser evitados.
10. Plantas industriais públicas devem ter placa explicativa.

## 22.2. Onde MI pesa mais

| Sistema | Risco |
|---|---|
| Quarry | Geração massiva de itens. |
| Refinaria | Muitos fluidos e subprodutos. |
| AE2 autocrafting | Muitos jobs simultâneos. |
| Processing Array | Alta demanda de energia/itens. |
| Nuclear/Fusion | Complexidade, chunkloading e energia. |
| Pipes sem filtro | Loops e item routing ruim. |
| Farms integradas | Outputs infinitos sem descarte. |

## 22.3. Boas práticas para Astron City

- Use Spark para investigar lag antes de culpar um mod.
- Use Chunky para pregenerar áreas grandes.
- Use storage externo para bulk.
- Use AE2 para controle, não para esconder problemas.
- Use Create para transporte visual, mas evite contraptions eternamente ativas sem necessidade.
- Documente máquinas públicas.
- Prefira poucas máquinas bem planejadas a centenas de máquinas duplicadas.

---

# 23. Sugestão de capítulos para FTB Quests

## Capítulo 1 - Bem-vindo à Indústria

- Coletar copper.
- Coletar tin.
- Fazer bronze.
- Fazer Forge Hammer.
- Fazer primeiro machine casing.

## Capítulo 2 - Steam Age

- Bronze Boiler.
- Bronze Compressor.
- Bronze Mixer.
- Bronze Macerator.
- Bronze Cutting Machine.
- Automatizar água.

## Capítulo 3 - A Primeira Siderúrgica

- Coke Oven.
- Coke.
- Creosote tank.
- Fire clay.
- Steam Blast Furnace.
- Steel ingot.

## Capítulo 4 - Eletricidade

- Steam Turbine.
- LV Cable.
- Electric Machine.
- Wiremill.
- Assembler.
- Primeiro circuito.

## Capítulo 5 - Multiblocos Industriais

- Electric Blast Furnace.
- Stainless Steel.
- Large Tank.
- Vacuum Freezer.
- Pressurizer.

## Capítulo 6 - Refinaria

- Oil Drilling Rig.
- Distillation Tower.
- Diesel.
- Large Diesel Generator.
- Overflow de subprodutos.

## Capítulo 7 - Automação com AE2

- Processing Pattern.
- Pattern Provider.
- Import Bus.
- ME Requester.
- Automatizar plates.
- Automatizar circuitos.

## Capítulo 8 - Extended Industrialization

- Large Furnace/Macerator.
- Machine Chainer.
- Processing Array.
- Tesla/wireless.
- Farming industrial.

## Capítulo 9 - Energia Avançada

- Large Steam Boiler.
- HP Steam.
- Large Steam Turbine.
- Heat Exchanger.
- Nuclear Reactor.

## Capítulo 10 - Astron Endgame

- Quantum Barrel/Tank.
- Quantum Armor.
- Fusion Reactor.
- Plasma Turbine.
- Power plant final da cidade.

---

# 24. Notas para mantenedores do wiki

## 24.1. Estrutura sugerida de páginas

Este guia pode virar uma página única ou várias páginas menores.

### Página única

```text
src/content/guides/modern-industrialization.md
```

### Páginas separadas

```text
src/content/guides/mi/overview.md
src/content/guides/mi/steam-age.md
src/content/guides/mi/steel-age.md
src/content/guides/mi/electric-age.md
src/content/guides/mi/midgame.md
src/content/guides/mi/late-game.md
src/content/guides/mi/endgame.md
src/content/guides/mi/extended-industrialization.md
src/content/guides/mi/modern-dynamics.md
src/content/guides/mi/hot-topics.md
src/content/guides/mi/factories.md
```

## 24.2. Componentes visuais recomendados

- Cards para cada era.
- Badges de tier: Steam, Steel, LV, MV, HV, Nuclear, Quantum.
- Tabelas filtráveis de máquinas.
- Checklist interativo.
- Blocos de aviso para servidor/performance.
- “Hot Topic” cards com ícone de fogo.
- Diagramas de fluxo em blocos.

## 24.3. Onde colocar receitas

Receitas exatas devem ficar separadas para manutenção:

```text
src/data/recipes/modernIndustrialization.ts
src/data/recipes/extendedIndustrialization.ts
src/data/recipes/modernDynamics.ts
```

Isso evita reescrever o guia inteiro se uma receita mudar.

## 24.4. Avisos fixos no wiki

Use estes avisos no topo de páginas MI:

> **Receitas podem variar no Astron City.** Confirme sempre no EMI/JEI do servidor.

> **Performance importa.** Quarry, refinaria, nuclear e AE2 autocrafting devem ter overflow, filtros e desligamento manual.

> **MI não substitui Create.** Use MI para processamento pesado e Create para infraestrutura visual e transporte da cidade.

---

# 25. Fontes e observações de precisão

## 25.1. Fontes consultadas

- Contexto interno do Astron City: modpack NeoForge 1.21.1, foco em servidor survival de longo prazo, Create/AE2/MI/Oritech/Ender IO/Immersive Engineering/Powah/Draconic Evolution, mods e versões instaladas.
- Modern Industrialization - GitHub e páginas de distribuição oficiais.
- Modern Industrialization - guidebook/wiki não oficial usado para progressão de Steam Age, Electric Age, Midgame e Quantum Tier.
- Código público do Modern Industrialization 1.21.x para lista de máquinas single-block e multiblocos registrados.
- Extended Industrialization - CurseForge/GitHub/FTB Wiki para descrição de addon, máquinas e sistemas principais.
- Modern Dynamics - CurseForge/Modrinth para pipes, NeoForge, Machine Extender e versão.

## 25.2. Limites do guia

Este guia foi escrito para ser **completo como guia de progressão e uso**, não como dump automático de todos os IDs internos do mod.

Por quê?

1. MI gera muitas variações de material automaticamente.
2. O pack usa AlmostUnified/JAOPCA/KubeJS, que podem alterar outputs e nomes.
3. Receitas finais devem sempre vir do EMI/JEI do servidor.
4. Addons podem mudar nomes/itens entre versões.

## 25.3. Como validar no servidor

Antes de publicar como definitivo:

1. Abrir instância do Astron City.
2. Buscar `@modern_industrialization` no EMI.
3. Exportar/printar lista de máquinas e recipes críticas.
4. Conferir `@extended_industrialization`.
5. Conferir `@modern_dynamics`.
6. Testar progressão em survival ou creative simulado.
7. Ajustar se KubeJS customizar receitas.

---

# Resumo final

Modern Industrialization é uma das colunas técnicas do Astron City. Ele oferece uma progressão longa, cheia de objetivos concretos e perfeita para um servidor que quer durar meses:

- early game com bronze e steam;
- steel e siderúrgica;
- eletricidade e máquinas LV;
- multiblocos, oil e diesel;
- stainless e química avançada;
- alta pressão, nuclear e implosão;
- quantum, fusão e plasma;
- integração total com AE2, Create e Modern Dynamics.

O melhor jeito de jogar MI no Astron City é pensar como engenheiro de cidade: cada máquina deve virar uma sala, cada sala deve virar uma fábrica, cada fábrica deve virar infraestrutura pública, e cada infraestrutura deve ajudar o mundo eterno dos amigos a crescer.
