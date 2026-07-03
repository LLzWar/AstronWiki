---
title: "Iron's Spells 'n Spellbooks - Guia Completo"
modpack: "ASTRON CITY"
minecraft: "1.21.1"
loader: "NeoForge"
mods_cobertos:
  - "Iron's Spells 'n Spellbooks 1.21.1-3.16.1"
  - "Iron's Lib 1.21.1-1.1.0"
  - "Iron's Apothic 2.2.0"
  - "Iron's Gems 'n Jewelry 1.21.1-2.0.1"
  - "Iron's Spells x Sable Compat 1.0.4"
  - "Ice and Fire: Spellbooks 2.3.3-1.21.1"
  - "Sable 2.0.3"
  - "Apotheosis / Apothic suite"
  - "Artifacts / Relics / Curios API"
  - "Better Combat / Combat Roll"
status: "Guia wiki-ready"
ultima_revisao: "2026-07-01"
---

# Iron's Spells 'n Spellbooks - Guia Completo para o Astron City

> Guia escrito para o **ASTRON CITY**, um modpack NeoForge 1.21.1 de tecnologia, aventura, magia, bosses, dungeons, espaço, construção coletiva e progressão longa em servidor survival.
>
> Este guia cobre **Iron's Spells 'n Spellbooks** e suas integrações relevantes dentro do pack, com foco em progressão step-by-step, escolas de magia, spells, scrolls, spellbooks, armaduras, curios, estruturas, bosses, loot, builds, farms, HOT TOPICS e boas práticas para multiplayer.

---

## Sumário

