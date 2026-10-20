/**
 * ============================================================================
 * ROLAND V31 (TD-316) — SEÇÕES DO MANUAL DE REFERÊNCIA + PARÂMETROS DATA LIST
 * ============================================================================
 * Exporta `window.V31_MANUAL_SECTIONS` (Array de 21 seções temáticas).
 * Estrutura de cada seção:
 * - `id`: Identificador único de âncora HTML (ex: "painel-fisico", "menu-principal")
 * - `chapter`: Rótulo do capítulo exibido no badge
 * - `title`: Título descritivo completo da seção
 * - `simulatorScreenId`: ID da tela correspondente em `window.V31_SCREENS`
 * - `summary`: Resumo objetivo da funcionalidade
 * - `navigationSteps`: Array ordenado com o passo a passo por contagem de setas
 * - `screenLayoutDescription`: Descrição espacial/tátil da tela
 * - `fButtonsTable`: Tabela de funções dos botões [F1]–[F6] e combinações [SHIFT]
 * - `parameterTables`: Tabelas completas de parâmetros, faixas de valores e posições
 * ============================================================================
 */
window.V31_MANUAL_SECTIONS = [
  {
    id: "painel-fisico",
    chapter: "Capítulo 1: Painel Físico e Hardware",
    title: "Descrições do Painel Físico (Superior, Traseiro, Lateral, Frontal e Inferior) e Atalhos [SHIFT]",
    simulatorScreenId: "KIT",
    summary: "Mapa tátil e funcional completo do módulo Roland V31 (usado no kit TD-316): todos os botões, knobs giratórios, disco de valor, cursores, botões de função F1 a F6, conexões físicas nos painéis traseiro, lateral, frontal e inferior, e lista completa de combinações com o botão [SHIFT].",
    navigationSteps: [
      "Posicione as mãos sobre o módulo V31 de frente para você.",
      "No canto superior esquerdo ficam três botões giratórios (knobs): no topo esquerdo [MASTER/PHONES], ao lado direito dele [BACKING] (com LED indicador Bluetooth logo abaixo), e na fileira logo abaixo à esquerda o knob [CLICK].",
      "Abaixo do knob [CLICK], na coluna esquerda, estão dois botões retangulares lado a lado: [CLICK] (esquerda) e [COACH] (direita).",
      "Mais abaixo na coluna esquerda estão os botões de transporte e música: [►/■] (Play/Stop à esquerda), [●] (Gravação no centro) e [SONG] (à direita).",
      "No centro do painel fica a tela gráfica colorida e, imediatamente abaixo da borda inferior da tela, uma fileira horizontal de seis botões táteis numerados da esquerda para a direita: [F1], [F2], [F3], [F4], [F5] e [F6].",
      "No topo superior do módulo há uma canaleta/bandeja horizontal exclusiva para apoiar baquetas.",
      "À direita da tela, na parte superior, fica o botão [EXPANSION]. Logo abaixo dele estão a cruz direcional de quatro botões de cursor ([▲] cima, [▼] baixo, [◄] esquerda, [►] direita) à esquerda e a grande roda giratória (Disco / Dial) à direita.",
      "Abaixo dos cursores e do disco fica uma fileira horizontal com quatro botões de sistema da esquerda para a direita: [MENU], [EXIT], [ENTER] e [SHIFT].",
      "No canto inferior direito do painel ficam o botão [EZ EDIT] (menor, à esquerda) e o botão grande iluminado [KIT] (à direita, que funciona como botão de retorno rápido à tela inicial)."
    ],
    screenLayoutDescription: "O painel físico divide-se espacialmente em três zonas principais no topo: Zona Esquerda ( Áudio, Metrônomo, Coach e Gravador/Song), Zona Central (Visor LCD colorido com barra de status superior, área central de parâmetros e barra inferior de rótulos F1 a F6 alinhada aos 6 botões físicos [F1]–[F6]) e Zona Direita (Expansão, Cursores direcionais em cruz, Disco giratório contínuo, linha [MENU]/[EXIT]/[ENTER]/[SHIFT] e linha inferior [EZ EDIT]/[KIT]). No painel traseiro ficam o botão [POWER], entrada DC IN com gancho de cabo, entrada MIX IN (P2 estéreo), saídas MASTER OUT (L/MONO e R em P10), entradas TRIGGER IN de expansão (AUX/TOM 4 e CRASH 2 em P10) e porta USB-A DIGITAL TRIGGER IN. Na lateral esquerda ficam o conector PHONES (fones de ouvido), o slot de cartão SD (até 32 GB SDHC), a porta USB COMPUTER (USB-C) e os conectores MIDI IN e MIDI OUT. Na parte inferior ficam o conector multipinos DB-25 (TRIGGER INPUT para o chicote de cabos dos pads) e os quatro parafusos Phillips nº 2 para a placa de montagem.",
    fButtonsTable: [
      { button: "[SHIFT] + [CLICK]", label: "Ligar/Desligar Clique", action: "Liga ou desliga o metrônomo instantaneamente a partir de qualquer tela sem precisar abrir a tela CLICK." },
      { button: "[SHIFT] + [MENU]", label: "Trigger Lock", action: "Ativa ou desativa a trava de acionador (Trigger Lock): quando ativada (ícone de cadeado no topo), bater nos pads não muda o pad selecionado na tela de edição." },
      { button: "[SHIFT] + [EXIT]", label: "ALL SOUND OFF", action: "Silencia imediatamente todos os sons de bateria ou User Samples em loop que estejam tocando (a reverberação, a música e o metrônomo não param)." },
      { button: "[SHIFT] + [EXPANSION]", label: "USER SAMPLE LIST", action: "Abre diretamente a tela USER SAMPLE LIST para importar, editar, renumerar, otimizar ou excluir samples do usuário." },
      { button: "[SHIFT] + Disco (Dial)", label: "Incremento Rápido / Decimal", action: "Altera o valor destacado em incrementos maiores (ou em casas decimais de 0,1 BPM nas telas de andamento/Tempo)." },
      { button: "[SHIFT] + [◄] / [►] ou [▲] / [▼]", label: "Seleção de Zona (Head/Rim/Bell)", action: "Em telas de edição de pad, alterna entre as zonas do pad (Pele/Head, Aro/Rim, Cúpula/Bell ou Cross Stick)." },
      { button: "[ENTER] + [◄] / [►]", label: "Seleção de Pad sem Bater", action: "Permite trocar o pad em edição usando as setas esquerda/direita sem precisar bater fisicamente no pad." }
    ],
    parameterTables: [
      {
        tableTitle: "Controles do Painel Superior",
        note: "Nunca coloque smartphones ou tablets na bandeja de baquetas superior, pois podem cair e danificar o painel.",
        rows: [
          { parameter: "Botão giratório [MASTER/PHONES]", valueRange: "Contínuo (Mín a Máx)", explanation: "Ajusta o volume de saída dos conectores MASTER OUT e do conector PHONES (pode ser configurado em SYSTEM > OUTPUT para controlar apenas PHONES com MASTER fixo).", arrowPosition: "Topo esquerdo, 1º knob à esquerda" },
          { parameter: "Botão giratório [BACKING]", valueRange: "Contínuo (Mín a Máx)", explanation: "Ajusta o volume da música (arquivo de áudio), da entrada MIX IN (estéreo) e do áudio Bluetooth. Não afeta o som da bateria das músicas internas ou gravadas.", arrowPosition: "Topo esquerdo, 2º knob à direita de MASTER/PHONES" },
          { parameter: "Indicador Bluetooth (LED)", valueRange: "Apagado / Piscando / Aceso", explanation: "Acende quando o V31 está pareado e conectado com sucesso via Bluetooth a um smartphone ou dispositivo.", arrowPosition: "Logo abaixo do knob [BACKING]" },
          { parameter: "Botão giratório [CLICK]", valueRange: "Contínuo (Mín a Máx)", explanation: "Ajusta diretamente o volume físico do metrônomo.", arrowPosition: "Coluna esquerda, abaixo do knob [MASTER/PHONES]" },
          { parameter: "Botão [CLICK]", valueRange: "Botão físico", explanation: "Abre a tela CLICK para tocar o metrônomo e definir andamento (Tempo), compasso (Beat) e som. Com [SHIFT] + [CLICK], liga/desliga o clique diretamente.", arrowPosition: "Coluna esquerda, abaixo do knob [CLICK], à esquerda" },
          { parameter: "Botão [COACH]", valueRange: "Botão físico", explanation: "Abre o menu do modo Coach (Phrase Trainer, Time Check, Quiet Count, Auto Up/Down, Stroke Monitor, Blast Beast).", arrowPosition: "Coluna esquerda, ao lado direito do botão [CLICK]" },
          { parameter: "Botão [►/■] (Play/Stop)", valueRange: "Botão físico", explanation: "Inicia ou interrompe a reprodução da música selecionada ou dos dados gravados.", arrowPosition: "Coluna esquerda inferior, à esquerda" },
          { parameter: "Botão [●] (Record)", valueRange: "Botão físico", explanation: "Coloca o V31 no modo de espera de gravação (REC STANDBY) para DRUM REC (MIDI) ou AUDIO REC (WAV).", arrowPosition: "Coluna esquerda inferior, no centro" },
          { parameter: "Botão [SONG]", valueRange: "Botão físico", explanation: "Abre a tela SONG para selecionar músicas internas, do cartão SD ou gravações, configurar loop A-B e exportar.", arrowPosition: "Coluna esquerda inferior, à direita" },
          { parameter: "Botões [F1] a [F6]", valueRange: "6 botões de função", explanation: "Executam as funções ou selecionam as abas exibidas na barra inferior do visor LCD.", arrowPosition: "Fileira horizontal logo abaixo do visor" },
          { parameter: "Botão [EXPANSION]", valueRange: "Botão físico", explanation: "Abre a tela INSTRUMENT EXPANSIONS / KIT PACKS (SLOTS e RACKS). Com [SHIFT] + [EXPANSION], abre a lista de User Samples.", arrowPosition: "Direita superior, acima dos cursores" },
          { parameter: "Botões de Cursor [▲] [▼] [◄] [►]", valueRange: "4 botões em cruz", explanation: "Movem o cursor destacado pela tela entre linhas, colunas e parâmetros.", arrowPosition: "Direita central, à esquerda do disco" },
          { parameter: "Disco (Dial)", valueRange: "Rotação contínua horária/anti-horária", explanation: "Altera o valor do parâmetro sob o cursor ou troca de Drum Kit na tela KIT. Com [SHIFT] pressionado, salta em valores maiores.", arrowPosition: "Direita central, à direita dos cursores" },
          { parameter: "Botão [MENU]", valueRange: "Botão físico", explanation: "Abre a tela MENU principal (KIT EDIT, KIT OPTIONS, BACKUP, COPY, SYSTEM). Com [SHIFT] + [MENU], ativa/desativa o Trigger Lock.", arrowPosition: "Direita, abaixo dos cursores, 1º botão à esquerda" },
          { parameter: "Botão [EXIT]", valueRange: "Botão físico", explanation: "Retorna à tela do nível imediatamente superior. Pressionado repetidamente, volta à tela KIT. Com [SHIFT] + [EXIT], executa ALL SOUND OFF.", arrowPosition: "Direita, ao lado direito de [MENU]" },
          { parameter: "Botão [ENTER]", valueRange: "Botão físico", explanation: "Confirma um valor, executa uma operação ou abre uma janela de lista de seleção.", arrowPosition: "Direita, ao lado direito de [EXIT]" },
          { parameter: "Botão [SHIFT]", valueRange: "Botão modificador", explanation: "Mantido pressionado junto com outros botões ou controles, acessa funções secundárias e atalhos.", arrowPosition: "Direita, ao lado direito de [ENTER]" },
          { parameter: "Botão [EZ EDIT]", valueRange: "Botão físico", explanation: "Abre a tela EZ EDIT para edição rápida de Instrumento (F1), Afinação/Tuning (F2), Abafamento/Muffling (F3) e Volume (F4).", arrowPosition: "Canto inferior direito, à esquerda do botão [KIT]" },
          { parameter: "Botão [KIT]", valueRange: "Botão físico iluminado", explanation: "Exibe imediatamente a tela principal KIT a partir de qualquer menu.", arrowPosition: "Canto inferior direito, botão grande iluminado" }
        ]
      },
      {
        tableTitle: "Conectores dos Painéis Traseiro, Lateral, Frontal e Inferior",
        note: "Sempre reduza o volume e desligue todos os equipamentos antes de fazer conexões. Nunca desligue a unidade nem remova o cartão SD enquanto 'Processing...' estiver no visor.",
        rows: [
          { parameter: "Interruptor [POWER]", valueRange: "Liga / Desliga", explanation: "Liga ou desliga o V31. Ao desligar, aguarde a confirmação de salvamento finalizar.", arrowPosition: "Painel traseiro" },
          { parameter: "Conector DC IN", valueRange: "Adaptador AC Roland", explanation: "Entrada para o adaptador AC incluído. Use o gancho de cabo ao lado para prender o fio e evitar desconexão acidental.", arrowPosition: "Painel traseiro" },
          { parameter: "Conector MIX IN", valueRange: "Mini-plugue estéreo (P2)", explanation: "Entrada de áudio estéreo para conectar smartphone, pad de sampling ou player externo.", arrowPosition: "Painel traseiro" },
          { parameter: "Conectores MASTER OUT (L/MONO, R)", valueRange: "Plugues P10 (1/4 pol.)", explanation: "Saídas principais de áudio para amplificador, mixer ou interface. Para saída mono, conecte apenas o conector L/MONO.", arrowPosition: "Painel traseiro" },
          { parameter: "Conectores TRIGGER IN (AUX/TOM 4, CRASH 2)", valueRange: "Plugues P10 TRS estéreo", explanation: "Entradas para adicionar pads extras vendidos separadamente (um segundo prato de ataque em CRASH 2 e um quarto tom ou pad auxiliar em AUX/TOM 4).", arrowPosition: "Painel traseiro" },
          { parameter: "Porta DIGITAL TRIGGER IN", valueRange: "USB Tipo A", explanation: "Conecta um pad digital Roland compatível (PD-14DSX, PD-140DS, CY-18DR ou VH-14D) ou um hub sem fio DH-10 / DWe DrumLink.", arrowPosition: "Painel traseiro" },
          { parameter: "Conectores MIDI (IN, OUT)", valueRange: "DIN de 5 pinos", explanation: "Conectam dispositivos MIDI externos (módulos de som, controladores, baterias).", arrowPosition: "Painel lateral" },
          { parameter: "Porta USB COMPUTER", valueRange: "USB Tipo C", explanation: "Conecta computador ou smartphone para áudio USB multicanal (até 30 ch rec / 32 ch play no modo VENDOR), USB MIDI e uso do aplicativo V31 Editor. Não use cabos feitos apenas para carregamento.", arrowPosition: "Painel lateral" },
          { parameter: "Slot de Cartão SD", valueRange: "Cartão SD/SDHC até 32 GB", explanation: "Para backups, importação de User Samples, reprodução de músicas WAV/MP3 e exportação de gravações. Formate o cartão no próprio V31 antes do primeiro uso.", arrowPosition: "Painel lateral" },
          { parameter: "Conector PHONES", valueRange: "Saída de fones estéreo", explanation: "Conecta fones de ouvido. Mesmo com fones conectados, o som continua saindo pelos conectores MASTER OUT (a menos que alterado em SYSTEM > OUTPUT).", arrowPosition: "Painel lateral / frontal" },
          { parameter: "Conector TRIGGER INPUT", valueRange: "Conector multipinos dedicado", explanation: "Localizado no painel inferior para conectar o cabo multicabo (chicote) exclusivo dos pads e pedais padrões do kit (Kick, Snare, Tom 1–3, Hi-Hat, Hi-Hat Control, Crash 1, Ride).", arrowPosition: "Painel inferior" },
          { parameter: "Parafusos da Placa de Montagem", valueRange: "4 parafusos Phillips nº 2", explanation: "Localizados no painel inferior para fixar a placa de montagem ao rack de bateria. Use apenas os parafusos originais (o grampo série APC não é compatível).", arrowPosition: "Painel inferior" }
        ]
      }
    ],
    tipsAndNotes: [
      "Pressionar [KIT] a qualquer momento funciona como 'Home' seguro para pessoas cegas: não importa em qual submenu você esteja, apertar [KIT] devolve o módulo à tela principal de seleção de Drum Kit.",
      "Ao desligar o equipamento, as alterações feitas no Drum Kit e nas configurações são salvas automaticamente, mas nunca desligue o V31 enquanto a mensagem 'Processing...' estiver exibida.",
      "Para selecionar um pad para edição sem fazer barulho batendo nele, mantenha [ENTER] pressionado e pressione as setas [◄] ou [►]."
    ]
  },
  {
    id: "logica-navegacao",
    chapter: "Capítulo 2: Lógica de Navegação e Operações Básicas",
    title: "Como Navegar no V31 Sem Enxergar a Tela (Padrões de Cursor, Abas F1–F6, Disco, Listas e Salvamento Automático)",
    simulatorScreenId: "KIT",
    summary: "Guia completo da lógica de operação do sistema do V31 para usuários de leitor de tela e pessoas cegas: como funcionam o foco do cursor, as abas horizontais [F1]–[F6], as listas pop-up com [ENTER], a edição de nomes, a seleção de pads e zonas e o salvamento automático.",
    navigationSteps: [
      "Para voltar sempre ao ponto de partida conhecido: pressione o botão físico [KIT] (canto inferior direito).",
      "Para navegar entre abas na parte inferior de uma tela: pressione os botões físicos [F1], [F2], [F3], [F4], [F5] ou [F6].",
      "Para mover o foco entre diferentes campos na mesma tela: use os botões de cursor [▲], [▼], [◄] e [►].",
      "Para alterar o valor do campo selecionado: gire o Disco (Dial) no sentido horário para aumentar/avançar ou anti-horário para diminuir/retroceder.",
      "Para saltar valores rapidamente: segure [SHIFT] enquanto gira o Disco.",
      "Para abrir uma lista completa de opções (como lista de kits ou instrumentos) quando o cursor estiver sobre um nome: pressione [ENTER], navegue com os cursores/disco e confirme com [ENTER] ou saia com [EXIT].",
      "Para subir um nível de menu ou cancelar uma janela pop-up: pressione [EXIT]."
    ],
    screenLayoutDescription: "Todas as telas do V31 seguem uma estrutura visual e lógica padronizada em 3 faixas horizontais: 1) Barra de Título no Topo: mostra à esquerda o nome da tela/função atual (ex: 'KIT EDIT - INSTRUMENT' ou 'TRIGGER - BASIC'), no centro-direita uma caixa indicando o pad e a zona atualmente selecionados para edição (ex: 'SNARE HEAD', 'KICK', 'RIDE BOW') e no canto superior direito o indicador de Trigger Lock (quando ativo) e status de conexão sem fio. 2) Área de Conteúdo Central: pode exibir uma grade de ícones (como em MENU, KIT EDIT, KIT OPTIONS, SYSTEM), uma lista de parâmetros em 1 ou 2 colunas, faders verticais (como em PAD VOL e AMBIENCE) ou abas de camadas A, B e C. 3) Barra de Função no Rodapé: dividida em 6 células alinhadas exatamente acima dos botões físicos [F1] a [F6]. Quando um botão [F1]–[F6] seleciona uma aba, a célula correspondente fica destacada; quando aciona uma chave liga/desliga (como EQ, Comp, H&R, AmbOnly), um pequeno indicador luminoso aparece dentro do rótulo daquele botão F.",
    fButtonsTable: [
      { button: "[F1] a [F6]", label: "Guias (Tabs) ou Ações", action: "Trocam a guia ativa exibida no rodapé da tela ou executam comandos diretos (como UNDO,EXECUTE, LIST, H&R)." },
      { button: "[EXIT]", label: "Voltar / Cancelar", action: "Retorna à tela imediatamente anterior na hierarquia ou fecha uma janela pop-up de confirmação." },
      { button: "[ENTER]", label: "Confirmar / Abrir Lista", action: "Confirma uma janela de diálogo (OK/CANCEL) ou abre a lista de seleção do parâmetro em foco." },
      { button: "[SHIFT] + [MENU]", label: "Trigger Lock", action: "Fixa o pad atual para que você possa tocar livremente na bateria enquanto edita parâmetros sem que o foco mude para outro pad." }
    ],
    parameterTables: [
      {
        tableTitle: "Operações Básicas de Navegação e Edição",
        note: "As alterações feitas em Drum Kits e parâmetros de sistema são salvas automaticamente na memória temporária/usuário; não há botão 'Write' separado para edições comuns de kit.",
        rows: [
          { parameter: "Ajustar o volume geral", valueRange: "Knob [MASTER/PHONES]", explanation: "Gire o botão físico [MASTER/PHONES] no topo esquerdo para ajustar o volume das saídas MASTER OUT e PHONES.", arrowPosition: "Painel superior esquerdo" },
          { parameter: "Trocar de guia / função", valueRange: "Botões [F1]–[F6]", explanation: "Pressione de [F1] a [F6] conforme os rótulos exibidos na base da tela.", arrowPosition: "Abaixo do visor" },
          { parameter: "Movimento do cursor", valueRange: "Botões [▲] [▼] [◄] [►]", explanation: "Move o destaque (cursor) entre os parâmetros da tela atual.", arrowPosition: "Cruz direcional à direita do visor" },
          { parameter: "Alteração de valores", valueRange: "Disco (Dial) ou [SHIFT] + Disco", explanation: "Gire o disco para alterar o valor destacado. Segure [SHIFT] ao girar para incrementos maiores.", arrowPosition: "Roda à direita dos cursores" },
          { parameter: "Selecionar o pad para edição", valueRange: "Bater no pad ou [ENTER] + [◄]/[►]", explanation: "Bata no pad desejado (se Trigger Lock estiver desativado) ou segure [ENTER] e pressione [◄]/[►] para percorrer todos os pads e zonas sequencialmente.", arrowPosition: "Indicador de pad no topo direito da tela" },
          { parameter: "Alternar zona (Head / Rim / Bell / XStick)", valueRange: "[SHIFT] + [▲]/[▼]/[◄]/[►]", explanation: "Alterna a zona de batida do pad atual (Pele/Head, Aro/Rim, Cúpula/Bell) quando o Trigger Lock está ativo ou sem precisar bater na zona.", arrowPosition: "Indicador de pad no topo direito da tela" },
          { parameter: "Edição simultânea Pele e Aro (H&R)", valueRange: "Botão [F5] ou [F6] (H&R ON/OFF)", explanation: "Nas telas INSTRUMENT, PAD VOL, PAD EQ, AMBIENCE e BUZZ, ativar o botão H&R permite ajustar os parâmetros da pele (Head) e do aro (Rim) simultaneamente.", arrowPosition: "Botão [F5] ou [F6] no rodapé" },
          { parameter: "Edição de texto (Nomes)", valueRange: "Grade de caracteres na tela", explanation: "Nas telas de nome (KIT NAME, BACKUP NAME, BANK NAME, RENAME): use [▲]/[▼]/[◄]/[►] na grade inferior de caracteres e aperte [ENTER] para inserir; [F2] (A<->a) alterna maiúsculas/minúsculas/símbolos; [F3]/[F4] movem a posição na linha de texto; [F5] (INSERT) insere espaço; [F6] (DELETE) apaga o caractere.", arrowPosition: "Telas de edição de nome" }
        ]
      },
      {
        tableTitle: "Ordem Sequencial dos Pads ao Navegar com [ENTER] + [◄] / [►]",
        note: "Quando 'Show Virtual Pad' está ativado em SYSTEM > OPTION > UI CUSTOM, os pads virtuais adicionais (TOM4 ou AUX1, e AUX2, AUX3, AUX4) aparecem ao final da sequência com borda laranja.",
        rows: [
          { parameter: "1. KICK", valueRange: "Apenas HEAD (Pele)", explanation: "Bumbo (não possui aro/rim).", arrowPosition: "1º pad da sequência" },
          { parameter: "2. SNARE", valueRange: "HEAD, RIM, XSTICK", explanation: "Caixa (Pele, Aro e Cross Stick).", arrowPosition: "2º pad da sequência" },
          { parameter: "3. TOM 1", valueRange: "HEAD, RIM", explanation: "Tom 1 agudo (Pele e Aro).", arrowPosition: "3º pad da sequência" },
          { parameter: "4. TOM 2", valueRange: "HEAD, RIM", explanation: "Tom 2 médio (Pele e Aro).", arrowPosition: "4º pad da sequência" },
          { parameter: "5. TOM 3", valueRange: "HEAD, RIM", explanation: "Surdo / Tom 3 grave (Pele e Aro).", arrowPosition: "5º pad da sequência" },
          { parameter: "6. HI-HAT", valueRange: "HEAD (BOW), RIM (EDGE)", explanation: "Chimbal (Corpo/Bow e Borda/Edge).", arrowPosition: "6º pad da sequência" },
          { parameter: "7. CRASH 1", valueRange: "HEAD (BOW), RIM (EDGE)", explanation: "Prato de ataque 1 (Corpo/Bow e Borda/Edge).", arrowPosition: "7º pad da sequência" },
          { parameter: "8. CRASH 2", valueRange: "HEAD (BOW), RIM (EDGE)", explanation: "Prato de ataque 2 (Corpo/Bow e Borda/Edge).", arrowPosition: "8º pad da sequência" },
          { parameter: "9. RIDE", valueRange: "HEAD (BOW), RIM (EDGE), BELL", explanation: "Prato de condução (Corpo/Bow, Borda/Edge e Cúpula/Bell; a cúpula compartilha configurações com a pele/Head exceto onde especificado).", arrowPosition: "9º pad da sequência" },
          { parameter: "10. AUX / TOM 4", valueRange: "HEAD, RIM", explanation: "Entrada de expansão física configurada como AUX ou TOM 4 em SYSTEM > TRIGGER > AUX/TOM4.", arrowPosition: "10º pad da sequência" },
          { parameter: "11. Pads Virtuais (se Show Virtual Pad = ON)", valueRange: "TOM4 (ou AUX1), AUX2, AUX3, AUX4 (HEAD e RIM)", explanation: "Pads virtuais acionados via MIDI ou USB Audio (indicados com borda laranja na tela).", arrowPosition: "11º ao 14º pads da sequência" }
        ]
      }
    ],
    tipsAndNotes: [
      "Em qualquer tela de confirmação (como 'Are you sure?', 'Overwrite?', 'Execute?'), o cursor começa por padrão na opção segura ('CANCEL' ou 'EXIT'). Para confirmar ('OK'), pressione a seta para a direita [►] uma vez e depois pressione [ENTER].",
      "Nas telas de EZ EDIT e KIT EDIT, o botão [F6] (UNDO) desfaz as alterações feitas desde que você entrou naquela tela, voltando ao estado anterior."
    ]
  },
  {
    id: "arquitetura-memorias",
    chapter: "Capítulo 3: Arquitetura Sonora e Memórias",
    title: "Visão Geral da Arquitetura do V31: Drum Kits, Camadas A/B/C, Racks (1–100), Slots (1–6), Memórias e Cartão SD",
    simulatorScreenId: "KIT",
    summary: "Explicação estrutural completa de como o som e os dados são organizados no V31: os 200 Drum Kits do Usuário (70 presets editáveis + 130 User Kits), as 3 camadas de instrumento por zona (Layer A, B, C), a diferença entre Racks (1 a 100) e Slots (1 a 6) para Expansões Roland Cloud, Memória Temporária e estrutura de pastas do Cartão SD.",
    navigationSteps: [
      "A arquitetura de Drum Kits é acessada diretamente na tela [KIT] (kits 001 a 200).",
      "A arquitetura de Racks (1–100) e Slots (1–6) é acessada pressionando o botão físico [EXPANSION] no canto superior direito.",
      "Na tela EXPANSION, [F1] (SLOT) exibe os 6 slots ativos na memória de reprodução e [F2] (RACK) exibe os até 100 pacotes instalados no armazenamento interno.",
      "A arquitetura de User Samples (U001–U500) é acessada pressionando [SHIFT] + [EXPANSION].",
      "A arquitetura de Backup em Cartão SD é acessada pressionando [MENU] -> seta [▼] duas vezes até 'BACKUP' -> [ENTER]."
    ],
    screenLayoutDescription: "O fluxo de sinal e memória do V31 organiza-se hierarquicamente: cada um dos 200 Drum Kits do Usuário contém configurações para todos os pads (físicos e virtuais). Cada pad possui zonas separadas (Head e Rim; Snare tem também XStick; Ride tem Bell). Cada zona (Head ou Rim) possui 3 camadas de instrumento independentes (Layer A, Layer B e Layer C), cada uma com seu próprio Instrumento (Preset, Expansão nos Slots 1–6, Synth Wave ou User Sample U001–U500), Volume de camada, V-EDIT, Transient, EQ de 3 bandas e Layer Mode (MIX, VELOCITY ou HI-HAT). Após as camadas serem somadas no pad, o som passa por PAD EQ e PAD VOLUME, divide-se para os envios de AMBIENCE (Overhead com 6 filtros de entrada, Room, Reverb, Kit Resonance) e BUS FX (Bus A, B, C, D com 2 efeitos cada + Bus Reverb + Side Chain), passa por PAD COMP, junta-se na mixagem do kit para KIT COMP, KIT EQ, KIT VOLUME e GLOBAL TONE (Bass/Treble), e chega às saídas MASTER OUT, PHONES e USB AUDIO.",
    fButtonsTable: [
      { button: "[KIT]", label: " Drum Kits (001–200)", action: "Acessa os 200 Drum Kits armazenados na Memória do Usuário." },
      { button: "[EXPANSION]", label: "Slots (1–6) e Racks (1–100)", action: "Gerencia quais expansões instaladas no Rack (1–100) estão carregadas nos Slots ativos (1–6)." },
      { button: "[SHIFT] + [EXPANSION]", label: "User Samples (001–500)", action: "Gerencia os até 500 samples de áudio importados pelo usuário na memória interna." }
    ],
    parameterTables: [
      {
        tableTitle: "Estrutura das Memórias do V31",
        note: "Os Drum Kits 001 a 070 vêm preenchidos com kits de fábrica, mas todos os 200 kits (001 a 200) ficam na Memória do Usuário e podem ser livremente editados e sobrescritos. Para restaurar um kit original sem apagar tudo, use MENU > COPY > KIT > [F2] (PRESET).",
        rows: [
          { parameter: "Memórias Predefinidas (Preset Memory)", valueRange: "Somente leitura", explanation: "Armazena os 70 Drum Kits originais de fábrica (protegidos para restauração via COPY > PRESET), os 245 instrumentos internos Preset, o gerador SYNTH WAVE, as expansões pré-instaladas de fábrica (EXV001 Wood Room Studio UK 1, EXV002 Electronic&Percussion 1, EXV003 The Brush 1) e as 37 músicas internas.", arrowPosition: "Memória interna ROM" },
          { parameter: "Memórias do Usuário (User Memory)", valueRange: "200 Drum Kits (001–200) + 500 User Samples (U001–U500) + System/Trigger/Set List", explanation: "Armazena os 200 Drum Kits editáveis (001–070 de fábrica + 071–200 User Kits), até 500 User Samples, 32 bancos de Set Lists, 16 bancos de Trigger e configurações globais SYSTEM. As edições são salvas automaticamente.", arrowPosition: "Memória interna regravável" },
          { parameter: "Memória Temporária (Temporary Memory)", valueRange: "SNAPSHOT, LAST SELECTED e 1 música DRUM REC", explanation: "Área volátil que guarda o estado do kit ao ser selecionado (LAST SELECTED), o estado salvo manualmente em SNAPSHOT para comparação, e 1 gravação temporária do DRUM REC.", arrowPosition: "Memória RAM temporária" },
          { parameter: "Racks (1–100)", valueRange: "Até 100 pacotes instalados", explanation: "Área de armazenamento interno onde você instala Instrument Expansions e Kit Packs baixados do Roland Cloud (via app Roland Cloud Connect por Wi-Fi ou Roland Cloud Manager via cartão SD). Estar no Rack ainda não torna os instrumentos tocáveis até serem carregados em um Slot.", arrowPosition: "Tela [EXPANSION] > [F2] (RACK)" },
          { parameter: "Slots (1–6)", valueRange: "6 slots ativos simultâneos", explanation: "Área de memória de trabalho na qual até 6 Instrument Expansions ou Kit Packs do Rack são carregados para poderem ser usados nos Drum Kits. Com 'Auto Slot Load' ativado (Ver. 1.10+), os slots são trocados automaticamente ao mudar de kit.", arrowPosition: "Tela [EXPANSION] > [F1] (SLOT)" },
          { parameter: "Cartão SD (SDHC até 32 GB)", valueRange: "Pastas Roland / V31", explanation: "Armazena até 99 Backups completos (SAVE/LOAD ALL), até 999 Backups de Kits individuais (SAVE/LOAD 1 KIT, compatível também com leitura de kits do V71 e V51), até 99 músicas DRUM REC (SMF), até 200 gravações AUDIO REC (WAV), arquivos de áudio WAV/MP3 na raiz para tocar junto, imagens personalizadas de Kit View e arquivos de expansão.", arrowPosition: "Slot lateral de cartão SD" }
        ]
      },
      {
        tableTitle: "Estrutura de Pastas do Cartão SD (Após Formatação no V31)",
        note: "Para formatar o cartão SD: pressione [MENU] -> selecione 'BACKUP' ([ENTER]) -> selecione 'FORMAT' ou insira o cartão e use a função de formatação. Nunca desligue durante a formatação.",
        rows: [
          { parameter: "Raiz do Cartão SD (SD CARD <Top>)", valueRange: "Arquivos .wav / .mp3 e *_click.wav", explanation: "Coloque aqui músicas de áudio (WAV 44,1/48 kHz 16/24 bits ou MP3) para tocar na tela SONG, User Samples para importar e faixas de clique (*_click.wav).", arrowPosition: "Diretório raiz do cartão SD" },
          { parameter: "Roland/V31/Backup/", valueRange: "Arquivos de Backup Geral (1–99)", explanation: "Armazena os dados salvos pela função BACKUP > SAVE.", arrowPosition: "Subpasta Backup" },
          { parameter: "Roland/V31/Kit/", valueRange: "Arquivos de Backup de 1 Kit (1–999)", explanation: "Armazena kits individuais salvos por SAVE 1 KIT (também lê kits do V71/V51 colocados na pasta correspondente).", arrowPosition: "Subpasta Kit" },
          { parameter: "Roland/V31/Song/DrumRec/", valueRange: "Dados de DRUM REC (SD#01–99)", explanation: "Armazena performances de bateria gravadas em formato interno/MIDI.", arrowPosition: "Subpasta Song/DrumRec" },
          { parameter: "Roland/V31/Song/AudioRec/", valueRange: "Arquivos WAV de AUDIO REC (SD#001–200)", explanation: "Armazena gravações de áudio feitas no V31 (48 kHz / 24 bits WAV).", arrowPosition: "Subpasta Song/AudioRec" },
          { parameter: "Roland/V31/Export/", valueRange: "Arquivos exportados (.mid / .wav)", explanation: "Destino dos arquivos gerados pela função SONG EXPORT.", arrowPosition: "Subpasta Export" },
          { parameter: "Roland/V31/KitImage/", valueRange: "Imagens BMP/PNG (200 x 60 pixels)", explanation: "Armazena imagens personalizadas para o fundo da tela KIT (importadas em KIT VIEW > [F6] IMG IMPORT).", arrowPosition: "Subpasta KitImage" }
        ]
      }
    ],
    tipsAndNotes: [
      "O sinal de KICK não possui zona de aro (Rim). O prato RIDE possui 3 zonas (Head/Bow, Rim/Edge e Bell), sendo que a cúpula (Bell) utiliza as configurações da pele (Head).",
      "Você não pode usar AUX e TOM 4 físicos ao mesmo tempo no conector traseiro AUX/TOM 4: em SYSTEM > TRIGGER > AUX/TOM4 você escolhe qual dos dois é acionado pelo conector físico, e o outro passa a funcionar como Pad Virtual via MIDI/USB."
    ]
  },
  {
    id: "tela-kit",
    chapter: "Capítulo 4: Tela KIT e Funções Rápidas de Performance",
    title: "Tela KIT, Lista de Kits e Favoritos, Global Tone, Kit Phrase, Wireless, Janela TOOLS, Effects Switch e Modo de Segurança",
    simulatorScreenId: "KIT",
    summary: "Tudo sobre a tela principal KIT: como trocar entre os 200 Drum Kits, filtrar e marcar Favoritos ([F1] LIST), ajustar a ambiência e o equalizador geral do kit ([F2] GLOBAL EQ), ouvir a frase demonstrativa ([F3] PHRASE), ativar Bluetooth/Wi-Fi ([F4] WIRELESS) e usar o menu [F5] TOOLS (Copy Kit, Copy Pad Inst, Effects SW, Set List, Safety Mode, Save/Load 1Kit, Snapshot, Kit View e Kit Name).",
    navigationSteps: [
      "Pressione o botão físico [KIT] no canto inferior direito do painel. Você estará na tela principal DRUM KIT.",
      "Gire o Disco (Dial) ou pressione as setas [▲]/[▼] ou [◄]/[►] para selecionar os Drum Kits de 001 a 200.",
      "Para abrir a lista completa de kits ou filtrar favoritos: na tela KIT, pressione [F1] (LIST).",
      "Para abrir o ajuste rápido de ambiência, graves e agudos (GLOBAL TONE): na tela KIT, pressione [F2] (GLOBAL EQ).",
      "Para tocar ou parar a frase de demonstração do kit atual: na tela KIT, pressione [F3] (PHRASE).",
      "Para ligar/desligar Bluetooth ou Wi-Fi rapidamente: na tela KIT, pressione [F4] (WIRELESS).",
      "Para abrir o menu pop-up de ferramentas rápidas (TOOLS): na tela KIT, pressione [F5] (TOOLS), use [▲]/[▼] ou o Disco para escolher entre as 10 ferramentas e pressione [F6] (SELECT) ou [ENTER].",
      "Para ligar ou desligar a função Global Ambience rapidamente na tela KIT: pressione [F6] (Ambience)."
    ],
    screenLayoutDescription: "Na tela KIT: no topo esquerdo aparece 'DRUM KIT'; no topo centro-direito aparece o nome do pad tocado mais recentemente (ex: 'KICK', 'SNARE HEAD'); no canto superior direito aparecem os ícones de status (Wi-Fi, Bluetooth, Cartão SD, Expansão e Trigger Lock). No centro da tela aparece em fonte grande o número de 3 dígitos do kit atual (ex: '001'), logo abaixo o Nome Principal do Kit (até 16 caracteres, ex: 'Studio A') e abaixo dele o Subnome (até 64 caracteres). No rodapé estão os 6 rótulos dos botões de função: [F1] LIST, [F2] GLOBAL EQ, [F3] PHRASE, [F4] WIRELESS, [F5] TOOLS e [F6] Ambience (com indicador luminoso ON/OFF).",
    fButtonsTable: [
      { button: "[F1] (LIST)", label: "Janela KIT LIST", action: "Abre a lista de todos os Drum Kits. Dentro da lista: [F1] (FAVORITE) filtra apenas os kits favoritos; [F2] (REGISTER) marca/desmarca o kit atual como favorito (estrela); [F5] (PREVIEW) toca a frase do kit; [F6] (SELECT) ou [ENTER] seleciona e fecha a lista." },
      { button: "[F2] (GLOBAL EQ)", label: "Janela GLOBAL TONE", action: "Abre a janela GLOBAL TONE com 3 knobs na tela (Ambience, Bass, Treble). Dentro dela: [F2] (CLOSE) fecha; [F3] (EQ) liga/desliga o EQ global (Bass/Treble); [F4] (SETUP) abre o ajuste fino de Type, Q, Freq e Gain de Bass e Treble; [F6] (Ambience) liga/desliga a ambiência global." },
      { button: "[F3] (PHRASE)", label: "Tocar/Parar Kit Phrase", action: "Reproduz a frase musical associada ao Drum Kit atual para testar o som. Pressione [F3] novamente para parar (só funciona se Kit Phrase Play estiver ON)." },
      { button: "[F4] (WIRELESS)", label: "Janela WIRELESS", action: "Abre a janela rápida com 2 opções: Bluetooth (OFF/ON) e Wi-Fi (OFF/ON). Use [▲]/[▼] para selecionar e o Disco para ativar/desativar, ou vá para a configuração completa." },
      { button: "[F5] (TOOLS)", label: "Janela TOOLS", action: "Abre um menu vertical com 10 ferramentas rápidas do kit: COPY KIT, COPY PAD INST, EFFECTS SW, SET LIST, SAFETY MODE, SAVE 1KIT, LOAD 1KIT, SNAPSHOT, KIT VIEW e KIT NAME." },
      { button: "[F6] (Ambience)", label: "Ambiência Global ON/OFF", action: "Liga ou desliga instantaneamente toda a ambiência do kit atual." }
    ],
    parameterTables: [
      {
        tableTitle: "Parâmetros da Tela KIT e Janela KIT LIST ([F1])",
        note: "Para importar um Drum Kit de um Kit Pack instalado no Slot, pressione [F1] (LIST) e siga as opções de carregamento na lista.",
        rows: [
          { parameter: "Drum Kit Number", valueRange: "001–200 (001–070 Preset / 071–200 User)", explanation: "Seleciona o Drum Kit atual girando o disco na tela KIT.", arrowPosition: "Centro da tela KIT" },
          { parameter: "KIT LIST ([F1] LIST)", valueRange: "Lista de 001 a 200", explanation: "Exibe a lista de kits. Na lista, pressione [F2] para registrar (ON) ou desregistrar (OFF) o kit como favorito, e pressione [F1] para alternar a visualização apenas de favoritos.", arrowPosition: "Pressione [F1] na tela KIT" }
        ]
      },
      {
        tableTitle: "Parâmetros da Janela GLOBAL TONE ([F2] GLOBAL EQ e [F4] SETUP)",
        note: "O GLOBAL TONE ajusta o caráter tonal e a quantidade geral de ambiência de todo o Drum Kit.",
        rows: [
          { parameter: "Ambience", valueRange: "-INF, -60.0–+6.0dB", explanation: "Quantidade geral de ambiência aplicada ao kit inteiro.", arrowPosition: "Janela GLOBAL TONE: 1º knob à esquerda (seta [◄])" },
          { parameter: "Bass", valueRange: "-12–+12dB", explanation: "Quantidade de reforço ou corte para a faixa de baixas frequências.", arrowPosition: "Janela GLOBAL TONE: 2º knob no centro" },
          { parameter: "Treble", valueRange: "-12–+12dB", explanation: "Quantidade de reforço ou corte para a faixa de altas frequências.", arrowPosition: "Janela GLOBAL TONE: 3º knob à direita (seta [►])" },
          { parameter: "Botão [F3] (EQ)", valueRange: "OFF, ON", explanation: "Liga ou desliga o equalizador global (Bass e Treble).", arrowPosition: "Botão [F3] dentro de GLOBAL TONE" },
          { parameter: "Botão [F4] (SETUP)", valueRange: "Abre tela de ajuste fino", explanation: "Permite ajustar detalhadamente os parâmetros de Bass e Treble listados abaixo.", arrowPosition: "Botão [F4] dentro de GLOBAL TONE" },
          { parameter: "Bass / Treble: Type", valueRange: "SHELV (Shelving), PEAK", explanation: "Tipo de curva do equalizador para Bass e Treble na tela SETUP.", arrowPosition: "Linha 1 da tela GLOBAL TONE SETUP" },
          { parameter: "Bass / Treble: Q", valueRange: "0.5–16.0 (apenas quando Type = PEAK)", explanation: "Largura da faixa de frequência afetada. Valores maiores estreitam a faixa.", arrowPosition: "Linha 2 da tela GLOBAL TONE SETUP" },
          { parameter: "Bass / Treble: Freq", valueRange: "20Hz–1kHz (BASS) / 1–16kHz (TREBLE)", explanation: "Frequência central do grave (BASS) e do agudo (TREBLE).", arrowPosition: "Linha 3 da tela GLOBAL TONE SETUP" },
          { parameter: "Bass / Treble: Gain", valueRange: "-12–+12dB", explanation: "Quantidade de reforço ou corte de ganho.", arrowPosition: "Linha 4 da tela GLOBAL TONE SETUP" }
        ]
      },
      {
        tableTitle: "Parâmetros das Janelas PHRASE ([F3]), WIRELESS ([F4]) e TOOLS ([F5])",
        note: "No Modo de Segurança (SAFETY MODE), os botões do painel ficam bloqueados contra toques acidentais ao vivo. Para desativar o Modo de Segurança, pressione [EXIT] e depois [ENTER] conforme indicado na tela.",
        rows: [
          { parameter: "PHRASE ([F3])", valueRange: "Reproduzir / Parar", explanation: "Toca a frase do Drum Kit selecionado para conferir o som. Pressione novamente para parar.", arrowPosition: "Botão [F3] na tela KIT" },
          { parameter: "Bluetooth (em [F4] WIRELESS)", valueRange: "OFF, ON", explanation: "Liga ou desliga a função Bluetooth.", arrowPosition: "1ª linha da janela WIRELESS" },
          { parameter: "Wi-Fi (em [F4] WIRELESS)", valueRange: "OFF, ON", explanation: "Liga ou desliga a função Wi-Fi (disponibilidade varia conforme o país/região).", arrowPosition: "2ª linha da janela WIRELESS" },
          { parameter: "COPY KIT (em [F5] TOOLS)", valueRange: "Atalho para tela COPY KIT", explanation: "Copia o Drum Kit atual para outro número ou restaura de um Preset.", arrowPosition: "1º item do menu TOOLS" },
          { parameter: "COPY PAD INST (em [F5] TOOLS)", valueRange: "Atalho para copiar pad", explanation: "Copia os instrumentos de um pad para outro pad.", arrowPosition: "2º item do menu TOOLS" },
          { parameter: "EFFECTS SW (em [F5] TOOLS)", valueRange: "Janela EFFECTS SWITCH", explanation: "Exibe uma janela onde você verifica e liga/desliga individualmente OVERHEAD, ROOM, REVERB, KIT RESO, BUS-A FX1/FX2, BUS-B FX1/FX2, BUS-C FX1/FX2, BUS-D FX1/FX2 e BUS REVERB. Pressione [F6] (ALL OFF) para desligar todos os efeitos de uma vez, ou [F5] (UNDO) para reverter.", arrowPosition: "3º item do menu TOOLS" },
          { parameter: "SET LIST (em [F5] TOOLS)", valueRange: "32 bancos x 32 etapas", explanation: "Ativa e abre a tela SET LIST para chamar Drum Kits em sequência programada para shows.", arrowPosition: "4º item do menu TOOLS" },
          { parameter: "SAFETY MODE (em [F5] TOOLS)", valueRange: "Bloqueio de painel", explanation: "Desativa a maioria dos botões do painel para evitar operação acidental durante apresentações. Enquanto ativo, você ainda pode ajustar os knobs físicos [MASTER/PHONES], [BACKING] e [CLICK]. Para sair do Safety Mode, siga a instrução na tela (pressione [F6] UNLOCK / [EXIT]).", arrowPosition: "5º item do menu TOOLS" },
          { parameter: "SAVE 1KIT (em [F5] TOOLS)", valueRange: "1–999 arquivos no cartão SD", explanation: "Salva as configurações do Drum Kit individual atual no cartão SD.", arrowPosition: "6º item do menu TOOLS" },
          { parameter: "LOAD 1KIT (em [F5] TOOLS)", valueRange: "1–999 arquivos no cartão SD", explanation: "Carrega configurações de um Drum Kit individual salvo no cartão SD para o V31.", arrowPosition: "7º item do menu TOOLS" },
          { parameter: "SNAPSHOT (em [F5] TOOLS)", valueRange: "CURRENT / SNAPSHOT / LAST SELECTED", explanation: "Salva temporariamente o kit em edição ([F1] SAVE) para comparar com o som atual (CURRENT) ou com o estado original ao abrir o kit (LAST SELECTED), permitindo reverter com [F6] (RESTORE).", arrowPosition: "8º item do menu TOOLS" },
          { parameter: "KIT VIEW (em [F5] TOOLS)", valueRange: "Atalho para KIT VIEW", explanation: "Configura a imagem de fundo e o tamanho do texto da tela KIT.", arrowPosition: "9º item do menu TOOLS" },
          { parameter: "KIT NAME (em [F5] TOOLS)", valueRange: "Atalho para KIT NAME", explanation: "Edita o nome (até 16 caracteres) e o subnome (até 64 caracteres) do Drum Kit atual.", arrowPosition: "10º item do menu TOOLS" }
        ]
      }
    ],
    tipsAndNotes: [
      "Na janela EFFECTS SWITCH ([F5] TOOLS -> EFFECTS SW), pressionar [F6] (ALL OFF) é a maneira mais rápida de deixar todo o kit completamente seco ('dry') para gravação ou teste de timbres puros, podendo desfazer com [F5] (UNDO).",
      "Quando você seleciona um kit na tela KIT, o V31 guarda automaticamente uma cópia dele na memória 'LAST SELECTED' do recurso SNAPSHOT. Assim, mesmo que você esqueça de salvar um Snapshot antes de editar, pode entrar em [F5] TOOLS -> SNAPSHOT, escolher 'LAST SELECTED' e apertar [F6] (RESTORE) para desfazer todas as edições feitas enquanto estava naquele kit (desde que ainda não tenha trocado para outro kit)."
    ]
  },
  {
    id: "ez-edit",
    chapter: "Capítulo 5: Edição Fácil de um Drum Kit (EZ EDIT)",
    title: "EZ EDIT Completo: INSTRUMENT ([F1]), TUNING ([F2]), MUFFLING ([F3]) e VOLUME ([F4])",
    simulatorScreenId: "EZ_EDIT_INST",
    summary: "Como usar o botão físico [EZ EDIT] para editar rapidamente os 4 aspectos fundamentais de qualquer pad e suas 3 camadas (A, B, C): escolha de instrumento, afinação/tamanho/pitch, abafamento/decay e volume do instrumento ou do pad.",
    navigationSteps: [
      "Pressione o botão físico [EZ EDIT] (localizado no canto inferior direito, à esquerda do botão [KIT]).",
      "Pressione [F1] (INST) para abrir a guia EZ EDIT - INSTRUMENT (seleção de instrumentos das camadas A, B e C).",
      "Pressione [F2] (TUNING) para abrir a guia EZ EDIT - TUNING (afinação das camadas A, B e C).",
      "Pressione [F3] (MUFFLING) para abrir a guia EZ EDIT - MUFFLING (abafamento das camadas A, B e C).",
      "Pressione [F4] (VOLUME) para abrir a guia EZ EDIT - VOLUME (volume das camadas A, B e C e volume total do pad).",
      "Em qualquer uma das 4 guias, bata no pad desejado (ou segure [ENTER] + [◄]/[►]) para selecioná-lo, use [▲]/[▼]/[◄]/[►] para posicionar o cursor na camada A, B ou C (ou no parâmetro lateral) e gire o Disco para editar.",
      "Pressione [KIT] para retornar à tela principal KIT."
    ],
    screenLayoutDescription: "Em todas as 4 telas do EZ EDIT, o layout é dividido em duas metades: à esquerda ficam 3 faixas horizontais empilhadas de cima para baixo correspondentes às Camadas A, B e C do pad selecionado. Em cada faixa (A, B, C), à esquerda há o botão de ligar/desligar a camada (ou ícone de tipo de zona) e à direita o campo de valor principal (Nome do Instrumento em INST, barra de Tuning/Size/Pitch em TUNING, tipo de Muffling/Decay em MUFFLING, ou valor em dB em VOLUME). Na metade direita da tela aparece a ilustração gráfica do kit destacando o pad selecionado (e em VOLUME aparece também um fader vertical para o volume geral do pad ao lado das 3 camadas). No rodapé ficam as abas [F1] INST, [F2] TUNING, [F3] MUFFLING, [F4] VOLUME, além de [F5] (LIST em INST; GROUP em TUNING e MUFFLING) e [F6] (UNDO).",
    fButtonsTable: [
      { button: "[F1] (INST)", label: "Guia INSTRUMENT", action: "Seleciona os instrumentos atribuídos às camadas A, B e C do pad selecionado." },
      { button: "[F2] (TUNING)", label: "Guia TUNING", action: "Ajusta a afinação (Tuning, Size ou Pitch, conforme o instrumento) das camadas A, B e C." },
      { button: "[F3] (MUFFLING)", label: "Guia MUFFLING", action: "Ajusta o abafamento (Muffling ou Decay, conforme o instrumento) das camadas A, B e C." },
      { button: "[F4] (VOLUME)", label: "Guia VOLUME", action: "Ajusta o volume individual das camadas A, B e C e o volume geral do pad." },
      { button: "[F5] (LIST / GROUP)", label: "Lista ou Grupo A–C", action: "Na guia INST, [F5] (LIST) abre o navegador de categorias e instrumentos. Nas guias TUNING e MUFFLING, [F5] (GROUP) liga/desliga a edição conjunta das camadas A, B e C ao mesmo tempo." },
      { button: "[F6] (UNDO)", label: "Desfazer", action: "Retorna os parâmetros aos valores que tinham quando você entrou na tela atual do EZ EDIT." }
    ],
    parameterTables: [
      {
        tableTitle: "Parâmetros de EZ EDIT - INSTRUMENT ([F1])",
        note: "Na guia INST, mover o cursor para a esquerda até o ícone da camada A, B ou C permite ligar (ON) ou desligar (OFF) aquela camada com o disco. Pressionar [ENTER] sobre o nome do instrumento abre a lista categorizada.",
        rows: [
          { parameter: "Layer Switch (A, B, C)", valueRange: "OFF, ON", explanation: "Liga ou desliga a camada A, B ou C da zona atual do pad.", arrowPosition: "Coluna esquerda nas linhas A, B ou C" },
          { parameter: "Instrument (A, B, C)", valueRange: "000 OFF, 001– (Presets e Instrument Expansions), SYNTH WAVE, U001–U500 (User Samples)", explanation: "Seleciona o instrumento combinando bancos de instrumentos e números. Você pode escolher timbres internos, instrumentos de expansões carregadas nos Slots 1–6, ondas de sintetizador ou User Samples.", arrowPosition: "Coluna central nas linhas A, B ou C" }
        ]
      },
      {
        tableTitle: "Parâmetros de EZ EDIT - TUNING ([F2]), MUFFLING ([F3]) e VOLUME ([F4])",
        note: "Nas guias TUNING e MUFFLING, quando [F5] (GROUP) está ativado (ON), girar o disco altera simultaneamente as camadas A, B e C mantendo a proporção entre elas. Para ajustar cada camada separadamente, desligue [F5] (GROUP).",
        rows: [
          { parameter: "Tuning / Size / Pitch (em [F2] TUNING)", valueRange: "Tuning: -100–+100 (Tambores) / Size: 1.0–40.0 pol. (Pratos e Chimbal) / Pitch: -100–+100 (User Samples e Outros)", explanation: "Ajusta a afinação da pele (em tambores), o diâmetro do prato (em pratos/chimbal) ou a altura tonal (em samples e percussão). Os parâmetros exibidos variam conforme o grupo do instrumento (consulte V-EDIT).", arrowPosition: "Linhas A, B e C na tela TUNING" },
          { parameter: "Muffling / Decay (em [F3] MUFFLING)", valueRange: "KICK: OFF, TAPE1–2, BLANKET1–3, WEIGHT1–2 / SNARE: OFF, TAPE1–4, GEL1–3, RING1–2 / TOM: OFF, TAPE1–6, GEL1–4, FELT1–2 / CYMBAL: OFF, TAPE1–12 / Outros: OFF, MUFF+1–+8, MUFF MAX / Decay: 1–100", explanation: "Ajusta o tipo e intensidade de abafamento (fita, cobertor, peso, gel, anel, feltro) ou a duração do decaimento (Decay) conforme o instrumento selecionado.", arrowPosition: "Linhas A, B e C na tela MUFFLING" },
          { parameter: "Instrument Volume (em [F4] VOLUME)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Ajusta o volume individual de cada camada de instrumento (A, B e C).", arrowPosition: "Coluna esquerda (linhas A, B e C) na tela VOLUME" },
          { parameter: "Pad Volume (em [F4] VOLUME)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Ajusta o fader de volume geral do pad selecionado.", arrowPosition: "Fader vertical à direita das camadas na tela VOLUME (seta [►])" }
        ]
      }
    ],
    tipsAndNotes: [
      "Se uma camada B ou C estiver definida como '000 OFF', ela aparece desativada nas abas TUNING, MUFFLING e VOLUME até que você atribua um instrumento a ela na aba [F1] (INST).",
      "Use [SHIFT] + setas para alternar entre a pele (HEAD) e o aro (RIM) do pad sem sair da tela EZ EDIT."
    ]
  },
  {
    id: "menu-principal",
    chapter: "Capítulo 6: Menu Principal (MENU)",
    title: "Estrutura e Mapa Espacial da Tela MENU (KIT EDIT, KIT OPTIONS, BACKUP, COPY e SYSTEM)",
    simulatorScreenId: "MENU",
    summary: "Mapa completo da tela [MENU]: como funcionam as 5 categorias da coluna esquerda (KIT EDIT, KIT OPTIONS, BACKUP, COPY, SYSTEM) e a grade de ícones à direita em cada categoria, com contagem exata de setas para chegar em qualquer função.",
    navigationSteps: [
      "Pressione o botão físico [MENU] (localizado abaixo da cruz de cursores, primeiro botão à esquerda).",
      "Na tela MENU, use as setas [▲] e [▼] (quando o foco está na coluna de categorias à esquerda) para escolher uma das 5 categorias principais de cima para baixo: 1ª KIT EDIT, 2ª KIT OPTIONS, 3ª BACKUP, 4ª COPY, 5ª SYSTEM.",
      "Pressione a seta para a direita [►] para entrar na grade de ícones da categoria selecionada (ou gire o Disco / use as setas [◄], [►], [▲], [▼] dentro da grade).",
      "Com o ícone desejado selecionado na grade da direita, pressione [ENTER] para abrir a tela correspondente.",
      "Para voltar da grade de ícones para a coluna de categorias à esquerda, mova o cursor até a primeira coluna da grade e pressione [◄] (ou pressione [MENU])."
    ],
    screenLayoutDescription: "A tela MENU é dividida verticalmente em duas áreas: 1) Coluna Esquerda (Menu de Categorias): uma lista vertical fixa com 5 abas de cima para baixo: 'KIT EDIT' (1ª), 'KIT OPTIONS' (2ª), 'BACKUP' (3ª), 'COPY' (4ª) e 'SYSTEM' (5ª). 2) Área Direita (Grade de Submenus): exibe os ícones da categoria atualmente destacada à esquerda, organizados em uma grade de até 4 colunas por 3 linhas. Ao usar as setas ou o disco na área direita, o foco percorre os ícones da esquerda para a direita e de cima para baixo.",
    fButtonsTable: [
      { button: "[MENU]", label: "Abrir Menu Principal", action: "Abre a tela MENU a partir de qualquer lugar." },
      { button: "[ENTER]", label: "Entrar no Submenu", action: "Abre a tela do ícone atualmente selecionado na grade da direita." },
      { button: "[EXIT]", label: "Voltar", action: "Sai do submenu atual e retorna à grade da tela MENU (ou da tela MENU para a tela KIT)." }
    ],
    parameterTables: [
      {
        tableTitle: "Mapa Completo das 5 Categorias e Todos os Submenus da Tela [MENU]",
        note: "Em todas as grades da direita na tela MENU, os ícones são dispostos em linhas de até 4 colunas (Coluna 1 a Coluna 4).",
        rows: [
          { parameter: "1. Categoria KIT EDIT (9 itens - grade 4x3)", valueRange: "Linha 1: INSTRUMENT, PAD VOL, PAD EQ, PAD COMP / Linha 2: AMBIENCE, KIT VOL, KIT EQ, KIT COMP / Linha 3: BUS FX", explanation: "Edições detalhadas de timbres, equalização, compressão, ambiência e efeitos de barramento do Drum Kit atual.", arrowPosition: "[MENU] -> 1ª categoria no topo à esquerda" },
          { parameter: "2. Categoria KIT OPTIONS (12 itens - grade 4x3)", valueRange: "Linha 1: XSTICK, BRUSH, BUZZ, STRAINER / Linha 2: KIT NAME, KIT COLOR, KIT VIEW, KIT TEMPO / Linha 3: KIT PHRASE, MUTE GROUP, KIT MIDI, POS/PEDAL", explanation: "Configurações específicas por Drum Kit (aro da caixa, vassourinha, esteira, automático, nome, cor do LED, imagem, andamento do kit, frase, grupo de mute, notas MIDI e posição/pedal).", arrowPosition: "[MENU] -> seta [▼] 1 vez na coluna esquerda" },
          { parameter: "3. Categoria BACKUP (7 itens - grade 4x2)", valueRange: "Linha 1: SAVE, LOAD, DELETE, SAVE 1 KIT / Linha 2: LOAD 1 KIT, DELETE 1 KIT, INFO (e FORMAT)", explanation: "Gerenciamento de backups completos e de kits individuais no cartão SD.", arrowPosition: "[MENU] -> seta [▼] 2 vezes na coluna esquerda" },
          { parameter: "4. Categoria COPY (9 itens - grade 4x3)", valueRange: "Linha 1: KIT, PAD INST, INST SET, VOL/PAN / Linha 2: AMBIENCE, BUS FX, OUTPUT, SET LIST / Linha 3: TRIG BANK, TRIG PRM", explanation: "Copia ou troca (Swap) configurações de kits, pads, conjuntos de instrumentos, volumes, ambiência, efeitos, saída, set lists e acionadores.", arrowPosition: "[MENU] -> seta [▼] 3 vezes na coluna esquerda" },
          { parameter: "5. Categoria SYSTEM (11 itens - grade 4x3)", valueRange: "Linha 1: Wi-Fi, Bluetooth, AUDIO IN, TRIGGER / Linha 2: MIDI, OUTPUT, USB AUDIO, AUTO OFF / Linha 3: OPTION, INFO, FACTORY RESET", explanation: "Configurações globais do módulo V31 que se aplicam a todo o equipamento.", arrowPosition: "[MENU] -> seta [▼] 4 vezes na coluna esquerda" }
        ]
      }
    ],
    tipsAndNotes: [
      "O V31 memoriza o último ícone que você selecionou na tela MENU enquanto permanece ligado, facilitando voltar rapidamente ao mesmo submenu pressionando [MENU] e [ENTER].",
      "Para garantir uma contagem absoluta de setas sempre igual, você pode subir até o topo da coluna esquerda com [▲] repetidamente para ter certeza de que está em 'KIT EDIT'."
    ]
  },
  {
    id: "kit-edit-instrument",
    chapter: "Capítulo 7: KIT EDIT — INSTRUMENT (Camadas, Transient, EQ e Layer Mode)",
    title: "Edição Completa de Instrumentos (INSTRUMENT): Guias INST, V-EDIT (Comum), TRANSIENT, EQ, LAYER MODE e LAYER COPY",
    simulatorScreenId: "KIT_EDIT_INST",
    summary: "Referência completa da tela KIT EDIT -> INSTRUMENT: seleção de instrumentos por camada (A, B, C), cópia e troca de camadas (LAYER COPY), parâmetros gerais da guia V-EDIT (Inst Pitch, Inst Pitch Sweep, Inst Decay, Dynamic Enhancer), modelagem de ataque e sustentação na guia TRANSIENT, equalizador de 3 bandas por camada na guia EQ e modos de disparo das camadas na guia LAYER MODE (MIX, VELOCITY com Fade/Fixed e HI-HAT).",
    navigationSteps: [
      "Pressione [MENU] -> selecione a 1ª categoria à esquerda 'KIT EDIT' -> na grade à direita selecione o 1º ícone (Linha 1, Coluna 1) 'INSTRUMENT' e pressione [ENTER].",
      "Bata no pad que deseja configurar (ou segure [ENTER] e use [◄]/[►] para escolher o pad, e [SHIFT] + setas para escolher HEAD ou RIM).",
      "Use os botões de função [F1] a [F5] para alternar entre as 5 guias de edição do instrumento: [F1] (INST), [F2] (V-EDIT), [F3] (TRANSIENT), [F4] (EQ) e [F5] (LAYER MODE).",
      "Em qualquer guia (exceto LAYER MODE), pressione [F6] (H&R) se quiser ativar (ON) ou desativar (OFF) a edição simultânea da pele (Head) e do aro (Rim).",
      "Para copiar ou trocar configurações entre as camadas A, B e C ou entre Head e Rim: na guia [F1] (INST), mantenha [SHIFT] pressionado e pressione [F5] (LAYER COPY)."
    ],
    screenLayoutDescription: "Na guia [F1] (INST), a esquerda da tela mostra as 3 caixas empilhadas das camadas A, B e C (cada uma com chave ON/OFF, número/nome do instrumento e volume em dB), e a direita mostra a foto do instrumento selecionado e o diagrama do kit. Nas guias [F2] (V-EDIT), [F3] (TRANSIENT) e [F4] (EQ), a coluna esquerda mostra qual camada (A, B ou C) está ativa para edição, e a área central exibe os controles e gráficos daquela camada (em V-EDIT aparecem 2 linhas de 5 parâmetros; em TRANSIENT aparecem os controles de ataque/release; em EQ aparece a curva gráfica e a tabela de 3 bandas LOW, MID e HIGH). Na guia [F5] (LAYER MODE), a tela exibe o modo de combinação das 3 camadas (MIX, VELOCITY ou HI-HAT) e as faixas de velocidade (Velocity Lower/Upper e Fade In/Out Sens) para cada camada A, B e C.",
    fButtonsTable: [
      { button: "[F1] (INST)", label: "Guia INST", action: "Seleciona o instrumento, liga/desliga cada camada (A, B, C) e ajusta o volume de cada camada." },
      { button: "[F2] (V-EDIT)", label: "Guia V-EDIT", action: "Acessa a modelagem física/acústica do instrumento (Tuning, Muffling, tamanho, etc.) e os parâmetros comuns de Pitch, Pitch Sweep, Decay e Dynamic Enhancer." },
      { button: "[F3] (TRANSIENT)", label: "Guia TRANSIENT", action: "Ajusta a intensidade e o tempo do ataque (Attack) e da liberação (Release) de cada camada." },
      { button: "[F4] (EQ)", label: "Guia EQ", action: "Ajusta o equalizador de 3 bandas (Low, Mid com Q, High) individual para cada camada A, B e C." },
      { button: "[F5] (LAYER MODE)", label: "Guia LAYER MODE", action: "Configura como as camadas A, B e C tocam juntas (MIX, por força da batida VELOCITY, ou por abertura do chimbal HI-HAT)." },
      { button: "[F6] (H&R)", label: "Vincular Head & Rim", action: "Quando ON, vincula a seleção da pele (Head) e do aro (Rim) para edição simultânea." },
      { button: "[SHIFT] + [F1]–[F5]", label: "Chaves Rápidas / Layer Copy", action: "Na guia INST, [SHIFT] + [F5] abre a janela LAYER COPY (para copiar ou trocar/SWAP camadas A, B, C e Head/Rim). Nas guias TRANSIENT e EQ, permite alternar chaves de efeito." }
    ],
    parameterTables: [
      {
        tableTitle: "Guia INST ([F1]) e Parâmetros Comuns da Guia V-EDIT ([F2]) (Data List págs. 8–9)",
        note: "Para instrumentos que possuem Tuning ou Pitch no V-EDIT, é mais prático ajustar a afinação grossa no Tuning/Pitch e usar 'Inst Pitch' para o ajuste fino em centésimos de semitom.",
        rows: [
          { parameter: "Instrument (Guia INST)", valueRange: "000 OFF, 001– (Presets e Instrument Expansions), SYNTH WAVE, U001–U500 (User Samples)", explanation: "Seleciona o instrumento combinando bancos de instrumentos e números. Pressione [ENTER] para abrir a lista por grupos e bancos.", arrowPosition: "Guia [F1] INST: campo central das camadas A, B ou C" },
          { parameter: "Layer switch (Guia INST)", valueRange: "OFF, ON", explanation: "Liga ou desliga individualmente cada camada (A, B ou C).", arrowPosition: "Guia [F1] INST: botão à esquerda do nome na camada A, B ou C" },
          { parameter: "Layer volume (Guia INST)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume individual de cada camada (A, B ou C).", arrowPosition: "Guia [F1] INST: campo de volume na camada A, B ou C" },
          { parameter: "V-EDIT parameters (Guia V-EDIT)", valueRange: "Varia conforme o instrumento selecionado", explanation: "Parâmetros acústicos/modelados específicos do grupo de instrumento selecionado (consulte a seção completa V-EDIT a seguir).", arrowPosition: "Guia [F2] V-EDIT: colunas 1 a 3" },
          { parameter: "Inst Pitch (Guia V-EDIT)", valueRange: "-4800–+4800 (unidades de 1 centésimo / cent)", explanation: "Altura tonal fina do instrumento em centésimos de semitom (+/- 4 oitavas, onde 100 cents = 1 semitom).", arrowPosition: "Guia [F2] V-EDIT: Linha 1, Coluna 4" },
          { parameter: "Inst Pitch Sweep *1 (Guia V-EDIT)", valueRange: "-100–+100", explanation: "Após o início do som, a altura tonal sobe ou desce gradualmente. Valores positivos (+) fazem o som começar agudo e cair; valores negativos (-) fazem o som começar grave e subir. Valores maiores produzem maior mudança (*1 desativado se User Sample estiver com Play Type = LOOP ALT).", arrowPosition: "Guia [F2] V-EDIT: Linha 1, Coluna 5" },
          { parameter: "Inst Decay *1 (Guia V-EDIT)", valueRange: "1–100", explanation: "Duração do decaimento (sustentação) do som (*1 desativado se User Sample estiver com Play Type = LOOP ALT).", arrowPosition: "Guia [F2] V-EDIT: Linha 2, Coluna 4" },
          { parameter: "Dynamic Enhancer (Guia V-EDIT)", valueRange: "OFF, NORMAL, WIDE", explanation: "Especifica se a sensação de batidas fortes é realçada (NORMAL, WIDE) ou não (OFF). Defina 'NORMAL' para aplicar o efeito apenas ao bater forte no pad, e 'WIDE' para aplicar também em batidas um pouco mais suaves. (Indisponível se um User Sample estiver atribuído ao instrumento).", arrowPosition: "Guia [F2] V-EDIT: Linha 2, Coluna 5" }
        ]
      },
      {
        tableTitle: "Guia TRANSIENT ([F3]) — Ataque e Liberação por Camada (Data List pág. 9)",
        note: "Para timbres internos (built-in tones), o parâmetro 'Type' exibe '(Preset)' e não pode ser editado; ele só é editável quando um User Sample (exceto LOOP ALT) está selecionado.",
        rows: [
          { parameter: "Transient Switch", valueRange: "OFF, ON", explanation: "Liga ou desliga o efeito de transiente para a camada selecionada.", arrowPosition: "Guia [F3] TRANSIENT: chave ON/OFF" },
          { parameter: "Type", valueRange: "Preset, Type 1–4", explanation: "Define o tipo de efeito aplicado ao transiente quando um User Sample (exceto PLAY TYPE LOOP) está selecionado no instrumento.", arrowPosition: "Guia [F3] TRANSIENT: 1º parâmetro" },
          { parameter: "Attack Time", valueRange: "1–10", explanation: "Tempo durante o qual o ataque muda.", arrowPosition: "Guia [F3] TRANSIENT: 2º parâmetro" },
          { parameter: "Attack Depth", valueRange: "-100–+100", explanation: "Ajuste da intensidade do ataque (valores negativos suavizam o ataque; positivos acentuam a batida).", arrowPosition: "Guia [F3] TRANSIENT: 3º parâmetro" },
          { parameter: "Attack Type", valueRange: "NORMAL, WIDE 1, WIDE 2", explanation: "Em 'NORMAL', o efeito de ataque de transiente é sempre aplicado. Em 'WIDE 1' ou 'WIDE 2', o efeito torna-se mais fraco quando você bate mais suavemente no pad (eficaz para suavizar o ataque em notas fantasmas na caixa).", arrowPosition: "Guia [F3] TRANSIENT: 4º parâmetro" },
          { parameter: "Release Depth", valueRange: "-100–+100", explanation: "Ajuste da intensidade da liberação/sustentação (Release).", arrowPosition: "Guia [F3] TRANSIENT: 5º parâmetro" },
          { parameter: "Gain", valueRange: "-12.0–+6.0 dB", explanation: "Volume da camada após o ajuste de transiente.", arrowPosition: "Guia [F3] TRANSIENT: 6º parâmetro" }
        ]
      },
      {
        tableTitle: "Guia EQ ([F4]) — Equalizador de 3 Bandas por Camada (Data List pág. 9)",
        note: "Este equalizador atua individualmente sobre a camada A, B ou C selecionada (antes de somar com as outras camadas no PAD EQ).",
        rows: [
          { parameter: "EQ Switch", valueRange: "OFF, ON", explanation: "Liga ou desliga o equalizador da camada atual.", arrowPosition: "Guia [F4] EQ: chave ON/OFF" },
          { parameter: "Low Freq", valueRange: "20–1kHz", explanation: "Frequência da faixa grave (Low).", arrowPosition: "Guia [F4] EQ: coluna LOW, linha Freq" },
          { parameter: "Low Gain", valueRange: "-24–+24 dB", explanation: "Quantidade de reforço ou corte para a faixa de baixas frequências.", arrowPosition: "Guia [F4] EQ: coluna LOW, linha Gain" },
          { parameter: "Mid Freq", valueRange: "20–16kHz", explanation: "Frequência central da faixa média (Mid).", arrowPosition: "Guia [F4] EQ: coluna MID, linha Freq" },
          { parameter: "Mid Q", valueRange: "0.5–16.0", explanation: "Largura da faixa de frequência média. Valores maiores estreitam a faixa afetada.", arrowPosition: "Guia [F4] EQ: coluna MID, linha Q" },
          { parameter: "Mid Gain", valueRange: "-24–+24 dB", explanation: "Quantidade de reforço ou corte para a faixa média.", arrowPosition: "Guia [F4] EQ: coluna MID, linha Gain" },
          { parameter: "High Freq", valueRange: "1k–16kHz", explanation: "Frequência da faixa aguda (High).", arrowPosition: "Guia [F4] EQ: coluna HIGH, linha Freq" },
          { parameter: "High Gain", valueRange: "-24–+24 dB", explanation: "Quantidade de reforço ou corte para a faixa de altas frequências.", arrowPosition: "Guia [F4] EQ: coluna HIGH, linha Gain" }
        ]
      },
      {
        tableTitle: "Guia LAYER MODE ([F5]) e Janela LAYER COPY (Data List pág. 9)",
        note: "O modo HI-HAT (*2) só fica disponível quando o pad selecionado é o HI-HAT e quando o instrumento está configurado como SYNTH WAVE ou USER SAMPLE (com Play Type = ONE SHOT).",
        rows: [
          { parameter: "Layer Mode", valueRange: "MIX, VELOCITY, HI-HAT *2", explanation: "MIX: Toca simultaneamente todas as camadas (A, B, C) cujas chaves estejam ON. VELOCITY: Especifica como cada camada toca em resposta à força da batida (permite velocity switch ou crossfade entre A, B e C). HI-HAT (*2): A camada A toca ao acionar o chimbal aberto, a camada B toca ao acionar o chimbal fechado e a camada C toca ao acionar o pedal fechado.", arrowPosition: "Guia [F5] LAYER MODE: topo" },
          { parameter: "Fade In Sens *3", valueRange: "0–127 (quando Layer Mode = VELOCITY e Dynamics = FADE)", explanation: "Define a curva gradual de entrada de volume conforme a força da batida quando o instrumento começa a soar a partir de Velocity Lower.", arrowPosition: "Guia [F5] LAYER MODE: coluna Fade In Sens" },
          { parameter: "Velocity Lower *3", valueRange: "1–127 (quando Layer Mode = VELOCITY e Dynamics = FADE)", explanation: "Especifica a força mínima de batida (velocidade MIDI) a partir da qual a camada começa a soar.", arrowPosition: "Guia [F5] LAYER MODE: coluna Velocity Lower" },
          { parameter: "Velocity Upper *3", valueRange: "1–127 (quando Layer Mode = VELOCITY e Dynamics = FADE)", explanation: "Especifica a força máxima de batida até a qual a camada toca.", arrowPosition: "Guia [F5] LAYER MODE: coluna Velocity Upper" },
          { parameter: "Fade Out Sens *3", valueRange: "0–127 (quando Layer Mode = VELOCITY e Dynamics = FADE)", explanation: "Quando você toca com força próxima ao limite Velocity Upper, o som da camada diminui gradualmente conforme este valor.", arrowPosition: "Guia [F5] LAYER MODE: coluna Fade Out Sens" },
          { parameter: "Dynamics *4", valueRange: "FIXED, FADE (quando Layer Mode = VELOCITY)", explanation: "FIXED: Ao tocar com força igual ou maior que 'Threshold', a camada toca sempre no mesmo volume máximo fixo, independentemente da força. FADE: O volume da camada varia dinamicamente conforme a força da batida e as faixas de velocidade.", arrowPosition: "Guia [F5] LAYER MODE: coluna Dynamics" },
          { parameter: "Threshold *5", valueRange: "1–127 (quando Layer Mode = VELOCITY e Dynamics = FIXED)", explanation: "Define a força mínima necessária ao bater no pad para que o som dispare quando Dynamics está em 'FIXED'.", arrowPosition: "Guia [F5] LAYER MODE: coluna Threshold" },
          { parameter: "LAYER COPY ([SHIFT] + [F5] na guia INST)", valueRange: "Mode: COPY ou SWAP / Source Pad, H/R, Layer -> Dest Pad, H/R, Layer", explanation: "Permite copiar (COPY) ou permutar/trocar (SWAP) todas as configurações de uma camada (A, B, C ou ALL) e zona (HEAD/RIM) para outra camada ou pad. Pressione [F6] (COPY / SWAP) e confirme em 'OK' com [ENTER].", arrowPosition: "Na guia [F1] INST, pressione [SHIFT] + [F5]" }
        ]
      }
    ],
    tipsAndNotes: [
      "Na listagem de instrumentos (Data List págs. 110–118), os códigos na coluna Remarks significam: *M = suporta edição de Mic Size (apenas Kick) e Mic Distance; *P = suporta mudança de som conforme a posição da batida (Positional Sensing / profundidade no aro); *X = ao atribuir ao aro da caixa, o som correspondente de Cross Stick é atribuído automaticamente ao XSTICK; *O = suporta edição de Overtone; *B = suporta técnica de vassourinha (Brush); *L = suporta edição de Low Cut.",
      "Ao ativar [F6] (H&R) na tela INSTRUMENT, você edita simultaneamente os parâmetros da pele e do aro, economizando metade do tempo ao equalizar ou afinar tambores e pratos."
    ]
  },
  {
    id: "kit-edit-vedit",
    chapter: "Capítulo 8: KIT EDIT — V-EDIT (Tabelas Completas por Grupo de Instrumento)",
    title: "Todas as Tabelas V-EDIT do Data List: KICK, SNARE/CROSS STICK, TOM, HI-HAT, CYMBALS, SYNTH WAVE (PITCH/FILTER/AMP), USER SAMPLE e Outros",
    simulatorScreenId: "V_EDIT",
    summary: "Referência integral de todos os parâmetros de modelagem V-EDIT do Data List (páginas 10 a 13) para todas as categorias de instrumentos: Bumbo (KICK), Caixa e Aro (SNARE/CROSS STICK), Tons (TOM), Chimbal (HI-HAT/HI-HAT OTHERS/HI-HAT ELEC), Pratos (RIDE/CRASH/CHINA/SPLASH/STACKED CYMBAL), Sintetizador interno completo (SYNTH WAVE com oscilador, PITCH, FILTER e AMP), USER SAMPLE e instrumentos de outros grupos.",
    navigationSteps: [
      "A partir da tela KIT, pressione [MENU] -> selecione 'KIT EDIT' -> selecione o 1º ícone 'INSTRUMENT' e pressione [ENTER].",
      "Pressione o botão de função [F2] (V-EDIT) para entrar na guia INSTRUMENT - V-EDIT.",
      "Bata no pad desejado (ou segure [ENTER] + [◄]/[►] para selecionar o pad, e [SHIFT] + setas para selecionar HEAD ou RIM).",
      "Para escolher qual camada (A, B ou C) editar, mova o cursor para a coluna esquerda (A, B, C) com [◄] e use [▲]/[▼], ou posicione o cursor nos parâmetros centrais com [►] e navegue pelas 2 linhas e 5 colunas de parâmetros usando [▲], [▼], [◄] e [►].",
      "Quando o instrumento da camada for 'SYNTH WAVE', use os botões de função no rodapé para alternar entre as subguias do sintetizador: [F2] (V-EDIT / Oscilador), e as abas de envelope PITCH, FILTER e AMP."
    ],
    screenLayoutDescription: "Na tela INSTRUMENT - V-EDIT, a coluna esquerda mostra as 3 abas verticais de camada (A, B e C) indicando o número e nome do instrumento de cada camada. A área principal ao centro-direita é organizada em uma grade de 2 linhas por 5 colunas (até 10 parâmetros simultâneos), além de um ícone gráfico ilustrativo na parte inferior mostrando a pele, casco, esteira ou prato. Nas Colunas 1, 2 e 3 (da esquerda) ficam os parâmetros específicos do grupo do instrumento (ex: Tuning, Muffling, Shell Depth, Beater Type, Mic Distance, Strainer Adjust, Sizzle, etc.); nas Colunas 4 e 5 (da direita) ficam os 4 parâmetros comuns (Linha 1: Inst Pitch na col. 4 e Inst Pitch Sweep na col. 5; Linha 2: Inst Decay na col. 4 e Dynamic Enhancer na col. 5).",
    fButtonsTable: [
      { button: "[F1] (INST)", label: "Guia INST", action: "Retorna à guia de seleção de instrumento e volume das camadas A, B e C." },
      { button: "[F2] (V-EDIT)", label: "Guia V-EDIT Ativa", action: "Mantém ativa a tela de edição detalhada V-EDIT." },
      { button: "[F3] (TRANSIENT)", label: "Guia TRANSIENT", action: "Alterna para a tela de ajuste de ataque e liberação da camada." },
      { button: "[F4] (EQ)", label: "Guia EQ", action: "Alterna para o equalizador de 3 bandas da camada." },
      { button: "[F5] (LAYER MODE)", label: "Guia LAYER MODE", action: "Alterna para a configuração de modo de camada (MIX, VELOCITY, HI-HAT)." },
      { button: "[F6] (H&R)", label: "Head & Rim ON/OFF", action: "Ativa ou desativa a edição simultânea da pele (Head) e do aro (Rim)." }
    ],
    parameterTables: [
      {
        tableTitle: "V-EDIT: KICK (Bumbo) — Data List pág. 10",
        note: "PINSTRIPE é marca registrada da Remo Inc., EUA. Os parâmetros Mic Distance e Mic Size estão disponíveis nos instrumentos marcados com *M na lista de instrumentos.",
        rows: [
          { parameter: "Tuning", valueRange: "-100–100", explanation: "Afinação da pele do bumbo.", arrowPosition: "Linha 1, Coluna 1" },
          { parameter: "Muffling", valueRange: "OFF, TAPE1–2, BLANKET1–3, WEIGHT1–2", explanation: "Configuração de abafamento (muting): sem abafamento (OFF), fitas adesivas (TAPE 1–2), cobertores internos (BLANKET 1–3) ou pesos (WEIGHT 1–2).", arrowPosition: "Linha 1, Coluna 2" },
          { parameter: "Head Type", valueRange: "CLEAR, COATED, PINSTRIPE", explanation: "Tipo de pele do bumbo: transparente (CLEAR), porosa/revestida (COATED) ou dupla com anel redutor de harmônicos (PINSTRIPE).", arrowPosition: "Linha 3 / Ícone inferior esquerdo" },
          { parameter: "Shell Depth", valueRange: "1.0–30.0 [inch]", explanation: "Profundidade do casco do bumbo em polegadas (de 1,0 a 30,0 pol.).", arrowPosition: "Linha 1, Coluna 3" },
          { parameter: "Beater Type", valueRange: "FELT1–2, WOOD, PLASTIC1–2", explanation: "Tipo de batedor (pirulito) do pedal: feltro (FELT 1–2), madeira (WOOD) ou plástico (PLASTIC 1–2).", arrowPosition: "Linha 2, Coluna 1" },
          { parameter: "Mic Distance", valueRange: "-5–NORMAL–+5", explanation: "Distância entre o microfone e o bumbo.", arrowPosition: "Linha 2, Coluna 2" },
          { parameter: "Mic Size", valueRange: "NORMAL, LARGE", explanation: "Tamanho do microfone captador do bumbo (exclusivo para sons de bumbo *M).", arrowPosition: "Linha 2, Coluna 3" }
        ]
      },
      {
        tableTitle: "V-EDIT: SNARE / CROSS STICK (Caixa e Aro na Caixa) — Data List pág. 10",
        note: "*1 Indisponível se o grupo de instrumento for CROSS STICK. *2 No grupo SNARE, desativado para alguns instrumentos (disponível nos marcados com *O); indisponível em CROSS STICK. *3 Quando um pad com alavanca de automático (como PD-14DSX) está atribuído a SNARE, você pode controlar Strainer Adjust operando a alavanca ou botão físico no pad.",
        rows: [
          { parameter: "Tuning", valueRange: "-100–+100", explanation: "Afinação da pele da caixa.", arrowPosition: "Linha 1, Coluna 1" },
          { parameter: "Muffling", valueRange: "OFF, TAPE1–TAPE4, GEL1–3, RING1–2", explanation: "Configuração de abafamento (muting): desligado (OFF), fita 1 a 4 (TAPE1–4), gel abafador 1 a 3 (GEL1–3) ou anel abafador/O-ring 1 a 2 (RING1–2).", arrowPosition: "Linha 1, Coluna 2" },
          { parameter: "Head Type *1", valueRange: "CLEAR, COATED, PINSTRIPE", explanation: "Tipo de pele da caixa: transparente (CLEAR), porosa (COATED) ou Pinstripe (*1 indisponível para CROSS STICK).", arrowPosition: "Linha 3, Coluna 3" },
          { parameter: "Shell Depth *1", valueRange: "1.0–20.0 [inch]", explanation: "Profundidade do casco da caixa em polegadas (de 1,0 a 20,0 pol.) (*1 indisponível para CROSS STICK).", arrowPosition: "Linha 1, Coluna 3" },
          { parameter: "Overtone *2", valueRange: "-5–+5", explanation: "Quantidade de componentes harmônicos (sobras metálicas/ressoantes da caixa) (*2 disponível nos instrumentos *O; indisponível em CROSS STICK).", arrowPosition: "Linha 2, Coluna 1" },
          { parameter: "Mic Distance *1", valueRange: "-5–NORMAL–+5", explanation: "Distância entre o microfone e a caixa (*1 indisponível para CROSS STICK).", arrowPosition: "Linha 3, Coluna 1" },
          { parameter: "Strainer Adjust *3", valueRange: "0–32", explanation: "Tensão da esteira da caixa (fios ressonantes). Quando definido como '0', a esteira fica totalmente solta/desacoplada da pele de resposta.", arrowPosition: "Linha 2, Coluna 2" },
          { parameter: "Wire Type", valueRange: "DEFAULT, TYPE1–TYPE3", explanation: "Tipo de esteira da caixa.", arrowPosition: "Linha 2, Coluna 3" },
          { parameter: "Wire Level", valueRange: "-6–NORMAL–+6", explanation: "Volume do som da esteira da caixa.", arrowPosition: "Linha 3, Coluna 2" }
        ]
      },
      {
        tableTitle: "V-EDIT: TOM (Tons e Surdos) — Data List pág. 11",
        note: "Aplica-se a todos os instrumentos do grupo acústico TOM.",
        rows: [
          { parameter: "Tuning", valueRange: "-100–+100", explanation: "Afinação da pele do tom.", arrowPosition: "Linha 1, Coluna 1" },
          { parameter: "Muffling", valueRange: "OFF, TAPE1–6, GEL1–4, FELT1–2", explanation: "Configuração de abafamento (muting): desligado (OFF), fitas 1 a 6 (TAPE1–6), géis 1 a 4 (GEL1–4) ou abafador interno de feltro 1 a 2 (FELT1–2).", arrowPosition: "Linha 1, Coluna 2" },
          { parameter: "Head Type", valueRange: "CLEAR, COATED, PINSTRIPE", explanation: "Tipo de pele do tom: transparente (CLEAR), porosa (COATED) ou Pinstripe.", arrowPosition: "Linha 2, Coluna 2" },
          { parameter: "Shell Depth", valueRange: "1.0–30.0 [inch]", explanation: "Profundidade do casco do tom em polegadas (de 1,0 a 30,0 pol.).", arrowPosition: "Linha 1, Coluna 3" },
          { parameter: "Mic Distance", valueRange: "-5–NORMAL–+5", explanation: "Distância entre o microfone e o tom.", arrowPosition: "Linha 2, Coluna 1" }
        ]
      },
      {
        tableTitle: "V-EDIT: HI-HAT / HI-HAT OTHERS / HI-HAT ELEC (Chimbal) — Data List pág. 11",
        note: "Quando 'Fixed' está em qualquer valor diferente de 'NORMAL', você pode simular um chimbal auxiliar fechado ou semiaberto fixo independente do pedal.",
        rows: [
          { parameter: "Size", valueRange: "1.0–40.0 [inch]", explanation: "Diâmetro dos pratos de chimbal em polegadas (de 1,0 a 40,0 pol.).", arrowPosition: "Linha 1, Coluna 1" },
          { parameter: "Thickness", valueRange: "-5–NORMAL–+5", explanation: "Espessura dos pratos de chimbal.", arrowPosition: "Linha 1, Coluna 2" },
          { parameter: "Fixed", valueRange: "NORMAL, PRESS, CLOSE, HALF1, HALF2, OPEN", explanation: "Grau de abertura fixa do chimbal. Se algo diferente de 'NORMAL' for selecionado, a abertura do chimbal permanece fixa naquele estado (pressionado, fechado, semiaberto 1/2 ou aberto), independentemente de como você pisa no pedal de chimbal.", arrowPosition: "Linha 1, Coluna 3" }
        ]
      },
      {
        tableTitle: "V-EDIT: RIDE / CRASH / CHINA / SPLASH / STACKED CYMBAL (Pratos) — Data List pág. 11",
        note: "Você pode adicionar rebites, correntes, contas ou moedas aos pratos usando Sizzle Type e Sizzle Amount.",
        rows: [
          { parameter: "Size", valueRange: "1.0–40.0", explanation: "Diâmetro do prato em polegadas (de 1,0 a 40,0 pol.).", arrowPosition: "Linha 1, Coluna 1" },
          { parameter: "Thickness", valueRange: "-5–NORMAL–+5", explanation: "Espessura do prato.", arrowPosition: "Linha 1, Coluna 2" },
          { parameter: "Muffling", valueRange: "OFF, TAPE1–12", explanation: "Configuração de abafamento (muting) com fitas no prato (OFF ou TAPE 1 a 12).", arrowPosition: "Linha 1, Coluna 3" },
          { parameter: "Sizzle Type", valueRange: "OFF, RIVET1, CHAIN, BEADS, COIN, RIVET2", explanation: "Tipo de chiado/sizzle acoplado ao prato: desligado (OFF), rebite 1 (RIVET1), corrente (CHAIN), colar de contas (BEADS), moeda (COIN) ou rebite 2 (RIVET2).", arrowPosition: "Linha 2, Coluna 1" },
          { parameter: "Sizzle Amount", valueRange: "-3–+3", explanation: "Quantidade/intensidade do chiado (sizzle).", arrowPosition: "Linha 2, Coluna 2" },
          { parameter: "Low Cut", valueRange: "OFF, HALF, FULL", explanation: "Corte de volume das frequências graves do prato (desligado, metade ou total).", arrowPosition: "Linha 2, Coluna 3" }
        ]
      },
      {
        tableTitle: "V-EDIT: SYNTH WAVE — Oscilador e Seção PITCH (Data List pág. 12)",
        note: "Ao alterar o parâmetro 'Template', todos os parâmetros do SYNTH mudam para os ajustes ideais da sua seleção, podendo ser refinados depois.",
        rows: [
          { parameter: "Template", valueRange: "Presets de Template Synth", explanation: "Modelo pré-configurado para o instrumento SYNTH WAVE. Alterar este parâmetro carrega os ajustes ideais de forma de onda, pitch, filtro e amplificador.", arrowPosition: "Seção Oscilador: 1º parâmetro" },
          { parameter: "Waveform", valueRange: "SINE (Senoidal), WNOISE (Ruído branco), SAW (Dente de serra), TRI (Triangular), SQR (Quadrada), RAMP (Rampa), JUNO (Dente de serra modulada estilo Roland JUNO)", explanation: "Define a forma de onda básica do sintetizador.", arrowPosition: "Seção Oscilador: 2º parâmetro" },
          { parameter: "Mono/Poly", valueRange: "MONO, POLY", explanation: "Escolha 'MONO' para que o timbre toque monofonicamente (uma nova batida corta a nota anterior) ou 'POLY' para tocar polifonicamente (as notas se sobrepõem).", arrowPosition: "Seção Oscilador: 3º parâmetro" },
          { parameter: "Start Phase", valueRange: "OFF, 45, 90, 135, 180, 225, 270, 315°", explanation: "Fase inicial da forma de onda no instante em que o pad é acionado.", arrowPosition: "Seção Oscilador: 4º parâmetro" },
          { parameter: "Shape", valueRange: "0–127", explanation: "Deforma a forma de onda para alterar os harmônicos. Defina como '0' para usar a onda original (não tem efeito para WNOISE).", arrowPosition: "Seção Oscilador: 5º parâmetro" },
          { parameter: "Fat", valueRange: "0–127", explanation: "Reforça a região de baixas frequências (subgraves). Defina como '0' para usar a onda original (não tem efeito para WNOISE).", arrowPosition: "Seção Oscilador: 6º parâmetro" },
          { parameter: "PITCH: EnvSw", valueRange: "OFF, ON", explanation: "Liga ou desliga o envelope de altura tonal (Pitch Envelope).", arrowPosition: "Seção PITCH: 1º parâmetro" },
          { parameter: "PITCH: T1–T3", valueRange: "5–10000mSec", explanation: "Especifica os tempos do envelope de pitch (T1 a T3). Valores maiores aumentam o tempo para atingir a próxima frequência (ex: T2 define o tempo para ir de L1 até L2).", arrowPosition: "Seção PITCH: parâmetros de tempo T1, T2, T3" },
          { parameter: "PITCH: L0–L2, L3/FREQ", valueRange: "20–10000Hz", explanation: "Define a frequência em Hz de cada estágio do envelope de pitch (L0, L1, L2 e L3 quando EnvSw = ON; ou a frequência fixa FREQ quando EnvSw = OFF).", arrowPosition: "Seção PITCH: parâmetros de nível/frequência L0 a L3/FREQ" },
          { parameter: "PITCH: VeloSens", valueRange: "0–127", explanation: "Ajusta a sensibilidade à velocidade (força da batida) no envelope de pitch. Valores maiores aumentam a sensibilidade.", arrowPosition: "Seção PITCH: VeloSens" },
          { parameter: "PITCH: EnvCurve", valueRange: "0–127", explanation: "Ajusta o formato da curva de mudança do envelope de pitch. Para linha reta, defina '0'; para linha curva, defina até '127'.", arrowPosition: "Seção PITCH: EnvCurve" }
        ]
      },
      {
        tableTitle: "V-EDIT: SYNTH WAVE — Seções FILTER e AMP (Data List pág. 13)",
        note: "No filtro (FILTER), valores excessivamente altos de 'Reso' (ressonância) podem produzir auto-oscilação, fazendo o som distorcer.",
        rows: [
          { parameter: "FILTER: EnvSw", valueRange: "OFF, ON", explanation: "Liga ou desliga o envelope do filtro.", arrowPosition: "Seção FILTER: EnvSw" },
          { parameter: "FILTER: T1–T3", valueRange: "5–10000mSec", explanation: "Especifica os tempos do envelope do filtro (T1 a T3). Valores maiores aumentam o tempo para atingir a próxima frequência de corte (ex: T2 é o tempo para ir de L1 a L2).", arrowPosition: "Seção FILTER: T1, T2, T3" },
          { parameter: "FILTER: L0–L2, L3/FREQ", valueRange: "20–10000Hz", explanation: "Especifica a frequência de corte do envelope do filtro (L3 quando EnvSw = ON; FREQ quando EnvSw = OFF).", arrowPosition: "Seção FILTER: L0 a L3/FREQ" },
          { parameter: "FILTER: VeloSens", valueRange: "0–127", explanation: "Ajusta a sensibilidade à velocidade da batida para o filtro.", arrowPosition: "Seção FILTER: VeloSens" },
          { parameter: "FILTER: EnvCurve", valueRange: "0–127", explanation: "Ajusta a curvatura do envelope do filtro (0 = linha reta; 127 = linha curva).", arrowPosition: "Seção FILTER: EnvCurve" },
          { parameter: "FILTER: Type", valueRange: "THRU, LPF12, BPF12, HPF12, LPF24, BPF24, HPF24", explanation: "Seleciona o tipo e inclinação (12 dB ou 24 dB/oitava) do filtro: sem filtro (THRU), passa-baixas (LPF12/24), passa-faixa (BPF12/24) ou passa-altas (HPF12/24).", arrowPosition: "Seção FILTER: Type" },
          { parameter: "FILTER: Reso", valueRange: "0–127", explanation: "Enfatiza a porção do som na região da frequência de corte (ressonância), adicionando caráter ao timbre.", arrowPosition: "Seção FILTER: Reso" },
          { parameter: "AMP: T1–T3", valueRange: "5–10000mSec", explanation: "Especifica os tempos do envelope do amplificador/volume (T1 a T3). Valores maiores aumentam o tempo até atingir o próximo nível de volume.", arrowPosition: "Seção AMP: T1, T2, T3" },
          { parameter: "AMP: L0–L2", valueRange: "-INF, -60–0dB", explanation: "Especifica os níveis de volume do envelope AMP (L0 a L2).", arrowPosition: "Seção AMP: L0, L1, L2" },
          { parameter: "AMP: VeloCurve", valueRange: "LIN, LOG1, LOG2, EXP1, EXP2, ARCT, TAN", explanation: "Define a curva de variação de volume do sintetizador em resposta à força da batida no pad.", arrowPosition: "Seção AMP: VeloCurve" },
          { parameter: "AMP: EnvCurve", valueRange: "0–127", explanation: "Ajusta a curvatura do envelope AMP (0 = linha reta; 127 = linha curva).", arrowPosition: "Seção AMP: EnvCurve" },
          { parameter: "AMP: Volume", valueRange: "-INF, -60–+12dB", explanation: "Volume de saída do gerador SYNTH WAVE.", arrowPosition: "Seção AMP: Volume" }
        ]
      },
      {
        tableTitle: "V-EDIT: USER SAMPLE e Instrumentos de Outros Grupos (Data List pág. 13)",
        note: "Para User Samples, o parâmetro 'Nuance' permite aplicar variações orgânicas de batida típicas de caixa, tom ou borda de prato.",
        rows: [
          { parameter: "USER SAMPLE: Pitch", valueRange: "-100–100", explanation: "Altura tonal (afinação) do User Sample.", arrowPosition: "V-EDIT (User Sample): Linha 1, Coluna 1" },
          { parameter: "USER SAMPLE: Decay", valueRange: "1–100", explanation: "Duração do decaimento do User Sample.", arrowPosition: "V-EDIT (User Sample): Linha 1, Coluna 2" },
          { parameter: "USER SAMPLE: Nuance", valueRange: "OFF, SNR HEAD, TOM HEAD, CYM EDGE", explanation: "Define a nuance expressiva usada ao bater nos pads com este User Sample, escolhendo a resposta apropriada para o som (pele de caixa SNR HEAD, pele de tom TOM HEAD ou borda de prato CYM EDGE).", arrowPosition: "V-EDIT (User Sample): Linha 1, Coluna 3" },
          { parameter: "Outros Grupos: Pitch", valueRange: "-100–+100", explanation: "Altura tonal para instrumentos de outros grupos (KICK OTHERS, SNARE OTHERS, TOM OTHERS, ELEC, PERCUSSION, CLAP, SOUND FX, etc.).", arrowPosition: "V-EDIT (Outros grupos): Linha 1, Coluna 1" },
          { parameter: "Outros Grupos: Muffling", valueRange: "OFF, MUFF+1–MUFF+8, MUFF MAX", explanation: "Configuração de abafamento (muting). O efeito varia dependendo do instrumento selecionado.", arrowPosition: "V-EDIT (Outros grupos): Linha 1, Coluna 2" }
        ]
      }
    ],
    tipsAndNotes: [
      "Em caixas (SNARE), quando 'Strainer Adjust' é reduzido a 0, a esteira é completamente desligada (como abaixar a alavanca do automático).",
      "Em SYNTH WAVE, se você quiser um tom eletrônico com queda clássica de frequência (tipo Simmons ou 808), ligue 'EnvSw' na seção PITCH, coloque L1 em uma frequência alta (ex: 200 Hz) e L2/L3 em uma frequência grave (ex: 50 Hz) e ajuste o tempo de queda em T2."
    ]
  }
];

window.V31_MANUAL_SECTIONS.push(
  {
    id: "kit-edit-pad-vol-eq-comp",
    chapter: "Capítulo 9: KIT EDIT — PAD VOL, PAD EQ e PAD COMP",
    title: "Volume e Panorâmica por Pad (PAD VOL), Equalizador de 4 Bandas por Pad (PAD EQ) e Compressor por Pad (PAD COMP: STANDARD e FETCOMP-76)",
    simulatorScreenId: "PAD_VOL",
    summary: "Referência completa das telas PAD VOL (Volume, Pan e Minimum Volume para ghost notes com separação Head/Rim), PAD EQ (Low Cut + 4 bandas Low, Mid 1, Mid 2, High com Q e Reset EQ) e PAD COMP (compressor por pad com modelos STANDARD e o clássico de estúdio FETCOMP-76, compartilhado entre pele e aro).",
    navigationSteps: [
      "Para PAD VOL: Pressione [MENU] -> selecione 'KIT EDIT' -> pressione [►] para ir ao 2º ícone da Linha 1 (Coluna 2) 'PAD VOL' -> pressione [ENTER].",
      "Para PAD EQ: Pressione [MENU] -> selecione 'KIT EDIT' -> selecione o 3º ícone da Linha 1 (Coluna 3) 'PAD EQ' -> pressione [ENTER].",
      "Para PAD COMP: Pressione [MENU] -> selecione 'KIT EDIT' -> selecione o 4º ícone da Linha 1 (Coluna 4) 'PAD COMP' -> pressione [ENTER].",
      "Em qualquer uma dessas 3 telas, bata no pad que deseja ajustar (ou segure [ENTER] + [◄]/[►] para selecionar o pad).",
      "Em PAD VOL e PAD EQ, você pode ajustar pele (Head) e aro (Rim) separadamente, ou ativar o botão H&R ([F6] em PAD VOL; [F5] em PAD EQ) para ajustá-los juntos. Em PAD COMP, as configurações são comuns ao pad inteiro (Head e Rim juntos)."
    ],
    screenLayoutDescription: "1) Tela PAD VOL: exibe duas fileiras horizontais de faders de mixer (fileira superior: KICK, SNARE, TOM1, TOM2, TOM3, HI-HAT; fileira inferior: CRASH1, CRASH2, RIDE, AUX/TOM4 e pads virtuais se ativos). Acima de cada fader está o controle de Pan (L30 a R30) e abaixo o valor numérico de volume. No rodapé: [F1] VOLUME/PAN, [F2] MIN VOLUME e [F6] H&R. 2) Tela PAD EQ: exibe na metade superior o gráfico de resposta de frequência e à direita o medidor de nível MASTER L/R. Na metade inferior esquerda fica 'Low Cut', e ao centro uma tabela com 4 colunas (LOW, MID1, MID2, HIGH) e 3 linhas (Q, Freq, Gain). No rodapé: [F1] PadEQ (ON/OFF), [F5] H&R (ON/OFF) e [F6] RESET EQ. 3) Tela PAD COMP: à esquerda exibe 'Pad Comp Type' (STANDARD ou FETCOMP-76) e a lista vertical de parâmetros (Template, Threshold, Gain, Attack, Release, Ratio, Knee, Balance); no centro exibe o gráfico da curva de compressão; à direita exibe o knob 'Volume' e os medidores verticais (IN, GR/Redução de Ganho, OUT e MASTER L/R). No rodapé: [F1] PadComp (ON/OFF).",
    fButtonsTable: [
      { button: "[F1] (VOLUME/PAN / PadEQ / PadComp)", label: "Guia ou Chave Principal", action: "Em PAD VOL, seleciona a guia VOLUME/PAN. Em PAD EQ, liga/desliga o equalizador do pad. Em PAD COMP, liga/desliga o compressor do pad." },
      { button: "[F2] (MIN VOLUME)", label: "Guia MIN VOLUME (em PAD VOL)", action: "Na tela PAD VOL, alterna para a guia que define o volume mínimo (0–15) de batidas muito suaves (ghost notes) para cada pad." },
      { button: "[F5] (H&R em PAD EQ)", label: "Vincular Head & Rim (em PAD EQ)", action: "Na tela PAD EQ, quando ON, aplica as alterações de equalização simultaneamente à pele e ao aro do pad." },
      { button: "[F6] (H&R em PAD VOL / RESET EQ em PAD EQ)", label: "H&R ou Resetar EQ", action: "Em PAD VOL, [F6] (H&R) vincula pele e aro. Em PAD EQ, [F6] (RESET EQ) zera (flat) todos os ganhos do equalizador do pad atual." }
    ],
    parameterTables: [
      {
        tableTitle: "PAD VOL — Volume, Panorâmica e Volume Mínimo por Pad (Data List pág. 14)",
        note: "O Pan (Panorâmica) é comum ao pad, enquanto Pad Volume e Minimum Volume podem ser configurados separadamente para a pele (Head) e o aro (Rim) quando [F6] (H&R) está OFF.",
        rows: [
          { parameter: "Pad Volume (Guia VOLUME/PAN)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume de cada pad (ajustável separadamente para pele e aro).", arrowPosition: "Guia [F1] VOLUME/PAN: linha de faders" },
          { parameter: "Pan (Guia VOLUME/PAN)", valueRange: "L30–CENTER–R30", explanation: "Posição estéreo (esquerda/centro/direita) de cada pad.", arrowPosition: "Guia [F1] VOLUME/PAN: linha superior acima dos faders (seta [▲])" },
          { parameter: "Minimum Volume (Guia MIN VOLUME)", valueRange: "0–15", explanation: "Volume mínimo de cada pad. Permite aumentar o volume das batidas mais fracas preservando o volume das batidas mais fortes, facilitando ouvir ghost notes na caixa ou notas em legato no prato de condução (ride).", arrowPosition: "Guia [F2] MIN VOLUME: fader do pad" },
          { parameter: "Botão [F6] (H&R)", valueRange: "OFF, ON", explanation: "Quando ligado (ON), permite fazer ajustes simultâneos para a área da pele (Head) e do aro (Rim).", arrowPosition: "Botão [F6] na tela PAD VOL" }
        ]
      },
      {
        tableTitle: "PAD EQ — Equalizador Paramétrico de 4 Bandas + Low Cut por Pad (Data List pág. 14)",
        note: "Você pode configurar o som da pele (Head) e do aro (Rim) separadamente, ou juntos ativando [F5] (H&R). Pressione [F6] (RESET EQ) para retornar o equalizador do pad aos valores planos (flat).",
        rows: [
          { parameter: "Botão [F1] (PadEQ)", valueRange: "OFF, ON", explanation: "Liga ou desliga o equalizador do pad selecionado.", arrowPosition: "Botão [F1]" },
          { parameter: "Low Cut", valueRange: "OFF, 20–1kHz", explanation: "Corta a região de frequências abaixo da frequência especificada (filtro passa-altas / low cut).", arrowPosition: "À esquerda da tabela principal (use [◄] para acessar)" },
          { parameter: "Low Freq", valueRange: "20–1kHz", explanation: "Frequência da faixa grave (Low).", arrowPosition: "Coluna 1 (LOW), Linha 2 (Freq)" },
          { parameter: "Low Gain", valueRange: "-24–+24 dB", explanation: "Quantidade de reforço ou corte para a faixa de baixas frequências.", arrowPosition: "Coluna 1 (LOW), Linha 3 (Gain)" },
          { parameter: "Mid 1 Q", valueRange: "0.5–16.0", explanation: "Largura da faixa de frequência Mid 1. Valores maiores estreitam a faixa afetada.", arrowPosition: "Coluna 2 (MID1), Linha 1 (Q)" },
          { parameter: "Mid 1 Freq", valueRange: "20–16kHz", explanation: "Frequência central da faixa média 1 (Mid 1).", arrowPosition: "Coluna 2 (MID1), Linha 2 (Freq)" },
          { parameter: "Mid 1 Gain", valueRange: "-24–+24 dB", explanation: "Quantidade de reforço ou corte para a faixa média 1.", arrowPosition: "Coluna 2 (MID1), Linha 3 (Gain)" },
          { parameter: "Mid 2 Q", valueRange: "0.5–16.0", explanation: "Largura da faixa de frequência Mid 2. Valores maiores estreitam a faixa afetada.", arrowPosition: "Coluna 3 (MID2), Linha 1 (Q)" },
          { parameter: "Mid 2 Freq", valueRange: "20–16kHz", explanation: "Frequência central da faixa média 2 (Mid 2).", arrowPosition: "Coluna 3 (MID2), Linha 2 (Freq)" },
          { parameter: "Mid 2 Gain", valueRange: "-24–+24 dB", explanation: "Quantidade de reforço ou corte para a faixa média 2.", arrowPosition: "Coluna 3 (MID2), Linha 3 (Gain)" },
          { parameter: "High Freq", valueRange: "1k–16kHz", explanation: "Frequência da faixa aguda (High).", arrowPosition: "Coluna 4 (HIGH), Linha 2 (Freq)" },
          { parameter: "High Gain", valueRange: "-24–+24 dB", explanation: "Quantidade de reforço ou corte para a faixa de altas frequências.", arrowPosition: "Coluna 4 (HIGH), Linha 3 (Gain)" },
          { parameter: "Botão [F5] (H&R)", valueRange: "OFF, ON", explanation: "Quando ON, ajusta simultaneamente a pele e o aro.", arrowPosition: "Botão [F5]" },
          { parameter: "Botão [F6] (RESET EQ)", valueRange: "Ação imediata com confirmação", explanation: "Redefine os parâmetros do PAD EQ atual para os padrões de fábrica.", arrowPosition: "Botão [F6]" }
        ]
      },
      {
        tableTitle: "PAD COMP — Compressor por Pad: Parâmetros Gerais e Tipo STANDARD (Data List pág. 15)",
        note: "As configurações do compressor de pad são feitas para cada pad individual como um todo (a pele e o aro usam essas configurações em comum).",
        rows: [
          { parameter: "Botão [F1] (PadComp)", valueRange: "OFF, ON", explanation: "Liga ou desliga o compressor do pad selecionado.", arrowPosition: "Botão [F1]" },
          { parameter: "Volume", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume de saída do compressor do pad.", arrowPosition: "Knob à direita na tela PAD COMP" },
          { parameter: "Pad Comp Type", valueRange: "STANDARD, FETCOMP-76", explanation: "Seleciona o tipo de compressor do pad: STANDARD (compressor geral simples e fácil de usar) ou FETCOMP-76 (modela um clássico compressor FET de estúdio; atenção: pode produzir som muito alto ou distorcer se o sinal de entrada for muito forte).", arrowPosition: "Topo esquerdo, 1ª linha" },
          { parameter: "Template (Quando Type = STANDARD)", valueRange: "KICK 1, KICK 2, SNARE 1, SNARE 2, TOM 1, TOM 2, CYMBAL 1, CYMBAL 2, SOFT COMP, HARD COMP, LIMITER", explanation: "Caráter pré-ajustado do compressor STANDARD. Ao alterar este parâmetro, Ratio, Knee, Attack e Release mudam para valores ideais da seleção.", arrowPosition: "Lista esquerda: 1º parâmetro abaixo de Type" },
          { parameter: "Threshold (Quando Type = STANDARD)", valueRange: "-48–0 dB", explanation: "Ajusta o nível de volume a partir do qual a compressão começa a atuar.", arrowPosition: "Lista esquerda: 2º parâmetro" },
          { parameter: "Gain (Quando Type = STANDARD)", valueRange: "-24.0–+24.0dB", explanation: "Nível de ganho de saída do compressor.", arrowPosition: "Lista esquerda: 3º parâmetro" },
          { parameter: "Attack (Quando Type = STANDARD)", valueRange: "0.1–100ms", explanation: "Tempo desde o momento em que o volume ultrapassa o Threshold até que o efeito de compressão seja totalmente aplicado.", arrowPosition: "Lista esquerda: 4º parâmetro" },
          { parameter: "Release (Quando Type = STANDARD)", valueRange: "10–1000ms", explanation: "Tempo desde o momento em que o volume cai abaixo do Threshold até que o compressor deixe de atuar.", arrowPosition: "Lista esquerda: 5º parâmetro" },
          { parameter: "Ratio (Quando Type = STANDARD)", valueRange: "1:1–INF:1", explanation: "Taxa (razão) de compressão.", arrowPosition: "Lista esquerda: 6º parâmetro" },
          { parameter: "Knee (Quando Type = STANDARD)", valueRange: "HARD, SOFT1–3", explanation: "Suavidade da transição do ataque no momento em que a compressão começa a ser aplicada.", arrowPosition: "Lista esquerda: 7º parâmetro" },
          { parameter: "Balance (Quando Type = STANDARD)", valueRange: "D100:0W–D0:100W", explanation: "Balanço de volume entre o som não processado/seco (D = Dry) e o som comprimido (W = Wet), permitindo compressão paralela no próprio pad.", arrowPosition: "Lista esquerda: 8º parâmetro" }
        ]
      },
      {
        tableTitle: "PAD COMP — Quando Pad Comp Type = FETCOMP-76 (Data List págs. 15–16)",
        note: "No FETCOMP-76 (baseado no clássico 1176), o valor 0.0 de Attack e Release corresponde ao tempo MAIS LONGO (mais lento), e 7.0 ao tempo mais rápido!",
        rows: [
          { parameter: "Template (Quando Type = FETCOMP-76)", valueRange: "KICK PRESENCE, KICK SOFT, KICK MID, KICK HEAVY, SNARE PRESENCE, SNARE SOFT, SNARE MID, SNARE HEAVY, TOM PRESENCE, TOM SOFT, TOM MID, TOM HEAVY, FLOOR TOM SOFT, FLOOR TOM MID, FLOOR TOM HEAVY, HI-HAT PRESENCE, HI-HAT SOFT, HI-HAT MID, HI-HAT HEAVY, CYMBAL PRESENCE, CYMBAL SOFT, CYMBAL MID, CYMBAL HEAVY", explanation: "23 modelos de caráter para o compressor FETCOMP-76 por tipo de peça. Ao mudar o Template, todos os parâmetros mudam para ajustes ideais.", arrowPosition: "Lista esquerda: 1º parâmetro abaixo de Type" },
          { parameter: "Compression", valueRange: "OFF, ON", explanation: "Quando ON, o efeito de compressão é aplicado (quando OFF, o sinal apenas passa pelo circuito amplificador FET).", arrowPosition: "Lista esquerda: 2º parâmetro" },
          { parameter: "Input Level", valueRange: "-INF, -30.0–+30.0dB", explanation: "Ajusta o volume de entrada (que também determina a quantidade de compressão no circuito FET).", arrowPosition: "Lista esquerda: 3º parâmetro" },
          { parameter: "Output Level", valueRange: "-INF, -54.0–+6.0dB", explanation: "Ajusta o volume de saída final do compressor.", arrowPosition: "Lista esquerda: 4º parâmetro" },
          { parameter: "Attack", valueRange: "0.0–7.0", explanation: "Define o tempo que leva para a compressão começar após o áudio cruzar o limiar. O valor 0.0 é o tempo MAIS LONGO (lento) e 7.0 é o mais rápido.", arrowPosition: "Lista esquerda: 5º parâmetro" },
          { parameter: "Release", valueRange: "0.0–7.0", explanation: "Ajusta o tempo após o sinal cair abaixo do limiar até a compressão parar. O valor 0.0 é o tempo MAIS LONGO (lento) e 7.0 é o mais rápido.", arrowPosition: "Lista esquerda: 6º parâmetro" },
          { parameter: "Ratio Mode", valueRange: "ALL (funciona como todos os botões pressionados / 'All-Buttons-In'), 20 (20:1), 12 (12:1), 8 (8:1), 4 (4:1)", explanation: "Ajusta a taxa de compressão: 4:1, 8:1, 12:1, 20:1 ou o famoso modo agressivo 'ALL' (todos os botões pressionados simultaneamente).", arrowPosition: "Lista esquerda: 7º parâmetro" },
          { parameter: "Balance", valueRange: "D100:0W–D0:100W", explanation: "Balanço de volume entre o som seco não processado (D) e o som que passa pelo compressor (W).", arrowPosition: "Lista esquerda: 8º parâmetro" }
        ]
      }
    ],
    tipsAndNotes: [
      "O parâmetro 'Balance' (D100:0W a D0:100W) em PAD COMP permite fazer compressão paralela ('New York Compression') diretamente no bumbo ou na caixa sem gastar um canal de BUS FX: configure uma compressão pesada (ex: FETCOMP-76 com Ratio ALL) e misture com o som seco usando Balance em torno de D50:50W.",
      "Em PAD VOL, aumentar 'Minimum Volume' (aba [F2]) para 2 a 5 na caixa (SNARE HEAD) deixa as ghost notes muito mais audíveis e articuladas sem aumentar o volume dos rimshots fortes."
    ]
  },
  {
    id: "kit-edit-ambience",
    chapter: "Capítulo 10: KIT EDIT — AMBIENCE Completo (Overhead, Room, Reverb e Kit Resonance)",
    title: "Todas as Tabelas de AMBIENCE do Data List (Págs. 16–25): OVERHEAD, ROOM, REVERB (Comum + 7 Algoritmos Específicos) e KIT RESONANCE",
    simulatorScreenId: "AMBIENCE",
    summary: "Referência completa e exaustiva do motor de Ambiência do V31 (páginas 16 a 25 do Data List): tela principal AMBIENCE, microfones OVERHEAD (Send, 6 Filtros Pre/Post em série, Assign, Pre Transient, Pre Comp, Mic com 9 templates, Post EQ Normal/Mid-Side, Post Comp, Bus Send), acústica de sala ROOM (Send, Pre EQ, Pre Transient, Pre Comp, Room Realistic com 12 locais e Synthetic com 9 caracteres e Gate Reverb, Post EQ, Post Comp, Bus Send), REVERB (Send, Pre Transient, 7 algoritmos completos: TD-50 REVERB, TD-50 ROOM, WARM HALL, SRV-2000, SRV-2000(NLR), SIMPLE REVERB e LONG REVERB, Post Comp, Bus Send) e ressonância simpática KIT RESONANCE.",
    navigationSteps: [
      "Pressione [MENU] -> selecione a 1ª categoria 'KIT EDIT' -> pressione [►] e depois [▼] uma vez para selecionar o 1º ícone da Linha 2 (Coluna 1) 'AMBIENCE' -> pressione [ENTER].",
      "Na tela principal AMBIENCE, bata no pad desejado para ajustar rapidamente os 4 faders de envio daquele pad à esquerda (OVERHEAD, ROOM, REVERB, KIT RESO), ou mova o cursor para a coluna central para ligar/desligar e ajustar o volume geral de OVERHEAD, ROOM, REVERB e KIT RESONANCE, ou para a direita para ajustar o knob 'Ambience (GLOBAL)'.",
      "Para entrar nas telas de edição profunda de cada um dos 4 módulos de ambiência, pressione na tela AMBIENCE: [F1] (OVERHEAD), [F2] (ROOM), [F3] (REVERB) ou [F4] (KIT RESO).",
      "Dentro de OVERHEAD ([F1]): use [F1] (SEND), [F2] (FILTER), [F3] (ASSIGN) e [F4] (OVERHEAD), e dentro de [F4] (OVERHEAD) navegue pelas subguias PRE TRANSIENT, PRE COMP, MIC, POST EQ, POST COMP e BUS SEND.",
      "Dentro de ROOM ([F2]): use [F1] (SEND) e [F2] (ROOM), e dentro de [F2] (ROOM) navegue pelas subguias PRE EQ, PRE TRANSIENT, PRE COMP, ROOM, POST EQ, POST COMP e BUS SEND.",
      "Dentro de REVERB ([F3]): use [F1] (SEND) e [F2] (REVERB), e dentro de [F2] (REVERB) navegue pelas subguias PRE TRANSIENT, REVERB, POST COMP e BUS SEND.",
      "Dentro de KIT RESO ([F4]): use [F1] (SEND) e [F2] (KIT RESO), e dentro de [F2] (KIT RESO) navegue pelas subguias PRE EQ, PRE TRANSIENT, KIT RESO, POST EQ, POST COMP e BUS SEND."
    ],
    screenLayoutDescription: "Na tela principal AMBIENCE: à esquerda aparecem os 4 faders verticais de envio do pad atual (OVERHEAD, ROOM, REVERB, KIT RESO); no centro ficam 4 blocos empilhados de cima para baixo (OVERHEAD, ROOM, REVERB, KIT RESONANCE), cada um com seu valor de nível em dB e chave luminosa ON/OFF; à direita ficam o diagrama de roteamento para o barramento (AMB -> BUS) e o knob 'Ambience (GLOBAL)'. No rodapé da tela principal AMBIENCE ficam: [F1] OVERHEAD, [F2] ROOM, [F3] REVERB, [F4] KIT RESO, [F5] H&R (vincula pele e aro) e [F6] AmbOnly (escuta temporariamente apenas o som úmido da ambiência nas saídas Master e Phones).",
    fButtonsTable: [
      { button: "[F1] (OVERHEAD)", label: "Submenu OVERHEAD", action: "Na tela principal AMBIENCE, abre as configurações detalhadas dos microfones suspensos (SEND, FILTER, ASSIGN, OVERHEAD)." },
      { button: "[F2] (ROOM)", label: "Submenu ROOM", action: "Na tela principal AMBIENCE, abre as configurações detalhadas da reverberação de sala (SEND, ROOM)." },
      { button: "[F3] (REVERB)", label: "Submenu REVERB", action: "Na tela principal AMBIENCE, abre as configurações detalhadas do módulo de Reverb (SEND, REVERB)." },
      { button: "[F4] (KIT RESO)", label: "Submenu KIT RESONANCE", action: "Na tela principal AMBIENCE, abre as configurações detalhadas da ressonância simpática do kit (SEND, KIT RESO)." },
      { button: "[F5] (H&R)", label: "Head & Rim ON/OFF", action: "Permite ajustar os níveis de envio de ambiência da pele (Head) e do aro (Rim) simultaneamente (ON) ou separadamente (OFF)." },
      { button: "[F6] (AmbOnly / OHOnly / RoomOnly / RevOnly / ResoOnly)", label: "Ouvir Somente Ambiência", action: "Quando ligado (ON), isola temporariamente apenas o som da ambiência (ou apenas Overhead, Room, Reverb ou Kit Reso nas respectivas telas) nos fones e saídas Master para facilitar o ajuste fino." }
    ],
    parameterTables: [
      {
        tableTitle: "OVERHEAD — Guias SEND, FILTER (Pre/Post em Série) e ASSIGN (Data List págs. 16–17)",
        note: "Cuidado ao enviar sons muito altos para o OVERHEAD, pois pode causar distorção ou ruído; se ocorrer, reduza o envio dos pads ou ajuste FILTER, PRE TRANSIENT e PRE COMP. O som enviado aos overheads pode passar por até 6 filtros duplos (Pre Filter + Post Filter em série), atribuíveis por pad na guia ASSIGN.",
        rows: [
          { parameter: "Overhead Send Level (Guia SEND)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Profundidade/nível de envio de cada pad para os microfones de overhead.", arrowPosition: "OVERHEAD > [F1] SEND: faders dos pads" },
          { parameter: "Botão [F5] (OH) (Guia SEND)", valueRange: "OFF, ON", explanation: "Liga ou desliga o efeito de overhead.", arrowPosition: "Botão [F5]" },
          { parameter: "Botão [F6] (H&R) (Guia SEND)", valueRange: "OFF, ON", explanation: "Especifica se pele (Head) e aro (Rim) são ajustados em conjunto (ON) ou independentemente (OFF).", arrowPosition: "Botão [F6]" },
          { parameter: "Filter Number (Guia FILTER)", valueRange: "FILTER 1–6", explanation: "Seleciona qual dos 6 filtros de entrada de overhead está sendo configurado (permite equalizar separadamente bumbo, caixa, tons e pratos antes de entrarem nos microfones overhead).", arrowPosition: "OVERHEAD > [F2] FILTER: seleção de filtro 1–6" },
          { parameter: "Pre Filter Type (Guia FILTER - Estágio Anterior)", valueRange: "THRU, HICUT, LOCUT, PKG", explanation: "Tipo do 1º filtro em série (estágio anterior): THRU (passa direto inalterado), HICUT (corta frequências acima da base; Q ajustável), LOCUT (corta frequências abaixo da base; Q ajustável), PKG (reforça ou corta a região em torno da frequência base; Q e Gain ajustáveis).", arrowPosition: "OVERHEAD > [F2] FILTER: coluna Pre Filter" },
          { parameter: "Pre Filter Freq (Guia FILTER)", valueRange: "20–16kHz", explanation: "Frequência central/corte do Pre Filter.", arrowPosition: "OVERHEAD > [F2] FILTER: Pre Filter Freq" },
          { parameter: "Pre Filter Q (Guia FILTER)", valueRange: "0.5–16.0", explanation: "Largura da faixa de frequência do Pre Filter. Valores maiores estreitam a faixa.", arrowPosition: "OVERHEAD > [F2] FILTER: Pre Filter Q" },
          { parameter: "Pre Filter Gain *1 (Guia FILTER)", valueRange: "-40.0–+15.0dB (ativo quando Pre Filter Type = PKG)", explanation: "Quantidade de reforço ou corte do Pre Filter.", arrowPosition: "OVERHEAD > [F2] FILTER: Pre Filter Gain" },
          { parameter: "Post Filter Type (Guia FILTER - Estágio Seguinte)", valueRange: "THRU, LPF, HPF, LSF, HSF", explanation: "Tipo do 2º filtro em série (estágio seguinte): THRU (passa direto), LPF (corta frequências acima da base), HPF (corta frequências abaixo da base), LSF (reforça/atenua graves abaixo do corte), HSF (reforça/atenua agudos acima do corte).", arrowPosition: "OVERHEAD > [F2] FILTER: coluna Post Filter" },
          { parameter: "Post Filter Freq (Guia FILTER)", valueRange: "20–16kHz", explanation: "Frequência central/corte do Post Filter.", arrowPosition: "OVERHEAD > [F2] FILTER: Post Filter Freq" },
          { parameter: "Post Filter Gain *2 (Guia FILTER)", valueRange: "-40.0–+15.0dB (ativo quando Post Filter Type = LSF ou HSF)", explanation: "Quantidade de reforço ou corte do Post Filter.", arrowPosition: "OVERHEAD > [F2] FILTER: Post Filter Gain" },
          { parameter: "Botão [F5] (OH) / [F6] (OHOnly) (Guia FILTER)", valueRange: "OFF, ON", explanation: "[F5] liga/desliga o overhead; [F6] permite ouvir temporariamente apenas o som do overhead.", arrowPosition: "Botões [F5] e [F6]" },
          { parameter: "Overhead Filter Assign (Guia ASSIGN)", valueRange: "BYPASS, FILTER 1–6", explanation: "Seleciona por pad (e por pele/aro) qual filtro de entrada usar antes do overhead: BYPASS (não usa filtro; vai direto ao overhead) ou FILTER 1 a 6.", arrowPosition: "OVERHEAD > [F3] ASSIGN: lista de pads" }
        ]
      },
      {
        tableTitle: "OVERHEAD — Guia OVERHEAD: PRE TRANSIENT, PRE COMP, MIC, POST EQ, POST COMP e BUS SEND (Data List págs. 17–18)",
        note: "Ao editar 'Template' na seção MIC, todos os ajustes do overhead (exceto Overhead Level) mudam para os valores ótimos da seleção.",
        rows: [
          { parameter: "PRE TRANSIENT: Transient Switch", valueRange: "OFF, ON ([F5] Transient)", explanation: "Liga ou desliga o efeito de transiente na entrada do overhead.", arrowPosition: "OVERHEAD > [F4] OVERHEAD > PRE TRANSIENT" },
          { parameter: "PRE TRANSIENT: Attack", valueRange: "-50–0", explanation: "Ajusta (suaviza) o ataque do som de entrada do overhead.", arrowPosition: "Subguia PRE TRANSIENT" },
          { parameter: "PRE TRANSIENT: Gain", valueRange: "-INF, -60.0–+12.0dB", explanation: "Volume após o ajuste de transiente.", arrowPosition: "Subguia PRE TRANSIENT" },
          { parameter: "PRE COMP: Comp Switch", valueRange: "OFF, ON ([F6] Comp)", explanation: "Liga ou desliga o pré-limiter do overhead.", arrowPosition: "Subguia PRE COMP" },
          { parameter: "PRE COMP: Threshold / Gain / Ratio / Knee / Attack / Release", valueRange: "Threshold: -60–0 dB / Gain: -24.0–+24.0dB / Ratio: 1:1–INF:1 / Knee: HARD, SOFT1–3 / Attack: 0.1–100ms / Release: 10–1000ms", explanation: "Parâmetros completos do compressor/limiter pré-overhead.", arrowPosition: "Subguia PRE COMP" },
          { parameter: "MIC: Template", valueRange: "1:NATURAL, 2:SOLID, 3:CHIC, 4:CLEAR, 5:WARM, 6:DRY, 7:DEEP, 8:NARROW, 9:PUNCHY", explanation: "9 modelos completos de configuração de microfonação de overhead.", arrowPosition: "Subguia MIC: 1º parâmetro" },
          { parameter: "MIC: Mic Type", valueRange: "NATURAL, SOLID, CHIC, WARM, CLEAR, DRY, NARROW, PUNCHY", explanation: "Tipo de microfone de overhead.", arrowPosition: "Subguia MIC: 2º parâmetro" },
          { parameter: "MIC: Time", valueRange: "-64–0", explanation: "Tempo de reverberação acústica captada pelo overhead.", arrowPosition: "Subguia MIC: 3º parâmetro" },
          { parameter: "MIC: Distance", valueRange: "0–6", explanation: "Distância entre os microfones suspensos e o baterista.", arrowPosition: "Subguia MIC: 4º parâmetro" },
          { parameter: "MIC: Output Width", valueRange: "DEFAULT, WIDE+1–WIDE+6", explanation: "Sensação de largura espacial estéreo para o som do overhead.", arrowPosition: "Subguia MIC: 5º parâmetro" },
          { parameter: "MIC: Overhead Level", valueRange: "-INF, -60.0–+12.0dB", explanation: "Volume geral de saída do overhead.", arrowPosition: "Subguia MIC: 6º parâmetro" },
          { parameter: "POST EQ: [F5] (EQ) / [F6] (Mid/Side)", valueRange: "OFF, ON", explanation: "[F5] liga/desliga o Post EQ. [F6] alterna entre OFF (NORMAL: estéreo comum) e ON (MID/SIDE: ajusta centro MID e laterais SIDE separadamente).", arrowPosition: "Subguia POST EQ: botões [F5] e [F6]" },
          { parameter: "POST EQ: Q / Freq / Gain", valueRange: "Q: 0.5–16.0 (apenas para MID) / Freq: 20Hz–1kHz (LOW), 20Hz–16kHz (MID), 1–16kHz (HIGH) / Gain: -40–+15dB", explanation: "Ajustes de largura, frequência central e ganho para as bandas do Post EQ do overhead.", arrowPosition: "Subguia POST EQ" },
          { parameter: "POST COMP: Comp Switch / Threshold / Gain / Ratio / Knee / Attack / Release", valueRange: "Switch: OFF, ON ([F6] Comp) / Threshold: -60–0 dB / Gain: -24.0–+24.0dB / Ratio: 1:1–INF:1 / Knee: HARD, SOFT1–3 / Attack: 0.1–100ms / Release: 10–1000ms", explanation: "Compressor pós-overhead na saída do módulo de overhead.", arrowPosition: "Subguia POST COMP" },
          { parameter: "BUS SEND: OH Send Bus Select / OH Send Level", valueRange: "Bus Select: OFF, BUS A–D / Send Level: -INF, -60.0–+6.0dB", explanation: "Configura para qual barramento de efeito (BUS A a D) o som do overhead é enviado e o nível desse envio.", arrowPosition: "Subguia BUS SEND" }
        ]
      },
      {
        tableTitle: "ROOM — Guias SEND e ROOM (PRE EQ, PRE TRANSIENT, PRE COMP, ROOM Realistic/Synthetic, POST EQ, POST COMP, BUS SEND) (Data List págs. 19–20)",
        note: "Na subguia ROOM, os parâmetros marcados com *1 ficam ativos quando Type = 'REALISTIC', e os parâmetros marcados com *2 ficam ativos quando Type = 'SYNTHETIC' (que inclui Gate Reverb).",
        rows: [
          { parameter: "Room Send Level (Guia SEND)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Quantidade de ambiência de sala (Room) aplicada a cada pad ([F4] H&R vincula pele e aro; [F5] Room liga/desliga; [F6] RoomOnly isola o som da sala).", arrowPosition: "ROOM > [F1] SEND" },
          { parameter: "PRE EQ: Low Cut / Type / Q / Freq / Gain", valueRange: "Low Cut: OFF, 20–1kHz / Type: SHELV, PEAK (MID1/MID2 fixos em PEAK) / Q: 0.5–16.0 / Freq: 20Hz–1kHz (LOW), 20Hz–16kHz (MID1, MID2), 1–16kHz (HIGH) / Gain: -40–+15dB", explanation: "Equalizador de 4 bandas + Low Cut antes da entrada da sala ([F4] EQ liga/desliga).", arrowPosition: "ROOM > [F2] ROOM > PRE EQ" },
          { parameter: "PRE TRANSIENT: Transient Switch / Attack / Gain", valueRange: "Switch: OFF, ON ([F3] Transient) / Attack: -50–0 / Gain: -INF, -60.0–+12.0dB", explanation: "Ajusta o ataque e ganho do som que entra na sala.", arrowPosition: "Subguia PRE TRANSIENT" },
          { parameter: "PRE COMP: Comp Sw Switch / Threshold / Gain / Ratio / Knee / Attack / Release", valueRange: "Switch: OFF, ON ([F4] Comp) / Threshold: -60–0 dB / Gain: -24.0–+24.0dB / Ratio: 1:1–INF:1 / Knee: HARD, SOFT1–3 / Attack: 0.1–100ms / Release: 10–1000ms", explanation: "Pré-limiter antes da sala.", arrowPosition: "Subguia PRE COMP" },
          { parameter: "ROOM: Type", valueRange: "REALISTIC, SYNTHETIC", explanation: "Seleciona o motor acústico da sala: modelagem realista de locais (REALISTIC) ou reverberação sintética de estúdio com Gate (SYNTHETIC).", arrowPosition: "Subguia ROOM: 1º parâmetro" },
          { parameter: "ROOM: Output Width", valueRange: "DEFAULT–WIDE +6", explanation: "Espacialidade (abertura estéreo) do som da sala.", arrowPosition: "Subguia ROOM: 2º parâmetro" },
          { parameter: "ROOM (REALISTIC *1): Place *1", valueRange: "ISOLATION ROOM, WOOD STUDIO, MODERN STUDIO, LIVE HOUSE, SMALL STAGE, SMALL HALL, HALL STAGE, HALL AUDIENCE, CATHEDRAL, STADIUM STAGE, STADIUM AUDIENCE, CAVE", explanation: "12 tipos de ambientes/locais acústicos modelados (cabine isolada, estúdio de madeira, estúdio moderno, casa de shows, palco pequeno, auditório pequeno, palco de concerto, plateia de concerto, catedral, palco de estádio, plateia de estádio, caverna).", arrowPosition: "Subguia ROOM (quando Type = REALISTIC)" },
          { parameter: "ROOM (REALISTIC *1): Distance *1 / Time *1", valueRange: "Distance: 0–6 / Time: -64–0", explanation: "Sensação de distância da reverberação da sala (0–6) e tempo de reverberação da sala (-64–0).", arrowPosition: "Subguia ROOM (quando Type = REALISTIC)" },
          { parameter: "ROOM (SYNTHETIC *2): Input Gain *2 / Character *2 / Time *2", valueRange: "Input Gain: -48–+16dB / Character: Air, Dimensional, Fog, Roomy, Chamber, Solid, Light, Session, Metal / Time: 0.1–1.5sec", explanation: "Ganho de entrada, caráter da sala sintética (9 tipos) e tempo de reverberação em segundos (0,1 a 1,5 s).", arrowPosition: "Subguia ROOM (quando Type = SYNTHETIC)" },
          { parameter: "ROOM (SYNTHETIC *2): Attack Time *2 / HF Damp Freq *2 / HF Damp *2 / Pre Delay *2 / Spread *2", valueRange: "Attack Time: 1–10 / HF Damp Freq: 1000–8000Hz / HF Damp: 0.01–1.00 / Pre Delay: 0m–50msec / Spread: 0.00–1.50", explanation: "Ajustam o tempo de subida do reverb, frequência e taxa de amortecimento de agudos, pré-atraso (0–50 ms) e espalhamento estéreo.", arrowPosition: "Subguia ROOM (quando Type = SYNTHETIC)" },
          { parameter: "ROOM (SYNTHETIC *2): Gate Switch *2 / Gate Threshold *2 / Gate Hold Time *2 / Gate Release Time *2", valueRange: "Gate Switch: OFF, ON / Threshold: -60–+6dB / Hold Time: 0–500msec / Release Time: 10–500msec", explanation: "Configurações completas de Gate Reverb na sala sintética (liga/desliga, limiar de disparo, tempo de sustentação antes do corte e tempo de descida).", arrowPosition: "Subguia ROOM (quando Type = SYNTHETIC)" },
          { parameter: "POST EQ / POST COMP / BUS SEND (Guia ROOM)", valueRange: "Post EQ (Normal/Mid-Side, Q 0.5–16.0, Freq, Gain -40–+15dB) / Post Comp (-60–0dB, Gain, Ratio, Knee, Attack, Release) / Room Send Bus Select (OFF, BUS A–D) & Level (-INF, -60.0–+6.0dB)", explanation: "Equalizador pós-sala (com modo Mid/Side em [F5]), compressor pós-sala e envio da sala para os barramentos BUS A–D.", arrowPosition: "Subguias POST EQ, POST COMP e BUS SEND" }
        ]
      },
      {
        tableTitle: "REVERB — Parâmetros Comuns (SEND, PRE TRANSIENT, REVERB, POST COMP, BUS SEND) (Data List pág. 21)",
        note: "Na seção REVERB, você pode escolher entre 7 algoritmos clássicos e modernos da Roland; os parâmetros específicos de cada algoritmo estão detalhados nas tabelas seguintes.",
        rows: [
          { parameter: "Reverb Send Level (Guia SEND)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Quantidade de reverb aplicada a cada pad ([F4] H&R vincula pele e aro; [F5] Reverb liga/desliga; [F6] RevOnly isola o reverb).", arrowPosition: "REVERB > [F1] SEND" },
          { parameter: "PRE TRANSIENT: Transient Switch / Attack / Gain", valueRange: "Switch: OFF, ON ([F4] Transient) / Attack: -50–0 / Gain: -INF, -60.0–+12.0dB", explanation: "Controla o ataque e o ganho do sinal que entra no Reverb.", arrowPosition: "REVERB > [F2] REVERB > PRE TRANSIENT" },
          { parameter: "REVERB: Reverb Type", valueRange: "TD-50 REVERB, TD-50 ROOM, WARM HALL, SRV-2000, SRV-2000(NLR), SIMPLE REVERB, LONG REVERB", explanation: "Seleciona um dos 7 algoritmos de reverberação.", arrowPosition: "Subguia REVERB: 1º parâmetro" },
          { parameter: "REVERB: Reverb Level", valueRange: "-INF, -60.0–+12.0dB", explanation: "Volume de saída do Reverb.", arrowPosition: "Subguia REVERB: Reverb Level" },
          { parameter: "POST COMP: Comp Switch / Threshold / Gain / Ratio / Knee / Attack / Release", valueRange: "Switch: OFF, ON ([F5] Comp) / Threshold: -60–0 dB / Gain: -24.0–+24.0dB / Ratio: 1:1–INF:1 / Knee: HARD, SOFT1–3 / Attack: 0.1–100ms / Release: 10–1000ms", explanation: "Compressor pós-reverb.", arrowPosition: "Subguia POST COMP" },
          { parameter: "BUS SEND: Reverb Send Bus Select / Reverb Send Level", valueRange: "Bus Select: OFF, BUS A–D / Send Level: -INF, -60.0–+6.0dB", explanation: "Seleciona o barramento (BUS A–D) para o qual o som do reverb é enviado e a quantidade de envio.", arrowPosition: "Subguia BUS SEND" }
        ]
      },
      {
        tableTitle: "REVERB Específico 1: TD-50 REVERB, TD-50 ROOM e WARM HALL (Data List pág. 22)",
        note: "Estes parâmetros aparecem na subguia REVERB (e também em BUS FX > BUS REVERB) conforme o Reverb Type selecionado.",
        rows: [
          { parameter: "TD-50 REVERB: Reverb Type", valueRange: "ROOM1, ROOM2, HALL1, HALL2, PLATE", explanation: "Tipo de reverb do algoritmo TD-50 REVERB.", arrowPosition: "TD-50 REVERB: 1º parâmetro" },
          { parameter: "TD-50 REVERB: Pre Delay / Time / Density / Diffusion", valueRange: "Pre Delay: 0–100msec / Time: 0.1–10.0sec / Density: 0–127 / Diffusion: 0–127", explanation: "Pré-atraso até o início do reverb, duração (0,1 a 10 s), densidade e mudança de densidade ao longo do tempo.", arrowPosition: "TD-50 REVERB: parâmetros 2 a 5" },
          { parameter: "TD-50 REVERB: LF Damp / HF Damp / Spread / Tone", valueRange: "LF Damp: 0–100 / HF Damp: 0–100 / Spread: 0–127 / Tone: 0–127", explanation: "Amortecimento de graves (LF) e agudos (HF), abertura estéreo (Spread) e caráter tonal (Tone).", arrowPosition: "TD-50 REVERB: parâmetros 6 a 9" },
          { parameter: "TD-50 ROOM: Type", valueRange: "BEACH, LIVING ROOM, BATH ROOM, STUDIO, GARAGE, LOCKER ROOM, THEATER, CAVE, GYMNASIUM, DOME STADIUM, BOOTH A, BOOTH B, STUDIO A, STUDIO B, BASEMENT, JAZZ CLUB, ROCK CLUB, BALLROOM, GATE, CONCERT HALL, SPORTS ARENA, EXPO HALL, BOTTLE, CITY, SPIRAL", explanation: "25 tipos de salas e ambientes acústicos modelados do algoritmo TD-50 ROOM.", arrowPosition: "TD-50 ROOM: 1º parâmetro" },
          { parameter: "TD-50 ROOM: Room Size / Room Shape / Wall Type / Mic Position", valueRange: "Room Size: TINY, SMALL, MEDIUM, LARGE, HUGE / Room Shape: 0–100 / Wall Type: CURTAIN, CLOTH, WOOD, PLASTER, CONCRETE, GLASS / Mic Position: NEXT DOOR, LOW FLOOR, LOW, MID LOW, MID, MID HIGH, HIGH, CEILING A, CEILING B", explanation: "Tamanho da sala, formato/duração, material da parede (cortina, tecido, madeira, gesso, concreto, vidro) e mudança tonal pela posição do microfone.", arrowPosition: "TD-50 ROOM: parâmetros 2 a 5" },
          { parameter: "WARM HALL: Pre Delay / Time", valueRange: "Pre Delay: 0.0–100.0msec / Time: 0.3–30.0sec", explanation: "Tempo de pré-atraso e duração do decaimento (até 30 segundos) do reverb Warm Hall.", arrowPosition: "WARM HALL: parâmetros 1 e 2" },
          { parameter: "WARM HALL: Pre LPF / Pre HPF / PreLoop LPF", valueRange: "Pre LPF: 16–15000Hz, BYPASS / Pre HPF: BYPASS, 16–15000Hz / PreLoop LPF: 16–15000Hz, BYPASS", explanation: "Filtros de corte de agudos na entrada (Pre LPF), corte de graves na entrada (Pre HPF) e corte de agudos na reverberação estendida (PreLoop LPF).", arrowPosition: "WARM HALL: parâmetros 3 a 5" },
          { parameter: "WARM HALL: Diffusion / HF Damp Freq / HF Damp Ratio", valueRange: "Diffusion: 0–127 / HF Damp Freq: 1000–8000Hz / HF Damp Ratio: 0.1–1.0", explanation: "Mudança de densidade no tempo, frequência acima da qual os agudos são cortados e proporção de atenuação de agudos.", arrowPosition: "WARM HALL: parâmetros 6 a 8" }
        ]
      },
      {
        tableTitle: "REVERB Específico 2: SRV-2000, SRV-2000(NLR), SIMPLE REVERB e LONG REVERB (Data List págs. 23–24)",
        note: "Modelam o lendário reverb digital Roland SRV-2000 (modo padrão e modo Non-Linear Reverb NLR), além de Simple Reverb e Long Reverb.",
        rows: [
          { parameter: "SRV-2000: Selection", valueRange: "R0.3, R1.0, R7.0, R15, R22, R26, R32, R37 (Room reverb: valores maiores aumentam a sala), H15, H22, H26, H32, H37 (Hall reverb: valores maiores aumentam o auditório), P-B (Plate reverb mais brilhante/extravagante que P-A), P-A (Plate reverb)", explanation: "Seleciona o tipo e tamanho de sala, hall ou placa do reverb digital Roland SRV-2000.", arrowPosition: "SRV-2000: 1º parâmetro" },
          { parameter: "SRV-2000: Pre Delay / Time / HF Damp / Density", valueRange: "Pre Delay: 0–160msec / Time: 0.1–99.0sec / HF Damp: 0.05–1.00 / Density: 0–9", explanation: "Pré-atraso, tempo de decaimento (até 99 s), amortecimento de agudos e densidade da reverberação tardia.", arrowPosition: "SRV-2000: parâmetros 2 a 5" },
          { parameter: "SRV-2000: Attack Gain / Attack Time / ER Density / ER Level", valueRange: "Attack Gain: 0–9 / Attack Time: 0–9 / ER Density: 0–9 / ER Level: 0–99", explanation: "Ajustam o ganho, o tempo, a densidade e o nível de volume das reflexões iniciais (Early Reflections - ER).", arrowPosition: "SRV-2000: parâmetros 6 a 9" },
          { parameter: "SRV-2000: EQ Low Freq/Gain, EQ Mid Freq/Gain/Q, EQ Hi Freq/Gain/Q", valueRange: "Low Freq: 0.04k–1.00kHz / Low Gain: -24–+12dB / Mid Freq: 0.25–9.99kHz / Mid Gain: -24–+12dB / Mid Q: 0.2–9.0 / Hi Freq: 0.80–9.99kHz / Hi Gain: -24–+12dB / Hi Q: 0.2–9.0", explanation: "Equalizador paramétrico integrado de 3 bandas do SRV-2000.", arrowPosition: "SRV-2000: parâmetros 10 a 17" },
          { parameter: "SRV-2000(NLR): Pre Delay / Reverb Time / Gate Time", valueRange: "Pre Delay: 0–120msec / Reverb Time: -0.9–+99.0sec / Gate Time: 10–450msec", explanation: "Parâmetros do modo Non-Linear Reverb (NLR) do SRV-2000, incluindo o tempo de Gate (10 a 450 ms) antes do corte.", arrowPosition: "SRV-2000(NLR): parâmetros 1 a 3" },
          { parameter: "SRV-2000(NLR): EQ Low Freq/Gain, EQ Mid Freq/Gain/Q, EQ Hi Freq/Gain/Q", valueRange: "Low Freq: 0.04–1.00kHz / Low Gain: -24–+12dB / Mid Freq: 0.25–9.99kHz / Mid Gain: -24–+12dB / Mid Q: 0.2–9.0 / Hi Freq: 0.80–9.99kHz / Hi Gain: -24–+12dB / Hi Q: 0.2–9.0", explanation: "Equalizador de 3 bandas do SRV-2000(NLR).", arrowPosition: "SRV-2000(NLR): parâmetros 4 a 11" },
          { parameter: "SIMPLE REVERB: Type / Time / HF Damp / Delay Feedback", valueRange: "Type: ROOM1, ROOM2, STAGE1, STAGE2, HALL1, HALL2, DELAY, PAN-DELAY / Time: 0–127 / HF Damp: 200Hz–BYPASS / Delay Feedback: 0–127", explanation: "Reverb leve e versátil (inclui modos Delay e Pan-Delay com realimentação Delay Feedback).", arrowPosition: "SIMPLE REVERB: parâmetros 1 a 4" },
          { parameter: "LONG REVERB: Depth / Time / Pre LPF / Pre HPF / Peaking Freq/Gain/Q / HF Damp / LF Damp", valueRange: "Depth: 0–127 / Time: 0–127 / Pre LPF: 16–15000Hz, BYPASS / Pre HPF: BYPASS, 16–15000Hz / Peaking Freq: 200–8000Hz / Peaking Gain: -15–+15 dB / Peaking Q: 0.5–8.0 / HF Damp: 16–15000Hz, BYPASS / LF Damp: BYPASS, 16–15000Hz", explanation: "Reverb de longa duração com filtros de entrada, filtro peaking paramétrico e cortes de amortecimento de agudos e graves.", arrowPosition: "LONG REVERB: parâmetros 1 a 9" }
        ]
      },
      {
        tableTitle: "KIT RESONANCE — Ressonância Simpática do Kit Completo (Data List págs. 24–25)",
        note: "Recria a ressonância natural dos outros tambores do kit vibrando quando você toca um pad.",
        rows: [
          { parameter: "Kit Resonance Send Level (Guia SEND)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Quantidade de ressonância do kit aplicada a partir de cada pad ([F4] H&R vincula pele e aro; [F5] Reso liga/desliga; [F6] ResoOnly isola apenas o som da ressonância).", arrowPosition: "KIT RESO > [F1] SEND" },
          { parameter: "PRE EQ: Low Cut / Mid 1 Q/Freq/Gain / Mid 2 Q/Freq/Gain", valueRange: "Low Cut: OFF, 20–1kHz / Mid 1 & 2 Q: 0.5–16.0 / Mid 1 & 2 Freq: 20–16kHz / Mid 1 & 2 Gain: -40.0–+15.0dB ([F3] EQ liga/desliga)", explanation: "Filtro de corte de graves e 2 bandas paramétricas médias antes da ressonância do kit.", arrowPosition: "KIT RESO > [F2] KIT RESO > PRE EQ" },
          { parameter: "PRE TRANSIENT: Transient Switch / Attack / Gain", valueRange: "Switch: OFF, ON ([F4] Transient) / Attack: -50–0 / Gain: -INF, -60.0–+12.0dB", explanation: "Ajusta o ataque e volume na entrada da ressonância do kit.", arrowPosition: "Subguia PRE TRANSIENT" },
          { parameter: "KIT RESO: Drums Type", valueRange: "STANDARD SET, SMALL SET", explanation: "Tipo de conjunto de bateria para a reverberação de ressonância (kit padrão ou kit pequeno).", arrowPosition: "Subguia KIT RESO: 1º parâmetro" },
          { parameter: "KIT RESO: Time / Character / Kit Resonance Level", valueRange: "Time: -64–0 / Character: 0–6 / Kit Resonance Level: -INF, -60.0–+12.0dB", explanation: "Tempo de reverberação da ressonância (-64–0), caráter tonal (0–6) e volume geral de saída de Kit Resonance.", arrowPosition: "Subguia KIT RESO: parâmetros 2 a 4" },
          { parameter: "POST EQ / POST COMP / BUS SEND (Guia KIT RESO)", valueRange: "Post EQ (Normal/Mid-Side [F5], Q 0.5–16.0, Freq, Gain -40–+15dB) / Post Comp (-60–0dB, Gain, Ratio, Knee, Attack, Release) / Kit Reso Send Bus Select (OFF, BUS A–D) & Level (-INF, -60.0–+6.0dB)", explanation: "Equalizador pós-ressonância, compressor pós-ressonância e envio para os barramentos BUS A–D.", arrowPosition: "Subguias POST EQ, POST COMP e BUS SEND" }
        ]
      }
    ],
    tipsAndNotes: [
      "Usar o botão [F6] (AmbOnly / OHOnly / RoomOnly / RevOnly / ResoOnly) é essencial para pessoas cegas e engenheiros de áudio: ele silencia temporariamente o som direto dos tambores e deixa você ouvir exclusivamente a sala, o microfone overhead ou a ressonância simpática enquanto gira o disco.",
      "Em OVERHEAD > FILTER + ASSIGN, você pode atribuir o bumbo (KICK) ao FILTER 1 com um filtro HPF (corte de graves) para que o bumbo não embolote os microfones de overhead, mantendo os pratos brilhantes e limpos."
    ]
  }
);

window.V31_MANUAL_SECTIONS.push(
  {
    id: "kit-edit-kit-vol-eq-comp",
    chapter: "Capítulo 11: KIT EDIT — KIT VOL, KIT EQ e KIT COMP",
    title: "Volume Geral do Kit (KIT VOL), Equalizador Master Normal/Mid-Side (KIT EQ) e Compressor Master 1-Band/2-Band e FETCOMP-76 (KIT COMP)",
    simulatorScreenId: "KIT_VOL",
    summary: "Referência completa dos controles Master por Drum Kit (páginas 26 a 28 do Data List): KIT VOL (Kit Volume, Closed-Pedal, XStick, Snare Buzz, Strainer Throw, HH Open/Close Balance), KIT EQ (equalizador de 4 bandas com modos NORMAL estéreo e MID/SIDE independente para centro e laterais) e KIT COMP (compressor master com tipo STANDARD de 1 banda ou 2 bandas com crossover Split Freq, explicação completa dos medidores Input/Gain Reduction/Output, e tipo FETCOMP-76).",
    navigationSteps: [
      "Para KIT VOL: Pressione [MENU] -> selecione 'KIT EDIT' -> selecione o 2º ícone da Linha 2 (Coluna 2) 'KIT VOL' -> pressione [ENTER].",
      "Para KIT EQ: Pressione [MENU] -> selecione 'KIT EDIT' -> selecione o 3º ícone da Linha 2 (Coluna 3) 'KIT EQ' -> pressione [ENTER].",
      "Para KIT COMP: Pressione [MENU] -> selecione 'KIT EDIT' -> selecione o 4º ícone da Linha 2 (Coluna 4) 'KIT COMP' -> pressione [ENTER].",
      "Na tela KIT VOL, você pode usar [F5] (KIT -) e [F6] (KIT +) para trocar rapidamente entre Drum Kits e igualar os volumes entre kits diferentes."
    ],
    screenLayoutDescription: "1) Tela KIT VOL: mostra à esquerda o número e nome do kit atual e abaixo uma lista vertical de 6 parâmetros: Kit Volume, Closed-Pedal Volume, XStick Volume, Snare Buzz Volume, Strainer Throw Volume e HH Open/Close Balance. À direita ficam os medidores de nível MASTER L/R e PHONES L/R. No rodapé: [F5] KIT - e [F6] KIT +. 2) Tela KIT EQ: no modo NORMAL ([F2] Mid/Side = OFF), exibe o gráfico de resposta no topo e uma tabela central de 4 colunas (LOW, MID1, MID2, HIGH) com Type, Q, Freq, Gain e abaixo 'Input Gain'. No modo MID/SIDE ([F2] Mid/Side = ON), a tela se divide em duas tabelas lado a lado: 'MID' à esquerda (4 bandas para o centro do estéreo + Mid Input Gain) e 'SIDE' à direita (4 bandas para as laterais do estéreo + Side Input Gain). No rodapé: [F1] KitEQ (ON/OFF), [F2] Mid/Side (ON/OFF) e [F6] RESET EQ. 3) Tela KIT COMP: à esquerda lista Comp Type, Template, Balance, Split Freq e os parâmetros de Threshold, Gain, Attack, Release, Ratio e Knee (em 1 coluna quando Split Freq = SINGLE, ou em 2 colunas lado a lado [Lo e Hi] quando Split Freq = 10–16000 Hz). No centro exibe o gráfico; à direita exibe os medidores de Entrada (IN), Redução de Ganho (GR) e Saída (OUT / MASTER).",
    fButtonsTable: [
      { button: "[F1] (KitEQ / KitComp)", label: "Ligar/Desligar EQ ou Comp", action: "Em KIT EQ, liga/desliga o equalizador do kit inteiro. Em KIT COMP, liga/desliga o compressor do kit inteiro." },
      { button: "[F2] (Mid/Side em KIT EQ)", label: "Modo NORMAL / MID-SIDE", action: "Na tela KIT EQ, alterna entre OFF (NORMAL: equaliza esquerda e direita igualmente) e ON (MID/SIDE: equaliza o centro MID e as bordas estéreo SIDE separadamente)." },
      { button: "[F5] (KIT - em KIT VOL)", label: "Kit Anterior", action: "Na tela KIT VOL, seleciona o Drum Kit anterior sem sair da tela de ajuste de volume." },
      { button: "[F6] (KIT + em KIT VOL / RESET EQ em KIT EQ)", label: "Próximo Kit ou Reset EQ", action: "Em KIT VOL, avança para o próximo Drum Kit. Em KIT EQ, restaura o equalizador do kit para os valores padrões." }
    ],
    parameterTables: [
      {
        tableTitle: "KIT VOL — Volumes Gerais e Equilíbrio de Chimbal do Kit (Data List pág. 26)",
        note: "Use os botões [F5] (KIT -) e [F6] (KIT +) na tela KIT VOL para comparar e nivelar o volume geral entre diferentes Drum Kits.",
        rows: [
          { parameter: "Kit Volume", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume geral do Drum Kit inteiro.", arrowPosition: "1ª linha da lista à esquerda" },
          { parameter: "Closed-Pedal Volume", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume do som de pisada no pedal do chimbal (foot close).", arrowPosition: "2ª linha da lista à esquerda" },
          { parameter: "XStick Volume", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume do som de aro (cross-stick) da caixa.", arrowPosition: "3ª linha da lista à esquerda" },
          { parameter: "Snare Buzz Volume", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume da ressonância simpática da esteira da caixa (buzz).", arrowPosition: "4ª linha da lista à esquerda" },
          { parameter: "Strainer Throw Volume", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume do som mecânico ouvido quando a alavanca do automático da caixa é levantada ou abaixada.", arrowPosition: "5ª linha da lista à esquerda" },
          { parameter: "HH Open/Close Balance", valueRange: "-5–+5", explanation: "Equilíbrio de volume entre o chimbal aberto e fechado. Valores menores diminuem o volume do chimbal aberto em relação ao fechado; valores maiores aumentam o volume do chimbal aberto em relação ao fechado.", arrowPosition: "6ª linha da lista à esquerda" }
        ]
      },
      {
        tableTitle: "KIT EQ — Equalizador do Kit Inteiro (Modos NORMAL e MID/SIDE) (Data List pág. 26)",
        note: "Os valores de Q, Freq e Gain do lado MID no modo MID/SIDE são compartilhados com o modo NORMAL.",
        rows: [
          { parameter: "Botão [F1] (KitEQ)", valueRange: "OFF, ON", explanation: "Liga ou desliga o equalizador aplicado a todo o Drum Kit.", arrowPosition: "Botão [F1]" },
          { parameter: "Botão [F2] (Mid/Side)", valueRange: "OFF (NORMAL), ON (MID/SIDE)", explanation: "Alterna o modo do EQ: OFF (NORMAL) ajusta o som de entrada igualmente nos lados esquerdo e direito. ON (MID/SIDE) ajusta separadamente os sons no centro do campo estéreo (MID, como bumbo e caixa) e os sons nas laterais esquerda/direita (SIDE, como pratos, tons e ambiência).", arrowPosition: "Botão [F2]" },
          { parameter: "Type", valueRange: "SHELV (Shelving), PEAK (MID1 e MID2 são fixos em PEAK)", explanation: "Tipo de filtro para as bandas LOW e HIGH (Shelving ou Peak; MID1 e MID2 operam sempre como Peak).", arrowPosition: "Linha 1 da tabela (Colunas LOW, MID1, MID2, HIGH)" },
          { parameter: "Q", valueRange: "0.5–16.0 (apenas quando Type = PEAK)", explanation: "Largura da faixa de frequência. Valores maiores estreitam a faixa afetada.", arrowPosition: "Linha 2 da tabela" },
          { parameter: "Freq", valueRange: "20Hz–1kHz (LOW) / 20Hz–16kHz (MID1, MID2) / 1–16kHz (HIGH)", explanation: "Frequência central de cada uma das 4 bandas.", arrowPosition: "Linha 3 da tabela" },
          { parameter: "Gain", valueRange: "-12–+12dB", explanation: "Quantidade de reforço ou corte de cada banda.", arrowPosition: "Linha 4 da tabela" },
          { parameter: "Input Gain (ou Mid Input Gain / Side Input Gain)", valueRange: "-12–+12dB", explanation: "Volume do som de entrada no KIT EQ. Quando Mid/Side está OFF (NORMAL), chama-se 'Input Gain'; quando está ON (MID/SIDE), exibe 'Mid Input Gain' à esquerda e 'Side Input Gain' à direita.", arrowPosition: "Linha 5 (abaixo da tabela)" }
        ]
      },
      {
        tableTitle: "KIT COMP — Compressor Master do Kit: STANDARD (1 Banda e 2 Bandas) e FETCOMP-76 (Data List págs. 27–28)",
        note: "*1 Quando Split Freq é definido para qualquer frequência diferente de 'SINGLE' (10–16000 Hz), a banda grave (Lo) e a banda aguda (Hi) podem ser ajustadas independentemente. *2 Os parâmetros Lo (*2) só aparecem quando Split Freq é 10 Hz ou maior. Ajuste o 'Gain' do compressor para que o medidor de saída (Output meter) não ultrapasse 0 dB (evitando clipagem).",
        rows: [
          { parameter: "Botão [F1] (KitComp)", valueRange: "OFF, ON", explanation: "Liga ou desliga o compressor do kit inteiro.", arrowPosition: "Botão [F1]" },
          { parameter: "Kit Comp Type", valueRange: "STANDARD, FETCOMP-76", explanation: "Seleciona o tipo de compressor do kit: STANDARD (compressor de banda única ou dupla simples de usar) ou FETCOMP-76 (modela um clássico compressor FET de estúdio).", arrowPosition: "1ª linha no topo à esquerda" },
          { parameter: "STANDARD: Template", valueRange: "SINGLE SOFT COMP, SINGLE HARD COMP, SINGLE LIMITER, SINGLE PARALLEL, 2 BAND SOFT COMP, 2 BAND HARD COMP, 2 BAND LIMITER, 2 BAND PARALLEL", explanation: "8 modelos pré-configurados de caráter do compressor (4 de banda única SINGLE e 4 multibanda de 2 BANDAS).", arrowPosition: "STANDARD: 2ª linha" },
          { parameter: "STANDARD: Balance", valueRange: "D100:0W–D0:100W", explanation: "Balanço de volume entre o som não processado (D) e o som que passa pelo compressor (W).", arrowPosition: "STANDARD: 3ª linha" },
          { parameter: "STANDARD: Split Freq", valueRange: "SINGLE, 10–16000 Hz", explanation: "Largura de banda / frequência de divisão (crossover) do compressor. Se definido como 'SINGLE', opera como um compressor de 1 banda (usando apenas os parâmetros Hi). Se definido entre 10 e 16000 Hz, divide o som em banda grave (Lo) e banda aguda (Hi) comprimidas separadamente.", arrowPosition: "STANDARD: 4ª linha" },
          { parameter: "STANDARD: Hi Threshold *1 / Hi Gain *1 / Hi Attack *1 / Hi Release *1 / Hi Ratio *1 / Hi Knee *1", valueRange: "Threshold: -60–0 dB / Gain: -60.0–+24.0dB / Attack: 0.1–100ms / Release: 10–1000ms / Ratio: 1:1–INF:1 / Knee: HARD, SOFT1–3", explanation: "Parâmetros da banda única (quando Split Freq = SINGLE) ou da banda aguda (quando Split Freq = 10–16000 Hz).", arrowPosition: "Coluna Hi (ou coluna única em SINGLE)" },
          { parameter: "STANDARD: Lo Threshold *2 / Lo Gain *2 / Lo Attack *2 / Lo Release *2 / Lo Ratio *2 / Lo Knee *2", valueRange: "Threshold: -60–0 dB / Gain: -60.0–+24.0dB / Attack: 0.1–100ms / Release: 10–1000ms / Ratio: 1:1–INF:1 / Knee: HARD, SOFT1–3", explanation: "Parâmetros exclusivos da banda grave (ativos quando Split Freq = 10–16000 Hz).", arrowPosition: "Coluna Lo (à esquerda da coluna Hi)" },
          { parameter: "Medidores da Tela KIT COMP (Input / Gain Reduction / Output)", valueRange: "Medidores visuais em dB", explanation: "Exibe 3 medidores à direita: 1) Input meter (nível em dB entrando no master comp; mostrado individualmente para Lo e Hi quando em 2 bandas); 2) Gain reduction meter (mudança/redução de nível em dB produzida pelo master comp; individual para Lo e Hi em 2 bandas); 3) Output meter (nível de saída em dB após o master comp; ajuste o Gain para não exceder 0 dB).", arrowPosition: "Área direita da tela KIT COMP" },
          { parameter: "FETCOMP-76: Template", valueRange: "PRESENCE, SOFT, MID, HEAVY", explanation: "4 modelos de caráter para o compressor master FETCOMP-76.", arrowPosition: "FETCOMP-76: 2ª linha" },
          { parameter: "FETCOMP-76: Compression / Input Level / Output Level / Attack / Release / Ratio Mode / Balance", valueRange: "Compression: OFF, ON / Input Level: -INF, -30.0–+30.0dB / Output Level: -INF, -54.0–+6.0dB / Attack: 0.0–7.0 (0.0 = mais lento) / Release: 0.0–7.0 (0.0 = mais lento) / Ratio Mode: ALL, 20 (20:1), 12 (12:1), 8 (8:1), 4 (4:1) / Balance: D100:0W–D0:100W", explanation: "Parâmetros completos do compressor FETCOMP-76 para o kit inteiro.", arrowPosition: "FETCOMP-76: linhas 3 a 9" }
        ]
      }
    ],
    tipsAndNotes: [
      "No KIT COMP com tipo STANDARD em modo de 2 bandas (ex: Split Freq = 250 Hz), você pode comprimir fortemente os graves do bumbo (Lo Band) sem que cada batida de bumbo 'abaixe' ou bombeie o volume dos pratos na banda aguda (Hi Band).",
      "No KIT EQ em modo MID/SIDE ([F2] ligado), dar um leve reforço de +2 dB em High Gain na coluna SIDE abre a imagem estéreo dos pratos e da sala sem deixar a caixa ou o bumbo (que ficam no centro MID) estridentes."
    ]
  },
  {
    id: "kit-edit-bus-fx",
    chapter: "Capítulo 12: KIT EDIT — BUS FX Completo (Routing, Pad Assign/Send, FX Edit, Side Chain, Bus Reverb e Lista dos 94 Multi-Efeitos)",
    title: "Todas as Tabelas de BUS FX do Data List (Págs. 28–30 e 67–107): ROUTING, PAD ASSIGN, PAD SEND, FX EDIT (BUS A–D), SIDE CHAIN, BUS REVERB e Catálogo Completo de Multi-FX",
    simulatorScreenId: "BUS_FX_ROUTING",
    summary: "Referência completa do sistema de 4 barramentos de efeitos (BUS A, BUS B, BUS C, BUS D — cada um com 2 processadores FX1 e FX2 em série), roteamento em série/paralelo entre barramentos, envio por pad ou por zona (Head/Rim), Side Chain completo (Pre-Gate, Pad Assign e Pad Send), Bus Reverb dedicado e catálogo completo de todas as categorias de Multi-Efeitos do Data List (páginas 67 a 107).",
    navigationSteps: [
      "Pressione [MENU] -> selecione 'KIT EDIT' -> pressione [►] e desça até a Linha 3, Coluna 1 ('BUS FX') -> pressione [ENTER].",
      "Use os botões de função no rodapé da tela principal de BUS FX para navegar entre as 6 seções principais: [F1] (ROUTING), [F2] (PAD ASSIGN), [F3] (PAD SEND), [F4] (FX EDIT), [F5] (SIDE CHAIN) e [F6] (BUS REV).",
      "Dentro de [F4] (FX EDIT): escolha qual barramento editar (BUS-A, BUS-B, BUS-C ou BUS-D) e qual slot (FX1 ou FX2), use [F5] (Fx1) e [F6] (Fx2) para ligar/desligar os efeitos, e gire o Disco no campo 'Type' para escolher entre os 94 algoritmos de multi-efeitos.",
      "Dentro de [F5] (SIDE CHAIN): use as subguias PRE-GATE, PAD ASSIGN e PAD SEND para configurar o controle dinâmico por Side Chain.",
      "Dentro de [F6] (BUS REV): use as subguias PRE TRANSIENT, REVERB e POST COMP para configurar a reverberação exclusiva dos barramentos."
    ],
    screenLayoutDescription: "Na guia [F1] (ROUTING), a metade esquerda mostra as configurações do pad selecionado (Pad Send Head/Rim, Output Routing, nível de envio para BUS-A a BUS-D e Pad Side Chain Control), e a metade direita mostra o diagrama de fluxo dos 4 barramentos (BUS-A, BUS-B, BUS-C, BUS-D) indicando os efeitos FX1 e FX2 carregados em cada um. Nas guias [F2] (PAD ASSIGN) e [F3] (PAD SEND), você visualiza todos os pads em lista/faders para atribuir rapidamente o destino de saída e o volume de envio de cada pad. Na guia [F4] (FX EDIT), o topo mostra o tipo de efeito (Type) e o diagrama de blocos interno do efeito (ex: Overdrive -> Amp Simulator -> 2-Band EQ), e a parte inferior exibe os parâmetros específicos daquele efeito.",
    fButtonsTable: [
      { button: "[F1] (ROUTING)", label: "Guia ROUTING", action: "Configura o roteamento completo do pad selecionado, o encadeamento entre BUS A, B, C e D, o envio para Bus Reverb e o destino de Side Chain." },
      { button: "[F2] (PAD ASSIGN)", label: "Guia PAD ASSIGN", action: "Configura em visão geral para qual BUS (DRUM, DRUM+SEND BUS A–D ou INSERT TO BUS A–D) cada pad ou zona (Head/Rim) é enviado." },
      { button: "[F3] (PAD SEND)", label: "Guia PAD SEND", action: "Ajusta os faders de nível de envio (Pad Send Level) de todos os pads para os barramentos." },
      { button: "[F4] (FX EDIT)", label: "Tela FX EDIT", action: "Abre a edição dos 2 efeitos (FX1 e FX2) de cada um dos 4 barramentos (BUS-A, BUS-B, BUS-C, BUS-D). Dentro dela, [F5] (Fx1) e [F6] (Fx2) ligam/desligam cada efeito." },
      { button: "[F5] (SIDE CHAIN)", label: "Tela SIDE CHAIN", action: "Abre as configurações de controle Side Chain (guias PRE-GATE, PAD ASSIGN e PAD SEND)." },
      { button: "[F6] (BUS REV)", label: "Tela BUS REVERB", action: "Abre as configurações do Reverb dedicado aos barramentos BUS A–D (PRE TRANSIENT, REVERB, POST COMP)." }
    ],
    parameterTables: [
      {
        tableTitle: "BUS FX — Guias ROUTING ([F1]), PAD ASSIGN ([F2]) e PAD SEND ([F3]) (Data List págs. 28–29)",
        note: "*1 'Pad Send Level' fica ativo quando 'Output Routing' está configurado como 'DRUM+SEND BUS A–D'. Quando 'Output Routing' está em 'INSERT TO BUS A–D', o som seco do tambor não vai para o Master direto, saindo 100% pelo barramento de efeito.",
        rows: [
          { parameter: "Pad Send Head/Rim (Guias ROUTING, PAD ASSIGN, PAD SEND)", valueRange: "PAD, HEAD/RIM", explanation: "Define se o efeito BUS FX é aplicado a cada pad como um todo ('PAD') ou individualmente à pele, ao aro e outras partes de cada pad ('HEAD/RIM') para o pad selecionado.", arrowPosition: "1ª linha em ROUTING / topo de PAD ASSIGN e PAD SEND" },
          { parameter: "Output Routing (Guias ROUTING e PAD ASSIGN)", valueRange: "DRUM, DRUM+SEND BUS A, INSERT TO BUS A, DRUM+SEND BUS B, INSERT TO BUS B, DRUM+SEND BUS C, INSERT TO BUS C, DRUM+SEND BUS D, INSERT TO BUS D", explanation: "Define qual BUS FX aplicar ao pad selecionado. Em 'DRUM', nenhum Bus FX é usado. Em 'DRUM+SEND BUS A–D', o som do efeito BUS FX é somado em paralelo ao som seco da bateria. Em 'INSERT TO BUS A–D', o som direto da bateria não é emitido, saindo apenas o som processado pelo BUS FX.", arrowPosition: "2ª linha em ROUTING / lista em PAD ASSIGN" },
          { parameter: "Pad Send Level *1 (Guias ROUTING e PAD SEND)", valueRange: "-INF, -60.0–+6.0dB (ativo quando Output Routing = DRUM+SEND BUS A–D)", explanation: "Especifica a quantidade de sinal enviada de cada pad (ou Head/Rim) para o barramento BUS A–D.", arrowPosition: "Linhas BUS-A a BUS-D em ROUTING / faders em PAD SEND" },
          { parameter: "BUS-A Output (Guia ROUTING)", valueRange: "BUS A, A+SEND B, INSERT B, A+SEND C, INSERT C, A+SEND D, INSERT D", explanation: "Especifica o destino de saída do BUS-A. Permite enviar o som do BUS-A para outros barramentos: com 'A+SEND B', o efeito do BUS-A entra no BUS-B enquanto o próprio BUS-A continua sendo ouvido; com 'INSERT B', todo o som do BUS-A vai exclusivamente para a entrada do BUS-B.", arrowPosition: "Diagrama direito em ROUTING: saída do BUS-A" },
          { parameter: "BUS-B Output (Guia ROUTING)", valueRange: "BUS B, B+SEND C, INSERT C, B+SEND D, INSERT D", explanation: "Define o destino de saída do BUS-B (direto, paralelo ou em série para BUS-C ou BUS-D).", arrowPosition: "Diagrama direito em ROUTING: saída do BUS-B" },
          { parameter: "BUS-C Output (Guia ROUTING)", valueRange: "BUS C, C+SEND D, INSERT D", explanation: "Define o destino de saída do BUS-C (direto, paralelo ou em série para BUS-D).", arrowPosition: "Diagrama direito em ROUTING: saída do BUS-C" },
          { parameter: "BUS-A–C Send Level (Guia ROUTING)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Define quanto sinal é enviado ao barramento de destino quando BUS-A–C Output está em modo 'BUS+SEND'.", arrowPosition: "Diagrama direito em ROUTING" },
          { parameter: "BUS-A–D Reverb Send (Guia ROUTING)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Define quanto sinal de cada barramento (BUS A, B, C e D) é enviado para o BUS REVERB.", arrowPosition: "Diagrama direito em ROUTING: envio para Reverb" },
          { parameter: "Pad Side Chain Control (Guia ROUTING)", valueRange: "OFF, BUS-A FX1, BUS-A FX2, BUS-B FX1, BUS-B FX2, BUS-C FX1, BUS-C FX2, BUS-D FX1, BUS-D FX2", explanation: "Usado para controlar o Side Chain de um efeito a partir do pad atual. O efeito escolhido como destino deve suportar entrada de Side Chain (*1 na lista de efeitos).", arrowPosition: "Última linha à esquerda em ROUTING" }
        ]
      },
      {
        tableTitle: "BUS FX — FX EDIT ([F4]), SIDE CHAIN ([F5]) e BUS REVERB ([F6]) (Data List págs. 29–30)",
        note: "Os efeitos que aceitam entrada de Side Chain são: AUTO WAH, HUMANIZER, RING MODULATOR, SLICER, COMPRESSOR, TRANSIENT, GATE e REVERSE DELAY.",
        rows: [
          { parameter: "FX EDIT: Type (Abas BUS-A a BUS-D)", valueRange: "94 tipos de Multi-Efeitos (veja tabela abaixo)", explanation: "Seleciona o algoritmo de multi-efeito para o slot FX1 ou FX2 dos barramentos BUS-A, BUS-B, BUS-C ou BUS-D.", arrowPosition: "FX EDIT: campo Type" },
          { parameter: "FX EDIT: Botões [F5] (Fx1) e [F6] (Fx2)", valueRange: "OFF, ON", explanation: "Ligam ou desligam individualmente os processadores FX1 e FX2 do barramento selecionado.", arrowPosition: "FX EDIT: botões [F5] e [F6]" },
          { parameter: "SIDE CHAIN (Guia PRE-GATE): FX1, 2 Sidechain Pre-Gate Sw", valueRange: "OFF, ON", explanation: "Liga ou desliga o Gate do sinal de controle de Side Chain para FX1 ou FX2.", arrowPosition: "SIDE CHAIN > [F1] PRE-GATE: 1º parâmetro" },
          { parameter: "SIDE CHAIN (Guia PRE-GATE): Threshold", valueRange: "-60–0 dB", explanation: "Nível de volume no qual o gate começa a fechar.", arrowPosition: "SIDE CHAIN > [F1] PRE-GATE: 2º parâmetro" },
          { parameter: "SIDE CHAIN (Guia PRE-GATE): Mode", valueRange: "GATE, DUCK", explanation: "Tipo de gate no sinal de controle: GATE (fecha quando o volume de controle é baixo, cortando o sinal de controle) ou DUCK (fecha quando o volume de controle é alto, cortando o sinal de controle).", arrowPosition: "SIDE CHAIN > [F1] PRE-GATE: 3º parâmetro" },
          { parameter: "SIDE CHAIN (Guia PRE-GATE): Attack / Hold / Release", valueRange: "Attack: 0–100ms / Hold: 10–1000ms / Release: 10–1000ms", explanation: "Ajustam o tempo para o gate abrir totalmente após ser acionado (Attack), o tempo de espera antes de começar a fechar (Hold) e o tempo para fechar totalmente (Release).", arrowPosition: "SIDE CHAIN > [F1] PRE-GATE: parâmetros 4 a 6" },
          { parameter: "SIDE CHAIN (Guia PRE-GATE): Balance / Level / Gain", valueRange: "Balance: D100:0W–D0:100W / Level: 0–127 / Gain: -24.0–+24.0dB", explanation: "Balanço entre o sinal de controle (D) e o som do efeito (W), nível de saída (0–127) e ganho do PRE-GATE (-24 a +24 dB).", arrowPosition: "SIDE CHAIN > [F1] PRE-GATE: parâmetros 7 a 9" },
          { parameter: "SIDE CHAIN (Guia PAD ASSIGN): Pad Side Chain Control", valueRange: "OFF, BUS-A FX1, BUS-A FX2, BUS-B FX1, BUS-B FX2, BUS-C FX1, BUS-C FX2, BUS-D FX1, BUS-D FX2", explanation: "Define qual slot de efeito será controlado por Side Chain a partir de cada pad.", arrowPosition: "SIDE CHAIN > [F2] PAD ASSIGN" },
          { parameter: "SIDE CHAIN (Guia PAD SEND): Side Chain Control Send Level", valueRange: "-INF, -60.0–+12.0dB", explanation: "Quantidade de sinal de controle de Side Chain enviada por cada pad.", arrowPosition: "SIDE CHAIN > [F3] PAD SEND" },
          { parameter: "BUS REVERB: PRE TRANSIENT (Transient Switch, Attack, Gain)", valueRange: "Switch: OFF, ON ([F4] Transient) / Attack: -50–0 / Gain: -INF, -60.0–+12.0dB", explanation: "Controla o ataque e o ganho na entrada do Reverb de barramento.", arrowPosition: "BUS REVERB > PRE TRANSIENT" },
          { parameter: "BUS REVERB: REVERB (Reverb Type, Reverb Level)", valueRange: "Type: TD-50 REVERB, TD-50 ROOM, WARM HALL, SRV-2000, SRV-2000(NLR), SIMPLE REVERB, LONG REVERB / Level: -INF, -60.0–+12.0dB ([F5] Reverb ON/OFF)", explanation: "Seleciona um dos 7 algoritmos de reverberação (com os mesmos parâmetros detalhados na seção AMBIENCE > REVERB) e ajusta o volume do Bus Reverb.", arrowPosition: "BUS REVERB > REVERB" },
          { parameter: "BUS REVERB: POST COMP (Comp Switch, Threshold, Gain, Ratio, Knee, Attack, Release)", valueRange: "Switch: OFF, ON ([F6] Comp) / Threshold: -60–0 dB / Gain: -24.0–+24.0dB / Ratio: 1:1–INF:1 / Knee: HARD, SOFT1–3 / Attack: 0.1–100ms / Release: 10–1000ms", explanation: "Compressor pós-reverb dedicado ao Bus Reverb.", arrowPosition: "BUS REVERB > POST COMP" }
        ]
      },
      {
        tableTitle: "Catálogo Completo dos 94 Algoritmos de Multi-Efeitos em FX EDIT (Data List págs. 67–107)",
        note: "Os efeitos marcados com (*1) suportam controle externo via Side Chain. Para efeitos sincronizados ao andamento (Rate Sync / Delay Sync = ON), as figuras rítmicas disponíveis (pág. 107) são: 1/64T, 1/64, 1/32T, 1/32, 1/16T, 1/32., 1/16, 1/8T, 1/16., 1/8, 1/4T, 1/8., 1/4, 1/2T, 1/4., 1/2, 1/1T, 1/2., 1/1, 2/1T, 1/1. e 2/1.",
        rows: [
          { parameter: "1. Thru (1 efeito)", valueRange: "THRU", explanation: "Passa o sinal direto sem aplicar efeito.", arrowPosition: "Categoria Thru (pág. 68)" },
          { parameter: "2. Filter (12 efeitos)", valueRange: "EQUALIZER (EQ estéreo de 4 bandas: Low, Mid1, Mid2, High com Q e Level), MID SIDE EQ (EQ de 5 bandas independente para Mid e Side), SPECTRUM (filtro de 8 bandas Band1–8 com Q), ISOLATOR (corte profundo Low/Mid/High até -60dB com Anti-Phase e Low Boost), LOW BOOST (reforço de subgraves 50–125Hz + EQ 2 bandas), SUPER FILTER (filtro LPF/BPF/HPF/NOTCH com inclinação -12/-24/-36dB, Cutoff, Resonance e LFO cíclico), MULTI MODE FILTER (filtro estilo DJ LPF/HPF/BPF com Tone e Color), STEP FILTER (filtro modulado em 16 passos rítmicos Step 1–16), ENHANCER (realce de harmônicos agudos Sens/Mix + EQ 2 bandas), EXCITER (compressor multibanda dinâmico Band2/Band3 Thrs/Gain e Split1/2 Freq), AUTO WAH *1 (wah cíclico ou por sensibilidade LPF/BPF com Side Chain), HUMANIZER *1 (formantes de vogais a/e/i/o/u com Overdrive e Side Chain)", explanation: "Filtros, equalizadores especiais, excitadores harmônicos, isoladores e moduladores de formantes.", arrowPosition: "Categoria Filter (págs. 68–72)" },
          { parameter: "3. Phaser (7 efeitos)", valueRange: "PHASER (4/8/12 estágios estéreo com Polarity Inverse/Synchro), SMALL PHASER (phaser analógico clássico com Color 1/2), SCRIPT 90 (phaser vintage com Speed/Depth), SCRIPT 100 (phaser vintage com Duty, Min/Max e Manual Sw), STEP PHASER (phaser modulado em degraus S.Rate), MLT STAGE PHASER (phaser profundo de 4/8/12/16/20/24 estágios), INFINITE PHASER (phaser com subida/descida contínua infinita Mode 1–4 e Speed -100–+100)", explanation: "Moduladores de fase clássicos e modernos.", arrowPosition: "Categoria Phaser (págs. 73–74)" },
          { parameter: "4. Flanger (3 efeitos)", valueRange: "FLANGER (flanger estéreo com filtro LPF/HPF, Pre Delay, Feedback e Balance), SBF-325 (recriação do flanger analógico Roland SBF-325 com modos FL1, FL2, FL3 e CHO e inversão de fase L/R), STEP FLANGER (flanger com mudança em passos rítmicos)", explanation: "Efeitos de flanger metálicos e analógicos.", arrowPosition: "Categoria Flanger (págs. 75–76)" },
          { parameter: "5. Chorus (7 efeitos)", valueRange: "CHORUS (chorus estéreo com filtro LPF/HPF e Pre Delay), HEXA-CHORUS (chorus rico de 6 fases com desvios PreDly Dev, Depth Dev e Pan Dev), TREM CHORUS (chorus combinado com tremolo), SPACE-D (chorus estéreo transparente de 2 fases da Roland), CE-1 (modelagem do clássico pedal BOSS CE-1 com calor analógico), SDD-320 / DIMENSION D (modelagem do lendário Roland Dimension D com modos 1, 2, 3, 4, 1+4, 2+4, 3+4), JUNO CHORUS / JUNO-106 Chorus (modelagem do chorus do sintetizador JUNO-106 com modos I, II, I+II, JX I, JX II e Noise Lv)", explanation: "Chorus estéreo, multidimensionais e recriações históricas da Roland/BOSS.", arrowPosition: "Categoria Chorus (págs. 76–78)" },
          { parameter: "6. Modulation (6 efeitos)", valueRange: "RING MODULATOR *1 (modulação em anel AM para timbres metálicos/sinos com Sens e Side Chain), TREMOLO (modulação cíclica de volume com ondas TRI/SQR/SIN/SAW1/SAW2/TRP), AUTO PAN (panorâmica automática cíclica L/R), SLICER *1 (fatiador rítmico de 16 passos Step 1–16 com modos LEGATO/SLASH, Shuffle e Side Chain), ROTARY (simulador de caixa acústica giratória com rotores de graves Wf e agudos Tw independentes), VK ROTARY (caixa giratória do órgão Roland VK-7 com Brake, Spread e Overdrive integrado)", explanation: "Moduladores de amplitude, espaço, fatiamento rítmico e alto-falantes giratórios.", arrowPosition: "Categoria Modulation (págs. 78–80)" },
          { parameter: "7. Drive/Amp (12 efeitos)", valueRange: "OVERDRIVE (distorção com Amp Simulator SMALL/BUILT-IN/2-STACK/3-STACK), DISTORTION (distorção intensa com Amp Simulator), T-SCREAM (modelagem de overdrive analógico clássico com médios presentes), FUZZ (fuzz rico em harmônicos com Pre/Post Filter), TONE FATTENER (gerador de harmônicos ímpares Odd Level 0–400% e pares Even Level 0–400%), HMS DISTORTION (distorção valvulada de caixa rotativa), SATURATOR (saturador de até +48dB com Pre Filter e 3 Post Filters em série), DRUM SATURATOR (saturador em paralelo com compressor específico para bateria), WARM SATURATOR (saturador quente com filtros Low/High de entrada e 3 Post Filters), GUITAR AMP SIMULATOR (14 amplificadores: JC-120, CLEAN TWIN, MATCH DRIVE, BG LEAD, MS1959I, MS1959II, MS1959I+II, SLDN LEAD, METAL 5150, METAL LEAD, OD-1, OD-2 TURBO, DISTORTION, FUZZ + 16 gabinetes STyp com escolha de microfone), EP AMP SIMULATOR (amplificador SuperNATURAL de piano elétrico RD com modos OLDCASE, NEWCASE, DYNO, WURLY, Tremolo e Drive), SPEAKER SIMULATOR (16 gabinetes de alto-falantes com posição de microfone 1–3)", explanation: "Saturadores de bateria, overdrives, distorções, geradores de harmônicos e simuladores de amplificadores e gabinetes.", arrowPosition: "Categoria Drive/Amp (págs. 81–85)" },
          { parameter: "8. Comp/Limiter (7 efeitos)", valueRange: "COMPRESSOR *1 (compressor com Side Chain), FETCOMP-78 (modelagem estéreo do FET compressor 78 com Stereo Link e Ratio 4/8/12/20/ALL; ganho interno de ~40dB), MID SIDE COMPRESSOR (compressor independente para o centro Mid e laterais Side), LIMITER (limitador de picos com EQ de 2 bandas), SUSTAINER (compressor/sustainer sem distorção), TRANSIENT *1 (modelador de ataque -50–+50 e release -50–+50 com Sens LOW/MID/HIGH e Side Chain), GATE *1 (noise gate / ducker com modos GATE e DUCK, Attack, Hold, Release, Balance e Side Chain)", explanation: "Processadores dinâmicos de controle de volume, ataque, sustentação e corte.", arrowPosition: "Categoria Comp/Limiter (págs. 85–87)" },
          { parameter: "9. Delay (10 efeitos)", valueRange: "DELAY (delay estéreo até 1300ms com Feedback Mode NORMAL/CROSS e Phase L/R), MOD DELAY (delay estéreo com modulação), 2TAP PAN DELAY (delay duplo até 2600ms com Pan individual), 3TAP PAN DELAY (delay triplo Left, Right e Center até 2600ms), 4TAP PAN DELAY (4 delays até 2600ms), MULTI TAP DELAY (4 delays com tempo, nível e pan independentes), REVERSE DELAY *1 (delay reverso com Threshold, Side Chain + tap delay em série), TIME CTRL DELAY (delay estéreo com mudança suave de tempo e pitch via Acceleration 0–15), TAPE ECHO (simulador do lendário eco de fita Roland RE-201 Space Echo com cabeças S/M/L, Repeat Rate, Intensity, Distortion e Wow/Flutter), MID SIDE DELAY (multi-tap delay independente para Mid e Side)", explanation: "Atrasos digitais, multi-tap, reversos, modulados e eco de fita vintage.", arrowPosition: "Categoria Delay (págs. 88–93)" },
          { parameter: "10. Looper (1 efeito)", valueRange: "BPM LOOPER (repetidor rítmico curto de 12 a 230 ms sincronizado ao andamento com Timing 1–8, Length 1–8 e Loop Mode OFF/AUTO/ON)", explanation: "Cria repetições tipo 'stutter/glitch' sincronizadas ao tempo.", arrowPosition: "Categoria Looper (pág. 93)" },
          { parameter: "11. Lo-fi (3 efeitos)", valueRange: "LOFI COMP (degrada a qualidade sonora com Pre Filter 1–6, LoFi Type 1–9 e Post Filter), BIT CRUSHER (redução extrema de taxa de amostragem Sample Rate 0–127 e resolução Bit Down 0–18), PHONOGRAPH (simula disco de vinil LP/EP/SP com ruídos de risco Scratch NZ, poeira Dust NZ, chiado Hiss NZ e oscilação Wow/Flutter/Random)", explanation: "Degradação digital, redução de bits e simulação de vinil.", arrowPosition: "Categoria Lo-fi (págs. 93–94)" },
          { parameter: "12. Pitch (2 efeitos)", valueRange: "PITCH SHIFTER (transpositor de altura tonal de -24 a +12 semitons e Fine -100 a +100 cents com Delay até 1300ms), 2V PITCH SHIFTER (transpositor de 2 vozes independentes P1 e P2 com Pan e Delay separados)", explanation: "Alteradores de afinação e harmonizadores de 1 e 2 vozes.", arrowPosition: "Categoria Pitch (págs. 94–95)" },
          { parameter: "13. Combination (23 efeitos combinados)", valueRange: "OD->CHORUS, OD->FLANGER, OD->DELAY, DS->CHORUS, DS->FLANGER, DS->DELAY, OD/DS->TWAH, OD/DS->AWAH, GT AMP->CHORUS, GT AMP->FLANGER, GT AMP->PHASER, GT AMP->DELAY, EP AMP->TREMOLO, EP AMP->CHORUS, EP AMP->FLANGER, EP AMP->PHASER, EP AMP->DELAY, EH->CHORUS, EH->FLANGER, EH->DELAY, CHO->DELAY, FLG->DELAY, CHO->FLANGER, JD-MULTI (recria a cadeia quádrupla do sintetizador Roland JD-800 com Distortion DS, Phaser PH, Spectrum SP de 6 bandas e Enhancer EN em qualquer uma das 24 ordens de conexão possíveis!)", explanation: "Efeitos duplos em série e o multi-efeito quádruplo JD-MULTI.", arrowPosition: "Categoria Combination (págs. 95–107)" }
        ]
      }
    ],
    tipsAndNotes: [
      "Exemplo clássico de Side Chain na bateria: coloque um efeito de GATE (modo DUCK) ou COMPRESSOR em um BUS FX onde estão os pratos ou um loop de User Sample, e configure o bumbo (KICK) em SIDE CHAIN > PAD ASSIGN para acionar esse BUS FX. Assim, toda vez que o bumbo bater, o som do loop ou ambiência 'abaixa' (ducking), abrindo espaço na mixagem.",
      "Você pode encadear até 8 efeitos em série enviando a saída do BUS-A para INSERT B, do BUS-B para INSERT C e do BUS-C para INSERT D na guia ROUTING."
    ]
  },
  {
    id: "kit-options",
    chapter: "Capítulo 13: KIT OPTIONS Completo (Todas as 12 Opções por Drum Kit)",
    title: "Todas as 12 Opções de KIT OPTIONS (Págs. 31–39): XSTICK, BRUSH, BUZZ, STRAINER, KIT NAME, KIT COLOR, KIT VIEW, KIT TEMPO, KIT PHRASE, MUTE GROUP, KIT MIDI e POS/PEDAL",
    simulatorScreenId: "KIT_OPTIONS",
    summary: "Referência integral das 12 ferramentas do menu KIT OPTIONS (páginas 31 a 39 do Data List): XSTICK (som e transiente de aro na caixa, Analog XStick e V-EDIT), BRUSH (vassourinhas), BUZZ (ressonância da esteira por pad), STRAINER (alavanca LEVER, botão/knob SW/KNOB e controle de efeitos FX CTRL), KIT NAME (nome de 16 caracteres e subnome de 64 caracteres), KIT COLOR (11 cores de LED + RGB Custom), KIT VIEW (imagem de fundo BMP/PNG e tamanho da fonte), KIT TEMPO, KIT PHRASE (todas as 52 frases), MUTE GROUP (grupos 1–8), KIT MIDI (Note No., Gate Time, Channel, tabelas completas de notas MIDI do chimbal e da caixa) e POS/PEDAL (Position Control, Position Area e Pedal Bend).",
    navigationSteps: [
      "Pressione [MENU] -> pressione a seta para baixo [▼] uma vez na coluna esquerda para selecionar a 2ª categoria 'KIT OPTIONS'.",
      "Pressione a seta para a direita [►] para entrar na grade de 12 ícones (4 colunas x 3 linhas) de KIT OPTIONS:",
      "Linha 1 da grade: Coluna 1 = XSTICK, Coluna 2 = BRUSH, Coluna 3 = BUZZ, Coluna 4 = STRAINER.",
      "Linha 2 da grade: Coluna 1 = KIT NAME, Coluna 2 = KIT COLOR, Coluna 3 = KIT VIEW, Coluna 4 = KIT TEMPO.",
      "Linha 3 da grade: Coluna 1 = KIT PHRASE, Coluna 2 = MUTE GROUP, Coluna 3 = KIT MIDI, Coluna 4 = POS/PEDAL.",
      "Selecione o ícone desejado com as setas ou Disco e pressione [ENTER]."
    ],
    screenLayoutDescription: "A grade principal de KIT OPTIONS apresenta 12 ícones distribuídos em 3 linhas de 4 colunas. Ao entrar em qualquer um dos 12 itens, o topo exibe o nome da função e o pad ativo (quando aplicável), o centro apresenta os controles específicos e o rodapé traz as abas ou chaves de função daquela tela.",
    fButtonsTable: [
      { button: "[F1]–[F6] em XSTICK", label: "INST / V-EDIT / Transient / Analog XStick / COPY", action: "[F1] INST, [F2] V-EDIT, [F4] Transient (ON/OFF), [F5] Analog XStick (ON/OFF para pads analógicos), [F6] COPY (copia ajustes de XStick de outro kit)." },
      { button: "[F5] / [F6] em BUZZ", label: "Buzz ON/OFF e H&R", action: "[F5] (Buzz) liga/desliga a ressonância da esteira; [F6] (H&R) vincula pele e aro." },
      { button: "[F1]–[F3] em STRAINER", label: "LEVER / SW/KNOB / FX CTRL", action: "Alterna entre as 3 guias do automático da caixa digital PD-14DSX: [F1] LEVER (alavanca), [F2] SW/KNOB (botão e knob giratório) e [F3] FX CTRL (efeitos controlados pela alavanca)." },
      { button: "[F6] em KIT VIEW", label: "IMG IMPORT", action: "Importa uma imagem personalizada (BMP ou PNG de 200 x 60 pixels) do cartão SD para o fundo da tela KIT." },
      { button: "[F6] em MUTE GROUP / KIT MIDI", label: "CLEAR ALL / DEFAULT", action: "Em MUTE GROUP, [F6] (CLEAR ALL) limpa todos os grupos de silenciamento. Em KIT MIDI, [F6] (DEFAULT) restaura as notas/canais MIDI do kit para o padrão de fábrica." },
      { button: "[F1]–[F3] em POS/PEDAL", label: "POSITION / POS AREA / PEDAL BEND", action: "Alterna entre [F1] POSITION (detecção de posição de batida), [F2] POS AREA (área interna/externa) e [F3] PEDAL BEND (variação de afinação pelo pedal de chimbal)." }
    ],
    parameterTables: [
      {
        tableTitle: "1. XSTICK, 2. BRUSH e 3. BUZZ (Data List págs. 31–32)",
        note: "Quando você atribui um instrumento de caixa (SNARE marcado com *X) ou CROSS STICK à camada A do aro da caixa (SNARE RIM), o instrumento correspondente de Cross Stick é atribuído automaticamente ao XSTICK. Se um pad digital (PD-14DSX ou PD-140DS) estiver atribuído a SNARE, a técnica de cross-stick pousando a mão na pele funciona sempre automaticamente.",
        rows: [
          { parameter: "XSTICK (Guia INST): Cross stick switch", valueRange: "OFF, ON", explanation: "Especifica se o instrumento atribuído ao cross-stick do pad de caixa soa (ON) ou não soa (OFF).", arrowPosition: "XSTICK > [F1] INST: 1º parâmetro" },
          { parameter: "XSTICK (Guia INST): Instrument", valueRange: "Qualquer instrumento exceto SYNTH WAVE", explanation: "Seleciona o instrumento atribuído ao cross-stick.", arrowPosition: "XSTICK > [F1] INST: nome do instrumento" },
          { parameter: "XSTICK (Guia INST): XStick Volume", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume do som de cross-stick.", arrowPosition: "XSTICK > [F1] INST: fader à direita" },
          { parameter: "XSTICK (Guia INST): XSTICK TRANSIENT (Type, Attack Time, Attack Depth, Attack Type, Release Depth, Gain)", valueRange: "Type: Preset, Type 1–4 / Attack Time: 1–10 / Attack Depth: -100–+100 / Attack Type: NORMAL, WIDE 1, WIDE 2 / Release Depth: -100–+100 / Gain: -12.0–+6.0 dB", explanation: "Ajustes completos de transiente exclusivos para o som de cross-stick.", arrowPosition: "XSTICK > [F1] INST: seção inferior" },
          { parameter: "XSTICK: Botões [F4] (Transient), [F5] (Analog XStick) e [F6] (COPY)", valueRange: "[F4] OFF/ON, [F5] OFF/ON, [F6] Copiar", explanation: "[F4] liga/desliga o transiente do cross-stick. [F5] (Analog XStick) define se o som de cross-stick toca (ON) ou o som de rimshot aberto toca (OFF) ao bater no aro de um pad analógico quando uma caixa digital não está conectada. [F6] copia as configurações de XSTICK de outro kit.", arrowPosition: "Botões [F4], [F5] e [F6] em XSTICK" },
          { parameter: "XSTICK (Guia V-EDIT)", valueRange: "Parâmetros V-EDIT do instrumento", explanation: "Edita o som do instrumento de cross-stick usando o V-EDIT.", arrowPosition: "XSTICK > [F2] V-EDIT" },
          { parameter: "BRUSH: Brush Switch", valueRange: "OFF, ON", explanation: "Especifica se você está tocando com baquetas (OFF) ou vassourinhas (ON). Quando 'ON', você pode tocar arrastando/varrendo (sweeping) as vassourinhas na pele. (Habilitado quando um instrumento compatível com vassourinha *B está atribuído à camada A da pele da caixa).", arrowPosition: "Tela BRUSH: único parâmetro" },
          { parameter: "BUZZ: Snare Buzz Switch ([F5] Buzz)", valueRange: "OFF, ON", explanation: "Liga ou desliga a ressonância simpática da esteira da caixa (buzz).", arrowPosition: "Tela BUZZ: topo esquerdo / botão [F5]" },
          { parameter: "BUZZ: Snare Buzz Volume", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume geral da ressonância da caixa.", arrowPosition: "Tela BUZZ: topo direito" },
          { parameter: "BUZZ: Snare Buzz Sens", valueRange: "OFF, 1–12", explanation: "Quantidade de ressonância de esteira acionada por cada pad individualmente (ex: quanto o bumbo ou os tons fazem a esteira da caixa chiarem).", arrowPosition: "Tela BUZZ: coluna Sens na lista de pads" },
          { parameter: "BUZZ: Snare Buzz Muffling", valueRange: "OFF, 1–8, MAX", explanation: "Define o abafamento (mute) do som de ressonância da caixa para cada pad ([F6] H&R vincula pele e aro).", arrowPosition: "Tela BUZZ: coluna Muffling na lista de pads" }
        ]
      },
      {
        tableTitle: "4. STRAINER — Automático, Botão/Knob e Controle de Efeitos da Caixa Digital PD-14DSX (Data List págs. 33–34)",
        note: "*1 Alguns smartphones e apps de música podem não permitir o controle de reprodução pelo V31. *2 Permite ajustar o efeito aplicado a todas as camadas (A, B, C) da caixa ao mesmo tempo, mantendo o equilíbrio entre as camadas.",
        rows: [
          { parameter: "Guia LEVER ([F1]): Strainer Lever Function", valueRange: "STRAINER ON/OFF, FX CONTROL, FUNCTION OFF", explanation: "Define a função usada ao operar a alavanca do automático da caixa (PD-14DSX): ligar/desligar a esteira (STRAINER ON/OFF), controlar efeitos configurados na aba FX CTRL (FX CONTROL) ou desativar a alavanca (FUNCTION OFF).", arrowPosition: "STRAINER > [F1] LEVER: 1ª linha" },
          { parameter: "Guia LEVER ([F1]): Strainer Mode", valueRange: "BEHAVIOR, ALWAYS ON, ALWAYS OFF", explanation: "Define se o som da caixa muda conforme a posição da alavanca: BEHAVIOR (quando a PD-14DSX está conectada, muda o som conforme a posição física da alavanca), ALWAYS ON (esteira sempre ligada independente da alavanca) ou ALWAYS OFF (esteira sempre desligada).", arrowPosition: "STRAINER > [F1] LEVER: 2ª linha" },
          { parameter: "Guia LEVER ([F1]): Strainer Throw Sound", valueRange: "OFF, TYPE1–TYPE7", explanation: "Seleciona o som mecânico ouvido quando a alavanca do automático é levantada ou abaixada.", arrowPosition: "STRAINER > [F1] LEVER: 3ª linha" },
          { parameter: "Guia LEVER ([F1]): Strainer Throw Volume", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume do som ouvido ao levantar ou abaixar a alavanca do automático.", arrowPosition: "STRAINER > [F1] LEVER: 4ª linha" },
          { parameter: "Guia SW/KNOB ([F2]): Strainer Sw Func", valueRange: "OFF (Desativado), DISPLAY STRAINER KNOB FUNC (Mostra na tela a função atribuída ao knob), SONG TOP (Volta ao início da música), SONG PLAY/STOP (Toca/para a música interna/SD), Bluetooth PLAY/STOP *1 (Toca/para música no smartphone Bluetooth), CLICK PLAY/STOP (Toca/para o metrônomo), TAP TEMPO (Define o andamento batendo no botão no intervalo desejado), SNARE BUZZ ON/OFF (Liga/desliga a ressonância da esteira), SNAPSHOT SAVE (Salva temporariamente o kit em edição como Snapshot), ALL SOUND OFF (Interrompe todos os sons de bateria ou User Samples em reprodução)", explanation: "Define a função executada ao pressionar o botão físico (switch) do automático na caixa PD-14DSX.", arrowPosition: "STRAINER > [F2] SW/KNOB: 1ª linha" },
          { parameter: "Guia SW/KNOB ([F2]): Strainer Knob Func", valueRange: "OFF (Desativado), SONG# (Chama a música anterior ou seguinte), Bluetooth SONG# *1 (Chama a música anterior/seguinte no smartphone Bluetooth), CLICK TEMPO (Ajusta o andamento do metrônomo), SNARE BUZZ VOLUME (Ajusta o volume da ressonância da caixa), STRAINER ADJUST *2 (Ajusta a tensão da esteira das camadas da caixa), SNARE TUNING *2 (Ajusta a afinação das camadas da caixa), SNARE MUFFLING *2 (Ajusta o abafamento das camadas da caixa), LED BRIGHTNESS (Altera o brilho do botão [KIT], disco e indicador do automático), LCD BRIGHTNESS (Ajusta o brilho do visor LCD)", explanation: "Define a função controlada ao girar o knob de tensão do automático na caixa PD-14DSX.", arrowPosition: "STRAINER > [F2] SW/KNOB: 2ª linha" },
          { parameter: "Guia FX CTRL ([F3]): Effect control switch (quando Lever Function = FX CONTROL)", valueRange: "DISABLE (Nenhum efeito controlado), LEVER ON (O efeito liga quando a alavanca está na posição ON/levantada), LEVER OFF (O efeito liga quando a alavanca está na posição OFF/abaixada)", explanation: "Configura individualmente quais efeitos de AMBIENCE CONTROL (OVERHEAD, ROOM, REVERB, KIT RESO) e BUS FX CONTROL (BUS-A FX1, BUS-A FX2, BUS-B FX1, BUS-B FX2, BUS-C FX1, BUS-C FX2, BUS-D FX1, BUS-D FX2, BUS REVERB) são ligados/desligados ao mover a alavanca da caixa.", arrowPosition: "STRAINER > [F3] FX CTRL: lista de 13 efeitos" }
        ]
      },
      {
        tableTitle: "5. KIT NAME, 6. KIT COLOR, 7. KIT VIEW, 8. KIT TEMPO e 9. KIT PHRASE (Data List págs. 34–36)",
        note: "Em KIT TEMPO, segure [SHIFT] enquanto gira o disco para ajustar o andamento em décimos de BPM (casas decimais). Em KIT VIEW, para importar uma imagem do cartão SD, salve um arquivo BMP de 24 bits ou PNG de 200 x 60 pixels na pasta Roland/V31/KitImage/ e pressione [F6] (IMG IMPORT).",
        rows: [
          { parameter: "KIT NAME: Kit Name / Kit Sub Name", valueRange: "Kit Name (linha superior): até 16 caracteres / Kit Sub Name (linha inferior): até 64 caracteres", explanation: "Edita o nome principal e o subnome descritivo do Drum Kit selecionado. Use [F1] para alternar entre KIT NAME e SUB NAME, [F2] (A<->a) para alternar tipo de caractere, [F3]/[F4] para mover o cursor no texto, [F5] (INSERT) para inserir e [F6] (DELETE) para apagar.", arrowPosition: "Tela KIT NAME" },
          { parameter: "KIT COLOR: Kit Color", valueRange: "1: WHITE, 2: RED, 3: GREEN, 4: BLUE, 5: LIGHT BLUE, 6: PINK, 7: PURPLE, 8: ORANGE, 9: YELLOW, 10: EMERALD, 11: CUSTOM (Red 0–255, Green 0–255, Blue 0–255)", explanation: "Altera a cor do LED do botão [KIT] e do indicador da caixa para cada Drum Kit. Quando '11: CUSTOM' é selecionado, você pode definir os valores de Vermelho (R), Verde (G) e Azul (B) de 0 a 255 cada.", arrowPosition: "Tela KIT COLOR" },
          { parameter: "KIT VIEW: Kit Image", valueRange: "OFF, ON, GLOBAL", explanation: "Configura a imagem de fundo da tela KIT. Em 'OFF', nenhuma imagem é exibida; em 'ON', exibe a imagem do kit (ou imagem importada via [F6] IMG IMPORT); em 'GLOBAL', segue a configuração global definida em SYSTEM > OPTION > KIT VIEW.", arrowPosition: "Tela KIT VIEW: 1ª linha" },
          { parameter: "KIT VIEW: Kit Name Size", valueRange: "SMALL, MEDIUM, LARGE, GLOBAL", explanation: "Configura o tamanho do texto do nome do kit na tela KIT (Pequeno, Médio, Grande ou Global).", arrowPosition: "Tela KIT VIEW: 2ª linha" },
          { parameter: "KIT TEMPO: Kit Tempo", valueRange: "OFF, ON", explanation: "OFF: Usa um andamento comum para todo o V31 (o andamento não muda ao trocar de Drum Kit). ON: Especifica individualmente um andamento para cada Drum Kit (o metrônomo e os efeitos sincronizados ao tempo mudam para o valor salvo no kit).", arrowPosition: "Tela KIT TEMPO: 1ª linha" },
          { parameter: "KIT TEMPO: Tempo", valueRange: "20.0–260.0", explanation: "Andamento (BPM) especificado para o Drum Kit atual (segure [SHIFT] + disco para ajuste decimal).", arrowPosition: "Tela KIT TEMPO: 2ª linha" },
          { parameter: "KIT PHRASE: Kit Phrase", valueRange: "01: 8beat - Med, 02: 8beat - Fast, 03: 8beat - Slow, 04: 16beat 1, 05: 16beat 2, 06: 16beat Slow 1, 07: 16beat Slow 2, 08: Ballad, 09: Rock - Fast 1, 10: Rock - Fast 2, 11: Rock - Med 1, 12: Rock - Med 2, 13: Rock - Fast, 14: Rock - Slow, 15: Tom Beat 1, 16: Tom Beat 2, 17: Metal 1, 18: Metal 2, 19: Metal 3, 20: Jazz Funk 1, 21: Jazz Funk 2, 22: Funk, 23: Funk Shuffle1, 24: Funk Shuffle2, 25: Funk Shuffle3, 26: R&B - Shuffle, 27: R&B - Slow, 28: Modern Gospel, 29: Samba Kick, 30: Samba Bateria, 31: Songo, 32: Latin Jazz, 33: Jazz - Slow, 34: Jazz - Med 1, 35: Jazz - Med 2, 36: Jazz - Med 3, 37: Jazz - Fast 1, 38: Jazz - Fast 2, 39: Jazz Tom Beat, 40: Second Line, 41: Elec Beat 1, 42: Elec Beat 2, 43: Elec Beat 3, 44: Drum'n'Bass, 45: Trap 1, 46: Trap 2, 47: Dub Step, 48: Break Beats, 49: Sound Check 1, 50: Sound Check 2, 51: Sound Check 3, 52: Sound Check 4", explanation: "Seleciona qual das 52 frases demonstrativas será reproduzida ao pressionar [F3] (PHRASE) na tela KIT (ou [F6] PHRASE nesta tela).", arrowPosition: "Tela KIT PHRASE: 1ª linha" },
          { parameter: "KIT PHRASE: Kit Phrase Play (GLOBAL)", valueRange: "OFF, ON", explanation: "Quando definido como 'OFF', a reprodução de frases de kit fica desativada para todos os Drum Kits (muito útil para evitar disparar uma frase acidentalmente durante um show ao vivo). Esta configuração aplica-se globalmente ao V31.", arrowPosition: "Tela KIT PHRASE: 2ª linha" }
        ]
      },
      {
        tableTitle: "10. MUTE GROUP e 11. KIT MIDI (Com Tabelas de Notas MIDI do Chimbal e Caixa e Explicação de Gate Time) (Data List págs. 37–38)",
        note: "Quando vários pads são configurados com o mesmo número de nota MIDI, ao receber essa nota MIDI externa, o gerador interno do V31 toca apenas o instrumento do pad com o menor número de entrada de trigger (e se a mesma nota estiver na pele e no aro do mesmo pad, a pele é tocada; um asterisco * aparece à direita das notas que não soarão).",
        rows: [
          { parameter: "MUTE GROUP: SEND / RECEIVE", valueRange: "– (OFF), 1–8", explanation: "Especifica o número do grupo de silenciamento (1 a 8). Quando você bate em um pad configurado com um número em SEND, o som de qualquer outro pad atribuído ao mesmo número em RECEIVE é imediatamente cortado/silenciado. (Mesmo que você coloque o mesmo número em SEND e RECEIVE para o mesmo local do mesmo pad, ele não silencia a si próprio). [F6] (CLEAR ALL) limpa todos os grupos.", arrowPosition: "Tela MUTE GROUP: linhas SEND e RECEIVE" },
          { parameter: "KIT MIDI (Guia NOTE No. [F1]): MIDI Note No.", valueRange: "0 (C-)–127 (G9), OFF", explanation: "Define o número da nota MIDI transmitida e recebida por cada pad e articulação. Em 'OFF', mensagens de nota não são transmitidas nem recebidas.", arrowPosition: "KIT MIDI > [F1] NOTE No." },
          { parameter: "KIT MIDI (Guia GATE TIME [F2]): MIDI Gate Time", valueRange: "0.1–8.0s", explanation: "Define a duração (em segundos, de 0,1 a 8,0 s) das notas MIDI transmitidas por cada pad até o envio do Note Off. Sobre o Gate Time: módulos de percussão normalmente respondem apenas ao 'Note On' e ignoram 'Note Off', por isso o padrão de fábrica é o valor mínimo (0,1s); porém, sintetizadores gerais ou samplers desligam o som ao receber o 'Note Off' (fazendo notas de 0,1s ficarem quase inaudíveis ou cortadas). Para acionar sintetizadores/samplers externos, aumente o Gate Time! (Se a mesma nota for tocada novamente sobreposta dentro do Gate Time, um Note Off é transmitido antes do novo Note On).", arrowPosition: "KIT MIDI > [F2] GATE TIME" },
          { parameter: "KIT MIDI (Guia CHANNEL [F3]): MIDI Channel", valueRange: "Channel 1–16, GLOBAL", explanation: "Define o canal MIDI (1 a 16) no qual cada pad transmite/recebe notas e Control Changes, ou 'GLOBAL' para usar o canal global definido em SYSTEM > MIDI > BASIC.", arrowPosition: "KIT MIDI > [F3] CHANNEL" },
          { parameter: "Notas MIDI do Chimbal (Hi-Hat)", valueRange: "HI-HAT OPEN HEAD, HI-HAT OPEN RIM, HI-HAT CLOSE HEAD, HI-HAT CLOSE RIM, HI-HAT CLOSED-PEDAL", explanation: "5 números de notas MIDI independentes para o chimbal: pele aberta (OPEN HEAD), borda aberta (OPEN RIM), pele fechada (CLOSE HEAD), borda fechada (CLOSE RIM) e pedal fechado no pé (CLOSED-PEDAL).", arrowPosition: "Lista da guia NOTE No. (seção HI-HAT)" },
          { parameter: "Notas MIDI da Caixa (Snare)", valueRange: "SNARE HEAD, SNARE RIM, SNARE BRUSH, SNARE XSTICK, SNARE THROW ON, SNARE THROW OFF, SNARE THROW OFF HEAD, SNARE THROW OFF RIM, SNARE THROW OFF BRUSH, SNARE THROW OFF XSTICK", explanation: "10 números de notas MIDI independentes para a caixa: pele (HEAD), rimshot no aro (RIM), varrida de vassourinha (BRUSH), cross-stick (XSTICK), levantar alavanca do automático (THROW ON), abaixar alavanca (THROW OFF), e os 4 sons tocados enquanto a esteira está desligada/solta (THROW OFF HEAD, THROW OFF RIM, THROW OFF BRUSH e THROW OFF XSTICK).", arrowPosition: "Lista da guia NOTE No. (seção SNARE)" }
        ]
      },
      {
        tableTitle: "12. POSITION/PEDAL (POS/PEDAL) — Detecção de Posição e Pedal Bend (Data List pág. 39)",
        note: "*1 Suporta as entradas: SNARE, TOM1–3, HI-HAT (apenas quando VH-14D está atribuído), RIDE (apenas quando CY-18DR está atribuído) e AUX/TOM4.",
        rows: [
          { parameter: "Guia POSITION ([F1]): Position Control *1", valueRange: "OFF, ON, ON (Rim Click Off)", explanation: "Liga ou desliga as mudanças tonais que ocorrem conforme o local da batida (centro vs. borda / esquerda vs. direita) ou nuances de rimshot. Em Head: Snare (posição + esquerda/direita na PD-140DS/PD-14DSX) e Tom (posição). Em Rim: Snare (nuance de rimshot + esquerda/direita na PD-140DS/PD-14DSX) e Tom (nuance de rimshot). Em Bow: Hi-Hat (posição + esq/dir no VH-14D) e Ride (posição + esq/dir no CY-18DR). Em Edge: Hi-Hat (esq/dir no VH-14D) e Ride (esq/dir no CY-18DR).", arrowPosition: "POS/PEDAL > [F1] POSITION" },
          { parameter: "Guia POS AREA ([F2]): Position Area *1", valueRange: "INSIDE -5–DEFAULT–OUTSIDE +5", explanation: "Especifica a área de ponto de batida para a pele ou aro. Ajustes 'INSIDE' facilitam obter o timbre central batendo mais para dentro; ajustes 'OUTSIDE' facilitam obter o timbre da borda batendo mais para fora.", arrowPosition: "POS/PEDAL > [F2] POS AREA" },
          { parameter: "Guia PEDAL BEND ([F3]): Pedal Bend Range", valueRange: "-24–0–24 (em semitons)", explanation: "Especifica a quantidade de mudança de afinação (pitch bend) em semitons (-24 a +24) que ocorre em qualquer pad (pele e aro separadamente) conforme a profundidade com que você pisa no pedal do chimbal (ideal para simular surdos/tímpanos ou efeitos eletrônicos controlados pelo pé).", arrowPosition: "POS/PEDAL > [F3] PEDAL BEND" }
        ]
      }
    ],
    tipsAndNotes: [
      "Na caixa digital PD-14DSX, você pode usar STRAINER > SW/KNOB para atribuir o botão físico da caixa a 'TAP TEMPO' ou 'CLICK PLAY/STOP' e o knob giratório da caixa a 'CLICK TEMPO' ou 'SNARE TUNING', controlando tudo diretamente na caixa!",
      "Com STRAINER > LEVER > FX CONTROL, você pode programar a alavanca da caixa PD-14DSX para ligar instantaneamente um Reverb longo ou um Delay nos barramentos BUS FX quando você levanta ou abaixa a alavanca no meio da música."
    ]
  }
);

window.V31_MANUAL_SECTIONS.push(
  {
    id: "expansion-user-sample",
    chapter: "Capítulo 14: EXPANSION (Slots 1–6 e Racks 1–100) e USER SAMPLE (U001–U500)",
    title: "Gerenciamento de Expansões Roland Cloud (SLOT, RACK, Auto Slot Load, Optimize) e Importação/Edição de User Samples ([SHIFT] + [EXPANSION])",
    simulatorScreenId: "EXPANSION_SLOT",
    summary: "Guia passo a passo para gerenciar Instrument Expansions e Kit Packs no botão [EXPANSION] (Slots 1–6, Racks 1–100, Load to Slot, Remove, Remove All, Optimize, Sort By, Uninstall, Exp Usage e Auto Slot Load) e importar/editar arquivos de áudio WAV no menu USER SAMPLE ([SHIFT] + [EXPANSION]: Import, Play Type, Sample Gain, Edit Start/End Point, Rename, Renumber, Optimize e Delete).",
    navigationSteps: [
      "Para EXPANSION: Pressione o botão físico [EXPANSION] (localizado no canto superior direito, acima dos cursores).",
      "Na tela EXPANSION, pressione [F1] (SLOT) para ver os 6 Slots ativos na memória ou [F2] (RACK) para ver os até 100 pacotes instalados no armazenamento interno.",
      "Para carregar uma expansão do Rack em um Slot: pressione [F2] (RACK) -> selecione a expansão com [▲]/[▼] -> pressione [F4] (LOAD TO SLOT) -> gire o Disco para escolher o Slot (1 a 6) -> pressione [F6] (LOAD) -> confirme com [ENTER].",
      "Para USER SAMPLE: Mantenha [SHIFT] pressionado e pressione o botão [EXPANSION] para abrir a tela USER SAMPLE LIST (U001 a U500).",
      "Para importar um arquivo WAV do cartão SD para um User Sample: em USER SAMPLE LIST, escolha um número vazio (001–500) com [▲]/[▼] -> pressione [F6] (IMPORT) -> navegue pelas pastas com [◄]/[►] e arquivos com [▲]/[▼] (marque vários com [F5] CHECK ou todos com [F4] CHECK ALL) -> pressione [F6] (IMPORT) -> seta [►] para 'OK' -> [ENTER]."
    ],
    screenLayoutDescription: "1) Tela INSTRUMENT EXPANSIONS / KIT PACKS: na aba [F1] (SLOT), lista de cima para baixo os 6 slots (Slot 1 a Slot 6) mostrando o nome da expansão carregada em cada slot e uma caixa de seleção para 'Auto Slot Load' (Ver. 1.10+). Na aba [F2] (RACK), lista os números de Rack (001 a 100) com o ID, nome e tipo de licença (Pré-instalada, Chave Vitalícia ou Assinatura). 2) Tela USER SAMPLE LIST ([SHIFT] + [EXPANSION]): à esquerda exibe a lista vertical numerada de User Samples (001 a 500) com a porcentagem de memória restante ('Remaining: XX%') no topo; à direita exibe os parâmetros do sample selecionado ('Play Type' e 'Sample Gain') e o quadro 'PROPERTY' (Channel: STEREO/MONO e Size em KB/MB). Ao pressionar [F2] (EDIT), abre o editor gráfico de forma de onda com Zoom, Start Point e End Point.",
    fButtonsTable: [
      { button: "[F1] (SLOT) / [F2] (RACK) em EXPANSION", label: "Alternar SLOT e RACK", action: "Em EXPANSION, [F1] mostra os 6 Slots de memória ativa; [F2] mostra os 100 Racks instalados." },
      { button: "[F3]–[F6] na Guia SLOT", label: "OPTIMIZE / REMOVE / EXP USAGE / REMOVE ALL", action: "[F3] (OPTIMIZE) desfragmenta a área de slots; [F5] (REMOVE) remove a expansão do slot atual; [F6] (EXP USAGE) lista quais Drum Kits usam a expansão daquele slot; [SHIFT] + [F6] (REMOVE ALL) limpa todos os 6 slots." },
      { button: "[F3]–[F5] na Guia RACK", label: "SORT BY... / LOAD TO SLOT / UNINSTALL", action: "[F3] (SORT BY...) ordena a lista do Rack; [F4] (LOAD TO SLOT) carrega a expansão selecionada em um dos 6 slots; [F5] (UNINSTALL) desinstala a expansão do Rack (exceto as pré-instaladas de fábrica)." },
      { button: "[F1]–[F6] em USER SAMPLE LIST", label: "PREVIEW / EDIT / RENUMBER / OPTIMIZE / DELETE / IMPORT", action: "[F1] (PREVIEW) toca o sample selecionado; [F2] (EDIT) edita início/fim (Start/End Point) e nome; [F3] (RENUMBER) elimina buracos na numeração; [F4] (OPTIMIZE) desfragmenta a memória de samples; [F5] (DELETE) exclui samples; [F6] (IMPORT) importa arquivos de áudio do cartão SD." }
    ],
    parameterTables: [
      {
        tableTitle: "EXPANSION — Operações e Parâmetros de SLOT (1–6) e RACK (1–100) (Manual de Referência + Data List págs. 112–118)",
        note: "O V31 já vem de fábrica com 3 Instrument Expansions pré-instaladas: EXV001 (Wood Room Studio UK 1: 30 instrumentos acústicos vintage), EXV002 (Electronic&Percussion 1: 712 instrumentos eletrônicos, percussão mundial, claps e Sound FX) e EXV003 (The Brush 1: 22 instrumentos de vassourinha).",
        rows: [
          { parameter: "Auto Slot Load (Guia SLOT - Ver. 1.10+)", valueRange: "OFF, ON (Padrão: ON)", explanation: "Quando ativado (ON), carrega automaticamente nos slots as expansões de instrumentos e pacotes de kits necessários sempre que você troca de Drum Kit (enquanto carrega, os sons ficam silenciados e a troca de kit leva um pouco mais de tempo). Se quiser troca instantânea de kits ao vivo, defina como 'OFF'.", arrowPosition: "Guia [F1] SLOT: caixa de seleção" },
          { parameter: "LOAD TO SLOT ([F4] na Guia RACK)", valueRange: "Slot 1–6", explanation: "Carrega uma expansão instalada no Rack para um dos 6 Slots. Uma mesma expansão não pode ser carregada em mais de um slot simultaneamente.", arrowPosition: "Guia [F2] RACK -> [F4] LOAD TO SLOT" },
          { parameter: "REMOVE ([F5] na Guia SLOT) / REMOVE ALL ([SHIFT]+[F6])", valueRange: "Slot selecionado / Todos os Slots", explanation: "Remove a atribuição da expansão do Slot selecionado (ou limpa todos os slots com [SHIFT] + [F6]). Os kits que usavam essa expansão exibirão aviso de expansão ausente até que ela seja recarregada.", arrowPosition: "Guia [F1] SLOT -> [F5] REMOVE" },
          { parameter: "EXP USAGE ([F6] na Guia SLOT)", valueRange: "Lista de Drum Kits", explanation: "Mostra uma lista de todos os Drum Kits que utilizam os instrumentos da expansão atribuída ao slot selecionado (útil antes de substituir um slot). Use [►] e [F5] (SELECT) para ir ao kit.", arrowPosition: "Guia [F1] SLOT -> [F6] EXP USAGE" },
          { parameter: "OPTIMIZE ([F3] na Guia SLOT)", valueRange: "Executar otimização", explanation: "Desfragmenta e otimiza a área de memória dos Slots quando você carrega e remove expansões repetidamente.", arrowPosition: "Guia [F1] SLOT -> [F3] OPTIMIZE" },
          { parameter: "SORT BY... ([F3] na Guia RACK)", valueRange: "Default (por nº de rack), ▲ Expansion ID (ascendente), ▼ Expansion ID (descendente), ▲ Purchase Type (Pré-instalada -> Chave vitalícia -> Assinatura), ▼ Purchase Type (Assinatura -> Chave vitalícia -> Pré-instalada)", explanation: "Altera a ordem de exibição das expansões na tela RACK.", arrowPosition: "Guia [F2] RACK -> [F3] SORT BY..." },
          { parameter: "UNINSTALL ([F5] na Guia RACK)", valueRange: "Desinstalar do Rack", explanation: "Desinstala a expansão selecionada do Rack (expansões pré-instaladas de fábrica não podem ser desinstaladas).", arrowPosition: "Guia [F2] RACK -> [F5] UNINSTALL" }
        ]
      },
      {
        tableTitle: "USER SAMPLE LIST — Parâmetros e Funções ([SHIFT] + [EXPANSION]) (Data List pág. 66)",
        note: "*1 Você não pode definir o End Point antes do Start Point, nem ambos com o mesmo valor, nem exceder o tamanho total do sample. Formatos suportados para importação: WAV (44,1 / 48 / 96 kHz, 16 / 24 bits, mono ou estéreo).",
        rows: [
          { parameter: "Play Type", valueRange: "ONESHOT MONO, ONESHOT POLY, LOOP ALT", explanation: "ONESHOT MONO: Ao bater no pad, o som que estava tocando é silenciado antes de o novo som começar (as notas não se sobrepõem). ONESHOT POLY: Ao bater repetidamente no pad, os sons se sobrepõem livremente. LOOP ALT: O User Sample toca repetidamente em loop; cada vez que você bate no pad, o som alternadamente inicia ou para.", arrowPosition: "Painel direito da tela USER SAMPLE LIST: 1ª linha" },
          { parameter: "Sample Gain", valueRange: "-12–+12dB", explanation: "Ajusta o volume individual do User Sample.", arrowPosition: "Painel direito da tela USER SAMPLE LIST: 2ª linha" },
          { parameter: "Guia EDIT ([F2]): ZOOM", valueRange: "Botões [F1] (ZOOM OUT) / [F2] (ZOOM IN)", explanation: "Amplia ou reduz a visualização da forma de onda.", arrowPosition: "Tela USER SAMPLE EDIT: botões [F1]/[F2]" },
          { parameter: "Guia EDIT ([F2]): Start Point *1", valueRange: "0–07937742 (amostras)", explanation: "Ajusta o ponto inicial exato em que o User Sample começa a tocar (útil para cortar silêncio no início do áudio).", arrowPosition: "Tela USER SAMPLE EDIT: linha Start Point" },
          { parameter: "Guia EDIT ([F2]): End Point *1", valueRange: "257–07937999 (amostras)", explanation: "Ajusta o ponto final exato em que o User Sample para de tocar.", arrowPosition: "Tela USER SAMPLE EDIT: linha End Point" },
          { parameter: "Guia EDIT ([F2]): RENAME ([F6])", valueRange: "Até 16 caracteres", explanation: "Pressione [F6] (RENAME) dentro da guia EDIT para editar o nome do User Sample.", arrowPosition: "Tela USER SAMPLE EDIT: botão [F6]" },
          { parameter: "RENUMBER ([F3])", valueRange: "Reorganizar numeração", explanation: "Desloca os User Samples para frente eliminando espaços em branco na numeração (atualizando automaticamente as atribuições nos Drum Kits Atuais; atenção: backups antigos salvos sem samples podem perder a referência se você renumerar).", arrowPosition: "USER SAMPLE LIST: botão [F3]" },
          { parameter: "OPTIMIZE ([F4])", valueRange: "Desfragmentar memória de samples", explanation: "Otimiza a área de memória de User Samples quando fragmentada após muitas importações/exclusões. Faça um backup antes! Pode levar até mais de uma hora dependendo da quantidade de samples; nunca desligue o V31 durante o processo.", arrowPosition: "USER SAMPLE LIST: botão [F4]" },
          { parameter: "DELETE ([F5])", valueRange: "Excluir 1 ou vários samples", explanation: "Exclui samples da memória do usuário (use [F5] CHECK para marcar individuais ou [F4] CHECK ALL para marcar todos, e [F6] DELETE para confirmar).", arrowPosition: "USER SAMPLE LIST: botão [F5]" },
          { parameter: "IMPORT ([F6])", valueRange: "Importar WAV do cartão SD", explanation: "Importa um ou múltiplos arquivos de áudio do cartão SD ([F1] PREVIEW testa arquivos de 44,1 kHz; [F5] CHECK marca vários; [F4] CHECK ALL marca a pasta inteira; [F6] IMPORT executa).", arrowPosition: "USER SAMPLE LIST: botão [F6]" }
        ]
      }
    ],
    tipsAndNotes: [
      "Para usar um User Sample importado em um pad: vá em [EZ EDIT] > [F1] (INST) ou [MENU] > KIT EDIT > INSTRUMENT, gire o disco até os números U001–U500 (ou pressione [ENTER] e selecione o grupo USER SAMPLE).",
      "Se um User Sample estiver em modo 'LOOP ALT' e você quiser parar todos os loops que estão tocando de uma só vez, pressione [SHIFT] + [EXIT] (ALL SOUND OFF)."
    ]
  },
  {
    id: "click-metronomo",
    chapter: "Capítulo 15: CLICK / Metrônomo Completo",
    title: "Uso e Configuração do Metrônomo (CLICK): Guias TEMPO e SETUP, Templates Rítmicos, Tap Tempo e Faixa de Clique (Click Track)",
    simulatorScreenId: "CLICK_TEMPO",
    summary: "Referência completa do metrônomo do V31 (página 65 do Data List): como ligar/desligar com um botão, ajustar o andamento (Tempo) e fórmula de compasso (Beat), mixer de subdivisões rítmicas (Accent, Semínima, Colcheia, Semicolcheia, Tercina) com 6 Templates na guia TEMPO, escolha entre 15 timbres de clique, Volume, Pan, LED Reference e Tap Pad na guia SETUP, além de como usar um arquivo de áudio *_click.wav como Click Track na tela SONG.",
    navigationSteps: [
      "Pressione o botão físico [CLICK] na coluna esquerda do painel para abrir a tela CLICK - TEMPO.",
      "Para ligar ou desligar o som do metrônomo: na tela CLICK, pressione [F6] (CLICK) — ou, a partir de qualquer outra tela do módulo, segure [SHIFT] e pressione o botão [CLICK].",
      "Para ajustar o volume físico do clique a qualquer momento: gire o knob giratório [CLICK] (acima do botão [CLICK]).",
      "Na tela CLICK - TEMPO ([F1]): use os cursores para selecionar 'Tempo' (20.0–260.0), 'Beat' (1–9), 'Template' ou os 5 faders de subdivisão (Accent, Quarter, Eighth, Sixteenth, Triplet) e gire o Disco.",
      "Para configurar o timbre do clique, Pan, piscar do LED e Tap Tempo no pad: pressione [F2] (SETUP). Nessa tela, a navegação é em uma grade 2D de 4 linhas por 2 colunas usando as 4 setas [▲], [▼], [◄], [►]: Linha 1 = Tempo (Col 1) e Beat (Col 2); Linha 2 = Sound (Col 1) e LED Reference (Col 2); Linha 3 = Level (Col 1) e Tap Pad Switch (Col 2); Linha 4 = Pan (Col 1) e Tap Pad (Col 2)."
    ],
    screenLayoutDescription: "1) Guia [F1] (TEMPO): no topo exibe duas caixas grandes lado a lado: 'Tempo' à esquerda (Linha 1, Coluna 1 — ex: 120.0) e 'Beat' à direita (Linha 1, Coluna 2 — ex: 4). Logo abaixo da linha divisória fica o seletor 'Template' (Linha 2, Coluna 1 — ex: QTR NOTES). Na Linha 3 ficam 5 faders verticais lado a lado da esquerda para a direita (Colunas 1 a 5): Accent (Acento), Quarter (Semínima), Eighth (Colcheia), Sixteenth (Semicolcheia) e Triplet (Tercina). À direita fica o ícone do metrônomo indicando ON ou OFF. No rodapé: [F1] TEMPO, [F2] SETUP, [F4] TAP TEMPO e [F6] CLICK (ON/OFF). 2) Guia [F2] (SETUP): mantém no topo a Linha 1 com 'Tempo' (Coluna 1) e 'Beat' (Coluna 2), e abaixo da linha divisória organiza os 6 parâmetros em 2 colunas lado a lado (Coluna 1 = SOUND à esquerda; Coluna 2 = OTHERS à direita) distribuídas nas Linhas 2, 3 e 4: Linha 2 = Sound (Col 1) e LED Reference (Col 2); Linha 3 = Level (Col 1) e Tap Pad Switch (Col 2); Linha 4 = Pan (Col 1) e Tap Pad (Col 2).",
    fButtonsTable: [
      { button: "[F1] (TEMPO)", label: "Guia TEMPO", action: "Exibe os controles de andamento (Tempo), compasso (Beat), Template rítmico e faders de subdivisão." },
      { button: "[F2] (SETUP)", label: "Guia SETUP", action: "Exibe a grade 4×2 com Tempo/Beat (Linha 1), Sound e LED Reference (Linha 2), Level e Tap Pad Switch (Linha 3), Pan e Tap Pad (Linha 4)." },
      { button: "[F4] (TAP TEMPO)", label: "Tap Tempo por Botão", action: "Bata repetidamente no botão [F4] no ritmo desejado (3 vezes ou mais) para definir o andamento em BPM." },
      { button: "[F6] (CLICK)", label: "Ligar/Desligar Metrônomo", action: "Inicia ou interrompe a reprodução do metrônomo." },
      { button: "[SHIFT] + [CLICK]", label: "Atalho Global do Metrônomo", action: "Liga ou desliga o metrônomo a partir de qualquer tela sem sair de onde você está." }
    ],
    parameterTables: [
      {
        tableTitle: "CLICK — Guia TEMPO ([F1]) e Guia SETUP ([F2]) (Data List pág. 65 + Mapeamento Físico Real)",
        note: "*1 'Tempo' e 'Beat' estão presentes na Linha 1 tanto na guia [F1] TEMPO quanto na guia [F2] SETUP, e não podem ser alterados enquanto uma música DRUM REC ou dados gravados de bateria estão sendo reproduzidos. Segure [SHIFT] ao girar o disco no campo 'Tempo' para ajustar casas decimais (0,1 BPM).",
        rows: [
          { parameter: "Botão [F6] (CLICK) (Guias TEMPO e SETUP)", valueRange: "OFF, ON", explanation: "Toca ou para o metrônomo.", arrowPosition: "Botão [F6]" },
          { parameter: "Tempo *1 (Guias TEMPO e SETUP)", valueRange: "20.0–260.0", explanation: "Andamento do metrônomo em batidas por minuto (BPM).", arrowPosition: "Linha 1, Coluna 1 (Topo esquerdo — 0 setas)" },
          { parameter: "Beat *1 (Guias TEMPO e SETUP)", valueRange: "1–9", explanation: "Número de tempos (pulsos) por compasso.", arrowPosition: "Linha 1, Coluna 2 (Topo direito — 1 seta à direita [►])" },
          { parameter: "Template (Guia TEMPO)", valueRange: "QTR NOTES (Semínimas), 8TH NOTES (Colcheias), UPBEATS (Contratempos), 16TH NOTES (Semicolcheias), 3 OVER 2 (Polirritmia 3 contra 2), 8TH NOTE TRIPLETS (Tercinas de colcheia)", explanation: "Seleciona rapidamente uma combinação pronta de volumes para cada subdivisão do metrônomo.", arrowPosition: "Guia [F1] TEMPO: Linha 2, Coluna 1 (1 seta para baixo [▼])" },
          { parameter: "Accent / Quarter (Semínima) / Eighth (Colcheia) / Sixteenth (Semicolcheia) / Triplet (Tercina) (Guia TEMPO)", valueRange: "OFF, 1–9, MAX", explanation: "Ajusta individualmente o volume de cada subdivisão rítmica do clique nos 5 faders verticais.", arrowPosition: "Guia [F1] TEMPO: Linha 3, Colunas 1 a 5 (2 setas para baixo [▼] + [◄]/[►])" },
          { parameter: "Sound (Guia SETUP — Bloco SOUND)", valueRange: "METRONOME, CLICK, VOICE, BEEP 1, BEEP 2, TEK CLICK, STICKS, CLAVES, WOOD BLOCK, COWBELL, AGOGO, TRIANGLE, TAMBOURINE, MARACAS, CABASA", explanation: "Seleciona um dos 15 sons do metrônomo (incluindo contagem por voz humana em VOICE, baquetas em STICKS, clave, bloco sonoro, cowbell, agogô, etc.).", arrowPosition: "Guia [F2] SETUP: Linha 2, Coluna 1 (1 seta para baixo [▼])" },
          { parameter: "LED Reference (Guia SETUP — Bloco OTHERS)", valueRange: "OFF, ON", explanation: "Especifica se o botão físico [CLICK] pisca no tempo do metrônomo (ON) ou não pisca (OFF). Isso permanece ativo mesmo quando o som do metrônomo está parado.", arrowPosition: "Guia [F2] SETUP: Linha 2, Coluna 2 (1 seta para baixo [▼] + 1 seta à direita [►])" },
          { parameter: "Level (Guia SETUP — Bloco SOUND)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Ajusta o volume interno do metrônomo.", arrowPosition: "Guia [F2] SETUP: Linha 3, Coluna 1 (2 setas para baixo [▼])" },
          { parameter: "Tap Pad Switch (Guia SETUP — Bloco OTHERS)", valueRange: "OFF, ON", explanation: "Quando ON, permite definir o andamento (Tap Tempo) batendo com a baqueta no pad especificado em 'Tap Pad' enquanto a tela CLICK está aberta.", arrowPosition: "Guia [F2] SETUP: Linha 3, Coluna 2 (2 setas para baixo [▼] + 1 seta à direita [►])" },
          { parameter: "Pan (Guia SETUP — Bloco SOUND)", valueRange: "L30–CENTER–R30", explanation: "Ajusta a posição estéreo (esquerda/centro/direita) do metrônomo.", arrowPosition: "Guia [F2] SETUP: Linha 4, Coluna 1 (3 setas para baixo [▼])" },
          { parameter: "Tap Pad (Guia SETUP — Bloco OTHERS)", valueRange: "KICK, SNARE HEAD–AUX RIM", explanation: "Seleciona qual pad/zona será usado para marcar o Tap Tempo.", arrowPosition: "Guia [F2] SETUP: Linha 4, Coluna 2 (3 setas para baixo [▼] + 1 seta à direita [►])" }
        ]
      },
      {
        tableTitle: "Reprodução de Arquivo de Áudio como Metrônomo (Click Track na Tela SONG)",
        note: "Para não enviar o metrônomo nem o Click Track para o PA (MASTER OUT) ao vivo, vá em MENU > SYSTEM > OUTPUT > guia OTHER MST e configure CLICK e CLICK TRACK para 'PHONES (MASTER OFF)'.",
        rows: [
          { parameter: "Nomenclatura do Arquivo Click Track", valueRange: "[NomeDaMusica]_click.wav", explanation: "Se você colocar na raiz do cartão SD um arquivo de música (ex: 'MinhaMusica.wav') e junto dele um arquivo de clique com o sufixo '_click' (ex: 'MinhaMusica_click.wav'), o V31 reconhece e sincroniza automaticamente os dois arquivos na tela SONG (ícone 'Click Track' acende).", arrowPosition: "Raiz do Cartão SD / Tela SONG" },
          { parameter: "Click Track Level (em SONG > [F5] SETUP/INFO)", valueRange: "-INF, -60.0–+6.0dB", explanation: "Ajusta o volume da faixa de áudio Click Track associada à música (também controlado pelo knob físico [CLICK]).", arrowPosition: "Tela SONG > [F5] SETUP/INFO" }
        ]
      }
    ],
    tipsAndNotes: [
      "Para enviar o metrônomo exclusivamente para os seus fones de ouvido (PHONES) sem que o público ouça nas caixas (MASTER OUT): pressione [MENU] -> SYSTEM -> OUTPUT -> [F2] (OTHER MST) -> mova o cursor até 'CLICK' (e 'CLICK TRACK') e mude o valor para 'PHONES (MASTER OFF)'."
    ]
  },
  {
    id: "coach-mode",
    chapter: "Capítulo 16: Modo COACH Completo (Treinador de Prática)",
    title: "Todos os 6 Modos do COACH (Págs. 62–64): PHRASE TRAINER, TIME CHECK, QUIET COUNT, AUTO UP/DOWN, STROKE MONITOR e BLAST BEAST",
    simulatorScreenId: "COACH_MENU",
    summary: "Referência completa do botão [COACH] (páginas 62 a 64 do Data List): menu principal COACH com 6 modos de treino técnico e de precisão rítmica — PHRASE TRAINER (tocar junto com exercícios e levadas com avaliação), TIME CHECK (precisão em relação ao clique), QUIET COUNT (senso interno de andamento com compassos mudos), AUTO UP/DOWN (subida e descida gradual de BPM), STROKE MONITOR (regularidade de força/velocidade da batida) e BLAST BEAST (teste de velocidade e potência em 10 segundos).",
    navigationSteps: [
      "Pressione o botão físico [COACH] (localizado na coluna esquerda, ao lado direito do botão [CLICK]).",
      "Na tela COACH, use as setas [◄], [►], [▲], [▼] ou o Disco para selecionar um dos 6 modos dispostos em uma grade de 4 colunas por 2 linhas:",
      "Linha 1: Coluna 1 = PHRASE TRAINER, Coluna 2 = TIME CHECK, Coluna 3 = QUIET COUNT, Coluna 4 = AUTO UP/DOWN.",
      "Linha 2: Coluna 1 = STROKE MONITOR, Coluna 2 = BLAST BEAST.",
      "Pressione [ENTER] para entrar no modo selecionado.",
      "Dentro do modo escolhido, ajuste os parâmetros e pressione [F6] (START) para iniciar o exercício (ou [F6] STOP para parar)."
    ],
    screenLayoutDescription: "A tela inicial COACH exibe 6 ícones em 2 linhas (4 na linha superior e 2 na linha inferior). Dentro de cada modo: 1) PHRASE TRAINER tem as abas [F1] SELECT (categoria e frase) e [F2] SETUP (kit, Score LED, Score Mark), com [F3] PREVIEW, [F4] CLICK e [F5] START. 2) TIME CHECK, QUIET COUNT e AUTO UP/DOWN têm à esquerda o campo 'Tempo' no topo e os parâmetros de 'SETUP' abaixo, e à direita o medidor gráfico de precisão ou relógio de compassos, com [F5] CLICK e [F6] START no rodapé. 3) STROKE MONITOR mostra à esquerda Tempo e Pad, e à direita o gráfico de regularidade de velocidade (Uneven <-> Even), com [F4] CLEAR LOG, [F5] CLICK e [F6] CLICK ON/OFF. 4) BLAST BEAST mostra Mode (POWER x SPEED ou SPEED) e Pad, recorde pessoal (BEST) e contador regressivo de 10 segundos, com [F1] CLEAR BEST e [F5] START.",
    fButtonsTable: [
      { button: "[F1] (SELECT / CLEAR BEST)", label: "Selecionar Frase ou Limpar Recorde", action: "Em PHRASE TRAINER, seleciona a guia de escolha de exercício. Em BLAST BEAST, [F1] (CLEAR BEST) apaga a maior pontuação registrada." },
      { button: "[F2] (SETUP em PHRASE TRAINER)", label: "Configurar Phrase Trainer", action: "Em PHRASE TRAINER, abre as configurações de Kit, Score LED e Score Mark." },
      { button: "[F3] (PREVIEW em PHRASE TRAINER)", label: "Ouvir Demonstração", action: "Em PHRASE TRAINER, ouve a frase de exemplo antes de praticar." },
      { button: "[F4] (CLICK / CLEAR LOG)", label: "Clique ou Limpar Histórico", action: "Em PHRASE TRAINER, liga/desliga o clique. Em STROKE MONITOR, [F4] (CLEAR LOG) limpa o gráfico de batidas." },
      { button: "[F5] (START / CLICK)", label: "Iniciar ou Configurar Clique", action: "Em PHRASE TRAINER e BLAST BEAST, [F5] (START) inicia o treino. Em TIME CHECK, QUIET COUNT, AUTO UP/DOWN e STROKE MONITOR, [F5] (CLICK) abre as configurações do metrônomo." },
      { button: "[F6] (START / STOP / CLICK)", label: "Iniciar/Parar Exercício", action: "Em TIME CHECK, QUIET COUNT e AUTO UP/DOWN, [F6] (START/STOP) inicia ou interrompe o treino. Em STROKE MONITOR, [F6] liga/desliga o metrônomo." }
    ],
    parameterTables: [
      {
        tableTitle: "1. PHRASE TRAINER e 2. TIME CHECK (Data List págs. 62–63)",
        note: "Em PHRASE TRAINER, quando 'Score LED' está ON, o LED do botão físico [KIT] muda de cor em tempo real conforme a precisão do seu toque (Perfect, Good, OK, Miss).",
        rows: [
          { parameter: "PHRASE TRAINER (Guia SELECT): CATEGORY", valueRange: "Exercises (Frases adequadas para praticar fundamentos básicos), Grooves & Fills (Frases adequadas para praticar levadas e viradas)", explanation: "Seleciona a categoria e a frase de estudo.", arrowPosition: "PHRASE TRAINER > [F1] SELECT" },
          { parameter: "PHRASE TRAINER (Guia SETUP): Kit", valueRange: "001–200", explanation: "Seleciona o Drum Kit usado no exercício.", arrowPosition: "PHRASE TRAINER > [F2] SETUP: 1ª linha" },
          { parameter: "PHRASE TRAINER (Guia SETUP): Score LED", valueRange: "OFF, ON", explanation: "Quando 'ON', o botão físico [KIT] acende de acordo com a precisão do tempo em que você bate no pad.", arrowPosition: "PHRASE TRAINER > [F2] SETUP: 2ª linha" },
          { parameter: "PHRASE TRAINER (Guia SETUP): Score Mark", valueRange: "Type1–4", explanation: "Seleciona o estilo visual dos ícones de avaliação na tela (Type 1 a 4).", arrowPosition: "PHRASE TRAINER > [F2] SETUP: 3ª linha" },
          { parameter: "TIME CHECK: Tempo", valueRange: "20.0–260.0", explanation: "Andamento do metrônomo para o teste de precisão.", arrowPosition: "TIME CHECK: 1ª linha (seção CLICK)" },
          { parameter: "TIME CHECK: Length", valueRange: "4, 8, 16, 32 meas, INF", explanation: "Especifica o número de compassos a praticar antes de mostrar a nota final. Em 'INF', o treino continua indefinidamente até você pressionar [F6] (STOP).", arrowPosition: "TIME CHECK: 2ª linha (seção SETUP)" },
          { parameter: "TIME CHECK: Difficulty", valueRange: "EASY (Nível padrão), HARD (O tempo é avaliado com rigor muito maior)", explanation: "Define o rigor da linha de base para a pontuação.", arrowPosition: "TIME CHECK: 3ª linha" },
          { parameter: "TIME CHECK: Pad 1–4", valueRange: "OFF, KICK, SNARE, HI-HAT, TOM1–3, CRASH1–2, RIDE, AUX", explanation: "Seleciona até 4 tipos de pads que serão avaliados durante o treino.", arrowPosition: "TIME CHECK: linhas 4 a 7 (Pad 1 a Pad 4)" },
          { parameter: "TIME CHECK: Graph Direction", valueRange: "BEHIND-AHEAD (O lado esquerdo do gráfico mostra BEHIND/atrasado e o direito AHEAD/adiantado), AHEAD-BEHIND (O lado esquerdo mostra AHEAD/adiantado e o direito BEHIND/atrasado)", explanation: "Define a orientação esquerda/direita do medidor de tempo.", arrowPosition: "TIME CHECK: 8ª linha" }
        ]
      },
      {
        tableTitle: "3. QUIET COUNT, 4. AUTO UP/DOWN, 5. STROKE MONITOR e 6. BLAST BEAST (Data List págs. 63–64)",
        note: "Para apagar todas as pontuações/recordes do modo Coach de uma vez, há uma opção específica na tela SYSTEM > FACTORY RESET ('Reset with all coach scores').",
        rows: [
          { parameter: "QUIET COUNT: Tempo", valueRange: "20.0–260.0", explanation: "Andamento do metrônomo.", arrowPosition: "QUIET COUNT: 1ª linha" },
          { parameter: "QUIET COUNT: Measures", valueRange: "2, 4, 8, 16", explanation: "Especifica a duração total (em compassos) do ciclo no qual o metrônomo alternará entre 'Tocando' (Sounding) e 'Silencioso' (Quiet).", arrowPosition: "QUIET COUNT: 2ª linha" },
          { parameter: "QUIET COUNT: Quiet", valueRange: "RANDOM (A duração do intervalo silencioso muda aleatoriamente a cada ciclo), 1, 2, 4 (Número de compassos em silêncio; não pode ser maior que a metade do valor de 'Measures')", explanation: "Dos compassos definidos em 'Measures', especifica quantos compassos ficarão em silêncio para testar sua manutenção interna de tempo.", arrowPosition: "QUIET COUNT: 3ª linha" },
          { parameter: "AUTO UP/DOWN: Tempo", valueRange: "20.0–260.0", explanation: "Andamento inicial do metrônomo.", arrowPosition: "AUTO UP/DOWN: 1ª linha" },
          { parameter: "AUTO UP/DOWN: Max Tempo", valueRange: "20.0–260.0 (não pode ser menor que o andamento inicial)", explanation: "O andamento máximo que será atingido na subida.", arrowPosition: "AUTO UP/DOWN: 2ª linha" },
          { parameter: "AUTO UP/DOWN: Length", valueRange: "1UP (Sobe do andamento inicial até o máximo e para), 1UP-DOWN (Sobe do inicial ao máximo e desce de volta ao inicial), 3UP-DOWN (Sobe ao máximo e volta ao inicial repetindo 3 vezes), INF (Sobe e desce continuamente até pressionar [F6] STOP)", explanation: "Define como o ciclo de mudança de andamento se comporta.", arrowPosition: "AUTO UP/DOWN: 3ª linha" },
          { parameter: "AUTO UP/DOWN: Tempo Change Amount", valueRange: "1, 4, 5, 8, 10, 20 (BPM)", explanation: "Define a quantidade de BPM que o andamento muda a cada degrau.", arrowPosition: "AUTO UP/DOWN: 4ª linha" },
          { parameter: "AUTO UP/DOWN: Tempo Change Interval", valueRange: "2 beats, 1, 2, 4, 8, 16 meas", explanation: "Define o intervalo (a cada 2 tempos ou a cada 1, 2, 4, 8 ou 16 compassos) em que o andamento muda.", arrowPosition: "AUTO UP/DOWN: 5ª linha" },
          { parameter: "STROKE MONITOR: Tempo / Pad", valueRange: "Tempo: 20.0–260.0 / Pad: ALL, KICK, SNARE, etc.", explanation: "Permite praticar batidas com força/velocidade constante no pad selecionado, monitorando o desvio dinâmico.", arrowPosition: "STROKE MONITOR: linhas 1 e 2" },
          { parameter: "BLAST BEAST: Mode", valueRange: "POWER x SPEED (Avalia tanto a força/velocity quanto a velocidade com que você bate nos pads), SPEED (Avalia apenas a velocidade/quantidade de batidas nos pads)", explanation: "Seleciona o modo do desafio de resistência e explosão de 10 segundos.", arrowPosition: "BLAST BEAST: 1ª linha" },
          { parameter: "BLAST BEAST: Pad", valueRange: "ALL, KICK, SNARE, etc.", explanation: "Seleciona qual pad (ou todos os pads em ALL) será contabilizado no desafio de 10 segundos.", arrowPosition: "BLAST BEAST: 2ª linha" }
        ]
      }
    ],
    tipsAndNotes: [
      "Em TIME CHECK, QUIET COUNT e AUTO UP/DOWN, após pressionar [F6] (START), o módulo faz uma contagem inicial e no final dos compassos programados exibe a sua nota percentual na tela.",
      "Em STROKE MONITOR, você não precisa dar START: basta escolher o pad e tocar para monitorar imediatamente a consistência da sua mão ou pé."
    ]
  },
  {
    id: "song-rec",
    chapter: "Capítulo 17: SONG (Reprodução de Músicas) e REC (Gravação MIDI e Áudio)",
    title: "Reprodução de Músicas (SONG: Interna, Cartão SD, Loop A-B, Bluetooth e Exportação) e Gravação (REC: DRUM REC SMF e AUDIO REC WAV)",
    simulatorScreenId: "SONG_MAIN",
    summary: "Referência completa das funções de Música e Gravação (páginas 60 e 61 do Data List + Manual de Referência): tela [SONG] (4 fontes em SONG SOURCE: Internal 001–037, SD Card, Drum Rec Data e Audio Rec Data; repetição A-B; janela SETUP/INFO com Loop, Song Level e Click Track Level; e tela DRUM REC DATA EXPORT para exportar em SMF, WAV Drums, WAV Drums with Song ou SMF+WAV) e botão [●] (REC) com gravação DRUM REC (MIDI) e AUDIO REC (WAV 48kHz/24bit).",
    navigationSteps: [
      "Para abrir a tela SONG: pressione o botão físico [SONG] (coluna esquerda inferior, à direita do botão [●]).",
      "Para escolher a fonte da música: na tela SONG, pressione [F1] (SONG SOURCE), use [▲]/[▼] para escolher entre 'INTERNAL', 'SD CARD<Top>', 'DRUM REC DATA' ou 'AUDIO REC DATA' e pressione [ENTER].",
      "Gire o Disco para escolher a música desejada e pressione o botão físico [►/■] (Play/Stop) para tocar ou parar.",
      "Para configurar Loop, Volume da música ou ver informações: na tela SONG, pressione [F5] (SETUP/INFO).",
      "Para gravar sua performance: pressione o botão físico [●] (Record) para entrar em 'REC STANDBY...'. Pressione [F1] (REC MODE) se quiser alternar entre 'DRUM REC' (MIDI) e 'AUDIO REC' (WAV). Pressione o botão físico [►/■] (ou bata em um pad, em DRUM REC) para iniciar a gravação, e pressione [►/■] novamente para parar."
    ],
    screenLayoutDescription: "1) Tela SONG: no topo mostra a fonte atual e o número/nome da música (ex: 'INTERNAL 010 Rock 1 (AUDIO)' ou 'SD#001 V31.wav'), abaixo a barra de progresso de tempo (com marcadores A-B e controles de retrocesso/avanço). No rodapé da tela SONG (variando conforme a fonte): [F1] SONG SOURCE, [F2] Click Track (ON/OFF se houver *_click.wav) ou RENAME (em Drum Rec Data), [F3] A<->B (repetição de trecho), [F4] << / [F5] >> ou [F5] SETUP/INFO e [F6] EXPORT (quando a fonte é DRUM REC DATA). 2) Tela REC: exibe no centro 'REC STANDBY... Press [►/■] to Rec start', abaixo o seletor 'Rec Number' (TEMPORARY ou SD#01–99 / SD#001–200) e a caixa de seleção 'Play a song while recording' (ou 'Play and record a song', 'Rec Target' e 'Rec Gain' em AUDIO REC). No rodapé: [F1] REC MODE e [F5] Overwrite (quando aplicável).",
    fButtonsTable: [
      { button: "[F1] (SONG SOURCE em SONG / REC MODE em REC)", label: "Fonte da Música ou Modo de Gravação", action: "Na tela SONG, abre a janela para escolher INTERNAL, SD CARD<Top>, DRUM REC DATA ou AUDIO REC DATA. Na tela REC, alterna entre DRUM REC (MIDI) e AUDIO REC (WAV)." },
      { button: "[F2] (Click Track / RENAME)", label: "Click Track ou Renomear", action: "Em músicas do cartão SD com faixa *_click.wav, liga/desliga o Click Track. Em DRUM REC DATA, permite renomear a gravação." },
      { button: "[F3] (A<->B)", label: "Repetição A-B", action: "Durante a reprodução da música: pressione 1 vez no início do trecho para marcar o ponto A; pressione 1 vez no final do trecho para marcar o ponto B e ativar o loop A-B; pressione novamente para cancelar a repetição A-B." },
      { button: "[F5] (SETUP/INFO)", label: "Configurações e Info da Música", action: "Abre a janela SONG SETUP/INFO para ajustar Loop (OFF/ON), Song Level, Click Track Level e ver Song Bank, Song Name, Folder e Total Time." },
      { button: "[F6] (EXPORT em DRUM REC DATA)", label: "Exportar Gravação para SD", action: "Quando SONG SOURCE = DRUM REC DATA, abre a tela SONG EXPORT para converter e salvar a performance gravada no cartão SD como arquivo SMF (.mid), WAV (.wav) ou ambos (SMF+WAV)." }
    ],
    parameterTables: [
      {
        tableTitle: "SONG — Fontes, SETUP/INFO, Formatos de Áudio e Exportação (Data List págs. 60 e 119)",
        note: "As 37 músicas internas (INTERNAL 001–037, pág. 119) dividem-se em: 001–009 (Dados de performance de bateria MIDI: Drum Solo, Sound Check 1–3, Drum Phrase 16beat/Metal/Jazz/Funk/HipHop) e 010–037 (Dados de áudio: Rock 1–4, Jazz 1–5, Pop 1–6, Funk 1–5, Metal 1–3, Dance 1–3, DEMO SONG 1–2). No cartão SD, o V31 reproduz WAV (44,1/48 kHz, 16/24 bits) e MP3 (44,1/48 kHz, 64–320 kbps).",
        rows: [
          { parameter: "SONG SOURCE ([F1]): INTERNAL / SD CARD<Top> / DRUM REC DATA / AUDIO REC DATA", valueRange: "4 fontes de reprodução", explanation: "INTERNAL: 37 músicas internas. SD CARD<Top>: arquivos de áudio no diretório raiz do cartão SD (ou subpastas). DRUM REC DATA: performances de bateria gravadas como MIDI nesta unidade. AUDIO REC DATA: músicas gravadas nesta unidade como dados de áudio WAV.", arrowPosition: "SONG > [F1] SONG SOURCE" },
          { parameter: "SETUP/INFO ([F5]): Loop", valueRange: "OFF, ON", explanation: "Define se a música será reproduzida repetidamente em loop (ON) ou tocará apenas uma vez (OFF).", arrowPosition: "SONG > [F5] SETUP/INFO: 1ª linha" },
          { parameter: "SETUP/INFO ([F5]): Song Level", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume da música (dados de áudio). Também pode ser ajustado fisicamente pelo knob [BACKING].", arrowPosition: "SONG > [F5] SETUP/INFO: 2ª linha" },
          { parameter: "SETUP/INFO ([F5]): Click Track Level", valueRange: "-INF, -60.0–+6.0dB", explanation: "Volume da faixa de clique (apenas quando há um arquivo *_click.wav correspondente à música).", arrowPosition: "SONG > [F5] SETUP/INFO: 3ª linha" },
          { parameter: "SETUP/INFO ([F5]): INFO (Song Bank, Song Name, Folder, Total Time)", valueRange: "Somente leitura", explanation: "Exibe o local de salvamento, nome da música, pasta no cartão SD e tempo total de reprodução (Total Time não é exibido para músicas que contêm apenas performance de bateria MIDI).", arrowPosition: "SONG > [F5] SETUP/INFO: quadro inferior" },
          { parameter: "DRUM REC DATA EXPORT ([F6] *1): Export Type", valueRange: "SMF (Exporta a performance de bateria para formato MIDI SMF), WAV (Drums) (Exporta apenas a bateria para arquivo de áudio WAV), WAV (Drums with song) (Exporta a bateria junto com a música acompanhante para arquivo WAV; só disponível quando gravado junto com uma música), SMF+WAV (Exporta tanto um arquivo de áudio WAV quanto um arquivo SMF)", explanation: "Seleciona o formato de exportação da gravação DRUM REC para a pasta Roland/V31/Export/ do cartão SD.", arrowPosition: "SONG (DRUM REC DATA) > [F6] EXPORT: 1ª linha" },
          { parameter: "DRUM REC DATA EXPORT ([F6] *1): Kit", valueRange: "001–200", explanation: "Seleciona qual Drum Kit será usado para renderizar o som da sua bateria ao exportar para arquivo de áudio WAV (você pode gravar em DRUM REC e escolher o kit depois na hora de exportar!).", arrowPosition: "Tela EXPORT: 2ª linha" },
          { parameter: "DRUM REC DATA EXPORT ([F6] *1): Export Gain", valueRange: "0–+24dB", explanation: "Define o nível de ganho de saída ao exportar o arquivo de áudio. Pressione [F6] (►/■) para ouvir uma prévia e ajuste olhando os medidores de nível.", arrowPosition: "Tela EXPORT: 3ª linha" },
          { parameter: "DRUM REC DATA EXPORT ([F6] *1): Post Export Time", valueRange: "0–10sec", explanation: "Adiciona de 0 a 10 segundos extras ao final da exportação para evitar que o final da reverberação dos pratos seja cortado.", arrowPosition: "Tela EXPORT: 4ª linha" }
        ]
      },
      {
        tableTitle: "REC — Parâmetros da Tela de Gravação ([●]) (Data List pág. 61)",
        note: "*1 Disponível apenas quando Rec Mode é 'AUDIO REC'. *2 Disponível apenas quando Rec Mode é 'DRUM REC'. Para gravar em AUDIO REC, é obrigatório ter um cartão SD inserido no V31.",
        rows: [
          { parameter: "Rec Mode ([F1])", valueRange: "DRUM REC, AUDIO REC", explanation: "DRUM REC: Grava os dados de performance da bateria como eventos MIDI/SMF (permite trocar o kit depois e exportar como SMF ou WAV). AUDIO REC: Grava diretamente como arquivo de áudio WAV (48 kHz / 24 bits) no cartão SD.", arrowPosition: "Botão [F1] (REC MODE) na tela REC" },
          { parameter: "Rec Number", valueRange: "TEMPORARY (Grava na memória temporária interna: 1 música DRUM REC), SD#01–99 (DRUM REC no cartão SD), SD#001–200 (AUDIO REC no cartão SD; número definido automaticamente)", explanation: "Seleciona onde os dados gravados serão salvos.", arrowPosition: "Tela REC: campo Rec Number" },
          { parameter: "Rec Target *1 (Apenas em AUDIO REC)", valueRange: "ALL, DRUMS ONLY", explanation: "ALL: O áudio de entrada do conector MIX IN (STEREO) e o áudio reproduzido de um smartphone conectado via Bluetooth são gravados junto com a sua bateria. DRUMS ONLY: Apenas o som da sua bateria (e música interna/SD se marcada) é gravado.", arrowPosition: "Tela REC (AUDIO REC): Rec Target" },
          { parameter: "Rec Gain *1 (Apenas em AUDIO REC)", valueRange: "-24–+24dB", explanation: "Define o ganho de volume usado ao gravar áudio.", arrowPosition: "Tela REC (AUDIO REC): Rec Gain" },
          { parameter: "Play a song while recording *2 (Apenas em DRUM REC)", valueRange: "OFF, ON", explanation: "Defina como 'ON' para reproduzir a música selecionada enquanto grava no DRUM REC.", arrowPosition: "Tela REC (DRUM REC): caixa de seleção" },
          { parameter: "Play and record a song *1 (Apenas em AUDIO REC)", valueRange: "OFF, ON", explanation: "Defina como 'ON' para reproduzir e gravar a música selecionada junto com a sua bateria no AUDIO REC.", arrowPosition: "Tela REC (AUDIO REC): caixa de seleção" }
        ]
      }
    ],
    tipsAndNotes: [
      "Para tocar junto com músicas do seu smartphone via Bluetooth: vá em [KIT] -> [F4] (WIRELESS) -> ative Bluetooth (ON), ou vá em [MENU] -> SYSTEM -> Bluetooth -> pressione [F1] (PAIRING) para parear 'V31 AUDIO'. Ajuste o volume do celular com o knob físico [BACKING] no topo esquerdo do módulo.",
      "Em DRUM REC, você pode gravar na memória 'TEMPORARY' mesmo sem cartão SD, ouvir imediatamente apertando [►/■], e depois copiar ou exportar para o cartão SD quando quiser."
    ]
  },
  {
    id: "copy-backup-setlist-snapshot",
    chapter: "Capítulo 18: Utilitários — COPY, BACKUP, SET LIST e SNAPSHOT",
    title: "Utilitários Completos: COPY (9 Modos + Restaurar Kit Preset), BACKUP (Save/Load/Delete All e 1 Kit + Compatibilidade V71/V51), SET LIST (32x32) e SNAPSHOT",
    simulatorScreenId: "COPY_MENU",
    summary: "Referência completa dos 4 grandes utilitários de gerenciamento de dados do V31 (página 40–41 do Data List + Manual de Referência): COPY (KIT com restauração de fábrica Preset [F2], PAD INST, INST SET, VOL/PAN, AMBIENCE, BUS FX, OUTPUT, SET LIST, TRIG BANK e TRIG PRM com opção SWAP), BACKUP (SAVE, LOAD, DELETE de 1 a 99, SAVE 1 KIT, LOAD 1 KIT, DELETE 1 KIT de 1 a 999, leitura de kits do V71/V51, Auto Backup e INFO), SET LIST (32 bancos de 32 passos) e SNAPSHOT (comparação CURRENT / SNAPSHOT / LAST SELECTED).",
    navigationSteps: [
      "Para BACKUP: Pressione [MENU] -> desça 2 vezes com [▼] na coluna esquerda até 'BACKUP' -> pressione [►] para escolher entre SAVE, LOAD, DELETE, SAVE 1 KIT, LOAD 1 KIT, DELETE 1 KIT ou INFO -> pressione [ENTER].",
      "Para COPY: Pressione [MENU] -> desça 3 vezes com [▼] na coluna esquerda até 'COPY' -> pressione [►] para escolher entre os 10 ícones (KIT, PAD INST, INST SET, VOL/PAN, AMBIENCE, BUS FX, OUTPUT, SET LIST, TRIG BANK, TRIG PRM) -> pressione [ENTER].",
      "Para restaurar apenas 1 Drum Kit para o padrão original de fábrica sem apagar o resto do módulo: vá em [MENU] -> 'COPY' -> 'KIT' ([ENTER]) -> pressione [F2] (PRESET) -> escolha o kit Preset de origem e o User Kit de destino -> pressione [F6] (COPY) -> confirme em 'OK' ([ENTER]).",
      "Para SET LIST: Na tela [KIT], pressione [F5] (TOOLS) -> selecione 'SET LIST' -> pressione [F6] (SELECT) ou [ENTER].",
      "Para SNAPSHOT: Na tela [KIT], pressione [F5] (TOOLS) -> selecione 'SNAPSHOT' -> pressione [F6] (SELECT) ou [ENTER]."
    ],
    screenLayoutDescription: "1) Categoria BACKUP: grade de 4 colunas por 2 linhas (Linha 1: SAVE, LOAD, DELETE, SAVE 1 KIT; Linha 2: LOAD 1 KIT, DELETE 1 KIT, INFO). 2) Categoria COPY: grade de 4 colunas por 3 linhas (Linha 1: KIT, PAD INST, INST SET, VOL/PAN; Linha 2: AMBIENCE, BUS FX, OUTPUT, SET LIST; Linha 3: TRIG BANK, TRIG PRM). Dentro de cada tela COPY, o lado esquerdo mostra a Origem (Source / From) e o lado direito mostra o Destino (Destination / To), com [F1] COPY/SWAP no rodapé esquerdo (ou [F2] PRESET em COPY KIT) e [F6] COPY (ou SWAP) no rodapé direito. 3) Tela SET LIST: exibe o Banco atual (1 a 32) no topo e os 32 passos (Step 01 a Step 32) em grade, permitindo girar o disco para avançar passo a passo na ordem do show.",
    fButtonsTable: [
      { button: "[F1] (COPY/SWAP) / [F2] (PRESET) em COPY", label: "Alternar Copy/Swap ou Kit Preset", action: "Nas telas COPY, alterna entre copiar (sobrescrever o destino) ou trocar/permutar (SWAP) origem e destino. Em COPY KIT, [F2] (PRESET) seleciona os 70 kits originais de fábrica como origem." },
      { button: "[F6] (COPY / SWAP / SAVE / LOAD / DELETE)", label: "Executar Operação", action: "Nas telas COPY e BACKUP, inicia a execução da operação selecionada e abre a janela de confirmação (CANCEL / OK)." },
      { button: "[F2] (◄ BANK) / [F3] (BANK ►) / [F5] (SETUP) em SET LIST", label: "Navegar e Editar Set List", action: "Troca entre os 32 bancos de Set List ([F2]/[F3]) ou abre a tela de edição do Set List ([F5] SETUP -> [F2] NAME para renomear ou [F3] STEP EDIT com [F5] INSERT e [F6] DELETE)." },
      { button: "[F1] (SAVE) / [F6] (RESTORE) em SNAPSHOT", label: "Salvar ou Restaurar Snapshot", action: "[F1] (SAVE) fotografa o estado atual do kit em edição; [F6] (RESTORE) reverte o kit atual para o estado selecionado (SNAPSHOT ou LAST SELECTED)." }
    ],
    parameterTables: [
      {
        tableTitle: "BACKUP — Parâmetros de SAVE, LOAD, DELETE, SAVE 1 KIT, LOAD 1 KIT, DELETE 1 KIT e INFO (Data List pág. 40)",
        note: "Na tela LOAD 1 KIT, você também pode carregar arquivos de backup de kit salvos nos módulos Roland V71 e V51 (pressionando o botão de seleção de modelo na tela LOAD 1 KIT), além de carregar dados de Backup Automático na tela LOAD.",
        rows: [
          { parameter: "SAVE: Backup Number", valueRange: "1–99", explanation: "Seleciona o número do arquivo de backup completo no cartão SD (de 1 a 99).", arrowPosition: "BACKUP > SAVE: 1ª linha" },
          { parameter: "SAVE: With User Samples", valueRange: "OFF, ON", explanation: "Seleciona se os User Samples importados também serão incluídos no backup.", arrowPosition: "BACKUP > SAVE: 2ª linha" },
          { parameter: "SAVE: Backup Name", valueRange: "Até 16 caracteres ([F2] NAME)", explanation: "Adiciona um nome identificador ao arquivo de backup.", arrowPosition: "BACKUP > SAVE: 3ª linha / [F2]" },
          { parameter: "LOAD: Backup Number", valueRange: "1–99 (ou Auto Backup)", explanation: "Seleciona o número do backup no cartão SD a ser carregado.", arrowPosition: "BACKUP > LOAD: 1ª linha" },
          { parameter: "LOAD: With User Samples", valueRange: "OFF, ON", explanation: "Seleciona se os User Samples do backup também serão carregados.", arrowPosition: "BACKUP > LOAD: 2ª linha" },
          { parameter: "LOAD: With Instrument Expansion Slots", valueRange: "OFF, ON", explanation: "Seleciona se a configuração de Slots de Instrument Expansions será carregada (a expansão precisa estar instalada no Rack do V31).", arrowPosition: "BACKUP > LOAD: 3ª linha" },
          { parameter: "DELETE: Backup Number", valueRange: "1–99", explanation: "Exclui o arquivo de backup completo selecionado do cartão SD.", arrowPosition: "BACKUP > DELETE: 1ª linha" },
          { parameter: "SAVE 1 KIT: Backup Kit / With User Samples / Backup Number", valueRange: "Backup Kit: 1–200 / With User Samples: OFF, ON / Backup Number: 1–999", explanation: "Seleciona qual Drum Kit (1 a 200) salvar individualmente no cartão SD, se inclui os User Samples daquele kit, e o número de destino no cartão SD (1 a 999).", arrowPosition: "BACKUP > SAVE 1 KIT: linhas 1 a 3" },
          { parameter: "LOAD 1 KIT: Backup Number / With User Samples / Destination Kit", valueRange: "Backup Number: 1–999 / With User Samples: OFF, ON / Destination Kit: 1–200", explanation: "Seleciona qual kit salvo no cartão SD (1 a 999, incluindo suporte a kits do V71 e V51) carregar, se inclui User Samples, e em qual posição de Drum Kit do V31 (1 a 200) ele será gravado.", arrowPosition: "BACKUP > LOAD 1 KIT: linhas 1 a 3" },
          { parameter: "DELETE 1 KIT: Backup Number", valueRange: "1–999", explanation: "Seleciona o número do backup de kit individual no cartão SD que você deseja excluir.", arrowPosition: "BACKUP > DELETE 1 KIT: 1ª linha" },
          { parameter: "INFO: ALL / 1 KIT", valueRange: "Somente leitura", explanation: "Exibe o número de backups completos salvos (ALL) e o número de backups de kits individuais salvos (1 KIT) no cartão SD.", arrowPosition: "BACKUP > INFO" }
        ]
      },
      {
        tableTitle: "COPY, SET LIST e SNAPSHOT — Todos os Modos e Operações (Manual de Referência + Data List págs. 3 e 41)",
        note: "Em COPY > INST SET, você pode copiar vários instrumentos de uma vez como um conjunto (por exemplo, copiar apenas o conjunto de Tons ou apenas o conjunto de Pratos de um kit para outro marcando as caixas de seleção correspondentes!).",
        rows: [
          { parameter: "COPY > KIT", valueRange: "User Kit (001–200), Preset Kit ([F2] 001–070) ou SD Card Kit -> User Kit (001–200)", explanation: "Copia ou troca (Swap) um Drum Kit inteiro. Pressione [F2] (PRESET) para restaurar qualquer um dos 70 kits originais de fábrica.", arrowPosition: "COPY > 1º ícone (Linha 1, Col. 1)" },
          { parameter: "COPY > PAD INST", valueRange: "Pad de Origem (de qualquer kit) -> Pad de Destino (do kit atual)", explanation: "Copia ou troca as configurações de instrumento de um pad individual.", arrowPosition: "COPY > 2º ícone (Linha 1, Col. 2)" },
          { parameter: "COPY > INST SET", valueRange: "Conjunto selecionado de pads (ex: Snare, Toms, Cymbals) de qualquer kit -> Kit atual", explanation: "Copia vários instrumentos juntos como um conjunto (use [F5] CHECK para marcar quais peças copiar e [F6] COPY para executar).", arrowPosition: "COPY > 3º ícone (Linha 1, Col. 3)" },
          { parameter: "COPY > VOL/PAN / AMBIENCE / BUS FX / OUTPUT / SET LIST / TRIG BANK / TRIG PRM", valueRange: "Origem -> Destino (Copy ou Swap)", explanation: "Copiam especificamente as configurações de VOLUME/PAN, AMBIENCE, BUS FX, OUTPUT, SET LIST, banco inteiro de TRIGGER (TRIG BANK 1–16) ou parâmetros de trigger de um pad individual (TRIG PRM).", arrowPosition: "COPY > ícones 4 a 10" },
          { parameter: "SET LIST (32 Bancos x 32 Etapas)", valueRange: "Bank 01–32 / Step 01–32 (Drum Kit 001–200)", explanation: "Permite programar a ordem exata de até 32 Drum Kits por banco (em até 32 bancos) e chamá-los em sequência girando o disco. Em [F5] (SETUP) -> [F3] (STEP EDIT), se a lista estiver vazia, mova o cursor até 'END' e gire o disco para adicionar kits; use [F5] (INSERT) para duplicar/inserir etapa e [F6] (DELETE) para remover etapa. Pressione [KIT] ou [EXIT] para desligar o modo Set List.", arrowPosition: "[KIT] > [F5] TOOLS > SET LIST" },
          { parameter: "SNAPSHOT (CURRENT / SNAPSHOT / LAST SELECTED)", valueRange: "3 memórias comparativas", explanation: "Permite comparar em tempo real o kit editado atual (CURRENT) com uma foto salva por você ([F1] SAVE -> SNAPSHOT) e com o kit exatamente como estava quando você o selecionou (LAST SELECTED). Pressione [F6] (RESTORE) para reverter definitivamente para a versão escolhida.", arrowPosition: "[KIT] > [F5] TOOLS > SNAPSHOT" }
        ]
      }
    ],
    tipsAndNotes: [
      "Ao tocar ao vivo usando SET LIST, se você repetir o mesmo Drum Kit em duas músicas diferentes do repertório, basta inserir esse kit nas respectivas etapas (Steps) do Set List: girar o disco um clique para a direita sempre avançará para a próxima música do show!",
      "Você pode importar diretamente pacotes de backup de 1 Kit criados nos módulos topo de linha Roland V71 e V51 usando MENU > BACKUP > LOAD 1 KIT."
    ]
  }
);

window.V31_MANUAL_SECTIONS.push(
  {
    id: "system-wifi-bt-audio-midi",
    chapter: "Capítulo 19: SYSTEM Parte 1 — Wi-Fi, Bluetooth e AUDIO IN",
    title: "Configurações Globais do Sistema (SYSTEM): Conexão Wi-Fi (Roland Cloud Connect e Atualização), Bluetooth (Áudio e MIDI) e AUDIO IN",
    simulatorScreenId: "SYSTEM_MENU",
    summary: "Referência completa dos primeiros menus da categoria SYSTEM (páginas 41 e 42 do Data List + Manual de Referência): visão geral dos 11 ícones de SYSTEM, configuração de Wi-Fi (Time Zone, Reset, conexão com app Roland Cloud Connect via [SHIFT] + [F1] SETUP e atualização de firmware via Wi-Fi), configuração de Bluetooth (pareamento de áudio com smartphone, Mix In/Bluetooth Audio Gain, Bluetooth MIDI e Device ID) e AUDIO IN.",
    navigationSteps: [
      "Pressione [MENU] -> desça 4 vezes com a seta [▼] na coluna esquerda até a 5ª e última categoria 'SYSTEM'.",
      "Pressione a seta para a direita [►] para entrar na grade de 11 ícones (4 colunas x 3 linhas) de SYSTEM:",
      "Linha 1: Coluna 1 = Wi-Fi, Coluna 2 = Bluetooth, Coluna 3 = AUDIO IN, Coluna 4 = TRIGGER.",
      "Linha 2: Coluna 1 = MIDI, Coluna 2 = OUTPUT, Coluna 3 = USB AUDIO, Coluna 4 = AUTO OFF.",
      "Linha 3: Coluna 1 = OPTION, Coluna 2 = INFO, Coluna 3 = FACTORY RESET.",
      "Selecione 'Wi-Fi', 'Bluetooth' ou 'AUDIO IN' e pressione [ENTER]."
    ],
    screenLayoutDescription: "1) Tela Wi-Fi: exibe à esquerda o status da conexão ('Wi-Fi Status: Ready to setup / Connected'), o seletor 'Time Zone' (UTC-12:00 a +14:00) e os dados de rede (MAC, SSID, RSSI, TIME); à direita exibe um código QR 2D para baixar o aplicativo Roland Cloud Connect. No rodapé: [F1] RESET (ou [SHIFT] + [F1] SETUP), [F2] MANUAL e [F6] Wi-Fi (ON/OFF). 2) Tela Bluetooth: exibe à esquerda o status ('Bluetooth Status: OFF / ON'), e 3 parâmetros: Mix In/Bluetooth Audio Gain, Bluetooth MIDI e Device ID. No rodapé: [F1] PAIRING (quando ligado), [F5] SET DEVICE ID e [F6] Bluetooth (ON/OFF). 3) Tela AUDIO IN: exibe no centro o parâmetro 'Mix In/Bluetooth Audio Gain' (0dB, +6dB, +12dB).",
    fButtonsTable: [
      { button: "[F1] (RESET) / [SHIFT] + [F1] (SETUP) em Wi-Fi", label: "Resetar ou Configurar Wi-Fi", action: "Em Wi-Fi, [F1] (RESET) limpa a rede atual para trocar de roteador; [SHIFT] + [F1] (SETUP) inicia a configuração de Wi-Fi pelo aplicativo Roland Cloud Connect." },
      { button: "[F2] (MANUAL) em Wi-Fi", label: "Código QR do Manual", action: "Exibe na tela um código 2D (QR Code) para acessar a página web do manual e suporte do V31 no smartphone." },
      { button: "[F6] (Wi-Fi / Bluetooth)", label: "Ligar/Desligar Sem Fio", action: "Liga (ON) ou desliga (OFF) a função Wi-Fi (na tela Wi-Fi) ou Bluetooth (na tela Bluetooth)." },
      { button: "[F1] (PAIRING) / [F5] (SET DEVICE ID) em Bluetooth", label: "Parear ou Salvar ID", action: "Na tela Bluetooth, [F1] (PAIRING) inicia o modo de pareamento com o smartphone; [F5] (SET DEVICE ID) salva o novo número de Device ID configurado." }
    ],
    parameterTables: [
      {
        tableTitle: "SYSTEM > Wi-Fi, Bluetooth e AUDIO IN (Data List págs. 41–42)",
        note: "Em alguns países ou regiões, pode não ser possível utilizar a função Wi-Fi. Quando o V31 está conectado ao Wi-Fi, ele também pode verificar e baixar atualizações de firmware diretamente pela internet.",
        rows: [
          { parameter: "Wi-Fi: Time Zone", valueRange: "UTC-12:00–+14:00", explanation: "Configuração do fuso horário. Defina de acordo com a região em que você reside (ex: UTC-03:00 para Brasília) para que a autenticação com o Roland Cloud funcione corretamente.", arrowPosition: "Tela Wi-Fi: campo Time Zone" },
          { parameter: "Wi-Fi: Botão [F1] (RESET) e [SHIFT] + [F1] (SETUP)", valueRange: "Ação de configuração", explanation: "[F1] (RESET) redefine as configurações de Wi-Fi quando você quiser mudar de ponto de acesso. Segure [SHIFT] e pressione [F1] (SETUP) para configurar a rede Wi-Fi a partir do aplicativo Roland Cloud Connect no smartphone.", arrowPosition: "Tela Wi-Fi: botão [F1]" },
          { parameter: "Wi-Fi: Botão [F2] (MANUAL)", valueRange: "Exibe código 2D", explanation: "Mostra uma tela com código QR para acesso fácil à página web e suporte do V31.", arrowPosition: "Tela Wi-Fi: botão [F2]" },
          { parameter: "Wi-Fi: Botão [F6] (Wi-Fi)", valueRange: "OFF, ON", explanation: "Liga ou desliga o Wi-Fi para conectar o V31 ao app Roland Cloud Connect.", arrowPosition: "Tela Wi-Fi: botão [F6]" },
          { parameter: "Bluetooth: Botão [F6] (Bluetooth)", valueRange: "OFF, ON", explanation: "Liga ou desliga a funcionalidade Bluetooth desta unidade. Para parear o áudio com o celular, ligue em [F6], pressione [F1] (PAIRING) e selecione 'V31 AUDIO' nas configurações Bluetooth do smartphone.", arrowPosition: "Tela Bluetooth: botão [F6]" },
          { parameter: "Bluetooth / AUDIO IN: Mix In/Bluetooth Audio Gain", valueRange: "0, +6, +12 dB", explanation: "Define o ganho de volume de entrada para o conector físico MIX IN e para o áudio Bluetooth (compartilhado entre as telas Bluetooth e AUDIO IN).", arrowPosition: "Tela Bluetooth (1ª linha) e Tela AUDIO IN" },
          { parameter: "Bluetooth: Bluetooth MIDI", valueRange: "OFF, ON", explanation: "Liga ou desliga a funcionalidade Bluetooth MIDI. Quando 'ON', você pode conectar o V31 sem fio a aplicativos compatíveis com Bluetooth MIDI (como V-Drums Play, DAWs móveis, etc.) no smartphone ou tablet (selecione 'V31 MIDI' dentro do aplicativo).", arrowPosition: "Tela Bluetooth: 2ª linha" },
          { parameter: "Bluetooth: Device ID", valueRange: "OFF, 1–99", explanation: "Define o número identificador anexado ao nome Bluetooth da unidade no smartphone (ex: 'V31 AUDIO 1', 'V31 MIDI 1'), útil quando há mais de um V31 no mesmo local. Após alterar o valor, pressione [F5] (SET DEVICE ID) para aplicar e salvar!", arrowPosition: "Tela Bluetooth: 3ª linha + botão [F5]" }
        ]
      }
    ],
    tipsAndNotes: [
      "Importante sobre Bluetooth MIDI vs. Bluetooth Áudio: o 'V31 AUDIO' é pareado diretamente no menu de Configurações Bluetooth do sistema operacional do celular; já o 'V31 MIDI' NÃO deve ser pareado no menu do sistema do celular, e sim selecionado diretamente dentro do aplicativo musical compatível com Bluetooth MIDI.",
      "Para ajustar o volume da música que vem pelo Bluetooth ou pelo cabo MIX IN durante a performance, basta girar o knob físico [BACKING] no canto superior esquerdo do painel."
    ]
  },
  {
    id: "system-trigger-drumlink-dwe",
    chapter: "Capítulo 20: SYSTEM Parte 2 — TRIGGER Completo, Pads Digitais, DrumLink (DH-10/WT-10) e DWe",
    title: "Todas as Tabelas de TRIGGER (Bank, Digital, Basic, Curvas, Gráficos Scan/Mask/Retrigger, Hi-Hat, Advanced, Trig Mon, AUX/TOM4, XTalk), DrumLink e DWe (Calibração Passo a Passo)",
    simulatorScreenId: "TRIGGER_BANK",
    summary: "Referência completa e exaustiva de todas as configurações de acionadores físicos, digitais e sem fio (páginas 42 a 52 do Data List + Manual de Referência): TRIGGER (BANK 1–16, DIGITAL, BASIC com descrição textual das 8 curvas de velocidade e do gráfico de Threshold, HI-HAT com calibração de Offset, ADVANCED com descrição textual dos gráficos de Scan Time, Mask Time e Retrigger Cancel, TRIG MON, AUX/TOM4 e XTALK), lista completa de Trig Types (pág. 47) e métodos de toque (pág. 48), e configuração completa sem fio DrumLink (DH-10 / WT-10) e DWe (HUB, BASIC, CURVE, OPT/ADV para KD/PD/VH/CY/RT/DWe, INPUT CONFIG Hi-Hat e 2 Zone, e calibração passo a passo da pele, corpo e pedal DWe).",
    navigationSteps: [
      "Pressione [MENU] -> desça 4 vezes até 'SYSTEM' -> pressione [►] e selecione o 4º ícone da Linha 1 (Coluna 4) 'TRIGGER' -> pressione [ENTER].",
      "Na tela TRIGGER, use os botões [F1] a [F5] para acessar as 5 guias principais: [F1] (BANK), [F2] (DIGITAL), [F3] (BASIC), [F4] (HI-HAT) e [F5] (ADVANCED).",
      "Para acessar as 4 guias adicionais de TRIGGER (TRIG MON, AUX/TOM4, DrumLink e XTALK): mantenha o botão [SHIFT] pressionado na tela TRIGGER e pressione os botões de função correspondentes ([SHIFT] + [F1] a [F5]), ou entre na guia ADVANCED.",
      "Para calibrar o chimbal analógico (VH-10 / VH-11 / VH-12 / VH-13) ou digital (VH-14D): vá na guia [F4] (HI-HAT), solte o prato superior do chimbal para repousar fechado sobre o inferior/sensor, e ajuste o parâmetro 'Offset' (ou pressione o botão de calibração) até que o indicador na tela fique centralizado na marca '><'.",
      "Para calibrar os pads sem fio DWe: na tela DrumLink, pressione [F2] (BASIC), [F3] (CURVE) ou [F4] (OPT/ADV) -> pressione [F5] (TOOLS) -> bata no pad DWe a calibrar -> selecione [CALIBRATE DRUM], [CALIBRATE BOW] ou [CALIBRATE PEDAL] e pressione [ENTER]."
    ],
    screenLayoutDescription: "Na tela TRIGGER: 1) Guia [F1] (BANK) mostra no topo 'Bank No.' (01–16), o nome do banco (ex: 'TD316') e 'Global Sens' (LOW/NORMAL/HIGH), e abaixo uma grade em 2 colunas listando o Trig Type atual de cada entrada (KICK, SNARE, TOM1–3, HI-HAT, CRASH1–2, RIDE, AUX/TOM4), com [F6] BANK NAME no rodapé. 2) Guia [F2] (DIGITAL) lista os pads conectados via USB Digital à esquerda, a atribuição 'Assign' no centro e 'Digital Pad Settings' à direita, com [F6] DEFAULT. 3) Guia [F3] (BASIC) mostra Trig Type, Sensitivity, Threshold, Curve, Rim Gain e Head/Rim Adjust, acompanhados do gráfico da curva e medidor de velocidade. 4) Guia [F4] (HI-HAT) mostra Trig Type, Offset, Foot Splash Sens, Noise Cancel, CC Max, Pressure Sens e o medidor gráfico de abertura/fechamento. 5) Guia [F5] (ADVANCED) mostra Scan Time, Mask Time, Retrigger Cancel, Position Detect Head/Rim, ExtNoiseCancel e XStick Threshold.",
    fButtonsTable: [
      { button: "[F1] (BANK)", label: "Guia BANK", action: "Seleciona um dos 16 bancos de configurações de Trigger (Bank 1–16), ajusta Global Sens e renomeia o banco ([F6] BANK NAME)." },
      { button: "[F2] (DIGITAL)", label: "Guia DIGITAL PAD", action: "Configura a atribuição (Pad Assign) e ajustes finos dos pads conectados à porta DIGITAL TRIGGER IN." },
      { button: "[F3] (BASIC)", label: "Guia BASIC", action: "Configura Trig Type, Sensitivity, Threshold, Curve, Rim Gain e Head/Rim Adjust de cada pad." },
      { button: "[F4] (HI-HAT)", label: "Guia HI-HAT", action: "Configura Offset (abertura/calibração), Foot Splash Sens, Noise Cancel, CC Max e Pressure Sens do chimbal." },
      { button: "[F5] (ADVANCED)", label: "Guia ADVANCED", action: "Configura Scan Time, Mask Time, Retrigger Cancel, Position Detect Head/Rim, ExtNoiseCancel e XStick Threshold." },
      { button: "[SHIFT] + [F1]–[F5] em TRIGGER", label: "TRIG MON / AUX-TOM4 / DrumLink / XTALK", action: "Acessa as abas complementares de Trigger: monitor de batidas em tempo real (TRIG MON), chave AUX/TOM4, configuração sem fio (DrumLink) e cancelamento de diafonia (XTALK)." }
    ],
    parameterTables: [
      {
        tableTitle: "TRIGGER — Guias BANK ([F1]) e DIGITAL ([F2]) (Data List págs. 42–45)",
        note: "Apenas o chimbal digital VH-14D suporta operação aberta/fechada quando atribuído à entrada [HI-HAT]. Se um pad digital estiver atribuído à mesma entrada de um pad analógico conectado ao chicote TRIGGER INPUT, o pad analógico não produzirá som.",
        rows: [
          { parameter: "BANK: Bank No.", valueRange: "1–16", explanation: "Seleciona o número do banco de acionadores (permite salvar até 16 configurações completas de kits físicos diferentes, como um kit em casa e um kit acústico com triggers no palco).", arrowPosition: "TRIGGER > [F1] BANK: topo esquerdo" },
          { parameter: "BANK: Bank Name ([F6])", valueRange: "Até 16 caracteres", explanation: "Nome do banco de acionadores atual.", arrowPosition: "TRIGGER > [F1] BANK: botão [F6]" },
          { parameter: "BANK: Global Sens", valueRange: "LOW, NORMAL, HIGH", explanation: "Ajusta a sensibilidade geral de todos os pads simultaneamente. Para uma faixa mais ampla de controle dinâmico (tocar forte), selecione 'LOW'. Para tocar com toque leve e soar alto facilmente, selecione 'HIGH'. Esta configuração vale para todos os bancos de trigger.", arrowPosition: "TRIGGER > [F1] BANK: topo direito" },
          { parameter: "DIGITAL: Pad Assign", valueRange: "N/A, KICK–AUX/TOM4 (Exemplos padrão: PD-14DSX/PD-140DS -> SNARE; CY-18DR -> RIDE; VH-14D -> HI-HAT)", explanation: "Especifica a qual entrada de trigger o pad conectado digitalmente é atribuído. Um pad digital definido como 'N/A' não é utilizado, prevalecendo o pad analógico conectado ao conector TRIGGER IN.", arrowPosition: "TRIGGER > [F2] DIGITAL: coluna Assign" },
          { parameter: "DIGITAL: Position Adjust", valueRange: "1–10", explanation: "Ajusta como o caráter tonal é afetado pela posição da batida (centro vs. borda). Valores menores ajustam em direção ao centro; valores maiores ajustam em direção à circunferência (borda).", arrowPosition: "TRIGGER > [F2] DIGITAL: coluna direita" },
          { parameter: "DIGITAL: Position Adjust LR", valueRange: "1–10", explanation: "Ajusta como o caráter tonal é afetado pela posição de batida esquerda-direita.", arrowPosition: "TRIGGER > [F2] DIGITAL: coluna direita" },
          { parameter: "DIGITAL: XStick Detect Sens", valueRange: "OFF, 1–5", explanation: "Ajusta a facilidade de usar a técnica de cross-stick pousando a mão na pele da caixa digital. Se definido como 'OFF', a técnica de cross-stick fica indisponível.", arrowPosition: "TRIGGER > [F2] DIGITAL: coluna direita" },
          { parameter: "DIGITAL: Strainer Lever Sens", valueRange: "1–5", explanation: "Configura a sensibilidade para o som mecânico de operação da alavanca do automático (PD-14DSX). Valores menores produzem som mais suave mesmo operando rápido; valores maiores produzem som mais alto mesmo operando devagar.", arrowPosition: "TRIGGER > [F2] DIGITAL: coluna direita" },
          { parameter: "DIGITAL: LED Brightness", valueRange: "OFF, 1–5", explanation: "Ajusta o brilho do indicador LED do automático na caixa PD-14DSX.", arrowPosition: "TRIGGER > [F2] DIGITAL: coluna direita" },
          { parameter: "DIGITAL: Choke Sens", valueRange: "OFF, 1–5", explanation: "Ajusta a sensibilidade da técnica de abafamento com a mão (choke) nos pratos/chimbal digitais. Se definido como 'OFF', o choke fica indisponível.", arrowPosition: "TRIGGER > [F2] DIGITAL: coluna direita" },
          { parameter: "DIGITAL: Bell Gain", valueRange: "0–3.2", explanation: "Ajusta o equilíbrio entre a força da batida na cúpula (bell shot) e o volume resultante. Com valores mais altos, obtém-se volume alto mesmo com batidas suaves na cúpula.", arrowPosition: "TRIGGER > [F2] DIGITAL: coluna direita" }
        ]
      },
      {
        tableTitle: "TRIGGER — Guia BASIC ([F3]) com Descrição Textual das 8 Curvas e do Gráfico de Threshold (Data List págs. 43–44)",
        note: "Ao especificar o 'Trig Type' (modelo do pad), todos os parâmetros de trigger (exceto alguns como cross-stick/xtalk) são ajustados automaticamente para valores ótimos daquele modelo de pad.",
        rows: [
          { parameter: "Trig Type", valueRange: "OFF, modelos de pads Roland (veja tabela completa da pág. 47 abaixo)", explanation: "Especifica o modelo físico de pad conectado a cada entrada. Defina como 'OFF' se nenhum pad estiver conectado àquela entrada. (Não pode ser alterado para uma entrada ocupada por um pad digital).", arrowPosition: "TRIGGER > [F3] BASIC: 1ª linha" },
          { parameter: "Sensitivity", valueRange: "1.0–32.0", explanation: "Ajusta a sensibilidade do pad para acomodar seu estilo pessoal de tocar. Aumentar este valor aumenta a sensibilidade, fazendo até batidas suaves soarem em alto volume. Diminuir reduz a sensibilidade, fazendo mesmo batidas fortes soarem em volume mais baixo.", arrowPosition: "TRIGGER > [F3] BASIC: 2ª linha" },
          { parameter: "Threshold (com descrição do gráfico A, B, C)", valueRange: "0–31", explanation: "Sensibilidade mínima do pad (limiar de disparo). Permite que um sinal de trigger seja recebido apenas quando a força da batida (velocidade) ultrapassa um nível determinado, evitando que o pad dispare por vibrações de outros tambores. Descrição do gráfico (pág. 43): o gráfico mostra uma linha horizontal tracejada ('Threshold') cortando três ondas de impacto A, B e C; as ondas pequenas A e C ficam abaixo da linha tracejada e NÃO produzem som, enquanto o pico da onda B ultrapassa a linha tracejada e PRODUZ som.", arrowPosition: "TRIGGER > [F3] BASIC: 3ª linha" },
          { parameter: "Curve (com descrição textual das 8 curvas gráficas)", valueRange: "LINEAR, EXP1, EXP2, LOG1, LOG2, SPLINE, LOUD1, LOUD2", explanation: "Controla como o volume (eixo vertical) muda em resposta à força da batida / dinâmica (eixo horizontal): 1) LINEAR: Uma reta diagonal perfeita de 45 graus; configuração padrão que produz a correspondência mais natural entre força e volume. 2) EXP1 e EXP2 (Exponenciais): A curva começa subindo devagar nas batidas fracas e inclina-se fortemente para cima nas batidas fortes (EXP2 é ainda mais acentuada que EXP1); comparada à LINEAR, dinâmicas fortes produzem uma mudança maior de volume. 3) LOG1 e LOG2 (Logarítmicas): A curva sobe rapidamente logo nas batidas suaves e achata no topo (LOG2 sobe ainda mais rápido que LOG1); comparada à LINEAR, tocar suavemente já produz uma grande mudança e volume alto. 4) SPLINE: Curva em formato de 'S' (começa baixa, dá um salto acentuado no meio da dinâmica e estabiliza no topo); produz mudanças extremas em resposta à dinâmica. 5) LOUD1 e LOUD2: A curva já parte de um volume alto desde a batida mais fraca (quase horizontal no topo, sendo LOUD2 ainda mais alta e plana que LOUD1); pouquíssima variação dinâmica, facilitando manter volumes fortes constantes (ideal ao usar triggers externos em tambores acústicos para disparo confiável).", arrowPosition: "TRIGGER > [F3] BASIC: 4ª linha" },
          { parameter: "Rim Gain", valueRange: "0–3.2", explanation: "Ajusta o equilíbrio entre a força de bater no aro (rim) ou borda (edge) e o volume do som. Aumente para que batidas suaves no aro soem alto; diminua se o aro estiver alto demais.", arrowPosition: "TRIGGER > [F3] BASIC: 5ª linha" },
          { parameter: "Head/Rim Adjust", valueRange: "0–80", explanation: "Especifica a facilidade de tocar nota na pele (head shot) vs. rimshot no aro. Se o som do aro (rim) sair quando você bate forte na pele, AUMENTE este valor. Se o som da pele (head) sair quando você toca um rimshot aberto ou suave, DIMINUA este valor. Faça alterações pequenas testando o pad, pois valores extremos podem fazer o som errado sair.", arrowPosition: "TRIGGER > [F3] BASIC: 6ª linha" }
        ]
      },
      {
        tableTitle: "TRIGGER — Guia HI-HAT ([F4]) e Guia ADVANCED ([F5]) com Descrição dos Gráficos de Scan Time, Mask Time e Retrigger Cancel (Data List págs. 44–46)",
        note: "Em HI-HAT: *1 Pads digitais além do VH-14D não suportam pedal de chimbal; *2 Offset e Noise Cancel aplicam-se a VH-12, VH-13 e VH-14D (para VH-10/VH-11 usa-se a calibração de Offset na tela); *3 CC Max aplica-se quando o tipo não é VH-12/13/14D; *4 Pressure Sens aplica-se apenas ao VH-14D.",
        rows: [
          { parameter: "HI-HAT: Trig Type", valueRange: "VH-10, VH-11, VH-12, VH-13, VH-14D, etc.", explanation: "Mesmo parâmetro Trig Type da guia BASIC para o chimbal.", arrowPosition: "TRIGGER > [F4] HI-HAT: 1ª linha" },
          { parameter: "HI-HAT: Offset *1, *2 (e Calibração do VH-10)", valueRange: "-100–+100", explanation: "Ajusta o ponto de abertura/fechamento do chimbal. Valores maiores ampliam a abertura. Exemplo de ajuste para o VH-10: 1) Separe o prato do sensor de movimento; 2) Solte o parafuso da presilha (clutch) para o prato pousar naturalmente sobre o sensor; 3) Na tela HI-HAT, gire o disco para ajustar o Offset até que a marca indicadora na tela coincida com a seta central de referência; 4) Aperte o parafuso da presilha na abertura desejada.", arrowPosition: "TRIGGER > [F4] HI-HAT: 2ª linha" },
          { parameter: "HI-HAT: Foot Splash Sens *1", valueRange: "-10–+10", explanation: "Ajusta a facilidade de produzir o som de 'foot splash' (pisar e soltar rapidamente o pedal do chimbal).", arrowPosition: "TRIGGER > [F4] HI-HAT: 3ª linha" },
          { parameter: "HI-HAT: Noise Cancel *1, *2", valueRange: "1–3", explanation: "Força de cancelamento de ruídos indesejados de corpo/borda ao pisar no pedal (foot close). Quanto maior o valor, mais difícil ocorrer ruído espúrio na pisada.", arrowPosition: "TRIGGER > [F4] HI-HAT: 4ª linha" },
          { parameter: "HI-HAT: CC Max *1, *3", valueRange: "90, 127", explanation: "Valor máximo de Control Change MIDI transmitido ao pisar totalmente no pedal do chimbal (não há necessidade de alterar ao usar apenas o V31).", arrowPosition: "TRIGGER > [F4] HI-HAT: 5ª linha" },
          { parameter: "HI-HAT: Pressure Sens *1, *4", valueRange: "1–5 (apenas VH-14D)", explanation: "Ajusta como o som do chimbal fechado muda conforme a pressão exercida no pedal após fechado. Valores maiores facilitam variar o som pressionando suavemente.", arrowPosition: "TRIGGER > [F4] HI-HAT: 6ª linha" },
          { parameter: "ADVANCED: Scan Time (com descrição do gráfico)", valueRange: "0ms–4.0ms", explanation: "Tempo de detecção do sinal do acionador. Como o tempo de subida da forma de onda varia ligeiramente conforme cada pad ou trigger acústico, batidas idênticas podem soar com volumes diferentes. Descrição do gráfico (pág. 45): mostra a janela de tempo 'Scan Time' desde o início da onda até o pico máximo de amplitude. Enquanto bate repetidamente com força constante, suba gradualmente de 0 ms até o volume estabilizar no nível mais alto. Como valores maiores aumentam a latência (atraso), mantenha no menor valor possível.", arrowPosition: "TRIGGER > [F5] ADVANCED: 1ª linha" },
          { parameter: "ADVANCED: Mask Time (com descrição do gráfico)", valueRange: "0ms–64ms", explanation: "Prevenção de disparo duplo (double triggering). Ao tocar bumbo, o batedor pode quicar e encostar uma segunda vez na pele imediatamente após a nota. Descrição do gráfico (pág. 45): mostra um segundo pulso menor logo após a batida principal dentro da janela 'Mask Time' com a legenda 'Sound not produced' (som não produzido). Qualquer sinal adicional que ocorra dentro dos milissegundos de Mask Time é ignorado. Valores muito altos podem omitir notas em rolos rápidos; ajuste para o menor valor possível.", arrowPosition: "TRIGGER > [F5] ADVANCED: 2ª linha" },
          { parameter: "ADVANCED: Retrigger Cancel (com descrição do gráfico)", valueRange: "1–16", explanation: "Detecção de atenuação irregular do sinal (essencial para triggers de bateria acústica). Descrição do gráfico (pág. 46): mostra uma onda decaindo cuja cauda sofre uma oscilação/distorção mais alta no 'Ponto A' (Retrigger), causando disparos falsos múltiplos com uma única batida. Enquanto Mask Time ignora tudo por tempo fixo, Retrigger Cancel analisa o decaimento da onda e filtra picos falsos na cauda. Aumente até parar o redisparo, mantendo no menor valor possível para não perder notas em rufos rápidos.", arrowPosition: "TRIGGER > [F5] ADVANCED: 3ª linha" },
          { parameter: "ADVANCED: Position Detect Head / Position Detect Rim", valueRange: "OFF, ON", explanation: "Liga ou desliga a detecção de posição de batida na pele (Head) e no aro (Rim).", arrowPosition: "TRIGGER > [F5] ADVANCED: 4ª e 5ª linhas" },
          { parameter: "ADVANCED: ExtNoiseCancel", valueRange: "OFF, 1–5", explanation: "Cancelamento de ruído externo para evitar que um tambor acústico com trigger RT-30K ou RT-30HR conectado com cabo estéreo nas entradas KICK, SNARE, TOM1–3 ou AUX/TOM4 dispare por vibração do ambiente ou de outros tambores sem trigger. (O RT-30H não suporta esta função).", arrowPosition: "TRIGGER > [F5] ADVANCED: 6ª linha" },
          { parameter: "ADVANCED: XStick Threshold", valueRange: "0–127", explanation: "Para pads analógicos, define a força limite que separa o som de cross-stick (batida mais fraca no aro) do som de rimshot aberto (batida mais forte). Valores maiores facilitam obter cross-stick; em '0', bater no aro sempre produz rimshot aberto. Para pads digitais com técnica de cross-stick, bater um cross-stick mais forte que este valor produzirá rimshot aberto.", arrowPosition: "TRIGGER > [F5] ADVANCED: 7ª linha" },
          { parameter: "TRIG MON / AUX/TOM4 / XTALK", valueRange: "TRIG MON: monitor visual / AUX/TOM4 Select: AUX ou TOM4 / XTalk Cancel Rate: 0–80", explanation: "TRIG MON mostra em tempo real a força (velocity) e o ponto de impacto de cada batida. AUX/TOM4 define se o conector traseiro AUX/TOM4 aciona o pad AUX ou o pad TOM 4. XTALK (XTalk Cancel Rate 0–80) define a força de cancelamento de diafonia (crosstalk) quando um pad (ex: Crash 1) dispara sem querer ao bater em outro pad no mesmo rack (ex: Tom 1); aumente o valor no pad que está disparando sozinho (ou use o assistente de configuração batendo no pad causador).", arrowPosition: "Guias TRIG MON, AUX/TOM4 e XTALK" }
        ]
      },
      {
        tableTitle: "Lista Completa de Trig Types e Recursos Suportados por Modelo de Pad (Data List págs. 47–48)",
        note: "*1 Em BT-1 SENS, aumenta a sensibilidade para batidas suaves mas eleva o risco de disparo por vibração. *2 Escolha RT-30H SN ao fixar um RT-30H na caixa. *3 Escolha RT-30H TM ao fixar um RT-30H em um tom. Na tabela de Entradas vs. Métodos (pág. 48): Brush sweep e Cross-stick funcionam apenas em SNARE; Bell shot funciona apenas em RIDE; Positional Sensing (Head) e Rim Shot Nuance funcionam em SNARE, TOM 1–3, AUX/TOM4, HI-HAT (apenas com VH-14D) e RIDE (Positional Sensing na pele, e Rim Shot Nuance apenas com CY-18DR).",
        rows: [
          { parameter: "Bumbos e Pedais (KD / KT): KD-A22, KD-22, KD-222, KD-220, KD-200, KD-20, KD-18, KD-180, KD-180L, KD-140, KD-12, KD-120, KD-85, KD-10, KD-9, KD-8, KD-7, KDQ-8, KT-10, KT-9", valueRange: "Apenas Head (Pele)", explanation: "Não utilizam Rim Shot, Bell Shot, Positional Sensing nem Choke Play.", arrowPosition: "Trig Type List (pág. 47)" },
          { parameter: "Pads de Madeira/Malha com Positional Sensing na Pele (PDA): PDA120, PDA100, PDA140F", valueRange: "Rim Shot: Sim / Pos. Sensing Head: Sim", explanation: "Suportam Rim Shot e Positional Sensing na pele (Head).", arrowPosition: "Trig Type List (pág. 47)" },
          { parameter: "Pads de Malha com Positional Sensing em Head e Rim: PD-12X, PD-12P, PD-128, PD-125X, PD-125, PD-10X, PD-10P, PD-108, PD-105X, PD-105, PD-85, PDX-100", valueRange: "Rim Shot: Sim / Pos. Sensing Head: Sim / Pos. Sensing Rim: Sim", explanation: "Suportam Rim Shot e detecção de posição tanto na pele (Head) quanto no aro (Rim).", arrowPosition: "Trig Type List (pág. 47)" },
          { parameter: "Pads de Duas Zonas (Head + Rim sem Pos. Sensing): PDA120L, PDA100L, PDX-12, PD-10H, PD-8H, PDX-8, PDX-6, PDQ-8S", valueRange: "Rim Shot: Sim", explanation: "Suportam pele e Rim Shot (PDQ-8 suporta apenas Head; PD-8 suporta Rim Shot e Choke Play).", arrowPosition: "Trig Type List (pág. 47)" },
          { parameter: "Chimbais (VH): VH-13, VH-12, VH-11, VH-10", valueRange: "Rim Shot: Sim / Choke Play: Sim", explanation: "Suportam corpo (Bow), borda (Edge/Rim) e abafamento com a mão (Choke).", arrowPosition: "Trig Type List (pág. 47)" },
          { parameter: "Pratos de 3 Zonas (Ride com Cúpula): CY-16R-T, CY-15R, CY-14R-T, CY-13R, CY-12R/C", valueRange: "Rim Shot: Sim / Bell Shot: Sim / Pos. Sensing Head: Sim / Choke Play: Sim", explanation: "Suportam borda, cúpula (quando aplicável na entrada RIDE), detecção de posição no corpo e Choke.", arrowPosition: "Trig Type List (pág. 47)" },
          { parameter: "Pratos de 2 Zonas com Pos. Sensing: CY-14C-T, CY-14C, CY-12C, CY-12C-T", valueRange: "Rim Shot: Sim / Pos. Sensing Head: Sim / Choke Play: Sim", explanation: "Suportam corpo, borda, detecção de posição no corpo e Choke.", arrowPosition: "Trig Type List (pág. 47)" },
          { parameter: "Pratos de 2 Zonas Compactos/Quiet: CY-8, CY-5, CYQ-12", valueRange: "Rim Shot: Sim / Choke Play: Sim", explanation: "Suportam corpo, borda e Choke.", arrowPosition: "Trig Type List (pág. 47)" },
          { parameter: "Barras, Genéricos e Triggers Acústicos: BT-1, BT-1 SENS *1, PAD1 (Rim+Choke), PAD2 (Rim), PAD3 (Rim+Choke), RT-30K (Head), RT-30HR (Head+Rim), RT-30H SN *2 (Head), RT-30H TM *3 (Head), RT-10K (Head), RT-10S (Head+Rim), RT-10T (Head)", valueRange: "Triggers externos e genéricos", explanation: "Configurações dedicadas para barra BT-1, pads genéricos 1–3 e triggers acústicos séries RT-30 e RT-10.", arrowPosition: "Trig Type List (pág. 47)" }
        ]
      },
      {
        tableTitle: "DrumLink (DH-10 / WT-10) e DWe — Guias HUB ([F1]), BASIC ([F2]) e CURVE ([F3]) (Data List págs. 48–49)",
        note: "Os valores (exceto 'Assign') são armazenados diretamente no adaptador WT-10 ou hub DrumLink, e não são salvos na operação BACKUP ALL do V31.",
        rows: [
          { parameter: "Guia HUB ([F1]): RF Channels Selection", valueRange: "Automatic, Manual", explanation: "Seleciona se o canal de rádio sem fio entre o hub DH-10/DrumLink e os pads é escolhido automaticamente (Automatic) ou manualmente (Manual).", arrowPosition: "DrumLink > [F1] HUB: 1ª linha" },
          { parameter: "Guia HUB ([F1]): Main Ch. / Ack Ch.", valueRange: "1 (2402 MHz), 2 (2423 MHz), 3 (2426 MHz), 4 (2448 MHz), 5 (2451 MHz), 6 (2474 MHz), 7 (2477 MHz), 8 (2480 MHz)", explanation: "Define os canais quando RF Channels Selection = Manual. 'Main Ch.' é usado na direção Hub -> Pad, e 'Ack Ch.' na direção Pad -> Hub. Não é permitido definir Main Ch. e Ack Ch. no mesmo canal!", arrowPosition: "DrumLink > [F1] HUB: 2ª e 3ª linhas" },
          { parameter: "Guia HUB ([F1]): Scan on Start-up / Disable RF Alerts", valueRange: "OFF, ON", explanation: "Scan on Start-up: quando Automatic, define se escaneia os canais ao iniciar o hub (ON/OFF). Disable RF Alerts: define se oculta (ON) ou exibe (OFF) alertas na tela em caso de interferência de rádio.", arrowPosition: "DrumLink > [F1] HUB: 4ª e 5ª linhas" },
          { parameter: "Guia HUB ([F1]): MIDI Output / Send Note Off", valueRange: "MIDI Output: Soft Only (apenas USB), Hub Only (apenas MIDI OUT), Soft+Hub (ambos) / Send Note Off: OFF, ON", explanation: "Ao conectar o V31 ao hub DH-10/DrumLink, use 'Soft Only' ou 'Soft+Hub'. Send Note Off define se envia mensagens Note Off na saída MIDI OUT do hub.", arrowPosition: "DrumLink > [F1] HUB: 6ª e 7ª linhas" },
          { parameter: "Guia BASIC ([F2]): Assign", valueRange: "N/A, KICK, SNARE, TOM1, TOM2, TOM3, HI-HAT, CRASH1, CRASH2, RIDE, AUX", explanation: "Especifica a qual entrada de acionador do V31 o pad sem fio conectado será atribuído.", arrowPosition: "DrumLink > [F2] BASIC: 1ª linha" },
          { parameter: "Guia BASIC ([F2]): Sensitivity / Threshold / Retrigger / Scan Time (ms) / Mask Time (ms)", valueRange: "Sensitivity: 1–16 / Threshold: 1–15 / Retrigger: 0–15 / Scan Time: 2.0–5.0 ms / Mask Time: 0–70 ms", explanation: "Ajustam sensibilidade, limiar mínimo, prevenção de redisparo, tempo de leitura de onda e máscara contra duplo disparo para os pads sem fio.", arrowPosition: "DrumLink > [F2] BASIC: linhas 2 a 6" },
          { parameter: "Guia CURVE ([F3]): Curve / Dynamic Range", valueRange: "Curve: USER (ajustado via app DWe Control), LINEAR, LOG1, LOG2, LOG3, POW1, POW2, POW3, EXP1, EXP2, EXP3 / Dynamic Range: 0–100", explanation: "Seleciona a curva de resposta de volume e a faixa dinâmica de batida (valores maiores de Dynamic Range estreitam a faixa, fazendo batidas suaves soarem alto).", arrowPosition: "DrumLink > [F3] CURVE: linhas 1 e 2" }
        ]
      },
      {
        tableTitle: "DrumLink e DWe — Guia OPT/ADV ([F4]), Janela INPUT CONFIG e Calibração DWe Passo a Passo (Data List págs. 49–52 + Manual)",
        note: "Na caixa DWe, quando Positional Sensing está 'ON', o parâmetro Pitch Bend configurável no aplicativo DWe Control é automaticamente desligado.",
        rows: [
          { parameter: "OPT/ADV (Comum a todos os pads): LED On Hit", valueRange: "OFF, ON", explanation: "Define se o LED integrado no pad/transmissor acende quando você bate no pad.", arrowPosition: "DrumLink > [F4] OPT/ADV" },
          { parameter: "OPT/ADV (Série KD): XTalk Cancel", valueRange: "OFF, 1–80", explanation: "Ajusta a sensibilidade de cancelamento de crosstalk nos bumbos série KD.", arrowPosition: "OPT/ADV (KD series)" },
          { parameter: "OPT/ADV (Série PD): Rim Gain / Rimshot / Head / XTalk Cancel", valueRange: "Rim Gain: 0.0–3.2 / Rimshot / Head: 0.0–15.5 / XTalk Cancel: OFF, 1–80", explanation: "Em pads série PD via WT-10, ajusta o ganho do aro, o ponto de cruzamento entre pele e rimshot (aumente se sair rimshot ao bater na pele; diminua se sair pele ao tocar rimshot) e o XTalk Cancel.", arrowPosition: "OPT/ADV (PD series)" },
          { parameter: "OPT/ADV (Série VH): Edge Gain / CC Max / Open Pedal Tune / Closed Pedal Tune / XTalk Cancel", valueRange: "Edge Gain: 0.0–3.2 / CC Max: 90, 127 / Open Pedal Tune: -7–0–+7 / Closed Pedal Tune: -7–0–+7 / XTalk Cancel: OFF, 1–80", explanation: "Em chimbais via WT-10, ajusta ganho de borda, CC máximo do pedal conectado em PAD2, ajuste fino de pedal aberto (use valor negativo se o CC não cair a zero ao soltar o pedal) e ajuste de posição fechada (valores menores fecham com menos força).", arrowPosition: "OPT/ADV (VH series)" },
          { parameter: "OPT/ADV (Série CY): Positional Sensing / Edge Gain / XTalk Cancel", valueRange: "Positional Sensing: OFF, ON (para CY-16R-T/15R/14R-T/13R/12R/C) / Edge Gain: 0.0–3.2 / XTalk Cancel: OFF, 1–80", explanation: "Ajustes de detecção de posição, ganho de borda e crosstalk para pratos série CY no WT-10.", arrowPosition: "OPT/ADV (CY series)" },
          { parameter: "OPT/ADV (Série RT): Rim Gain / Rimshot / Head / Ext Noise Cancel / XTalk Cancel", valueRange: "Rim Gain: 0.0–3.2 / Rimshot / Head: 0.0–15.5 / Ext Noise Cancel: 0–5 / XTalk Cancel: OFF, 1–80", explanation: "Ajustes para triggers acústicos série RT conectados ao WT-10.", arrowPosition: "OPT/ADV (RT series)" },
          { parameter: "OPT/ADV (DWe snare, tom): Rim Zone / Rimshot Zone / XStick Zone / Positional Sensing", valueRange: "OFF, ON (XStick Zone e Positional Sensing são exclusivos para a caixa DWe)", explanation: "Liga ou desliga individualmente a detecção de aro (Rim Zone), de rimshot (Rimshot Zone), de cross-stick (XStick Zone) e de posição de batida (Positional Sensing) nos tambores DWe.", arrowPosition: "OPT/ADV (DWe snare, tom)" },
          { parameter: "OPT/ADV (DWe snare, tom): Rimshot / Head / Rim / Rimshot / Positional Sensing Smoothness / Positional Sensing Range", valueRange: "Rimshot/Head: 0.0–15.5 (diminua se sair rimshot ao bater na pele; aumente se sair pele no rimshot) / Rim/Rimshot: 0.0–1.0 (diminua se sair rim no rimshot; aumente se sair rimshot ao bater só no aro) / Smoothness: 0–15 (caixa) / Range: 1–8 (caixa: valores maiores facilitam perto do centro; menores perto da borda)", explanation: "Ajustes finos de separação de zonas e detecção de posição dos tambores DWe.", arrowPosition: "OPT/ADV (DWe snare, tom)" },
          { parameter: "OPT/ADV (DWe crash, ride, hi-hat): FSR Auto Calibration / Bell / Bow / CC Smoothness / Closed Pedal Tune", valueRange: "FSR Auto Calibration: OFF, ON (apenas crash e ride: calibra automaticamente sensores de borda se a temperatura mudar) / Bell/Bow: 0.0–1.0 (diminua se sair cúpula ao bater no corpo; aumente se sair corpo na cúpula) / CC Smoothness: 0–15 (apenas hi-hat: resolução do movimento do pedal) / Closed Pedal Tune: -7–7 (apenas hi-hat: posição de fechamento)", explanation: "Ajustes avançados para pratos e chimbal sem fio DWe.", arrowPosition: "OPT/ADV (DWe crash, ride, hi-hat)" },
          { parameter: "Janela INPUT CONFIG (no WT-10): Hi-Hat / 2 Zone", valueRange: "Hi-Hat: OFF, ON / 2 Zone: OFF, ON", explanation: "Hi-Hat: defina 'ON' ao usar um pad conectado ao conector PAD1 do WT-10 como chimbal e o pedal controlador (FD-8/FD-9) conectado ao PAD2 do mesmo WT-10. 2 Zone: aparece ao usar um prato com suporte a cúpula (ex: CY-16R-T) no PAD1 do WT-10; em 'OFF', a entrada PAD2 é usada como cabo da cúpula (Bell) do prato em PAD1; em 'ON', o prato em PAD1 opera em 2 zonas e a entrada PAD2 fica livre para conectar outro pad independente (ex: um PDX-12)!", arrowPosition: "DrumLink > [F2] BASIC > INPUT CONFIG" },
          { parameter: "Calibração Passo a Passo dos Pads DWe ([F5] TOOLS -> CALIBRATE)", valueRange: "CALIBRATE DRUM (Caixa DWe), CALIBRATE BOW (Pratos/Chimbal DWe), CALIBRATE PEDAL (Pedal do Chimbal DWe)", explanation: "1) Acesse DrumLink -> pressione [F2] (BASIC), [F3] (CURVE) ou [F4] (OPT/ADV) -> pressione [F5] (TOOLS) -> bata no pad DWe. 2) Caixa DWe (Calibração da pele): selecione [CALIBRATE DRUM] ([ENTER]) -> selecione 'START' ([ENTER]) -> quando solicitado na tela, bata no ARO da caixa para concluir (sempre recalibre se alterar a tensão da pele!). 3) Prato de ataque/condução/chimbal DWe (Calibração do corpo): selecione [CALIBRATE BOW] ([ENTER]) -> selecione 'START' ([ENTER]) -> bata no CORPO do prato para concluir. 4) Chimbal DWe (Calibração do pedal): selecione [CALIBRATE PEDAL] ([ENTER]) -> selecione 'START' ([ENTER]) -> afrouxe o parafuso da presilha e reaperte mantendo os pratos superior e inferior separados por pelo menos 5 cm e pressione [ENTER] -> toque no prato do chimbal para calibrar a posição aberta -> afrouxe a presilha, deixe o prato na posição fechada, reaperte e pressione [ENTER] -> toque no prato para calibrar a posição fechada.", arrowPosition: "DrumLink > [F2]–[F4] > [F5] TOOLS" }
        ]
      }
    ],
    tipsAndNotes: [
      "Em SYSTEM > TRIGGER > DrumLink, você pode verificar o nível restante das pilhas de todos os adaptadores WT-10 e pads DWe conectados, bem como cancelar o pareamento (Unpair) ou atualizar o firmware do hub DH-10 e dos transmissores WT-10.",
      "Ao montar dois pads no mesmo suporte, se um disparar o outro por vibração mecânica, vá na guia XTALK e aumente o 'XTalk Cancel Rate' apenas o suficiente para eliminar o disparo falso sem cortar notas tocadas simultaneamente nos dois pads."
    ]
  }
);

window.V31_MANUAL_SECTIONS.push(
  {
    id: "system-output-usbaudio-option-info-reset",
    chapter: "Capítulo 21: SYSTEM Parte 3 — MIDI, OUTPUT, USB AUDIO, AUTO OFF, OPTION, INFO e FACTORY RESET",
    title: "Todas as Tabelas de MIDI, OUTPUT, USB AUDIO (32 Entradas / 30 Saídas e Roteamento), AUTO OFF, OPTION, INFO (Recuperação de Pad Digital) e FACTORY RESET (Padrão e Remoção de Licença)",
    simulatorScreenId: "USB_AUDIO",
    summary: "Referência completa das demais telas da categoria SYSTEM (páginas 53 a 59 do Data List + Manual de Referência): MIDI global (BASIC, CONTROL com todos os CCs e HH Note# Border, SYNC, PROG CHG e explicação de Local Control), OUTPUT (PAD MASTER, OTHER MST, KNOB TYPE, LOW CUT e MONITOR), USB AUDIO (Driver GENERIC vs. VENDOR, Roteamento NORMAL / PAD DIRECT IN / LOOPBACK, Tabela I/O e mapeamento completo dos 32 canais de entrada e 30 canais de saída), AUTO OFF, OPTION (Brilho LCD/LED, Kit View, Kit Phrase, Show Virtual Pad), INFO (Versão, Samples, SD Card, Digital Pad Update e Recuperação Passo a Passo com [SHIFT] + [F6] RECOVER) e FACTORY RESET (Padrão e Remoção de Licença Roland Cloud via [F1] REMOVE LIC).",
    navigationSteps: [
      "Pressione [MENU] -> desça 4 vezes na coluna esquerda até 'SYSTEM' -> pressione [►] para entrar na grade de ícones:",
      "Para MIDI: Linha 2, Coluna 1 ('MIDI') -> [ENTER]. Use [F1] (BASIC), [F2] (CONTROL), [F3] (SYNC) e [F4] (PROG CHG).",
      "Para OUTPUT: Linha 2, Coluna 2 ('OUTPUT') -> [ENTER]. Use [F1] (PAD MASTER), [F2] (OTHER MST), [F3] (KNOB TYPE), [F4] (LOW CUT) e [F5] (MONITOR).",
      "Para USB AUDIO: Linha 2, Coluna 3 ('USB AUDIO') -> [ENTER]. Use [F1] (ROUTING) e [F2] (MONITOR).",
      "Para AUTO OFF: Linha 2, Coluna 4 ('AUTO OFF') -> [ENTER].",
      "Para OPTION: Linha 3, Coluna 1 ('OPTION') -> [ENTER]. Use [F1] (LCD/LED), [F2] (KIT VIEW), [F3] (KIT PHRASE) e [F4] (UI CUSTOM).",
      "Para INFO: Linha 3, Coluna 2 ('INFO') -> [ENTER]. Use [F1] (VERSION), [F2] (SAMPLE), [F3] (SD CARD), [F4] (DIGITAL) e [F5] (LICENSES).",
      "Para FACTORY RESET: Linha 3, Coluna 3 ('FACTORY RESET') -> [ENTER]. Marque as caixas desejadas e pressione [F6] (EXECUTE) — ou pressione [F1] (REMOVE LIC) para restaurar apagando também a licença da Roland Cloud."
    ],
    screenLayoutDescription: "1) Tela SYSTEM MIDI: possui 4 abas no rodapé ([F1] BASIC, [F2] CONTROL, [F3] SYNC, [F4] PROG CHG) exibindo listas de parâmetros em 1 coluna central. 2) Tela OUTPUT: nas abas [F1] PAD MASTER e [F2] OTHER MST, exibe colunas verticais para cada pad ou fonte de áudio com chaves apontando para 'PHONES' e/ou 'MASTER'; na aba [F3] KNOB TYPE, configura o knob físico [MASTER/PHONES]; na aba [F4] LOW CUT, configura o corte de graves das saídas; na aba [F5] MONITOR, mostra os medidores de nível de cada saída. 3) Tela USB AUDIO: na aba [F1] ROUTING, exibe no topo Driver Mode (GENERIC/VENDOR), Input Gain, Output Gain, Volume Select Input MAIN/SUB e Audio Routing (NORMAL, PAD DIRECT IN, LOOPBACK), e na metade inferior um diagrama de blocos dinâmico ilustrando o fluxo de áudio entre V31 e Computador. 4) Tela FACTORY RESET: exibe o aviso de reinicialização e 3 caixas de seleção (Reset with User Samples, Reset with Instrument Expansion Slots, Reset with all coach scores), com [F1] REMOVE LIC à esquerda e [F6] EXECUTE à direita.",
    fButtonsTable: [
      { button: "[F1]–[F4] em MIDI", label: "BASIC / CONTROL / SYNC / PROG CHG", action: "Alterna entre as 4 guias de configuração MIDI global. Na guia CONTROL, [F6] (DEFAULT) restaura todos os números de Control Change para o padrão de fábrica." },
      { button: "[F1]–[F5] em OUTPUT", label: "PAD MASTER / OTHER MST / KNOB TYPE / LOW CUT / MONITOR", action: "Alterna entre o roteamento de saída dos pads, de outras fontes (Click, Song, Backing, Ambience, Bus FX), função do knob [MASTER/PHONES], filtro Low Cut e monitor de saída." },
      { button: "[F1] / [F2] em USB AUDIO", label: "ROUTING / MONITOR", action: "Alterna entre a tela de configuração/roteamento de áudio USB e os medidores de nível USB." },
      { button: "[F1]–[F4] em OPTION", label: "LCD-LED / KIT VIEW / KIT PHRASE / UI CUSTOM", action: "Configura o brilho da tela e dos LEDs ([F1]), exibição global da tela KIT ([F2]), trava global de frases ([F3]) e exibição dos Pads Virtuais ([F4])." },
      { button: "[F1]–[F6] em INFO", label: "VERSION / SAMPLE / SD CARD / DIGITAL / LICENSES / MANUAL-UPDATE", action: "Consulta informações do sistema. Na aba [F4] DIGITAL, [F6] (UPDATE) atualiza o firmware de um pad digital e [SHIFT] + [F6] (RECOVER) abre o assistente de recuperação de pad digital." },
      { button: "[F1] (REMOVE LIC) / [F6] (EXECUTE) em FACTORY RESET", label: "Remover Licença ou Executar Reset", action: "[F6] executa o Factory Reset padrão; [F1] abre a tela para apagar inclusive as licenças da Roland Cloud salvas na unidade." }
    ],
    parameterTables: [
      {
        tableTitle: "SYSTEM > MIDI — Guias BASIC ([F1]), CONTROL ([F2]), SYNC ([F3]) e PROG CHG ([F4]) + Explicação de Local Control e HH Note# Border (Data List págs. 53–54)",
        note: "Sobre o Local Control (pág. 54): ao usar uma DAW com os dados dos pads e o gerador de som do V31, desligue 'Local Control' (OFF) para desconectar internamente os pads do gerador de som, fazendo o sinal seguir a ordem: Pads -> DAW -> Gerador de som do V31. Sobre o HH Note# Border (pág. 54): no valor padrão de fábrica (127), a nota MIDI de chimbal fechado só é transmitida quando o pedal está totalmente pressionado; se quiser que a nota de chimbal fechado já seja transmitida mesmo com o pedal ligeiramente levantado, reduza este valor (ex: '90').",
        rows: [
          { parameter: "BASIC: MIDI Tx/Rx Sw", valueRange: "OFF, ON", explanation: "Liga ou desliga a transmissão e recepção global de mensagens MIDI.", arrowPosition: "MIDI > [F1] BASIC: 1ª linha" },
          { parameter: "BASIC: Global MIDI Channel", valueRange: "1–16Ch (Padrão: 10Ch)", explanation: "Canal MIDI global de transmissão e recepção.", arrowPosition: "MIDI > [F1] BASIC: 2ª linha" },
          { parameter: "BASIC: Program Change Tx / Program Change Rx", valueRange: "OFF, ON", explanation: "Liga ou desliga a transmissão (Tx) e a recepção (Rx) de mensagens de mudança de programa (troca de Drum Kit via MIDI).", arrowPosition: "MIDI > [F1] BASIC: 3ª e 4ª linhas" },
          { parameter: "BASIC: Soft Thru MIDI In", valueRange: "OFF (Não repassa), ON (MIDI OUT) (Repassa MIDI IN para MIDI OUT), ON (USB MIDI) (Repassa MIDI IN para a porta USB COMPUTER), ON (MIDI+USB) (Repassa MIDI IN tanto para MIDI OUT quanto para USB COMPUTER)", explanation: "Permite que dados de performance recebidos no conector físico MIDI IN sejam retransmitidos para MIDI OUT e/ou USB COMPUTER.", arrowPosition: "MIDI > [F1] BASIC: 5ª linha" },
          { parameter: "BASIC: Local Control", valueRange: "OFF, ON (Padrão: ON)", explanation: "Liga ou desliga a conexão interna entre os pads e o gerador de som do V31. Normalmente deixe em 'ON'; em 'OFF', bater nos pads envia apenas MIDI para fora sem acionar diretamente o som interno (a menos que retorne via DAW).", arrowPosition: "MIDI > [F1] BASIC: 6ª linha" },
          { parameter: "BASIC: Device ID", valueRange: "17–32", explanation: "ID de dispositivo para mensagens System Exclusive (altere apenas se quiser transmitir dados separados para duas ou mais unidades V31 ao mesmo tempo).", arrowPosition: "MIDI > [F1] BASIC: 7ª linha" },
          { parameter: "BASIC: Transmit Edit Data / Receive Exclusive", valueRange: "OFF, ON", explanation: "Especifica se alterações nos parâmetros do V31 são transmitidas como mensagens System Exclusive (Transmit Edit Data) e se mensagens SysEx são recebidas (Receive Exclusive).", arrowPosition: "MIDI > [F1] BASIC: 8ª e 9ª linhas" },
          { parameter: "CONTROL: Hi-Hat Pedal CC / Snare CC / Snare Angle CC / Snare Strainer CC / Ride CC / Ride LR CC / Toms/AUXs CC / Hi-Hat CC / Hi-Hat LR CC", valueRange: "OFF, MODULATION (1), BREATH (2), FOOT (4), EXPRESSION (11), GENERAL1 (16), GENERAL2 (17), GENERAL3 (18), GENERAL4 (19), GENERAL5 (80), GENERAL6 (81), GENERAL7 (82), GENERAL8 (83)", explanation: "Define qual número de Control Change (CC) é transmitido/recebido para: profundidade do pedal de chimbal (Hi-Hat Pedal CC), posição centro-borda da caixa (Snare CC), posição esquerda-direita da caixa digital PD-140DS/14DSX (Snare Angle CC), alavanca do automático da PD-14DSX (Snare Strainer CC), posição centro-frente do ride (Ride CC), posição esq-dir do CY-18DR (Ride LR CC), posição dos tons 1–3 e AUX (Toms/AUXs CC), posição centro-frente do VH-14D (Hi-Hat CC) e posição esq-dir do VH-14D (Hi-Hat LR CC). Pressione [F6] (DEFAULT) para restaurar os padrões.", arrowPosition: "MIDI > [F2] CONTROL: linhas 1 a 9" },
          { parameter: "CONTROL: HH Note# Border", valueRange: "0–127 (Padrão: 127)", explanation: "Especifica a posição do pedal na qual ocorre a transição da nota MIDI de chimbal aberto para a nota MIDI de chimbal fechado (reduza para ex: 90 se quiser que a nota fechada seja enviada mesmo com o pedal levemente aliviado).", arrowPosition: "MIDI > [F2] CONTROL: 10ª linha" },
          { parameter: "CONTROL: Hi-Resolution Velocity", valueRange: "OFF, ON", explanation: "Configuração para o prefixo de velocidade de alta resolução (CC#88). Quando 'ON', a velocidade é enviada em alta resolução (1.00–127.00) ao bater em um pad conectado digitalmente; quando 'OFF', usa a resolução padrão (1–127).", arrowPosition: "MIDI > [F2] CONTROL: 11ª linha" },
          { parameter: "CONTROL: Cymbal Choke Shot", valueRange: "OFF, ON", explanation: "Ativa/desativa o suporte à técnica de bater em um prato enquanto o segura abafado com a mão (choke shot). Em 'ON', bater no prato segurando a borda abafa o som imediatamente após o início; em 'OFF', o som não é abafado imediatamente.", arrowPosition: "MIDI > [F2] CONTROL: 12ª linha" },
          { parameter: "SYNC: Sync Mode / Clock Source / Sync Out", valueRange: "Sync Mode: INTERNAL, EXTERNAL / Clock Source: MIDI, USB MIDI / Sync Out: OFF, ON", explanation: "Define se o V31 opera com seu próprio relógio interno (INTERNAL) ou sincronizado a mensagens externas (EXTERNAL vindas do conector MIDI IN ou da porta USB MIDI), e se transmite MIDI Clock para fora (Sync Out).", arrowPosition: "MIDI > [F3] SYNC: linhas 1 a 3" },
          { parameter: "PROG CHG: MIDI Program Change", valueRange: "Bank0–PC0 a Bank1–PC127", explanation: "Permite especificar livremente a correspondência entre cada Drum Kit do V31 e os números de Bank Select / Program Change transmitidos e recebidos.", arrowPosition: "MIDI > [F4] PROG CHG" }
        ]
      },
      {
        tableTitle: "SYSTEM > OUTPUT — Roteamento de Saída Master/Phones, Knob Type e Low Cut (Data List pág. 55)",
        note: "Usando as guias PAD MASTER e OTHER MST, você pode enviar o metrônomo (CLICK), a faixa de clique (CLICK TRACK) ou o retorno do computador exclusivamente para os fones de ouvido ('PHONES (MASTER OFF)'), sem que vazem nas saídas MASTER OUT L/R enviadas para a mesa de som.",
        rows: [
          { parameter: "Guia PAD MASTER ([F1]): PAD OUTPUT ASSIGN MASTER", valueRange: "PHONES (MASTER OFF), PHONES+MASTER LR", explanation: "Especifica para cada pad individualmente se o som dele sai apenas nos fones de ouvido ('PHONES (MASTER OFF)') ou tanto nos fones quanto nas saídas principais ('PHONES+MASTER LR').", arrowPosition: "OUTPUT > [F1] PAD MASTER" },
          { parameter: "Guia OTHER MST ([F2]): OTHER OUTPUT ASSIGN MASTER", valueRange: "PHONES (MASTER OFF), PHONES+MASTER LR", explanation: "Especifica o destino de saída (apenas PHONES ou PHONES+MASTER LR) para a ambiência (Overhead, Room, Reverb, Kit Reso), BUS FX, áudio USB, músicas (Song), entrada MIX IN/Bluetooth e metrônomo (Click / Click Track).", arrowPosition: "OUTPUT > [F2] OTHER MST" },
          { parameter: "Guia KNOB TYPE ([F3]): MASTER/PHONES Knob Type", valueRange: "MASTER/PHONES, PHONES", explanation: "Configura o comportamento do knob físico [MASTER/PHONES] no painel superior: em 'MASTER/PHONES', ele ajusta simultaneamente o volume das saídas MASTER OUT e dos fones PHONES; em 'PHONES', ele ajusta apenas o volume dos fones de ouvido, enquanto as saídas MASTER OUT ficam em um volume fixo constante definido abaixo!", arrowPosition: "OUTPUT > [F3] KNOB TYPE: 1ª linha" },
          { parameter: "Guia KNOB TYPE ([F3]): Fixed Master Volume", valueRange: "-INF, -60.0–0.0dB", explanation: "Define o volume de saída fixo dos conectores MASTER OUT quando MASTER/PHONES Knob Type está definido como 'PHONES' (muito útil ao vivo para o técnico de som não sofrer variações quando você aumenta seu fone).", arrowPosition: "OUTPUT > [F3] KNOB TYPE: 2ª linha" },
          { parameter: "Guia LOW CUT ([F4]): Low Cut Freq / Master Low Cut / Phones Low Cut", valueRange: "Low Cut Freq: 20Hz, 25Hz, 31.5Hz, 40Hz, 50Hz, 63Hz, 80Hz, 100Hz, 125Hz, 160Hz, 200Hz / Master Low Cut: OFF, ON / Phones Low Cut: OFF, ON", explanation: "Corta a região de subgraves abaixo da frequência especificada (comum às saídas) e permite ativar/desativar esse corte independentemente para as saídas MASTER OUT e para a saída PHONES.", arrowPosition: "OUTPUT > [F4] LOW CUT: linhas 1 a 3" },
          { parameter: "Guia MONITOR ([F5])", valueRange: "Medidores de nível", explanation: "Monitora visualmente o volume de saída de cada conector.", arrowPosition: "OUTPUT > [F5] MONITOR" }
        ]
      },
      {
        tableTitle: "SYSTEM > USB AUDIO — Driver Mode, Ganho e Modos de Roteamento (NORMAL, PAD DIRECT IN, LOOPBACK) + Tabela I/O (Data List págs. 55–57)",
        note: "Após alterar o parâmetro 'Driver Mode' entre GENERIC e VENDOR, é necessário desligar e religar o V31 para que a mudança entre em vigor! No modo VENDOR, é necessário instalar o driver dedicado Roland V31 no computador.",
        rows: [
          { parameter: "Driver Mode (Guia ROUTING)", valueRange: "GENERIC, VENDOR", explanation: "GENERIC: Usa o driver padrão do sistema operacional (permite USB MIDI e áudio USB estéreo de 2 canais de gravação e 2 canais de reprodução). VENDOR: Usa o driver dedicado do V31 fornecido pela Roland (permite USB MIDI e áudio USB multicanal com 30 canais de saída/gravação para o computador e 32 canais de entrada/reprodução vindos do computador!). Reinicie o V31 após alterar.", arrowPosition: "USB AUDIO > [F1] ROUTING: 1ª linha à esquerda" },
          { parameter: "USB Audio Input Gain", valueRange: "-36–+12dB", explanation: "Ajusta o nível de entrada do áudio vindo via USB (comum para Input MAIN e SUB).", arrowPosition: "USB AUDIO > [F1] ROUTING: 2ª linha à esquerda" },
          { parameter: "USB Audio Output Gain", valueRange: "-24–+24dB", explanation: "Ajusta o nível de saída do áudio enviado via USB (comum a todas as saídas USB).", arrowPosition: "USB AUDIO > [F1] ROUTING: 3ª linha à esquerda" },
          { parameter: "Volume Select Input MAIN / Volume Select Input SUB", valueRange: "OFF, SONG, BACKING", explanation: "Especifica qual knob físico ajusta o volume de entrada do áudio USB (Input MAIN Ch 1–2 e Input SUB Ch 3–4): nenhum knob (OFF), knob SONG ou knob [BACKING].", arrowPosition: "USB AUDIO > [F1] ROUTING: topo direito" },
          { parameter: "Audio Routing (Ativo quando Driver Mode = VENDOR)", valueRange: "NORMAL, PAD DIRECT IN, LOOPBACK", explanation: "NORMAL (configuração padrão): V31 -> Computador envia MASTER OUT + saída direta de cada pad; Computador -> V31 recebe apenas MAIN e SUB (o áudio de PAD DIRECT IN fica silenciado). PAD DIRECT IN: Permite injetar diretamente as saídas de áudio USB do seu computador (ex: VST de bateria na DAW) dentro do mixer interno de cada pad do V31 para processá-los com os efeitos/ambiência do V31; para evitar realimentação (loopback), todas as saídas de áudio USB do V31 para o computador são silenciadas (mute). LOOPBACK: Habilita simultaneamente todas as entradas e todas as saídas de áudio USB (V31 -> Computador: MASTER OUT + saída direta de cada pad; Computador -> V31: MAIN, SUB + entrada direta em cada pad). Atenção: use LOOPBACK com extremo cuidado, pois pode gerar um loop de realimentação com som altíssimo dependendo das configurações da sua DAW!", arrowPosition: "USB AUDIO > [F1] ROUTING: 3ª linha à direita" },
          { parameter: "Tabela de Roteamento de Áudio USB (Audio routing I/O chart - pág. 57)", valueRange: "NORMAL vs. PAD DIRECT IN vs. LOOPBACK", explanation: "1) V31 -> Computador (MASTER OUT e Direct output of each pad): Ativo em NORMAL, Mudo (mute) em PAD DIRECT IN, Ativo em LOOPBACK. 2) Computador -> V31 (INPUT MAIN/SUB): Ativo em NORMAL, Ativo em PAD DIRECT IN, Ativo em LOOPBACK. 3) Computador -> V31 (PAD DIRECT IN Ch 5–32): Mudo (mute) em NORMAL, Ativo em PAD DIRECT IN, Ativo em LOOPBACK.", arrowPosition: "Data List pág. 57" }
        ]
      },
      {
        tableTitle: "SYSTEM > USB AUDIO — Mapa Completo dos 32 Canais de Entrada (Computer -> V31) e 30 Canais de Saída (V31 -> Computer) (Data List pág. 57)",
        note: "Disponíveis quando Driver Mode está configurado como 'VENDOR'. Todos os pares de canais são estéreo (L/R).",
        rows: [
          { parameter: "Entradas USB Audio (Computador -> V31): Canais 1 a 16", valueRange: "Ch1-2: MAIN / Ch3-4: SUB / Ch5-6: KICK / Ch7-8: SNARE / Ch9-10: TOM1 / Ch11-12: TOM2 / Ch13-14: TOM3 / Ch15-16: TOM4", explanation: "Destinos das entradas USB 1 a 16 vindas do computador (Ch 5 a 32 entram nos canais de mixer dos respectivos pads quando Audio Routing = PAD DIRECT IN ou LOOPBACK).", arrowPosition: "USB Audio Input Destination Settings (pág. 57)" },
          { parameter: "Entradas USB Audio (Computador -> V31): Canais 17 a 32", valueRange: "Ch17-18: HI-HAT / Ch19-20: CRASH1 / Ch21-22: CRASH2 / Ch23-24: RIDE / Ch25-26: AUX1 / Ch27-28: AUX2 / Ch29-30: AUX3 / Ch31-32: AUX4", explanation: "Destinos das entradas USB 17 a 32 vindas do computador.", arrowPosition: "USB Audio Input Destination Settings (pág. 57)" },
          { parameter: "Saídas USB Audio (V31 -> Computador): Canais 1 a 16", valueRange: "Ch1-2: MASTER / Ch3-4: KICK / Ch5-6: SNARE / Ch7-8: TOM1 / Ch9-10: TOM2 / Ch11-12: TOM3 / Ch13-14: TOM4 / Ch15-16: HI-HAT", explanation: "Origens das saídas USB 1 a 16 enviadas do V31 para gravação multipista na DAW do computador.", arrowPosition: "USB Audio Output Destination Settings (pág. 57)" },
          { parameter: "Saídas USB Audio (V31 -> Computador): Canais 17 a 30", valueRange: "Ch17-18: CRASH1 / Ch19-20: CRASH2 / Ch21-22: RIDE / Ch23-24: AUX1 / Ch25-26: AUX2 / Ch27-28: AUX3 / Ch29-30: AUX4", explanation: "Origens das saídas USB 17 a 30 enviadas do V31 para o computador.", arrowPosition: "USB Audio Output Destination Settings (pág. 57)" }
        ]
      },
      {
        tableTitle: "SYSTEM > AUTO OFF, OPTION, INFO (Com Recuperação de Pad Digital Passo a Passo) e FACTORY RESET (Com Remoção de Licença) (Data List págs. 58–59 + Manual)",
        note: "Antes de executar um Factory Reset, salve seus dados importantes no cartão SD usando MENU > BACKUP > SAVE. Após concluir o Factory Reset, a tela HI-HAT OFFSET CALIBRATION aparece automaticamente para calibrar o chimbal.",
        rows: [
          { parameter: "AUTO OFF: Auto Off", valueRange: "OFF (Não desliga automaticamente), 20 minutes (Desliga após 20 minutos sem tocar ou operar), 4 hours (Desliga após 4 horas sem tocar ou operar)", explanation: "Define se a unidade desligará automaticamente após um período de inatividade para economizar energia.", arrowPosition: "SYSTEM > AUTO OFF" },
          { parameter: "OPTION (Guia LCD/LED [F1]): LCD Brightness / LED Brightness", valueRange: "LCD Brightness: 1–16 / LED Brightness: 0–15", explanation: "Ajusta o brilho do visor LCD (1 a 16) e o brilho do botão [KIT] e do indicador do automático da caixa (0 a 15; em 0 ficam apagados).", arrowPosition: "OPTION > [F1] LCD/LED" },
          { parameter: "OPTION (Guia KIT VIEW [F2]): Kit Image / Kit Name Size", valueRange: "Kit Image: OFF, ON / Kit Name Size: SMALL, MEDIUM, LARGE", explanation: "Define a configuração global de imagem de fundo e tamanho de fonte da tela KIT (aplicada a todos os kits cujo KIT VIEW individual esteja em 'GLOBAL').", arrowPosition: "OPTION > [F2] KIT VIEW" },
          { parameter: "OPTION (Guia KIT PHRASE [F3]): Kit Phrase Play", valueRange: "OFF, ON", explanation: "Ativa ou desativa globalmente a reprodução de frases demonstrativas na tela KIT (defina 'OFF' para shows ao vivo).", arrowPosition: "OPTION > [F3] KIT PHRASE" },
          { parameter: "OPTION (Guia UI CUSTOM [F4]): Show Virtual Pad", valueRange: "OFF, ON", explanation: "Define se os Pads Virtuais (TOM4/AUX1 e AUX2–4, indicados por borda laranja) são exibidos nas telas de edição do V31 (ON) ou ocultados (OFF).", arrowPosition: "OPTION > [F4] UI CUSTOM" },
          { parameter: "INFO: Guias VERSION ([F1]), SAMPLE ([F2]), SD CARD ([F3]), DIGITAL ([F4]) e LICENSES ([F5])", valueRange: "Informações e diagnóstico do sistema", explanation: "VERSION: mostra a versão do sistema, caixa 'Pop-up Notification for Updates' (avisa quando há atualização via Wi-Fi) e botão [F6] (MANUAL). SAMPLE: mostra 'Remaining Memory' e 'Imported Samples'. SD CARD: mostra o total de backups 'All' e '1 KIT' no cartão SD. DIGITAL: lista o modelo, 'Program Version' e 'Status' (OK ou Need to update; pressione [F6] UPDATE para atualizar) dos pads digitais conectados. LICENSES: mostra licenças de software.", arrowPosition: "SYSTEM > INFO: abas [F1] a [F5]" },
          { parameter: "Recuperação de Pad Digital Não Reconhecido Passo a Passo (DIGITAL PAD RECOVERY)", valueRange: "[SHIFT] + [F6] (RECOVER) na guia INFO > DIGITAL", explanation: "Se um pad digital foi desconectado durante uma atualização e deixou de ser reconhecido pelo V31, siga exatamente estes passos: 1) Pressione [MENU] -> 'SYSTEM' -> 'INFO' ([ENTER]) -> pressione [F4] (DIGITAL). 2) Mantenha [SHIFT] pressionado e pressione [F6] (RECOVER) para abrir a tela 'DIGITAL PAD RECOVERY'. 3) Desconecte todos os pads digitais da porta DIGITAL TRIGGER IN e pressione [F6] (NEXT). 4) Enquanto mantém pressionado o botão físico [FUNC] no próprio pad digital, conecte o cabo do pad digital à porta DIGITAL TRIGGER IN do V31 e pressione [F6] (NEXT). 5) Selecione o modelo do pad digital na lista e pressione [F6] (RECOVER). 6) Na confirmação, selecione 'OK' (seta [►]) e pressione [ENTER]. Aguarde até exibir 'Complete!' com status 'OK'.", arrowPosition: "INFO > [F4] DIGITAL > [SHIFT] + [F6] RECOVER" },
          { parameter: "FACTORY RESET: Padrão ([F6] EXECUTE)", valueRange: "3 caixas de seleção opcionais: Reset with User Samples / Reset with Instrument Expansion Slots / Reset with all coach scores", explanation: "Restaura o V31 para os padrões de fábrica. Use os cursores e o disco para marcar ou desmarcar se deseja também restaurar os User Samples de fábrica, os Slots de expansão e/ou apagar as pontuações do modo Coach. Pressione [F6] (EXECUTE) -> selecione 'OK' (seta [►]) -> pressione [ENTER].", arrowPosition: "SYSTEM > FACTORY RESET -> [F6] EXECUTE" },
          { parameter: "FACTORY RESET: Remoção Total de Licença da Roland Cloud ([F1] REMOVE LIC)", valueRange: "FACTORY RESET WITH USER LICENSE", explanation: "Redefine todas as configurações de fábrica e APAGA também os dados de licença da Roland Cloud salvos no V31 (essencial antes de vender ou transferir o módulo para outra pessoa). Na tela FACTORY RESET: 1) Pressione [F1] (REMOVE LIC) para abrir 'FACTORY RESET WITH USER LICENSE'. 2) Pressione [F6] (EXECUTE). 3) Selecione 'OK' (seta [►]) e pressione [ENTER].", arrowPosition: "SYSTEM > FACTORY RESET -> [F1] REMOVE LIC -> [F6] EXECUTE" }
        ]
      },
      {
        tableTitle: "Apêndice Integrado: Lista dos 70 Drum Kits Predefinidos (001–070) e Grupos dos 245 Instrumentos Internos (Data List págs. 108–111)",
        note: "Os kits 071 a 200 vêm inicialmente como 'User Kit' prontos para salvar suas próprias criações.",
        rows: [
          { parameter: "Drum Kits Predefinidos 001 a 035 (pág. 108)", valueRange: "001 Studio A | 002 Studio B | 003 Rock Energy | 004 Jazz Sizzle | 005 Massive Metal | 006 Vintage Loose | 007 Neo Funk | 008 Drum'n'Bass | 009 Pure Analog (Mid-O Style) | 010 Deep Rock | 011 Ghost Note King | 012 Live is Life (Live Pop Rock) | 013 Piccolo Funk (Voice Samples on Tom Rim) | 014 Bop Shop (Sizzle Swing) | 015 Dark & Open | 016 Modern Gospel | 017 JS Garage (Snare Explosion) | 018 Hall Ambience | 019 Vintage e-Drums (Hexagonal Pads) | 020 Crush Comp | 021 Dry & Muffled | 022 Blast Attack (Thrash Metal) | 023 Crisp Drive (Preamped Beatmaker) | 024 All Big Sizes (Big Arena) | 025 Large Room | 026 Vintage Comp | 027 12\"Ringing Snare | 028 Classic Rock | 029 Babylon Shuffle | 030 Hard Rock | 031 Jazz Legend (Floor Tom Kick) | 032 Funkifyer (Live Funk Studio) | 033 Jazzinator (Hybrid Jazz Gig) | 034 Pro Studio | 035 Viking Metal (Norwegian Metal)", explanation: "Primeira metade dos Drum Kits de fábrica do V31 (com seus respectivos subnomes entre parênteses).", arrowPosition: "Kits 001 a 035 na tela KIT" },
          { parameter: "Drum Kits Predefinidos 036 a 070 (pág. 108)", valueRange: "036 Shallow Pop | 037 Crossing Front | 038 Alternative Rock | 039 Acoustic Popper (Aggressive - Hip Hop) | 040 Heavy&Distorted | 041 Lowbit World (Bit Crusher) | 042 Gate in the Air (COMPRESSED) | 043 DIGIKIT! (SnappDkik) | 044 Synthetix | 045 Electro Synth | 046 UK Wet Booth | 047 UK Wet Studio | 048 LoFi Overdrive | 049 TR-808 (Transistor Rhythm) | 050 TR-909 (Transistor Rhythm) | 051 TR-707 (Transistor Rhythm) | 052 CR-78 (CompuRhythm) | 053 TR-909 Inspire | 054 TexMex FX | 055 R&B Ballad | 056 Mellow R&B | 057 The Big One (Tom Rim Bend) | 058 Detroit (Hip Hop) | 059 Dancing LA | 060 Junk Noise | 061 Orchestral (Pedal Bend) | 062 Mermaid (Steelpan) | 063 Bateria (Carnaval do Brasil) | 064 Latin Festa! | 065 Wild Drumming (Conga & Djembe) | 066 Ethnic Perc | 067 Camel Journey | 068 Air From Asia (Pedal Bend) | 069 Jazz Brushes (Small Room) | 070 Modern Brushes (Large Room w/ Sizzle)", explanation: "Segunda metade dos Drum Kits de fábrica do V31 (incluindo o kit brasileiro 063 Bateria - Carnaval do Brasil). Kits 071 a 200 são User Kits.", arrowPosition: "Kits 036 a 070 na tela KIT" },
          { parameter: "Grupos dos 245 Instrumentos Internos Preset (págs. 110–111)", valueRange: "0: OFF | 1–22: KICK | 23–34: KICK OTHERS | 35–56: SNARE | 57–67: CROSS STICK | 68–89: SNARE OTHERS | 90–130: TOM | 131–142: TOM OTHERS | 143–154: HI-HAT | 155–175: RIDE | 176–205: CRASH | 206–211: CHINA | 212–219: SPLASH | 220–225: STACKED CYMBAL | 226: BELL/CHIME/GONG | 227–231: BLOCK/COWBELL | 232–234: PERCUSSION | 235: CLAP | 236–245: ELEMENTS", explanation: "Numeração completa por grupo dos 245 timbres internos predefinidos na memória ROM do V31 (além dos mais de 760 instrumentos das expansões EXV001, EXV002 e EXV003 pré-instaladas).", arrowPosition: "Lista de Instrumentos Preset" }
        ]
      }
    ],
    tipsAndNotes: [
      "Especificações Técnicas Principais do V31: 200 Drum Kits; mais de 1.000 instrumentos; 500 User Samples (máx. 24 minutos mono / 12 minutos estéreo em 44,1 kHz, formatos WAV 44,1/48/96 kHz 16/24 bits); Visor LCD gráfico colorido 4,3 polegadas (480 x 272 dots backlit LCD); Cartão SD/SDHC até 32 GB; USB Audio 30 ch rec / 32 ch play (48 kHz, modo Vendor); Alimentação por adaptador AC (DC 12 V, consumo 1.000 mA); Dimensões: 306 (L) x 248 (P) x 106 (A) mm; Peso: 1,9 kg.",
      "Em caso de mensagens de erro como 'SD Card Full', 'SD Card Locked' (trava física no cartão SD), 'Sample Memory Full' (use OPTIMIZE ou exclua samples não usados) ou 'Unsupported Format' (converta para WAV 44,1/48 kHz 16/24 bits PCM linear), pressione [EXIT] ou [ENTER] e verifique o arquivo ou cartão."
    ]
  }
);
