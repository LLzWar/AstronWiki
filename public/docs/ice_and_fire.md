---
title: "Ice and Fire Community Edition - Guia Completo"
modpack: "ASTRON CITY"
minecraft: "1.21.1"
loader: "NeoForge"
mods_cobertos:
  - "Ice And Fire Community Edition 2.0-beta.17"
  - "Ice and Fire: Spellbooks 2.3.3-1.21.1"
  - "Jupiter 2.3.7"
  - "Uranus 2.4.1"
  - "Better Combat / Combat Roll"
  - "Iron's Spells 'n Spellbooks"
  - "Apotheosis / Apothic suite"
  - "Artifacts / Relics / Curios"
status: "Guia wiki-ready"
ultima_revisao: "2026-07-02"
---

# Ice and Fire Community Edition - Guia Completo para o Astron City

> Guia escrito para o **ASTRON CITY**, um modpack NeoForge 1.21.1 de tecnologia, aventura, magia, bosses, dungeons, espaço, construção coletiva e progressão longa em servidor survival.
>
> Este guia cobre **Ice And Fire Community Edition**, **Ice and Fire: Spellbooks** e integrações relevantes com Iron's Spells, Apotheosis, Better Combat, Curios, AE2/Create e a cultura de servidor do Astron City.

---

## Sumário

