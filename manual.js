/* ============================================================================
   ROLAND V31 / TD-316 — RENDERIZADOR DO MANUAL DE REFERÊNCIA + DATA LIST
   Reúne os 21 capítulos estruturados com contagem de setas + 100% das tabelas
   do Data List (200 Kits, 1.010 Instrumentos, 94 Efeitos BUS FX com 1.110
   parâmetros, 72 Tipos de Pad, 52 Kit Phrases, 37 Músicas, Erros e Solução
   de Problemas) em uma página semântica e acessível para NVDA.
   ============================================================================ */

(function () {
  "use strict";

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTableOfContents() {
    const tocEl = document.getElementById("manual-toc");
    if (!tocEl) return;

    const sections = window.V31_MANUAL_SECTIONS || [];
    let html = "";

    sections.forEach(function (sec, idx) {
      html +=
        '<li><a href="#' +
        escapeHtml(sec.id) +
        '">' +
        (idx + 1) +
        ". " +
        escapeHtml(sec.title) +
        "</a></li>";
    });

    // Links para os Apêndices Completos do Data List
    html += '<li><a href="#datalist-kits">22. Data List: 200 Drum Kits Completos</a></li>';
    html += '<li><a href="#datalist-instruments">23. Data List: 1.010 Instrumentos (Preset + EXV001/002/003)</a></li>';
    html += '<li><a href="#datalist-effects">24. Data List: 94 Efeitos BUS FX (1.110 Parâmetros)</a></li>';
    html += '<li><a href="#datalist-triggers">25. Data List: 72 Modelos de Pad (Trig Types) e Pads/Zonas</a></li>';
    html += '<li><a href="#datalist-phrases-songs">26. Data List: 52 Kit Phrases e 37 Músicas Internas</a></li>';
    html += '<li><a href="#datalist-errors-troubleshooting">27. Mensagens de Erro e Solução de Problemas</a></li>';

    tocEl.innerHTML = html;
  }

  function renderManualSections(filterQuery) {
    const container = document.getElementById("manual-sections-container");
    if (!container) return;

    const sections = window.V31_MANUAL_SECTIONS || [];
    const q = (filterQuery || "").trim().toLowerCase();
    let html = "";

    sections.forEach(function (sec, idx) {
      if (q) {
        const hay = JSON.stringify(sec).toLowerCase();
        if (hay.indexOf(q) === -1) return;
      }

      const simScreen = sec.simulatorScreenId || "MENU";
      html += '<article id="' + escapeHtml(sec.id) + '" class="doc-card">';
      html +=
        '<div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:10px;">' +
        '<div><span class="badge">' +
        escapeHtml(sec.chapter) +
        "</span>" +
        "<h2>" +
        (idx + 1) +
        ". " +
        escapeHtml(sec.title) +
        "</h2></div>" +
        '<a class="nav-link-btn btn-primary" href="index.html?screen=' +
        encodeURIComponent(simScreen) +
        '">Abrir esta tela no Painel do Módulo (' +
        escapeHtml(simScreen) +
        ")</a>" +
        "</div>";

      if (sec.summary) {
        html += "<p><strong>Resumo:</strong> " + escapeHtml(sec.summary) + "</p>";
      }

      // Passos exatos de navegação e contagem de setas
      if (Array.isArray(sec.navigationSteps) && sec.navigationSteps.length > 0) {
        html += "<h3>Passo a Passo de Navegação (Contagem Exata de Setas)</h3><ol>";
        sec.navigationSteps.forEach(function (step) {
          html += "<li>" + escapeHtml(step) + "</li>";
        });
        html += "</ol>";
      }

      // Descrição Espacial da Tela
      if (sec.screenLayoutDescription) {
        html += "<h3>Como a Tela Está Estruturada (Geometria Espacial)</h3>";
        html += "<p>" + escapeHtml(sec.screenLayoutDescription) + "</p>";
      }

      // Tabela de Botões F1 a F6
      if (Array.isArray(sec.fButtonsTable) && sec.fButtonsTable.length > 0) {
        html += "<h3>Botões de Função [F1] a [F6] e Atalhos [SHIFT]</h3>";
        html += '<div class="table-responsive"><table class="v31-table">';
        html += "<caption>Funções de F1 a F6 em " + escapeHtml(sec.title) + "</caption>";
        html +=
          "<thead><tr>" +
          '<th scope="col">Botão</th>' +
          '<th scope="col">Rótulo na Tela</th>' +
          '<th scope="col">Função Executada</th>' +
          "</tr></thead><tbody>";
        sec.fButtonsTable.forEach(function (fb) {
          html +=
            "<tr>" +
            "<td><strong>" +
            escapeHtml(fb.button) +
            "</strong></td>" +
            "<td><strong>" +
            escapeHtml(fb.label) +
            "</strong></td>" +
            "<td>" +
            escapeHtml(fb.action) +
            "</td>" +
            "</tr>";
        });
        html += "</tbody></table></div>";
      }

      // Tabelas de Parâmetros Combinadas (Manual de Referência + Data List)
      if (Array.isArray(sec.parameterTables) && sec.parameterTables.length > 0) {
        html += "<h3>Tabelas Completas de Parâmetros (Manual de Referência + Data List)</h3>";
        sec.parameterTables.forEach(function (pt) {
          html += "<h4>" + escapeHtml(pt.tableTitle) + "</h4>";
          if (pt.note) {
            html += '<div class="tip-box">' + escapeHtml(pt.note) + "</div>";
          }
          html += '<div class="table-responsive"><table class="v31-table">';
          html += "<caption>" + escapeHtml(pt.tableTitle) + "</caption>";
          html +=
            "<thead><tr>" +
            '<th scope="col">Parâmetro</th>' +
            '<th scope="col">Faixa de Valores (Data List)</th>' +
            '<th scope="col">Posição / Quantas Setas</th>' +
            '<th scope="col">Explicação Detalhada</th>' +
            "</tr></thead><tbody>";
          (pt.rows || []).forEach(function (r) {
            html +=
              "<tr>" +
              "<td><strong>" +
              escapeHtml(r.parameter) +
              "</strong></td>" +
              "<td><code>" +
              escapeHtml(r.valueRange) +
              "</code></td>" +
              "<td>" +
              escapeHtml(r.arrowPosition || "") +
              "</td>" +
              "<td>" +
              escapeHtml(r.explanation) +
              "</td>" +
              "</tr>";
          });
          html += "</tbody></table></div>";
        });
      }

      // Dicas e Observações Importantes
      if (Array.isArray(sec.tipsAndNotes) && sec.tipsAndNotes.length > 0) {
        html += "<h3>Observações e Dicas Importantes</h3><ul>";
        sec.tipsAndNotes.forEach(function (tip) {
          html += "<li>" + escapeHtml(tip) + "</li>";
        });
        html += "</ul>";
      }

      html += "</article>";
    });

    container.innerHTML = html;
  }

  // Renderiza Apêndice 22: Todos os 200 Drum Kits
  function renderDataListKits() {
    const el = document.getElementById("datalist-kits-body");
    if (!el || !window.V31_KITS_AND_LISTS) return;

    const kits = window.V31_KITS_AND_LISTS.drumKits || [];
    let html = '<div class="table-responsive"><table class="v31-table">';
    html += "<caption>Lista Completa dos 200 Drum Kits do Roland V31 (1–70 Preset + 71–200 User)</caption>";
    html +=
      "<thead><tr>" +
      '<th scope="col">Nº / Código</th>' +
      '<th scope="col">Nome do Drum Kit (Linha 1)</th>' +
      '<th scope="col">Subnome / Estilo (Linha 2)</th>' +
      '<th scope="col">Tipo</th>' +
      "</tr></thead><tbody>";

    kits.forEach(function (k) {
      const code = k.code || String(k.no || k.number).padStart(3, "0");
      const num = k.no || k.number;
      html +=
        "<tr>" +
        "<td><strong>" +
        escapeHtml(code) +
        "</strong></td>" +
        "<td><strong>" +
        escapeHtml(k.name) +
        "</strong></td>" +
        "<td>" +
        escapeHtml(k.subName || "—") +
        "</td>" +
        "<td>" +
        (num <= 70 ? "Preset de Fábrica" : "Kit do Usuário (User Kit)") +
        "</td>" +
        "</tr>";
    });

    html += "</tbody></table></div>";
    el.innerHTML = html;
  }

  // Renderiza Apêndice 23: Todos os 1.010 Instrumentos com filtro por banco e busca
  function renderDataListInstruments() {
    const container = document.getElementById("datalist-instruments-body");
    const bankSelect = document.getElementById("inst-bank-filter");
    const searchInput = document.getElementById("inst-search-input");
    if (!container || !window.V31_INSTRUMENTS) return;

    const selectedBank = bankSelect ? bankSelect.value : "PRESET";
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    let list = [];
    let bankTitle = "";
    if (selectedBank === "PRESET") {
      list = window.V31_INSTRUMENTS.preset || [];
      bankTitle = "Banco PRESET Interno (246 Itens: 0 OFF a 245 For Pad Check)";
    } else if (selectedBank === "EXV001") {
      list = (window.V31_INSTRUMENTS.exv001 && window.V31_INSTRUMENTS.exv001.instruments) || [];
      bankTitle = "Expansão EXV001: Wood Room Studio UK 1 (30 Instrumentos)";
    } else if (selectedBank === "EXV002") {
      list = (window.V31_INSTRUMENTS.exv002 && window.V31_INSTRUMENTS.exv002.instruments) || [];
      bankTitle = "Expansão EXV002: Electronic&Percussion 1 (712 Instrumentos)";
    } else if (selectedBank === "EXV003") {
      list = (window.V31_INSTRUMENTS.exv003 && window.V31_INSTRUMENTS.exv003.instruments) || [];
      bankTitle = "Expansão EXV003: The Brush 1 (22 Instrumentos)";
    } else if (selectedBank === "ALL") {
      list = [].concat(
        (window.V31_INSTRUMENTS.preset || []).map(function (i) { return Object.assign({ bank: "PRESET" }, i); }),
        ((window.V31_INSTRUMENTS.exv001 && window.V31_INSTRUMENTS.exv001.instruments) || []).map(function (i) { return Object.assign({ bank: "EXV001" }, i); }),
        ((window.V31_INSTRUMENTS.exv002 && window.V31_INSTRUMENTS.exv002.instruments) || []).map(function (i) { return Object.assign({ bank: "EXV002" }, i); }),
        ((window.V31_INSTRUMENTS.exv003 && window.V31_INSTRUMENTS.exv003.instruments) || []).map(function (i) { return Object.assign({ bank: "EXV003" }, i); })
      );
      bankTitle = "Todos os Bancos Reunidos (1.010 Instrumentos)";
    }

    if (query) {
      list = list.filter(function (item) {
        return (
          String(item.no).indexOf(query) !== -1 ||
          (item.group && item.group.toLowerCase().indexOf(query) !== -1) ||
          (item.name && item.name.toLowerCase().indexOf(query) !== -1) ||
          (item.remarks && item.remarks.toLowerCase().indexOf(query) !== -1)
        );
      });
    }

    let html = "<p>Exibindo <strong>" + list.length + "</strong> instrumento(s) em <strong>" + escapeHtml(bankTitle) + "</strong>.</p>";
    html += '<div class="table-responsive"><table class="v31-table">';
    html += "<caption>" + escapeHtml(bankTitle) + "</caption>";
    html +=
      "<thead><tr>" +
      '<th scope="col">Nº</th>' +
      '<th scope="col">Grupo</th>' +
      '<th scope="col">Nome do Instrumento</th>' +
      '<th scope="col">Observações (*M, *P, *X, *O, *B, *L)</th>' +
      "</tr></thead><tbody>";

    list.forEach(function (inst) {
      html +=
        "<tr>" +
        "<td><strong>" +
        escapeHtml(inst.bank ? inst.bank + " #" + inst.no : inst.no) +
        "</strong></td>" +
        "<td>" +
        escapeHtml(inst.group) +
        "</td>" +
        "<td><strong>" +
        escapeHtml(inst.name) +
        "</strong></td>" +
        "<td><code>" +
        escapeHtml(inst.remarks || "—") +
        "</code></td>" +
        "</tr>";
    });

    html += "</tbody></table></div>";
    container.innerHTML = html;
  }

  // Renderiza Apêndice 24: Todos os 94 Efeitos Multi-Effects (BUS FX) e seus 1.110 parâmetros
  function renderDataListEffects() {
    const container = document.getElementById("datalist-effects-body");
    const catSelect = document.getElementById("fx-cat-filter");
    const searchInput = document.getElementById("fx-search-input");
    if (!container || !window.V31_EFFECTS) return;

    const effects = window.V31_EFFECTS.effects || [];
    const selectedCat = catSelect ? catSelect.value : "ALL";
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const filtered = effects.filter(function (fx) {
      if (selectedCat !== "ALL" && fx.category !== selectedCat) return false;
      if (query) {
        const hay = (
          fx.name +
          " " +
          fx.category +
          " " +
          fx.description +
          " " +
          JSON.stringify(fx.parameters || [])
        ).toLowerCase();
        if (hay.indexOf(query) === -1) return false;
      }
      return true;
    });

    let html =
      "<p>Exibindo <strong>" +
      filtered.length +
      "</strong> de " +
      effects.length +
      " efeitos Multi-Effects (BUS FX).</p>";

    filtered.forEach(function (fx, idx) {
      html += '<div class="doc-card" style="background:#0d1424; margin-bottom:16px;">';
      html +=
        "<h4>" +
        (idx + 1) +
        ". " +
        escapeHtml(fx.name) +
        ' <span class="badge">' +
        escapeHtml(fx.category) +
        "</span>" +
        (fx.sideChainSupported
          ? ' <span class="badge" style="color:#4ade80;">Suporta Side Chain (*1)</span>'
          : "") +
        "</h4>";
      html += "<p><strong>Descrição:</strong> " + escapeHtml(fx.description) + "</p>";
      if (fx.signalFlow) {
        html +=
          "<p><strong>Fluxo de Sinal (Descrição do Diagrama de Blocos):</strong> " +
          escapeHtml(fx.signalFlow) +
          "</p>";
      }

      const params = fx.parameters || [];
      if (params.length > 0) {
        html += '<div class="table-responsive"><table class="v31-table">';
        html +=
          "<caption>Parâmetros do efeito " +
          escapeHtml(fx.name) +
          " (" +
          params.length +
          " parâmetros)</caption>";
        html +=
          "<thead><tr>" +
          '<th scope="col">#</th>' +
          '<th scope="col">Parâmetro</th>' +
          '<th scope="col">Faixa de Valores (Data List)</th>' +
          '<th scope="col">Explicação em Português</th>' +
          "</tr></thead><tbody>";

        params.forEach(function (p, pIdx) {
          html +=
            "<tr>" +
            "<td>" +
            (pIdx + 1) +
            "</td>" +
            "<td><strong>" +
            escapeHtml(p.name) +
            "</strong></td>" +
            "<td><code>" +
            escapeHtml(p.range || p.value || "") +
            "</code></td>" +
            "<td>" +
            escapeHtml(p.explanation || "") +
            "</td>" +
            "</tr>";
        });
        html += "</tbody></table></div>";
      } else {
        html += "<p><em>Sem parâmetros ajustáveis (sinal passa direto em THRU).</em></p>";
      }
      html += "</div>";
    });

    container.innerHTML = html;
  }

  // Renderiza Apêndice 25: Todos os 72 Modelos de Pad (Trig Types)
  function renderDataListTriggers() {
    const el = document.getElementById("datalist-triggers-body");
    if (!el || !window.V31_KITS_AND_LISTS) return;

    const trigTypes = window.V31_KITS_AND_LISTS.trigTypes || [];
    let html = '<div class="table-responsive"><table class="v31-table">';
    html +=
      "<caption>Tabela Completa de Compatibilidade dos 72 Modelos de Pad (Trig Type) — Páginas 47 e 48 do Data List</caption>";
    html +=
      "<thead><tr>" +
      '<th scope="col">Pad Utilizado</th>' +
      '<th scope="col">Trig Type no V31</th>' +
      '<th scope="col">Rim Shot</th>' +
      '<th scope="col">Bell Shot</th>' +
      '<th scope="col">Posicional (Pele/Bow)</th>' +
      '<th scope="col">Posicional (Aro)</th>' +
      '<th scope="col">Choke (Abafamento)</th>' +
      '<th scope="col">Observações</th>' +
      "</tr></thead><tbody>";

    trigTypes.forEach(function (t) {
      html +=
        "<tr>" +
        "<td>" +
        escapeHtml(t.usedPad) +
        "</td>" +
        "<td><strong>" +
        escapeHtml(t.trigType) +
        "</strong></td>" +
        "<td>" +
        (t.rimShot ? "Sim (O)" : "Não (-)") +
        "</td>" +
        "<td>" +
        (t.bellShot ? "Sim (O)" : "Não (-)") +
        "</td>" +
        "<td>" +
        (t.posHead ? "Sim (O)" : "Não (-)") +
        "</td>" +
        "<td>" +
        (t.posRim ? "Sim (O)" : "Não (-)") +
        "</td>" +
        "<td>" +
        (t.chokePlay ? "Sim (O)" : "Não (-)") +
        "</td>" +
        "<td>" +
        escapeHtml(t.notes || "—") +
        "</td>" +
        "</tr>";
    });

    html += "</tbody></table></div>";
    el.innerHTML = html;
  }

  // Renderiza Apêndice 26: 52 Kit Phrases e 37 Músicas Internas
  function renderDataListPhrasesAndSongs() {
    const el = document.getElementById("datalist-phrases-songs-body");
    if (!el || !window.V31_KITS_AND_LISTS) return;

    const phrases = window.V31_KITS_AND_LISTS.kitPhrases || [];
    const songs = window.V31_KITS_AND_LISTS.songs || [];

    let html = "<h3>Lista Completa das 52 Kit Phrases (Frases de Demonstração de Kit)</h3>";
    html += '<div class="table-responsive"><table class="v31-table">';
    html += "<caption>52 Kit Phrases do Roland V31 (Página 36 do Data List)</caption>";
    html +=
      "<thead><tr>" +
      '<th scope="col">Nº</th>' +
      '<th scope="col">Nome da Kit Phrase</th>' +
      "</tr></thead><tbody>";

    phrases.forEach(function (p) {
      const no = p.no || p.number || "";
      const name = p.name || p;
      html +=
        "<tr><td><strong>" +
        escapeHtml(no) +
        "</strong></td><td>" +
        escapeHtml(name) +
        "</td></tr>";
    });
    html += "</tbody></table></div>";

    html += "<h3>Lista Completa das 37 Músicas Internas (Song List)</h3>";
    html += '<div class="table-responsive"><table class="v31-table">';
    html += "<caption>37 Músicas Internas do Roland V31 (Página 119 do Data List)</caption>";
    html +=
      "<thead><tr>" +
      '<th scope="col">Nº</th>' +
      '<th scope="col">Nome da Música</th>' +
      '<th scope="col">Formato / Tipo</th>' +
      "</tr></thead><tbody>";

    songs.forEach(function (s) {
      html +=
        "<tr>" +
        "<td><strong>" +
        escapeHtml(s.no || s.number || s.code) +
        "</strong></td>" +
        "<td><strong>" +
        escapeHtml(s.name || s.title) +
        "</strong></td>" +
        "<td>" +
        escapeHtml(s.type || "") +
        "</td>" +
        "</tr>";
    });
    html += "</tbody></table></div>";

    el.innerHTML = html;
  }

  // Renderiza Apêndice 27: Mensagens de Erro e Solução de Problemas
  function renderDataListErrorsAndTroubleshooting() {
    const el = document.getElementById("datalist-errors-body");
    if (!el || !window.V31_KITS_AND_LISTS) return;

    const errors = window.V31_KITS_AND_LISTS.errorMessages || [];
    const troubles = window.V31_KITS_AND_LISTS.troubleshooting || [];

    let html = "<h3>Tabela Completa de Mensagens de Erro e Avisos do Sistema</h3>";
    html += '<div class="table-responsive"><table class="v31-table">';
    html += "<caption>Mensagens de Erro do Roland V31 (Páginas 226–228 do Manual de Referência)</caption>";
    html +=
      "<thead><tr>" +
      '<th scope="col">Mensagem Exibida no Visor</th>' +
      '<th scope="col">Significado</th>' +
      '<th scope="col">Ação Recomendada</th>' +
      "</tr></thead><tbody>";

    errors.forEach(function (err) {
      html +=
        "<tr>" +
        "<td><strong><code>" +
        escapeHtml(err.message) +
        "</code></strong></td>" +
        "<td>" +
        escapeHtml(err.meaning) +
        "</td>" +
        "<td>" +
        escapeHtml(err.action) +
        "</td>" +
        "</tr>";
    });
    html += "</tbody></table></div>";

    html += "<h3>Guia Completo de Solução de Problemas (Troubleshooting)</h3>";
    html += '<div class="table-responsive"><table class="v31-table">';
    html += "<caption>Solução de Problemas do Roland V31 (Páginas 228–231 do Manual de Referência)</caption>";
    html +=
      "<thead><tr>" +
      '<th scope="col">Categoria</th>' +
      '<th scope="col">Problema Relatado</th>' +
      '<th scope="col">O que Verificar</th>' +
      '<th scope="col">Solução Passo a Passo</th>' +
      "</tr></thead><tbody>";

    troubles.forEach(function (tr) {
      html +=
        "<tr>" +
        "<td><strong>" +
        escapeHtml(tr.category) +
        "</strong></td>" +
        "<td><strong>" +
        escapeHtml(tr.problem) +
        "</strong></td>" +
        "<td>" +
        escapeHtml(tr.check || "") +
        "</td>" +
        "<td>" +
        escapeHtml(tr.action) +
        "</td>" +
        "</tr>";
    });
    html += "</tbody></table></div>";

    el.innerHTML = html;
  }

  function initManualPage() {
    renderTableOfContents();
    renderManualSections("");
    renderDataListKits();
    renderDataListInstruments();
    renderDataListEffects();
    renderDataListTriggers();
    renderDataListPhrasesAndSongs();
    renderDataListErrorsAndTroubleshooting();

    const globalSearch = document.getElementById("manual-global-search");
    if (globalSearch) {
      globalSearch.addEventListener("input", function () {
        renderManualSections(globalSearch.value);
      });
    }

    const instBankFilter = document.getElementById("inst-bank-filter");
    const instSearchInput = document.getElementById("inst-search-input");
    if (instBankFilter) instBankFilter.addEventListener("change", renderDataListInstruments);
    if (instSearchInput) instSearchInput.addEventListener("input", renderDataListInstruments);

    const fxCatFilter = document.getElementById("fx-cat-filter");
    const fxSearchInput = document.getElementById("fx-search-input");
    if (fxCatFilter && window.V31_EFFECTS && Array.isArray(window.V31_EFFECTS.categories)) {
      window.V31_EFFECTS.categories.forEach(function (cat) {
        const opt = document.createElement("option");
        opt.value = cat.name || cat;
        opt.textContent = (cat.name || cat) + (cat.ptName ? " (" + cat.ptName + ")" : "");
        fxCatFilter.appendChild(opt);
      });
      fxCatFilter.addEventListener("change", renderDataListEffects);
    }
    if (fxSearchInput) fxSearchInput.addEventListener("input", renderDataListEffects);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initManualPage);
  } else {
    initManualPage();
  }
})();
