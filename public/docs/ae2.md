---
title: "Applied Energistics 2 - Guia Completo"
modpack: "ASTRON CITY"
minecraft: "1.21.1"
loader: "NeoForge"
mods_cobertos:
  - "Applied Energistics 2 19.2.17"
  - "Advanced AE 1.6.11-1.21.1"
  - "ExtendedAE 1.21-2.2.33-neoforge"
  - "AE2 Things 1.4.2-beta"
  - "AEInfinityBooster 1.21.1-1.0.0.54"
  - "AE2 Draconic Fusion Autocrafter 0.1.4"
  - "AppliedFlux 1.21-2.1.5-neoforge"
  - "MEGA Cells 4.11.0"
  - "ME Requester 1.21.1-1.4.3"
  - "Polymorphic Energistics 0.4.1"
  - "Applied Create 1.1.5"
  - "GuideME 21.1.16"
status: "Guia wiki-ready"
ultima_revisao: "2026-07-01"
---

# Applied Energistics 2 - Guia Completo para o Astron City

> Guia escrito para o **ASTRON CITY**, um modpack NeoForge 1.21.1 de tecnologia, aventura, magia, construcao coletiva e progressao longa em servidor survival.
>
> Este guia cobre **Applied Energistics 2** e os addons de AE2 presentes no pack, com foco em progressao step-by-step, storage, autocrafting, subnets, P2P, redes interdimensionais, integracao com MI/Create/Draconic e solucoes fortes para survival multiplayer.

---

## Sumario

