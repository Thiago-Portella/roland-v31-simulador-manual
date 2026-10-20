# 🥁 Roland V31 (V-Drums TD-316) — Simulador Acessível, Manual de Referência & Data List em Português

Aplicação web interativa e **100% acessível para leitores de tela (NVDA)** que reúne o **Painel Operacional Simulado do Módulo de Som Roland V31 (TD-316)** e o **Manual de Referência + Data List Unificado em Português**.

Projetado especialmente para permitir a exploração completa da árvore de telas, edição de parâmetros por contagem exata de setas e consulta rápida a todas as tabelas oficiais do módulo sem depender de referências visuais.

🌐 **Acesse online:** [https://roland-v31-simulador-manual.netlify.app](https://roland-v31-simulador-manual.netlify.app)
📖 **Manual + Data List direto:** [https://roland-v31-simulador-manual.netlify.app/manual.html](https://roland-v31-simulador-manual.netlify.app/manual.html)

---

## ✨ Principais Recursos

### 🎛️ 1. Painel Operacional Interativo (`index.html`)
- **Navegação 2D Fiel ao Hardware**: Operação completa pelos cursores (`▲`, `▼`, `◄`, `►`), **Disco de Valor** (`[-]` / `[+]`), **Botões de Função** (`[F1]` a `[F6]` + combinações com `[SHIFT]`), `[ENTER]` e `[EXIT]`.
- **Botões Físicos Dedicados**: Acesso direto às telas `[KIT]`, `[MENU]`, `[EZ EDIT]`, `[EXPANSION]`, `[CLICK]`, `[COACH]`, `[SONG]`, `[● REC]` e `[►/■ PLAY]`.
- **Acessibilidade Avançada para NVDA**:
  - Sistema de dupla região `aria-live="assertive"` alternada (`#nvda-live-a` / `#nvda-live-b`) que garante leitura instantânea de cada tecla pressionada, item focado, valor atual e coordenada espacial (linha/coluna).
  - Tecla de inspeção rápida **`I`** (*"Onde Estou?"*) e tecla **`F`** (*"Ler Botões F1–F6"*).
  - Descrição estruturada ao vivo da tela atual com mapa completo das setas e link direto para o capítulo correspondente do manual.
- **14 Pads e Múltiplas Zonas**: Seleção rápida de `KICK`, `SNARE`, `TOM 1–4`, `HI-HAT`, `CRASH 1–2`, `RIDE` e `AUX 1–4` com alternância de zonas (`HEAD`, `RIM`, `BOW`, `EDGE`, `BELL`, `PEDAL`, `XSTICK`, `BRUSH`) e disparo de teste (tecla `B`).
- **Memória Persistente (`localStorage`)**: Todas as edições de kits, parâmetros, favoritos (`★`) e nomes customizados ficam salvos no navegador, com botão para **Restaurar Memória de Fábrica**.

### 📖 2. Manual de Referência + Data List Integrado (`manual.html`)
- **27 Seções Estruturadas em Português**:
  - **Seções 1 a 21**: Capítulos completos do Manual de Referência combinados às faixas de valores do Data List, com **passo a passo por contagem exata de setas** e descrição da geometria espacial de cada tela.
  - **Seção 22 — 200 Drum Kits**: Lista completa dos kits Preset (`001`–`070`) e User (`071`–`200`) com nome principal e subnome descritivo.
  - **Seção 23 — 1.010 Instrumentos**: Banco interno `PRESET` (246 instrumentos) + expansões `EXV001 (Wood Room Studio UK 1)`, `EXV002 (Electronic&Percussion 1)` e `EXV003 (The Brush 1)`, com filtro por banco e busca instantânea.
  - **Seção 24 — 94 Efeitos Multi-Effects (BUS FX)**: Todos os **1.110 parâmetros** traduzidos e explicados em português, incluindo descrição textual do fluxo de sinal, suporte a *Side Chain* e tabelas internas (`ATyp`, `STyp`, `JD-MULTI`).
  - **Seção 25 — 72 Modelos de Pad (`Trig Type`)**: Matriz completa de compatibilidade (Rim Shot, Bell Shot, Positional Sensing, Choke).
  - **Seção 26 — 52 Kit Phrases e 37 Músicas Internas**.
  - **Seção 27 — Mensagens de Erro e Solução de Problemas**.

---

## ⌨️ Atalhos Principais de Teclado no Simulador

| Tecla no Computador | Controle no Módulo V31 | Função |
| :--- | :--- | :--- |
| `Setas ▲ / ▼ / ◄ / ►` | Cursores `[▲] [▼] [◄] [►]` | Move o cursor pela tela atual e anuncia opção, valor e coordenada |
| `+`, `=`, `]` ou `PageUp` | Girar `[Disco]` (horário) | Aumenta o valor do parâmetro focado (`Shift` = passo de +10) |
| `-`, `[` ou `PageDown` | Girar `[Disco]` (anti-horário) | Diminui o valor do parâmetro focado (`Shift` = passo de -10) |
| `1` a `6` (ou `F1` a `F6`) | Botões `[F1]` a `[F6]` | Aciona a função da barra inferior (`Shift + 1..6` = `[SHIFT] + [F1]–[F6]`) |
| `Enter` | Botão `[ENTER]` | Abre o menu/ícone selecionado ou confirma operação |
| `Escape` ou `Backspace` | Botão `[EXIT]` | Volta à tela anterior (`Shift + Esc` = *ALL SOUND OFF*) |
| `K` / `M` / `E` / `X` | `[KIT]` / `[MENU]` / `[EZ EDIT]` / `[EXPANSION]` | Acesso rápido às telas principais do módulo |
| `C` / `O` / `S` / `R` / `Espaço` | `[CLICK]` / `[COACH]` / `[SONG]` / `[REC]` / `[PLAY]` | Controle de metrônomo, treino, músicas e gravação |
| `Ctrl + Seta Esq / Dir` | Seleção de Pad | Alterna entre os 14 pads do módulo |
| `Ctrl + Seta Cima / Baixo` | Seleção de Zona | Alterna a zona ativa do pad (`HEAD`, `RIM`, `BELL`, etc.) |
| `I` / `F` / `B` | Acessibilidade & Disparo | `I`: Onde estou? · `F`: Ler barra F1–F6 · `B`: Percutir pad atual |

---

## 📁 Estrutura do Projeto

```text
├── index.html                  # Painel Operacional e Simulador Interativo do Roland V31
├── manual.html                 # Manual de Referência + Data List Unificado (27 Seções)
├── styles.css                  # Estilos de alto contraste e layout responsivo/acessível
├── simulator.js                # Motor operacional do módulo V31 e integração NVDA
├── manual.js                   # Renderizador dinâmico e busca em tempo real do Manual/Data List
└── data/
    ├── screens_and_menus.js    # Mapeamento completo das telas, menus, cursores e F1–F6
    ├── manual_sections.js      # 21 capítulos do Manual de Referência + tabelas de parâmetros
    ├── kits_and_lists.js       # 200 Kits, 72 Trig Types, 52 Kit Phrases, 37 Songs e Troubleshooting
    ├── instruments.js          # 1.010 instrumentos (Preset + EXV001, EXV002 e EXV003)
    └── effects.js              # 94 algoritmos de efeitos BUS FX e 1.110 parâmetros detalhados
```

---

## 🚀 Como Executar Localmente

Por ser uma aplicação web 100% estática (HTML5, CSS3 e JavaScript Vanilla sem dependências externas), basta abrir o arquivo `index.html` diretamente no navegador ou servir a pasta com qualquer servidor HTTP estático:

```bash
npx serve .
```
