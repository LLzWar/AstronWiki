---
title: "Oritech - Guia Completo"
modpack: "ASTRON CITY"
minecraft: "1.21.1"
loader: "NeoForge"
mods_cobertos:
  - "Oritech 1.2.8"
  - "Oracle Index 1.3.0"
status: "Guia wiki-ready"
ultima_revisao: "2026-07-01"
---

# Oritech - Guia Completo para o Astron City

> Guia escrito para o **ASTRON CITY**, um modpack NeoForge 1.21.1 de tecnologia, aventura, magia, construção coletiva e progressão longa em servidor survival.
>
> Este guia cobre **Oritech** e **Oracle Index**, com foco em progressão step-by-step, recursos, máquinas, multiblocos, energia, ore processing, lasers, drones, reatores, acelerador de partículas, augments, integração com AE2/Create/MI e soluções úteis para survival multiplayer.

---

## Sumário

1. [O que é Oritech no Astron City](#1-o-que-e-oritech-no-astron-city)
2. [Mods cobertos e papel de cada um](#2-mods-cobertos-e-papel-de-cada-um)
3. [Como usar este guia](#3-como-usar-este-guia)
4. [Glossário rápido](#4-glossario-rapido)
5. [Mapa de progressão completo](#5-mapa-de-progressao-completo)
6. [Preparação antes de começar](#6-preparacao-antes-de-comecar)
7. [Early Game - energia básica e primeiras máquinas](#7-early-game---energia-basica-e-primeiras-maquinas)
8. [Ore Processing - fragmentação, centrifugação e byproducts](#8-ore-processing---fragmentacao-centrifugacao-e-byproducts)
9. [Alloys e componentes - pulverizer, foundry e assembler](#9-alloys-e-componentes---pulverizer-foundry-e-assembler)
10. [Addons, Machine Cores e multiblocos](#10-addons-machine-cores-e-multiblocos)
11. [Fluxite, Enderic Laser e Target Designator](#11-fluxite-enderic-laser-e-target-designator)
12. [Logística - pipes, filtros, power poles e drones](#12-logistica---pipes-filtros-power-poles-e-drones)
13. [Automação de mundo - quarries, lasers, farms e machine frames](#13-automacao-de-mundo---quarries-lasers-farms-e-machine-frames)
14. [Midgame - energia melhor, biosteel, energite e duratium](#14-midgame---energia-melhor-biosteel-energite-e-duratium)
15. [Late Game - Atomic Forge, Promethium e máquinas avançadas](#15-late-game---atomic-forge-promethium-e-maquinas-avancadas)
16. [Nuclear Reactor - guia de segurança e design](#16-nuclear-reactor---guia-de-seguranca-e-design)
17. [Particle Accelerator - matéria, tachyons e incursões dimensionais](#17-particle-accelerator---materia-tachyons-e-incursoes-dimensionais)
18. [Cybernetic Augments - build de personagem tecnológico](#18-cybernetic-augments---build-de-personagem-tecnologico)
19. [Ferramentas, armaduras e equipamentos](#19-ferramentas-armaduras-e-equipamentos)
20. [Catálogo de recursos e itens por família](#20-catalogo-de-recursos-e-itens-por-familia)
21. [Catálogo de máquinas e blocos funcionais](#21-catalogo-de-maquinas-e-blocos-funcionais)
22. [Fábricas populares e soluções de survival](#22-fabricas-populares-e-solucoes-de-survival)
23. [HOT TOPICS - o que é muito forte e útil](#23-hot-topics---o-que-e-muito-forte-e-util)
24. [Integração com AE2](#24-integracao-com-ae2)
25. [Integração com Create, MI, Ender IO, Powah e Productive Metalworks](#25-integracao-com-create-mi-ender-io-powah-e-productive-metalworks)
26. [Checklists de estoque e progresso](#26-checklists-de-estoque-e-progresso)
27. [Performance e regras de servidor](#27-performance-e-regras-de-servidor)
28. [Sugestão de capítulos para FTB Quests](#28-sugestao-de-capitulos-para-ftb-quests)
29. [Notas para mantenedores do wiki](#29-notas-para-mantenedores-do-wiki)
30. [Fontes e observações de precisão](#30-fontes-e-observacoes-de-precisao)

---

<div class="mc-recipe" style="margin: 2rem auto;">
  <div class="mc-grid">
    <div class="mc-slot" title="Biosteel Ingot"><img src="/assets/sprites/biosteel.png" alt="Biosteel" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot"></div>
    <div class="mc-slot" title="Biosteel Ingot"><img src="/assets/sprites/biosteel.png" alt="Biosteel" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Silicon"><img src="/assets/sprites/silicon.png" alt="Silicon" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Electrum"><img src="/assets/sprites/electrum.png" alt="Electrum" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Silicon"><img src="/assets/sprites/silicon.png" alt="Silicon" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Biosteel Ingot"><img src="/assets/sprites/biosteel.png" alt="Biosteel" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot"></div>
    <div class="mc-slot" title="Biosteel Ingot"><img src="/assets/sprites/biosteel.png" alt="Biosteel" onError="this.src='/assets/sprites/barrier.png'" /></div>
  </div>
  <div class="mc-arrow"></div>
  <div class="mc-result" title="Machine Core"><img src="/assets/sprites/machine_core.png" alt="Machine Core" onError="this.src='/assets/sprites/barrier.png'" /></div>
</div>

# 1. O que é Oritech no Astron City

**Oritech** é uma rota de tecnologia avançada com máquinas animadas, processamento de minério, geração de energia, pipes, drones, lasers, quarries, agricultura automatizada, equipamentos elétricos, augments cibernéticos, reatores nucleares e acelerador de partículas.

No Astron City, Oritech deve ser tratado como uma rota **tech híbrida**:

- menos "linha industrial gregtech" que Modern Industrialization;
- mais visual, modular e experimental;
- ótimo para jogadores que querem máquinas bonitas, automação direta e ferramentas fortes;
- excelente para conectar tech com exploração, sobrevivência, mineração, farms e infraestrutura da cidade.

A fantasia do Oritech é:

> **Construir uma base tecnológica com máquinas vivas, lasers, energia, drones, augments e sistemas avançados que transformam survival em laboratório industrial.**

## 1.1. Papel no ecossistema do pack

| Mod | Papel no Astron City |
|---|---|
| Create | Identidade visual mecânica, fábricas aparentes, trens, movimento e infraestrutura pública. |
| AE2 | Storage, autocrafting, controle de estoque e rede central. |
| Modern Industrialization | Indústria pesada, tiers longos, química, aço, diesel, nuclear e multiblocos. |
| Oritech | Tech visual, lasers, quarries, drones, augments, processamento alternativo e energia experimental. |
| Ender IO / LaserIO / Modular Routers | Soluções compactas de logística e automação. |
| Powah | Energia flexível e escalável. |
| Productive Metalworks | Rotas renováveis/metálicas para abastecer linhas tech. |

A recomendação do wiki é: **não vender Oritech como substituto de MI ou Create**. Ele deve ser uma especialização paralela, com motivos próprios para ser explorado.

---

# 2. Mods cobertos e papel de cada um

| Mod | Versão no Astron City | Papel no guia |
|---|---:|---|
| Oritech | 1.2.8 | Core: máquinas, recursos, energia, pipes, drones, lasers, reactors, augments, tools, armor, quarries, particle accelerator. |
| Oracle Index | 1.3.0 | Guia/documentação in-game usado pelo Oritech para abrir páginas de ajuda diretamente no jogo. |

<div class="callout warning">
  <div class="callout-title">?? AVISO SOBRE RECEITAS</div>
  <p>O Astron City usa muitos mods que podem adicionar compatibilidade ou mudar receitas: **AlmostUnified**, **JAOPCA**, **KubeJS**, **EMI**, **JEI**, Create, AE2, MI, Ender IO, Immersive Engineering, Powah, Productive Metalworks e outros.<br><br>Por isso, este guia ensina:<br><br>- ordem de progressão;<br>- uso das máquinas;<br>- prioridades de recursos;<br>- fábricas e arquiteturas;<br>- itens fortes;<br>- integração entre mods;<br>- boas práticas de servidor.<br><br>Para receita exata no servidor, sempre confirme no jogo usando:<br><br>- **EMI/JEI** com busca por `@oritech`;<br>- **Jade** para diagnosticar máquinas, energia, fluidos e estados;<br>- **Oracle Index** para documentação in-game;<br>- filtros de receitas por máquina: Pulverizer, Foundry, Fragment Forge, Centrifuge, Assembler, Atomic Forge, Reactor, Particle Accelerator.<br><br>---<br><br># 3. Como usar este guia</p>
</div>

## Modo jogador iniciante

Siga em ordem:

1. Minere cobre, ferro, carvão, nickel, redstone, ouro, diamante e amethyst.
2. Faça Basic Generator.
3. Faça Powered Furnace.
4. Faça Pulverizer, Foundry e Assembler.
5. Entre no ore processing com Fragment Forge + Centrifuge.
6. Comece a usar addons e machine cores.
7. Faça laser e fluxite.
8. Automatize logística, mineração e farms.
9. Avance para reator, Atomic Forge, augments, Promethium e Particle Accelerator.

## Modo engenheiro do servidor

Use os capítulos de fábricas, performance e integração. O objetivo é criar infraestrutura compartilhada: ore processing público, rede de energia, chiller de gelo, base de reator, laboratório de augments e central de drones.

## Modo mantenedor do wiki

Use este guia como base para páginas menores:

- Oritech: primeiros passos.
- Como fazer ore processing.
- Como fazer fluxite.
- Guia de addons e machine cores.
- Guia de lasers.
- Guia de nuclear reactor.
- Guia de particle accelerator.
- Hot Topics de Oritech.

---

# 4. Glossário rápido

| Termo | Significado prático |
|---|---|
| RF | Unidade de energia usada pelo Oritech e compatível com muitos tech mods. |
| Machine Core | Bloco de core usado por máquinas/multiblocos. Define qualidade e capacidade de addons, não velocidade direta. |
| Machine Quality | Qualidade total da máquina. Controla quantas camadas/extensores de addons você pode usar. |
| Addon | Bloco acoplado a máquinas para speed, efficiency, fluid, redstone, proxy, yield, quarry range, burst etc. |
| Machine Extender | Addon que aumenta área/camadas disponíveis para colocar outros addons. |
| Fragment Forge | Máquina de fragmentação de ores para melhorar rendimento e gerar clumps/byproducts. |
| Clump / Small Clump | Produto intermediário de ore processing. Nove small clumps viram um clump. |
| Centrifuge | Separa clumps, dusts, fluidos e alguns recursos críticos. |
| Foundry | Produz ligas de forma eficiente. |
| Assembler | Fabrica componentes e máquinas de forma mais eficiente que crafting manual. |
| Enderic Laser | Laser multiuso: fluxite, mineração, dano, energia e alimentação de máquinas avançadas. |
| Target Designator | Item usado para marcar o alvo do laser. |
| Particle Accelerator | Sistema endgame para colisões de partículas, tachyons e receitas avançadas. |
| Tachyon | Partícula/energia gerada por colisões de alta velocidade, coletável para energia. |
| Augment | Implante cibernético instalado no jogador para buffs permanentes/toggleáveis. |

---

# 5. Mapa de progressão completo

```text
Sobrevivência vanilla
  -> Recursos iniciais: cobre, ferro, coal, nickel, redstone, ouro, diamante, amethyst
  -> Basic Generator + Powered Furnace
  -> Pulverizer + Foundry
  -> Assembler + Centrifuge
  -> Fragment Forge + primeira linha de ore processing
  -> Machine Cores + primeiros addons
  -> Pipes, filtros e energia organizada
  -> Enderic Laser + Target Designator + Fluxite
  -> Machine Frame automation, Block Destroyer, Fertilizer, Laser Mining
  -> Drone Port e logística avançada
  -> Biosteel, Energite, Duratium, carbon fibre, plastic e componentes avançados
  -> Bio/Lava/Solar/Steam power e/ou integração com Powah/MI
  -> Nuclear Reactor + Industrial Chiller + coolant automation
  -> Atomic Forge + Promethium
  -> Exo gear, Portable Laser, Promethium tools
  -> Augmentation Station + augments cibernéticos
  -> Particle Accelerator + Tachyon Collectors
  -> AE2 autocrafting completo e laboratórios endgame
```

## 5.1. Tiers por objetivo

| Fase | Meta principal | O que desbloqueia |
|---|---|---|
| Preparação | Recursos e energia básica | Basic Generator, Powered Furnace, primeiras máquinas. |
| Early | Processamento e ligas | Pulverizer, Foundry, Assembler, steel/electrum/adamant. |
| Early+ | Ore processing melhor | Fragment Forge, Centrifuge, byproducts e platinum via nickel. |
| Midgame | Addons, cores e fluxite | Machine quality, machine extender, Enderic Laser, Target Designator. |
| Midgame+ | Automação de mundo | Lasers, block destroyer, fertilizer, quarries, drones, farms. |
| Late | Energia avançada e materiais fortes | Reactor, chiller, biosteel, energite, duratium, Promethium. |
| Endgame | Laboratório experimental | Atomic Forge, Particle Accelerator, Tachyons, augments fortes. |

---

# 6. Preparação antes de começar

## 6.1. Recursos prioritários

Antes de montar a primeira sala de Oritech, junte:

| Recurso | Quantidade inicial sugerida | Por que importa |
|---|---:|---|
| Copper | 3-5 stacks | Cabos, componentes, máquinas e infraestrutura. |
| Iron | 5-8 stacks | Máquinas, frames, tools, estruturas e componentes. |
| Coal/Charcoal | 4-8 stacks | Basic Generator, steel, carbon, combustível inicial. |
| Nickel | 2-4 stacks | Material-chave do early Oritech e base de várias receitas. |
| Redstone | 1-3 stacks | Energia, circuitos, componentes, controle e máquinas. |
| Gold | 1-2 stacks | Eletrônica, ligas e componentes. |
| Diamond | 8-32 | Machines avançadas, cores e progressão. |
| Amethyst / budding amethyst | Quanto possível | Fluxite via Enderic Laser mais tarde. |
| Quartz / Nether Quartz | 1-2 stacks | Eletrônica, compatibilidade e crafts avançados. |
| Obsidian / crying obsidian | 1 stack | Alguns crafts avançados, energia, laser/lab. |
| Lava / magma / blaze resources | variável | Energia, Foundry, heat, Nether tech. |
| Ice / packed ice / blue ice | muito no midgame | Coolant de reator via absorber. |

## 6.2. Base ideal

Monte Oritech em uma área com:

- bastante espaço horizontal;
- paredes altas para lasers e máquinas animadas;
- sala separada para reator;
- área isolada para particle accelerator;
- shafts/corredores técnicos para pipes;
- acesso fácil ao AE2;
- distância segura de casas, farms de mobs e áreas decorativas.

## 6.3. Layout recomendado de primeira base

```text
[Entrada da oficina]
   -> Baús de recursos brutos
   -> Basic Generator(s)
   -> Powered Furnace
   -> Pulverizer
   -> Foundry
   -> Assembler
   -> Centrifuge
   -> Fragment Forge
   -> Área de addons e machine cores
   -> Saída para storage/AE2
```

Regra de ouro: **máquinas de Oritech são bonitas. Deixe-as visíveis, mas mantenha pipes e buffers organizados.**

---

# 7. Early Game - energia básica e primeiras máquinas

## 7.1. Objetivo da fase

Ao final do early game, você deve ter:

| Meta | Resultado |
|---|---|
| Basic Generator | Primeira fonte de RF. |
| Powered Furnace | Smelting elétrico inicial. |
| Pulverizer | Dusts e preparação para ligas. |
| Foundry | Alloys sem desperdício. |
| Assembler | Componentes mais eficientes. |
| Centrifuge | Ore processing e conversões essenciais. |
| Buffers simples | Baús, barrels e pipes. |

## 7.2. Step-by-step

### Passo 1 - Minere nickel cedo

Nickel é um recurso-chave do Oritech. Assim que entrar em cavernas, priorize:

- copper;
- iron;
- coal;
- nickel;
- redstone;
- gold;
- amethyst.

Nickel é especialmente importante porque aparece em receitas iniciais e em processamento de byproducts. Não trate nickel como minério secundário.

### Passo 2 - Faça um Basic Generator

O **Basic Generator** é o primeiro gerador real do mod. Ele queima combustíveis de furnace e gera energia suficiente para alimentar a primeira oficina.

Uso recomendado:

- 1 Basic Generator para começar.
- 2-4 Basic Generators para uma oficina confortável.
- Buffer de carvão/charcoal separado.
- Pipe de energia quando disponível.

### Passo 3 - Faça Powered Furnace

O **Powered Furnace** é uma conveniência inicial. Ele reduz dependência de fornalhas vanilla e encaixa bem em uma linha de processamento.

Fluxo simples:

```text
Baú de input -> Powered Furnace -> Baú de output
```

### Passo 4 - Faça Pulverizer

O **Pulverizer** transforma recursos em dusts e prepara ligas. Ele é um dos primeiros upgrades de eficiência real.

Use para:

- preparar dusts;
- alimentar Foundry;
- transformar recursos em formas compatíveis com receitas;
- integrar com AE2 depois.

### Passo 5 - Faça Foundry

A **Foundry** é o coração das ligas. Não fique craftando aço/electrum/adamant manualmente por muito tempo.

Fluxo inicial:

```text
Ore/ingot -> Pulverizer -> dusts -> Foundry -> alloy ingots
```

### Passo 6 - Faça Assembler

O **Assembler** é obrigatório para escalar. Ele fabrica componentes de forma mais eficiente e desbloqueia peças que não compensam no crafting manual.

Use para:

- machine components;
- batteries;
- energy parts;
- machine cores;
- pipes;
- upgrade parts;
- componentes intermediários para máquinas.

### Passo 7 - Faça Centrifuge

A **Centrifuge** separa recursos e é parte central do ore processing. Ela também fica mais importante com addons de fluid processing.

Uso inicial:

- clumps -> dusts/small dusts;
- recursos carbon/plastic, quando aplicável;
- conversões e subprodutos;
- preparação para midgame.

---

# 8. Ore Processing - fragmentação, centrifugação e byproducts

Oritech tem uma rota própria de ore processing. A lógica principal é:

```text
Ore block ou raw ore
  -> Fragment Forge
  -> clumps + small clumps
  -> Centrifuge
  -> dusts + small dusts + byproducts
  -> Foundry / Powered Furnace
  -> ingots
```

## 8.1. Fragment Forge

A **Fragment Forge** melhora o rendimento ao quebrar ores em clumps e small clumps. Nove small clumps formam um clump. O uso de ore blocks com Silk Touch costuma ser melhor do que alimentar raw ore, dependendo da receita do servidor.

### Quando fazer

Faça assim que tiver:

- energia estável;
- Centrifuge;
- buffers de input/output;
- storage suficiente para clumps variados.

### Por que é forte

A Fragment Forge não é só duplicação de minério. Ela também abre byproducts. O exemplo mais importante no early game é o processamento de nickel, que pode gerar platinum como subproduto.

## 8.2. Centrifuge

A **Centrifuge** é a máquina que transforma a fragmentação em materiais úteis. Sem ela, os clumps ficam presos em uma etapa intermediária.

### Usos importantes

- clumps -> dusts;
- small clumps -> dusts/small dusts;
- carbon fibre chain;
- fluid processing com addon;
- separação de subprodutos;
- suporte a ligas e componentes avançados.

## 8.3. Linha de ore processing mínima

```text
[Input ores]
  -> Fragment Forge
  -> Buffer de clumps
  -> Centrifuge
  -> Buffer de dusts
  -> Foundry/Powered Furnace
  -> Storage de ingots
```

## 8.4. Linha de ore processing boa para servidor

```text
Baú/Interface AE2 de input
  -> Filtro por tag de ores/raw ores
  -> Fragment Forge com Yield/Fortune Addons
  -> Buffer de clumps
  -> Centrifuge com Processing/Speed Addons
  -> Foundry para ligas ou Powered Furnace para ingots simples
  -> Import Bus/Storage final
  -> Overflow/Trash controlado para lixo ou excesso
```

## 8.5. Erros comuns

| Erro | Consequência | Correção |
|---|---|---|
| Jogar tudo na Fragment Forge sem filtro | Clumps misturados e storage caótico | Use filtros, buffers e rotas por categoria. |
| Ignorar small clumps | Perda de rendimento | Compacte 9 small clumps em clumps ou processe via Centrifuge. |
| Não separar byproducts | Materiais raros somem no caos | Storage dedicado para platinum, dusts raros e subprodutos. |
| Não usar Silk Touch quando compensa | Menor rendimento | Teste no EMI/JEI do servidor. |
| Sem overflow | Linha trava quando uma saída enche | Use barrels/tanks/trash controlado. |

---

# 9. Alloys e componentes - Pulverizer, Foundry e Assembler

O Oritech gira em torno de ligas. A ordem típica é:

```text
Recursos base -> dusts -> alloys -> machine components -> máquinas melhores
```

## 9.1. Alloys importantes

| Alloy/material | Fase | Uso típico |
|---|---|---|
| Steel | Early | Máquinas, tools, machine frames, componentes. |
| Electrum | Early/Mid | Eletrônica, energia, componentes. |
| Adamant | Early/Mid | Máquinas melhores e crafts avançados. |
| Biosteel | Midgame | Bio/advanced tech, farms, augments e componentes fortes. |
| Energite | Midgame/Late | Energia, componentes avançados e máquinas fortes. |
| Duratium | Midgame/Late | Estruturas, ferramentas, armaduras e tech avançada. |
| Promethium | Late/Endgame | Tools e equipamentos muito fortes. |
| Fluxite | Midgame | Lasers, energia, máquinas avançadas, Atomic Forge. |

## 9.2. Foundry como upgrade obrigatório

Craftar ligas na mão serve só para as primeiras máquinas. A Foundry é um dos maiores saltos de eficiência do early game.

### Setup recomendado

```text
Input dusts/ingots -> Pulverizer -> Foundry -> Output alloy ingots
```

### Com AE2

```text
Pattern Provider -> Pulverizer/Foundry -> Import Bus
```

Crie processing patterns para:

- steel;
- electrum;
- adamant;
- biosteel;
- energite;
- duratium;
- fluxite-related materials;
- machine cores;
- batteries/components.

## 9.3. Assembler como máquina de escala

O Assembler deve ser automatizado cedo. Tudo que você crafta repetidamente deve virar receita no Assembler.

Prioridades:

1. machine components;
2. batteries;
3. machine frames;
4. pipes;
5. addons;
6. machine cores;
7. reactor components;
8. accelerator components;
9. augment components.

---

# 10. Addons, Machine Cores e multiblocos

O sistema de **addons** é uma das identidades do Oritech. Em vez de simplesmente trocar a máquina por outra de tier maior, você melhora a máquina com blocos acoplados.

## 10.1. Como funcionam addons

Addons são blocos colocados em posições específicas da máquina ou em Machine Extenders conectados. Eles podem:

- aumentar velocidade;
- melhorar eficiência energética;
- habilitar fluid processing;
- dar acesso a slots específicos;
- adicionar redstone/comparator control;
- aumentar energia/capacidade/transfer rate;
- aumentar área de mineração/farm;
- habilitar burst processing;
- permitir crop filtering, hunter targeting, silk touch ou yield.

### Como diagnosticar

- A UI da máquina mostra a aba/página de addons.
- Marcadores na máquina indicam posições possíveis.
- Addon azul = conectado.
- Addon rosa = desconectado ou não ativado.
- Right-click na máquina ou no addon pode ativar/reavaliar conexão.

## 10.2. Machine Extender

O **Machine Extender** não melhora a máquina sozinho. Ele permite colocar mais addons conectados à mesma máquina.

Regra prática:

```text
Melhor core -> maior machine quality -> mais camadas/extenders -> mais addons possíveis
```

## 10.3. Machine Cores

Algumas máquinas precisam de cores posicionados ao redor. Cores:

- não podem ser compartilhados por máquinas;
- têm qualidade;
- não aceleram a máquina diretamente;
- aumentam a qualidade total;
- determinam quantos addons/extenders podem ser usados.

### Como montar multiblocos

1. Coloque a máquina principal.
2. Right-click na máquina para ver blocos destacados.
3. Coloque os Machine Cores nos pontos indicados.
4. Se estiver com um core na mão, right-click na máquina pode tentar posicionar o próximo core automaticamente.
5. Verifique se a estrutura não está obstruída.
6. Abra a UI e confira machine quality.

## 10.4. Addons principais

| Addon | Uso | Onde brilha |
|---|---|---|
| Speed Addon | Aumenta velocidade | Máquinas de processing, Assembler, Centrifuge. |
| Efficiency Addon | Reduz gasto de energia | Sistemas 24/7 e servidores. |
| Processing Addon | Processa instâncias extras por ciclo | Linhas de alto volume. |
| Fluid Addon | Habilita processamento de fluido | Centrifuge, Drone Port e fluid chains. |
| Burst Addon | Processa em rajadas rápidas | Crafting sob demanda com AE2. |
| Energy Acceptor Addon | Permite inserir energia pelo addon | Máquinas com pouca face livre. |
| Capacity Addon | Aumenta capacidade interna | Máquinas com picos de energia. |
| Transfer Addon | Aumenta taxa de transferência | Redes com máquinas rápidas. |
| Redstone Addon | Controle/comparator | Segurança, reatores, autocrafting e shutdown. |
| Proxy Addon | Acesso a slots específicos | Automação sided/input/output. |
| Yield/Fortune Addon | Aumenta rendimento/byproducts | Fragment Forge, Block Destroyer, Enderic Laser. |
| Silk Touch Addon | Preserva blocos | Quarry/laser mining seletivo. |
| Quarry/Range Addon | Aumenta área/profundidade | Block Destroyer e Enderic Laser. |
| Crop Addon | Filtra crops/animais não prontos | Farming server-friendly. |
| Hunter Addon | Faz laser mirar entidades | Defesa, farm controlada, cuidado em servidor. |
| Boiler Addon | Faz gerador produzir steam em vez de RF | Integração com steam/engenharia. |
| Machine Extender | Expande slots de addon | Máquinas de alta qualidade. |

---

# 11. Fluxite, Enderic Laser e Target Designator

**Fluxite** é um divisor de águas. Muitos recursos fortes do Oritech dependem dele.

## 11.1. Como chegar em fluxite

O caminho padrão envolve:

1. Encontrar ou cultivar amethyst clusters.
2. Construir **Enderic Laser / Laser Arm**.
3. Criar **Target Designator**.
4. Marcar clusters de amethyst como alvo.
5. Alimentar o laser com energia.
6. Coletar fluxite quando o processo completar.

## 11.2. Por que amethyst é importante

Não destrua todos os budding amethyst. Uma geode bem preservada vira uma fábrica de fluxite.

### Farm básica de fluxite

```text
Budding Amethyst
  -> clusters crescem
  -> Enderic Laser mira clusters
  -> quebra/processa clusters
  -> output de fluxite
  -> storage
```

### Farm avançada

```text
Geode preservada
  -> Observação/Timer/Redstone
  -> Enderic Laser com Yield/Silk/Range Addons conforme objetivo
  -> Coleta automatizada
  -> AE2 Import Bus
  -> ME Requester mantém estoque mínimo de fluxite
```

## 11.3. Outros usos do laser

O laser também pode:

- minerar blocos;
- transformar certos drops;
- causar dano em entidades;
- alimentar máquinas avançadas;
- suportar wireless energy transfer;
- ativar processos da Atomic Forge;
- participar de estabilização de blocos/energia avançada.

## 11.4. Cuidados em servidor

| Risco | Como evitar |
|---|---|
| Laser destruindo blocos errados | Teste em área isolada antes. |
| Alvos mal marcados | Use Target Designator com cuidado e placas. |
| Lag visual | Evite dezenas de lasers rodando sem necessidade. |
| Base pública danificada | Proíba lasers apontados para áreas públicas sem autorização. |
| Hunter Addon em área social | Não use em cidade/base comum. |

---

# 12. Logística - pipes, filtros, power poles e drones

O Oritech tem logística própria: item pipes, fluid pipes, energy pipes, filtros, power poles e drones.

## 12.1. Item Pipes

Use item pipes para linhas locais:

- ore processing;
- máquinas de components;
- farms pequenas;
- buffers de input/output.

Boa prática:

```text
Input chest -> pipe com filtro -> máquina -> output chest -> storage/AE2
```

## 12.2. Fluid Pipes

Use fluid pipes para:

- refinery;
- coolant;
- steam;
- fuel;
- fluid outputs de Centrifuge;
- reatores e processos avançados.

Sempre tenha:

- tank de buffer;
- rota de overflow;
- filtro quando possível;
- área visível para diagnóstico.

## 12.3. Energy Pipes

Use energy pipes para alimentar oficina Oritech. Para distância grande, prefira power poles ou integração com outro mod de energia.

## 12.4. Power Poles

Power poles transmitem energia em longas distâncias. A wrench também pode permitir zipline nos cabos, o que transforma infraestrutura em mobilidade divertida para cidade.

Uso ideal no Astron City:

- ligar distrito industrial ao reator;
- levar energia para quarry outposts;
- criar ruas/corredores com postes tecnológicos;
- conectar laboratórios sem enterrar cabos infinitos.

## 12.5. Drones e Drone Port

Drones transportam itens por longas distâncias. Eles são excelentes quando você quer algo mais temático que uma rede invisível de cabos.

### Usos fortes

- levar minério de outposts para a cidade;
- transportar componentes entre distritos;
- conectar farms remotas;
- criar logística visual de servidor;
- evitar cabos atravessando o mapa inteiro.

### Cuidados

- Não crie centenas de drones sem necessidade.
- Defina rotas claras.
- Use nomes/placas por rota.
- Prefira drones para logística temática, não para cada item pequeno.

---

# 13. Automação de mundo - quarries, lasers, farms e machine frames

Oritech brilha quando sai da parede de máquinas e passa a interagir com o mundo.

## 13.1. Block Destroyer

O **Block Destroyer** quebra blocos em uma área/linha conforme configuração e addons.

Usos:

- quarry compacta;
- farm de pedra/cobblestone;
- farm de madeira, com cuidado;
- coleta de crops com Crop Addon;
- automação de geodes ou blocos regeneráveis.

Addons importantes:

- Quarry/Range;
- Yield/Fortune;
- Silk Touch;
- Crop;
- Redstone;
- Speed/Efficiency.

## 13.2. Block Placer

O **Block Placer** coloca blocos e pode criar linhas de automação:

- stone generator;
- tree farm;
- concrete/blocks processing;
- setups de transformação;
- farms baseadas em blocos regeneráveis.

## 13.3. Fertilizer / Crop automation

Use para farms de:

- trigo/cenoura/batata;
- árvores;
- crops de mods;
- soul crops, quando aplicável.

Regra de servidor: farms automáticas devem ter controle redstone e botão de desligamento.

## 13.4. Laser Mining

O Enderic Laser com addons pode minerar áreas e ser usado como quarry avançada.

Comparação:

| Sistema | Vantagem | Risco |
|---|---|---|
| Block Destroyer | Mais controlável | Menor alcance dependendo de addon. |
| Laser Mining | Mais forte e visual | Risco de dano/erro de alvo. |
| Drones + quarry outpost | Temático e modular | Pode gerar overhead se exagerado. |
| Create quarry | Visual e integrado à identidade | Pode ser mais complexo. |
| MI quarry | Progressão industrial clássica | Menos visual que laser. |

## 13.5. Machine Frame automation

Algumas máquinas/interações trabalham em cima de **Machine Frame**. Trate Machine Frames como "área de operação" para farms, não só como bloco de receita.

Use para:

- organizar farms;
- criar módulos padronizados;
- separar linhas por função;
- facilitar manutenção visual.

---

# 14. Midgame - energia melhor, biosteel, energite e duratium

Depois de Foundry, Assembler, Centrifuge, ore processing e fluxite, o jogador começa a buscar materiais melhores.

## 14.1. Objetivos do midgame

| Objetivo | Por quê |
|---|---|
| Fluxite estável | Necessário para lasers e tecnologia avançada. |
| Addons úteis | Aumentam throughput e eficiência. |
| Machine Cores melhores | Liberam mais addons/extenders. |
| Biosteel | Abre linha bio/advanced e alguns augments. |
| Energite | Energia e máquinas fortes. |
| Duratium | Estruturas e equipamentos avançados. |
| Plastic / carbon fibre | Componentes e augments. |
| Rede logística | Pipes, filters, power poles, drones. |

## 14.2. Energia no midgame

Opções de energia:

- mais Basic Generators;
- Bio Generator;
- Lava Generator;
- Solar Generator;
- Steam Engine chain;
- Powah para rede externa;
- MI para infraestrutura pesada;
- Oritech Reactor como salto grande.

No Astron City, a melhor prática é não depender de uma única solução. Use Oritech para sistemas visuais e experimentais; use Powah/MI quando a base exigir energia constante e previsível.

## 14.3. Biofuel e energia sustentável

Se o servidor valoriza long-term world, energia sustentável é melhor que queimar carvão para sempre.

Setup sugerido:

```text
Farm automática -> biomassa/bio input -> Bio Generator -> Energy Buffer -> Machines
```

Com Productive Bees/Trees/Metalworks e Farmer's Delight, dá para criar bairros agrícolas que sustentam energia e comida ao mesmo tempo.

---

# 15. Late Game - Atomic Forge, Promethium e máquinas avançadas

O late game do Oritech começa quando você tem:

- energia robusta;
- fluxite automatizado;
- alloys avançadas;
- machine cores bons;
- addons;
- AE2 começando a controlar tudo.

## 15.1. Atomic Forge

A **Atomic Forge** é uma máquina avançada que depende de laser/energia avançada. Ela é um dos marcos de transição para materiais mais raros e itens de ponta.

Use para:

- crafts avançados;
- progressão para Promethium;
- materiais endgame;
- processamento high-tech.

### Checklist antes de montar

- Fluxite em estoque.
- Enderic Laser funcionando.
- Energia estável.
- Área isolada e identificada.
- AE2 com input/output separado.
- Redstone control para desligamento.

## 15.2. Promethium

**Promethium** é um material de late/endgame ligado a ferramentas muito fortes.

Prioridades:

1. Promethium Pickaxe.
2. Promethium Axe.
3. Promethium tools úteis para construção/mineração.
4. Componentes avançados.
5. Integração com augments e gear.

### Ferramentas de Promethium

| Ferramenta | Uso |
|---|---|
| Promethium Pickaxe | Mineração forte, modos de mineração, ótimo para megaprojetos. |
| Promethium Axe | Excelente para madeira; pode quebrar árvore inteira ao agachar, conforme tooltip. |
| Promethium gear | Itens de final de progressão Oritech. |

## 15.3. Portable Laser

O **Portable Laser** é uma ferramenta extremamente forte e perigosa.

Funções:

- minerar blocos;
- transferir energia;
- causar dano em entidades;
- transformar drops parecidos com Enderic Laser;
- disparar explosão de alta energia com right-click;
- aceitar encantamentos relevantes, conforme configuração/tooltip.

Regra de servidor: não usar Portable Laser em cidade pública sem área de teste.

---

# 16. Nuclear Reactor - guia de segurança e design

O reator nuclear do Oritech é uma das fontes de energia mais poderosas do mod, mas exige controle térmico.

## 16.1. Conceito

O reator consome **uranium pellets** ou **plutonium pellets** e gera RF. A geração depende de:

- fuel rods;
- double/quad rods;
- neutron reflectors;
- quantidade de pulsos de neutron;
- cooling disponível;
- altura do reator.

O perigo principal é calor. Rods que passam de temperatura crítica por tempo sustentado podem causar meltdown.

## 16.2. Componentes

| Componente | Função |
|---|---|
| Reactor Controller | Controla, monta e mostra status do reator. |
| Reactor Wall | Parede externa resistente. |
| Reactor Rod | Rod simples. Gera energia/calor. |
| Reactor Double Rod | Mais eficiente, mais quente. |
| Reactor Quad Rod | Muito eficiente, muito quente. |
| Reactor Heat Pipe | Move calor dos rods para cooling. |
| Reactor Heat Vent | Remove calor do componente vizinho mais quente. |
| Reactor Heat Absorber | Remove 16 heat/t de cada vizinho, mas consome coolant. |
| Reactor Neutron Reflector | Reflete pulsos e aumenta eficiência dos rods. |
| Reactor Energy Port | Saída de energia, com limite por port. |
| Reactor Fuel Port | Entrada de fuel pellets por cima dos rods. |
| Reactor Coolant Absorber Port | Entrada de ice/packed ice/blue ice para absorbers. |
| Reactor Redstone Port | Controle de desligamento e leitura via comparator. |

## 16.3. Estrutura

Regras práticas:

- O reator precisa de paredes retangulares.
- Edges devem ser Reactor Wall.
- Controller fica em uma parede.
- Energy Ports ficam nas side walls.
- Fuel/Coolant ports ficam no teto, alinhados aos componentes internos.
- Interior precisa ser idêntico na vertical.
- Reator pode escalar em altura.
- Max size documentado: até 64 blocos por direção.

## 16.4. Cooling

### Passive cooling

Usa Heat Vents e Heat Pipes. Mais simples, menos consumo externo, mas limita potência.

Bom para:

- reatores pequenos;
- laboratório de teste;
- primeira energia nuclear;
- designs seguros.

### Active cooling

Usa Heat Absorbers e coolant item, como ice, packed ice ou blue ice.

Bom para:

- rods mais densos;
- double/quad rods;
- designs com reflectors;
- reatores de alta potência.

### Ice factory recomendada

```text
Water input
  -> Industrial Chiller
  -> Ice/Packed Ice/Blue Ice line
  -> Buffer de coolant
  -> Reactor Coolant Port
```

## 16.5. Redstone safety

O **Reactor Redstone Port** deve ser obrigatório em servidor.

Use para:

- desligar inserção de novo fuel;
- emitir comparator por temperatura;
- acionar alarmes;
- cortar feed de fuel;
- desligar via botão manual.

Importante: fuel já iniciado precisa terminar de queimar antes do reator parar totalmente. Por isso, não use pellets grandes em reator novo sem teste.

## 16.6. Design inicial seguro

Para primeiro reator:

- use rods simples;
- poucos reflectors;
- muitos heat vents;
- active cooling se tiver ice estável;
- redstone port configurado;
- fuel pellets pequenos;
- energy buffer grande;
- sala isolada.

## 16.7. Protocolo de segurança do servidor

Antes de ligar:

- todos entenderam onde fica o botão de shutdown;
- coolant buffer cheio;
- fuel input limitado;
- energy output conectado;
- temperatura monitorada;
- área sem casas próximas;
- backup do mundo, se for o primeiro teste.

Durante o funcionamento:

- não chunkload reator experimental sem supervisão;
- evite rodar sem coolant por longos períodos;
- não coloque quad rods antes de testar design;
- não use reflectors em excesso sem cálculo;
- monitore TPS se a planta crescer muito.

---

# 17. Particle Accelerator - matéria, tachyons e incursões dimensionais

O **Particle Accelerator** é o grande laboratório endgame do Oritech.

## 17.1. Conceito

Você insere itens como partículas, acelera em um anel com guide rings e motors, mede velocidade com sensors e cria colisões para gerar novos itens/efeitos.

TL;DR:

```text
Build ring -> accelerate particle -> measure speed -> insert second particle -> collision -> output/tachyons/incursion
```

## 17.2. Componentes importantes

| Componente | Função |
|---|---|
| Particle Accelerator Controller | Insere/gerencia partículas. |
| Guide Ring | Define rota da partícula. |
| Accelerator Motor | Acelera a partícula e consome energia. |
| Particle Speed Sensor | Mede velocidade e emite comparator. |
| Tachyon Collector | Coleta energia dos tachyons gerados por colisões. |
| Redstone switches | Alteram rota de guide rings curvos. |

## 17.3. Design básico

```text
[Controller] -> [Guide Rings em loop] -> [Motors em trechos retos] -> [Sensor] -> colisão controlada
```

O ring circular é mais eficiente para alta velocidade que uma linha reta. Para velocidades muito altas, aumente o tamanho do anel e a distância entre curvas.

## 17.4. Regras de velocidade

- Quanto maior a velocidade, maior a distância permitida entre guide blocks.
- Curvas apertadas em alta velocidade fazem a partícula sair do caminho.
- Se a partícula sair do caminho, pode causar dano e destruir blocos.
- Motors consomem energia proporcional à velocidade atual da partícula.
- Uma partícula rápida + uma partícula quase parada geralmente é mais fácil que acelerar duas igualmente.

## 17.5. Tachyons

Colisões de alta energia emitem tachyons. Tachyon Collectors podem capturar essa energia.

Uso forte:

- geração energética experimental;
- laboratório endgame;
- motivo para construir estrutura grande;
- integração com energy buffers.

Cuidados:

- coletores próximos podem saturar;
- colisões muito grandes espalham tachyons longe;
- acima de velocidades muito altas, parte da energia pode ser perdida;
- construa parede/jaula de segurança ao redor da colisão.

## 17.6. Incursões dimensionais

A documentação sugere efeitos experimentais quando certos itens colidem com energia excessiva:

- Fire charges acima de energia alta podem aproximar efeitos do Nether.
- Ender pearls em energia maior podem envolver efeitos do End.
- Colisões extremas podem criar fenômenos perigosos.

Para Astron City, trate isso como conteúdo de **laboratório proibido**:

- fazer longe da cidade;
- criar sala de containment;
- avisar jogadores;
- backup antes de testes extremos;
- sem chunkload permanente em setup instável.

---

# 18. Cybernetic Augments - build de personagem tecnológico

Oritech permite transformar o jogador com augments cibernéticos. Isso é perfeito para Astron City porque cria identidade de personagem: engenheiro, minerador, explorador, combatente, builder ou cientista.

## 18.1. Como pensar em augments

Augments não são apenas bônus. Eles mudam a função do jogador no servidor.

Exemplos:

- minerador com Ore Vision + Mining Speed + Magnet;
- builder com Far Reach + Flight + Step Assist;
- explorador com Water Breathing + Night Vision + Reduced Gravity;
- combatente com Armor + Attack Damage + Weapon Reach;
- jogador suporte com Portal + Auto-Feeder + Luck.

## 18.2. Augments catalogados por função

### Defesa e sobrevivência

| Augment | Efeito prático |
|---|---|
| Steel-Infused Frame | Mais vida máxima. |
| Carbon-Reinforced Lungs | Mais vida/stamina. |
| Hyper-Redundancy Matrix | Grande boost de vida. |
| Living Fortress | Boost extremo de vida. |
| Hardened Plating | Mais armor. |
| Reactive Plating | Mais armor. |
| Aegis System | Armor avançado. |
| Water Breathing | Respiração subaquática. |
| Auto-Feeder | Alimentação automática a partir do inventário. |

### Movimento e mobilidade

| Augment | Efeito prático |
|---|---|
| Synthetic Muscles | Mais velocidade de movimento. |
| Flash Steps | Speed boost grande, toggleável. |
| Step Assist | Sobe blocos mais facilmente. |
| Reduced Gravity | Reduz efeito da gravidade. |
| Flight | Voo estilo creative, dependendo de balanceamento/energia. |
| Portal | Cria retorno para estação, se configurado. |
| Miniaturization | Reduz tamanho do jogador. |
| Gigantism | Aumenta tamanho do jogador. |

### Mineração e construção

| Augment | Efeito prático |
|---|---|
| Block Reach | Mais alcance de blocos. |
| Far Reach | Alcance muito maior, toggleável. |
| Mining Speed | Mineração mais rápida. |
| Hyper Mining Speed | Grande boost de mineração. |
| Ore Vision | Destaca ores através de blocos. |
| Magnet | Atrai itens próximos. |

### Combate e loot

| Augment | Efeito prático |
|---|---|
| Weapon Reach | Mais alcance de ataque. |
| Steel Fist | Mais dano. |
| Psionic Strikes | Grande boost de dano. |
| Luck | Mais sorte em loot/drop rolls. |
| Cloak | Invisibilidade, toggleável. |

## 18.3. Builds recomendadas

### Build Minerador

- Ore Vision.
- Mining Speed / Hyper Mining Speed.
- Magnet.
- Far Reach.
- Night Vision.
- Auto-Feeder.

### Build Builder da cidade

- Far Reach.
- Flight.
- Step Assist.
- Magnet.
- Reduced Gravity.
- Auto-Feeder.

### Build Boss Hunter

- Armor upgrades.
- Attack Damage.
- Weapon Reach.
- Auto-Feeder.
- Water Breathing.
- Cloak, se permitido.

### Build Explorador espacial/dimensional

- Night Vision.
- Water Breathing.
- Reduced Gravity.
- Flight.
- Portal.
- Auto-Feeder.

## 18.4. Balanceamento recomendado

No Astron City, augments como Flight, Cloak, Ore Vision, Luck e Hyper Mining Speed são muito fortes. Eles devem ser tratados como mid/late-game, idealmente ligados a energia, materiais avançados, bosses, exploração ou quests.

---

# 19. Ferramentas, armaduras e equipamentos

## 19.1. Hand Drill

Ferramenta inicial/mediana para mineração tecnológica. Boa ponte antes de ferramentas endgame.

## 19.2. Exo Armor

| Peça | Uso |
|---|---|
| Exo Boots | Previne dano de queda. Muito forte cedo. |
| Exo Leggings | Aumenta velocidade de movimento. |
| Exo Chestplate | Carrega itens de energia equipados. |
| Exo Helmet | Dá night vision. |
| Exo Jetpack / Jetpack variants | Mobilidade aérea; requer energia ou turbofuel. |
| Exo Elytra / Jetpack Elytra | Mobilidade avançada e carregamento. |

## 19.3. Promethium Tools

As ferramentas de Promethium são objetivos de late game.

- Pickaxe: mineração e modos especiais.
- Axe: corte forte; pode quebrar árvore inteira ao agachar.
- Outras ferramentas: use conforme EMI/JEI do servidor.

## 19.4. Portable Laser

Uma das ferramentas mais fortes do Oritech.

Use com cuidado para:

- mineração avançada;
- combate;
- transferência de energia;
- transformação de drops;
- explosões controladas.

## 19.5. Electric Mace

Arma com efeito elétrico/relâmpago e sinergia com queda, parecida com mace vanilla em conceito. Boa para build de combate tecnológico.

---

# 20. Catálogo de recursos e itens por família

Este catálogo é organizado por função. Use EMI/JEI para IDs e receitas exatas.

## 20.1. Ores e recursos naturais

| Família | Exemplos | Uso |
|---|---|---|
| Nickel | Raw Nickel, Nickel Ore, Nickel Dust/Clump | Early Oritech, alloys, platinum byproduct. |
| Platinum | Platinum Dust/Clump/Ingot | Material raro, byproduct, crafts avançados. |
| Uranium | Uranium ore/dust/pellets | Nuclear reactor. |
| Plutonium | Plutonium pellets/material | Nuclear reactor avançado. |
| Amethyst | Budding Amethyst, Amethyst Cluster | Fluxite via Enderic Laser. |
| Coal/Carbon | Coal, carbon, carbon fibre | Combustível, steel, componentes. |
| Redstone/Gold/Diamond | Vanilla tech materials | Eletrônica, components, cores, machines. |

## 20.2. Intermediários de ore processing

| Item | Uso |
|---|---|
| Clumps | Resultado de Fragment Forge; processados na Centrifuge. |
| Small Clumps | Nove viram um clump; também podem ter rotas próprias. |
| Dusts | Entrada para Foundry/smelting. |
| Small Dusts | Subprodutos e compactação. |
| Byproduct dusts | Materiais raros obtidos por processamento. |

## 20.3. Alloys e materiais avançados

| Material | Fase | Observação |
|---|---|---|
| Steel | Early | Primeira liga industrial séria. |
| Electrum | Early/Mid | Energia e componentes. |
| Adamant | Early/Mid | Progressão de máquinas. |
| Biosteel | Midgame | Bio-tech, farms, augments e componentes avançados. |
| Energite | Mid/Late | Energia e componentes fortes. |
| Duratium | Mid/Late | Material durável e avançado. |
| Fluxite | Midgame | Laser, Atomic Forge, energia e máquinas avançadas. |
| Promethium | Late/Endgame | Ferramentas e equipamentos muito fortes. |
| Overcharged Crystal | Endgame | Energia extrema/itens avançados. |

## 20.4. Componentes de máquinas

| Família | Uso |
|---|---|
| Machine Frame | Base de máquinas e farms. |
| Machine Core tiers | Multiblocos, qualidade e addons. |
| Ultimate Machine Core | Qualidade alta e muitos addons/extenders. |
| Batteries | Energia portátil e crafts. |
| Energy Components | Máquinas, pipes, storage. |
| Carbon Fibre / Plastic Sheets | Componentes midgame e augments. |
| AI Chips / Super AI Chip | Progressão avançada/inteligência. |
| Unholy Intelligence | Conteúdo avançado/arcano, usar com cautela. |

## 20.5. Addons

| Família | Exemplos |
|---|---|
| Speed/Efficiency | Speed Addon, Efficiency Addon. |
| Processing | Processing Addon, Burst Addon. |
| Energy | Energy Acceptor, Capacity, Transfer. |
| Logistics | Proxy, Redstone. |
| World interaction | Yield/Fortune, Silk Touch, Crop, Quarry/Range, Hunter. |
| Structure | Machine Extender. |
| Generator | Boiler Addon. |

## 20.6. Reactor items

| Família | Exemplos |
|---|---|
| Fuel | Uranium Pellets, Plutonium Pellets. |
| Rods | Single Rod, Double Rod, Quad Rod. |
| Cooling | Heat Pipe, Heat Vent, Heat Absorber. |
| Ports | Fuel Port, Coolant Port, Energy Port, Redstone Port. |
| Shell | Reactor Wall, Reactor Controller. |
| Efficiency | Neutron Reflector. |

## 20.7. Particle Accelerator items

| Família | Exemplos |
|---|---|
| Control | Particle Accelerator Controller. |
| Routing | Guide Ring, redstone switch behavior. |
| Speed | Accelerator Motor. |
| Measurement | Particle Speed Sensor. |
| Energy recovery | Tachyon Collector. |
| Experimental outputs | Items from collision recipes, dimensional effects. |

## 20.8. Equipment e augments

| Família | Exemplos |
|---|---|
| Tools | Hand Drill, Promethium Pickaxe, Promethium Axe, Portable Laser. |
| Armor | Exo Helmet, Exo Chestplate, Exo Leggings, Exo Boots, Jetpack variants. |
| Weapons | Electric Mace, Portable Laser offensive mode. |
| Augments | Flight, Ore Vision, Magnet, Luck, Reach, Mining Speed, Armor, HP, Cloak, Auto-Feeder. |
| Utility | Wrench, Target Designator, Item Filter, Charger. |

---

# 21. Catálogo de máquinas e blocos funcionais

## 21.1. Máquinas de processing

| Máquina | Função |
|---|---|
| Powered Furnace | Smelting elétrico. |
| Pulverizer | Trituração/dusts. |
| Foundry | Ligas e fundição. |
| Assembler | Componentes e crafts eficientes. |
| Centrifuge | Separação, clumps, dusts, fluid processing. |
| Fragment Forge | Fragmentação de ores e byproducts. |
| Atomic Forge | Crafting/processamento avançado com laser/energia. |
| Refinery / Tainted Refinery | Processamento de fluidos/refinaria e variações avançadas. |
| Industrial Chiller / Cooler | Gelo, resfriamento e suporte a reactor/coolant. |

## 21.2. Energia

| Bloco | Função |
|---|---|
| Basic Generator | Primeiro RF, queima fuels normais. |
| Bio Generator | Energia sustentável com bio resources. |
| Lava Generator | Energia por lava. |
| Solar Generator | Energia solar, potencialmente dependente de core quality. |
| Steam Engine | Converte steam em RF/water; pode ser encadeado. |
| Nuclear Reactor | Energia massiva, exige cooling. |
| Energy Storage | Buffer de energia. |
| Unstable Container / Black Hole energy storage | Energia extrema; não colocar sem entender. |
| Tachyon Collector | Coleta energia de particle collisions. |
| Power Poles | Energia longa distância. |
| Energy Pipes / Superconductor | Distribuição de energia. |

## 21.3. Logística

| Bloco/item | Função |
|---|---|
| Item Pipe | Transporte de itens. |
| Fluid Pipe | Transporte de fluidos. |
| Energy Pipe | Transporte de RF. |
| Item Filter | Whitelist/blacklist/NBT/component filtering. |
| Wrench | Configuração de pipes e zipline em power poles. |
| Drone Port | Controle/logística de drones. |
| Drones | Transporte de itens à distância. |

## 21.4. World interaction

| Máquina | Função |
|---|---|
| Enderic Laser / Laser Arm | Fluxite, mineração, dano, energia, processos avançados. |
| Target Designator | Define alvo do laser. |
| Block Destroyer | Quebra blocos/farms/quarry. |
| Block Placer | Coloca blocos. |
| Fertilizer | Crescimento/farms. |
| Weed Killer | Limpa grass/plants em área ampla. |
| Mob Spawner / Spawner Controller / Cage | Sistema de spawner/souls, se habilitado. |

## 21.5. Arcane / soul / enchantment tech

| Bloco/item | Função |
|---|---|
| Arcane Catalyst / Stabilizer | Armazena souls e interage com enchantments. |
| Enchanter | Aplica encantamentos com energia/souls. |
| Soul Crop | Crop ligado a soul systems. |
| Dubious Container / Intelligence item | Captura entidade/inteligência para progressão avançada. |

## 21.6. Estruturas endgame

| Sistema | Função |
|---|---|
| Nuclear Reactor | Energia de grande escala. |
| Particle Accelerator | Colisões, receitas avançadas, tachyons e fenômenos. |
| Atomic Forge | Processamento de alto tier. |
| Augmentation Station | Instala/remove augments. |
| Energy Storage multiblock | Armazenamento massivo/experimental. |

---

# 22. Fábricas populares e soluções de survival

## 22.1. Starter Oritech Workshop

**Função:** tirar o jogador do crafting manual e iniciar tecnologia.

Componentes:

- Basic Generator.
- Powered Furnace.
- Pulverizer.
- Foundry.
- Assembler.
- Centrifuge.
- Baú de input.
- Baú de output.
- Item pipes e energy pipes.

Fluxo:

```text
Recursos brutos -> Pulverizer -> Foundry/Powered Furnace -> Assembler -> componentes
```

## 22.2. Ore Multiplication Lab

**Função:** melhorar rendimento de mineração.

Componentes:

- Fragment Forge.
- Centrifuge.
- Foundry.
- Powered Furnace.
- Yield/Fortune Addons.
- Storage de clumps/dusts/byproducts.

Fluxo:

```text
Ores/raw ores -> Fragment Forge -> Clumps -> Centrifuge -> Dusts -> Smelting/Forging -> Ingots
```

## 22.3. Nickel-to-Platinum Line

**Função:** gerar platinum como byproduct de nickel.

Fluxo:

```text
Nickel ore/raw nickel -> Fragment Forge -> Centrifuge -> Nickel dust + Platinum byproduct -> Storage separado
```

Uso:

- prioridade no early/midgame;
- estoque dedicado para platinum;
- ótima linha para ME Requester manter materiais críticos.

## 22.4. Alloy Foundry Factory

**Função:** steel/electrum/adamant/biosteel/energite/duratium sob demanda.

Componentes:

- Pulverizer.
- Foundry.
- Assembler.
- Buffers separados.
- AE2 Pattern Provider.
- Import Bus.

Fluxo:

```text
AE2 solicita alloy -> Pulverizer prepara dusts -> Foundry produz alloy -> AE2 importa
```

## 22.5. Fluxite Geode Farm

**Função:** fluxite renovável/estável.

Componentes:

- Budding Amethyst preservado.
- Enderic Laser.
- Target Designator.
- Energy input.
- Coleta de drops.
- Storage/AE2.

Regras:

- não destruir budding amethyst;
- proteger geode;
- usar redstone control;
- evitar laser ligado sem necessidade.

## 22.6. Bio Power Plant

**Função:** energia sustentável de midgame.

Componentes:

- Farm automática.
- Fertilizer/Block Destroyer/Placer.
- Bio Generator.
- Energy buffer.
- Pipes.

Fluxo:

```text
Farm -> biomass/bio input -> Bio Generator -> Energy Storage -> Workshop
```

## 22.7. Laser Quarry Outpost

**Função:** mineração remota forte.

Componentes:

- Enderic Laser.
- Target Designator.
- Quarry/Range Addons.
- Yield/Silk Addons.
- Energy input via power poles.
- Drone Port ou AE2/Ender IO/Dimensional link.
- Area claim/placas.

Regras de servidor:

- longe da cidade;
- chunkloading limitado;
- desligamento manual;
- logs/placas de dono;
- rota de retorno clara.

## 22.8. Drone Logistics Hub

**Função:** transporte visual entre distritos.

Componentes:

- Drone Port principal.
- Drones.
- Baús/buffers por rota.
- Filtros.
- Energy supply.

Usos:

- outpost -> cidade;
- farm -> cozinha;
- quarry -> ore lab;
- reator -> industrial district;
- laboratório -> storage central.

## 22.9. Ice/Coolant Factory

**Função:** abastecer Reactor Heat Absorbers.

Componentes:

- Water source.
- Industrial Chiller.
- Storage de ice/packed ice/blue ice.
- Pipe para Reactor Coolant Port.
- Alarme de estoque baixo.

Fluxo:

```text
Water -> Chiller -> Ice -> Buffer -> Reactor Coolant Port
```

## 22.10. Safe Nuclear Plant

**Função:** energia grande e estável.

Componentes:

- Reactor Controller.
- Reactor Walls.
- Rods simples inicialmente.
- Heat Pipes.
- Heat Vents.
- Heat Absorbers.
- Fuel Ports.
- Coolant Ports.
- Energy Ports.
- Redstone Port.
- Energy buffer.
- Shutdown button.

Regra: primeiro reator deve ser conservador. Reator bonito que explode é só evento catastrófico.

## 22.11. Particle Accelerator Research Lab

**Função:** endgame experimental.

Componentes:

- Accelerator Controller.
- Guide Rings.
- Accelerator Motors.
- Particle Sensors.
- Tachyon Collectors.
- Redstone switches.
- Containment wall.
- Energy buffer.

Uso:

- receitas avançadas;
- tachyon energy;
- eventos experimentais;
- megaprojeto da cidade.

## 22.12. Cybernetic Clinic

**Função:** instalar augments em jogadores.

Componentes:

- Augmentation Station.
- Storage de augment parts.
- Energia.
- Área decorativa médica/laboratorial.
- Regras de balanceamento do servidor.

Sugestão: transformar em prédio público, com quests e custo por upgrade.

---

# 23. HOT TOPICS - o que é muito forte e útil

Esta seção lista itens, máquinas e estratégias que mais impactam survival.

## 23.1. Fragment Forge + Centrifuge

**Por que é forte:** aumenta rendimento de minério e abre byproducts. É um dos maiores upgrades de economia do early game.

Prioridade: muito alta.

## 23.2. Foundry

**Por que é forte:** torna alloys viáveis e reduz desperdício. Sem Foundry, Oritech fica caro e lento.

Prioridade: muito alta.

## 23.3. Assembler

**Por que é forte:** reduz crafting manual e prepara autocrafting. Tudo que é componente repetitivo deve passar por ele.

Prioridade: muito alta.

## 23.4. Enderic Laser + Target Designator

**Por que é forte:** libera fluxite, mineração avançada, processos de laser e máquinas high-tier.

Prioridade: altíssima.

## 23.5. Fluxite Farm em Geode

**Por que é forte:** transforma amethyst em recurso tech avançado recorrente.

Prioridade: altíssima.

## 23.6. Machine Extender + bons Machine Cores

**Por que é forte:** mais addons significa máquinas muito mais especializadas.

Use em:

- Fragment Forge;
- Centrifuge;
- Foundry;
- Assembler;
- Enderic Laser;
- Block Destroyer;
- Reactor support systems.

## 23.7. Yield/Fortune Addon

**Por que é forte:** mais drops/byproducts em ore processing, lasers e Block Destroyer.

Cuidado: pode acelerar economia do servidor demais. Balancear via progressão.

## 23.8. Quarry/Range Addon

**Por que é forte:** transforma Block Destroyer/Laser em mineração em escala.

Cuidado: use com limite de chunkload e área aprovada.

## 23.9. Silk Touch Addon

**Por que é forte:** preserva blocos para rotas de processamento melhores, especialmente se ore blocks rendem mais.

## 23.10. Power Poles

**Por que é forte:** energia longa distância + estética de cidade + zipline com wrench.

Uso perfeito para ruas industriais.

## 23.11. Drone Port

**Por que é forte:** logística longa distância sem esconder tudo em cabos. Excelente para multiplayer e roleplay industrial.

## 23.12. Exo Boots

**Por que é forte:** remover dano de queda cedo muda exploração, construção e dungeons.

Balanceamento: cuidado para não trivializar exploração vertical cedo demais.

## 23.13. Exo Chestplate / Jetpack variants

**Por que é forte:** mobilidade e carregamento de energia. Muito útil para builders e exploradores.

## 23.14. Portable Laser

**Por que é forte:** mineração, dano, transformação e explosão em uma ferramenta.

Regra: tratar como item de risco em servidor.

## 23.15. Promethium Pickaxe

**Por que é forte:** ferramenta endgame para mineração e construção pesada.

## 23.16. Promethium Axe

**Por que é forte:** tree breaking ao agachar é excelente para megaprojetos e farms de madeira.

## 23.17. Nuclear Reactor

**Por que é forte:** energia massiva.

Risco: meltdown. Precisa de protocolo de segurança.

## 23.18. Industrial Chiller

**Por que é forte:** faz coolant/ice chain para reator e outros sistemas.

## 23.19. Particle Accelerator + Tachyon Collectors

**Por que é forte:** endgame tecnológico, receitas especiais e energia experimental.

Risco: destruição de blocos, dano, setups enormes e consumo energético.

## 23.20. Augment: Ore Vision

**Por que é forte:** mineração muito mais eficiente.

Balanceamento: pode competir com exploração/mineração normal. Mid/late-game recomendado.

## 23.21. Augment: Flight

**Por que é forte:** voo livre muda completamente construção e exploração.

Balanceamento: late-game ou custo alto.

## 23.22. Augment: Magnet

**Por que é forte:** qualidade de vida absurda para mineração, farms e construção.

## 23.23. Augment: Luck

**Por que é forte:** afeta loot/drop rolls. Excelente para dungeons e bosses.

Balanceamento: cuidado com economia do servidor.

## 23.24. Augment: Far Reach

**Por que é forte:** builders amam. Muito útil para megabases e fábricas.

## 23.25. Augment: Hyper Mining Speed

**Por que é forte:** mineração e construção aceleram muito.

Balanceamento: item de endgame.

## 23.26. Redstone Addon

**Por que é forte:** cria máquinas inteligentes, shutdowns, comparators e controle seguro.

Obrigatório para:

- reatores;
- farms 24/7;
- laser/quarry;
- AE2 autocrafting;
- builds de servidor.

---

# 24. Integração com AE2

AE2 deve controlar Oritech no mid/late-game.

## 24.1. Modelo geral

```text
AE2 decide -> Oritech processa -> AE2 armazena
```

## 24.2. Processing patterns prioritários

| Pattern | Máquina |
|---|---|
| Ingots -> dusts | Pulverizer |
| Dusts -> alloys | Foundry |
| Ores/raw ores -> clumps | Fragment Forge |
| Clumps -> dusts/byproducts | Centrifuge |
| Components -> machine parts | Assembler |
| Amethyst/fluxite chain | Enderic Laser setup |
| Reactor components | Assembler/Foundry |
| Accelerator components | Assembler/Atomic Forge |
| Augment components | Assembler/advanced machines |

## 24.3. ME Requester recomendado

Use ME Requester para manter:

| Item | Estoque sugerido |
|---|---:|
| Nickel Ingot/Dust | 512 |
| Steel Ingot | 512 |
| Electrum Ingot | 256 |
| Adamant Ingot | 256 |
| Platinum | 128 |
| Fluxite | 256 |
| Biosteel | 128 |
| Energite | 128 |
| Duratium | 128 |
| Machine Cores básicos | 32 |
| Machine Cores avançados | 8-16 |
| Speed/Efficiency Addons | 16 cada |
| Yield/Fortune Addons | 8 |
| Machine Extenders | 16 |
| Reactor Walls | 512+ |
| Reactor Heat Vents | 64+ |
| Fuel Pellets | buffer controlado |
| Ice/Packed Ice/Blue Ice | 1024+ para reactor |

## 24.4. AE2 + lasers

Use AE2 com cuidado em setups de laser:

- input/output separado;
- redstone control;
- storage de drops;
- chunkloading controlado;
- filtros para evitar entrada de itens errados.

## 24.5. AE2 + reator

AE2 pode abastecer fuel e coolant, mas isso deve ter limite.

Nunca faça:

```text
AE2 infinito de fuel -> reactor sem redstone -> chunkload permanente
```

Faça:

```text
AE2 -> buffer limitado -> fuel port
Coolant factory -> buffer grande -> coolant port
Redstone port -> shutdown se temperatura alta
Energy port -> buffer -> rede principal
```

---

# 25. Integração com Create, MI, Ender IO, Powah e Productive Metalworks

## 25.1. Create

Create deve ser usado para deixar Oritech visível e integrado à cidade:

- trens levando ores para o Oritech Lab;
- esteiras entregando recursos a máquinas;
- decoração industrial ao redor de lasers e reatores;
- placas e painéis com status;
- elevadores/portas/hangars temáticos.

## 25.2. Modern Industrialization

MI e Oritech podem dividir tarefas:

| Tarefa | Melhor abordagem |
|---|---|
| Industrialização pesada e tiers longos | MI |
| Laser/fluxite/augment/visual tech | Oritech |
| Energia nuclear experimental | Oritech ou MI, conforme balanceamento |
| Ore processing de massa | Comparar receitas no EMI; pode dividir por recurso |
| Autocrafting | AE2 controlando ambos |

## 25.3. Ender IO

Ender IO é bom para:

- conduits compactos;
- energia/itens em espaços apertados;
- automações escondidas;
- fábricas Oritech mais limpas.

## 25.4. Powah

Powah é excelente para alimentar Oritech sem depender de combustível manual:

- energia de base;
- buffer estável;
- suporte a lasers;
- backup de reator;
- transição antes do nuclear.

## 25.5. Productive Metalworks

Pode ajudar com materiais metálicos e renovabilidade. Use para reduzir mineração manual em linhas que consomem muito nickel, platinum, steel ou outros metais integrados.

---

# 26. Checklists de estoque e progresso

## 26.1. Checklist de começo

- [ ] Encontrar nickel.
- [ ] Guardar amethyst/budding amethyst.
- [ ] Criar Basic Generator.
- [ ] Criar Powered Furnace.
- [ ] Criar Pulverizer.
- [ ] Criar Foundry.
- [ ] Criar Assembler.
- [ ] Criar Centrifuge.
- [ ] Fazer primeiros alloys.
- [ ] Organizar energia/pipes.

## 26.2. Checklist de ore processing

- [ ] Fragment Forge.
- [ ] Centrifuge.
- [ ] Output separado para clumps.
- [ ] Output separado para dusts.
- [ ] Output separado para byproducts.
- [ ] Rota de smelting/foundry.
- [ ] Yield/Fortune Addons.
- [ ] AE2 Import Bus.
- [ ] Overflow controlado.

## 26.3. Checklist de fluxite

- [ ] Geode preservada.
- [ ] Enderic Laser.
- [ ] Target Designator.
- [ ] Energia estável.
- [ ] Coleta automatizada.
- [ ] Estoque mínimo no AE2.
- [ ] Botão de desligamento.

## 26.4. Checklist de reactor

- [ ] Sala isolada.
- [ ] Reactor Controller.
- [ ] Reactor Walls.
- [ ] Rods simples para teste.
- [ ] Heat Vents suficientes.
- [ ] Heat Pipes.
- [ ] Heat Absorbers se usar active cooling.
- [ ] Coolant factory.
- [ ] Fuel input limitado.
- [ ] Energy Ports suficientes.
- [ ] Redstone Port configurado.
- [ ] Shutdown button.
- [ ] Teste com pellets pequenos.

## 26.5. Checklist de particle accelerator

- [ ] Área grande e isolada.
- [ ] Ring fechado e testado.
- [ ] Motors energizados.
- [ ] Sensor instalado.
- [ ] Redstone switches funcionando.
- [ ] Tachyon Collectors posicionados.
- [ ] Containment wall.
- [ ] Output storage.
- [ ] Alerta de segurança.

---

# 27. Performance e regras de servidor

## 27.1. Riscos de performance

| Sistema | Risco |
|---|---|
| Lasers muitos ativos | Custo visual/tick e risco de dano. |
| Drones em excesso | Entidades/sistemas móveis demais. |
| Quarries chunkloaded | Geração de itens e updates constantes. |
| Farms 24/7 | Crescimento, harvest, pipes e storage. |
| Reatores mal monitorados | Explosões, rollback, lag por desastre. |
| Particle accelerator gigante | Energia, redstone, block destruction e efeitos. |
| Pipes sem filtro | Loops, buffers lotados, lag de item transfer. |

## 27.2. Regras recomendadas

1. Toda quarry/laser quarry precisa de dono e placa.
2. Todo setup 24/7 precisa de botão de desligamento.
3. Todo reator precisa de redstone port e shutdown manual.
4. Particle accelerator deve ficar fora da cidade principal.
5. Drones devem ser usados em rotas importantes, não para cada item mínimo.
6. Farms com Block Destroyer/Fertilizer precisam de overflow.
7. Evitar chunkloading sem necessidade.
8. Usar spark se TPS cair.
9. Usar AE2 para controlar estoque, não para esconder problemas de overflow.
10. Testar lasers e Portable Laser em área dedicada.

## 27.3. Boas práticas visuais

- Separe Oritech em distritos: oficina, refinaria, reactor, accelerator, augmentation clinic.
- Use Create Deco/Handcrafted para estética industrial.
- Deixe power poles em ruas/corredores.
- Use drones como elemento visual da cidade.
- Transforme reator e particle accelerator em megaprojetos públicos.

---

# 28. Sugestão de capítulos para FTB Quests

## Capítulo 1 - Nickel & Dime

- Encontrar nickel.
- Coletar copper, iron, coal.
- Guardar amethyst.
- Criar wrench.

## Capítulo 2 - Primeira Oficina Oritech

- Basic Generator.
- Powered Furnace.
- Pulverizer.
- Foundry.
- Assembler.
- Centrifuge.

## Capítulo 3 - Ore Processing

- Fragment Forge.
- Primeiro clump.
- Primeiro byproduct.
- Platinum via nickel.
- Yield Addon.

## Capítulo 4 - Addons e Multiblocos

- Machine Core.
- Machine Extender.
- Speed Addon.
- Efficiency Addon.
- Redstone Addon.

## Capítulo 5 - Lasers e Fluxite

- Enderic Laser.
- Target Designator.
- Primeiro fluxite.
- Fluxite farm.
- Laser safety.

## Capítulo 6 - Automação de Mundo

- Block Destroyer.
- Block Placer.
- Fertilizer.
- Quarry Addon.
- Drone Port.

## Capítulo 7 - Energia Avançada

- Bio Generator.
- Lava/Solar/Steam options.
- Energy storage.
- Power poles.
- Superconductor.

## Capítulo 8 - Reactor Safety

- Reactor Controller.
- Primeiro reactor wall.
- Rod simples.
- Heat Vent.
- Coolant/Chiller.
- Redstone Port.
- Primeiro RF nuclear.

## Capítulo 9 - Atomic e Promethium

- Atomic Forge.
- Primeiro Promethium.
- Promethium Pickaxe.
- Portable Laser.

## Capítulo 10 - Cybernetics

- Augmentation Station.
- Primeiro augment.
- Ore Vision.
- Magnet.
- Flight.

## Capítulo 11 - Particle Accelerator

- Guide Ring.
- Accelerator Motor.
- Speed Sensor.
- Primeira colisão.
- Tachyon Collector.
- Incursão experimental.

---

# 29. Notas para mantenedores do wiki

## 29.1. Páginas menores recomendadas

- `oritech/overview.md`
- `oritech/getting-started.md`
- `oritech/ore-processing.md`
- `oritech/addons-and-cores.md`
- `oritech/fluxite-and-lasers.md`
- `oritech/logistics.md`
- `oritech/quarries-and-farms.md`
- `oritech/reactor.md`
- `oritech/particle-accelerator.md`
- `oritech/augments.md`
- `oritech/hot-topics.md`

## 29.2. Componentes React sugeridos

```txt
src/components/guides/OritechGuide.jsx
src/data/guides/oritech.js
src/data/recipes/oritechRecipes.js
```

## 29.3. Tags para busca do Wiki

```txt
oritech, tech, energia, RF, reactor, nuclear, laser, fluxite, quarry, drone, augment, particle accelerator, tachyon, ore processing, nickel, platinum, promethium, foundry, assembler, centrifuge, fragment forge
```

## 29.4. Aviso permanente do guia

O Oritech recebe updates frequentes. O Astron City deve tratar este guia como orientação de progressão, não como tabela definitiva de receitas. Receitas, números e nomes exatos devem sempre ser confirmados no EMI/JEI do servidor.

---

# 30. Fontes e observações de precisão

Este guia foi preparado para o **Astron City NeoForge 1.21.1** com base no contexto do pack, na modlist conhecida e na documentação pública do Oritech.

Fontes consultadas:

- Modlist/contexto Astron City: Oritech 1.2.8 e Oracle Index 1.3.0 no pack.
- Página oficial do Oritech no CurseForge: descrição geral, features, compatibilidades e release NeoForge 1.21.1.
- Repositório GitHub Rearth/Oritech: documentação oficial em `wiki/docs`.
- Documentação oficial do Oritech: Getting Started, Addons, Multiblocks, Nuclear Reactor e Particle Accelerator.
- EMI/JEI deve ser considerado a autoridade final para receitas no servidor.

Observações:

- Alguns nomes podem aparecer em inglês no jogo. Este guia mantém os nomes mais importantes em inglês para facilitar busca no EMI/JEI.
- Valores de energia, receitas e balanceamento podem variar por config, update ou KubeJS.
- Sistemas perigosos como Reactor, Portable Laser, Enderic Laser e Particle Accelerator devem ser testados em área segura.
- Para survival multiplayer, prefira sempre segurança, controle redstone, overflow, chunkloading limitado e documentação visual da build.
