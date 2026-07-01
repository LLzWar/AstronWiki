# 🌌 Astron City Wiki (Enciclopédia Interativa)

<div align="center">
  <p><strong>A fonte de conhecimento definitiva para o modpack Astron City.</strong></p>
  <p>
    <a href="https://github.com/LLzWar/AstronWiki/issues"><img alt="Issues" src="https://img.shields.io/github/issues/LLzWar/AstronWiki?color=58a6ff&style=for-the-badge" /></a>
    <a href="https://github.com/LLzWar/AstronWiki/pulls"><img alt="Pull Requests" src="https://img.shields.io/github/issues-pr/LLzWar/AstronWiki?color=238636&style=for-the-badge" /></a>
    <a href="https://github.com/LLzWar/AstronWiki/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/LLzWar/AstronWiki?color=d4af37&style=for-the-badge" /></a>
  </p>
</div>

---

## 📖 Sobre o Projeto

A **Astron City Wiki** é uma enciclopédia interativa de software aberto (Open Source) focada em guiar jogadores pelo brutal ecossistema do modpack *Astron City*. Diferente de planilhas e guias em texto estático, esta plataforma oferece uma documentação interativa, com links de "crafting" que abrem diretamente na tela e detalhamentos precisos de mecânicas de fim de jogo.

## ✨ Features Principais

- 🔍 **Busca Global Universal:** Motor de busca em tempo real que varre centenas de mods instalados e encontra qualquer receita ou máquina instantaneamente.
- 👑 **Warlord's Path:** Um guia de progressão em 4 Fases (Early Game, Tech, Magic, Late Game) meticulosamente construído para a supremacia no modpack.
- 🐉 **Bestiário Completo:** Estatísticas exatas (HP, Fraquezas, Drops Lendários) dos deuses e feras de *L'Ender's Cataclysm* e *Mowzie's Mobs*.
- 🛠️ **Receitas In-Line (Interativas):** Textos dourados no meio dos parágrafos da documentação abrem uma grade interativa de "Crafting Table 3x3" para ensinar a receita de itens cruciais.
- 🎨 **Suporte a Multi-Temas:** Alterne entre o *Modo Escuro (Dark Mode)* profissional e o *Tema Warlord (Carmesim e Ouro)* para uma imersão completa de fantasia.

## 💻 Tecnologias (Tech Stack)

- **[React 18](https://react.dev/)**: Biblioteca base para UI Dinâmica.
- **[Vite](https://vitejs.dev/)**: Bundler ultrarrápido (HMR).
- **Vanilla CSS3**: Estilização própria modular e performática através de variáveis (`index.css`).
- **[Lucide React](https://lucide.dev/)**: Ícones elegantes e consistentes.

## 🚀 Como Rodar Localmente (Deploy)

Para rodar este projeto em sua própria máquina ou contribuir para o código:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LLzWar/AstronWiki.git
   ```
2. **Entre no diretório:**
   ```bash
   cd AstronWiki
   ```
3. **Instale as dependências (Node.js necessário):**
   ```bash
   npm install
   ```
4. **Inicie o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
5. Acesse `http://localhost:5173` no seu navegador.

## 🤝 Como Contribuir (Open Source)

Este projeto é de código aberto e todas as contribuições da comunidade são imensamente bem-vindas! Se você encontrou um erro em uma receita, descobriu um novo exploit em um mod ou quer adicionar um guia novo:

1. Faça um **Fork** deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/NovoGuiaBotania`).
3. Faça o commit das suas alterações (`git commit -m 'feat: Adicionado guia avançado do Botania'`).
4. Faça o push para a branch (`git push origin feature/NovoGuiaBotania`).
5. Abra um **Pull Request**.

> **Para novos Guias de Mods:** Crie o componente em `src/components/`, importe no `App.jsx` e adicione a aba na `Sidebar.jsx`. Para adicionar receitas, basta expandir o arquivo JSON estático `src/data/recipes.js`.

## 📜 Licença

Distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais informações. Você é livre para copiar, modificar, distribuir e usar em seus próprios servidores e wikis privadas.
