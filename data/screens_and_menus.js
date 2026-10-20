/**
 * ============================================================================
 * ROLAND V31 (TD-316) — ÁRVORE DE TELAS, MENUS, CURSORES E BOTÕES F1–F6
 * ============================================================================
 * Exporta `window.V31_SCREENS` (Mapa indexado por ID da tela, ex: "KIT", "MENU").
 * Estrutura de cada tela:
 * - `id`: Código único da tela (usado no roteamento `?screen=` e em `state.currentScreenId`)
 * - `title`: Nome exibido no cabeçalho do visor LCD e anunciada ao leitor de telas
 * - `manualSectionId`: ID da seção correspondente em `window.V31_MANUAL_SECTIONS`
 * - `category`: Agrupamento funcional (ex: "Menu Principal", "KIT EDIT", "SYSTEM")
 * - `accessPath`: Caminho físico e atalhos para chegar à tela
 * - `visualDescription`: Descrição detalhada da geometria da tela e navegação por setas
 * - `fButtons`: Array de 6 objetos (`num: 1..6`, `label`, `action`, `target`, `description`)
 * - `items`: Lista de campos/parâmetros interativos com coordenadas (`row`, `col`),
 *            tipo (`select`, `range`, `action`, `toggle`), valores e descrição acessível.
 * ============================================================================
 */
window.V31_SCREENS = {
  MENU: {
    id: "MENU",
    title: "MENU (Menu Principal)",
    manualSectionId: "menu-principal",
    category: "Menu Principal",
    accessPath: "Pressione o botão físico [MENU] (atalho no simulador: tecla M). O módulo também pode iniciar diretamente nesta tela.",
    visualDescription:
      "A tela MENU é dividida em duas áreas lado a lado: " +
      "1) À esquerda, uma coluna vertical com 5 categorias principais (Linha 1: KIT EDIT, Linha 2: KIT OPTIONS, Linha 3: BACKUP, Linha 4: COPY, Linha 5: SYSTEM). " +
      "2) À direita, uma grade de ícones com até 4 colunas por 3 linhas exibindo os submenus da categoria atualmente selecionada à esquerda. " +
      "Como navegar: Na coluna da esquerda (Coluna 0), use Seta Cima [▲] e Seta Baixo [▼] para escolher entre as 5 categorias. Ao mudar de categoria, a grade da direita muda automaticamente. " +
      "Pressione Seta Direita [►] para entrar na grade de ícones da direita (ou gire o Disco [+]/[-]). Dentro da grade da direita (Colunas 1 a 4, Linhas 1 a 3), use as 4 setas [▲][▼][◄][►] para navegar em 2 dimensões (ou o Disco para percorrer em sequência). Se estiver na Coluna 1 da grade e apertar Seta Esquerda [◄], o cursor volta para a coluna das 5 categorias à esquerda. Pressione [ENTER] em qualquer ícone para abrir a tela correspondente.",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função na tela MENU principal." },
      { num: 2, label: "---", action: "none", description: "Sem função na tela MENU principal." },
      { num: 3, label: "---", action: "none", description: "Sem função na tela MENU principal." },
      { num: 4, label: "---", action: "none", description: "Sem função na tela MENU principal." },
      { num: 5, label: "---", action: "none", description: "Sem função na tela MENU principal." },
      { num: 6, label: "---", action: "none", description: "Sem função na tela MENU principal." }
    ],
    categories: [
      {
        id: "KIT_EDIT",
        name: "KIT EDIT",
        row: 1,
        description: "Edição detalhada de um drum kit (instrumentos, V-EDIT, volume/EQ/compressor de cada pad, ambiência, volume/EQ/compressor do kit e efeitos BUS FX).",
        items: [
          { id: "INSTRUMENT", name: "INSTRUMENT", row: 1, col: 1, targetScreen: "KIT_EDIT_INST", description: "Configura os instrumentos (camadas A, B, C, V-EDIT, Transient, EQ, Layer Mode) para cada pad." },
          { id: "PAD_VOL", name: "PAD VOL", row: 1, col: 2, targetScreen: "PAD_VOL_PAN", description: "Define o volume, o panorâmico (posição estéreo) e o volume mínimo para cada pad." },
          { id: "PAD_EQ", name: "PAD EQ", row: 1, col: 3, targetScreen: "PAD_EQ", description: "Configura o equalizador de 4 bandas e corte de graves para cada pad (pele e aro separadamente)." },
          { id: "PAD_COMP", name: "PAD COMP", row: 1, col: 4, targetScreen: "PAD_COMP", description: "Configura o compressor (STANDARD ou FETCOMP-76) para cada pad." },
          { id: "AMBIENCE", name: "AMBIENCE", row: 2, col: 1, targetScreen: "AMBIENCE", description: "Configura a ambiência (Overhead, Room, Reverb e Kit Resonance) para simular a acústica do local." },
          { id: "KIT_VOL", name: "KIT VOL", row: 2, col: 2, targetScreen: "KIT_VOL", description: "Define o volume geral do drum kit, pedal de chimbal, cross-stick, esteira (buzz/strainer) e balanço aberto/fechado do chimbal." },
          { id: "KIT_EQ", name: "KIT EQ", row: 2, col: 3, targetScreen: "KIT_EQ", description: "Configura o equalizador global de cada drum kit (modo Stereo Normal ou Mid/Side)." },
          { id: "KIT_COMP", name: "KIT COMP", row: 2, col: 4, targetScreen: "KIT_COMP", description: "Configura o compressor mestre do drum kit (Standard 1 ou 2 bandas, ou FETCOMP-76)." },
          { id: "BUS_FX", name: "BUS FX", row: 3, col: 1, targetScreen: "BUS_FX_ROUTING", description: "Configura os 4 barramentos de efeitos (BUS A a D, cada um com FX1 e FX2 entre 94 efeitos, Side Chain e Bus Reverb)." }
        ]
      },
      {
        id: "KIT_OPTIONS",
        name: "KIT OPTIONS",
        row: 2,
        description: "Configurações específicas do drum kit (cross-stick, vassourinhas, ressonância da esteira, automático da caixa, nome, cor do LED, visualização, andamento, frase, grupo de silenciamento, MIDI do kit e posição/pedal).",
        items: [
          { id: "XSTICK", name: "XSTICK", row: 1, col: 1, targetScreen: "XSTICK_INST", description: "Define o instrumento, volume, transiente e V-EDIT do cross-stick da caixa." },
          { id: "BRUSH", name: "BRUSH", row: 1, col: 2, targetScreen: "BRUSH", description: "Ativa ou desativa o modo de execução com vassourinhas (Brush Switch)." },
          { id: "BUZZ", name: "BUZZ", row: 1, col: 3, targetScreen: "BUZZ", description: "Define a ressonância da esteira da caixa (Snare Buzz) acionada por cada pad." },
          { id: "STRAINER", name: "STRAINER", row: 1, col: 4, targetScreen: "STRAINER_LEVER", description: "Configura a alavanca, botão e borboleta do automático da caixa (PD-14DSX) e controle de efeitos." },
          { id: "KIT_NAME", name: "KIT NAME", row: 2, col: 1, targetScreen: "KIT_NAME", description: "Edita o nome (até 16 caracteres) e o subnome (até 64 caracteres) do drum kit." },
          { id: "KIT_COLOR", name: "KIT COLOR", row: 2, col: 2, targetScreen: "KIT_COLOR", description: "Define a cor do LED do botão [KIT] e do indicador do automático para o kit atual." },
          { id: "KIT_VIEW", name: "KIT VIEW", row: 2, col: 3, targetScreen: "KIT_VIEW", description: "Configura a imagem de fundo e o tamanho do texto da tela KIT." },
          { id: "KIT_ TEMPO", name: "KIT TEMPO", row: 2, col: 4, targetScreen: "KIT_TEMPO", description: "Define o andamento individual do drum kit e ativa/desativa o Kit Tempo." },
          { id: "KIT_PHRASE", name: "KIT PHRASE", row: 3, col: 1, targetScreen: "KIT_PHRASE", description: "Seleciona qual das 52 frases demonstrativas toca ao testar o drum kit." },
          { id: "MUTE_GROUP", name: "MUTE GROUP", row: 3, col: 2, targetScreen: "MUTE_GROUP", description: "Define grupos de silenciamento (1 a 8) entre pads (SEND e RECEIVE)." },
          { id: "KIT_MIDI", name: "KIT MIDI", row: 3, col: 3, targetScreen: "KIT_MIDI_NOTE", description: "Configura o número da nota MIDI, Gate Time e Canal MIDI transmitido/recebido por cada pad." },
          { id: "POS_PEDAL", name: "POS/PEDAL", row: 3, col: 4, targetScreen: "POS_PEDAL_POSITION", description: "Ajusta a detecção de ponto de impacto (Position Control/Area) e mudança de afinação pelo pedal de chimbal (Pedal Bend)." }
        ]
      },
      {
        id: "BACKUP",
        name: "BACKUP",
        row: 3,
        description: "Operações de cartão SD: salvar, carregar e excluir backups completos ou de 1 kit individual, formatar o cartão SD e verificar espaço.",
        items: [
          { id: "SAVE", name: "SAVE", row: 1, col: 1, targetScreen: "BACKUP_SAVE", description: "Salva todas as configurações da memória do usuário em um cartão SD (bancos 1 a 99)." },
          { id: "LOAD", name: "LOAD", row: 1, col: 2, targetScreen: "BACKUP_LOAD", description: "Carrega dados de backup de um cartão SD ou do Auto Backup para o V31." },
          { id: "DELETE", name: "DELETE", row: 1, col: 3, targetScreen: "BACKUP_DELETE", description: "Exclui um conjunto de dados de backup salvo no cartão SD (1 a 99)." },
          { id: "SAVE_1_KIT", name: "SAVE 1 KIT", row: 1, col: 4, targetScreen: "BACKUP_SAVE_1KIT", description: "Faz backup das configurações de um único drum kit no cartão SD (arquivos 001 a 999)." },
          { id: "LOAD_1_KIT", name: "LOAD 1 KIT", row: 2, col: 1, targetScreen: "BACKUP_LOAD_1KIT", description: "Carrega um único drum kit salvo no cartão SD (compatível com V31, V51 e V71)." },
          { id: "DEL_1_KIT", name: "DEL 1 KIT", row: 2, col: 2, targetScreen: "BACKUP_DELETE_1KIT", description: "Exclui o backup de um único drum kit do cartão SD (001 a 999)." },
          { id: "FORMAT", name: "FORMAT", row: 2, col: 3, targetScreen: "BACKUP_FORMAT", description: "Inicializa (formata) o cartão SD criando a estrutura de pastas da Roland." },
          { id: "INFO", name: "INFO", row: 2, col: 4, targetScreen: "BACKUP_INFO", description: "Exibe a quantidade de backups completos (ALL) e de kits individuais (1 KIT) salvos no cartão SD." }
        ]
      },
      {
        id: "COPY",
        name: "COPY",
        row: 4,
        description: "Copia ou troca configurações entre memórias do usuário, predefinições de fábrica (Preset) e backups do cartão SD.",
        items: [
          { id: "COPY_KIT", name: "KIT", row: 1, col: 1, targetScreen: "COPY_KIT", description: "Copia ou troca um drum kit inteiro (User, Preset ou SD Card)." },
          { id: "COPY_PAD_INST", name: "PAD INST", row: 1, col: 2, targetScreen: "COPY_PAD_INST", description: "Copia ou troca os instrumentos e ajustes de um pad específico para outro." },
          { id: "COPY_INST_SET", name: "INST SET", row: 1, col: 3, targetScreen: "COPY_INST_SET", description: "Copia vários instrumentos como um conjunto (KICK/SNR, ALL TOMS, CYM SET, ALL AUX)." },
          { id: "COPY_VOL_PAN", name: "VOL/PAN", row: 1, col: 4, targetScreen: "COPY_VOL_PAN", description: "Copia as configurações de VOLUME/PAN de outro kit." },
          { id: "COPY_AMBIENCE", name: "AMBIENCE", row: 2, col: 1, targetScreen: "COPY_AMBIENCE", description: "Copia as configurações de ambiência (Overhead, Room, Reverb, Kit Resonance) de outro kit." },
          { id: "COPY_BUS_FX", name: "BUS FX", row: 2, col: 2, targetScreen: "COPY_BUS_FX", description: "Copia as configurações dos barramentos de efeito BUS FX de outro kit." },
          { id: "COPY_OUTPUT", name: "OUTPUT", row: 2, col: 3, targetScreen: "COPY_OUTPUT", description: "Copia as configurações de saída (OUTPUT) do cartão SD ou predefinição." },
          { id: "COPY_SET_LIST", name: "SET LIST", row: 2, col: 4, targetScreen: "COPY_SET_LIST", description: "Copia ou troca bancos de Set List." },
          { id: "COPY_TRIG_BANK", name: "TRIG BANK", row: 3, col: 1, targetScreen: "COPY_TRIG_BANK", description: "Copia um banco inteiro de configurações de acionador (Trigger Bank 1 a 16)." },
          { id: "COPY_TRIG_PRM", name: "TRIG PRM", row: 3, col: 2, targetScreen: "COPY_TRIG_PRM", description: "Copia os parâmetros de acionador (Trigger Parameters) de um pad para outro." }
        ]
      },
      {
        id: "SYSTEM",
        name: "SYSTEM",
        row: 5,
        description: "Configurações globais do módulo V31: Wi-Fi, Bluetooth, entrada de áudio, acionadores (Triggers/Pads/DrumLink/DWe), MIDI global, saídas de áudio, áudio USB, desligamento automático, opções de visor/interface, informações do sistema e restauração de fábrica.",
        items: [
          { id: "WIFI", name: "Wi-Fi", row: 1, col: 1, targetScreen: "SYSTEM_WIFI", description: "Conecta o V31 ao aplicativo Roland Cloud Connect via Wi-Fi e ajusta o fuso horário (Time Zone)." },
          { id: "BLUETOOTH", name: "Bluetooth", row: 1, col: 2, targetScreen: "SYSTEM_BLUETOOTH", description: "Configura o pareamento de áudio Bluetooth, Bluetooth MIDI, ganho de entrada e Device ID." },
          { id: "AUDIO_IN", name: "AUDIO IN", row: 1, col: 3, targetScreen: "SYSTEM_AUDIO_IN", description: "Define o ganho de entrada para o conector MIX IN e o áudio Bluetooth (0, +6, +12 dB)." },
          { id: "TRIGGER", name: "TRIGGER", row: 1, col: 4, targetScreen: "TRIGGER_BANK", description: "Configura os tipos de pad, pads digitais, sensibilidade, curvas, chimbal, parâmetros avançados, DrumLink/DWe e cancelamento de crosstalk." },
          { id: "MIDI", name: "MIDI", row: 2, col: 1, targetScreen: "SYSTEM_MIDI_BASIC", description: "Configura canal MIDI global, Local Control, Soft Thru, Control Changes (CC), sincronização de clock e tabela Program Change." },
          { id: "OUTPUT", name: "OUTPUT", row: 2, col: 2, targetScreen: "OUTPUT_PAD_MASTER", description: "Define o destino de saída de cada pad e efeito entre PHONES e MASTER OUT, função do knob MASTER/PHONES, corte de graves e Global Tone." },
          { id: "USB_AUDIO", name: "USB AUDIO", row: 2, col: 3, targetScreen: "USB_AUDIO_ROUTING", description: "Configura o Driver Mode (GENERIC 2 canais ou VENDOR 30/32 canais), ganhos de entrada/saída e roteamento USB (NORMAL, PAD DIRECT IN, LOOPBACK)." },
          { id: "AUTO_OFF", name: "AUTO OFF", row: 2, col: 4, targetScreen: "SYSTEM_AUTO_OFF", description: "Altera o tempo de desligamento automático por inatividade (OFF, 20 minutes, 4 hours)." },
          { id: "OPTION", name: "OPTION", row: 3, col: 1, targetScreen: "OPTION_LCD_LED", description: "Ajusta brilho do visor LCD e LEDs, visualização global da tela KIT, reprodução global de Kit Phrase e exibição de Pads Virtuais." },
          { id: "SYS_INFO", name: "INFO", row: 3, col: 2, targetScreen: "SYSTEM_INFO_VERSION", description: "Exibe versão do firmware, memória livre de User Samples, uso do cartão SD, status/atualização/recuperação de pads digitais e licenças." },
          { id: "FACTORY_RESET", name: "FACTORY RESET", row: 3, col: 3, targetScreen: "FACTORY_RESET", description: "Restaura o módulo V31 às configurações de fábrica (com opções para User Samples, Slots de Expansão, pontuações do Coach e Licenças)." }
        ]
      }
    ]
  }
};

Object.assign(window.V31_SCREENS, {
  KIT: {
    id: "KIT",
    title: "DRUM KIT (Tela Principal KIT)",
    manualSectionId: "tela-kit",
    category: "Performance",
    accessPath: "Pressione o botão físico [KIT] (atalho no simulador: tecla K) a partir de qualquer tela.",
    visualDescription:
      "Tela básica de performance do V31. " +
      "No topo esquerdo: Hora atual (quando conectado ao Wi-Fi), título 'DRUM KIT' e estrela (★) se o kit for Favorito. " +
      "No topo central: Andamento ('Tempo 120.0' se Kit Tempo = ON), ícone de Vassourinha (Brush), ícone de User Sample, ícone de Expansão (EXP) e caixa com o Pad selecionado no momento (ex: KICK). " +
      "No topo direito: Medidor de saída L/R, ícones de Bluetooth e Wi-Fi, e resumo GLOBAL TONE (AMB, BASS, TREB). " +
      "No centro: Número grande do Drum Kit (001 a 200) e Nome/Subnome do Kit abaixo. " +
      "Na parte inferior central: 3 pontos de página (● ○ ○). Pressionar Seta Esquerda [◄] ou Seta Direita [►] alterna entre 3 visualizações: " +
      "Página 1 (Padrão: número grande e nome do kit), Página 2 (Medidores de Volume de Saída MASTER L/R e PHONES L/R) e Página 3 (Medidor de Nível de Sinal do Disparador / Velocity das últimas batidas e gráfico dos pads). " +
      "Girar o Disco ([+]/[-]) ou usar Seta Cima [▲] / Seta Baixo [▼] seleciona o Drum Kit (001 a 200). " +
      "No rodapé: 6 botões de função [F1] a [F6].",
    layoutType: "kit_home",
    fButtons: [
      { num: 1, label: "LIST", action: "goto", target: "KIT_LIST", description: "Abre a janela KIT LIST para selecionar um drum kit da lista ou filtrar/marcar favoritos." },
      { num: 2, label: "GLOBAL TONE", action: "goto", target: "GLOBAL_TONE_WINDOW", description: "Abre a janela GLOBAL TONE para ajustar rapidamente Ambience, Bass e Treble globais." },
      { num: 3, label: "PHRASE", action: "toggle_phrase", description: "Toca ou interrompe a frase demonstrativa (Kit Phrase) do drum kit atual." },
      { num: 4, label: "WIRELESS", action: "goto", target: "WIRELESS_WINDOW", description: "Abre a janela WIRELESS para verificar e ligar/desligar Bluetooth e Wi-Fi." },
      { num: 5, label: "TOOLS", action: "goto", target: "KIT_TOOLS", description: "Abre a janela TOOLS com 9 atalhos rápidos (Copy Kit, Copy Pad Inst, Effects SW, Set List, Safety Mode, Save 1 Kit, Load 1 Kit, Snapshot, Kit View, Kit Name)." },
      { num: 6, label: "Analog XStick", action: "toggle_param", paramKey: "analogXStick", description: "Liga ou desliga a reprodução do som de Cross Stick em pad de caixa analógico." }
    ],
    shiftFButtons: [
      { key: "SHIFT + KIT", action: "goto", target: "SAFETY_MODE_CONFIRM", description: "Atalho direto para ativar o Modo de Segurança (Safety Mode) sem passar por TOOLS." }
    ],
    items: [
      { id: "kitNumber", label: "Drum Kit Selecionado", type: "kit_selector", min: 1, max: 200, row: 1, col: 1, explanation: "Use o Disco [+]/[-] ou Setas Cima/Baixo [▲]/[▼] para trocar entre os 200 Drum Kits." },
      { id: "kitPageView", label: "Visualização da Tela KIT (Páginas 1 a 3)", type: "enum", options: ["1: Número e Nome do Kit", "2: Medidores de Saída MASTER e PHONES", "3: Medidor de Velocity e Gráfico de Pads"], paramKey: "kitScreenPage", row: 1, col: 2, explanation: "Use Seta Esquerda [◄] e Seta Direita [►] na tela KIT para alternar entre as 3 páginas visuais." }
    ]
  },

  KIT_LIST: {
    id: "KIT_LIST",
    title: "DRUM KIT - KIT LIST (Lista de Kits e Favoritos)",
    manualSectionId: "tela-kit",
    category: "Performance",
    accessPath: "Na tela KIT, pressione [F1] (LIST) — 1 botão.",
    visualDescription:
      "Janela sobreposta no lado esquerdo da tela KIT mostrando uma lista vertical de 9 kits por página (do 001 ao 200, ou apenas os kits marcados com estrela ★ quando o filtro de Favoritos está ativo). " +
      "Use Seta Cima [▲] / Seta Baixo [▼] ou o Disco [+]/[-] para percorrer os kits. " +
      "Pressione [F2] (★) para marcar ou desmarcar o kit atual como Favorito. " +
      "Pressione [F4] (►ALL ★ / ALL ►★) para alternar entre mostrar Todos os Kits (ALL) e mostrar Apenas Favoritos (★). " +
      "Pressione [F1] (CLOSE), [ENTER] ou [EXIT] para fechar a lista.",
    layoutType: "kit_list",
    fButtons: [
      { num: 1, label: "CLOSE", action: "goto", target: "KIT", description: "Fecha a janela KIT LIST e volta à tela KIT." },
      { num: 2, label: "★ (Favorito)", action: "toggle_favorite", description: "Registra (ON ★) ou remove (OFF) o drum kit selecionado como Favorito." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "►ALL / ★", action: "toggle_fav_filter", description: "Alterna a lista entre Todos os Kits (►ALL ☆) e Apenas Kits Favoritos (ALL ►★)." },
      { num: 5, label: "TOOLS", action: "goto", target: "KIT_TOOLS", description: "Abre a janela TOOLS." },
      { num: 6, label: "Analog XStick", action: "toggle_param", paramKey: "analogXStick", description: "Liga/desliga o Cross Stick em pad analógico." }
    ],
    items: [
      { id: "kitListCursor", label: "Kit na Lista", type: "kit_selector", min: 1, max: 200, row: 1, col: 1, explanation: "Navegue com [▲]/[▼] ou Disco [+]/[-]. Pressione [F2] para favoritar ou [F4] para filtrar favoritos." }
    ]
  },

  GLOBAL_TONE_WINDOW: {
    id: "GLOBAL_TONE_WINDOW",
    title: "DRUM KIT - GLOBAL TONE (Janela Rápida)",
    manualSectionId: "tela-kit",
    category: "Performance",
    accessPath: "Na tela KIT, pressione [F2] (GLOBAL TONE) — 1 botão.",
    visualDescription:
      "Janela pop-up no centro da tela KIT com 3 controles giratórios dispostos em linha horizontal (1 linha × 3 colunas): " +
      "Coluna 1: Ambience (-INF, -60.0 a +6.0 dB), Coluna 2: Bass (-12 a +12 dB), Coluna 3: Treble (-12 a +12 dB). " +
      "Use Seta Esquerda [◄] e Seta Direita [►] para mover entre os 3 controles (de Ambience: 1 seta à direita chega em Bass; 2 setas à direita chega em Treble). " +
      "Gire o Disco [+]/[-] para alterar o valor. Pressione [F3] (EQ) para ligar/desligar o equalizador global (Bass e Treble), ou [F4] (SETUP) para abrir a tela detalhada de configuração do Global Tone.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "LIST", action: "goto", target: "KIT_LIST", description: "Abre a lista de kits." },
      { num: 2, label: "CLOSE", action: "goto", target: "KIT", description: "Fecha a janela GLOBAL TONE e volta à tela KIT." },
      { num: 3, label: "EQ (ON/OFF)", action: "toggle_param", paramKey: "globalToneEqSw", description: "Liga (ON) ou desliga (OFF) a atuação de Bass e Treble." },
      { num: 4, label: "SETUP", action: "goto", target: "GLOBAL_TONE_SETUP", description: "Abre a tela completa GLOBAL TONE para ajustar Type (SHELV/PEAK), Q, Freq e Gain." },
      { num: 5, label: "TOOLS", action: "goto", target: "KIT_TOOLS", description: "Abre a janela TOOLS." },
      { num: 6, label: "Analog XStick", action: "toggle_param", paramKey: "analogXStick", description: "Liga/desliga o Cross Stick analógico." }
    ],
    items: [
      { id: "gtAmb", label: "Ambience (Global)", paramKey: "globalToneAmb", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 1, col: 1, explanation: "Quantidade geral de ambiência aplicada a todos os drum kits (-INF, -60.0 a +6.0 dB)." },
      { id: "gtBass", label: "Bass (Graves)", paramKey: "globalToneBassGain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 0, row: 1, col: 2, explanation: "Quantidade de reforço ou corte de graves (-12 a +12 dB)." },
      { id: "gtTreble", label: "Treble (Agudos)", paramKey: "globalToneTrebleGain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 0, row: 1, col: 3, explanation: "Quantidade de reforço ou corte de agudos (-12 a +12 dB)." }
    ]
  },

  GLOBAL_TONE_SETUP: {
    id: "GLOBAL_TONE_SETUP",
    title: "GLOBAL TONE (Configuração Detalhada)",
    manualSectionId: "tela-kit",
    category: "Performance / Sistema",
    accessPath: "Na tela KIT > [F2] (GLOBAL TONE) > [F4] (SETUP), ou em MENU > SYSTEM > OUTPUT > [F6] (GLOBAL TONE).",
    visualDescription:
      "Tela dedicada do GLOBAL TONE. À esquerda fica o knob 'Ambience' (-INF, -60.0 a +6.0 dB). " +
      "À direita fica uma tabela com 2 colunas (BASS na coluna da esquerda, TREBLE na coluna da direita) e 4 linhas: " +
      "Linha 1: Type (SHELV, PEAK), Linha 2: Q (0.5 a 16.0, ativo quando Type = PEAK), Linha 3: Freq (20Hz–1kHz para BASS; 1kHz–16kHz para TREBLE), Linha 4: Gain (-12 a +12 dB). " +
      "Use as setas [▲][▼][◄][►] para navegar pela grade.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "EQ (ON/OFF)", action: "toggle_param", paramKey: "globalToneEqSw", description: "Liga (ON) ou desliga (OFF) o equalizador global." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "RESET EQ", action: "reset_section", description: "Restaura as configurações de EQ do Global Tone aos padrões de fábrica." },
      { num: 6, label: "EXIT", action: "goto", target: "KIT", description: "Sai da tela GLOBAL TONE e retorna." }
    ],
    items: [
      { id: "gtsAmb", label: "Ambience", paramKey: "globalToneAmb", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 1, col: 1, explanation: "Quantidade geral de ambiência (-INF, -60.0 a +6.0 dB)." },
      { id: "gtsBassType", label: "BASS Type", paramKey: "globalToneBassType", type: "enum", options: ["SHELV", "PEAK"], defaultVal: "SHELV", row: 1, col: 2, explanation: "Tipo de equalizador para os graves (Shelving ou Peak)." },
      { id: "gtsTrebleType", label: "TREBLE Type", paramKey: "globalToneTrebleType", type: "enum", options: ["SHELV", "PEAK"], defaultVal: "SHELV", row: 1, col: 3, explanation: "Tipo de equalizador para os agudos (Shelving ou Peak)." },
      { id: "gtsBassQ", label: "BASS Q", paramKey: "globalToneBassQ", type: "float", min: 0.5, max: 16.0, step: 0.5, defaultVal: 1.0, row: 2, col: 2, explanation: "Largura da banda de graves (0.5 a 16.0, disponível apenas quando Type = PEAK)." },
      { id: "gtsTrebleQ", label: "TREBLE Q", paramKey: "globalToneTrebleQ", type: "float", min: 0.5, max: 16.0, step: 0.5, defaultVal: 1.0, row: 2, col: 3, explanation: "Largura da banda de agudos (0.5 a 16.0, disponível apenas quando Type = PEAK)." },
      { id: "gtsBassFreq", label: "BASS Freq", paramKey: "globalToneBassFreq", type: "enum", options: ["20Hz", "25Hz", "31.5Hz", "40Hz", "50Hz", "63Hz", "80Hz", "100Hz", "125Hz", "160Hz", "200Hz", "250Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz", "1kHz"], defaultVal: "80Hz", row: 3, col: 2, explanation: "Frequência central dos graves (20Hz a 1kHz)." },
      { id: "gtsTrebleFreq", label: "TREBLE Freq", paramKey: "globalToneTrebleFreq", type: "enum", options: ["1kHz", "1.25kHz", "1.6kHz", "2kHz", "2.5kHz", "3.15kHz", "4kHz", "5kHz", "6.3kHz", "8kHz", "10kHz", "12.5kHz", "16kHz"], defaultVal: "8kHz", row: 3, col: 3, explanation: "Frequência central dos agudos (1kHz a 16kHz)." },
      { id: "gtsBassGain", label: "BASS Gain", paramKey: "globalToneBassGain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 0, row: 4, col: 2, explanation: "Ganho de graves (-12 a +12 dB)." },
      { id: "gtsTrebleGain", label: "TREBLE Gain", paramKey: "globalToneTrebleGain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 0, row: 4, col: 3, explanation: "Ganho de agudos (-12 a +12 dB)." }
    ]
  },

  WIRELESS_WINDOW: {
    id: "WIRELESS_WINDOW",
    title: "DRUM KIT - WIRELESS (Conexões Sem Fio)",
    manualSectionId: "tela-kit",
    category: "Performance",
    accessPath: "Na tela KIT, pressione [F4] (WIRELESS) — 1 botão.",
    visualDescription:
      "Janela sobreposta na tela KIT com 2 itens (Bluetooth e Wi-Fi) para ligar ou desligar rapidamente as conexões sem fio, ou abrir suas telas de configuração.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "LIST", action: "goto", target: "KIT_LIST", description: "Abre a lista de kits." },
      { num: 2, label: "GLOBAL TONE", action: "goto", target: "GLOBAL_TONE_WINDOW", description: "Abre Global Tone." },
      { num: 3, label: "PHRASE", action: "toggle_phrase", description: "Toca/para a frase do kit." },
      { num: 4, label: "CLOSE", action: "goto", target: "KIT", description: "Fecha a janela WIRELESS." },
      { num: 5, label: "SETUP", action: "goto", target: "SYSTEM_BLUETOOTH", description: "Abre a tela de configuração de Bluetooth / Wi-Fi." },
      { num: 6, label: "Analog XStick", action: "toggle_param", paramKey: "analogXStick", description: "Liga/desliga Cross Stick analógico." }
    ],
    items: [
      { id: "wlBt", label: "Bluetooth", paramKey: "bluetoothSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Liga (ON) ou desliga (OFF) a função Bluetooth do V31." },
      { id: "wlWifi", label: "Wi-Fi", paramKey: "wifiSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Liga (ON) ou desliga (OFF) a função Wi-Fi do V31." }
    ]
  },

  KIT_TOOLS: {
    id: "KIT_TOOLS",
    title: "DRUM KIT - TOOLS (Janela de Ferramentas Rápidas)",
    manualSectionId: "tela-kit",
    category: "Performance",
    accessPath: "Na tela KIT, pressione [F5] (TOOLS) — 1 botão.",
    visualDescription:
      "Janela sobreposta no centro da tela KIT estruturada em uma grade de 5 colunas por 2 linhas (10 células, todas preenchidas): " +
      "Linha 1: Col 1 = COPY KIT, Col 2 = COPY PAD INST, Col 3 = EFFECTS SW, Col 4 = SET LIST, Col 5 = SAFETY MODE. " +
      "Linha 2: Col 1 = SAVE 1 KIT, Col 2 = LOAD 1 KIT, Col 3 = SNAPSHOT, Col 4 = KIT VIEW, Col 5 = KIT NAME. " +
      "Use as setas [▲][▼][◄][►] ou o Disco para selecionar uma ferramenta e pressione [ENTER] ou [F6] (SELECT) para abrir. Pressione [F5] (CLOSE) ou [EXIT] para fechar.",
    layoutType: "grid_menu",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "CLOSE", action: "goto", target: "KIT", description: "Fecha a janela TOOLS e volta à tela KIT." },
      { num: 6, label: "SELECT", action: "enter_selected", description: "Abre a ferramenta atualmente destacada pelo cursor (mesmo que [ENTER])." }
    ],
    items: [
      { id: "tool_copy_kit", label: "COPY KIT", row: 1, col: 1, targetScreen: "COPY_KIT", explanation: "Copia ou troca o drum kit (Linha 1, Coluna 1 — posição inicial)." },
      { id: "tool_copy_pad", label: "COPY PAD INST", row: 1, col: 2, targetScreen: "COPY_PAD_INST", explanation: "Copia instrumentos de um pad para outro (Linha 1, Coluna 2 — 1 seta à direita)." },
      { id: "tool_fx_sw", label: "EFFECTS SW", row: 1, col: 3, targetScreen: "EFFECTS_SW_WINDOW", explanation: "Exibe a janela EFFECTS SWITCH para ligar/desligar ambiência e efeitos do kit (Linha 1, Coluna 3 — 2 setas à direita)." },
      { id: "tool_set_list", label: "SET LIST", row: 1, col: 4, targetScreen: "SET_LIST", explanation: "Abre o modo SET LIST com 32 bancos de 32 etapas (Linha 1, Coluna 4 — 3 setas à direita)." },
      { id: "tool_safety", label: "SAFETY MODE", row: 1, col: 5, targetScreen: "SAFETY_MODE_CONFIRM", explanation: "Ativa o Modo de Segurança que trava os botões para palco (Linha 1, Coluna 5 — 4 setas à direita)." },
      { id: "tool_save1kit", label: "SAVE 1 KIT", row: 2, col: 1, targetScreen: "BACKUP_SAVE_1KIT", explanation: "Faz backup do kit atual no cartão SD (Linha 2, Coluna 1 — 1 seta para baixo)." },
      { id: "tool_load1kit", label: "LOAD 1 KIT", row: 2, col: 2, targetScreen: "BACKUP_LOAD_1KIT", explanation: "Carrega 1 kit do cartão SD (Linha 2, Coluna 2 — 1 seta para baixo e 1 à direita)." },
      { id: "tool_snapshot", label: "SNAPSHOT", row: 2, col: 3, targetScreen: "SNAPSHOT", explanation: "Salva temporariamente o kit em edição para comparar com o original ou reverter (Linha 2, Coluna 3 — 1 seta para baixo e 2 à direita)." },
      { id: "tool_kitview", label: "KIT VIEW", row: 2, col: 4, targetScreen: "KIT_VIEW", explanation: "Configura o fundo e tamanho da fonte da tela KIT (Linha 2, Coluna 4 — 1 seta para baixo e 3 à direita)." },
      { id: "tool_kitname", label: "KIT NAME", row: 2, col: 5, targetScreen: "KIT_NAME", explanation: "Edita o nome e subnome do kit atual (Linha 2, Coluna 5 — 1 seta para baixo e 4 à direita)." }
    ]
  },

  EFFECTS_SW_WINDOW: {
    id: "EFFECTS_SW_WINDOW",
    title: "EFFECTS SWITCH (Chaves de Efeitos do Kit)",
    manualSectionId: "tela-kit",
    category: "Performance",
    accessPath: "Na tela KIT > [F5] (TOOLS) > Seta Direita 2x até EFFECTS SW > [ENTER].",
    visualDescription:
      "Janela onde você verifica e edita o estado ligado/desligado (ON/OFF) da Ambiência (Overhead, Room, Reverb, Kit Resonance), Compressores/EQs do Kit e dos 4 Barramentos de Efeito (BUS A a D). " +
      "Pressione [F6] (ALL OFF) para desligar todos os efeitos de uma só vez, ou [F5] (UNDO) para reverter ao estado anterior.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "CLOSE", action: "goto", target: "KIT", description: "Fecha a janela EFFECTS SWITCH." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "UNDO", action: "undo_fx_sw", description: "Reverte para as configurações de efeitos que estavam ativas ao abrir a janela." },
      { num: 6, label: "ALL OFF", action: "all_fx_off", description: "Desliga todos os efeitos do kit de uma só vez." }
    ],
    items: [
      { id: "fxsw_oh", label: "OVERHEAD Switch", paramKey: "ohSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Liga/desliga o simulador de microfone suspenso (Overhead)." },
      { id: "fxsw_room", label: "ROOM Switch", paramKey: "roomSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 2, explanation: "Liga/desliga a ambiência de sala (Room)." },
      { id: "fxsw_rev", label: "REVERB Switch", paramKey: "reverbSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 1, col: 3, explanation: "Liga/desliga o Reverb do kit." },
      { id: "fxsw_reso", label: "KIT RESONANCE Switch", paramKey: "kitResoSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 4, explanation: "Liga/desliga a ressonância do kit." },
      { id: "fxsw_busA", label: "BUS-A FX1/FX2", paramKey: "busASw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Liga/desliga os efeitos do barramento BUS-A." },
      { id: "fxsw_busB", label: "BUS-B FX1/FX2", paramKey: "busBSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 2, col: 2, explanation: "Liga/desliga os efeitos do barramento BUS-B." },
      { id: "fxsw_busC", label: "BUS-C FX1/FX2", paramKey: "busCSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 2, col: 3, explanation: "Liga/desliga os efeitos do barramento BUS-C." },
      { id: "fxsw_busD", label: "BUS-D FX1/FX2", paramKey: "busDSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 2, col: 4, explanation: "Liga/desliga os efeitos do barramento BUS-D." },
      { id: "fxsw_kiteq", label: "KIT EQ Switch", paramKey: "kitEqSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 3, col: 1, explanation: "Liga/desliga o equalizador mestre do kit." },
      { id: "fxsw_kitcomp", label: "KIT COMP Switch", paramKey: "kitCompSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 3, col: 2, explanation: "Liga/desliga o compressor mestre do kit." }
    ]
  },

  SAFETY_MODE_CONFIRM: {
    id: "SAFETY_MODE_CONFIRM",
    title: "SAFETY MODE - Confirmação de Ativação",
    manualSectionId: "tela-kit",
    category: "Performance",
    accessPath: "Na tela KIT > [SHIFT] + [KIT], ou [F5] (TOOLS) > Seta Direita 4x até SAFETY MODE > [ENTER].",
    visualDescription:
      "Caixa de diálogo central com a mensagem: 'Safety Mode eliminates the risk of accidentally operating the wrong buttons and etc. during live performance. This also turns off the wireless functions. Do you want to enable the Safety Mode?' " +
      "Existem 2 botões horizontais: Coluna 1 = CANCEL (padrão), Coluna 2 = OK (1 seta à direita). Pressione [►] para selecionar OK e pressione [ENTER].",
    layoutType: "dialog",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "sm_cancel", label: "CANCEL (Cancelar)", row: 1, col: 1, targetScreen: "KIT", explanation: "Cancela e retorna à tela KIT." },
      { id: "sm_ok", label: "OK (Ativar Safety Mode)", row: 1, col: 2, targetScreen: "SAFETY_MODE_ACTIVE", explanation: "Ativa o Modo de Segurança (1 seta à direita + [ENTER])." }
    ]
  },

  SAFETY_MODE_ACTIVE: {
    id: "SAFETY_MODE_ACTIVE",
    title: "Safety Mode (Modo de Segurança Ativado)",
    manualSectionId: "tela-kit",
    category: "Performance",
    accessPath: "Ativado após confirmar OK em SAFETY MODE.",
    visualDescription:
      "Tela KIT em Modo de Segurança (Safety Mode). Os botões de edição ([MENU], [EZ EDIT], [EXPANSION], [REC], [SONG], [COACH], [CLICK]) e conexões sem fio ficam desativados para evitar toques acidentais ao vivo. " +
      "Operações permitidas: Trocar de Drum Kit com o Disco [+]/[-], ativar/desativar Set List com [F5] (SET LIST), ajustar volumes físicos, parar todos os sons ([SHIFT]+[EXIT]), ligar/desligar metrônomo ([SHIFT]+[CLICK]), e sair do Modo de Segurança pressionando [F1] (EXIT) ou [SHIFT]+[KIT].",
    layoutType: "kit_home",
    fButtons: [
      { num: 1, label: "🔒 EXIT", action: "goto", target: "SAFETY_MODE_EXIT_CONFIRM", description: "Abre a confirmação para desativar o Modo de Segurança." },
      { num: 2, label: "---", action: "none", description: "Bloqueado no Modo de Segurança." },
      { num: 3, label: "---", action: "none", description: "Bloqueado no Modo de Segurança." },
      { num: 4, label: "---", action: "none", description: "Bloqueado no Modo de Segurança." },
      { num: 5, label: "SET LIST", action: "goto", target: "SET_LIST", description: "Ativa/desativa o modo Set List." },
      { num: 6, label: "Analog XStick", action: "none", description: "Indicador de Analog XStick (bloqueado para edição)." }
    ],
    items: [
      { id: "sm_kit", label: "Trocar Drum Kit (Modo Seguro)", type: "kit_selector", min: 1, max: 200, row: 1, col: 1, explanation: "Use o Disco [+]/[-] para trocar de kit com segurança. Pressione [F1] (tecla 1) para sair do Safety Mode." }
    ]
  },

  SAFETY_MODE_EXIT_CONFIRM: {
    id: "SAFETY_MODE_EXIT_CONFIRM",
    title: "Safety Mode - Confirmar Saída",
    manualSectionId: "tela-kit",
    category: "Performance",
    accessPath: "No Modo de Segurança, pressione [F1] (EXIT) ou [SHIFT] + [KIT].",
    visualDescription:
      "Caixa de diálogo: 'Do you want to exit Safety Mode?' com 2 opções horizontais: Coluna 1 = CANCEL, Coluna 2 = OK (1 seta à direita). Selecione OK e pressione [ENTER] para destravar o módulo.",
    layoutType: "dialog",
    fButtons: [
      { num: 1, label: "EXIT", action: "goto", target: "SAFETY_MODE_ACTIVE", description: "Volta ao Safety Mode." },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "---", action: "none", description: "" },
      { num: 6, label: "---", action: "none", description: "" }
    ],
    items: [
      { id: "sm_exit_cancel", label: "CANCEL (Permanecer no Safety Mode)", row: 1, col: 1, targetScreen: "SAFETY_MODE_ACTIVE", explanation: "Continua no Modo de Segurança." },
      { id: "sm_exit_ok", label: "OK (Desativar Safety Mode)", row: 1, col: 2, targetScreen: "KIT", explanation: "Sai do Modo de Segurança e retorna à tela KIT normal (1 seta à direita + [ENTER])." }
    ]
  },

  SNAPSHOT: {
    id: "SNAPSHOT",
    title: "SNAPSHOT (Comparação e Reversão de Drum Kit)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "Utilitários / Performance",
    accessPath: "Na tela KIT > [F5] (TOOLS) > Seta Baixo 1x, Seta Direita 2x até SNAPSHOT > [ENTER].",
    visualDescription:
      "A tela SNAPSHOT exibe 3 caixas horizontais (1 linha × 3 colunas) para comparar ou restaurar o som do kit: " +
      "Coluna 1 (Esquerda): CURRENT (Configurações atuais editadas do kit). " +
      "Coluna 2 (Centro): SNAPSHOT (Configurações salvas temporariamente com [F1] SAVE). " +
      "Coluna 3 (Direita): LAST SELECTED (Configurações originais de quando o kit foi selecionado pela última vez). " +
      "Use Seta Esquerda [◄] e Seta Direita [►] para alternar entre os 3 estados e ouvir a diferença! " +
      "Pressione [F1] (SAVE) para fotografar o kit atual no slot SNAPSHOT. " +
      "Quando o cursor estiver em SNAPSHOT ou LAST SELECTED, pressione [F6] (RESTORE) para reverter o kit atual àquele estado.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "SAVE", action: "snapshot_save", description: "Salva as configurações atuais do drum kit na memória temporária SNAPSHOT." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "RESTORE", action: "snapshot_restore", description: "Restaura o drum kit atual para os dados de SNAPSHOT ou LAST SELECTED selecionados." }
    ],
    items: [
      { id: "snap_current", label: "CURRENT (Drum Kit Atual Editado)", paramKey: "snapshotMode", type: "enum", options: ["CURRENT", "SNAPSHOT", "LAST SELECTED"], defaultVal: "CURRENT", row: 1, col: 1, explanation: "Coluna 1: Ouve as configurações atuais do drum kit." },
      { id: "snap_saved", label: "SNAPSHOT (Salvo Temporariamente)", paramKey: "snapshotMode", type: "enum", options: ["CURRENT", "SNAPSHOT", "LAST SELECTED"], defaultVal: "SNAPSHOT", row: 1, col: 2, explanation: "Coluna 2 (1 seta à direita): Ouve o snapshot salvo. Pressione [F6] (RESTORE) para restaurar." },
      { id: "snap_last", label: "LAST SELECTED (Estado Inicial ao Selecionar o Kit)", paramKey: "snapshotMode", type: "enum", options: ["CURRENT", "SNAPSHOT", "LAST SELECTED"], defaultVal: "LAST SELECTED", row: 1, col: 3, explanation: "Coluna 3 (2 setas à direita): Ouve o estado original do kit antes da edição. Pressione [F6] (RESTORE) para reverter." }
    ]
  },

  SET_LIST: {
    id: "SET_LIST",
    title: "SET LIST (Sequência de Drum Kits para Performance Ao Vivo)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "Utilitários / Performance",
    accessPath: "Na tela KIT > [F5] (TOOLS) > Seta Direita 3x até SET LIST > [ENTER].",
    visualDescription:
      "Tela de performance de Set List (32 bancos, cada um com até 32 etapas/steps). " +
      "No topo esquerdo aparece o número e nome do Banco atual (ex: '1 Standard') e o passo atual (ex: '1/11'). " +
      "No topo direito aparece a lista das próximas etapas (Step 1, Step 2, Step 3...). " +
      "No centro aparece em letras grandes o número e nome do Drum Kit da etapa atual (ex: '001 V-Drums Kit'). " +
      "Gire o Disco [+]/[-] ou use as setas [▲]/[▼] para avançar ou retroceder pelos passos (Steps) da Set List na ordem programada! " +
      "Use [F2] (<BANK) e [F3] (BANK>) para trocar entre os 32 bancos de Set List. Pressione [F5] (SETUP) para editar os bancos e passos.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "<BANK", action: "setlist_prev_bank", description: "Seleciona o banco de Set List anterior (1 a 32)." },
      { num: 3, label: "BANK>", action: "setlist_next_bank", description: "Seleciona o próximo banco de Set List (1 a 32)." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "SETUP", action: "goto", target: "SET_LIST_SETUP", description: "Abre a tela SET LIST SETUP para criar, editar etapas ou renomear bancos." },
      { num: 6, label: "Analog XStick", action: "toggle_param", paramKey: "analogXStick", description: "Liga/desliga Cross Stick analógico." }
    ],
    items: [
      { id: "setlistStep", label: "Etapa Atual do Set List (Step)", paramKey: "setListStep", type: "int", min: 1, max: 32, defaultVal: 1, row: 1, col: 1, explanation: "Gire o Disco [+]/[-] para avançar ou voltar pelas etapas (Steps 1 a 32) da Set List." },
      { id: "setlistBank", label: "Banco de Set List (1 a 32)", paramKey: "setListBank", type: "int", min: 1, max: 32, defaultVal: 1, row: 2, col: 1, explanation: "Use [F2] (<BANK) e [F3] (BANK>) para escolher entre os 32 bancos de Set List." }
    ]
  },

  SET_LIST_SETUP: {
    id: "SET_LIST_SETUP",
    title: "SET LIST SETUP (Edição de Bancos e Etapas do Set List)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "Utilitários / Performance",
    accessPath: "Na tela SET LIST, pressione [F5] (SETUP).",
    visualDescription:
      "Tela dividida em 2 painéis: " +
      "Painel esquerdo (BANK): Lista dos 32 bancos (1 Standard, 2 Rock/Metal, 3 Jazz, 4 Electronic, 5 Percussion, 6 a 32 Set List 06..32). " +
      "Painel direito (Step / Kit): Lista das 32 etapas (Step 1 a Step 32) do banco selecionado e qual Drum Kit (001 a 200) está atribuído a cada etapa. " +
      "Quando o cursor está no painel BANK: pressione [F2] (NAME) para renomear o banco, ou [F3] (STEP EDIT) (ou Seta Direita [►]) para editar as etapas. " +
      "Durante a edição de etapas (STEP EDIT): use [▲]/[▼] para escolher o Step, gire o Disco [+]/[-] para escolher o Drum Kit daquela etapa, pressione [F5] (INSERT) para duplicar/inserir uma etapa ou [F6] (DELETE) para excluir a etapa.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "NAME", action: "goto", target: "KIT_NAME", description: "Edita o nome do banco de Set List selecionado (até 16 caracteres)." },
      { num: 3, label: "STEP EDIT", action: "announce", message: "Modo STEP EDIT ativo: selecione a etapa e gire o Disco para definir o Drum Kit. Use F5 (INSERT) para inserir etapa e F6 (DELETE) para remover etapa.", description: "Ativa a edição das 32 etapas do banco atual." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "INSERT", action: "setlist_insert_step", description: "No modo STEP EDIT, insere uma nova etapa na posição do cursor empurrando as seguintes para baixo." },
      { num: 6, label: "DELETE", action: "setlist_delete_step", description: "No modo STEP EDIT, exclui a etapa na posição do cursor puxando as seguintes para cima." }
    ],
    items: [
      { id: "sls_bank", label: "Banco Selecionado (BANK 1–32)", paramKey: "setListBank", type: "enum", options: ["1: Standard", "2: Rock/Metal", "3: Jazz", "4: Electronic", "5: Percussion", "6: Set List 06", "7: Set List 07", "8: Set List 08", "9: Set List 09", "10: Set List 10"], defaultVal: "1: Standard", row: 1, col: 1, explanation: "Selecione qual dos 32 bancos deseja editar." },
      { id: "sls_step", label: "Etapa para Editar (Step 1–32)", paramKey: "setListStep", type: "int", min: 1, max: 32, defaultVal: 1, row: 1, col: 2, explanation: "Selecione a etapa (Step 1 a 32) dentro do banco." },
      { id: "sls_kit", label: "Drum Kit Atribuído à Etapa", paramKey: "setListStepKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 2, col: 2, explanation: "Escolha qual Drum Kit (001 a 200) será chamado nesta etapa da Set List." }
    ]
  },

  // ==================== EZ EDIT ====================
  EZ_EDIT_INST: {
    id: "EZ_EDIT_INST",
    title: "EZ EDIT - INSTRUMENT (Edição Fácil: Seleção de Instrumentos)",
    manualSectionId: "ez-edit",
    category: "EZ EDIT",
    accessPath: "Pressione o botão físico [EZ EDIT] (atalho: tecla E ou Z) e depois [F1] (INST).",
    visualDescription:
      "A tela EZ EDIT - INSTRUMENT ajusta automaticamente o aro do pad para acompanhar a pele. " +
      "No lado esquerdo há 3 linhas correspondentes às 3 camadas do pad atual (Linha 1: Camada A, Linha 2: Camada B, Linha 3: Camada C). " +
      "Cada linha possui 2 colunas: Coluna 1 = Interruptor da camada (ON/OFF), Coluna 2 = Instrumento atribuído (ex: '021 Mx VT Maple 3 K'). " +
      "No lado direito aparece o desenho do kit destacando o pad selecionado (use Ctrl+Esquerda/Direita para trocar de pad). " +
      "No rodapé: [F1] INST, [F2] TUNING, [F3] MUFFLING, [F4] VOLUME, [F5] LIST (abre a lista completa de instrumentos por grupo), [F6] UNDO (desfaz alterações feitas desde que entrou na tela).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "EZ_EDIT_INST", description: "Aba atual: seleção de instrumentos das camadas A, B e C." },
      { num: 2, label: "TUNING", action: "goto", target: "EZ_EDIT_TUNING", description: "Muda para a aba TUNING (afinação/tamanho das camadas A, B e C)." },
      { num: 3, label: "MUFFLING", action: "goto", target: "EZ_EDIT_MUFFLING", description: "Muda para a aba MUFFLING (abafamento/decay das camadas A, B e C)." },
      { num: 4, label: "VOLUME", action: "goto", target: "EZ_EDIT_VOLUME", description: "Muda para a aba VOLUME (volume de cada camada e volume geral do pad)." },
      { num: 5, label: "LIST", action: "goto", target: "INST_LIST_WINDOW", description: "Abre a janela INST LIST para escolher instrumentos navegando por grupos/categorias." },
      { num: 6, label: "UNDO", action: "undo_screen", description: "Reverte para as configurações de quando a tela foi acessada pela primeira vez." }
    ],
    items: [
      { id: "ez_layerA_sw", label: "Camada A - Interruptor (Layer Switch)", paramKey: "layerASw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Liga (ON) ou desliga (OFF) a Camada A do pad atual." },
      { id: "ez_layerA_inst", label: "Camada A - Instrumento", paramKey: "layerAInst", type: "instrument", defaultVal: "021 Mx VT Maple 3 K", row: 1, col: 2, explanation: "Seleciona o instrumento da Camada A (1 seta à direita a partir da chave A). Pressione [ENTER] ou [F5] para abrir a lista por grupos." },
      { id: "ez_layerB_sw", label: "Camada B - Interruptor (Layer Switch)", paramKey: "layerBSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Liga (ON) ou desliga (OFF) a Camada B do pad atual (1 seta para baixo)." },
      { id: "ez_layerB_inst", label: "Camada B - Instrumento", paramKey: "layerBInst", type: "instrument", defaultVal: "020 Mx VT Maple 2 K", row: 2, col: 2, explanation: "Seleciona o instrumento da Camada B." },
      { id: "ez_layerC_sw", label: "Camada C - Interruptor (Layer Switch)", paramKey: "layerCSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 3, col: 1, explanation: "Liga (ON) ou desliga (OFF) a Camada C do pad atual (2 setas para baixo)." },
      { id: "ez_layerC_inst", label: "Camada C - Instrumento", paramKey: "layerCInst", type: "instrument", defaultVal: "000 OFF", row: 3, col: 2, explanation: "Seleciona o instrumento da Camada C." }
    ]
  },

  INST_LIST_WINDOW: {
    id: "INST_LIST_WINDOW",
    title: "INST LIST (Janela de Seleção de Instrumento por Grupo)",
    manualSectionId: "ez-edit",
    category: "EZ EDIT / KIT EDIT",
    accessPath: "Na tela EZ EDIT - INSTRUMENT ou KIT EDIT - INSTRUMENT, pressione [ENTER] sobre o instrumento ou pressione [F5] (LIST).",
    visualDescription:
      "Janela sobreposta com os grupos de instrumentos no topo (KICK, KICK OTHERS, SNARE, SNARE OTHERS, CROSS STICK, TOM, TOM OTHERS, HI-HAT, RIDE, CRASH, CHINA, SPLASH, STACKED CYMBAL, BELL/CHIME/GONG, BLOCK/COWBELL, PERCUSSION, CLAP, ELEMENTS, SYNTH WAVE, USER SAMPLE, e grupos das Expansões EXV001/002/003). " +
      "Use [F4] (<GROUP) e [F5] (GROUP>) (ou Seta Esquerda [◄] / Seta Direita [►]) para trocar de grupo de instrumentos. " +
      "Use Seta Cima [▲] / Seta Baixo [▼] ou o Disco [+]/[-] para escolher o instrumento dentro do grupo. Pressione [F6] (CLOSE) ou [ENTER] para confirmar.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "<GROUP", action: "prev_inst_group", description: "Seleciona o grupo/categoria de instrumentos anterior." },
      { num: 5, label: "GROUP>", action: "next_inst_group", description: "Seleciona o próximo grupo/categoria de instrumentos." },
      { num: 6, label: "CLOSE", action: "goto_prev", description: "Fecha a janela INST LIST e retorna à tela de instrumento." }
    ],
    items: [
      { id: "instListGroup", label: "Grupo de Instrumentos (Categoria)", paramKey: "instGroupFilter", type: "enum", options: ["KICK", "KICK OTHERS", "KICK ELEC", "SNARE", "CROSS STICK", "SNARE OTHERS", "SNARE ELEC", "TOM", "TOM OTHERS", "TOM ELEC", "HI-HAT", "HI-HAT OTHERS", "HI-HAT ELEC", "RIDE", "CRASH", "CHINA", "SPLASH", "STACKED CYMBAL", "CYMBAL OTHERS", "CYMBAL ELEC", "BELL/CHIME/GONG", "BLOCK/COWBELL", "PERCUSSION", "PERC ELEC", "CLAP", "SOUND FX", "ELEMENTS", "SYNTH WAVE", "USER SAMPLE"], defaultVal: "KICK", row: 1, col: 1, explanation: "Use [F4] (<GROUP) e [F5] (GROUP>) ou o Disco para filtrar por categoria de instrumento." },
      { id: "instListSelect", label: "Instrumento Selecionado na Lista", paramKey: "layerAInst", type: "instrument", defaultVal: "021 Mx VT Maple 3 K", row: 2, col: 1, explanation: "Use [▲]/[▼] ou o Disco [+]/[-] para selecionar entre os mais de 1.000 instrumentos do Data List." }
    ]
  },

  EZ_EDIT_TUNING: {
    id: "EZ_EDIT_TUNING",
    title: "EZ EDIT - TUNING (Edição Fácil: Afinação / Tamanho)",
    manualSectionId: "ez-edit",
    category: "EZ EDIT",
    accessPath: "Pressione [EZ EDIT] e depois [F2] (TUNING).",
    visualDescription:
      "Mostra 3 linhas correspondentes às Camadas A, B e C do pad selecionado. " +
      "Para tambores (Kick, Snare, Tom), ajusta 'Tuning' (-100 a +100). Para pratos e chimbal, ajusta 'Size' (1.0 a 40.0 polegadas). Para outros instrumentos/samples, ajusta 'Pitch' (-100 a +100). " +
      "Quando o botão [F5] (GROUP) está ligado (ON), girar o Disco altera as camadas A, B e C simultaneamente mantendo a proporção. Quando [F5] (GROUP) está desligado (OFF), você usa Seta Cima [▲] / Seta Baixo [▼] para ajustar cada camada individualmente.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "EZ_EDIT_INST", description: "Muda para a aba INSTRUMENT." },
      { num: 2, label: "TUNING", action: "goto", target: "EZ_EDIT_TUNING", description: "Aba atual: TUNING." },
      { num: 3, label: "MUFFLING", action: "goto", target: "EZ_EDIT_MUFFLING", description: "Muda para a aba MUFFLING." },
      { num: 4, label: "VOLUME", action: "goto", target: "EZ_EDIT_VOLUME", description: "Muda para a aba VOLUME." },
      { num: 5, label: "GROUP (ON/OFF)", action: "toggle_param", paramKey: "ezGroupSw", description: "Define se as camadas A–C são ajustadas juntas como um grupo (ON) ou individualmente (OFF)." },
      { num: 6, label: "UNDO", action: "undo_screen", description: "Reverte para os valores de quando a tela foi aberta." }
    ],
    items: [
      { id: "ez_tune_A", label: "Camada A - Tuning / Size / Pitch", paramKey: "layerATuning", type: "int", min: -100, max: 100, defaultVal: -10, row: 1, col: 1, explanation: "Afinação da Camada A (-100 a +100, ou Tamanho 1.0–40.0 pol. em pratos)." },
      { id: "ez_tune_B", label: "Camada B - Tuning / Size / Pitch", paramKey: "layerBTuning", type: "int", min: -100, max: 100, defaultVal: -18, row: 2, col: 1, explanation: "Afinação da Camada B (1 seta para baixo)." },
      { id: "ez_tune_C", label: "Camada C - Tuning / Size / Pitch", paramKey: "layerCTuning", type: "int", min: -100, max: 100, defaultVal: 0, row: 3, col: 1, explanation: "Afinação da Camada C (2 setas para baixo)." }
    ]
  },

  EZ_EDIT_MUFFLING: {
    id: "EZ_EDIT_MUFFLING",
    title: "EZ EDIT - MUFFLING (Edição Fácil: Abafamento)",
    manualSectionId: "ez-edit",
    category: "EZ EDIT",
    accessPath: "Pressione [EZ EDIT] e depois [F3] (MUFFLING).",
    visualDescription:
      "Mostra 3 linhas correspondentes às Camadas A, B e C do pad selecionado. " +
      "Ajusta o abafamento (Muffling) ou duração (Decay) de cada camada. " +
      "Para Bumbo (KICK): OFF, TAPE1–2, BLANKET1–3, WEIGHT1–2. Para Caixa (SNARE): OFF, TAPE1–4, GEL1–3, RING1–2. Para Toms: OFF, TAPE1–6, GEL1–4, FELT1–2. Para Pratos: OFF, TAPE1–12. " +
      "Use [F5] (GROUP) para ajustar as 3 camadas juntas (ON) ou separadas (OFF), e [F6] (UNDO) para desfazer.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "EZ_EDIT_INST", description: "Muda para a aba INSTRUMENT." },
      { num: 2, label: "TUNING", action: "goto", target: "EZ_EDIT_TUNING", description: "Muda para a aba TUNING." },
      { num: 3, label: "MUFFLING", action: "goto", target: "EZ_EDIT_MUFFLING", description: "Aba atual: MUFFLING." },
      { num: 4, label: "VOLUME", action: "goto", target: "EZ_EDIT_VOLUME", description: "Muda para a aba VOLUME." },
      { num: 5, label: "GROUP (ON/OFF)", action: "toggle_param", paramKey: "ezGroupSw", description: "Define se as camadas A–C são ajustadas como conjunto (ON) ou individualmente (OFF)." },
      { num: 6, label: "UNDO", action: "undo_screen", description: "Reverte para os valores iniciais." }
    ],
    items: [
      { id: "ez_muff_A", label: "Camada A - Muffling / Decay", paramKey: "layerAMuffling", type: "enum", options: ["OFF", "TAPE1", "TAPE2", "TAPE3", "TAPE4", "BLANKET1", "BLANKET2", "BLANKET3", "WEIGHT1", "WEIGHT2", "GEL1", "GEL2", "GEL3", "RING1", "RING2", "FELT1", "FELT2"], defaultVal: "TAPE2", row: 1, col: 1, explanation: "Configuração de abafamento (Muffling) da Camada A." },
      { id: "ez_muff_B", label: "Camada B - Muffling / Decay", paramKey: "layerBMuffling", type: "enum", options: ["OFF", "TAPE1", "TAPE2", "TAPE3", "TAPE4", "BLANKET1", "BLANKET2", "BLANKET3", "WEIGHT1", "WEIGHT2", "GEL1", "GEL2", "GEL3", "RING1", "RING2", "FELT1", "FELT2"], defaultVal: "WEIGHT1", row: 2, col: 1, explanation: "Configuração de abafamento (Muffling) da Camada B (1 seta para baixo)." },
      { id: "ez_muff_C", label: "Camada C - Muffling / Decay", paramKey: "layerCMuffling", type: "enum", options: ["OFF", "TAPE1", "TAPE2", "TAPE3", "TAPE4", "BLANKET1", "BLANKET2", "BLANKET3", "WEIGHT1", "WEIGHT2", "GEL1", "GEL2", "GEL3", "RING1", "RING2", "FELT1", "FELT2"], defaultVal: "OFF", row: 3, col: 1, explanation: "Configuração de abafamento (Muffling) da Camada C (2 setas para baixo)." }
    ]
  },

  EZ_EDIT_VOLUME: {
    id: "EZ_EDIT_VOLUME",
    title: "EZ EDIT - VOLUME (Edição Fácil: Volume das Camadas e do Pad)",
    manualSectionId: "ez-edit",
    category: "EZ EDIT",
    accessPath: "Pressione [EZ EDIT] e depois [F4] (VOLUME).",
    visualDescription:
      "Dividida em 2 colunas de controles de volume (-INF, -60.0 a +6.0 dB): " +
      "Na Coluna 1 (Esquerda), ficam os 3 volumes individuais de instrumento das Camadas A (Linha 1), B (Linha 2) e C (Linha 3). " +
      "Na Coluna 2 (Centro-Direita, 1 seta à direita), fica o fader vertical de Volume Geral do Pad selecionado (ex: KICK 0.0 dB). " +
      "Use [▲]/[▼] para escolher entre as Camadas A, B e C, e [►] para ir ao fader geral do Pad.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "EZ_EDIT_INST", description: "Muda para a aba INSTRUMENT." },
      { num: 2, label: "TUNING", action: "goto", target: "EZ_EDIT_TUNING", description: "Muda para a aba TUNING." },
      { num: 3, label: "MUFFLING", action: "goto", target: "EZ_EDIT_MUFFLING", description: "Muda para a aba MUFFLING." },
      { num: 4, label: "VOLUME", action: "goto", target: "EZ_EDIT_VOLUME", description: "Aba atual: VOLUME." },
      { num: 5, label: "---", action: "none", description: "Sem função nesta aba." },
      { num: 6, label: "UNDO", action: "undo_screen", description: "Reverte para os valores iniciais." }
    ],
    items: [
      { id: "ez_vol_A", label: "Camada A - Instrument Volume", paramKey: "layerAVol", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 1, col: 1, explanation: "Volume do instrumento da Camada A (-INF, -60.0 a +6.0 dB)." },
      { id: "ez_vol_pad", label: "Volume Geral do Pad", paramKey: "padVol", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 1, col: 2, explanation: "Volume geral do pad selecionado (1 seta à direita a partir das camadas)." },
      { id: "ez_vol_B", label: "Camada B - Instrument Volume", paramKey: "layerBVol", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 2, col: 1, explanation: "Volume do instrumento da Camada B (-INF, -60.0 a +6.0 dB)." },
      { id: "ez_vol_C", label: "Camada C - Instrument Volume", paramKey: "layerCVol", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 3, col: 1, explanation: "Volume do instrumento da Camada C (-INF, -60.0 a +6.0 dB)." }
    ]
  },

  // ==================== MENU > KIT EDIT ====================
  KIT_EDIT_INST: {
    id: "KIT_EDIT_INST",
    title: "INSTRUMENT - INST (Edição Detalhada de Instrumento)",
    manualSectionId: "kit-edit-instrument",
    category: "MENU > KIT EDIT",
    accessPath: "Pressione [MENU] > KIT EDIT (Linha 1) > Seta Direita 1x até INSTRUMENT (Linha 1, Coluna 1) > [ENTER] > [F1] (INST).",
    visualDescription:
      "A tela INSTRUMENT (aba INST) exibe as 3 camadas do pad/zona atual em 3 linhas (Camada A na Linha 1, Camada B na Linha 2, Camada C na Linha 3). " +
      "Em cada camada há 3 colunas navegáveis com Seta Esquerda [◄] e Seta Direita [►]: " +
      "Coluna 1 (Esquerda): Interruptor de camada (Layer Switch: ON/OFF). " +
      "Coluna 2 (Centro): Seleção de Instrumento (mostra Grupo, Banco — PRESET, Expansão ou USER SAMPLE —, Número e Nome do instrumento; pressionar [ENTER] abre a janela INST LIST por grupos). " +
      "Coluna 3 (Direita): Fader de Volume da Camada (Layer Volume: -INF, -60.0 a +6.0 dB). " +
      "No canto direito há o medidor de saída MASTER L/R. " +
      "No rodapé, os botões [F1] a [F6] controlam: [F1] INST, [F2] V-EDIT, [F3] TRANSIENT, [F4] EQ, [F5] LAYER MODE, [F6] H&R (vincula Pele e Aro ON/OFF). " +
      "Atalhos com [SHIFT]: [SHIFT]+[F1]/[F2]/[F3] liga/desliga diretamente as Camadas A/B/C; [SHIFT]+[F4] abre 'Expansions Assign Info' (EXP INFO); [SHIFT]+[F6] abre 'LAYER COPY' (copiar/trocar camadas).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "KIT_EDIT_INST", description: "Aba atual: seleção de instrumento, chave ON/OFF e volume das camadas A, B e C." },
      { num: 2, label: "V-EDIT", action: "goto", target: "KIT_EDIT_VEDIT", description: "Abre a aba V-EDIT para modelagem acústica profunda (afinação, abafamento, casco, pele, microfone, esteira, Synth Wave)." },
      { num: 3, label: "TRANSIENT", action: "goto", target: "KIT_EDIT_TRANSIENT", description: "Abre a aba TRANSIENT para ajustar o ataque e liberação (release) de cada camada." },
      { num: 4, label: "EQ", action: "goto", target: "KIT_EDIT_EQ", description: "Abre a aba EQ para equalizar individualmente cada camada (A, B, C)." },
      { num: 5, label: "LAYER MODE", action: "goto", target: "KIT_EDIT_LAYER_MODE", description: "Abre a aba LAYER MODE para definir como as camadas A, B e C tocam (MIX, VELOCITY ou HI-HAT)." },
      { num: 6, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Quando ligado (ON), seleciona/edita pele (Head) e aro (Rim) simultaneamente como um conjunto." }
    ],
    shiftFButtons: [
      { num: 1, label: "Layer A ON/OFF", action: "toggle_param", paramKey: "layerASw", description: "[SHIFT]+[F1]: Ativa/desativa a Camada A." },
      { num: 2, label: "Layer B ON/OFF", action: "toggle_param", paramKey: "layerBSw", description: "[SHIFT]+[F2]: Ativa/desativa a Camada B." },
      { num: 3, label: "Layer C ON/OFF", action: "toggle_param", paramKey: "layerCSw", description: "[SHIFT]+[F3]: Ativa/desativa a Camada C." },
      { num: 4, label: "EXP INFO", action: "goto", target: "EXPANSIONS_ASSIGN_INFO", description: "[SHIFT]+[F4]: Abre a janela Expansions Assign Info para ver quais pads usam cada Slot de expansão." },
      { num: 6, label: "LAYER COPY", action: "goto", target: "LAYER_COPY_WINDOW", description: "[SHIFT]+[F6]: Abre a janela LAYER COPY para copiar ou trocar camadas entre pads/zonas." }
    ],
    items: [
      { id: "ke_inst_swA", label: "Camada A - Layer Switch", paramKey: "layerASw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Linha 1, Coluna 1: Liga (ON) ou desliga (OFF) a Camada A." },
      { id: "ke_inst_nameA", label: "Camada A - Instrument", paramKey: "layerAInst", type: "instrument", defaultVal: "019 Mx VT Maple 1 K", row: 1, col: 2, explanation: "Linha 1, Coluna 2 (1 seta à direita): Instrumento da Camada A. Pressione [ENTER] para abrir a lista por grupos." },
      { id: "ke_inst_volA", label: "Camada A - Layer Volume", paramKey: "layerAVol", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 1, col: 3, explanation: "Linha 1, Coluna 3 (2 setas à direita): Volume da Camada A (-INF, -60.0 a +6.0 dB)." },
      { id: "ke_inst_swB", label: "Camada B - Layer Switch", paramKey: "layerBSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Linha 2, Coluna 1 (1 seta para baixo): Liga (ON) ou desliga (OFF) a Camada B." },
      { id: "ke_inst_nameB", label: "Camada B - Instrument", paramKey: "layerBInst", type: "instrument", defaultVal: "022 Close Mic 22\" K", row: 2, col: 2, explanation: "Linha 2, Coluna 2: Instrumento da Camada B." },
      { id: "ke_inst_volB", label: "Camada B - Layer Volume", paramKey: "layerBVol", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 2, col: 3, explanation: "Linha 2, Coluna 3: Volume da Camada B (-INF, -60.0 a +6.0 dB)." },
      { id: "ke_inst_swC", label: "Camada C - Layer Switch", paramKey: "layerCSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 3, col: 1, explanation: "Linha 3, Coluna 1 (2 setas para baixo): Liga (ON) ou desliga (OFF) a Camada C." },
      { id: "ke_inst_nameC", label: "Camada C - Instrument", paramKey: "layerCInst", type: "instrument", defaultVal: "000 OFF", row: 3, col: 2, explanation: "Linha 3, Coluna 2: Instrumento da Camada C." },
      { id: "ke_inst_volC", label: "Camada C - Layer Volume", paramKey: "layerCVol", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 3, col: 3, explanation: "Linha 3, Coluna 3: Volume da Camada C (-INF, -60.0 a +6.0 dB)." }
    ]
  },

  EXPANSIONS_ASSIGN_INFO: {
    id: "EXPANSIONS_ASSIGN_INFO",
    title: "INSTRUMENT - Expansions Assign Info (Uso de Expansões no Kit)",
    manualSectionId: "kit-edit-instrument",
    category: "MENU > KIT EDIT",
    accessPath: "Na tela INSTRUMENT, mantenha [SHIFT] pressionado e pressione [F4] (EXP INFO).",
    visualDescription:
      "Janela sobreposta à direita mostrando na primeira coluna os Slots 1 a 6 e a opção '(Not loaded to slot)', e na segunda coluna a lista de pads (KICK, SNARE, XSTICK, TOM1..AUX4) que utilizam instrumentos daquele Slot no kit atual. " +
      "Use [▲]/[▼] para percorrer os Slots 1–6 e verificar quais pads usam cada expansão. Pressione [F4] (CLOSE) ou [EXIT] para fechar.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "A (ON/OFF)", action: "toggle_param", paramKey: "layerASw", description: "Liga/desliga Camada A." },
      { num: 2, label: "B (ON/OFF)", action: "toggle_param", paramKey: "layerBSw", description: "Liga/desliga Camada B." },
      { num: 3, label: "C (ON/OFF)", action: "toggle_param", paramKey: "layerCSw", description: "Liga/desliga Camada C." },
      { num: 4, label: "CLOSE", action: "goto", target: "KIT_EDIT_INST", description: "Fecha a janela Expansions Assign Info." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "exp_info_slot", label: "Verificar Slot", paramKey: "expInfoSlotCursor", type: "enum", options: ["Slot 1: EXV001 Wood Room Studio UK 1 (Pads: Nenhum neste kit)", "Slot 2: EXV002 Electronic&Percussion 1 (Pads: KICK B)", "Slot 3: EXV003 The Brush 1 (Pads: Nenhum)", "Slot 4: EMPTY", "Slot 5: EMPTY", "Slot 6: EMPTY", "(Not loaded to slot): Nenhum instrumento faltando"], defaultVal: "Slot 1: EXV001 Wood Room Studio UK 1 (Pads: Nenhum neste kit)", row: 1, col: 1, explanation: "Use [▲]/[▼] para inspecionar quais pads do kit atual utilizam instrumentos de cada Slot." }
    ]
  },

  LAYER_COPY_WINDOW: {
    id: "LAYER_COPY_WINDOW",
    title: "INSTRUMENT - LAYER COPY (Copiar ou Trocar Camadas)",
    manualSectionId: "kit-edit-instrument",
    category: "MENU > KIT EDIT",
    accessPath: "Na tela INSTRUMENT, mantenha [SHIFT] pressionado e pressione [F6] (LAYER COPY).",
    visualDescription:
      "Janela sobreposta com 2 linhas × 2 colunas: " +
      "Linha 1 (Source / Origem): Coluna 1 = Pad/Zona de Origem (ex: KICK), Coluna 2 = Camada de Origem (LAYER A, B ou C). " +
      "Linha 2 (Destination / Destino): Coluna 1 = Pad/Zona de Destino (ex: KICK), Coluna 2 = Camada de Destino (LAYER A, B ou C). " +
      "Pressione [F3] (EXCHANGE) para trocar as duas camadas entre si, [F4] (COPY) para copiar a camada Source para Destination, ou [F6] (CLOSE) para fechar.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "A (ON/OFF)", action: "toggle_param", paramKey: "layerASw", description: "Liga/desliga Camada A." },
      { num: 2, label: "B (ON/OFF)", action: "toggle_param", paramKey: "layerBSw", description: "Liga/desliga Camada B." },
      { num: 3, label: "EXCHANGE", action: "layer_exchange", description: "Troca (intercambia) as configurações entre a camada Source e a camada Destination." },
      { num: 4, label: "COPY", action: "layer_copy", description: "Copia as configurações da camada Source para a camada Destination." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "CLOSE", action: "goto", target: "KIT_EDIT_INST", description: "Fecha a janela LAYER COPY." }
    ],
    items: [
      { id: "lc_src_pad", label: "Source Pad (Pad de Origem)", paramKey: "layerCopySrcPad", type: "enum", options: ["KICK", "SNARE HEAD", "SNARE RIM", "TOM1 HEAD", "TOM1 RIM", "TOM2 HEAD", "TOM2 RIM", "TOM3 HEAD", "TOM3 RIM", "HI-HAT BOW", "HI-HAT EDGE", "CRASH1 BOW", "CRASH1 EDGE", "CRASH2 BOW", "CRASH2 EDGE", "RIDE BOW", "RIDE EDGE", "RIDE BELL", "AUX HEAD", "AUX RIM"], defaultVal: "KICK", row: 1, col: 1, explanation: "Pad/zona de origem para copiar/trocar." },
      { id: "lc_src_layer", label: "Source Layer (Camada de Origem)", paramKey: "layerCopySrcLayer", type: "enum", options: ["LAYER A", "LAYER B", "LAYER C"], defaultVal: "LAYER A", row: 1, col: 2, explanation: "Camada de origem (LAYER A, B ou C — 1 seta à direita)." },
      { id: "lc_dst_pad", label: "Destination Pad (Pad de Destino)", paramKey: "layerCopyDstPad", type: "enum", options: ["KICK", "SNARE HEAD", "SNARE RIM", "TOM1 HEAD", "TOM1 RIM", "TOM2 HEAD", "TOM2 RIM", "TOM3 HEAD", "TOM3 RIM", "HI-HAT BOW", "HI-HAT EDGE", "CRASH1 BOW", "CRASH1 EDGE", "CRASH2 BOW", "CRASH2 EDGE", "RIDE BOW", "RIDE EDGE", "RIDE BELL", "AUX HEAD", "AUX RIM"], defaultVal: "KICK", row: 2, col: 1, explanation: "Pad/zona de destino (1 seta para baixo)." },
      { id: "lc_dst_layer", label: "Destination Layer (Camada de Destino)", paramKey: "layerCopyDstLayer", type: "enum", options: ["LAYER A", "LAYER B", "LAYER C"], defaultVal: "LAYER C", row: 2, col: 2, explanation: "Camada de destino (LAYER A, B ou C — 1 seta para baixo e 1 à direita)." }
    ]
  },

  KIT_EDIT_VEDIT: {
    id: "KIT_EDIT_VEDIT",
    title: "INSTRUMENT - V-EDIT (Modelagem Acústica e Síntese por Instrumento)",
    manualSectionId: "kit-edit-vedit",
    category: "MENU > KIT EDIT",
    accessPath: "Em MENU > KIT EDIT > INSTRUMENT, pressione [F2] (V-EDIT).",
    visualDescription:
      "A tela INSTRUMENT - V-EDIT permite modelar profundamente o instrumento da camada atual (A, B ou C). " +
      "A tela é dividida verticalmente nas 3 camadas A, B e C (pressione [SHIFT]+[▲]/[▼] para pular diretamente entre as camadas A, B e C, ou navegue com [▲]/[▼]). " +
      "Dentro da camada ativa, os parâmetros são organizados em uma grade de 5 colunas por até 3 linhas: " +
      "Colunas 1 a 3 (Esquerda): Parâmetros V-EDIT específicos da categoria do instrumento (ex: para KICK: Tuning, Muffling, Shell Depth na linha 1; Beater Type, Mic Distance, Mic Size na linha 2; Head Type na linha 3. Para SNARE: Tuning, Muffling, Shell Depth na linha 1; Overtone, Strainer Adjust, Wire Type na linha 2; Wire Level, Mic Distance, Head Type na linha 3. Para PRATOS: Size, Thickness, Muffling na linha 1; Sizzle Type, Sizzle Amount, Low Cut na linha 2). " +
      "Colunas 4 e 5 (Direita): Parâmetros comuns de pitch/decay do instrumento: Linha 1 Col 4 = Pad Pitch / Inst Pitch (-4800 a +4800 cents), Linha 1 Col 5 = Pad Pitch Sweep (-100 a +100); Linha 2 Col 4 = Pad Decay / Inst Decay (1 a 100), Linha 2 Col 5 = Dynamic Enhancer Sw (OFF, NORMAL, WIDE). " +
      "Se o instrumento selecionado for SYNTH WAVE, você também edita Template, Waveform (SINE, WNOISE, SAW, TRI, SQR, RAMP, JUNO), Mono/Poly, Start Phase, Shape, Fat e as seções PITCH, FILTER e AMP. " +
      "Dica: Pressione [SHIFT] + [F4] (RESET V-EDIT) para restaurar os parâmetros V-EDIT da camada para o padrão.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "KIT_EDIT_INST", description: "Volta para a aba INST." },
      { num: 2, label: "V-EDIT", action: "goto", target: "KIT_EDIT_VEDIT", description: "Aba atual: V-EDIT." },
      { num: 3, label: "TRANSIENT", action: "goto", target: "KIT_EDIT_TRANSIENT", description: "Muda para a aba TRANSIENT." },
      { num: 4, label: "EQ", action: "goto", target: "KIT_EDIT_EQ", description: "Muda para a aba EQ." },
      { num: 5, label: "LAYER MODE", action: "goto", target: "KIT_EDIT_LAYER_MODE", description: "Muda para a aba LAYER MODE." },
      { num: 6, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Vincula edição de Pele (Head) e Aro (Rim)." }
    ],
    shiftFButtons: [
      { num: 4, label: "RESET V-EDIT", action: "reset_section", description: "[SHIFT]+[F4]: Restaura os parâmetros V-EDIT da camada selecionada aos valores padrão." }
    ],
    items: [
      { id: "ve_tuning", label: "Tuning (Afinação da Pele / Prato Size)", paramKey: "veditTuning", type: "int", min: -100, max: 100, defaultVal: 3, row: 1, col: 1, explanation: "Linha 1, Coluna 1: Afinação da pele (-100 a +100) para KICK/SNARE/TOM, ou diâmetro Size (1.0–40.0 pol.) para HI-HAT/CYMBAL." },
      { id: "ve_muffling", label: "Muffling / Thickness", paramKey: "veditMuffling", type: "enum", options: ["OFF", "TAPE1", "TAPE2", "TAPE3", "TAPE4", "TAPE5", "TAPE6", "BLANKET1", "BLANKET2", "BLANKET3", "WEIGHT1", "WEIGHT2", "GEL1", "GEL2", "GEL3", "GEL4", "RING1", "RING2", "FELT1", "FELT2", "MUFF+1", "MUFF+4", "MUFF MAX"], defaultVal: "TAPE1", row: 1, col: 2, explanation: "Linha 1, Coluna 2 (1 seta à direita): Abafamento (Muffling) do tambor/prato (ou Thickness -5 a +5 em Hi-Hat/Pratos)." },
      { id: "ve_shelldepth", label: "Shell Depth (Profundidade do Casco)", paramKey: "veditShellDepth", type: "float", min: 1.0, max: 30.0, step: 0.5, unit: "in", defaultVal: 18.0, row: 1, col: 3, explanation: "Linha 1, Coluna 3 (2 setas à direita): Profundidade do casco em polegadas (1.0 a 30.0 pol. em Kick/Tom; 1.0 a 20.0 pol. em Snare; ou Fixed NORMAL/PRESS/CLOSE/HALF1/HALF2/OPEN em Hi-Hat)." },
      { id: "ve_instpitch", label: "Pad Pitch (Inst Pitch em cents)", paramKey: "veditInstPitch", type: "int", min: -4800, max: 4800, step: 10, shiftStep: 100, unit: "cent", defaultVal: 0, row: 1, col: 4, explanation: "Linha 1, Coluna 4 (3 setas à direita): Afinação fina em centésimos de semitom (-4800 a +4800 cents)." },
      { id: "ve_pitchsweep", label: "Pad Pitch Sweep (Inst Pitch Sweep)", paramKey: "veditPitchSweep", type: "int", min: -100, max: 100, defaultVal: 0, row: 1, col: 5, explanation: "Linha 1, Coluna 5 (4 setas à direita): Inflexão de afinação após o ataque (-100 a +100)." },
      { id: "ve_beater_overtone", label: "Beater Type / Overtone / Sizzle Type", paramKey: "veditBeaterOvertone", type: "enum", options: ["FELT1", "FELT2", "WOOD", "PLASTIC1", "PLASTIC2", "Overtone -2", "Overtone 0", "Overtone +3", "Sizzle OFF", "RIVET1", "CHAIN", "BEADS", "COIN", "RIVET2"], defaultVal: "FELT1", row: 2, col: 1, explanation: "Linha 2, Coluna 1 (1 seta para baixo): Tipo de batedor no Kick (FELT1–2, WOOD, PLASTIC1–2), Overtone na Caixa (-5 a +5) ou Sizzle Type em Pratos." },
      { id: "ve_micdist_strainer", label: "Mic Distance / Strainer Adjust / Sizzle Amount", paramKey: "veditMicDist", type: "int", min: -5, max: 5, defaultVal: -1, row: 2, col: 2, explanation: "Linha 2, Coluna 2: Distância do microfone (-5 a NORMAL a +5) ou tensão da esteira Strainer Adjust (0–32) na Caixa." },
      { id: "ve_micsize_wire", label: "Mic Size / Wire Type / Low Cut", paramKey: "veditMicSize", type: "enum", options: ["NORMAL", "LARGE", "Wire DEFAULT", "Wire TYPE1", "Wire TYPE2", "Wire TYPE3", "LowCut OFF", "LowCut HALF", "LowCut FULL"], defaultVal: "LARGE", row: 2, col: 3, explanation: "Linha 2, Coluna 3: Tamanho do microfone no Kick (NORMAL, LARGE), tipo de esteira na Caixa (DEFAULT, TYPE1–3) ou corte de graves em Pratos (OFF, HALF, FULL)." },
      { id: "ve_instdecay", label: "Pad Decay (Inst Decay)", paramKey: "veditInstDecay", type: "int", min: 1, max: 100, defaultVal: 100, row: 2, col: 4, explanation: "Linha 2, Coluna 4: Duração do decaimento do som (1 a 100)." },
      { id: "ve_dynenhancer", label: "Dynamic Enhancer Sw", paramKey: "veditDynEnhancer", type: "enum", options: ["OFF", "NORMAL", "WIDE"], defaultVal: "OFF", row: 2, col: 5, explanation: "Linha 2, Coluna 5: Realça o impacto das batidas fortes (OFF, NORMAL, WIDE)." },
      { id: "ve_headtype", label: "Head Type / Wire Level / Nuance", paramKey: "veditHeadType", type: "enum", options: ["CLEAR", "COATED", "PINSTRIPE", "Wire Level 0 (NORMAL)", "Wire Level -3", "Wire Level +3", "Nuance OFF", "SNR HEAD", "TOM HEAD", "CYM EDGE"], defaultVal: "COATED", row: 3, col: 1, explanation: "Linha 3, Coluna 1 (2 setas para baixo): Tipo de pele em Kick/Snare/Tom (CLEAR, COATED, PINSTRIPE), volume da esteira Wire Level (-6 a +6) ou Nuance em User Sample." },
      { id: "ve_ active_layer", label: "Camada em Edição (A, B ou C)", paramKey: "veditActiveLayer", type: "enum", options: ["Camada A", "Camada B", "Camada C"], defaultVal: "Camada A", row: 3, col: 2, explanation: "Alterna entre as Camadas A, B e C (atalho rápido no módulo: [SHIFT] + [▲]/[▼])." }
    ]
  },

  KIT_EDIT_TRANSIENT: {
    id: "KIT_EDIT_TRANSIENT",
    title: "INSTRUMENT - TRANSIENT (Ajuste de Ataque e Liberação da Camada)",
    manualSectionId: "kit-edit-instrument",
    category: "MENU > KIT EDIT",
    accessPath: "Em MENU > KIT EDIT > INSTRUMENT, pressione [F3] (TRANSIENT).",
    visualDescription:
      "Exibe para a camada atual (A, B ou C) uma lista vertical de 7 parâmetros à esquerda e o gráfico de envelope de ataque/release à direita: " +
      "Linha 1: Transient Switch (OFF, ON). " +
      "Linha 2: Type ((Preset), Type 1–4 — editável apenas para User Samples). " +
      "Linha 3: Attack Time (1 a 10). " +
      "Linha 4: Attack Depth (-100 a +100). " +
      "Linha 5: Attack Type (NORMAL, WIDE 1, WIDE 2). " +
      "Linha 6: Release Depth (-100 a +100). " +
      "Linha 7: Gain (-12.0 a +6.0 dB). " +
      "Use Seta Cima [▲] e Seta Baixo [▼] para percorrer os 7 parâmetros. Pressione [SHIFT]+[F4] para ligar/desligar o transiente da camada.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "KIT_EDIT_INST", description: "Muda para a aba INST." },
      { num: 2, label: "V-EDIT", action: "goto", target: "KIT_EDIT_VEDIT", description: "Muda para a aba V-EDIT." },
      { num: 3, label: "TRANSIENT", action: "goto", target: "KIT_EDIT_TRANSIENT", description: "Aba atual: TRANSIENT." },
      { num: 4, label: "EQ", action: "goto", target: "KIT_EDIT_EQ", description: "Muda para a aba EQ." },
      { num: 5, label: "LAYER MODE", action: "goto", target: "KIT_EDIT_LAYER_MODE", description: "Muda para a aba LAYER MODE." },
      { num: 6, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Vincula Pele e Aro." }
    ],
    shiftFButtons: [
      { num: 4, label: "Transient ON/OFF", action: "toggle_param", paramKey: "layerTransientSw", description: "[SHIFT]+[F4]: Liga/desliga o efeito Transient da camada atual." }
    ],
    items: [
      { id: "tr_sw", label: "1. Transient Switch", paramKey: "layerTransientSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Liga (ON) ou desliga (OFF) o efeito de transiente da camada (Linha 1 — posição inicial)." },
      { id: "tr_type", label: "2. Type", paramKey: "layerTransientType", type: "enum", options: ["(Preset)", "Type 1", "Type 2", "Type 3", "Type 4"], defaultVal: "(Preset)", row: 2, col: 1, explanation: "Tipo de transiente (Linha 2 — 1 seta para baixo; editável quando instrumento é User Sample)." },
      { id: "tr_atk_time", label: "3. Attack Time", paramKey: "layerAttackTime", type: "int", min: 1, max: 10, defaultVal: 7, row: 3, col: 1, explanation: "Tempo durante o qual o ataque atua (1 a 10 — Linha 3, 2 setas para baixo)." },
      { id: "tr_atk_depth", label: "4. Attack Depth", paramKey: "layerAttackDepth", type: "int", min: -100, max: 100, defaultVal: 7, row: 4, col: 1, explanation: "Intensidade do ajuste de ataque (-100 a +100 — Linha 4, 3 setas para baixo)." },
      { id: "tr_atk_type", label: "5. Attack Type", paramKey: "layerAttackType", type: "enum", options: ["NORMAL", "WIDE 1", "WIDE 2"], defaultVal: "WIDE 2", row: 5, col: 1, explanation: "Curva dinâmica do ataque: NORMAL (sempre aplicado) ou WIDE 1/2 (mais suave em toques fracos — Linha 5, 4 setas para baixo)." },
      { id: "tr_rel_depth", label: "6. Release Depth", paramKey: "layerReleaseDepth", type: "int", min: -100, max: 100, defaultVal: 0, row: 6, col: 1, explanation: "Ajuste da sustentação/liberação (-100 a +100 — Linha 6, 5 setas para baixo)." },
      { id: "tr_gain", label: "7. Gain", paramKey: "layerTransientGain", type: "float", min: -12.0, max: 6.0, step: 0.5, unit: "dB", defaultVal: -1.0, row: 7, col: 1, explanation: "Volume após o ajuste de transiente (-12.0 a +6.0 dB — Linha 7, 6 setas para baixo)." }
    ]
  },

  KIT_EDIT_EQ: {
    id: "KIT_EDIT_EQ",
    title: "INSTRUMENT - EQ (Equalizador de 3 Bandas da Camada)",
    manualSectionId: "kit-edit-instrument",
    category: "MENU > KIT EDIT",
    accessPath: "Em MENU > KIT EDIT > INSTRUMENT, pressione [F4] (EQ).",
    visualDescription:
      "Equalizador individual da camada atual (A, B ou C). " +
      "No topo da área da camada fica 'EQ Switch' (OFF, ON). " +
      "Abaixo fica uma tabela de 3 colunas (Coluna 1 = LOW, Coluna 2 = MID, Coluna 3 = HIGH) por 3 linhas: " +
      "Linha de Q: apenas na Coluna 2 (MID Q: 0.5 a 16.0). " +
      "Linha de Freq: LOW Freq (20Hz–1kHz), MID Freq (20Hz–16kHz), HIGH Freq (1kHz–16kHz). " +
      "Linha de Gain: LOW Gain (-24 a +24 dB), MID Gain (-24 a +24 dB), HIGH Gain (-24 a +24 dB). " +
      "Use as setas [▲][▼][◄][►] para navegar pela tabela.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "KIT_EDIT_INST", description: "Muda para a aba INST." },
      { num: 2, label: "V-EDIT", action: "goto", target: "KIT_EDIT_VEDIT", description: "Muda para a aba V-EDIT." },
      { num: 3, label: "TRANSIENT", action: "goto", target: "KIT_EDIT_TRANSIENT", description: "Muda para a aba TRANSIENT." },
      { num: 4, label: "EQ", action: "goto", target: "KIT_EDIT_EQ", description: "Aba atual: EQ da camada." },
      { num: 5, label: "LAYER MODE", action: "goto", target: "KIT_EDIT_LAYER_MODE", description: "Muda para a aba LAYER MODE." },
      { num: 6, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Vincula Pele e Aro." }
    ],
    shiftFButtons: [
      { num: 4, label: "EQ ON/OFF", action: "toggle_param", paramKey: "layerEqSw", description: "[SHIFT]+[F4]: Liga/desliga o equalizador da camada selecionada." }
    ],
    items: [
      { id: "leq_sw", label: "EQ Switch (Liga/Desliga EQ da Camada)", paramKey: "layerEqSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Liga (ON) ou desliga (OFF) o equalizador da camada atual." },
      { id: "leq_mid_q", label: "MID Q (Largura de Banda dos Médios)", paramKey: "layerEqMidQ", type: "float", min: 0.5, max: 16.0, step: 0.5, defaultVal: 3.0, row: 2, col: 2, explanation: "Largura da faixa de médios (0.5 a 16.0 — valores maiores estreitam a faixa)." },
      { id: "leq_low_freq", label: "LOW Freq", paramKey: "layerEqLowFreq", type: "enum", options: ["20Hz", "31.5Hz", "40Hz", "50Hz", "63Hz", "80Hz", "100Hz", "125Hz", "160Hz", "200Hz", "250Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz", "1kHz"], defaultVal: "80Hz", row: 3, col: 1, explanation: "Frequência dos graves (20Hz a 1kHz)." },
      { id: "leq_mid_freq", label: "MID Freq", paramKey: "layerEqMidFreq", type: "enum", options: ["20Hz", "40Hz", "63Hz", "100Hz", "160Hz", "250Hz", "400Hz", "500Hz", "630Hz", "800Hz", "1kHz", "1.6kHz", "2.5kHz", "4kHz", "6.3kHz", "10kHz", "16kHz"], defaultVal: "63Hz", row: 3, col: 2, explanation: "Frequência central dos médios (20Hz a 16kHz)." },
      { id: "leq_high_freq", label: "HIGH Freq", paramKey: "layerEqHighFreq", type: "enum", options: ["1kHz", "1.25kHz", "1.6kHz", "2kHz", "2.5kHz", "3.15kHz", "4kHz", "5kHz", "6.3kHz", "8kHz", "10kHz", "12.5kHz", "16kHz"], defaultVal: "8kHz", row: 3, col: 3, explanation: "Frequência dos agudos (1kHz a 16kHz)." },
      { id: "leq_low_gain", label: "LOW Gain", paramKey: "layerEqLowGain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 0, row: 4, col: 1, explanation: "Ganho de graves (-24 a +24 dB)." },
      { id: "leq_mid_gain", label: "MID Gain", paramKey: "layerEqMidGain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 3, row: 4, col: 2, explanation: "Ganho de médios (-24 a +24 dB)." },
      { id: "leq_high_gain", label: "HIGH Gain", paramKey: "layerEqHighGain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 0, row: 4, col: 3, explanation: "Ganho de agudos (-24 a +24 dB)." }
    ]
  },

  KIT_EDIT_LAYER_MODE: {
    id: "KIT_EDIT_LAYER_MODE",
    title: "INSTRUMENT - LAYER MODE (Comportamento das Camadas A, B e C)",
    manualSectionId: "kit-edit-instrument",
    category: "MENU > KIT EDIT",
    accessPath: "Em MENU > KIT EDIT > INSTRUMENT, pressione [F5] (LAYER MODE).",
    visualDescription:
      "No topo central fica o parâmetro 'Layer Mode' (MIX, VELOCITY, HI-HAT). " +
      "Quando Layer Mode = MIX: todas as camadas ligadas (ON) tocam juntas. " +
      "Quando Layer Mode = VELOCITY: aparece uma tabela de 3 linhas (Camada A, Camada B, Camada C) × 6 colunas: " +
      "Coluna 1: Fade In Sens (0–127), Coluna 2: Velocity Lower (1–127), Coluna 3: Velocity Upper (1–127), Coluna 4: Fade Out Sens (0–127), Coluna 5: Dynamics (FADE, FIXED), Coluna 6: Threshold (1–127, ativo quando Dynamics = FIXED). " +
      "Quando Layer Mode = HI-HAT (disponível no chimbal com Synth Wave ou User Sample One Shot): Camada A toca aberto, B toca fechado e C toca no pedal.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "KIT_EDIT_INST", description: "Muda para a aba INST." },
      { num: 2, label: "V-EDIT", action: "goto", target: "KIT_EDIT_VEDIT", description: "Muda para a aba V-EDIT." },
      { num: 3, label: "TRANSIENT", action: "goto", target: "KIT_EDIT_TRANSIENT", description: "Muda para a aba TRANSIENT." },
      { num: 4, label: "EQ", action: "goto", target: "KIT_EDIT_EQ", description: "Muda para a aba EQ." },
      { num: 5, label: "LAYER MODE", action: "goto", target: "KIT_EDIT_LAYER_MODE", description: "Aba atual: LAYER MODE." },
      { num: 6, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Vincula Pele e Aro." }
    ],
    items: [
      { id: "lm_mode", label: "Layer Mode", paramKey: "layerMode", type: "enum", options: ["MIX", "VELOCITY", "HI-HAT"], defaultVal: "VELOCITY", row: 1, col: 1, explanation: "Modo de reprodução das camadas: MIX (sobrepostas), VELOCITY (por força da batida) ou HI-HAT (A=aberto, B=fechado, C=pedal)." },
      { id: "lm_a_fadein", label: "Camada A - Fade In Sens", paramKey: "lmAFadeIn", type: "int", min: 0, max: 127, defaultVal: 0, row: 2, col: 1, explanation: "Sensibilidade de entrada gradual (Fade In) da Camada A (0 a 127)." },
      { id: "lm_a_vlow", label: "Camada A - Velocity Lower", paramKey: "lmAVelLow", type: "int", min: 1, max: 127, defaultVal: 1, row: 2, col: 2, explanation: "Força mínima (Velocity Lower) em que a Camada A começa a soar (1 a 127)." },
      { id: "lm_a_vup", label: "Camada A - Velocity Upper", paramKey: "lmAVelUp", type: "int", min: 1, max: 127, defaultVal: 127, row: 2, col: 3, explanation: "Força máxima (Velocity Upper) até onde a Camada A soa em volume pleno (1 a 127)." },
      { id: "lm_a_fadeout", label: "Camada A - Fade Out Sens", paramKey: "lmAFadeOut", type: "int", min: 0, max: 127, defaultVal: 0, row: 2, col: 4, explanation: "Sensibilidade de saída gradual (Fade Out) acima de Velocity Upper (0 a 127)." },
      { id: "lm_a_dyn", label: "Camada A - Dynamics", paramKey: "lmADyn", type: "enum", options: ["FADE", "FIXED"], defaultVal: "FADE", row: 2, col: 5, explanation: "FADE (volume varia com a força) ou FIXED (toca sempre no mesmo volume acima do Threshold)." },
      { id: "lm_a_thres", label: "Camada A - Threshold", paramKey: "lmAThres", type: "int", min: 1, max: 127, defaultVal: 1, row: 2, col: 6, explanation: "Força mínima quando Dynamics = FIXED (1 a 127)." },
      { id: "lm_b_fadein", label: "Camada B - Fade In Sens", paramKey: "lmBFadeIn", type: "int", min: 0, max: 127, defaultVal: 80, row: 3, col: 1, explanation: "Sensibilidade de Fade In da Camada B (0 a 127)." },
      { id: "lm_b_vlow", label: "Camada B - Velocity Lower", paramKey: "lmBVelLow", type: "int", min: 1, max: 127, defaultVal: 100, row: 3, col: 2, explanation: "Velocity Lower da Camada B (1 a 127)." },
      { id: "lm_b_vup", label: "Camada B - Velocity Upper", paramKey: "lmBVelUp", type: "int", min: 1, max: 127, defaultVal: 127, row: 3, col: 3, explanation: "Velocity Upper da Camada B (1 a 127)." },
      { id: "lm_b_fadeout", label: "Camada B - Fade Out Sens", paramKey: "lmBFadeOut", type: "int", min: 0, max: 127, defaultVal: 0, row: 3, col: 4, explanation: "Fade Out Sens da Camada B (0 a 127)." },
      { id: "lm_b_dyn", label: "Camada B - Dynamics", paramKey: "lmBDyn", type: "enum", options: ["FADE", "FIXED"], defaultVal: "FADE", row: 3, col: 5, explanation: "Dynamics da Camada B (FADE ou FIXED)." },
      { id: "lm_b_thres", label: "Camada B - Threshold", paramKey: "lmBThres", type: "int", min: 1, max: 127, defaultVal: 1, row: 3, col: 6, explanation: "Threshold da Camada B (1 a 127)." },
      { id: "lm_c_fadein", label: "Camada C - Fade In Sens", paramKey: "lmCFadeIn", type: "int", min: 0, max: 127, defaultVal: 0, row: 4, col: 1, explanation: "Fade In Sens da Camada C (0 a 127)." },
      { id: "lm_c_vlow", label: "Camada C - Velocity Lower", paramKey: "lmCVelLow", type: "int", min: 1, max: 127, defaultVal: 1, row: 4, col: 2, explanation: "Velocity Lower da Camada C (1 a 127)." },
      { id: "lm_c_vup", label: "Camada C - Velocity Upper", paramKey: "lmCVelUp", type: "int", min: 1, max: 127, defaultVal: 127, row: 4, col: 3, explanation: "Velocity Upper da Camada C (1 a 127)." },
      { id: "lm_c_fadeout", label: "Camada C - Fade Out Sens", paramKey: "lmCFadeOut", type: "int", min: 0, max: 127, defaultVal: 0, row: 4, col: 4, explanation: "Fade Out Sens da Camada C (0 a 127)." },
      { id: "lm_c_dyn", label: "Camada C - Dynamics", paramKey: "lmCDyn", type: "enum", options: ["FADE", "FIXED"], defaultVal: "FADE", row: 4, col: 5, explanation: "Dynamics da Camada C (FADE ou FIXED)." },
      { id: "lm_c_thres", label: "Camada C - Threshold", paramKey: "lmCThres", type: "int", min: 1, max: 127, defaultVal: 1, row: 4, col: 6, explanation: "Threshold da Camada C (1 a 127)." }
    ]
  },

  PAD_VOL_PAN: {
    id: "PAD_VOL_PAN",
    title: "VOLUME/PAN (Volume e Panorâmico de Cada Pad)",
    manualSectionId: "kit-edit-pad-vol-eq-comp",
    category: "MENU > KIT EDIT",
    accessPath: "Pressione [MENU] > KIT EDIT (Linha 1) > Seta Direita 2x até PAD VOL (Linha 1, Coluna 2) > [ENTER] > [F1] (VOLUME/PAN).",
    visualDescription:
      "Exibe o mixer de todos os pads do kit divididos em 2 fileiras horizontais de 5 pads (Fileira superior: KICK, SNARE, TOM1, TOM2, TOM3; Fileira inferior: HI-HAT, CRASH1, CRASH2, RIDE, AUX; ou até 14 pads se Show Virtual Pad = ON). " +
      "Para cada pad, a linha superior ajusta o Pan (L30 a CTR a R30) e a linha inferior possui os faders de Volume (-INF, -60.0 a +6.0 dB) para Pele e Aro (ou Cúpula no Ride). " +
      "Use as setas [◄]/[►] para mudar de pad/zona e [▲]/[▼] para alternar entre Pan e Volume (ou selecione o pad diretamente com Ctrl+Setas). " +
      "Botões F: [F1] VOLUME/PAN, [F2] MIN VOLUME, [F6] H&R (vincula Pele e Aro ON/OFF).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "VOLUME/PAN", action: "goto", target: "PAD_VOL_PAN", description: "Aba atual: Volume e Pan de cada pad." },
      { num: 2, label: "MIN VOLUME", action: "goto", target: "PAD_MIN_VOL", description: "Muda para a aba MINIMUM VOLUME (volume mínimo de batidas fracas 0–15)." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Vincula os ajustes de Pele (Head) e Aro (Rim) do pad." }
    ],
    items: [
      { id: "pv_kick_pan", label: "KICK - Pan", paramKey: "pan_KICK", type: "pan", defaultVal: "CTR", row: 1, col: 1, explanation: "Posição estéreo do Bumbo (L30 a CTR a R30)." },
      { id: "pv_snare_pan", label: "SNARE - Pan", paramKey: "pan_SNARE", type: "pan", defaultVal: "CTR", row: 1, col: 2, explanation: "Posição estéreo da Caixa (L30 a CTR a R30)." },
      { id: "pv_tom1_pan", label: "TOM1 - Pan", paramKey: "pan_TOM1", type: "pan", defaultVal: "L3", row: 1, col: 3, explanation: "Posição estéreo do Tom 1 (L30 a CTR a R30)." },
      { id: "pv_tom2_pan", label: "TOM2 - Pan", paramKey: "pan_TOM2", type: "pan", defaultVal: "R3", row: 1, col: 4, explanation: "Posição estéreo do Tom 2 (L30 a CTR a R30)." },
      { id: "pv_tom3_pan", label: "TOM3 - Pan", paramKey: "pan_TOM3", type: "pan", defaultVal: "R6", row: 1, col: 5, explanation: "Posição estéreo do Tom 3 (L30 a CTR a R30)." },
      { id: "pv_kick_vol", label: "KICK - Pad Volume", paramKey: "vol_KICK", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 2, col: 1, explanation: "Volume do Bumbo (-INF, -60.0 a +6.0 dB)." },
      { id: "pv_snare_vol", label: "SNARE - Pad Volume (Head/Rim)", paramKey: "vol_SNARE", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 2, col: 2, explanation: "Volume da Caixa (-INF, -60.0 a +6.0 dB)." },
      { id: "pv_tom1_vol", label: "TOM1 - Pad Volume (Head/Rim)", paramKey: "vol_TOM1", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 2, col: 3, explanation: "Volume do Tom 1 (-INF, -60.0 a +6.0 dB)." },
      { id: "pv_tom2_vol", label: "TOM2 - Pad Volume (Head/Rim)", paramKey: "vol_TOM2", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 2, col: 4, explanation: "Volume do Tom 2 (-INF, -60.0 a +6.0 dB)." },
      { id: "pv_tom3_vol", label: "TOM3 - Pad Volume (Head/Rim)", paramKey: "vol_TOM3", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 2, col: 5, explanation: "Volume do Tom 3 (-INF, -60.0 a +6.0 dB)." },
      { id: "pv_hh_pan", label: "HI-HAT - Pan", paramKey: "pan_HIHAT", type: "pan", defaultVal: "L7", row: 3, col: 1, explanation: "Posição estéreo do Chimbal (L30 a CTR a R30)." },
      { id: "pv_cr1_pan", label: "CRASH1 - Pan", paramKey: "pan_CRASH1", type: "pan", defaultVal: "L7", row: 3, col: 2, explanation: "Posição estéreo do Crash 1 (L30 a CTR a R30)." },
      { id: "pv_cr2_pan", label: "CRASH2 - Pan", paramKey: "pan_CRASH2", type: "pan", defaultVal: "R7", row: 3, col: 3, explanation: "Posição estéreo do Crash 2 (L30 a CTR a R30)." },
      { id: "pv_ride_pan", label: "RIDE - Pan", paramKey: "pan_RIDE", type: "pan", defaultVal: "R5", row: 3, col: 4, explanation: "Posição estéreo do Ride (L30 a CTR a R30)." },
      { id: "pv_aux_pan", label: "AUX - Pan", paramKey: "pan_AUX", type: "pan", defaultVal: "CTR", row: 3, col: 5, explanation: "Posição estéreo do pad AUX (L30 a CTR a R30)." },
      { id: "pv_hh_vol", label: "HI-HAT - Pad Volume", paramKey: "vol_HIHAT", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -0.5, row: 4, col: 1, explanation: "Volume do Chimbal (-INF, -60.0 a +6.0 dB)." },
      { id: "pv_cr1_vol", label: "CRASH1 - Pad Volume", paramKey: "vol_CRASH1", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 4, col: 2, explanation: "Volume do Crash 1 (-INF, -60.0 a +6.0 dB)." },
      { id: "pv_cr2_vol", label: "CRASH2 - Pad Volume", paramKey: "vol_CRASH2", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 4, col: 3, explanation: "Volume do Crash 2 (-INF, -60.0 a +6.0 dB)." },
      { id: "pv_ride_vol", label: "RIDE - Pad Volume (Bow/Edge/Bell)", paramKey: "vol_RIDE", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 4, col: 4, explanation: "Volume do Ride (-INF, -60.0 a +6.0 dB)." },
      { id: "pv_aux_vol", label: "AUX - Pad Volume", paramKey: "vol_AUX", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 4, col: 5, explanation: "Volume do AUX (-INF, -60.0 a +6.0 dB)." }
    ]
  },

  PAD_MIN_VOL: {
    id: "PAD_MIN_VOL",
    title: "MINIMUM VOLUME (Volume Mínimo de Cada Pad)",
    manualSectionId: "kit-edit-pad-vol-eq-comp",
    category: "MENU > KIT EDIT",
    accessPath: "Em MENU > KIT EDIT > PAD VOL, pressione [F2] (MIN VOLUME).",
    visualDescription:
      "Exibe os faders de Minimum Volume (0 a 15) em 2 fileiras de 5 pads (Fileira 1: KICK, SNARE, TOM1, TOM2, TOM3; Fileira 2: HI-HAT, CRASH1, CRASH2, RIDE, AUX). " +
      "Aumentar esse valor eleva o volume das notas mais suaves (ghost notes na caixa ou condução suave no ride) mantendo o volume das batidas fortes.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "VOLUME/PAN", action: "goto", target: "PAD_VOL_PAN", description: "Volta para a aba VOLUME/PAN." },
      { num: 2, label: "MIN VOLUME", action: "goto", target: "PAD_MIN_VOL", description: "Aba atual: MINIMUM VOLUME." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Vincula Pele e Aro." }
    ],
    items: [
      { id: "pmv_kick", label: "KICK - Minimum Volume", paramKey: "minvol_KICK", type: "int", min: 0, max: 15, defaultVal: 0, row: 1, col: 1, explanation: "Volume mínimo do Bumbo (0 a 15)." },
      { id: "pmv_snare", label: "SNARE - Minimum Volume", paramKey: "minvol_SNARE", type: "int", min: 0, max: 15, defaultVal: 2, row: 1, col: 2, explanation: "Volume mínimo da Caixa (0 a 15 — facilita ouvir ghost notes)." },
      { id: "pmv_tom1", label: "TOM1 - Minimum Volume", paramKey: "minvol_TOM1", type: "int", min: 0, max: 15, defaultVal: 6, row: 1, col: 3, explanation: "Volume mínimo do Tom 1 (0 a 15)." },
      { id: "pmv_tom2", label: "TOM2 - Minimum Volume", paramKey: "minvol_TOM2", type: "int", min: 0, max: 15, defaultVal: 6, row: 1, col: 4, explanation: "Volume mínimo do Tom 2 (0 a 15)." },
      { id: "pmv_tom3", label: "TOM3 - Minimum Volume", paramKey: "minvol_TOM3", type: "int", min: 0, max: 15, defaultVal: 6, row: 1, col: 5, explanation: "Volume mínimo do Tom 3 (0 a 15)." },
      { id: "pmv_hh", label: "HI-HAT - Minimum Volume", paramKey: "minvol_HIHAT", type: "int", min: 0, max: 15, defaultVal: 4, row: 2, col: 1, explanation: "Volume mínimo do Chimbal (0 a 15)." },
      { id: "pmv_cr1", label: "CRASH1 - Minimum Volume", paramKey: "minvol_CRASH1", type: "int", min: 0, max: 15, defaultVal: 2, row: 2, col: 2, explanation: "Volume mínimo do Crash 1 (0 a 15)." },
      { id: "pmv_cr2", label: "CRASH2 - Minimum Volume", paramKey: "minvol_CRASH2", type: "int", min: 0, max: 15, defaultVal: 2, row: 2, col: 3, explanation: "Volume mínimo do Crash 2 (0 a 15)." },
      { id: "pmv_ride", label: "RIDE - Minimum Volume", paramKey: "minvol_RIDE", type: "int", min: 0, max: 15, defaultVal: 0, row: 2, col: 4, explanation: "Volume mínimo do Ride (0 a 15)." },
      { id: "pmv_aux", label: "AUX - Minimum Volume", paramKey: "minvol_AUX", type: "int", min: 0, max: 15, defaultVal: 0, row: 2, col: 5, explanation: "Volume mínimo do AUX (0 a 15)." }
    ]
  },

  PAD_EQ: {
    id: "PAD_EQ",
    title: "PAD EQ (Equalizador de 4 Bandas por Pad)",
    manualSectionId: "kit-edit-pad-vol-eq-comp",
    category: "MENU > KIT EDIT",
    accessPath: "Pressione [MENU] > KIT EDIT (Linha 1) > Seta Direita 3x até PAD EQ (Linha 1, Coluna 3) > [ENTER].",
    visualDescription:
      "No topo aparece o gráfico da curva de equalização do pad atual. " +
      "Abaixo, à esquerda, fica 'Low Cut' (OFF, 20Hz a 1kHz). " +
      "À direita de Low Cut fica uma tabela de 4 colunas (LOW, MID1, MID2, HIGH) × 3 linhas: " +
      "Linha 1 (Q): MID1 Q (0.5–16.0) na Coluna 3 e MID2 Q (0.5–16.0) na Coluna 4. " +
      "Linha 2 (Freq): Low Cut (Col 1), Low Freq (Col 2, 20Hz–1kHz), Mid 1 Freq (Col 3, 20Hz–16kHz), Mid 2 Freq (Col 4, 20Hz–16kHz), High Freq (Col 5, 1kHz–16kHz). " +
      "Linha 3 (Gain): Low Gain (Col 2), Mid 1 Gain (Col 3), Mid 2 Gain (Col 4), High Gain (Col 5), cada um de -24 a +24 dB. " +
      "Botões F: [F1] PadEQ (liga/desliga), [F5] H&R (vincula pele e aro), [F6] RESET EQ (restaura valores padrão).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "PadEQ (ON/OFF)", action: "toggle_param", paramKey: "padEqSw", description: "Liga (ON) ou desliga (OFF) o equalizador do pad atual." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Vincula Pele (Head) e Aro (Rim) para edição simultânea." },
      { num: 6, label: "RESET EQ", action: "reset_section", description: "Restaura as configurações do PAD EQ para o padrão de fábrica." }
    ],
    items: [
      { id: "peq_m1q", label: "MID1 Q", paramKey: "padEqMid1Q", type: "float", min: 0.5, max: 16.0, step: 0.5, defaultVal: 16.0, row: 1, col: 3, explanation: "Largura de banda da faixa MID1 (0.5 a 16.0)." },
      { id: "peq_m2q", label: "MID2 Q", paramKey: "padEqMid2Q", type: "float", min: 0.5, max: 16.0, step: 0.5, defaultVal: 1.0, row: 1, col: 4, explanation: "Largura de banda da faixa MID2 (0.5 a 16.0)." },
      { id: "peq_lowcut", label: "Low Cut (Corte de Graves)", paramKey: "padEqLowCut", type: "enum", options: ["OFF", "20Hz", "25Hz", "31.5Hz", "40Hz", "45Hz", "50Hz", "63Hz", "80Hz", "100Hz", "125Hz", "160Hz", "200Hz", "250Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz", "1kHz"], defaultVal: "45Hz", row: 2, col: 1, explanation: "Corta as frequências abaixo do valor especificado (OFF, 20Hz a 1kHz)." },
      { id: "peq_lfreq", label: "LOW Freq", paramKey: "padEqLowFreq", type: "enum", options: ["20Hz", "31.5Hz", "40Hz", "50Hz", "63Hz", "80Hz", "100Hz", "125Hz", "160Hz", "200Hz", "250Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz", "1kHz"], defaultVal: "80Hz", row: 2, col: 2, explanation: "Frequência da banda de graves LOW (20Hz a 1kHz)." },
      { id: "peq_m1freq", label: "MID1 Freq", paramKey: "padEqMid1Freq", type: "enum", options: ["20Hz", "50Hz", "100Hz", "160Hz", "200Hz", "250Hz", "282.5Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz", "1kHz", "1.6kHz", "2.5kHz", "4kHz", "8kHz", "16kHz"], defaultVal: "282.5Hz", row: 2, col: 3, explanation: "Frequência central da banda MID1 (20Hz a 16kHz)." },
      { id: "peq_m2freq", label: "MID2 Freq", paramKey: "padEqMid2Freq", type: "enum", options: ["20Hz", "100Hz", "250Hz", "500Hz", "800Hz", "1kHz", "1.6kHz", "2kHz", "2.5kHz", "3.15kHz", "4kHz", "5kHz", "6.3kHz", "8kHz", "10kHz", "12.5kHz", "16kHz"], defaultVal: "4kHz", row: 2, col: 4, explanation: "Frequência central da banda MID2 (20Hz a 16kHz)." },
      { id: "peq_hfreq", label: "HIGH Freq", paramKey: "padEqHighFreq", type: "enum", options: ["1kHz", "1.25kHz", "1.6kHz", "2kHz", "2.5kHz", "3.15kHz", "4kHz", "5kHz", "6.3kHz", "8kHz", "10kHz", "12.5kHz", "16kHz"], defaultVal: "5kHz", row: 2, col: 5, explanation: "Frequência da banda de agudos HIGH (1kHz a 16kHz)." },
      { id: "peq_lgain", label: "LOW Gain", paramKey: "padEqLowGain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 0, row: 3, col: 2, explanation: "Ganho da banda LOW (-24 a +24 dB)." },
      { id: "peq_m1gain", label: "MID1 Gain", paramKey: "padEqMid1Gain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 0, row: 3, col: 3, explanation: "Ganho da banda MID1 (-24 a +24 dB)." },
      { id: "peq_m2gain", label: "MID2 Gain", paramKey: "padEqMid2Gain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 0, row: 3, col: 4, explanation: "Ganho da banda MID2 (-24 a +24 dB)." },
      { id: "peq_hgain", label: "HIGH Gain", paramKey: "padEqHighGain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 4, row: 3, col: 5, explanation: "Ganho da banda HIGH (-24 a +24 dB)." }
    ]
  },

  PAD_COMP: {
    id: "PAD_COMP",
    title: "PAD COMP (Compressor por Pad)",
    manualSectionId: "kit-edit-pad-vol-eq-comp",
    category: "MENU > KIT EDIT",
    accessPath: "Pressione [MENU] > KIT EDIT (Linha 1) > Seta Direita 4x até PAD COMP (Linha 1, Coluna 4) > [ENTER].",
    visualDescription:
      "Configura o compressor do pad atual (em comum para pele e aro). " +
      "No topo esquerdo fica 'Pad Comp Type' (STANDARD ou FETCOMP-76) e no topo direito o knob 'Volume' (-INF, -60.0 a +6.0 dB). " +
      "Abaixo, à esquerda, fica uma lista vertical de 8 parâmetros (quando STANDARD: Template, Threshold, Gain, Attack, Release, Ratio, Knee, Balance; quando FETCOMP-76: Template, Compression, Input Level, Output Level, Attack, Release, Ratio Mode, Balance). " +
      "À direita ficam o gráfico de compressão e os medidores IN, GR (Gain Reduction), OUT e MASTER. " +
      "Pressione [F1] (PadComp) para ligar/desligar o compressor do pad.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "PadComp (ON/OFF)", action: "toggle_param", paramKey: "padCompSw", description: "Liga (ON) ou desliga (OFF) o compressor do pad atual." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "pc_type", label: "1. Pad Comp Type", paramKey: "padCompType", type: "enum", options: ["STANDARD", "FETCOMP-76"], defaultVal: "STANDARD", row: 1, col: 1, explanation: "Seleciona o modelo do compressor do pad: STANDARD (geral) ou FETCOMP-76 (compressor FET clássico de estúdio)." },
      { id: "pc_vol", label: "Volume (Compressor Volume)", paramKey: "padCompVol", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -1.0, row: 1, col: 2, explanation: "Volume geral na saída do compressor do pad (-INF, -60.0 a +6.0 dB — 1 seta à direita no topo)." },
      { id: "pc_template", label: "2. Template", paramKey: "padCompTemplate", type: "enum", options: ["KICK 1", "KICK 2", "SNARE 1", "SNARE 2", "TOM 1", "TOM 2", "CYMBAL 1", "CYMBAL 2", "SOFT COMP", "HARD COMP", "LIMITER", "KICK PRESENCE (FET)", "KICK SOFT (FET)", "KICK MID (FET)", "KICK HEAVY (FET)", "SNARE PRESENCE (FET)", "SNARE SOFT (FET)", "SNARE MID (FET)", "SNARE HEAVY (FET)"], defaultVal: "KICK 1", row: 2, col: 1, explanation: "Predefinição de caráter do compressor (altera automaticamente os parâmetros para valores ideais)." },
      { id: "pc_thres", label: "3. Threshold (STANDARD) / Compression Sw (FET)", paramKey: "padCompThres", type: "int", min: -48, max: 0, unit: "dB", defaultVal: -24, row: 3, col: 1, explanation: "Nível de volume a partir do qual a compressão começa (-48 a 0 dB em STANDARD; ou Compression OFF/ON em FETCOMP-76)." },
      { id: "pc_gain", label: "4. Gain (STANDARD) / Input Level (FET)", paramKey: "padCompGain", type: "float", min: -24.0, max: 24.0, step: 0.5, unit: "dB", defaultVal: 6.0, row: 4, col: 1, explanation: "Ganho de saída em STANDARD (-24.0 a +24.0 dB) ou Input Level em FETCOMP-76 (-INF, -30.0 a +30.0 dB)." },
      { id: "pc_atk", label: "5. Attack", paramKey: "padCompAttack", type: "float", min: 0.1, max: 100.0, step: 1.0, unit: "ms", defaultVal: 20.0, row: 5, col: 1, explanation: "Tempo até a compressão atuar (0.1 a 100 ms em STANDARD; 0.0 a 7.0 em FETCOMP-76)." },
      { id: "pc_rel", label: "6. Release", paramKey: "padCompRelease", type: "int", min: 10, max: 1000, step: 10, unit: "ms", defaultVal: 450, row: 6, col: 1, explanation: "Tempo até a compressão cessar (10 a 1000 ms em STANDARD; 0.0 a 7.0 em FETCOMP-76)." },
      { id: "pc_ratio", label: "7. Ratio (STANDARD) / Ratio Mode (FET)", paramKey: "padCompRatio", type: "enum", options: ["1:1", "2:1", "3:1", "4:1", "8:1", "12:1", "20:1", "INF:1", "ALL (FET)"], defaultVal: "2:1", row: 7, col: 1, explanation: "Taxa de compressão (1:1 a INF:1 em STANDARD; 4, 8, 12, 20, ALL em FETCOMP-76)." },
      { id: "pc_knee", label: "8. Knee", paramKey: "padCompKnee", type: "enum", options: ["HARD", "SOFT1", "SOFT2", "SOFT3"], defaultVal: "HARD", row: 8, col: 1, explanation: "Suavidade da transição da compressão (HARD, SOFT1–3)." },
      { id: "pc_bal", label: "9. Balance (Dry : Wet)", paramKey: "padCompBalance", type: "enum", options: ["D100:0W", "D80:20W", "D50:50W", "D20:80W", "D0:100W"], defaultVal: "D20:80W", row: 9, col: 1, explanation: "Balanço entre o som sem compressão (D) e o som comprimido (W) — compressão paralela." }
    ]
  },

  KIT_VOL: {
    id: "KIT_VOL",
    title: "KIT VOLUME (Volume Geral e Balanços do Drum Kit)",
    manualSectionId: "kit-edit-kit-vol-eq-comp",
    category: "MENU > KIT EDIT",
    accessPath: "Pressione [MENU] > KIT EDIT (Linha 1) > Seta Direita 2x, Seta Baixo 1x até KIT VOL (Linha 2, Coluna 2) > [ENTER].",
    visualDescription:
      "Mostra no topo o número e nome do Drum Kit atual. " +
      "Abaixo, à esquerda, há uma lista vertical de 6 parâmetros: " +
      "Linha 1: Kit Volume (-INF, -60.0 a +6.0 dB). " +
      "Linha 2: Closed-Pedal Volume (-INF, -60.0 a +6.0 dB). " +
      "Linha 3: XStick Volume (-INF, -60.0 a +6.0 dB). " +
      "Linha 4: Snare Buzz Volume (-INF, -60.0 a +6.0 dB — ativo quando Snare Buzz Switch = ON). " +
      "Linha 5: Strainer Throw Volume (-INF, -60.0 a +6.0 dB). " +
      "Linha 6: HH Open/Close Balance (-5 a +5). " +
      "À direita ficam os medidores de saída MASTER (L/R) e PHONES (L/R). " +
      "No rodapé: [F5] (KIT -) e [F6] (KIT +) permitem trocar de Drum Kit sem sair desta tela para igualar o volume entre diferentes kits!",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "KIT -", action: "prev_kit", description: "Seleciona o Drum Kit anterior para comparar e ajustar o volume." },
      { num: 6, label: "KIT +", action: "next_kit", description: "Seleciona o próximo Drum Kit para comparar e ajustar o volume." }
    ],
    items: [
      { id: "kv_kitvol", label: "1. Kit Volume", paramKey: "kitVolume", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -2.0, row: 1, col: 1, explanation: "Volume geral do Drum Kit atual (-INF, -60.0 a +6.0 dB — Linha 1)." },
      { id: "kv_pedal", label: "2. Closed-Pedal Volume", paramKey: "closedPedalVolume", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -1.0, row: 2, col: 1, explanation: "Volume do fechamento do pedal de chimbal (-INF, -60.0 a +6.0 dB — Linha 2, 1 seta para baixo)." },
      { id: "kv_xstick", label: "3. XStick Volume", paramKey: "xstickVolume", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -3.0, row: 3, col: 1, explanation: "Volume do aro cruzado (Cross-stick) da caixa (-INF, -60.0 a +6.0 dB — Linha 3, 2 setas para baixo)." },
      { id: "kv_buzz", label: "4. Snare Buzz Volume", paramKey: "snareBuzzVolume", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 4, col: 1, explanation: "Volume da ressonância da esteira da caixa (-INF, -60.0 a +6.0 dB — Linha 4, 3 setas para baixo)." },
      { id: "kv_strainer", label: "5. Strainer Throw Volume", paramKey: "strainerThrowVolume", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -6.0, row: 5, col: 1, explanation: "Volume do som mecânico ao levantar/abaixar a alavanca do automático (-INF, -60.0 a +6.0 dB — Linha 5, 4 setas para baixo)." },
      { id: "kv_hhbal", label: "6. HH Open/Close Balance", paramKey: "hhOpenCloseBalance", type: "int", min: -5, max: 5, defaultVal: 1, row: 6, col: 1, explanation: "Balanço entre o volume do chimbal aberto e fechado (-5 a +5 — Linha 6, 5 setas para baixo)." }
    ]
  },

  KIT_EQ: {
    id: "KIT_EQ",
    title: "KIT EQ (Equalizador Global por Drum Kit)",
    manualSectionId: "kit-edit-kit-vol-eq-comp",
    category: "MENU > KIT EDIT",
    accessPath: "Pressione [MENU] > KIT EDIT (Linha 1) > Seta Direita 3x, Seta Baixo 1x até KIT EQ (Linha 2, Coluna 3) > [ENTER].",
    visualDescription:
      "Configura o equalizador de 4 bandas para o drum kit inteiro. " +
      "No modo padrão (Mid/Side = OFF, indicado como 'STEREO' no topo), há uma tabela de 4 colunas (LOW, MID1, MID2, HIGH) × 4 linhas (Type, Q, Freq, Gain), mais 'Input Gain' (-12 a +12 dB) na Linha 5. " +
      "Quando [F2] (Mid/Side) está ligado (ON), o equalizador opera em modo MID/SIDE permitindo ajustar separadamente o centro (MID) e as laterais (SIDE) do campo estéreo. " +
      "Botões F: [F1] KitEQ (ON/OFF), [F2] Mid/Side (ON/OFF), [F6] RESET EQ.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "KitEQ (ON/OFF)", action: "toggle_param", paramKey: "kitEqSw", description: "Liga (ON) ou desliga (OFF) o equalizador do kit." },
      { num: 2, label: "Mid/Side (ON/OFF)", action: "toggle_param", paramKey: "kitEqMidSideSw", description: "Alterna entre o modo STEREO NORMAL (OFF) e o modo MID/SIDE (ON)." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "RESET EQ", action: "reset_section", description: "Restaura as configurações do KIT EQ para os valores padrão." }
    ],
    items: [
      { id: "keq_ltype", label: "LOW Type", paramKey: "kitEqLowType", type: "enum", options: ["SHELV", "PEAK"], defaultVal: "SHELV", row: 1, col: 1, explanation: "Tipo de filtro da banda LOW (SHELV ou PEAK)." },
      { id: "keq_htype", label: "HIGH Type", paramKey: "kitEqHighType", type: "enum", options: ["SHELV", "PEAK"], defaultVal: "SHELV", row: 1, col: 4, explanation: "Tipo de filtro da banda HIGH (SHELV ou PEAK)." },
      { id: "keq_lq", label: "LOW Q", paramKey: "kitEqLowQ", type: "float", min: 0.5, max: 16.0, step: 0.5, defaultVal: 1.0, row: 2, col: 1, explanation: "Fator Q da banda LOW (ativo quando LOW Type = PEAK)." },
      { id: "keq_m1q", label: "MID1 Q", paramKey: "kitEqMid1Q", type: "float", min: 0.5, max: 16.0, step: 0.5, defaultVal: 1.0, row: 2, col: 2, explanation: "Fator Q da banda MID1 (0.5 a 16.0)." },
      { id: "keq_m2q", label: "MID2 Q", paramKey: "kitEqMid2Q", type: "float", min: 0.5, max: 16.0, step: 0.5, defaultVal: 0.5, row: 2, col: 3, explanation: "Fator Q da banda MID2 (0.5 a 16.0)." },
      { id: "keq_hq", label: "HIGH Q", paramKey: "kitEqHighQ", type: "float", min: 0.5, max: 16.0, step: 0.5, defaultVal: 1.0, row: 2, col: 4, explanation: "Fator Q da banda HIGH (ativo quando HIGH Type = PEAK)." },
      { id: "keq_lfreq", label: "LOW Freq", paramKey: "kitEqLowFreq", type: "enum", options: ["20Hz", "31.5Hz", "40Hz", "50Hz", "63Hz", "80Hz", "100Hz", "125Hz", "160Hz", "200Hz", "250Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz", "1kHz"], defaultVal: "80Hz", row: 3, col: 1, explanation: "Frequência da banda LOW (20Hz a 1kHz)." },
      { id: "keq_m1freq", label: "MID1 Freq", paramKey: "kitEqMid1Freq", type: "enum", options: ["20Hz", "63Hz", "100Hz", "160Hz", "200Hz", "250Hz", "315Hz", "400Hz", "500Hz", "630Hz", "800Hz", "1kHz", "1.6kHz", "2.5kHz", "4kHz", "8kHz", "16kHz"], defaultVal: "250Hz", row: 3, col: 2, explanation: "Frequência da banda MID1 (20Hz a 16kHz)." },
      { id: "keq_m2freq", label: "MID2 Freq", paramKey: "kitEqMid2Freq", type: "enum", options: ["20Hz", "100Hz", "250Hz", "500Hz", "1kHz", "1.6kHz", "2kHz", "2.5kHz", "3.15kHz", "4kHz", "5kHz", "6.3kHz", "8kHz", "10kHz", "16kHz"], defaultVal: "5kHz", row: 3, col: 3, explanation: "Frequência da banda MID2 (20Hz a 16kHz)." },
      { id: "keq_hfreq", label: "HIGH Freq", paramKey: "kitEqHighFreq", type: "enum", options: ["1kHz", "1.25kHz", "1.6kHz", "2kHz", "2.5kHz", "3.15kHz", "4kHz", "5kHz", "6.3kHz", "8kHz", "10kHz", "12.5kHz", "16kHz"], defaultVal: "5kHz", row: 3, col: 4, explanation: "Frequência da banda HIGH (1kHz a 16kHz)." },
      { id: "keq_lgain", label: "LOW Gain", paramKey: "kitEqLowGain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 0, row: 4, col: 1, explanation: "Ganho da banda LOW (-12 a +12 dB)." },
      { id: "keq_m1gain", label: "MID1 Gain", paramKey: "kitEqMid1Gain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 0, row: 4, col: 2, explanation: "Ganho da banda MID1 (-12 a +12 dB)." },
      { id: "keq_m2gain", label: "MID2 Gain", paramKey: "kitEqMid2Gain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 1, row: 4, col: 3, explanation: "Ganho da banda MID2 (-12 a +12 dB)." },
      { id: "keq_hgain", label: "HIGH Gain", paramKey: "kitEqHighGain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 0, row: 4, col: 4, explanation: "Ganho da banda HIGH (-12 a +12 dB)." },
      { id: "keq_ingain", label: "Input Gain (Mid / Side Input Gain)", paramKey: "kitEqInputGain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 0, row: 5, col: 4, explanation: "Ganho de entrada do equalizador do kit (-12 a +12 dB)." }
    ]
  },

  KIT_COMP: {
    id: "KIT_COMP",
    title: "KIT COMP (Compressor Mestre por Drum Kit)",
    manualSectionId: "kit-edit-kit-vol-eq-comp",
    category: "MENU > KIT EDIT",
    accessPath: "Pressione [MENU] > KIT EDIT (Linha 1) > Seta Direita 4x, Seta Baixo 1x até KIT COMP (Linha 2, Coluna 4) > [ENTER].",
    visualDescription:
      "Configura o compressor mestre do drum kit. " +
      "No topo esquerdo: 'Kit Comp Type' (STANDARD: compressor de 1 ou 2 bandas; ou FETCOMP-76). " +
      "Abaixo, quando STANDARD: Template (SINGLE SOFT COMP..2 BAND PARALLEL), Balance (D100:0W–D0:100W), Split Freq (SINGLE ou 10–16000 Hz). " +
      "Abaixo de Split Freq fica uma tabela de 6 linhas (Threshold, Gain, Attack, Release, Ratio, Knee) com 2 colunas: Coluna LOW (ativa quando Split Freq >= 10Hz) e Coluna HIGH / SINGLE. " +
      "À direita ficam os medidores de entrada (IN), redução de ganho (GR), saída do compressor (OUT) e saída geral (MASTER). " +
      "Pressione [F1] (KitComp) para ligar/desligar o compressor do kit.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "KitComp (ON/OFF)", action: "toggle_param", paramKey: "kitCompSw", description: "Liga (ON) ou desliga (OFF) o compressor mestre do kit." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "kc_type", label: "1. Kit Comp Type", paramKey: "kitCompType", type: "enum", options: ["STANDARD", "FETCOMP-76"], defaultVal: "STANDARD", row: 1, col: 1, explanation: "Seleciona o tipo de compressor do kit (STANDARD de 1/2 bandas ou FETCOMP-76)." },
      { id: "kc_template", label: "2. Template", paramKey: "kitCompTemplate", type: "enum", options: ["SINGLE SOFT COMP", "SINGLE HARD COMP", "SINGLE LIMITER", "SINGLE PARALLEL", "2 BAND SOFT COMP", "2 BAND HARD COMP", "2 BAND LIMITER", "2 BAND PARALLEL", "PRESENCE (FET)", "SOFT (FET)", "MID (FET)", "HEAVY (FET)"], defaultVal: "SINGLE PARALLEL", row: 2, col: 1, explanation: "Modelo predefinido do compressor do kit." },
      { id: "kc_bal", label: "3. Balance", paramKey: "kitCompBalance", type: "enum", options: ["D100:0W", "D70:30W", "D50:50W", "D30:70W", "D0:100W"], defaultVal: "D70:30W", row: 3, col: 1, explanation: "Balanço entre som direto (D) e som comprimido (W)." },
      { id: "kc_split", label: "4. Split Freq", paramKey: "kitCompSplitFreq", type: "enum", options: ["SINGLE", "100Hz", "200Hz", "250Hz", "400Hz", "500Hz", "800Hz", "1000Hz", "2000Hz", "4000Hz"], defaultVal: "SINGLE", row: 4, col: 1, explanation: "Se 'SINGLE', opera como compressor de 1 banda. Se 10–16000 Hz, divide em banda grave (Lo) e aguda (Hi)." },
      { id: "kc_lo_thres", label: "Lo Threshold (Banda Grave)", paramKey: "kitCompLoThres", type: "int", min: -60, max: 0, unit: "dB", defaultVal: -30, row: 5, col: 1, explanation: "Threshold da banda grave (-60 a 0 dB — ativo quando Split Freq não é SINGLE)." },
      { id: "kc_hi_thres", label: "Hi / Single Threshold", paramKey: "kitCompHiThres", type: "int", min: -60, max: 0, unit: "dB", defaultVal: -30, row: 5, col: 2, explanation: "Threshold da banda aguda ou compressor Single (-60 a 0 dB)." },
      { id: "kc_lo_gain", label: "Lo Gain (Banda Grave)", paramKey: "kitCompLoGain", type: "float", min: -60.0, max: 24.0, step: 0.5, unit: "dB", defaultVal: 0.0, row: 6, col: 1, explanation: "Ganho de saída da banda grave (-60.0 a +24.0 dB)." },
      { id: "kc_hi_gain", label: "Hi / Single Gain", paramKey: "kitCompHiGain", type: "float", min: -60.0, max: 24.0, step: 0.5, unit: "dB", defaultVal: 0.0, row: 6, col: 2, explanation: "Ganho de saída da banda aguda ou Single (-60.0 a +24.0 dB). Ajuste para que o medidor OUT não ultrapasse 0 dB." },
      { id: "kc_lo_atk", label: "Lo Attack", paramKey: "kitCompLoAtk", type: "float", min: 0.1, max: 100.0, step: 1.0, unit: "ms", defaultVal: 10.0, row: 7, col: 1, explanation: "Attack da banda grave (0.1 a 100 ms)." },
      { id: "kc_hi_atk", label: "Hi / Single Attack", paramKey: "kitCompHiAtk", type: "float", min: 0.1, max: 100.0, step: 1.0, unit: "ms", defaultVal: 0.1, row: 7, col: 2, explanation: "Attack da banda aguda ou Single (0.1 a 100 ms)." },
      { id: "kc_lo_rel", label: "Lo Release", paramKey: "kitCompLoRel", type: "int", min: 10, max: 1000, step: 10, unit: "ms", defaultVal: 50, row: 8, col: 1, explanation: "Release da banda grave (10 a 1000 ms)." },
      { id: "kc_hi_rel", label: "Hi / Single Release", paramKey: "kitCompHiRel", type: "int", min: 10, max: 1000, step: 10, unit: "ms", defaultVal: 110, row: 8, col: 2, explanation: "Release da banda aguda ou Single (10 a 1000 ms)." },
      { id: "kc_lo_ratio", label: "Lo Ratio", paramKey: "kitCompLoRatio", type: "enum", options: ["1:1", "2:1", "3:1", "4:1", "8:1", "16:1", "INF:1"], defaultVal: "2:1", row: 9, col: 1, explanation: "Ratio da banda grave." },
      { id: "kc_hi_ratio", label: "Hi / Single Ratio", paramKey: "kitCompHiRatio", type: "enum", options: ["1:1", "2:1", "3:1", "4:1", "8:1", "16:1", "INF:1"], defaultVal: "16:1", row: 9, col: 2, explanation: "Ratio da banda aguda ou Single." },
      { id: "kc_lo_knee", label: "Lo Knee", paramKey: "kitCompLoKnee", type: "enum", options: ["HARD", "SOFT1", "SOFT2", "SOFT3"], defaultVal: "SOFT3", row: 10, col: 1, explanation: "Knee da banda grave." },
      { id: "kc_hi_knee", label: "Hi / Single Knee", paramKey: "kitCompHiKnee", type: "enum", options: ["HARD", "SOFT1", "SOFT2", "SOFT3"], defaultVal: "HARD", row: 10, col: 2, explanation: "Knee da banda aguda ou Single." }
    ]
  }
});

Object.assign(window.V31_SCREENS, {
  // ==================== AMBIENCE & SUBSCREENS ====================
  AMBIENCE: {
    id: "AMBIENCE",
    title: "AMBIENCE (Visão Geral de Ambiência do Kit)",
    manualSectionId: "kit-edit-ambience",
    category: "MENU > KIT EDIT",
    accessPath: "Pressione [MENU] > KIT EDIT (Linha 1) > Seta Direita 1x, Seta Baixo 1x até AMBIENCE (Linha 2, Coluna 1) > [ENTER].",
    visualDescription:
      "A tela AMBIENCE é dividida em 3 colunas funcionais: " +
      "1) À esquerda (Colunas 1 a 4 da Linha 1): 4 faders verticais de envio do pad atual para cada módulo de ambiência: Col 1 = Overhead Send (-INF a +6.0 dB), Col 2 = Room Send, Col 3 = Reverb Send, Col 4 = Kit Resonance Send. " +
      "2) No centro (Coluna 5, Linhas 1 a 4): 4 blocos mostrando o nível mestre e a chave ON/OFF de OVERHEAD (Linha 1), ROOM (Linha 2), REVERB (Linha 3) e KIT RESONANCE (Linha 4). " +
      "3) À direita (Coluna 6): Knob 'Ambience (GLOBAL)' (-INF a +6.0 dB). " +
      "No rodapé, os botões de função dão acesso às 4 telas de edição detalhada: [F1] OVERHEAD, [F2] ROOM, [F3] REVERB, [F4] KIT RESO, [F5] H&R (vincula pele e aro), [F6] AmbOnly (escuta temporariamente apenas o som da ambiência).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "OVERHEAD", action: "goto", target: "AMB_OVERHEAD", description: "Abre a tela de edição detalhada do simulador de microfone suspenso (OVERHEAD)." },
      { num: 2, label: "ROOM", action: "goto", target: "AMB_ROOM", description: "Abre a tela de edição detalhada da acústica da sala (ROOM)." },
      { num: 3, label: "REVERB", action: "goto", target: "AMB_REVERB", description: "Abre a tela de edição detalhada do Reverb do kit (REVERB)." },
      { num: 4, label: "KIT RESO", action: "goto", target: "AMB_KIT_RESO", description: "Abre a tela de edição detalhada da ressonância do kit (KIT RESONANCE)." },
      { num: 5, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Vincula os envios de Pele e Aro do pad." },
      { num: 6, label: "AmbOnly (ON/OFF)", action: "toggle_param", paramKey: "ambOnlySw", description: "Permite ouvir temporariamente apenas o som da ambiência nas saídas." }
    ],
    items: [
      { id: "amb_pad_oh", label: "Pad Send -> OVERHEAD", paramKey: "padOhSend", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -9.0, row: 1, col: 1, explanation: "Quantidade de envio do pad atual para os microfones Overhead (-INF a +6.0 dB)." },
      { id: "amb_pad_room", label: "Pad Send -> ROOM", paramKey: "padRoomSend", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -13.5, row: 1, col: 2, explanation: "Quantidade de envio do pad atual para a sala ROOM (-INF a +6.0 dB — 1 seta à direita)." },
      { id: "amb_pad_rev", label: "Pad Send -> REVERB", paramKey: "padRevSend", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -6.0, row: 1, col: 3, explanation: "Quantidade de envio do pad atual para o REVERB (-INF a +6.0 dB — 2 setas à direita)." },
      { id: "amb_pad_reso", label: "Pad Send -> KIT RESONANCE", paramKey: "padResoSend", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -4.5, row: 1, col: 4, explanation: "Quantidade de envio do pad atual para KIT RESONANCE (-INF a +6.0 dB — 3 setas à direita)." },
      { id: "amb_oh_lvl", label: "OVERHEAD Level & Switch", paramKey: "ohLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: 0.0, row: 1, col: 5, explanation: "Volume mestre do OVERHEAD (-INF a +12.0 dB)." },
      { id: "amb_global", label: "Ambience (GLOBAL)", paramKey: "globalToneAmb", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 1, col: 6, explanation: "Nível global de ambiência (-INF a +6.0 dB)." },
      { id: "amb_room_lvl", label: "ROOM Level & Switch", paramKey: "roomLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: -2.0, row: 2, col: 5, explanation: "Volume mestre da sala ROOM (-INF a +12.0 dB)." },
      { id: "amb_rev_lvl", label: "REVERB Level & Switch", paramKey: "reverbLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: 0.0, row: 3, col: 5, explanation: "Volume mestre do REVERB (-INF a +12.0 dB)." },
      { id: "amb_reso_lvl", label: "KIT RESONANCE Level & Switch", paramKey: "kitResoLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: -4.5, row: 4, col: 5, explanation: "Volume mestre de KIT RESONANCE (-INF a +12.0 dB)." }
    ]
  },

  AMB_OVERHEAD: {
    id: "AMB_OVERHEAD",
    title: "OVERHEAD - MIC / SEND / FILTER / ASSIGN (Microfone Suspenso)",
    manualSectionId: "kit-edit-ambience",
    category: "MENU > KIT EDIT > AMBIENCE",
    accessPath: "Em MENU > KIT EDIT > AMBIENCE, pressione [F1] (OVERHEAD).",
    visualDescription:
      "Configura detalhadamente o simulador de microfone suspenso (OVERHEAD). " +
      "No rodapé, as abas principais são: [F1] SEND (envio de cada pad), [F2] FILTER (6 filtros duplos Pre/Post de entrada), [F3] ASSIGN (qual filtro 1–6 ou BYPASS cada pad usa), [F4] OVERHEAD (cadeia principal com 6 sub-blocos: PRE TRNSNT, PRE COMP, MIC, POST EQ, POST COMP, BUS SEND). " +
      "[F5] (OH) liga/desliga o efeito Overhead; [F6] (OHOnly) isola o áudio apenas do Overhead.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "SEND", action: "announce", message: "Aba SEND do OVERHEAD: ajuste o Overhead Send Level (-INF a +6.0dB) de cada pad.", description: "Ajusta o nível de envio de cada pad para o Overhead." },
      { num: 2, label: "FILTER", action: "announce", message: "Aba FILTER do OVERHEAD: configura os filtros 1 a 6 (Pre Filter: THRU, HICUT, LOCUT, PKG; Post Filter: THRU, LPF, HPF, LSF, HSF).", description: "Configura os 6 filtros em série de entrada do Overhead." },
      { num: 3, label: "ASSIGN", action: "announce", message: "Aba ASSIGN do OVERHEAD: escolhe BYPASS ou FILTER 1 a 6 para cada pad.", description: "Seleciona qual filtro de entrada cada pad utiliza." },
      { num: 4, label: "OVERHEAD", action: "goto", target: "AMB_OVERHEAD", description: "Aba principal OVERHEAD (PRE TRNSNT, PRE COMP, MIC, POST EQ, POST COMP, BUS SEND)." },
      { num: 5, label: "OH (ON/OFF)", action: "toggle_param", paramKey: "ohSw", description: "Liga (ON) ou desliga (OFF) o efeito Overhead." },
      { num: 6, label: "OHOnly (ON/OFF)", action: "toggle_param", paramKey: "ohOnlySw", description: "Permite ouvir temporariamente apenas o som do Overhead." }
    ],
    items: [
      { id: "oh_stage", label: "Estágio da Cadeia OVERHEAD", paramKey: "ohStage", type: "enum", options: ["1: PRE TRNSNT", "2: PRE COMP", "3: MIC (Principal)", "4: POST EQ", "5: POST COMP", "6: BUS SEND", "Aba SEND (Envio por Pad)", "Aba FILTER (Filtros 1-6)", "Aba ASSIGN (Atribuição de Filtro)"], defaultVal: "3: MIC (Principal)", row: 1, col: 1, explanation: "Navega pelos blocos internos do OVERHEAD." },
      { id: "oh_template", label: "Template (Modelo de Overhead)", paramKey: "ohTemplate", type: "enum", options: ["1: NATURAL", "2: SOLID", "3: CHIC", "4: CLEAR", "5: WARM", "6: DRY", "7: DEEP", "8: NARROW", "9: PUNCHY"], defaultVal: "1: NATURAL", row: 2, col: 1, explanation: "Predefinição de microfonação Overhead (ajusta automaticamente Mic Type, Time, Distance, Width, EQ e Comp)." },
      { id: "oh_mictype", label: "Mic Type", paramKey: "ohMicType", type: "enum", options: ["NATURAL", "SOLID", "CHIC", "WARM", "CLEAR", "DRY", "NARROW", "PUNCHY"], defaultVal: "NATURAL", row: 3, col: 1, explanation: "Tipo de microfone suspenso." },
      { id: "oh_level", label: "Overhead Level", paramKey: "ohLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: 0.0, row: 3, col: 2, explanation: "Volume de saída do Overhead (-INF, -60.0 a +12.0 dB)." },
      { id: "oh_time", label: "Time (Tempo de Reverberação)", paramKey: "ohTime", type: "int", min: -64, max: 0, defaultVal: -30, row: 4, col: 1, explanation: "Tempo de reverberação captada pelo Overhead (-64 a 0)." },
      { id: "oh_dist", label: "Distance (Distância dos Microfones)", paramKey: "ohDistance", type: "int", min: 0, max: 6, defaultVal: 3, row: 4, col: 2, explanation: "Distância entre os microfones suspensos e a bateria (0 a 6)." },
      { id: "oh_width", label: "Output Width (Abertura Estéreo)", paramKey: "ohWidth", type: "enum", options: ["DEFAULT", "WIDE+1", "WIDE+2", "WIDE+3", "WIDE+4", "WIDE+5", "WIDE+6"], defaultVal: "WIDE+1", row: 4, col: 3, explanation: "Sensação de abertura espacial do som do Overhead." },
      { id: "oh_bussend", label: "OH Send Bus Select", paramKey: "ohBusSelect", type: "enum", options: ["OFF", "BUS A", "BUS B", "BUS C", "BUS D"], defaultVal: "OFF", row: 5, col: 1, explanation: "Seleciona para qual barramento de efeito (BUS A–D) o som do Overhead é enviado." }
    ]
  },

  AMB_ROOM: {
    id: "AMB_ROOM",
    title: "ROOM (Simulador de Acústica da Sala)",
    manualSectionId: "kit-edit-ambience",
    category: "MENU > KIT EDIT > AMBIENCE",
    accessPath: "Em MENU > KIT EDIT > AMBIENCE, pressione [F2] (ROOM).",
    visualDescription:
      "Configura a acústica da sala (ROOM). Possui 2 abas no rodapé: [F1] SEND (envio de cada pad) e [F2] ROOM (cadeia de 6 blocos: PRE EQ, PRE TRNSNT, PRE COMP, ROOM, POST EQ, POST COMP, BUS SEND). " +
      "No bloco ROOM: você escolhe 'Type' entre REALISTIC (com Place: ISOLATION ROOM..CAVE, Distance 0–6 e Time -64–0) ou SYNTHETIC (com Character: Air..Metal, Time 0.1–1.5s, Attack Time, HF Damp, Pre Delay, Spread e Gate Reverb). " +
      "[F5] (Room) liga/desliga a sala; [F6] (RoomOnly) isola apenas o som da sala.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "SEND", action: "announce", message: "Aba SEND do ROOM: ajusta Room Send Level (-INF a +6.0dB) para cada pad.", description: "Ajusta o envio de cada pad para a sala." },
      { num: 2, label: "ROOM", action: "goto", target: "AMB_ROOM", description: "Aba principal de parâmetros da sala ROOM." },
      { num: 3, label: "---", action: "none", description: "Em PRE TRANSIENT controla Transient ON/OFF; em POST EQ controla Room ON/OFF." },
      { num: 4, label: "H&R / EQ / Comp", action: "toggle_param", paramKey: "hrLinkSw", description: "Alterna H&R (na aba SEND) ou liga/desliga EQ/Comp nos estágios internos." },
      { num: 5, label: "Room (ON/OFF)", action: "toggle_param", paramKey: "roomSw", description: "Liga (ON) ou desliga (OFF) o efeito ROOM." },
      { num: 6, label: "RoomOnly (ON/OFF)", action: "toggle_param", paramKey: "roomOnlySw", description: "Isola temporariamente apenas o som da sala ROOM." }
    ],
    items: [
      { id: "rm_stage", label: "Estágio da Cadeia ROOM", paramKey: "roomStage", type: "enum", options: ["1: PRE EQ", "2: PRE TRNSNT", "3: PRE COMP", "4: ROOM (Principal)", "5: POST EQ", "6: POST COMP", "7: BUS SEND"], defaultVal: "4: ROOM (Principal)", row: 1, col: 1, explanation: "Seleciona o bloco da cadeia ROOM." },
      { id: "rm_type", label: "Type (Tipo de Simulação de Sala)", paramKey: "roomType", type: "enum", options: ["REALISTIC", "SYNTHETIC"], defaultVal: "REALISTIC", row: 2, col: 1, explanation: "REALISTIC (modelagem acústica de locais reais) ou SYNTHETIC (reverb de sala sintético com Gate)." },
      { id: "rm_level", label: "Room Level", paramKey: "roomLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: -2.0, row: 2, col: 2, explanation: "Volume da sala ROOM (-INF a +12.0 dB)." },
      { id: "rm_width", label: "Output Width", paramKey: "roomWidth", type: "enum", options: ["DEFAULT", "WIDE+1", "WIDE+2", "WIDE+3", "WIDE+4", "WIDE+5", "WIDE+6"], defaultVal: "DEFAULT", row: 3, col: 1, explanation: "Espacialidade do som da sala (DEFAULT a WIDE+6)." },
      { id: "rm_place", label: "Place (REALISTIC) / Character (SYNTHETIC)", paramKey: "roomPlace", type: "enum", options: ["ISOLATION ROOM", "WOOD STUDIO", "MODERN STUDIO", "LIVE HOUSE", "SMALL STAGE", "SMALL HALL", "HALL STAGE", "HALL AUDIENCE", "CATHEDRAL", "STADIUM STAGE", "STADIUM AUDIENCE", "CAVE", "Air (SYNTH)", "Dimensional (SYNTH)", "Fog (SYNTH)", "Roomy (SYNTH)", "Chamber (SYNTH)", "Solid (SYNTH)", "Light (SYNTH)", "Session (SYNTH)", "Metal (SYNTH)"], defaultVal: "MODERN STUDIO", row: 4, col: 1, explanation: "Tipo de ambiente da sala." },
      { id: "rm_dist", label: "Distance (0 a 6)", paramKey: "roomDistance", type: "int", min: 0, max: 6, defaultVal: 1, row: 5, col: 1, explanation: "Sensação de distância na sala (0 a 6, modo REALISTIC)." },
      { id: "rm_time", label: "Time (Tempo de Reverberação)", paramKey: "roomTime", type: "int", min: -64, max: 0, defaultVal: -28, row: 6, col: 1, explanation: "Tempo de reverberação da sala (-64 a 0 em REALISTIC; 0.1 a 1.5s em SYNTHETIC)." }
    ]
  },

  AMB_REVERB: {
    id: "AMB_REVERB",
    title: "REVERB (Reverb da Ambiência do Kit)",
    manualSectionId: "kit-edit-ambience",
    category: "MENU > KIT EDIT > AMBIENCE",
    accessPath: "Em MENU > KIT EDIT > AMBIENCE, pressione [F3] (REVERB).",
    visualDescription:
      "Configura o Reverb do kit. Possui 2 abas: [F1] SEND e [F2] REVERB (estágios: PRE TRANSIENT, REVERB, POST COMP, BUS SEND). " +
      "No estágio REVERB, você seleciona 'Reverb Type' entre 7 algoritmos clássicos da Roland: " +
      "1) TD-50 REVERB (ROOM1, ROOM2, HALL1, HALL2, PLATE), 2) TD-50 ROOM (25 salas: BEACH a SPIRAL), 3) WARM HALL, 4) SRV-2000 (reverb digital clássico Roland), 5) SRV-2000(NLR) (Non-Linear Reverb), 6) SIMPLE REVERB, 7) LONG REVERB. " +
      "[F5] (Reverb) liga/desliga o reverb; [F6] (RevOnly) ouve apenas o reverb.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "SEND", action: "announce", message: "Aba SEND do REVERB: ajusta Reverb Send Level (-INF a +6.0dB) para cada pad.", description: "Ajusta o envio de cada pad para o Reverb." },
      { num: 2, label: "REVERB", action: "goto", target: "AMB_REVERB", description: "Aba principal de parâmetros do REVERB." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "H&R / Transient", action: "toggle_param", paramKey: "hrLinkSw", description: "Controla H&R na aba SEND ou Transient/Reverb nos estágios." },
      { num: 5, label: "Reverb (ON/OFF)", action: "toggle_param", paramKey: "reverbSw", description: "Liga (ON) ou desliga (OFF) o Reverb." },
      { num: 6, label: "RevOnly (ON/OFF)", action: "toggle_param", paramKey: "revOnlySw", description: "Isola temporariamente apenas o som do Reverb." }
    ],
    items: [
      { id: "rv_stage", label: "Estágio da Cadeia REVERB", paramKey: "reverbStage", type: "enum", options: ["1: PRE TRANSIENT", "2: REVERB (Principal)", "3: POST COMP", "4: BUS SEND"], defaultVal: "2: REVERB (Principal)", row: 1, col: 1, explanation: "Seleciona o bloco da cadeia REVERB." },
      { id: "rv_alg", label: "Reverb Type (Algoritmo Principal)", paramKey: "reverbAlg", type: "enum", options: ["TD-50 REVERB", "TD-50 ROOM", "WARM HALL", "SRV-2000", "SRV-2000(NLR)", "SIMPLE REVERB", "LONG REVERB"], defaultVal: "TD-50 REVERB", row: 2, col: 1, explanation: "Escolhe entre os 7 algoritmos de Reverb (Data List p. 21–24)." },
      { id: "rv_level", label: "Reverb Level", paramKey: "reverbLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: 0.0, row: 2, col: 2, explanation: "Volume de saída do Reverb (-INF a +12.0 dB)." },
      { id: "rv_subtype", label: "Sub-Type / Selection / Room Type", paramKey: "reverbSubType", type: "enum", options: ["ROOM1", "ROOM2", "HALL1", "HALL2", "PLATE", "STUDIO (TD-50 ROOM)", "JAZZ CLUB (TD-50 ROOM)", "ROCK CLUB (TD-50 ROOM)", "CONCERT HALL (TD-50 ROOM)", "SRV R22", "SRV H26", "SRV P-B", "SRV P-A"], defaultVal: "ROOM1", row: 3, col: 1, explanation: "Subtipo do algoritmo selecionado." },
      { id: "rv_predelay", label: "Pre Delay", paramKey: "reverbPreDelay", type: "int", min: 0, max: 160, unit: "msec", defaultVal: 26, row: 4, col: 1, explanation: "Atraso entre o som direto e o início do reverb (0 a 160 ms)." },
      { id: "rv_time", label: "Time (Tempo de Reverberação)", paramKey: "reverbTime", type: "float", min: 0.1, max: 30.0, step: 0.1, unit: "sec", defaultVal: 2.6, row: 5, col: 1, explanation: "Duração da cauda de reverberação." },
      { id: "rv_density", label: "Density", paramKey: "reverbDensity", type: "int", min: 0, max: 127, defaultVal: 127, row: 6, col: 1, explanation: "Densidade do som do reverb (0 a 127)." },
      { id: "rv_diffusion", label: "Diffusion", paramKey: "reverbDiffusion", type: "int", min: 0, max: 127, defaultVal: 127, row: 7, col: 1, explanation: "Mudança na densidade do reverb ao longo do tempo (0 a 127)." },
      { id: "rv_lfdamp", label: "LF Damp", paramKey: "reverbLfDamp", type: "int", min: 0, max: 100, defaultVal: 50, row: 8, col: 1, explanation: "Amortecimento de baixas frequências do reverb (0 a 100)." },
      { id: "rv_hfdamp", label: "HF Damp", paramKey: "reverbHfDamp", type: "int", min: 0, max: 100, defaultVal: 50, row: 9, col: 1, explanation: "Amortecimento de altas frequências do reverb (0 a 100)." }
    ]
  },

  AMB_KIT_RESO: {
    id: "AMB_KIT_RESO",
    title: "KIT RESONANCE (Ressonância Acústica entre os Tambores do Kit)",
    manualSectionId: "kit-edit-ambience",
    category: "MENU > KIT EDIT > AMBIENCE",
    accessPath: "Em MENU > KIT EDIT > AMBIENCE, pressione [F4] (KIT RESO).",
    visualDescription:
      "Simula a ressonância simpática de todo o kit de bateria. Possui 2 abas: [F1] SEND e [F2] KIT RESO (estágios: PRE EQ, PRE TRNSNT, KIT RESO, POST EQ, POST COMP, BUS SEND). " +
      "No bloco KIT RESO: 'Drums Type' (STANDARD SET, SMALL SET), 'Time' (-64 a 0), 'Character' (0 a 6) e 'Level' (-INF a +12.0 dB). " +
      "[F5] (Reso) liga/desliga; [F6] (ResoOnly) escuta apenas a ressonância do kit.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "SEND", action: "announce", message: "Aba SEND de KIT RESONANCE: ajusta Kit Resonance Send Level (-INF a +6.0dB) para cada pad.", description: "Ajusta o envio de cada pad para Kit Resonance." },
      { num: 2, label: "KIT RESO", action: "goto", target: "AMB_KIT_RESO", description: "Aba principal KIT RESONANCE." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "H&R / Transient", action: "toggle_param", paramKey: "hrLinkSw", description: "Controla H&R na aba SEND ou Transient/EQ nos estágios." },
      { num: 5, label: "Reso (ON/OFF)", action: "toggle_param", paramKey: "kitResoSw", description: "Liga (ON) ou desliga (OFF) o efeito Kit Resonance." },
      { num: 6, label: "ResoOnly (ON/OFF)", action: "toggle_param", paramKey: "resoOnlySw", description: "Ouve temporariamente apenas o som da ressonância do kit." }
    ],
    items: [
      { id: "kr_stage", label: "Estágio da Cadeia KIT RESONANCE", paramKey: "kitResoStage", type: "enum", options: ["1: PRE EQ", "2: PRE TRNSNT", "3: KIT RESO (Principal)", "4: POST EQ", "5: POST COMP", "6: BUS SEND"], defaultVal: "3: KIT RESO (Principal)", row: 1, col: 1, explanation: "Seleciona o estágio da cadeia KIT RESONANCE." },
      { id: "kr_dtype", label: "Drums Type", paramKey: "kitResoDrumsType", type: "enum", options: ["STANDARD SET", "SMALL SET"], defaultVal: "STANDARD SET", row: 2, col: 1, explanation: "Tipo de conjunto de tambores para ressonância (STANDARD SET ou SMALL SET)." },
      { id: "kr_level", label: "Kit Resonance Level", paramKey: "kitResoLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: -4.5, row: 2, col: 2, explanation: "Volume da ressonância do kit (-INF a +12.0 dB)." },
      { id: "kr_time", label: "Time", paramKey: "kitResoTime", type: "int", min: -64, max: 0, defaultVal: -64, row: 3, col: 1, explanation: "Tempo de reverberação da ressonância do kit (-64 a 0)." },
      { id: "kr_char", label: "Character", paramKey: "kitResoChar", type: "int", min: 0, max: 6, defaultVal: 2, row: 3, col: 2, explanation: "Caráter tonal da ressonância do kit (0 a 6)." }
    ]
  },

  // ==================== BUS FX & MULTI-EFFECTS ====================
  BUS_FX_ROUTING: {
    id: "BUS_FX_ROUTING",
    title: "BUS FX ROUTING (Roteamento de Efeitos de Barramento)",
    manualSectionId: "kit-edit-bus-fx",
    category: "MENU > KIT EDIT > BUS FX",
    accessPath: "Pressione [MENU] > KIT EDIT (Linha 1) > Seta Baixo 2x, Seta Direita 1x até BUS FX (Linha 3, Coluna 1) > [ENTER] > [F1] (ROUTING).",
    visualDescription:
      "Configura o roteamento dos 4 barramentos de efeitos (BUS-A, BUS-B, BUS-C, BUS-D). " +
      "No topo esquerdo (para o pad selecionado): Linha 1 = Pad Send Head/Rim (PAD ou HEAD/RIM), Linha 2 = Output Routing (DRUM, DRUM+SEND BUS A..D, INSERT TO BUS A..D), Linha 3 = Pad Send Level (-INF a +6.0 dB). " +
      "No centro esquerdo: tabela de 4 linhas (BUS-A, BUS-B, BUS-C, BUS-D) × 3 colunas (Output, Send Level, Rev Send). " +
      "Abaixo: Pad Side Chain Control (OFF, BUS-A FX1..BUS-D FX2). " +
      "À direita: diagrama visual mostrando quais efeitos estão carregados em FX1 e FX2 de BUS-A a BUS-D. " +
      "No rodapé, os 6 botões F navegam por todo o sistema BUS FX: [F1] ROUTING, [F2] PAD ASSIGN, [F3] PAD SEND, [F4] FX EDIT (edita os 94 efeitos!), [F5] SIDE CHAIN, [F6] BUS REV.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "ROUTING", action: "goto", target: "BUS_FX_ROUTING", description: "Aba atual: roteamento geral do pad e dos barramentos BUS A–D." },
      { num: 2, label: "PAD ASSIGN", action: "goto", target: "BUS_FX_PAD_ASSIGN", description: "Muda para a aba PAD ASSIGN (matriz de roteamento de todos os pads em lista)." },
      { num: 3, label: "PAD SEND", action: "goto", target: "BUS_FX_PAD_SEND", description: "Muda para a aba PAD SEND (faders de nível de envio de todos os pads)." },
      { num: 4, label: "FX EDIT", action: "goto", target: "BUS_FX_EDIT", description: "Abre a tela FX EDIT para escolher entre os 94 efeitos e editar seus parâmetros em BUS A–D." },
      { num: 5, label: "SIDE CHAIN", action: "goto", target: "BUS_FX_SIDE_CHAIN", description: "Abre a tela SIDE CHAIN CONTROL (Pre-Gate, Pad Assign e Pad Send)." },
      { num: 6, label: "BUS REV", action: "goto", target: "BUS_FX_REVERB", description: "Abre a tela BUS REVERB (reverberação dedicada aos barramentos)." }
    ],
    items: [
      { id: "bfx_hr", label: "Pad Send Head/Rim", paramKey: "busFxPadSendHR", type: "enum", options: ["PAD", "HEAD/RIM"], defaultVal: "PAD", row: 1, col: 1, explanation: "Define se o efeito BUS FX é aplicado ao pad inteiro (PAD) ou separadamente à pele e ao aro (HEAD/RIM)." },
      { id: "bfx_outroute", label: "Output Routing (Roteamento do Pad)", paramKey: "busFxOutputRouting", type: "enum", options: ["DRUM", "DRUM + SEND BUS A", "INSERT TO BUS A", "DRUM + SEND BUS B", "INSERT TO BUS B", "DRUM + SEND BUS C", "INSERT TO BUS C", "DRUM + SEND BUS D", "INSERT TO BUS D"], defaultVal: "DRUM", row: 2, col: 1, explanation: "Escolhe para qual barramento o pad é enviado (DRUM+SEND soma o efeito ao som seco; INSERT envia 100% pelo efeito)." },
      { id: "bfx_padsend", label: "Pad Send Level", paramKey: "busFxPadSendLevel", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 3, col: 1, explanation: "Quantidade de sinal do pad enviado ao barramento quando Output Routing é DRUM+SEND (-INF a +6.0 dB)." },
      { id: "bfx_busA_out", label: "BUS-A Output", paramKey: "busAOutput", type: "enum", options: ["BUS A", "A+SEND B", "INSERT B", "A+SEND C", "INSERT C", "A+SEND D", "INSERT D"], defaultVal: "BUS A", row: 4, col: 1, explanation: "Destino de saída do BUS-A (pode ser encadeado em série ou paralelo para BUS B, C ou D)." },
      { id: "bfx_busA_send", label: "BUS-A Send Level", paramKey: "busASendLevel", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -61, row: 4, col: 2, explanation: "Nível de envio do BUS-A para outro barramento." },
      { id: "bfx_busA_rev", label: "BUS-A Rev Send", paramKey: "busARevSend", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 4, col: 3, explanation: "Nível de envio do BUS-A para o Bus Reverb (-INF a +6.0 dB)." },
      { id: "bfx_busB_out", label: "BUS-B Output", paramKey: "busBOutput", type: "enum", options: ["BUS B", "B+SEND C", "INSERT C", "B+SEND D", "INSERT D"], defaultVal: "BUS B", row: 5, col: 1, explanation: "Destino de saída do BUS-B." },
      { id: "bfx_busB_send", label: "BUS-B Send Level", paramKey: "busBSendLevel", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -61, row: 5, col: 2, explanation: "Nível de envio do BUS-B." },
      { id: "bfx_busB_rev", label: "BUS-B Rev Send", paramKey: "busBRevSend", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 5, col: 3, explanation: "Nível de envio do BUS-B para o Bus Reverb." },
      { id: "bfx_busC_out", label: "BUS-C Output", paramKey: "busCOutput", type: "enum", options: ["BUS C", "C+SEND D", "INSERT D"], defaultVal: "BUS C", row: 6, col: 1, explanation: "Destino de saída do BUS-C." },
      { id: "bfx_busC_send", label: "BUS-C Send Level", paramKey: "busCSendLevel", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -61, row: 6, col: 2, explanation: "Nível de envio do BUS-C." },
      { id: "bfx_busC_rev", label: "BUS-C Rev Send", paramKey: "busCRevSend", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 6, col: 3, explanation: "Nível de envio do BUS-C para o Bus Reverb." },
      { id: "bfx_busD_rev", label: "BUS-D Rev Send", paramKey: "busDRevSend", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 7, col: 3, explanation: "Nível de envio do BUS-D para o Bus Reverb." },
      { id: "bfx_sc_ctrl", label: "Pad Side Chain Control", paramKey: "padSideChainCtrl", type: "enum", options: ["OFF", "BUS-A FX1", "BUS-A FX2", "BUS-B FX1", "BUS-B FX2", "BUS-C FX1", "BUS-C FX2", "BUS-D FX1", "BUS-D FX2"], defaultVal: "OFF", row: 8, col: 1, explanation: "Define qual efeito com suporte a Side Chain é controlado pelo pad atual." }
    ]
  },

  BUS_FX_PAD_ASSIGN: {
    id: "BUS_FX_PAD_ASSIGN",
    title: "BUS FX ROUTING - PAD ASSIGN (Matriz de Atribuição por Pad)",
    manualSectionId: "kit-edit-bus-fx",
    category: "MENU > KIT EDIT > BUS FX",
    accessPath: "Em MENU > KIT EDIT > BUS FX, pressione [F2] (PAD ASSIGN).",
    visualDescription:
      "Exibe todas as colunas de pads (K, S, T1, T2, T3, HH, C1, C2, R, A) lado a lado. " +
      "Na Linha 1 de cada pad há a caixa 'Send H/R' (PAD vs HEAD/RIM), e na Linha 2 a seleção de Output Routing (DRUM, DRUM+SEND BUS A..D, INSERT TO BUS A..D).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "ROUTING", action: "goto", target: "BUS_FX_ROUTING", description: "Volta para a aba ROUTING." },
      { num: 2, label: "PAD ASSIGN", action: "goto", target: "BUS_FX_PAD_ASSIGN", description: "Aba atual: PAD ASSIGN." },
      { num: 3, label: "PAD SEND", action: "goto", target: "BUS_FX_PAD_SEND", description: "Muda para a aba PAD SEND." },
      { num: 4, label: "FX EDIT", action: "goto", target: "BUS_FX_EDIT", description: "Abre FX EDIT." },
      { num: 5, label: "SIDE CHAIN", action: "goto", target: "BUS_FX_SIDE_CHAIN", description: "Abre SIDE CHAIN." },
      { num: 6, label: "BUS REV", action: "goto", target: "BUS_FX_REVERB", description: "Abre BUS REVERB." }
    ],
    items: [
      { id: "bpa_k", label: "KICK - Output Routing", paramKey: "busRoute_KICK", type: "enum", options: ["DRUM", "DRUM+SEND BUS A", "INSERT TO BUS A", "DRUM+SEND BUS B", "INSERT TO BUS B", "DRUM+SEND BUS C", "INSERT TO BUS C", "DRUM+SEND BUS D", "INSERT TO BUS D"], defaultVal: "DRUM", row: 1, col: 1, explanation: "Roteamento de BUS FX para o Bumbo." },
      { id: "bpa_s", label: "SNARE - Output Routing", paramKey: "busRoute_SNARE", type: "enum", options: ["DRUM", "DRUM+SEND BUS A", "INSERT TO BUS A", "DRUM+SEND BUS B", "INSERT TO BUS B", "DRUM+SEND BUS C", "INSERT TO BUS C", "DRUM+SEND BUS D", "INSERT TO BUS D"], defaultVal: "DRUM+SEND BUS A", row: 1, col: 2, explanation: "Roteamento de BUS FX para a Caixa (1 seta à direita)." },
      { id: "bpa_t1", label: "TOM1 - Output Routing", paramKey: "busRoute_TOM1", type: "enum", options: ["DRUM", "DRUM+SEND BUS A", "INSERT TO BUS A", "DRUM+SEND BUS B", "INSERT TO BUS B", "DRUM+SEND BUS C", "INSERT TO BUS C", "DRUM+SEND BUS D", "INSERT TO BUS D"], defaultVal: "DRUM", row: 1, col: 3, explanation: "Roteamento de BUS FX para o Tom 1 (2 setas à direita)." },
      { id: "bpa_t2", label: "TOM2 - Output Routing", paramKey: "busRoute_TOM2", type: "enum", options: ["DRUM", "DRUM+SEND BUS A", "INSERT TO BUS A", "DRUM+SEND BUS B", "INSERT TO BUS B", "DRUM+SEND BUS C", "INSERT TO BUS C", "DRUM+SEND BUS D", "INSERT TO BUS D"], defaultVal: "DRUM", row: 1, col: 4, explanation: "Roteamento de BUS FX para o Tom 2 (3 setas à direita)." },
      { id: "bpa_t3", label: "TOM3 - Output Routing", paramKey: "busRoute_TOM3", type: "enum", options: ["DRUM", "DRUM+SEND BUS A", "INSERT TO BUS A", "DRUM+SEND BUS B", "INSERT TO BUS B", "DRUM+SEND BUS C", "INSERT TO BUS C", "DRUM+SEND BUS D", "INSERT TO BUS D"], defaultVal: "DRUM", row: 1, col: 5, explanation: "Roteamento de BUS FX para o Tom 3 (4 setas à direita)." },
      { id: "bpa_hh", label: "HI-HAT - Output Routing", paramKey: "busRoute_HIHAT", type: "enum", options: ["DRUM", "DRUM+SEND BUS A", "INSERT TO BUS A", "DRUM+SEND BUS B", "INSERT TO BUS B", "DRUM+SEND BUS C", "INSERT TO BUS C", "DRUM+SEND BUS D", "INSERT TO BUS D"], defaultVal: "DRUM", row: 1, col: 6, explanation: "Roteamento de BUS FX para o Chimbal (5 setas à direita)." }
    ]
  },

  BUS_FX_PAD_SEND: {
    id: "BUS_FX_PAD_SEND",
    title: "BUS FX ROUTING - PAD SEND (Nível de Envio por Pad)",
    manualSectionId: "kit-edit-bus-fx",
    category: "MENU > KIT EDIT > BUS FX",
    accessPath: "Em MENU > KIT EDIT > BUS FX, pressione [F3] (PAD SEND).",
    visualDescription:
      "Exibe faders verticais de Send Level (-INF, -60.0 a +6.0 dB) lado a lado para todos os pads (K, S, T1, T2, T3, HH, C1, C2, R, A).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "ROUTING", action: "goto", target: "BUS_FX_ROUTING", description: "Volta para a aba ROUTING." },
      { num: 2, label: "PAD ASSIGN", action: "goto", target: "BUS_FX_PAD_ASSIGN", description: "Muda para a aba PAD ASSIGN." },
      { num: 3, label: "PAD SEND", action: "goto", target: "BUS_FX_PAD_SEND", description: "Aba atual: PAD SEND." },
      { num: 4, label: "FX EDIT", action: "goto", target: "BUS_FX_EDIT", description: "Abre FX EDIT." },
      { num: 5, label: "SIDE CHAIN", action: "goto", target: "BUS_FX_SIDE_CHAIN", description: "Abre SIDE CHAIN." },
      { num: 6, label: "BUS REV", action: "goto", target: "BUS_FX_REVERB", description: "Abre BUS REVERB." }
    ],
    items: [
      { id: "bps_k", label: "KICK - Pad Send Level", paramKey: "busSend_KICK", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -6.0, row: 1, col: 1, explanation: "Nível de envio do Bumbo para o BUS FX (-INF a +6.0 dB)." },
      { id: "bps_s", label: "SNARE - Pad Send Level", paramKey: "busSend_SNARE", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -6.0, row: 1, col: 2, explanation: "Nível de envio da Caixa para o BUS FX (-INF a +6.0 dB)." },
      { id: "bps_t1", label: "TOM1 - Pad Send Level", paramKey: "busSend_TOM1", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -6.0, row: 1, col: 3, explanation: "Nível de envio do Tom 1 (-INF a +6.0 dB)." },
      { id: "bps_t2", label: "TOM2 - Pad Send Level", paramKey: "busSend_TOM2", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -6.0, row: 1, col: 4, explanation: "Nível de envio do Tom 2 (-INF a +6.0 dB)." },
      { id: "bps_t3", label: "TOM3 - Pad Send Level", paramKey: "busSend_TOM3", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -6.0, row: 1, col: 5, explanation: "Nível de envio do Tom 3 (-INF a +6.0 dB)." },
      { id: "bps_hh", label: "HI-HAT - Pad Send Level", paramKey: "busSend_HIHAT", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -6.0, row: 1, col: 6, explanation: "Nível de envio do Chimbal (-INF a +6.0 dB)." }
    ]
  },

  BUS_FX_EDIT: {
    id: "BUS_FX_EDIT",
    title: "BUS-A..D FX EDIT (Edição dos 94 Multi-Efeitos FX1 e FX2)",
    manualSectionId: "kit-edit-bus-fx",
    category: "MENU > KIT EDIT > BUS FX",
    accessPath: "Em MENU > KIT EDIT > BUS FX, pressione [F4] (FX EDIT).",
    visualDescription:
      "Tela onde você escolhe qualquer um dos 94 Multi-Efeitos do Data List (páginas 67 a 107) para FX1 e FX2 de cada um dos 4 barramentos (BUS-A, BUS-B, BUS-C, BUS-D). " +
      "No topo direito fica 'Bus Level' (-INF, -60.0 a +6.0 dB). " +
      "A tela é dividida em 2 colunas lado a lado: Coluna 1 (Esquerda) = FX1; Coluna 2 (Direita) = FX2. " +
      "Na primeira linha de cada coluna você seleciona o Tipo de Efeito (Type: THRU, EQUALIZER, MID SIDE EQ, SPECTRUM, ISOLATOR, LOW BOOST, SUPER FILTER, MULTI MODE FILTER, STEP FILTER, ENHANCER, EXCITER, AUTO WAH, HUMANIZER, PHASER, SMALL PHASER, SCRIPT 90, SCRIPT 100, STEP PHASER, MLT STAGE PHASER, INFINITE PHASER, FLANGER, SBF-325, STEP FLANGER, CHORUS, HEXA-CHORUS, TREM CHORUS, SPACE-D, CE-1, SDD-320, JUNO CHORUS, RING MODULATOR, TREMOLO, AUTO PAN, SLICER, ROTARY, VK ROTARY, OVERDRIVE, DISTORTION, T-SCREAM, FUZZ, TONE FATTENER, HMS DISTORTION, SATURATOR, DRUM SATURATOR, WARM SATURATOR, GUITAR AMP SIMULATOR, EP AMP SIMULATOR, SPEAKER SIMULATOR, COMPRESSOR, FETCOMP-78, MID SIDE COMPRESSOR, LIMITER, SUSTAINER, TRANSIENT, GATE, DELAY, MOD DELAY, 2TAP PAN DELAY, 3TAP PAN DELAY, 4TAP PAN DELAY, MULTI TAP DELAY, REVERSE DELAY, TIME CTRL DELAY, TAPE ECHO, MID SIDE DELAY, BPM LOOPER, LOFI COMP, BIT CRUSHER, PHONOGRAPH, PITCH SHIFTER, 2V PITCH SHIFTER, e todas as 23 combinações OD->CHORUS até JD-MULTI). " +
      "Abaixo do Tipo de Efeito aparecem todos os parâmetros específicos daquele efeito! " +
      "No rodapé: [F1] BUS-A, [F2] BUS-B, [F3] BUS-C, [F4] BUS-D (seleciona o barramento), [F5] Fx1 (liga/desliga FX1), [F6] Fx2 (liga/desliga FX2).",
    layoutType: "fx_edit",
    fButtons: [
      { num: 1, label: "BUS-A", action: "select_bus", bus: "A", description: "Seleciona o barramento BUS-A para edição de FX1 e FX2." },
      { num: 2, label: "BUS-B", action: "select_bus", bus: "B", description: "Seleciona o barramento BUS-B para edição de FX1 e FX2." },
      { num: 3, label: "BUS-C", action: "select_bus", bus: "C", description: "Seleciona o barramento BUS-C para edição de FX1 e FX2." },
      { num: 4, label: "BUS-D", action: "select_bus", bus: "D", description: "Seleciona o barramento BUS-D para edição de FX1 e FX2." },
      { num: 5, label: "Fx1 (ON/OFF)", action: "toggle_param", paramKey: "fx1Sw", description: "Liga (ON) ou desliga (OFF) o efeito FX1 do barramento atual." },
      { num: 6, label: "Fx2 (ON/OFF)", action: "toggle_param", paramKey: "fx2Sw", description: "Liga (ON) ou desliga (OFF) o efeito FX2 do barramento atual." }
    ],
    items: [
      { id: "fxe_buslvl", label: "Bus Level (Volume do Barramento)", paramKey: "busLevel", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 1, col: 2, explanation: "Nível de saída do barramento selecionado (-INF a +6.0 dB)." },
      { id: "fxe_fx1_type", label: "FX1 - Effect Type (94 Efeitos do Data List)", paramKey: "fx1Type", type: "fx_type", defaultVal: "DELAY", row: 2, col: 1, explanation: "Seleciona qual dos 94 efeitos está carregado no slot FX1 (Coluna 1). Ao mudar o efeito, os parâmetros abaixo se adaptam automaticamente!" },
      { id: "fxe_fx2_type", label: "FX2 - Effect Type (94 Efeitos do Data List)", paramKey: "fx2Type", type: "fx_type", defaultVal: "THRU", row: 2, col: 2, explanation: "Seleciona qual dos 94 efeitos está carregado no slot FX2 (Coluna 2 — 1 seta à direita)." },
      { id: "fxe_fx1_p1", label: "FX1 - Parâmetro 1 (ex: Sync / Drive / Mode)", paramKey: "fx1Param1", type: "enum", options: ["OFF", "ON", "NORMAL", "4-STAGE", "8-STAGE", "LPF", "BPF", "HPF", "JC-120", "CLEAN TWIN", "MS1959I"], defaultVal: "OFF", row: 3, col: 1, explanation: "Primeiro parâmetro do efeito selecionado em FX1 (consulte a tabela completa dos 94 efeitos na descrição ou no Manual)." },
      { id: "fxe_fx2_p1", label: "FX2 - Parâmetro 1", paramKey: "fx2Param1", type: "enum", options: ["OFF", "ON", "NORMAL"], defaultVal: "OFF", row: 3, col: 2, explanation: "Primeiro parâmetro do efeito selecionado em FX2." },
      { id: "fxe_fx1_p2", label: "FX1 - Parâmetro 2 (ex: Time / Rate / Cutoff / Gain)", paramKey: "fx1Param2", type: "int", min: 0, max: 1300, defaultVal: 365, row: 4, col: 1, explanation: "Segundo parâmetro do efeito selecionado em FX1." },
      { id: "fxe_fx1_p3", label: "FX1 - Parâmetro 3 (ex: Depth / Feedback / Resonance)", paramKey: "fx1Param3", type: "int", min: -98, max: 127, defaultVal: 50, row: 5, col: 1, explanation: "Terceiro parâmetro do efeito selecionado em FX1." },
      { id: "fxe_fx1_p4", label: "FX1 - Parâmetro 4 (ex: Low Gain / Balance)", paramKey: "fx1Param4", type: "int", min: -15, max: 15, unit: "dB", defaultVal: 0, row: 6, col: 1, explanation: "Quarto parâmetro do efeito selecionado em FX1." },
      { id: "fxe_fx1_p5", label: "FX1 - Parâmetro 5 (ex: High Gain / Level 0–127)", paramKey: "fx1Param5", type: "int", min: 0, max: 127, defaultVal: 100, row: 7, col: 1, explanation: "Nível de saída (Level 0–127) ou quinto parâmetro do efeito em FX1." }
    ]
  },

  BUS_FX_SIDE_CHAIN: {
    id: "BUS_FX_SIDE_CHAIN",
    title: "SIDE CHAIN CONTROL - PRE-GATE / PAD ASSIGN / PAD SEND",
    manualSectionId: "kit-edit-bus-fx",
    category: "MENU > KIT EDIT > BUS FX",
    accessPath: "Em MENU > KIT EDIT > BUS FX, pressione [F5] (SIDE CHAIN).",
    visualDescription:
      "Configura o sinal de controle lateral (Side Chain) enviado pelos pads para os efeitos que suportam Side Chain (AUTO WAH, HUMANIZER, RING MODULATOR, SLICER, COMPRESSOR, TRANSIENT, GATE, REVERSE DELAY). " +
      "Possui 3 abas nos botões F: [F1] PRE-GATE (matriz de 8 linhas BUS-A FX1..BUS-D FX2 × 8 colunas: Sw, Threshold, Mode GATE/DUCK, Attack, Hold, Release, Balance, Level, Gain), [F2] PAD ASSIGN (qual efeito o pad controla) e [F3] PAD SEND (Side Chain Control Send Level -INF a +12.0 dB).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "PRE-GATE", action: "goto", target: "BUS_FX_SIDE_CHAIN", description: "Aba atual: parâmetros de Pre-Gate para BUS A–D FX1/FX2." },
      { num: 2, label: "PAD ASSIGN", action: "announce", message: "Aba PAD ASSIGN do Side Chain: defina Pad Side Chain Control (OFF, BUS-A FX1..BUS-D FX2) para cada pad.", description: "Define qual efeito cada pad controla via Side Chain." },
      { num: 3, label: "PAD SEND", action: "announce", message: "Aba PAD SEND do Side Chain: ajuste Side Chain Control Send Level (-INF a +12.0 dB) para cada pad.", description: "Ajusta a intensidade do sinal de Side Chain enviado por cada pad." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "sc_sw", label: "BUS-A FX1 - Sidechain Pre-Gate Sw", paramKey: "scPreGateSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 1, col: 1, explanation: "Liga (ON) ou desliga (OFF) o Pre-Gate do sinal de Side Chain." },
      { id: "sc_thres", label: "BUS-A FX1 - Pre-Gate Threshold", paramKey: "scPreGateThres", type: "int", min: -60, max: 0, unit: "dB", defaultVal: -30, row: 1, col: 2, explanation: "Nível em que o gate começa a fechar (-60 a 0 dB)." },
      { id: "sc_mode", label: "BUS-A FX1 - Pre-Gate Mode", paramKey: "scPreGateMode", type: "enum", options: ["GATE", "DUCK"], defaultVal: "GATE", row: 1, col: 3, explanation: "GATE (fecha quando o sinal cai) ou DUCK (fecha quando o sinal sobe)." },
      { id: "sc_atk", label: "BUS-A FX1 - Pre-Gate Attack", paramKey: "scPreGateAtk", type: "int", min: 0, max: 100, unit: "ms", defaultVal: 0, row: 1, col: 4, explanation: "Tempo de abertura do gate (0 a 100 ms)." },
      { id: "sc_hold", label: "BUS-A FX1 - Pre-Gate Hold", paramKey: "scPreGateHold", type: "int", min: 10, max: 1000, step: 10, unit: "ms", defaultVal: 50, row: 1, col: 5, explanation: "Tempo de sustentação antes do gate começar a fechar (10 a 1000 ms)." },
      { id: "sc_rel", label: "BUS-A FX1 - Pre-Gate Release", paramKey: "scPreGateRel", type: "int", min: 10, max: 1000, step: 10, unit: "ms", defaultVal: 50, row: 1, col: 6, explanation: "Tempo de fechamento do gate (10 a 1000 ms)." },
      { id: "sc_bal", label: "BUS-A FX1 - Pre-Gate Balance", paramKey: "scPreGateBal", type: "enum", options: ["D100:0W", "D50:50W", "D0:100W"], defaultVal: "D0:100W", row: 1, col: 7, explanation: "Balanço entre sinal de controle direto (D) e processado (W)." },
      { id: "sc_lvl", label: "BUS-A FX1 - Pre-Gate Level", paramKey: "scPreGateLvl", type: "int", min: 0, max: 127, defaultVal: 127, row: 1, col: 8, explanation: "Nível de saída (0 a 127)." },
      { id: "sc_gain", label: "BUS-A FX1 - Pre-Gate Gain", paramKey: "scPreGateGain", type: "float", min: -24.0, max: 24.0, step: 0.5, unit: "dB", defaultVal: 0.0, row: 1, col: 9, explanation: "Ganho do Pre-Gate (-24.0 a +24.0 dB)." }
    ]
  },

  BUS_FX_REVERB: {
    id: "BUS_FX_REVERB",
    title: "BUS REVERB (Reverb Aplicado aos Barramentos BUS A–D)",
    manualSectionId: "kit-edit-bus-fx",
    category: "MENU > KIT EDIT > BUS FX",
    accessPath: "Em MENU > KIT EDIT > BUS FX, pressione [F6] (BUS REV).",
    visualDescription:
      "Configura o Reverb dedicado aos barramentos BUS A–D. Possui 3 estágios: PRE TRANSIENT, REVERB (com os mesmos 7 algoritmos do Reverb principal: TD-50 REVERB, TD-50 ROOM, WARM HALL, SRV-2000, SRV-2000(NLR), SIMPLE REVERB, LONG REVERB) e POST COMP. " +
      "No rodapé: [F4] Transient (ON/OFF), [F5] Reverb (ON/OFF), [F6] Comp (ON/OFF).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "Transient (ON/OFF)", action: "toggle_param", paramKey: "busRevTransientSw", description: "Liga/desliga o Pre Transient do Bus Reverb." },
      { num: 5, label: "Reverb (ON/OFF)", action: "toggle_param", paramKey: "busRevSw", description: "Liga/desliga o Bus Reverb." },
      { num: 6, label: "Comp (ON/OFF)", action: "toggle_param", paramKey: "busRevCompSw", description: "Liga/desliga o Post Comp do Bus Reverb." }
    ],
    items: [
      { id: "brv_stage", label: "Estágio do BUS REVERB", paramKey: "busRevStage", type: "enum", options: ["1: PRE TRANSIENT", "2: REVERB", "3: POST COMP"], defaultVal: "2: REVERB", row: 1, col: 1, explanation: "Seleciona o bloco interno do BUS REVERB." },
      { id: "brv_type", label: "Reverb Type", paramKey: "busRevType", type: "enum", options: ["TD-50 REVERB", "TD-50 ROOM", "WARM HALL", "SRV-2000", "SRV-2000(NLR)", "SIMPLE REVERB", "LONG REVERB"], defaultVal: "TD-50 REVERB", row: 2, col: 1, explanation: "Algoritmo de reverberação do Bus Reverb." },
      { id: "brv_level", label: "Reverb Level", paramKey: "busRevLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: 0.0, row: 2, col: 2, explanation: "Volume do Bus Reverb (-INF a +12.0 dB)." },
      { id: "brv_sub", label: "Sub-Type", paramKey: "busRevSubType", type: "enum", options: ["ROOM1", "ROOM2", "HALL1", "HALL2", "PLATE"], defaultVal: "HALL1", row: 3, col: 1, explanation: "Subtipo do Reverb." },
      { id: "brv_predly", label: "Pre Delay", paramKey: "busRevPreDelay", type: "int", min: 0, max: 100, unit: "msec", defaultVal: 26, row: 4, col: 1, explanation: "Pre Delay (0 a 100 ms)." },
      { id: "brv_time", label: "Time", paramKey: "busRevTime", type: "float", min: 0.1, max: 10.0, step: 0.1, unit: "sec", defaultVal: 2.6, row: 5, col: 1, explanation: "Tempo de reverberação (0.1 a 10.0 s)." }
    ]
  },

  // ==================== MENU > KIT OPTIONS (12 TELAS) ====================
  XSTICK_INST: {
    id: "XSTICK_INST",
    title: "XSTICK - INST / V-EDIT (Configuração de Cross Stick da Caixa)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > Seta Baixo 1x até KIT OPTIONS (Linha 2) > Seta Direita 1x até XSTICK (Linha 1, Coluna 1) > [ENTER].",
    visualDescription:
      "Configura o som de aro cruzado (Cross Stick) da caixa. " +
      "No bloco superior 'XSTICK INST': Coluna 1 = Cross stick switch (OFF/ON), Coluna 2 = Instrumento (ex: '057 DW Concrete X' ou '076 Power Amb S'), Coluna 3 = XStick Volume (-INF a +6.0 dB). " +
      "No bloco inferior 'XSTICK TRANSIENT': lista vertical de 6 parâmetros (Type, Attack Time 1–10, Attack Depth -100 a +100, Attack Type NORMAL/WIDE1/WIDE2, Release Depth -100 a +100, Gain -12.0 a +6.0 dB). " +
      "No rodapé: [F1] INST, [F2] V-EDIT (abre V-EDIT do cross-stick), [F4] Transient (ON/OFF), [F5] Analog XStick (ON/OFF), [F6] COPY.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "INST", action: "goto", target: "XSTICK_INST", description: "Aba atual: seleção de instrumento, volume e transiente do Cross Stick." },
      { num: 2, label: "V-EDIT", action: "goto", target: "KIT_EDIT_VEDIT", description: "Edita a afinação e abafamento do instrumento de Cross Stick usando V-EDIT." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "Transient (ON/OFF)", action: "toggle_param", paramKey: "xstickTransientSw", description: "Liga (ON) ou desliga (OFF) o efeito de transiente do Cross Stick." },
      { num: 5, label: "Analog XStick (ON/OFF)", action: "toggle_param", paramKey: "analogXStick", description: "Define se o som de Cross Stick toca (ON) ou não (OFF) ao usar um pad analógico na caixa." },
      { num: 6, label: "COPY", action: "announce", message: "Configurações de Cross Stick copiadas.", description: "Copia as configurações de Cross Stick." }
    ],
    items: [
      { id: "xs_sw", label: "Cross stick switch", paramKey: "xstickSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Ativa (ON) ou desativa (OFF) o instrumento de Cross Stick da caixa." },
      { id: "xs_inst", label: "Instrument (Cross Stick)", paramKey: "xstickInst", type: "instrument", defaultVal: "057 DW Concrete X", row: 1, col: 2, explanation: "Instrumento atribuído ao Cross Stick (1 seta à direita)." },
      { id: "xs_vol", label: "XStick Volume", paramKey: "xstickVolume", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -3.0, row: 1, col: 3, explanation: "Volume do som de Cross Stick (-INF a +6.0 dB — 2 setas à direita)." },
      { id: "xs_type", label: "XSTICK TRANSIENT - Type", paramKey: "xstickTrType", type: "enum", options: ["(Preset)", "Type 1", "Type 2", "Type 3", "Type 4"], defaultVal: "(Preset)", row: 2, col: 1, explanation: "Tipo de transiente (editável para User Samples)." },
      { id: "xs_atkt", label: "Attack Time", paramKey: "xstickAtkTime", type: "int", min: 1, max: 10, defaultVal: 5, row: 3, col: 1, explanation: "Tempo de ataque do Cross Stick (1 a 10)." },
      { id: "xs_atkd", label: "Attack Depth", paramKey: "xstickAtkDepth", type: "int", min: -100, max: 100, defaultVal: 25, row: 4, col: 1, explanation: "Intensidade do ataque do Cross Stick (-100 a +100)." },
      { id: "xs_atkm", label: "Attack Type", paramKey: "xstickAtkType", type: "enum", options: ["NORMAL", "WIDE 1", "WIDE 2"], defaultVal: "NORMAL", row: 5, col: 1, explanation: "Modo de resposta do ataque (NORMAL, WIDE 1, WIDE 2)." },
      { id: "xs_reld", label: "Release Depth", paramKey: "xstickRelDepth", type: "int", min: -100, max: 100, defaultVal: 0, row: 6, col: 1, explanation: "Ajuste de liberação do Cross Stick (-100 a +100)." },
      { id: "xs_gain", label: "Gain", paramKey: "xstickTrGain", type: "float", min: -12.0, max: 6.0, step: 0.5, unit: "dB", defaultVal: 0.0, row: 7, col: 1, explanation: "Ganho pós-transiente (-12.0 a +6.0 dB)." }
    ]
  },

  BRUSH: {
    id: "BRUSH",
    title: "BRUSH (Configuração de Vassourinhas)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 2x até BRUSH (Linha 1, Coluna 2) > [ENTER].",
    visualDescription:
      "Tela simples com apenas 1 parâmetro central: 'Brush Switch' (OFF para tocar com baquetas; ON para tocar com vassourinhas de nylon permitindo varrer a pele da caixa). " +
      "Gire o Disco [+]/[-] para alternar entre OFF e ON.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "brush_sw", label: "Brush Switch", paramKey: "brushSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 1, col: 1, explanation: "Especifica se você está tocando com baquetas (OFF) ou vassourinhas (ON). Ativado quando um instrumento compatível com vassourinha (*B) está na Camada A da pele da caixa." }
    ]
  },

  BUZZ: {
    id: "BUZZ",
    title: "SNARE BUZZ (Ressonância da Esteira da Caixa)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 3x até BUZZ (Linha 1, Coluna 3) > [ENTER].",
    visualDescription:
      "Configura quanto a esteira da caixa vibra (Snare Buzz) quando você bate no bumbo ou nos toms. " +
      "Na Linha 1 (topo): Coluna 1 = Buzz Switch (OFF, ON), Coluna 2 = Buzz Volume (-INF, -60.0 a +6.0 dB). " +
      "Abaixo (bloco SNARE BUZZ): uma tabela com os pads na vertical (KICK, SNARE HEAD, SNARE RIM, TOM1 HEAD, TOM1 RIM, TOM2 HEAD, TOM2 RIM, TOM3 HEAD, TOM3 RIM, etc.) e 2 colunas: " +
      "Coluna 1 = Sens (OFF, 1 a 12), Coluna 2 = Muffling (OFF, 1 a 8, MAX). " +
      "No rodapé: [F5] Buzz (ON/OFF), [F6] H&R (ON/OFF).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "Buzz (ON/OFF)", action: "toggle_param", paramKey: "snareBuzzSw", description: "Liga (ON) ou desliga (OFF) a ressonância da esteira da caixa." },
      { num: 6, label: "H&R (ON/OFF)", action: "toggle_param", paramKey: "hrLinkSw", description: "Configura pele e aro simultaneamente (ON) ou individualmente (OFF)." }
    ],
    items: [
      { id: "bz_sw", label: "Snare Buzz Switch", paramKey: "snareBuzzSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Liga (ON) ou desliga (OFF) a ressonância da esteira da caixa." },
      { id: "bz_vol", label: "Snare Buzz Volume", paramKey: "snareBuzzVolume", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 1, col: 2, explanation: "Volume geral da ressonância da esteira (-INF a +6.0 dB — 1 seta à direita)." },
      { id: "bz_kick_sens", label: "KICK - Snare Buzz Sens", paramKey: "buzzSens_KICK", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], defaultVal: "2", row: 2, col: 1, explanation: "Quantidade de ressonância da esteira acionada pelo Bumbo (OFF, 1 a 12)." },
      { id: "bz_kick_muff", label: "KICK - Snare Buzz Muffling", paramKey: "buzzMuff_KICK", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "MAX"], defaultVal: "OFF", row: 2, col: 2, explanation: "Abafamento da ressonância da esteira acionada pelo Bumbo (OFF, 1 a 8, MAX)." },
      { id: "bz_t1_sens", label: "TOM1 HEAD - Snare Buzz Sens", paramKey: "buzzSens_TOM1", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], defaultVal: "3", row: 3, col: 1, explanation: "Quantidade de ressonância da esteira acionada pelo Tom 1 (OFF, 1 a 12)." },
      { id: "bz_t1_muff", label: "TOM1 HEAD - Snare Buzz Muffling", paramKey: "buzzMuff_TOM1", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "MAX"], defaultVal: "OFF", row: 3, col: 2, explanation: "Abafamento da ressonância da esteira para o Tom 1." },
      { id: "bz_t2_sens", label: "TOM2 HEAD - Snare Buzz Sens", paramKey: "buzzSens_TOM2", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], defaultVal: "3", row: 4, col: 1, explanation: "Quantidade de ressonância da esteira acionada pelo Tom 2." },
      { id: "bz_t2_muff", label: "TOM2 HEAD - Snare Buzz Muffling", paramKey: "buzzMuff_TOM2", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "MAX"], defaultVal: "OFF", row: 4, col: 2, explanation: "Abafamento da ressonância da esteira para o Tom 2." }
    ]
  },

  STRAINER_LEVER: {
    id: "STRAINER_LEVER",
    title: "STRAINER - LEVER / SW/KNOB / FX CTRL (Automático da Caixa PD-14DSX)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 4x até STRAINER (Linha 1, Coluna 4) > [ENTER].",
    visualDescription:
      "Configura o mecanismo de automático da caixa digital PD-14DSX (alavanca, botão e borboleta). " +
      "A aba [F1] (LEVER) possui uma lista vertical de 4 parâmetros: " +
      "Linha 1: Strainer Lever Function (STRAINER ON/OFF, FX CONTROL, FUNCTION OFF). " +
      "Linha 2: Strainer Mode (BEHAVIOR, ALWAYS ON, ALWAYS OFF). " +
      "Linha 3: Strainer Throw Sound (OFF, TYPE1 a TYPE7). " +
      "Linha 4: Strainer Throw Volume (-INF, -60.0 a +6.0 dB). " +
      "A aba [F2] (SW/KNOB) configura 'Strainer Sw Func' (função do botão da borboleta) e 'Strainer Knob Func' (função ao girar a borboleta). " +
      "Quando Strainer Lever Function = FX CONTROL, aparece a aba [F3] (FX CTRL) permitindo escolher quais dos 13 efeitos (OVERHEAD, ROOM, REVERB, KIT RESO, BUS-A..D FX1/FX2, BUS REVERB) ligam/desligam ao acionar a alavanca!",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "LEVER", action: "goto", target: "STRAINER_LEVER", description: "Aba atual: configurações da alavanca do automático (LEVER)." },
      { num: 2, label: "SW/KNOB", action: "goto", target: "STRAINER_SW_KNOB", description: "Muda para a aba SWITCH/KNOB (funções do botão e borboleta do automático)." },
      { num: 3, label: "FX CTRL", action: "goto", target: "STRAINER_FX_CTRL", description: "Muda para a aba FX CONTROL (ativa quando Strainer Lever Function = FX CONTROL)." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "st_lfunc", label: "1. Strainer Lever Function", paramKey: "strainerLeverFunc", type: "enum", options: ["STRAINER ON/OFF", "FX CONTROL", "FUNCTION OFF"], defaultVal: "STRAINER ON/OFF", row: 1, col: 1, explanation: "Função da alavanca do automático: ligar/desligar a esteira (STRAINER ON/OFF), controlar efeitos da aba FX CTRL (FX CONTROL) ou desativada (FUNCTION OFF)." },
      { id: "st_mode", label: "2. Strainer Mode", paramKey: "strainerMode", type: "enum", options: ["BEHAVIOR", "ALWAYS ON", "ALWAYS OFF"], defaultVal: "BEHAVIOR", row: 2, col: 1, explanation: "BEHAVIOR (segue a alavanca do PD-14DSX), ALWAYS ON (esteira sempre presa) ou ALWAYS OFF (esteira sempre solta)." },
      { id: "st_sound", label: "3. Strainer Throw Sound", paramKey: "strainerThrowSound", type: "enum", options: ["OFF", "TYPE1", "TYPE2", "TYPE3", "TYPE4", "TYPE5", "TYPE6", "TYPE7"], defaultVal: "TYPE1", row: 3, col: 1, explanation: "Som mecânico ouvido ao levantar ou abaixar a alavanca do automático (OFF, TYPE1 a TYPE7)." },
      { id: "st_vol", label: "4. Strainer Throw Volume", paramKey: "strainerThrowVolume", type: "db", min: -61, max: 6, step: 0.5, defaultVal: -6.0, row: 4, col: 1, explanation: "Volume do som mecânico da alavanca (-INF a +6.0 dB)." }
    ]
  },

  STRAINER_SW_KNOB: {
    id: "STRAINER_SW_KNOB",
    title: "STRAINER - SWITCH/KNOB (Botão e Borboleta do Automático)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Em MENU > KIT OPTIONS > STRAINER, pressione [F2] (SW/KNOB).",
    visualDescription:
      "Lista vertical com 2 parâmetros: " +
      "Linha 1: Strainer Sw Func (função ao pressionar o botão da borboleta do PD-14DSX: OFF, DISPLAY STRAINER KNOB FUNC, SONG TOP, SONG PLAY/STOP, Bluetooth PLAY/STOP, CLICK PLAY/STOP, TAP TEMPO, SNARE BUZZ ON/OFF, SNAPSHOT SAVE, ALL SOUND OFF). " +
      "Linha 2: Strainer Knob Func (função ao girar a borboleta: OFF, SONG#, Bluetooth SONG#, CLICK TEMPO, SNARE BUZZ VOLUME, STRAINER ADJUST, SNARE TUNING, SNARE MUFFLING, LED BRIGHTNESS, LCD BRIGHTNESS).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "LEVER", action: "goto", target: "STRAINER_LEVER", description: "Volta para a aba LEVER." },
      { num: 2, label: "SW/KNOB", action: "goto", target: "STRAINER_SW_KNOB", description: "Aba atual: SWITCH/KNOB." },
      { num: 3, label: "FX CTRL", action: "goto", target: "STRAINER_FX_CTRL", description: "Muda para a aba FX CTRL." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "st_swfunc", label: "1. Strainer Sw Func (Pressionar Borboleta)", paramKey: "strainerSwFunc", type: "enum", options: ["OFF", "DISPLAY STRAINER KNOB FUNC", "SONG TOP", "SONG PLAY/STOP", "Bluetooth PLAY/STOP", "CLICK PLAY/STOP", "TAP TEMPO", "SNARE BUZZ ON/OFF", "SNAPSHOT SAVE", "ALL SOUND OFF"], defaultVal: "DISPLAY STRAINER KNOB FUNC", row: 1, col: 1, explanation: "Função acionada ao pressionar a borboleta do automático." },
      { id: "st_knobfunc", label: "2. Strainer Knob Func (Girar Borboleta)", paramKey: "strainerKnobFunc", type: "enum", options: ["OFF", "SONG#", "Bluetooth SONG#", "CLICK TEMPO", "SNARE BUZZ VOLUME", "STRAINER ADJUST", "SNARE TUNING", "SNARE MUFFLING", "LED BRIGHTNESS", "LCD BRIGHTNESS"], defaultVal: "STRAINER ADJUST", row: 2, col: 1, explanation: "Função acionada ao girar a borboleta do automático (1 seta para baixo)." }
    ]
  },

  STRAINER_FX_CTRL: {
    id: "STRAINER_FX_CTRL",
    title: "STRAINER - FX CONTROL (Controle de Efeitos pela Alavanca)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Em MENU > KIT OPTIONS > STRAINER, defina Strainer Lever Function = FX CONTROL e pressione [F3] (FX CTRL).",
    visualDescription:
      "Dividida em 2 seções com 2 colunas cada: " +
      "Seção superior 'AMBIENCE CONTROL' (2 linhas × 2 colunas): Linha 1: OVERHEAD (Col 1), ROOM (Col 2); Linha 2: REVERB (Col 1), KIT RESO (Col 2). " +
      "Seção inferior 'BUS FX CONTROL' (5 linhas × 2 colunas): BUS-A FX1/FX2, BUS-B FX1/FX2, BUS-C FX1/FX2, BUS-D FX1/FX2, e BUS REVERB. " +
      "Para cada efeito você define: DISABLE (não controla), LEVER ON (liga o efeito quando a alavanca está em ON) ou LEVER OFF (liga o efeito quando a alavanca está em OFF).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "LEVER", action: "goto", target: "STRAINER_LEVER", description: "Volta para a aba LEVER." },
      { num: 2, label: "SW/KNOB", action: "goto", target: "STRAINER_SW_KNOB", description: "Muda para a aba SW/KNOB." },
      { num: 3, label: "FX CTRL", action: "goto", target: "STRAINER_FX_CTRL", description: "Aba atual: FX CTRL." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "stfx_oh", label: "OVERHEAD Control", paramKey: "stFxOh", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 1, col: 1, explanation: "Controle do Overhead pela alavanca (Linha 1, Coluna 1)." },
      { id: "stfx_room", label: "ROOM Control", paramKey: "stFxRoom", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 1, col: 2, explanation: "Controle do Room pela alavanca (Linha 1, Coluna 2)." },
      { id: "stfx_rev", label: "REVERB Control", paramKey: "stFxRev", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 2, col: 1, explanation: "Controle do Reverb pela alavanca (Linha 2, Coluna 1)." },
      { id: "stfx_reso", label: "KIT RESO Control", paramKey: "stFxReso", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 2, col: 2, explanation: "Controle de Kit Resonance pela alavanca (Linha 2, Coluna 2)." },
      { id: "stfx_ba1", label: "BUS-A FX1 Control", paramKey: "stFxBusA1", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 3, col: 1, explanation: "Controle de BUS-A FX1 (Linha 3, Coluna 1)." },
      { id: "stfx_ba2", label: "BUS-A FX2 Control", paramKey: "stFxBusA2", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 3, col: 2, explanation: "Controle de BUS-A FX2 (Linha 3, Coluna 2)." },
      { id: "stfx_bb1", label: "BUS-B FX1 Control", paramKey: "stFxBusB1", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 4, col: 1, explanation: "Controle de BUS-B FX1 (Linha 4, Coluna 1)." },
      { id: "stfx_bb2", label: "BUS-B FX2 Control", paramKey: "stFxBusB2", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 4, col: 2, explanation: "Controle de BUS-B FX2 (Linha 4, Coluna 2)." },
      { id: "stfx_bc1", label: "BUS-C FX1 Control", paramKey: "stFxBusC1", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 5, col: 1, explanation: "Controle de BUS-C FX1 (Linha 5, Coluna 1)." },
      { id: "stfx_bc2", label: "BUS-C FX2 Control", paramKey: "stFxBusC2", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 5, col: 2, explanation: "Controle de BUS-C FX2 (Linha 5, Coluna 2)." },
      { id: "stfx_bd1", label: "BUS-D FX1 Control", paramKey: "stFxBusD1", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 6, col: 1, explanation: "Controle de BUS-D FX1 (Linha 6, Coluna 1)." },
      { id: "stfx_bd2", label: "BUS-D FX2 Control", paramKey: "stFxBusD2", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 6, col: 2, explanation: "Controle de BUS-D FX2 (Linha 6, Coluna 2)." },
      { id: "stfx_brev", label: "BUS REVERB Control", paramKey: "stFxBusRev", type: "enum", options: ["DISABLE", "LEVER ON", "LEVER OFF"], defaultVal: "DISABLE", row: 7, col: 1, explanation: "Controle do Bus Reverb pela alavanca (Linha 7, Coluna 1)." }
    ]
  },

  KIT_NAME: {
    id: "KIT_NAME",
    title: "KIT NAME (Renomear Drum Kit e Subnome)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 1x, Seta Baixo 1x até KIT NAME (Linha 2, Coluna 1) > [ENTER].",
    visualDescription:
      "Tela de edição de texto do V31 com 2 linhas editáveis: " +
      "Linha 1: KIT NAME (até 16 caracteres). " +
      "Linha 2: KIT SUB NAME (até 64 caracteres). " +
      "Como funciona no módulo real: Use Seta Cima [▲] / Seta Baixo [▼] para escolher entre KIT NAME e KIT SUB NAME. Use Seta Esquerda [◄] e Seta Direita [►] para mover o cursor pela posição dos caracteres (1 a 16 ou 1 a 64). " +
      "Gire o Disco [+]/[-] para trocar a letra/número na posição atual. " +
      "Botões F: [F3] (A<>a) alterna entre maiúsculas e minúsculas; [F4] (>0) pula para os números/símbolos; [F5] (INSERT) insere um espaço; [F6] (DELETE) apaga o caractere sob o cursor.",
    layoutType: "name_editor",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "A<>a", action: "name_toggle_case", description: "Alterna o caractere atual entre letra maiúscula e minúscula." },
      { num: 4, label: ">0", action: "name_jump_num", description: "Muda o caractere atual para a faixa numérica ('0')." },
      { num: 5, label: "INSERT", action: "name_insert_space", description: "Insere um espaço na posição atual do cursor." },
      { num: 6, label: "DELETE", action: "name_delete_char", description: "Exclui o caractere na posição atual do cursor." }
    ],
    items: [
      { id: "kn_name", label: "KIT NAME (Linha Superior - até 16 caracteres)", paramKey: "currentKitName", type: "text_v31", maxLen: 16, row: 1, col: 1, explanation: "Use [◄]/[►] para escolher a posição do caractere (1 a 16), Disco [+]/[-] para mudar a letra, [F3] A<>a, [F4] >0, [F5] INSERT, [F6] DELETE." },
      { id: "kn_sub", label: "KIT SUB NAME (Linha Inferior - até 64 caracteres)", paramKey: "currentKitSubName", type: "text_v31", maxLen: 64, row: 2, col: 1, explanation: "Subnome do kit (até 64 caracteres — 1 seta para baixo)." }
    ]
  },

  KIT_COLOR: {
    id: "KIT_COLOR",
    title: "KIT COLOR (Cor do LED do Botão [KIT] e Automático)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 2x, Seta Baixo 1x até KIT COLOR (Linha 2, Coluna 2) > [ENTER].",
    visualDescription:
      "Define a cor do LED do botão [KIT] e do indicador do automático para o kit atual. " +
      "Exibe 'Kit Color' à esquerda e a 'COLOR LIST' (1: WHITE a 11: CUSTOM) à direita. " +
      "Quando '11: CUSTOM' é selecionado, aparecem 3 parâmetros adicionais: Red (0–255), Green (0–255) e Blue (0–255).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "kcol_main", label: "1. Kit Color", paramKey: "kitColor", type: "enum", options: ["1: WHITE", "2: RED", "3: GREEN", "4: BLUE", "5: LIGHT BLUE", "6: PINK", "7: PURPLE", "8: ORANGE", "9: YELLOW", "10: EMERALD", "11: CUSTOM"], defaultVal: "1: WHITE", row: 1, col: 1, explanation: "Cor do LED para o drum kit atual (1: WHITE a 11: CUSTOM)." },
      { id: "kcol_r", label: "2. Custom Red (R)", paramKey: "kitColorR", type: "int", min: 0, max: 255, defaultVal: 255, row: 2, col: 1, explanation: "Intensidade de Vermelho (0 a 255 — ativo quando Kit Color = 11: CUSTOM)." },
      { id: "kcol_g", label: "3. Custom Green (G)", paramKey: "kitColorG", type: "int", min: 0, max: 255, defaultVal: 128, row: 3, col: 1, explanation: "Intensidade de Verde (0 a 255 — ativo quando Kit Color = 11: CUSTOM)." },
      { id: "kcol_b", label: "4. Custom Blue (B)", paramKey: "kitColorB", type: "int", min: 0, max: 255, defaultVal: 0, row: 4, col: 1, explanation: "Intensidade de Azul (0 a 255 — ativo quando Kit Color = 11: CUSTOM)." }
    ]
  },

  KIT_VIEW: {
    id: "KIT_VIEW",
    title: "KIT VIEW (Plano de Fundo e Tamanho de Fonte da Tela KIT)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 3x, Seta Baixo 1x até KIT VIEW (Linha 2, Coluna 3) > [ENTER] (ou via KIT > [F5] TOOLS > KIT VIEW).",
    visualDescription:
      "Lista vertical de 2 parâmetros à esquerda e miniatura da tela KIT à direita: " +
      "Linha 1: Kit Image (OFF, ON, GLOBAL). " +
      "Linha 2: Kit Name Size (SMALL, MEDIUM, LARGE, GLOBAL). " +
      "Quando Kit Image = ON, você pode pressionar [F6] (IMG IMPORT) para importar uma imagem .PNG do cartão SD.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "IMG IMPORT", action: "announce", message: "Tela KIT IMAGE IMPORT (.PNG): selecione um arquivo PNG na pasta /IMPORT do cartão SD e pressione F6 (IMPORT) e depois OK.", description: "Importa uma imagem .PNG do cartão SD para o fundo do kit (quando Kit Image = ON)." }
    ],
    items: [
      { id: "kvw_img", label: "1. Kit Image", paramKey: "kitViewImage", type: "enum", options: ["OFF", "ON", "GLOBAL"], defaultVal: "GLOBAL", row: 1, col: 1, explanation: "Configura a imagem de fundo da tela KIT (OFF: sem imagem; ON: imagem do kit; GLOBAL: segue a opção global de SYSTEM > OPTION)." },
      { id: "kvw_size", label: "2. Kit Name Size", paramKey: "kitViewNameSize", type: "enum", options: ["SMALL", "MEDIUM", "LARGE", "GLOBAL"], defaultVal: "GLOBAL", row: 2, col: 1, explanation: "Tamanho da fonte do nome do kit na tela KIT (1 seta para baixo)." }
    ]
  },

  KIT_TEMPO: {
    id: "KIT_TEMPO",
    title: "KIT TEMPO (Andamento Individual do Drum Kit)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 4x, Seta Baixo 1x até KIT TEMPO (Linha 2, Coluna 4) > [ENTER].",
    visualDescription:
      "Lista vertical de 2 parâmetros: " +
      "Linha 1: Kit Tempo (OFF: usa o andamento global do V31; ON: usa um andamento específico salvo neste drum kit). " +
      "Linha 2: Tempo (20.0 a 260.0 BPM — segure [SHIFT] ao girar o Disco para ajustar casas decimais).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "ktm_sw", label: "1. Kit Tempo Switch", paramKey: "kitTempoSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 1, col: 1, explanation: "Quando ON, selecionar este drum kit muda automaticamente o andamento do metrônomo e dos efeitos sincronizados." },
      { id: "ktm_val", label: "2. Tempo (BPM)", paramKey: "kitTempoVal", type: "float", min: 20.0, max: 260.0, step: 1.0, shiftStep: 0.1, unit: "BPM", defaultVal: 120.0, row: 2, col: 1, explanation: "Andamento deste drum kit (20.0 a 260.0 BPM — 1 seta para baixo)." }
    ]
  },

  KIT_PHRASE: {
    id: "KIT_PHRASE",
    title: "KIT PHRASE (Frase Demonstrativa do Drum Kit)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 1x, Seta Baixo 2x até KIT PHRASE (Linha 3, Coluna 1) > [ENTER].",
    visualDescription:
      "Lista vertical de 2 parâmetros: " +
      "Linha 1: Kit Phrase (seleciona entre as 52 frases integradas, de '01: 8beat - Med' a '52: Sound Check 4'). " +
      "Linha 2: Kit Phrase Play (GLOBAL) (OFF, ON — quando OFF, desativa o botão PHRASE na tela KIT para evitar disparo acidental ao vivo). " +
      "No rodapé: [F6] (PHRASE) toca ou interrompe a frase selecionada.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "PHRASE ◄", action: "toggle_phrase", description: "Reproduz ou interrompe a Kit Phrase selecionada." }
    ],
    items: [
      { id: "kph_sel", label: "1. Kit Phrase (01 a 52)", paramKey: "kitPhraseNo", type: "kit_phrase", defaultVal: "22: Funk", row: 1, col: 1, explanation: "Seleciona qual das 52 frases do Data List toca ao testar este kit." },
      { id: "kph_play", label: "2. Kit Phrase Play (GLOBAL)", paramKey: "kitPhrasePlayGlobal", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Quando OFF, desabilita a reprodução de Kit Phrase em todos os kits (útil para tocar ao vivo — 1 seta para baixo)." }
    ]
  },

  MUTE_GROUP: {
    id: "MUTE_GROUP",
    title: "PAD MUTE GROUP (Grupo de Silenciamento entre Pads)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 2x, Seta Baixo 2x até MUTE GROUP (Linha 3, Coluna 2) > [ENTER].",
    visualDescription:
      "Matriz com todos os pads/zonas nas colunas horizontais (K, S Head/Rim, T1 Head/Rim, T2 Head/Rim, T3 Head/Rim, HH, C1, C2, R, A) e 2 linhas: " +
      "Linha 1: SEND (- OFF, 1 a 8) — especifica qual grupo de silenciamento este pad dispara ao ser tocado. " +
      "Linha 2: RECEIVE (- OFF, 1 a 8) — especifica por qual grupo de silenciamento este pad é cortado (silenciado). " +
      "No rodapé: [F6] (CLEAR ALL) limpa todos os grupos de silenciamento do kit.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "CLEAR ALL", action: "reset_section", description: "Limpa (desativa) todos os grupos de silenciamento (SEND e RECEIVE = OFF)." }
    ],
    items: [
      { id: "mg_send_k", label: "KICK - Mute Group SEND", paramKey: "muteSend_KICK", type: "enum", options: ["- (OFF)", "1", "2", "3", "4", "5", "6", "7", "8"], defaultVal: "- (OFF)", row: 1, col: 1, explanation: "Grupo de silenciamento enviado ao tocar o Bumbo." },
      { id: "mg_send_s", label: "SNARE HEAD - Mute Group SEND", paramKey: "muteSend_SNARE", type: "enum", options: ["- (OFF)", "1", "2", "3", "4", "5", "6", "7", "8"], defaultVal: "- (OFF)", row: 1, col: 2, explanation: "Grupo de silenciamento enviado ao tocar a Caixa (1 seta à direita)." },
      { id: "mg_send_t1", label: "TOM1 HEAD - Mute Group SEND", paramKey: "muteSend_TOM1", type: "enum", options: ["- (OFF)", "1", "2", "3", "4", "5", "6", "7", "8"], defaultVal: "- (OFF)", row: 1, col: 3, explanation: "Grupo de silenciamento enviado ao tocar o Tom 1." },
      { id: "mg_send_hh", label: "HI-HAT - Mute Group SEND", paramKey: "muteSend_HIHAT", type: "enum", options: ["- (OFF)", "1", "2", "3", "4", "5", "6", "7", "8"], defaultVal: "- (OFF)", row: 1, col: 4, explanation: "Grupo de silenciamento enviado ao tocar o Chimbal." },
      { id: "mg_rec_k", label: "KICK - Mute Group RECEIVE", paramKey: "muteRec_KICK", type: "enum", options: ["- (OFF)", "1", "2", "3", "4", "5", "6", "7", "8"], defaultVal: "- (OFF)", row: 2, col: 1, explanation: "Grupo que silencia o som do Bumbo (1 seta para baixo)." },
      { id: "mg_rec_s", label: "SNARE HEAD - Mute Group RECEIVE", paramKey: "muteRec_SNARE", type: "enum", options: ["- (OFF)", "1", "2", "3", "4", "5", "6", "7", "8"], defaultVal: "- (OFF)", row: 2, col: 2, explanation: "Grupo que silencia o som da Caixa." },
      { id: "mg_rec_t1", label: "TOM1 HEAD - Mute Group RECEIVE", paramKey: "muteRec_TOM1", type: "enum", options: ["- (OFF)", "1", "2", "3", "4", "5", "6", "7", "8"], defaultVal: "- (OFF)", row: 2, col: 3, explanation: "Grupo que silencia o som do Tom 1." },
      { id: "mg_rec_hh", label: "HI-HAT - Mute Group RECEIVE", paramKey: "muteRec_HIHAT", type: "enum", options: ["- (OFF)", "1", "2", "3", "4", "5", "6", "7", "8"], defaultVal: "- (OFF)", row: 2, col: 4, explanation: "Grupo que silencia o som do Chimbal." }
    ]
  },

  KIT_MIDI_NOTE: {
    id: "KIT_MIDI_NOTE",
    title: "KIT MIDI - NOTE NO. / GATE TIME / CHANNEL",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 3x, Seta Baixo 2x até KIT MIDI (Linha 3, Coluna 3) > [ENTER].",
    visualDescription:
      "Configura a transmissão e recepção MIDI de cada pad e articulação do kit atual. " +
      "Possui 3 abas nos botões F: " +
      "[F1] NOTE NO. (define a nota MIDI de 0 C- a 127 G9 ou OFF para KICK, SNARE HEAD/RIM/BRUSH/XSTICK/THROW ON/THROW OFF/THROW OFF HEAD/RIM/BRUSH/XSTICK, TOM1–3 HEAD/RIM, HI-HAT OPEN HEAD/RIM, CLOSE HEAD/RIM, CLOSED-PEDAL, CRASH1–2 BOW/EDGE, RIDE BOW/EDGE/BELL, AUX HEAD/RIM). " +
      "[F2] GATE TIME (define a duração da nota MIDI de 0.1s a 8.0s). " +
      "[F3] CHANNEL (define o canal MIDI 1–16 ou GLOBAL). " +
      "[F6] DEFAULT restaura os padrões.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "NOTE NO.", action: "goto", target: "KIT_MIDI_NOTE", description: "Aba atual: Número da nota MIDI de cada pad/articulação." },
      { num: 2, label: "GATE TIME", action: "goto", target: "KIT_MIDI_GATE", description: "Muda para a aba GATE TIME (duração da nota MIDI 0.1s a 8.0s)." },
      { num: 3, label: "CHANNEL", action: "goto", target: "KIT_MIDI_CHANNEL", description: "Muda para a aba CHANNEL (Canal MIDI 1–16 ou GLOBAL)." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "DEFAULT", action: "reset_section", description: "Restaura as notas/gate/canais MIDI do kit para os valores de fábrica." }
    ],
    items: [
      { id: "km_kick", label: "1. KICK - MIDI Note No.", paramKey: "midiNote_KICK", type: "enum", options: ["OFF", "35 (B1)", "36 (C2)", "37 (C#2)", "38 (D2)"], defaultVal: "36 (C2)", row: 1, col: 1, explanation: "Nota MIDI do Bumbo (padrão: 36 C2)." },
      { id: "km_sn_h", label: "2. SNARE HEAD - MIDI Note No.", paramKey: "midiNote_SNARE_HEAD", type: "enum", options: ["OFF", "36 (C2)", "37 (C#2)", "38 (D2)", "40 (E2)"], defaultVal: "38 (D2)", row: 2, col: 1, explanation: "Nota MIDI da Pele da Caixa (padrão: 38 D2)." },
      { id: "km_sn_r", label: "3. SNARE RIM - MIDI Note No.", paramKey: "midiNote_SNARE_RIM", type: "enum", options: ["OFF", "37 (C#2)", "38 (D2)", "40 (E2)"], defaultVal: "40 (E2)", row: 3, col: 1, explanation: "Nota MIDI do Aro (Rim Shot) da Caixa (padrão: 40 E2)." },
      { id: "km_sn_b", label: "4. SNARE BRUSH - MIDI Note No.", paramKey: "midiNote_SNARE_BRUSH", type: "enum", options: ["OFF", "23 (B0)", "38 (D2)"], defaultVal: "23 (B0)", row: 4, col: 1, explanation: "Nota MIDI de varredura de vassourinha na Caixa (padrão: 23 B0)." },
      { id: "km_sn_x", label: "5. SNARE XSTICK - MIDI Note No.", paramKey: "midiNote_SNARE_XSTICK", type: "enum", options: ["OFF", "37 (C#2)", "40 (E2)"], defaultVal: "37 (C#2)", row: 5, col: 1, explanation: "Nota MIDI do Cross Stick da Caixa (padrão: 37 C#2)." },
      { id: "km_sn_ton", label: "6. SNARE THROW ON - MIDI Note No.", paramKey: "midiNote_SNARE_TON", type: "enum", options: ["OFF", "21 (A0)"], defaultVal: "21 (A0)", row: 6, col: 1, explanation: "Nota MIDI ao levantar a alavanca do automático (padrão: 21 A0)." },
      { id: "km_sn_toff", label: "7. SNARE THROW OFF - MIDI Note No.", paramKey: "midiNote_SNARE_TOFF", type: "enum", options: ["OFF", "20 (G#0)"], defaultVal: "20 (G#0)", row: 7, col: 1, explanation: "Nota MIDI ao abaixar a alavanca do automático (padrão: 20 G#0)." },
      { id: "km_t1_h", label: "8. TOM1 HEAD - MIDI Note No.", paramKey: "midiNote_TOM1_HEAD", type: "enum", options: ["OFF", "48 (C3)", "50 (D3)"], defaultVal: "48 (C3)", row: 8, col: 1, explanation: "Nota MIDI da Pele do Tom 1 (padrão: 48 C3)." },
      { id: "km_hh_oh", label: "9. HI-HAT OPEN HEAD - MIDI Note No.", paramKey: "midiNote_HH_OPEN", type: "enum", options: ["OFF", "46 (A#2)", "26 (D1)"], defaultVal: "46 (A#2)", row: 9, col: 1, explanation: "Nota MIDI do Chimbal Aberto (corpo: 46 A#2; borda: 26 D1)." },
      { id: "km_hh_ch", label: "10. HI-HAT CLOSE HEAD - MIDI Note No.", paramKey: "midiNote_HH_CLOSE", type: "enum", options: ["OFF", "42 (F#2)", "22 (A#0)"], defaultVal: "42 (F#2)", row: 10, col: 1, explanation: "Nota MIDI do Chimbal Fechado (corpo: 42 F#2; borda: 22 A#0)." },
      { id: "km_hh_p", label: "11. HI-HAT CLOSED-PEDAL - MIDI Note No.", paramKey: "midiNote_HH_PEDAL", type: "enum", options: ["OFF", "44 (G#2)"], defaultVal: "44 (G#2)", row: 11, col: 1, explanation: "Nota MIDI do Pedal do Chimbal (padrão: 44 G#2)." }
    ]
  },

  KIT_MIDI_GATE: {
    id: "KIT_MIDI_GATE",
    title: "KIT MIDI - GATE TIME (Duração das Notas MIDI)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Em MENU > KIT OPTIONS > KIT MIDI, pressione [F2] (GATE TIME).",
    visualDescription:
      "Lista vertical de todos os pads ajustando 'MIDI Gate Time' de 0.1s a 8.0s (duração entre a mensagem Note On e Note Off enviada para módulos/samplers externos).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "NOTE NO.", action: "goto", target: "KIT_MIDI_NOTE", description: "Volta para a aba NOTE NO." },
      { num: 2, label: "GATE TIME", action: "goto", target: "KIT_MIDI_GATE", description: "Aba atual: GATE TIME." },
      { num: 3, label: "CHANNEL", action: "goto", target: "KIT_MIDI_CHANNEL", description: "Muda para a aba CHANNEL." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "DEFAULT", action: "reset_section", description: "Restaura para o padrão (0.1s)." }
    ],
    items: [
      { id: "kmg_kick", label: "1. KICK - MIDI Gate Time", paramKey: "midiGate_KICK", type: "float", min: 0.1, max: 8.0, step: 0.1, unit: "s", defaultVal: 0.1, row: 1, col: 1, explanation: "Duração da nota MIDI do Bumbo (0.1s a 8.0s)." },
      { id: "kmg_snare", label: "2. SNARE HEAD - MIDI Gate Time", paramKey: "midiGate_SNARE", type: "float", min: 0.1, max: 8.0, step: 0.1, unit: "s", defaultVal: 0.1, row: 2, col: 1, explanation: "Duração da nota MIDI da Caixa (0.1s a 8.0s)." },
      { id: "kmg_tom1", label: "3. TOM1 HEAD - MIDI Gate Time", paramKey: "midiGate_TOM1", type: "float", min: 0.1, max: 8.0, step: 0.1, unit: "s", defaultVal: 0.1, row: 3, col: 1, explanation: "Duração da nota MIDI do Tom 1 (0.1s a 8.0s)." }
    ]
  },

  KIT_MIDI_CHANNEL: {
    id: "KIT_MIDI_CHANNEL",
    title: "KIT MIDI - CHANNEL (Canal MIDI por Pad)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Em MENU > KIT OPTIONS > KIT MIDI, pressione [F3] (CHANNEL).",
    visualDescription:
      "Lista vertical de todos os pads ajustando 'MIDI Channel' entre GLOBAL (segue o Global MIDI Channel definido em SYSTEM > MIDI) ou Channel 1 a 16.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "NOTE NO.", action: "goto", target: "KIT_MIDI_NOTE", description: "Volta para a aba NOTE NO." },
      { num: 2, label: "GATE TIME", action: "goto", target: "KIT_MIDI_GATE", description: "Muda para a aba GATE TIME." },
      { num: 3, label: "CHANNEL", action: "goto", target: "KIT_MIDI_CHANNEL", description: "Aba atual: CHANNEL." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "DEFAULT", action: "reset_section", description: "Restaura para GLOBAL." }
    ],
    items: [
      { id: "kmc_kick", label: "1. KICK - MIDI Channel", paramKey: "midiCh_KICK", type: "enum", options: ["GLOBAL", "1Ch", "2Ch", "3Ch", "4Ch", "5Ch", "6Ch", "7Ch", "8Ch", "9Ch", "10Ch", "11Ch", "12Ch", "13Ch", "14Ch", "15Ch", "16Ch"], defaultVal: "GLOBAL", row: 1, col: 1, explanation: "Canal MIDI do Bumbo." },
      { id: "kmc_snare", label: "2. SNARE HEAD - MIDI Channel", paramKey: "midiCh_SNARE", type: "enum", options: ["GLOBAL", "1Ch", "2Ch", "3Ch", "4Ch", "5Ch", "6Ch", "7Ch", "8Ch", "9Ch", "10Ch", "11Ch", "12Ch", "13Ch", "14Ch", "15Ch", "16Ch"], defaultVal: "GLOBAL", row: 2, col: 1, explanation: "Canal MIDI da Caixa." }
    ]
  },

  POS_PEDAL_POSITION: {
    id: "POS_PEDAL_POSITION",
    title: "PAD POSITION / POS AREA / PEDAL BEND (Ponto de Ataque e Pedal Bend)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Pressione [MENU] > KIT OPTIONS (Linha 2) > Seta Direita 4x, Seta Baixo 2x até POS/PEDAL (Linha 3, Coluna 4) > [ENTER].",
    visualDescription:
      "Controla a mudança de timbre conforme o ponto onde você bate no pad e a mudança de altura da nota (Pitch Bend) pelo pedal do chimbal. " +
      "Possui 3 abas nos botões F: " +
      "[F1] POSITION (liga/desliga Position Control: OFF, ON, ON Rim Click Off para SNARE, TOM1–3, HI-HAT VH-14D, RIDE CY-18DR e AUX/TOM4). " +
      "[F2] POS AREA (ajusta a fronteira entre centro e borda: INSIDE -5 a DEFAULT a OUTSIDE +5). " +
      "[F3] PEDAL BEND (ajusta Pedal Bend Range de -24 a 0 a +24 semitons para cada pad conforme a pressão no pedal de chimbal).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "POSITION", action: "goto", target: "POS_PEDAL_POSITION", description: "Aba atual: liga/desliga detecção de ponto de impacto (Position Control)." },
      { num: 2, label: "POS AREA", action: "goto", target: "POS_PEDAL_AREA", description: "Muda para a aba POS AREA (ajuste de área interna/externa do pad)." },
      { num: 3, label: "PEDAL BEND", action: "goto", target: "POS_PEDAL_BEND", description: "Muda para a aba PEDAL BEND (inflexão de afinação pelo pedal do chimbal)." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "pp_sn_h", label: "1. SNARE HEAD - Position Control", paramKey: "posCtrl_SNARE_HEAD", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Ativa/desativa a mudança de timbre do centro para a borda (e esquerda/direita em PD-140DS/14DSX) na pele da Caixa." },
      { id: "pp_sn_r", label: "2. SNARE RIM - Position Control", paramKey: "posCtrl_SNARE_RIM", type: "enum", options: ["OFF", "ON", "ON (Rim Click Off)"], defaultVal: "OFF", row: 2, col: 1, explanation: "Ativa/desativa a nuance de rim shot raso vs fundo no aro da Caixa (1 seta para baixo)." },
      { id: "pp_t1_h", label: "3. TOM1 HEAD - Position Control", paramKey: "posCtrl_TOM1_HEAD", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 3, col: 1, explanation: "Detecção de posição na pele do Tom 1." },
      { id: "pp_t1_r", label: "4. TOM1 RIM - Position Control", paramKey: "posCtrl_TOM1_RIM", type: "enum", options: ["OFF", "ON", "ON (Rim Click Off)"], defaultVal: "ON", row: 4, col: 1, explanation: "Nuance de rim shot no aro do Tom 1." },
      { id: "pp_ride", label: "5. RIDE BOW - Position Control", paramKey: "posCtrl_RIDE_BOW", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 5, col: 1, explanation: "Detecção de posição no corpo do Ride." }
    ]
  },

  POS_PEDAL_AREA: {
    id: "POS_PEDAL_AREA",
    title: "POSITION AREA (Ajuste da Área de Ponto de Ataque)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Em MENU > KIT OPTIONS > POS/PEDAL, pressione [F2] (POS AREA).",
    visualDescription:
      "Lista de pads ajustando 'Position Area' entre INSIDE 5..1, DEFAULT e OUTSIDE 1..5 (INSIDE facilita obter o som do centro; OUTSIDE facilita obter o som da borda).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "POSITION", action: "goto", target: "POS_PEDAL_POSITION", description: "Volta para a aba POSITION." },
      { num: 2, label: "POS AREA", action: "goto", target: "POS_PEDAL_AREA", description: "Aba atual: POS AREA." },
      { num: 3, label: "PEDAL BEND", action: "goto", target: "POS_PEDAL_BEND", description: "Muda para a aba PEDAL BEND." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "ppa_sn_h", label: "1. SNARE HEAD - Position Area", paramKey: "posArea_SNARE_HEAD", type: "enum", options: ["INSIDE 5", "INSIDE 4", "INSIDE 3", "INSIDE 2", "INSIDE 1", "DEFAULT", "OUTSIDE 1", "OUTSIDE 2", "OUTSIDE 3", "OUTSIDE 4", "OUTSIDE 5"], defaultVal: "DEFAULT", row: 1, col: 1, explanation: "Ajusta o raio de detecção entre centro e borda da pele da Caixa." },
      { id: "ppa_sn_r", label: "2. SNARE RIM - Position Area", paramKey: "posArea_SNARE_RIM", type: "enum", options: ["INSIDE 5", "INSIDE 4", "INSIDE 3", "INSIDE 2", "INSIDE 1", "DEFAULT", "OUTSIDE 1", "OUTSIDE 2", "OUTSIDE 3", "OUTSIDE 4", "OUTSIDE 5"], defaultVal: "DEFAULT", row: 2, col: 1, explanation: "Ajusta a área de detecção do aro da Caixa." },
      { id: "ppa_t1_h", label: "3. TOM1 HEAD - Position Area", paramKey: "posArea_TOM1_HEAD", type: "enum", options: ["INSIDE 5", "INSIDE 4", "INSIDE 3", "INSIDE 2", "INSIDE 1", "DEFAULT", "OUTSIDE 1", "OUTSIDE 2", "OUTSIDE 3", "OUTSIDE 4", "OUTSIDE 5"], defaultVal: "DEFAULT", row: 3, col: 1, explanation: "Ajusta a área de detecção da pele do Tom 1." }
    ]
  },

  POS_PEDAL_BEND: {
    id: "POS_PEDAL_BEND",
    title: "PEDAL BEND (Mudança de Afinação pelo Pedal de Chimbal)",
    manualSectionId: "kit-options",
    category: "MENU > KIT OPTIONS",
    accessPath: "Em MENU > KIT OPTIONS > POS/PEDAL, pressione [F3] (PEDAL BEND).",
    visualDescription:
      "Lista de pads ajustando 'Pedal Bend Range' de -24 a 0 a +24 semitons. Permite variar a afinação de um tambor (como um surdo/timbale/tabla) pressionando o pedal do chimbal.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "POSITION", action: "goto", target: "POS_PEDAL_POSITION", description: "Volta para a aba POSITION." },
      { num: 2, label: "POS AREA", action: "goto", target: "POS_PEDAL_AREA", description: "Muda para a aba POS AREA." },
      { num: 3, label: "PEDAL BEND", action: "goto", target: "POS_PEDAL_BEND", description: "Aba atual: PEDAL BEND." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "ppb_kick", label: "1. KICK - Pedal Bend Range", paramKey: "pedalBend_KICK", type: "int", min: -24, max: 24, unit: "semi", defaultVal: 0, row: 1, col: 1, explanation: "Variação de afinação do Bumbo pelo pedal de chimbal (-24 a +24 semitons)." },
      { id: "ppb_sn_h", label: "2. SNARE HEAD - Pedal Bend Range", paramKey: "pedalBend_SNARE_HEAD", type: "int", min: -24, max: 24, unit: "semi", defaultVal: 0, row: 2, col: 1, explanation: "Variação de afinação da pele da Caixa pelo pedal de chimbal (-24 a +24 semitons)." },
      { id: "ppb_t1_h", label: "3. TOM1 HEAD - Pedal Bend Range", paramKey: "pedalBend_TOM1_HEAD", type: "int", min: -24, max: 24, unit: "semi", defaultVal: 0, row: 3, col: 1, explanation: "Variação de afinação da pele do Tom 1 (-24 a +24 semitons)." },
      { id: "ppb_t2_h", label: "4. TOM2 HEAD - Pedal Bend Range", paramKey: "pedalBend_TOM2_HEAD", type: "int", min: -24, max: 24, unit: "semi", defaultVal: 0, row: 4, col: 1, explanation: "Variação de afinação da pele do Tom 2 (-24 a +24 semitons)." },
      { id: "ppb_t3_h", label: "5. TOM3 HEAD - Pedal Bend Range", paramKey: "pedalBend_TOM3_HEAD", type: "int", min: -24, max: 24, unit: "semi", defaultVal: 0, row: 5, col: 1, explanation: "Variação de afinação da pele do Tom 3 (-24 a +24 semitons)." }
    ]
  }
});

Object.assign(window.V31_SCREENS, {
  // ==================== MENU > BACKUP (8 TELAS) ====================
  BACKUP_SAVE: {
    id: "BACKUP_SAVE",
    title: "SD CARD SAVE ALL (Backup Completo no Cartão SD)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > BACKUP",
    accessPath: "Pressione [MENU] > Seta Baixo 2x até BACKUP (Linha 3) > Seta Direita 1x até SAVE (Linha 1, Coluna 1) > [ENTER].",
    visualDescription:
      "Salva todas as configurações do V31 em um cartão SD (bancos 1 a 99). " +
      "Lista vertical de 3 parâmetros: " +
      "Linha 1: Backup Number (1 a 99). " +
      "Linha 2: With User Samples (Caixa de seleção OFF / ON — define se os user samples também serão salvos no backup). " +
      "Linha 3: Backup Name (até 16 caracteres, ex: 'V31Backup'). " +
      "No rodapé: pressione [F6] (SAVE) para abrir a confirmação ('Save all data to SD card. Are you sure? CANCEL / OK').",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "A<>a", action: "name_toggle_case", description: "Alterna maiúscula/minúscula quando no campo Backup Name." },
      { num: 4, label: ">0", action: "name_jump_num", description: "Seleciona número quando no campo Backup Name." },
      { num: 5, label: "INSERT/DEL", action: "name_insert_space", description: "Insere espaço no Backup Name." },
      { num: 6, label: "SAVE", action: "confirm_action", confirmMsg: "Backup completo salvo com sucesso no Cartão SD!", description: "Executa o salvamento do backup completo no cartão SD (pede confirmação OK)." }
    ],
    items: [
      { id: "bks_num", label: "1. Backup Number (1–99)", paramKey: "backupSaveNumber", type: "int", min: 1, max: 99, defaultVal: 1, row: 1, col: 1, explanation: "Seleciona o número do banco de backup no cartão SD (1 a 99)." },
      { id: "bks_us", label: "2. With User Samples", paramKey: "backupSaveWithSamples", type: "enum", options: ["OFF (Desmarcado)", "ON (Marcado)"], defaultVal: "ON (Marcado)", row: 2, col: 1, explanation: "Define se os User Samples também são incluídos no backup (1 seta para baixo)." },
      { id: "bks_name", label: "3. Backup Name (até 16 caracteres)", paramKey: "backupSaveName", type: "text_v31", maxLen: 16, defaultVal: "V31Backup", row: 3, col: 1, explanation: "Nome do arquivo de backup (2 setas para baixo)." }
    ]
  },

  BACKUP_LOAD: {
    id: "BACKUP_LOAD",
    title: "SD CARD LOAD ALL (Carregar Backup Completo do Cartão SD)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > BACKUP",
    accessPath: "Pressione [MENU] > BACKUP (Linha 3) > Seta Direita 2x até LOAD (Linha 1, Coluna 2) > [ENTER].",
    visualDescription:
      "Carrega um conjunto completo de dados de backup salvo no cartão SD. " +
      "Lista vertical de 3 parâmetros: " +
      "Linha 1: Backup Number (1 a 99, ex: '1: V31Backup'). " +
      "Linha 2: With User Samples (OFF / ON). " +
      "Linha 3: With Instrument Expansion Slots (OFF / ON — carrega também a configuração dos Slots 1–6 se instaladas no Rack). " +
      "No rodapé: [F1] (LOAD AUTO BACKUP) abre a tela LOAD AUTO BACKUP DATA (até 5 backups automáticos criados ao desligar o V31); [F6] (LOAD) carrega o backup selecionado.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "LOAD AUTO BACKUP", action: "goto", target: "BACKUP_LOAD_AUTO", description: "Abre a tela LOAD AUTO BACKUP DATA para recuperar um dos 5 backups automáticos internos." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "LOAD", action: "confirm_action", confirmMsg: "Backup completo carregado do Cartão SD!", description: "Carrega o backup selecionado do cartão SD (pede confirmação OK)." }
    ],
    items: [
      { id: "bkl_num", label: "1. Backup Number (1–99)", paramKey: "backupLoadNumber", type: "int", min: 1, max: 99, defaultVal: 1, row: 1, col: 1, explanation: "Seleciona o número do backup no cartão SD (1 a 99)." },
      { id: "bkl_us", label: "2. With User Samples", paramKey: "backupLoadWithSamples", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Seleciona se os User Samples também serão carregados (sobrescreve os atuais)." },
      { id: "bkl_exp", label: "3. With Instrument Expansion Slots", paramKey: "backupLoadWithExpSlots", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 3, col: 1, explanation: "Seleciona se as atribuições dos Slots de Expansão 1–6 serão carregadas." }
    ]
  },

  BACKUP_LOAD_AUTO: {
    id: "BACKUP_LOAD_AUTO",
    title: "LOAD AUTO BACKUP DATA (Recuperar Backup Automático)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > BACKUP",
    accessPath: "Em MENU > BACKUP > LOAD, pressione [F1] (LOAD AUTO BACKUP).",
    visualDescription:
      "Exibe a lista de até 5 conjuntos de Auto Backup Data criados automaticamente quando o V31 é desligado (1: Mais recente a 5: Mais antigo). " +
      "Use [▲]/[▼] ou o Disco para selecionar, [F5] (CLEAR ALL) para limpar todos os auto backups, ou [F6] (LOAD) para restaurar.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "CLEAR ALL", action: "confirm_action", confirmMsg: "Todos os dados de Auto Backup foram apagados.", description: "Apaga todos os conjuntos de backup automático." },
      { num: 6, label: "LOAD", action: "confirm_action", confirmMsg: "Auto Backup restaurado com sucesso!", description: "Carrega o Auto Backup selecionado." }
    ],
    items: [
      { id: "bkla_sel", label: "Auto Backup Number (1 a 5)", paramKey: "autoBackupSelect", type: "enum", options: ["1: Auto Backup Data (New)", "2: Auto Backup Data", "3: Auto Backup Data", "4: Auto Backup Data", "5: Auto Backup Data (Old)"], defaultVal: "1: Auto Backup Data (New)", row: 1, col: 1, explanation: "Seleciona qual dos 5 backups automáticos deseja restaurar." }
    ]
  },

  BACKUP_DELETE: {
    id: "BACKUP_DELETE",
    title: "SD CARD DELETE ALL (Excluir Backup do Cartão SD)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > BACKUP",
    accessPath: "Pressione [MENU] > BACKUP (Linha 3) > Seta Direita 3x até DELETE (Linha 1, Coluna 3) > [ENTER].",
    visualDescription:
      "Seleciona 'Backup Number' (1 a 99) salvo no cartão SD e pressiona [F6] (DELETE) para excluir.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "DELETE", action: "confirm_action", confirmMsg: "Backup excluído do Cartão SD.", description: "Exclui os dados de backup selecionados do cartão SD." }
    ],
    items: [
      { id: "bkd_num", label: "Backup Number para Excluir (1–99)", paramKey: "backupDeleteNumber", type: "int", min: 1, max: 99, defaultVal: 1, row: 1, col: 1, explanation: "Seleciona o número do backup no cartão SD que deseja excluir (1 a 99)." }
    ]
  },

  BACKUP_SAVE_1KIT: {
    id: "BACKUP_SAVE_1KIT",
    title: "SD CARD SAVE 1 KIT (Salvar 1 Drum Kit no Cartão SD)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > BACKUP",
    accessPath: "Pressione [MENU] > BACKUP (Linha 3) > Seta Direita 4x até SAVE 1 KIT (Linha 1, Coluna 4) > [ENTER] (ou via KIT > [F5] TOOLS > SAVE 1 KIT).",
    visualDescription:
      "Salva as configurações de um único drum kit no cartão SD (até 999 arquivos). " +
      "Lista vertical de 3 parâmetros: " +
      "Linha 1: Backup Kit (001 a 200 — kit de origem no V31). " +
      "Linha 2: With User Samples (OFF / ON). " +
      "Linha 3: Backup Number (001 a 999 — slot de destino no cartão SD). " +
      "Pressione [F6] (SAVE) para salvar.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "SAVE", action: "confirm_action", confirmMsg: "Drum Kit individual salvo no Cartão SD!", description: "Salva o kit selecionado no cartão SD." }
    ],
    items: [
      { id: "bks1_kit", label: "1. Backup Kit (Kit de Origem 001–200)", paramKey: "save1KitSource", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 1, col: 1, explanation: "Seleciona o drum kit do V31 que você quer salvar no cartão SD." },
      { id: "bks1_us", label: "2. With User Samples", paramKey: "save1KitWithSamples", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 2, col: 1, explanation: "Define se os User Samples usados no kit também são salvos (1 seta para baixo)." },
      { id: "bks1_num", label: "3. Backup Number (Slot no Cartão SD 001–999)", paramKey: "save1KitNumber", type: "int", min: 1, max: 999, defaultVal: 1, row: 3, col: 1, explanation: "Seleciona o número de arquivo de backup de kit no cartão SD (1 a 999 — 2 setas para baixo)." }
    ]
  },

  BACKUP_LOAD_1KIT: {
    id: "BACKUP_LOAD_1KIT",
    title: "SD CARD LOAD 1 KIT (Carregar 1 Drum Kit do Cartão SD)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > BACKUP",
    accessPath: "Pressione [MENU] > BACKUP (Linha 3) > Seta Direita 1x, Seta Baixo 1x até LOAD 1 KIT (Linha 2, Coluna 1) > [ENTER] (ou via KIT > [F5] TOOLS > LOAD 1 KIT).",
    visualDescription:
      "Carrega um drum kit individual salvo no cartão SD (inclusive kits salvos nos módulos V51 e V71!). " +
      "Lista vertical de 3 parâmetros: " +
      "Linha 1: Backup Number (001 a 999). " +
      "Linha 2: With User Samples (OFF / ON). " +
      "Linha 3: Destination Kit (001 a 200 — kit de destino no V31). " +
      "No rodapé: [F1] (PRODUCT) seleciona se o arquivo no cartão SD veio do V31, V51 ou V71; [F6] (LOAD) carrega o kit.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "PRODUCT (V31/V51/V71)", action: "announce", message: "Janela PRODUCT: escolha entre V31, V51 ou V71 para carregar backups de kit de outros módulos da série V.", description: "Seleciona o modelo de produto (V31, V51 ou V71) do backup de kit." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "LOAD", action: "confirm_action", confirmMsg: "Drum Kit individual carregado do Cartão SD!", description: "Carrega o kit selecionado do cartão SD para o Destination Kit." }
    ],
    items: [
      { id: "bkl1_num", label: "1. Backup Number (001–999)", paramKey: "load1KitNumber", type: "int", min: 1, max: 999, defaultVal: 1, row: 1, col: 1, explanation: "Seleciona o número do arquivo de kit no cartão SD (1 a 999)." },
      { id: "bkl1_us", label: "2. With User Samples", paramKey: "load1KitWithSamples", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 2, col: 1, explanation: "Define se os User Samples do arquivo também serão carregados (1 seta para baixo)." },
      { id: "bkl1_dst", label: "3. Destination Kit (001–200)", paramKey: "load1KitDest", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 3, col: 1, explanation: "Seleciona em qual Drum Kit do V31 (001 a 200) os dados serão carregados (2 setas para baixo)." }
    ]
  },

  BACKUP_DELETE_1KIT: {
    id: "BACKUP_DELETE_1KIT",
    title: "SD CARD DELETE 1 KIT (Excluir Backup de 1 Kit do Cartão SD)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > BACKUP",
    accessPath: "Pressione [MENU] > BACKUP (Linha 3) > Seta Direita 2x, Seta Baixo 1x até DEL 1 KIT (Linha 2, Coluna 2) > [ENTER].",
    visualDescription:
      "Seleciona 'Backup Number' (001 a 999) e pressiona [F6] (DELETE) para excluir o backup de 1 kit do cartão SD.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "DELETE", action: "confirm_action", confirmMsg: "Backup de 1 Kit excluído do Cartão SD.", description: "Exclui o backup de kit selecionado do cartão SD." }
    ],
    items: [
      { id: "bkd1_num", label: "Backup Number para Excluir (001–999)", paramKey: "delete1KitNumber", type: "int", min: 1, max: 999, defaultVal: 1, row: 1, col: 1, explanation: "Seleciona o número do backup de kit (1 a 999) que deseja excluir." }
    ]
  },

  BACKUP_FORMAT: {
    id: "BACKUP_FORMAT",
    title: "SD CARD FORMAT (Formatar Cartão SD)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > BACKUP",
    accessPath: "Pressione [MENU] > BACKUP (Linha 3) > Seta Direita 3x, Seta Baixo 1x até FORMAT (Linha 2, Coluna 3) > [ENTER].",
    visualDescription:
      "Exibe o aviso: 'Format SD card. All data in SD card will be deleted.' " +
      "Pressione [F6] (FORMAT) para abrir a caixa de confirmação ('Format SD card. Are you sure? CANCEL / OK').",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "FORMAT", action: "confirm_action", confirmMsg: "Cartão SD formatado com sucesso (pastas EXPORT, IMPORT e Roland/V31 criadas)!", description: "Inicia a formatação do cartão SD (pede confirmação OK)." }
    ],
    items: [
      { id: "bkf_info", label: "Aviso de Formatação", type: "readonly", defaultVal: "Format SD card. All data in SD card will be deleted. Pressione [F6] (FORMAT).", row: 1, col: 1, explanation: "Pressione [F6] (tecla 6) para formatar o cartão SD." }
    ]
  },

  BACKUP_INFO: {
    id: "BACKUP_INFO",
    title: "SD CARD INFORMATION (Status de Uso do Cartão SD)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > BACKUP",
    accessPath: "Pressione [MENU] > BACKUP (Linha 3) > Seta Direita 4x, Seta Baixo 1x até INFO (Linha 2, Coluna 4) > [ENTER].",
    visualDescription:
      "Mostra a tabela 'Number of Backup Data' com 2 linhas informativas: " +
      "Linha 1: ALL — Used 1 / Total 99 (backups completos salvos). " +
      "Linha 2: 1KIT — Used 1 / Total 999 (backups de kits individuais salvos).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "bki_all", label: "ALL (Backups Completos Salvos)", type: "readonly", defaultVal: "1 / 99", row: 1, col: 1, explanation: "Quantidade de backups completos salvos no cartão SD (máximo 99)." },
      { id: "bki_1kit", label: "1 KIT (Backups de Kits Individuais Salvos)", type: "readonly", defaultVal: "1 / 999", row: 2, col: 1, explanation: "Quantidade de backups de 1 kit salvos no cartão SD (máximo 999)." }
    ]
  },

  // ==================== MENU > COPY (10 TELAS) ====================
  COPY_KIT: {
    id: "COPY_KIT",
    title: "COPY KIT (Copiar ou Trocar Drum Kit: USER / PRESET / SD CARD)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > Seta Baixo 3x até COPY (Linha 4) > Seta Direita 1x até KIT (Linha 1, Coluna 1) > [ENTER] (ou via KIT > [F5] TOOLS > COPY KIT).",
    visualDescription:
      "Copia ou troca um drum kit inteiro. " +
      "No rodapé esquerdo, as abas [F1] USER, [F2] PRESET e [F3] SD CARD escolhem de onde vem o kit de origem (SOURCE): " +
      "- Aba [F1] USER: Copia da memória do usuário (permite também trocar os dois kits com [F5] EXCHANGE). " +
      "- Aba [F2] PRESET: Copia da memória predefinida de fábrica (use esta opção para restaurar um único drum kit para o padrão de fábrica!). " +
      "- Aba [F3] SD CARD: Copia de um arquivo de backup salvo no cartão SD (inclui Backup Number e With User Samples). " +
      "No centro da tela há duas listas temporárias e independentes: Linha 1 = SOURCE (Kit de Origem 001–200), Linha 2 = DESTINATION (Kit de Destino do Usuário 001–200). " +
      "Girar o Disco [+]/[-] em qualquer uma das duas listas altera apenas aquela lista temporária, sem alterar a outra e sem modificar a lista principal do módulo. " +
      "Ao pressionar [F6] (COPY — tecla 6) ou [F5] (EXCHANGE — tecla 5), abre-se a tela de confirmação ('Are you sure? CANCEL / OK'): pressione Seta Direita [►] até OK e pressione [ENTER] para efetivar a cópia/troca na lista original.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "USER", action: "set_copy_src", src: "USER", description: "Define a memória do usuário (USER) como origem da cópia." },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Define as predefinições de fábrica (PRESET) como origem — útil para restaurar 1 kit de fábrica!" },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Define um backup do cartão SD como origem da cópia." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "EXCHANGE", action: "confirm_action", opType: "exchange_kit", confirmMsg: "Os dois Drum Kits (Source e Destination) foram trocados de posição!", description: "Abre a tela de confirmação (CANCEL / OK) para trocar os dois kits de lugar (disponível apenas na aba USER)." },
      { num: 6, label: "COPY", action: "confirm_action", opType: "copy_kit", confirmMsg: "Drum Kit copiado de SOURCE para DESTINATION com sucesso!", description: "Abre a tela de confirmação (CANCEL / OK) para copiar o Drum Kit de SOURCE para DESTINATION." }
    ],
    items: [
      { id: "cpk_src", label: "1. SOURCE — Kit de Origem (Lista Temporária)", paramKey: "copySourceKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 1, col: 1, explanation: "Seleciona o Drum Kit de origem (001 a 200) de forma independente." },
      { id: "cpk_dst", label: "2. DESTINATION — Kit de Destino (Lista Temporária)", paramKey: "copyDestKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 2, col: 1, explanation: "Seleciona o Drum Kit do usuário de destino (001 a 200) de forma independente (1 seta para baixo)." }
    ]
  },

  COPY_PAD_INST: {
    id: "COPY_PAD_INST",
    title: "COPY PAD INST (Copiar Instrumentos de um Pad para Outro)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > COPY (Linha 4) > Seta Direita 2x até PAD INST (Linha 1, Coluna 2) > [ENTER].",
    visualDescription:
      "Copia ou troca as configurações de instrumento de um pad específico (SOURCE: Kit + Pad) para outro pad (DESTINATION: Kit + Pad). " +
      "Abas de origem: [F1] USER, [F2] PRESET, [F3] SD CARD. Botões de ação: [F4] PREVIEW, [F5] EXCHANGE (apenas USER), [F6] COPY.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "USER", action: "set_copy_src", src: "USER", description: "Origem: memória do usuário." },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Origem: memória de fábrica." },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Origem: backup do cartão SD." },
      { num: 4, label: "PREVIEW", action: "announce", message: "Modo PREVIEW ativo: toque nos pads para testar o som antes de confirmar com OK.", description: "Permite testar o som antes de confirmar a cópia." },
      { num: 5, label: "EXCHANGE", action: "confirm_action", confirmMsg: "Instrumentos dos dois pads trocados com sucesso!", description: "Troca os instrumentos entre os dois pads (apenas USER)." },
      { num: 6, label: "COPY", action: "confirm_action", confirmMsg: "Instrumento do pad copiado com sucesso!", description: "Copia os dados do pad Source para o pad Destination." }
    ],
    items: [
      { id: "cpp_srckit", label: "SOURCE - Kit (001–200)", paramKey: "copySourceKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 1, col: 1, explanation: "Kit de origem." },
      { id: "cpp_srcpad", label: "SOURCE - Pad", paramKey: "copySourcePad", type: "enum", options: ["KICK", "SNARE", "TOM1", "TOM2", "TOM3", "HI-HAT", "CRASH1", "CRASH2", "RIDE", "AUX"], defaultVal: "KICK", row: 1, col: 2, explanation: "Pad de origem (1 seta à direita)." },
      { id: "cpp_dstkit", label: "DESTINATION - Kit (001–200)", paramKey: "copyDestKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 2, col: 1, explanation: "Kit de destino (1 seta para baixo)." },
      { id: "cpp_dstpad", label: "DESTINATION - Pad", paramKey: "copyDestPad", type: "enum", options: ["KICK", "SNARE", "TOM1", "TOM2", "TOM3", "HI-HAT", "CRASH1", "CRASH2", "RIDE", "AUX"], defaultVal: "KICK", row: 2, col: 2, explanation: "Pad de destino (1 seta para baixo e 1 à direita)." }
    ]
  },

  COPY_INST_SET: {
    id: "COPY_INST_SET",
    title: "COPY PAD INST SET (Copiar Conjunto de Instrumentos)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > COPY (Linha 4) > Seta Direita 3x até INST SET (Linha 1, Coluna 3) > [ENTER].",
    visualDescription:
      "Copia um grupo inteiro de instrumentos de um kit para outro: KICK/SNR (Bumbo e Caixa), ALL TOMS (Toms 1–3), CYM SET (Chimbal, Crashes 1–2 e Ride) ou ALL AUX. " +
      "No centro da tela há 7 caixas de seleção para escolher exatamente quais camadas de ajustes serão copiadas: " +
      "All (tudo), Inst/VEdit, Layer Transient, Layer EQ, Pad EQ, Pad Comp e Pad Other (roteamento e envio BUS FX). " +
      "No rodapé: [F1] USER, [F2] PRESET, [F3] SD CARD, [F4] PREVIEW, [F5] EXCHANGE, [F6] COPY.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "USER", action: "set_copy_src", src: "USER", description: "Origem: memória do usuário." },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Origem: predefinição de fábrica." },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Origem: backup do cartão SD." },
      { num: 4, label: "PREVIEW", action: "announce", message: "Janela PREVIEW: toque nos pads para audicionar o conjunto antes de confirmar.", description: "Audiciona o conjunto copiado." },
      { num: 5, label: "EXCHANGE", action: "confirm_action", confirmMsg: "Conjunto de instrumentos permutado com sucesso!", description: "Troca os conjuntos entre os dois kits (apenas USER)." },
      { num: 6, label: "COPY", action: "confirm_action", confirmMsg: "Conjunto de instrumentos (INST SET) copiado com sucesso!", description: "Executa a cópia do conjunto de instrumentos." }
    ],
    items: [
      { id: "cis_srckit", label: "SOURCE - Kit (001–200)", paramKey: "copySourceKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 1, col: 1, explanation: "Kit de origem." },
      { id: "cis_set", label: "SOURCE - Conjunto (KICK/SNR, ALL TOMS, CYM SET, ALL AUX)", paramKey: "copyInstSetGroup", type: "enum", options: ["KICK/SNR (Bumbo e Caixa)", "ALL TOMS (TOM1 a TOM3)", "CYM SET (HI-HAT, CRASH1, CRASH2, RIDE)", "ALL AUX (AUX / Pads Virtuais)"], defaultVal: "KICK/SNR (Bumbo e Caixa)", row: 1, col: 2, explanation: "Conjunto de pads que será copiado (1 seta à direita)." },
      { id: "cis_all", label: "Filtro: All (Marcar Todos)", paramKey: "copyTargetAll", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Marca todas as 6 categorias de parâmetros abaixo." },
      { id: "cis_vedit", label: "Filtro: Inst/VEdit", paramKey: "copyTargetVEdit", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 2, explanation: "Copia Instrumento, V-EDIT, volume e envio de ambiência." },
      { id: "cis_tr", label: "Filtro: Layer Transient", paramKey: "copyTargetTransient", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 3, col: 2, explanation: "Copia configurações de ataque/liberação da camada." },
      { id: "cis_leq", label: "Filtro: Layer EQ", paramKey: "copyTargetLayerEq", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 4, col: 2, explanation: "Copia equalizador da camada." },
      { id: "cis_peq", label: "Filtro: Pad EQ", paramKey: "copyTargetPadEq", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 3, explanation: "Copia equalizador do pad." },
      { id: "cis_pcomp", label: "Filtro: Pad Comp", paramKey: "copyTargetPadComp", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 3, col: 3, explanation: "Copia compressor do pad." },
      { id: "cis_poth", label: "Filtro: Pad Other (BUS FX Send/Routing)", paramKey: "copyTargetPadOther", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 4, col: 3, explanation: "Copia envio e roteamento de BUS FX e outras opções do pad." },
      { id: "cis_dstkit", label: "DESTINATION - Kit (001–200)", paramKey: "copyDestKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 5, col: 1, explanation: "Kit de destino." }
    ]
  },

  COPY_VOL_PAN: {
    id: "COPY_VOL_PAN",
    title: "COPY VOL/PAN (Copiar Volume e Panorâmico de Outro Kit)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > COPY (Linha 4) > Seta Direita 4x até VOL/PAN (Linha 1, Coluna 4) > [ENTER].",
    visualDescription: "Copia todas as configurações de VOLUME/PAN de um kit (SOURCE) para outro (DESTINATION). Abas [F1] USER, [F2] PRESET, [F3] SD CARD e botão [F6] COPY.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "USER", action: "set_copy_src", src: "USER", description: "Origem: Usuário." },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Origem: Fábrica." },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Origem: Cartão SD." },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "EXCHANGE", action: "confirm_action", confirmMsg: "Configurações de VOL/PAN permutadas!", description: "Troca entre os dois kits." },
      { num: 6, label: "COPY", action: "confirm_action", confirmMsg: "Configurações de VOL/PAN copiadas com sucesso!", description: "Executa a cópia de VOL/PAN." }
    ],
    items: [
      { id: "cvp_src", label: "1. SOURCE Kit (001–200)", paramKey: "copySourceKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 1, col: 1, explanation: "Kit de origem para copiar VOL/PAN." },
      { id: "cvp_dst", label: "2. DESTINATION Kit (001–200)", paramKey: "copyDestKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 2, col: 1, explanation: "Kit de destino (1 seta para baixo)." }
    ]
  },

  COPY_AMBIENCE: {
    id: "COPY_AMBIENCE",
    title: "COPY AMBIENCE (Copiar Ambiência de Outro Kit)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > COPY (Linha 4) > Seta Direita 1x, Seta Baixo 1x até AMBIENCE (Linha 2, Coluna 1) > [ENTER].",
    visualDescription: "Copia as configurações de AMBIENCE (Overhead, Room, Reverb e Kit Resonance) de um kit SOURCE para um kit DESTINATION.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "USER", action: "set_copy_src", src: "USER", description: "Origem: Usuário." },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Origem: Fábrica." },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Origem: Cartão SD." },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "EXCHANGE", action: "confirm_action", confirmMsg: "Ambiência permutada entre os kits!", description: "Troca a ambiência entre os dois kits." },
      { num: 6, label: "COPY", action: "confirm_action", confirmMsg: "Configurações de AMBIENCE copiadas com sucesso!", description: "Executa a cópia da Ambiência." }
    ],
    items: [
      { id: "camb_src", label: "1. SOURCE Kit (001–200)", paramKey: "copySourceKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 1, col: 1, explanation: "Kit de origem da Ambiência." },
      { id: "camb_dst", label: "2. DESTINATION Kit (001–200)", paramKey: "copyDestKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 2, col: 1, explanation: "Kit de destino da Ambiência (1 seta para baixo)." }
    ]
  },

  COPY_BUS_FX: {
    id: "COPY_BUS_FX",
    title: "COPY BUS FX (Copiar Efeitos de Barramento de Outro Kit)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > COPY (Linha 4) > Seta Direita 2x, Seta Baixo 1x até BUS FX (Linha 2, Coluna 2) > [ENTER].",
    visualDescription: "Copia todas as configurações de BUS FX (BUS A–D, Side Chain e Bus Reverb) de um kit SOURCE para um kit DESTINATION.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "USER", action: "set_copy_src", src: "USER", description: "Origem: Usuário." },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Origem: Fábrica." },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Origem: Cartão SD." },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "EXCHANGE", action: "confirm_action", confirmMsg: "BUS FX permutado entre os dois kits!", description: "Troca o BUS FX entre os dois kits." },
      { num: 6, label: "COPY", action: "confirm_action", confirmMsg: "Configurações de BUS FX copiadas com sucesso!", description: "Executa a cópia de BUS FX." }
    ],
    items: [
      { id: "cbfx_src", label: "1. SOURCE Kit (001–200)", paramKey: "copySourceKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 1, col: 1, explanation: "Kit de origem do BUS FX." },
      { id: "cbfx_dst", label: "2. DESTINATION Kit (001–200)", paramKey: "copyDestKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 2, col: 1, explanation: "Kit de destino do BUS FX (1 seta para baixo)." }
    ]
  },

  COPY_OUTPUT: {
    id: "COPY_OUTPUT",
    title: "COPY OUTPUT (Copiar Configurações de Saída)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > COPY (Linha 4) > Seta Direita 3x, Seta Baixo 1x até OUTPUT (Linha 2, Coluna 3) > [ENTER].",
    visualDescription: "Copia as configurações de saída (OUTPUT) a partir da memória predefinida (PRESET) ou de um backup no cartão SD (SD CARD).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "" },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Origem: Fábrica." },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Origem: Backup do Cartão SD." },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "---", action: "none", description: "" },
      { num: 6, label: "COPY", action: "confirm_action", confirmMsg: "Configurações de OUTPUT copiadas com sucesso!", description: "Restaura/copia as configurações de OUTPUT." }
    ],
    items: [
      { id: "cout_src", label: "SOURCE (PRESET ou SD Card Backup 1–99)", paramKey: "copyOutputSource", type: "enum", options: ["PRESET (Padrão de Fábrica)", "SD Card Backup 1: V31Backup"], defaultVal: "PRESET (Padrão de Fábrica)", row: 1, col: 1, explanation: "Origem das configurações de saída." }
    ]
  },

  COPY_SET_LIST: {
    id: "COPY_SET_LIST",
    title: "COPY SET LIST (Copiar ou Trocar Bancos de Set List)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > COPY (Linha 4) > Seta Direita 4x, Seta Baixo 1x até SET LIST (Linha 2, Coluna 4) > [ENTER].",
    visualDescription: "Copia ou troca bancos de Set List (1 a 32) entre USER, PRESET ou SD CARD.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "USER", action: "set_copy_src", src: "USER", description: "Origem: Usuário." },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Origem: Fábrica." },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Origem: Cartão SD." },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "EXCHANGE", action: "confirm_action", confirmMsg: "Bancos de Set List trocados de posição!", description: "Permuta os dois bancos de Set List." },
      { num: 6, label: "COPY", action: "confirm_action", confirmMsg: "Banco de Set List copiado com sucesso!", description: "Executa a cópia do Set List." }
    ],
    items: [
      { id: "csl_src", label: "1. SOURCE Set List Bank (1–32)", paramKey: "copySetListSrc", type: "int", min: 1, max: 32, defaultVal: 1, row: 1, col: 1, explanation: "Banco de Set List de origem (1 a 32)." },
      { id: "csl_dst", label: "2. DESTINATION Set List Bank (1–32)", paramKey: "copySetListDst", type: "int", min: 1, max: 32, defaultVal: 6, row: 2, col: 1, explanation: "Banco de Set List de destino (1 a 32 — 1 seta para baixo)." }
    ]
  },

  COPY_TRIG_BANK: {
    id: "COPY_TRIG_BANK",
    title: "COPY TRIG BANK (Copiar Banco de Acionadores 1–16)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > COPY (Linha 4) > Seta Direita 1x, Seta Baixo 2x até TRIG BANK (Linha 3, Coluna 1) > [ENTER].",
    visualDescription: "Copia ou troca um Banco de Acionadores inteiro (Trigger Bank 1 a 16) entre USER, PRESET ou SD CARD.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "USER", action: "set_copy_src", src: "USER", description: "Origem: Usuário." },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Origem: Fábrica." },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Origem: Cartão SD." },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "EXCHANGE", action: "confirm_action", confirmMsg: "Bancos de Acionadores permutados!", description: "Troca os dois bancos de acionadores." },
      { num: 6, label: "COPY", action: "confirm_action", confirmMsg: "Trigger Bank copiado com sucesso!", description: "Copia o banco de acionadores." }
    ],
    items: [
      { id: "ctb_src", label: "1. SOURCE Trigger Bank (1–16)", paramKey: "copyTrigBankSrc", type: "int", min: 1, max: 16, defaultVal: 2, row: 1, col: 1, explanation: "Banco de Acionadores de origem (1 a 16)." },
      { id: "ctb_dst", label: "2. DESTINATION Trigger Bank (1–16)", paramKey: "copyTrigBankDst", type: "int", min: 1, max: 16, defaultVal: 3, row: 2, col: 1, explanation: "Banco de Acionadores de destino (1 a 16 — 1 seta para baixo)." }
    ]
  },

  COPY_TRIG_PRM: {
    id: "COPY_TRIG_PRM",
    title: "COPY TRIG PRM (Copiar Parâmetros de Acionador de um Pad)",
    manualSectionId: "copy-backup-setlist-snapshot",
    category: "MENU > COPY",
    accessPath: "Pressione [MENU] > COPY (Linha 4) > Seta Direita 2x, Seta Baixo 2x até TRIG PRM (Linha 3, Coluna 2) > [ENTER].",
    visualDescription: "Copia os parâmetros de acionador (Trigger Parameters) de uma entrada de pad (SOURCE: Bank + Pad) para outra (DESTINATION: Bank + Pad).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "USER", action: "set_copy_src", src: "USER", description: "Origem: Usuário." },
      { num: 2, label: "PRESET", action: "set_copy_src", src: "PRESET", description: "Origem: Fábrica." },
      { num: 3, label: "SD CARD", action: "set_copy_src", src: "SD CARD", description: "Origem: Cartão SD." },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "EXCHANGE", action: "confirm_action", confirmMsg: "Parâmetros de acionador trocados entre os pads!", description: "Troca os parâmetros entre os dois pads." },
      { num: 6, label: "COPY", action: "confirm_action", confirmMsg: "Parâmetros de acionador copiados com sucesso!", description: "Copia os parâmetros de acionador." }
    ],
    items: [
      { id: "ctp_srcb", label: "SOURCE - Trigger Bank (1–16)", paramKey: "copyTrigBankSrc", type: "int", min: 1, max: 16, defaultVal: 2, row: 1, col: 1, explanation: "Banco de origem." },
      { id: "ctp_srcp", label: "SOURCE - Trigger Input", paramKey: "copyTrigPadSrc", type: "enum", options: ["KICK", "SNARE", "TOM1", "TOM2", "TOM3", "HI-HAT", "CRASH1", "CRASH2", "RIDE", "AUX/TOM4"], defaultVal: "TOM1", row: 1, col: 2, explanation: "Entrada de acionador de origem." },
      { id: "ctp_dstb", label: "DESTINATION - Trigger Bank (1–16)", paramKey: "copyTrigBankDst", type: "int", min: 1, max: 16, defaultVal: 2, row: 2, col: 1, explanation: "Banco de destino." },
      { id: "ctp_dstp", label: "DESTINATION - Trigger Input", paramKey: "copyTrigPadDst", type: "enum", options: ["KICK", "SNARE", "TOM1", "TOM2", "TOM3", "HI-HAT", "CRASH1", "CRASH2", "RIDE", "AUX/TOM4"], defaultVal: "TOM2", row: 2, col: 2, explanation: "Entrada de acionador de destino." }
    ]
  }
});

Object.assign(window.V31_SCREENS, {
  // ==================== MENU > SYSTEM ====================
  SYSTEM_WIFI: {
    id: "SYSTEM_WIFI",
    title: "Wi-Fi (Conexão Sem Fio ao Roland Cloud Connect)",
    manualSectionId: "system-wifi-bt-audio-midi",
    category: "MENU > SYSTEM",
    accessPath: "Pressione [MENU] > Seta Baixo 4x até SYSTEM (Linha 5) > Seta Direita 1x até Wi-Fi (Linha 1, Coluna 1) > [ENTER].",
    visualDescription:
      "Mostra o status do Wi-Fi ('Ready to setup' / 'Connected'), o parâmetro 'Time Zone' (UTC-12:00 a +14:00), informações de rede (MAC, SSID, RSSI, TIME) à esquerda, e o QR Code do aplicativo Roland Cloud Connect à direita. " +
      "No rodapé: [F1] RESET (redefine as configurações de Wi-Fi), [SHIFT]+[F1] SETUP (inicia a configuração via app Roland Cloud Connect), [F2] MANUAL (mostra QR code para o site de suporte), [F6] Wi-Fi (ON/OFF).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "RESET", action: "confirm_action", confirmMsg: "Configurações de Wi-Fi redefinidas.", description: "Redefine as configurações de Wi-Fi para trocar de roteador/ponto de acesso." },
      { num: 2, label: "MANUAL", action: "announce", message: "Tela de código 2D (QR Code) aberta apontando para https://www.roland.com/support/by_product/v31/owners_manuals/", description: "Mostra o código 2D de acesso rápido ao manual e suporte do V31." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "Wi-Fi (ON/OFF)", action: "toggle_param", paramKey: "wifiSw", description: "Liga (ON) ou desliga (OFF) o Wi-Fi do V31." }
    ],
    shiftFButtons: [
      { num: 1, label: "SETUP (Roland Cloud Connect)", action: "announce", message: "Modo Wi-Fi SETUP iniciado: abra o app Roland Cloud Connect no smartphone para conectar o V31 à sua rede Wi-Fi.", description: "[SHIFT]+[F1]: Inicia o pareamento de rede pelo app Roland Cloud Connect." }
    ],
    items: [
      { id: "wf_tz", label: "Time Zone (Fuso Horário)", paramKey: "wifiTimeZone", type: "enum", options: ["UTC-12:00", "UTC-08:00", "UTC-05:00", "UTC-04:00", "UTC-03:00 (Brasília)", "UTC+00:00 (UTC)", "UTC+01:00", "UTC+09:00 (Tokyo)", "UTC+14:00"], defaultVal: "UTC-03:00 (Brasília)", row: 1, col: 1, explanation: "Define o fuso horário da sua região (UTC-12:00 a +14:00)." },
      { id: "wf_sw", label: "Wi-Fi Switch (F6)", paramKey: "wifiSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Estado do módulo Wi-Fi (pressione [F6] para alternar)." }
    ]
  },

  SYSTEM_BLUETOOTH: {
    id: "SYSTEM_BLUETOOTH",
    title: "Bluetooth (Áudio Bluetooth e Bluetooth MIDI)",
    manualSectionId: "system-wifi-bt-audio-midi",
    category: "MENU > SYSTEM",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 2x até Bluetooth (Linha 1, Coluna 2) > [ENTER].",
    visualDescription:
      "Configura o Bluetooth Audio e Bluetooth MIDI do V31. " +
      "No centro esquerdo há uma lista vertical de 3 parâmetros: " +
      "Linha 1: Mix In/Bluetooth Audio Gain (0dB, +6dB, +12dB). " +
      "Linha 2: Bluetooth MIDI (OFF, ON). " +
      "Linha 3: Device ID (OFF, 1 a 99 — número anexado ao nome 'V31 AUDIO' / 'V31 MIDI'; pressione [F5] SET DEVICE ID após alterar). " +
      "No rodapé: [F1] PAIRING (inicia o pareamento de áudio Bluetooth por 30s), [F2] |<< (início/música anterior no smartphone), [F3] ►/■ (tocar/pausar música no smartphone), [F4] >>| (próxima música no smartphone), [F5] SET DEVICE ID, [F6] Bluetooth (ON/OFF).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "PAIRING", action: "announce", message: "Now Pairing... Selecione 'V31 AUDIO' nas configurações de Bluetooth do seu smartphone. Conectado: Completed (AUDIO)!", description: "Inicia o modo de pareamento Bluetooth com o smartphone." },
      { num: 2, label: "|<< (Anterior)", action: "announce", message: "Comando Bluetooth AVRCP enviado: Voltar ao início / Música anterior no smartphone.", description: "Volta para o início da música ou música anterior no smartphone." },
      { num: 3, label: "►/■ (Play/Stop)", action: "announce", message: "Comando Bluetooth AVRCP enviado: Reproduzir / Pausar música no smartphone.", description: "Toca ou pausa a música reproduzida no smartphone conectado." },
      { num: 4, label: ">>| (Próxima)", action: "announce", message: "Comando Bluetooth AVRCP enviado: Próxima música no smartphone.", description: "Avança para a próxima música no smartphone." },
      { num: 5, label: "SET DEVICE ID", action: "announce", message: "Novo Device ID salvo e aplicado ao nome Bluetooth do V31.", description: "Aplica a alteração do Device ID." },
      { num: 6, label: "Bluetooth (ON/OFF)", action: "toggle_param", paramKey: "bluetoothSw", description: "Liga (ON) ou desliga (OFF) a funcionalidade Bluetooth do V31." }
    ],
    items: [
      { id: "bt_gain", label: "1. Mix In/Bluetooth Audio Gain", paramKey: "mixInBtGain", type: "enum", options: ["0dB", "+6dB", "+12dB"], defaultVal: "0dB", row: 1, col: 1, explanation: "Ajusta o ganho de volume da entrada MIX IN e do áudio Bluetooth (0, +6, +12 dB)." },
      { id: "bt_midi", label: "2. Bluetooth MIDI", paramKey: "bluetoothMidiSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Liga (ON) ou desliga (OFF) o Bluetooth MIDI (conecte a 'V31 MIDI' dentro do app musical — 1 seta para baixo)." },
      { id: "bt_id", label: "3. Device ID", paramKey: "bluetoothDeviceId", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "10", "99"], defaultVal: "OFF", row: 3, col: 1, explanation: "Define um número identificador para diferenciar múltiplos módulos V31 no mesmo local (2 setas para baixo)." }
    ]
  },

  SYSTEM_AUDIO_IN: {
    id: "SYSTEM_AUDIO_IN",
    title: "AUDIO INPUT GAIN (Ganho de Entrada MIX IN e Bluetooth)",
    manualSectionId: "system-wifi-bt-audio-midi",
    category: "MENU > SYSTEM",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 3x até AUDIO IN (Linha 1, Coluna 3) > [ENTER].",
    visualDescription: "Tela com 1 parâmetro central: 'Mix In/Bluetooth Audio Gain' (0dB, +6dB, +12dB). Gire o Disco para ajustar.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "" },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "---", action: "none", description: "" },
      { num: 6, label: "---", action: "none", description: "" }
    ],
    items: [
      { id: "ain_gain", label: "Mix In/Bluetooth Audio Gain", paramKey: "mixInBtGain", type: "enum", options: ["0dB", "+6dB", "+12dB"], defaultVal: "0dB", row: 1, col: 1, explanation: "Define o nível de ganho para o conector MIX IN (estéreo) e para o áudio Bluetooth (0, +6 ou +12 dB)." }
    ]
  },

  TRIGGER_BANK: {
    id: "TRIGGER_BANK",
    title: "TRIGGER - BANK (Bancos de Acionadores e Modelos de Pad)",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 4x até TRIGGER (Linha 1, Coluna 4) > [ENTER] > [F1] (BANK).",
    visualDescription:
      "Configura o Banco de Acionadores (Bank No. 1 a 16, ex: '02 TD316'), a Sensibilidade Global (Global Sens: LOW, NORMAL, HIGH) e o modelo de pad (Trig Type) conectado a cada uma das 10 entradas de acionador em uma grade de 2 colunas × 5 linhas: " +
      "Coluna 1 (Esquerda): KICK (KD-10), SNARE (PD-12P), TOM1 (PD-8H), TOM2 (PD-8H), TOM3 (PD-10H). " +
      "Coluna 2 (Direita): HI-HAT (VH-10), CRASH1 (CY-12C-T), CRASH2 (CY-12C-T), RIDE (CY-14R-T), AUX/TOM4 (CY-12C-T). " +
      "No rodapé: [F1] BANK, [F2] DIGITAL (pads USB digitais), [F3] BASIC (sensibilidade/curva/threshold), [F4] HI-HAT (calibração de chimbal), [F5] ADVANCED (Scan/Mask/Retrigger, Monitor, AUX/TOM4, DrumLink/DWe, XTalk), [F6] BANK NAME (renomeia o banco; ou [SHIFT]+[F6] DEFAULT para restaurar o banco de fábrica).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "BANK", action: "goto", target: "TRIGGER_BANK", description: "Aba atual: seleção de Trigger Bank (1–16), Global Sens e Trig Type dos 10 pads." },
      { num: 2, label: "DIGITAL", action: "goto", target: "TRIGGER_DIGITAL", description: "Muda para a aba DIGITAL PAD (atribuição e ajustes de PD-14DSX, PD-140DS, CY-18DR, VH-14D)." },
      { num: 3, label: "BASIC", action: "goto", target: "TRIGGER_BASIC", description: "Muda para a aba BASIC (Sensitivity, Threshold, Curve, Rim Gain, Head/Rim Adjust)." },
      { num: 4, label: "HI-HAT", action: "goto", target: "TRIGGER_HIHAT", description: "Muda para a aba HI-HAT (Trig Type, Offset, Foot Splash Sens, Noise Cancel, CC Max, Pressure Sens)." },
      { num: 5, label: "ADVANCED", action: "goto", target: "TRIGGER_ADVANCED", description: "Muda para a tela TRIGGER ADVANCED (Scan/Mask/Retrigger, TRIG MON, AUX/TOM4, DrumLink/DWe, XTALK)." },
      { num: 6, label: "BANK NAME", action: "goto", target: "KIT_NAME", description: "Edita o nome de 16 caracteres do Trigger Bank atual." }
    ],
    shiftFButtons: [
      { num: 6, label: "DEFAULT (Reset Bank)", action: "reset_section", description: "[SHIFT]+[F6]: Restaura o banco de acionadores selecionado para as configurações de fábrica." }
    ],
    items: [
      { id: "tb_no", label: "Bank No. (1–16)", paramKey: "trigBankNo", type: "enum", options: ["01: TD313", "02: TD316", "03: VAD316", "04: User Bank 4", "05: User Bank 5", "06: User Bank 6", "16: User Bank 16"], defaultVal: "02: TD316", row: 1, col: 1, explanation: "Número e nome do banco de acionadores (1 a 16). Na TD-316, o banco padrão é 02: TD316." },
      { id: "tb_gsens", label: "Global Sens", paramKey: "trigGlobalSens", type: "enum", options: ["LOW", "NORMAL", "HIGH"], defaultVal: "NORMAL", row: 1, col: 2, explanation: "Sensibilidade global de todos os pads (LOW para maior faixa dinâmica; HIGH para toque leve)." },
      { id: "tb_kick", label: "KICK - Trig Type", paramKey: "trigType_KICK", type: "enum", options: ["KD-10", "KD-12", "KD-18", "KD-180", "KD-180L", "KD-200", "KD-220", "KD-222", "KD-A22", "KD-140", "KD-120", "KD-85", "KD-9", "KD-8", "KDQ-8", "KT-10", "KT-9", "RT-30K"], defaultVal: "KD-10", row: 2, col: 1, explanation: "Modelo de pad conectado à entrada KICK (padrão TD-316: KD-10)." },
      { id: "tb_hh", label: "HI-HAT - Trig Type", paramKey: "trigType_HIHAT", type: "enum", options: ["VH-10", "VH-11", "VH-12", "VH-13", "VH-14D (Digital)", "CY-5", "CY-8", "CYQ-12"], defaultVal: "VH-10", row: 2, col: 2, explanation: "Modelo de chimbal conectado à entrada HI-HAT (padrão TD-316: VH-10)." },
      { id: "tb_snare", label: "SNARE - Trig Type", paramKey: "trigType_SNARE", type: "enum", options: ["PD-12P", "PD-12X", "PD-10P", "PD-10X", "PDX-12", "PDX-100", "PD-128", "PD-125X", "PDA120", "PD-14DSX (Digital)", "PD-140DS (Digital)", "RT-30HR"], defaultVal: "PD-12P", row: 3, col: 1, explanation: "Modelo de pad conectado à entrada SNARE (padrão TD-316: PD-12P com detecção posicional)." },
      { id: "tb_cr1", label: "CRASH1 - Trig Type", paramKey: "trigType_CRASH1", type: "enum", options: ["CY-12C-T", "CY-12C", "CY-14C-T", "CY-14C", "CY-16R-T", "CY-8", "CY-5"], defaultVal: "CY-12C-T", row: 3, col: 2, explanation: "Modelo de prato conectado à entrada CRASH 1 (padrão TD-316: CY-12C-T)." },
      { id: "tb_tom1", label: "TOM1 - Trig Type", paramKey: "trigType_TOM1", type: "enum", options: ["PD-8H", "PD-10H", "PDX-8", "PDX-6", "PDX-100", "PD-10P", "PDA100L", "RT-30H TM"], defaultVal: "PD-8H", row: 4, col: 1, explanation: "Modelo de pad conectado à entrada TOM 1 (padrão TD-316: PD-8H)." },
      { id: "tb_cr2", label: "CRASH2 - Trig Type", paramKey: "trigType_CRASH2", type: "enum", options: ["CY-12C-T", "CY-12C", "CY-14C-T", "CY-14C", "CY-16R-T", "CY-8", "OFF"], defaultVal: "CY-12C-T", row: 4, col: 2, explanation: "Modelo de prato conectado à entrada CRASH 2 (padrão TD-316: CY-12C-T)." },
      { id: "tb_tom2", label: "TOM2 - Trig Type", paramKey: "trigType_TOM2", type: "enum", options: ["PD-8H", "PD-10H", "PDX-8", "PDX-100", "PD-10P", "PDA120L", "RT-30H TM"], defaultVal: "PD-8H", row: 5, col: 1, explanation: "Modelo de pad conectado à entrada TOM 2 (padrão TD-316: PD-8H)." },
      { id: "tb_ride", label: "RIDE - Trig Type", paramKey: "trigType_RIDE", type: "enum", options: ["CY-14R-T", "CY-16R-T", "CY-15R", "CY-13R", "CY-12R/C", "CY-18DR (Digital)"], defaultVal: "CY-14R-T", row: 5, col: 2, explanation: "Modelo de prato conectado à entrada RIDE (padrão TD-316: CY-14R-T de 3 zonas com detecção posicional)." },
      { id: "tb_tom3", label: "TOM3 - Trig Type", paramKey: "trigType_TOM3", type: "enum", options: ["PD-10H", "PD-8H", "PDX-100", "PDX-8", "PD-12P", "PDA140F", "RT-30H TM"], defaultVal: "PD-10H", row: 6, col: 1, explanation: "Modelo de pad conectado à entrada TOM 3 / Surdo (padrão TD-316: PD-10H)." },
      { id: "tb_aux", label: "AUX/TOM4 - Trig Type", paramKey: "trigType_AUX", type: "enum", options: ["CY-12C-T", "PD-10H", "PD-8H", "PDX-100", "BT-1", "BT-1 SENS", "PAD1", "OFF"], defaultVal: "CY-12C-T", row: 6, col: 2, explanation: "Modelo de pad conectado ao conector TRS AUX/TOM4." }
    ]
  },

  TRIGGER_DIGITAL: {
    id: "TRIGGER_DIGITAL",
    title: "TRIGGER - DIGITAL PAD (Configuração de Pads Digitais USB)",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER",
    accessPath: "Em MENU > SYSTEM > TRIGGER, pressione [F2] (DIGITAL).",
    visualDescription:
      "Dividida em 3 colunas: Coluna 1 = Pad Digital conectado (ex: PD-14DSX, PD-140DS, CY-18DR, VH-14D), Coluna 2 = Assign (N/A, KICK..AUX/TOM4; nota: VH-14D só suporta abertura/fechamento em HI-HAT), Coluna 3 = Digital Pad Settings (lista vertical: Position Adjust 1–10, Position Adjust LR 1–10, XStick Detect Sens OFF/1–5, Strainer Lever Sens 1–5, LED Brightness OFF/1–5, Choke Sens OFF/1–5, Bell Gain 0–3.2). " +
      "Pressione Seta Direita [►] para entrar na Coluna 3 (Digital Pad Settings) e [▲]/[▼] para percorrer os parâmetros. [F6] (DEFAULT) restaura os padrões.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "BANK", action: "goto", target: "TRIGGER_BANK", description: "Volta para a aba BANK." },
      { num: 2, label: "DIGITAL", action: "goto", target: "TRIGGER_DIGITAL", description: "Aba atual: DIGITAL PAD." },
      { num: 3, label: "BASIC", action: "goto", target: "TRIGGER_BASIC", description: "Muda para a aba BASIC." },
      { num: 4, label: "HI-HAT", action: "goto", target: "TRIGGER_HIHAT", description: "Muda para a aba HI-HAT." },
      { num: 5, label: "ADVANCED", action: "goto", target: "TRIGGER_ADVANCED", description: "Muda para a aba ADVANCED." },
      { num: 6, label: "DEFAULT", action: "reset_section", description: "Restaura as configurações do pad digital para o padrão." }
    ],
    items: [
      { id: "td_pad", label: "Pad Digital Conectado", paramKey: "digitalPadModel", type: "enum", options: ["PD-14DSX", "PD-140DS", "CY-18DR", "VH-14D"], defaultVal: "PD-14DSX", row: 1, col: 1, explanation: "Seleciona qual pad digital conectado será configurado." },
      { id: "td_assign", label: "Assign (Entrada Atribuída)", paramKey: "digitalPadAssign", type: "enum", options: ["N/A", "KICK", "SNARE", "TOM1", "TOM2", "TOM3", "HI-HAT", "CRASH1", "CRASH2", "RIDE", "AUX/TOM4"], defaultVal: "SNARE", row: 1, col: 2, explanation: "Entrada de acionador atribuída ao pad digital (1 seta à direita)." },
      { id: "td_pos", label: "Digital Pad Settings: 1. Position Adjust", paramKey: "digPosAdjust", type: "int", min: 1, max: 10, defaultVal: 1, row: 1, col: 3, explanation: "Ajusta a detecção de posição do centro para a borda (1 a 10 — 2 setas à direita)." },
      { id: "td_poslr", label: "Digital Pad Settings: 2. Position Adjust LR", paramKey: "digPosAdjustLR", type: "int", min: 1, max: 10, defaultVal: 5, row: 2, col: 3, explanation: "Ajusta a detecção de posição esquerda/direita (1 a 10)." },
      { id: "td_xsens", label: "Digital Pad Settings: 3. XStick Detect Sens", paramKey: "digXStickSens", type: "enum", options: ["OFF", "1", "2", "3", "4", "5"], defaultVal: "3", row: 3, col: 3, explanation: "Sensibilidade de detecção da mão apoiada na pele para Cross Stick (OFF, 1 a 5)." },
      { id: "td_slsens", label: "Digital Pad Settings: 4. Strainer Lever Sens", paramKey: "digStrainerSens", type: "int", min: 1, max: 5, defaultVal: 1, row: 4, col: 3, explanation: "Sensibilidade do som operacional da alavanca do automático no PD-14DSX (1 a 5)." },
      { id: "td_led", label: "Digital Pad Settings: 5. LED Brightness", paramKey: "digLedBright", type: "enum", options: ["OFF", "1", "2", "3", "4", "5"], defaultVal: "3", row: 5, col: 3, explanation: "Brilho do indicador LED do automático no PD-14DSX (OFF, 1 a 5)." },
      { id: "td_choke", label: "Digital Pad Settings: 6. Choke Sens (CY-18DR/VH-14D)", paramKey: "digChokeSens", type: "enum", options: ["OFF", "1", "2", "3", "4", "5"], defaultVal: "3", row: 6, col: 3, explanation: "Sensibilidade de abafamento com a mão nos pratos digitais (OFF, 1 a 5)." },
      { id: "td_bell", label: "Digital Pad Settings: 7. Bell Gain (CY-18DR)", paramKey: "digBellGain", type: "float", min: 0.0, max: 3.2, step: 0.1, defaultVal: 1.0, row: 7, col: 3, explanation: "Ganho de sensibilidade da cúpula no CY-18DR (0.0 a 3.2)." }
    ]
  },

  TRIGGER_BASIC: {
    id: "TRIGGER_BASIC",
    title: "TRIGGER - BASIC (Sensibilidade, Threshold, Curva e Aro)",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER",
    accessPath: "Em MENU > SYSTEM > TRIGGER, pressione [F3] (BASIC).",
    visualDescription:
      "Ajusta a resposta de disparo do pad selecionado. " +
      "No lado esquerdo há uma lista vertical de 6 parâmetros: " +
      "Linha 1: Trig Type (modelo do pad). " +
      "Linha 2: Sensitivity (1.0 a 32.0). " +
      "Linha 3: Threshold (0 a 31 — força mínima para disparar o pad e ignorar vibrações). " +
      "Linha 4: Curve (LINEAR, EXP1, EXP2, LOG1, LOG2, SPLINE, LOUD1, LOUD2). " +
      "Linha 5: Rim Gain (0.0 a 3.2 — equilíbrio de volume do aro/borda). " +
      "Linha 6: Head/Rim Adjust (0 a 80 — equilíbrio entre disparo de pele e rim shot). " +
      "No lado direito aparece o indicador 'Trigger Lock' (ativado/desativado com [SHIFT]+[MENU]), o valor numérico exato de 'Velocity' da última batida (1 a 127 ou 1.00 a 127.00) e o gráfico de barras das batidas. " +
      "[F6] (DEFAULT) restaura os padrões; [SHIFT]+[F6] (CLEAR LOG) limpa o gráfico de velocidade.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "BANK", action: "goto", target: "TRIGGER_BANK", description: "Volta para a aba BANK." },
      { num: 2, label: "DIGITAL", action: "goto", target: "TRIGGER_DIGITAL", description: "Muda para a aba DIGITAL." },
      { num: 3, label: "BASIC", action: "goto", target: "TRIGGER_BASIC", description: "Aba atual: BASIC." },
      { num: 4, label: "HI-HAT", action: "goto", target: "TRIGGER_HIHAT", description: "Muda para a aba HI-HAT." },
      { num: 5, label: "ADVANCED", action: "goto", target: "TRIGGER_ADVANCED", description: "Muda para a tela TRIGGER ADVANCED." },
      { num: 6, label: "DEFAULT", action: "reset_section", description: "Restaura os parâmetros BASIC do pad para os valores ideais do Trig Type." }
    ],
    shiftFButtons: [
      { num: 6, label: "CLEAR LOG", action: "announce", message: "Histórico do monitor de velocidade limpo.", description: "[SHIFT]+[F6]: Apaga o histórico de barras do monitor de velocidade." }
    ],
    items: [
      { id: "tbas_type", label: "1. Trig Type", paramKey: "trigType_CURRENT", type: "enum", options: ["KD-10", "PD-12P", "PD-8H", "PD-10H", "VH-10", "CY-12C-T", "CY-14R-T", "PDX-100", "PDX-12", "RT-30K", "RT-30HR"], defaultVal: "KD-10", row: 1, col: 1, explanation: "Modelo físico do pad conectado à entrada atual." },
      { id: "tbas_sens", label: "2. Sensitivity (1.0–32.0)", paramKey: "trigSens", type: "float", min: 1.0, max: 32.0, step: 0.5, defaultVal: 8.0, row: 2, col: 1, explanation: "Sensibilidade do pad (1.0 a 32.0 — valores maiores produzem som mais alto mesmo com toques suaves; 1 seta para baixo)." },
      { id: "tbas_thres", label: "3. Threshold (0–31)", paramKey: "trigThreshold", type: "int", min: 0, max: 31, defaultVal: 4, row: 3, col: 1, explanation: "Sensibilidade mínima (0 a 31 — sinais abaixo deste limiar são ignorados; 2 setas para baixo)." },
      { id: "tbas_curve", label: "4. Curve (Curva Dinâmica)", paramKey: "trigCurve", type: "enum", options: ["LINEAR", "EXP1", "EXP2", "LOG1", "LOG2", "SPLINE", "LOUD1", "LOUD2"], defaultVal: "LINEAR", row: 4, col: 1, explanation: "Curva de resposta de volume: LINEAR (natural), EXP1/2 (mudança maior em toques fortes), LOG1/2 (mudança maior em toques suaves), SPLINE (extrema), LOUD1/2 (volume forte constante — 3 setas para baixo)." },
      { id: "tbas_rimgain", label: "5. Rim Gain (0.0–3.2)", paramKey: "trigRimGain", type: "float", min: 0.0, max: 3.2, step: 0.1, defaultVal: 1.0, row: 5, col: 1, explanation: "Equilíbrio de volume ao tocar no aro/borda (0.0 a 3.2 — 4 setas para baixo)." },
      { id: "tbas_hradj", label: "6. Head/Rim Adjust (0–80)", paramKey: "trigHeadRimAdj", type: "int", min: 0, max: 80, defaultVal: 25, row: 6, col: 1, explanation: "Facilidade de disparo entre pele e rim shot (0 a 80: aumente se o aro soar ao bater forte na pele; diminua se a pele soar ao tentar fazer rim shot — 5 setas para baixo)." }
    ]
  },

  TRIGGER_HIHAT: {
    id: "TRIGGER_HIHAT",
    title: "TRIGGER - HI-HAT (Calibração de Deslocamento e Pedal do Chimbal)",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER",
    accessPath: "Em MENU > SYSTEM > TRIGGER, pressione [F4] (HI-HAT).",
    visualDescription:
      "Configura o chimbal (ex: VH-10 na TD-316, ou VH-14D/VH-13/VH-12/FD). " +
      "No lado esquerdo há uma lista vertical: " +
      "Linha 1: Trig Type (VH-10, VH-11, VH-12, VH-13, VH-14D). " +
      "Linha 2: Offset (-100 a +100 — exibido para VH-12/13/14D; no VH-10 o ajuste de offset é feito girando o parafuso físico no prato com a presilha solta até que o medidor à direita fique na marca ► ◄ entre OPEN e CLOSE, em torno de 80). " +
      "Linha 3: Foot Splash Sens (-10 a +10 — facilidade de fazer foot splash). " +
      "Linha 4: Noise Cancel (1 a 3 — para VH-12/13/14D). " +
      "Linha 5: CC Max (90 ou 127 — valor máximo de Control Change com pedal fechado). " +
      "Linha 6: Pressure Sens (1 a 5 — para VH-14D).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "BANK", action: "goto", target: "TRIGGER_BANK", description: "Volta para a aba BANK." },
      { num: 2, label: "DIGITAL", action: "goto", target: "TRIGGER_DIGITAL", description: "Muda para a aba DIGITAL." },
      { num: 3, label: "BASIC", action: "goto", target: "TRIGGER_BASIC", description: "Muda para a aba BASIC." },
      { num: 4, label: "HI-HAT", action: "goto", target: "TRIGGER_HIHAT", description: "Aba atual: HI-HAT." },
      { num: 5, label: "ADVANCED", action: "goto", target: "TRIGGER_ADVANCED", description: "Muda para a tela TRIGGER ADVANCED." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "thh_type", label: "1. Trig Type (Modelo do Chimbal)", paramKey: "trigType_HIHAT", type: "enum", options: ["VH-10", "VH-11", "VH-12", "VH-13", "VH-14D"], defaultVal: "VH-10", row: 1, col: 1, explanation: "Modelo do chimbal (padrão TD-316: VH-10)." },
      { id: "thh_splash", label: "2. Foot Splash Sens (-10 a +10)", paramKey: "hhFootSplashSens", type: "int", min: -10, max: 10, defaultVal: 0, row: 2, col: 1, explanation: "Ajusta a facilidade para produzir o som de Foot Splash (-10 a +10 — 1 seta para baixo)." },
      { id: "thh_ccmax", label: "3. CC Max (90 ou 127)", paramKey: "hhCcMax", type: "enum", options: ["90", "127"], defaultVal: "127", row: 3, col: 1, explanation: "Valor máximo de Control Change transmitido ao pisar totalmente no pedal (90 ou 127 — 2 setas para baixo)." },
      { id: "thh_offset", label: "4. Offset (-100 a +100, para VH-12/13/14D)", paramKey: "hhOffset", type: "int", min: -100, max: 100, defaultVal: 0, row: 4, col: 1, explanation: "Ajuste eletrônico de abertura para VH-12/13/14D (no VH-10 o ajuste é mecânico no parafuso de deslocamento do prato)." },
      { id: "thh_noise", label: "5. Noise Cancel (1–3) / Pressure Sens (1–5)", paramKey: "hhNoiseCancel", type: "int", min: 1, max: 5, defaultVal: 2, row: 5, col: 1, explanation: "Cancelamento de ruído no fechamento de pedal (1–3) e sensibilidade de pressão (1–5 no VH-14D)." }
    ]
  },

  TRIGGER_ADVANCED: {
    id: "TRIGGER_ADVANCED",
    title: "TRIGGER ADVANCED (Parâmetros Avançados de Disparo, Monitor, AUX/TOM4, DrumLink e XTalk)",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER",
    accessPath: "Em MENU > SYSTEM > TRIGGER, pressione [F5] (ADVANCED).",
    visualDescription:
      "Na sub-aba [F1] (ADVANCED), há uma lista vertical de 8 parâmetros técnicos de detecção do pad atual: " +
      "Linha 1: Trig Type. Linha 2: Scan Time (0ms a 4.0ms). Linha 3: Mask Time (0ms a 64ms — evita duplo disparo do batedor de bumbo). Linha 4: Retrigger Cancel (1 a 16 — evita disparos falsos na queda da onda). Linha 5: Position Detect Head (OFF, ON). Linha 6: Position Detect Rim (OFF, ON). Linha 7: Ext Noise Cancel (OFF, 1 a 5 — para triggers acústicos RT-30K/30HR). Linha 8: XStick Threshold (0 a 127 — limiar de força entre cross-stick e rim shot aberto). " +
      "No rodapé, os botões F acessam ferramentas essenciais: " +
      "[F1] ADVANCED, [F2] TRIG MON (monitor de impacto e posição), [F3] AUX/TOM4 (define se o jack TRS aciona AUX ou TOM4), [F4] DrumLink (configura WT-10 e pads sem fio DWe!), [F5] XTALK (cancelamento de crosstalk entre pads), [F6] DEFAULT.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "ADVANCED", action: "goto", target: "TRIGGER_ADVANCED", description: "Sub-aba atual: Scan Time, Mask Time, Retrigger Cancel, Position Detect, ExtNoiseCancel e XStick Threshold." },
      { num: 2, label: "TRIG MON", action: "goto", target: "TRIGGER_MON", description: "Abre o monitor em tempo real de velocidade, choke e ponto de impacto (TRIG MON)." },
      { num: 3, label: "AUX/TOM4", action: "goto", target: "TRIGGER_AUXTOM4", description: "Define se o conector TRIGGER IN (AUX/TOM4) funciona como AUX ou como TOM4." },
      { num: 4, label: "DrumLink", action: "goto", target: "DRUMLINK_HUB", description: "Abre as telas de conexão sem fio DrumLink (WT-10 e bateria DWe)." },
      { num: 5, label: "XTALK", action: "goto", target: "TRIGGER_XTALK", description: "Abre a matriz TRIGGER XTALK MONITOR para eliminar crosstalk (interferência mecânica) entre pads." },
      { num: 6, label: "DEFAULT", action: "reset_section", description: "Restaura os parâmetros avançados do pad para o padrão de fábrica." }
    ],
    items: [
      { id: "tadv_type", label: "1. Trig Type", paramKey: "trigType_CURRENT", type: "enum", options: ["KD-10", "PD-12P", "PD-8H", "PD-10H", "VH-10", "CY-12C-T", "CY-14R-T"], defaultVal: "KD-10", row: 1, col: 1, explanation: "Modelo do pad." },
      { id: "tadv_scan", label: "2. Scan Time (0.0–4.0 ms)", paramKey: "trigScanTime", type: "float", min: 0.0, max: 4.0, step: 0.1, unit: "ms", defaultVal: 2.0, row: 2, col: 1, explanation: "Tempo de detecção do sinal do sensor (0.0 a 4.0 ms — mantenha o menor valor possível em que o volume estabilize; 1 seta para baixo)." },
      { id: "tadv_mask", label: "3. Mask Time (0–64 ms)", paramKey: "trigMaskTime", type: "int", min: 0, max: 64, unit: "ms", defaultVal: 10, row: 3, col: 1, explanation: "Prevenção de disparo duplo (0 a 64 ms — ignora rebote imediato do batedor de bumbo; 2 setas para baixo)." },
      { id: "tadv_retrig", label: "4. Retrigger Cancel (1–16)", paramKey: "trigRetrigger", type: "int", min: 1, max: 16, defaultVal: 1, row: 4, col: 1, explanation: "Prevenção de re-disparo falso na cauda da vibração (1 a 16 — 3 setas para baixo)." },
      { id: "tadv_posh", label: "5. Position Detect Head", paramKey: "trigPosDetectHead", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 5, col: 1, explanation: "Liga/desliga a detecção de ponto de impacto na pele nos sensores compatíveis (4 setas para baixo)." },
      { id: "tadv_posr", label: "6. Position Detect Rim", paramKey: "trigPosDetectRim", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 6, col: 1, explanation: "Liga/desliga a detecção de nuance de rim shot no aro (5 setas para baixo)." },
      { id: "tadv_extnc", label: "7. Ext Noise Cancel (OFF, 1–5)", paramKey: "trigExtNoiseCancel", type: "enum", options: ["OFF", "1", "2", "3", "4", "5"], defaultVal: "OFF", row: 7, col: 1, explanation: "Cancelamento de ruído externo para triggers de bateria acústica RT-30K / RT-30HR (6 setas para baixo)." },
      { id: "tadv_xsthr", label: "8. XStick Threshold (0–127)", paramKey: "trigXStickThres", type: "int", min: 0, max: 127, defaultVal: 55, row: 8, col: 1, explanation: "Força de transição entre o som de Cross Stick (toque mais leve no aro) e Rim Shot aberto (toque mais forte — 7 setas para baixo)." }
    ]
  },

  TRIGGER_MON: {
    id: "TRIGGER_MON",
    title: "TRIGGER ADVANCED - MONITOR (Monitor de Disparo e Posição em Tempo Real)",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER > ADVANCED",
    accessPath: "Em MENU > SYSTEM > TRIGGER > [F5] (ADVANCED), pressione [F2] (TRIG MON).",
    visualDescription:
      "Mostra no lado esquerdo as barras de Velocity (força de impacto) de todos os pads (K, S, T1, T2, T3, HH, C1, C2, R, A) e indicador de CHOKE, e no lado direito o radar circular de posição de impacto (CENTER a OUTER). Pressione a tecla B no simulador para simular batidas no pad!",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "ADVANCED", action: "goto", target: "TRIGGER_ADVANCED", description: "Volta para a sub-aba ADVANCED." },
      { num: 2, label: "TRIG MON", action: "goto", target: "TRIGGER_MON", description: "Sub-aba atual: MONITOR." },
      { num: 3, label: "AUX/TOM4", action: "goto", target: "TRIGGER_AUXTOM4", description: "Muda para AUX/TOM4." },
      { num: 4, label: "DrumLink", action: "goto", target: "DRUMLINK_HUB", description: "Abre DrumLink." },
      { num: 5, label: "XTALK", action: "goto", target: "TRIGGER_XTALK", description: "Abre XTALK." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "tmon_info", label: "Monitor em Tempo Real (Pressione B para bater no pad)", type: "readonly", defaultVal: "Velocity = 92 | Strike Point = CENTER-MID | Choke = OFF", row: 1, col: 1, explanation: "Exibe em tempo real a velocidade e o ponto de impacto quando você bate nos pads." }
    ]
  },

  TRIGGER_AUXTOM4: {
    id: "TRIGGER_AUXTOM4",
    title: "TRIGGER ADVANCED - AUX/TOM4 SELECT",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER > ADVANCED",
    accessPath: "Em MENU > SYSTEM > TRIGGER > [F5] (ADVANCED), pressione [F3] (AUX/TOM4).",
    visualDescription:
      "Define qual pad (AUX ou TOM4) é acionado pelo conector físico TRIGGER IN (AUX/TOM4) no painel traseiro. " +
      "Nota importante: Quando definido como 'AUX', o TOM4 passa a ser um Pad Virtual (e vice-versa).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "ADVANCED", action: "goto", target: "TRIGGER_ADVANCED", description: "Volta para ADVANCED." },
      { num: 2, label: "TRIG MON", action: "goto", target: "TRIGGER_MON", description: "Muda para TRIG MON." },
      { num: 3, label: "AUX/TOM4", action: "goto", target: "TRIGGER_AUXTOM4", description: "Sub-aba atual: AUX/TOM4." },
      { num: 4, label: "DrumLink", action: "goto", target: "DRUMLINK_HUB", description: "Abre DrumLink." },
      { num: 5, label: "XTALK", action: "goto", target: "TRIGGER_XTALK", description: "Abre XTALK." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "taux_sel", label: "Trigger Input AUX/TOM4 Select", paramKey: "auxTom4Select", type: "enum", options: ["AUX", "TOM4"], defaultVal: "AUX", row: 1, col: 1, explanation: "Define se o conector TRIGGER IN (AUX/TOM4) aciona o pad AUX ou o pad TOM4." }
    ]
  },

  DRUMLINK_HUB: {
    id: "DRUMLINK_HUB",
    title: "DrumLink - HUB / BASIC / CURVE / OPT-ADV (Pads Sem Fio WT-10 e DWe)",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER > ADVANCED > DrumLink",
    accessPath: "Em MENU > SYSTEM > TRIGGER > [F5] (ADVANCED), pressione [F4] (DrumLink).",
    visualDescription:
      "Configura o hub sem fio DH-10 / DWe DrumLink™, os adaptadores WT-10 e os tambores/pratos sem fio DWe. " +
      "Na aba [F1] (HUB), à esquerda há 6 parâmetros: " +
      "Linha 1: RF Channels Selection (Automatic, Manual). Linha 2: Main Ch. (1: 2402MHz a 8: 2480MHz). Linha 3: Ack Ch. (1 a 8). Linha 4: Scan on Start-up (OFF, ON). Linha 5: Disable RF Alerts (OFF, ON). Linha 6: MIDI Output (Soft Only, Hub Only, Soft+Hub). Linha 7: Send Note Off (OFF, ON). " +
      "À direita aparece a grade de pads pareados (até 12 com WT-10 ou 10 com DWe) e carga das pilhas. " +
      "No rodapé: [F1] HUB (com [SHIFT]+[F1] RF SCAN para varrer canais sem interferência), [F2] BASIC (Assign, Sensitivity 1–16, Threshold 1–15, Retrigger 0–15, Scan Time 2.0–5.0ms, Mask Time 0–70ms), [F3] CURVE (Curve USER/LINEAR..EXP3 e Dynamic Range 0–100), [F4] OPT/ADV (LED On Hit, Rim Gain, Rimshot/Head, Positional Sensing, FSR Auto Calibration, Bell/Bow, CC Smoothness, Closed Pedal Tune, XTalk Cancel), [F5] PAIRING (ativa pareamento por 15s), [F6] DrumLink (ON/OFF; ou [SHIFT]+[F6] UNPAIR).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "HUB", action: "goto", target: "DRUMLINK_HUB", description: "Aba atual: configurações de RF e MIDI do Hub DrumLink." },
      { num: 2, label: "BASIC", action: "goto", target: "DRUMLINK_BASIC", description: "Muda para DrumLink - TRIGGER BASIC (Assign, Sensitivity, Threshold, Retrigger, Scan/Mask Time, TOOLS e INPUT CONFIG)." },
      { num: 3, label: "CURVE", action: "announce", message: "Aba DrumLink - TRIGGER CURVE: ajuste Curve (USER, LINEAR, LOG1–3, POW1–3, EXP1–3) e Dynamic Range (0–100). Lembre-se de percutir o pad (tecla B) para sincronizar o asterisco (*) com o WT-10/DWe!", description: "Configura a curva e faixa dinâmica do pad sem fio." },
      { num: 4, label: "OPT/ADV", action: "announce", message: "Aba DrumLink - TRIGGER OPTIONS/ADVANCED: ajuste LED On Hit, Rim Gain, Rimshot/Head, Positional Sensing, Bell/Bow, CC Smoothness, Closed Pedal Tune e XTalk Cancel (OFF, 1–80).", description: "Configura opções avançadas de cada série de pad no WT-10 ou DWe." },
      { num: 5, label: "PAIRING (ON/OFF)", action: "announce", message: "PAD PAIRING ativado por 15 segundos! Now pairing... Bata uma vez no tambor ou na borda do prato conectado ao WT-10 / DWe (pressione a tecla B) para parear.", description: "Ativa o modo de pareamento sem fio por 15 segundos." },
      { num: 6, label: "DrumLink (ON/OFF)", action: "toggle_param", paramKey: "drumLinkSw", description: "Liga (ON) ou desliga (OFF) a comunicação com o Hub DrumLink." }
    ],
    shiftFButtons: [
      { num: 1, label: "RF SCAN", action: "confirm_action", confirmMsg: "Scanning RF channels... Done! Canal RF mais limpo selecionado automaticamente.", description: "[SHIFT]+[F1]: Executa varredura de canais RF para eliminar interferências sem fio." },
      { num: 6, label: "UNPAIR", action: "confirm_action", confirmMsg: "Pad sem fio despareado com sucesso.", description: "[SHIFT]+[F6]: Despareia o pad selecionado." }
    ],
    items: [
      { id: "dl_rfmode", label: "1. RF Channels Selection", paramKey: "dlRfSelection", type: "enum", options: ["Automatic", "Manual"], defaultVal: "Automatic", row: 1, col: 1, explanation: "Seleção automática ou manual dos canais de rádio frequência (RF) entre o hub e os pads." },
      { id: "dl_mainch", label: "2. Main Ch. (Hub -> Pad)", paramKey: "dlMainCh", type: "enum", options: ["1 (2402 MHz)", "2 (2423 MHz)", "3 (2426 MHz)", "4 (2448 MHz)", "5 (2451 MHz)", "6 (2474 MHz)", "7 (2477 MHz)", "8 (2480 MHz)"], defaultVal: "1 (2402 MHz)", row: 2, col: 1, explanation: "Canal principal quando RF Channels Selection = Manual (não pode ser igual ao Ack Ch.)." },
      { id: "dl_ackch", label: "3. Ack Ch. (Pad -> Hub)", paramKey: "dlAckCh", type: "enum", options: ["1 (2402 MHz)", "2 (2423 MHz)", "3 (2426 MHz)", "4 (2448 MHz)", "5 (2451 MHz)", "6 (2474 MHz)", "7 (2477 MHz)", "8 (2480 MHz)"], defaultVal: "2 (2423 MHz)", row: 3, col: 1, explanation: "Canal de retorno (Ack) quando RF Channels Selection = Manual." },
      { id: "dl_scan", label: "4. Scan on Start-up", paramKey: "dlScanStartup", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 4, col: 1, explanation: "Executa varredura automática de canais ao ligar o hub." },
      { id: "dl_alerts", label: "5. Disable RF Alerts", paramKey: "dlDisableAlerts", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 5, col: 1, explanation: "Oculta alertas de interferência de rádio na tela quando definido como ON." },
      { id: "dl_midiout", label: "6. MIDI Output", paramKey: "dlMidiOut", type: "enum", options: ["Soft Only (USB)", "Hub Only (MIDI OUT)", "Soft+Hub"], defaultVal: "Soft Only (USB)", row: 6, col: 1, explanation: "Conector usado pelo hub (no V31, use Soft Only ou Soft+Hub)." },
      { id: "dl_noteoff", label: "7. Send Note Off", paramKey: "dlSendNoteOff", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 7, col: 1, explanation: "Determina se envia dados Note-Off pela saída MIDI OUT do hub." }
    ]
  },

  DRUMLINK_BASIC: {
    id: "DRUMLINK_BASIC",
    title: "DrumLink - TRIGGER BASIC (Configuração e Calibração de Pads WT-10 e DWe)",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER > ADVANCED > DrumLink",
    accessPath: "Na tela DrumLink - HUB, pressione [F2] (BASIC).",
    visualDescription:
      "Configura os parâmetros básicos do pad sem fio (WT-10 ou DWe) selecionado. " +
      "Importante: Quando você altera um parâmetro de pad sem fio, aparece um asterisco (*) ao lado do nome do pad indicando que a configuração ainda não foi gravada na memória interna do WT-10 / pad DWe. Você DEVE bater no pad uma vez (no simulador: pressione a tecla B) para transmitir a configuração e fazer o asterisco desaparecer! " +
      "No rodapé: [F1] HUB, [F2] BASIC, [F3] CURVE, [F4] OPT/ADV, [F5] TOOLS (abre INPUT CONFIG, CALIBRATE DRUM / BOW / PEDAL e UNPAIR), [F6] INPUT CONFIG / DEFAULT.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "HUB", action: "goto", target: "DRUMLINK_HUB", description: "Volta para a aba HUB." },
      { num: 2, label: "BASIC", action: "goto", target: "DRUMLINK_BASIC", description: "Aba atual: TRIGGER BASIC." },
      { num: 3, label: "CURVE", action: "announce", message: "Aba CURVE: edite Curve (USER, LINEAR..EXP3) e Dynamic Range (0–100).", description: "Muda para a aba CURVE." },
      { num: 4, label: "OPT/ADV", action: "announce", message: "Aba OPT/ADV: edite parâmetros específicos da série KD, PD, VH, CY, RT ou DWe.", description: "Muda para a aba OPT/ADV." },
      { num: 5, label: "TOOLS", action: "announce", message: "Janela DrumLink TOOLS aberta: opções INPUT CONFIG (configurar tipo de pad no WT-10, modo Hi-Hat e modo 2 Zone), CALIBRATE DRUM/BOW/PEDAL (calibrar pele/corpo/pedal) e UNPAIR (desparear).", description: "Abre a janela TOOLS (Input Config, Calibração de Pedal/Tambor/Prato e Unpair)." },
      { num: 6, label: "INPUT CONFIG / DEFAULT", action: "reset_section", description: "Abre INPUT CONFIGURATION (no WT-10) ou restaura padrões DEFAULT (no DWe)." }
    ],
    items: [
      { id: "dlb_pad", label: "1. Pad Sem Fio Selecionado (1/9)", paramKey: "dlSelectedPad", type: "enum", options: ["1/9: 20\" Bass Drum (DWe)", "2/9: 6.5x14\" Snare (DWe)", "3/9: 10\" Tom (DWe)", "4/9: 12\" Tom (DWe)", "5/9: 14\" Floor Tom (DWe)", "6/9: Hi-Hat (DWe)", "7/9: 14\" Crash (DWe)", "8/9: 16\" Crash (DWe)", "9/9: 18\" Ride (DWe)", "WT-10 PAD 1: PDX-8", "WT-10 PAD 1: CY-16R-T", "WT-10 PAD 1: VH-10"], defaultVal: "1/9: 20\" Bass Drum (DWe)", row: 1, col: 1, explanation: "Seleciona qual pad sem fio pareado está em edição (ou bata no pad com a tecla B)." },
      { id: "dlb_assign", label: "2. Assign (Entrada Atribuída)", paramKey: "dlAssign", type: "enum", options: ["N/A", "KICK", "SNARE", "TOM1", "TOM2", "TOM3", "HI-HAT", "CRASH1", "CRASH2", "RIDE", "AUX"], defaultVal: "KICK", row: 2, col: 1, explanation: "Entrada do V31 acionada por este pad sem fio (1 seta para baixo)." },
      { id: "dlb_sens", label: "3. Sensitivity (1–16)", paramKey: "dlSensitivity", type: "int", min: 1, max: 16, defaultVal: 11, row: 3, col: 1, explanation: "Sensibilidade do pad sem fio (1 a 16 — 2 setas para baixo). Percuta o pad (tecla B) após alterar!" },
      { id: "dlb_thres", label: "4. Threshold (1–15)", paramKey: "dlThreshold", type: "int", min: 1, max: 15, defaultVal: 8, row: 4, col: 1, explanation: "Sensibilidade mínima do pad sem fio (1 a 15 — 3 setas para baixo)." },
      { id: "dlb_retrig", label: "5. Retrigger (0–15)", paramKey: "dlRetrigger", type: "int", min: 0, max: 15, defaultVal: 6, row: 5, col: 1, explanation: "Cancelamento de retrigger do pad sem fio (0 a 15 — 4 setas para baixo)." },
      { id: "dlb_scan", label: "6. Scan Time (2.0–5.0 ms)", paramKey: "dlScanTime", type: "float", min: 2.0, max: 5.0, step: 0.1, unit: "ms", defaultVal: 2.0, row: 6, col: 1, explanation: "Tempo de varredura do pulso (2.0 a 5.0 ms — 5 setas para baixo)." },
      { id: "dlb_mask", label: "7. Mask Time (0–70 ms)", paramKey: "dlMaskTime", type: "int", min: 0, max: 70, unit: "ms", defaultVal: 20, row: 7, col: 1, explanation: "Prevenção de disparo duplo (0 a 70 ms — 6 setas para baixo)." }
    ]
  },

  TRIGGER_XTALK: {
    id: "TRIGGER_XTALK",
    title: "TRIGGER ADVANCED - XTALK MONITOR (Cancelamento de Crosstalk entre Pads)",
    manualSectionId: "system-trigger-drumlink-dwe",
    category: "MENU > SYSTEM > TRIGGER > ADVANCED",
    accessPath: "Em MENU > SYSTEM > TRIGGER > [F5] (ADVANCED), pressione [F5] (XTALK).",
    visualDescription:
      "Elimina o disparo acidental por vibração mecânica no rack (Crosstalk). " +
      "Exibe à direita uma grade de 5 colunas × 2 linhas com o valor de 'XTalk Cancel Rate' (0 a 80) dos 10 pads: " +
      "Linha 1: KICK (10), SNARE (20), TOM1 (35), TOM2 (35), TOM3 (35). " +
      "Linha 2: HI-HAT (20), CRASH1 (35), CRASH2 (35), RIDE (35), AUX/TOM4 (40). " +
      "Como usar com os botões F: Ao bater em um pad (ex: TOM1), se outro pad vibrar e disparar (aparece em vermelho no monitor), pressione [F1] (FOCUS) para mover o cursor automaticamente para o pad que sofreu interferência, e depois pressione [F2] (SET) para aplicar automaticamente o valor mínimo ideal! Ou ajuste manualmente com as setas e o Disco.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "FOCUS", action: "announce", message: "Cursor movido automaticamente (FOCUS) para o pad que detectou vibração de crosstalk!", description: "Move o cursor diretamente para o pad que está sofrendo crosstalk." },
      { num: 2, label: "SET", action: "announce", message: "Valor ideal de XTalk Cancel Rate definido automaticamente para eliminar o disparo acidental!", description: "Define automaticamente o valor mínimo de cancelamento necessário para o pad focado." },
      { num: 3, label: "SET ALL", action: "announce", message: "Valores de XTalk Cancel Rate ajustados automaticamente para todos os pads afetados!", description: "Ajusta automaticamente todos os pads que detectaram vibração." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "EXIT", action: "goto", target: "TRIGGER_ADVANCED", description: "Sai do monitor XTALK e retorna para TRIGGER ADVANCED." }
    ],
    items: [
      { id: "xt_kick", label: "KICK - XTalk Cancel Rate (0–80)", paramKey: "xtalk_KICK", type: "int", min: 0, max: 80, defaultVal: 10, row: 1, col: 1, explanation: "Força de cancelamento de crosstalk do Bumbo (0 a 80 — Linha 1, Coluna 1)." },
      { id: "xt_snare", label: "SNARE - XTalk Cancel Rate (0–80)", paramKey: "xtalk_SNARE", type: "int", min: 0, max: 80, defaultVal: 20, row: 1, col: 2, explanation: "Cancelamento de crosstalk da Caixa (Linha 1, Coluna 2 — 1 seta à direita)." },
      { id: "xt_tom1", label: "TOM1 - XTalk Cancel Rate (0–80)", paramKey: "xtalk_TOM1", type: "int", min: 0, max: 80, defaultVal: 35, row: 1, col: 3, explanation: "Cancelamento de crosstalk do Tom 1 (Linha 1, Coluna 3 — 2 setas à direita)." },
      { id: "xt_tom2", label: "TOM2 - XTalk Cancel Rate (0–80)", paramKey: "xtalk_TOM2", type: "int", min: 0, max: 80, defaultVal: 35, row: 1, col: 4, explanation: "Cancelamento de crosstalk do Tom 2 (Linha 1, Coluna 4 — 3 setas à direita)." },
      { id: "xt_tom3", label: "TOM3 - XTalk Cancel Rate (0–80)", paramKey: "xtalk_TOM3", type: "int", min: 0, max: 80, defaultVal: 35, row: 1, col: 5, explanation: "Cancelamento de crosstalk do Tom 3 (Linha 1, Coluna 5 — 4 setas à direita)." },
      { id: "xt_hh", label: "HI-HAT - XTalk Cancel Rate (0–80)", paramKey: "xtalk_HIHAT", type: "int", min: 0, max: 80, defaultVal: 20, row: 2, col: 1, explanation: "Cancelamento de crosstalk do Chimbal (Linha 2, Coluna 1 — 1 seta para baixo)." },
      { id: "xt_cr1", label: "CRASH1 - XTalk Cancel Rate (0–80)", paramKey: "xtalk_CRASH1", type: "int", min: 0, max: 80, defaultVal: 35, row: 2, col: 2, explanation: "Cancelamento de crosstalk do Crash 1 (Linha 2, Coluna 2)." },
      { id: "xt_cr2", label: "CRASH2 - XTalk Cancel Rate (0–80)", paramKey: "xtalk_CRASH2", type: "int", min: 0, max: 80, defaultVal: 35, row: 2, col: 3, explanation: "Cancelamento de crosstalk do Crash 2 (Linha 2, Coluna 3)." },
      { id: "xt_ride", label: "RIDE - XTalk Cancel Rate (0–80)", paramKey: "xtalk_RIDE", type: "int", min: 0, max: 80, defaultVal: 35, row: 2, col: 4, explanation: "Cancelamento de crosstalk do Ride (Linha 2, Coluna 4)." },
      { id: "xt_aux", label: "AUX/TOM4 - XTalk Cancel Rate (0–80)", paramKey: "xtalk_AUX", type: "int", min: 0, max: 80, defaultVal: 40, row: 2, col: 5, explanation: "Cancelamento de crosstalk do AUX/TOM4 (Linha 2, Coluna 5)." }
    ]
  },

  SYSTEM_MIDI_BASIC: {
    id: "SYSTEM_MIDI_BASIC",
    title: "SYSTEM MIDI - BASIC / CONTROL / SYNC / PROG CHG",
    manualSectionId: "system-wifi-bt-audio-midi",
    category: "MENU > SYSTEM > MIDI",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 1x, Seta Baixo 1x até MIDI (Linha 2, Coluna 1) > [ENTER] > [F1] (BASIC).",
    visualDescription:
      "Configura o MIDI global do V31. Possui 4 abas nos botões F: " +
      "[F1] BASIC (lista vertical de 9 parâmetros: 1. MIDI Tx/Rx Sw, 2. Global MIDI Channel 1–16Ch, 3. Program Change Tx, 4. Program Change Rx, 5. Soft Thru USB MIDI In, 6. Local Control, 7. Device ID 17–32, 8. Transmit Edit Data, 9. Receive Exclusive). " +
      "[F2] CONTROL (Control Changes CC para Hi-Hat Pedal, Snare, Snare Angle, Snare Strainer, Ride, Ride LR, Toms/AUXs, Hi-Hat, Hi-Hat LR, HH Note# Border 0–127, Hi-Resolution Velocity CC#88 e Cymbal Choke Shot). " +
      "[F3] SYNC (Sync Mode INTERNAL/EXTERNAL, Clock Source MIDI/USB MIDI, Sync Out OFF/ON). " +
      "[F4] PROG CHG (tabela de correspondência Program Change Bank0–PC0 a Bank1–PC127 por kit).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "BASIC", action: "goto", target: "SYSTEM_MIDI_BASIC", description: "Aba atual: configurações básicas de MIDI global." },
      { num: 2, label: "CONTROL", action: "goto", target: "SYSTEM_MIDI_CONTROL", description: "Muda para a aba CONTROL (números de Control Change CC, HH Note# Border, Hi-Res Velocity e Choke Shot)." },
      { num: 3, label: "SYNC", action: "goto", target: "SYSTEM_MIDI_SYNC", description: "Muda para a aba SYNC (sincronismo de MIDI Clock interno/externo)." },
      { num: 4, label: "PROG CHG", action: "announce", message: "Aba SYSTEM MIDI - PROG CHG: especifique livremente a correspondência entre os Drum Kits (001–200) e os números de Program Change (Bank0–PC0 a Bank1–PC127).", description: "Configura a tabela de Program Change." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "mb_txrx", label: "1. MIDI Tx/Rx Sw", paramKey: "midiTxRxSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Liga (ON) ou desliga (OFF) toda a transmissão e recepção de mensagens MIDI." },
      { id: "mb_ch", label: "2. Global MIDI Channel", paramKey: "midiGlobalCh", type: "enum", options: ["1Ch", "2Ch", "3Ch", "4Ch", "5Ch", "6Ch", "7Ch", "8Ch", "9Ch", "10Ch", "11Ch", "12Ch", "13Ch", "14Ch", "15Ch", "16Ch"], defaultVal: "10Ch", row: 2, col: 1, explanation: "Canal global de transmissão e recepção MIDI (padrão de bateria: 10Ch — 1 seta para baixo)." },
      { id: "mb_pctx", label: "3. Program Change Tx", paramKey: "midiProgChgTx", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 3, col: 1, explanation: "Transmite mensagens de mudança de programa ao trocar de drum kit (2 setas para baixo)." },
      { id: "mb_pcrx", label: "4. Program Change Rx", paramKey: "midiProgChgRx", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 4, col: 1, explanation: "Recebe mensagens de mudança de programa para trocar de drum kit remotamente (3 setas para baixo)." },
      { id: "mb_thru", label: "5. Soft Thru MIDI In", paramKey: "midiSoftThru", type: "enum", options: ["OFF", "ON (MIDI OUT)", "ON (USB MIDI)", "ON (MIDI+USB)"], defaultVal: "OFF", row: 5, col: 1, explanation: "Retransmite dados recebidos no MIDI IN para o MIDI OUT e/ou porta USB COMPUTER (4 setas para baixo)." },
      { id: "mb_local", label: "6. Local Control", paramKey: "midiLocalCtrl", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 6, col: 1, explanation: "Conecta (ON) ou desconecta (OFF) os pads do gerador de som interno do V31 (5 setas para baixo)." },
      { id: "mb_devid", label: "7. Device ID (17–32)", paramKey: "midiSysExId", type: "int", min: 17, max: 32, defaultVal: 17, row: 7, col: 1, explanation: "ID de dispositivo para mensagens System Exclusive (17 a 32 — 6 setas para baixo)." },
      { id: "mb_txedit", label: "8. Transmit Edit Data", paramKey: "midiTxEdit", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 8, col: 1, explanation: "Transmite alterações de parâmetros como mensagens SysEx (7 setas para baixo)." },
      { id: "mb_rxexcl", label: "9. Receive Exclusive", paramKey: "midiRxExcl", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 9, col: 1, explanation: "Recebe mensagens System Exclusive (8 setas para baixo)." }
    ]
  },

  SYSTEM_MIDI_CONTROL: {
    id: "SYSTEM_MIDI_CONTROL",
    title: "SYSTEM MIDI - CONTROL (Control Changes CC, HH Border, Hi-Res Velocity e Choke)",
    manualSectionId: "system-wifi-bt-audio-midi",
    category: "MENU > SYSTEM > MIDI",
    accessPath: "Em MENU > SYSTEM > MIDI, pressione [F2] (CONTROL).",
    visualDescription:
      "Lista vertical de 12 parâmetros para configurar os números de Control Change (CC) de posição de ataque e pedal, HH Note# Border (0–127), Hi-Resolution Velocity (CC#88 OFF/ON) e Cymbal Choke Shot (OFF/ON). Pressione [F6] (DEFAULT) para restaurar os padrões.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "BASIC", action: "goto", target: "SYSTEM_MIDI_BASIC", description: "Volta para a aba BASIC." },
      { num: 2, label: "CONTROL", action: "goto", target: "SYSTEM_MIDI_CONTROL", description: "Aba atual: CONTROL." },
      { num: 3, label: "SYNC", action: "goto", target: "SYSTEM_MIDI_SYNC", description: "Muda para a aba SYNC." },
      { num: 4, label: "PROG CHG", action: "announce", message: "Aba PROG CHG selecionada.", description: "Muda para a aba PROG CHG." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "DEFAULT", action: "reset_section", description: "Restaura as configurações de CC para os valores padrão." }
    ],
    items: [
      { id: "mc_hhcc", label: "1. Hi-Hat Pedal CC", paramKey: "ccHiHatPedal", type: "enum", options: ["OFF", "MODULATION (1)", "BREATH (2)", "FOOT (4)", "EXPRESSION (11)", "GENERAL1 (16)", "GENERAL2 (17)", "GENERAL3 (18)", "GENERAL4 (19)", "GENERAL5 (80)", "GENERAL6 (81)", "GENERAL7 (82)", "GENERAL8 (83)"], defaultVal: "FOOT (4)", row: 1, col: 1, explanation: "CC usado para transmitir/receber a pressão do pedal de chimbal (padrão: FOOT 4)." },
      { id: "mc_sncc", label: "2. Snare CC (Posição na Caixa)", paramKey: "ccSnarePos", type: "enum", options: ["OFF", "MODULATION (1)", "BREATH (2)", "FOOT (4)", "EXPRESSION (11)", "GENERAL1 (16)", "GENERAL2 (17)", "GENERAL3 (18)", "GENERAL4 (19)"], defaultVal: "GENERAL1 (16)", row: 2, col: 1, explanation: "CC da posição de impacto do centro para a borda na Caixa (padrão: GENERAL1 16)." },
      { id: "mc_rdcc", label: "3. Ride CC (Posição no Ride)", paramKey: "ccRidePos", type: "enum", options: ["OFF", "GENERAL1 (16)", "GENERAL2 (17)", "GENERAL3 (18)", "GENERAL4 (19)"], defaultVal: "GENERAL2 (17)", row: 3, col: 1, explanation: "CC da posição de impacto no Ride (padrão: GENERAL2 17)." },
      { id: "mc_hhbdr", label: "4. HH Note# Border (0–127)", paramKey: "hhNoteBorder", type: "int", min: 0, max: 127, defaultVal: 127, row: 4, col: 1, explanation: "Posição do pedal em que a nota MIDI muda de chimbal aberto para fechado (padrão 127; reduza para ~90 se usar VSTs no computador)." },
      { id: "mc_hires", label: "5. Hi-Resolution Velocity (CC#88)", paramKey: "midiHiResVel", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 5, col: 1, explanation: "Transmite velocidade em alta resolução (1.00–127.00 via prefixo CC#88) em pads digitais." },
      { id: "mc_choke", label: "6. Cymbal Choke Shot", paramKey: "midiCymbalChokeShot", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 6, col: 1, explanation: "Suporte para tocar um prato enquanto o segura abafado (ON corta imediatamente após o início)." }
    ]
  },

  SYSTEM_MIDI_SYNC: {
    id: "SYSTEM_MIDI_SYNC",
    title: "SYSTEM MIDI - SYNC (Sincronização de MIDI Clock)",
    manualSectionId: "system-wifi-bt-audio-midi",
    category: "MENU > SYSTEM > MIDI",
    accessPath: "Em MENU > SYSTEM > MIDI, pressione [F3] (SYNC).",
    visualDescription:
      "Lista vertical de 3 parâmetros: " +
      "1. Sync Mode (INTERNAL: o V31 é o mestre; EXTERNAL: o V31 segue o clock externo). " +
      "2. Clock Source (MIDI ou USB MIDI — ativo quando Sync Mode = EXTERNAL). " +
      "3. Sync Out (OFF, ON — transmite mensagens de MIDI Clock para outros aparelhos).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "BASIC", action: "goto", target: "SYSTEM_MIDI_BASIC", description: "Volta para a aba BASIC." },
      { num: 2, label: "CONTROL", action: "goto", target: "SYSTEM_MIDI_CONTROL", description: "Muda para a aba CONTROL." },
      { num: 3, label: "SYNC", action: "goto", target: "SYSTEM_MIDI_SYNC", description: "Aba atual: SYNC." },
      { num: 4, label: "PROG CHG", action: "announce", message: "Aba PROG CHG.", description: "Muda para a aba PROG CHG." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "ms_mode", label: "1. Sync Mode", paramKey: "midiSyncMode", type: "enum", options: ["INTERNAL", "EXTERNAL"], defaultVal: "INTERNAL", row: 1, col: 1, explanation: "Modo de sincronismo: INTERNAL (relógio interno do V31) ou EXTERNAL (sincroniza com DAW/dispositivo externo)." },
      { id: "ms_src", label: "2. Clock Source", paramKey: "midiClockSource", type: "enum", options: ["MIDI", "USB MIDI"], defaultVal: "USB MIDI", row: 2, col: 1, explanation: "Porta de entrada do clock quando Sync Mode = EXTERNAL (conector MIDI ou porta USB COMPUTER)." },
      { id: "ms_out", label: "3. Sync Out", paramKey: "midiSyncOut", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 3, col: 1, explanation: "Transmite (ON) ou não (OFF) sinais de sincronismo MIDI Clock." }
    ]
  },

  OUTPUT_PAD_MASTER: {
    id: "OUTPUT_PAD_MASTER",
    title: "OUTPUT - PAD OUTPUT ASSIGN MASTER (Atribuição de Saída de Áudio)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > OUTPUT",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 2x, Seta Baixo 1x até OUTPUT (Linha 2, Coluna 2) > [ENTER] > [F1] (PAD MASTER).",
    visualDescription:
      "Configura o destino de saída de cada som entre o conector PHONES e os conectores MASTER OUT (L/R). " +
      "Possui 6 abas nos botões F: " +
      "[F1] PAD MASTER (colunas para K, S, T1, T2, T3, HH, C1, C2, R, A: cada pad pode sair em 'PHONES + MASTER LR' ou apenas em 'PHONES (MASTER OFF)'). " +
      "[F2] OTHER MST (mesma escolha para AMBIENCE OH/ROOM/REV/RESO, BUS FX A/B/C/D/REV, USB MAIN/SUB, e OTHERS: SONG, CLICK, MIXIN/Bluetooth — muito usado para enviar o metrônomo CLICK apenas para os fones PHONES sem sair no PA!). " +
      "[F3] KNOB TYPE (define se o botão físico [MASTER/PHONES] controla ambos ou apenas PHONES com Fixed Master Volume). " +
      "[F4] LOW CUT (Low Cut Freq 20Hz–200Hz, Master Low Cut OFF/ON, Phones Low Cut OFF/ON). " +
      "[F5] MONITOR (medidores MASTER e PHONES). " +
      "[F6] GLOBAL TONE (abre a tela GLOBAL TONE).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "PAD MASTER", action: "goto", target: "OUTPUT_PAD_MASTER", description: "Aba atual: roteamento PHONES vs MASTER LR para cada pad." },
      { num: 2, label: "OTHER MST", action: "goto", target: "OUTPUT_OTHER_MST", description: "Muda para a aba OTHER MST (roteamento de Ambiência, BUS FX, USB, Song, Click e MixIn/Bluetooth)." },
      { num: 3, label: "KNOB TYPE", action: "goto", target: "OUTPUT_KNOB_TYPE", description: "Muda para a aba KNOB TYPE (função do botão giratório MASTER/PHONES e Fixed Master Volume)." },
      { num: 4, label: "LOW CUT", action: "goto", target: "OUTPUT_LOW_CUT", description: "Muda para a aba LOW CUT (corte de graves nas saídas MASTER e PHONES)." },
      { num: 5, label: "MONITOR", action: "announce", message: "Aba OUTPUT - MONITOR: exibe os medidores de nível de saída MASTER (L/R) e PHONES (L/R).", description: "Mostra os medidores de volume de saída." },
      { num: 6, label: "GLOBAL TONE", action: "goto", target: "GLOBAL_TONE_SETUP", description: "Abre a tela de configuração do GLOBAL TONE." }
    ],
    items: [
      { id: "out_k", label: "K (KICK) - Output Assign", paramKey: "outAssign_KICK", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 1, explanation: "Destino de saída do Bumbo (Coluna 1)." },
      { id: "out_s", label: "S (SNARE) - Output Assign", paramKey: "outAssign_SNARE", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 2, explanation: "Destino de saída da Caixa (Coluna 2 — 1 seta à direita)." },
      { id: "out_t1", label: "T1 (TOM 1) - Output Assign", paramKey: "outAssign_TOM1", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 3, explanation: "Destino de saída do Tom 1 (Coluna 3)." },
      { id: "out_t2", label: "T2 (TOM 2) - Output Assign", paramKey: "outAssign_TOM2", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 4, explanation: "Destino de saída do Tom 2 (Coluna 4)." },
      { id: "out_t3", label: "T3 (TOM 3) - Output Assign", paramKey: "outAssign_TOM3", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 5, explanation: "Destino de saída do Tom 3 (Coluna 5)." },
      { id: "out_hh", label: "HH (HI-HAT) - Output Assign", paramKey: "outAssign_HIHAT", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 6, explanation: "Destino de saída do Chimbal (Coluna 6)." },
      { id: "out_c1", label: "C1 (CRASH 1) - Output Assign", paramKey: "outAssign_CRASH1", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 7, explanation: "Destino de saída do Crash 1 (Coluna 7)." },
      { id: "out_c2", label: "C2 (CRASH 2) - Output Assign", paramKey: "outAssign_CRASH2", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 8, explanation: "Destino de saída do Crash 2 (Coluna 8)." },
      { id: "out_r", label: "R (RIDE) - Output Assign", paramKey: "outAssign_RIDE", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 9, explanation: "Destino de saída do Ride (Coluna 9)." },
      { id: "out_a", label: "A (AUX) - Output Assign", paramKey: "outAssign_AUX", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 10, explanation: "Destino de saída do AUX (Coluna 10)." }
    ]
  },

  OUTPUT_OTHER_MST: {
    id: "OUTPUT_OTHER_MST",
    title: "OUTPUT - OTHER OUTPUT ASSIGN MASTER (Saída de Click, Song, USB, Ambiência e Bus FX)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > OUTPUT",
    accessPath: "Em MENU > SYSTEM > OUTPUT, pressione [F2] (OTHER MST).",
    visualDescription:
      "Exibe 14 colunas horizontais divididas em 4 grupos: " +
      "Grupo AMBIENCE (Colunas 1 a 4): OH, ROOM, REV, RESO. " +
      "Grupo BUS FX (Colunas 5 a 9): A, B, C, D, REV. " +
      "Grupo USB (Colunas 10 e 11): MAIN, SUB. " +
      "Grupo OTHERS (Colunas 12 a 14): SONG (Col 12), CLICK (Col 13 — coloque em 'PHONES (MASTER OFF)' para que o metrônomo toque apenas no seu fone e não saia nas caixas MASTER OUT!), MIXIN/Bluetooth (Col 14).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "PAD MASTER", action: "goto", target: "OUTPUT_PAD_MASTER", description: "Volta para PAD MASTER." },
      { num: 2, label: "OTHER MST", action: "goto", target: "OUTPUT_OTHER_MST", description: "Aba atual: OTHER MST." },
      { num: 3, label: "KNOB TYPE", action: "goto", target: "OUTPUT_KNOB_TYPE", description: "Muda para KNOB TYPE." },
      { num: 4, label: "LOW CUT", action: "goto", target: "OUTPUT_LOW_CUT", description: "Muda para LOW CUT." },
      { num: 5, label: "MONITOR", action: "announce", message: "Aba MONITOR.", description: "Mostra medidores." },
      { num: 6, label: "GLOBAL TONE", action: "goto", target: "GLOBAL_TONE_SETUP", description: "Abre GLOBAL TONE." }
    ],
    items: [
      { id: "oom_oh", label: "AMBIENCE: OH (Overhead)", paramKey: "outOther_OH", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 1, explanation: "Saída do Overhead (Coluna 1)." },
      { id: "oom_room", label: "AMBIENCE: ROOM", paramKey: "outOther_ROOM", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 2, explanation: "Saída do Room (Coluna 2)." },
      { id: "oom_rev", label: "AMBIENCE: REV (Reverb)", paramKey: "outOther_REV", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 3, explanation: "Saída do Reverb (Coluna 3)." },
      { id: "oom_reso", label: "AMBIENCE: RESO (Kit Resonance)", paramKey: "outOther_RESO", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 4, explanation: "Saída de Kit Resonance (Coluna 4)." },
      { id: "oom_busa", label: "BUS FX: BUS A–D / REV", paramKey: "outOther_BUSA", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 5, explanation: "Saída dos barramentos BUS FX." },
      { id: "oom_usbmain", label: "USB: MAIN", paramKey: "outOther_USBMAIN", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 6, explanation: "Saída do áudio USB MAIN vindo do computador." },
      { id: "oom_usbsub", label: "USB: SUB", paramKey: "outOther_USBSUB", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 7, explanation: "Saída do áudio USB SUB vindo do computador." },
      { id: "oom_song", label: "OTHERS: SONG (Música)", paramKey: "outOther_SONG", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 8, explanation: "Saída da música interna/cartão SD." },
      { id: "oom_click", label: "OTHERS: CLICK (Metrônomo e Click Track)", paramKey: "outOther_CLICK", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 9, explanation: "Saída do Metrônomo e Click Track! Escolha 'PHONES (MASTER OFF)' para ouvir o clique apenas nos fones de ouvido." },
      { id: "oom_mixin", label: "OTHERS: MIXIN/Bluetooth", paramKey: "outOther_MIXIN", type: "enum", options: ["PHONES + MASTER LR", "PHONES (MASTER OFF)"], defaultVal: "PHONES + MASTER LR", row: 1, col: 10, explanation: "Saída do som conectado em MIX IN e Bluetooth Audio." }
    ]
  },

  OUTPUT_KNOB_TYPE: {
    id: "OUTPUT_KNOB_TYPE",
    title: "OUTPUT - KNOB TYPE (Comportamento do Knob [MASTER/PHONES])",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > OUTPUT",
    accessPath: "Em MENU > SYSTEM > OUTPUT, pressione [F3] (KNOB TYPE).",
    visualDescription:
      "Lista vertical de 2 parâmetros: " +
      "Linha 1: MASTER/PHONES Knob Type ('MASTER/PHONES' ajusta ambos juntos; 'PHONES' ajusta apenas os fones deixando o MASTER OUT fixo). " +
      "Linha 2: Fixed Master Volume (-INF, -60.0 a 0.0 dB — volume fixo do MASTER OUT quando Knob Type = PHONES).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "PAD MASTER", action: "goto", target: "OUTPUT_PAD_MASTER", description: "Volta para PAD MASTER." },
      { num: 2, label: "OTHER MST", action: "goto", target: "OUTPUT_OTHER_MST", description: "Muda para OTHER MST." },
      { num: 3, label: "KNOB TYPE", action: "goto", target: "OUTPUT_KNOB_TYPE", description: "Aba atual: KNOB TYPE." },
      { num: 4, label: "LOW CUT", action: "goto", target: "OUTPUT_LOW_CUT", description: "Muda para LOW CUT." },
      { num: 5, label: "MONITOR", action: "announce", message: "Aba MONITOR.", description: "Mostra medidores." },
      { num: 6, label: "GLOBAL TONE", action: "goto", target: "GLOBAL_TONE_SETUP", description: "Abre GLOBAL TONE." }
    ],
    items: [
      { id: "okt_type", label: "1. MASTER/PHONES Knob Type", paramKey: "masterPhonesKnobType", type: "enum", options: ["MASTER/PHONES", "PHONES"], defaultVal: "MASTER/PHONES", row: 1, col: 1, explanation: "Define se o botão giratório físico [MASTER/PHONES] controla ambos ou apenas o volume dos fones." },
      { id: "okt_fixed", label: "2. Fixed Master Volume", paramKey: "fixedMasterVol", type: "db", min: -61, max: 0, step: 0.5, defaultVal: -12.0, row: 2, col: 1, explanation: "Volume fixo enviado ao MASTER OUT quando Knob Type = PHONES (-INF, -60.0 a 0.0 dB — 1 seta para baixo)." }
    ]
  },

  OUTPUT_LOW_CUT: {
    id: "OUTPUT_LOW_CUT",
    title: "OUTPUT - LOW CUT (Corte de Graves nas Saídas Analógicas)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > OUTPUT",
    accessPath: "Em MENU > SYSTEM > OUTPUT, pressione [F4] (LOW CUT).",
    visualDescription:
      "Lista vertical de 3 parâmetros: " +
      "Linha 1: Low Cut Freq (20Hz, 25Hz, 31.5Hz, 40Hz, 50Hz, 63Hz, 80Hz, 100Hz, 125Hz, 160Hz, 200Hz). " +
      "Linha 2: Master Low Cut (OFF, ON). " +
      "Linha 3: Phones Low Cut (OFF, ON).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "PAD MASTER", action: "goto", target: "OUTPUT_PAD_MASTER", description: "Volta para PAD MASTER." },
      { num: 2, label: "OTHER MST", action: "goto", target: "OUTPUT_OTHER_MST", description: "Muda para OTHER MST." },
      { num: 3, label: "KNOB TYPE", action: "goto", target: "OUTPUT_KNOB_TYPE", description: "Muda para KNOB TYPE." },
      { num: 4, label: "LOW CUT", action: "goto", target: "OUTPUT_LOW_CUT", description: "Aba atual: LOW CUT." },
      { num: 5, label: "MONITOR", action: "announce", message: "Aba MONITOR.", description: "Mostra medidores." },
      { num: 6, label: "GLOBAL TONE", action: "goto", target: "GLOBAL_TONE_SETUP", description: "Abre GLOBAL TONE." }
    ],
    items: [
      { id: "olc_freq", label: "1. Low Cut Freq", paramKey: "outLowCutFreq", type: "enum", options: ["20Hz", "25Hz", "31.5Hz", "40Hz", "50Hz", "63Hz", "80Hz", "100Hz", "125Hz", "160Hz", "200Hz"], defaultVal: "20Hz", row: 1, col: 1, explanation: "Frequência abaixo da qual os graves são cortados (20Hz a 200Hz)." },
      { id: "olc_mst", label: "2. Master Low Cut", paramKey: "outMasterLowCut", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 2, col: 1, explanation: "Aplica (ON) ou não (OFF) o corte de graves nas saídas MASTER OUT (1 seta para baixo)." },
      { id: "olc_phn", label: "3. Phones Low Cut", paramKey: "outPhonesLowCut", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 3, col: 1, explanation: "Aplica (ON) ou não (OFF) o corte de graves na saída PHONES (2 setas para baixo)." }
    ]
  },

  USB_AUDIO_ROUTING: {
    id: "USB_AUDIO_ROUTING",
    title: "USB AUDIO - ROUTING / MONITOR (Driver, Ganhos e Roteamento Multipista 30/32 Canais)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > USB AUDIO",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 3x, Seta Baixo 1x até USB AUDIO (Linha 2, Coluna 3) > [ENTER].",
    visualDescription:
      "Configura o áudio via porta USB COMPUTER. " +
      "No topo há uma grade de 2 colunas × 3 linhas: " +
      "Coluna 1 (Esquerda): Linha 1 = Driver Mode (GENERIC: driver padrão do sistema com 2 canais; VENDOR: driver dedicado Roland com 30 canais de gravação e 32 canais de reprodução — exige reiniciar o V31 após alterar); Linha 2 = Input Gain (-36 a +12 dB); Linha 3 = Output Gain (-24 a +24 dB). " +
      "Coluna 2 (Direita): Linha 1 = Volume Select Input MAIN (OFF, BACKING/SONG, CLICK); Linha 2 = Volume Select Input SUB (OFF, BACKING/SONG, CLICK); Linha 3 = Audio Routing (NORMAL, PAD DIRECT IN, LOOPBACK). " +
      "No rodapé: [F1] ROUTING (mostra o diagrama de roteamento USB), [F2] MONITOR (mostra os medidores USB IN MAIN/SUB e USB OUT MASTER).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "ROUTING", action: "goto", target: "USB_AUDIO_ROUTING", description: "Aba atual: mostra e configura o roteamento do áudio USB." },
      { num: 2, label: "MONITOR", action: "goto", target: "USB_AUDIO_MONITOR", description: "Muda para a aba MONITOR (medidores de nível de entrada USB IN MAIN/SUB e saída USB OUT MASTER)." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "usb_drv", label: "Driver Mode (Col 1, Linha 1)", paramKey: "usbDriverMode", type: "enum", options: ["GENERIC (2ch OS Driver)", "VENDOR (30ch Out / 32ch In Roland Driver)"], defaultVal: "VENDOR (30ch Out / 32ch In Roland Driver)", row: 1, col: 1, explanation: "GENERIC (2 canais, compatível com iPhone/iPad sem driver) ou VENDOR (30 canais de saída e 32 de entrada no PC/Mac; requer reiniciar o V31)." },
      { id: "usb_vmain", label: "Volume Select Input MAIN (Col 2, Linha 1)", paramKey: "usbVolSelMain", type: "enum", options: ["OFF", "BACKING (SONG)", "CLICK"], defaultVal: "OFF", row: 1, col: 2, explanation: "Define qual botão giratório físico controla o volume da entrada USB MAIN (1 seta à direita)." },
      { id: "usb_in", label: "Input Gain (Col 1, Linha 2)", paramKey: "usbInputGain", type: "int", min: -36, max: 12, unit: "dB", defaultVal: -18, row: 2, col: 1, explanation: "Ganho de entrada do áudio USB vindo do computador (-36 a +12 dB — 1 seta para baixo)." },
      { id: "usb_vsub", label: "Volume Select Input SUB (Col 2, Linha 2)", paramKey: "usbVolSelSub", type: "enum", options: ["OFF", "BACKING (SONG)", "CLICK"], defaultVal: "OFF", row: 2, col: 2, explanation: "Define qual botão giratório físico controla o volume da entrada USB SUB." },
      { id: "usb_out", label: "Output Gain (Col 1, Linha 3)", paramKey: "usbOutputGain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 0, row: 3, col: 1, explanation: "Ganho de saída do áudio USB enviado ao computador (-24 a +24 dB — 2 setas para baixo)." },
      { id: "usb_route", label: "Audio Routing (Col 2, Linha 3)", paramKey: "usbAudioRouting", type: "enum", options: ["NORMAL", "PAD DIRECT IN", "LOOPBACK"], defaultVal: "NORMAL", row: 3, col: 2, explanation: "NORMAL (envia Master+Pads ao PC; recebe Main/Sub), PAD DIRECT IN (injeta áudio do PC direto no mixer de cada pad e silencia envio ao PC) ou LOOPBACK (ativa todas as entradas e saídas simultaneamente)." }
    ]
  },

  USB_AUDIO_MONITOR: {
    id: "USB_AUDIO_MONITOR",
    title: "USB AUDIO - MONITOR (Medidores USB IN MAIN/SUB e USB OUT MASTER)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > USB AUDIO",
    accessPath: "Em MENU > SYSTEM > USB AUDIO, pressione [F2] (MONITOR).",
    visualDescription:
      "Mantém os mesmos 6 parâmetros de USB AUDIO no topo (Driver Mode, Input Gain, Output Gain à esquerda; Volume Select Input MAIN, SUB e Audio Routing à direita), e na metade inferior exibe os medidores de nível em tempo real: " +
      "Bloco USB IN (Esquerda): MAIN L/R e SUB L/R (-42 a 0 dB). " +
      "Bloco USB OUT (Direita): MASTER L/R (-42 a 0 dB). " +
      "No rodapé: [F1] ROUTING, [F2] MONITOR.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "ROUTING", action: "goto", target: "USB_AUDIO_ROUTING", description: "Volta para a aba ROUTING (diagrama de fluxo de sinal USB)." },
      { num: 2, label: "MONITOR", action: "goto", target: "USB_AUDIO_MONITOR", description: "Aba atual: MONITOR (medidores de nível USB IN e USB OUT)." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "usbm_drv", label: "Driver Mode (Col 1, Linha 1)", paramKey: "usbDriverMode", type: "enum", options: ["GENERIC (2ch OS Driver)", "VENDOR (30ch Out / 32ch In Roland Driver)"], defaultVal: "VENDOR (30ch Out / 32ch In Roland Driver)", row: 1, col: 1, explanation: "Modo do driver USB (GENERIC ou VENDOR)." },
      { id: "usbm_vmain", label: "Volume Select Input MAIN (Col 2, Linha 1)", paramKey: "usbVolSelMain", type: "enum", options: ["OFF", "BACKING (SONG)", "CLICK"], defaultVal: "OFF", row: 1, col: 2, explanation: "Controle de volume físico para USB IN MAIN." },
      { id: "usbm_in", label: "Input Gain (Col 1, Linha 2)", paramKey: "usbInputGain", type: "int", min: -36, max: 12, unit: "dB", defaultVal: -18, row: 2, col: 1, explanation: "Ganho de entrada USB (-36 a +12 dB)." },
      { id: "usbm_vsub", label: "Volume Select Input SUB (Col 2, Linha 2)", paramKey: "usbVolSelSub", type: "enum", options: ["OFF", "BACKING (SONG)", "CLICK"], defaultVal: "OFF", row: 2, col: 2, explanation: "Controle de volume físico para USB IN SUB." },
      { id: "usbm_out", label: "Output Gain (Col 1, Linha 3)", paramKey: "usbOutputGain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 0, row: 3, col: 1, explanation: "Ganho de saída USB (-24 a +24 dB)." },
      { id: "usbm_route", label: "Audio Routing (Col 2, Linha 3)", paramKey: "usbAudioRouting", type: "enum", options: ["NORMAL", "PAD DIRECT IN", "LOOPBACK"], defaultVal: "NORMAL", row: 3, col: 2, explanation: "Modo de roteamento USB." },
      { id: "usbm_meter_in", label: "Medidor USB IN (MAIN L/R & SUB L/R)", type: "readonly", defaultVal: "MAIN: -12 dB | SUB: -INF dB", row: 4, col: 1, explanation: "Medidores de nível de entrada USB vindos do computador." },
      { id: "usbm_meter_out", label: "Medidor USB OUT (MASTER L/R)", type: "readonly", defaultVal: "MASTER L/R: -6 dB", row: 4, col: 2, explanation: "Medidor de nível de saída USB enviado ao computador." }
    ]
  },

  SYSTEM_AUTO_OFF: {
    id: "SYSTEM_AUTO_OFF",
    title: "AUTO OFF (Desligamento Automático por Economia de Energia)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 4x, Seta Baixo 1x até AUTO OFF (Linha 2, Coluna 4) > [ENTER] (ou [F6] SETUP na tela de inicialização).",
    visualDescription:
      "Tela com 1 parâmetro central: 'Auto Off' (OFF, 20 minutes, 4 hours). Quando conectado via USB ao computador, o equipamento não desliga automaticamente.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "" },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "---", action: "none", description: "" },
      { num: 6, label: "---", action: "none", description: "" }
    ],
    items: [
      { id: "aoff_val", label: "Auto Off", paramKey: "autoOffTime", type: "enum", options: ["OFF", "20 minutes", "4 hours"], defaultVal: "20 minutes", row: 1, col: 1, explanation: "Tempo de inatividade até o desligamento automático (OFF, 20 minutes, 4 hours)." }
    ]
  },

  OPTION_LCD_LED: {
    id: "OPTION_LCD_LED",
    title: "OPTION - LCD/LED (Brilho do Visor e LEDs)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > OPTION",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 1x, Seta Baixo 2x até OPTION (Linha 3, Coluna 1) > [ENTER].",
    visualDescription:
      "Configurações globais de visor e interface do V31, divididas em 4 abas nos botões F: " +
      "[F1] LCD/LED (LCD Brightness 1–16 e LED Brightness 0–15). " +
      "[F2] KIT VIEW (Kit Image OFF/ON e Kit Name Size SMALL/MEDIUM/LARGE quando definidos como GLOBAL no kit). " +
      "[F3] KIT PHRASE (Kit Phrase Play OFF/ON). " +
      "[F4] UI CUSTOM (Show Virtual Pad OFF/ON — quando ON, exibe os pads virtuais TOM4/AUX, AUX2, AUX3 e AUX4 nas telas de edição do kit!).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "LCD/LED", action: "goto", target: "OPTION_LCD_LED", description: "Aba atual: brilho do visor LCD (1–16) e dos LEDs (0–15)." },
      { num: 2, label: "KIT VIEW", action: "goto", target: "OPTION_KIT_VIEW", description: "Muda para a aba KIT VIEW (fundo e tamanho de fonte globais da tela KIT)." },
      { num: 3, label: "KIT PHRASE", action: "goto", target: "OPTION_KIT_PHRASE", description: "Muda para a aba KIT PHRASE (ativação global da reprodução de Kit Phrase)." },
      { num: 4, label: "UI CUSTOM", action: "goto", target: "OPTION_UI_CUSTOM", description: "Muda para a aba UI CUSTOM (exibir/ocultar Pads Virtuais)." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "opt_lcd", label: "1. LCD Brightness (1–16)", paramKey: "lcdBrightness", type: "int", min: 1, max: 16, defaultVal: 16, row: 1, col: 1, explanation: "Brilho do visor colorido de 4,3 polegadas (1 a 16)." },
      { id: "opt_led", label: "2. LED Brightness (0–15)", paramKey: "ledBrightness", type: "int", min: 0, max: 15, defaultVal: 13, row: 2, col: 1, explanation: "Brilho do LED do botão [KIT], disco e indicador de esteira (0 a 15 — 1 seta para baixo)." }
    ]
  },

  OPTION_KIT_VIEW: {
    id: "OPTION_KIT_VIEW",
    title: "OPTION - KIT VIEW (Configuração Global da Tela KIT)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > OPTION",
    accessPath: "Em MENU > SYSTEM > OPTION, pressione [F2] (KIT VIEW).",
    visualDescription:
      "Configura o comportamento global de exibição da tela KIT (aplicado a todos os kits cujo parâmetro Kit Image ou Kit Name Size esteja configurado como 'GLOBAL'). " +
      "Lista vertical de 2 parâmetros: " +
      "Linha 1: Kit Image (GLOBAL) (OFF, ON). " +
      "Linha 2: Kit Name Size (GLOBAL) (SMALL, MEDIUM, LARGE). " +
      "No rodapé: [F1] LCD/LED, [F2] KIT VIEW, [F3] KIT PHRASE, [F4] UI CUSTOM.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "LCD/LED", action: "goto", target: "OPTION_LCD_LED", description: "Volta para a aba LCD/LED." },
      { num: 2, label: "KIT VIEW", action: "goto", target: "OPTION_KIT_VIEW", description: "Aba atual: KIT VIEW (Global)." },
      { num: 3, label: "KIT PHRASE", action: "goto", target: "OPTION_KIT_PHRASE", description: "Muda para a aba KIT PHRASE (Global)." },
      { num: 4, label: "UI CUSTOM", action: "goto", target: "OPTION_UI_CUSTOM", description: "Muda para a aba UI CUSTOM." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "opt_kimg", label: "1. Kit Image (GLOBAL)", paramKey: "sysKitViewImage", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Ativa (ON) ou desativa (OFF) globalmente a imagem de fundo da tela KIT." },
      { id: "opt_ksize", label: "2. Kit Name Size (GLOBAL)", paramKey: "sysKitViewNameSize", type: "enum", options: ["SMALL", "MEDIUM", "LARGE"], defaultVal: "LARGE", row: 2, col: 1, explanation: "Define globalmente o tamanho da fonte do nome do kit na tela KIT (SMALL, MEDIUM, LARGE — 1 seta para baixo)." }
    ]
  },

  OPTION_KIT_PHRASE: {
    id: "OPTION_KIT_PHRASE",
    title: "OPTION - KIT PHRASE (Ativação Global de Kit Phrase)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > OPTION",
    accessPath: "Em MENU > SYSTEM > OPTION, pressione [F3] (KIT PHRASE).",
    visualDescription:
      "Exibe o parâmetro global 'Kit Phrase Play (GLOBAL)' (OFF, ON). Quando definido como OFF, o botão [F3] (PHRASE) na tela KIT é desativado para evitar reprodução acidental durante apresentações ao vivo. " +
      "No rodapé: [F1] LCD/LED, [F2] KIT VIEW, [F3] KIT PHRASE, [F4] UI CUSTOM.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "LCD/LED", action: "goto", target: "OPTION_LCD_LED", description: "Volta para a aba LCD/LED." },
      { num: 2, label: "KIT VIEW", action: "goto", target: "OPTION_KIT_VIEW", description: "Muda para a aba KIT VIEW." },
      { num: 3, label: "KIT PHRASE", action: "goto", target: "OPTION_KIT_PHRASE", description: "Aba atual: KIT PHRASE (Global)." },
      { num: 4, label: "UI CUSTOM", action: "goto", target: "OPTION_UI_CUSTOM", description: "Muda para a aba UI CUSTOM." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "opt_kphr", label: "Kit Phrase Play (GLOBAL)", paramKey: "sysKitPhrasePlayGlobal", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Habilita (ON) ou desabilita (OFF) o botão PHRASE na tela KIT." }
    ]
  },

  OPTION_UI_CUSTOM: {
    id: "OPTION_UI_CUSTOM",
    title: "OPTION - UI CUSTOM (Ativação de Pads Virtuais AUX2–4 e TOM4)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > OPTION",
    accessPath: "Em MENU > SYSTEM > OPTION, pressione [F4] (UI CUSTOM).",
    visualDescription:
      "Exibe o parâmetro 'Show Virtual Pad' (OFF, ON). Quando definido como ON, os pads virtuais (TOM4 ou AUX + AUX2, AUX3 e AUX4) passam a ser mostrados com borda laranja em todas as telas de edição do kit (INSTRUMENT, PAD VOL, PAD EQ, PAD COMP, AMBIENCE, BUS FX, KIT MIDI, etc.).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "LCD/LED", action: "goto", target: "OPTION_LCD_LED", description: "Volta para LCD/LED." },
      { num: 2, label: "KIT VIEW", action: "goto", target: "OPTION_KIT_VIEW", description: "Muda para KIT VIEW." },
      { num: 3, label: "KIT PHRASE", action: "goto", target: "OPTION_KIT_PHRASE", description: "Muda para KIT PHRASE." },
      { num: 4, label: "UI CUSTOM", action: "goto", target: "OPTION_UI_CUSTOM", description: "Aba atual: UI CUSTOM." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "opt_vpad", label: "Show Virtual Pad", paramKey: "showVirtualPad", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Define se os pads virtuais (TOM4/AUX, AUX2, AUX3, AUX4) são exibidos (ON) ou ocultados (OFF) nas telas de edição." }
    ]
  },

  SYSTEM_INFO_VERSION: {
    id: "SYSTEM_INFO_VERSION",
    title: "SYSTEM INFO - VERSION (Versão do Sistema e Atualizações)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > INFO",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 2x, Seta Baixo 2x até INFO (Linha 3, Coluna 2) > [ENTER].",
    visualDescription:
      "Exibe informações técnicas do sistema divididas em 5 abas nos botões F: " +
      "[F1] VERSION (mostra a versão do firmware, ex: Ver. 2.10, a caixa 'Pop-up Notification for Updates' OFF/ON, o botão [F6] MANUAL para QR Code, e o atalho [SHIFT]+[F1] para atualizar via Wi-Fi). " +
      "[F2] SAMPLE (mostra Remaining Memory: 98% e Imported Samples: 4 / 500). " +
      "[F3] SD CARD (mostra All: 1/99 e 1 KIT: 1/999). " +
      "[F4] DIGITAL (lista os pads digitais conectados, versão de firmware e Status 'OK' ou 'Need to update' com botão [F6] UPDATE, além do modo de recuperação [SHIFT]+[F6] RECOVER). " +
      "[F5] LICENSES (licenças de software open-source).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "VERSION", action: "goto", target: "SYSTEM_INFO_VERSION", description: "Aba atual: versão do programa e notificações de atualização." },
      { num: 2, label: "SAMPLE", action: "goto", target: "SYSTEM_INFO_SAMPLE", description: "Muda para a aba SAMPLE (memória disponível para User Samples)." },
      { num: 3, label: "SD CARD", action: "goto", target: "SYSTEM_INFO_SDCARD", description: "Muda para a aba SD CARD (número de backups salvos no cartão SD)." },
      { num: 4, label: "DIGITAL", action: "goto", target: "SYSTEM_INFO_DIGITAL", description: "Muda para a aba DIGITAL PAD (versão, atualização e recuperação de pads digitais)." },
      { num: 5, label: "LICENSES", action: "goto", target: "SYSTEM_INFO_LICENSES", description: "Muda para a aba LICENSES (licenças de software de código aberto)." },
      { num: 6, label: "MANUAL", action: "announce", message: "Exibindo código 2D (QR Code) de acesso ao manual online do V31.", description: "Mostra o QR Code de acesso ao suporte e manuais." }
    ],
    shiftFButtons: [
      { num: 1, label: "PROGRAM UPDATE", action: "announce", message: "Tela PROGRAM UPDATE via Wi-Fi: Update is available for download. Pressione F6 (EXECUTE) e selecione OK para baixar.", description: "[SHIFT]+[F1]: Inicia a verificação/atualização de firmware via Wi-Fi." }
    ],
    items: [
      { id: "sinf_ver", label: "Program Version", type: "readonly", defaultVal: "Ver. 2.10 (Build 0082)", row: 1, col: 1, explanation: "Versão atual do programa de sistema do V31." },
      { id: "sinf_pop", label: "Pop-up Notification for Updates", paramKey: "updatePopupSw", type: "enum", options: ["OFF (Desmarcado)", "ON (Marcado)"], defaultVal: "ON (Marcado)", row: 2, col: 1, explanation: "Exibe notificação automática quando houver nova atualização de firmware via Wi-Fi." }
    ]
  },

  SYSTEM_INFO_SAMPLE: {
    id: "SYSTEM_INFO_SAMPLE",
    title: "SYSTEM INFO - USER SAMPLE MEMORY INFO (Memória de Samples)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > INFO",
    accessPath: "Em MENU > SYSTEM > INFO, pressione [F2] (SAMPLE).",
    visualDescription:
      "Exibe o estado de ocupação da memória interna de User Samples: " +
      "Linha 1: Remaining Memory (98%). " +
      "Linha 2: Imported Samples (4 / 500). " +
      "No rodapé: [F1] VERSION, [F2] SAMPLE, [F3] SD CARD, [F4] DIGITAL, [F5] LICENSES.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "VERSION", action: "goto", target: "SYSTEM_INFO_VERSION", description: "Volta para a aba VERSION." },
      { num: 2, label: "SAMPLE", action: "goto", target: "SYSTEM_INFO_SAMPLE", description: "Aba atual: SAMPLE." },
      { num: 3, label: "SD CARD", action: "goto", target: "SYSTEM_INFO_SDCARD", description: "Muda para a aba SD CARD." },
      { num: 4, label: "DIGITAL", action: "goto", target: "SYSTEM_INFO_DIGITAL", description: "Muda para a aba DIGITAL." },
      { num: 5, label: "LICENSES", action: "goto", target: "SYSTEM_INFO_LICENSES", description: "Muda para a aba LICENSES." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "sis_rem", label: "Remaining Memory (Memória Livre)", type: "readonly", defaultVal: "98%", row: 1, col: 1, explanation: "Porcentagem de espaço livre para importação de User Samples." },
      { id: "sis_cnt", label: "Imported Samples (Samples Importados)", type: "readonly", defaultVal: "4 / 500", row: 2, col: 1, explanation: "Quantidade de User Samples atualmente armazenados (de até 500)." }
    ]
  },

  SYSTEM_INFO_SDCARD: {
    id: "SYSTEM_INFO_SDCARD",
    title: "SYSTEM INFO - SD CARD INFO (Uso de Backups no Cartão SD)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > INFO",
    accessPath: "Em MENU > SYSTEM > INFO, pressione [F3] (SD CARD).",
    visualDescription:
      "Mostra a quantidade de arquivos de backup armazenados no cartão SD inserido: " +
      "Linha 1: All (1 / 99 — backups completos do sistema). " +
      "Linha 2: 1 KIT (1 / 999 — backups de kits individuais). " +
      "No rodapé: [F1] VERSION, [F2] SAMPLE, [F3] SD CARD, [F4] DIGITAL, [F5] LICENSES.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "VERSION", action: "goto", target: "SYSTEM_INFO_VERSION", description: "Volta para a aba VERSION." },
      { num: 2, label: "SAMPLE", action: "goto", target: "SYSTEM_INFO_SAMPLE", description: "Muda para a aba SAMPLE." },
      { num: 3, label: "SD CARD", action: "goto", target: "SYSTEM_INFO_SDCARD", description: "Aba atual: SD CARD." },
      { num: 4, label: "DIGITAL", action: "goto", target: "SYSTEM_INFO_DIGITAL", description: "Muda para a aba DIGITAL." },
      { num: 5, label: "LICENSES", action: "goto", target: "SYSTEM_INFO_LICENSES", description: "Muda para a aba LICENSES." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "sisd_all", label: "All (Backups Completos Salvos)", type: "readonly", defaultVal: "1 / 99", row: 1, col: 1, explanation: "Número de conjuntos completos de backup no cartão SD." },
      { id: "sisd_1kit", label: "1 KIT (Backups de Kits Individuais)", type: "readonly", defaultVal: "1 / 999", row: 2, col: 1, explanation: "Número de kits individuais salvos no cartão SD." }
    ]
  },

  SYSTEM_INFO_DIGITAL: {
    id: "SYSTEM_INFO_DIGITAL",
    title: "SYSTEM INFO - DIGITAL PAD (Firmware, Atualização e Recovery de Pad Digital)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > INFO",
    accessPath: "Em MENU > SYSTEM > INFO, pressione [F4] (DIGITAL).",
    visualDescription:
      "Mostra a tabela com 3 colunas: Pad (ex: PD-14DSX, CY-18DR), Program Version (ex: 1.11) e Status ('OK' ou 'Need to update'). " +
      "Se o status for 'Need to update', pressione [F6] (UPDATE) para atualizar o firmware do pad digital em segundos. " +
      "Se um pad digital falhou durante uma atualização e não é reconhecido ('No Digital Pad Connected'), mantenha [SHIFT] pressionado e pressione [F6] (RECOVER) para abrir o assistente 'DIGITAL PAD RECOVERY (STEP 1, STEP 2, STEP 3)'!",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "VERSION", action: "goto", target: "SYSTEM_INFO_VERSION", description: "Volta para a aba VERSION." },
      { num: 2, label: "SAMPLE", action: "goto", target: "SYSTEM_INFO_SAMPLE", description: "Muda para a aba SAMPLE." },
      { num: 3, label: "SD CARD", action: "goto", target: "SYSTEM_INFO_SDCARD", description: "Muda para a aba SD CARD." },
      { num: 4, label: "DIGITAL", action: "goto", target: "SYSTEM_INFO_DIGITAL", description: "Aba atual: DIGITAL PAD." },
      { num: 5, label: "LICENSES", action: "goto", target: "SYSTEM_INFO_LICENSES", description: "Muda para a aba LICENSES." },
      { num: 6, label: "UPDATE", action: "confirm_action", confirmMsg: "Atualização do Pad Digital concluída: Complete! Status = OK.", description: "Atualiza o firmware do pad digital selecionado." }
    ],
    shiftFButtons: [
      { num: 6, label: "RECOVER (Digital Pad Recovery)", action: "announce", message: "Assistente DIGITAL PAD RECOVERY iniciado: STEP 1: Desconecte todos os pads digitais e pressione F6 (NEXT). STEP 2: Conecte o pad digital na porta DIGITAL TRIGGER IN 1 mantendo o botão [FUNC] do pad pressionado e pressione F6 (NEXT). STEP 3: Escolha o modelo em Target Digital Pad (PD-14DSX, PD-140DS, CY-18DR, VH-14D) e pressione F6 (RECOVER)!", description: "[SHIFT]+[F6]: Abre o assistente de recuperação de pad digital em 3 passos." }
    ],
    items: [
      { id: "sid_pad1", label: "Pad Digital 1: PD-14DSX", paramKey: "digPadStatus", type: "enum", options: ["Ver 1.11 - Status: OK", "Ver 1.00 - Status: Need to update"], defaultVal: "Ver 1.11 - Status: OK", row: 1, col: 1, explanation: "Status do pad digital conectado. Pressione [F6] para atualizar ou [SHIFT]+[F6] para o modo Recovery." }
    ]
  },

  SYSTEM_INFO_LICENSES: {
    id: "SYSTEM_INFO_LICENSES",
    title: "SYSTEM INFO - LICENSES (Licenças de Software Open-Source)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > INFO",
    accessPath: "Em MENU > SYSTEM > INFO, pressione [F5] (LICENSES).",
    visualDescription:
      "Exibe o texto de direitos autorais e licenças de software de código aberto (OSS) utilizados no firmware do V31. Use Seta Cima [▲] / Seta Baixo [▼] ou o Disco para rolar o texto. " +
      "No rodapé: [F1] VERSION, [F2] SAMPLE, [F3] SD CARD, [F4] DIGITAL, [F5] LICENSES.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "VERSION", action: "goto", target: "SYSTEM_INFO_VERSION", description: "Volta para a aba VERSION." },
      { num: 2, label: "SAMPLE", action: "goto", target: "SYSTEM_INFO_SAMPLE", description: "Muda para a aba SAMPLE." },
      { num: 3, label: "SD CARD", action: "goto", target: "SYSTEM_INFO_SDCARD", description: "Muda para a aba SD CARD." },
      { num: 4, label: "DIGITAL", action: "goto", target: "SYSTEM_INFO_DIGITAL", description: "Muda para a aba DIGITAL." },
      { num: 5, label: "LICENSES", action: "goto", target: "SYSTEM_INFO_LICENSES", description: "Aba atual: LICENSES." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "sil_txt", label: "Open-Source Software Licenses", type: "readonly", defaultVal: "Roland V31 OSS Licenses (BSD / MIT / Apache 2.0)", row: 1, col: 1, explanation: "Informações de licenças de software livre integradas ao módulo." }
    ]
  },

  FACTORY_RESET: {
    id: "FACTORY_RESET",
    title: "FACTORY RESET (Restaurar Configurações de Fábrica)",
    manualSectionId: "system-output-usbaudio-option-info-reset",
    category: "MENU > SYSTEM > FACTORY RESET",
    accessPath: "Pressione [MENU] > SYSTEM (Linha 5) > Seta Direita 3x, Seta Baixo 2x até FACTORY RESET (Linha 3, Coluna 3) > [ENTER].",
    visualDescription:
      "Restaura o módulo V31 para os padrões de fábrica ('Clear all data and load factory preset data'). " +
      "Exibe 3 caixas de seleção verticais: " +
      "Linha 1: Reset with User Samples (OFF / ON — apaga samples importados e restaura os de fábrica). " +
      "Linha 2: Reset with Instrument Expansion Slots (OFF / ON — restaura os Slots 1–6 para o padrão de fábrica). " +
      "Linha 3: Reset with all coach scores (OFF / ON — apaga os recordes do modo Coach). " +
      "No rodapé: [F1] (REMOVE LIC) abre a tela 'FACTORY RESET WITH USER LICENSE' (que limpa também os Racks e a licença da conta Roland Cloud); [F6] (EXECUTE) abre a confirmação ('This will clear all internal memory contents. Are you sure? EXIT / OK').",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "REMOVE LIC", action: "announce", message: "Tela FACTORY RESET WITH USER LICENSE aberta: Todas as 4 opções (User Samples, Expansion Slots and Racks, User License e All Coach Scores) estão marcadas. Pressione F6 (EXECUTE) para restaurar tudo inclusive licenças da Roland Cloud.", description: "Abre a restauração completa incluindo remoção de licença da Roland Cloud e Racks." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "EXECUTE", action: "factory_reset_exec", description: "Executa a restauração de fábrica (pede confirmação EXIT / OK)." }
    ],
    items: [
      { id: "fr_us", label: "1. Reset with User Samples", paramKey: "resetWithUserSamples", type: "enum", options: ["OFF (Manter User Samples)", "ON (Restaurar de Fábrica)"], defaultVal: "OFF (Manter User Samples)", row: 1, col: 1, explanation: "Se ON, substitui todos os User Samples na memória do usuário pelos de fábrica." },
      { id: "fr_exp", label: "2. Reset with Instrument Expansion Slots", paramKey: "resetWithExpSlots", type: "enum", options: ["OFF (Manter Slots)", "ON (Restaurar Slots 1–3)"], defaultVal: "OFF (Manter Slots)", row: 2, col: 1, explanation: "Se ON, restaura os Slots de Expansão 1–6 para a configuração de fábrica (1 seta para baixo)." },
      { id: "fr_coach", label: "3. Reset with all coach scores", paramKey: "resetWithCoachScores", type: "enum", options: ["OFF (Manter Recordes)", "ON (Apagar Pontuações)"], defaultVal: "OFF (Manter Recordes)", row: 3, col: 1, explanation: "Se ON, apaga as pontuações gravadas no modo Coach (2 setas para baixo)." }
    ]
  },

  // ==================== EXPANSION & USER SAMPLE ====================
  EXPANSION_SLOT: {
    id: "EXPANSION_SLOT",
    title: "INSTRUMENT EXPANSIONS / KIT PACKS - SLOT (Gerenciar Slots 1 a 6)",
    manualSectionId: "expansion-user-sample",
    category: "Expansões e User Samples",
    accessPath: "Pressione o botão físico [EXPANSION] (atalho no simulador: tecla X) e depois [F1] (SLOT).",
    visualDescription:
      "Gerencia as até 6 Expansões de Instrumentos / Pacotes de Kits carregadas na memória ativa (Slots 1 a 6). " +
      "No topo esquerdo fica 'Auto Slot Load' (ON / OFF — carrega automaticamente nos slots as expansões exigidas ao trocar de kit). " +
      "Abaixo fica a lista vertical de 6 posições: " +
      "Slot 1 (EXV001 Wood Room Studio UK 1), Slot 2 (EXV002 Electronic&Percussion 1), Slot 3 (EXV003 The Brush 1), Slot 4 (EMPTY), Slot 5 (EMPTY), Slot 6 (EMPTY). " +
      "À direita aparecem a capa e detalhes da expansão selecionada. " +
      "No rodapé: [F1] SLOT, [F2] RACK (vai para o armazenamento de até 100 pacotes instalados), [F3] OPTIMIZE (desfragmenta a memória de slots), [F4] LOAD TO KIT (importa os kits da expansão selecionada para os kits do usuário 001–200, com opções LOAD ALL, PREVIEW e LOAD), [F5] REMOVE (descarrega do slot), [F6] EXP USAGE (mostra quais kits usam cada slot), e [SHIFT]+[F6] REMOVE ALL (limpa todos os 6 slots).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "SLOT", action: "goto", target: "EXPANSION_SLOT", description: "Aba atual: Slots 1 a 6 ativos." },
      { num: 2, label: "RACK", action: "goto", target: "EXPANSION_RACK", description: "Muda para a aba RACK (até 100 expansões/kit packs instalados)." },
      { num: 3, label: "OPTIMIZE", action: "confirm_action", confirmMsg: "Optimize the slots: Área dos Slots otimizada com sucesso!", description: "Otimiza (desfragmenta) a área de memória dos Slots 1–6." },
      { num: 4, label: "LOAD TO KIT", action: "announce", message: "Janela LOAD TO KIT aberta: use as setas para escolher um kit da expansão (ex: 1: UK Wet Booth .. 5: LoFi Overdrive), pressione F5 (PREVIEW) para ouvir, F3 (LOAD ALL) para carregar todos, ou F6 (LOAD) para copiar para um Kit do Usuário!", description: "Abre a janela LOAD TO KIT para carregar drum kits da expansão nos kits do usuário." },
      { num: 5, label: "REMOVE", action: "confirm_action", confirmMsg: "Expansão removida do Slot selecionado.", description: "Remove a atribuição da expansão do Slot selecionado." },
      { num: 6, label: "EXP USAGE", action: "announce", message: "Janela KITS USING EACH EXPANSION aberta: Slot 1 (EXV001) é usado nos Kits 046 UK Wet Booth, 047 UK Wet Studio, 048 LoFi Overdrive. Pressione Seta Direita e F5 (SELECT) para ir ao kit.", description: "Mostra a lista de Drum Kits que utilizam cada Slot." }
    ],
    shiftFButtons: [
      { num: 6, label: "REMOVE ALL", action: "confirm_action", confirmMsg: "Todos os Slots 1 a 6 foram limpos (REMOVE ALL).", description: "[SHIFT]+[F6]: Remove as expansões de todos os 6 slots de uma vez." }
    ],
    items: [
      { id: "exps_auto", label: "1. Auto Slot Load", paramKey: "autoSlotLoad", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Quando ON (padrão a partir da Ver.1.10), carrega automaticamente nos slots as expansões usadas pelo kit selecionado." },
      { id: "exps_s1", label: "2. Slot 1", paramKey: "expSlot1", type: "enum", options: ["EXV001 Wood Room Studio UK 1 (5 kits, 30 inst)", "EXV002 Electronic&Percussion 1 (25 kits, 712 inst)", "EXV003 The Brush 1 (2 kits, 22 inst)", "--- (EMPTY)"], defaultVal: "EXV001 Wood Room Studio UK 1 (5 kits, 30 inst)", row: 2, col: 1, explanation: "Slot 1 (pré-carregado de fábrica com EXV001: Wood Room Studio UK 1)." },
      { id: "exps_s2", label: "3. Slot 2", paramKey: "expSlot2", type: "enum", options: ["EXV002 Electronic&Percussion 1 (25 kits, 712 inst)", "EXV001 Wood Room Studio UK 1", "EXV003 The Brush 1", "--- (EMPTY)"], defaultVal: "EXV002 Electronic&Percussion 1 (25 kits, 712 inst)", row: 3, col: 1, explanation: "Slot 2 (pré-carregado de fábrica com EXV002: Electronic&Percussion 1)." },
      { id: "exps_s3", label: "4. Slot 3", paramKey: "expSlot3", type: "enum", options: ["EXV003 The Brush 1 (2 kits, 22 inst)", "EXV001 Wood Room Studio UK 1", "EXV002 Electronic&Percussion 1", "--- (EMPTY)"], defaultVal: "EXV003 The Brush 1 (2 kits, 22 inst)", row: 4, col: 1, explanation: "Slot 3 (pré-carregado de fábrica com EXV003: The Brush 1)." },
      { id: "exps_s4", label: "5. Slot 4", paramKey: "expSlot4", type: "enum", options: ["--- (EMPTY)", "EXV001 Wood Room Studio UK 1", "EXV002 Electronic&Percussion 1", "EXV003 The Brush 1"], defaultVal: "--- (EMPTY)", row: 5, col: 1, explanation: "Slot 4 (vazio por padrão)." },
      { id: "exps_s5", label: "6. Slot 5", paramKey: "expSlot5", type: "enum", options: ["--- (EMPTY)"], defaultVal: "--- (EMPTY)", row: 6, col: 1, explanation: "Slot 5 (vazio por padrão)." },
      { id: "exps_s6", label: "7. Slot 6", paramKey: "expSlot6", type: "enum", options: ["--- (EMPTY)"], defaultVal: "--- (EMPTY)", row: 7, col: 1, explanation: "Slot 6 (vazio por padrão)." }
    ]
  },

  EXPANSION_RACK: {
    id: "EXPANSION_RACK",
    title: "INSTRUMENT EXPANSIONS / KIT PACKS - RACK (Racks 1 a 100)",
    manualSectionId: "expansion-user-sample",
    category: "Expansões e User Samples",
    accessPath: "Pressione [EXPANSION] e depois [F2] (RACK).",
    visualDescription:
      "Gerencia o armazenamento interno de até 100 Expansões de Instrumento e Kit Packs instalados via Roland Cloud Connect (Wi-Fi) ou cartão SD. " +
      "No topo mostra a regra de ordenação atual ('Sort by [Default]') e o espaço livre ('Remaining: 6.06GB | 1/100'). " +
      "Abaixo fica uma grade de 5 colunas × 3 linhas por página mostrando os Racks instalados. " +
      "No rodapé: [F1] SLOT, [F2] RACK, [F3] SORT BY... (classifica por Default, ^Expansion ID, vExpansion ID, ^Purchase Type, vPurchase Type), [F4] LOAD TO SLOT (carrega a expansão do Rack em um dos Slots 1–6), [F5] UNINSTALL (desinstala do Rack), [F6] INSTALL (instala pacote salvo no cartão SD).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "SLOT", action: "goto", target: "EXPANSION_SLOT", description: "Volta para a aba SLOT (1–6)." },
      { num: 2, label: "RACK", action: "goto", target: "EXPANSION_RACK", description: "Aba atual: RACK (1–100)." },
      { num: 3, label: "SORT BY...", action: "announce", message: "Janela Rack Sort Rule: escolha entre Sort by [Default], [^ Expansion ID], [v Expansion ID], [^ Purchase Type] ou [v Purchase Type].", description: "Altera a ordem de classificação dos Racks." },
      { num: 4, label: "LOAD TO SLOT", action: "announce", message: "Janela LOAD TO SLOT aberta: escolha um Slot de destino (Slot 1 a Slot 6) com o Disco e pressione F6 (LOAD) para carregar a expansão.", description: "Carrega a expansão selecionada no Rack para um dos Slots 1 a 6." },
      { num: 5, label: "UNINSTALL", action: "confirm_action", confirmMsg: "Nota: Expansões pré-instaladas de fábrica (EXV001–003) não podem ser desinstaladas. Pacote de usuário desinstalado.", description: "Desinstala do Rack a expansão selecionada." },
      { num: 6, label: "INSTALL", action: "announce", message: "Instalador de Expansão via Cartão SD aberto (pasta /IMPORT).", description: "Instala uma expansão ou Kit Pack a partir do cartão SD." }
    ],
    items: [
      { id: "expr_r1", label: "Rack 1 (Linha 1, Col 1): EXV001 Wood Room Studio UK 1", paramKey: "rackCursor", type: "enum", options: ["Rack 1: EXV001 Wood Room Studio UK 1 (Pre-installed, 5 kits, 30 inst)"], defaultVal: "Rack 1: EXV001 Wood Room Studio UK 1 (Pre-installed, 5 kits, 30 inst)", row: 1, col: 1, explanation: "Rack 1 pré-instalado de fábrica." },
      { id: "expr_r2", label: "Rack 2 (Linha 1, Col 2): EXV002 Electronic&Percussion 1", paramKey: "rackCursor", type: "enum", options: ["Rack 2: EXV002 Electronic&Percussion 1 (Pre-installed, 25 kits, 712 inst)"], defaultVal: "Rack 2: EXV002 Electronic&Percussion 1 (Pre-installed, 25 kits, 712 inst)", row: 1, col: 2, explanation: "Rack 2 pré-instalado de fábrica (1 seta à direita)." },
      { id: "expr_r3", label: "Rack 3 (Linha 1, Col 3): EXV003 The Brush 1", paramKey: "rackCursor", type: "enum", options: ["Rack 3: EXV003 The Brush 1 (Pre-installed, 2 kits, 22 inst)"], defaultVal: "Rack 3: EXV003 The Brush 1 (Pre-installed, 2 kits, 22 inst)", row: 1, col: 3, explanation: "Rack 3 pré-instalado de fábrica (2 setas à direita)." },
      { id: "expr_r4", label: "Rack 4..100: EMPTY", paramKey: "rackCursor", type: "enum", options: ["EMPTY (Disponível para instalar via Roland Cloud / SD Card)"], defaultVal: "EMPTY (Disponível para instalar via Roland Cloud / SD Card)", row: 1, col: 4, explanation: "Posições livres no Rack (até 100 pacotes)." }
    ]
  },

  USER_SAMPLE_LIST: {
    id: "USER_SAMPLE_LIST",
    title: "USER SAMPLE - LIST (Lista e Configuração de Samples do Usuário 001–500)",
    manualSectionId: "expansion-user-sample",
    category: "Expansões e User Samples",
    accessPath: "Mantenha [SHIFT] pressionado e pressione [EXPANSION] (atalho no simulador: Shift + X).",
    visualDescription:
      "Gerencia os até 500 arquivos de áudio do usuário (WAV 44.1/48/96 kHz, 16/24/32 bits, até 180s por arquivo; total de 24 min mono / 12 min estéreo). " +
      "A tela é dividida em 2 colunas: " +
      "Coluna 1 (Esquerda): Lista vertical numerada de 001 a 500 (ex: 001 Piano Loop, 002 Ring Fx, 003 Say What, 004 Yeah, 005..500 vazios) e memória livre no topo ('Remaining: 98%'). " +
      "Coluna 2 (Direita — 1 seta à direita): 2 parâmetros para o sample selecionado: 'Play Type' (ONESHOT MONO, ONESHOT POLY, LOOP ALT) e 'Sample Gain' (-12 a +12 dB), além do quadro PROPERTY (Channel STEREO/MONO e Size). " +
      "No rodapé: [F1] PREVIEW (toca/para o sample selecionado), [F2] EDIT (abre o editor de ponto inicial/final Start/End Point e RENAME), [F3] RENUMBER (remove espaços vazios renumerando sequencialmente), [F4] OPTIMIZE (desfragmenta a memória de samples), [F5] DELETE (exclui samples marcados), [F6] IMPORT (importa arquivos WAV do cartão SD).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "PREVIEW ◄", action: "announce", message: "Reproduzindo prévia de áudio (PREVIEW) do User Sample selecionado!", description: "Toca (audiciona) o User Sample selecionado na lista." },
      { num: 2, label: "EDIT", action: "goto", target: "USER_SAMPLE_EDIT", description: "Abre a tela USER SAMPLE - EDIT para ajustar Start Point, End Point, Zoom e RENAME." },
      { num: 3, label: "RENUMBER", action: "confirm_action", confirmMsg: "User Samples renumerados sequencialmente para eliminar posições em branco!", description: "Desloca os samples para eliminar memórias vazias atualizando os kits." },
      { num: 4, label: "OPTIMIZE", action: "confirm_action", confirmMsg: "Área de memória de User Samples otimizada com sucesso!", description: "Otimiza a memória interna de User Samples." },
      { num: 5, label: "DELETE", action: "confirm_action", confirmMsg: "User Sample selecionado excluído da memória.", description: "Exclui um ou mais User Samples (use F5 CHECK / F4 CHECK ALL e F6 DELETE)." },
      { num: 6, label: "IMPORT", action: "goto", target: "USER_SAMPLE_IMPORT", description: "Abre a tela USER SAMPLE - IMPORT para importar arquivos .WAV do cartão SD." }
    ],
    items: [
      { id: "usl_sel", label: "Lista de User Samples (001 a 500)", paramKey: "userSampleCursor", type: "enum", options: ["001: Piano Loop (STEREO, 344KB)", "002: Ring Fx (STEREO, 58KB)", "003: Say What (STEREO, 112KB)", "004: Yeah (STEREO, 96KB)", "005: ---------------- (Vazio)", "006: ---------------- (Vazio)"], defaultVal: "001: Piano Loop (STEREO, 344KB)", row: 1, col: 1, explanation: "Coluna 1: Escolha o número do User Sample (001 a 500) com [▲]/[▼] ou Disco." },
      { id: "usl_ptype", label: "Play Type (Como o Sample Toca)", paramKey: "userSamplePlayType", type: "enum", options: ["ONESHOT MONO", "ONESHOT POLY", "LOOP ALT"], defaultVal: "ONESHOT MONO", row: 1, col: 2, explanation: "Coluna 2, Linha 1 (1 seta à direita): ONESHOT MONO (corta a nota anterior ao bater de novo), ONESHOT POLY (notas se sobrepõem) ou LOOP ALT (toca em loop; cada batida liga ou para o loop)." },
      { id: "usl_gain", label: "Sample Gain (Volume do Sample)", paramKey: "userSampleGain", type: "int", min: -12, max: 12, unit: "dB", defaultVal: 0, row: 2, col: 2, explanation: "Coluna 2, Linha 2 (1 seta à direita e 1 para baixo): Ajusta o volume do User Sample (-12 a +12 dB)." }
    ]
  },

  USER_SAMPLE_EDIT: {
    id: "USER_SAMPLE_EDIT",
    title: "USER SAMPLE - EDIT (Recorte de Início/Fim e Renomear Sample)",
    manualSectionId: "expansion-user-sample",
    category: "Expansões e User Samples",
    accessPath: "Na tela USER SAMPLE - LIST ([SHIFT] + [EXPANSION]), pressione [F2] (EDIT).",
    visualDescription:
      "Mostra a forma de onda do User Sample no centro e 2 parâmetros numéricos lado a lado na parte inferior: " +
      "Coluna 1 (Esquerda): Start Point (0 a 07937742 — ponto exato onde o áudio começa a tocar). " +
      "Coluna 2 (Direita — 1 seta à direita): End Point (257 a 07937999 — ponto exato onde o áudio para de tocar). " +
      "Segure [SHIFT] + Setas [◄]/[►] para dar Zoom horizontal na onda, ou [SHIFT] + Setas [▲]/[▼] para dar Zoom vertical. " +
      "No rodapé: [F1] PREVIEW, [F2] EXIT, [F6] RENAME (edita o nome de 16 caracteres do sample).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "PREVIEW ◄", action: "announce", message: "Reproduzindo prévia do User Sample entre Start Point e End Point!", description: "Testa o som do sample com os pontos de corte atuais." },
      { num: 2, label: "EXIT", action: "goto", target: "USER_SAMPLE_LIST", description: "Volta para a lista de User Samples." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "RENAME", action: "goto", target: "KIT_NAME", description: "Abre o editor de nome (até 16 caracteres) para o User Sample." }
    ],
    items: [
      { id: "use_start", label: "Start Point (Ponto de Início)", paramKey: "userSampleStart", type: "int", min: 0, max: 14800, step: 100, defaultVal: 0, row: 1, col: 1, explanation: "Coluna 1: Ponto inicial de reprodução do sample." },
      { id: "use_end", label: "End Point (Ponto de Término)", paramKey: "userSampleEnd", type: "int", min: 257, max: 7937999, step: 100, defaultVal: 14880, row: 1, col: 2, explanation: "Coluna 2 (1 seta à direita): Ponto final de reprodução do sample." }
    ]
  },

  USER_SAMPLE_IMPORT: {
    id: "USER_SAMPLE_IMPORT",
    title: "USER SAMPLE - IMPORT (Importar Arquivo WAV do Cartão SD)",
    manualSectionId: "expansion-user-sample",
    category: "Expansões e User Samples",
    accessPath: "Na tela USER SAMPLE - LIST ([SHIFT] + [EXPANSION]), escolha um slot vazio e pressione [F6] (IMPORT).",
    visualDescription:
      "Navegador de arquivos e pastas do cartão SD (pasta /IMPORT). " +
      "Como navegar: Seta Cima [▲] e Seta Baixo [▼] movem entre os arquivos .WAV; Seta Direita [►] entra em uma pasta (OPEN); Seta Esquerda [◄] sai da pasta para o nível superior (FOLDER UP). " +
      "No rodapé: [F1] PREVIEW (testa arquivos WAV 44.1kHz 16/24 bits), [F4] CHECK ALL (marca todos os arquivos da pasta), [F5] CHECK (marca/desmarca o arquivo atual para importação múltipla), [F6] IMPORT (confirma a importação).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "PREVIEW ◄", action: "announce", message: "Reproduzindo prévia do arquivo WAV selecionado no Cartão SD.", description: "Testa o arquivo de áudio do cartão SD antes de importar." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "CHECK ALL", action: "announce", message: "Todos os arquivos .WAV da pasta /IMPORT foram marcados!", description: "Marca todos os arquivos de áudio da pasta de uma vez." },
      { num: 5, label: "CHECK", action: "announce", message: "Arquivo .WAV marcado/desmarcado para importação em lote.", description: "Marca ou desmarca o arquivo atual." },
      { num: 6, label: "IMPORT", action: "confirm_action", confirmMsg: "Import selected sample: Arquivo .WAV importado com sucesso para a memória de User Sample!", description: "Importa o(s) arquivo(s) selecionado(s) para o V31 (pede confirmação OK)." }
    ],
    items: [
      { id: "usi_file", label: "Arquivo WAV na pasta /IMPORT do Cartão SD", paramKey: "importWavCursor", type: "enum", options: ["MySample01.wav (44.1kHz 16bit)", "MySample02.wav (44.1kHz 24bit)", "MySample03.wav", "MySample04.wav", "MySample05.wav"], defaultVal: "MySample01.wav (44.1kHz 16bit)", row: 1, col: 1, explanation: "Use [▲]/[▼] para escolher o arquivo, [◄]/[►] para navegar entre pastas, [F5] CHECK para marcar e [F6] IMPORT para importar." }
    ]
  },

  // ==================== CLICK (METRÔNOMO) ====================
  CLICK_TEMPO: {
    id: "CLICK_TEMPO",
    title: "CLICK - TEMPO (Metrônomo: Andamento, Compasso e Mixer de Subdivisões)",
    manualSectionId: "click-metronomo",
    category: "Performance / Metrônomo",
    accessPath: "Pressione o botão físico [CLICK] (atalho no simulador: tecla C). Dica: [SHIFT] + [CLICK] (Shift + C) liga/desliga o metrônomo instantaneamente de qualquer tela!",
    visualDescription:
      "A tela CLICK - TEMPO possui 3 linhas de parâmetros: " +
      "Linha 1 (Topo): Coluna 1 = Tempo (20.0 a 260.0 BPM; segure [SHIFT] ao girar o Disco para ajustar casas decimais de 0.1 BPM), Coluna 2 (1 seta à direita) = Beat (Fórmula de compasso: 1 a 9 pulsos por compasso). " +
      "Linha 2 (Centro): Template (predefinição de subdivisão rítmica: QTR NOTES, 8TH NOTES, UPBEATS, 16TH NOTES, 3 OVER 2, 8TH NOTE TRIPLETS — ao mudar o Template, os 5 faders abaixo são atualizados automaticamente!). " +
      "Linha 3 (Base): 5 faders verticais de volume (OFF, 1 a 9, MAX) dispostos em 5 colunas da esquerda para a direita, mais o indicador de status do Metrônomo (ON / OFF) à direita: " +
      "Col 1 = Accent (cabeça do compasso), Col 2 = Semínima (Quarter ♩), Col 3 = Colcheia (Eighth ♪), Col 4 = Semicolcheia (Sixteenth ♬), Col 5 = Tercina (Triplet). " +
      "No rodapé: [F1] TEMPO, [F2] SETUP (configura o som, volume, pan, LED e Tap Pad do metrônomo), [F4] TAP TEMPO (bata repetidamente em [F4] no ritmo desejado para definir o andamento), [F6] CLICK (liga/desliga o metrônomo).",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "TEMPO", action: "goto", target: "CLICK_TEMPO", description: "Aba atual: Andamento, Compasso, Template e volumes de subdivisão." },
      { num: 2, label: "SETUP", action: "goto", target: "CLICK_SETUP", description: "Muda para a aba SETUP (timbre do clique, volume, pan, LED e Tap Pad)." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "TAP TEMPO", action: "tap_tempo", description: "Pressione repetidamente no ritmo desejado para medir e aplicar o andamento (Tap Tempo, 20.0 a 260.0 BPM)." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "CLICK (ON/OFF)", action: "toggle_click", description: "Liga (ON) ou para (OFF) o metrônomo (também acessível de qualquer tela com SHIFT + CLICK)." }
    ],
    items: [
      { id: "clk_tempo", label: "Tempo (Andamento BPM)", paramKey: "clickTempo", type: "float", min: 20.0, max: 260.0, step: 1.0, shiftStep: 0.1, unit: "BPM", defaultVal: 120.0, row: 1, col: 1, explanation: "Linha 1, Coluna 1 (posição inicial): Andamento de 20.0 a 260.0 BPM. Segure [SHIFT] ao girar o Disco para alterar em décimos (0.1 BPM)." },
      { id: "clk_beat", label: "Beat (Pulsos por Compasso 1–9)", paramKey: "clickBeat", type: "int", min: 1, max: 9, defaultVal: 4, row: 1, col: 2, explanation: "Linha 1, Coluna 2 (1 seta à direita): Número de tempos por compasso (1 a 9)." },
      { id: "clk_tmpl", label: "Template (Modelo Rítmico)", paramKey: "clickTemplate", type: "enum", options: ["QTR NOTES", "8TH NOTES", "UPBEATS", "16TH NOTES", "3 OVER 2", "8TH NOTE TRIPLETS"], defaultVal: "QTR NOTES", row: 2, col: 1, explanation: "Linha 2 (1 seta para baixo): Predefinição de subdivisões do metrônomo. Carrega automaticamente os níveis nos 5 faders da Linha 3." },
      { id: "clk_acc", label: "Fader 1: Accent (Acento do Tempo 1)", paramKey: "clickAccentVol", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "9", "MAX"], defaultVal: "MAX", row: 3, col: 1, explanation: "Linha 3, Coluna 1 (2 setas para baixo): Volume da batida acentuada do compasso (OFF, 1–9, MAX)." },
      { id: "clk_qtr", label: "Fader 2: Quarter (Semínima ♩)", paramKey: "clickQuarterVol", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "9", "MAX"], defaultVal: "MAX", row: 3, col: 2, explanation: "Linha 3, Coluna 2 (2 setas para baixo e 1 à direita): Volume das semínimas." },
      { id: "clk_8th", label: "Fader 3: Eighth (Colcheia ♪)", paramKey: "clickEighthVol", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "9", "MAX"], defaultVal: "OFF", row: 3, col: 3, explanation: "Linha 3, Coluna 3 (2 setas para baixo e 2 à direita): Volume das colcheias." },
      { id: "clk_16th", label: "Fader 4: Sixteenth (Semicolcheia ♬)", paramKey: "clickSixteenthVol", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "9", "MAX"], defaultVal: "OFF", row: 3, col: 4, explanation: "Linha 3, Coluna 4 (2 setas para baixo e 3 à direita): Volume das semicolcheias." },
      { id: "clk_trip", label: "Fader 5: Triplet (Tercina)", paramKey: "clickTripletVol", type: "enum", options: ["OFF", "1", "2", "3", "4", "5", "6", "7", "8", "9", "MAX"], defaultVal: "OFF", row: 3, col: 5, explanation: "Linha 3, Coluna 5 (2 setas para baixo e 4 à direita): Volume das tercinas." }
    ]
  },

  CLICK_SETUP: {
    id: "CLICK_SETUP",
    title: "CLICK - SETUP (Andamento, Compasso, Som, Volume, Pan, LED e Tap Pad)",
    manualSectionId: "click-metronomo",
    category: "Performance / Metrônomo",
    accessPath: "Pressione [CLICK] e depois [F2] (SETUP).",
    visualDescription:
      "A tela CLICK - SETUP é estruturada em uma grade 2D de 4 linhas por 2 colunas (da esquerda para a direita): " +
      "Linha 1 (Topo, comum com a aba TEMPO): Coluna 1 (Esquerda) = Tempo (Andamento: 20.0 a 260.0 BPM); Coluna 2 (Direita — 1 seta à direita [►]) = Beat (Compasso: 1 a 9 pulsos). " +
      "Abaixo da linha divisória, o painel divide-se em Coluna 1 (bloco SOUND à esquerda) e Coluna 2 (bloco OTHERS à direita): " +
      "Linha 2 (1 seta para baixo [▼]): Coluna 1 = Sound (15 timbres de click: METRONOME, CLICK, VOICE, BEEP 1, BEEP 2, TEK CLICK, STICKS, CLAVES, WOOD BLOCK, COWBELL, AGOGO, TRIANGLE, TAMBOURINE, MARACAS, CABASA); Coluna 2 (1 seta à direita [►]) = LED Reference (Luz do botão [CLICK] piscando no tempo: OFF, ON). " +
      "Linha 3 (2 setas para baixo [▼]): Coluna 1 = Level (Volume do click: -INF, -60.0 a +6.0 dB); Coluna 2 (1 seta à direita [►]) = Tap Pad Switch (Pad ON/OFF para Tap Tempo: OFF, ON). " +
      "Linha 4 (3 setas para baixo [▼]): Coluna 1 = Pan (Panorama estéreo: L30 a CENTER a R30); Coluna 2 (1 seta à direita [►]) = Tap Pad (Lista de pads para sync/tap tempo: KICK, SNARE HEAD..AUX RIM). " +
      "Use as 4 setas [▲][▼][◄][►] para navegar pela grade 4×2 e gire o Disco [+]/[-] para ajustar.",
    layoutType: "grid",
    fButtons: [
      { num: 1, label: "TEMPO", action: "goto", target: "CLICK_TEMPO", description: "Volta para a aba TEMPO (Template e 5 faders de subdivisão)." },
      { num: 2, label: "SETUP", action: "goto", target: "CLICK_SETUP", description: "Aba atual: SETUP (Grade 4 linhas × 2 colunas)." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "TAP TEMPO", action: "tap_tempo", description: "Tap Tempo por botão." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "CLICK (ON/OFF)", action: "toggle_click", description: "Liga (ON) ou para (OFF) o metrônomo." }
    ],
    items: [
      { id: "clks_tempo", label: "Tempo (Andamento BPM — Linha 1, Col 1)", paramKey: "clickTempo", type: "float", min: 20.0, max: 260.0, step: 1.0, shiftStep: 0.1, unit: "BPM", defaultVal: 120.0, row: 1, col: 1, explanation: "Linha 1, Coluna 1 (posição inicial no topo esquerdo): Andamento do metrônomo de 20.0 a 260.0 BPM (segure SHIFT + Disco para décimos de 0.1 BPM)." },
      { id: "clks_beat", label: "Beat (Compasso 1–9 — Linha 1, Col 2)", paramKey: "clickBeat", type: "int", min: 1, max: 9, defaultVal: 4, row: 1, col: 2, explanation: "Linha 1, Coluna 2 (1 seta à direita [►]): Fórmula de compasso (1 a 9 pulsos por compasso)." },
      { id: "clks_snd", label: "SOUND: Sound (Tipo de Som do Click — Linha 2, Col 1)", paramKey: "clickSound", type: "enum", options: ["METRONOME", "CLICK", "VOICE", "BEEP 1", "BEEP 2", "TEK CLICK", "STICKS", "CLAVES", "WOOD BLOCK", "COWBELL", "AGOGO", "TRIANGLE", "TAMBOURINE", "MARACAS", "CABASA"], defaultVal: "METRONOME", row: 2, col: 1, explanation: "Linha 2, Coluna 1 (1 seta para baixo [▼]): Seleciona entre os 15 tipos de som de click (VOICE conta os tempos em voz alta)." },
      { id: "clks_led", label: "OTHERS: LED Reference (Luz ON/OFF — Linha 2, Col 2)", paramKey: "clickLedRef", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 2, explanation: "Linha 2, Coluna 2 (1 seta para baixo [▼] + 1 seta à direita [►]): Especifica se a luz LED do botão físico [CLICK] pisca junto com o metrônomo (ON) ou fica apagada (OFF)." },
      { id: "clks_lvl", label: "SOUND: Level (Volume do Click — Linha 3, Col 1)", paramKey: "clickLevel", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 3, col: 1, explanation: "Linha 3, Coluna 1 (2 setas para baixo [▼]): Ajusta o volume interno do metrônomo (-INF a +6.0 dB)." },
      { id: "clks_tapsw", label: "OTHERS: Tap Pad Switch (Pad ON/OFF — Linha 3, Col 2)", paramKey: "clickTapPadSw", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 3, col: 2, explanation: "Linha 3, Coluna 2 (2 setas para baixo [▼] + 1 seta à direita [►]): Liga (ON) ou desliga (OFF) a função de definir o andamento batendo no pad." },
      { id: "clks_pan", label: "SOUND: Pan (Panorama Estéreo — Linha 4, Col 1)", paramKey: "clickPan", type: "pan", defaultVal: "CENTER", row: 4, col: 1, explanation: "Linha 4, Coluna 1 (3 setas para baixo [▼]): Posição estéreo (panorama) do metrônomo (L30 a CENTER a R30)." },
      { id: "clks_tappad", label: "OTHERS: Tap Pad (Pad para Sync Tempo — Linha 4, Col 2)", paramKey: "clickTapPad", type: "enum", options: ["KICK", "SNARE HEAD", "SNARE RIM", "SNARE XSTICK", "TOM1 HEAD", "TOM1 RIM", "TOM2 HEAD", "TOM2 RIM", "TOM3 HEAD", "TOM3 RIM", "HI-HAT BOW", "HI-HAT EDGE", "CRASH1 BOW", "CRASH1 EDGE", "CRASH2 BOW", "CRASH2 EDGE", "RIDE BOW", "RIDE EDGE", "RIDE BELL", "AUX HEAD", "AUX RIM"], defaultVal: "SNARE HEAD", row: 4, col: 2, explanation: "Linha 4, Coluna 2 (3 setas para baixo [▼] + 1 seta à direita [►]): Lista de pads/zonas para sincronizar o Tap Tempo batendo no pad (KICK, SNARE HEAD..AUX RIM)." }
    ]
  },

  // ==================== COACH (6 MODOS DE TREINO) ====================
  COACH_MENU: {
    id: "COACH_MENU",
    title: "COACH (Menu de Modos de Prática e Treino)",
    manualSectionId: "coach-mode",
    category: "Performance / Coach",
    accessPath: "Pressione o botão físico [COACH] (atalho no simulador: tecla O).",
    visualDescription:
      "A tela COACH é estruturada em uma grade de 4 colunas por 2 linhas contendo 6 modos de treino: " +
      "Linha 1: Coluna 1 = PHRASE TRAINER, Coluna 2 = TIME CHECK (1 seta à direita), Coluna 3 = QUIET COUNT (2 setas à direita), Coluna 4 = AUTO UP/DOWN (3 setas à direita). " +
      "Linha 2: Coluna 1 = STROKE MONITOR (1 seta para baixo), Coluna 2 = BLAST BEAST (1 seta para baixo e 1 à direita). " +
      "Use as setas [▲][▼][◄][►] ou o Disco [+]/[-] para selecionar a modalidade e pressione [ENTER] para entrar.",
    layoutType: "grid_menu",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "---", action: "none", description: "Sem função." }
    ],
    items: [
      { id: "ch_phrase", label: "1. PHRASE TRAINER (Linha 1, Coluna 1)", row: 1, col: 1, targetScreen: "COACH_PHRASE_TRAINER", explanation: "Pratica tocar exatamente junto com exercícios rudimentares, levadas (Grooves) e viradas (Fills)." },
      { id: "ch_time", label: "2. TIME CHECK (Linha 1, Coluna 2 — 1 seta à direita)", row: 1, col: 2, targetScreen: "COACH_TIME_CHECK", explanation: "Verifica a precisão do seu tempo (atrasado Behind vs adiantado Ahead) ao tocar com o metrônomo." },
      { id: "ch_quiet", label: "3. QUIET COUNT (Linha 1, Coluna 3 — 2 setas à direita)", row: 1, col: 3, targetScreen: "COACH_QUIET_COUNT", explanation: "Desenvolve o relógio interno alternando compassos com clique audível ('Sounding') e compassos em silêncio ('Quiet')." },
      { id: "ch_autoup", label: "4. AUTO UP/DOWN (Linha 1, Coluna 4 — 3 setas à direita)", row: 1, col: 4, targetScreen: "COACH_AUTO_UP_DOWN", explanation: "Pratica tocar acompanhando um andamento que sobe e desce gradualmente." },
      { id: "ch_stroke", label: "5. STROKE MONITOR (Linha 2, Coluna 1 — 1 seta para baixo)", row: 2, col: 1, targetScreen: "COACH_STROKE_MONITOR", explanation: "Treina a regularidade de força (velocidade constante Even vs Uneven) entre mãos ou pedais duplos." },
      { id: "ch_blast", label: "6. BLAST BEAST (Linha 2, Coluna 2 — 1 seta para baixo e 1 à direita)", row: 2, col: 2, targetScreen: "COACH_BLAST_BEAST", explanation: "Desafio de explosão e resistência: toque o mais rápido e forte possível durante 10 segundos!" }
    ]
  },

  COACH_PHRASE_TRAINER: {
    id: "COACH_PHRASE_TRAINER",
    title: "COACH - PHRASE TRAINER (Seleção de Exercícios, Grooves e Fills)",
    manualSectionId: "coach-mode",
    category: "Performance / Coach",
    accessPath: "Pressione [COACH] > PHRASE TRAINER (Linha 1, Coluna 1) > [ENTER].",
    visualDescription:
      "Seleciona uma categoria (Exercises: rudimentos básicos como Single Strokes, Double Strokes, Paradiddles; ou Grooves & Fills) com [◄]/[►] ou [F1] (CATEGORY), e escolhe a frase com [▲]/[▼] ou Disco. " +
      "No rodapé: [F1] CATEGORY, [F3] SETUP (abre a janela de configuração de Kit 001–200, Score LED OFF/ON e Score Mark Type1–4), [F4] PREVIEW (ouve a frase), [F5] CLICK (configura o metrônomo), [F6] START (abre a tela da partitura para praticar).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "CATEGORY", action: "toggle_param", paramKey: "coachPhraseCat", description: "Alterna entre as categorias 'Exercises' e 'Grooves & Fills'." },
      { num: 2, label: "---", action: "none", description: "Sem função na tela de seleção." },
      { num: 3, label: "SETUP", action: "goto", target: "COACH_PHRASE_SETUP", description: "Abre a janela COACH - PHRASE TRAINER - SETUP (Kit, Score LED e Score Mark)." },
      { num: 4, label: "PREVIEW ◄", action: "announce", message: "Reproduzindo demonstração (PREVIEW) da frase selecionada.", description: "Ouve a frase selecionada antes de iniciar." },
      { num: 5, label: "CLICK", action: "goto", target: "CLICK_TEMPO", description: "Abre as configurações do metrônomo." },
      { num: 6, label: "START", action: "goto", target: "COACH_PHRASE_RUN", description: "Abre a tela de partitura do Phrase Trainer para iniciar a prática." }
    ],
    items: [
      { id: "cpt_cat", label: "1. Category (Exercises / Grooves & Fills)", paramKey: "coachPhraseCat", type: "enum", options: ["Exercises", "Grooves & Fills"], defaultVal: "Exercises", row: 1, col: 1, explanation: "Use [◄]/[►] ou [F1] para alternar a categoria." },
      { id: "cpt_phr", label: "2. Phrase (Exercício ou Levada)", paramKey: "coachPhraseSel", type: "enum", options: ["1-1: Single Strokes", "1-2: Double Strokes", "1-3: Single Paradiddle", "1-4: Flam Accent", "2-1: 8beat Groove 1", "2-2: 16beat Groove", "2-3: Shuffle Groove", "2-4: Rock Fill"], defaultVal: "1-1: Single Strokes", row: 2, col: 1, explanation: "Use [▲]/[▼] ou Disco para escolher a frase (mostra também o Best Score salvo)." }
    ]
  },

  COACH_PHRASE_SETUP: {
    id: "COACH_PHRASE_SETUP",
    title: "COACH - PHRASE TRAINER - SETUP (Kit, Score LED e Score Mark)",
    manualSectionId: "coach-mode",
    category: "Performance / Coach",
    accessPath: "Em COACH > PHRASE TRAINER, pressione [F3] (SETUP).",
    visualDescription:
      "Janela sobreposta com 3 parâmetros verticais: " +
      "Linha 1: Kit (001 a 200 — Drum Kit usado durante o Phrase Trainer). " +
      "Linha 2: Score LED (OFF, ON — quando ON, o botão físico [KIT] acende indicando a precisão de cada batida). " +
      "Linha 3: Score Mark (Type 1 a Type 4 — ícone de avaliação exibido na partitura). " +
      "Pressione [F3] (CLOSE) ou [EXIT] para voltar.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "" },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "CLOSE", action: "goto", target: "COACH_PHRASE_TRAINER", description: "Fecha a janela SETUP e retorna ao Phrase Trainer." },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "---", action: "none", description: "" },
      { num: 6, label: "---", action: "none", description: "" }
    ],
    items: [
      { id: "cpts_kit", label: "1. Kit (001–200)", paramKey: "coachPhraseKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 1, col: 1, explanation: "Seleciona qual Drum Kit (001 a 200) será usado no Phrase Trainer." },
      { id: "cpts_led", label: "2. Score LED", paramKey: "coachScoreLed", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 2, col: 1, explanation: "Quando ON, o LED do botão [KIT] brilha conforme o acerto das notas (1 seta para baixo)." },
      { id: "cpts_mark", label: "3. Score Mark", paramKey: "coachScoreMark", type: "enum", options: ["Type 1", "Type 2", "Type 3", "Type 4"], defaultVal: "Type 1", row: 3, col: 1, explanation: "Estilo da marcação visual de acerto exibida na partitura (Type 1 a Type 4 — 2 setas para baixo)." }
    ]
  },

  COACH_PHRASE_RUN: {
    id: "COACH_PHRASE_RUN",
    title: "COACH - PHRASE TRAINER (Partitura e Execução do Treino)",
    manualSectionId: "coach-mode",
    category: "Performance / Coach",
    accessPath: "Em COACH > PHRASE TRAINER, pressione [F6] (START).",
    visualDescription:
      "Tela de prática com partitura em tempo real. No topo mostra o título da frase, Best Score, Tempo (20.0 a 260.0 BPM, ajustável diretamente com o Disco [+]/[-]) e Pad alvo. " +
      "No rodapé: [F1] PLAY/STOP (inicia/para a contagem e avaliação), [F2] LOOP (ON/OFF — repete a prática continuamente), [F3] DEMO (ON/OFF — liga/desliga a batida guia de exemplo), [F5] TARGET (escolhe o pad avaliado nos exercícios rudimentares: SNARE, TOM1..AUX), [F6] EXIT (volta para a lista de frases).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "PLAY / STOP", action: "coach_run", mode: "PHRASE TRAINER", description: "Inicia (PLAY) ou interrompe (STOP) a execução do exercício e anuncia a pontuação (Score 0–150)." },
      { num: 2, label: "LOOP (ON/OFF)", action: "toggle_param", paramKey: "coachPhraseLoop", description: "Quando ON, repete o exercício em loop contínuo sem parar ao final." },
      { num: 3, label: "DEMO (ON/OFF)", action: "toggle_param", paramKey: "coachPhraseDemo", description: "Liga (ON) ou desliga (OFF) o som de demonstração da frase." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "TARGET", action: "toggle_param", paramKey: "coachPhraseTargetPad", description: "Em Exercises, seleciona qual pad será praticado (SNARE, TOM1, TOM2, TOM3, HI-HAT, RIDE, KICK)." },
      { num: 6, label: "EXIT", action: "goto", target: "COACH_PHRASE_TRAINER", description: "Sai da tela da partitura e retorna à seleção de frases." }
    ],
    items: [
      { id: "cptr_tempo", label: "1. Tempo (Andamento BPM)", paramKey: "clickTempo", type: "float", min: 20.0, max: 260.0, step: 1.0, shiftStep: 0.1, unit: "BPM", defaultVal: 120.0, row: 1, col: 1, explanation: "Use o Disco [+]/[-] para ajustar o andamento da frase (20.0 a 260.0 BPM)." },
      { id: "cptr_target", label: "2. Target Pad (F5)", paramKey: "coachPhraseTargetPad", type: "enum", options: ["SNARE", "TOM1", "TOM2", "TOM3", "HI-HAT", "RIDE", "KICK", "ALL (Grooves & Fills)"], defaultVal: "SNARE", row: 2, col: 1, explanation: "Pad avaliado no exercício atual." },
      { id: "cptr_loop", label: "3. Loop (F2)", paramKey: "coachPhraseLoop", type: "enum", options: ["OFF", "ON"], defaultVal: "OFF", row: 3, col: 1, explanation: "Repetição contínua da frase (OFF / ON)." },
      { id: "cptr_demo", label: "4. Demo Sound (F3)", paramKey: "coachPhraseDemo", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 4, col: 1, explanation: "Som guia de demonstração (OFF / ON)." }
    ]
  },

  COACH_TIME_CHECK: {
    id: "COACH_TIME_CHECK",
    title: "COACH - TIME CHECK (Avaliação de Precisão com o Pulso)",
    manualSectionId: "coach-mode",
    category: "Performance / Coach",
    accessPath: "Pressione [COACH] > Seta Direita 1x até TIME CHECK (Linha 1, Coluna 2) > [ENTER].",
    visualDescription:
      "Verifica quão preciso é o seu tempo ao tocar junto com o metrônomo, mostrando se cada batida foi atrasada (Behind), cravada (GOOD) ou adiantada (Ahead) e a porcentagem de Accuracy (%). " +
      "No lado esquerdo há uma lista vertical de 9 parâmetros: " +
      "Linha 1 (bloco CLICK): Tempo (20.0 a 260.0 BPM). " +
      "Linhas 2 a 8 (bloco SETUP): Length (4, 8, 16, 32 meas, INF), Difficulty (EASY, HARD), Pad 1 (OFF, KICK..AUX), Pad 2 (HI-HAT), Pad 3 (SNARE), Pad 4 (KICK), Graph Direction (BEHIND-AHEAD, AHEAD-BEHIND). " +
      "No rodapé: [F5] CLICK, [F6] START / STOP.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "" },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "CLICK", action: "goto", target: "CLICK_TEMPO", description: "Configura o metrônomo." },
      { num: 6, label: "START", action: "coach_run", mode: "TIME CHECK", description: "Inicia/para o treino TIME CHECK e anuncia a precisão (Accuracy % e Score)." }
    ],
    items: [
      { id: "ctc_tempo", label: "1. CLICK - Tempo (BPM)", paramKey: "clickTempo", type: "float", min: 20.0, max: 260.0, step: 1.0, unit: "BPM", defaultVal: 120.0, row: 1, col: 1, explanation: "Andamento do metrônomo (20.0 a 260.0 BPM)." },
      { id: "ctc_len", label: "2. SETUP - Length (Compassos)", paramKey: "tcLength", type: "enum", options: ["4 meas", "8 meas", "16 meas", "32 meas", "INF"], defaultVal: "8 meas", row: 2, col: 1, explanation: "Número de compassos do exercício (4, 8, 16, 32 compassos, ou INF contínuo até apertar F6 STOP — 1 seta para baixo)." },
      { id: "ctc_diff", label: "3. Difficulty (Rigor da Pontuação)", paramKey: "tcDifficulty", type: "enum", options: ["EASY", "HARD"], defaultVal: "EASY", row: 3, col: 1, explanation: "EASY (nível padrão) ou HARD (avaliação rigorosa — 2 setas para baixo)." },
      { id: "ctc_p1", label: "4. Pad 1", paramKey: "tcPad1", type: "enum", options: ["OFF", "KICK", "SNARE", "HI-HAT", "RIDE", "TOM1", "TOM2", "TOM3", "CRASH1", "CRASH2", "AUX"], defaultVal: "OFF", row: 4, col: 1, explanation: "Primeiro pad avaliado (3 setas para baixo)." },
      { id: "ctc_p2", label: "5. Pad 2", paramKey: "tcPad2", type: "enum", options: ["OFF", "KICK", "SNARE", "HI-HAT", "RIDE", "TOM1", "TOM2", "TOM3", "CRASH1", "CRASH2", "AUX"], defaultVal: "HI-HAT", row: 5, col: 1, explanation: "Segundo pad avaliado (4 setas para baixo)." },
      { id: "ctc_p3", label: "6. Pad 3", paramKey: "tcPad3", type: "enum", options: ["OFF", "KICK", "SNARE", "HI-HAT", "RIDE", "TOM1", "TOM2", "TOM3", "CRASH1", "CRASH2", "AUX"], defaultVal: "SNARE", row: 6, col: 1, explanation: "Terceiro pad avaliado (5 setas para baixo)." },
      { id: "ctc_p4", label: "7. Pad 4", paramKey: "tcPad4", type: "enum", options: ["OFF", "KICK", "SNARE", "HI-HAT", "RIDE", "TOM1", "TOM2", "TOM3", "CRASH1", "CRASH2", "AUX"], defaultVal: "KICK", row: 7, col: 1, explanation: "Quarto pad avaliado (6 setas para baixo)." },
      { id: "ctc_dir", label: "8. Graph Direction", paramKey: "tcGraphDir", type: "enum", options: ["BEHIND-AHEAD", "AHEAD-BEHIND"], defaultVal: "BEHIND-AHEAD", row: 8, col: 1, explanation: "Orientação do gráfico de sincronia (7 setas para baixo)." }
    ]
  },

  COACH_QUIET_COUNT: {
    id: "COACH_QUIET_COUNT",
    title: "COACH - QUIET COUNT (Sensibilidade Física do Andamento)",
    manualSectionId: "coach-mode",
    category: "Performance / Coach",
    accessPath: "Pressione [COACH] > Seta Direita 2x até QUIET COUNT (Linha 1, Coluna 3) > [ENTER].",
    visualDescription:
      "O metrônomo toca durante os primeiros compassos e fica mudo ('Quiet') nos compassos seguintes para testar se você mantém o andamento sozinho! Ao final de cada bloco silencioso, anuncia o seu SCORE (%). " +
      "Lista vertical de 3 parâmetros à esquerda: " +
      "Linha 1: Tempo (20.0 a 260.0 BPM). " +
      "Linha 2: Measure / Measures (2, 4, 8, 16 compassos para o ciclo completo). " +
      "Linha 3: Quiet (RANDOM, 1, 2, 4 compassos silenciosos — não pode ser maior que metade de Measures). " +
      "No rodapé: [F5] CLICK, [F6] START / STOP.",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "" },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "CLICK", action: "goto", target: "CLICK_TEMPO", description: "Configura o metrônomo." },
      { num: 6, label: "START", action: "coach_run", mode: "QUIET COUNT", description: "Inicia/para o treino QUIET COUNT." }
    ],
    items: [
      { id: "cqc_tempo", label: "1. CLICK - Tempo (BPM)", paramKey: "clickTempo", type: "float", min: 20.0, max: 260.0, step: 1.0, unit: "BPM", defaultVal: 120.0, row: 1, col: 1, explanation: "Andamento do metrônomo." },
      { id: "cqc_meas", label: "2. SETUP - Measures (Duração do Ciclo)", paramKey: "qcMeasures", type: "enum", options: ["2", "4", "8", "16"], defaultVal: "4", row: 2, col: 1, explanation: "Quantidade total de compassos do ciclo (tocando + silencioso — 1 seta para baixo)." },
      { id: "cqc_quiet", label: "3. SETUP - Quiet (Compassos em Silêncio)", paramKey: "qcQuiet", type: "enum", options: ["RANDOM", "1", "2", "4"], defaultVal: "1", row: 3, col: 1, explanation: "Duração do intervalo silencioso dentro do ciclo (RANDOM, 1, 2 ou 4 compassos — 2 setas para baixo)." }
    ]
  },

  COACH_AUTO_UP_DOWN: {
    id: "COACH_AUTO_UP_DOWN",
    title: "COACH - AUTO UP/DOWN (Mudança Automática de Andamento)",
    manualSectionId: "coach-mode",
    category: "Performance / Coach",
    accessPath: "Pressione [COACH] > Seta Direita 3x até AUTO UP/DOWN (Linha 1, Coluna 4) > [ENTER].",
    visualDescription:
      "O andamento do metrônomo aumenta e diminui automaticamente em degraus enquanto você toca. " +
      "Lista vertical de 5 parâmetros à esquerda: " +
      "Linha 1: Tempo (andamento inicial: 20.0 a 260.0 BPM). " +
      "Linha 2: Max Tempo (andamento máximo: 20.0 a 260.0 BPM, não inferior ao inicial). " +
      "Linha 3: Length (1UP: sobe até o máximo e para; 1UP-DOWN: sobe e volta 1 vez; 3UP-DOWN: repete 3 vezes; INF: repete até apertar F6 STOP). " +
      "Linha 4: Tempo Change Amount (1, 4, 5, 8, 10, 20 BPM por degrau). " +
      "Linha 5: Tempo Change Interval (2 beats, 1, 2, 4, 8, 16 meas). " +
      "Durante a execução, [F1] (CLEAR MAX) eleva o teto para 260.0 e [F2] (SET CURRENT TEMPO TO MAX) trava o andamento atual como novo máximo!",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "CLEAR MAX", action: "announce", message: "Max Tempo redefinido para 260.0 BPM.", description: "Durante a prática, redefine o Max Tempo para 260.0 BPM." },
      { num: 2, label: "SET CURRENT TO MAX", action: "announce", message: "Andamento atual fixado como novo Max Tempo!", description: "Durante a prática, define o andamento atual como o limite máximo." },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "CLICK", action: "goto", target: "CLICK_TEMPO", description: "Configura o metrônomo." },
      { num: 6, label: "START", action: "coach_run", mode: "AUTO UP/DOWN", description: "Inicia/para o treino AUTO UP/DOWN." }
    ],
    items: [
      { id: "caud_tempo", label: "1. CLICK - Start Tempo (BPM)", paramKey: "clickTempo", type: "float", min: 20.0, max: 260.0, step: 1.0, unit: "BPM", defaultVal: 120.0, row: 1, col: 1, explanation: "Andamento inicial da prática." },
      { id: "caud_max", label: "2. SETUP - Max Tempo (BPM)", paramKey: "audMaxTempo", type: "float", min: 20.0, max: 260.0, step: 1.0, unit: "BPM", defaultVal: 260.0, row: 2, col: 1, explanation: "Andamento máximo atingido na subida (1 seta para baixo)." },
      { id: "caud_len", label: "3. Length (Modo de Ciclo)", paramKey: "audLength", type: "enum", options: ["1UP", "1UP-DOWN", "3UP-DOWN", "INF"], defaultVal: "1UP", row: 3, col: 1, explanation: "1UP (sobe até o máximo), 1UP-DOWN (sobe e desce 1x), 3UP-DOWN (sobe e desce 3x), INF (contínuo — 2 setas para baixo)." },
      { id: "caud_amt", label: "4. Tempo Change Amount (BPM)", paramKey: "audAmount", type: "enum", options: ["1", "4", "5", "8", "10", "20"], defaultVal: "1", row: 4, col: 1, explanation: "Quantidade de BPM alterada a cada degrau (3 setas para baixo)." },
      { id: "caud_int", label: "5. Tempo Change Interval", paramKey: "audInterval", type: "enum", options: ["2 beats", "1 meas", "2 meas", "4 meas", "8 meas", "16 meas"], defaultVal: "2 beats", row: 5, col: 1, explanation: "Intervalo de tempo/compassos entre cada mudança de andamento (4 setas para baixo)." }
    ]
  },

  COACH_STROKE_MONITOR: {
    id: "COACH_STROKE_MONITOR",
    title: "COACH - STROKE MONITOR (Monitor de Regularidade de Força)",
    manualSectionId: "coach-mode",
    category: "Performance / Coach",
    accessPath: "Pressione [COACH] > Seta Baixo 1x até STROKE MONITOR (Linha 2, Coluna 1) > [ENTER].",
    visualDescription:
      "Mede a constância da força (Velocity) das suas batidas (Uneven à esquerda vs Even à direita). Ideal para igualar mão esquerda/direita ou pedal duplo. " +
      "Lista vertical de 2 parâmetros à esquerda: " +
      "Linha 1: Tempo (20.0 a 260.0 BPM). " +
      "Linha 2: Pad (KICK, SNARE, HI-HAT, TOM1..AUX). " +
      "No rodapé: [F4] CLEAR LOG (apaga o gráfico), [F5] CLICK (abre configurações do clique), [F6] CLICK (liga/desliga o som do metrônomo).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "" },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "CLEAR LOG", action: "announce", message: "Gráfico do Stroke Monitor limpo.", description: "Apaga o histórico de barras do visor." },
      { num: 5, label: "CLICK SETUP", action: "goto", target: "CLICK_TEMPO", description: "Abre a tela de configuração do metrônomo." },
      { num: 6, label: "CLICK (ON/OFF)", action: "toggle_click", description: "Liga (ON) ou desliga (OFF) o som do metrônomo." }
    ],
    items: [
      { id: "csm_tempo", label: "1. CLICK - Tempo (BPM)", paramKey: "clickTempo", type: "float", min: 20.0, max: 260.0, step: 1.0, unit: "BPM", defaultVal: 120.0, row: 1, col: 1, explanation: "Andamento do metrônomo." },
      { id: "csm_pad", label: "2. SETUP - Pad", paramKey: "smPad", type: "enum", options: ["KICK", "SNARE", "TOM1", "TOM2", "TOM3", "HI-HAT", "CRASH1", "CRASH2", "RIDE", "AUX"], defaultVal: "KICK", row: 2, col: 1, explanation: "Seleciona o pad monitorado (1 seta para baixo). Pressione B para simular batidas!" }
    ]
  },

  COACH_BLAST_BEAST: {
    id: "COACH_BLAST_BEAST",
    title: "COACH - BLAST BEAST (Desafio de Força e Velocidade em 10 Segundos)",
    manualSectionId: "coach-mode",
    category: "Performance / Coach",
    accessPath: "Pressione [COACH] > Seta Baixo 1x, Seta Direita 1x até BLAST BEAST (Linha 2, Coluna 2) > [ENTER].",
    visualDescription:
      "Mede quantos toques fortes e rápidos você consegue executar em 10 segundos! " +
      "Lista vertical de 2 parâmetros à esquerda e recorde 'Best' ao lado: " +
      "Linha 1: Mode ('POWER x SPEED': avalia potência e velocidade combinadas; 'SPEED': avalia apenas a velocidade). " +
      "Linha 2: Pad (ALL, KICK, SNARE, TOM1..AUX). " +
      "No rodapé: [F1] CLEAR BEST (zera o recorde), [F6] START (inicia a contagem de 10s e exibe a pontuação final, Power % e Speed hits/sec).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "CLEAR BEST", action: "announce", message: "Pontuação mais alta (Best Score) do Blast Beast zerada!", description: "Apaga o recorde salvo." },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "---", action: "none", description: "" },
      { num: 6, label: "START", action: "coach_run", mode: "BLAST BEAST", description: "Inicia o desafio de 10 segundos e anuncia o resultado (ex: NEW RECORD! 12700 — Power 100%, Speed 10.0 hits/sec)." }
    ],
    items: [
      { id: "cbb_mode", label: "1. SETUP - Mode", paramKey: "bbMode", type: "enum", options: ["POWER x SPEED", "SPEED"], defaultVal: "POWER x SPEED", row: 1, col: 1, explanation: "POWER x SPEED (força + velocidade) ou SPEED (apenas velocidade)." },
      { id: "cbb_pad", label: "2. SETUP - Pad", paramKey: "bbPad", type: "enum", options: ["ALL", "KICK", "SNARE", "TOM1", "TOM2", "TOM3", "HI-HAT", "CRASH1", "CRASH2", "RIDE", "AUX"], defaultVal: "ALL", row: 2, col: 1, explanation: "Pad usado no desafio (ALL permite usar qualquer pad — 1 seta para baixo)." }
    ]
  },

  // ==================== SONG & REC ====================
  SONG_MAIN: {
    id: "SONG_MAIN",
    title: "SONG - INTERNAL / SD CARD / DRUM REC DATA / AUDIO REC DATA",
    manualSectionId: "song-rec",
    category: "Performance / Músicas e Gravação",
    accessPath: "Pressione o botão físico [SONG] (atalho no simulador: tecla S).",
    visualDescription:
      "Reproduz as 37 músicas integradas (INTERNAL: 001–009 MIDI e 010–037 Áudio), arquivos WAV/MP3 da raiz do cartão SD (SD CARD <Top>), gravações MIDI feitas no módulo (DRUM REC DATA) ou gravações de áudio feitas no módulo (AUDIO REC DATA). " +
      "No centro fica a seleção da música atual e, para músicas de áudio, o ajuste de 'Speed' (velocidade de reprodução: 50% a 150%) e a barra de tempo. " +
      "Botões F no rodapé: " +
      "[F1] SONG SOURCE (abre a lista para alternar entre INTERNAL, SD CARD <Top>, DRUM REC DATA e AUDIO REC DATA). " +
      "[F2] Click Track (disponível em SD CARD <Top> quando existe um arquivo '<Nome>_Click.wav' na raiz do cartão SD para tocar sincronizado como metrônomo!). " +
      "[F4] A-B (define repetição de trecho A–B em músicas de áudio) ou EXPORT (disponível em DRUM REC DATA para exportar como SMF/WAV). " +
      "[F5] SETUP/INFO (abre a janela com Loop ON/OFF, Song Level, Click Track Level, informações do arquivo e botão [F6] RENAME). " +
      "[F6] ►/■ (toca/para a música, mesmo que o botão físico [►/■] / tecla Espaço).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "SONG SOURCE", action: "goto", target: "SONG_SOURCE_WINDOW", description: "Abre a janela SONG SOURCE para escolher entre INTERNAL, SD CARD <Top>, DRUM REC DATA e AUDIO REC DATA." },
      { num: 2, label: "Click Track (ON/OFF)", action: "toggle_param", paramKey: "songClickTrackSw", description: "Em SD CARD <Top>, ativa/desativa a faixa de metrônomo '<Nome>_Click.wav' sincronizada com a música." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "A-B / EXPORT", action: "song_ab_or_export", description: "Marca os pontos A e B de repetição (em músicas de áudio) ou abre a tela SONG EXPORT (quando em DRUM REC DATA)." },
      { num: 5, label: "SETUP/INFO", action: "goto", target: "SONG_SETUP_INFO", description: "Abre a janela SONG SETUP/INFO (Loop, Song Level, Click Track Level e RENAME)." },
      { num: 6, label: "►/■ (Play/Stop)", action: "toggle_song", description: "Inicia ou interrompe a reprodução da música selecionada." }
    ],
    items: [
      { id: "sng_src", label: "1. Fonte de Música Atual (SONG SOURCE)", paramKey: "songSource", type: "enum", options: ["INTERNAL (37 Músicas Integradas)", "SD CARD <Top> (Arquivos WAV/MP3 na raiz)", "DRUM REC DATA (Gravações MIDI)", "AUDIO REC DATA (Gravações WAV)"], defaultVal: "INTERNAL (37 Músicas Integradas)", row: 1, col: 1, explanation: "Fonte de música selecionada (também acessível via [F1] SONG SOURCE)." },
      { id: "sng_sel", label: "2. Música Selecionada (001 a 037 / SD)", paramKey: "selectedSong", type: "song_selector", defaultVal: "001: Drum Solo", row: 2, col: 1, explanation: "Use o Disco [+]/[-] para escolher entre todas as 37 músicas do Data List (ou arquivos do cartão SD)." },
      { id: "sng_spd", label: "3. Speed (Velocidade do Áudio 50%–150%)", paramKey: "songSpeed", type: "int", min: 50, max: 150, step: 5, unit: "%", defaultVal: 100, row: 3, col: 1, explanation: "Altera o andamento do arquivo de áudio sem mudar a afinação (50% a 150% — 2 setas para baixo)." }
    ]
  },

  SONG_SOURCE_WINDOW: {
    id: "SONG_SOURCE_WINDOW",
    title: "SONG SOURCE (Selecionar Fonte de Músicas)",
    manualSectionId: "song-rec",
    category: "Performance / Músicas e Gravação",
    accessPath: "Na tela SONG, pressione [F1] (SONG SOURCE).",
    visualDescription:
      "Janela sobreposta com 4 opções verticais: 1. INTERNAL, 2. SD CARD <Top>, 3. DRUM REC DATA, 4. AUDIO REC DATA. Use [▲]/[▼] ou Disco e pressione [F1] (SELECT) ou [ENTER].",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "SELECT", action: "goto", target: "SONG_MAIN", description: "Confirma a fonte de música selecionada e volta à tela SONG." },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "SETUP/INFO", action: "goto", target: "SONG_SETUP_INFO", description: "Abre SETUP/INFO." },
      { num: 6, label: "►/■", action: "toggle_song", description: "Toca/para a música." }
    ],
    items: [
      { id: "ssw_sel", label: "SONG SOURCE", paramKey: "songSource", type: "enum", options: ["INTERNAL (37 Músicas Integradas)", "SD CARD <Top> (Arquivos WAV/MP3 na raiz)", "DRUM REC DATA (Gravações MIDI)", "AUDIO REC DATA (Gravações WAV)"], defaultVal: "INTERNAL (37 Músicas Integradas)", row: 1, col: 1, explanation: "Escolha a fonte de músicas com [▲]/[▼] e pressione [F1] (SELECT) ou [ENTER]." }
    ]
  },

  SONG_SETUP_INFO: {
    id: "SONG_SETUP_INFO",
    title: "SONG SETUP/INFO (Loop, Volumes, Informações e Renomear)",
    manualSectionId: "song-rec",
    category: "Performance / Músicas e Gravação",
    accessPath: "Na tela SONG, pressione [F5] (SETUP/INFO).",
    visualDescription:
      "Janela sobreposta à direita com 3 parâmetros editáveis no bloco SETUP: " +
      "Linha 1: Loop (OFF, ON). " +
      "Linha 2: Song Level (-INF, -60.0 a +6.0 dB / +12.0 dB). " +
      "Linha 3: Click Track Level (-INF, -60.0 a +6.0 dB — volume do arquivo '<Nome>_Click.wav'). " +
      "Abaixo mostra o bloco INFORMATION (Song Bank, Song Name, Folder, Total Time). " +
      "No rodapé: [F5] CLOSE, e quando a música é de DRUM REC DATA, [F6] RENAME permite renomear a gravação!",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "SONG SOURCE", action: "goto", target: "SONG_SOURCE_WINDOW", description: "Abre SONG SOURCE." },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "---", action: "none", description: "" },
      { num: 5, label: "CLOSE", action: "goto", target: "SONG_MAIN", description: "Fecha a janela SONG SETUP/INFO." },
      { num: 6, label: "RENAME", action: "goto", target: "KIT_NAME", description: "Edita o nome de 16 caracteres dos dados gravados em DRUM REC." }
    ],
    items: [
      { id: "ssi_loop", label: "1. Loop", paramKey: "songLoopSw", type: "enum", options: ["OFF", "ON"], defaultVal: "ON", row: 1, col: 1, explanation: "Define se a música repete continuamente (ON) ou para ao final (OFF)." },
      { id: "ssi_slvl", label: "2. Song Level", paramKey: "songLevel", type: "db", min: -61, max: 12, step: 0.5, defaultVal: 0.0, row: 2, col: 1, explanation: "Volume da música (-INF a +6.0/+12.0 dB — 1 seta para baixo)." },
      { id: "ssi_clvl", label: "3. Click Track Level", paramKey: "songClickTrackLevel", type: "db", min: -61, max: 6, step: 0.5, defaultVal: 0.0, row: 3, col: 1, explanation: "Volume da faixa de clique '<Nome>_Click.wav' (-INF a +6.0 dB — 2 setas para baixo)." }
    ]
  },

  SONG_EXPORT: {
    id: "SONG_EXPORT",
    title: "DRUM REC DATA EXPORT (Exportar Gravação MIDI para Cartão SD como WAV/SMF)",
    manualSectionId: "song-rec",
    category: "Performance / Músicas e Gravação",
    accessPath: "Na tela SONG (com SONG SOURCE = DRUM REC DATA), pressione [F4] (EXPORT).",
    visualDescription:
      "Exporta uma performance gravada em DRUM REC para a pasta 'EXPORT' do cartão SD como arquivo MIDI (.SMF), arquivo de áudio (.WAV) ou ambos. " +
      "Lista vertical de 4 parâmetros em EXPORT OPTION: " +
      "Linha 1: Export Type ('SMF', 'WAV (Drums)', 'WAV (Drums with song)', 'ALL (WAV + SMF)'). " +
      "Linha 2: Kit (001 a 200 — escolhe com qual Drum Kit o arquivo de áudio WAV será renderizado!). " +
      "Linha 3: Export Gain (0 a +24 dB — pressione [F6] ►/■ para ouvir uma prévia observando o medidor REC L/R à direita). " +
      "Linha 4: Post Export Time (0 a 10 sec — margem extra no final para não cortar a cauda dos pratos/reverb). " +
      "No rodapé: [F1] EXIT, [F4] NAME (renomeia o arquivo a exportar), [F5] EXPORT (inicia a exportação), [F6] ►/■ (prévia).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "EXIT", action: "goto", target: "SONG_MAIN", description: "Sai da tela de exportação e volta para SONG." },
      { num: 2, label: "---", action: "none", description: "" },
      { num: 3, label: "---", action: "none", description: "" },
      { num: 4, label: "NAME", action: "goto", target: "KIT_NAME", description: "Edita o nome do arquivo para exportação." },
      { num: 5, label: "EXPORT", action: "confirm_action", confirmMsg: "Export Drum Rec Data concluído! Arquivos salvos na pasta EXPORT do Cartão SD.", description: "Executa a exportação para a pasta EXPORT do cartão SD (pede confirmação OK)." },
      { num: 6, label: "►/■ (Prévia)", action: "toggle_song", description: "Reproduz uma prévia do resultado de exportação para checar o volume no medidor." }
    ],
    items: [
      { id: "sex_type", label: "1. Export Type", paramKey: "songExportType", type: "enum", options: ["SMF", "WAV (Drums)", "WAV (Drums with song)", "ALL (WAV + SMF)"], defaultVal: "ALL (WAV + SMF)", row: 1, col: 1, explanation: "Formato de exportação: SMF (MIDI), WAV (apenas bateria), WAV (bateria + música) ou ALL (WAV + SMF)." },
      { id: "sex_kit", label: "2. Kit (001–200)", paramKey: "songExportKit", type: "kit_selector", min: 1, max: 200, defaultVal: 1, row: 2, col: 1, explanation: "Seleciona qual Drum Kit será usado para gerar o áudio do arquivo WAV (1 seta para baixo)." },
      { id: "sex_gain", label: "3. Export Gain (0 a +24 dB)", paramKey: "songExportGain", type: "int", min: 0, max: 24, unit: "dB", defaultVal: 6, row: 3, col: 1, explanation: "Nível de ganho ao exportar o arquivo WAV (0 a +24 dB — 2 setas para baixo)." },
      { id: "sex_post", label: "4. Post Export Time (0–10 sec)", paramKey: "songExportPostTime", type: "int", min: 0, max: 10, unit: "sec", defaultVal: 2, row: 4, col: 1, explanation: "Tempo extra adicionado ao final do arquivo WAV para preservar o decaimento dos pratos (0 a 10 segundos — 3 setas para baixo)." }
    ]
  },

  REC_STANDBY: {
    id: "REC_STANDBY",
    title: "REC - DRUM REC / AUDIO REC (Modo de Espera e Gravação)",
    manualSectionId: "song-rec",
    category: "Performance / Músicas e Gravação",
    accessPath: "Pressione o botão físico [●] (REC) (atalho no simulador: tecla R).",
    visualDescription:
      "Prepara e executa a gravação da sua performance ('REC STANDBY... Press [►/■] to Rec start'). " +
      "Pressione [F1] (REC MODE) para alternar entre os 2 modos de gravação: " +
      "1) DRUM REC (MIDI / SMF): grava até 99 músicas no cartão SD (SD#01–99) ou 1 na memória temporária (TEMPORARY), com a opção 'Play a song while recording' (OFF/ON) e o botão [F6] (Overwrite) para permitir sobrescrever. Ao parar a gravação com [►/■], vai para a tela SONG - DRUM REC DATA. " +
      "2) AUDIO REC (WAV 44.1kHz 16 bits): grava áudio real (até 60 min no cartão SD SD#001–200 ou 1 min na memória temporária), com 'Rec Target' (ALL: grava bateria + MIX IN + Bluetooth; ou DRUMS ONLY: grava apenas a bateria), 'Rec Gain' (-24 a +24 dB) e a caixa 'Play and record a song' (OFF/ON). Ao parar a gravação com [►/■], abre a tela AUDIO REC PLAYBACK ([F4] CANCEL, [F5] SAVE, [F6] ►/■). " +
      "Pressione o botão físico [►/■] (atalho: tecla Espaço ou P) para iniciar e parar a gravação!",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "REC MODE", action: "toggle_param", paramKey: "recMode", description: "Alterna o modo de gravação entre 'DRUM REC (MIDI / SMF)' e 'AUDIO REC (WAV Audio)'." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "---", action: "none", description: "Sem função." },
      { num: 5, label: "---", action: "none", description: "Sem função." },
      { num: 6, label: "Overwrite (ON/OFF)", action: "toggle_param", paramKey: "recOverwriteSw", description: "Em DRUM REC, marca/desmarca a caixa Overwrite para permitir sobrescrever gravações existentes." }
    ],
    items: [
      { id: "rec_mode", label: "1. Rec Mode (F1)", paramKey: "recMode", type: "enum", options: ["DRUM REC (MIDI / SMF)", "AUDIO REC (WAV Audio)"], defaultVal: "DRUM REC (MIDI / SMF)", row: 1, col: 1, explanation: "Modo de gravação: DRUM REC (dados MIDI SMF) ou AUDIO REC (áudio WAV)." },
      { id: "rec_num", label: "2. Rec Number", paramKey: "recNumber", type: "enum", options: ["TEMPORARY (Memória Temporária)", "SD#01 (DRUM REC)", "SD#02 (DRUM REC)", "SD#001 (AUDIO REC)", "SD#002 (AUDIO REC)"], defaultVal: "SD#01 (DRUM REC)", row: 2, col: 1, explanation: "Destino da gravação: TEMPORARY (apagado ao desligar) ou Cartão SD (SD#01–99 em DRUM REC; definido automaticamente SD#001–200 em AUDIO REC — 1 seta para baixo)." },
      { id: "rec_trg", label: "3. Rec Target (Apenas AUDIO REC)", paramKey: "recTarget", type: "enum", options: ["ALL (Bateria + MIX IN + Bluetooth)", "DRUMS ONLY (Apenas Bateria)"], defaultVal: "ALL (Bateria + MIX IN + Bluetooth)", row: 3, col: 1, explanation: "Em AUDIO REC, define se grava tudo (ALL) ou apenas o som da bateria (DRUMS ONLY — 2 setas para baixo)." },
      { id: "rec_gain", label: "4. Rec Gain (Apenas AUDIO REC)", paramKey: "recGain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 12, row: 4, col: 1, explanation: "Em AUDIO REC, ajusta o nível de gravação (-24 a +24 dB — 3 setas para baixo)." },
      { id: "rec_wsong", label: "5. Play (and record) a song while recording", paramKey: "recWithSongSw", type: "enum", options: ["OFF (Desmarcado)", "ON (Marcado)"], defaultVal: "OFF (Desmarcado)", row: 5, col: 1, explanation: "Quando ON, toca a música selecionada na tela SONG simultaneamente ao iniciar a gravação (4 setas para baixo)." }
    ]
  },

  AUDIO_REC_PLAYBACK: {
    id: "AUDIO_REC_PLAYBACK",
    title: "AUDIO REC PLAYBACK (Conferir e Salvar Gravação de Áudio WAV)",
    manualSectionId: "song-rec",
    category: "Performance / Músicas e Gravação",
    accessPath: "Na tela REC (em modo AUDIO REC), pressione [►/■] para gravar e novamente [►/■] para parar a gravação.",
    visualDescription:
      "Exibida automaticamente após finalizar uma gravação no modo AUDIO REC (Manual p. 64). " +
      "Permite ouvir o áudio recém-gravado e decidir se deseja salvá-lo no cartão SD ou descartá-lo. " +
      "No rodapé: [F4] CANCEL (descarta a gravação após confirmação), [F5] SAVE (salva o arquivo WAV como REC001.wav..REC200.wav no cartão SD), [F6] ►/■ (reproduz/para a gravação).",
    layoutType: "list",
    fButtons: [
      { num: 1, label: "---", action: "none", description: "Sem função." },
      { num: 2, label: "---", action: "none", description: "Sem função." },
      { num: 3, label: "---", action: "none", description: "Sem função." },
      { num: 4, label: "CANCEL", action: "confirm_action", opType: "audio_rec_cancel", confirmMsg: "Gravação de áudio descartada. Retornando à tela REC.", description: "Descarta o áudio gravado e retorna à tela REC (pede confirmação OK)." },
      { num: 5, label: "SAVE", action: "confirm_action", opType: "audio_rec_save", confirmMsg: "Save Audio Rec Data: Arquivo WAV salvo com sucesso no Cartão SD (AUDIO REC DATA)!", description: "Salva a gravação de áudio WAV no cartão SD (pede confirmação OK)." },
      { num: 6, label: "►/■ (Play/Stop)", action: "toggle_song", description: "Reproduz ou para o áudio recém-gravado para conferência." }
    ],
    items: [
      { id: "arp_file", label: "1. Arquivo Gravado (Audio Rec Data)", type: "readonly", defaultVal: "SD#001: REC001.wav (44.1kHz / 16-bit Stereo)", row: 1, col: 1, explanation: "Arquivo de áudio recém-gravado. Pressione [F6] ►/■ para ouvir, [F5] SAVE para salvar no cartão SD ou [F4] CANCEL para descartar." },
      { id: "arp_time", label: "2. Duração e Posição", type: "readonly", defaultVal: "00:00 / 00:48", row: 2, col: 1, explanation: "Tempo de reprodução da gravação." }
    ]
  }
});
