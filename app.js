/* Greenhouse Effect Master - App Logic - West Bengal, India */

const STORAGE_KEY = 'gh_progress_v1';
const NOTES_KEY = 'gh_notes_v1';
const FAV_WORDS_KEY = 'gh_fav_words_v1';

let state = {
  page: 'home',
  lang: 'both',
  simple: false,
  progress: {},
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: [],
  flashIndex: 0,
  flashFlipped: false,
  currentLine: null
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state.progress = JSON.parse(raw);
  } catch (_) {}
  SECTIONS.forEach(function(s) {
    if (state.progress[s] == null) state.progress[s] = 0;
  });
}
function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); } catch (_) {}
  updateProgressUI();
}
function markSection(id, pct) {
  if (pct == null) pct = 100;
  state.progress[id] = Math.max(state.progress[id] || 0, pct);
  saveProgress();
}
function overallProgress() {
  var vals = SECTIONS.map(function(s) { return state.progress[s] || 0; });
  return Math.round(vals.reduce(function(a, b) { return a + b; }, 0) / vals.length);
}

function setLang(lang) {
  state.lang = lang;
  document.body.classList.remove('lang-en', 'lang-bn', 'lang-both');
  document.body.classList.add('lang-' + lang);
  document.querySelectorAll('#langSwitch button').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}
function toggleSimpleMode() {
  state.simple = !state.simple;
  document.body.classList.toggle('simple-mode', state.simple);
  document.getElementById('simpleModeBtn').classList.toggle('active', state.simple);
}

function navigate(page) {
  state.page = page;
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.toggle('active', a.dataset.page === page);
  });
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  render();
  window.scrollTo(0, 0);
  markSection(page, Math.max(state.progress[page] || 0, 30));
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

function speak(text, lang) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(text);
  u.lang = lang || 'en-GB';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}
function speakCurrent() {
  var el = document.querySelector('main h1, main .section-title, .poem-block');
  if (el) speak(el.textContent.slice(0, 400));
}

function closeModal(id) { document.getElementById(id).hidden = true; }
function openSearch() {
  document.getElementById('searchModal').hidden = false;
  document.getElementById('globalSearch').focus();
}
function openNotes() {
  document.getElementById('notesModal').hidden = false;
  renderNotes();
}
function closeSheet() { document.getElementById('lineSheet').hidden = true; }

