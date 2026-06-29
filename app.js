// ─────────────────────────────────────────────────────────────────────────────
//  Mapa de Correlatividades — Ingeniería Aeroespacial UTN Plan 2023
//  Ordenanza N° 1927
// ─────────────────────────────────────────────────────────────────────────────

// ─── DATA ────────────────────────────────────────────────────────────────────
//  cursar:    IDs que deben estar CURSADOS (o aprobados) para poder cursar esta
//  aprobadas: IDs que deben estar APROBADOS para poder cursar esta
//
//  Estados posibles:
//    'done'      → aprobada con final
//    'pending'   → cursada, final pendiente (desbloquea prereqs de "cursar")
//    'available' → puede inscribirse
//    'locked'    → no cumple prereqs

const SUBJECTS = [
  // ── NIVEL I ──────────────────────────────────────────────────────────────
  { id:1,  nivel:'I',   name:'Conocimientos Aeronáuticos y Espaciales I',      cursar:[],            aprobadas:[] },
  { id:2,  nivel:'I',   name:'Sistemas de Representación en Ingeniería',        cursar:[],            aprobadas:[] },
  { id:3,  nivel:'I',   name:'Diseño y Representación Aeroespacial',            cursar:[2],           aprobadas:[] },
  { id:4,  nivel:'I',   name:'Álgebra y Geometría Analítica',                   cursar:[],            aprobadas:[] },
  { id:5,  nivel:'I',   name:'Análisis Matemático I',                           cursar:[],            aprobadas:[] },
  { id:6,  nivel:'I',   name:'Física I',                                        cursar:[],            aprobadas:[] },
  { id:7,  nivel:'I',   name:'Química General',                                 cursar:[],            aprobadas:[] },
  { id:8,  nivel:'I',   name:'Ingeniería y Sociedad',                           cursar:[],            aprobadas:[] },
  { id:9,  nivel:'I',   name:'Inglés I',                                        cursar:[],            aprobadas:[] },

  // ── NIVEL II ─────────────────────────────────────────────────────────────
  { id:10, nivel:'II',  name:'Conocimientos Aeronáuticos y Espaciales II',      cursar:[1,5,6],       aprobadas:[] },
  { id:11, nivel:'II',  name:'Estructuras Aeroespaciales I',                    cursar:[4,5,6],       aprobadas:[] },
  { id:12, nivel:'II',  name:'Materiales Metálicos',                            cursar:[6,7],         aprobadas:[] },
  { id:13, nivel:'II',  name:'Computación',                                     cursar:[3,5],         aprobadas:[] },
  { id:14, nivel:'II',  name:'Análisis Matemático II',                          cursar:[4,5],         aprobadas:[] },
  { id:15, nivel:'II',  name:'Mecánica Racional',                               cursar:[6,14],        aprobadas:[] },
  { id:16, nivel:'II',  name:'Física II',                                       cursar:[5,6],         aprobadas:[] },
  { id:17, nivel:'II',  name:'Probabilidad y Estadística',                      cursar:[4,5],         aprobadas:[] },
  { id:18, nivel:'II',  name:'Economía',                                        cursar:[1,5],         aprobadas:[] },

  // ── NIVEL III ────────────────────────────────────────────────────────────
  { id:19, nivel:'III', name:'Matemáticas Avanzadas para Ingeniería',           cursar:[10,13,14],    aprobadas:[1,4,5] },
  { id:20, nivel:'III', name:'Programación y Análisis Numérico',                cursar:[10,11,19],    aprobadas:[3,13] },
  { id:21, nivel:'III', name:'Estructuras Aeroespaciales II',                   cursar:[10,11],       aprobadas:[] },
  { id:22, nivel:'III', name:'Electrotecnia y Electrónica',                     cursar:[14,16],       aprobadas:[4,5,6] },
  { id:23, nivel:'III', name:'Mecánica del Sólido',                             cursar:[15],          aprobadas:[6,14] },
  { id:24, nivel:'III', name:'Termodinámica',                                   cursar:[14,16],       aprobadas:[4,5,6] },
  { id:25, nivel:'III', name:'Organización Industrial',                         cursar:[13,17,18],    aprobadas:[8] },
  { id:26, nivel:'III', name:'Mecánica de los Fluidos',                         cursar:[10,15],       aprobadas:[14,16] },
  { id:27, nivel:'III', name:'Materiales No Metálicos',                         cursar:[11,12,14],    aprobadas:[1,7] },

  // ── NIVEL IV ─────────────────────────────────────────────────────────────
  { id:28, nivel:'IV',  name:'Sistemas de Vehículos Aéreos y Espaciales',       cursar:[22,26],       aprobadas:[10,12,15] },
  { id:29, nivel:'IV',  name:'Motores Aeronáuticos',                            cursar:[22,24,26],    aprobadas:[10,12] },
  { id:30, nivel:'IV',  name:'Estructuras Aeroespaciales III',                  cursar:[19,21,23],    aprobadas:[11,12,13] },
  { id:31, nivel:'IV',  name:'Mecanismos',                                      cursar:[21],          aprobadas:[3,12,15] },
  { id:32, nivel:'IV',  name:'Sistemas de Control',                             cursar:[20,22,24],    aprobadas:[15,19] },
  { id:33, nivel:'IV',  name:'Aerodinámica Teórica',                            cursar:[23,24,26],    aprobadas:[15,16,19] },
  { id:34, nivel:'IV',  name:'Instrumentos y Aviónica',                         cursar:[22,24,26],    aprobadas:[15,16,19] },
  { id:35, nivel:'IV',  name:'Materiales Aeroespaciales',                       cursar:[21,27],       aprobadas:[12] },
  { id:36, nivel:'IV',  name:'Mecánica Orbital',                                cursar:[20],          aprobadas:[10,15,19] },
  { id:37, nivel:'IV',  name:'Inglés II',                                       cursar:[9],           aprobadas:[] },

  // ── NIVEL V ──────────────────────────────────────────────────────────────
  { id:38, nivel:'V',   name:'Procesos de Fabricación Aeroespacial',            cursar:[25,31,35],    aprobadas:[10,18,27] },
  { id:39, nivel:'V',   name:'Proyecto y Diseño Aerodinámico',                  cursar:[28,29,33],    aprobadas:[10,20] },
  { id:40, nivel:'V',   name:'Mecánica del Vuelo',                              cursar:[29,32,33],    aprobadas:[10,20] },
  { id:41, nivel:'V',   name:'Proyecto y Diseño de Estructuras Aeronáuticas',   cursar:[30,33,35],    aprobadas:[21,23] },
  { id:42, nivel:'V',   name:'Helicópteros',                                    cursar:[28,31,33],    aprobadas:[21,24,26] },
  { id:43, nivel:'V',   name:'Análisis y Diseño de Misiles y Lanzadores',       cursar:[28,32,33,36], aprobadas:[21,24,26,27] },
  { id:44, nivel:'V',   name:'Ingeniería de Sistemas Espaciales',               cursar:[28,30,32,36], aprobadas:[21,24,26,27] },
  { id:45, nivel:'V',   name:'Legislación y Ejercicio Profesional',             cursar:[25],          aprobadas:[10] },
  { id:46, nivel:'V',   name:'Normativa Aeronáutica',                           cursar:[28,33],       aprobadas:[10,25] },

  // ── NIVEL VI ─────────────────────────────────────────────────────────────
  { id:47, nivel:'VI',  name:'Proyecto y Diseño de Estructuras Espaciales',     cursar:[41,43,44],    aprobadas:[28,30,35] },
  { id:48, nivel:'VI',  name:'Mantenimiento General de Aeronaves',              cursar:[39,41,46],    aprobadas:[10,25,28] },
  { id:49, nivel:'VI',  name:'Aeropuertos, Aeronavegación e Impacto Ambiental', cursar:[39,41,46],    aprobadas:[25,28,34] },

  // ── PROYECTO FINAL ───────────────────────────────────────────────────────
  { id:50, nivel:'VI',  name:'Proyecto Final', special:true,
                                                                                cursar:[39,41,43,44], aprobadas:[28,35] },
];

