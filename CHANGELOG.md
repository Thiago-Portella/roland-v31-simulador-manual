# Changelog

Todas as alterações notáveis no projeto **Roland V31 (TD-316) — Simulador Interativo, Manual de Referência & Data List** são documentadas neste arquivo.

O formato baseia-se em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [1.1.0] - 2026-10-21

### Auditoria Completa de Fidelidade ao Módulo Físico Roland V31 (`V31_Reference_ptb03_W.pdf` e `V31_DataList_eng02_W.pdf`)

Revisão integral das **152 telas, janelas e submenus** em `data/screens_and_menus.js` e `simulator.js`, garantindo que cada tela, coordenada de cursor (`Linha × Coluna`), tecla de seta (`[▲]`, `[▼]`, `[◄]`, `[►]`), Disco (`[+]`/`[-]`), `[ENTER]`, `[EXIT]`, `[F1]`–`[F6]` e `[SHIFT] + [F1]`–`[F6]` se comporte de maneira idêntica ao módulo físico Roland V31.

### Adicionado
- **16 novas sub-telas e janelas pop-up interativas** conforme as capturas do Manual de Referência:
  - `REC_MODE_WINDOW`: Janela sobreposta (`[F1] REC MODE` na tela `REC`) para alternar entre `DRUM REC` (MIDI/SMF) e `AUDIO REC` (WAV 44.1 kHz / 16 bits) com confirmação via `[F1] SELECT` ou `[ENTER]`.
  - `BUS_FX_SC_PAD_ASSIGN` e `BUS_FX_SC_PAD_SEND`: Abas `[F2] PAD ASSIGN` e `[F3] PAD SEND` do Side Chain em `MENU > KIT EDIT > BUS FX > SIDE CHAIN` (Manual p. 97).
  - `KIT_IMAGE_IMPORT`: Janela de importação de imagem BMP 24-bit 320×240 do cartão SD (`[F6] IMG IMPORT` em `KIT VIEW`, Manual p. 105).
  - `DRUMLINK_CURVE`, `DRUMLINK_OPT_ADV`, `DRUMLINK_TOOLS` e `DRUMLINK_INPUT_CONFIG`: Conjunto completo de abas e ferramentas dos pads sem fio DWe / WT-10 (`[F3] CURVE`, `[F4] OPT/ADV`, `[F5] TOOLS`, `[F6] INPUT CONFIG`, Manual pp. 166–176).
  - `SYSTEM_MIDI_PROG_CHG`: Aba `[F4] PROG CHG` de `MENU > SYSTEM > MIDI` com mapeamento de Program Change / Bank Select MSB-LSB por Drum Kit (Manual p. 180).
  - `OUTPUT_MONITOR`: Aba `[F5] MONITOR` das telas `OUTPUT` com matriz de roteamento para `MASTER OUT`, `PHONES` e `DIRECT OUT 1/2` (Manual p. 184).
  - `DIGITAL_PAD_RECOVERY`: Janela oculta de recuperação de pads digitais USB (`[SHIFT] + [F6] RECOVER` em `MENU > SYSTEM > INFO > DIGITAL PAD`, Manual p. 190).
  - `FACTORY_RESET_LICENSE`: Janela `REMOVE LICENSE` (`[F1] REMOVE LIC` em `FACTORY RESET`, Manual p. 206).
  - `EXPANSION_LOAD_TO_KIT`, `EXPANSION_USAGE_WINDOW`, `EXPANSION_RACK_SORT` e `EXPANSION_LOAD_TO_SLOT`: Janelas interativas do gerenciador de expansões (`[EXPANSION]`, Manual pp. 108–118).
- **19 novas ações de botões `[F1]`–`[F6]` e `[SHIFT] + [F1]`–`[F6]`** implementadas em `handleFButton()` (`simulator.js`):
  - `all_fx_off` e `undo_fx_sw` (desligar todos os 15 efeitos em `EFFECTS_SW_WINDOW` e desfazer com `[F6] UNDO`).
  - `coach_run` (iniciar/parar exercícios do modo `COACH`, além de `CLEAR MAX` e `SET CURRENT TO MAX` em `AUTO UP/DOWN`).
  - `factory_reset_exec` (confirmação de Factory Reset com `[CANCEL]` / `[OK]`).
  - `goto_prev` (fechar `INST_LIST_WINDOW` via `[F6] CLOSE` retornando à tela de origem).
  - `layer_copy` e `layer_exchange` (copiar ou permutar camadas A/B/C na janela `LAYER_COPY_WINDOW` com confirmação).
  - `name_toggle_case` (`[F3] A<>a`), `name_jump_num` (`[F4] >0`), `name_insert_space` (`[F5] INSERT`) e `name_delete_char` (`[F6] DELETE`) nas telas de edição de texto (`KIT_NAME` e `BACKUP_SAVE`).
  - `prev_inst_group` (`[F4] <GROUP`) e `next_inst_group` (`[F5] GROUP>`) na janela `INST_LIST_WINDOW`.
  - `prev_kit` (`[F5] KIT -`) e `next_kit` (`[F6] KIT +`) na tela `KIT_VOL`.
  - `setlist_prev_bank` (`[F2] <BANK`), `setlist_next_bank` (`[F3] BANK>`), `setlist_step_edit` (`[F3] STEP EDIT`), `setlist_insert_step` (`[F5] INSERT`) e `setlist_delete_step` (`[F6] DELETE`) nas telas `SET_LIST` e `SET_LIST_SETUP`.
  - `snapshot_save` (`[F1] SAVE`) e `snapshot_restore` (`[F6] RESTORE`) na tela `SNAPSHOT`.
  - `song_ab_or_export` (alterna entre `EXPORT` quando a fonte é `DRUM REC DATA` e repetição `A<->B` quando a fonte é `SD CARD` ou `AUDIO REC DATA`).
  - `amb_subtab` (navegação pelas sub-abas `SEND`, `FILTER` e `ASSIGN` em `AMB_OVERHEAD`, `AMB_ROOM`, `AMB_REVERB` e `AMB_KIT_RESO`).
  - `xtalk_focus` (`[F3] FOCUS`), `xtalk_set` (`[F5] SET`) e `xtalk_set_all` (`[F6] SET ALL`) em `TRIGGER_XTALK`.