function showWord(word) {
  var v = VOCAB.find(function(x) {
    return x.word.toLowerCase() === word.toLowerCase() || x.word.toLowerCase().indexOf(word.toLowerCase()) !== -1;
  });
  if (!v) return;
  document.getElementById('wordModalBody').innerHTML =
    '<h2 style="font-family:var(--font-serif);color:var(--accent2)">' + v.word + '</h2>' +
    '<p class="text-muted">' + (v.phon || '') + ' · ' + (v.bnPhon || '') + '</p>' +
    '<p><strong>POS:</strong> ' + v.pos + '</p>' +
    '<p class="bn" style="color:var(--accent);font-size:1.1rem">' + v.bn + '</p>' +
    '<p><strong>English:</strong> ' + v.en + '</p>' +
    '<p class="text-muted"><strong>Synonyms:</strong> ' + v.syn + '</p>' +
    '<p><strong>Context:</strong> ' + v.ctx + '</p>' +
    '<div style="display:flex;gap:8px;margin-top:12px">' +
    '<button class="btn sm" onclick="speak(\'' + v.word.replace(/'/g, "\\'") + '\')">🔊 Listen</button>' +
    '<button class="btn sm" onclick="addFavWord(\'' + v.word.replace(/'/g, "\\'") + '\')">⭐ Favourite</button>' +
    '</div>';
  document.getElementById('wordModal').hidden = false;
  markSection('vocab', 50);
}
function addFavWord(w) {
  var favs = [];
  try { favs = JSON.parse(localStorage.getItem(FAV_WORDS_KEY) || '[]'); } catch (_) {}
  if (favs.indexOf(w) === -1) favs.push(w);
  localStorage.setItem(FAV_WORDS_KEY, JSON.stringify(favs));
  alert('Added: ' + w);
}

function openLine(id) {
  var la = LINE_ANALYSIS.find(function(x) { return x.id === id; });
  if (!la) return;
  document.getElementById('lineSheetBody').innerHTML =
    '<p class="quatrain-label">Line ' + la.id + '</p>' +
    '<p style="font-family:var(--font-serif);font-size:1.2rem;margin-bottom:10px">' + la.text + '</p>' +
    '<p class="bn" style="color:var(--accent)">' + la.bn + '</p>' +
    '<div class="simple-only"><p><strong>Simple:</strong> ' + la.simple + '</p><p class="bn">' + la.simpleBn + '</p></div>' +
    '<div class="detailed-only"><p><strong>Explanation:</strong> ' + la.detailed + '</p><p class="bn">' + la.detailedBn + '</p>' +
    '<p><strong>Keywords:</strong> ' + la.keywords.join(', ') + '</p>' +
    '<p><strong>Symbolism:</strong> ' + la.symbolism + '</p>' +
    '<p><strong>Devices:</strong> ' + la.devices.join(', ') + '</p>' +
    '<p><strong>Tone:</strong> ' + la.tone + '</p>' +
    '<p style="color:var(--accent2)"><strong>Exam:</strong> ' + la.exam + '</p></div>';
  document.getElementById('lineSheet').hidden = false;
  markSection('analysis', 40);
  markSection('poem', 60);
}

function getNotes() {
  try { return JSON.parse(localStorage.getItem(NOTES_KEY) || '[]'); } catch (_) { return []; }
}
function saveNote() {
  var t = document.getElementById('noteInput').value.trim();
  if (!t) return;
  var n = getNotes();
  n.unshift({ id: Date.now(), text: t, page: state.page, ts: new Date().toISOString() });
  localStorage.setItem(NOTES_KEY, JSON.stringify(n));
  document.getElementById('noteInput').value = '';
  renderNotes();
}
function deleteNote(id) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(getNotes().filter(function(n) { return n.id !== id; })));
  renderNotes();
}
function renderNotes() {
  var list = document.getElementById('notesList');
  var notes = getNotes();
  if (!notes.length) {
    list.innerHTML = '<p class="text-muted mt-2">No notes yet.</p>';
    return;
  }
  list.innerHTML = notes.map(function(n) {
    return '<div class="card" style="padding:10px;margin-top:8px"><p style="font-size:0.9rem">' + escapeHtml(n.text) +
      '</p><p class="text-muted" style="font-size:0.75rem">' + n.page +
      '</p><button class="btn sm" onclick="deleteNote(' + n.id + ')">Delete</button></div>';
  }).join('');
}

function doSearch(q) {
  q = q.trim().toLowerCase();
  var r = [];
  if (!q) return r;
  POEM.lines.forEach(function(l) {
    if (l.text.toLowerCase().indexOf(q) !== -1) {
      r.push({ type: 'Line', text: l.text, action: function() { navigate('poem'); setTimeout(function() { openLine(l.id); }, 200); } });
    }
  });
  VOCAB.forEach(function(v) {
    if (v.word.toLowerCase().indexOf(q) !== -1 || v.bn.indexOf(q) !== -1 || v.en.toLowerCase().indexOf(q) !== -1) {
      r.push({ type: 'Word', text: v.word + ' — ' + v.bn, action: function() { showWord(v.word); } });
    }
  });
  THEMES.forEach(function(t) {
    if (t.title.toLowerCase().indexOf(q) !== -1 || t.bn.indexOf(q) !== -1) {
      r.push({ type: 'Theme', text: t.title, action: function() { navigate('themes'); } });
    }
  });
  return r.slice(0, 20);
}