const NIVELES      = ['I','II','III','IV','V','VI'];
const NIVEL_NAMES  = {
  'I':'Primer año', 'II':'Segundo año', 'III':'Tercer año',
  'IV':'Cuarto año', 'V':'Quinto año',  'VI':'Sexto año'
};
const TOTAL        = SUBJECTS.length;
const STORAGE_KEY  = 'utn_aero_v2';

// ─── STATE ───────────────────────────────────────────────────────────────────
// state[id] = 'done' | 'pending' | null
let state = {};

function loadState() {
  try { state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { state = {}; }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getName(id) {
  return SUBJECTS.find(s => s.id === id)?.name || `Materia #${id}`;
}

// "cursada" = done OR pending
function isCursada(id)  { return state[id] === 'done' || state[id] === 'pending'; }
function isAprobada(id) { return state[id] === 'done'; }

function getStatus(subject) {
  if (state[subject.id] === 'done')    return 'done';
  if (state[subject.id] === 'pending') return 'pending';

  // Para cursar: todos los prereqs de cursar deben estar cursados (done o pending)
  // y los de aprobadas deben estar aprobados (done)
  const canCursar = subject.cursar.every(isCursada) && subject.aprobadas.every(isAprobada);
  return canCursar ? 'available' : 'locked';
}

function getMissing(subject) {
  const missingC = subject.cursar.filter(id => !isCursada(id)).map(getName);
  const missingA = subject.aprobadas.filter(id => !isAprobada(id)).map(getName);
  // merge without duplicates
  const all = [...new Set([...missingC, ...missingA])];
  return all.length ? 'Necesitás: ' + all.join(' · ') : '';
}

// Cascade: when a subject changes to a lower state, downgrade dependents
function cascade(changedId, oldLevel) {
  // oldLevel: 'done' | 'pending' (what it WAS before removal)
  // Walk all approved/pending subjects and remove those that now fail their prereqs
  let changed = true;
  while (changed) {
    changed = false;
    SUBJECTS.forEach(s => {
      if (!state[s.id]) return;
      const st = getStatus(s);
      if (st === 'locked') {
        delete state[s.id];
        changed = true;
      }
    });
  }
}

// ─── CLICK LOGIC ─────────────────────────────────────────────────────────────
// Cycle: available → pending → done → null (remove) → ...
// locked: no action

function handleClick(subjectId) {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return;

  const current = state[subjectId] || null;

  if (current === null) {
    // available → pending
    const status = getStatus(subject);
    if (status === 'locked') return;
    state[subjectId] = 'pending';
    showToast(`📋 Final pendiente: ${subject.name}`, 'pending');
  } else if (current === 'pending') {
    // pending → done
    state[subjectId] = 'done';
    showToast(`✅ Aprobada: ${subject.name}`, 'done');
    checkEasterEgg();
  } else if (current === 'done') {
    // done → remove (and cascade)
    delete state[subjectId];
    cascade(subjectId, 'done');
    showToast(`↩ Desmarcada: ${subject.name}`, 'undo');
  }

  saveState();
  render();
}

// ─── RENDER ──────────────────────────────────────────────────────────────────
function render() {
  const container = document.getElementById('main-container');
  container.innerHTML = '';

  NIVELES.forEach(nivel => {
    const subjects = SUBJECTS.filter(s => s.nivel === nivel);
    if (!subjects.length) return;

    const doneCount = subjects.filter(s => state[s.id] === 'done').length;
    const pendCount  = subjects.filter(s => state[s.id] === 'pending').length;

    const block = document.createElement('div');
    block.className = 'nivel-block';

    const countLabel = doneCount + (pendCount ? `+${pendCount}p` : '') + `/${subjects.length}`;

    block.innerHTML = `
      <div class="nivel-header">
        <div class="nivel-badge">Nivel ${nivel} — ${NIVEL_NAMES[nivel]}</div>
        <div class="nivel-line"></div>
        <div class="nivel-count">${countLabel}</div>
      </div>
      <div class="subjects-grid" id="grid-${nivel}"></div>
    `;
    container.appendChild(block);

    const grid = block.querySelector(`#grid-${nivel}`);
    subjects.forEach(s => grid.appendChild(buildCard(s)));
  });

  updateStats();

  if (document.getElementById('diagram-view').classList.contains('active')) {
    renderDiagram();
  }
}

function buildCard(subject) {
  const status  = getStatus(subject);
  const missing = status === 'locked' ? getMissing(subject) : '';

  const card = document.createElement('div');
  card.className = `subject-card ${status}${subject.special ? ' special' : ''}`;
  card.tabIndex  = status !== 'locked' ? 0 : -1;

  // Status icon character
  const icon = {
    done:      '✓',
    pending:   '⧗',
    available: '',
    locked:    '🔒',
  }[status];

  // Prereq summary (short ids)
  const allReqs = [...new Set([...subject.cursar, ...subject.aprobadas])];
  const reqText = allReqs.length && !subject.special
    ? `Req: ${allReqs.map(id => `#${id}`).join(' ')}`
    : '';

  // Click hint
  const hintMap = {
    available: '1 click → final pendiente',
    pending:   '1 click → aprobada',
    done:      '1 click → desmarcar',
    locked:    '',
  };

  card.innerHTML = `
    <div class="card-top">
      <div class="card-num">#${String(subject.id).padStart(2,'0')}</div>
      <div class="card-status">${icon}</div>
    </div>
    <div class="card-name">${subject.name}</div>
    ${reqText   ? `<div class="card-prereqs">${reqText}</div>` : ''}
    ${hintMap[status] ? `<div class="card-hint">${hintMap[status]}</div>` : ''}
    ${missing   ? `<div class="card-tooltip">${missing}</div>` : ''}
  `;

  if (status !== 'locked') {
    card.addEventListener('click', () => handleClick(subject.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(subject.id);
      }
    });
  }

  return card;
}

// ─── STATS BAR ───────────────────────────────────────────────────────────────
function updateStats() {
  const done    = SUBJECTS.filter(s => state[s.id] === 'done').length;
  const pending = SUBJECTS.filter(s => state[s.id] === 'pending').length;
  const avail   = SUBJECTS.filter(s => !state[s.id] && getStatus(s) === 'available').length;
  const pct     = Math.round((done / TOTAL) * 100);

  document.getElementById('count-done').textContent    = done;
  document.getElementById('count-pending').textContent = pending;
  document.getElementById('count-avail').textContent   = avail;
  document.getElementById('prog-fill').style.width     = pct + '%';
  document.getElementById('prog-pct').textContent      = pct + '%';
}

// ─── RESET ───────────────────────────────────────────────────────────────────
function resetAll() {
  if (!confirm('¿Reiniciar todo? Se van a borrar todas las materias marcadas.')) return;
  state = {};
  saveState();
  render();
  showToast('🔄 Reiniciado', 'undo');
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type = 'done') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className   = `show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.className = type, 2600);
}

// ─── EASTER EGG ──────────────────────────────────────────────────────────────
let easterEggShown = false;

function checkEasterEgg() {
  if (easterEggShown) return;
  const allDone = SUBJECTS.every(s => state[s.id] === 'done');
  if (!allDone) return;
  easterEggShown = true;
  setTimeout(() => {
    document.getElementById('easter-egg').classList.add('show');
    document.getElementById('confetti-canvas').classList.add('show');
    launchConfetti();
  }, 600);
}

function closeEasterEgg() {
  document.getElementById('easter-egg').classList.remove('show');
  document.getElementById('confetti-canvas').classList.remove('show');
  stopConfetti();
}

// ─── CONFETTI ────────────────────────────────────────────────────────────────
let confettiAnimId = null;
let confettiParticles = [];

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#4f8ef7','#6dd5a8','#f5c842','#ff7eb3','#c07af7','#ff9f7e'];
  confettiParticles = Array.from({length: 160}, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height - canvas.height,
    w:  Math.random() * 10 + 5,
    h:  Math.random() * 5  + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3  + 1.5,
    angle: Math.random() * Math.PI * 2,
    spin:  (Math.random() - 0.5) * 0.15,
    drift: (Math.random() - 0.5) * 1.5,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
      p.y     += p.speed;
      p.x     += p.drift;
      p.angle += p.spin;
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
    confettiAnimId = requestAnimationFrame(draw);
  }
  draw();
}

function stopConfetti() {
  if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
  confettiAnimId = null;
  confettiParticles = [];
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ─── TABS ────────────────────────────────────────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.getElementById('main-container').classList.toggle('active', tab === 'board');
  document.getElementById('diagram-view').classList.toggle('active', tab === 'diagram');
  if (tab === 'diagram') renderDiagram();
}

// ─── DIAGRAM (SVG NETWORK VIEW) ──────────────────────────────────────────────
const DG_NODE_W   = 172;
const DG_NODE_H   = 56;
const DG_ROW_GAP  = 22;
const DG_COL_GAP  = 76;
const DG_ROW_STEP = DG_NODE_H + DG_ROW_GAP;
const DG_COL_STEP = DG_NODE_W + DG_COL_GAP;
const DG_TOP      = 46;
const DG_LEFT     = 30;

function dgWrapText(name, maxChars = 17, maxLines = 3) {
  const words = name.split(' ');
  const lines = [];
  let cur = '';
  words.forEach(w => {
    const test = cur ? cur + ' ' + w : w;
    if (test.length > maxChars && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = test;
    }
  });
  if (cur) lines.push(cur);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = lines[maxLines - 1].replace(/.{0,3}$/, '…');
  }
  return lines;
}

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function renderDiagram() {
  const container = document.getElementById('diagram-container');
  container.innerHTML = '';

  // Layout: column per nivel, row per subject within that nivel (in declared order)
  const pos = {};      // id -> {x,y,cx,cyTop,cyMid,nivelIndex,rowIndex}
  let maxRows = 0;

  NIVELES.forEach((nivel, ni) => {
    const subjects = SUBJECTS.filter(s => s.nivel === nivel);
    subjects.forEach((s, ri) => {
      pos[s.id] = {
        x: DG_LEFT + ni * DG_COL_STEP,
        y: DG_TOP + ri * DG_ROW_STEP,
        nivelIndex: ni,
        rowIndex: ri,
      };
    });
    maxRows = Math.max(maxRows, subjects.length);
  });

  const width  = DG_LEFT * 2 + (NIVELES.length - 1) * DG_COL_STEP + DG_NODE_W;
  const height = DG_TOP + maxRows * DG_ROW_STEP + 20;

  const svg = svgEl('svg', {
    viewBox: `0 0 ${width} ${height}`,
    width, height,
  });

  // Nivel column labels
  NIVELES.forEach((nivel, ni) => {
    const x = DG_LEFT + ni * DG_COL_STEP + DG_NODE_W / 2;
    svg.appendChild(svgEl('text', { class: 'dg-nivel-label', x, y: 22 }))
      .textContent = `NIVEL ${nivel}`;
  });

  // Build edge list (dedupe: if id required as 'aprobadas', drop the same id from 'cursar')
  const edgesLayer = svgEl('g', { class: 'edges-layer' });
  svg.appendChild(edgesLayer);
  const edges = []; // {sourceId, targetId, kind, el}

  SUBJECTS.forEach(s => {
    const aprobadasSet = new Set(s.aprobadas);
    const cursarOnly = s.cursar.filter(id => !aprobadasSet.has(id));
    cursarOnly.forEach(srcId => edges.push({ sourceId: srcId, targetId: s.id, kind: 'cursar' }));
    s.aprobadas.forEach(srcId => edges.push({ sourceId: srcId, targetId: s.id, kind: 'aprobada' }));
  });

  function edgeColorClass(srcId) {
    if (state[srcId] === 'done') return 'src-done';
    if (state[srcId] === 'pending') return 'src-pending';
    return '';
  }

  edges.forEach(e => {
    const a = pos[e.sourceId], b = pos[e.targetId];
    if (!a || !b) return;
    const x1 = a.x + DG_NODE_W, y1 = a.y + DG_NODE_H / 2;
    const x2 = b.x,             y2 = b.y + DG_NODE_H / 2;
    const dx = Math.max(40, (x2 - x1) * 0.5);
    const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
    const cls = ['dg-edge', e.kind === 'aprobada' ? 'req-aprobada' : '', edgeColorClass(e.sourceId)]
      .filter(Boolean).join(' ');
    const path = svgEl('path', { class: cls, d });
    path.dataset.source = e.sourceId;
    path.dataset.target = e.targetId;
    edgesLayer.appendChild(path);
    e.el = path;
  });

  // Nodes
  const nodesLayer = svgEl('g', { class: 'nodes-layer' });
  svg.appendChild(nodesLayer);
  const nodeEls = {};

  SUBJECTS.forEach(s => {
    const p = pos[s.id];
    if (!p) return;
    const status = getStatus(s);
    const g = svgEl('g', { class: `dg-node ${status}${s.special ? ' special' : ''}`, transform: `translate(${p.x},${p.y})` });

    g.appendChild(svgEl('rect', {
      class: 'dg-node-rect', width: DG_NODE_W, height: DG_NODE_H, rx: 8,
    }));

    const numText = svgEl('text', {
      class: 'dg-node-text', x: 10, y: 13, 'text-anchor': 'start',
      style: `font-family:var(--mono);font-size:8px;fill:var(--text3);`,
    });
    numText.textContent = `#${String(s.id).padStart(2, '0')}`;
    g.appendChild(numText);

    const lines = dgWrapText(s.name);
    const startY = DG_NODE_H / 2 - ((lines.length - 1) * 12) / 2 + 4;
    lines.forEach((line, i) => {
      const t = svgEl('text', { class: 'dg-node-text', x: DG_NODE_W / 2, y: startY + i * 12 });
      t.textContent = line;
      g.appendChild(t);
    });

    g.addEventListener('click', () => handleClick(s.id));
    g.addEventListener('mouseenter', () => dgHighlight(s.id, edges, nodeEls));
    g.addEventListener('mouseleave', () => dgClearHighlight(edges, nodeEls));

    nodesLayer.appendChild(g);
    nodeEls[s.id] = g;
  });

  container.appendChild(svg);
}

function dgHighlight(id, edges, nodeEls) {
  // Directly unlocked targets (this subject is a prereq for them)
  const unlocked = new Set(edges.filter(e => e.sourceId === id).map(e => e.targetId));

  edges.forEach(e => {
    if (e.sourceId === id) e.el.classList.add('highlight');
    else e.el.classList.add('dimmed');
  });

  Object.entries(nodeEls).forEach(([nid, g]) => {
    nid = Number(nid);
    if (nid === id) g.classList.add('hovered');
    else if (unlocked.has(nid)) g.classList.add('unlocked-by-hover');
  });
}

function dgClearHighlight(edges, nodeEls) {
  edges.forEach(e => e.el.classList.remove('highlight', 'dimmed'));
  Object.values(nodeEls).forEach(g => g.classList.remove('hovered', 'unlocked-by-hover'));
}

// ─── INIT ────────────────────────────────────────────────────────────────────
loadState();
render();

// Re-check easter egg on load (if they refreshed mid-celebration)
if (SUBJECTS.every(s => state[s.id] === 'done')) {
  easterEggShown = false;
  checkEasterEgg();
}

// Resize confetti canvas
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti-canvas');
  if (canvas.classList.contains('show')) {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});
