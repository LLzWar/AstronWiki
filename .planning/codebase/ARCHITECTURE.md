# Architecture & Patterns

## Data Flow
- O estado principal (`activeTab`) reside em `App.jsx` e dita qual componente visual é renderizado.
- O componente `Sidebar.jsx` modifica o estado `activeTab` através de props (`setActiveTab`).
- As receitas (crafting) são gerenciadas por um estado separado `activeRecipe` que abre um `CraftingModal`.

## Data Management
- Os dados puros (JSON/Arrays) estão separados da UI na pasta `src/data/`.
  - `recipes.js`: Banco de dados de receitas exportando dicionários.
  - `modsList.js`: Array de strings gerado dinamicamente via PowerShell.

## Component Layout
- **App.jsx**: Orquestrador raiz. Mantém o grid layout da página principal.
- **Sidebar**: Navegação retrátil (`useState` interno para colapsar seções).
- **Wiki Components**: Componentes dedicados (`WikiCreate.jsx`, `WikiAE2.jsx`, etc.) que abrigam conteúdos densos em HTML estático estruturado, mantendo o `App.jsx` limpo.
- **CraftingModal**: Um overlay (modal) que renderiza tabelas 3x3 de Minecraft e resolve IDs textuais para imagens PNG hospedadas em `/assets/items/`.
