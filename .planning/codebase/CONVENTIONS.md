# Conventions & Styling

## CSS and Visuals
- O design segue um **Dark Mode rigoroso** inspirado nas UIs modernas do GitHub e JetBrains (Cores sólidas: `#0d1117` para backgrounds profundos, `<h1/>` e bordas limpas).
- Evitar efeitos de "glassmorphism", sombras difusas intensas ou cores excessivamente berrantes.
- Utilização estrita de **Variáveis CSS** (definidas em `index.css`) para garantir a consistência das paletas:
  - `--bg-primary`
  - `--bg-secondary`
  - `--bg-tertiary`
  - `--text-primary`, `--text-secondary`
  - `--border-color`
  - `--accent-primary` (para o tema Warlord)
  - `--accent-blue` (para itens informativos gerais)

## Markdown and Content
- Artigos da Wiki não usam bibliotecas Markdown, eles usam estruturas estáticas HTML (JSX) com tags como `<h3>`, `<ul>`, `<li>` e `<strong>` simulando a legibilidade de uma documentação padrão.
- Guias extensos devem ser divididos visualmente usando a classe `.wiki-card`.

## Mod Asset Strategy
- O projeto não pode depender de baixar imagens da internet. Ele usa a mecânica de mapear recursos locais extraídos diretamente dos arquivos `.jar` do modpack via scripts PowerShell, garantindo 100% de disponibilidade offline dos assets (armazenados em `/public/assets/`).