1. [O que é Ice and Fire no Astron City](#1-o-que-e-ice-and-fire-no-astron-city)
2. [Mods cobertos e papel de cada integração](#2-mods-cobertos-e-papel-de-cada-integracao)
3. [Como usar este guia](#3-como-usar-este-guia)
4. [Glossário rápido](#4-glossario-rapido)
5. [Mapa de progressão completo](#5-mapa-de-progressao-completo)
6. [Diferenças da Community Edition](#6-diferencas-da-community-edition)
7. [Primeiros passos: Bestiary, Manuscripts e leitura do mod](#7-primeiros-passos-bestiary-manuscripts-e-leitura-do-mod)
8. [Recursos, materiais e itens por família](#8-recursos-materiais-e-itens-por-familia)
9. [Dragões: elementos, estágios, ovos, loot e comportamento](#9-dragoes-elementos-estagios-ovos-loot-e-comportamento)
10. [Early Game - sobreviver ao mundo fantástico](#10-early-game---sobreviver-ao-mundo-fantastico)
11. [Mid Game - caça controlada, montarias e primeiras escamas](#11-mid-game---caca-controlada-montarias-e-primeiras-escamas)
12. [Late Game - caçada a dragões e preparação para cavernas](#12-late-game---cacada-a-dragoes-e-preparacao-para-cavernas)
13. [End Game - ovos, dragões próprios, Dragonforge e Dragonsteel](#13-end-game---ovos-dragoes-proprios-dragonforge-e-dragonsteel)
14. [Catálogo de criaturas e encontros](#14-catalogo-de-criaturas-e-encontros)
15. [Guia de combate contra dragões](#15-guia-de-combate-contra-dragoes)
16. [Montarias, pets e estábulos de criaturas](#16-montarias-pets-e-estabulos-de-criaturas)
17. [Dragonforge e produção de Dragonsteel](#17-dragonforge-e-producao-de-dragonsteel)
18. [Armas, armaduras, ferramentas e equipamentos](#18-armas-armaduras-ferramentas-e-equipamentos)
19. [Ice and Fire: Spellbooks](#19-ice-and-fire-spellbooks)
20. [Fábricas, farms e soluções populares](#20-fabricas-farms-e-solucoes-populares)
21. [HOT TOPICS - o que é muito forte e útil](#21-hot-topics---o-que-e-muito-forte-e-util)
22. [Integrações com outros mods do Astron City](#22-integracoes-com-outros-mods-do-astron-city)
23. [Checklists de progresso e estoque](#23-checklists-de-progresso-e-estoque)
24. [Setup recomendado de combate, encantamentos e affixes](#24-setup-recomendado-de-combate-encantamentos-e-affixes)
25. [Performance, configuração e regras de servidor](#25-performance-configuracao-e-regras-de-servidor)
26. [Sugestão de capítulos para FTB Quests](#26-sugestao-de-capitulos-para-ftb-quests)
27. [Notas para mantenedores do wiki](#27-notas-para-mantenedores-do-wiki)
28. [Fontes e observações de precisão](#28-fontes-e-observacoes-de-precisao)

---

<div class="mc-recipe" style="margin: 2rem auto;">
  <div class="mc-grid">
    <div class="mc-slot"></div>
    <div class="mc-slot" title="Dragonbone"><img src="/assets/sprites/dragonbone.png" alt="Dragonbone" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
    <div class="mc-slot" title="Dragonbone"><img src="/assets/sprites/dragonbone.png" alt="Dragonbone" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot"></div>
    <div class="mc-slot"></div>
    <div class="mc-slot" title="Witherbone"><img src="/assets/sprites/witherbone.png" alt="Witherbone" onError="this.src='/assets/sprites/barrier.png'" /></div>
    <div class="mc-slot"></div>
  </div>
  <div class="mc-arrow"></div>
  <div class="mc-result" title="Dragonbone Sword"><img src="/assets/sprites/dragonbone_sword.png" alt="Dragonbone Sword" onError="this.src='/assets/sprites/barrier.png'" /></div>
</div>

# 1. O que é Ice and Fire no Astron City

**Ice and Fire Community Edition** é o grande mod de fantasia, dragões, criaturas mitológicas e caça lendária do Astron City. Ele adiciona uma camada de mundo perigoso: dragões sobrevoando biomas, cavernas subterrâneas com fêmeas de estágio alto, criaturas úteis para montaria, monstros com drops únicos, armas e armaduras feitas de ossos, escamas, sangue e aço dracônico.

No Astron City, Ice and Fire deve ser tratado como uma das principais rotas de **aventura + RPG + progressão de equipamentos**. Ele não é só decoração de mundo. Ele cria objetivos claros:

- encontrar e estudar criaturas com o **Bestiary**;
- sobreviver a áreas dominadas por dragões;
- organizar expedições com amigos;
- domar montarias e criaturas úteis;
- coletar escamas, ossos, sangue, ovos e materiais raros;
- montar uma **Dragonforge**;
- produzir **Dragonsteel**;
- combinar Dragonsteel com encantamentos, affixes, curios, spells e equipamentos de outros mods.

A fantasia do mod dentro do pack é:

> **A cidade industrial de Astron cresce enquanto o mundo ao redor continua selvagem: dragões, serpentes, trolls, gorgons, hydras e criaturas míticas transformam exploração em evento de servidor.**

## 1.1. Papel na progressão do pack

| Fase | Papel do Ice and Fire |
|---|---|
| Early Game | Perigo ambiental, Bestiary, Manuscripts, silver/sapphire, primeiros materiais e fuga de dragões. |
| Mid Game | Primeiras caçadas menores, montarias, armaduras de escama, dragonbone weapons, controle de rotas perigosas. |
| Late Game | Caça a dragões estágio 3+, cavernas subterrâneas, ovos, sangue, dragon bones, dragon skulls, loot de alto valor. |
| End Game | Dragonforge, Dragonsteel, dragões próprios, armaduras finais, integração com Spellbooks e builds lendárias. |
| Servidor | Eventos de caçada, arenas, estábulos de montarias, museu de troféus, comércio de escamas/ossos/sangue. |

## 1.2. Filosofia de balanceamento no Astron City

Ice and Fire deve ser poderoso, mas não trivializar o resto do pack. A recomendação para o Wiki e para quests é:

- dragões devem parecer **ameaças reais**, não mobs comuns;
- Dragonsteel deve ser **late/endgame**, não item de rush no primeiro dia;
- ovos de dragão devem virar evento e conquista;
- Dragonforge deve exigir preparo logístico e de segurança;
- montarias são úteis, mas precisam de regras para evitar lag e abandono;
- loot lendário deve se integrar a Apotheosis, Iron's Spells, Silent Gear, Relics, Cataclysm e Draconic sem invalidar tudo.

---

# 2. Mods cobertos e papel de cada integração

| Mod | Papel no guia |
|---|---|
| **Ice And Fire Community Edition** | Conteúdo principal: dragões, criaturas, estruturas, materiais, Dragonforge, Dragonsteel, equipamentos e Bestiary. |
| **Ice and Fire: Spellbooks** | Integração com Iron's Spells: armaduras mágicas de Dragonsteel, spellbook lendário, Dragon Priest Staff e máscaras. |
| **Jupiter / Uranus** | Bibliotecas/infraestrutura do ecossistema IAFEnvoy no pack. |
| **Better Combat / Combat Roll** | Muda a sensação de combate melee contra criaturas grandes; torna timing, alcance e esquiva mais importantes. |
| **Apotheosis / Apothic** | Encantamentos, affixes, gems e progressão RPG aplicada em armas/armaduras de Ice and Fire. |
| **Artifacts / Relics / Curios** | Acessórios defensivos, mobilidade e utilidade para caçada de dragões. |
| **Iron's Spells** | Magia ofensiva, defensiva, cura e mobilidade; sinergia direta via Ice and Fire: Spellbooks. |
| **AE2 / Create / MI / Oritech** | Suporte logístico: storage, craft, transporte, infraestrutura de arenas/estábulos e bases de expedição. |
| **Jade / JEI / EMI / JER** | Descoberta de blocos, receitas, drops e entidades. |
| **Lootr / Corpse / Voice Chat** | Qualidade de vida em multiplayer durante expedições perigosas. |

---

# 3. Como usar este guia

Este guia é escrito para três públicos:

1. **Jogador novo:** quer entender como não morrer para o primeiro dragão e o que vale a pena coletar.
2. **Caçador/RPG:** quer montar build de combate, pegar loot, domar criaturas e fazer gear forte.
3. **Mantenedor do Wiki/Servidor:** quer organizar quests, balanceamento, regras, farms e documentação.

## 3.1. Regra de precisão

O Astron City usa muitos mods que podem alterar receitas, tags, loot, geração, atributos e encantamentos. Portanto:

> **Use este guia como rota de progressão e referência de sistema. Para receita, número de dano, spawn exato e loot final, sempre valide no EMI/JEI/JER e nas configs do servidor.**

Isso é especialmente importante para:

- Dragonforge;
- Dragonsteel;
- spawns por bioma;
- loot de estruturas;
- affixes/raridades do Apotheosis;
- compatibilidade de spellbooks;
- alterações futuras por KubeJS/datapacks.

---

# 4. Glossário rápido

| Termo | Significado |
|---|---|
| **Bestiary** | Livro-guia do Ice and Fire. Explica criaturas, materiais, Dragonforge e mecânicas. |
| **Manuscript** | Item usado para desbloquear capítulos do Bestiary. |
| **Dragon Roost** | Ninho/área de dragão na superfície. Normalmente associado a dragões menores/médios. |
| **Dragon Cave** | Caverna subterrânea de dragão estágio alto; geralmente mais perigosa e valiosa. |
| **Stage** | Estágio de crescimento do dragão. Existem 5 estágios. |
| **Dragon Blood** | Sangue de dragão obtido de cadáver de dragão; usado para Dragonsteel e receitas dracônicas. |
| **Dragon Scales** | Escamas usadas em armaduras e crafts. Tipo depende do elemento/cor do dragão. |
| **Dragon Bones** | Ossos usados em armas, blocos e estrutura da Dragonforge. |
| **Dragon Skull** | Caveira/troféu; também pode ter uso em crafts. |
| **Dragon Egg** | Ovo dropado por fêmeas de estágio alto; permite chocar dragão próprio. |
| **Dragonforge** | Multibloco usado para criar Dragonsteel com sangue + metal + sopro de dragão. |
| **Dragonsteel** | Metal final do mod: Fire/Ice/Lightning Dragonsteel. Base para gear endgame. |
| **Dragonsteel Mage Gear** | Gear mágico do addon Ice and Fire: Spellbooks. |
| **Dragon Priest** | Tema de gear do addon Spellbooks: staff, masks, legendary spellbook. |
| **Myrmex** | Conteúdo do mod original que não deve ser assumido no CE do pack sem validação. |

---

# 5. Mapa de progressão completo

## 5.1. Visão geral

```txt
Sobrevivência básica
  -> Bestiary + Manuscripts
  -> Reconhecimento de biomas e ninhos
  -> Silver/Sapphire e primeiros materiais
  -> Caça de criaturas menores
  -> Primeira montaria ou pet útil
  -> Primeiras escamas/ossos de dragão
  -> Armadura de escala + armas de osso
  -> Caça organizada a Stage 3+
  -> Exploração de Dragon Caves
  -> Ovo de dragão
  -> Crescimento e controle de dragão próprio
  -> Dragonforge
  -> Dragonsteel
  -> Dragonsteel encantado/affixado
  -> Dragonsteel Mage Gear + Spellbooks
  -> Build lendária de servidor
```

## 5.2. Progressão por fase

| Fase | Objetivo | Resultado esperado |
|---|---|---|
| **Fase 0** | Sobreviver e identificar ameaças | Saber fugir de dragões, sirens, gorgons, sea serpents e death worms. |
| **Fase 1** | Fazer Bestiary | Ter fonte de consulta in-game e começar a gastar Manuscripts. |
| **Fase 2** | Coletar materiais iniciais | Silver, Sapphire, Manuscripts, ossos, drops menores. |
| **Fase 3** | Domar/usar montarias | Hippogryph/Amphithere/Hippocampus conforme disponibilidade. |
| **Fase 4** | Caçar criaturas médias | Cyclops, Trolls, Death Worms, Sea Serpents, Stymphalian Birds, Hydra. |
| **Fase 5** | Caçar dragões controladamente | Obter scales, bones, skulls, flesh e blood. |
| **Fase 6** | Obter ovo | Encontrar e derrotar fêmea stage 4/5 em Dragon Cave. |
| **Fase 7** | Criar dragão próprio | Chocar, crescer, controlar, equipar e armazenar dragão. |
| **Fase 8** | Fazer Dragonforge | Montar multibloco seguro longe da base principal. |
| **Fase 9** | Produzir Dragonsteel | Usar sangue + iron + sopro de dragão compatível. |
| **Fase 10** | Build final | Gear Dragonsteel encantado/affixado + Spellbooks + curios + mount. |

---

# 6. Diferenças da Community Edition

O Astron City usa **Ice And Fire Community Edition**, não necessariamente a versão original antiga do mod. A Community Edition é um fork não oficial com suporte moderno, otimizações, rewrites e integrações.

## 6.1. Pontos importantes

| Tema | O que considerar |
|---|---|
| Versão | O pack lista **Ice And Fire Community Edition 2.0-beta.17** para Minecraft 1.21.1 NeoForge. |
| Conteúdo | A CE mantém o conteúdo original em grande parte, mas a própria documentação indica exceções, especialmente Myrmexes. |
| Config | A CE usa configs próprias em `config/iceandfire`, com arquivo client e common. |
| Biomas | Configuração de biomas pode depender de tags/datapacks. |
| Integrações | A CE lista integração com JEI/EMI, Jade, Better Combat, Iron's Spells via addon e Ponder para Dragon Forge em 1.21+. |
| Save safety | Não substitua builds/versões de Ice and Fire de forma direta em mundo existente sem backup. |

## 6.2. Regra para o Wiki

Sempre escreva:

> **No Astron City, considere o comportamento da Community Edition 1.21.1 e confirme no EMI/JEI/Bestiary/configs. Guias do Ice and Fire original são úteis, mas podem conter conteúdo diferente.**

---

# 7. Primeiros passos: Bestiary, Manuscripts e leitura do mod

## 7.1. Bestiary

O **Bestiary** é o livro que ensina Ice and Fire dentro do jogo. Ele é obrigatório para qualquer jogador que queira entender o mod sem depender só do wiki externo.

### Como obter

- Craft com **3 Manuscripts**.
- Pode aparecer em baús de **Dragon Roosts** e **Dragon Caves**.
- Use o **Bestiary Lectern** para inserir Manuscripts e desbloquear capítulos.

### Como usar no servidor

1. Crie um Bestiary pessoal.
2. Faça um Bestiary público na biblioteca da cidade.
3. Guarde Manuscripts em storage compartilhado.
4. Desbloqueie capítulos conforme o grupo encontra criaturas.
5. Crie placas no museu/academia da cidade com resumo dos capítulos importantes.

## 7.2. Ordem recomendada de capítulos

| Prioridade | Capítulo | Por quê |
|---:|---|---|
| 1 | Fire/Ice/Lightning Dragons | Saber reconhecer, fugir e caçar. |
| 2 | Dragon Materials | Entender scales, bones, skulls, blood e flesh. |
| 3 | Tamed Dragons | Evitar perder ovo/dragão por falta de controle. |
| 4 | Dragon Forge | Preparar o endgame antes de gastar materiais. |
| 5 | Hippogryphs / Amphitheres / Hippocampi | Montarias e mobilidade. |
| 6 | Gorgons / Sirens / Sea Serpents | Encontros perigosos que matam por surpresa. |
| 7 | Hydra / Cyclops / Trolls / Death Worms | Minibosses e materiais úteis. |
| 8 | Dread / Undead / Ghost | Conteúdo sombrio/estruturas se presente na versão/config. |

---

# 8. Recursos, materiais e itens por família

Esta seção agrupa os itens por função. A lista é wiki-ready, mas deve ser validada com EMI/JEI do pack, porque nomes internos e receitas podem variar.

## 8.1. Itens de conhecimento

| Item | Uso | Prioridade |
|---|---|---|
| **Manuscript** | Desbloquear capítulos do Bestiary. | Alta |
| **Bestiary** | Guia in-game do mod. | Alta |
| **Bestiary Lectern** | Consome Manuscripts para expandir Bestiary. | Alta |

## 8.2. Minérios e gemas

| Recurso | Onde/como aparece | Uso principal |
|---|---|---|
| **Silver Ore / Silver Ingot** | Minério mágico; útil contra mortos-vivos e crafts do mod. | Armas/ferramentas de prata, receitas e progressão. |
| **Sapphire Ore / Sapphire** | Associado a biomas frios/snowy no mod original. | Crafts mágicos, trade/crafting e itens temáticos. |
| **Gold/Silver Nugget Piles** | Piles decorativos/de loot. | Decoração, loot, conversão. |

## 8.3. Materiais de dragão

| Material | Obtido de | Uso |
|---|---|---|
| **Fire Dragon Scale** | Dragões de fogo. | Armadura de escala, crafts e decoração. |
| **Ice Dragon Scale** | Dragões de gelo. | Armadura de escala, crafts e decoração. |
| **Lightning Dragon Scale** | Dragões de raio. | Armadura de escala, crafts e decoração. |
| **Dragon Bone** | Cadáveres de dragão. | Dragonbone weapons, Dragonforge, decoração. |
| **Dragon Skull** | Cadáveres de dragão. | Troféu, crafts e estética. |
| **Dragon Flesh** | Cadáveres de dragão. | Food/uso específico conforme versão/config. |
| **Dragon Heart** | Loot raro/importante de dragões. | Crafts avançados conforme versão/config. |
| **Dragon Blood** | Usar bottle no cadáver de dragão. | Dragonsteel e alquimia/crafts dracônicos. |
| **Dragon Egg** | Fêmeas stage 4/5 em cavernas. | Chocar dragão próprio. |

## 8.4. Tipos de Dragonsteel

| Tipo | Fonte | Efeito/identidade |
|---|---|---|
| **Fire Dragonsteel** | Fire Dragonforge + Fire Blood + sopro de Fire Dragon. | Tema de fogo, burn/fire aspect, agressivo. |
| **Ice Dragonsteel** | Ice Dragonforge + Ice Blood + sopro de Ice Dragon. | Tema de congelamento, controle e defesa. |
| **Lightning Dragonsteel** | Lightning Dragonforge + Lightning Blood + sopro de Lightning Dragon. | Tema de raio, burst e dano explosivo. |

## 8.5. Materiais de criaturas

| Material | Criatura | Uso prático |
|---|---|---|
| **Sea Serpent Scales/Fangs** | Sea Serpent | Armor/weapons de água, troféus e crafts. |
| **Death Worm Chitin/Egg** | Death Worm | Armor/tools, pet/farm específico se disponível. |
| **Troll Leather/Tusk/Weapon** | Troll | Gear, craft e troféu. |
| **Hydra Heart/Fang** | Hydra | Itens de combate/regeneração conforme versão/config. |
| **Pixie Dust/Wings** | Pixies | Itens mágicos e utilidade. |
| **Siren Tear/Scales** | Sirens | Craft/loot mágico. |
| **Stymphalian Feather** | Stymphalian Birds | Arrows/weapons e crafts. |
| **Cockatrice Eye/Feather** | Cockatrice | Craft e itens especiais. |
| **Gorgon Head** | Gorgon | Item perigosíssimo de petrificação/controle. |
| **Amphithere Feather** | Amphithere | Craft/montaria/itens conforme versão. |
| **Hippogryph Feather** | Hippogryph | Craft, montaria e decoração. |
| **Hippocampus Fin/Scales** | Hippocampus | Utilidade aquática e decoração. |
| **Witherbone / Witherbone Shard** | Undead/skeleton-related | Haste de armas Dragonbone/Dragonsteel e crafts. |

## 8.6. Blocos e estruturas craftáveis

| Bloco | Uso |
|---|---|
| **Dragon Bone Block** | Bloco estrutural, Dragonforge, decoração de troféu. |
| **Dragonforge Brick** | Corpo da Dragonforge. |
| **Dragonforge Core** | Coração da Dragonforge. |
| **Dragonforge Aperture/Input** | Entrada/frente onde o sopro do dragão alimenta a forge. |
| **Charred/Frozen/Lightning/Ashen blocks** | Blocos temáticos gerados por ataques/estruturas conforme versão. |
| **Gold/Silver piles** | Loot/decoração de covis. |

## 8.7. Itens de controle de dragão

| Item | Uso |
|---|---|
| **Dragon Command Staff** | Dar ordens ao dragão domesticado. |
| **Dragon Horn** | Guardar/carregar dragão domesticado com segurança. |
| **Dragon Flute** | Chamar/gerenciar dragão próximo conforme versão. |
| **Dragon Crystal / Summoning Crystal** | Localizar/chamar dragões vinculados conforme versão/config. |
| **Dragon Meal** | Crescer dragão domesticado. |
| **Dragon Armor** | Equipar dragões com proteção. |

---

# 9. Dragões: elementos, estágios, ovos, loot e comportamento

Dragões são o centro do mod. A Community Edition documenta três elementos: **Fire**, **Ice** e **Lightning**, cada um com cores próprias, estágios de crescimento e habilidades.

## 9.1. Elementos

| Elemento | Onde procurar | Habilidade | Perigo principal | Contramedida |
|---|---|---|---|---|
| **Fire Dragon** | Biomas não frios; geralmente muitos biomas com temperatura adequada. | Sopro de fogo, queima terreno e mobs. | Incêndio, dano contínuo, destruição. | Fire Resistance, blocos não inflamáveis, combate à distância. |
| **Ice Dragon** | Biomas frios/snowy. | Sopro de gelo, spikes, freeze. | Controle de movimento, burst, terreno congelado. | Mobilidade, cura, ranged, resistências gerais. |
| **Lightning Dragon** | Jungle, Savanna, Badlands no CE. | Sopro de raio. | Dano explosivo e imprevisível. | Distância, cobertura, evitar chuva/áreas abertas se possível. |

## 9.2. Estágios de crescimento

| Stage | Papel | Observação |
|---|---|---|
| **Stage 1** | Bebê | Dragão recém-chocado/domesticado. |
| **Stage 2** | Jovem | Cresce, começa a ficar mais útil/perigoso. |
| **Stage 3** | Adulto funcional | Pode alimentar Dragonforge se for do elemento correto. |
| **Stage 4** | Dragão grande | Spawna em cavernas subterrâneas; fêmeas podem dropar ovos. |
| **Stage 5** | Dragão ancião | Ameaça máxima comum do mod; prioridade de grupo. |

## 9.3. Sexo e ovos

- Machos e fêmeas têm diferenças visuais.
- Fêmeas de stage 4/5 são o alvo para **Dragon Eggs**.
- O ovo é um dos objetivos mais importantes do mod.
- Nunca abra caverna de dragão sem rota de fuga e recuperação de corpo.

## 9.4. Como obter loot de dragão

Após matar um dragão:

1. Garanta que a área está segura.
2. Decida se quer **blood** ou loot normal.
3. Use bottles no cadáver para obter **Dragon Blood**.
4. Depois colete bones/scales/skull/flesh conforme possível.
5. Guarde materiais em storage separado por elemento.

> Em muitos setups de Ice and Fire, coletar blood altera/consome parte do loot do cadáver. No Astron City, valide o comportamento exato no servidor e ensine os jogadores a escolher antes de clicar.

## 9.5. Hatching de ovos

| Ovo | Condição temática | Recomendações |
|---|---|---|
| **Fire Dragon Egg** | Calor/fogo/lava conforme versão. | Chocar em área cercada e anti-incêndio. |
| **Ice Dragon Egg** | Frio/água/gelo conforme versão. | Chocar longe de máquinas e villagers. |
| **Lightning Dragon Egg** | Tempestade/condição de raio conforme versão. | Chocar em área aberta, mas protegida. |

Após chocar:

- use **Dragon Meal** para crescimento controlado;
- use **Command Staff** para comandos;
- guarde em **Dragon Horn** quando não estiver usando;
- não deixe dragão grande solto em área pública;
- defina dono/responsável no servidor.

---

# 10. Early Game - sobreviver ao mundo fantástico

## 10.1. Objetivo do early game

Nesta fase, Ice and Fire é principalmente ameaça e descoberta. O jogador ainda não deve tentar matar dragões grandes.

Ao final do early, o jogador deve ter:

- Bestiary básico;
- Manuscripts guardados;
- noção de quais biomas têm dragões;
- primeiros recursos como Silver/Sapphire;
- armadura vanilla/modded decente;
- food boa;
- cama, waystones/markers se houver, e rota de fuga;
- mochila com água, blocos, escudo e recall/teleporte se o pack tiver.

## 10.2. Checklist de sobrevivência contra dragões

| Item | Por quê |
|---|---|
| Shield | Reduz risco contra mobs menores e projéteis. |
| Water bucket | Ajuda contra fogo e queda. |
| Blocks | Cobertura, ponte, fuga e bloqueio de linha de visão. |
| Bow/Crossbow | Dragões devem ser enfrentados à distância inicialmente. |
| Food boa | Regeneração constante. |
| Fire Resistance | Essencial contra fire dragons. |
| Corpse waypoint | Ajuda a recuperar item após morte. |
| Voice Chat | Coordenação de grupo durante caçadas. |

## 10.3. O que evitar no early game

- Atacar dragão por curiosidade.
- Entrar em caverna subterrânea com sons de dragão.
- Ficar perto de oceano aberto sem olhar para Sea Serpents.
- Olhar/chegar em Gorgon sem preparo.
- Seguir Sirens sem ranged weapon.
- Levar villagers/animais para área de dragão.
- Chocar ovo sem ter Command Staff/Horn prontos.

## 10.4. Primeira rota recomendada

```txt
Dia 1-3:
  - sobreviver, food, cama, escudo, ranged weapon
  - marcar visualmente dragon roosts e caves
  - NÃO lutar contra dragão grande

Dia 4-10:
  - procurar Manuscripts e Bestiary
  - minerar silver/sapphire se encontrar
  - fazer gear vanilla/modded sólido
  - explorar criaturas menores com cautela

Depois:
  - montar kit de caça
  - chamar 2+ jogadores para primeira caçada séria
  - recuperar scales/bones/blood
```

---

# 11. Mid Game - caça controlada, montarias e primeiras escamas

## 11.1. Objetivo do mid game

O mid game é quando Ice and Fire começa a render poder real. Você ainda não está pronto para Dragonsteel, mas já pode:

- matar criaturas médias;
- obter materiais úteis;
- domar montarias;
- fazer armor de escamas;
- craftar dragonbone weapons;
- limpar Dragon Roosts de menor risco;
- criar rotas de exploração para o servidor.

## 11.2. Prioridades de mid game

| Prioridade | Por quê |
|---|---|
| **Hippogryph/Amphithere** | Mobilidade aérea antes de elytra/late game. |
| **Sea Serpent loot** | Gear aquático e troféus. |
| **Cyclops/Troll/Hydra** | Materiais e desafio de combate sem ser dragão final. |
| **Dragon scales** | Armadura forte antes de Dragonsteel. |
| **Dragon bones** | Armas Dragonbone e blocos para Dragonforge. |
| **Dragon blood** | Começar estoque para Dragonsteel. |

## 11.3. Primeira caçada a dragão

### Setup mínimo recomendado

- grupo de 2-4 jogadores;
- ranged weapon encantada;
- Fire Resistance se for Fire Dragon;
- armadura diamond/netherite/Silent Gear/Apotheosis;
- comida alta;
- blocos para cobertura;
- backup de recuperação de corpo;
- baú/barrel para loot;
- waypoint do local.

### Estratégia segura

1. Marque o ninho sem entrar no alcance do sopro.
2. Limpe mobs ao redor.
3. Monte cobertura de pedra/obsidian/deepslate longe da base.
4. Ataque à distância para puxar.
5. Divida funções: tanque/distração, ranged DPS, suporte/curas, loot safety.
6. Não lute perto de builds, villagers ou farms.
7. Depois da morte, decida blood vs loot normal.

---

# 12. Late Game - caçada a dragões e preparação para cavernas

## 12.1. Objetivo do late game

Aqui começa a caça de verdade:

- localizar Dragon Caves;
- enfrentar stage 4/5;
- obter ovos;
- coletar grande quantidade de bones/scales/blood;
- preparar Dragonforge;
- transformar Ice and Fire em progressão final de gear.

## 12.2. Dragon Caves

Dragon Caves são encontros subterrâneos perigosos. Elas podem conter dragões maiores, mais loot e ovos se o dragão for fêmea.

### Preparação obrigatória

| Categoria | Recomendação |
|---|---|
| Gear | Armor encantada/affixada, Feather Falling, Protection, Fire Protection opcional. |
| Armas | Ranged forte + melee backup. |
| Magia | Heal, shield, mobility e damage spells se usando Iron's Spells. |
| Blocos | Obsidian/deepslate/stone para cobertura. |
| Consumíveis | Potions, food, golden apples, totems se disponíveis. |
| Logística | Ender chest/backpack/AE2 remote se permitido. |
| Grupo | Mínimo 2 jogadores; ideal 3-5. |

## 12.3. Técnicas de caverna

- Nunca cave direto em linha reta até o som do dragão sem scout.
- Use túneis laterais e janelas de tiro.
- Evite abrir a câmara inteira de uma vez.
- Se a caverna estiver perto de base, considere abandonar ou preparar arena externa.
- Leve blocos resistentes.
- Tenha plano de evacuação.
- Grave coordenadas e chunk.

---

# 13. End Game - ovos, dragões próprios, Dragonforge e Dragonsteel

## 13.1. Objetivos finais do mod

| Objetivo | Resultado |
|---|---|
| Obter ovo de Fire/Ice/Lightning | Possuir dragão próprio de cada elemento. |
| Crescer dragão até stage 3+ | Alimentar Dragonforge. |
| Construir Dragonforge de cada elemento | Produzir Dragonsteel. |
| Fazer set Dragonsteel | Melhor gear base do mod. |
| Encantar/affixar Dragonsteel | Build final de boss hunter. |
| Fazer Dragonsteel Mage Gear | Híbrido dragão + Iron's Spells. |
| Criar estábulo/dragódromo | Infraestrutura de servidor. |

## 13.2. Plano de endgame recomendado

```txt
1. Definir equipe de caça.
2. Localizar caverna stage 4/5.
3. Derrotar fêmea e recuperar ovo.
4. Chocar em área segura.
5. Criar dragon nursery.
6. Crescer até stage 3+.
7. Construir Dragonforge longe da cidade.
8. Produzir Dragonsteel com sangue do elemento correto.
9. Craftar gear.
10. Encantar, affixar e gemar.
11. Guardar dragão em Dragon Horn quando não estiver em uso.
12. Documentar no Wiki/FTB Quests como conquista do servidor.
```

## 13.3. Dragonsteel como objetivo de servidor

Dragonsteel é poderoso demais para ser tratado como craft casual. Uma boa abordagem:

- **Primeiro Dragonsteel Ingot** vira conquista do grupo.
- **Primeiro set completo** vira evento/museu.
- **Primeira Dragonforge pública** deve ter dono/responsável.
- **Dragões usados na forge** devem ficar em área segura e documentada.
- **Sangue e ovos** devem ter regras de divisão para evitar conflito.

---

# 14. Catálogo de criaturas e encontros

## 14.1. Dragões

| Criatura | Onde aparece | Perigo | Drops/valor | Dica |
|---|---|---|---|---|
| **Fire Dragon** | Biomas quentes/temperados conforme config. | Incêndio, dano em área, destruição. | Scales, bones, skull, blood, egg. | Fire Resistance é o maior divisor de águas. |
| **Ice Dragon** | Biomas frios. | Freeze, spikes, controle. | Scales, bones, skull, blood, egg. | Mobilidade e cura são essenciais. |
| **Lightning Dragon** | Jungle, Savanna, Badlands no CE. | Burst de raio, dano alto. | Scales, bones, skull, blood, egg. | Evite campo aberto sem cobertura. |

## 14.2. Criaturas passivas/neutras/tamáveis

| Criatura | Função | Onde procurar | Uso no survival |
|---|---|---|---|
| **Hippogryph** | Montaria aérea | Montanhas/alpine conforme versão. | Mobilidade, exploração, transporte pessoal. |
| **Hippocampus** | Montaria aquática | Oceanos. | Exploração marítima e travessias. |
| **Amphithere** | Montaria aérea rápida | Jungles. | Mobilidade avançada e estilo. |
| **Pixie** | Criatura mágica/trapaceira | Florestas/pixie villages. | Pixie dust, interação mágica, decoração. |
| **Cockatrice** | Pet/ameaça | Savannas/áreas abertas conforme versão. | Controle e drop específico. |

## 14.3. Criaturas hostis e minibosses

| Criatura | Papel | Perigo | Drop/valor | Estratégia |
|---|---|---|---|---|
| **Sea Serpent** | Ameaça aquática grande | Dano alto no mar. | Scales/fangs/gear. | Lute de barco/terra, evite água aberta sem preparo. |
| **Siren** | Ameaça costeira | Encanto/atração. | Tears/scales/loot mágico. | Ataque à distância; não entre em pânico na água. |
| **Cyclops** | Miniboss terrestre | Dano físico alto. | Eye/loot e estrutura. | Kite, ranged, cuidado com agarrões/knockback. |
| **Troll** | Ameaça de cavernas | Tanky, melee pesado. | Leather/tusk/weapon. | Use mobilidade e evite trocar hit parado. |
| **Death Worm** | Ameaça de deserto | Emboscada subterrânea. | Chitin/egg. | Fique em terreno alto, use ranged. |
| **Hydra** | Miniboss de pântano | Veneno/regeneração/cabeças. | Hydra heart/fangs. | Burst coordenado e cura constante. |
| **Gorgon** | Encontro letal | Petrificação/instakill conforme versão. | Gorgon Head. | Nunca enfrente sem estudar; use blindfold/estratégia. |
| **Stymphalian Bird** | Enxame aéreo | Projéteis/pressão. | Feathers. | Ranged/AoE, escudo e cobertura. |
| **Dread/Undead/Ghost** | Conteúdo sombrio | Varia por estrutura/config. | Dread shards/loot. | Use gear anti-undead e iluminação. |

## 14.4. Myrmexes

A documentação da Community Edition informa que o conteúdo original está presente com exceções, incluindo Myrmexes. Portanto, no Astron City:

> **Não monte quest, guia de progressão ou farm dependente de Myrmex sem confirmar no mundo/EMI/configs.**

---

# 15. Guia de combate contra dragões

## 15.1. Antes da luta

| Preparação | Motivo |
|---|---|
| Definir elemento do dragão | Define resistência, arena e tipo de risco. |
| Criar waypoint | Recuperação de corpo e retorno do grupo. |
| Limpar mobs menores | Evita caos durante sopro/voo. |
| Preparar cobertura | Reduz dano de breath e projéteis. |
| Levar ranged | Dragões voam e punem melee. |
| Levar blocos resistentes | Permite refazer cobertura. |
| Levar potions | Resistência, cura, força, velocidade. |
| Definir divisão do loot | Evita briga pós-kill. |

## 15.2. Durante a luta

- Não todos fiquem grudados; sopro em área pode derrubar o grupo.
- Um jogador deve manter atenção do dragão enquanto outros dão dano.
- Não lute dentro de floresta se for Fire Dragon.
- Não lute no mar contra dragão + sea serpent ao mesmo tempo.
- Use Combat Roll para esquivar de investidas e reposicionar.
- Use Iron's Spells para cura, escudo, mobilidade ou burst.
- Evite melee prolongado até entender hitbox e timing.

## 15.3. Depois da luta

1. Verifique se o dragão morreu de fato.
2. Proteja o cadáver.
3. Tire screenshots/troféu.
4. Decida quem pega blood, scales, bones e skull.
5. Colete com método certo.
6. Volte com loot para storage seguro.
7. Registre no Wiki/FTB Quests se foi primeiro kill.

## 15.4. Erros comuns

| Erro | Consequência |
|---|---|
| Atacar perto da base | Incêndio, destruição, morte de villagers/pets. |
| Não levar ranged | Dragão voa e fica fora de alcance. |
| Usar armor sem encantamento | Dano de breath derrete jogador. |
| Lootar sem combinar blood/scales | Perda de material desejado. |
| Chocar ovo na cidade | Dragão foge, cresce, destrói ou vira lag. |
| Deixar dragão tamed solto | Problema de pathfinding, entidades e caos visual. |

---

# 16. Montarias, pets e estábulos de criaturas

## 16.1. Hippogryph

**Função:** primeira grande montaria aérea temática.

### Uso recomendado

- Exploração de biomas.
- Scout de Dragon Roosts.
- Viagem entre bases antes de infraestrutura final.
- Montaria pessoal de caçador.

### Boas práticas

- Nomeie com nametag.
- Guarde em estábulo fechado.
- Não deixe perto de farms ou Create contraptions.
- Evite transportar para chunks públicos sem necessidade.

## 16.2. Amphithere

**Função:** montaria aérea avançada/estilosa, geralmente associada a jungles.

### Uso recomendado

- Scout rápido.
- Exploração vertical.
- Roleplay de caçador/mago.

## 16.3. Hippocampus

**Função:** montaria aquática.

### Uso recomendado

- Exploração oceânica.
- Busca por estruturas do mar.
- Fuga de Sea Serpents se bem controlado.

## 16.4. Dragão domesticado

Dragão próprio é endgame e exige responsabilidade.

### Infraestrutura mínima

| Estrutura | Função |
|---|---|
| Dragon Nursery | Área de chocar e crescer dragões pequenos. |
| Dragon Stable | Área para stage 2/3. |
| Dragonforge Yard | Área longe da cidade para stage 3+ alimentar forge. |
| Trophy Hall | Local de skulls, scales, screenshots e lore do servidor. |
| Command Chest | Baú com Command Staff, Horn, food e emergency items. |

### Regras recomendadas

- Dragões grandes não ficam soltos na cidade.
- Todo dragão grande deve ter owner identificado.
- Dragon Horn obrigatório para transporte.
- Sem spawn/chocagem de dragão em área pública sem aviso.
- Dragonforge deve ficar em distrito isolado.

---

# 17. Dragonforge e produção de Dragonsteel

## 17.1. O que é Dragonforge

A **Dragonforge** é um multibloco 3x3x3 usado para criar **Dragonsteel Ingots**. Ela precisa de:

- blocos de Dragonforge do elemento correto;
- Dragonforge Core;
- Dragonforge Aperture/Input;
- Dragon Bone Blocks;
- dragon blood do elemento correto;
- iron ingot;
- sopro de dragão stage 3+ do mesmo elemento.

## 17.2. Tipos de Dragonforge

| Forge | Produz | Precisa de |
|---|---|---|
| **Fire Dragonforge** | Fire Dragonsteel | Fire Blood + Fire Dragon stage 3+ |
| **Ice Dragonforge** | Ice Dragonsteel | Ice Blood + Ice Dragon stage 3+ |
| **Lightning Dragonforge** | Lightning Dragonsteel | Lightning Blood + Lightning Dragon stage 3+ |

## 17.3. Layout conceitual

```txt
Dragonforge = 3x3x3
- 1 Core
- 1 Aperture/Input na face de entrada
- Dragonforge Bricks no corpo
- Dragon Bone Blocks na estrutura
- Abertura alinhada com o sopro do dragão
```

> Use Ponder/EMI/Bestiary no pack para visualizar o layout exato. A Community Edition lista suporte Ponder para Dragon Forge em versões 1.21+.

## 17.4. Local ideal

| Requisito | Motivo |
|---|---|
| Longe da base principal | Breath pode causar incêndio/congelamento/caos. |
| Chunk controlado | Evita lag e perda de entidade. |
| Área grande | Dragão stage 3+ precisa de espaço. |
| Blocos resistentes | Segurança contra breath e pathing. |
| Acesso por trem/waypoint | Logística sem abrir risco na cidade. |
| Storage AE2/baú local | Guardar blood, iron, Dragonsteel e ferramentas. |

## 17.5. Fluxo de produção

```txt
1. Caçar dragão do elemento desejado.
2. Coletar Dragon Blood com bottles.
3. Ter dragão stage 3+ do mesmo elemento, tamed ou contido.
4. Construir Dragonforge do mesmo elemento.
5. Inserir iron + blood.
6. Fazer dragão soprar na aperture.
7. Coletar Dragonsteel.
8. Guardar, craftar gear, encantar e affixar.
```

## 17.6. Erros na Dragonforge

| Erro | Resultado |
|---|---|
| Elemento errado | Forge não produz. |
| Dragão abaixo de stage 3 | Não alimenta forge. |
| Dragonforge perto da base | Destruição/lag/confusão. |
| Dragão selvagem mal preso | Morte do grupo e destruição. |
| Sem storage local | Perda/desorganização de blood e ingots. |
| Sem plano de segurança | Entidade grande solta no servidor. |

---

# 18. Armas, armaduras, ferramentas e equipamentos

## 18.1. Progressão de gear do mod

```txt
Silver gear / vanilla gear
  -> Dragon scale armor
  -> Dragonbone weapons
  -> Elemental dragonbone weapons
  -> Sea Serpent / Death Worm / Troll gear
  -> Dragonsteel weapons/tools
  -> Dragonsteel armor
  -> Dragonsteel Mage armor (Spellbooks addon)
  -> Apotheosis affixes + gems + enchants
```

## 18.2. Silver gear

| Item | Uso |
|---|---|
| **Silver Sword/Tools** | Bom contra undead e útil como transição temática. |
| **Silver Ingot** | Material base de crafts e economia inicial do mod. |

## 18.3. Dragon Scale Armor

Armadura de escamas é a ponte entre armor comum e Dragonsteel.

| Tipo | Uso |
|---|---|
| **Fire Scale Armor** | Visual/tema fire e proteção intermediária. |
| **Ice Scale Armor** | Visual/tema ice e proteção intermediária. |
| **Lightning Scale Armor** | Visual/tema lightning e proteção intermediária. |

Recomendação: use como gear de exploração e troféu, mas para bosses sérios combine com enchants/affixes ou vá para Dragonsteel.

## 18.4. Dragonbone weapons

Armas de osso de dragão são ótimas no mid/late game.

| Arma | Função |
|---|---|
| **Dragonbone Sword** | Melee principal antes de Dragonsteel. |
| **Fire/Ice/Lightning Dragonbone Sword** | Versão elemental com sangue do elemento. |
| **Dragonbone Bow** | Ranged forte para caça. |
| **Dragonbone Tools** | Ferramentas temáticas/fortes conforme versão. |

## 18.5. Dragonsteel gear

Dragonsteel é o ápice do mod.

| Item | Por que é forte |
|---|---|
| **Dragonsteel Sword** | Dano muito alto + efeito elemental. |
| **Dragonsteel Armor** | Proteção alta, toughness alta e resistência temática. |
| **Dragonsteel Tools** | Ferramentas fortes para sobrevivência/endgame. |
| **Dragonsteel Dragon Armor** | Proteção para dragões próprios. |

## 18.6. Qual Dragonsteel escolher?

| Elemento | Melhor para | Comentário |
|---|---|---|
| **Fire** | Dano contínuo, mobs comuns, agressão. | Clássico e simples; cuidado contra mobs imunes a fogo. |
| **Ice** | Controle, segurança, slow/freeze. | Excelente para grupo e para reduzir pressão de mobs rápidos. |
| **Lightning** | Burst, estilo, dano explosivo. | Muito forte em combate aberto; cuidado com caos visual/área. |

## 18.7. Gear de criaturas

| Gear/material | Função |
|---|---|
| **Sea Serpent Armor/Weapons** | Excelente para exploração oceânica e tema aquático. |
| **Death Worm Armor/Tools** | Gear alternativo de deserto/midgame. |
| **Troll Armor/Weapon** | Material pesado e troféu de caverna. |
| **Hydra drops** | Itens utilitários fortes conforme versão. |
| **Gorgon Head** | Ferramenta lendária/ameaça; use com regras. |
| **Pixie/Siren/Stymphalian drops** | Crafts mágicos, arrows, acessórios e utilidade. |

---

# 19. Ice and Fire: Spellbooks

O addon **Ice and Fire: Spellbooks** conecta Ice and Fire com **Iron's Spells 'n Spellbooks**.

## 19.1. Conteúdo principal

| Conteúdo | Função |
|---|---|
| **Dragonsteel Mage Armor Sets** | Armaduras mágicas para Fire/Ice/Lightning Dragonsteel. |
| **Legendary Spellbook** | Spellbook lendário temático de dragões. |
| **Dragon Priest Staff** | Staff especial para builds de mago dracônico. |
| **Dragon Priest Masks** | Máscaras encontradas em male dragon dens, end cities e ancient cities. |

## 19.2. Papel no Astron City

Esse addon é perfeito para criar uma classe híbrida:

> **Dragon Priest / Draconic Mage** - jogador que usa materiais de dragão, armadura de Dragonsteel mágica, spells de Iron's Spells, staff especial e máscaras raras.

## 19.3. Progressão recomendada do Dragon Priest

```txt
1. Progredir em Iron's Spells até spellbook forte.
2. Caçar dragões e obter Dragonsteel.
3. Encontrar Dragon Priest Mask em dragon dens/end cities/ancient cities.
4. Criar Dragonsteel Mage Armor.
5. Encantar/affixar gear.
6. Montar build com mana, cooldown, spell power e resistência.
7. Usar dragão/montaria como identidade de personagem.
```

## 19.4. Build sugerida: Dragon Priest de fogo

| Slot | Item recomendado |
|---|---|
| Weapon | Fire Dragonsteel Sword ou staff mágico. |
| Spellbook | Legendary Dragon/IAF Spellbook se disponível. |
| Armor | Fire Dragonsteel Mage Armor. |
| Curios | Mana, cooldown, fire/spell power, resistência. |
| Enchants | Protection, Unbreaking, Mending, Feather Falling, enchants de mana/spell se disponíveis. |
| Função | Burst em bosses, AoE, dano elemental, suporte ofensivo. |

## 19.5. Build sugerida: Dragon Priest de gelo

| Slot | Item recomendado |
|---|---|
| Weapon | Ice Dragonsteel Sword ou staff. |
| Armor | Ice Dragonsteel Mage Armor. |
| Spells | Controle, slow, defesa, cura, zona. |
| Função | Controle de multidão e segurança em expedições. |

## 19.6. Build sugerida: Dragon Priest de raio

| Slot | Item recomendado |
|---|---|
| Weapon | Lightning Dragonsteel Sword ou staff. |
| Armor | Lightning Dragonsteel Mage Armor. |
| Spells | Burst, mobilidade, dano rápido. |
| Função | Boss hunter e DPS explosivo. |

---

# 20. Fábricas, farms e soluções populares

Ice and Fire não é um mod de fábrica tradicional, mas no Astron City ele deve gerar infraestrutura.

## 20.1. Biblioteca Bestiary pública

**Função:** centralizar conhecimento do mod.

Componentes:

- Bestiary completo;
- Bestiary Lectern;
- baú de Manuscripts;
- mapa de Dragon Roosts e Caves;
- quadro de regras de caçada;
- troféus e fotos.

## 20.2. Dragon Hunting Outpost

**Função:** base avançada perto de biomas de dragões.

Componentes:

- cama;
- baú de potions;
- food;
- flechas;
- blocos resistentes;
- waypoint;
- storage temporário;
- trilho/trem/teleporte se permitido.

## 20.3. Dragon Material Sorting Room

**Função:** organizar loot.

Categorias:

- Fire scales/blood/bones/skulls;
- Ice scales/blood/bones/skulls;
- Lightning scales/blood/bones/skulls;
- eggs;
- creature drops;
- spellbooks/masks;
- trophy items.

Integração com AE2:

- storage separado por elemento;
- tags/nomes claros;
- export para craft de Dragonforge/Dragonsteel;
- requesters para itens comuns, se fizer sentido.

## 20.4. Dragon Nursery

**Função:** chocar e crescer dragões com segurança.

Requisitos:

- área cercada;
- blocos não inflamáveis;
- teto/parede contra fuga;
- água/fogo/condição elemental controlada;
- chest com Dragon Meal e Command Staff;
- sinalização de dono.

## 20.5. Dragonforge Yard

**Função:** produção industrial de Dragonsteel.

Requisitos:

- longe da cidade;
- área resistente;
- storage local;
- plataforma de dragão;
- caminho de entrada/saída;
- proteção contra players curiosos;
- documentação de uso.

## 20.6. Stable District

**Função:** guardar montarias.

Áreas:

- Hippogryph stalls;
- Amphithere tower;
- Hippocampus pool;
- Dragon nursery;
- Dragon trophy hall.

## 20.7. Gorgon Safety Chamber

**Função:** usar/guardar Gorgon Head e loot perigoso com regras.

Regras:

- nada de usar em área pública;
- sinalização de perigo;
- baú trancado ou em área privada;
- uso em eventos/arenas apenas.

## 20.8. Creature Arena

**Função:** treinar combate contra mobs grandes sem destruir cidade.

Pode incluir:

- paredes altas;
- zona de ranged;
- cobertura;
- baús de kit;
- área de espectadores;
- memorial de deaths.

---

# 21. HOT TOPICS - o que é muito forte e útil

Esta seção é para jogadores survival que querem saber o que realmente vale perseguir.

## 21.1. Dragonsteel Sword

**Por que é forte:** dano altíssimo e efeito elemental. Fire queima, Ice controla, Lightning dá burst.

**Quando buscar:** late/endgame, depois de Dragonforge.

**Melhor uso:** boss fights, raids, mobs com muita vida.

## 21.2. Dragonsteel Armor

**Por que é forte:** uma das armaduras mais fortes do mod, com proteção/toughness altos e proteção temática contra breath.

**Quando buscar:** antes de enfrentar Cataclysm/Draconic/endgame pesado, se o balanceamento permitir.

**Melhor combo:** Protection + Mending + Unbreaking + Apotheosis affixes + gems.

## 21.3. Dragonforge

**Por que é forte:** desbloqueia Dragonsteel, o real endgame do mod.

**Valor de servidor:** pode virar megaprojeto comunitário.

**Risco:** dragão stage 3+ + breath + área mal construída = caos.

## 21.4. Ovo de dragão

**Por que é forte:** transforma dragão de ameaça em recurso controlável.

**Valor de servidor:** uma das maiores conquistas de aventura.

**Melhor prática:** criar registro público de ovos/dragões por jogador.

## 21.5. Dragon Horn

**Por que é forte:** resolve transporte/armazenamento de dragão.

**Uso essencial:** todo dono de dragão deve ter.

## 21.6. Dragon Command Staff

**Por que é forte:** controle de comportamento de dragão.

**Uso essencial:** sem staff, dragão grande vira problema.

## 21.7. Gorgon Head

**Por que é forte:** potencial de petrificação/controle extremo.

**Uso recomendado:** item lendário, com regra de servidor.

**Não recomendado:** uso livre em área pública/PvP sem acordo.

## 21.8. Hippogryph / Amphithere

**Por que é forte:** mobilidade aérea antes de opções mais avançadas.

**Uso recomendado:** scout, exploração, caçada e roleplay.

## 21.9. Sea Serpent gear

**Por que é forte:** excelente para exploração marítima e estilo.

**Uso recomendado:** ocean exploration, Seven Seas, Bumblezone/space prep se precisar mobilidade aquática.

## 21.10. Dragon Priest Gear

**Por que é forte:** mistura Dragonsteel com Iron's Spells, criando build híbrida de mago e caçador.

**Uso recomendado:** players que querem identidade de classe, não só dano bruto.

## 21.11. Dragonbone Bow

**Por que é forte:** ranged poderoso para dragões e mobs voadores.

**Uso recomendado:** antes e depois de Dragonsteel, especialmente com Power/Infinity/Mending conforme preferência.

## 21.12. Fire Resistance Kit

**Por que é forte:** reduz drasticamente o risco de Fire Dragons.

**Inclui:** potions, enchants, curios, comida, bucket, backup.

## 21.13. Bestiary completo

**Por que é forte:** conhecimento economiza mortes.

**Uso recomendado:** biblioteca pública do servidor.

---

# 22. Integrações com outros mods do Astron City

## 22.1. Apotheosis / Apothic

Use Apotheosis para transformar gear de Ice and Fire em gear realmente final.

| Sistema | Como usar |
|---|---|
| Enchanting | Enchants altos em Dragonsteel, bows e armor. |
| Affixes | Reroll/reforge de stats, dano, vida, armor toughness, resistências. |
| Gems | Inserir atributos que compensam fraquezas: vida, armor, velocidade, dano, mana. |
| Spawners | XP e farm de materiais para enchanting/affix, não necessariamente para dragões. |

## 22.2. Iron's Spells

Iron's Spells ajuda em:

- cura;
- mobilidade;
- burst à distância;
- controle de multidão;
- suporte de grupo;
- builds Dragon Priest via addon.

## 22.3. Better Combat / Combat Roll

Muda a leitura de combate:

- armas grandes ganham animações/alcance relevantes;
- dodge roll salva de breath/charge;
- timing importa mais;
- boss fights ficam mais dinâmicas.

## 22.4. AE2

AE2 deve organizar:

- scales por elemento;
- blood por elemento;
- bones/skulls;
- Dragonsteel ingots;
- Dragonforge components;
- masks/spellbooks;
- consumíveis de caçada.

## 22.5. Create

Create ajuda a construir:

- trens até outposts;
- elevadores/portões de arenas;
- museus/trophy halls;
- logística visual para Dragonforge Yard;
- mapas e placas temáticas na cidade.

## 22.6. Modern Industrialization / Oritech / Powah

Esses mods não substituem Ice and Fire, mas dão infraestrutura:

- energia e máquinas para base de caçadores;
- automação de potions/consumíveis se integrada via outros mods;
- processamento e storage de materiais do servidor;
- megaprojetos industriais conectados à fantasia de dragões.

## 22.7. Cataclysm

Cataclysm e Ice and Fire juntos criam a trilha de **boss hunter**:

```txt
Ice and Fire gear + Apotheosis + Iron's Spells
  -> Cataclysm bosses
  -> Draconic Evolution / Space / Endgame
```

---

# 23. Checklists de progresso e estoque

## 23.1. Checklist de jogador novo

- [ ] Fazer ou encontrar Bestiary.
- [ ] Guardar Manuscripts.
- [ ] Marcar primeiro Dragon Roost.
- [ ] Fugir de dragão sem perder base.
- [ ] Fazer ranged weapon.
- [ ] Fazer kit de exploração.
- [ ] Entrar no Discord/Voice Chat em caçada.

## 23.2. Checklist de primeira caçada

- [ ] 2+ jogadores.
- [ ] Potions.
- [ ] Food.
- [ ] Ranged weapon.
- [ ] Blocos resistentes.
- [ ] Waypoint.
- [ ] Baú de loot.
- [ ] Plano de blood vs scales.
- [ ] Alguém gravando/printando.

## 23.3. Checklist para Dragon Cave

- [ ] Armor encantada.
- [ ] Cura/regen.
- [ ] Ranged forte.
- [ ] Totem/escape se disponível.
- [ ] Rota de fuga.
- [ ] Blocos resistentes.
- [ ] Grupo definido.
- [ ] Loot rules definidas.

## 23.4. Checklist para Dragonforge

- [ ] Dragonforge blocks do elemento.
- [ ] Dragon Bone Blocks suficientes.
- [ ] Core.
- [ ] Aperture/Input.
- [ ] Blood do elemento correto.
- [ ] Iron ingots.
- [ ] Dragão stage 3+ do elemento correto.
- [ ] Área segura longe da cidade.
- [ ] Storage local.
- [ ] Staff/Horn/controle do dragão.

## 23.5. Estoque recomendado no AE2

| Item | Estoque sugerido |
|---|---:|
| Manuscripts | 64+ |
| Dragon Bones | 256+ |
| Fire/Ice/Lightning Scales | 128+ cada |
| Fire/Ice/Lightning Blood | 32+ cada |
| Dragon Skulls | Guardar todos |
| Dragon Hearts | Guardar todos |
| Dragon Eggs | Registro individual |
| Dragonsteel Ingots | Cofre separado |
| Gorgon Head | Cofre/restrito |
| Dragon Priest Masks | Cofre/museu |

---

# 24. Setup recomendado de combate, encantamentos e affixes

## 24.1. Setup geral de caçador de dragões

| Slot | Setup recomendado |
|---|---|
| Weapon melee | Dragonbone/Dragonsteel Sword com Sharpness, Looting, Unbreaking, Mending. |
| Ranged | Dragonbone Bow ou bow/crossbow forte com Power/Quick Charge/Piercing conforme arma. |
| Armor | Netherite/Silent Gear/Dragon Scale/Dragonsteel com Protection e Unbreaking. |
| Boots | Feather Falling obrigatório. |
| Curios | Resistência, vida, velocidade, mana/cooldown se usar spells. |
| Consumíveis | Fire Resistance, Healing, Regen, Strength, Speed, food top-tier. |
| Utility | Blocks, water bucket, ender pearls, recall/teleport se permitido. |

## 24.2. Enchants prioritários

| Enchant | Prioridade | Motivo |
|---|---:|---|
| Protection | Alta | Defesa geral contra danos variados. |
| Fire Protection | Situacional | Excelente contra Fire Dragons, mas compete com Protection. |
| Feather Falling | Altíssima | Dragões jogam/derrubam; queda mata muito. |
| Unbreaking | Alta | Sustenta gear em expedições longas. |
| Mending | Alta | Preserva itens raros. |
| Sharpness | Alta | Dano geral. |
| Looting | Alta | Mais materiais de mobs quando aplicável. |
| Power | Alta | Bow forte contra alvos voadores. |
| Infinity/Mending | Escolha | Infinity para caçadas longas; Mending para gear de valor. |
| Respiration/Aqua Affinity | Situacional | Contra Sea Serpents e exploração oceânica. |

## 24.3. Affixes e gems úteis

| Atributo | Por que vale |
|---|---|
| Max Health | Sobrevive a burst de breath. |
| Armor / Armor Toughness | Reduz dano físico e boss damage. |
| Damage Reduction | Melhor defesa geral se disponível. |
| Movement Speed | Reposicionamento contra dragões. |
| Attack Damage | Melhora melee. |
| Projectile Damage | Melhora ranged. |
| Fire Resistance / Elemental Resist | Excelente em caçadas específicas. |
| Cooldown Reduction / Mana | Para Dragon Priest/Iron's Spells. |

## 24.4. Builds recomendadas

### Dragon Slayer físico

- Dragonsteel Sword.
- Dragonsteel Armor.
- Bow forte.
- Curios de vida/resistência.
- Foco em dano e sobrevivência.

### Dragon Priest

- Dragonsteel Mage Armor.
- Dragon Priest Staff.
- Legendary Spellbook.
- Curios de mana/cooldown/spell power.
- Foco em magia + resistência.

### Scout/Montaria

- Hippogryph/Amphithere.
- Armor leve/mobilidade.
- Bow/crossbow.
- Waypoints e mapas.
- Foco em exploração, marcação e fuga.

### Ocean Hunter

- Sea Serpent gear.
- Respiration/Depth Strider.
- Ranged weapon.
- Boat/hippocampus.
- Foco em mares e estruturas costeiras.

---

# 25. Performance, configuração e regras de servidor

Ice and Fire adiciona entidades grandes, IA complexa, worldgen, estruturas e destruição ambiental. Em servidor, isso precisa de regras.

## 25.1. Regras recomendadas

| Regra | Motivo |
|---|---|
| Sem dragão grande solto na cidade | Evita lag, destruição e pathfinding. |
| Dragonforge longe da base | Breath e entidades grandes causam risco. |
| Caçadas grandes devem ser avisadas | Evita mortes/destruição surpresa. |
| Não abandonar montarias em chunks carregados | Entidades acumuladas prejudicam TPS. |
| Não explorar infinitamente sem objetivo | Worldgen grande aumenta tamanho do mundo. |
| Registrar Dragon Caves importantes | Evita duplicação de esforço e brigas de loot. |
| Gorgon Head com uso controlado | Item com potencial de grief/caos. |

## 25.2. Configs importantes

A Community Edition usa arquivos de config em `instance/config/iceandfire`:

- `iaf-client.json` para ajustes visuais/client;
- `iaf-common.json` para comportamento/server.

Possíveis temas de ajuste:

- spawn rate de dragões;
- biome tags;
- griefing/destruição de blocos;
- dano de breath;
- tamanho/frequência de estruturas;
- compatibilidade de mobs;
- performance de IA.

## 25.3. Diagnóstico de performance

Use:

- **spark** para profiling;
- **Chunky** para pregeneration;
- **Jade** para inspeção;
- **Let Me Despawn** e configs de mobcap quando aplicável;
- regras de chunkloading;
- auditoria de entidades grandes.

## 25.4. Boas práticas de mundo

- Pregere regiões antes de abrir exploração em massa.
- Incentive players a explorar por rotas/trens/outposts.
- Remova entidades abandonadas após avisos.
- Não force spawn de dragões sem evento planejado.
- Faça backup antes de mudar versão/config do Ice and Fire.

---

# 26. Sugestão de capítulos para FTB Quests

## Capítulo: As Lendas Despertam

| Quest | Objetivo | Recompensa sugerida |
|---|---|---|
| Primeiro Manuscript | Obter Manuscript. | XP + food. |
| Bestiary | Criar Bestiary. | Manuscripts extras. |
| Biblioteca da Cidade | Usar Bestiary Lectern. | Decoração/lore. |
| Primeiro Roost | Marcar Dragon Roost. | Compass/map. |
| Sobreviva ao Dragão | Chegar perto e escapar vivo. | Fire Resistance. |

## Capítulo: Caçador Iniciante

| Quest | Objetivo | Recompensa sugerida |
|---|---|---|
| Silver Hunter | Obter Silver. | Arrows/XP. |
| Primeiro Miniboss | Derrotar Cyclops/Troll/Death Worm. | Loot bag temática. |
| Sea Threat | Derrotar Sea Serpent. | Water breathing. |
| Montaria Mítica | Domar Hippogryph/Amphithere/Hippocampus. | Saddle/nametag. |

## Capítulo: Sangue de Dragão

| Quest | Objetivo | Recompensa sugerida |
|---|---|---|
| Primeiro Dragão | Derrotar qualquer dragão. | Trophy item. |
| Blood Alchemy | Obter Dragon Blood. | Bottles/potions. |
| Escamas | Obter scales. | XP/repair materials. |
| Cave Hunter | Encontrar Dragon Cave. | Totem/consumíveis. |

## Capítulo: Ovos e Forja

| Quest | Objetivo | Recompensa sugerida |
|---|---|---|
| Ovo Lendário | Obter Dragon Egg. | Dragon Meal. |
| Dragão Próprio | Chocar dragão. | Command Staff/Horn se balanceado. |
| Dragonforge | Montar Dragonforge. | Blocos decorativos. |
| Primeiro Dragonsteel | Produzir Dragonsteel Ingot. | Título/recompensa cosmética. |

## Capítulo: Dragon Priest

| Quest | Objetivo | Recompensa sugerida |
|---|---|---|
| Máscara do Sacerdote | Obter Dragon Priest Mask. | Mana potion/scroll. |
| Staff Dracônico | Craftar Dragon Priest Staff. | Scroll raro. |
| Dragonsteel Mage | Fazer peça de armor mage. | Gem/affix material. |

---

# 27. Notas para mantenedores do wiki

## 27.1. Estrutura sugerida de páginas

```txt
/wiki/adventure/ice-and-fire
/wiki/adventure/ice-and-fire/dragons
/wiki/adventure/ice-and-fire/dragonforge
/wiki/adventure/ice-and-fire/creatures
/wiki/adventure/ice-and-fire/gear
/wiki/adventure/ice-and-fire/spellbooks
/wiki/adventure/ice-and-fire/server-rules
```

## 27.2. Componentes úteis

- Cards por criatura.
- Tabela de elementos de dragão.
- Checklist de caçada.
- Diagrama da Dragonforge.
- Aba de HOT TOPICS.
- Aba de integração com Iron's Spells.
- Galeria de troféus do servidor.

## 27.3. Avisos que devem aparecer no Wiki

> **Dragões podem destruir terreno, matar pets/villagers e gerar caos. Não lute perto da cidade.**

> **Dragonsteel é gear avançado. Confirme receitas no EMI/JEI do servidor.**

> **Myrmexes não devem ser assumidos na Community Edition usada pelo pack sem validação.**

> **Gorgon Head e dragões domesticados devem seguir regras de servidor.**

---

# 28. Fontes e observações de precisão

## 28.1. Fontes consultadas

- Astron City AI Context e modlist fornecidos no projeto.
- Ice And Fire Community Edition - CurseForge: https://www.curseforge.com/minecraft/mc-mods/iceandfire-ce
- Ice And Fire Community Edition - IAFEnvoy Docs: https://docs.iafenvoy.com/docs/mod/ice-and-fire-ce/
- Dragons - IAFEnvoy Docs: https://docs.iafenvoy.com/docs/mod/ice-and-fire-ce/mobs/dragons/
- Ice and Fire: Spellbooks - CurseForge: https://www.curseforge.com/minecraft/mc-mods/ice-and-fire-spellbooks
- Ice and Fire: Spellbooks - Modrinth: https://modrinth.com/mod/ice-and-fire-spellbooks
- Ice and Fire Mod Wiki - Bestiary, Dragonforge, Dragonsteel, Dragonsteel Sword/Armor e criaturas: https://ice-and-fire-mod.fandom.com/

## 28.2. Limitações

- Ice and Fire CE 1.21.1 está em beta no pack, então detalhes de config/spawn/loot podem mudar.
- O modpack pode alterar receitas via KubeJS, datapacks, AlmostUnified, loot integrations ou configs.
- Este guia evita depender de números exatos onde a versão/config pode divergir.
- Para qualquer receita ou drop específico, o jogador deve consultar EMI/JEI/JER dentro do servidor.

## 28.3. Regra final

> **Ice and Fire no Astron City deve ser jogado como aventura lendária de servidor: prepare-se, chame amigos, documente a caçada, respeite o mundo e transforme cada dragão em história.**