function updateProgressUI() {
  var el = document.getElementById('progressMini');
  if (el) el.textContent = overallProgress() + '%';
}

function startQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  var arr = [];
  for (var i = 0; i < QUIZ.length; i++) arr.push(i);
  arr.sort(function() { return Math.random() - 0.5; });
  state.quizOrder = arr.slice(0, 15);
  renderQuizQ();
}
function renderQuizQ() {
  var main = document.getElementById('mainContent');
  if (state.quizIndex >= state.quizOrder.length) {
    var pct = Math.round(state.quizScore / state.quizOrder.length * 100);
    markSection('quiz', Math.max(state.progress.quiz || 0, pct));
    main.innerHTML = '<h1 class="section-title">Quiz Complete</h1><div class="quiz-score">' +
      state.quizScore + '/' + state.quizOrder.length + ' (' + pct + '%)</div>' +
      '<div style="text-align:center"><button class="btn primary" onclick="startQuiz()">Retry</button> ' +
      '<button class="btn" onclick="navigate(\'revision\')">Revision</button></div>';
    return;
  }
  var item = QUIZ[state.quizOrder[state.quizIndex]];
  var order = [0, 1, 2, 3].sort(function() { return Math.random() - 0.5; });
  main.innerHTML = '<h1 class="section-title">MCQ Quiz</h1><p class="section-desc">Q ' +
    (state.quizIndex + 1) + '/' + state.quizOrder.length + ' · Score: ' + state.quizScore + '</p>' +
    '<div class="quiz-card"><div class="quiz-q">' + item.q + '</div><div class="quiz-opts">' +
    order.map(function(i) { return '<button class="quiz-opt" data-i="' + i + '">' + item.opts[i] + '</button>'; }).join('') +
    '</div><div id="quizFb"></div></div>';
  document.querySelectorAll('.quiz-opt').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var ch = +btn.dataset.i;
      var ok = ch === item.ans;
      document.querySelectorAll('.quiz-opt').forEach(function(b) {
        b.disabled = true;
        if (+b.dataset.i === item.ans) b.classList.add('correct');
        else if (+b.dataset.i === ch) b.classList.add('wrong');
      });
      if (ok) state.quizScore++;
      var fb = document.getElementById('quizFb');
      fb.className = 'quiz-feedback ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = (ok ? '✓ ' : '✗ ') + item.exp;
      setTimeout(function() { state.quizIndex++; renderQuizQ(); }, 1500);
    });
  });
}

function renderFlash() {
  var f = FLASHCARDS[state.flashIndex];
  document.getElementById('mainContent').innerHTML =
    '<h1 class="section-title">Flashcards</h1><p class="section-desc">' +
    (state.flashIndex + 1) + '/' + FLASHCARDS.length + '</p>' +
    '<div class="flash-nav"><button class="btn sm" onclick="flashPrev()">←</button>' +
    '<button class="btn sm" onclick="state.flashFlipped=false;state.flashIndex=Math.floor(Math.random()*FLASHCARDS.length);renderFlash()">🔀</button>' +
    '<button class="btn sm" onclick="flashNext()">→</button></div>' +
    '<div class="flash-card" onclick="state.flashFlipped=!state.flashFlipped;renderFlash()">' +
    (state.flashFlipped
      ? '<div class="back">' + f.back + '</div><div class="bn">' + f.bn + '</div>'
      : '<div class="front">' + f.front + '</div><p class="text-muted" style="font-size:0.8rem;margin-top:8px">Tap to reveal</p>') +
    '</div>';
}
function flashPrev() {
  state.flashFlipped = false;
  state.flashIndex = (state.flashIndex - 1 + FLASHCARDS.length) % FLASHCARDS.length;
  renderFlash();
}
function flashNext() {
  state.flashFlipped = false;
  state.flashIndex = (state.flashIndex + 1) % FLASHCARDS.length;
  renderFlash();
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
}

