
## Check Guides Command
Whenever the user says 'Checar pasta /guides', you MUST immediately use the list_dir tool on 'C:\Users\LuisL\Downloads\guides'. Compare the files there with the ones already implemented in the Wiki (usually copied to 'public/docs/'). If there are new '.md' files, copy them to 'public/docs/', add a route in 'App.jsx' using 'MarkdownViewer', and add a button in 'Sidebar.jsx' under the 'Manuais Oficiais' section so they become readable in the app.

## Full Review Command
Whenever the user says 'Full review', you MUST perform a thorough Quality Assurance (QA) pass on the project. This includes running 'npm run build' to check for syntax errors, ensuring UI navigation elements (like anchors, sidebars, and scrolling) function as expected, and proactively fixing any subtle bugs or regressions you find without waiting for the user to point them out.

## SPA Anchor Link Navigation Rule
In Single Page Applications where the scroll container is an internal element (like .main-content) instead of the window, you MUST NOT rely on native <a href='#id'> navigation. Instead, intercept the click, use e.preventDefault(), and use element.scrollIntoView({ behavior: 'smooth' }).

## DOM Selection for Dynamic IDs Rule
When selecting DOM elements using dynamically generated IDs (such as slugs from Markdown, which often start with numbers like 1-title), you MUST use document.getElementById(id). You MUST NOT use document.querySelector('#' + id) because CSS selectors do not support IDs starting with a digit without escaping.

## Guide Consistency Rule
When making an architectural, stylistic, or formatting change (such as adding new CSS classes, callouts, or layout patterns) to any guide, you MUST propagate and apply that same standard to all other similar guides in the project, unless the user explicitly specifies that the change is exclusive to that specific guide.

## Regra: Full Review
Quando o usuário solicitar um 'Full Review', você DEVE obrigatoriamente verificar a paridade de rotas entre o menu lateral (ex: Sidebar.jsx) e o roteador principal (ex: App.jsx). Certifique-se de que os IDs chamados pelo Sidebar existem nas condições do App.jsx e que estão apontando para o arquivo/componente correto (ex: MarkdownViewer), evitando renderizar placeholders ou telas em branco. Construa um checklist de testes para cada aba do menu.
