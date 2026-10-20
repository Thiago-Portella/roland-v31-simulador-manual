/* ============================================================================
   ROLAND V31 / TD-316 — MOTOR COMPLETO DE OPERAÇÃO E NAVEGAÇÃO DO MÓDULO
   Gravação em memória (localStorage), navegação 2D por setas, Disco, F1–F6,
   integração dinâmica com os 200 Kits, 1.010 Instrumentos e 94 Efeitos BUS FX,
   e anúncios instantâneos para Leitores de Tela (NVDA).
   ============================================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "roland_v31_module_memory_v1";

  const PADS = [
    { id: "KICK", name: "KICK (Bumbo)", zones: ["HEAD"] },
    { id: "SNARE", name: "SNARE (Caixa)", zones: ["HEAD", "RIM", "XSTICK", "BRUSH"] },
    { id: "TOM1", name: "TOM 1", zones: ["HEAD", "RIM"] },
    { id: "TOM2", name: "TOM 2", zones: ["HEAD", "RIM"] },
    { id: "TOM3", name: "TOM 3 (Surdo)", zones: ["HEAD", "RIM"] },
    { id: "HI-HAT", name: "HI-HAT (Chimbal)", zones: ["BOW", "EDGE", "PEDAL"] },
    { id: "CRASH1", name: "CRASH 1", zones: ["BOW", "EDGE"] },
    { id: "CRASH2", name: "CRASH 2", zones: ["BOW", "EDGE"] },
    { id: "RIDE", name: "RIDE (Condução)", zones: ["BOW", "EDGE", "BELL"] },
    { id: "AUX", name: "AUX", zones: ["HEAD", "RIM"] },
    { id: "TOM4", name: "TOM 4", zones: ["HEAD", "RIM"] },
    { id: "AUX2", name: "AUX 2 (Virtual)", zones: ["HEAD", "RIM"] },
    { id: "AUX3", name: "AUX 3 (Virtual)", zones: ["HEAD", "RIM"] },
    { id: "AUX4", name: "AUX 4 (Virtual)", zones: ["HEAD", "RIM"] }
  ];

  // Estado Inicial do Módulo V31 (sempre inicia na tela KIT)
  const defaultState = {
    currentScreenId: "KIT",
    historyStack: [],
    // Na tela MENU: foco pode estar na coluna de categorias ("cat") ou na grade 4x3 ("grid")
    menuFocusArea: "cat",
    menuCategoryIndex: 0, // 0..4 (KIT EDIT, KIT OPTIONS, BACKUP, COPY, SYSTEM)
    menuGridIndex: 0,     // índice dentro da categoria atual
    // Cursor nas demais telas (índice em items[])
    cursorIndex: 0,
    // Kit, Pad e Zona atuais
    currentKitNo: 1,
    currentPadIndex: 1, // 1 = SNARE por padrão
    currentZoneIndex: 0,
    // Estados globais rápidos
    clickActive: false,
    clickTempo: 120.0,
    songPlaying: false,
    phrasePlaying: false,
    recActive: false,
    triggerLock: false,
    safetyMode: false,
    keyboardCaptureActive: true,
    activeBusFxUnit: "FX1",
    activeBusLetter: "A", // A, B, C, D na tela BUS_FX_EDIT
    instListTargetKey: "layerAInst",
    nameCharCursor: 0,
    abRepeatState: "OFF", // OFF, POINT_A, ACTIVE
    coachRunning: false,
    lastTapTime: 0,
    tapIntervals: [],
    screenEntrySnapshot: {},
    savedKitSnapshot: null,
    lastSelectedKitSnapshot: null,
    // Sistema de Favoritos (★) e alternância entre as 2 listas (ALL vs ★ Favoritos)
    favoriteKits: [],
    favFilterActive: false, // false = ►ALL ☆ (Todos os 200 Kits), true = ALL ►★ (Apenas Favoritos)
    // Estado temporário independente para as telas de Cópia (COPY) e Janela de Confirmação (CANCEL / OK)
    copySourceType: "USER", // "USER", "PRESET", "SD CARD"
    copySourceKit: 1,       // Lista temporária SOURCE (1..200)
    copyDestKit: 1,         // Lista temporária DESTINATION (1..200)
    confirmDialog: null,    // Objeto da tela de confirmação ativa (ou null)
    // Parâmetros gravados em memória (chave -> valor)
    params: {},
    // Kits favoritos e nomes customizados
    kitNames: {},
    kitSubNames: {}
  };

  let state = loadState();
  let liveToggle = false;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return Object.assign({}, defaultState, parsed, {
          currentScreenId: "KIT",
          historyStack: [],
          cursorIndex: 0,
          confirmDialog: null,
          copySourceType: parsed.copySourceType || "USER",
          copySourceKit: Math.max(1, Math.min(200, parseInt(parsed.copySourceKit, 10) || 1)),
          copyDestKit: Math.max(1, Math.min(200, parseInt(parsed.copyDestKit, 10) || 1)),
          favoriteKits: Array.isArray(parsed.favoriteKits) ? parsed.favoriteKits : [],
          favFilterActive: Boolean(parsed.favFilterActive),
          params: Object.assign({}, defaultState.params, parsed.params || {}),
          kitNames: Object.assign({}, defaultState.kitNames, parsed.kitNames || {}),
          kitSubNames: Object.assign({}, defaultState.kitSubNames, parsed.kitSubNames || {})
        });
      }
    } catch (e) {
      console.warn("Falha ao ler localStorage:", e);
    }
    return JSON.parse(JSON.stringify(defaultState));
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Falha ao gravar localStorage:", e);
    }
  }

  function resetAllMemory() {
    localStorage.removeItem(STORAGE_KEY);
    state = JSON.parse(JSON.stringify(defaultState));
    saveState();
    renderAll();
    announce("Memória restaurada aos padrões de fábrica. Tela DRUM KIT (KIT): 001 Studio A.");
  }

  // Anúncio imediato para NVDA / Leitores de Tela
  function announce(text) {
    const bannerEl = document.getElementById("last-announcement-text");
    if (bannerEl) {
      bannerEl.textContent = text;
    }
    const regionA = document.getElementById("nvda-live-a");
    const regionB = document.getElementById("nvda-live-b");
    if (!regionA || !regionB) return;

    liveToggle = !liveToggle;
    const activeRegion = liveToggle ? regionA : regionB;
    const inactiveRegion = liveToggle ? regionB : regionA;

    inactiveRegion.textContent = "";
    activeRegion.textContent = "";
    setTimeout(function () {
      activeRegion.textContent = text;
    }, 15);
  }

  // Funções do Sistema de Favoritos (★) e Alternância de Listas (ALL / ★)
  function getSortedFavorites() {
    if (!Array.isArray(state.favoriteKits)) {
      state.favoriteKits = [];
    }
    const clean = state.favoriteKits
      .map(function (n) { return parseInt(n, 10); })
      .filter(function (n) { return !isNaN(n) && n >= 1 && n <= 200; });
    const unique = Array.from(new Set(clean)).sort(function (a, b) { return a - b; });
    state.favoriteKits = unique;
    return unique;
  }

  function isKitFavorite(kitNo) {
    const num = parseInt(kitNo, 10);
    return getSortedFavorites().indexOf(num) !== -1;
  }

  // Obtém informações originais de fábrica (Preset) do Drum Kit (1 a 200), sem edições do usuário
  function getPresetKitInfo(kitNo) {
    const num = Math.max(1, Math.min(200, parseInt(kitNo, 10) || 1));
    const list = (window.V31_KITS_AND_LISTS && window.V31_KITS_AND_LISTS.drumKits) || [];
    const found = list.find(function (k) { return k.no === num || k.number === num; }) || {
      no: num,
      code: String(num).padStart(3, "0"),
      name: num <= 70 ? "Preset Kit " + num : "User Kit",
      subName: ""
    };
    return {
      no: num,
      code: String(num).padStart(3, "0"),
      name: found.name,
      subName: found.subName || ""
    };
  }

  // Obtém informações do Drum Kit do Usuário (1 a 200) na lista principal do módulo
  function getKitInfo(kitNo) {
    const num = Math.max(1, Math.min(200, parseInt(kitNo, 10) || 1));
    const found = getPresetKitInfo(num);
    const customName = state.kitNames[num];
    const customSub = state.kitSubNames[num];
    const fav = isKitFavorite(num);
    return {
      no: num,
      code: String(num).padStart(3, "0"),
      name: customName !== undefined ? customName : found.name,
      subName: customSub !== undefined ? customSub : (found.subName || ""),
      isFavorite: fav,
      starPrefix: fav ? "★ " : ""
    };
  }

  function toggleFavoriteKit(fLabel) {
    const favs = getSortedFavorites();
    const curNo = state.currentKitNo;
    const idx = favs.indexOf(curNo);
    let added = false;

    if (idx === -1) {
      favs.push(curNo);
      favs.sort(function (a, b) { return a - b; });
      state.favoriteKits = favs;
      added = true;
    } else {
      favs.splice(idx, 1);
      state.favoriteKits = favs;
      added = false;
    }

    const k = getKitInfo(curNo);
    saveState();
    renderAll();

    if (added) {
      announce(
        (fLabel || "F2") +
          " (★ Favoritar): Drum Kit " +
          k.code +
          " " +
          k.name +
          " ADICIONADO aos Favoritos (★)! Total de favoritos: " +
          state.favoriteKits.length +
          "."
      );
    } else {
      const extraMsg =
        state.favFilterActive && state.favoriteKits.length === 0
          ? " A lista de Favoritos agora está vazia. Pressione F4 para voltar à lista completa (►ALL ☆)."
          : "";
      announce(
        (fLabel || "F2") +
          " (☆ Desfavoritar): Drum Kit " +
          k.code +
          " " +
          k.name +
          " REMOVIDO dos Favoritos. Total de favoritos: " +
          state.favoriteKits.length +
          "." +
          extraMsg
      );
    }
  }

  function toggleFavoriteFilter(fLabel) {
    const favs = getSortedFavorites();
    state.favFilterActive = !state.favFilterActive;

    if (state.favFilterActive) {
      // Alternou para a lista Apenas Favoritos (ALL ►★)
      if (favs.length > 0 && favs.indexOf(state.currentKitNo) === -1) {
        state.currentKitNo = favs[0];
      }
      saveState();
      renderAll();
      if (favs.length === 0) {
        announce(
          (fLabel || "F4") +
            " (ALL ►★): Alternado para a Lista de FAVORITOS. Nenhum kit favoritado no momento (0 kits). Pressione F2 para favoritar o kit atual ou F4 para voltar para Todos os 200 Kits (►ALL ☆)."
        );
      } else {
        const k = getKitInfo(state.currentKitNo);
        const pos = favs.indexOf(state.currentKitNo) + 1;
        announce(
          (fLabel || "F4") +
            " (ALL ►★): Alternado para a Lista de FAVORITOS (" +
            favs.length +
            " kit(s) na lista). Selecionado item " +
            pos +
            " de " +
            favs.length +
            ": ★ Drum Kit " +
            k.code +
            " " +
            k.name +
            "."
        );
      }
    } else {
      // Alternou para a lista Completa de Todos os 200 Kits (►ALL ☆)
      saveState();
      renderAll();
      const k = getKitInfo(state.currentKitNo);
      announce(
        (fLabel || "F4") +
          " (►ALL ☆): Alternado para a Lista de TODOS OS KITS (200 kits, de 001 a 200). Selecionado item " +
          k.no +
          " de 200: " +
          k.starPrefix +
          "Drum Kit " +
          k.code +
          " " +
          k.name +
          "."
      );
    }
  }

  // Avança ou retrocede na lista ativa de Drum Kits (Todos os 200 Kits ou Apenas Favoritos)
  function stepKitSelection(delta, isShift, sourcePrefix) {
    const favs = getSortedFavorites();
    if (state.favFilterActive) {
      if (favs.length === 0) {
        announce(
          "Lista de Favoritos (ALL ►★) está vazia (0 kits). Pressione F2 para favoritar o kit atual ou F4 para alternar para Todos os 200 Kits (►ALL ☆)."
        );
        return;
      }
      const curIdx = favs.indexOf(state.currentKitNo);
      let nextIdx = 0;
      if (curIdx !== -1) {
        const step = (delta > 0 ? 1 : -1) * (isShift ? Math.min(5, favs.length) : 1);
        nextIdx = Math.max(0, Math.min(favs.length - 1, curIdx + step));
      } else {
        // Caso o kit atual tenha acabado de ser desfavoritado, busca o próximo/anterior favorito mais próximo
        if (delta > 0) {
          const higher = favs.findIndex(function (n) { return n > state.currentKitNo; });
          nextIdx = higher !== -1 ? higher : favs.length - 1;
        } else {
          let lower = -1;
          for (let i = favs.length - 1; i >= 0; i--) {
            if (favs[i] < state.currentKitNo) {
              lower = i;
              break;
            }
          }
          nextIdx = lower !== -1 ? lower : 0;
        }
      }
      state.currentKitNo = favs[nextIdx];
      saveState();
      renderAll();
      const k = getKitInfo(state.currentKitNo);
      announce(
        (sourcePrefix ? sourcePrefix + ": " : "") +
          "Lista de Favoritos (item " +
          (nextIdx + 1) +
          " de " +
          favs.length +
          "): ★ Drum Kit " +
          k.code +
          ": " +
          k.name +
          (k.subName ? " (" + k.subName + ")" : "")
      );
      return;
    }

    // Lista Completa (►ALL ☆: 1 a 200)
    const step = (delta > 0 ? 1 : -1) * (isShift ? 10 : 1);
    state.currentKitNo = Math.max(1, Math.min(200, state.currentKitNo + step));
    saveState();
    renderAll();
    const k = getKitInfo(state.currentKitNo);
    announce(
      (sourcePrefix ? sourcePrefix + ": " : "") +
        "Lista Todos os Kits (" +
        k.no +
        " de 200): " +
        (k.isFavorite ? "★ [FAVORITO] " : "") +
        "Drum Kit " +
        k.code +
        ": " +
        k.name +
        (k.subName ? " (" + k.subName + ")" : "")
    );
  }

  function getCurrentPad() {
    return PADS[state.currentPadIndex] || PADS[1];
  }

  function getCurrentZone() {
    const pad = getCurrentPad();
    return pad.zones[state.currentZoneIndex] || pad.zones[0];
  }

  // Constrói chave de parâmetro contextualizada (por Kit/Pad quando apropriado)
  function getScopedParamKey(item) {
    if (!item || !item.paramKey) return null;
    const key = item.paramKey;
    if (key === "currentKitName" || key === "currentKitSubName") {
      return "K" + state.currentKitNo + "_" + key;
    }
    // Parâmetros de barramento BUS FX EDIT (por Kit + Barramento A..D)
    if (key.startsWith("busEdit_")) {
      const busL = state.activeBusLetter || "A";
      return "K" + state.currentKitNo + "_BUS" + busL + "_" + key;
    }
    // Parâmetros globais/sistema mantêm chave direta
    if (
      key.startsWith("sys") ||
      key.startsWith("wifi") ||
      key.startsWith("bluetooth") ||
      key.startsWith("mixIn") ||
      key.startsWith("trig") ||
      key.startsWith("dig") ||
      key.startsWith("hh") ||
      key.startsWith("dl") ||
      key.startsWith("xtalk") ||
      key.startsWith("midi") ||
      key.startsWith("out") ||
      key.startsWith("usb") ||
      key.startsWith("click") ||
      key.startsWith("coach") ||
      key.startsWith("tc") ||
      key.startsWith("qc") ||
      key.startsWith("aud") ||
      key.startsWith("sm") ||
      key.startsWith("bb") ||
      key.startsWith("song") ||
      key.startsWith("selectedSong") ||
      key.startsWith("rec") ||
      key.startsWith("gt") ||
      key.startsWith("globalTone") ||
      key.startsWith("fixedMaster") ||
      key.startsWith("masterPhones") ||
      key.startsWith("sl") ||
      key.startsWith("setList") ||
      key.startsWith("exp") ||
      key.startsWith("autoSlotLoad") ||
      key.startsWith("rackCursor") ||
      key.startsWith("us") ||
      key.startsWith("userSample") ||
      key.startsWith("importWav") ||
      key.startsWith("copy") ||
      key.startsWith("bkp") ||
      key.startsWith("backup") ||
      key.startsWith("save") ||
      key.startsWith("load") ||
      key.startsWith("delete") ||
      key.startsWith("lcd") ||
      key.startsWith("led") ||
      key.startsWith("autoOff") ||
      key.startsWith("showVirtualPad") ||
      key.startsWith("updatePopup") ||
      key.startsWith("resetWith") ||
      key.startsWith("instGroupFilter") ||
      key.startsWith("kitScreenPage")
    ) {
      return key;
    }
    // Parâmetros por pad (Volume do pad, EQ do pad, Comp do pad, V-Edit, Instrumento)
    if (
      key.startsWith("pad") ||
      key.startsWith("inst") ||
      key.startsWith("vedit") ||
      key.startsWith("trans") ||
      key.startsWith("layer")
    ) {
      const pad = getCurrentPad();
      return "K" + state.currentKitNo + "_" + pad.id + "_" + key;
    }
    // Parâmetros por Kit (Ambience, Bus FX, Kit Vol/EQ/Comp, Kit Options)
    return "K" + state.currentKitNo + "_" + key;
  }

  // Lista completa de Pan (L30..L1, CENTER, R1..R30) conforme Data List do V31
  const PAN_OPTIONS = (function () {
    const arr = [];
    for (let i = 30; i >= 1; i--) arr.push("L" + i);
    arr.push("CENTER");
    for (let i = 1; i <= 30; i++) arr.push("R" + i);
    return arr;
  })();

  // Formata valor de volume em dB (-INF dB ou -60.0 dB a +12.0 dB)
  function formatDbValue(rawVal) {
    if (rawVal === undefined || rawVal === null || rawVal === "") return "0.0 dB";
    const s = String(rawVal).toUpperCase();
    if (s.indexOf("INF") !== -1) return "-INF dB";
    const num = parseFloat(rawVal);
    if (isNaN(num) || num <= -60.5) return "-INF dB";
    return (num > 0 ? "+" : "") + num.toFixed(1) + " dB";
  }

  // Formata número float respeitando casas decimais (ex: 120.0 BPM)
  function formatFloatValue(rawVal, item) {
    const num = parseFloat(rawVal);
    if (isNaN(num)) return String(rawVal);
    const decimals = item && (item.shiftStep === 0.01 || item.step === 0.01) ? 2 : 1;
    const formatted = num.toFixed(decimals);
    return item && item.unit ? formatted + " " + item.unit : formatted;
  }

  // Aplica os níveis predefinidos nos 5 faders de subdivisão do CLICK - TEMPO ao trocar o Template (Manual p. 35)
  function applyClickTemplatePreset(templateName) {
    const presets = {
      "QTR NOTES": { acc: "MAX", qtr: "MAX", egh: "OFF", six: "OFF", trp: "OFF" },
      "8TH NOTES": { acc: "MAX", qtr: "MAX", egh: "MAX", six: "OFF", trp: "OFF" },
      "UPBEATS": { acc: "OFF", qtr: "OFF", egh: "MAX", six: "OFF", trp: "OFF" },
      "16TH NOTES": { acc: "MAX", qtr: "MAX", egh: "MAX", six: "MAX", trp: "OFF" },
      "3 OVER 2": { acc: "MAX", qtr: "OFF", egh: "MAX", six: "OFF", trp: "MAX" },
      "8TH NOTE TRIPLETS": { acc: "MAX", qtr: "MAX", egh: "OFF", six: "OFF", trp: "MAX" }
    };
    const p = presets[templateName];
    if (p) {
      state.params.clickAccentVol = p.acc;
      state.params.clickQuarterVol = p.qtr;
      state.params.clickEighthVol = p.egh;
      state.params.clickSixteenthVol = p.six;
      state.params.clickTripletVol = p.trp;
    }
  }

  // Constrói lista completa ou filtrada por grupo dos instrumentos do Data List (Preset + EXV001..003 + Synth Wave + User Sample)
  function getInstrumentOptionsList(groupFilter) {
    const list = ["000 OFF"];
    const vInst = window.V31_INSTRUMENTS;
    if (vInst) {
      const addFromArray = function (arr, prefix) {
        if (!Array.isArray(arr)) return;
        arr.forEach(function (inst) {
          if (groupFilter && String(inst.group).toUpperCase() !== String(groupFilter).toUpperCase()) {
            return;
          }
          const code = prefix + String(inst.no).padStart(3, "0");
          list.push(code + " " + inst.name + " [" + inst.group + "]");
        });
      };
      addFromArray(vInst.preset, "");
      if (vInst.exv001 && Array.isArray(vInst.exv001.instruments)) {
        addFromArray(vInst.exv001.instruments, "EXV1-");
      }
      if (vInst.exv002 && Array.isArray(vInst.exv002.instruments)) {
        addFromArray(vInst.exv002.instruments, "EXV2-");
      }
      if (vInst.exv003 && Array.isArray(vInst.exv003.instruments)) {
        addFromArray(vInst.exv003.instruments, "EXV3-");
      }
    }
    if (!groupFilter || groupFilter === "SYNTH WAVE") {
      list.push("SYNTH WAVE (Sintetizador Interno)");
    }
    if (!groupFilter || groupFilter === "USER SAMPLE") {
      list.push("USER SAMPLE 001: Piano Loop");
      list.push("USER SAMPLE 002: Ring Fx");
      list.push("USER SAMPLE 003: Say What");
      list.push("USER SAMPLE 004: Yeah");
    }
    if (list.length === 1 && groupFilter) {
      // Caso o filtro não tenha correspondência exata, retorna todos os presets para nunca ficar vazio
      return getInstrumentOptionsList(null);
    }
    return list;
  }

  // Lista das 52 Kit Phrases do Data List (p. 36)
  function getKitPhraseOptionsList() {
    const phrases = (window.V31_KITS_AND_LISTS && window.V31_KITS_AND_LISTS.kitPhrases) || [];
    if (phrases.length > 0) {
      return phrases.map(function (p) {
        return String(p.no).padStart(2, "0") + ": " + p.name + (p.tempo ? " (" + p.tempo + " BPM)" : "");
      });
    }
    return ["01: 8beat - Med", "22: Funk", "52: Sound Check 4"];
  }

  // Lista de músicas conforme a fonte ativa em SONG_MAIN (INTERNAL 001–037, SD CARD, DRUM REC DATA, AUDIO REC DATA)
  function getSongOptionsList() {
    const src = String(state.params.songSource || "INTERNAL");
    if (src.indexOf("SD CARD") !== -1) {
      return [
        "SD01: BackingTrack_Rock.wav (44.1kHz)",
        "SD02: Worship_Live_ Stem.wav (Click Track Ready)",
        "SD03: Jazz_Quartet_Playalong.mp3",
        "SD04: Metal_DoubleBass_Practice.wav"
      ];
    }
    if (src.indexOf("DRUM REC") !== -1) {
      return [
        "TEMPORARY: Temp Drum Rec (MIDI SMF)",
        "SD#01: DrumRec01 (MIDI SMF — 120.0 BPM)",
        "SD#02: DrumRec02 (MIDI SMF — 105.0 BPM)"
      ];
    }
    if (src.indexOf("AUDIO REC") !== -1) {
      return [
        "TEMPORARY: Temp Audio Rec (WAV)",
        "SD#001: REC001.wav (44.1kHz 16bit Stereo)",
        "SD#002: REC002.wav (44.1kHz 16bit Stereo)"
      ];
    }
    const songs = (window.V31_KITS_AND_LISTS && window.V31_KITS_AND_LISTS.songs) || [];
    if (songs.length > 0) {
      return songs.map(function (s) {
        return (
          String(s.no).padStart(3, "0") +
          ": " +
          s.name +
          (s.tempo ? " [" + s.type + ", " + s.tempo + " BPM]" : "")
        );
      });
    }
    return ["001: Drum Solo", "002: Acid Jazz", "037: Jazz Funk"];
  }

  // Lista dos 95 tipos de efeito BUS FX (THRU + 94 Multi-Effects do Data List pp. 67–107)
  function getBusFxTypesList() {
    const list = ["THRU"];
    if (window.V31_EFFECTS && Array.isArray(window.V31_EFFECTS.effects)) {
      window.V31_EFFECTS.effects.forEach(function (fx) {
        if (list.indexOf(fx.name) === -1) {
          list.push(fx.name);
        }
      });
    }
    return list;
  }

  // Obtém lista dinâmica de opções para seletores especiais (Efeitos BUS FX, Instrumentos, Kits, Pan, Músicas, Frases)
  function getDynamicOptions(item) {
    if (!item) return [];
    if (item.type === "pan") {
      return PAN_OPTIONS;
    }
    if (item.type === "instrument") {
      const isInstListWin = resolveScreenId(state.currentScreenId) === "INST_LIST_WINDOW";
      const grp = isInstListWin ? (state.params.instGroupFilter || "KICK") : null;
      return getInstrumentOptionsList(grp);
    }
    if (item.type === "kit_phrase") {
      return getKitPhraseOptionsList();
    }
    if (item.type === "song_selector") {
      return getSongOptionsList();
    }
    if (item.type === "fx_type") {
      return getBusFxTypesList();
    }
    if (item.options && item.options.length > 0) {
      if (
        (item.paramKey === "busFx1Type" ||
          item.paramKey === "busFx2Type" ||
          item.paramKey === "busFx3Type" ||
          item.paramKey === "busFx4Type") &&
        window.V31_EFFECTS &&
        Array.isArray(window.V31_EFFECTS.effects)
      ) {
        return getBusFxTypesList();
      }
      return item.options;
    }
    return [];
  }

  const SCREEN_ALIASES = {
    V_EDIT: "KIT_EDIT_VEDIT",
    PAD_VOL: "PAD_VOL_PAN",
    KIT_OPTIONS: "XSTICK_INST",
    COPY_MENU: "COPY_KIT",
    BACKUP_MENU: "BACKUP_SAVE",
    SYSTEM_MENU: "SYSTEM_WIFI",
    USB_AUDIO: "USB_AUDIO_ROUTING"
  };

  function getScreensMap() {
    if (!window.V31_SCREENS) return {};
    return window.V31_SCREENS.screens || window.V31_SCREENS;
  }

  function resolveScreenId(id) {
    if (!id) return "MENU";
    const map = getScreensMap();
    if (map[id]) return id;
    if (SCREEN_ALIASES[id] && map[SCREEN_ALIASES[id]]) {
      return SCREEN_ALIASES[id];
    }
    return id;
  }

  function getMenuCategories() {
    const map = getScreensMap();
    if (window.V31_SCREENS && Array.isArray(window.V31_SCREENS.menuCategories)) {
      return window.V31_SCREENS.menuCategories;
    }
    if (map.MENU && Array.isArray(map.MENU.categories)) {
      return map.MENU.categories;
    }
    return [];
  }

  // Obtém a tela atual com enriquecimento dinâmico (ex: parâmetros reais do efeito BUS FX selecionado)
  function getEffectiveScreen(screenId) {
    const resolvedId = resolveScreenId(screenId);
    const screensObj = getScreensMap();
    const baseScreen = screensObj[resolvedId] || screensObj.MENU;
    if (!baseScreen) return null;

    // Clona superficialmente para enriquecer itens dinâmicos
    const screen = Object.assign({}, baseScreen, {
      items: (baseScreen.items || []).map(function (it) {
        return Object.assign({}, it);
      })
    });

    // Enriquecimento dinâmico 1: Na tela BUS_FX_EDIT, F1–F4 selecionam BUS-A..BUS-D, F5/F6 ligam/desligam Fx1/Fx2, Coluna 1 edita FX1 e Coluna 2 edita FX2 (Manual p. 95)
    if (resolvedId === "BUS_FX_EDIT" && window.V31_EFFECTS && Array.isArray(window.V31_EFFECTS.effects)) {
      const busL = state.activeBusLetter || "A";
      const busPrefix = "K" + state.currentKitNo + "_BUS" + busL + "_";
      const fx1TypeKey = busPrefix + "busEdit_fx1Type";
      const fx2TypeKey = busPrefix + "busEdit_fx2Type";
      const fx1SwKey = busPrefix + "busEdit_fx1Sw";
      const fx2SwKey = busPrefix + "busEdit_fx2Sw";

      const curFx1Name = state.params[fx1TypeKey] || (busL === "A" ? "DELAY" : "EQUALIZER");
      const curFx2Name = state.params[fx2TypeKey] || "THRU";
      const fx1SwVal = state.params[fx1SwKey] || (busL === "A" ? "ON" : "OFF");
      const fx2SwVal = state.params[fx2SwKey] || "OFF";

      const allFxNames = getBusFxTypesList();
      const findFxObj = function (name) {
        if (!name || String(name).toUpperCase() === "THRU") return null;
        return (
          window.V31_EFFECTS.effects.find(function (e) {
            return e.name.toUpperCase() === String(name).toUpperCase();
          }) || null
        );
      };

      const fx1Data = findFxObj(curFx1Name);
      const fx2Data = findFxObj(curFx2Name);

      screen.fButtons = [
        { num: 1, label: busL === "A" ? "►BUS-A" : "BUS-A", action: "select_bus", bus: "A", description: "Seleciona o barramento BUS-A para edição de FX1 e FX2." },
        { num: 2, label: busL === "B" ? "►BUS-B" : "BUS-B", action: "select_bus", bus: "B", description: "Seleciona o barramento BUS-B para edição de FX1 e FX2." },
        { num: 3, label: busL === "C" ? "►BUS-C" : "BUS-C", action: "select_bus", bus: "C", description: "Seleciona o barramento BUS-C para edição de FX1 e FX2." },
        { num: 4, label: busL === "D" ? "►BUS-D" : "BUS-D", action: "select_bus", bus: "D", description: "Seleciona o barramento BUS-D para edição de FX1 e FX2." },
        { num: 5, label: "Fx1 [" + fx1SwVal + "]", action: "toggle_param", paramKey: "busEdit_fx1Sw", description: "Liga (ON) ou desliga (OFF) o efeito FX1 do barramento BUS-" + busL + "." },
        { num: 6, label: "Fx2 [" + fx2SwVal + "]", action: "toggle_param", paramKey: "busEdit_fx2Sw", description: "Liga (ON) ou desliga (OFF) o efeito FX2 do barramento BUS-" + busL + "." }
      ];

      const dynamicItems = [
        {
          id: "bfxe_buslvl",
          label: "Bus-" + busL + " Level (Volume do Barramento)",
          paramKey: "busEdit_busLevel",
          type: "db",
          min: -61,
          max: 6,
          step: 0.5,
          defaultVal: 0.0,
          row: 1,
          col: 1,
          explanation: "Linha 1, Coluna 1: Nível de saída do barramento BUS-" + busL + " (-INF, -60.0 a +6.0 dB)."
        },
        {
          id: "bfxe_fx1_type",
          label: "FX1 Type (Coluna 1 — 94 Efeitos + THRU)",
          paramKey: "busEdit_fx1Type",
          type: "fx_type",
          options: allFxNames,
          defaultVal: curFx1Name,
          row: 2,
          col: 1,
          explanation:
            "Linha 2, Coluna 1 (Esquerda): Algoritmo carregado em FX1 do BUS-" +
            busL +
            " [" +
            fx1SwVal +
            "]. " +
            (fx1Data ? "Categoria: " + fx1Data.category + " (" + fx1Data.signalFlow + ")." : "THRU: Sinal passa direto sem efeito.")
        },
        {
          id: "bfxe_fx2_type",
          label: "FX2 Type (Coluna 2 — 94 Efeitos + THRU)",
          paramKey: "busEdit_fx2Type",
          type: "fx_type",
          options: allFxNames,
          defaultVal: curFx2Name,
          row: 2,
          col: 2,
          explanation:
            "Linha 2, Coluna 2 (Direita — 1 seta à direita): Algoritmo carregado em FX2 do BUS-" +
            busL +
            " [" +
            fx2SwVal +
            "]. " +
            (fx2Data ? "Categoria: " + fx2Data.category + " (" + fx2Data.signalFlow + ")." : "THRU: Sinal passa direto sem efeito.")
        }
      ];

      const maxParams = Math.max(
        fx1Data && Array.isArray(fx1Data.parameters) ? fx1Data.parameters.length : 0,
        fx2Data && Array.isArray(fx2Data.parameters) ? fx2Data.parameters.length : 0
      );

      for (let i = 0; i < maxParams; i++) {
        const r = i + 3;
        if (fx1Data && fx1Data.parameters && fx1Data.parameters[i]) {
          const p1 = fx1Data.parameters[i];
          dynamicItems.push({
            id: "bfxe_fx1_p_" + i,
            label: "FX1: " + p1.name,
            paramKey: "busEdit_fx1_" + fx1Data.id + "_p" + i,
            type: "fx_param",
            rangeText: p1.range,
            defaultVal: p1.defaultVal || p1.range.split(",")[0].trim(),
            row: r,
            col: 1,
            explanation: "Coluna 1 (FX1 - " + fx1Data.name + "): " + p1.explanation + " (Faixa: " + p1.range + ")."
          });
        }
        if (fx2Data && fx2Data.parameters && fx2Data.parameters[i]) {
          const p2 = fx2Data.parameters[i];
          dynamicItems.push({
            id: "bfxe_fx2_p_" + i,
            label: "FX2: " + p2.name,
            paramKey: "busEdit_fx2_" + fx2Data.id + "_p" + i,
            type: "fx_param",
            rangeText: p2.range,
            defaultVal: p2.defaultVal || p2.range.split(",")[0].trim(),
            row: r,
            col: 2,
            explanation: "Coluna 2 (FX2 - " + fx2Data.name + "): " + p2.explanation + " (Faixa: " + p2.range + ")."
          });
        }
      }

      screen.items = dynamicItems;
      screen.title =
        "BUS-" +
        busL +
        " FX EDIT [FX1: " +
        curFx1Name +
        " (" +
        fx1SwVal +
        ") | FX2: " +
        curFx2Name +
        " (" +
        fx2SwVal +
        ")]";
    }

    // Enriquecimento dinâmico 2: Na tela INST_LIST_WINDOW, filtra os instrumentos pelo grupo selecionado e aplica na camada alvo!
    if (resolvedId === "INST_LIST_WINDOW") {
      const grp = state.params.instGroupFilter || "KICK";
      const filteredInsts = getInstrumentOptionsList(grp);
      const targetLayerKey = state.instListTargetKey || "layerAInst";
      const layerLabelMap = {
        layerAInst: "Camada A",
        layerBInst: "Camada B",
        layerCInst: "Camada C",
        xstickInst: "Cross Stick (XSTICK)"
      };
      const layerDesc = layerLabelMap[targetLayerKey] || "Camada A";
      screen.title = "INST LIST — Grupo: " + grp + " [" + layerDesc + " de " + getCurrentPad().id + "]";
      if (screen.items && screen.items.length >= 2) {
        screen.items[1].paramKey = targetLayerKey;
        screen.items[1].label = "Instrumento Selecionado (" + layerDesc + " — " + filteredInsts.length + " opções no grupo " + grp + ")";
        screen.items[1].options = filteredInsts;
        if (!screen.items[1].defaultVal || filteredInsts.indexOf(screen.items[1].defaultVal) === -1) {
          screen.items[1].defaultVal = filteredInsts[Math.min(1, filteredInsts.length - 1)] || "000 OFF";
        }
      }
    }

    // Enriquecimento dinâmico 2B: Nas telas CLICK_TEMPO, CLICK_SETUP e COACH_STROKE_MONITOR, sincroniza o rótulo de [F6] CLICK [ON/OFF] e o título
    if (resolvedId === "CLICK_TEMPO" || resolvedId === "CLICK_SETUP" || resolvedId === "COACH_STROKE_MONITOR") {
      state.params.clickSw = state.clickActive ? "ON" : "OFF";
      state.params.clickTempo = state.clickTempo;
      if (Array.isArray(screen.fButtons)) {
        screen.fButtons = screen.fButtons.map(function (fb) {
          if (fb.num === 6 && fb.action === "toggle_click") {
            return Object.assign({}, fb, {
              label: "CLICK [" + (state.clickActive ? "ON" : "OFF") + "]"
            });
          }
          return fb;
        });
      }
      if (resolvedId === "CLICK_TEMPO" || resolvedId === "CLICK_SETUP") {
        screen.title =
          screen.title +
          " [Metrônomo: " +
          (state.clickActive ? "ON" : "OFF") +
          " — " +
          Number(state.clickTempo).toFixed(1) +
          " BPM]";
      }
    }

    // Enriquecimento dinâmico 2C: Na tela REC_STANDBY, adapta itens e botões conforme Rec Mode = DRUM REC vs AUDIO REC (Manual pp. 59–64)
    if (resolvedId === "REC_STANDBY") {
      const modeVal = String(state.params.recMode || "DRUM REC (MIDI / SMF)");
      const isAudioRec = modeVal.indexOf("AUDIO REC") !== -1;
      const recStatusBadge = state.recActive ? " [● GRAVANDO (RECORDING)... Pressione ►/■ para parar]" : " [REC STANDBY... Pressione ►/■ para gravar]";
      const ovwVal = state.params.recOverwriteSw || "OFF";

      screen.title =
        (isAudioRec ? "REC - AUDIO REC (Gravação de Áudio WAV)" : "REC - DRUM REC (Gravação MIDI)") +
        recStatusBadge;

      if (isAudioRec) {
        screen.fButtons = [
          { num: 1, label: "REC MODE", action: "toggle_param", paramKey: "recMode", description: "Alterna o modo de gravação entre DRUM REC (MIDI) e AUDIO REC (WAV)." },
          { num: 2, label: "---", action: "none", description: "Sem função." },
          { num: 3, label: "---", action: "none", description: "Sem função." },
          { num: 4, label: "---", action: "none", description: "Sem função." },
          { num: 5, label: "---", action: "none", description: "Sem função." },
          { num: 6, label: "---", action: "none", description: "Sem função em AUDIO REC (Overwrite é exclusivo de DRUM REC)." }
        ];
        screen.items = [
          { id: "rec_mode", label: "1. Rec Mode (F1)", paramKey: "recMode", type: "enum", options: ["DRUM REC (MIDI / SMF)", "AUDIO REC (WAV Audio)"], defaultVal: "AUDIO REC (WAV Audio)", row: 1, col: 1, explanation: "Modo atual: AUDIO REC (grava áudio WAV 44.1kHz 16-bit no cartão SD ou memória temporária)." },
          { id: "rec_num_aud", label: "2. Rec Number (Definido Automaticamente)", paramKey: "recAudioNumber", type: "enum", options: ["SD#001 (Cartão SD — até 60 min)", "SD#002 (Cartão SD — até 60 min)", "TEMPORARY (Sem Cartão SD — até 1 min)"], defaultVal: "SD#001 (Cartão SD — até 60 min)", row: 2, col: 1, explanation: "Em AUDIO REC, se houver um cartão SD inserido cria automaticamente um novo arquivo (SD#001–200); sem cartão SD grava em TEMPORARY." },
          { id: "rec_trg", label: "3. Rec Target (Fonte de Áudio)", paramKey: "recTarget", type: "enum", options: ["ALL (Bateria + MIX IN + Bluetooth)", "DRUMS ONLY (Apenas Bateria)"], defaultVal: "ALL (Bateria + MIX IN + Bluetooth)", row: 3, col: 1, explanation: "ALL (grava bateria junto com o som de MIX IN e Bluetooth) ou DRUMS ONLY (grava apenas a bateria — 2 setas para baixo)." },
          { id: "rec_gain", label: "4. Rec Gain (-24 a +24 dB)", paramKey: "recGain", type: "int", min: -24, max: 24, unit: "dB", defaultVal: 12, row: 4, col: 1, explanation: "Ajusta o ganho de gravação de áudio (-24 a +24 dB) observando o medidor REC L/R à direita (3 setas para baixo)." },
          { id: "rec_wsong", label: "5. Play and record a song", paramKey: "recWithSongSw", type: "enum", options: ["OFF (Desmarcado)", "ON (Marcado)"], defaultVal: "OFF (Desmarcado)", row: 5, col: 1, explanation: "Quando ON, inicia e grava junto a música selecionada na tela SONG ao pressionar [►/■] (4 setas para baixo)." }
        ];
      } else {
        screen.fButtons = [
          { num: 1, label: "REC MODE", action: "toggle_param", paramKey: "recMode", description: "Alterna o modo de gravação entre DRUM REC (MIDI) e AUDIO REC (WAV)." },
          { num: 2, label: "---", action: "none", description: "Sem função." },
          { num: 3, label: "---", action: "none", description: "Sem função." },
          { num: 4, label: "---", action: "none", description: "Sem função." },
          { num: 5, label: "---", action: "none", description: "Sem função." },
          { num: 6, label: "Overwrite [" + ovwVal + "]", action: "toggle_param", paramKey: "recOverwriteSw", description: "Marca (ON) ou desmarca (OFF) a permissão para sobrescrever uma gravação existente em DRUM REC." }
        ];
        screen.items = [
          { id: "rec_mode", label: "1. Rec Mode (F1)", paramKey: "recMode", type: "enum", options: ["DRUM REC (MIDI / SMF)", "AUDIO REC (WAV Audio)"], defaultVal: "DRUM REC (MIDI / SMF)", row: 1, col: 1, explanation: "Modo atual: DRUM REC (grava dados de performance MIDI e eventos de música)." },
          { id: "rec_num", label: "2. Rec Number (TEMPORARY / SD#01–99)", paramKey: "recNumber", type: "enum", options: ["TEMPORARY (Memória Temporária)", "SD#01: DrumRec01", "SD#02: DrumRec02", "SD#03: -------- (Novo)", "SD#04: -------- (Novo)"], defaultVal: "SD#01: DrumRec01", row: 2, col: 1, explanation: "Número de destino da gravação DRUM REC (TEMPORARY ou SD#01 a SD#99 — 1 seta para baixo)." },
          { id: "rec_wsong", label: "3. Play a song while recording", paramKey: "recWithSongSw", type: "enum", options: ["OFF (Desmarcado)", "ON (Marcado)"], defaultVal: "OFF (Desmarcado)", row: 3, col: 1, explanation: "Quando ON, reproduz a música selecionada na tela SONG simultaneamente ao iniciar a gravação (2 setas para baixo)." }
        ];
      }
    }

    // Enriquecimento dinâmico 3: Telas KIT e KIT_LIST com Sistema de Favoritos (★) e Alternância entre as 2 Listas (ALL / ★)
    if (resolvedId === "KIT") {
      const favs = getSortedFavorites();
      if (screen.items && screen.items[0]) {
        screen.items[0].label =
          "Drum Kit Selecionado [" +
          (state.favFilterActive
            ? "Lista Ativa: ALL ►★ APENAS FAVORITOS (" + favs.length + ")"
            : "Lista Ativa: ►ALL ☆ TODOS OS KITS (200)") +
          "]";
      }
    }

    if (resolvedId === "KIT_LIST") {
      const favs = getSortedFavorites();
      const curFav = isKitFavorite(state.currentKitNo);
      screen.title =
        "DRUM KIT - KIT LIST [" +
        (state.favFilterActive
          ? "Lista: ALL ►★ FAVORITOS (" + favs.length + " kit(s))"
          : "Lista: ►ALL ☆ TODOS OS KITS (200)") +
        "]";

      if (Array.isArray(screen.fButtons)) {
        screen.fButtons = screen.fButtons.map(function (fb) {
          if (fb.num === 2) {
            return Object.assign({}, fb, {
              label: curFav ? "★ ON (Desfavoritar)" : "☆ OFF (Favoritar)",
              action: "toggle_favorite",
              description: "Pressione F2 (Tecla 2) para favoritar (★) ou desfavoritar o kit selecionado."
            });
          }
          if (fb.num === 4) {
            return Object.assign({}, fb, {
              label: state.favFilterActive ? "ALL ►★ (Favoritos)" : "►ALL ☆ (Todos)",
              action: "toggle_fav_filter",
              description: "Pressione F4 (Tecla 4) para alternar entre a Lista de Todos os 200 Kits (►ALL ☆) e a Lista de Favoritos (ALL ►★)."
            });
          }
          return fb;
        });
      }

      const favSummary =
        favs.length === 0
          ? "Nenhum kit favoritado ainda (pressione F2 para favoritar)."
          : favs
              .map(function (n) {
                const info = getKitInfo(n);
                return "★ " + info.code + " " + info.name;
              })
              .join(", ");

      screen.items = [
        {
          id: "kitListCursor",
          label: state.favFilterActive
            ? "Kit na Lista de FAVORITOS (ALL ►★)"
            : "Kit na Lista COMPLETA (►ALL ☆ — 200 Kits)",
          type: "kit_selector",
          min: 1,
          max: 200,
          row: 1,
          col: 1,
          explanation:
            "Use Seta Cima/Baixo [▲]/[▼] ou Disco [+]/[-] para percorrer a lista ativa. Pressione [F2] (Tecla 2) para favoritar/desfavoritar (★) e [F4] (Tecla 4) para alternar entre Todos os Kits e Favoritos. Kits favoritados (" +
            favs.length +
            "): " +
            favSummary
        }
      ];
    }

    // Enriquecimento dinâmico 4: Telas COPY (COPY_KIT e demais telas COPY_*) com abas USER / PRESET / SD CARD e listas temporárias independentes
    if (resolvedId === "COPY_KIT") {
      const srcMode = state.copySourceType || "USER";
      const isUser = srcMode === "USER";
      const isPreset = srcMode === "PRESET";
      const isSd = srcMode === "SD CARD";

      screen.title = isPreset
        ? "COPY KIT FROM PRESET DATA (Origem: Fábrica)"
        : isSd
        ? "COPY KIT FROM SD CARD (Origem: Cartão SD)"
        : "COPY KIT FROM USER DATA (Origem: Usuário)";

      screen.fButtons = [
        {
          num: 1,
          label: isUser ? "►USER" : "USER",
          action: "set_copy_src",
          src: "USER",
          description: "Define a memória do usuário (USER) como origem da cópia (permite também trocar os kits com F5 EXCHANGE)."
        },
        {
          num: 2,
          label: isPreset ? "►PRESET" : "PRESET",
          action: "set_copy_src",
          src: "PRESET",
          description: "Define as predefinições de fábrica (PRESET) como origem — útil para restaurar um kit para o padrão de fábrica."
        },
        {
          num: 3,
          label: isSd ? "►SD CARD" : "SD CARD",
          action: "set_copy_src",
          src: "SD CARD",
          description: "Define um backup salvo no cartão SD como origem da cópia."
        },
        { num: 4, label: "---", action: "none", description: "Sem função." },
        isUser
          ? {
              num: 5,
              label: "EXCHANGE",
              action: "confirm_action",
              opType: "exchange_kit",
              description: "Abre a tela de confirmação para permutar (trocar de posição) os kits SOURCE e DESTINATION na lista do usuário."
            }
          : { num: 5, label: "---", action: "none", description: "EXCHANGE está disponível apenas na aba USER (F1)." },
        {
          num: 6,
          label: "COPY",
          action: "confirm_action",
          opType: "copy_kit",
          description: "Abre a tela de confirmação (CANCEL / OK) para copiar o kit de SOURCE para DESTINATION."
        }
      ];

      if (isSd) {
        screen.items = [
          {
            id: "cpk_sd_bkp",
            label: "1. SD Card - Backup Number",
            paramKey: "copySdBackupNo",
            type: "enum",
            options: ["1: V31Backup", "2: LiveSetBackup", "3: StudioBackup"],
            defaultVal: "1: V31Backup",
            row: 1,
            col: 1,
            explanation: "Seleciona o número do arquivo de backup salvo no cartão SD (Linha 1)."
          },
          {
            id: "cpk_src",
            label: "2. SOURCE — Kit de Origem no Cartão SD (Lista Temporária)",
            paramKey: "copySourceKit",
            type: "kit_selector",
            min: 1,
            max: 200,
            defaultVal: 1,
            row: 2,
            col: 1,
            explanation: "Lista temporária de origem (SOURCE). Gire o Disco [+]/[-] para escolher o kit de origem (001 a 200) sem alterar o destino nem a lista principal."
          },
          {
            id: "cpk_sd_us",
            label: "3. With User Samples",
            paramKey: "copyWithUserSamples",
            type: "enum",
            options: ["OFF", "ON"],
            defaultVal: "OFF",
            row: 3,
            col: 1,
            explanation: "Define se os User Samples incluídos no backup também serão copiados (OFF / ON)."
          },
          {
            id: "cpk_dst",
            label: "4. DESTINATION — Kit de Destino do Usuário (Lista Temporária)",
            paramKey: "copyDestKit",
            type: "kit_selector",
            min: 1,
            max: 200,
            defaultVal: 1,
            row: 4,
            col: 1,
            explanation: "Lista temporária de destino (DESTINATION). Gire o Disco [+]/[-] para escolher em qual kit do usuário (001 a 200) os dados serão gravados após confirmar em [F6] COPY > OK."
          }
        ];
      } else {
        screen.items = [
          {
            id: "cpk_src",
            label:
              "1. SOURCE — Kit de Origem (" +
              (isPreset ? "Preset de Fábrica" : "Memória do Usuário") +
              " — Lista Temporária)",
            paramKey: "copySourceKit",
            type: "kit_selector",
            min: 1,
            max: 200,
            defaultVal: 1,
            row: 1,
            col: 1,
            explanation:
              "Lista temporária de origem (SOURCE, Linha 1). Gire o Disco [+]/[-] para escolher o kit de origem (001 a 200). Esta lista é independente da lista DESTINATION (Linha 2) e não altera a lista real até você confirmar em [F6] COPY."
          },
          {
            id: "cpk_dst",
            label: "2. DESTINATION — Kit de Destino (Memória do Usuário — Lista Temporária)",
            paramKey: "copyDestKit",
            type: "kit_selector",
            min: 1,
            max: 200,
            defaultVal: 1,
            row: 2,
            col: 1,
            explanation:
              "Lista temporária de destino (DESTINATION, Linha 2 — 1 seta para baixo). Gire o Disco [+]/[-] para escolher o kit de destino (001 a 200). Pressione [F6] (Tecla 6) para abrir a tela de confirmação."
          }
        ];
      }
    } else if (resolvedId.indexOf("COPY_") === 0) {
      const srcMode = state.copySourceType || "USER";
      const isUser = srcMode === "USER";
      screen.title = screen.title + " [Aba: " + srcMode + "]";
      if (Array.isArray(screen.fButtons)) {
        screen.fButtons = screen.fButtons.map(function (fb) {
          if (fb.action === "set_copy_src") {
            return Object.assign({}, fb, {
              label: fb.src === srcMode ? "►" + fb.src : fb.src
            });
          }
          if (fb.num === 5 && fb.label === "EXCHANGE" && !isUser) {
            return { num: 5, label: "---", action: "none", description: "EXCHANGE disponível apenas na aba USER." };
          }
          return fb;
        });
      }
    }

    // Enriquecimento dinâmico 5: Se uma Tela de Confirmação (CANCEL / OK) estiver aberta sobre a tela atual
    if (state.confirmDialog && resolvedId === resolveScreenId(state.currentScreenId)) {
      const dlg = state.confirmDialog;
      return {
        id: resolvedId,
        title: dlg.screenTitle || ("CONFIRMAÇÃO — " + screen.title),
        manualSectionId: screen.manualSectionId,
        category: screen.category,
        accessPath: screen.accessPath,
        visualDescription:
          "Janela de confirmação sobreposta no centro do visor LCD do V31: \"" +
          dlg.promptText +
          "\" (" +
          dlg.summaryText +
          "). " +
          "Possui 2 botões lado a lado na Linha 1: Coluna 1 (Esquerda) = CANCEL (selecionado por padrão); Coluna 2 (Direita — 1 seta para a direita [►]) = OK. " +
          "Use Seta Esquerda [◄] ou Seta Direita [►] (ou gire o Disco [+]/[-]) para selecionar CANCEL ou OK e pressione [ENTER] para confirmar (ou pressione [EXIT] para cancelar). " +
          "A lista original do módulo só é modificada se você selecionar OK e pressionar [ENTER].",
        layoutType: "confirm_dialog",
        fButtons: [
          { num: 1, label: "---", action: "none", description: "Use as setas Esquerda/Direita e ENTER na janela de confirmação." },
          { num: 2, label: "---", action: "none", description: "Use as setas Esquerda/Direita e ENTER na janela de confirmação." },
          { num: 3, label: "---", action: "none", description: "Use as setas Esquerda/Direita e ENTER na janela de confirmação." },
          { num: 4, label: "---", action: "none", description: "Use as setas Esquerda/Direita e ENTER na janela de confirmação." },
          { num: 5, label: "---", action: "none", description: "Use as setas Esquerda/Direita e ENTER na janela de confirmação." },
          { num: 6, label: "---", action: "none", description: "Use as setas Esquerda/Direita e ENTER na janela de confirmação." }
        ],
        items: [
          {
            id: "confirm_cancel",
            label: "Opção 1 (Esquerda): CANCEL",
            type: "confirm_choice",
            choice: "CANCEL",
            row: 1,
            col: 1,
            explanation:
              "Mensagem na tela: \"" +
              dlg.promptText +
              "\". Pressione [ENTER] aqui em CANCEL (Coluna 1) para cancelar a operação sem alterar a lista original, ou pressione Seta Direita [►] para ir até OK (Coluna 2)."
          },
          {
            id: "confirm_ok",
            label: "Opção 2 (Direita): OK",
            type: "confirm_choice",
            choice: "OK",
            row: 1,
            col: 2,
            explanation:
              "Mensagem na tela: \"" +
              dlg.promptText +
              "\" (" +
              dlg.summaryText +
              "). Pressione [ENTER] aqui em OK (Coluna 2) para confirmar e gravar a alteração na lista principal do módulo!"
          }
        ]
      };
    }

    return screen;
  }

  // Lê o número do kit em um seletor temporário (COPY, BACKUP 1 KIT, SET LIST, SONG EXPORT)
  function getTempSelectorKitNo(paramKey) {
    if (paramKey === "copySourceKit") {
      return Math.max(1, Math.min(200, parseInt(state.copySourceKit, 10) || 1));
    }
    if (paramKey === "copyDestKit") {
      return Math.max(1, Math.min(200, parseInt(state.copyDestKit, 10) || 1));
    }
    const stored = state.params[paramKey];
    if (stored !== undefined) {
      return Math.max(1, Math.min(200, parseInt(stored, 10) || 1));
    }
    return state.currentKitNo || 1;
  }

  // Lê o valor atual de um item
  function getItemValue(item) {
    if (!item) return "";
    if (item.type === "confirm_choice") {
      if (item.choice === "CANCEL") {
        return "[CANCEL] — Cancelar operação e voltar (Pressione ENTER)";
      }
      const summary = state.confirmDialog ? state.confirmDialog.summaryText : "Executar operação";
      return "[OK] — Confirmar: " + summary + " (Pressione ENTER)";
    }
    if (item.type === "kit_selector") {
      // Se tiver paramKey (ex: copySourceKit, copyDestKit, save1KitSource, load1KitDest), é uma lista temporária independente!
      if (item.paramKey) {
        const kitNo = getTempSelectorKitNo(item.paramKey);
        if (item.paramKey === "copySourceKit") {
          const srcMode = state.copySourceType || "USER";
          if (srcMode === "PRESET") {
            const kp = getPresetKitInfo(kitNo);
            return (
              "Preset " +
              kp.code +
              ": " +
              kp.name +
              (kp.subName ? " (" + kp.subName + ")" : "") +
              " [Lista Temporária SOURCE]"
            );
          }
          if (srcMode === "SD CARD") {
            const ks = getKitInfo(kitNo);
            return (
              "SD Card " +
              ks.code +
              ": " +
              ks.name +
              (ks.subName ? " (" + ks.subName + ")" : "") +
              " [Lista Temporária SOURCE]"
            );
          }
          const ku = getKitInfo(kitNo);
          return (
            "User " +
            ku.starPrefix +
            ku.code +
            ": " +
            ku.name +
            (ku.subName ? " (" + ku.subName + ")" : "") +
            " [Lista Temporária SOURCE]"
          );
        }
        if (item.paramKey === "copyDestKit") {
          const kd = getKitInfo(kitNo);
          return (
            "User " +
            kd.starPrefix +
            kd.code +
            ": " +
            kd.name +
            (kd.subName ? " (" + kd.subName + ")" : "") +
            " [Lista Temporária DESTINATION]"
          );
        }
        const kt = getKitInfo(kitNo);
        return (
          kt.starPrefix +
          kt.code +
          ": " +
          kt.name +
          (kt.subName ? " (" + kt.subName + ")" : "")
        );
      }

      // Se não tiver paramKey (telas KIT, KIT_LIST, SAFETY_MODE), manipula o Kit ativo do módulo
      const favs = getSortedFavorites();
      if (state.favFilterActive && favs.length === 0) {
        const kEmpty = getKitInfo(state.currentKitNo);
        return (
          "[Lista de Favoritos Vazia: 0 kits] (Kit atual: " +
          kEmpty.code +
          " " +
          kEmpty.name +
          " — pressione F2 para favoritar ou F4 para Todos)"
        );
      }
      const k = getKitInfo(state.currentKitNo);
      const listBadge = state.favFilterActive
        ? " [Favorito " + (favs.indexOf(k.no) + 1) + " de " + favs.length + "]"
        : k.isFavorite
        ? " [★ Favorito]"
        : "";
      return (
        k.starPrefix +
        k.code +
        ": " +
        k.name +
        (k.subName ? " (" + k.subName + ")" : "") +
        listBadge
      );
    }
    if (item.paramKey === "activeBusFxUnitParam") {
      return "BUS-" + (state.activeBusLetter || "A") + " / " + (state.activeBusFxUnit || "FX1");
    }
    if (item.type === "db") {
      return formatDbValue(getRawItemValue(item), item);
    }
    if (item.type === "float") {
      return formatFloatValue(getRawItemValue(item), item);
    }
    if (item.type === "text_v31") {
      const rawTxt = String(getRawItemValue(item) || "");
      const padded = (rawTxt + "                ").slice(0, 16);
      const pos = Math.max(0, Math.min(15, state.nameCharCursor || 0));
      const ch = padded.charAt(pos) === " " ? "␣ (Espaço)" : padded.charAt(pos);
      return '"' + rawTxt + '" [Caractere ' + (pos + 1) + "/16: '" + ch + "']";
    }
    const scopedKey = getScopedParamKey(item);
    if (scopedKey && state.params[scopedKey] !== undefined) {
      const val = state.params[scopedKey];
      return item.unit ? val + " " + item.unit : String(val);
    }
    const def = item.defaultVal !== undefined ? item.defaultVal : "";
    return item.unit && def !== "" ? def + " " + item.unit : String(def);
  }

  function getRawItemValue(item) {
    if (!item) return "";
    if (item.type === "kit_selector") {
      if (item.paramKey) {
        return getTempSelectorKitNo(item.paramKey);
      }
      return state.currentKitNo;
    }
    if (item.paramKey === "activeBusFxUnitParam") return state.activeBusFxUnit || "FX1";
    if (item.paramKey === "clickTempo") {
      if (state.params.clickTempo !== undefined) return state.params.clickTempo;
      return state.clickTempo || 120.0;
    }
    if (item.paramKey === "kitNameStr") {
      const kInfo = getKitInfo(state.currentKitNo);
      return kInfo.name;
    }
    if (item.paramKey === "kitSubNameStr") {
      const kInfo = getKitInfo(state.currentKitNo);
      return kInfo.subName;
    }
    const scopedKey = getScopedParamKey(item);
    if (scopedKey && state.params[scopedKey] !== undefined) {
      return state.params[scopedKey];
    }
    return item.defaultVal;
  }

  // Altera o valor do item focado (girar o Disco [+]/[-])
  function adjustCurrentValue(delta, isShift) {
    // Se uma janela de confirmação (CANCEL / OK) estiver aberta, girar o disco alterna entre CANCEL (Coluna 1) e OK (Coluna 2)
    if (state.confirmDialog) {
      moveScreenCursor(0, delta > 0 ? 1 : -1);
      return;
    }

    if (state.currentScreenId === "MENU") {
      // Na tela MENU, girar o disco percorre sequencialmente as categorias ou ícones da grade
      if (state.menuFocusArea === "cat") {
        moveMenuCursor(delta > 0 ? 1 : -1, 0);
      } else {
        const categories = getMenuCategories();
        const cat = categories[state.menuCategoryIndex] || categories[0];
        const items = (cat && cat.items) || [];
        if (items.length > 0) {
          const nextIdx = Math.max(0, Math.min(items.length - 1, state.menuGridIndex + (delta > 0 ? 1 : -1)));
          if (nextIdx !== state.menuGridIndex) {
            state.menuGridIndex = nextIdx;
            saveState();
            renderAll();
            announceCurrentMenuSelection("");
          } else {
            announceCurrentMenuSelection("Limite da grade atingido. ");
          }
        }
      }
      return;
    }

    const screen = getEffectiveScreen(state.currentScreenId);
    if (!screen || !screen.items || screen.items.length === 0) return;
    const item = screen.items[state.cursorIndex] || screen.items[0];
    if (!item) return;

    if (item.type === "readonly" || item.type === "action_button") {
      announce(item.label + ": " + getItemValue(item) + " (Item informativo; pressione ENTER ou os botões F1 a F6).");
      return;
    }

    if (item.type === "kit_selector") {
      // Se for um seletor de kit temporário (ex: SOURCE ou DESTINATION nas telas COPY), altera APENAS a variável temporária daquela lista!
      if (item.paramKey) {
        const curNo = getTempSelectorKitNo(item.paramKey);
        const step = (delta > 0 ? 1 : -1) * (isShift ? 10 : 1);
        const nextNo = Math.max(1, Math.min(200, curNo + step));
        if (item.paramKey === "copySourceKit") {
          state.copySourceKit = nextNo;
        } else if (item.paramKey === "copyDestKit") {
          state.copyDestKit = nextNo;
        } else {
          state.params[item.paramKey] = nextNo;
        }
        saveState();
        renderAll();
        announce("Disco: " + item.label + ": " + getItemValue(item));
        return;
      }
      stepKitSelection(delta, isShift, "Disco");
      return;
    }

    if (item.paramKey === "activeBusFxUnitParam") {
      const units = ["FX1", "FX2"];
      const idx = Math.max(0, units.indexOf(state.activeBusFxUnit));
      const nextIdx = Math.max(0, Math.min(units.length - 1, idx + (delta > 0 ? 1 : -1)));
      state.activeBusFxUnit = units[nextIdx];
      saveState();
      renderAll();
      announce("Unidade BUS FX alterada para BUS-" + (state.activeBusLetter || "A") + " / " + state.activeBusFxUnit);
      return;
    }

    const scopedKey = getScopedParamKey(item);
    if (!scopedKey) return;

    if (
      item.type === "enum" ||
      item.type === "pan" ||
      item.type === "instrument" ||
      item.type === "kit_phrase" ||
      item.type === "song_selector" ||
      item.type === "fx_type"
    ) {
      const opts = getDynamicOptions(item);
      if (opts.length === 0) return;
      const curVal = String(getRawItemValue(item));
      let curIdx = opts.indexOf(curVal);
      if (curIdx === -1) {
        curIdx = opts.findIndex(function (o) {
          return o.indexOf(curVal) !== -1 || curVal.indexOf(o) !== -1;
        });
        if (curIdx === -1) curIdx = 0;
      }
      const step = isShift ? (item.type === "instrument" ? 10 : 5) : 1;
      const nextIdx = Math.max(0, Math.min(opts.length - 1, curIdx + delta * step));
      const newVal = opts[nextIdx];
      state.params[scopedKey] = newVal;

      // Se estamos na janela INST_LIST_WINDOW alterando o instrumento temporário, sincroniza com a camada ativa (A ou B) do pad!
      if (item.paramKey === "instListTempInst") {
        const targetLayerKey = state.instListTargetKey || "layerAInst";
        const padKey = "K" + state.currentKitNo + "_P" + getCurrentPad().id + "_" + targetLayerKey;
        state.params[padKey] = newVal;
      }

      // Se alterou o Template do metrônomo na tela CLICK_TEMPO, carrega o preset de faders daquele Template!
      if (item.paramKey === "clickTemplate") {
        applyClickTemplatePreset(newVal);
      }

      saveState();
      renderAll();
      announce(item.label + ": " + newVal);
      return;
    }

    if (item.type === "db") {
      const rawVal = getRawItemValue(item);
      const min = item.min !== undefined ? item.min : -60.0;
      const max = item.max !== undefined ? item.max : 6.0;
      const allowMinusInf = item.allowMinusInf !== false;
      let curNum;
      if (rawVal === "-INF" || rawVal === "-INF dB" || Number(rawVal) <= min) {
        curNum = min;
      } else {
        curNum = parseFloat(String(rawVal).replace("+", "").replace(" dB", ""));
        if (isNaN(curNum)) curNum = 0.0;
      }
      const baseStep = item.step || 0.5;
      const shiftStep = item.shiftStep || baseStep * 10;
      const step = isShift ? shiftStep : baseStep;
      const nextNum = Math.max(min, Math.min(max, Number((curNum + delta * step).toFixed(1))));
      if (allowMinusInf && nextNum <= min) {
        state.params[scopedKey] = "-INF";
      } else {
        state.params[scopedKey] = nextNum;
      }
      saveState();
      renderAll();
      announce(item.label + ": " + getItemValue(item));
      return;
    }

    if (item.type === "int") {
      const curVal = Number(getRawItemValue(item)) || 0;
      const baseStep = item.step || 1;
      const shiftStep = item.shiftStep || baseStep * 10;
      const step = isShift ? shiftStep : baseStep;
      const min = item.min !== undefined ? item.min : -9999;
      const max = item.max !== undefined ? item.max : 9999;
      const nextVal = Math.max(min, Math.min(max, curVal + delta * step));
      state.params[scopedKey] = nextVal;
      if (item.paramKey === "clickTempo") {
        state.clickTempo = nextVal;
      }
      saveState();
      renderAll();
      announce(item.label + ": " + getItemValue(item));
      return;
    }

    if (item.type === "float") {
      const curVal = parseFloat(String(getRawItemValue(item)).replace("+", "")) || 0;
      const baseStep = item.step || 0.1;
      const shiftStep = item.shiftStep || (item.paramKey === "clickTempo" ? 1.0 : baseStep * 5);
      const step = isShift ? shiftStep : baseStep;
      const min = item.min !== undefined ? item.min : -999;
      const max = item.max !== undefined ? item.max : 999;
      const nextVal = Math.max(min, Math.min(max, Number((curVal + delta * step).toFixed(2))));
      state.params[scopedKey] = nextVal;
      if (item.paramKey === "clickTempo") {
        state.clickTempo = nextVal;
      }
      saveState();
      renderAll();
      announce(item.label + ": " + getItemValue(item));
      return;
    }

    if (item.type === "fx_param") {
      // Parâmetro de efeito BUS FX do Data List: pode ser lista de opções ou faixa numérica
      const rangeStr = item.rangeText || "";
      if (rangeStr.indexOf(",") !== -1 && rangeStr.indexOf("–") === -1 && rangeStr.indexOf("...") === -1) {
        const opts = rangeStr.split(",").map(function (s) { return s.trim(); });
        const curVal = String(getRawItemValue(item));
        let idx = opts.indexOf(curVal);
        if (idx === -1) idx = 0;
        const nextIdx = Math.max(0, Math.min(opts.length - 1, idx + delta));
        state.params[scopedKey] = opts[nextIdx];
      } else {
        let curNum = parseFloat(getRawItemValue(item));
        if (isNaN(curNum)) curNum = 0;
        const step = isShift ? 10 : 1;
        state.params[scopedKey] = curNum + delta * step;
      }
      saveState();
      renderAll();
      announce(item.label + ": " + getItemValue(item) + " (Faixa: " + item.rangeText + ")");
      return;
    }

    if (item.type === "text_v31") {
      const charset = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_+*/=()[]!?.,";
      const curStr = String(getRawItemValue(item) || "");
      const padded = (curStr + "                ").slice(0, 16);
      const pos = Math.max(0, Math.min(15, state.nameCharCursor || 0));
      const curCh = padded.charAt(pos);
      let chIdx = charset.indexOf(curCh);
      if (chIdx === -1) chIdx = 0;
      const step = isShift ? 10 : 1;
      const nextChIdx = (chIdx + delta * step + charset.length * 10) % charset.length;
      const newCh = charset.charAt(nextChIdx);
      const updated = (padded.slice(0, pos) + newCh + padded.slice(pos + 1)).replace(/\s+$/, "");
      state.params[scopedKey] = updated;
      if (item.paramKey === "kitNameStr") {
        state.kitNames[state.currentKitNo] = updated || "Init Kit";
      } else if (item.paramKey === "kitSubNameStr") {
        state.kitSubNames[state.currentKitNo] = updated;
      }
      saveState();
      renderAll();
      announce(
        item.label +
          " — Posição " +
          (pos + 1) +
          "/16 alterada para '" +
          (newCh === " " ? "Espaço" : newCh) +
          "'. Texto atual: \"" +
          updated +
          '"'
      );
      return;
    }

    if (item.type === "text") {
      const sampleNames = [
        "Studio A",
        "Custom Worship",
        "Stage Arena",
        "Dry Pocket",
        "Heavy Groove",
        "Session Pro",
        "Batera Brasil",
        "TD-316 Master"
      ];
      const curVal = String(getRawItemValue(item));
      let idx = sampleNames.indexOf(curVal);
      idx = (idx + (delta > 0 ? 1 : sampleNames.length - 1)) % sampleNames.length;
      state.params[scopedKey] = sampleNames[idx];
      if (item.paramKey === "kitNameStr") {
        state.kitNames[state.currentKitNo] = sampleNames[idx];
      } else if (item.paramKey === "kitSubNameStr") {
        state.kitSubNames[state.currentKitNo] = sampleNames[idx];
      }
      saveState();
      renderAll();
      announce(item.label + ": " + sampleNames[idx]);
    }
  }

  // Navegação por setas na tela MENU (5 Categorias à esquerda × Grade 4x3 à direita)
  function moveMenuCursor(dRow, dCol) {
    const categories = getMenuCategories();
    if (categories.length === 0) return;

    if (state.menuFocusArea === "cat") {
      if (dCol > 0) {
        // Seta Direita entra na grade de ícones 4x3 da categoria atual!
        state.menuFocusArea = "grid";
        state.menuGridIndex = 0;
        saveState();
        renderAll();
        announceCurrentMenuSelection("Entrou na grade de ícones à direita. ");
        return;
      }
      if (dRow !== 0) {
        const nextCat = Math.max(0, Math.min(categories.length - 1, state.menuCategoryIndex + dRow));
        if (nextCat !== state.menuCategoryIndex) {
          state.menuCategoryIndex = nextCat;
          state.menuGridIndex = 0;
          saveState();
          renderAll();
          announceCurrentMenuSelection("");
        } else {
          announceCurrentMenuSelection(dRow < 0 ? "Primeira categoria. " : "Última categoria. ");
        }
        return;
      }
      announceCurrentMenuSelection("Limite da coluna esquerda. ");
      return;
    }

    // Foco está na grade 4x3 à direita ("grid")
    const cat = categories[state.menuCategoryIndex] || categories[0];
    const items = cat.items || [];
    if (items.length === 0) return;

    const currentItem = items[state.menuGridIndex] || items[0];
    const curRow = currentItem.row || 1;
    const curCol = currentItem.col || 1;

    if (dCol < 0 && curCol === 1) {
      // Seta Esquerda a partir da Coluna 1 volta para a coluna de categorias à esquerda!
      state.menuFocusArea = "cat";
      saveState();
      renderAll();
      announceCurrentMenuSelection("Voltou para a coluna de categorias à esquerda. ");
      return;
    }

    const targetRow = curRow + dRow;
    const targetCol = curCol + dCol;

    // Procura item na coordenada exata (targetRow, targetCol)
    // As setas Direita/Esquerda NÃO avançam circularmente para a próxima/anterior linha!
    let foundIdx = items.findIndex(function (it) {
      return it.row === targetRow && it.col === targetCol;
    });

    // Se moveu para baixo/cima para uma linha com menos colunas, pega o item mais próximo daquela linha
    if (foundIdx === -1 && dRow !== 0) {
      const sameRowItems = items
        .map(function (it, idx) { return { it: it, idx: idx }; })
        .filter(function (x) { return x.it.row === targetRow; });
      if (sameRowItems.length > 0) {
        foundIdx = sameRowItems[sameRowItems.length - 1].idx;
      }
    }

    if (foundIdx !== -1 && foundIdx !== state.menuGridIndex) {
      state.menuGridIndex = foundIdx;
      saveState();
      renderAll();
      announceCurrentMenuSelection("");
    } else {
      const limitMsg =
        dCol > 0
          ? "Fim da linha (Coluna " + curCol + "). "
          : dCol < 0
          ? "Início da linha (Coluna " + curCol + "). "
          : dRow < 0
          ? "Primeira linha. "
          : "Última linha. ";
      announceCurrentMenuSelection(limitMsg);
    }
  }

  function announceCurrentMenuSelection(prefix) {
    const categories = getMenuCategories();
    const cat = categories[state.menuCategoryIndex];
    if (!cat) return;
    const catName = cat.label || cat.name || "";

    if (state.menuFocusArea === "cat") {
      const firstIcon = cat.items && cat.items[0] ? (cat.items[0].label || cat.items[0].name) : "";
      announce(
        (prefix || "") +
          "Categoria MENU (Linha " +
          cat.row +
          " de 5): " +
          catName +
          " — " +
          cat.description +
          " Pressione Seta Direita ou ENTER para navegar nos " +
          cat.items.length +
          " ícones (primeiro ícone: " +
          firstIcon +
          ")."
      );
    } else {
      const icon = cat.items[state.menuGridIndex] || cat.items[0];
      if (!icon) return;
      const iconName = icon.label || icon.name || "";
      announce(
        (prefix || "") +
          catName +
          " — Ícone " +
          iconName +
          " (Linha " +
          icon.row +
          ", Coluna " +
          icon.col +
          ", item " +
          (state.menuGridIndex + 1) +
          " de " +
          cat.items.length +
          "): " +
          icon.description +
          " Pressione ENTER para abrir."
      );
    }
  }

  // Navegação 2D por setas nas demais telas do módulo (sem avanço circular de linha nas setas Esquerda/Direita)
  function moveScreenCursor(dRow, dCol) {
    if (state.currentScreenId === "MENU" && !state.confirmDialog) {
      moveMenuCursor(dRow, dCol);
      return;
    }

    const screen = getEffectiveScreen(state.currentScreenId);
    if (!screen || !screen.items || screen.items.length === 0) return;

    const items = screen.items;
    const current = items[state.cursorIndex] || items[0];

    // Comportamento nas telas KIT, KIT_LIST e SAFETY_MODE:
    // Setas Cima/Baixo no item 0 percorrem a lista ativa de kits (Todos os 200 ou Apenas Favoritos)!
    // Na tela KIT, Setas Esquerda/Direita no item 0 alternam a página de visualização (1: NORMAL, 2: TEMPO & PHRASE, 3: PAD SET / KIT DIAGRAM)!
    if (
      !state.confirmDialog &&
      (state.currentScreenId === "KIT" ||
        state.currentScreenId === "KIT_LIST" ||
        state.currentScreenId === "SAFETY_MODE") &&
      state.cursorIndex === 0
    ) {
      if (dRow !== 0) {
        stepKitSelection(dRow, false, dRow > 0 ? "Seta Baixo" : "Seta Cima");
        return;
      }
      if (dCol !== 0 && state.currentScreenId === "KIT") {
        const pageItem = items.find(function (it) { return it.paramKey === "kitViewPage"; });
        if (pageItem && pageItem.options) {
          const curPage = String(getRawItemValue(pageItem));
          let pIdx = pageItem.options.indexOf(curPage);
          if (pIdx === -1) pIdx = 0;
          const nextPIdx = Math.max(0, Math.min(pageItem.options.length - 1, pIdx + dCol));
          const newPage = pageItem.options[nextPIdx];
          state.params.kitViewPage = newPage;
          saveState();
          renderAll();
          announce(
            (dCol > 0 ? "Seta Direita" : "Seta Esquerda") +
              " — Página de visualização da tela KIT: " +
              newPage
          );
          return;
        }
      }
    }

    // Na tela KIT_NAME, Setas Esquerda/Direita em um item text_v31 movem o cursor entre os 16 caracteres!
    if (!state.confirmDialog && current && current.type === "text_v31" && dCol !== 0) {
      const curPos = state.nameCharCursor || 0;
      const nextPos = Math.max(0, Math.min(15, curPos + dCol));
      state.nameCharCursor = nextPos;
      saveState();
      renderAll();
      const rawTxt = String(getRawItemValue(current) || "");
      const padded = (rawTxt + "                ").slice(0, 16);
      const ch = padded.charAt(nextPos) === " " ? "Espaço" : padded.charAt(nextPos);
      announce(
        current.label +
          " — Cursor de caractere na posição " +
          (nextPos + 1) +
          " de 16 ('" +
          ch +
          "'). Gire o disco [+]/[-] para alterar a letra."
      );
      return;
    }

    const curRow = current.row || state.cursorIndex + 1;
    const curCol = current.col || 1;

    let nextIdx = -1;

    if (dRow !== 0) {
      const targetRow = curRow + dRow;
      // Tenta mesma coluna na linha alvo
      nextIdx = items.findIndex(function (it, idx) {
        const r = it.row || idx + 1;
        const c = it.col || 1;
        return r === targetRow && c === curCol;
      });
      // Se a linha alvo existe mas tem menos colunas, seleciona a coluna mais próxima naquela linha
      if (nextIdx === -1) {
        const sameRowItems = items
          .map(function (it, idx) {
            return { it: it, idx: idx, r: it.row || idx + 1, c: it.col || 1 };
          })
          .filter(function (x) {
            return x.r === targetRow;
          });
        if (sameRowItems.length > 0) {
          sameRowItems.sort(function (a, b) {
            return Math.abs(a.c - curCol) - Math.abs(b.c - curCol);
          });
          nextIdx = sameRowItems[0].idx;
        }
      }
    } else if (dCol !== 0) {
      // Seta Esquerda/Direita move-se ESTRITAMENTE dentro da mesma linha (curRow), sem avançar para outra linha
      const targetCol = curCol + dCol;
      nextIdx = items.findIndex(function (it, idx) {
        const r = it.row || idx + 1;
        const c = it.col || 1;
        return r === curRow && c === targetCol;
      });
    }

    if (nextIdx !== -1 && nextIdx !== state.cursorIndex) {
      state.cursorIndex = nextIdx;
      saveState();
      renderAll();
      announceCurrentItem("");
    } else {
      const limitMsg =
        dCol > 0
          ? "Fim da linha (Coluna " + curCol + "). "
          : dCol < 0
          ? "Início da linha (Coluna " + curCol + "). "
          : dRow < 0
          ? "Primeira linha. "
          : "Última linha. ";
      announceCurrentItem(limitMsg);
    }
  }

  function announceCurrentItem(prefix) {
    if (state.currentScreenId === "MENU" && !state.confirmDialog) {
      announceCurrentMenuSelection(prefix);
      return;
    }
    const screen = getEffectiveScreen(state.currentScreenId);
    if (!screen) return;
    const items = screen.items || [];
    const item = items[state.cursorIndex] || items[0];
    if (!item) {
      announce((prefix || "") + screen.title);
      return;
    }
    const valStr = getItemValue(item);
    const posStr =
      " (Linha " +
      (item.row || state.cursorIndex + 1) +
      ", Coluna " +
      (item.col || 1) +
      " — item " +
      (state.cursorIndex + 1) +
      " de " +
      items.length +
      ")";
    announce(
      (prefix || "") +
        item.label +
        ": " +
        valStr +
        posStr +
        ". " +
        (item.explanation || "")
    );
  }

  // Abre a tela de confirmação (CANCEL / OK) antes de executar qualquer alteração na lista real
  function openConfirmationDialog(btnDef, fLabel) {
    const screenId = resolveScreenId(state.currentScreenId);
    const isExchange = btnDef.opType === "exchange_kit" || btnDef.label === "EXCHANGE";
    const srcMode = state.copySourceType || "USER";
    const srcNo = getTempSelectorKitNo("copySourceKit");
    const dstNo = getTempSelectorKitNo("copyDestKit");
    const srcPreset = getPresetKitInfo(srcNo);
    const srcUser = getKitInfo(srcNo);
    const dstUser = getKitInfo(dstNo);

    const srcDesc =
      srcMode === "PRESET"
        ? "Preset " + srcPreset.code + " " + srcPreset.name
        : srcMode === "SD CARD"
        ? "SD Card " + srcUser.code + " " + srcUser.name
        : "User " + srcUser.code + " " + srcUser.name;
    const dstDesc = "User " + dstUser.code + " " + dstUser.name;

    let promptText = "Are you sure?";
    let summaryText = btnDef.confirmMsg || "Confirmar operação";
    let actionKind = btnDef.opType || "generic";

    if (screenId === "COPY_KIT") {
      if (isExchange) {
        promptText = "Exchange kit data. Are you sure?";
        summaryText = "Trocar de posição (EXCHANGE) " + srcDesc + " ⇄ " + dstDesc;
        actionKind = "exchange_kit";
      } else {
        promptText = "Copy kit data to selected kit. Are you sure?";
        summaryText = "Copiar " + srcDesc + " ➔ para o destino " + dstDesc;
        actionKind = "copy_kit";
      }
    } else if (screenId.indexOf("COPY_") === 0) {
      if (isExchange) {
        promptText = "Exchange data. Are you sure?";
        summaryText = "Permutar dados entre " + srcDesc + " e " + dstDesc;
        actionKind = "exchange_partial";
      } else {
        promptText = "Copy data to selected destination. Are you sure?";
        summaryText = "Copiar dados de " + srcDesc + " para " + dstDesc;
        actionKind = "copy_partial";
      }
    } else if (screenId === "KIT_INITIALIZE" || btnDef.action === "confirm_init_kit") {
      const curK = getKitInfo(state.currentKitNo);
      promptText = "Initialize kit data. Are you sure?";
      summaryText = "Inicializar (zerar edições) do Drum Kit atual " + curK.code + " (" + curK.name + ")";
      actionKind = "init_kit";
    } else if (screenId === "BACKUP_LOAD_1KIT") {
      const targetNo = getTempSelectorKitNo("load1KitDest");
      const targetKit = getKitInfo(targetNo);
      promptText = "Clear selected kit data and load 1 kit backup data from SD card. Are you sure?";
      summaryText = "Carregar backup do cartão SD no destino User " + targetKit.code + " " + targetKit.name;
      actionKind = "load_1kit";
    } else if (screenId === "BACKUP_SAVE_1KIT") {
      const saveNo = getTempSelectorKitNo("save1KitSource");
      const saveKit = getKitInfo(saveNo);
      promptText = "Save selected kit data to SD card. Are you sure?";
      summaryText = "Salvar User " + saveKit.code + " " + saveKit.name + " no cartão SD";
      actionKind = "save_1kit";
    } else if (screenId === "FACTORY_RESET") {
      promptText = "This will clear all internal memory contents. Are you sure?";
      summaryText = "Restaurar todas as configurações do módulo V31 para o padrão de fábrica";
      actionKind = "factory_reset";
    }

    state.confirmDialog = {
      screenTitle: "CONFIRMAÇÃO — " + btnDef.label + " (" + promptText + ")",
      promptText: promptText,
      summaryText: summaryText,
      actionKind: actionKind,
      confirmMsg: btnDef.confirmMsg || "Operação concluída com sucesso!",
      prevCursorIndex: state.cursorIndex
    };
    // No V31, a janela de confirmação sempre abre com o cursor em CANCEL (Linha 1, Coluna 1)
    state.cursorIndex = 0;
    saveState();
    renderAll();

    announce(
      fLabel +
        " (" +
        btnDef.label +
        ") — Tela de Confirmação aberta: \"" +
        promptText +
        "\" (" +
        summaryText +
        "). Cursor em Opção 1: CANCEL (Linha 1, Coluna 1). Pressione Seta Direita para selecionar OK (Linha 1, Coluna 2) e pressione ENTER para confirmar, ou pressione ENTER em CANCEL para cancelar."
    );
  }

  // Executa a manipulação na lista real de kits SOMENTE após o usuário selecionar OK e pressionar [ENTER]
  function executeConfirmedAction(dlg) {
    if (!dlg) return;
    const srcMode = state.copySourceType || "USER";
    const srcNo = getTempSelectorKitNo("copySourceKit");
    const dstNo = getTempSelectorKitNo("copyDestKit");

    if (dlg.actionKind === "init_kit") {
      const kNo = state.currentKitNo;
      const kPrefix = "K" + kNo + "_";
      Object.keys(state.params).forEach(function (k) {
        if (k.indexOf(kPrefix) === 0) {
          delete state.params[k];
        }
      });
      state.kitNames[kNo] = "Init Kit";
      state.kitSubNames[kNo] = "";
      saveState();
      renderAll();
      announce(
        "Confirmado (OK): Complete! Drum Kit " +
          String(kNo).padStart(3, "0") +
          " inicializado para 'Init Kit' com todos os parâmetros padrão."
      );
      return;
    }

    if (dlg.actionKind === "copy_kit") {
      const srcPrefix = "K" + srcNo + "_";
      const dstPrefix = "K" + dstNo + "_";

      if (srcMode === "PRESET") {
        // Copia da memória predefinida de fábrica (PRESET) para o kit de destino do usuário (dstNo)
        const presetInfo = getPresetKitInfo(srcNo);
        state.kitNames[dstNo] = presetInfo.name;
        state.kitSubNames[dstNo] = presetInfo.subName;
        Object.keys(state.params).forEach(function (k) {
          if (k.indexOf(dstPrefix) === 0) {
            delete state.params[k];
          }
        });
        const updatedDst = getKitInfo(dstNo);
        saveState();
        renderAll();
        announce(
          "Confirmado (OK): Complete! O kit de fábrica Preset " +
            presetInfo.code +
            " (" +
            presetInfo.name +
            ") foi copiado para o destino User " +
            updatedDst.code +
            ". Na lista original de kits do módulo, o Kit " +
            updatedDst.code +
            " agora é \"" +
            updatedDst.name +
            "\"!"
        );
        return;
      }

      // Copia de USER (ou SD CARD) para o kit de destino do usuário (dstNo)
      const srcUserInfo = getKitInfo(srcNo);
      const copiedParams = {};
      Object.keys(state.params).forEach(function (k) {
        if (k.indexOf(srcPrefix) === 0) {
          const suffix = k.slice(srcPrefix.length);
          copiedParams[dstPrefix + suffix] = state.params[k];
        }
      });

      state.kitNames[dstNo] = srcUserInfo.name;
      state.kitSubNames[dstNo] = srcUserInfo.subName;

      Object.keys(state.params).forEach(function (k) {
        if (k.indexOf(dstPrefix) === 0) {
          delete state.params[k];
        }
      });
      Object.keys(copiedParams).forEach(function (k) {
        state.params[k] = copiedParams[k];
      });

      const updatedDst = getKitInfo(dstNo);
      saveState();
      renderAll();
      announce(
        "Confirmado (OK): Complete! O kit de origem (" +
          srcMode +
          " " +
          srcUserInfo.code +
          ": " +
          srcUserInfo.name +
          ") foi copiado para o destino User " +
          updatedDst.code +
          ". Na lista original de kits do módulo, o Kit " +
          updatedDst.code +
          " agora é \"" +
          updatedDst.name +
          "\"!"
      );
      return;
    }

    if (dlg.actionKind === "exchange_kit") {
      // Troca (permuta) os dois kits de posição na lista original do usuário
      const srcInfo = getKitInfo(srcNo);
      const dstInfo = getKitInfo(dstNo);
      const srcPrefix = "K" + srcNo + "_";
      const dstPrefix = "K" + dstNo + "_";

      const srcParams = {};
      const dstParams = {};
      Object.keys(state.params).forEach(function (k) {
        if (k.indexOf(srcPrefix) === 0) {
          srcParams[k.slice(srcPrefix.length)] = state.params[k];
          delete state.params[k];
        } else if (k.indexOf(dstPrefix) === 0) {
          dstParams[k.slice(dstPrefix.length)] = state.params[k];
          delete state.params[k];
        }
      });

      Object.keys(srcParams).forEach(function (suffix) {
        state.params[dstPrefix + suffix] = srcParams[suffix];
      });
      Object.keys(dstParams).forEach(function (suffix) {
        state.params[srcPrefix + suffix] = dstParams[suffix];
      });

      state.kitNames[srcNo] = dstInfo.name;
      state.kitSubNames[srcNo] = dstInfo.subName;
      state.kitNames[dstNo] = srcInfo.name;
      state.kitSubNames[dstNo] = srcInfo.subName;

      // Permuta também a marcação de favorito se apenas um deles era favorito
      const srcFav = isKitFavorite(srcNo);
      const dstFav = isKitFavorite(dstNo);
      if (srcFav !== dstFav) {
        const favs = getSortedFavorites().filter(function (n) {
          return n !== srcNo && n !== dstNo;
        });
        if (srcFav) favs.push(dstNo);
        if (dstFav) favs.push(srcNo);
        favs.sort(function (a, b) { return a - b; });
        state.favoriteKits = favs;
      }

      saveState();
      renderAll();
      announce(
        "Confirmado (OK): Complete! Os kits User " +
          srcInfo.code +
          " e User " +
          dstInfo.code +
          " foram trocados de posição na lista original! Agora o Kit " +
          srcInfo.code +
          " é \"" +
          state.kitNames[srcNo] +
          "\" e o Kit " +
          dstInfo.code +
          " é \"" +
          state.kitNames[dstNo] +
          "\"."
      );
      return;
    }

    if (dlg.actionKind === "copy_partial" || dlg.actionKind === "exchange_partial") {
      const srcPrefix = "K" + srcNo + "_";
      const dstPrefix = "K" + dstNo + "_";
      Object.keys(state.params).forEach(function (k) {
        if (k.indexOf(srcPrefix) === 0) {
          const suffix = k.slice(srcPrefix.length);
          state.params[dstPrefix + suffix] = state.params[k];
        }
      });
      saveState();
      renderAll();
      announce("Confirmado (OK): Complete! " + dlg.confirmMsg + " (" + dlg.summaryText + ").");
      return;
    }

    if (dlg.actionKind === "factory_reset") {
      resetAllMemory();
      return;
    }

    saveState();
    renderAll();
    announce("Confirmado (OK): Complete! " + dlg.confirmMsg);
  }

  // Navega para uma nova tela do módulo V31
  function navigateToScreen(rawTargetScreenId, pushHistory, customPrefix) {
    const targetScreenId = resolveScreenId(rawTargetScreenId);
    const screensObj = getScreensMap();
    if (!screensObj[targetScreenId]) {
      announce("Tela " + targetScreenId + " selecionada.");
      return;
    }

    const prevScreenId = resolveScreenId(state.currentScreenId);
    state.confirmDialog = null;

    // Sincroniza flag safetyMode ao entrar ou sair de SAFETY_MODE
    if (targetScreenId === "SAFETY_MODE") {
      state.safetyMode = true;
    } else if (prevScreenId === "SAFETY_MODE" && targetScreenId === "KIT") {
      state.safetyMode = false;
    }

    if (pushHistory && state.currentScreenId !== targetScreenId) {
      state.historyStack.push(state.currentScreenId);
      if (state.historyStack.length > 30) {
        state.historyStack.shift();
      }
    }

    // Ao entrar em uma tela COPY, inicializa as duas listas temporárias (SOURCE e DESTINATION) com o kit atual de forma independente
    if (targetScreenId.indexOf("COPY_") === 0 && prevScreenId.indexOf("COPY_") !== 0) {
      state.copySourceKit = state.currentKitNo;
      state.copyDestKit = state.currentKitNo;
    }

    state.currentScreenId = targetScreenId;
    state.cursorIndex = 0;

    // Salva snapshot dos parâmetros da tela ao entrar para suportar [SHIFT] + [F] UNDO
    const targetEff = getEffectiveScreen(targetScreenId);
    const snap = {};
    if (targetEff && Array.isArray(targetEff.items)) {
      targetEff.items.forEach(function (it) {
        const sk = getScopedParamKey(it);
        if (sk) {
          snap[sk] = getRawItemValue(it);
        }
      });
    }
    state.screenEntrySnapshot = snap;

    if (targetScreenId === "MENU") {
      // Mantém a categoria atual do MENU e foca na coluna de categorias ou ícone
      renderAll();
      announceCurrentMenuSelection((customPrefix ? customPrefix + " " : "") + "Tela MENU aberta. ");
      saveState();
      return;
    }

    saveState();
    renderAll();

    const screen = getEffectiveScreen(targetScreenId);
    const firstItem = screen.items && screen.items[0];
    const firstItemText = firstItem
      ? " Cursor em " + firstItem.label + ": " + getItemValue(firstItem) + "."
      : "";
    const fSummary = (screen.fButtons || [])
      .filter(function (f) { return f.label && f.label !== "---"; })
      .map(function (f) { return "F" + f.num + " " + f.label; })
      .join(", ");

    announce(
      (customPrefix ? customPrefix + " — " : "") +
        "Tela " +
        screen.title +
        "." +
        firstItemText +
        (fSummary ? " Funções F: " + fSummary + "." : "")
    );
  }

  // Pressionar [ENTER]
  function handleEnterButton() {
    // Se uma Tela de Confirmação (CANCEL / OK) estiver aberta
    if (state.confirmDialog) {
      const dlg = state.confirmDialog;
      const isOkSelected = state.cursorIndex === 1;
      state.confirmDialog = null;
      state.cursorIndex = dlg.prevCursorIndex || 0;
      if (isOkSelected) {
        executeConfirmedAction(dlg);
      } else {
        saveState();
        renderAll();
        const underScreen = getEffectiveScreen(state.currentScreenId);
        announce(
          "ENTER em CANCEL: Operação cancelada. A lista original de kits não foi alterada. De volta à tela " +
            (underScreen ? underScreen.title : state.currentScreenId) +
            "."
        );
      }
      return;
    }

    if (state.currentScreenId === "MENU") {
      const categories = getMenuCategories();
      const cat = categories[state.menuCategoryIndex];
      if (!cat) return;
      const catName = cat.label || cat.name || "";
      if (state.menuFocusArea === "cat") {
        // Se estava na coluna esquerda, ENTER entra na grade de ícones 4x3 à direita
        state.menuFocusArea = "grid";
        state.menuGridIndex = 0;
        saveState();
        renderAll();
        announceCurrentMenuSelection("Entrou na grade de ícones de " + catName + ". ");
        return;
      }
      const icon = cat.items[state.menuGridIndex] || cat.items[0];
      if (icon && icon.targetScreen) {
        navigateToScreen(icon.targetScreen, true, "ENTER em " + (icon.label || icon.name));
      }
      return;
    }

    if (state.currentScreenId === "KIT_LIST") {
      navigateToScreen("KIT", false, "ENTER (Lista fechada)");
      return;
    }

    if (state.currentScreenId === "INST_LIST_WINDOW") {
      const prev = state.historyStack.length > 0 ? state.historyStack.pop() : "INST_MAIN";
      navigateToScreen(prev, false, "ENTER (Instrumento confirmado na lista)");
      return;
    }

    const screen = getEffectiveScreen(state.currentScreenId);
    if (!screen) return;
    const item = (screen.items || [])[state.cursorIndex];
    if (item && item.targetScreen) {
      navigateToScreen(item.targetScreen, true, "ENTER em " + item.label);
      return;
    }
    if (item && item.type === "instrument" && state.currentScreenId !== "INST_LIST_WINDOW") {
      state.instListTargetKey = item.paramKey || "layerAInst";
      state.params.instListTempInst = getRawItemValue(item);
      navigateToScreen("INST_LIST_WINDOW", true, "ENTER em " + item.label + " (Abrindo INSTRUMENT LIST)");
      return;
    }
    announceCurrentItem("ENTER: ");
  }

  // Pressionar [EXIT]
  function handleExitButton(isShift) {
    if (isShift) {
      state.songPlaying = false;
      state.recActive = false;
      saveState();
      renderAll();
      announce("SHIFT + EXIT: ALL SOUND OFF executado! Todas as vozes e notas foram silenciadas imediatamente.");
      return;
    }

    // Em SAFETY_MODE, o botão EXIT físico fica bloqueado (Manual p. 12: apenas [F6] OFF desbloqueia!)
    if (state.currentScreenId === "SAFETY_MODE") {
      announce("SAFETY MODE ATIVO: Os botões de navegação estão bloqueados. Pressione [F6] (Tecla 6) OFF para sair do Safety Mode.");
      return;
    }

    // Se uma Tela de Confirmação (CANCEL / OK) estiver aberta, EXIT cancela e fecha a janela de confirmação
    if (state.confirmDialog) {
      const dlg = state.confirmDialog;
      state.confirmDialog = null;
      state.cursorIndex = dlg.prevCursorIndex || 0;
      saveState();
      renderAll();
      const underScreen = getEffectiveScreen(state.currentScreenId);
      announce(
        "EXIT: Tela de confirmação fechada e operação cancelada. A lista original não foi alterada. De volta à tela " +
          (underScreen ? underScreen.title : state.currentScreenId) +
          "."
      );
      return;
    }

    if (state.currentScreenId === "MENU" && state.menuFocusArea === "grid") {
      // No MENU, se estiver na grade de ícones, EXIT volta para a coluna esquerda ou para KIT
      state.menuFocusArea = "cat";
      saveState();
      renderAll();
      announceCurrentMenuSelection("EXIT: Voltou para a coluna de categorias do MENU. Pressione EXIT novamente para ir à tela KIT. ");
      return;
    }

    if (state.historyStack.length > 0) {
      const prev = state.historyStack.pop();
      navigateToScreen(prev, false, "EXIT (Voltar)");
    } else if (state.currentScreenId !== "KIT") {
      navigateToScreen("KIT", false, "EXIT para tela inicial KIT");
    } else {
      announce("Tela inicial KIT. Você já está no nível superior.");
    }
  }

  // Pressionar [F1] a [F6] (ou [SHIFT] + [F1]–[F6])
  function handleFButton(num, isShift) {
    if (state.confirmDialog) {
      announce(
        "Tela de Confirmação ativa. Use Seta Esquerda para CANCEL (Coluna 1) ou Seta Direita para OK (Coluna 2) e pressione ENTER (ou EXIT para cancelar)."
      );
      return;
    }

    const screen = getEffectiveScreen(state.currentScreenId);
    if (!screen) return;

    let btnDef = null;
    if (isShift && Array.isArray(screen.shiftFButtons)) {
      btnDef = screen.shiftFButtons.find(function (b) { return b.num === num; });
    }
    if (!btnDef && Array.isArray(screen.fButtons)) {
      btnDef = screen.fButtons.find(function (b) { return b.num === num; });
    }

    const fLabel = (isShift ? "SHIFT + F" : "F") + num;

    if (!btnDef || btnDef.action === "none" || btnDef.label === "---") {
      announce(fLabel + ": Sem função atribuída nesta tela.");
      return;
    }

    switch (btnDef.action) {
      case "goto":
        if (btnDef.target) {
          navigateToScreen(btnDef.target, true, fLabel + " (" + btnDef.label + ")");
        }
        break;

      case "select_bus": {
        const letters = ["A", "B", "C", "D"];
        const busLetter = btnDef.bus || letters[num - 1] || "A";
        state.activeBusLetter = busLetter;
        state.cursorIndex = 0;
        saveState();
        renderAll();
        const updatedBus = getEffectiveScreen("BUS_FX_EDIT");
        announce(
          fLabel +
            " (BUS-" +
            busLetter +
            "): Selecionado o barramento BUS-" +
            busLetter +
            ". " +
            (updatedBus ? updatedBus.title : "")
        );
        break;
      }

      case "select_bus_fx": {
        const fxSlot = btnDef.fxSlot || (num === 5 ? "FX1" : "FX2");
        const bLet = state.activeBusLetter || "A";
        const swKey = "K" + state.currentKitNo + "_BUSA_" + bLet + "_" + fxSlot + "_busFxSwitch";
        if (state.activeBusFxUnit === fxSlot) {
          const curSw = state.params[swKey] || "ON";
          state.params[swKey] = curSw === "ON" ? "OFF" : "ON";
        } else {
          state.activeBusFxUnit = fxSlot;
        }
        // Move cursor para a coluna correspondente (Coluna 1 = FX1, Coluna 2 = FX2)
        state.cursorIndex = fxSlot === "FX2" ? 1 : 0;
        saveState();
        renderAll();
        const swState = state.params[swKey] || "ON";
        announce(
          fLabel +
            " (" +
            btnDef.label +
            "): BUS-" +
            bLet +
            " / " +
            fxSlot +
            " selecionado (Switch = " +
            swState +
            "). Cursor na Coluna " +
            (fxSlot === "FX2" ? "2 (FX2)" : "1 (FX1)") +
            "."
        );
        break;
      }

      case "open_inst_list": {
        const curItem = (screen.items || [])[state.cursorIndex];
        if (curItem && (curItem.paramKey === "layerBInst" || (curItem.label && curItem.label.indexOf("Layer B") !== -1))) {
          state.instListTargetKey = "layerBInst";
        } else {
          state.instListTargetKey = "layerAInst";
        }
        const padKey = "K" + state.currentKitNo + "_P" + getCurrentPad().id + "_" + state.instListTargetKey;
        if (state.params[padKey] !== undefined) {
          state.params.instListTempInst = state.params[padKey];
        }
        navigateToScreen("INST_LIST_WINDOW", true, fLabel + " (LIST — " + state.instListTargetKey + ")");
        break;
      }

      case "enter_selected":
        handleEnterButton();
        break;

      case "set_copy_src": {
        state.copySourceType = btnDef.src || "USER";
        state.cursorIndex = 0;
        saveState();
        renderAll();
        const updatedScreen = getEffectiveScreen(state.currentScreenId);
        const firstIt = updatedScreen && updatedScreen.items && updatedScreen.items[0];
        announce(
          fLabel +
            " (" +
            state.copySourceType +
            "): Aba de origem da cópia definida para " +
            state.copySourceType +
            ". " +
            (updatedScreen ? updatedScreen.title + ". " : "") +
            (firstIt ? "Cursor em " + firstIt.label + ": " + getItemValue(firstIt) + "." : "")
        );
        break;
      }

      case "toggle_favorite":
        toggleFavoriteKit(fLabel);
        break;

      case "toggle_fav_filter":
        toggleFavoriteFilter(fLabel);
        break;

      case "toggle_phrase": {
        state.phrasePlaying = !state.phrasePlaying;
        saveState();
        renderAll();
        const k = getKitInfo(state.currentKitNo);
        announce(
          fLabel +
            " (PHRASE): Frase demonstrativa do Kit " +
            k.code +
            " " +
            k.name +
            " " +
            (state.phrasePlaying ? "INICIADA (PLAYING)" : "PARADA (STOPPED)") +
            "."
        );
        break;
      }

      case "toggle_param": {
        const dummyItem = { paramKey: btnDef.paramKey, type: "enum", options: ["OFF", "ON"], defaultVal: "OFF" };
        // Procura se o item existe na tela para pegar as opções reais
        const matchItem = (screen.items || []).find(function (it) {
          return it.paramKey === btnDef.paramKey;
        });
        const targetItem = matchItem || dummyItem;
        const opts = getDynamicOptions(targetItem);
        const scopedKey = getScopedParamKey(targetItem);
        const curVal = String(getRawItemValue(targetItem));
        let idx = opts.indexOf(curVal);
        idx = (idx + 1) % Math.max(1, opts.length);
        const newVal = opts[idx] || (curVal === "ON" ? "OFF" : "ON");
        if (scopedKey) {
          state.params[scopedKey] = newVal;
        }
        saveState();
        renderAll();
        announce(
          fLabel +
            " (" +
            btnDef.label +
            "): " +
            (targetItem.label || btnDef.paramKey) +
            " alterado para " +
            newVal +
            ". " +
            (btnDef.description || "")
        );
        break;
      }

      case "toggle_click":
        state.clickActive = !state.clickActive;
        saveState();
        renderAll();
        announce(
          fLabel +
            " (CLICK): Metrônomo " +
            (state.clickActive ? "LIGADO (" + state.clickTempo + " BPM)" : "DESLIGADO") +
            "."
        );
        break;

      case "tap_tempo": {
        const now = Date.now();
        if (state.lastTapTime && now - state.lastTapTime < 3000) {
          const interval = now - state.lastTapTime;
          state.tapIntervals.push(interval);
          if (state.tapIntervals.length > 4) state.tapIntervals.shift();
          const avgMs =
            state.tapIntervals.reduce(function (a, b) { return a + b; }, 0) / state.tapIntervals.length;
          const calcBpm = Math.max(20.0, Math.min(300.0, Number((60000 / avgMs).toFixed(1))));
          state.clickTempo = calcBpm;
          state.params.clickTempo = calcBpm;
        } else {
          state.tapIntervals = [];
        }
        state.lastTapTime = now;
        saveState();
        renderAll();
        announce(
          fLabel +
            " (TAP TEMPO): Andamento medido = " +
            Number(state.clickTempo).toFixed(1) +
            " BPM. (Pressione repetidamente no pulso desejado para medir o tempo)."
        );
        break;
      }

      case "toggle_song":
        state.songPlaying = !state.songPlaying;
        saveState();
        renderAll();
        announce(
          fLabel +
            " (" +
            btnDef.label +
            "): Reprodução " +
            (state.songPlaying ? "INICIADA (PLAYING)" : "PARADA (STOPPED)") +
            "."
        );
        break;

      case "toggle_coach":
        state.coachRunning = !state.coachRunning;
        saveState();
        renderAll();
        announce(
          fLabel +
            " (" +
            btnDef.label +
            "): Exercício COACH " +
            (state.coachRunning ? "INICIADO (Aguardando contagem inicial para avaliação)" : "PARADO") +
            "."
        );
        break;

      case "audition_pad": {
        const pad = getCurrentPad();
        const zone = getCurrentZone();
        const k = getKitInfo(state.currentKitNo);
        announce(
          fLabel +
            " (PREVIEW): Tocando prévia sonora do pad " +
            pad.name +
            " (Zona " +
            zone +
            ") no Kit " +
            k.code +
            " " +
            k.name +
            "."
        );
        break;
      }

      case "reset_item": {
        const curIt = (screen.items || [])[state.cursorIndex];
        if (curIt) {
          const sk = getScopedParamKey(curIt);
          if (sk && curIt.defaultVal !== undefined) {
            state.params[sk] = curIt.defaultVal;
          }
          saveState();
          renderAll();
          announce(
            fLabel +
              " (" +
              btnDef.label +
              "): Parâmetro " +
              curIt.label +
              " reiniciado para o valor padrão (" +
              getItemValue(curIt) +
              ")."
          );
        }
        break;
      }

      case "undo_screen": {
        const snap = state.screenEntrySnapshot || {};
        (screen.items || []).forEach(function (it) {
          const sk = getScopedParamKey(it);
          if (sk) {
            if (snap[sk] !== undefined) {
              state.params[sk] = snap[sk];
            } else if (it.defaultVal !== undefined) {
              state.params[sk] = it.defaultVal;
            }
          }
        });
        saveState();
        renderAll();
        announce(
          fLabel +
            " (UNDO): Alterações feitas nesta tela foram desfeitas e restauradas ao estado anterior."
        );
        break;
      }

      case "name_char_op": {
        const nameItem =
          (screen.items || [])[state.cursorIndex] ||
          (screen.items || []).find(function (it) { return it.type === "text_v31"; });
        if (!nameItem) break;
        const sk = getScopedParamKey(nameItem);
        const curStr = String(getRawItemValue(nameItem) || "");
        let padded = (curStr + "                ").slice(0, 16);
        const pos = Math.max(0, Math.min(15, state.nameCharCursor || 0));
        const op = btnDef.op || btnDef.label;

        if (op === "INSERT" || op === "ins") {
          padded = (padded.slice(0, pos) + " " + padded.slice(pos)).slice(0, 16);
        } else if (op === "DELETE" || op === "del") {
          padded = (padded.slice(0, pos) + padded.slice(pos + 1) + " ").slice(0, 16);
        } else if (op === "CHAR TYPE" || op === "type") {
          const ch = padded.charAt(pos);
          let nextCh = "A";
          if (ch >= "A" && ch <= "Z") nextCh = "a";
          else if (ch >= "a" && ch <= "z") nextCh = "0";
          else if (ch >= "0" && ch <= "9") nextCh = " ";
          else nextCh = "A";
          padded = padded.slice(0, pos) + nextCh + padded.slice(pos + 1);
        } else if (op === "CLEAR" || op === "clear") {
          padded = "                ";
          state.nameCharCursor = 0;
        }

        const finalStr = padded.replace(/\s+$/, "");
        if (sk) state.params[sk] = finalStr;
        if (nameItem.paramKey === "kitNameStr") {
          state.kitNames[state.currentKitNo] = finalStr || "Init Kit";
        } else if (nameItem.paramKey === "kitSubNameStr") {
          state.kitSubNames[state.currentKitNo] = finalStr;
        }
        saveState();
        renderAll();
        announce(
          fLabel +
            " (" +
            btnDef.label +
            "): " +
            nameItem.label +
            ' agora é "' +
            finalStr +
            '".'
        );
        break;
      }

      case "song_ab_repeat": {
        const order = ["OFF", "A- (Ponto A marcado, aguardando B)", "A-B REPEAT ATIVO", "OFF"];
        const idx = order.indexOf(state.abRepeatState);
        state.abRepeatState = order[(idx + 1) % 3];
        saveState();
        renderAll();
        announce(fLabel + " (A◄►B): Repetição de trecho A-B = " + state.abRepeatState + ".");
        break;
      }

      case "song_reset_speed":
        state.params.songSpeed = "100 %";
        saveState();
        renderAll();
        announce(fLabel + " (RESET): Velocidade da música restaurada para 100%.");
        break;

      case "reset_section": {
        (screen.items || []).forEach(function (it) {
          const sk = getScopedParamKey(it);
          if (sk && it.defaultVal !== undefined) {
            state.params[sk] = it.defaultVal;
          }
        });
        saveState();
        renderAll();
        announce(
          fLabel +
            " (" +
            btnDef.label +
            "): Todos os parâmetros desta seção foram restaurados aos valores padrão de fábrica."
        );
        break;
      }

      case "confirm_action":
      case "confirm_init_kit":
        openConfirmationDialog(btnDef, fLabel);
        break;

      case "announce":
      default:
        announce(fLabel + " (" + btnDef.label + "): " + (btnDef.message || btnDef.description || "Ação executada."));
        break;
    }
  }

  // Seleção de Pad e Zona (equivalente a bater no pad ou segurar [ENTER] + Setas)
  function changePad(delta) {
    if (state.triggerLock) {
      announce("Trigger Lock está ATIVADO (SHIFT + MENU). O pad permanece travado em " + getCurrentPad().name + ".");
      return;
    }
    state.currentPadIndex = (state.currentPadIndex + delta + PADS.length) % PADS.length;
    state.currentZoneIndex = 0;
    saveState();
    renderAll();
    announce("Pad selecionado: " + getCurrentPad().name + " — Zona: " + getCurrentZone());
  }

  function changeZone(delta) {
    const pad = getCurrentPad();
    state.currentZoneIndex = (state.currentZoneIndex + delta + pad.zones.length) % pad.zones.length;
    saveState();
    renderAll();
    announce("Zona do pad " + pad.name + " alterada para: " + getCurrentZone());
  }

  function strikeCurrentPad() {
    const pad = getCurrentPad();
    const zone = getCurrentZone();
    const vel = Math.floor(85 + Math.random() * 40);

    // Se estiver na tela CLICK_TEMPO ou CLICK_SETUP, bater no Tap Pad configurado calcula o Tap Tempo!
    if (state.currentScreenId === "CLICK_TEMPO" || state.currentScreenId === "CLICK_SETUP") {
      const tapPadSetting = String(state.params.clickTapPad || "SNARE HEAD").toUpperCase();
      const currentPadZoneLabel = (pad.id + " " + zone).toUpperCase();
      if (
        tapPadSetting.indexOf(pad.id.toUpperCase()) !== -1 ||
        currentPadZoneLabel.indexOf(tapPadSetting) !== -1
      ) {
        const now = Date.now();
        if (state.lastTapTime && now - state.lastTapTime < 3000) {
          const interval = now - state.lastTapTime;
          state.tapIntervals.push(interval);
          if (state.tapIntervals.length > 4) state.tapIntervals.shift();
          const avgMs =
            state.tapIntervals.reduce(function (a, b) { return a + b; }, 0) / state.tapIntervals.length;
          const calcBpm = Math.max(20.0, Math.min(300.0, Number((60000 / avgMs).toFixed(1))));
          state.clickTempo = calcBpm;
          state.params.clickTempo = calcBpm;
          saveState();
          renderAll();
        } else {
          state.tapIntervals = [];
        }
        state.lastTapTime = now;
        announce(
          "Tap Pad percutido (" +
            pad.name +
            " [" +
            zone +
            "]): Andamento do metrônomo = " +
            Number(state.clickTempo).toFixed(1) +
            " BPM."
        );
        return;
      }
    }

    announce(
      "Pad percutido: " +
        pad.name +
        " [" +
        zone +
        "] — Velocity = " +
        vel +
        ". (Em DrumLink/WT-10/DWe: configurações pendentes '*' foram sincronizadas com o pad sem fio!)"
    );
  }

  // Lê resumo completo da posição atual (Tecla I ou ?)
  function announceWhereAmI() {
    const screen = getEffectiveScreen(state.currentScreenId);
    const k = getKitInfo(state.currentKitNo);
    const pad = getCurrentPad();
    const zone = getCurrentZone();
    const fSummary = (screen.fButtons || [])
      .map(function (f) { return "F" + f.num + ": " + f.label; })
      .join(" | ");

    if (state.currentScreenId === "MENU") {
      const categories = getMenuCategories();
      const cat = categories[state.menuCategoryIndex];
      const icon = cat.items[state.menuGridIndex] || cat.items[0];
      const catName = cat.label || cat.name || "";
      const iconName = icon.label || icon.name || "";
      announce(
        "Resumo: Tela MENU. Categoria " +
          cat.row +
          " de 5 (" +
          catName +
          "). Foco em: " +
          (state.menuFocusArea === "cat"
            ? "Coluna de Categorias à esquerda"
            : "Grade de Ícones à direita — " + iconName + " (Linha " + icon.row + ", Coluna " + icon.col + ")") +
          ". Kit atual: " +
          k.code +
          " " +
          k.name +
          ". Pad: " +
          pad.name +
          " (" +
          zone +
          ")."
      );
      return;
    }

    const item = (screen.items || [])[state.cursorIndex];
    announce(
      "Resumo: Tela " +
        screen.title +
        ". Cursor em " +
        (item ? item.label + " = " + getItemValue(item) + " (Linha " + item.row + ", Coluna " + item.col + ")" : "N/A") +
        ". Botões F: " +
        fSummary +
        ". Kit: " +
        k.code +
        " " +
        k.name +
        ". Pad: " +
        pad.name +
        " (" +
        zone +
        ")."
    );
  }

  function announceAllFButtons() {
    const screen = getEffectiveScreen(state.currentScreenId);
    if (!screen) return;
    const parts = (screen.fButtons || []).map(function (f) {
      return "F" + f.num + " (" + f.label + "): " + (f.description || "Sem função");
    });
    announce("Funções de F1 a F6 na tela " + screen.title + ": " + parts.join(" | "));
  }

  // Renderização completa da Interface e da Seção de Documentação da Tela Atual
  function renderAll() {
    const screen = getEffectiveScreen(state.currentScreenId);
    if (!screen) return;

    const k = getKitInfo(state.currentKitNo);
    const pad = getCurrentPad();
    const zone = getCurrentZone();

    // 1. Barra de Status Superior
    const pillKit = document.getElementById("status-kit");
    const pillPad = document.getElementById("status-pad");
    const pillClick = document.getElementById("status-click");
    const pillFlags = document.getElementById("status-flags");

    if (pillKit) {
      const listModeBadge = state.favFilterActive
        ? " [Lista: ★ FAVORITOS (" + getSortedFavorites().length + ")]"
        : " [Lista: TODOS (200)]";
      pillKit.innerHTML =
        "<strong>KIT:</strong> " +
        k.starPrefix +
        k.code +
        " " +
        k.name +
        listModeBadge;
    }
    if (pillPad) pillPad.innerHTML = "<strong>PAD:</strong> " + pad.id + " [" + zone + "]";
    if (pillClick) {
      pillClick.innerHTML =
        "<strong>CLICK:</strong> " +
        (state.clickActive ? "ON" : "OFF") +
        " (" +
        state.clickTempo +
        " BPM)";
      pillClick.className = "status-pill" + (state.clickActive ? " active-flag" : "");
    }
    if (pillFlags) {
      const flags = [];
      if (state.triggerLock) flags.push("TRIG LOCK");
      if (state.safetyMode) flags.push("SAFETY MODE");
      if (state.songPlaying) flags.push("SONG PLAYING");
      if (state.phrasePlaying) flags.push("PHRASE PLAYING");
      pillFlags.innerHTML =
        "<strong>MODO:</strong> " + (flags.length > 0 ? flags.join(" | ") : "NORMAL");
    }

    // 2. Cabeçalho do Visor LCD
    const lcdTitleEl = document.getElementById("lcd-screen-title");
    const lcdPadEl = document.getElementById("lcd-pad-indicator");
    if (lcdTitleEl) lcdTitleEl.textContent = screen.title;
    if (lcdPadEl) {
      lcdPadEl.textContent =
        pad.id +
        " (" +
        zone +
        ") | " +
        k.starPrefix +
        "KIT " +
        k.code +
        (state.favFilterActive ? " [ALL ►★]" : " [►ALL ☆]");
    }

    // 3. Corpo do Visor LCD
    const lcdBody = document.getElementById("lcd-body");
    if (lcdBody) {
      lcdBody.innerHTML = "";
      if (state.currentScreenId === "MENU") {
        renderMenuScreenLCD(lcdBody);
      } else {
        renderStandardScreenLCD(lcdBody, screen);
      }
    }

    // 4. Barra F1–F6 do Visor LCD
    const fbarEl = document.getElementById("lcd-fbar");
    if (fbarEl) {
      fbarEl.innerHTML = "";
      for (let i = 1; i <= 6; i++) {
        const fDef =
          (screen.fButtons || []).find(function (b) { return b.num === i; }) || {
            num: i,
            label: "---",
            action: "none",
            description: "Sem função"
          };
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "fbar-btn" + (fDef.label === "---" ? " f-disabled" : "");
        btn.setAttribute(
          "aria-label",
          "Tecla de função F" + i + ": " + fDef.label + ". " + (fDef.description || "")
        );
        btn.innerHTML =
          '<span class="f-num">[F' + i + " / Tecla " + i + ']</span><span class="f-lbl">' + fDef.label + "</span>";
        btn.addEventListener("click", function (ev) {
          handleFButton(i, ev.shiftKey);
        });
        fbarEl.appendChild(btn);
      }
    }

    // 5. Seletores Rápidos de Pad
    const padRow = document.getElementById("pad-selector-row");
    if (padRow) {
      padRow.innerHTML = "";
      PADS.forEach(function (p, idx) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "pad-chip" + (idx === state.currentPadIndex ? " active-pad" : "");
        b.textContent = p.id;
        b.setAttribute("aria-pressed", idx === state.currentPadIndex ? "true" : "false");
        b.addEventListener("click", function () {
          state.currentPadIndex = idx;
          state.currentZoneIndex = 0;
          saveState();
          renderAll();
          announce("Pad selecionado: " + p.name + " (" + getCurrentZone() + ")");
        });
        padRow.appendChild(b);
      });
    }

    // 6. Seção Completa de Descrição da Tela Atual + Mapa de Setas + Link para o Manual
    renderScreenDocumentation(screen);
  }

  function renderMenuScreenLCD(container) {
    const categories = getMenuCategories();
    const wrap = document.createElement("div");
    wrap.className = "menu-split-layout";

    // Coluna esquerda: 5 Categorias
    const catList = document.createElement("ul");
    catList.className = "menu-cat-list";
    catList.setAttribute("aria-label", "Coluna Esquerda do MENU: 5 Categorias");

    categories.forEach(function (cat, idx) {
      const catName = cat.label || cat.name || "";
      const li = document.createElement("li");
      const isSelected = idx === state.menuCategoryIndex;
      const isFocused = isSelected && state.menuFocusArea === "cat";
      li.className =
        "menu-cat-item" +
        (isSelected ? " selected-cat" : "") +
        (isFocused ? " focused-cursor" : "");
      li.innerHTML =
        "<span>" + cat.row + ". " + catName + '</span><span class="menu-icon-coord">►</span>';
      li.addEventListener("click", function () {
        state.menuCategoryIndex = idx;
        state.menuFocusArea = "cat";
        state.menuGridIndex = 0;
        saveState();
        renderAll();
        announceCurrentMenuSelection("");
      });
      catList.appendChild(li);
    });

    // Grade direita: 4 colunas x até 3 linhas de ícones da categoria selecionada
    const activeCat = categories[state.menuCategoryIndex] || categories[0];
    const activeCatName = activeCat ? (activeCat.label || activeCat.name || "") : "";
    const iconGrid = document.createElement("div");
    iconGrid.className = "menu-icon-grid";
    iconGrid.setAttribute("aria-label", "Grade de Ícones 4 por 3 da categoria " + activeCatName);

    ((activeCat && activeCat.items) || []).forEach(function (icon, idx) {
      const iconName = icon.label || icon.name || "";
      const cell = document.createElement("div");
      const isFocused = state.menuFocusArea === "grid" && idx === state.menuGridIndex;
      cell.className = "menu-icon-cell" + (isFocused ? " focused-cursor" : "");
      cell.innerHTML =
        '<span class="menu-icon-coord">L' +
        icon.row +
        " × C" +
        icon.col +
        '</span><span class="menu-icon-label">' +
        iconName +
        "</span>";
      cell.addEventListener("click", function () {
        state.menuFocusArea = "grid";
        state.menuGridIndex = idx;
        saveState();
        renderAll();
        announceCurrentMenuSelection("");
      });
      cell.addEventListener("dblclick", function () {
        if (icon.targetScreen) {
          navigateToScreen(icon.targetScreen, true, "Abrindo " + iconName);
        }
      });
      iconGrid.appendChild(cell);
    });

    wrap.appendChild(catList);
    wrap.appendChild(iconGrid);
    container.appendChild(wrap);
  }

  function renderStandardScreenLCD(container, screen) {
    const items = screen.items || [];
    const maxCol = items.reduce(function (acc, it) {
      return Math.max(acc, it.col || 1);
    }, 1);

    const grid = document.createElement("div");
    grid.className = "lcd-items-grid";
    grid.style.gridTemplateColumns =
      maxCol > 1 ? "repeat(" + Math.min(maxCol, 4) + ", 1fr)" : "1fr";

    items.forEach(function (item, idx) {
      const card = document.createElement("div");
      const isFocused = idx === state.cursorIndex;
      card.className = "lcd-item-card" + (isFocused ? " focused-cursor" : "");
      if (maxCol > 1) {
        card.style.gridColumn = String(Math.min(item.col || 1, 4));
        card.style.gridRow = String(item.row || idx + 1);
      }
      card.innerHTML =
        '<div class="lcd-item-top">' +
        '<span class="lcd-item-label">' +
        item.label +
        "</span>" +
        '<span class="lcd-item-coord">L' +
        (item.row || idx + 1) +
        "×C" +
        (item.col || 1) +
        "</span>" +
        "</div>" +
        '<div class="lcd-item-value">' +
        getItemValue(item) +
        "</div>";

      card.addEventListener("click", function () {
        state.cursorIndex = idx;
        saveState();
        renderAll();
        announceCurrentItem("");
      });
      grid.appendChild(card);
    });
    container.appendChild(grid);

    // Visualização de 9 linhas da janela KIT LIST (►ALL ☆ vs ALL ►★)
    if (state.currentScreenId === "KIT_LIST") {
      const favs = getSortedFavorites();
      const activePool = state.favFilterActive
        ? favs
        : Array.from({ length: 200 }, function (_, i) { return i + 1; });

      const listBox = document.createElement("div");
      listBox.style.marginTop = "8px";
      listBox.style.borderTop = "1px solid #334155";
      listBox.style.paddingTop = "8px";

      if (activePool.length === 0) {
        listBox.innerHTML =
          '<p style="margin:0; color:#fbbf24; font-family:var(--font-mono);">Lista de Favoritos (ALL ►★) vazia. Pressione [F2] (Tecla 2) para favoritar o kit atual ou [F4] (Tecla 4) para voltar à lista completa (►ALL ☆).</p>';
      } else {
        let curPos = activePool.indexOf(state.currentKitNo);
        if (curPos === -1) curPos = 0;
        const start = Math.max(0, Math.min(activePool.length - 9, curPos - 4));
        const visibleSlice = activePool.slice(start, start + 9);

        const ul = document.createElement("ul");
        ul.style.listStyle = "none";
        ul.style.margin = "0";
        ul.style.padding = "0";
        ul.style.display = "grid";
        ul.style.gap = "4px";

        visibleSlice.forEach(function (kitNum) {
          const info = getKitInfo(kitNum);
          const isCurrent = kitNum === state.currentKitNo;
          const li = document.createElement("li");
          li.style.padding = "5px 10px";
          li.style.borderRadius = "4px";
          li.style.cursor = "pointer";
          li.style.fontFamily = "var(--font-mono)";
          li.style.fontSize = "0.88rem";
          li.style.background = isCurrent ? "#1e3a8a" : "#0f172a";
          li.style.border = isCurrent ? "1px solid #facc15" : "1px solid #1e293b";
          li.textContent =
            (info.isFavorite ? "★ " : "  ") +
            info.code +
            ": " +
            info.name +
            (info.subName ? " — " + info.subName : "");
          li.addEventListener("click", function () {
            state.currentKitNo = kitNum;
            saveState();
            renderAll();
            announce(
              (info.isFavorite ? "★ [FAVORITO] " : "") +
                "Drum Kit " +
                info.code +
                ": " +
                info.name
            );
          });
          ul.appendChild(li);
        });
        listBox.appendChild(ul);
      }
      container.appendChild(listBox);
    }
  }

  // Renderiza a Descrição Completa da Tela Atual, Mapa de Setas e Link Direto para o Manual
  function renderScreenDocumentation(screen) {
    const docContainer = document.getElementById("current-screen-doc");
    if (!docContainer) return;

    const manualSecId = screen.manualSectionId || "menu-principal";
    const manualUrl = "manual.html#" + manualSecId;

    let html = "";
    html += "<h2>Descrição Completa da Tela Atual: " + screen.title + "</h2>";
    html +=
      '<p><a class="nav-link-btn btn-primary" href="' +
      manualUrl +
      '">Abrir esta seção no Manual de Referência + Data List Integrado (' +
      manualSecId +
      ")</a></p>";

    html += "<h3>Como Chegar a Esta Tela (Contagem de Setas e Botões)</h3>";
    html += "<p><strong>Caminho físico no módulo:</strong> " + (screen.accessPath || "Pressione [MENU].") + "</p>";

    html += "<h3>Estrutura Espacial da Tela e Comportamento do Cursor</h3>";
    html += "<p>" + (screen.visualDescription || "") + "</p>";

    // Painel de Favoritos (★) e Alternância entre as Duas Listas nas telas KIT e KIT_LIST
    if (state.currentScreenId === "KIT" || state.currentScreenId === "KIT_LIST") {
      const favs = getSortedFavorites();
      const curKit = getKitInfo(state.currentKitNo);
      html += "<h3>Sistema de Favoritos (★) e Alternância entre as Duas Listas (►ALL ☆ / ALL ►★)</h3>";
      html +=
        "<p><strong>Lista Ativa no Momento:</strong> <code>" +
        (state.favFilterActive
          ? "ALL ►★ — Lista Apenas de Favoritos (" + favs.length + " kit(s))"
          : "►ALL ☆ — Lista Completa de Todos os 200 Kits (001 a 200)") +
        "</code> | <strong>Status do Kit Atual (" +
        curKit.code +
        " " +
        curKit.name +
        "):</strong> <code>" +
        (curKit.isFavorite ? "★ FAVORITO" : "☆ Não Favorito") +
        "</code></p>";

      html +=
        '<div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:14px;">' +
        '<button type="button" id="doc-btn-toggle-fav" class="btn btn-primary">' +
        (curKit.isFavorite
          ? "☆ Desfavoritar Kit Atual (" + curKit.code + ")"
          : "★ Favoritar Kit Atual (" + curKit.code + ")") +
        " [F2 em KIT LIST]</button>" +
        '<button type="button" id="doc-btn-toggle-list" class="btn btn-amber">' +
        (state.favFilterActive
          ? "Alternar para Lista Completa (►ALL ☆ — 200 Kits)"
          : "Alternar para Lista de Favoritos (ALL ►★ — " + favs.length + " Kits)") +
        " [F4 em KIT LIST]</button>" +
        "</div>";

      if (favs.length > 0) {
        html += '<div class="table-responsive"><table class="v31-table">';
        html +=
          "<caption>Kits Marcados como Favoritos (★) — Total: " +
          favs.length +
          " kit(s)</caption>";
        html +=
          "<thead><tr>" +
          '<th scope="col">Posição nos Favoritos</th>' +
          '<th scope="col">Código e Nome do Kit</th>' +
          '<th scope="col">Subnome</th>' +
          '<th scope="col">Ações Rápidas</th>' +
          "</tr></thead><tbody>";

        favs.forEach(function (fNo, idx) {
          const fk = getKitInfo(fNo);
          const isCur = fNo === state.currentKitNo;
          html +=
            '<tr class="' +
            (isCur ? "active-row" : "") +
            '">' +
            "<td>" +
            (idx + 1) +
            " de " +
            favs.length +
            "</td>" +
            "<td><strong>★ " +
            fk.code +
            ": " +
            fk.name +
            (isCur ? " [SELECIONADO]" : "") +
            "</strong></td>" +
            "<td>" +
            (fk.subName || "—") +
            "</td>" +
            "<td>" +
            '<button type="button" class="btn" data-select-kit="' +
            fNo +
            '">Selecionar Kit ' +
            fk.code +
            "</button> " +
            '<button type="button" class="btn btn-danger" data-unfav-kit="' +
            fNo +
            '">Desfavoritar ' +
            fk.code +
            "</button>" +
            "</td>" +
            "</tr>";
        });
        html += "</tbody></table></div>";
      } else {
        html +=
          '<div class="tip-box">Nenhum kit está favoritado no momento. Pressione <strong>F1 (Tecla 1)</strong> na tela KIT para abrir a janela <strong>KIT LIST</strong> e depois <strong>F2 (Tecla 2)</strong> para favoritar ou desfavoritar qualquer kit, e <strong>F4 (Tecla 4)</strong> para alternar entre as listas <code>►ALL ☆</code> e <code>ALL ►★</code>.</div>';
      }
    }

    // Se estiver na tela MENU, renderiza o mapa completo das 5 categorias e seus ícones com contagem exata de setas
    if (state.currentScreenId === "MENU") {
      const categories = getMenuCategories();
      html += "<h3>Mapa Completo de Setas da Tela MENU (5 Categorias × Grade 4×3)</h3>";
      categories.forEach(function (cat, cIdx) {
        const catName = cat.label || cat.name || "";
        const downCount = cIdx;
        const catStepText =
          downCount === 0
            ? "Já selecionado no topo (0 setas)"
            : downCount + " seta(s) para baixo [▼] na coluna esquerda";
        html +=
          "<h4>Categoria " +
          cat.row +
          ": " +
          catName +
          " (" +
          catStepText +
          ") — " +
          cat.description +
          "</h4>";
        html += '<div class="table-responsive"><table class="v31-table">';
        html +=
          "<caption>Ícones de " +
          catName +
          " na grade 4 colunas × até 3 linhas à direita</caption>";
        html +=
          "<thead><tr>" +
          '<th scope="col">Ícone</th>' +
          '<th scope="col">Coordenada na Grade</th>' +
          '<th scope="col">Quantas Setas a partir da Categoria</th>' +
          '<th scope="col">Função e Tela que Abre</th>' +
          '<th scope="col">Ação Rápida</th>' +
          "</tr></thead><tbody>";

        (cat.items || []).forEach(function (ic) {
          const icName = ic.label || ic.name || "";
          const rDown = ic.row - 1;
          const cRight = ic.col; // 1 seta para entrar na grade + (col-1)
          const arrowDesc =
            cRight +
            " seta(s) à direita [►]" +
            (rDown > 0 ? " + " + rDown + " seta(s) para baixo [▼]" : "") +
            " + [ENTER]";
          html +=
            "<tr>" +
            "<td><strong>" +
            icName +
            "</strong></td>" +
            "<td>Linha " +
            ic.row +
            ", Coluna " +
            ic.col +
            "</td>" +
            "<td>" +
            arrowDesc +
            "</td>" +
            "<td>" +
            ic.description +
            "</td>" +
            '<td><button type="button" class="btn" data-goto-screen="' +
            ic.targetScreen +
            '">Ir para ' +
            icName +
            "</button></td>" +
            "</tr>";
        });
        html += "</tbody></table></div>";
      });
    } else if (screen.items && screen.items.length > 0) {
      // Tabela de Parâmetros / Opções da Tela Atual com Coordenadas de Setas e Valores Atuais
      html += "<h3>Mapa de Parâmetros e Coordenadas de Setas Desta Tela</h3>";
      html += '<div class="table-responsive"><table class="v31-table">';
      html +=
        "<caption>Parâmetros navegáveis com as setas na tela " +
        screen.title +
        "</caption>";
      html +=
        "<thead><tr>" +
        '<th scope="col">#</th>' +
        '<th scope="col">Parâmetro / Opção</th>' +
        '<th scope="col">Valor Atual</th>' +
        '<th scope="col">Coordenada / Quantas Setas</th>' +
        '<th scope="col">Faixa de Valores e Explicação Completa</th>' +
        "</tr></thead><tbody>";

      screen.items.forEach(function (it, idx) {
        const isCur = idx === state.cursorIndex;
        const r = it.row || idx + 1;
        const c = it.col || 1;
        const downArrows = r - 1;
        const rightArrows = c - 1;
        let arrowSteps = [];
        if (downArrows > 0) arrowSteps.push(downArrows + " seta(s) para baixo [▼]");
        if (rightArrows > 0) arrowSteps.push(rightArrows + " seta(s) à direita [►]");
        const arrowText =
          arrowSteps.length === 0
            ? "Posição inicial do cursor (0 setas)"
            : arrowSteps.join(" + ");

        html +=
          '<tr class="' +
          (isCur ? "active-row" : "") +
          '">' +
          "<td>" +
          (idx + 1) +
          "</td>" +
          "<td><strong>" +
          it.label +
          (isCur ? " [CURSOR ATUAL]" : "") +
          "</strong></td>" +
          "<td><code>" +
          getItemValue(it) +
          "</code></td>" +
          "<td>Linha " +
          r +
          ", Coluna " +
          c +
          " (" +
          arrowText +
          ")</td>" +
          "<td>" +
          (it.explanation || "") +
          "</td>" +
          "</tr>";
      });
      html += "</tbody></table></div>";
    }

    // Tabela dos Botões de Função F1 a F6 na Tela Atual
    html += "<h3>Funções dos Botões [F1] a [F6] Nesta Tela</h3>";
    html += '<div class="table-responsive"><table class="v31-table">';
    html += "<caption>Botões de função F1 a F6 (Teclas 1 a 6 ou F1 a F6)</caption>";
    html +=
      "<thead><tr>" +
      '<th scope="col">Botão / Atalho</th>' +
      '<th scope="col">Rótulo no Visor</th>' +
      '<th scope="col">O que acontece ao pressionar</th>' +
      "</tr></thead><tbody>";

    (screen.fButtons || []).forEach(function (f) {
      html +=
        "<tr>" +
        "<td><strong>[F" +
        f.num +
        "]</strong> (Tecla <code>" +
        f.num +
        "</code> ou <code>F" +
        f.num +
        "</code>)</td>" +
        "<td><strong>" +
        f.label +
        "</strong></td>" +
        "<td>" +
        (f.description || "Sem função nesta tela.") +
        "</td>" +
        "</tr>";
    });

    if (Array.isArray(screen.shiftFButtons) && screen.shiftFButtons.length > 0) {
      screen.shiftFButtons.forEach(function (sf) {
        html +=
          "<tr>" +
          "<td><strong>[SHIFT] + [F" +
          sf.num +
          "]</strong> (<code>Shift + " +
          sf.num +
          "</code>)</td>" +
          "<td><strong>" +
          sf.label +
          "</strong></td>" +
          "<td>" +
          (sf.description || "") +
          "</td>" +
          "</tr>";
      });
    }

    html += "</tbody></table></div>";

    docContainer.innerHTML = html;

    // Conecta botões de Favoritos e Alternância de Lista na seção de documentação
    const docBtnFav = document.getElementById("doc-btn-toggle-fav");
    if (docBtnFav) {
      docBtnFav.addEventListener("click", function () {
        toggleFavoriteKit("F2");
      });
    }
    const docBtnList = document.getElementById("doc-btn-toggle-list");
    if (docBtnList) {
      docBtnList.addEventListener("click", function () {
        toggleFavoriteFilter("F4");
      });
    }

    const selectKitBtns = docContainer.querySelectorAll("[data-select-kit]");
    selectKitBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const kNo = parseInt(btn.getAttribute("data-select-kit"), 10);
        if (!isNaN(kNo)) {
          state.currentKitNo = kNo;
          saveState();
          renderAll();
          const info = getKitInfo(kNo);
          announce("Selecionado " + info.starPrefix + "Drum Kit " + info.code + ": " + info.name);
        }
      });
    });

    const unfavKitBtns = docContainer.querySelectorAll("[data-unfav-kit]");
    unfavKitBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const kNo = parseInt(btn.getAttribute("data-unfav-kit"), 10);
        if (!isNaN(kNo)) {
          const favs = getSortedFavorites();
          const idx = favs.indexOf(kNo);
          if (idx !== -1) {
            favs.splice(idx, 1);
            state.favoriteKits = favs;
            saveState();
            renderAll();
            const info = getKitInfo(kNo);
            announce("Drum Kit " + info.code + " " + info.name + " removido dos Favoritos.");
          }
        }
      });
    });

    // Conecta botões de salto rápido gerados na documentação
    const jumpBtns = docContainer.querySelectorAll("[data-goto-screen]");
    jumpBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const target = btn.getAttribute("data-goto-screen");
        if (target) {
          navigateToScreen(target, true, "Salto direto");
          const chassis = document.getElementById("v31-simulator-app");
          if (chassis) chassis.focus();
        }
      });
    });
  }

  // Manipulador Global de Atalhos de Teclado do Módulo V31
  function handleKeyDown(ev) {
    // Não intercepta se o foco estiver num campo de busca/input nativo
    const tag = ev.target && ev.target.tagName ? ev.target.tagName.toUpperCase() : "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
      return;
    }

    if (!state.keyboardCaptureActive) {
      return;
    }

    const key = ev.key;
    const isShift = ev.shiftKey;
    const isCtrl = ev.ctrlKey;
    const isAlt = ev.altKey;

    if (isAlt) return; // Preserva atalhos do navegador com Alt (ex: Alt+Seta Voltar)

    // Ctrl + Setas: Seleção de Pad (Ctrl+Esquerda/Direita) e Zona (Ctrl+Cima/Baixo) — equivale a [ENTER] + Setas no módulo físico
    if (isCtrl) {
      if (key === "ArrowRight") {
        ev.preventDefault();
        changePad(1);
        return;
      }
      if (key === "ArrowLeft") {
        ev.preventDefault();
        changePad(-1);
        return;
      }
      if (key === "ArrowUp") {
        ev.preventDefault();
        changeZone(-1);
        return;
      }
      if (key === "ArrowDown") {
        ev.preventDefault();
        changeZone(1);
        return;
      }
      return;
    }

    // Setas de Cursor [▲] [▼] [◄] [►]
    if (key === "ArrowUp") {
      ev.preventDefault();
      moveScreenCursor(-1, 0);
      return;
    }
    if (key === "ArrowDown") {
      ev.preventDefault();
      moveScreenCursor(1, 0);
      return;
    }
    if (key === "ArrowLeft") {
      ev.preventDefault();
      moveScreenCursor(0, -1);
      return;
    }
    if (key === "ArrowRight") {
      ev.preventDefault();
      moveScreenCursor(0, 1);
      return;
    }

    // Disco [+] / [-] (Teclas +, =, ], PageUp para aumentar; -, _, [, PageDown para diminuir)
    if (key === "+" || key === "=" || key === "]" || key === "PageUp") {
      ev.preventDefault();
      adjustCurrentValue(1, isShift);
      return;
    }
    if (key === "-" || key === "_" || key === "[" || key === "PageDown") {
      ev.preventDefault();
      adjustCurrentValue(-1, isShift);
      return;
    }

    // Teclas de Função [F1] a [F6] via números 1..6 (ou Shift+1..6: ! @ # $ % ¨/&) ou F1..F6
    const shiftNumberMap = { "!": 1, "@": 2, "#": 3, "$": 4, "%": 5, "^": 6, "¨": 6 };
    if (shiftNumberMap[key]) {
      ev.preventDefault();
      handleFButton(shiftNumberMap[key], true);
      return;
    }
    if (key >= "1" && key <= "6") {
      ev.preventDefault();
      handleFButton(parseInt(key, 10), isShift);
      return;
    }
    if (/^F[1-6]$/.test(key)) {
      ev.preventDefault();
      handleFButton(parseInt(key.slice(1), 10), isShift);
      return;
    }

    // [ENTER]
    if (key === "Enter") {
      ev.preventDefault();
      handleEnterButton();
      return;
    }

    // [EXIT] (Escape ou Backspace)
    if (key === "Escape" || key === "Backspace") {
      ev.preventDefault();
      handleExitButton(isShift);
      return;
    }

    // Botões dedicados do painel físico por letras
    const upper = key.toUpperCase();

    // Em SAFETY_MODE (Manual p. 12), os botões de navegação de tela do painel ficam travados para evitar operação acidental no palco; apenas [F6] OFF desbloqueia!
    if (
      state.currentScreenId === "SAFETY_MODE" &&
      (upper === "M" ||
        upper === "K" ||
        upper === "E" ||
        upper === "Z" ||
        upper === "X" ||
        (upper === "C" && !isShift) ||
        upper === "O" ||
        upper === "S" ||
        upper === "R")
    ) {
      ev.preventDefault();
      announce(
        "SAFETY MODE ATIVO: Os botões do painel estão travados para evitar alterações acidentais no palco. Gire o disco para trocar de Kit ou pressione [F6] (Tecla 6) OFF para desativar o Safety Mode."
      );
      return;
    }

    if (upper === "M") {
      ev.preventDefault();
      if (isShift) {
        state.triggerLock = !state.triggerLock;
        saveState();
        renderAll();
        announce(
          "SHIFT + MENU (Trigger Lock): Travamento de seleção de pad " +
            (state.triggerLock ? "ATIVADO" : "DESATIVADO") +
            "."
        );
      } else {
        navigateToScreen("MENU", true, "Botão [MENU]");
      }
      return;
    }

    if (upper === "K") {
      ev.preventDefault();
      if (isShift) {
        state.safetyMode = !state.safetyMode;
        saveState();
        renderAll();
        navigateToScreen(
          state.safetyMode ? "SAFETY_MODE_LOCKED" : "KIT",
          true,
          "SHIFT + KIT (Safety Mode " + (state.safetyMode ? "ON" : "OFF") + ")"
        );
      } else {
        navigateToScreen("KIT", true, "Botão [KIT]");
      }
      return;
    }

    if (upper === "E" || upper === "Z") {
      ev.preventDefault();
      navigateToScreen("EZ_EDIT_INST", true, "Botão [EZ EDIT]");
      return;
    }

    if (upper === "X") {
      ev.preventDefault();
      if (isShift) {
        navigateToScreen("USER_SAMPLE_LIST", true, "SHIFT + EXPANSION (USER SAMPLE)");
      } else {
        navigateToScreen("EXPANSION_SLOT", true, "Botão [EXPANSION]");
      }
      return;
    }

    if (upper === "C") {
      ev.preventDefault();
      if (isShift) {
        state.clickActive = !state.clickActive;
        saveState();
        renderAll();
        announce(
          "SHIFT + CLICK: Metrônomo " +
            (state.clickActive ? "LIGADO (" + state.clickTempo + " BPM)" : "DESLIGADO") +
            "."
        );
      } else {
        navigateToScreen("CLICK_TEMPO", true, "Botão [CLICK]");
      }
      return;
    }

    if (upper === "O") {
      ev.preventDefault();
      navigateToScreen("COACH_MENU", true, "Botão [COACH]");
      return;
    }

    if (upper === "S") {
      ev.preventDefault();
      navigateToScreen("SONG_MAIN", true, "Botão [SONG]");
      return;
    }

    if (upper === "R") {
      ev.preventDefault();
      navigateToScreen("REC_STANDBY", true, "Botão [●] (REC)");
      return;
    }

    if (key === " " || upper === "P") {
      ev.preventDefault();
      if (state.currentScreenId === "REC_STANDBY") {
        state.recActive = !state.recActive;
        state.songPlaying = state.recActive;
        const recTarget = state.params.recTargetMode || "DRUM REC (Gravação MIDI Interna)";
        if (!state.recActive && recTarget.indexOf("AUDIO REC") === 0) {
          saveState();
          navigateToScreen(
            "AUDIO_REC_PLAYBACK",
            true,
            "Botão [►/■] (Gravação AUDIO REC concluída e salva no SD Card)"
          );
          return;
        }
        saveState();
        renderAll();
        announce(
          "Botão [►/■] em REC (" +
            recTarget +
            "): " +
            (state.recActive
              ? "GRAVAÇÃO EM ANDAMENTO (NOW RECORDING... Toque nos pads ou pressione Espaço novamente para parar)"
              : "GRAVAÇÃO FINALIZADA (Pressione F6 EXPORT para exportar para o cartão SD)") +
            "."
        );
        return;
      }
      state.songPlaying = !state.songPlaying;
      saveState();
      renderAll();
      announce(
        "Botão [►/■] (Play/Stop): " +
          (state.songPlaying ? "Reprodução/Gravação INICIADA" : "Reprodução/Gravação PARADA") +
          "."
      );
      return;
    }

    if (upper === "B") {
      ev.preventDefault();
      strikeCurrentPad();
      return;
    }

    if (upper === "I" || key === "?") {
      ev.preventDefault();
      announceWhereAmI();
      return;
    }

    if (upper === "F") {
      ev.preventDefault();
      announceAllFButtons();
      return;
    }
  }

  // Inicialização ao carregar a página
  function initSimulator() {
    const screensMap = getScreensMap();
    // Verifica se a URL pediu uma tela específica (?screen=...)
    const params = new URLSearchParams(window.location.search);
    const requestedScreen = resolveScreenId(params.get("screen"));
    if (params.get("screen") && screensMap[requestedScreen]) {
      state.currentScreenId = requestedScreen;
      state.cursorIndex = 0;
    }

    // Popula seletor rápido de todas as telas
    const jumpSelect = document.getElementById("quick-screen-select");
    if (jumpSelect && screensMap) {
      jumpSelect.innerHTML = "";
      Object.keys(screensMap).forEach(function (scrKey) {
        const scr = screensMap[scrKey];
        if (!scr || !scr.title) return;
        const opt = document.createElement("option");
        opt.value = scrKey;
        opt.textContent = scrKey + " — " + scr.title;
        if (scrKey === state.currentScreenId) opt.selected = true;
        jumpSelect.appendChild(opt);
      });
      jumpSelect.addEventListener("change", function () {
        if (jumpSelect.value) {
          navigateToScreen(jumpSelect.value, true, "Seletor de tela");
          const chassis = document.getElementById("v31-simulator-app");
          if (chassis) chassis.focus();
        }
      });
    }

    // Conecta botões físicos clicáveis do painel direito
    const hwActions = {
      "btn-hw-kit": function (e) {
        if (e.shiftKey) {
          state.safetyMode = !state.safetyMode;
          navigateToScreen(state.safetyMode ? "SAFETY_MODE_LOCKED" : "KIT", true, "SHIFT+KIT");
        } else {
          navigateToScreen("KIT", true, "Botão [KIT]");
        }
      },
      "btn-hw-menu": function (e) {
        if (e.shiftKey) {
          state.triggerLock = !state.triggerLock;
          saveState();
          renderAll();
          announce("Trigger Lock " + (state.triggerLock ? "ON" : "OFF"));
        } else {
          navigateToScreen("MENU", true, "Botão [MENU]");
        }
      },
      "btn-hw-ezedit": function () {
        navigateToScreen("EZ_EDIT_INST", true, "Botão [EZ EDIT]");
      },
      "btn-hw-expansion": function (e) {
        navigateToScreen(
          e.shiftKey ? "USER_SAMPLE_LIST" : "EXPANSION_SLOT",
          true,
          e.shiftKey ? "SHIFT+EXPANSION" : "Botão [EXPANSION]"
        );
      },
      "btn-hw-click": function (e) {
        if (e.shiftKey) {
          state.clickActive = !state.clickActive;
          saveState();
          renderAll();
          announce("Metrônomo " + (state.clickActive ? "ON" : "OFF"));
        } else {
          navigateToScreen("CLICK_TEMPO", true, "Botão [CLICK]");
        }
      },
      "btn-hw-coach": function () {
        navigateToScreen("COACH_MENU", true, "Botão [COACH]");
      },
      "btn-hw-song": function () {
        navigateToScreen("SONG_MAIN", true, "Botão [SONG]");
      },
      "btn-hw-rec": function () {
        navigateToScreen("REC_STANDBY", true, "Botão [REC]");
      },
      "btn-hw-play": function () {
        state.songPlaying = !state.songPlaying;
        saveState();
        renderAll();
        announce(state.songPlaying ? "PLAYING" : "STOPPED");
      },
      "btn-hw-up": function () {
        moveScreenCursor(-1, 0);
      },
      "btn-hw-down": function () {
        moveScreenCursor(1, 0);
      },
      "btn-hw-left": function () {
        moveScreenCursor(0, -1);
      },
      "btn-hw-right": function () {
        moveScreenCursor(0, 1);
      },
      "btn-hw-enter": function () {
        handleEnterButton();
      },
      "btn-hw-exit": function (e) {
        handleExitButton(e.shiftKey);
      },
      "btn-hw-dial-dec": function (e) {
        adjustCurrentValue(-1, e.shiftKey);
      },
      "btn-hw-dial-inc": function (e) {
        adjustCurrentValue(1, e.shiftKey);
      },
      "btn-hw-strike": function () {
        strikeCurrentPad();
      },
      "btn-hw-whereami": function () {
        announceWhereAmI();
      },
      "btn-hw-readf": function () {
        announceAllFButtons();
      },
      "btn-reset-memory": function () {
        resetAllMemory();
      }
    };

    Object.keys(hwActions).forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("click", hwActions[id]);
      }
    });

    const toggleCaptureBtn = document.getElementById("btn-toggle-capture");
    if (toggleCaptureBtn) {
      toggleCaptureBtn.addEventListener("click", function () {
        state.keyboardCaptureActive = !state.keyboardCaptureActive;
        toggleCaptureBtn.textContent = state.keyboardCaptureActive
          ? "Atalhos do Módulo: ATIVOS (Clique para pausar)"
          : "Atalhos do Módulo: PAUSADOS (Clique para ativar)";
        announce(
          state.keyboardCaptureActive
            ? "Atalhos de teclado do módulo V31 ativados."
            : "Atalhos de teclado pausados para leitura livre da página."
        );
      });
    }

    window.addEventListener("keydown", handleKeyDown);

    renderAll();

    // Anúncio inicial
    if (state.currentScreenId === "MENU") {
      announceCurrentMenuSelection("Roland V31 pronto na tela MENU. ");
    } else {
      announceCurrentItem("Roland V31 pronto na tela " + state.currentScreenId + ". ");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSimulator);
  } else {
    initSimulator();
  }
})();