function makeWordsClickable(text) {
  var sorted = VOCAB.slice().sort(function(a, b) { return b.word.length - a.word.length; });
  var html = escapeHtml(text);
  sorted.forEach(function(v) {
    var escaped = v.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('\\b(' + escaped + ')\\b', 'gi');
    html = html.replace(re, function(match) {
      return '<span class="word" onclick="event.stopPropagation();showWord(\'' + match.replace(/'/g, "\\'") + '\')">' + match + '</span>';
    });
  });
  return html;
}

function renderHome() {
  var pct = overallProgress();
  return '<div class="hero"><div class="hero-tree">🌍🔥</div><h1>THE GREENHOUSE EFFECT</h1>' +
    '<p class="subtitle">Carl Dennis</p>' +
    '<p class="bn-sub">জলবায়ু পরিবর্তন, দারিদ্র্য ও সভ্যতার ভবিষ্যৎ</p>' +
    '<p class="hero-meta">Class XII · English · Bengali Medium · West Bengal, India 🇮🇳</p>' +
    '<div class="hero-btns">' +
    '<button class="btn primary" onclick="navigate(\'poem\')">START LEARNING</button>' +
    '<button class="btn" onclick="navigate(\'poem\')">READ POEM</button>' +
    '<button class="btn" onclick="navigate(\'teach\')">🧒 TEACH ME</button>' +
    '<button class="btn" onclick="navigate(\'revision\')">REVISION</button>' +
    '<button class="btn" onclick="navigate(\'quiz\')">QUIZ</button></div>' +
    '<p class="hero-progress">Progress: <strong>' + pct + '%</strong></p></div>' +
    '<div class="card"><h3>From warming poles to beach-band dignity</h3>' +
    '<p class="en-only">Carl Dennis turns climate science into a quiet vision of poverty, power and survival.</p>' +
    '<p class="bn">কার্ল ডেনিস জলবায়ু সংকটকে দারিদ্র্য, ক্ষমতা ও টিকে থাকার নীরব দৃশ্যে পরিণত করেছেন।</p></div>' +
    '<div class="card"><h3>Continue</h3><div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">' +
    '<button class="btn sm" onclick="navigate(\'poet\')">👤 Poet</button>' +
    '<button class="btn sm" onclick="navigate(\'about\')">📜 About</button>' +
    '<button class="btn sm" onclick="navigate(\'vocab\')">🔤 Vocab</button>' +
    '<button class="btn sm" onclick="navigate(\'analysis\')">🔍 Analysis</button>' +
    '<button class="btn sm" onclick="navigate(\'themes\')">💡 Themes</button>' +
    '<button class="btn sm" onclick="navigate(\'exam\')">📝 Exam</button>' +
    '<button class="btn sm" onclick="navigate(\'teach\')">🧒 Teach Me</button>' +
    '<button class="btn sm" onclick="navigate(\'progress\')">⭐ Progress</button></div></div>';
}

function renderTeach() {
  markSection('revision', 40);
  var steps = [
    { t: 'Who is Carl Dennis?', en: 'American poet (b. 1939, St. Louis). Quiet intelligence, meditative style.', bn: 'আমেরিকান কবি (জন্ম ১৯৩৯)। শান্ত বুদ্ধিমত্তা।' },
    { t: 'What is the poem about?', en: 'Global warming and how it changes agriculture, cities, poverty, power — and how ordinary life can continue.', bn: 'বৈশ্বিক উষ্ণায়ন ও তার প্রভাব; তবু সাধারণ জীবন কীভাবে চলতে পারে।' },
    { t: 'Climate shift', en: 'Grain belts slide to poles; Plains become dust bowls; Greenland & Antarctica become Great Powers.', bn: 'শস্য অঞ্চল মেরুর দিকে; ধূলিঝড়; গ্রিনল্যান্ড ও অ্যান্টার্কটিকা মহাশক্তি।' },
    { t: 'Social change', en: 'Suburbs→farms; no cars; walking & trollies; nut trees; vegetable lawns.', bn: 'শহরতলি→খামার; গাড়ি নেই; হাঁটা ও ট্রলি; বাদাম গাছ; সবজির লন।' },
    { t: 'Rome parallel', en: 'Citizens maintain buildings; fear of temples falling; sheep in the Forum.', bn: 'নাগরিকরা ভবন রক্ষা করে; রোমের মন্দির ও ফোরামের ভয়।' },
    { t: 'Acceptance', en: 'Country goes on; let powers have their time in the sun; prefer native beach band.', bn: 'দেশ চলবে; উদীয়মান শক্তিকে সময় দাও; স্থানীয় ব্যান্ড বেছে নাও।' }
  ];
  return '<h1 class="section-title">Teach Me</h1><p class="section-desc">West Bengal, India 🇮🇳</p>' +
    steps.map(function(s, i) {
      return '<div class="card"><h3>' + (i + 1) + '. ' + s.t + '</h3><p class="en-only">' + s.en +
        '</p><p class="bn">' + s.bn + '</p>' +
        '<button class="btn sm primary" onclick="this.textContent=\'✓\';this.disabled=true;markSection(\'revision\',' +
        Math.min(100, 40 + (i + 1) * 10) + ')">✓ I Understand</button></div>';
    }).join('') +
    '<div class="card" style="text-align:center"><button class="btn primary" onclick="navigate(\'quiz\')">Quiz →</button></div>';
}

function renderPoet() {
  markSection('poet', 80);
  return '<h1 class="section-title">About the Poet</h1><p class="section-desc">' + POET.name + ' (' + POET.years + ')</p>' +
    '<div class="card"><p class="en-only">' + POET.summary + '</p><p class="bn">' + POET.bnSummary + '</p></div>' +
    '<div class="card"><h3>Quick Facts</h3>' +
    POET.facts.map(function(f) {
      return '<div><strong style="color:var(--accent)">' + f.label + ':</strong> ' + f.value + '</div>';
    }).join('') + '</div>';
}

function renderAbout() {
  markSection('about', 80);
  var s = ABOUT_POEM;
  return '<h1 class="section-title">About the Poem</h1><div class="card"><h3>What is it?</h3>' +
    '<p class="en-only">' + s.what + '</p><p class="bn">' + s.bnWhat + '</p></div>' +
    '<div class="struct-diagram">' +
    '<div class="struct-box q1"><h4>1. Climate</h4><p>Grain belts, dust bowls, polar powers</p></div>' +
    '<div class="struct-box q2"><h4>2. Society</h4><p>Farms, no cars, nut trees, vegetables</p></div>' +
    '<div class="struct-box q3"><h4>3. Civic labour</h4><p>Rome parallel, citizen maintenance</p></div>' +
    '<div class="struct-box cp"><h4>4. Acceptance</h4><p>Beach band, time in the sun</p></div></div>';
}

function renderPoem() {
  markSection('poem', 50);
  var html = '<h1 class="section-title">The Greenhouse Effect</h1>' +
    '<p class="section-desc">Tap a line for analysis · Tap words for dictionary</p><div class="card poem-block">';
  var last = 0;
  POEM.lines.forEach(function(l) {
    if (l.stanza && l.stanza !== last) {
      last = l.stanza;
      html += '<div class="quatrain-label">Part ' + last + '</div>';
    }
    html += '<div class="poem-line" onclick="openLine(' + l.id + ')"><span class="line-num">' + l.id +
      '</span>' + makeWordsClickable(l.text) + '</div>';
  });
  return html + '</div>';
}

function renderVocab() {
  markSection('vocab', 40);
  return '<h1 class="section-title">Word Explorer</h1>' +
    '<input class="vocab-search" type="search" placeholder="Search…" oninput="filterVocab(this.value)"/>' +
    '<div id="vocabList">' +
    VOCAB.map(function(v) {
      return '<div class="vocab-item" onclick="showWord(\'' + v.word.replace(/'/g, "\\'") + '\')">' +
        '<div class="w">' + v.word + '</div><div class="meta">' + v.pos + '</div><div class="bn-m">' + v.bn + '</div></div>';
    }).join('') + '</div>';
}
function filterVocab(q) {
  q = q.toLowerCase();
  document.querySelectorAll('.vocab-item').forEach(function(el) {
    el.style.display = el.textContent.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
  });
}

function renderBangla() {
  markSection('bangla', 70);
  return '<h1 class="section-title">বাংলা অর্থ</h1><p class="section-desc">India 🇮🇳</p>' +
    LINE_ANALYSIS.map(function(la) {
      return '<div class="card"><p style="font-family:var(--font-serif)">' + la.id + '. ' + la.text +
        '</p><p class="bn" style="color:var(--accent);margin-top:6px">' + la.bn +
        '</p><p class="text-muted" style="font-size:0.9rem">' + la.simpleBn + '</p></div>';
    }).join('');
}

function renderAnalysis() {
  markSection('analysis', 50);
  return '<h1 class="section-title">Line-by-Line Analysis</h1><div class="accordion">' +
    LINE_ANALYSIS.map(function(la) {
      return '<details><summary>' + la.id + '. ' + la.text.slice(0, 40) + '…</summary><div class="acc-body">' +
        '<p class="bn" style="color:var(--accent)">' + la.bn + '</p>' +
        '<div class="simple-only"><p>' + la.simple + '</p><p class="bn">' + la.simpleBn + '</p></div>' +
        '<div class="detailed-only"><p>' + la.detailed + '</p><p class="bn">' + la.detailedBn + '</p>' +
        '<p><strong>Devices:</strong> ' + la.devices.join(', ') + '</p>' +
        '<p style="color:var(--accent2)"><strong>Exam:</strong> ' + la.exam + '</p></div></div></details>';
    }).join('') + '</div>';
}

function renderDevices() {
  markSection('devices', 70);
  return '<h1 class="section-title">Literary Devices</h1>' +
    DEVICES.map(function(d) {
      return '<div class="card"><h3>' + d.name + '</h3><ul style="padding-left:18px;color:var(--muted)">' +
        d.examples.map(function(e) {
          return '<li><em style="color:var(--text)">' + e.text + '</em> — ' + e.note + '</li>';
        }).join('') + '</ul></div>';
    }).join('') +
    '<div class="card"><h3>Three Movements</h3><div class="metaphor-grid">' +
    '<div class="metaphor-card"><div class="icon">🌡️</div><h4>Warming</h4><p class="bn">উষ্ণায়ন</p></div>' +
    '<div class="metaphor-card"><div class="icon">🏙️</div><h4>Society</h4><p class="bn">সমাজ</p></div>' +
    '<div class="metaphor-card"><div class="icon">🌊</div><h4>Acceptance</h4><p class="bn">গ্রহণ</p></div></div></div>';
}

function renderThemes() {
  markSection('themes', 70);
  return '<h1 class="section-title">Themes</h1><div class="theme-grid">' +
    THEMES.map(function(t) {
      return '<div class="theme-card"><h4>' + t.title + '</h4><div class="bn-label">' + t.bn + '</div>' +
        '<p class="en-only" style="font-size:0.9rem;color:var(--muted)">' + t.en + '</p>' +
        '<p class="bn" style="font-size:0.9rem">' + t.bnExpl + '</p>' +
        '<details style="margin-top:8px"><summary style="font-size:0.85rem;color:var(--accent);cursor:pointer">Exam paragraph</summary>' +
        '<p style="font-size:0.9rem;margin-top:6px">' + t.examPara + '</p></details></div>';
    }).join('') + '</div>';
}

function renderBackground() {
  markSection('background', 70);
  return '<h1 class="section-title">Context</h1>' +
    '<div class="card"><h3>Climate & Society</h3>' +
    '<p class="en-only">Dennis writes in the context of growing climate science. The poem is a meditation on how gradual warming would rewrite maps, economies and daily life.</p>' +
    '<p class="bn">ডেনিস জলবায়ু বিজ্ঞানের যুগে লেখেন। কবিতা বৈজ্ঞানিক প্রবন্ধ নয় — ধীর উষ্ণায়ন কীভাবে মানচিত্র ও দৈনন্দিন জীবন বদলাবে তার ধ্যান।</p></div>' +
    '<div class="card"><h3>Rome & Carthage</h3>' +
    '<p class="en-only">Rome’s fall and Carthage as rival power provide a classical frame for modern decline and the rise of new centres.</p>' +
    '<p class="bn">রোমের পতন ও কার্থেজ আধুনিক অবক্ষয় ও নতুন কেন্দ্রের উত্থানের শাস্ত্রীয় কাঠামো দেয়।</p></div>';
}

function renderCritical() {
  markSection('critical', 70);
  return '<h1 class="section-title">Critical Appreciation</h1>' +
    '<div class="card"><h3>Introduction</h3>' +
    '<p class="en-only">Carl Dennis’s The Greenhouse Effect imagines the long social consequences of continuing global warming. Its strength is understatement: catastrophe is delivered in calm, practical detail.</p>' +
    '<p class="bn">কার্ল ডেনিসের কবিতা বৈশ্বিক উষ্ণায়নের দীর্ঘ সামাজিক পরিণতি কল্পনা করে। শক্তি হল সংযম।</p></div>' +
    '<div class="card"><h3>5-Mark sample</h3>' +
    '<p class="en-only">Dennis shows grain belts moving to the poles, plains becoming dust bowls, and polar regions rising as powers. Society grows poorer: no cars, farms instead of suburbs, citizens maintaining public buildings. Allusions to Rome frame the decline as civilisational. Yet the poem ends with quiet acceptance and local cultural preference.</p>' +
    '<p class="bn">শস্য অঞ্চল মেরুর দিকে, ধূলিঝড়, মেরু মহাশক্তি; দারিদ্র্য; রোমের তুলনা; তবু নীরব গ্রহণ ও স্থানীয় সংস্কৃতি।</p></div>';
}

function renderExam() {
  markSection('exam', 50);
  return '<h1 class="section-title">Exam Questions</h1>' +
    '<div class="card"><h3>Very Short</h3>' +
    EXAM_QS.veryShort.map(function(x) {
      return '<details style="margin-bottom:8px"><summary style="cursor:pointer;font-weight:600">' + x.q +
        '</summary><p class="mt-1">' + x.a + '</p><p class="bn">' + x.bn + '</p></details>';
    }).join('') + '</div>' +
    '<div class="card"><h3>Short</h3>' +
    EXAM_QS.short.map(function(x) {
      return '<details style="margin-bottom:10px"><summary style="cursor:pointer;font-weight:600">' + x.q +
        '</summary><p class="mt-1">' + x.a + '</p><p class="bn mt-1">' + x.bn + '</p></details>';
    }).join('') + '</div>' +
    '<div class="card"><h3>Broad</h3>' +
    EXAM_QS.broad.map(function(x) {
      return '<details style="margin-bottom:10px"><summary style="cursor:pointer;font-weight:600">' + x.q +
        '</summary><p class="mt-1" style="white-space:pre-line">' + x.a + '</p><p class="bn mt-1">' + x.bn + '</p></details>';
    }).join('') + '</div>';
}

function renderQuiz() {
  return '<h1 class="section-title">MCQ Quiz</h1><p class="section-desc">15 random from ' + QUIZ.length + ' questions</p>' +
    '<div class="card" style="text-align:center"><button class="btn primary" onclick="startQuiz()">Start Quiz</button></div>' +
    '<div class="card"><h3>Flashcards</h3><button class="btn" onclick="state.flashIndex=0;state.flashFlipped=false;renderFlash()">Open Flashcards</button></div>';
}

function renderRevision() {
  markSection('revision', 80);
  return '<h1 class="section-title">Revision</h1>' +
    '<div class="card"><h3>1-Minute</h3>' +
    '<p><strong>Poet:</strong> Carl Dennis (b. 1939).</p>' +
    '<p><strong>Theme:</strong> Climate change → poverty → adaptation.</p>' +
    '<p><strong>Images:</strong> dust bowls, nut trees, sheep in squares, Korean armadas, beach band.</p>' +
    '<p><strong>Close:</strong> Let them have their time in the sun; prefer native band.</p></div>' +
    '<div class="card"><h3>Night-before</h3><ul style="padding-left:18px;color:var(--muted)">' +
    '<li>Grain belts / poles / dust bowls</li>' +
    '<li>Greenland & Antarctica as powers</li>' +
    '<li>Suburbs→farms; no cars; vegetables on lawns</li>' +
    '<li>Rome / Forum / Carthages</li>' +
    '<li>Acceptance + local culture</li></ul></div>';
}

function renderProgress() {
  var sections = [
    { id: 'poem', label: 'Poem' }, { id: 'vocab', label: 'Vocab' },
    { id: 'analysis', label: 'Analysis' }, { id: 'themes', label: 'Themes' },
    { id: 'exam', label: 'Exam' }, { id: 'quiz', label: 'Quiz' }, { id: 'revision', label: 'Revision' }
  ];
  var o = overallProgress();
  return '<h1 class="section-title">Progress</h1>' +
    '<div class="card" style="text-align:center"><p style="font-size:2.5rem;font-weight:700;color:var(--accent2)">' + o + '%</p></div>' +
    '<div class="card"><div class="progress-bars">' +
    sections.map(function(s) {
      var p = state.progress[s.id] || 0;
      return '<div class="pbar-row"><div class="pbar-label">' + s.label + '</div>' +
        '<div class="pbar-track"><div class="pbar-fill" style="width:' + p + '%"></div></div>' +
        '<div class="pbar-pct">' + p + '%</div></div>';
    }).join('') + '</div></div>';
}

function render() {
  var main = document.getElementById('mainContent');
  var map = {
    home: renderHome, poet: renderPoet, about: renderAbout, poem: renderPoem,
    vocab: renderVocab, bangla: renderBangla, analysis: renderAnalysis,
    devices: renderDevices, themes: renderThemes, background: renderBackground,
    critical: renderCritical, exam: renderExam, quiz: renderQuiz,
    revision: renderRevision, teach: renderTeach, progress: renderProgress
  };
  var fn = map[state.page] || renderHome;
  main.innerHTML = fn();
  updateProgressUI();
}

document.addEventListener('DOMContentLoaded', function() {
  loadProgress();
  setLang('both');
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      navigate(a.dataset.page);
    });
  });
  document.querySelectorAll('#langSwitch button').forEach(function(b) {
    b.addEventListener('click', function() { setLang(b.dataset.lang); });
  });
  var si = document.getElementById('globalSearch');
  if (si) {
    si.addEventListener('input', function() {
      var results = doSearch(si.value);
      var box = document.getElementById('searchResults');
      if (!results.length) {
        box.innerHTML = '<p class="text-muted">No results</p>';
        return;
      }
      box.innerHTML = results.map(function(r, i) {
        return '<div class="search-hit" data-i="' + i + '"><span class="tag">' + r.type + '</span>' + escapeHtml(r.text) + '</div>';
      }).join('');
      box.querySelectorAll('.search-hit').forEach(function(el, i) {
        el.addEventListener('click', function() {
          closeModal('searchModal');
          results[i].action();
        });
      });
    });
  }
  function updateOnline() {
    document.getElementById('offlineBadge').hidden = navigator.onLine;
  }
  window.addEventListener('online', updateOnline);
  window.addEventListener('offline', updateOnline);
  updateOnline();
  render();
});