1. [O que e AE2 no Astron City](#1-o-que-e-ae2-no-astron-city)
2. [Mods cobertos e papel de cada addon](#2-mods-cobertos-e-papel-de-cada-addon)
3. [Como usar este guia](#3-como-usar-este-guia)
4. [Glossario rapido de AE2](#4-glossario-rapido-de-ae2)
5. [Mapa de progressao completo](#5-mapa-de-progressao-completo)
6. [Preparacao antes de comecar](#6-preparacao-antes-de-comecar)
7. [Early Game - meteoritos, Certus, Fluix e presses](#7-early-game---meteoritos-certus-fluix-e-presses)
8. [Primeira rede ME - storage pesquisavel](#8-primeira-rede-me---storage-pesquisavel)
9. [Storage - cells, bytes, types, prioridades e particionamento](#9-storage---cells-bytes-types-prioridades-e-particionamento)
10. [Cabos, channels e [item:ME Controller]](#10-cabos-channels-e-me-controller)
11. [Energia da rede ME](#11-energia-da-rede-me)
12. [Import, Export, Storage Bus e Interface](#12-import-export-storage-bus-e-interface)
13. [Autocrafting basico](#13-autocrafting-basico)
14. [Processing Patterns e maquinas externas](#14-processing-patterns-e-maquinas-externas)
15. [Crafting CPUs e paralelismo](#15-crafting-cpus-e-paralelismo)
16. [Subnets - redes auxiliares inteligentes](#16-subnets---redes-auxiliares-inteligentes)
17. [P2P Tunnels - backbone de canais e recursos](#17-p2p-tunnels---backbone-de-canais-e-recursos)
18. [Wireless, acesso remoto e boosters](#18-wireless-acesso-remoto-e-boosters)
19. [Quantum Network Bridge e redes entre dimensoes](#19-quantum-network-bridge-e-redes-entre-dimensoes)
20. [Spatial Storage - uso avancado](#20-spatial-storage---uso-avancado)
21. [Addons de AE2 no Astron City](#21-addons-de-ae2-no-astron-city)
22. [Catalogo de recursos, itens e componentes do AE2 core](#22-catalogo-de-recursos-itens-e-componentes-do-ae2-core)
23. [Catalogo de blocos, maquinas e dispositivos do AE2 core](#23-catalogo-de-blocos-maquinas-e-dispositivos-do-ae2-core)
24. [Catalogo dos addons](#24-catalogo-dos-addons)
25. [Fabricas populares e solucoes de survival](#25-fabricas-populares-e-solucoes-de-survival)
26. [HOT TOPICS - itens e maquinas muito fortes](#26-hot-topics---itens-e-maquinas-muito-fortes)
27. [Integracao com MI, Create, Oritech, Ender IO, Powah e Draconic](#27-integracao-com-mi-create-oritech-ender-io-powah-e-draconic)
28. [Checklists de progresso e estoque](#28-checklists-de-progresso-e-estoque)
29. [Performance e regras de servidor](#29-performance-e-regras-de-servidor)
30. [Sugestao de capitulos para FTB Quests](#30-sugestao-de-capitulos-para-ftb-quests)
31. [Notas para mantenedores do wiki](#31-notas-para-mantenedores-do-wiki)
32. [Fontes e observacoes de precisao](#32-fontes-e-observacoes-de-precisao)

---

# 1. O que e AE2 no Astron City

**Applied Energistics 2**, ou **AE2**, e o sistema nervoso do Astron City. Ele transforma uma base cheia de baus, barrels, maquinas soltas, farms, pipes e pedidos manuais em uma infraestrutura digital centralizada: storage pesquisavel, autocrafting, controle de estoque, rede de canais, subnets, P2P, conexao entre dimensoes e integracao com outros mods.

No Astron City, AE2 deve ser entendido assim:

- **Create** e a identidade visual e mecanica da cidade: trens, engrenagens, esteiras, contraptions e fabricas aparentes.
- **Modern Industrialization** e a industria pesada: metais, ligas, energia, quimica, diesel, nuclear e componentes complexos.
- **AE2** e a camada de controle: armazena, solicita, distribui, autocrafta, mantem estoque e conecta distritos.
- **MEGA Cells, ExtendedAE e Advanced AE** fazem AE2 escalar para servidor longo.
- **Applied Create** impede que AE2 apague Create, permitindo automacao digital de crafts mecanicos.
- **AE2 Draconic Fusion Autocrafter** conecta AE2 ao endgame de Draconic Evolution.

A fantasia principal do AE2 e: **qualquer recurso importante da cidade deve poder ser encontrado, solicitado, produzido e mantido automaticamente**.

AE2 nao e so um mod de bau digital. Ele e uma linguagem de infraestrutura. Um jogador iniciante usa AE2 para parar de se perder nos baus. Um jogador intermediario usa AE2 para autocrafting. Um engenheiro avancado usa AE2 para transformar fabricas inteiras em modulos que respondem a pedidos.

---

# 2. Mods cobertos e papel de cada addon

| Mod | Versao no Astron City | Papel no guia |
|---|---:|---|
| Applied Energistics 2 | 19.2.17 | Core: rede ME, cells, drives, terminals, channels, autocrafting, P2P, Quantum Bridge, storage, buses e machines. |
| Advanced AE | 1.6.11-1.21.1 | Automacao avancada: Advanced Pattern Providers, Quantum Computer, Quantum Crafter, Quantum Armor, Reaction Chamber, IO Buses e monitores. |
| ExtendedAE | 1.21-2.2.33-neoforge | Expansao de storage/crafting: 36-slot providers/interfaces, infinity cells, buses rapidos, pattern modifier, tag/mod buses, Assembler Matrix e mais. |
| AE2 Things | 1.4.2-beta | Qualidade de vida: DISK cells sem limite de types, Advanced [item:Inscriber] e Crystal Growth Chamber. |
| AEInfinityBooster | 1.21.1-1.0.0.54 | Acesso remoto: Infinity Range Card e Dimension Card. |
| AE2 Draconic Fusion Autocrafter | 0.1.4 | Automacao nativa de Fusion Crafting do Draconic Evolution com Draconic [item:Pattern Provider]. |
| AppliedFlux | 1.21-2.1.5-neoforge | Armazenamento de FE dentro da rede ME e interacao com energia por terminal. |
| MEGA Cells | 4.11.0 | Cells enormes 1M-256M, bulk item storage, MEGA Pattern Provider, crafting CPUs grandes e energia extra. |
| ME Requester | 1.21.1-1.4.3 | Stockkeeping: mantem itens/fluidos em estoque automaticamente. |
| Polymorphic Energistics | 0.4.1 | Resolve receitas conflitantes no [item:Crafting Terminal] e Pattern Encoding Terminal com suporte ao Polymorph. |
| Applied Create | 1.1.5 | Ponte AE2 + Create: pattern providers para Mechanical Crafters, stress P2P, ME Gearbox e energia/stress. |
| GuideME | 21.1.16 | Framework/guia in-game usado por mods; util para documentacao e descoberta dentro do jogo. |

## 2.1. Por que AE2 e prioridade no wiki

AE2 e um dos guias mais importantes do Astron City por quatro motivos:

1. **Ele reduz caos de multiplayer.** Bases compartilhadas sem storage central viram confusao rapidamente.
2. **Ele liga todos os mods tecnicos.** MI, Create, Oritech, Ender IO, Powah, Productive Bees, Draconic e Stellaris ficam melhores quando AE2 organiza entrada e saida.
3. **Ele cria objetivos de longo prazo.** Autocrafting total, P2P, Quantum Bridge, MEGA Cells e Advanced AE sustentam meses de servidor.
4. **Ele exige boas praticas.** AE2 mal planejado pode gerar lag, travamentos de crafting, loops e storage inflado por NBT.

## 2.2. Aviso importante sobre receitas

O Astron City usa muitos mods que podem adicionar, unificar ou alterar receitas: **AlmostUnified**, **JAOPCA**, **KubeJS**, **EMI**, **JEI**, Create, MI, Oritech, Ender IO, Productive Metalworks e outros.

Por isso, este guia ensina **ordem de progressao, arquitetura, automacao, uso dos itens e boas praticas**. Para receita exata do servidor, sempre confirme no jogo com:

- **EMI/JEI** buscando por `@ae2`, `@appflux`, `@megacells`, `@advanced_ae`, `@extendedae`, `@ae2things`, `@appliedcreate` e nomes dos addons;
- **Jade** para diagnosticar blocos, energia e estado;
- **GuideME / guia in-game**, quando disponivel;
- **Pattern Encoding Terminal** para validar se o padrao capturado corresponde a receita correta;
- **Polymorphic Energistics** quando houver conflito de receita.

---

# 3. Como usar este guia

Use este guia em tres modos.

## Modo jogador iniciante

Siga a progressao em ordem:

1. Encontre meteoritos.
2. Colete Certus, Budding Certus e Presses.
3. Faca [item:Charger], [item:Inscriber] e primeiros processors.
4. Monte uma rede ME pequena.
5. Aprenda bytes/types antes de encher tudo de lixo.
6. Depois entre em channels, controller e autocrafting.

Nao tente montar P2P, Quantum Bridge ou Advanced AE sem antes entender cells, channels, energy e pattern providers.

## Modo engenheiro do servidor

Use os capitulos de subnets, P2P, ME Requester, performance e fabricas populares. O objetivo nao e apenas ter uma rede funcionando; e criar uma infraestrutura legivel, estavel e expansivel para a cidade.

## Modo mantenedor do wiki

Use as tabelas e checklists como base para paginas menores:

- “Primeira rede ME”.
- “Como automatizar processors”.
- “Como nao destruir cells com mob farm”.
- “Como montar autocrafting”.
- “Como usar P2P”.
- “Hot Topics de AE2”.
- “AE2 + MI”.
- “AE2 + Create”.

---

# 4. Glossario rapido de AE2

| Termo | Significado pratico |
|---|---|
| ME | Matter Energy. Nome do sistema de storage/rede do AE2. |
| AE | Unidade interna de energia da rede ME. |
| FE | Forge Energy. No NeoForge, AE2 pode converter FE para AE. |
| Cell | Item que armazena itens, fluidos ou outros recursos dentro da rede. |
| Byte | Medida de capacidade da cell. |
| Type | Tipo unico armazenado. Itens diferentes, NBT diferente ou dano diferente podem contar como types diferentes. |
| Channel | “Linha logica” usada por dispositivos da rede. E o limite que forca planejamento. |
| Controller | Bloco que permite a rede sair do limite ad-hoc de 8 channels. |
| Terminal | Interface do jogador com a rede. |
| Crafting Terminal | Terminal com grid de crafting. Deve ser prioridade. |
| Pattern | Receita codificada para autocrafting. |
| Crafting Pattern | Padrao para crafting table, smithing ou stonecutting. |
| Processing Pattern | Padrao que envia itens/fluidos para maquinas externas e espera resultado. |
| Pattern Provider | Bloco que executa patterns e envia ingredientes para machines/assemblers. |
| [item:Molecular Assembler] | Maquina que executa crafting patterns automaticamente. |
| Crafting CPU | Multibloco que calcula e gerencia pedidos de autocrafting. |
| Co-Processor | Acelera envio de tarefas de crafting para providers/assemblers. |
| Import Bus | Puxa itens de inventario externo para a rede. |
| Export Bus | Envia itens da rede para inventario externo. |
| Storage Bus | Faz um inventario externo contar como storage da rede. |
| Interface | Bloco de interacao bidirecional entre rede e mundo; muito usado em subnets. |
| Subnet | Rede ME separada que executa uma tarefa especifica. |
| P2P | Tunnel que transporta canais, itens, fluidos, redstone, energia, luz ou stress, dependendo do tipo. |
| Quantum Bridge | Ponte para estender a rede a distancia infinita e entre dimensoes. |
| Partition | Filtro aplicado em uma cell para limitar o que entra nela. |
| Priority | Ordem de entrada/saida entre storages diferentes. |
| Stockkeeping | Manter estoque minimo automatico, geralmente com ME Requester. |

---

# 5. Mapa de progressao completo

A progressao ideal de AE2 no Astron City pode ser vista assim:

```text
Sobrevivencia vanilla / early tech
  -> Nether Quartz, Redstone, Iron, Gold, Diamond, energia basica
  -> Meteorite Compass
  -> Meteoritos, Certus, Budding Certus, Mysterious Cube
  -> Inscriber Presses
  -> [item:Charger], Fluix, Inscriber, Processors
  -> Energy Acceptor, [item:ME Drive], Storage Cells, Crafting Terminal
  -> Primeira rede ME pesquisavel
  -> Certus farm e processor automation
  -> ME Controller, Smart/Dense Cable, channels organizados
  -> Import/Export/Storage Bus e Interfaces
  -> Pattern Encoding Terminal
  -> Molecular Assembler + Pattern Provider
  -> Crafting CPUs
  -> Processing Patterns para MI/Create/Oritech/Ender IO
  -> ME Requester para estoque minimo
  -> Subnets e P2P
  -> MEGA Cells / ExtendedAE / AE2 Things
  -> Quantum Bridge, Dimension Card, rede entre bases
  -> Advanced AE Quantum Computer/Crafter
  -> AppliedFlux, Applied Create, Draconic Fusion Autocrafter
  -> Rede publica da cidade + megafabricas + espaco + endgame
```

## 5.1. Fases resumidas

| Fase | Meta principal | Resultado esperado |
|---|---|---|
| Pre-AE2 | Preparar materiais e energia | Voce consegue buscar meteoritos e craftar maquinas iniciais. |
| Early AE2 | Presses, Certus e primeira rede | Storage pesquisavel e crafting terminal. |
| Storage Design | Cells, priorities, bulk e NBT | Rede limpa, sem entupir types. |
| Network Design | Controller, channels e dense cables | Rede expansivel e facil de diagnosticar. |
| Autocrafting | Patterns, CPUs e assemblers | Componentes basicos craftados automaticamente. |
| Industrial Integration | Processing patterns | MI/Create/Oritech/Ender IO respondem a pedidos da rede. |
| Scaling | Subnets, P2P e ME Requester | Rede grande, modular e com estoque automatico. |
| Late Game | MEGA Cells, ExtendedAE, Advanced AE | Storage e crafting de cidade/servidor. |
| End Game | Quantum Bridge, AppliedFlux, Draconic, Applied Create | Bases remotas, espaco, energia digital e fusion crafting. |

---

# 6. Preparacao antes de comecar

Antes de entrar em AE2, prepare uma base minima. AE2 pede recursos variados e costuma travar se voce comecar sem estoque.

## 6.1. Recursos que voce deve separar

Prioridade alta:

- Iron.
- Gold.
- Redstone.
- Nether Quartz.
- Certus Quartz.
- Charged Certus Quartz.
- Diamond.
- Glass.
- Copper, se receitas do pack exigirem em componentes.
- Energia FE estavel, mesmo que pequena.

Prioridade media:

- [item:Fluix Crystal].
- Fluix Dust.
- Sky Stone.
- Ender Pearl.
- Glowstone.
- Silicon/Printed Silicon.
- Quartz Glass.
- Pure/Crystal resources, se usados pela versao/receita do pack.

Prioridade de servidor:

- Uma sala dedicada para storage.
- Uma area de maquinas separada da sala de terminais.
- Caminhos de cabos planejados.
- Local para expandir controller/crafting CPUs.
- Local para Certus farm e processor automation.

## 6.2. Energia inicial recomendada

AE2 converte energia externa em energia interna AE. No Astron City, voce pode alimentar AE2 com energia de varios mods:

- Powah, se o jogador ja tiver geracao simples.
- Modern Industrialization, quando tiver eletricidade estavel.
- Ender IO, se estiver usando conduits/geradores.
- Create + Applied Create, quando quiser alimentacao mecanica/kinetic.
- Geradores temporarios, se estiver em early game.

Para uma primeira rede pequena, um **Energy Acceptor** resolve. Para rede maior, adicione **Energy Cell** ou **Dense Energy Cell**. Uma rede sem buffer pode reiniciar quando muitos itens entram de uma vez.

## 6.3. Sala ideal para comecar

A sala inicial deve ter:

- Parede de terminais.
- [item:ME Drive] visivel.
- Energy Acceptor/Energy Cell acessivel.
- 1 a 2 linhas de cabos Smart para diagnostico.
- Um canto para Inscriber/Advanced Inscriber.
- Um canto para Certus farm.
- Um corredor para expandir cabos ate fabricas.

Evite esconder o primeiro ME Drive dentro de parede. Em servidor, redes escondidas viram manutencao ruim.

---

# 7. Early Game - meteoritos, Certus, Fluix e presses

A entrada no AE2 comeca fora da base: voce precisa encontrar meteoritos. Neles ficam Certus Quartz, Budding Certus e o Mysterious Cube que entrega os presses do Inscriber.

## 7.1. Step-by-step: encontrar meteoritos

1. **Crafte um Meteorite Compass.**
   - Ele aponta para o Mysterious Cube mais proximo.
   - Leve picareta boa, comida, blocos, tochas e backpack.

2. **Siga ate o meteorito.**
   - Meteoritos costumam aparecer como crateras com Sky Stone.
   - Em mundo modado com Terralith/Biomes O' Plenty, terreno pode esconder parte da cratera.

3. **Entre ate o centro.**
   - Procure Certus Quartz, Budding Certus e Mysterious Cube.
   - Minere Sky Stone se precisar para receitas.

4. **Quebre o Mysterious Cube.**
   - Ele entrega os quatro presses principais do Inscriber.
   - Guarde os presses como item critico da base. Sem eles, a progressao trava.

5. **Colete Certus e Budding Certus com cuidado.**
   - Budding Certus sem Silk Touch degrada.
   - Flawless Budding Certus e extremamente valioso: use como ponto fixo de farm, nao como bloco qualquer.

## 7.2. Presses do Inscriber

Os presses sao usados para criar processors.

- **Inscriber Silicon Press**: cria Printed Silicon.
- **Inscriber Logic Press**: cria Printed Logic Circuit.
- **Inscriber Calculation Press**: cria Printed Calculation Circuit.
- **Inscriber Engineering Press**: cria Printed Engineering Circuit.
- **Name Press**, se presente/obtido: usado para nomear itens em automacoes especificas.

Recomendacao de servidor: mantenha um set de presses em local publico/seguro e, se possivel, produza duplicatas quando o pack permitir.

## 7.3. Certus Quartz e Budding Certus

Budding Certus funciona de forma parecida com amethyst: cresce buds em faces livres. Quando o cluster esta completo, gera [item:Certus Quartz Crystal]. O bloco pode degradar em tiers quando cresce, exceto o Flawless Budding Certus, que e o mais importante.

Tiers comuns:

- Flawless Budding Certus.
- Flawed Budding Certus.
- Chipped Budding Certus.
- Damaged Budding Certus.
- Certus Quartz Block comum.

Boas praticas:

- Nao quebre Flawless Budding Certus por impulso.
- Monte a farm onde ele foi encontrado, ou mova apenas se o pack permitir por Spatial Storage ou outro metodo seguro.
- Deixe faces livres para crescer.
- Use [item:Growth Accelerator]s cedo.
- Automatize colheita somente depois de entender Annihilation Plane ou alternativas seguras.

## 7.4. Step-by-step: primeira farm manual de Certus

1. Coloque o Budding Certus em uma sala acessivel.
2. Deixe faces livres ao redor.
3. Coloque Growth Accelerators adjacentes quando possivel.
4. Alimente os accelerators com energia.
5. Espere clusters completos.
6. Quebre apenas clusters completos para obter mais cristais.
7. Guarde parte dos cristais para Charger/Fluix.

## 7.5. Charged Certus e Charger

O **Charger** transforma [item:Certus Quartz Crystal] em Charged Certus Quartz Crystal. Charged Certus e essencial para Fluix e para reparar/criar Budding Certus dependendo da receita/mecanica.

Fluxo basico:

```text
Certus Quartz Crystal
  -> Charger
  -> Charged Certus Quartz Crystal
```

## 7.6. [item:Fluix Crystal]

Fluix e um recurso central de AE2. O metodo classico e jogar em agua:

```text
Charged Certus Quartz Crystal + Nether Quartz + Redstone
  -> agua
  -> Fluix Crystal
```

Use Fluix para cabos, maquinas, componentes e progressao de rede.

## 7.7. Primeira automacao de Fluix

Automacao simples antes de AE2 completo:

```text
Barrel de inputs
  -> dropper/dispenser ou sistema de drop
  -> agua
  -> coleta por hopper/Annihilation Plane depois
  -> chest de Fluix
```

Automacao com AE2 depois:

```text
Pattern Provider
  -> dropper/subnet/formation plane
  -> agua
  -> coleta por Annihilation Plane ou item collector
  -> Import Bus/Pattern Provider
  -> rede ME
```

Use subnets para evitar que a rede principal misture inputs e outputs da agua.

---

# 8. Primeira rede ME - storage pesquisavel

A primeira rede ME nao precisa de controller, P2P nem autocrafting. Ela precisa ser pequena e confiavel.

## 8.1. Componentes minimos

- 1x Energy Acceptor.
- 1x ME Drive.
- 1x [item:ME Terminal] ou, preferencialmente, [item:ME Crafting Terminal].
- Algumas [item:Storage Cell]s, idealmente 1k/4k no comeco.
- Cabos: Glass Cable, Covered Cable ou Smart Cable.
- Fonte de energia FE.

## 8.2. Step-by-step: montar a primeira rede

1. Coloque o **ME Drive**.
2. Coloque o **Energy Acceptor** conectado ao drive ou ao cabo.
3. Conecte energia FE ao Energy Acceptor.
4. Coloque um cabo saindo do drive.
5. Coloque o **ME Terminal** ou **Crafting Terminal** no cabo.
6. Insira Storage Cells no ME Drive.
7. Abra o terminal e teste colocar/retirar itens.
8. Se a rede desligar, confira energia e buffer.

Diagrama simples:

```text
[Gerador FE]
   -> [Energy Acceptor]
      -> [ME Drive]
         -> [Cable]
            -> [Crafting Terminal]
         -> [Storage Cells]
```

## 8.3. Upgrade imediato recomendado

Assim que possivel, transforme o Terminal em **Crafting Terminal**.

Motivo:

- Voce acessa storage e crafting no mesmo lugar.
- O grid pode puxar itens da rede.
- E o terminal mais usado por quase todos os jogadores.

## 8.4. O que nao colocar na primeira rede

Evite inserir no ME inicial:

- Armaduras danificadas de mob farm.
- Ferramentas encantadas aleatorias.
- Livros com NBT excessivo.
- Itens unicos demais.
- Loot de dungeon sem triagem.
- Centenas de tipos de sementes, comida e decoracao antes de ter cells suficientes.

AE2 nao gosta de storage inflado por types unicos. Faca triagem antes.

---

# 9. Storage - cells, bytes, types, prioridades e particionamento

Storage e o primeiro lugar onde muita gente erra em AE2. O segredo e entender que cells tem dois limites: **bytes** e **types**.

## 9.1. Bytes

Bytes medem a quantidade total de itens/fluidos armazenados. Muitos itens iguais consomem pouco espaco proporcional.

Exemplo:

- 4096 cobblestone = 1 type e muitos itens.
- Uma cell boa para bulk consegue guardar muito cobblestone.

## 9.2. Types

Types medem quantos tipos diferentes estao dentro da cell. Itens com NBT diferente podem contar como types diferentes.

Exemplo:

- 4096 cobblestone = 1 type.
- 64 espadas com durabilidade diferente = ate 64 types.
- Armaduras encantadas diferentes = muitos types.

Regra de ouro: **mob farm nao deve despejar NBT/unstackables direto no ME principal**.

## 9.3. Tiers de item cells do AE2 core

| Cell | Uso ideal |
|---|---|
| 1k Item Storage Cell | Comeco, componentes, itens variados de baixo volume. |
| 4k Item Storage Cell | Melhor custo/beneficio inicial. |
| 16k Item Storage Cell | Rede intermediaria, materiais comuns. |
| 64k Item Storage Cell | Volume alto, materiais de producao. |
| 256k Item Storage Cell | Late game core, mas ainda respeita limite de types. |

Observacao: ir direto para cell maior nem sempre e melhor. Cells grandes nao resolvem problema de types. Para muitos itens diferentes, mais cells menores podem ser mais eficientes que poucas cells enormes.

## 9.4. Tiers de fluid cells do AE2 core

| Cell | Uso ideal |
|---|---|
| 1k Fluid Storage Cell | Poucos fluidos, setup inicial. |
| 4k Fluid Storage Cell | Agua, lava, latex/combustiveis pequenos. |
| 16k Fluid Storage Cell | Fluids de processamento. |
| 64k Fluid Storage Cell | Refinaria e fabricas. |
| 256k Fluid Storage Cell | Grandes volumes, diesel, steam, oil, fluidos de endgame. |

No Astron City, fluidos de MI podem crescer muito. Para bulk massivo, avalie MEGA Cells ou tanques externos com Storage Bus.

## 9.5. Portable cells

Portable Item/Fluid Cells funcionam como mini [item:ME Chest] portatil. Sao uteis para:

- Mineracao.
- Construcoes grandes.
- Transporte de recursos entre bases.
- Operacao de obras publicas.

Nao substituem backpack totalmente, mas ajudam quando o jogador ja esta em AE2.

## 9.6. Partitioning

Particionamento e o filtro de uma cell. Use o **Cell Workbench** para limitar o que entra nela.

Usos fortes:

- Cell so para ingots.
- Cell so para dusts.
- Cell so para ores.
- Cell so para cobblestone/dirt/gravel/sand.
- Cell so para drops stackaveis de mob farm.
- Fluid cell so para diesel, water, steam ou lava.

Com particionamento, voce evita que itens aleatorios entrem em cells criticas.

## 9.7. Prioridades de storage

Prioridade controla onde os itens entram primeiro e de onde saem primeiro.

Exemplo de design:

| Storage | Prioridade | Funcao |
|---|---:|---|
| MEGA Bulk Cell de cobblestone | 100 | Todo cobble entra aqui primeiro. |
| Cell particionada de ingots | 80 | Ingots entram em cell especifica. |
| Storage Bus em barrel de obra | 20 | Buffer auxiliar. |
| Cells gerais | 0 | Storage padrao. |
| Trash/overflow controlado | -100 | Ultima rota, se configurado. |

Boa pratica: use prioridades altas para storages especializados e prioridade baixa para cells gerais.

## 9.8. Overflow Destruction Card

A Overflow Destruction Card pode destruir itens que tentam entrar em uma cell cheia. Ela e muito forte, mas perigosa.

Use apenas quando:

- A cell esta particionada.
- O item e farmavel e abundante.
- Voce aceitaria perder excesso.
- Existe monitoramento claro.

Bom uso:

- Cobblestone.
- Dirt.
- Rotten Flesh.
- Bones.
- Seeds.
- Logs de farm automatica, se a producao for absurda.

Mau uso:

- Ores.
- Ingots raros.
- Boss drops.
- Itens de Draconic/Stellaris.
- Qualquer coisa que voce nao queira perder.

---

# 10. Cabos, channels e ME Controller

Channels sao a principal barreira de design do AE2. Eles existem para impedir que a rede vire um fio infinito sem planejamento.

## 10.1. Regra basica de channels

- Rede sem Controller = rede ad-hoc, suporta ate 8 dispositivos que usam channel.
- Cabos normais e muitos dispositivos passam ate 8 channels.
- Dense Cable passa ate 32 channels.
- P2P e Quantum Bridge tambem podem transportar canais em escala maior.
- Nem todo bloco usa channel, mas a maioria dos dispositivos importantes usa.

Dispositivos comuns que usam channel:

- ME Drive.
- Terminal.
- Pattern Provider.
- Import Bus.
- Export Bus.
- Storage Bus.
- Interface.
- Molecular Assembler, dependendo da conexao e setup.
- Wireless Access Point.
- ME IO Port.
- Crafting-related devices.

## 10.2. Quando fazer ME Controller

<div class="callout info">
  <div class="callout-title">💡 DICA</div>
  O ME Controller exige blocos de Sky Stone e Cristais Puros. Prepare suas máquinas com antecedência!
</div>

<div class="mc-recipe">
  <div class="mc-grid">
    <div class="mc-slot" title="Sky Stone Block"><img src="/assets/sprites/sky_stone_block.png" alt="Sky Stone Block" /></div>
    <div class="mc-slot" title="Pure Fluix Crystal"><img src="/assets/sprites/fluix_crystal.png" alt="Fluix" /></div>
    <div class="mc-slot" title="Sky Stone Block"><img src="/assets/sprites/sky_stone_block.png" alt="Sky Stone Block" /></div>
    <div class="mc-slot" title="Pure Fluix Crystal"><img src="/assets/sprites/fluix_crystal.png" alt="Fluix" /></div>
    <div class="mc-slot" title="[item:Engineering Processor]"><img src="/assets/sprites/engineering_processor.png" alt="Engineering Processor" /></div>
    <div class="mc-slot" title="Pure Fluix Crystal"><img src="/assets/sprites/fluix_crystal.png" alt="Fluix" /></div>
    <div class="mc-slot" title="Sky Stone Block"><img src="/assets/sprites/sky_stone_block.png" alt="Sky Stone Block" /></div>
    <div class="mc-slot" title="Pure Fluix Crystal"><img src="/assets/sprites/fluix_crystal.png" alt="Fluix" /></div>
    <div class="mc-slot" title="Sky Stone Block"><img src="/assets/sprites/sky_stone_block.png" alt="Sky Stone Block" /></div>
  </div>
  <div class="mc-arrow"></div>
  <div class="mc-result" title="ME Controller">
    <img src="/assets/sprites/me_controller.png" alt="ME Controller" />
  </div>
</div>

Faca [item:ME Controller] quando:

- Sua rede esta chegando a 8 dispositivos.
- Voce quer varios terminais, drives e buses.
- Vai comecar autocrafting.
- Vai ligar fabricas externas.
- Quer usar dense cable e P2P.

Nao espere a rede quebrar para aprender channels.

## 10.3. Arquitetura recomendada de cabos

Use estrutura em arvore:

```text
[ME Controller]
  -> Dense Smart Cable backbone
      -> Smart Cable branch 1: terminals + drives
      -> Smart Cable branch 2: autocrafting wall
      -> Smart Cable branch 3: MI machine hall
      -> Smart Cable branch 4: Create integration
      -> Smart Cable branch 5: farms/subnets
```

Evite loops e caminhos ambiguos. Se dois caminhos competem, AE2 pode escolher a rota mais curta e saturar um cabo enquanto outro fica vazio.

## 10.4. Smart Cable e Dense Smart Cable

Use Smart Cable para diagnosticar channel usage visualmente. Use Dense Smart Cable no backbone principal.

Recomendacao:

- Early: Glass/Covered Cable.
- Assim que puder: Smart Cable nos ramos.
- Mid game: Dense Smart Cable saindo do Controller.
- Late game: P2P para transportar muitos channels por backbone compacto.

## 10.5. Cores de cabo

Cores impedem conexao entre cabos de cores diferentes. Isso ajuda em organizacao fisica, mas **cor de cabo nao cria subnet sozinha**. Para subnet real, as redes precisam estar desconectadas logicamente.

## 10.6. Erros comuns de channel

- Colocar ME Drive entre Controller e o resto da rede, criando gargalo de 8 channels.
- Fazer loops de cabos.
- Usar cabo normal onde deveria ter dense cable.
- Nao usar Smart Cable para diagnostico.
- Colocar muitos Pattern Providers no mesmo cabo de 8 channels.
- Achar que cor de cabo resolve subnet.
- Esquecer que full-block devices podem passar conexao de rede.

---

# 11. Energia da rede ME

AE2 usa energia interna **AE**. No NeoForge, energia externa **FE** pode ser convertida para AE por Energy Acceptor ou ME Controller.

## 11.1. Componentes de energia

| Item/bloco | Uso |
|---|---|
| Energy Acceptor | Entrada basica de energia FE para a rede. |
| ME Controller | Tambem pode aceitar energia, mas faces costumam ser valiosas para channels. |
| Energy Cell | Buffer de energia da rede. |
| Dense Energy Cell | Buffer maior para redes grandes e picos. |
| Vibration Chamber | Geracao de AE por combustivel; util como emergencia/early. |
| Crystal Resonance Generator | Geracao passiva/tematica quando aplicavel. |
| AppliedFlux FE Cells | Armazenamento FE dentro da rede via addon. |
| Kinetic Energy Acceptor | Applied Create: converte stress de Create em energia da rede. |

## 11.2. Por que a rede reinicia

Se a rede tem pouco buffer, ela pode reiniciar quando:

- Voce despeja muitos itens no terminal de uma vez.
- Muitos Import Buses puxam itens simultaneamente.
- Autocrafting inicia uma tarefa grande.
- Wireless e Quantum Bridge aumentam consumo.
- Muitos P2P e subnets ficam ativos.

Solucoes:

- Adicione Energy Cell.
- Adicione Dense Energy Cell.
- Melhore geracao FE.
- Separe farms em subnets.
- Evite import massivo sem buffer.
- Use AppliedFlux para armazenamento FE quando estiver no mid/late game.

## 11.3. Regra de servidor

Toda rede publica da cidade deve ter:

- Energia dedicada.
- Buffer visivel.
- Placa dizendo fonte de energia.
- Acesso para manutencao.
- Monitoramento basico com Network Tool/Jade.

---

# 12. Import, Export, Storage Bus e Interface

Esses blocos fazem a rede interagir com o mundo.

## 12.1. ME Import Bus

Import Bus move itens/fluidos de um inventario externo para a network storage.

Usos:

- Puxar resultado de maquinas.
- Puxar drops de farm.
- Puxar itens de baus temporarios.
- Puxar outputs de Create/MI/Oritech.

Boas praticas:

- Use filtros quando possivel.
- Use Speed/Capacity Cards com cuidado.
- Nao puxe mob farm bruta sem filtro.
- Evite importar de storage que tambem e exportado pela mesma rede, para nao criar loop.

## 12.2. ME Export Bus

Export Bus move itens da rede para inventario externo.

Usos:

- Abastecer maquinas com combustivel.
- Manter itens em uma linha de producao.
- Alimentar farms.
- Enviar input para um buffer.

Boas praticas:

- Use Crafting Card para permitir autocrafting sob demanda.
- Use Redstone Card para ligar/desligar por sinal.
- Use Fuzzy Card quando itens com dano/NBT forem aceitaveis.
- Use filtros restritos.

## 12.3. ME Storage Bus

Storage Bus faz um inventario externo contar como storage da rede.

Usos fortes:

- Conectar tanque externo gigante.
- Conectar barrel/chest dedicado.
- Conectar storage de bulk.
- Criar storage especializado por prioridade.
- Usar interface + storage bus para subnets.

Cuidado: Storage Bus nao “importa” itens para cells. Ele deixa o inventario externo acessivel pela rede. Isso e excelente para bulk, mas precisa de prioridades bem configuradas.

## 12.4. [item:ME Interface]

Interface puxa e empurra itens para network storage e e essencial em subnets. Ela pode atuar como:

- Buffer configuravel.
- Ponto de contato entre rede principal e subnet.
- Estoque passivo de itens exportados.
- Entrada/saida para fabricas especializadas.

Usos fortes:

- Interface em subnet com Storage Bus apontando para ela.
- Interface como buffer de outputs.
- Interface para manter itens disponiveis a maquinas externas.
- Interface em automacoes de Formation/Annihilation Plane.

---

# 13. Autocrafting basico

Autocrafting e o momento em que AE2 deixa de ser storage e vira infraestrutura.

## 13.1. Componentes do autocrafting

Voce precisa de tres coisas:

1. **Pedido de crafting**: jogador pelo terminal, Export Bus com Crafting Card, Interface, ME Requester ou outro dispositivo.
2. **Crafting CPU**: multibloco que gerencia o job.
3. **Pattern Provider**: bloco que executa patterns, enviando ingredientes para Molecular Assemblers ou maquinas externas.

## 13.2. Tipos de patterns

- **Crafting Pattern**: receita de crafting table.
- **Processing Pattern**: receita de maquina externa.
- **Smithing Pattern**: receita de smithing table, quando suportado.
- **Stonecutting Pattern**: receita de stonecutter, quando suportado.

## 13.3. Step-by-step: primeiro autocrafting

1. Faca **Pattern Encoding Terminal**.
2. Faca **Blank Patterns**.
3. Faca 1 **[item:Pattern Provider]**.
4. Faca 1 **[item:Molecular Assembler]**.
5. Faca 1 **Crafting CPU** simples com Crafting Storage.
6. Encoste o Molecular Assembler no Pattern Provider.
7. Encode uma receita simples, como chest, crafting table, cable ou componente basico.
8. Coloque o pattern no Pattern Provider.
9. Abra o terminal e solicite o item.
10. Verifique se o resultado volta para a rede.

Diagrama:

```text
[ME Network]
  -> [Pattern Provider] <-> [Molecular Assembler]
  -> [Crafting CPU]
  -> [Terminal]
```

## 13.4. Wall de autocrafting basico

Um layout comum:

```text
Cable line
  | Provider | Assembler | Assembler |
  | Provider | Assembler | Assembler |
  | Provider | Assembler | Assembler |
```

Ou, para mais desempenho:

```text
        [Assembler]
[Assembler][Provider][Assembler]
        [Assembler]
```

O provider distribui recipes para assemblers adjacentes. Co-processors ajudam a usar varios assemblers em paralelo.

## 13.5. Patterns que valem muito cedo

Priorize patterns de:

- Blank Pattern.
- [item:ME Glass Cable].
- Fluix Cable.
- Quartz Fiber.
- Formation Core.
- Annihilation Core.
- [item:Logic Processor].
- [item:Calculation Processor].
- [item:Engineering Processor].
- Printed Silicon.
- Printed Logic/Calculation/Engineering.
- Import Bus.
- Export Bus.
- Storage Bus.
- Pattern Provider.
- Molecular Assembler.
- Energy Cell.
- Storage Component 1k/4k/16k.

Assim que processors entram no autocrafting, AE2 acelera muito.

---

# 14. Processing Patterns e maquinas externas

Processing Pattern e o que conecta AE2 ao resto do modpack.

## 14.1. Como funciona

Um Processing Pattern diz:

```text
Inputs esperados -> Outputs esperados
```

O AE2 envia os inputs para um inventario adjacente ao Pattern Provider. O que acontece depois e responsabilidade da sua fabrica. O resultado precisa voltar para a rede por Import Bus, Interface ou retornando ao proprio Pattern Provider.

## 14.2. Step-by-step: processing pattern simples

Exemplo: iron ingot -> iron plate em uma maquina externa.

1. Coloque uma maquina que transforma iron ingot em iron plate.
2. Coloque um Pattern Provider apontando para a entrada/buffer da maquina.
3. Coloque output da maquina indo para um chest, interface ou o proprio Pattern Provider.
4. Coloque Import Bus se o output estiver em chest.
5. No Pattern Encoding Terminal, crie Processing Pattern:
   - Input: 1 iron ingot.
   - Output: 1 iron plate.
6. Insira o pattern no provider.
7. Solicite iron plate pelo terminal.
8. Confirme se o craft completa.

Diagrama:

```text
[ME Network]
  -> [Pattern Provider]
      -> [Input Buffer]
          -> [Machine]
              -> [Output Buffer]
                  -> [Import Bus]
                      -> [ME Network]
```

## 14.3. Modo blocking

Use **Blocking Mode** em Pattern Providers quando a maquina ou buffer nao deve receber novo lote antes de terminar o anterior.

Use blocking mode para:

- Maquinas lentas.
- Inscriber.
- Maquinas com slots especificos.
- Multiblocos que travam se recebem input misturado.
- Fusion crafting.
- Qualquer setup com risco de ingredientes se acumularem no input.

## 14.4. Retorno do resultado

O craft so completa quando o resultado entra na rede como evento de entrada.

Rotas validas:

- Output -> Import Bus -> rede.
- Output -> Interface -> rede.
- Output -> Pattern Provider, quando o provider aceita retorno.

Evite:

- Output em chest visto apenas por Storage Bus. Isso pode nao contar como retorno de craft.
- Output em inventario externo sem import.
- Output que passa por pipes lentos demais sem buffer.

## 14.5. Processing patterns em lote

Voce pode codificar patterns em lotes:

```text
8 cobblestone -> 8 stone
64 logs -> 64 planks
16 ores -> 32 dusts
```

Isso reduz overhead e melhora throughput, desde que a fabrica aceite o lote.

## 14.6. Processing patterns com subprodutos

Se a receita gera subprodutos, informe outputs secundarios quando relevante.

Exemplo:

```text
Input: 1 raw ore
Output principal: 2 dust
Output secundario: 1 tiny dust / byproduct chance, se aplicavel
```

Se o subproduto nao for garantido, cuidado: o AE2 espera outputs exatos em alguns casos. Para receitas com chance, prefira separar a linha ou usar padrao conservador.

---

# 15. Crafting CPUs e paralelismo

Crafting CPUs sao multiblocos que gerenciam pedidos de autocrafting.

## 15.1. Pecas principais

- **Crafting Storage**: define o tamanho/complexidade do job.
- **Crafting Co-Processing Unit**: melhora paralelismo de envio para providers.
- **Crafting Monitor**: mostra o job em andamento.
- **Crafting Unit**: bloco estrutural para preencher multibloco.

## 15.2. Tamanhos de Crafting Storage

| Storage | Uso |
|---|---|
| 1k | Pedidos pequenos e early. |
| 4k | Crafting basico da base. |
| 16k | Componentes intermediarios. |
| 64k | Crafts grandes de maquinas. |
| 256k | Late game, crafts complexos. |
| MEGA/Advanced tiers | Megaprojetos e recipes absurdas. |

## 15.3. Quantas CPUs fazer

Uma CPU executa um job por vez. Para servidor, e melhor ter varias CPUs de tamanhos diferentes.

Recomendacao:

| Fase | CPUs sugeridas |
|---|---|
| Early autocrafting | 1x 4k simples. |
| Mid game | 2x 16k + 1x 64k. |
| Late game | 4+ CPUs variadas com co-processors. |
| Endgame | MEGA Cells ou Advanced AE Quantum Computer. |

## 15.4. Co-processors

Co-processors ajudam o sistema a enviar ingredientes em paralelo. Eles sao importantes quando:

- Voce tem varios Molecular Assemblers em volta do provider.
- Existem varios Pattern Providers com recipes iguais.
- A fabrica externa tem muitas maquinas paralelas.
- Pedidos grandes ficam lentos por envio de lotes.

## 15.5. Advanced AE Quantum Computer

No endgame, Advanced AE adiciona o **Quantum Computer**, uma estrutura de crafting muito forte. Ele permite executar muitas tarefas simultaneas, compartilha co-processors e consome um canal para muita capacidade. No Astron City, isso deve ser tratado como infraestrutura de cidade, nao como item casual.

Uso ideal:

- Rede publica central.
- Crafting de maquinas grandes.
- Componentes de Draconic/Stellaris.
- Estoque automatico em massa.
- Fabricas de materiais de construcoes gigantes.

---

# 16. Subnets - redes auxiliares inteligentes

Subnet e uma rede ME separada que apoia a rede principal. Ela e essencial para projetos avancados.

## 16.1. Por que usar subnets

Subnets servem para:

- Economizar channels da rede principal.
- Isolar storage e evitar acesso indevido.
- Fazer uma fabrica parecer “uma maquina so” para a rede principal.
- Criar pipes inteligentes com Import/Storage Bus.
- Controlar farms, Formation Planes e Annihilation Planes.
- Evitar que outputs entrem no lugar errado.

## 16.2. Quartz Fiber

Quartz Fiber transfere energia entre redes sem conectar as redes logicamente. E uma ferramenta chave para subnets.

Uso:

```text
Rede principal --energia via Quartz Fiber-- Subnet
```

Assim, a subnet recebe energia sem virar parte da rede principal.

## 16.3. Exemplo: subnet de processamento paralelo

Objetivo: fazer 8 maquinas processarem o mesmo pattern usando 1 canal da rede principal.

```text
Rede principal
  -> Pattern Provider
      -> Interface da subnet
          -> Subnet com Storage Buses / Export / Import
              -> 8 maquinas paralelas
                  -> Output volta para Interface
                      -> rede principal
```

Vantagem: a rede principal ve apenas um provider, mas por tras existe uma fabrica paralela.

## 16.4. Exemplo: subnet de Certus

```text
Rede principal
  -> Level Emitter detecta Certus baixo
  -> sinal liga farm
  -> subnet controla Annihilation Plane e storage local
  -> Certus final entra na rede principal
```

## 16.5. Erros comuns em subnets

- Deixar full-block devices conectarem as redes sem querer.
- Usar cabo colorido achando que e subnet.
- Alimentar a subnet com Energy Acceptor separado quando Quartz Fiber resolveria.
- Colocar Import Bus da subnet acessando storage da rede principal.
- Esquecer que Pattern Provider normal pode passar conexao por lados indesejados.
- Nao usar Network Tool para verificar redes separadas.

---

# 17. P2P Tunnels - backbone de canais e recursos

P2P Tunnels movem algo entre dois pontos da rede como se fossem portais. Existem variantes para canais, itens, fluidos, redstone, energia, luz e, com Applied Create, stress.

## 17.1. Tipos principais

- **ME P2P**: transporta channels.
- **Item P2P**: transporta itens.
- **Fluid P2P**: transporta fluidos.
- **Energy P2P**: transporta energia, com custo/penalidade.
- **Redstone P2P**: transporta sinal.
- **Light P2P**: transporta luz.
- **Stress P2P**: Applied Create, transporta stress rotacional.

## 17.2. Linking com Memory Card

Para parear P2P:

1. Configure o tipo do P2P, se necessario.
2. Shift-right-click no P2P de entrada com Memory Card.
3. Right-click no P2P de saida com o Memory Card.
4. Confirme a frequencia/cores.
5. Teste fluxo.

## 17.3. ME P2P para channels

ME P2P e a forma avancada de transportar muitos channels por backbone compacto.

Exemplo:

```text
Controller
  -> Dense Cable
      -> ME P2P Inputs
          -> backbone da subnet P2P
              -> ME P2P Outputs
                  -> fabricas/distintos setores
```

O uso classico e compactar 32 canais por input/output, permitindo levar muitos canais a distancia com menos cabos densos.

## 17.4. P2P nao e magia infinita

Cuidados:

- ME P2P nao pode carregar channels por dentro de outro ME P2P recursivamente.
- Input/output de P2P consome channel na rede onde esta conectado.
- P2P mal documentado vira pesadelo de manutencao.
- Use placas, cores e nomes.

## 17.5. P2P no Astron City

Use P2P para:

- Ligar centro da cidade a distritos industriais.
- Ligar sala de AE2 a refinaria MI.
- Ligar storage central a fazendas publicas.
- Ligar rede principal a area Create.
- Levar canais a base espacial.
- Separar mob farms e farms de recursos em setores.

---

# 18. Wireless, acesso remoto e boosters

Wireless e qualidade de vida, mas no Astron City tambem e infraestrutura de exploracao.

## 18.1. Wireless Terminal

Wireless Terminal e a versao portatil do Terminal.

Uso:

- Consultar storage sem voltar para a sala ME.
- Pegar blocos durante construcoes.
- Solicitar autocrafts perto de fabricas.

## 18.2. Wireless Crafting Terminal

E o melhor terminal portatil inicial. Permite acessar storage e craftar.

Prioridade alta para jogadores builders e engenheiros.

## 18.3. Wireless Access Point

Para usar wireless, conecte Wireless Access Point a rede e pareie o terminal.

Boas praticas:

- Coloque access points em locais centrais.
- Use boosters de alcance se existirem na versao/receita.
- Evite espalhar access points sem documentacao.
- Para outras dimensoes, use Dimension Card ou Quantum Bridge.

## 18.4. AEInfinityBooster

AEInfinityBooster adiciona:

- **Infinity Range Card**: permite uso de terminal/crafting devices em alcance infinito.
- **Dimension Card**: permite uso entre dimensoes.

No Astron City, esses itens sao fortissimos. Recomendacao de balanceamento:

- Infinity Range Card: mid/late game.
- Dimension Card: late game, idealmente depois de Quantum Bridge, espaco ou bosses.
- Evitar liberar no primeiro dia se o objetivo e progressao longa.

---

# 19. Quantum Network Bridge e redes entre dimensoes

Quantum Network Bridge estende uma rede ME por distancia infinita e entre dimensoes. Ele age como um cabo denso sem fio, carregando ate 32 channels.

## 19.1. Componentes

- ME Quantum Ring.
- ME Quantum Link Chamber.
- Quantum Entangled Singularity.
- Energia suficiente nos dois lados.
- Chunkloading nos dois lados, se estiverem distantes.

## 19.2. Step-by-step conceitual

1. Crie duas estruturas de Quantum Bridge, uma em cada local.
2. Insira singularidades entangladas correspondentes.
3. Conecte cada lado a rede/cabo correto.
4. Garanta energia suficiente.
5. Garanta chunkloading se necessario.
6. Teste channels e acesso ao storage.

## 19.3. Usos no Astron City

- Cidade principal <-> base espacial.
- Cidade principal <-> refinaria remota.
- Cidade principal <-> usina nuclear.
- Cidade principal <-> outpost de boss/dungeon.
- Cidade principal <-> dimensoes de resource farming.

## 19.4. Regra de servidor

Toda Quantum Bridge deve ter:

- Nome do dono/time.
- Dimensao e coordenadas de destino.
- Fonte de energia.
- Status de chunkloading.
- Motivo de existir.
- Botao/rota de desligamento quando aplicavel.

---

# 20. Spatial Storage - uso avancado

Spatial Storage permite capturar e mover volumes do mundo usando [item:Spatial IO Port]. E um sistema avancado, caro e que pode interagir de forma sensivel com entidades, blocos e modded content.

## 20.1. Componentes

- [item:Spatial IO] Port.
- Spatial Pylons.
- Spatial Cells.
- Energia alta.
- Area delimitada.

## 20.2. Usos possiveis

- Mover estruturas pequenas.
- Capturar setups especificos.
- Mover Budding Certus em casos avancados.
- Criar puzzles/eventos.
- Testes controlados em area tecnica.

## 20.3. Cuidados

- Teste em singleplayer/copia antes de usar em servidor.
- Evite usar em multiblocos complexos sem teste.
- Evite usar em areas com blocos de outros mods sem confirmar compatibilidade.
- Nao use em estruturas publicas sem permissao.

No Astron City, Spatial Storage deve ser ferramenta de engenheiro avancado, nao metodo casual de mover base.

---

# 21. Addons de AE2 no Astron City

Esta secao resume como cada addon muda a progressao.

## 21.1. AE2 Things

AE2 Things adiciona:

- **DISK / Deep Item Storage Disk**: cell sem limite de types, onde um item conta como um byte, com tradeoff de eficiencia.
- **Advanced Inscriber**: inscriber melhor para automatizar processors.
- **Crystal Growth Chamber**: crescimento de cristais em maquina, evitando setups de agua/tempo.

Uso ideal:

- Resolver dor de processors cedo.
- Melhorar producao de Certus/Fluix.
- Guardar muitos tipos quando o limite de type seria problema.

Cuidado: DISK ajuda com types, mas nao e desculpa para jogar todo lixo NBT sem filtro na rede.

## 21.2. MEGA Cells

MEGA Cells adiciona storage e crafting de escala absurda:

- Item cells e fluid cells de 1M a 256M.
- Portable cells grandes.
- MEGA Bulk Item Storage Cell para armazenamento massivo de um tipo.
- Bulk compression entre ingots/nuggets/blocks com Decompression Module.
- MEGA Pattern Provider.
- MEGA Crafting CPUs de grande capacidade.
- Superdense Energy Cell.
- Greater Energy Card.

Uso ideal:

- Cobblestone, dirt, netherrack, ores processados, logs, ingots comuns.
- Fluids de refinaria/MI.
- Projetos de construcao gigantes.
- Cidade publica com storage de longo prazo.

## 21.3. ExtendedAE

ExtendedAE melhora muito o workflow de storage e crafting:

- 36-slot Pattern Provider e Interface.
- Infinity Water Cell e Infinity Cobblestone Cell.
- Import/Export Buses 8x mais rapidos.
- Extended Pattern Access Terminal.
- Wireless Extended Pattern Access Terminal.
- Pattern Modifier para editar/clonar patterns em massa.
- Tag Export Bus e Tag Storage Bus.
- Precise Export Bus.
- Mod Export Bus e Mod Storage Bus.
- Active Formation Plane.
- Extended Inscriber e Extended Charger.
- Crystal Assembler e Restorer.
- Extended Molecular Assembler.
- Assembler Matrix.
- ME Canner.
- ME Wireless Connector.

Uso ideal:

- Late midgame em diante.
- Reduzir blocos repetidos.
- Fazer wall de patterns ficar legivel.
- Automatizar receitas com muitos outputs/inputs.
- Escalar fabricas sem dezenas de blocos basicos.

## 21.4. Advanced AE

Advanced AE adiciona ferramentas muito poderosas:

- **Advanced Pattern Providers** com input por face via Advanced Pattern Encoder.
- **Quantum Computer** para autocrafting massivo e paralelo.
- **Quantum Crafter** para crafts por tick, incluindo casos recursivos e ingredientes nao consumidos.
- **Quantum Armor Set** com recursos defensivos e QoL conectados ao ME System.
- **Reaction Chamber** para receitas eficientes e progresso do addon.
- **Stock Export Bus**, **Import Export Bus** e **Advanced IO Bus**.
- **ME Throughput Monitor** para acompanhar taxa de recursos.

Uso ideal:

- Endgame de autocrafting.
- Maquinas com input por lado.
- Crafts recursivos.
- Estoque de materiais estrategicos.
- Monitoramento de producao de cidade.

Balanceamento sugerido: tratar Quantum Armor e Quantum Crafter como objetivos fortes de endgame, nao como item casual.

## 21.5. ME Requester

ME Requester mantem itens e fluidos em estoque automaticamente.

Exemplo:

```text
Manter 256 Logic Processors
Manter 256 Calculation Processors
Manter 128 Engineering Processors
Manter 1024 Fluix Crystals
Manter 512 Steel Plates
```

Uso ideal:

- Componentes de AE2.
- Componentes de MI.
- Cabos e buses.
- Comida/consumiveis publicos.
- Materiais de obra.
- Combustiveis/fluidos.

Cuidado: se voce pedir estoque muito alto sem fabricas capazes, o sistema fica permanentemente ocupado.

## 21.6. AppliedFlux

AppliedFlux permite armazenar FE na rede ME.

Itens/sistemas importantes:

- FE/Flux cells.
- Flux Accessor.
- Terminal integration para visualizar energia.
- Charge/discharge de itens por terminal, quando suportado.

Uso ideal:

- Rede publica com energia centralizada.
- Megabase com Powah/MI/Ender IO.
- Buffer de energia para picos.
- Integracao com Advanced AE Throughput Monitor.

## 21.7. Applied Create

Applied Create conecta AE2 e Create.

Itens/sistemas importantes:

- Andesite Pattern Provider.
- Brass Pattern Provider.
- Pattern providers para Mechanical Crafters.
- Stress P2P Tunnel.
- ME Gearbox.
- Kinetic Energy Acceptor.
- Stress storage cells.
- Andesite/Brass stress processors/assemblies.

Uso ideal:

- Autocrafting de Mechanical Crafters.
- Rede de stress entre distritos.
- Alimentar AE2 com Create.
- Manter Create relevante depois do AE2.

## 21.8. AEInfinityBooster

Adiciona:

- Infinity Range Card.
- Dimension Card.

Uso ideal:

- Builders.
- Exploradores.
- Viagens espaciais.
- Bases remotas.
- Dungeons longas.

## 21.9. AE2 Draconic Fusion Autocrafter

Adiciona ME Draconic Pattern Provider, em variante bloco e panel, para automatizar Draconic Evolution Fusion Crafting.

Funcoes:

- Envia catalyst para Fusion Core.
- Distribui ingredientes para injectors.
- Evita timers/redstone/subnets frageis.
- Detecta core ocupado e tenta de forma mais estavel.

Uso ideal:

- Endgame Draconic.
- Automacao de upgrades e componentes poderosos.
- Rede de crafting avancada ligada ao sistema publico.

## 21.10. Polymorphic Energistics

Adiciona suporte Polymorph em terminais AE2, permitindo escolher resultado quando duas receitas conflitantes usam os mesmos ingredientes.

Uso ideal:

- Modpack grande com muitos mods.
- Receitas duplicadas de plates/gears/cables/components.
- Encoding correto de patterns.

## 21.11. GuideME

GuideME e framework de guias in-game. No contexto do wiki, ele e util como ferramenta de descoberta dentro do jogo, especialmente para jogadores que preferem consultar informacao sem sair do Minecraft.

---

# 22. Catalogo de recursos, itens e componentes do AE2 core

Este catalogo cobre os itens principais do AE2 core que o jogador deve reconhecer. Receitas exatas devem ser confirmadas no EMI/JEI do Astron City.

## 22.1. Cristais, dusts e blocos base

| Item | Uso principal |
|---|---|
| Certus Quartz Crystal | Recurso base de AE2, usado em componentes, fluix e maquinas. |
| Charged Certus Quartz Crystal | Fluix, reparo/criacao de Budding Certus e receitas especificas. |
| Certus Quartz Dust | Processamento, crafting e etapas de cristal. |
| Certus Quartz Block | Bloco decorativo/recurso; pode interagir com Charged Certus em mecanicas de budding. |
| Budding Certus Quartz | Fonte renovavel de Certus via crescimento de buds. |
| ![Fluix](/assets/sprites/fluix_crystal.png) Fluix Crystal | Recurso central para cabos, maquinas e rede ME. |
| Fluix Dust | Processamento de componentes/cabos. |
| Fluix Pearl | Componentes avancados e wireless, conforme receita. |
| Fluix Block | Bloco de armazenamento/decoracao. |
| Sky Stone | Bloco de meteoritos, usado em receitas e decoracao. |
| Sky Stone Dust | Recurso processado de Sky Stone. |
| Ender Dust | Componente usado em wireless/quantum dependendo da receita. |
| Nether Quartz Dust | Recurso auxiliar para processors/silicon dependendo de receita. |

## 22.2. Presses e processors

| Item | Uso principal |
|---|---|
| Inscriber Silicon Press | Produzir Printed Silicon. |
| Inscriber Logic Press | Produzir Printed Logic Circuit. |
| Inscriber Calculation Press | Produzir Printed Calculation Circuit. |
| Inscriber Engineering Press | Produzir Printed Engineering Circuit. |
| Printed Silicon | Base de processors. |
| Printed Logic Circuit | Parte do [item:Logic Processor]. |
| Printed Calculation Circuit | Parte do [item:Calculation Processor]. |
| Printed Engineering Circuit | Parte do Engineering Processor. |
| Logic Processor | Terminals, drives, buses e componentes basicos. |
| Calculation Processor | Crafting, storage e componentes intermediarios. |
| Engineering Processor | Drives, CPUs, controllers e componentes avancados. |

## 22.3. Cores e ingredientes funcionais

| Item | Uso principal |
|---|---|
| Formation Core | Usado em Export Bus, Formation Plane e dispositivos que colocam/enviam itens. |
| Annihilation Core | Usado em Import Bus, Annihilation Plane e dispositivos que coletam/importam itens. |
| Matter Ball | Subproduto do Matter Condenser e receitas especificas. |
| Singularity | Usado para Quantum Entangled Singularity. |
| Quantum Entangled Singularity | Pareamento de Quantum Network Bridge. |
| Wireless Receiver | Wireless terminal/access point e dispositivos remotos. |
| Cable Anchor | Separar cabos, criar facades e organizar conexoes. |
| Quartz Fiber | Transferir energia entre redes sem conecta-las. |
| Quartz Glass | Recurso para maquinas e cabos. |
| Illuminated Panel | Monitores e decoracao funcional. |
| Tiny TNT | Crafting/efeitos especificos, geralmente usado em Singularity/Quantum setup. |

## 22.4. Patterns e upgrades

| Item | Uso principal |
|---|---|
| Blank Pattern | Base para qualquer pattern. |
| Crafting Pattern | Receita de crafting automatica. |
| Processing Pattern | Receita de maquina externa. |
| Smithing Pattern | Receita de smithing automatica. |
| Stonecutting Pattern | Receita de stonecutter automatica. |
| Speed Card | Acelera buses/maquinas suportadas. |
| Capacity Card | Aumenta filtros/slots de dispositivos. |
| Redstone Card | Permite controle por redstone. |
| Crafting Card | Permite export/interface solicitar autocrafting. |
| Fuzzy Card | Ignora certos detalhes de dano/NBT em filtros. |
| Inverter Card | Inverte whitelist/blacklist. |
| Equal Distribution Card | Distribui espaco entre types numa cell. |
| Overflow Destruction Card | Destroi excesso quando a cell esta cheia. |
| Energy Card | Aumenta bateria de itens portateis suportados. |
| View Cell | Filtra visualizacao em terminais. |

## 22.5. Tools

| Item | Uso principal |
|---|---|
| [item:Certus [item:Quartz Wrench]] | Rotacionar, configurar e remover partes AE2. |
| Nether Quartz Wrench | Alternativa de wrench. |
| Network Tool | Diagnosticar rede, canais, energia e conexoes. |
| Memory Card | Copiar configuracoes e parear P2P. |
| Meteorite Compass | Encontrar Mysterious Cube/meteoritos. |
| Color Applicator | Pintar cabos/blocos AE2. |
| Entropy Manipulator | Ferramenta utilitaria de aquecer/resfriar/transformar blocos. |
| Matter Cannon | Arma/ferramenta que usa ammo do ME/itens. |
| Charged Staff | Ferramenta/arma energetica. |
| Quartz Tools | Ferramentas de quartz. |
| Fluix Tools | Ferramentas de fluix. |
| Paintballs | Pintura/coloracao de cabos e partes. |

---

# 23. Catalogo de blocos, maquinas e dispositivos do AE2 core

## 23.1. Network infrastructure

| Bloco | Funcao |
|---|---|
| ![Controller](/assets/sprites/me_controller.png) ME Controller | Coração da rede. Fornece 32 channels por face (total de 192 por bloco, menos as conexões internas). Limite de 7x7x7, sem "buracos" internos complexos, regras estritas de formato. |
| ME Drive | Armazena cells. |
| [item:ME Chest] | Acesso direto a uma cell. Util, mas limitado. |
| Energy Acceptor | Entrada de energia FE para AE. |
| Energy Cell | Buffer de energia da rede. |
| Dense Energy Cell | Buffer grande de energia. |
| ME Glass Cable | Cabo basico. |
| ME Covered Cable | Cabo basico coberto. |
| ME Smart Cable | Cabo com visualizacao de channels. |
| ME Dense Cable | Cabo de 32 channels. |
| ME Dense Smart Cable | Dense cable com diagnostico visual. |
| Quartz Fiber | Energia entre redes sem conexao logica. |
| ME P2P Tunnel | Transporte de channels ou outros recursos via attunement. |
| Quantum Ring | Parte da Quantum Bridge. |
| Quantum Link Chamber | Centro da Quantum Bridge. |
| Spatial Anchor | Chunkloading/anchor conforme configuracao do servidor. |
| Toggle Bus | Liga/desliga conexoes por redstone. |

## 23.2. Terminais

| Terminal | Funcao |
|---|---|
| ME Terminal | Acesso basico a storage e autocrafting. |
| ME Crafting Terminal | Terminal com grid de crafting. Prioridade alta. |
| ME Pattern Encoding Terminal | Codifica patterns. Obrigatorio para autocrafting. |
| ME Pattern Access Terminal | Acesso centralizado aos Pattern Providers. |
| Wireless Terminal | Terminal portatil. |
| Wireless Crafting Terminal | Crafting terminal portatil. |
| Wireless Access Point | Permite wireless terminals na rede. |

## 23.3. Buses, planes e interfaces

| Dispositivo | Funcao |
|---|---|
| ME Import Bus | Puxa itens/fluidos para a rede. |
| ME Export Bus | Envia itens/fluidos da rede para inventario externo. |
| ME Storage Bus | Usa inventario externo como storage da rede. |
| [item:ME Interface] | Buffer/interacao bidirecional; chave para subnets. |
| ME Level Emitter | Emite redstone baseado em quantidade/estado da rede. |
| Annihilation Plane | Quebra/coleta blocos ou itens para a rede/subnet. |
| Formation Plane | Coloca/dropa itens/blocos no mundo. |

## 23.4. Maquinas

| Maquina | Funcao |
|---|---|
| Charger | Carrega Certus e itens suportados. |
| Inscriber | Produz printed circuits/processors e outros componentes. |
| [item:Growth Accelerator] | Acelera crescimento de Certus buds. |
| Molecular Assembler | Executa crafting patterns. |
| Cell Workbench | Configura/particiona cells e upgrades. |
| ME IO Port | Move conteudo entre cells e rede. |
| Matter Condenser | Condensa itens em Matter Balls/Singularities e serve para descarte controlado. |
| Spatial IO Port | Sistema de Spatial Storage. |
| Spatial Pylon | Delimita area de Spatial Storage. |
| Sky Stone Tank | Tanque tematico/armazenamento de fluidos, quando usado. |

## 23.5. Crafting CPU multiblock

Pecas:

- Crafting Unit.
- Crafting Storage 1k/4k/16k/64k/256k.
- Crafting Co-Processing Unit.
- Crafting Monitor.

Uso:

- Gerenciar jobs de autocrafting.
- Armazenar intermediarios.
- Paralelizar pedidos.
- Exibir status.

## 23.6. Cells

Core AE2:

- 1k, 4k, 16k, 64k, 256k Item Storage Cell.
- 1k, 4k, 16k, 64k, 256k Fluid Storage Cell.
- Portable Item Storage Cells.
- Portable Fluid Storage Cells.
- Spatial Cells.
- Storage Components.
- Item Cell Housing.
- Fluid Cell Housing.

Addons expandem com DISK, MEGA Cells, FE cells, stress cells e infinity cells.

---

# 24. Catalogo dos addons

## 24.1. AE2 Things - catalogo

| Item/bloco | Uso |
|---|---|
| DISK / Deep Item Storage Disk | Storage sem limite de types, com tradeoff de capacidade/eficiencia. |
| Advanced Inscriber | Inscriber melhor para automacao de processors. |
| Crystal Growth Chamber | Crescimento automatizado de cristais em maquina. |

## 24.2. MEGA Cells - catalogo

| Item/bloco | Uso |
|---|---|
| 1M-256M Item Storage Cells | Storage massivo de itens. |
| 1M-256M Fluid Storage Cells | Storage massivo de fluidos. |
| Portable MEGA Cells | Storage portatil de alto tier. |
| MEGA Bulk Item Storage Cell | Storage massivo de um tipo de item. |
| Decompression Module | Suporte para compressao/decompressao de bulk. |
| MEGA Pattern Provider | Provider com maior capacidade de patterns. |
| MEGA Crafting Storage/CPU blocks | Crafting jobs gigantes. |
| 4-threaded Co-Processing Unit | Paralelismo em MEGA CPUs. |
| MEGA Crafting Monitor | Monitor de CPU MEGA. |
| Superdense Energy Cell | Buffer enorme de energia AE. |
| Greater Energy Card | Mais bateria para dispositivos portateis suportados. |

## 24.3. ExtendedAE - catalogo

| Item/bloco | Uso |
|---|---|
| 36-slot Pattern Provider | Muitos patterns em um bloco. |
| 36-slot Interface | Interface maior para setups densos. |
| Infinity Water Cell | Agua infinita na rede. |
| Infinity Cobblestone Cell | Cobblestone infinito na rede. |
| Faster Import Bus | Importacao de alto throughput. |
| Faster Export Bus | Exportacao de alto throughput. |
| Extended Pattern Access Terminal | Gerenciamento de muitos providers. |
| Wireless Extended Pattern Access Terminal | Gerenciamento remoto de patterns. |
| Pattern Modifier | Editar/clonar patterns em massa. |
| Tag Export Bus | Exporta por tag. |
| Tag Storage Bus | Storage/filtro por tag. |
| Precise Export Bus | Exportacao por slots/quantidades precisas. |
| Mod Export Bus | Exporta itens por mod id. |
| Mod Storage Bus | Usa storage filtrado por mod id. |
| Active Formation Plane | Coloca blocos somente sob redstone. |
| Extended Inscriber | Produz circuits/processors com mais eficiencia/paralelismo. |
| Extended Charger | Carregamento melhorado. |
| Crystal Assembler | Crescimento/producoes de cristal. |
| Crystal Restorer | Restaura/repara cristais/budding conforme mecanicas do addon. |
| Extended Molecular Assembler | Crafting paralelo melhorado. |
| Assembler Matrix | Multibloco de crafting extremamente rapido. |
| ME Canner | Encher/esvaziar containers. |
| ME Wireless Connector | Ponte wireless/long range de rede, conforme configuracao. |

## 24.4. Advanced AE - catalogo

| Item/bloco | Uso |
|---|---|
| Advanced Pattern Encoder | Cria/ajusta processing patterns com input por face. |
| Advanced Pattern Provider | Provider avancado para maquinas com lados especificos. |
| Quantum Core | Nucleo de Quantum Computer; standalone com storage/co-processors. |
| Quantum Computer | Crafting CPU avancada de altissima escala. |
| Quantum Data Entangler | Multiplica/expande capacidades do Quantum Computer. |
| Quantum Multi-Threader | Multiplica co-processors/threads do Quantum Computer. |
| Quantum Crafter | Auto crafter extremamente rapido e flexivel. |
| Quantum Armor | Armadura forte com QoL conectada ao ME system. |
| Reaction Chamber | Maquina de processamento eficiente e progressao do addon. |
| Stock Export Bus | Exporta ate um limite de estoque. |
| Import Export Bus | Exporta inputs e importa outputs. |
| Advanced IO Bus | Combina controle de estoque, import e export; throughput alto. |
| ME Throughput Monitor | Monitor de taxa de itens/fluidos/energia. |
| Throughput Monitor Configurator | Configura visualizacao por tick/segundo/minuto. |

## 24.5. AppliedFlux - catalogo

| Item/bloco | Uso |
|---|---|
| FE/Flux Cells | Armazenar FE dentro da rede ME. |
| Flux Accessor | Interagir com energia armazenada na rede. |
| Terminal integration | Visualizar e carregar/descarregar itens por terminal, quando suportado. |

## 24.6. ME Requester - catalogo

| Item/bloco | Uso |
|---|---|
| ME Requester | Mantem itens/fluidos em estoque. |
| ME Requester Terminal | Configura e monitora requests remotamente. |

## 24.7. Applied Create - catalogo

| Item/bloco | Uso |
|---|---|
| Andesite Pattern Provider | Provider para Mechanical Crafters, 9 slots. |
| Brass Pattern Provider | Provider avancado para Mechanical Crafters, 36 slots. |
| Stress P2P Tunnel | Transporte de stress via AE2 P2P. |
| ME Gearbox | Conversao bidirecional entre ME energy/stress e rotacao Create. |
| Kinetic Energy Acceptor | Converte stress de Create em energia AE. |
| Stress Storage Cells | Armazena stress na rede ME. |
| Andesite/Brass Stress Processors | Componentes de stress storage. |
| Creative Stress Cell | Item criativo/teste. |

## 24.8. AE2 Draconic Fusion Autocrafter - catalogo

| Item/bloco | Uso |
|---|---|
| ME Draconic Pattern Provider | Provider para Fusion Crafting. |
| ME Draconic Pattern Provider Panel | Variante compacta/panel. |
| Fusion-aware routing | Envia catalyst e ingredients corretamente. |

## 24.9. AEInfinityBooster - catalogo

| Item | Uso |
|---|---|
| Infinity Range Card | Alcance infinito para terminal/crafting device. |
| Dimension Card | Acesso entre dimensoes. |

## 24.10. Polymorphic Energistics - catalogo

| Recurso | Uso |
|---|---|
| Polymorph button em Crafting Terminal | Escolher receita conflitante. |
| Polymorph button em Pattern Encoding Terminal | Codificar o pattern correto quando ha receitas duplicadas. |

---

# 25. Fabricas populares e solucoes de survival

## 25.1. Fabrica 1 - Starter ME Closet

**Objetivo:** trocar baus baguncados por storage pesquisavel.

Componentes:

- Energy Acceptor.
- ME Drive.
- 1k/4k Storage Cells.
- Crafting Terminal.
- Cabos.
- Energy Cell, se possivel.

Fluxo:

```text
Energia -> Energy Acceptor -> ME Drive -> Crafting Terminal
```

Quando expandir:

- Ao chegar perto de 8 devices.
- Quando precisar de autocrafting.
- Quando varios jogadores usarem ao mesmo tempo.

## 25.2. Fabrica 2 - Certus Farm automatica

**Objetivo:** produzir Certus renovavel.

Componentes:

- Budding Certus.
- Growth Accelerators.
- Annihilation Plane ou sistema alternativo de colheita.
- Storage local.
- Import Bus/Interface.
- Level Emitter para controle de estoque.

Fluxo:

```text
Budding Certus -> clusters -> coleta automatica -> buffer -> rede ME
```

Controle:

- Level Emitter liga a farm se Certus < 512.
- Desliga se Certus >= 2048.

## 25.3. Fabrica 3 - Fluix automation

**Objetivo:** eliminar craft manual de Fluix.

Componentes:

- Pattern Provider.
- Dropper/Formation Plane.
- Agua.
- Coleta por Annihilation Plane/hopper/item collector.
- Import Bus.

Pattern:

```text
Input:
- 1 Charged Certus
- 1 Nether Quartz
- 1 Redstone

Output:
- 2 Fluix Crystal, conforme receita do pack
```

Obs: confira output exato no EMI/JEI.

## 25.4. Fabrica 4 - Processor automation basica

**Objetivo:** automatizar Logic, Calculation e Engineering Processors.

Componentes:

- Inscriber ou Advanced Inscriber.
- Presses.
- Pattern Providers.
- Buffers separados por slot/lado.
- Import Bus.

Fluxo conceitual:

```text
Gold/Diamond/Certus + Press -> Printed Circuit
Quartz/Certus Dust + Silicon Press -> Printed Silicon
Printed Circuit + Printed Silicon + Redstone -> Processor
```

Com AE2 Things/ExtendedAE, substitua por Advanced/Extended Inscriber quando possivel.

## 25.5. Fabrica 5 - Autocrafting wall

**Objetivo:** fabricar componentes recorrentes.

Componentes:

- Pattern Providers.
- Molecular Assemblers.
- Crafting CPUs.
- Pattern Access Terminal.
- Co-processors.

Categorias de patterns:

- AE2 components.
- MI plates/gears/hulls.
- Create components.
- Building blocks.
- Food/consumables.
- Boss prep.
- Space components.

## 25.6. Fabrica 6 - MI Processing Hub

**Objetivo:** AE2 solicitar e MI produzir.

Exemplos:

- Ingot -> plate.
- Ore -> dust -> ingot.
- Dusts -> alloy.
- Fluids -> chemical outputs.
- Steel/stainless components.

Setup:

```text
AE2 Pattern Provider
  -> buffer de entrada
  -> MI machine ou multiblock
  -> buffer de saida
  -> Import Bus
```

Use blocking mode em maquinas que nao aceitam mistura.

## 25.7. Fabrica 7 - Create Mechanical Crafting com Applied Create

**Objetivo:** automatizar crafts em Mechanical Crafters.

Componentes:

- Andesite/Brass Pattern Provider.
- Mechanical Crafter array.
- Cabos AE2.
- Retorno para ME.

Uso:

- Crafts grandes de Create.
- Componentes de addons Create.
- Blocos mecanicos em massa.

## 25.8. Fabrica 8 - Bulk Storage Hub

**Objetivo:** guardar recursos absurdos sem destruir cells gerais.

Componentes:

- MEGA Bulk Item Storage Cells.
- MEGA item/fluid cells.
- Cells particionadas.
- Storage priorities.
- Overflow controlado.

Itens ideais:

- Cobblestone.
- Dirt.
- Deepslate.
- Netherrack.
- Logs.
- Sand/Gravel.
- Ingots comuns.
- Ores processados.

## 25.9. Fabrica 9 - Mob Farm Filter

**Objetivo:** proteger AE2 contra NBT/unstackables.

Fluxo recomendado:

```text
Mob farm output
  -> filtro de equipamentos/drops NBT
      -> salvage/trash/storage separado
  -> drops stackaveis
      -> ME Storage especializado
```

Nunca jogue tudo direto no ME principal.

## 25.10. Fabrica 10 - Stock Keeper Hub com ME Requester

**Objetivo:** manter itens criticos sempre disponiveis.

Componentes:

- ME Requester.
- ME Requester Terminal.
- Patterns completos.
- Maquinas de processing funcionando.
- CPU suficiente.

Estoque sugerido:

- 512 Certus Quartz Crystal.
- 512 Fluix Crystal.
- 256 Printed Silicon.
- 256 Logic Processor.
- 256 Calculation Processor.
- 128 Engineering Processor.
- 256 Blank Patterns.
- 256 ME Glass Cable.
- 128 Smart Cable.
- 64 Import/Export/Storage Buses.

## 25.11. Fabrica 11 - Draconic Fusion Automation

**Objetivo:** automatizar Fusion Crafting do Draconic Evolution.

Componentes:

- Fusion Crafting Core.
- Fusion Crafting Injectors.
- ME Draconic Pattern Provider.
- Processing patterns.
- Energia endgame.

Fluxo:

```text
AE2 request
  -> ME Draconic Pattern Provider
  -> catalyst no Fusion Crafting Core
  -> ingredientes nos Fusion Crafting Injectors
  -> craft
  -> output volta ao ME
```

## 25.12. Fabrica 12 - Rede espacial/interdimensional

**Objetivo:** conectar cidade, dimensoes e bases de exploracao.

Componentes:

- Quantum Bridge.
- Dimension Card/Infinity Range Card, se liberados.
- Energy Cells nos dois lados.
- Chunkloading permitido.
- Dense/P2P backbone.

Uso:

- Stellaris/space program.
- Outposts de bosses.
- Farm dimensions.
- Usinas distantes.

---

# 26. HOT TOPICS - itens e maquinas muito fortes

Esta secao lista os recursos mais fortes, uteis ou perigosos do AE2 e addons em survival multiplayer.

## 26.1. Crafting Terminal

**Por que e forte:** transforma a rede em storage + crafting central. Deve ser o primeiro upgrade de terminal.

**Quando fazer:** assim que a primeira rede ME ligar.

## 26.2. Flawless Budding Certus

**Por que e forte:** fonte infinita e estavel de Certus sem degradar.

**Quando usar:** early game, como base da farm de Certus.

**Cuidado:** nao quebrar sem entender a mecanica.

## 26.3. Growth Accelerator

**Por que e forte:** acelera Certus, que e gargalo inicial.

**Quando fazer:** antes mesmo de expandir storage.

## 26.4. Pattern Encoding Terminal

**Por que e forte:** abre autocrafting real.

**Quando fazer:** depois do storage inicial e processors basicos.

## 26.5. Pattern Provider + Molecular Assembler

**Por que e forte:** automatiza craftings repetitivos. E o coracao do autocrafting basico.

**Uso ideal:** cabos, processors, buses, components e blocos de construcao.

## 26.6. ME Requester

**Por que e forte:** mantem estoque minimo automaticamente. Em servidor, isso transforma AE2 em almoxarifado publico.

**Uso ideal:** processors, cabos, plates, food, boss prep, rockets, fuels.

## 26.7. MEGA Bulk Item Storage Cell

**Por que e forte:** resolve bulk de um item em escala absurda.

**Uso ideal:** cobblestone, dirt, logs, ingots comuns, recursos de quarry/farms.

## 26.8. ExtendedAE 36-slot Pattern Provider / Interface

**Por que e forte:** reduz blocos, canais e bagunca em walls de autocrafting.

**Uso ideal:** mid/late game quando voce tem centenas de patterns.

## 26.9. AE2 Things Advanced Inscriber

**Por que e forte:** processors deixam de ser gargalo chato.

**Uso ideal:** automatizar Printed Silicon e circuits.

## 26.10. AE2 Things DISK

**Por que e forte:** lida com muitos types melhor que cells comuns.

**Uso ideal:** storage variado quando type limit incomoda.

**Cuidado:** nao usar como lixeira de NBT sem filtro.

## 26.11. P2P Backbone

**Por que e forte:** permite redes enormes sem corredor gigante de dense cables.

**Uso ideal:** distritos da cidade, fabricas remotas, usina, espaco.

## 26.12. Quartz Fiber

**Por que e forte:** alimenta subnets sem conectar redes.

**Uso ideal:** qualquer subnet seria.

## 26.13. Level Emitter com Crafting Card

**Por que e forte:** permite controlar farms e manter recursos sob demanda.

**Exemplo:** ligar cobblestone generator quando cobble < 10000.

## 26.14. Quantum Network Bridge

**Por que e forte:** rede entre dimensoes e distancias infinitas.

**Uso ideal:** base espacial, outposts e usinas remotas.

**Cuidado:** chunkloading e energia nos dois lados.

## 26.15. Infinity Range Card e Dimension Card

**Por que e forte:** acesso remoto praticamente absoluto.

**Uso ideal:** late game, exploracao e espaco.

**Balanceamento:** nao liberar cedo demais.

## 26.16. AppliedFlux FE Cells

**Por que e forte:** transforma AE2 em banco de energia FE.

**Uso ideal:** megabase com Powah/MI/Ender IO.

## 26.17. Applied Create Brass Pattern Provider

**Por que e forte:** automatiza Mechanical Crafters sem gambiarras.

**Uso ideal:** manter Create vivo no endgame.

## 26.18. Advanced AE Quantum Computer

**Por que e forte:** autocrafting massivo, paralelo e escalavel.

**Uso ideal:** infraestrutura publica/endgame.

**Balanceamento:** tratar como megaprojeto.

## 26.19. Advanced AE Quantum Crafter

**Por que e forte:** crafting extremamente rapido, com suporte a casos recursivos e ingredientes nao consumidos.

**Uso ideal:** recipes especiais e producao de alto tier.

## 26.20. Advanced AE Quantum Armor

**Por que e forte:** defesa alta e QoL conectado ao ME System: voo, magnet, auto feeding e outras funcoes.

**Balanceamento:** endgame. Pode trivializar exploracao e combate se liberada cedo.

## 26.21. AE2 Draconic Fusion Autocrafter

**Por que e forte:** remove a parte mais chata/frágil de automatizar Fusion Crafting.

**Uso ideal:** Draconic Evolution endgame.

## 26.22. Polymorphic Energistics

**Por que e forte:** evita patterns errados em modpack grande com receitas conflitantes.

**Uso ideal:** sempre que houver recipes duplicadas.

## 26.23. Matter Condenser

**Por que e forte:** descarte controlado e singularities.

**Uso ideal:** overflow de farms e Quantum Entangled Singularity.

**Cuidado:** descarte sempre deve ser consciente.

---

# 27. Integracao com MI, Create, Oritech, Ender IO, Powah e Draconic

## 27.1. AE2 + Modern Industrialization

Papel:

- AE2 solicita.
- MI processa.
- AE2 recebe e organiza.

Automacoes prioritarias:

- Ingots -> plates.
- Ingots -> rods/gears/casings.
- Raw ores -> dusts/ingots.
- Steel/stainless components.
- Circuits e machine hulls.
- Fluids de refinaria.

Design recomendado:

```text
AE2 Pattern Provider
  -> buffer de input
  -> MI machine/multiblock
  -> buffer de output
  -> Import Bus/Interface
  -> ME network
```

Use ME Requester para manter estoque de plates, steel, circuits e cabos.

## 27.2. AE2 + Create

Papel:

- Create faz fabricas visuais.
- AE2 faz pedidos, storage e autocrafting.
- Applied Create conecta Mechanical Crafters e stress.

Automacoes prioritarias:

- Blocos decorativos em massa.
- Crafts em Mechanical Crafters.
- Andesite/Brass components.
- Rails/tracks/trains.
- Processamento visual que vale manter aparente.

Regra de identidade: nao esconda tudo em uma parede AE2. Deixe fabricas Create importantes visiveis como marcos da cidade.

## 27.3. AE2 + Oritech

Papel:

- AE2 controla recipes e estoque.
- Oritech processa recursos e maquinas especificas.

Recomendacao:

- Use processing patterns para cada maquina importante.
- Use buffers para evitar input misturado.
- Use Advanced AE se a maquina exigir lados especificos.

## 27.4. AE2 + Ender IO

Papel:

- Ender IO oferece conduits/logistica compacta.
- AE2 oferece storage e autocrafting.

Uso ideal:

- Conduits para mover itens/fluidos/energia dentro de uma fabrica.
- AE2 apenas nos pontos de entrada/saida.
- Evitar 20 Import/Export Buses onde uma linha de conduits e suficiente.

## 27.5. AE2 + Powah

Papel:

- Powah gera FE.
- AE2 consome AE convertido e, com AppliedFlux, pode armazenar FE.

Uso ideal:

- Energizar rede central.
- Carregar AppliedFlux cells.
- Alimentar Quantum Bridge, autocrafting e fabricas.

## 27.6. AE2 + Draconic Evolution

Papel:

- Draconic Evolution e endgame poderoso.
- AE2 controla componentes e fusion crafting.
- AE2 Draconic Fusion Autocrafter simplifica automacao.

Recomendacao:

- Nao automatizar Draconic sem energia robusta.
- Separar area de fusion em sala propria.
- Usar ME Draconic Pattern Provider.
- Monitorar recursos raros com ME Requester/Throughput Monitor.

## 27.7. AE2 + Stellaris/space

Papel:

- AE2 fornece storage remoto, craft de foguetes/componentes e suporte de expedicao.

Uso ideal:

- Quantum Bridge para base espacial.
- Dimension Card para acesso remoto.
- ME Requester para manter combustivel, comida, oxygen/space supplies quando aplicavel.
- Bulk storage para materiais de base lunar/espacial.

---

# 28. Checklists de progresso e estoque

## 28.1. Checklist Early AE2

- [ ] Meteorite Compass.
- [ ] Primeiro meteorito encontrado.
- [ ] Mysterious Cube quebrado.
- [ ] 4 presses principais guardados.
- [ ] Certus Quartz coletado.
- [ ] Budding Certus protegido.
- [ ] Charger feito.
- [ ] Fluix produzido.
- [ ] Inscriber feito.
- [ ] Printed Silicon produzido.
- [ ] Logic/Calculation/Engineering Processors feitos.
- [ ] ME Drive feito.
- [ ] Energy Acceptor feito.
- [ ] Crafting Terminal feito.
- [ ] 1k/4k cells feitas.

## 28.2. Checklist Mid AE2

- [ ] Energy Cell na rede.
- [ ] ME Controller instalado.
- [ ] Smart Cables usados para diagnostico.
- [ ] Dense Cable backbone.
- [ ] Pattern Encoding Terminal.
- [ ] Pattern Provider.
- [ ] Molecular Assemblers.
- [ ] Crafting CPU 4k/16k.
- [ ] Processor automation.
- [ ] Certus farm automatica.
- [ ] Import/Export/Storage Bus patterns.
- [ ] Primeiros processing patterns para MI/Create/Oritech.

## 28.3. Checklist Late AE2

- [ ] P2P backbone.
- [ ] Subnets por funcao.
- [ ] ME Requester instalado.
- [ ] MEGA Cells para bulk.
- [ ] ExtendedAE providers/interfaces.
- [ ] AE2 Things Advanced Inscriber/Crystal Growth Chamber.
- [ ] AppliedFlux para energia, se aplicavel.
- [ ] Applied Create para Mechanical Crafters.
- [ ] Mob farm filter antes do ME.
- [ ] Storage priorities documentadas.

## 28.4. Checklist Endgame AE2

- [ ] Quantum Network Bridge.
- [ ] Rede entre dimensoes documentada.
- [ ] Infinity Range/Dimension Cards.
- [ ] Advanced AE Quantum Computer.
- [ ] Quantum Crafter para recipes especiais.
- [ ] Draconic Fusion Autocrafter.
- [ ] MEGA CPUs grandes.
- [ ] Throughput Monitor para recursos criticos.
- [ ] Sistema de estoque publico da cidade.
- [ ] Backup/energia redundante.

## 28.5. Estoque minimo sugerido com ME Requester

| Item | Estoque inicial | Estoque late |
|---|---:|---:|
| Certus Quartz Crystal | 512 | 4096 |
| Charged Certus Quartz | 128 | 1024 |
| Fluix Crystal | 512 | 4096 |
| Fluix Dust | 256 | 2048 |
| Printed Silicon | 256 | 2048 |
| Logic Processor | 128 | 1024 |
| Calculation Processor | 128 | 1024 |
| Engineering Processor | 64 | 512 |
| Blank Pattern | 128 | 2048 |
| ME Glass Cable | 256 | 2048 |
| Smart Cable | 128 | 1024 |
| Dense Smart Cable | 32 | 256 |
| Import Bus | 16 | 128 |
| Export Bus | 16 | 128 |
| Storage Bus | 16 | 128 |
| Pattern Provider | 16 | 256 |
| Molecular Assembler | 16 | 256 |
| Energy Cell | 4 | 32 |
| Storage Component 4k | 16 | 128 |
| Storage Component 16k | 8 | 128 |
| Storage Component 64k | 4 | 64 |

Ajuste os numeros conforme consumo real do servidor.

---

# 29. Performance e regras de servidor

AE2 pode ser muito leve quando bem planejado e muito ruim quando usado como lixeira infinita.

## 29.1. Regras de performance

1. **Nao jogar NBT/unstackables brutos no ME.**
   - Filtrar mob farms.
   - Separar ferramentas/armaduras danificadas.
   - Usar trash/salvage antes da rede.

2. **Evitar loops de import/export.**
   - Nao exportar de um inventario que a mesma rede importa sem controle.
   - Usar redstone/level emitters/blocking mode.

3. **Usar subnets para sistemas repetitivos.**
   - Farm de Certus.
   - Ore processing paralelo.
   - Mob farm.
   - Formation/Annihilation planes.

4. **Particionar bulk.**
   - Cobble/dirt/logs/ores devem ter storage especializado.
   - MEGA Bulk Cells ou Storage Bus externo sao melhores que cells gerais.

5. **Planejar channels em arvore.**
   - Dense backbone.
   - Smart branches.
   - Evitar loops.

6. **Documentar P2P.**
   - Nomear entradas/saidas.
   - Usar placas.
   - Manter painel de frequencias.

7. **Cuidado com ME Requester.**
   - Estoque alto demais pode manter CPUs ocupadas para sempre.
   - Comece pequeno e aumente.

8. **Chunkloading com criterio.**
   - Quantum Bridge e fabricas remotas precisam de chunks carregados.
   - Cada chunkloaded farm deve ter dono e motivo.

## 29.2. Cultura de servidor

Para rede publica da cidade:

- Nomeie Pattern Providers importantes.
- Mantenha sala de controller acessivel.
- Tenha quadro com canais usados por distrito.
- Separe rede publica e redes privadas quando necessario.
- Nao altere patterns publicos sem avisar.
- Nao coloque trash/overflow sem label.
- Nao conecte mob farm direto na rede central.

## 29.3. Diagnostico

Use:

- Network Tool.
- Smart Cable / Dense Smart Cable.
- Crafting Monitor.
- Pattern Access Terminal.
- ME Throughput Monitor, se Advanced AE estiver liberado.
- Jade.
- spark no servidor para profiling.

---

# 30. Sugestao de capitulos para FTB Quests

## Capitulo 1 - O primeiro sinal ME

Quests:

1. Craft Meteorite Compass.
2. Encontre meteorito.
3. Quebre Mysterious Cube.
4. Colete Certus.
5. Faca Charger.
6. Produza Fluix.
7. Faca Inscriber.
8. Faca primeiro processor.

## Capitulo 2 - Storage digital

Quests:

1. Energy Acceptor.
2. ME Drive.
3. 1k Storage Cell.
4. Crafting Terminal.
5. Energy Cell.
6. Cell Workbench.
7. Particione uma cell.

## Capitulo 3 - Channels e rede organizada

Quests:

1. Smart Cable.
2. ME Controller.
3. Dense Cable.
4. Network Tool.
5. Diagnosticar channel usage.

## Capitulo 4 - Autocrafting

Quests:

1. Pattern Encoding Terminal.
2. Blank Patterns.
3. Pattern Provider.
4. Molecular Assembler.
5. Crafting CPU.
6. Primeiro autocraft.
7. Processor automation.

## Capitulo 5 - Processing industrial

Quests:

1. Processing Pattern.
2. Automatizar plate de MI.
3. Automatizar Create component.
4. Automatizar ore processing.
5. Usar blocking mode.

## Capitulo 6 - Storage de cidade

Quests:

1. ME Requester.
2. MEGA Cells.
3. Bulk Cell.
4. ExtendedAE 36-slot Provider.
5. AE2 Things Advanced Inscriber.
6. Mob farm filter.

## Capitulo 7 - Redes avancadas

Quests:

1. Subnet com Quartz Fiber.
2. P2P Tunnel.
3. Quantum Network Bridge.
4. Infinity Range Card.
5. Dimension Card.

## Capitulo 8 - Endgame AE2

Quests:

1. Advanced AE Quantum Computer.
2. Quantum Crafter.
3. AppliedFlux energy storage.
4. Applied Create Mechanical Crafting.
5. Draconic Fusion Autocrafting.
6. Rede interdimensional para o programa espacial.

---

# 31. Notas para mantenedores do wiki

## 31.1. Estrutura sugerida de paginas

Arquivos sugeridos:

```text
src/components/guides/AppliedEnergisticsGuide.jsx
src/data/guides/appliedEnergistics.js
src/data/recipes/ae2Recipes.js
src/data/recipes/ae2AddonRecipes.js
```

Se o wiki estiver usando Markdown/MDX, este arquivo pode virar:

```text
content/guides/applied-energistics-2.md
content/guides/ae2-addons.md
content/guides/ae2-hot-topics.md
```

## 31.2. Paginas menores recomendadas

- AE2 - Primeira rede ME.
- AE2 - Meteoritos e Certus.
- AE2 - Storage Cells, Bytes e Types.
- AE2 - Channels e Controller.
- AE2 - Autocrafting basico.
- AE2 - Processing Patterns.
- AE2 - Subnets.
- AE2 - P2P.
- AE2 - Quantum Bridge.
- AE2 - Addons do Astron City.
- AE2 - Hot Topics.
- AE2 - Performance em servidor.

## 31.3. Componentes visuais uteis no Wiki

- Cards de progressao por fase.
- Checklist clicavel.
- Tabelas de stock minimo.
- Diagramas simples de fluxo.
- Tabs por addon.
- Alert boxes para “Cuidado com NBT”, “Nao quebre Flawless Budding Certus”, “Use EMI/JEI”.
- Cards de HOT TOPICS.

## 31.4. Tags sugeridas

```text
ae2, storage, autocrafting, channels, p2p, subnet,
quantum-bridge, megacells, extendedae, advanced-ae,
applied-create, appliedflux, me-requester, ae2-things,
draconic
```

---

# 32. Fontes e observacoes de precisao

Este guia foi feito para o Astron City 1.21.1 NeoForge, usando a lista de mods conhecida do pack e documentacao publica dos mods. Como o pack usa muitos mods de receitas e integracao, **receitas exatas devem sempre ser confirmadas no EMI/JEI do servidor**.

Fontes principais consultadas:

- AE2 Players Guide 1.21.1 - pagina inicial: https://guide.appliedenergistics.org/1.21.1/index
- AE2 Players Guide 1.21.1 - Getting Started: https://guide.appliedenergistics.org/1.21.1/getting-started
- AE2 Players Guide 1.21.1 - Channels: https://guide.appliedenergistics.org/1.21.1/ae2-mechanics/channels
- AE2 Players Guide 1.21.1 - Autocrafting: https://guide.appliedenergistics.org/1.21.1/ae2-mechanics/autocrafting
- AE2 Players Guide 1.21.1 - Bytes and Types: https://guide.appliedenergistics.org/1.21.1/ae2-mechanics/bytes-and-types
- AE2 Players Guide 1.21.1 - Energy: https://guide.appliedenergistics.org/1.21.1/ae2-mechanics/energy
- AE2 Players Guide 1.21.1 - Import, Export, and Storage: https://guide.appliedenergistics.org/1.21.1/ae2-mechanics/import-export-storage
- AE2 Players Guide 1.21.1 - P2P Tunnels: https://guide.appliedenergistics.org/1.21.1/items-blocks-machines/p2p_tunnels
- AE2 Players Guide 1.21.1 - Quantum Bridge: https://guide.appliedenergistics.org/1.21.1/items-blocks-machines/quantum_bridge
- AE2 Players Guide 1.21.1 - Storage Cells: https://guide.appliedenergistics.org/1.21.1/items-blocks-machines/storage_cells
- AE2 Players Guide 1.21.1 - Terminals: https://guide.appliedenergistics.org/1.21.1/items-blocks-machines/terminals
- AE2 Players Guide 1.21.1 - Wireless Terminals: https://guide.appliedenergistics.org/1.21.1/items-blocks-machines/wireless_terminals
- Advanced AE - CurseForge/Modrinth project pages.
- ExtendedAE - CurseForge/Modrinth project pages.
- AE2 Things - CurseForge/Modrinth project pages.
- AEInfinityBooster - CurseForge project page.
- MEGA Cells - CurseForge/Modrinth project pages.
- ME Requester - CurseForge/Modrinth project pages.
- AppliedFlux - CurseForge project page.
- Applied Create - CurseForge/Modrinth project pages.
- AE2 Draconic Fusion Autocrafter - CurseForge/GitHub project pages.
- Polymorphic Energistics - CurseForge/Modrinth project pages.

Precisao e limites:

- Este guia evita fixar receitas que podem mudar por KubeJS, AlmostUnified, JAOPCA ou updates dos mods.
- Nomes de alguns itens de addons podem variar levemente por versao/localizacao; confirme no EMI/JEI.
- Configuracoes de channels, chunkloading, energia, storage e limites podem ser alteradas pelo servidor.
- Para balanceamento do Astron City, AE2 deve ser tratado como objetivo de infraestrutura de longo prazo, nao como bypass de toda logistica visual do Create.

---

# Conclusao

AE2 e a espinha dorsal logistica do Astron City. Um jogador pode usar apenas o basico e ja ganhar uma base organizada; um engenheiro pode transformar AE2 em uma rede de cidade com autocrafting, stockkeeping, fabricas, subnets, P2P, quantum bridge, storage massivo e integracao com quase todos os grandes mods do pack.

A regra final e simples:

**AE2 nao deve matar a cidade. AE2 deve fazer a cidade funcionar.**
