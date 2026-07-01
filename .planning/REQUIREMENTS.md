# Requirements

## REQ-001: Componentização de Guias
- **Status**: ✅ Concluído
- A UI deve abstrair textos densos em componentes isolados (`WikiCreate`, etc.) ao invés de deixá-los flutuando no orquestrador principal, garantindo a manutenibilidade para quando o projeto atingir dezenas de páginas.

## REQ-002: Menu Colapsável (Sidebar)
- **Status**: ✅ Concluído
- O menu esquerdo deve ser inteligente, organizando os guias técnicos sob a pasta "Guias de Mods" e a progressão sob "Warlord's Path". Os sub-itens devem usar `useState` para animação e toggle limpo.

## REQ-003: Pipeline de Extração Dinâmica (Mod Index)
- **Status**: ✅ Concluído
- A documentação não pode listar mods à mão. Exige-se leitura computacional (`.ps1`) via `Get-ChildItem` extraindo as strings limpas dos arquivos `.jar`.