1. [O que é Iron's Spells no Astron City](#1-o-que-e-irons-spells-no-astron-city)
2. [Mods cobertos e papel de cada integração](#2-mods-cobertos-e-papel-de-cada-integracao)
3. [Como usar este guia](#3-como-usar-este-guia)
4. [Glossário rápido](#4-glossario-rapido)
5. [Mapa de progressão completo](#5-mapa-de-progressao-completo)
6. [Fundamentos: mana, scrolls, spellbooks e escolas](#6-fundamentos-mana-scrolls-spellbooks-e-escolas)
7. [Recursos mágicos e onde conseguir](#7-recursos-magicos-e-onde-conseguir)
8. [Crafting stations: mesa, forge, anvil e cauldron](#8-crafting-stations-mesa-forge-anvil-e-cauldron)
9. [Early Game - primeiro mago funcional](#9-early-game---primeiro-mago-funcional)
10. [Mid Game - [item:Scroll] Forge, Nether e especialização](#10-mid-game---scroll-forge-nether-e-especializacao)
11. [Late Game - [item:Arcane Anvil], bosses e upgrades](#11-late-game---arcane-anvil-bosses-e-upgrades)
12. [End Game - builds completas e magia de servidor](#12-end-game---builds-completas-e-magia-de-servidor)
13. [Escolas de magia](#13-escolas-de-magia)
14. [Catálogo completo de spells por escola](#14-catalogo-completo-de-spells-por-escola)
15. [Spellbooks, staves e armas mágicas](#15-spellbooks-staves-e-armas-magicas)
16. [Armaduras e especialização por escola](#16-armaduras-e-especializacao-por-escola)
17. [Curios, rings, amulets e acessórios](#17-curios-rings-amulets-e-acessorios)
18. [Estruturas, dungeons e rotas de exploração](#18-estruturas-dungeons-e-rotas-de-exploracao)
19. [Bosses e encontros importantes](#19-bosses-e-encontros-importantes)
20. [Builds recomendadas](#20-builds-recomendadas)
21. [Farms e soluções populares de survival](#21-farms-e-solucoes-populares-de-survival)
22. [HOT TOPICS - o que é muito forte e útil](#22-hot-topics---o-que-e-muito-forte-e-util)
23. [Integrações com outros mods do Astron City](#23-integracoes-com-outros-mods-do-astron-city)
24. [Checklists de progresso e estoque](#24-checklists-de-progresso-e-estoque)
25. [Performance e regras de servidor](#25-performance-e-regras-de-servidor)
26. [Sugestão de capítulos para FTB Quests](#26-sugestao-de-capitulos-para-ftb-quests)
27. [Notas para mantenedores do wiki](#27-notas-para-mantenedores-do-wiki)
28. [Fontes e observações de precisão](#28-fontes-e-observacoes-de-precisao)

---

<div class="mc-recipe" style="margin: 2rem auto;">
  <div class="mc-grid">
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
    <div class="mc-slot" title="Amethyst Shard"><img src="/assets/sprites/amethyst_shard.png" alt="Amethyst Shard" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Book"><img src="/assets/sprites/book.png" alt="Book" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Amethyst Shard"><img src="/assets/sprites/amethyst_shard.png" alt="Amethyst Shard" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Oak Planks"><img src="/assets/sprites/oak_planks.png" alt="Planks" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Oak Planks"><img src="/assets/sprites/oak_planks.png" alt="Planks" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot" title="Oak Planks"><img src="/assets/sprites/oak_planks.png" alt="Planks" onError="this.src='/assets/sprites/barrier.png'" /></div>
  </div>
  <div class="mc-arrow"></div>
  <div class="mc-result" title="[item:Inscription Table]"><img src="/assets/sprites/inscription_table.png" alt="Inscription Table" onError="this.src='/assets/sprites/barrier.png'" /></div>
</div>

# 1. O que é Iron's Spells no Astron City

**Iron's Spells 'n Spellbooks** é o principal mod de magia ativa do Astron City. Ele transforma magia em uma progressão real: o jogador encontra scrolls, coloca spells em spellbooks, melhora equipamentos, explora estruturas mágicas, enfrenta magos e bosses, escolhe escolas de magia e cria uma identidade de classe dentro do servidor.

No Astron City, o mod deve ser tratado como uma das rotas principais de RPG. Ele não substitui Create, AE2, Modern Industrialization ou Oritech; ele cria uma função diferente para o jogador: **mago, suporte, necromante, battle mage, explorador arcano, boss hunter ou híbrido espada + magia**.

A fantasia do mod dentro do pack é:

> **Virar um especialista arcano em um mundo industrial-fantasia, capaz de apoiar expedições, controlar multidões, curar aliados, dar burst em bosses, explorar estruturas perigosas e adicionar personalidade mágica à cidade.**

## 1.1. Papel no ecossistema do pack

| Sistema | Papel |
|---|---|
| Iron's Spells | Magia ativa, spells, scrolls, spellbooks, armaduras de escola, bosses e estruturas mágicas. |
| Iron's Apothic | Ponte temática entre Iron's e o ecossistema Apothic/Apotheosis quando aplicável no pack. |
| Iron's Gems 'n Jewelry | Joias/gemas para identidade RPG, acessórios e sinergia de personagem. |
| Iron's Spells x Sable Compat | Compatibilidade entre Iron's Spells e Sable. |
| Ice and Fire: Spellbooks | Ponte temática entre dragões/Ice and Fire e spellcasting. |
| Apotheosis / Apothic | Affixes, gems, encantamento avançado e progressão de gear. |
| Artifacts / Relics / Curios | Curios e acessórios que mudam builds e sobrevivência. |
| Better Combat / Combat Roll | Combate dinâmico; ótimo para battle mage e magia corpo a corpo. |
| AE2 / Create / MI | Produção, storage e automação de materiais mágicos, elixires e recursos. |

---

# 2. Mods cobertos e papel de cada integração

| Mod | Versão no pack | Papel no guia |
|---|---:|---|
| Iron's Spells 'n Spellbooks | 1.21.1-3.16.1 | Core: spells, scrolls, spellbooks, escolas, boss fights, estruturas e equipamentos. |
| Iron's Lib | 1.21.1-1.1.0 | Biblioteca necessária para conteúdo Iron. |
| Iron's Apothic | 2.2.0 | Integração temática/técnica com o ecossistema Apothic. |
| Iron's Gems 'n Jewelry | 1.21.1-2.0.1 | Joias e customização de personagem, útil para builds mágicas/RPG. |
| Iron's Spells x Sable Compat | 1.0.4 | Compatibilidade entre Iron's Spells e Sable. |
| Ice and Fire: Spellbooks | 2.3.3-1.21.1 | Ponte entre Ice and Fire e spellcasting. |
| Sable | 2.0.3 | Conteúdo RPG/mágico adicional compatível. |
| Curios API | 9.5.1+1.21.1 | Slots de acessórios: rings, necklaces, charms e curios. |
| Apotheosis / Apothic | 8.5.4+ | Encantamento, affixes, gems, boss gear e atributos. |
| Better Combat / Combat Roll | 2.3.2 / 2.0.6 | Movimento e combate mais responsivos para builds híbridas. |
| EMI / JEI / Jade | vários | Consulta de receitas, loot, mobs e blocos in-game. |

## 2.1. O que este guia cobre

Este guia cobre:

- progressão de magia do zero ao endgame;
- Inscription Table, Scroll Forge, Arcane Anvil e Alchemist Cauldron;
- recursos importantes: Arcane Essence, Arcane Cloth, inks, runestones, runes, cinder essence, divine soulshards, mithril, pyrium e focuses;
- todas as escolas de magia e seus papéis;
- catálogo completo de spells por escola;
- spellbooks, staves, armas, armaduras e curios;
- estruturas mágicas e rotas de exploração;
- boss progression: Catacombs, Dead King *(Consulte o Bestiário para estatísticas completas)*, Citadel e Echo of Tyros;
- builds práticas para survival multiplayer;
- farms e soluções populares;
- HOT TOPICS com spells/itens muito fortes;
- integração com Apotheosis, Artifacts, Relics, Iron's Gems, Silent Gear, Cataclysm, Ice and Fire, AE2, Create e tech mods.

## 2.2. O que precisa ser confirmado no EMI/JEI

Receitas, valores exatos de atributos, peso de loot, drop rates e configs podem mudar com atualizações, datapacks, KubeJS ou ajustes de servidor. Use este guia como roteiro estratégico e confirme no **EMI/JEI/Jade** do Astron City antes de gastar recursos raros.

---

# 3. Como usar este guia

A melhor forma de usar Iron's Spells no Astron City é pensar em **papéis de personagem**, não só em “qual spell dá mais dano”.

| Tipo de jogador | Caminho recomendado |
|---|---|
| Jogador novo | Flimsy Journal + Inscription Table + spells simples de dano/mobilidade. |
| Explorador | Ender, Evocation e Holy para mobilidade, Recall, Teleport, Invisibility, Heal e Shield. |
| Boss hunter | Fire, Lightning, Blood e Nature para burst, armor shred, sustain e debuffs. |
| Suporte de grupo | Holy + Evocation: Heal, Healing Circle, Fortify, Cleanse, Haste, Shield. |
| Necromante | Blood: Raise Dead, Ray of Siphoning, Blood Step, Sacrifice, Necronomicon. |
| Battle mage | Spells que escalam com arma: Shadow Slash, Flaming Strike, Divine Smite, Raise Hell, Volt Strike. |
| Utility mage | Spectral Hammer, Touch Dig, Portal, Summon Ender Chest, Recall, Summon Horse. |
| Endgame mage | Armadura de escola + spellbook avançado + curios + upgrades + affixes/gems. |

> Regra de ouro: **não monte um livro só de dano**. Todo spellbook bom precisa de dano, defesa, mobilidade e utilidade.

---

# 4. Glossário rápido

| Termo | Significado |
|---|---|
| Mana | Recurso usado para castar spells. Aumenta com spellbooks, armaduras, curios e atributos. |
| Max Mana | Tamanho total da barra de mana. Essencial para spells caras como Black Hole, Pocket Dimension e Angel Wing. |
| Mana Regeneration | Velocidade de recuperação da mana. Muito importante para exploração longa e lutas de boss. |
| Spell Power | Multiplicador geral de poder mágico. Pode ser geral ou por escola. |
| School Power | Bônus específico de uma escola, como Fire Spell Power ou Ice Spell Power. |
| Cooldown Reduction | Reduz tempo entre casts. Forte para burst e rotação de spells. |
| Cast Time Reduction | Reduz tempo de canalização/conjuração. Forte para spells Long. |
| Spell Resistance | Reduz dano mágico recebido. Importante contra magos, bosses e PvP se houver. |
| Scroll | Item consumível ou usado para colocar uma spell em um spellbook. |
| Spellbook | Item equipado em slot próprio para guardar e castar várias spells. |
| Inscription Table | Coloca spells de scrolls em spellbooks. |
| Scroll Forge | Cria scrolls usando ink, paper e focus. |
| Arcane Anvil | Upgrades de scrolls, armaduras, spellbooks e weapon imbuement. |
| Focus | Item temático usado para craftar scrolls de uma escola. |
| Ink | Define raridade/nível mínimo do scroll craftado no Scroll Forge. |
| Rune | Item de escola usado em armaduras, spellbooks e progressão. |
| Imbuement | Spell colocada em arma/peça compatível. Normalmente há limite e decisão é importante. |
| [item:Upgrade Orb] | Item usado para melhorar spellbooks/armaduras, normalmente ligado ao late game. |

---

# 5. Mapa de progressão completo

## 5.1. Progressão macro

```text
Sobrevivência inicial
  -> loot mágico em estruturas
  -> primeiro spellbook / Flimsy Journal
  -> Inscription Table
  -> spells básicas de dano, cura e mobilidade
  -> exploração de towers/huts/forts
  -> Arcane Essence, Ink, Runestones e Scrolls
  -> Nether resources
  -> Scroll Forge
  -> Apprentice [item:Spell Book] / Enchanted Spell Book
  -> armadura Wandering Magician / Wizard armor
  -> Catacombs + Dead King
  -> Arcane Anvil
  -> Upgrade Orbs / imbuements / school armor
  -> Citadel + Echo of Tyros
  -> builds endgame por escola
  -> integração com Apotheosis, Relics, Iron's Gems e gear lendário
```

## 5.2. Etapas práticas por era

| Era | Objetivo | Resultado esperado |
|---|---|---|
| Pré-magia | Encontrar loot mágico e scrolls | Primeiros scrolls, Arcane Essence, Ink e talvez Flimsy Journal. |
| Early Magic | Fazer Inscription Table | Spellbook utilizável com 2-4 spells. |
| Early Adventure | Explorar estruturas mágicas | Runes, scrolls melhores, armor inicial, recursos mágicos. |
| Mid Magic | Entrar no Nether e fazer Scroll Forge | Craft controlado de scrolls por escola. |
| Mid RPG | Criar spellbook/armor melhores | Build com foco: suporte, dano, mobilidade ou summons. |
| Late Magic | Fazer Arcane Anvil e upgrades | Melhorar scrolls, armor, books e imbue weapons. |
| Boss Progression | Catacombs e Dead King | Blood Staff, Necronomicon, shards, chaves e recursos raros. |
| Nether Boss | Citadel e Echo of Tyros | Divine Soulshards, loot de vault, gear avançado. |
| Endgame | School armor + curios + Apotheosis | Build especializada para bosses, exploração e suporte de grupo. |

## 5.3. Ordem recomendada para um jogador novo

1. Sobreviva normalmente até iron/gold/diamond básico.
2. Procure estruturas mágicas pequenas e loot de scrolls.
3. Faça ou encontre um spellbook inicial.
4. Faça a **Inscription Table**.
5. Coloque no livro pelo menos uma spell de dano e uma de utilidade.
6. Farme **Arcane Essence** e **Ink** em estruturas e mobs mágicos.
7. No Nether, busque recursos para **Scroll Forge**.
8. Escolha uma escola principal: Fire, Lightning, Holy, Ender, Blood, Ice, Evocation ou Nature.
9. Faça armor de mago e/ou school armor.
10. Prepare-se para Catacombs com diamond/enchanted gear.
11. Derrote Dead King em grupo.
12. Use Arcane Anvil para upgrades e imbuements.
13. Avance para Citadel/Echo of Tyros.
14. Misture com Apotheosis, Iron's Gems, Relics e Cataclysm para endgame.

---

# 6. Fundamentos: mana, scrolls, spellbooks e escolas

## 6.1. Mana

Mana é o combustível da magia. Sem mana suficiente, o jogador fica reduzido a ataques físicos ou spells de baixo custo.

Prioridades de mana:

| Prioridade | Por quê |
|---|---|
| Max Mana | Permite castar spells caras e usar combos em lutas longas. |
| Mana Regeneration | Mantém rotação de spells sem depender de pausa. |
| Cooldown Reduction | Aumenta frequência de spells fortes. |
| Cast Time Reduction | Permite castar spells Long sem ser interrompido. |
| Spell Power | Escala dano, cura, summon power e efeitos. |

## 6.2. Scrolls

Scrolls são a base da progressão. Eles podem ser encontrados em loot e também fabricados no Scroll Forge depois do mid game.

Uso principal:

- cast único quando usado como scroll;
- colocado em spellbook pela Inscription Table;
- combinado/upado no Arcane Anvil;
- usado para configurar affinity rings ou imbuements em alguns casos.

## 6.3. Raridade e nível

Spells possuem raridade e nível. De forma prática:

| Raridade | Interpretação |
|---|---|
| Common | Spells comuns, geralmente low-cost e úteis desde cedo. |
| Uncommon | Spells mais especializadas. |
| Rare | Spells fortes de mid game. |
| Epic | Spells muito impactantes, normalmente com cooldown maior. |
| Legendary | Spells endgame ou extremamente poderosas. |

O **Ink** usado no Scroll Forge define a raridade/nível mínimo do scroll craftado. Quanto mais raro o Ink, mais difícil de sustentar a produção em massa.

## 6.4. Spellbooks

Spellbooks funcionam como seu “loadout” mágico. Um bom spellbook não é apenas um container de spells; ele define atributos como max mana, cooldown reduction, cast time reduction e bônus de escola.

Pense em spellbooks por função:

| Função | Livro ideal |
|---|---|
| Dano bruto | School book com Spell Power da escola principal. |
| Suporte | Livro com cast time/cooldown/mana e Holy spells. |
| Necromante | Necronomicon / Blood focused. |
| Exploração | Ancient Codex, Ender/utility loadout, Recall/Teleport/Portal. |
| Boss burst | Fire/Lightning/Blood book com spell power e cooldown. |
| Híbrido melee | Livro com buffs + imbuement em arma. |

## 6.5. Cast types

| Cast type | Como jogar |
|---|---|
| Instant | Cast rápido, ótimo para burst, panic buttons e mobilidade. |
| Long | Precisa de posicionamento; melhora muito com Cast Time Reduction e Amulet of Concentration. |
| Continuous | Mantido pressionado; bom para cones, rays e pressão contínua, mas consome mana com o tempo. |

## 6.6. Escolas de magia

O mod divide spells em escolas. Cada escola tem tema, focus, gear e estilo.

| Escola | Focus | Função principal |
|---|---|---|
| Fire | Blaze Rod | Dano, ignição, DoT e burst em área. |
| Ice | Frozen Bone | Controle, freeze, defesa e aggro management. |
| Lightning | Bottle o' Lightning | Burst concentrado, velocidade, chain damage e mobilidade vertical. |
| Holy | Divine Pearl | Cura, suporte, buffs, cleanse e sobrevivência em grupo. |
| Ender | Ender Pearl | Mobilidade, arcane damage, portal, utilidade e evasão. |
| Blood | Blood Vial | Sustain, necromancia, lifesteal, summons e risco/recompensa. |
| Evocation | Emerald | Versatilidade, summons, shields, utility, conjuração e truques. |
| Nature | Poisonous Potato | Debuffs, armor shred, veneno, controle e sobrevivência. |
| Eldritch | Echo Shard, após aprendizado | Magia rara/antiga, muito forte e de acesso tardio. |

---

# 7. Recursos mágicos e onde conseguir

## 7.1. Recursos essenciais

| Recurso | Uso | Onde priorizar |
|---|---|---|
| Arcane Essence | Receitas, armor, runes, upgrades e quase tudo do mod | Estruturas mágicas, mobs mágicos, loot. |
| Arcane Cloth | Armor e equipamentos de mago | Craft e loot. |
| Arcane Ingot | Spellbooks, weapons, gear e crafting avançado | Craft com iron + magia; validar no EMI. |
| Ink comum/uncommon/rare/epic/legendary | Criação de scrolls por raridade | Estruturas mágicas e mobs poderosos. |
| Blank Runestone | Base para runes de escolas | Loot mágico, estruturas, mobs de escola. |
| School Runes | Armor e especialização | Craft com runestones + focus. |
| Cinder Essence | Upgrade Orbs e progressão late | Ancient Knights / Ancient Battlegrounds. |
| Arcane Debris | Upgrade Orbs e late game | Nether / estruturas / validar JER. |
| Divine Soulshard | Crafting avançado e gear late | Echo of Tyros / Citadel. |
| Mithril | Gear e spellbooks avançados | Mineração profunda, abaixo de Y negativo conforme configs. |
| Pyrium | Gear fire/endgame | Citadel vaults e loot avançado. |
| Dragonskin | Spellbook Ender/Dragon theme | Ender Dragon. |
| [item:Eldritch Manuscript] | Aprender Eldritch spells | Fragmentos + echo shard. |

## 7.2. Focuses por escola

| Escola | Focus | Observação |
|---|---|---|
| Fire | Blaze Rod | Simples de farmar com Blaze farm. |
| Ice | Frozen Bone | Dropped de Strays; regiões frias ajudam. |
| Lightning | Bottle o' Lightning | Use bottle em Charged Creeper; lightning rod, trident ou spell ajudam. |
| Holy | Divine Pearl | Craft/loot; importante para healer. |
| Ender | Ender Pearl | Farmável no End ou com Enderman farms. |
| Blood | Blood Vial | Cauldron + mob + campfire/lit setup. |
| Evocation | Emerald | Villager trading ajuda muito. |
| Nature | Poisonous Potato | Farm de batata ajuda a sustentar runes/scrolls. |
| Eldritch | Echo Shard | Após aprender spell via Eldritch Manuscript. |

## 7.3. Ink

| Ink | Uso | Como pensar |
|---|---|---|
| Common Ink | Scrolls comuns | Use sem medo para spells básicas. |
| Uncommon Ink | Scrolls intermediários | Bom para Teleport, support e damage geral. |
| Rare Ink | Scrolls fortes | Comece a economizar para loadouts reais. |
| Epic Ink | Spells muito fortes | Use apenas em spells prioritárias. |
| Legendary Ink | Spells lendárias/endgame | Recurso de planejamento; não gaste no impulso. |

## 7.4. Runes e runestones

Runes são a ponte entre escolas e gear. No mid/late game, elas sustentam school armor, upgrades e especialização.

| Rune | Escola | Uso comum |
|---|---|---|
| Fire Rune | Fire | Pyromancer *(Consulte o Bestiário para estatísticas completas)*/Infernal gear, scrolls e upgrades. |
| Ice Rune | Ice | Cryomancer *(Consulte o Bestiário para estatísticas completas)* gear, Frostbranded Book e controle. |
| Lightning Rune | Lightning | Electromancer gear e burst. |
| Holy Rune | Holy | Priest/Lightbringer/Villager Bible style. |
| Ender Rune | Ender | Teleport, portal e spellbook ender. |
| Blood Rune | Blood | Cultist gear, Vampiric/Necronomicon path. |
| Evocation Rune | Evocation | Archevoker *(Consulte o Bestiário para estatísticas completas)* gear e summons/utility. |
| Nature Rune | Nature | Plagued/Alchemist style, poison/debuffs. |
| Protective Rune | Defense | Itens defensivos, rings/armor. |

---

# 8. Crafting stations: mesa, forge, anvil e cauldron

## 8.1. Inscription Table

**Função:** colocar spells de scrolls dentro de spellbooks.

Use para:

- transformar scrolls encontrados em spells reutilizáveis;
- montar seu primeiro spellbook funcional;
- trocar loadout conforme escola ou função;
- preparar livros de suporte/dano/exploração.

Primeiros spells bons para colocar:

| Categoria | Spells recomendadas |
|---|---|
| Dano barato | Magic Missile, Firebolt, Icicle, Wisp, Ball Lightning. |
| Cura | Heal, Blessing of Life. |
| Defesa | Shield, Ice Tomb, Oakskin. |
| Mobilidade | Teleport, Blood Step, Frost Step, Burning Dash. |
| Utilidade | Recall, Summon Ender Chest, Spectral Hammer, Touch Dig. |

## 8.2. Scroll Forge

**Função:** criar scrolls usando paper, ink e focus.

Fluxo:

```text
Escolha escola -> pegue focus -> escolha ink -> craft scroll -> teste -> inscreva no spellbook -> up no Arcane Anvil
```

<div class="callout info">
  <div class="callout-title">?? DICAS</div>
  - tenha uma farm/estoque de paper antes de começar;
</div>

- separe baús por escola;
- não gaste Legendary Ink sem plano;
- foque em 1-2 escolas no começo;
- use JEI/EMI para verificar nível mínimo e custo.

## 8.3. Arcane Anvil

**Função:** estação de late game para upgrades e imbuements.

Use para:

- melhorar scrolls;
- aplicar upgrade orbs em spellbooks e armaduras;
- imbuir weapons com spells;
- remover alguns upgrades/imbuements com Shriving Stone quando aplicável;
- ajustar rings/affinities em alguns casos.

Prioridades no Arcane Anvil:

1. Melhorar seu spellbook principal.
2. Melhorar a peça de armadura mais usada.
3. Upar spells-chave do livro.
4. Imbuir uma arma definitiva, não uma arma provisória.
5. Guardar upgrade orbs para set endgame.

## 8.4. Alchemist Cauldron

**Função:** potions, elixirs, reciclagem de scrolls, upgrade de ink e produção de Blood Vials.

Usos práticos:

- converter recursos mágicos em elixirs;
- preparar Oakskin/Evasion/Invisibility para boss fights;
- reciclar scrolls ruins;
- fazer Blood Vials para escola Blood.

## 8.5. Portal Frame

**Função:** criar conexões permanentes com a spell Portal.

Uso ideal no Astron City:

- portal entre cidade e base mágica;
- portal entre hub de exploração e outposts;
- portal de suporte para boss arenas;
- portal de emergência para longas viagens.

Regra de servidor: qualquer portal público deve ter placa informando destino, dono e propósito.

---

# 9. Early Game - primeiro mago funcional

## 9.1. Objetivo da fase

Ao final do early game, o jogador deve ter:

| Meta | Resultado |
|---|---|
| Primeiro spellbook | Livro inicial com spells reutilizáveis. |
| Inscription Table | Capacidade de montar loadouts. |
| 2-4 scrolls úteis | Dano, cura, mobilidade e defesa. |
| Arcane Essence inicial | Craft de equipamentos básicos. |
| Ink inicial | Base para scrolls comuns. |
| Primeira armor de mana | Wandering Magician ou equivalente. |
| Rota de estruturas | Saber onde buscar loot mágico. |

## 9.2. Passo a passo

### Passo 1 - Pegue sobrevivência vanilla/modded básica

Antes de rushar magia, garanta:

- iron armor ou melhor;
- shield;
- comida boa;
- backpack, se permitido;
- cama;
- blocos;
- arma confiável;
- rota de fuga.

### Passo 2 - Explore estruturas mágicas pequenas

Procure towers, huts, forts e loot mágico. Mesmo que você ainda não entenda todos os itens, guarde:

- scrolls;
- ink;
- Arcane Essence;
- runestones;
- rings;
- spellbooks;
- qualquer item com nome mágico;
- recursos como Arcane Cloth, Arcane Ingot e runes.

### Passo 3 - Faça ou encontre um spellbook inicial

O livro mais básico serve para aprender o sistema. Não tente montar build perfeita agora.

Prioridade de spells iniciais:

| Slot | Opção ideal | Motivo |
|---|---|---|
| 1 | Magic Missile / Firebolt / Icicle | Dano barato e confiável. |
| 2 | Heal / Blessing of Life | Sustain. |
| 3 | Shield / Ice Tomb / Oakskin | Defesa. |
| 4 | Teleport / Burning Dash / Recall | Mobilidade ou fuga. |

### Passo 4 - Faça a Inscription Table

A Inscription Table muda o jogo. Antes dela, scrolls são consumíveis. Depois dela, scrolls viram parte do seu loadout.

### Passo 5 - Monte um livro generalista

Um livro early bom:

```text
Magic Missile
Heal
Shield
Teleport ou Recall
```

Alternativas:

```text
Firebolt
Icicle
Blessing of Life
Burning Dash
```

```text
Wisp
Shield
Fang Strike
Summon Horse
```

### Passo 6 - Comece a guardar school resources

Mesmo que você ainda não vá usar, guarde:

- Blaze Rods para Fire;
- Ender Pearls para Ender;
- Emeralds para Evocation;
- Poisonous Potatoes para Nature;
- Frozen Bones para Ice;
- Divine Pearls para Holy;
- Blood Vials para Blood;
- Echo Shards para Eldritch;
- Bottle o' Lightning para Lightning.

## 9.3. Erros comuns no early game

| Erro | Correção |
|---|---|
| Gastar scroll raro como consumível | Inscreva no spellbook primeiro. |
| Usar só spells de dano | Leve cura/defesa/mobilidade. |
| Ignorar Arcane Essence | É material de base do mod. |
| Entrar em torre sem comida/blocos | Estruturas mágicas têm traps e mobs. |
| Focar em Eldritch cedo | Eldritch é late/endgame; monte base antes. |
| Craftar armor sem escolher escola | Espere saber sua função. |

---

# 10. Mid Game - Scroll Forge, Nether e especialização

## 10.1. Objetivo da fase

Ao final do mid game, o jogador deve ter:

| Meta | Resultado |
|---|---|
| Scroll Forge | Capacidade de craftar scrolls específicos. |
| Spellbook intermediário | Apprentice/Enchanted ou equivalente. |
| Armor mágica decente | Mana e spell power suficientes. |
| Escola principal | Build começa a ter identidade. |
| Produção de focuses | Farm de Blaze Rod, Emerald, Ender Pearl etc. |
| Estoque de Ink | Common a Rare, com alguns Epic. |
| Primeira build de grupo | Suporte, DPS, controle ou necromante. |

## 10.2. Escolhendo sua escola principal

| Objetivo | Escola recomendada |
|---|---|
| Dano explosivo em área | Fire |
| Burst em alvo único | Lightning |
| Cura e suporte | Holy |
| Mobilidade e utilidade | Ender |
| Sustain e summons | Blood |
| Controle de multidão | Ice |
| Versatilidade geral | Evocation |
| Debuff e armor shred | Nature |
| Magia lendária rara | Eldritch |

## 10.3. Spellbook intermediário recomendado

### Loadout generalista de mid game

```text
Magic Missile ou Firebolt
Heal
Shield
Teleport
Haste ou Oakskin
Dano principal da escola escolhida
```

### Loadout de dungeon

```text
Fireball / Ice Spikes / Chain Lightning
Heal
Shield
Recall
Summon Horse ou Teleport
Cleanse se houver suporte Holy
```

### Loadout de boss em grupo

```text
Dano principal
Debuff: Acid Orb / Heat Surge / Slow
Defesa: Oakskin / Shield / Ice Tomb
Suporte: Heal / Healing Circle / Fortify
Mobilidade: Teleport / Blood Step / Frost Step
```

## 10.4. Setup de base mágica

Crie uma sala ou torre arcana com:

- Inscription Table;
- Scroll Forge;
- Alchemist Cauldron;
- baús por escola;
- baú de scrolls duplicados;
- baú de inks;
- baú de focuses;
- baú de runes;
- área de testes de spells;
- acesso a AE2 ou storage da cidade.

### Layout recomendado

```text
[Storage Scrolls] [Inscription Table] [Spellbooks]
[Inks]            [Scroll Forge]       [Focuses]
[Elixirs]         [Alchemist Cauldron] [Runes]
[Upgrade Items]   [Arcane Anvil]       [Gear]
```

## 10.5. Mid game com grupo

Distribua funções:

| Jogador | Função |
|---|---|
| Mago Holy | Cura, Fortify, Cleanse, Healing Circle. |
| Mago Fire/Lightning | Burst e DPS. |
| Mago Ice/Evocation | Controle e defesa. |
| Mago Nature | Debuffs, armor reduction e anti-heal. |
| Tank melee | Segura boss com gear de Apotheosis/Silent Gear. |
| Engineer | Mantém portal, supplies, food, respawn e storage. |

---

# 11. Late Game - Arcane Anvil, bosses e upgrades

## 11.1. Objetivo da fase

Ao final do late game, o jogador deve ter:

| Meta | Resultado |
|---|---|
| Arcane Anvil | Upgrades, imbuements e progressão avançada. |
| Upgrade Orbs | Melhorias em spellbooks e armaduras. |
| School Armor | Set especializado por escola. |
| Boss loot | Dead King / Citadel / Tyros. |
| Curios fortes | Rings, amulets e talismans corretos. |
| Build fechada | Rota de spells e função clara em boss fights. |

## 11.2. Upgrade priority

| Prioridade | Item | Motivo |
|---:|---|---|
| 1 | Spellbook principal | Afeta todos os casts e define a build. |
| 2 | Peitoral de escola | Muitas peças de chest aceitam imbuement e têm alto impacto. |
| 3 | Spells de dano/defesa core | Aumenta eficiência em boss fights. |
| 4 | Arma com imbuement | Híbrido melee/spell fica muito forte. |
| 5 | Curios/rings | Otimização de cooldown/mana/cast. |
| 6 | Armor completa | Endgame real e identidade visual. |

## 11.3. Weapon Imbuement

Imbuement é poderoso porque coloca magia dentro de armas. O erro clássico é aplicar spell rara em arma provisória.

Boas armas para imbuement:

- arma de Silent Gear endgame;
- weapon de Simply Swords com bom moveset;
- arma com affix bom de Apotheosis;
- weapon de Cataclysm ou boss gear;
- Amethyst Rapier ou arma mágica dedicada.

Spells boas para imbuement:

| Spell | Motivo |
|---|---|
| Echoing Strikes | Excelente para dano físico/híbrido. |
| Flaming Strike | Escala com arma e limpa grupos. |
| Divine Smite | Battle mage de Holy. |
| Shadow Slash | Mobilidade + ataque. |
| Raise Hell | Forte com arma boa e em área. |
| Volt Strike | Engage rápido e dano em impacto. |

## 11.4. Preparação para bosses

Checklist mínimo:

- armor encantada e reparada;
- comida forte;
- potion/elixir de Oakskin/Evasion/Healing;
- spellbook com Heal/Shield/mobilidade;
- blocos;
- Totem se disponível;
- Recall ou Portal de emergência;
- waypoint e backup de corpse;
- grupo no voice chat;
- baú de supplies fora da arena.

---

# 12. End Game - builds completas e magia de servidor

## 12.1. O que define um mago endgame

Um mago endgame não é só alguém com spells lendárias. É um jogador com:

- school armor otimizada;
- spellbook upado;
- spell rotation estável;
- curios corretos;
- mana suficiente;
- cooldown/cast time ajustados;
- weapon imbuement certo;
- suporte de Apotheosis/Relics/Artifacts;
- conhecimento de estruturas e bosses;
- papel claro no grupo.

## 12.2. Endgame solo vs grupo

| Contexto | Build ideal |
|---|---|
| Solo exploration | Ender + Holy + Evocation. |
| Boss solo | Blood + Holy + Nature + defesa. |
| Grupo DPS | Fire/Lightning + debuffs. |
| Grupo suporte | Holy + Evocation + Ender mobility. |
| Controle de adds | Ice + Evocation + Nature. |
| Necromante | Blood + Greater Conjurer's Talisman + summons. |
| Utility architect | Portal, Recall, Touch Dig, Spectral Hammer, Summon Ender Chest. |

## 12.3. Magia como infraestrutura da cidade

No Astron City, magia também pode virar infraestrutura pública:

- **Portal room** com destinos importantes;
- **biblioteca arcana** com baús por escola;
- **laboratório de elixirs**;
- **hall de trophies** dos bosses;
- **arena de testes de spells**;
- **templo Holy** para suporte de grupo;
- **torre de magos** com FTB Quests;
- **rotas de expedição** para Catacombs/Citadel.

---

# 13. Escolas de magia

## 13.1. Fire

**Função:** dano, explosão, ignição, área e pressão constante.

Melhor para:

- limpeza de mobs;
- boss burst em janelas curtas;
- combate em áreas abertas;
- battle mage com arma forte;
- jogadores que gostam de dano direto.

Pontos fortes:

- muitos spells de dano;
- Fireball, Raise Hell e Scorch são ótimos para impacto;
- Flaming Strike escala com arma;
- fácil sustentar focus com Blaze farm.

Pontos fracos:

- risco de fogo em builds;
- cuidado em bases de madeira;
- nem todo boss sofre igual com fire;
- pode causar caos visual em grupo.

## 13.2. Ice

**Função:** controle, congelamento, defesa, distração e sobrevivência.

Melhor para:

- controle de adds;
- suporte defensivo;
- exploração em dungeons;
- jogadores que querem segurança.

Pontos fortes:

- Ice Tomb é panic button;
- Frost Step dá mobilidade e distração;
- Blizzard e Frostwave controlam área;
- Summon Polar Bear ajuda em solo.

Pontos fracos:

- burst geralmente menor que Fire/Lightning;
- depende de freeze/chill para máximo valor;
- não resolve tudo em bosses muito móveis.

## 13.3. Lightning

**Função:** burst, velocidade, dano concentrado e rotação agressiva.

Melhor para:

- boss DPS;
- assassinar alvos prioritários;
- mobilidade vertical;
- jogadores com estilo agressivo.

Pontos fortes:

- Lightning Lance e Lightning Bolt são muito fortes;
- Chain Lightning limpa grupos;
- Charge melhora speed, attack damage e spell power;
- Thunderstorm é ótimo em área com line of sight.

Pontos fracos:

- consumo de mana pode ser alto;
- exige posicionamento;
- Bottle o' Lightning exige preparação.

## 13.4. Holy

**Função:** cura, suporte, buffs, cleanse e sustentação de grupo.

Melhor para:

- servidor multiplayer;
- boss fights em grupo;
- suporte em dungeons;
- jogadores que querem ser indispensáveis.

Pontos fortes:

- Heal, Greater Heal e Healing Circle salvam runs;
- Cleanse remove efeitos ruins;
- Fortify e Haste escalam bem em grupo;
- Angel Wing dá mobilidade temporária.

Pontos fracos:

- dano menor que escolas ofensivas;
- precisa de posicionamento e leitura de grupo;
- em solo pode ficar lento se não misturar dano.

## 13.5. Ender

**Função:** mobilidade, arcane damage, portais, utilidade e evasão.

Melhor para:

- exploração;
- rotas longas;
- PvE técnico;
- jogadores que querem mobilidade máxima.

Pontos fortes:

- Teleport é um dos melhores spells do mod;
- Recall salva vidas;
- Portal cria infraestrutura;
- Evasion e Counterspell são ferramentas defensivas fortes;
- Black Hole é endgame de controle/dano.

Pontos fracos:

- algumas spells são caras;
- Portal/Black Hole exigem cuidado em servidor;
- nem sempre é maior DPS bruto.

## 13.6. Blood

**Função:** sustain, necromancia, lifesteal, summons, risco/recompensa.

Melhor para:

- necromancer *(Consulte o Bestiário para estatísticas completas)* build;
- solo survival;
- sustain em combate prolongado;
- jogadores que gostam de tema sombrio.

Pontos fortes:

- Ray of Siphoning cura muito;
- Raise Dead cria minions;
- Blood Step é mobilidade excelente;
- Necronomicon e Blood Staff são recompensas muito fortes;
- Devour e Blood Needles sustentam bem.

Pontos fracos:

- temática/risco pode não ser para todo mundo;
- summons demais podem pesar performance;
- Heartstop exige entendimento para não se matar depois.

## 13.7. Evocation

**Função:** versatilidade, summons, shields, utility, tricks e controle.

Melhor para:

- jogador generalista;
- dungeons;
- suporte tático;
- iniciante que quer testar muita coisa.

Pontos fortes:

- Shield é uma das melhores defesas;
- Spectral Hammer é utility excelente;
- Summon Horse ajuda exploração;
- Fang Strike/Fang Ward/Fang Swirl são fáceis de usar;
- Invisibility ajuda em rotas perigosas.

Pontos fracos:

- pode faltar burst máximo;
- muitas spells exigem mira/área;
- summons podem poluir lutas.

## 13.8. Nature

**Função:** debuffs, armor shred, veneno, anti-heal e sobrevivência.

Melhor para:

- boss support;
- enfraquecer mobs fortes;
- builds híbridas com veneno;
- controle de multidões.

Pontos fortes:

- Acid Orb reduz armor;
- Blight reduz healing e dano inimigo;
- Oakskin dá redução de dano forte;
- Root prende criaturas;
- Touch Dig é utility excelente.

Pontos fracos:

- dano pode ser indireto;
- veneno nem sempre é ideal contra tudo;
- precisa de setup para máximo valor.

## 13.9. Eldritch

**Função:** magia antiga, rara e poderosa.

Melhor para:

- endgame;
- jogadores colecionadores;
- magia lendária de alto custo;
- utility forte e dano especial.

Pontos fortes:

- Sonic Boom passa por blocos e tem alcance;
- Pocket Dimension é utilidade única;
- Abyssal Shroud é defesa extrema;
- Planar Sight ajuda exploração;
- Black Hole/Eldritch style combinam com builds high mana.

Pontos fracos:

- acesso tardio;
- custa muita mana;
- exige Ancient Knowledge Fragments, Manuscripts e Echo Shards;
- pode ser perigoso se usado sem regra em servidor.

---

# 14. Catálogo completo de spells por escola

> Esta seção é um catálogo de planejamento. Níveis, mana, cooldown e números exatos devem ser confirmados no EMI/JEI e na documentação in-game do servidor.

## 14.1. Blood Spells

| Spell | Tipo | Uso prático | Prioridade |
|---|---|---|---|
| Acupuncture | Dano + sustain | Área em alvo, cura parte do dano | Média |
| Blood Needles | Dano + sustain | Projetéis frontais com lifesteal | Alta |
| Blood Slash | Dano melee/range | Corte em linha com cura parcial | Alta |
| Blood Step | Mobilidade | Teleporte agressivo/defensivo + invisibilidade curta | Muito alta |
| Devour | Sustain | Puxa/ataca e ganha HP temporário ao matar | Alta |
| Heartstop | Defesa extrema | Invulnerabilidade temporária com dívida de dano | Situacional |
| Raise Dead | Summon | Invoca mortos-vivos para combate | Muito alta em necromancer |
| Ray of Siphoning | Sustain beam | Dano contínuo com cura total do dano | Muito alta |
| Sacrifice | Combo summon | Explode summon para dano em área | Alta em necromancer |
| Wither Skull | Dano + explosão | Projétil com efeito explosivo | Alta |

## 14.2. Eldritch Spells

| Spell | Tipo | Uso prático | Prioridade |
|---|---|---|---|
| Abyssal Shroud | Defesa | Evade ataques por curto período | Muito alta |
| Eldritch Blast | Burst | Raios de energia pura | Alta |
| Planar Sight | Utility | Ver criaturas através de blocos | Alta exploração |
| Pocket Dimension | Utility | Dimensão pessoal temporária | Muito alta utility |
| Sculk Tentacles | Controle/AoE | Área com dano e blind | Alta |
| Sonic Boom | Linha/dano | Passa por blocos, dano alto | Muito alta |
| Telekinesis | Controle | Puxa/segura alvo e aplica dano cinético | Situacional/alta |

## 14.3. Ender Spells

| Spell | Tipo | Uso prático | Prioridade |
|---|---|---|---|
| Arcane Shackle | Controle | Prende alvo com correntes | Alta |
| Black Hole | Controle endgame | Puxa e esmaga mobs em área | Muito alta, cuidado em servidor |
| Counterspell | Anti-magia | Interrompe casts e remove summons/effects | Muito alta contra magos |
| Dragon Breath | Cone | Dano contínuo e pools | Média/alta |
| Echoing Strikes | Buff/imbue | Ataques físicos geram explosões ecoadas | Muito alta battle mage |
| Evasion | Defesa | Evita hits e teleporta | Muito alta |
| Magic Arrow | Dano | Projétil sem gravidade e atravessa blocos | Alta |
| Magic Missile | Dano básico | Projétil simples e barato | Muito alta early |
| Portal | Utility | Cria dois portais temporários/permanentes com frame | Muito alta infraestrutura |
| Recall | Utility | Volta para spawn | Muito alta exploração |
| Shadow Slash | Mobilidade/dano | Dash slash, deflete projéteis, escala com arma | Muito alta |
| Starfall | AoE | Cometas em área | Alta |
| Summon Ender Chest | Utility | Abre ender chest por magia | Alta |
| Summon Swords | Summon | Três armas espectrais | Alta |
| Teleport | Mobilidade | Teleporte para onde olha | Essencial |

## 14.4. Evocation Spells

| Spell | Tipo | Uso prático | Prioridade |
|---|---|---|---|
| Arrow Volley | AoE | Chuva de flechas mágicas | Média/alta |
| Chain Creeper | AoE chain | Explosões em cadeia | Alta, cuidado em base |
| Fang Strike | Dano linha | Evoker fangs em linha | Alta early |
| Fang Swirl | AoE | Fangs em espiral | Alta |
| Fang Ward | Defesa AoE | Rings protetores de fangs | Alta |
| Firecracker | Dano rápido | Firework explosion | Alta early |
| Gust | Knockback/control | Empurra e causa dano em impacto | Média/alta |
| Invisibility | Stealth | True invisibility e perda de aggro | Muito alta exploração |
| Lob Creeper | Projétil explosivo | Creeper head arremessada | Alta |
| Shield | Defesa | Bloqueia projéteis e criaturas | Essencial |
| Slow | Debuff | Reduz movimento, ataque, mineração, mana regen e cast time | Muito alta suporte |
| Spectral Hammer | Utility mineração | Minera pedra em cubo deixando ores | Muito alta utility |
| Summon Horse | Mobilidade | Montaria espectral | Alta early/mid |
| Summon Vex | Summon | Vexes aliados | Alta |
| Throw | Dano híbrido | Arremessa item/arma | Situacional |
| Wololo | Meme/utility | Spell lendária temática | Baixa/meme |

## 14.5. Fire Spells

| Spell | Tipo | Uso prático | Prioridade |
|---|---|---|---|
| Blaze Storm | Continuous | Barragem de fireballs | Alta |
| Burning Dash | Mobilidade/dano | Dash flamejante | Alta |
| Fire Arrow | Projétil/AoE | Flecha de fogo explosiva | Alta |
| Fire Breath | Cone | Dano contínuo em cone | Média/alta |
| Fireball | Burst/AoE | Grande explosão | Muito alta |
| Firebolt | Dano básico | Projétil barato | Muito alta early |
| Flaming Barrage | Multi-projétil | Pequenas fireballs teleguiadas | Alta |
| Flaming Strike | Melee spell | Escala com arma, ataque em arco | Muito alta battle mage |
| Heat Surge | Debuff/AoE | Reduz armor e queima | Muito alta suporte DPS |
| Magma Bomb | AoE | Campo de fogo no impacto | Alta |
| Raise Hell | Burst AoE | Shockwave com arma, dano grande | Muito alta endgame |
| Scorch | Área | Erupção de fogo em área | Alta |
| Wall of Fire | Controle/defesa | Parede de fogo bloqueia projéteis | Alta |

## 14.6. Holy Spells

| Spell | Tipo | Uso prático | Prioridade |
|---|---|---|---|
| Angel Wing | Mobilidade | Elytra temporária de energia holy | Muito alta |
| Blessing of Life | Cura alvo | Cura criatura/aliado | Alta |
| Cleanse | Suporte | Remove efeitos ruins de si e aliados próximos | Essencial grupo |
| Divine Smite | Melee spell | Dano em área que escala com arma | Muito alta battle support |
| Fortify | Grupo | HP temporário em área | Essencial grupo |
| Greater Heal | Cura forte | Cura completa, cast mais lento | Alta |
| Guiding Bolt | Debuff alvo | Projéteis próximos homing no alvo | Alta grupo |
| Haste | Buff | Move/attack/mine/mana/cast melhorados | Essencial grupo |
| Heal | Cura própria | Sustain instantâneo | Essencial |
| Healing Circle | Área cura | Zona de cura para grupo | Muito alta |
| Sunbeam | Dano | Raio holy de cima | Alta |
| Wisp | Dano básico | Projétil holy que busca alvos | Alta early |

## 14.7. Ice Spells

| Spell | Tipo | Uso prático | Prioridade |
|---|---|---|---|
| Blizzard | Controle/AoE | Vórtice gelado que puxa mobs | Muito alta |
| Cone of Cold | Cone | Dano + freeze | Alta |
| Frost Step | Mobilidade/aggro | Teleporte com sombra de gelo | Muito alta |
| Frostbite | Buff | Mobs congelados mortos viram Ice Shadows | Alta build ice |
| Frostwave | Controle | Aplica chilled em área | Alta |
| Ice Block | Burst | Bloco de gelo cai e explode | Alta |
| Ice Spikes | Linha/AoE | Spikes em cascata | Muito alta |
| Ice Tomb | Defesa | Proteção, cura e absorve hit/counterspell | Essencial |
| Icicle | Dano básico | Projétil piercing e freeze | Muito alta early |
| Ray of Frost | Beam | Freeze imediato e dano | Alta |
| Snowball | Área/control | Campo gelado que aplica chilled | Média/alta |
| Summon Polar Bear | Summon/mount | Aliado e montaria | Alta solo |

## 14.8. Lightning Spells

| Spell | Tipo | Uso prático | Prioridade |
|---|---|---|---|
| Ascension | Mobilidade vertical | Sobe no ar e causa dano no ponto inicial | Alta |
| Ball Lightning | Dano básico | Orbe que atravessa criaturas e ricocheteia | Alta |
| Chain Lightning | Multi-alvo | Corrente elétrica entre alvos | Muito alta |
| Charge | Buff | Speed, attack damage e spell power | Essencial battle mage |
| Electrocute | Cone continuous | Cone elétrico contínuo | Alta |
| Lightning Bolt | Burst | Raio do céu em alvo | Muito alta |
| Lightning Lance | Charged projectile | Javelin elétrico de alto dano | Muito alta boss DPS |
| Shockwave | AoE | Onda elétrica em raio grande | Alta |
| Thunderstorm | Área | Tempestade que atinge mobs próximos | Muito alta em arena aberta |
| Volt Strike | Engage/dano | Salto giratório e blast | Alta |

## 14.9. Nature Spells

| Spell | Tipo | Uso prático | Prioridade |
|---|---|---|---|
| Acid Orb | Debuff/AoE | Reduz armor em área | Essencial boss support |
| Blight | Debuff | Reduz cura recebida e dano causado pelo alvo | Muito alta bosses/mobs fortes |
| Earthquake | AoE/slow | Tremores e slowness | Alta |
| Firefly Swarm | AoE tracking | Enxame que segue alvo | Alta |
| Gluttony | Mana sustain | Comida vira mana | Alta utility |
| Oakskin | Defesa | Redução de dano com penalidade de speed | Essencial |
| Poison Arrow | Dano/cloud | Flecha venenosa com nuvem | Alta |
| Poison Breath | Cone | Cone de veneno | Média/alta |
| Poison Splash | AoE/cloud | Dano e nuvem venenosa | Alta |
| Root | Controle | Impede movimento não-mágico | Muito alta |
| Spider Aspect | Buff | Mais dano contra poisoned | Alta build poison |
| Stomp | Linha/dano | Tremor curto à frente | Média |
| Touch Dig | Utility | Quebra bloco magicamente | Muito alta utility |

---

# 15. Spellbooks, staves e armas mágicas

## 15.1. Spellbooks principais

| Spellbook | Papel | Quando usar |
|---|---|---|
| Flimsy Journal | Livro inicial | Primeiros scrolls e aprendizado. |
| Ironbound Tome | Livro early robusto | Progressão inicial com materiais simples. |
| Apprentice's Spell Book | Mid game | Cast Time Reduction + mana. |
| Enchanted Spell Book | Mid game geral | Max Mana e livro mais estável. |
| Ancient Codex | Late/endgame utility | Cooldown Reduction e mana. |
| Dragonskin Spell Book | Ender/late | Ender Spell Power + mana. |
| Druidic Tome | Nature | Poison/debuff build. |
| Frostbranded Book | Ice | Controle e freeze build. |
| Blaze Instruction Manual | Fire | Drop de Blaze, ótimo para Fire build. |
| Grimoire of Evokation | Evocation | Drop de Evokers/Archevokers; vem com spells. |
| Necronomicon | Blood/Necromancer | Drop/reward muito forte do Dead King. |
| Vampiric Spell Book | Blood sustain | Blood Power + resistência. |
| Villager Bible | Holy suporte | Trade/quest com Priest e Evoker Fort. |
| Rotten Spell Book | Early loot | Mana com penalidade de spell resistance. |

## 15.2. Staves

| Staff | Bônus | Uso |
|---|---|---|
| Artificer's Cane | Cast Time Reduction, Cooldown Reduction, Spell Power | Ótimo generalista. |
| Graybeard Staff | Mana Regeneration, Spell Power | Sustentação de casts longos. |
| Ice Staff | Ice Power + Mana Regen | Build Ice. |
| Pyrium Staff | Fire Power + Cast Time + ataque | Build Fire/battle mage. |
| Rod o' Lightning | Cooldown + Lightning Power | Build Lightning. |
| The Blood Staff | Blood Power + Summon Damage | Necromancer/Blood, drop do Dead King. |

## 15.3. Armas mágicas e híbridas

| Arma | Uso |
|---|---|
| Amethyst Rapier | Arma rápida com Echoing Strikes; ótima para battle mage. |
| Autoloader Crossbow | Ranged/utility; combina com buffs e Holy/Ender. |
| Magehunter | Boa contra magos por Spell Resistance. |
| Decrepit Flamberge | Arma pesada de Ancient Knights; forte para battle mage. |
| Silent Gear custom weapon | Melhor opção modular se bem construída e encantada. |
| Simply Swords legendary/unique | Excelente para estilo híbrido com Better Combat. |
| Cataclysm weapons | Endgame físico para imbuements e boss fights. |

## 15.4. O que colocar no spellbook principal

### Livro explorador

```text
Teleport
Recall
Heal
Shield
Summon Ender Chest
Spectral Hammer ou Touch Dig
```

### Livro boss DPS

```text
Lightning Lance
Chain Lightning
Charge
Oakskin
Heal
Teleport
Acid Orb ou Heat Surge
```

### Livro suporte

```text
Heal
Greater Heal
Healing Circle
Fortify
Cleanse
Haste
Shield
Teleport
```

### Livro necromante

```text
Raise Dead
Ray of Siphoning
Blood Step
Wither Skull
Sacrifice
Devour
Oakskin ou Heal
```

### Livro battle mage

```text
Shadow Slash
Flaming Strike
Divine Smite
Charge
Echoing Strikes
Heal
Oakskin
Teleport
```

---

# 16. Armaduras e especialização por escola

## 16.1. Lógica das armaduras mágicas

Armaduras do Iron's Spells tendem a conceder:

- armor/armor toughness;
- max mana;
- spell power geral;
- spell power de escola;
- passivas especiais;
- algumas peças podem receber imbuement.

No Astron City, school armor deve ser tratada como build de classe, não só “mais defesa”.

## 16.2. Sets de escola

| Set | Escola | Papel |
|---|---|---|
| Archevoker Armor | Evocation | Versatilidade, fangs, summons e utility. |
| Cryomancer Armor | Ice | Controle, freeze, dungeon safety. |
| Cultist Armor | Blood | Necromancia, sustain e summon damage. |
| Electromancer Armor | Lightning | Burst, speed e boss DPS. |
| Pyromancer / Infernal style | Fire | Dano, explosão e DoT. |
| Priest / Lightbringer style | Holy | Suporte, tankiness e cura. |
| Netherite Battlemage Armor | Generalista | Battle mage mais resistente. |
| Plagued / Nature style | Nature | Debuff, poison e anti-heal. |
| Ender / Dragonskin style | Ender | Mobilidade, arcane e utilidade. |
| Eldritch / Ancient style | Eldritch | Endgame raro e alta mana. |

## 16.3. Escolhendo armor por função

| Função | Armor recomendada |
|---|---|
| Healer | Holy/Lightbringer/Priest + cooldown/cast curios. |
| DPS Fire | Infernal/Pyromancer + Pyrium Staff + Fire book. |
| DPS Lightning | Electromancer + Rod o' Lightning + Lightning book. |
| Control | Cryomancer + Ice Staff + Ice Tomb/Frostwave/Blizzard. |
| Necromancer | Cultist + Blood Staff/Necronomicon + Conjurer talisman. |
| Explorer | Netherite Battlemage + Ender utility book. |
| Tank mage | Lightbringer/Netherite Battlemage + Oakskin/Shield/Heal. |

## 16.4. Upgrades de armor

Upgrade Orbs devem ser gastos com cautela. Recomendação:

1. Upar apenas armor que você pretende usar por muito tempo.
2. Priorizar chestplate e spellbook.
3. Evitar gastar em gear early.
4. Guardar backup para quando trocar escola.
5. Documentar no wiki/FTB Quest quais upgrades são mais importantes.

---

# 17. Curios, rings, amulets e acessórios

## 17.1. Curios essenciais

| Curio | Efeito | Uso |
|---|---|---|
| Ring of Mana | +Max Mana | Forte em qualquer build. |
| Ring of Recovery | +Cooldown Reduction | Excelente para DPS e suporte. |
| Ring of Expediency | +Cast Time Reduction | Muito forte para spells Long. |
| Amethyst Resonance Charm | +Mana Regeneration | Sustentação geral. |
| Amulet of Concentration | Long casts não interrompíveis | Essencial para caster de suporte/boss. |
| Heavy Chain | +Spell Resistance | Defesa contra magos/bosses mágicos. |
| Fireward Ring | Fire immunity | Nether, Fire mages, Citadel. |
| Frostward Ring | Freezing immunity | Ice structures e Cryomancer fights. |
| Poisonward Ring | Poison immunity | Nature/poison mobs. |
| Conjurer's Talisman | +Summon Damage | Necromancer/summoner. |
| Greater Conjurer's Talisman | Summons que expiram não ativam cooldown | Muito forte para summon builds. |
| Ring of No Affinity | +1 nível de uma spell específica | Endgame min-max. |
| Wicked Bone Ring | +Projectile ricochet | Muito bom em projectile builds. |
| Emerald Stoneplate Ring | +XP drop | Farm de XP e encantamento. |
| Signet of the Betrayer | Eldritch power + dano extra baseado em mana do alvo | Muito forte contra casters. |

## 17.2. Combinações recomendadas

### Caster geral

```text
Ring of Mana
Ring of Recovery
Amethyst Resonance Charm
Amulet of Concentration
```

### Suporte Holy

```text
Ring of Expediency
Ring of Recovery
Ring of Mana
Amulet of Concentration
```

### Necromancer

```text
Greater Conjurer's Talisman
Ring of Mana
Ring of Recovery
Heavy Chain
```

### Battle mage

```text
Ring of Recovery
Ring of Mana
Heavy Chain
Amulet of Concentration ou school-specific curio
```

### Explorer

```text
Ring of Mana
Amulet of Teleportation
Ring of Recovery
Fireward/Frostward/Poisonward conforme biome/dungeon
```

---

# 18. Estruturas, dungeons e rotas de exploração

## 18.1. Estruturas de magos

| Estrutura | Bioma / local | O que buscar |
|---|---|---|
| Mountain Tower | Montanhas/neve | Ice loot, Cryomancer, scrolls, Frozen Bone, Ice Rune. |
| Mangrove Hut | Swamps | Apothecarist, Nature/poison resources, utility loot. |
| Pyromancer Tower | Florestas/gramados | Fire loot, Pyromancer, underground ruined keep. |
| Evoker Fort | Forest/plains/desert/savanna | Archevoker, Evocation loot, camp externo, Villager Bible route. |
| Priest House | Villages plains/taiga | Priest neutral/protector e trade/holy route. |

## 18.2. Estruturas especiais

| Estrutura | Dimensão | Importância |
|---|---|---|
| Ancient Battlegrounds | Nether | Armor Piles, Ancient Knights, Cinder Essence, possível debris denso. |
| Impaled Icebreaker | Rara | Artifacts, Permafrost, rota de Ice loot. |
| Ice Spider Den | Icy biomes | Ice Spider eggs, minidungeon, Infested Ruins map. |

## 18.3. Boss dungeons

| Dungeon | Localização | Acesso | Recomendação |
|---|---|---|---|
| The Catacombs | Underground Overworld | [item:Wayward Compass] | Enchanted diamond gear ou melhor; grupo recomendado. |
| The Citadel | Nether | Ancient Maps / exploração | Late game; Cinderous Soulcaller para boss. |

## 18.4. Rota de exploração recomendada

```text
Village/Priest House
  -> Mountain Tower / Pyromancer Tower / Mangrove Hut
  -> Evoker Fort
  -> Nether resources
  -> Ancient Battlegrounds
  -> Catacombs
  -> Dead King
  -> Ancient Cities/Echo Shards se necessário
  -> Citadel
  -> Echo of Tyros
```

## 18.5. Regras de exploração em servidor

- Marque estruturas importantes no mapa.
- Não destrua estruturas públicas antes de todo mundo visitar.
- Use Lootr para que cada jogador tenha loot individual quando aplicável.
- Avise bosses grandes no chat/Discord.
- Evite explorar milhares de chunks sem necessidade.
- Use waypoint com nome padronizado: `IronSpells - Catacombs #1`, `IronSpells - Citadel #1`.

---

# 19. Bosses e encontros importantes

## 19.1. Dead King

**Onde:** The Catacombs, dungeon subterrânea no Overworld.

**Como localizar:** Wayward Compass.

**Preparação recomendada:** enchanted diamond gear ou superior, food forte, heal, shield, mobilidade e grupo.

### Estratégia

1. Limpe a dungeon antes da sala do boss.
2. Coloque baú de supplies antes da arena.
3. Entre com pelo menos um jogador suporte Holy.
4. Use Shield para bloquear projéteis/summons.
5. Use Nature debuffs se possível: Acid Orb, Blight, Root.
6. Use Blood/Lightning/Fire para dano.
7. Leve Cleanse se efeitos ficarem perigosos.
8. Não loteie apressado; organize drops e divida com o grupo.

### Loot relevante

| Loot | Uso |
|---|---|
| The Blood Staff | Staff forte para Blood/summon build. |
| Necronomicon | Spellbook único, fortíssimo para necromancer. |
| Dead King Phylactery / Shards | Crafting e progressão. |
| Bone Key | Vaults da Catacombs. |
| Cinder/arcane resources | Upgrades e late game. |

## 19.2. Echo of Tyros, First Flamebearer

**Onde:** The Citadel, no Nether.

**Como invocar:** Cinderous Soulcaller em contexto da Citadel.

**Função:** boss de fogo/endgame mágico, associado a Divine Soulshards e vaults.

### Preparação recomendada

- Fireward Ring ou fire resistance;
- armor forte;
- Ring of Recovery/Mana;
- Heal/Greater Heal/Healing Circle;
- Oakskin;
- mobilidade: Teleport/Blood Step/Frost Step;
- dano não-fire como Lightning/Blood/Holy se necessário;
- grupo com suporte Holy.

### Estratégia

1. Conheça a arena antes de invocar.
2. Defina ponto de fuga e baú de suprimentos.
3. Use fire immunity/resistance.
4. Evite ficar agrupado se houver ataques em área.
5. Use Lightning Lance/Chain Lightning para dano seguro.
6. Use Holy para sustentação do grupo.
7. Use Nature debuffs para reduzir ameaça.
8. Divida Divine Soulshards por prioridade de gear.

## 19.3. Ancient Knights

**Onde:** Ancient Battlegrounds e Armor Piles.

**Importância:** fonte de Cinder Essence e progressão de Upgrade Orbs.

<div class="callout info">
  <div class="callout-title">?? DICA</div>
  <p>não quebre vários Armor Piles de uma vez sem preparo. Você pode transformar uma farm em um wipe.</p>
</div>

## 19.4. Wizards e mobs mágicos

| Mob | Perigo | Prioridade |
|---|---|---|
| Pyromancer | Fire damage, ignição | Levar Fireward/água/resistência. |
| Cryomancer | Freeze/control | Levar Frostward e mobilidade. |
| Archevoker | Evocation/fangs/summons | Usar Counterspell/Shield. |
| Necromancer | Summons/Blood | Focar caster primeiro. |
| Apothecarist | Poison/Nature | Poisonward/Cleanse. |
| Priest | Neutral/ally em village | Não atacar; rota de suporte/trade. |
| Ice Spider | Mobility/freeze | Cuidado em Ice Spider Den. |

---

# 20. Builds recomendadas

## 20.1. Build: Battle Mage universal

**Objetivo:** misturar arma forte + spells que escalam com arma.

| Slot | Recomendação |
|---|---|
| Escola | Ender + Fire + Holy |
| Arma | Silent Gear/Simply Swords/Cataclysm com bom dano |
| Spells core | Shadow Slash, Flaming Strike, Divine Smite, Charge |
| Defesa | Heal, Oakskin, Shield |
| Mobilidade | Teleport ou Blood Step |
| Curios | Ring of Recovery, Ring of Mana, Heavy Chain |
| Armor | Netherite Battlemage ou school armor híbrida |

Rotação:

```text
Charge -> engage com Shadow Slash / Flaming Strike -> Heal se cair HP -> Oakskin em boss -> Teleport reposiciona
```

## 20.2. Build: Holy Support

**Objetivo:** manter o grupo vivo em boss fights.

| Slot | Recomendação |
|---|---|
| Escola | Holy + Evocation + Ender |
| Spells core | Heal, Greater Heal, Healing Circle, Fortify, Cleanse, Haste |
| Defesa | Shield, Oakskin |
| Mobilidade | Teleport, Recall |
| Curios | Amulet of Concentration, Ring of Expediency, Ring of Recovery, Ring of Mana |
| Armor | Holy/Lightbringer/Priest style |

Rotação:

```text
Fortify antes do engage -> Haste no DPS -> Healing Circle no centro -> Cleanse quando necessário -> Heal em emergências
```

## 20.3. Build: Lightning Boss DPS

**Objetivo:** dano alto em alvo único e multi-target controlado.

| Slot | Recomendação |
|---|---|
| Escola | Lightning + Nature + Holy |
| Spells core | Lightning Lance, Lightning Bolt, Chain Lightning, Charge |
| Debuffs | Acid Orb, Blight |
| Defesa | Oakskin, Heal |
| Curios | Ring of Recovery, Ring of Mana, Amulet of Concentration |
| Armor | Electromancer |
| Staff | Rod o' Lightning |

Rotação:

```text
Charge -> Acid Orb/Blight -> Lightning Lance -> Lightning Bolt -> Chain Lightning nos adds -> Heal/Oakskin
```

## 20.4. Build: Fire AoE Nuker

**Objetivo:** limpar mobs e explodir grupos.

| Slot | Recomendação |
|---|---|
| Escola | Fire + Ender + Holy |
| Spells core | Fireball, Raise Hell, Scorch, Flaming Barrage |
| Controle | Wall of Fire, Heat Surge |
| Defesa | Heal, Shield |
| Mobilidade | Teleport / Burning Dash |
| Curios | Ring of Recovery, Ring of Mana |
| Armor | Infernal/Pyromancer |
| Staff | Pyrium Staff |

Cuidado: em servidor, Fireball/Raise Hell em builds da cidade pode ser proibido ou restrito.

## 20.5. Build: Blood Necromancer

**Objetivo:** summons + sustain + dano sombrio.

| Slot | Recomendação |
|---|---|
| Escola | Blood + Evocation + Holy |
| Spells core | Raise Dead, Ray of Siphoning, Blood Step, Wither Skull, Sacrifice |
| Suporte | Heal / Oakskin |
| Curios | Greater Conjurer's Talisman, Ring of Mana, Ring of Recovery |
| Armor | Cultist |
| Staff/book | The Blood Staff + Necronomicon |

Rotação:

```text
Raise Dead -> Blood Step reposiciona -> Ray of Siphoning para sustain -> Sacrifice em grupos -> Wither Skull para pressão
```

Regra de performance: limite summons em farms e áreas públicas.

## 20.6. Build: Ice Control Mage

**Objetivo:** travar campo, proteger aliados e controlar dungeons.

| Slot | Recomendação |
|---|---|
| Escola | Ice + Holy + Evocation |
| Spells core | Blizzard, Frostwave, Ice Spikes, Ray of Frost |
| Defesa | Ice Tomb, Shield, Heal |
| Mobilidade | Frost Step |
| Curios | Ring of Recovery, Ring of Mana, Frostward Ring |
| Armor | Cryomancer |
| Staff | Ice Staff |

## 20.7. Build: Explorer Arcane

**Objetivo:** nunca ficar preso, nunca ficar sem rota de fuga.

| Slot | Recomendação |
|---|---|
| Escola | Ender + Holy + Evocation + Nature |
| Spells core | Teleport, Recall, Portal, Summon Ender Chest |
| Utility | Spectral Hammer, Touch Dig, Summon Horse |
| Defesa | Shield, Heal, Oakskin |
| Curios | Ring of Mana, Ring of Recovery, Amulet of Teleportation |
| Armor | Netherite Battlemage ou gear com max mana |

---

# 21. Farms e soluções populares de survival

## 21.1. Farm de Arcane Essence

**Objetivo:** sustentar receitas do mod.

Fontes:

- estruturas mágicas;
- mobs mágicos;
- loot de dungeons;
- farms de spawner se permitido;
- villager/loot integrations se houver no pack.

Solução de servidor:

```text
Mob farm controlada -> filtro de drops mágicos -> storage AE2 -> estoque mínimo com ME Requester
```

## 21.2. Farm de Ink

**Objetivo:** craftar scrolls de raridade suficiente.

<div class="callout info">
  <div class="callout-title">?? DICAS</div>
  - separe Common/Uncommon/Rare/Epic/Legendary;
</div>

- não use inks raros para testar spells;
- recicle scrolls ruins com Alchemist Cauldron se aplicável;
- faça sessão de “spell crafting” em grupo para dividir custos.

## 21.3. Farm de Focuses

| Focus | Farm recomendada |
|---|---|
| Blaze Rod | Blaze spawner / Nether fortress / Create deployer farms. |
| Ender Pearl | Enderman farm / End / mob farms. |
| Emerald | Villager trading / raid farms com cautela. |
| Poisonous Potato | Potato farm grande + sorte. |
| Frozen Bone | Stray farm / icy biome. |
| Blood Vial | Alchemist Cauldron + mob controlado. |
| Divine Pearl | Craft/loot; manter estoque para Holy. |
| Bottle o' Lightning | Lightning setup com creeper carregado; cuidado. |
| Echo Shard | Ancient Cities / exploração Deep Dark. |

## 21.4. Farm de Cinder Essence

Fonte principal: Ancient Knights / Ancient Battlegrounds.

Recomendação:

- não spammar Armor Piles sem área segura;
- tenha Holy support;
- use Ice/Root para controle;
- use Lootr/baús separados;
- levar Fireward se a região estiver perigosa.

## 21.5. Biblioteca de scrolls da cidade

Projeto público excelente para Astron City:

```text
Torre Arcana Publica
  - Baú por escola
  - Baú de inks
  - Baú de focuses
  - Baú de spellbooks vazios
  - Sala de teste
  - Quadro com spells recomendadas
  - Portal para Catacombs/Citadel conhecidas
```

## 21.6. Automação com AE2

Itens para manter em estoque:

| Item | Estoque recomendado |
|---|---:|
| Arcane Essence | 1024+ |
| Paper | 2048+ |
| Common Ink | 256+ |
| Uncommon Ink | 128+ |
| Rare Ink | 64+ |
| Epic Ink | 16+ |
| Legendary Ink | guardar manualmente |
| Blank Runestone | 64+ |
| Focus principal | 128+ |
| Glass Bottles | 512+ |
| Food para Gluttony | 512+ |
| Elixirs de boss | 16-32 cada |

## 21.7. Produção com Create

Create pode ajudar em:

- paper farm;
- sugar cane farm;
- potato farm para Nature;
- Blaze Rod processing com spawner setups;
- item sorting por escola;
- transporte visual de recursos mágicos para a Torre Arcana;
- farms alimentares para Gluttony e suporte.

---

# 22. HOT TOPICS - o que é muito forte e útil

## 22.1. Teleport

**Por que é forte:** mobilidade instantânea muda exploração, boss fights e sobrevivência. É uma das melhores spells para qualquer livro.

Uso:

- fugir de boss;
- atravessar gaps;
- reposicionar healer;
- kitear mobs;
- acelerar exploração.

## 22.2. Recall

**Por que é forte:** salva expedições. Voltar para spawn reduz perda de itens e tempo.

Melhor uso:

- exploração solo;
- Deep Dark;
- dungeons longas;
- “panic button” quando não há portal.

## 22.3. Shield

**Por que é forte:** bloqueia projéteis e criaturas. Em dungeons, evita mortes bobas.

Uso:

- corredores estreitos;
- boss adds;
- proteção de healer;
- bloquear arqueiros/magos.

## 22.4. Heal / Healing Circle / Fortify / Cleanse

**Por que é forte:** suporte vence boss fights. Um jogador Holy bem equipado vale mais que mais um DPS desorganizado.

Prioridade:

1. Heal para todo mundo.
2. Healing Circle para grupo.
3. Fortify antes do engage.
4. Cleanse contra debuffs perigosos.

## 22.5. Ring of Recovery + Ring of Mana

**Por que é forte:** cooldown e mana são universais. Quase toda build usa.

Recomendação: sempre ter um set desses como baseline.

## 22.6. Amulet of Concentration

**Por que é forte:** long casts não interrompíveis transformam healer, summoner e nuker em builds muito mais consistentes.

Especialmente bom para:

- Greater Heal;
- Haste;
- Fortify;
- Lightning Lance;
- Fireball;
- Summon spells.

## 22.7. Ray of Siphoning

**Por que é forte:** sustain absurdo se bem usado. Dano contínuo + cura permite segurar lutas longas.

Uso ideal: necromancer ou solo survival.

## 22.8. Blood Step / Frost Step / Burning Dash

**Por que é forte:** cada escola ganha sua forma de mobilidade agressiva/defensiva.

Comparação:

| Spell | Melhor uso |
|---|---|
| Blood Step | Teleporte agressivo, invisibilidade e reposicionamento. |
| Frost Step | Deixa sombra para puxar aggro e distrair. |
| Burning Dash | Engage rápido com dano de fogo. |

## 22.9. Acid Orb + Blight

**Por que é forte:** Nature é subestimado. Reduzir armor, healing e dano de boss melhora todo o grupo.

Uso: suporte de boss fight.

## 22.10. Lightning Lance

**Por que é forte:** um dos melhores bursts de alvo único.

Melhor com:

- Electromancer armor;
- Rod o' Lightning;
- Ring of Recovery;
- Charge;
- Spell Power/Lightning Power.

## 22.11. Raise Hell

**Por que é forte:** AoE endgame que escala com arma. Em battle mage com arma forte, vira nuke.

Cuidado: use longe da cidade/base.

## 22.12. Spectral Hammer / Touch Dig

**Por que é forte:** magia de utilidade que economiza tempo.

| Spell | Uso |
|---|---|
| Spectral Hammer | Mineração de pedra em cubo, deixando ores/rubble. |
| Touch Dig | Quebra bloco à distância; bom para exploração. |

## 22.13. Portal + Portal Frame

**Por que é forte:** transforma magia em infraestrutura pública.

Projetos:

- portal da cidade para dungeon hub;
- portal para boss arena;
- portal para torre arcana;
- portal para outposts.

## 22.14. Necronomicon + The Blood Staff

**Por que é forte:** combo icônico para necromancer, com Raise Dead, Blood Slash, Blood Step e Ray of Siphoning.

Uso: solo sustain, dungeons e “classe necromante” da cidade.

## 22.15. Eldritch toolkit

**Por que é forte:** Eldritch spells são raras, caras e poderosas.

Prioridades:

- Sonic Boom: dano em linha e through-block.
- Abyssal Shroud: evasão extrema.
- Pocket Dimension: utility única.
- Planar Sight: exploração e segurança.

---

# 23. Integrações com outros mods do Astron City

## 23.1. Apotheosis / Apothic

Apotheosis eleva Iron's Spells porque adiciona:

- affixes em gear;
- gems e sockets;
- atributos como cooldown, mana, spell power se configurado/integrado;
- encantamentos melhores;
- boss gear que pode virar base de battle mage.

Recomendação:

```text
Pegue spellbook e armor de escola
  -> encante com setup forte
  -> busque affixes bons
  -> aplique gems relevantes
  -> finalize com Arcane Anvil
```

## 23.2. Artifacts / Relics

Curios externos podem melhorar:

- mobilidade;
- sobrevivência;
- dano;
- utilidade;
- sustain.

Sempre teste combinações com Iron's rings, pois slots de Curios são limitados.

## 23.3. Better Combat / Combat Roll

Ótimo para battle mage:

- dodge para cast time;
- reposicionamento;
- melee spells que escalam com arma;
- combos de Simply Swords/Silent Gear.

## 23.4. Silent Gear

Silent Gear é a melhor rota para arma custom definitiva com imbuement.

Boas metas:

- arma com alto attack damage;
- velocidade confortável;
- traits defensivos/ofensivos;
- encantamentos/affixes fortes;
- imbuement de spell que escala com arma.

## 23.5. Simply Swords

Simply Swords adiciona armas com identidade e movesets interessantes. Excelente para:

- Shadow Slash;
- Flaming Strike;
- Divine Smite;
- Raise Hell;
- Echoing Strikes.

## 23.6. Cataclysm

Cataclysm fornece bosses e armas/armaduras endgame. Combina com Iron's porque:

- spells ajudam em boss fights;
- armas de boss podem receber imbuement se permitido;
- armor forte permite caster sobreviver;
- arenas de boss valorizam Holy support.

## 23.7. Ice and Fire + Ice and Fire: Spellbooks

O Astron City inclui Ice and Fire Community Edition e Ice and Fire: Spellbooks. Isso reforça fantasia de dragões + spellcasting.

Sugestões:

- integrar Dragonskin Spell Book com Dragon fights;
- usar Ice/Fire schools como preparação contra dragons;
- criar quests de “Dragon Mage”.

## 23.8. Iron's Gems 'n Jewelry

Use como camada de customização de personagem:

- joias de mana;
- atributos de spell power;
- complementos de build;
- identidade visual/RPG.

## 23.9. AE2

AE2 deve cuidar do storage mágico:

- Pattern Providers para craft de recursos;
- ME Requester para manter Arcane Essence, paper e focuses;
- storage por escola;
- automação de elixirs quando viável;
- library da cidade com terminais públicos.

## 23.10. Create

Create transforma magia em infraestrutura visível:

- paper/sugar cane farms;
- Blaze farms;
- sorting por escola;
- transporte de recursos para Torre Arcana;
- contraptions temáticas em academias mágicas;
- cozinha para Gluttony builds.

## 23.11. Modern Industrialization / Oritech / Ender IO / LaserIO

Tech mods podem automatizar suporte:

- produção de frascos/bottles;
- farms de recursos;
- sorting avançado;
- energia/base de infraestrutura;
- materiais para gear.

---

# 24. Checklists de progresso e estoque

## 24.1. Checklist Early Magic

- [ ] Encontrei meu primeiro scroll.
- [ ] Fiz ou encontrei um spellbook.
- [ ] Fiz Inscription Table.
- [ ] Tenho uma spell de dano.
- [ ] Tenho uma spell de cura/defesa.
- [ ] Tenho uma spell de mobilidade ou fuga.
- [ ] Tenho Arcane Essence guardada.
- [ ] Tenho baú de scrolls/inks.
- [ ] Escolhi uma escola candidata.

## 24.2. Checklist Mid Magic

- [ ] Fiz Scroll Forge.
- [ ] Tenho estoque de paper.
- [ ] Tenho pelo menos 2 focuses de escola.
- [ ] Tenho Common/Uncommon/Rare Ink.
- [ ] Tenho spellbook intermediário.
- [ ] Tenho armor com mana.
- [ ] Tenho um curio útil.
- [ ] Explorei uma estrutura mágica grande.
- [ ] Preparei rota para Catacombs.

## 24.3. Checklist Late Magic

- [ ] Fiz Arcane Anvil.
- [ ] Tenho Upgrade Orbs ou rota para eles.
- [ ] Derrotei Dead King ou participei de grupo.
- [ ] Tenho The Blood Staff/Necronomicon ou loot equivalente.
- [ ] Tenho school armor.
- [ ] Tenho spellbook especializado.
- [ ] Tenho curio de cooldown/mana/cast.
- [ ] Tenho elixirs para bosses.
- [ ] Tenho portal/Recall para fuga.

## 24.4. Checklist Endgame

- [ ] Tenho build fechada por função.
- [ ] Tenho armor upada.
- [ ] Tenho spellbook upado.
- [ ] Tenho arma imbuída.
- [ ] Tenho curios otimizados.
- [ ] Tenho affixes/gems de Apotheosis se possível.
- [ ] Tenho backup de gear.
- [ ] Tenho rota para Citadel/Echo of Tyros.
- [ ] Tenho sala arcana organizada no servidor.

## 24.5. Estoque recomendado da Torre Arcana

| Item | Estoque mínimo |
|---|---:|
| Arcane Essence | 1024 |
| Arcane Cloth | 256 |
| Arcane Ingot | 128 |
| Paper | 2048 |
| Glass Bottles | 512 |
| Common Ink | 256 |
| Uncommon Ink | 128 |
| Rare Ink | 64 |
| Epic Ink | 16 |
| Legendary Ink | manual/seguro |
| Blank Runestone | 64 |
| Runes por escola | 16-32 |
| Blaze Rod | 256 |
| Ender Pearl | 256 |
| Emerald | 256 |
| Poisonous Potato | 128 |
| Frozen Bone | 64 |
| Divine Pearl | 64 |
| Blood Vial | 128 |
| Echo Shard | raro, guardar |

---

# 25. Performance e regras de servidor

Iron's Spells é divertido, mas várias spells geram entidades, partículas, summons, AoE e projéteis. Em servidor, isso importa.

## 25.1. Spells que exigem cuidado

| Spell | Risco |
|---|---|
| Raise Dead | Muitos summons; pode pesar pathfinding. |
| Summon Vex | Entidades voadoras podem pesar em massa. |
| Summon Swords | Entidades extras em boss fights. |
| Thunderstorm | Muitos hits/efeitos em área. |
| Chain Creeper / Fireball / Raise Hell | Explosões/partículas/dano em área. |
| Black Hole | Controle de muitos mobs; cuidado com arenas e performance. |
| Blizzard / Firefly Swarm | AoE persistente e partículas. |
| Portal | Pode criar confusão/logística se público sem regra. |

## 25.2. Regras recomendadas para Astron City

- Não usar spells explosivas dentro da cidade sem permissão.
- Não deixar summons acumulando em chunks carregados.
- Não criar farms baseadas em summons infinitos.
- Não usar Black Hole/Raise Hell perto de builds públicas.
- Boss fights grandes devem ser anunciadas.
- Portals públicos devem ter placas de destino.
- Torre Arcana deve ter storage organizado.
- Estruturas raras devem ser marcadas no mapa.
- Use spark se uma área mágica começar a causar lag.

## 25.3. Dicas de TPS

- Evite dezenas de mobs mágicos presos em farms sem kill automático.
- Use limites claros para spawners/Apothic Spawners.
- Organize farms com desligamento manual.
- Evite partículas extremas em áreas públicas.
- Use AE2/Storage para reduzir entidade item no chão.
- Limpe summons depois das fights.

---

# 26. Sugestão de capítulos para FTB Quests

## Capítulo: O Despertar Arcano

- Encontrar um Scroll.
- Obter Arcane Essence.
- Craftar Flimsy Journal ou qualquer Spell Book.
- Craftar Inscription Table.
- Inserir uma spell no livro.
- Castar primeira spell.

## Capítulo: Escolha sua Escola

- Obter um Focus de cada escola.
- Craftar/obter uma Rune.
- Escolher escola principal.
- Craftar armor inicial.
- Obter primeiro curio mágico.

## Capítulo: A Forja dos Scrolls

- Entrar no Nether.
- Craftar Scroll Forge.
- Craftar um scroll Common.
- Craftar um scroll Rare.
- Criar loadout de 4 spells.

## Capítulo: A Torre Arcana

- Construir ou visitar Torre Arcana.
- Depositar 16 Arcane Essence no storage público.
- Criar baú por escola.
- Criar sala de teste de spells.
- Criar Portal Frame público.

## Capítulo: Catacombs

- Craftar Wayward Compass.
- Encontrar Catacombs.
- Preparar gear enchanted diamond.
- Derrotar Dead King.
- Obter Blood Staff ou Necronomicon.
- Abrir vault com Bone Key.

## Capítulo: Citadel

- Encontrar Ancient Battlegrounds.
- Obter Cinder Essence.
- Craftar Cinderous Soulcaller.
- Encontrar Citadel.
- Derrotar Echo of Tyros.
- Obter Divine Soulshard.
- Abrir Citadel vault.

## Capítulo: Mestre das Escolas

- Completar um set de school armor.
- Upar spellbook com Upgrade Orb.
- Imbuir uma weapon.
- Aprender uma Eldritch spell.
- Montar build final com curios.

---

# 27. Notas para mantenedores do wiki

## 27.1. Estrutura sugerida de páginas

```text
/src/pages/guides/irons-spells/index.mdx
/src/data/irons-spells/spells.ts
/src/data/irons-spells/schools.ts
/src/data/irons-spells/structures.ts
/src/data/irons-spells/builds.ts
/src/data/irons-spells/hotTopics.ts
```

## 27.2. Componentes úteis

- `SpellCard`: nome, escola, tipo, função, prioridade.
- `SchoolCard`: escola, focus, função, gear recomendado.
- `BuildCard`: spells, armor, curios, rotação.
- `StructureCard`: bioma, loot, perigo, preparação.
- `BossChecklist`: preparo, spells, loot, estratégia.
- `HotTopicCard`: item/spell forte, por que é forte, cuidado.

## 27.3. Tags úteis

```text
magic
rpg
spellbook
support
bossing
exploration
utility
school-fire
school-ice
school-lightning
school-holy
school-ender
school-blood
school-evocation
school-nature
school-eldritch
```

## 27.4. Aviso de precisão para página do wiki

> Receitas, números de mana/cooldown, níveis de spell, drops e atributos podem variar conforme versão, config, datapack, KubeJS e balanceamento do servidor. Use EMI/JEI/Jade no Astron City como fonte final in-game.

---

# 28. Fontes e observações de precisão

Este guia foi construído com base no contexto do Astron City e em documentação pública do Iron's Spells 'n Spellbooks.

Fontes principais consultadas:

- Modlist e contexto do Astron City: `ASTRON_CITY_AI_CONTEXT.md` e `ASTRON CITY.html` fornecidos no projeto.
- CurseForge - Iron's Spells 'n Spellbooks: https://www.curseforge.com/minecraft/mc-mods/irons-spells-n-spellbooks
- Modrinth - Iron's Spells 'n Spellbooks: https://modrinth.com/mod/irons-spells-n-spellbooks
- Documentação oficial Iron Wiki: https://iron.wiki/
- Progression: https://iron.wiki/progression/
- Spells: https://iron.wiki/spells/
- Spellbooks: https://iron.wiki/spellbooks/
- Armor: https://iron.wiki/armor/
- Curios: https://iron.wiki/curios/
- Blocks: https://iron.wiki/blocks/
- Items: https://iron.wiki/items/
- Structures: https://iron.wiki/structures/
- Schools: https://iron.wiki/schools/

Observações:

- O Astron City usa Iron's Spells 'n Spellbooks 1.21.1-3.16.1 no contexto atual conhecido.
- O mod oficial anuncia mais de 100 spells upgradable, 2 spellcasting bosses, 9 enemies/allies/merchants, 12 armor sets, 11 structures, weapon imbuement e armor upgrade systems.
- Para números finais de dano, mana, cooldown e receitas, priorize sempre EMI/JEI do servidor.
- Para balanceamento, trate magia como rota paralela: forte e útil, mas sem invalidar tech, Create, gear e aventura.

---

# Apêndice A - Loadouts rápidos para copiar

## A.1. Livro early seguro

```text
Magic Missile
Heal
Shield
Teleport
```

## A.2. Livro early sem Ender

```text
Firebolt
Icicle
Blessing of Life
Summon Horse
```

## A.3. Livro dungeon

```text
Fireball
Heal
Shield
Frost Step
Spectral Hammer
Recall
```

## A.4. Livro boss grupo

```text
Lightning Lance
Acid Orb
Blight
Oakskin
Heal
Teleport
```

## A.5. Livro suporte grupo

```text
Healing Circle
Fortify
Cleanse
Haste
Heal
Shield
Teleport
```

## A.6. Livro necromante

```text
Raise Dead
Ray of Siphoning
Blood Step
Sacrifice
Wither Skull
Devour
```

## A.7. Livro utility da cidade

```text
Portal
Recall
Summon Ender Chest
Touch Dig
Spectral Hammer
Teleport
```

---

# Apêndice B - Prioridade de spells para novos jogadores

| Prioridade | Spell | Por quê |
|---:|---|---|
| 1 | Heal | Todo mundo precisa sobreviver. |
| 2 | Shield | Defesa simples e forte. |
| 3 | Teleport | Mobilidade muda o jogo. |
| 4 | Magic Missile / Firebolt / Icicle | Dano básico confiável. |
| 5 | Recall | Salva expedições. |
| 6 | Oakskin | Redução de dano forte. |
| 7 | Spectral Hammer | Utility excelente. |
| 8 | Haste | Buff incrível em grupo. |
| 9 | Acid Orb | Debuff muito útil em bosses. |
| 10 | Lightning Lance / Fireball | Começo de DPS sério. |

---

# Apêndice C - Divisão de papéis para servidor

| Papel | Escola | Função no grupo |
|---|---|---|
| Arcanista | Ender/Evocation | Portais, utility e rotas. |
| Clérigo | Holy | Cura, Cleanse, Fortify, Haste. |
| Tempestário | Lightning | DPS de boss. |
| Piromante | Fire | Clear de mobs e burst em área. |
| Criomante | Ice | Controle de campo. |
| Druida tóxico | Nature | Debuffs, armor shred e anti-heal. |
| Necromante | Blood | Summons e sustain. |
| Ocultista | Eldritch | Magia rara e utility endgame. |
| Cavaleiro arcano | Hybrid | Arma forte + imbuements + melee spells. |

---

# Apêndice D - Problemas comuns e solução

| Problema | Causa provável | Solução |
|---|---|---|
| Sem mana o tempo todo | Pouco Max Mana/Regen | Use Ring of Mana, Amethyst Charm, armor de mana. |
| Cast interrompido | Spells Long sem proteção | Use Amulet of Concentration ou posicione melhor. |
| Livro sem slots suficientes | Spellbook fraco | Faça upgrade ou troque por livro melhor. |
| Não encontro scroll bom | Falta explorar estruturas mágicas | Rotas de towers/forts e Scroll Forge. |
| Boss mata rápido | Sem suporte/defesa | Oakskin, Fortify, Healing Circle, Cleanse. |
| Estou fraco em grupo | Build sem função | Escolha DPS, suporte, controle ou utility. |
| Lag em lutas | Summons/AoE demais | Reduza summons, limpe mobs, use spark. |
| Gastei upgrade errado | Falta planejamento | Guarde Upgrade Orbs para spellbook/armor final. |
