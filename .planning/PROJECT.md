# Astron City Wiki (GSD Project)

## Description
Aplicação Web em React (Vite) desenvolvida para atuar como a Enciclopédia Definitiva e Guia Estratégico ("Warlord's Path") para o modpack de Minecraft Astron City.

O projeto suporta leitura de receitas (CraftingModal dinâmico), um catálogo automático extraído dos arquivos de jogo locais (Mod Index) e componentes densos de documentação com estética limpa inspirada em interfaces IDE (Dark Mode rigoroso).

## Validated Capabilities (Já Implementado)
- **Mod Index**: Uma biblioteca com quase 200 mods populada por dados extraídos dinamicamente de `.jar`s locais.
- **Warlord's Path Framework**: 4 estágios de guia estático de sobrevivência/tech (Early, Tech, Magic, Late).
- **Core Wikis**: 4 artigos enciclopédicos altamente descritivos já mapeados (`WikiCreate`, `WikiAE2`, `WikiApotheosis`, `WikiIrons`).
- **Sidebar Dinâmico**: Menu colapsável com controle de estado nativo.
- **Receitas On-demand**: Um modal (`CraftingModal`) que desenha tabelas do Minecraft usando um dicionário em `recipes.js` e associa com os assets PNG do public.