- **Atalho `[SHIFT] + [▲]/[▼]` em `KIT_EDIT_VEDIT`, `KIT_EDIT_TRANSIENT` e `KIT_EDIT_EQ`**: Pula diretamente entre as Camadas A, B e C durante a edição profunda de instrumento (Manual p. 79), além de avançar/retroceder de camada ao cruzar a última/primeira linha.
- **Indicador de sincronização pendente (`*`) em `DRUMLINK`**: Alterações em parâmetros de pads sem fio (`dl*`) exibem `*` no cabeçalho até que o pad seja percutido (`Tecla B`), sincronizando as configurações com o pad sem fio (Manual pp. 166, 171).

### Corrigido
- **Navegação na tela inicial `KIT`, `SAFETY_MODE_ACTIVE` e `SET_LIST` (Manual pp. 27–29, 56, 146)**:
  - Setas `[▲]`/`[▼]` e Disco `[+]`/`[-]` agora sempre selecionam o Drum Kit (ou o Step 1–32 em `SET_LIST`), enquanto as setas `[◄]`/`[►]` alternam diretamente as 3 páginas visuais (`● ○ ○` Número/Nome do Kit, `○ ● ○` Medidores MASTER/PHONES, `○ ○ ●` Velocity/Gráfico de Pads).
- **Fluxo completo do `SAFETY MODE` (`[SHIFT] + [KIT]`, Manual pp. 56–58)**:
  - Corrigida a unificação dos IDs `SAFETY_MODE_CONFIRM`, `SAFETY_MODE_ACTIVE` e `SAFETY_MODE_EXIT_CONFIRM`, bloqueando os botões de navegação de tela quando ativo e exigindo confirmação para entrar ou sair.
- **Layout de `EZ_EDIT_INST` e Modo `GROUP` em `EZ_EDIT_TUNING` / `EZ_EDIT_MUFFLING` (Manual pp. 69–72)**:
  - `EZ_EDIT_INST` ajustada para 3 linhas × 1 coluna (Camadas A, B e C).
  - Em `EZ_EDIT_TUNING` e `EZ_EDIT_MUFFLING`, quando `GROUP = ON`, girar o Disco ajusta as 3 camadas simultaneamente.
- **Navegação na janela `INST_LIST_WINDOW` (Manual pp. 122–123)**:
  - `[◄]`/`[►]` e `[F4]`/`[F5]` trocam o grupo de instrumentos (`KICK`, `SNARE`, `TOM`, `HI-HAT`, `RIDE`, `CRASH`, etc.), enquanto `[▲]`/`[▼]` e o Disco percorrem os instrumentos do grupo selecionado.
- **Editor de caracteres `KIT_NAME` e `BACKUP_SAVE` (Manual pp. 66, 103, 197)**:
  - Implementada a tabela ASCII completa do V31, suporte a 16 caracteres (`KIT NAME` / `BACKUP NAME`) e 64 caracteres (`KIT SUB NAME`), e movimentação do cursor de caractere com `[◄]`/`[►]`.
- **Menus em Grade (`KIT_TOOLS`, `COACH_MENU`, `DRUMLINK_TOOLS`)**:
  - Girar o Disco `[+]`/`[-]` agora percorre sequencialmente os ícones da grade, além da navegação 2D pelas 4 setas.
- **Visibilidade condicional e rodapés dinâmicos**:
  - `SONG_MAIN`: Botões `[F2]`–`[F6]` adaptam-se dinamicamente à fonte selecionada (`INTERNAL`, `SD CARD`, `DRUM REC DATA`, `AUDIO REC DATA`).
  - `REC_STANDBY`: Parar a gravação com `[►/■]` abre `AUDIO_REC_PLAYBACK` (no modo `AUDIO REC`) ou `SONG_MAIN` em `DRUM REC DATA` (no modo `DRUM REC`).
  - `STRAINER_LEVER` / `STRAINER_SW_KNOB`: Aba `[F3] FX CTRL` exibida apenas quando `Strainer Lever Function = FX CONTROL`.
  - `KIT_COLOR`: Parâmetros `Red`, `Green` e `Blue` exibidos apenas quando `Kit Color = 11: CUSTOM`.
  - `KIT_VIEW`: Botão `[F6] IMG IMPORT` exibido apenas quando `Kit View Image = ON`.
