/* ═══════════════════════════════════════════════════════════════════
   OBSERVER v2 — script.js
   Cinematic Personal System · Full JS
═══════════════════════════════════════════════════════════════════ */
'use strict';

/* ──────────────────────────────────────────────
   IMAGE URLS — your images mapped here
────────────────────────────────────────────── */
const IMGS = {
  intro:   'https://cdn.discordapp.com/attachments/1478315058621583385/1494965089709592659/From_KlickPin_CF_Dreamy_hidden_country_gems_today_made_to_spark_ideas_in_seconds_to_spark_your_next_plan_-_Pin-649855421273372559.jpg?ex=69e4863c&is=69e334bc&hm=19cbab02e71fe314b8f9c79386f6e06788ad1f0c2465f569194d48ec59c125a5&',
  home:    'https://cdn.discordapp.com/attachments/1478315058621583385/1494966132141199553/From_KlickPin_CF_Try_Simple_wedding_hair_ideas_that_are_packed_with_ideas_people_keep_saving_and_clicking_on_lately_for_ideas_worth_saving_right_now_-_Pin-35395547065515167.jpg?ex=69e48735&is=69e335b5&hm=5a8bcaa9167a5ed3bb7207e316f7c1a9c4128322869220131b41d516955d54c6&',
  log1_thumb: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494966338815524934/From_KlickPin_CF_Seasonal_Remote_Work_Tips_on_a_Budget_-_Pin-314126142774853663.jpg?ex=69e48766&is=69e335e6&hm=50448072415a6b13333f2590fccf5b353825c598f651af0eb830898bb98d1976&',
  log1_content: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494966794165813248/From_KlickPin_CF_Need_fresh_inspiration__Save_these_viral_beach_trip_ideas_everyone_will_ask_you_about_using_simple_ideas_you_can_actually_pull_off_and_make_every_-_Pin-172122017008669939.jpg?ex=69e487d2&is=69e33652&hm=3f3d16b37ad694c2ab6fbdb146ddc7d4c64661a03b15ada4769786ab4b7aeded&',
  log2_thumb: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494967086043365388/From_KlickPin_CF_Amazing_Comfort_Food_Recipes_on_a_Budget_-_Pin-473159504624239119.jpg?ex=69e48818&is=69e33698&hm=1a7d31d822c25519cd66de9d6de326289b62d9a78c36046750e1efb61098bb40&',
  log2_content: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494967413127647262/From_KlickPin_CF_12_Modern_garden_wedding_decor_ideas_that_feel_fresh_elevated_and_surprisingly_easy_to_recreate_at_home_for_anyone_who_wants_easy_but_elegant_-_Pin-622270873554086811_1.jpg?ex=69e48866&is=69e336e6&hm=dc4ce8b639bcbfa2c4393c42c620264e983188d3a5a0b4b874182ab2ecdd3d0c&',
  log3_thumb: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494967648918835210/From_KlickPin_CF_Pin_this_guide_to_viral_digital_planning_ideas_that_help_you_get_the_look_without_the_stress_with_beginner-friendly_tips_and_easy_details_and_-_Pin-569564684148209881.jpg?ex=69e4889e&is=69e3371e&hm=37859cd29280fe9b4b97e5906ac4bb4a48ef7332b4a0aa6bb315a5c6fbb4de26&',
  log3_content: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494967648918835210/From_KlickPin_CF_Pin_this_guide_to_viral_digital_planning_ideas_that_help_you_get_the_look_without_the_stress_with_beginner-friendly_tips_and_easy_details_and_-_Pin-569564684148209881.jpg?ex=69e4889e&is=69e3371e&hm=37859cd29280fe9b4b97e5906ac4bb4a48ef7332b4a0aa6bb315a5c6fbb4de26&',
  log4_thumb: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494967971980902461/From_KlickPin_CF_Road_Trip_Essentials_for_Spring_87606_-_Pin-375909900150801468.jpg?ex=69e488eb&is=69e3376b&hm=b728e107035eebfd2e1ce47932883494631cc01e1945d7095d6a5cab155e763f&',
  log4_content: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494968367260504094/From_KlickPin_CF_From_beginner_to_obsessed_Steal_these_cozy_family_routine_ideas_perfect_for_saving_sharing_and_recreating_later_using_simple_ideas_you_can_-_Pin-526710118943744108.jpg?ex=69e48949&is=69e337c9&hm=245486cdb567c4765660ee8aefdbcb515913c344cd0b4e00b4e807c567eeb138&',
  about_bg: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494968616049705010/From_KlickPin_CF_Copy_this_guide_to_viral_pet-friendly_home_ideas_everyone_will_ask_you_about_with_smart_steps_cute_details_and_cozy_vibes_and_turn_simple_-_Pin-22729173116308757.jpg?ex=69e48985&is=69e33805&hm=f1d7bc52143f9cd37389983e472ecc52c0b2140dcd333430fe687ca3e0575a62&',
  accent1: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494968835843948664/From_KlickPin_CF_Everyday_leadership_reflections_with_ideas_people_actually_use_for_living_that_stay_calm_and_fair_-_Pin-7036943160154573.jpg?ex=69e489b9&is=69e33839&hm=615f79be1079676470e283fc77cc8de816f3ef4a8efe6377ff0c9b5aee1e3c14&',
  accent2: 'https://cdn.discordapp.com/attachments/1478315058621583385/1494969045710274672/From_KlickPin_CF_Pin_by_R_A_on_Quick_Saves___Animal_spirit_guides_Joker_drawings_169_wallpaper.jpg?ex=69e489eb&is=69e3386b&hm=58af1132080896212952e78b5bf1716c696d28732cecb919f7261c5ecc5cc356&'
};

/* ──────────────────────────────────────────────
   SAMPLE LOGS
────────────────────────────────────────────── */
const SAMPLE_LOGS = [
  {
    id: 'log-001',
    title: 'Loss of Focus',
    date: '2024-03-12',
    tags: ['discipline', 'reflection'],
    type: 'text',
    thumbnail: IMGS.log1_thumb,
    blocks: [
      { type:'text', content:`There was a period — and I will not romanticize it — where I simply stopped. Not dramatically. Not with a declaration. I just let things slip, one small compromise at a time. A skipped session here. A postponed task there. The kind of erosion that doesn't announce itself until the damage is visible.` },
      { type:'image', url: IMGS.log1_content, caption:'The quiet weight of wasted hours' },
      { type:'text', content:`What I learned: discipline is not a trait. It is a practice. The moment you treat it as something you either have or don't, you've already lost. What I lost wasn't time — time is always moving. What I lost was momentum, and momentum is harder to rebuild than most people admit.\n\nThe realization didn't come as a revelation. It came as a quiet embarrassment. Looking at a week that had passed with nothing to show for it — no progress, no learning, no output. Just consumption. That was the mirror.\n\nI chose to look into it instead of away.` }
    ]
  },
  {
    id: 'log-002',
    title: 'Blame and Reality',
    date: '2024-05-08',
    tags: ['reality', 'growth'],
    type: 'text',
    thumbnail: IMGS.log2_thumb,
    blocks: [
      { type:'text', content:`I was told that my marks suffered because I spent too much time writing code. The accusation wasn't wrong — but it also wasn't the full picture. The real problem wasn't the coding. It was the imbalance. I had leaned so far into one thing that everything else had tilted out of reach.` },
      { type:'text', content:`Blame, I've come to understand, is rarely about finding the truth. It's about placing a weight somewhere. And when someone places it on you — fairly or not — the question isn't whether they're right. The question is: what do you do with it?\n\nI could have defended myself. I had arguments. I had context. But context doesn't improve outcomes. Responsibility does.\n\nSo I accepted the weight — not as defeat, but as data. I examined where the imbalance had come from. I restructured. Not perfectly. But intentionally.` },
      { type:'image', url: IMGS.log2_content, caption:'Balance is not stillness — it is constant adjustment' },
      { type:'text', content:`Responsibility and blame are not the same thing. One is given to you. The other you take for yourself. I am still learning the difference — but I am learning it actively.` }
    ]
  },
  {
    id: 'log-003',
    title: 'Dream vs. Reality',
    date: '2024-07-21',
    tags: ['growth', 'reflection'],
    type: 'mixed',
    thumbnail: IMGS.log3_thumb,
    blocks: [
      { type:'text', content:`I wanted to go to Japan. Not as a tourist — as a presence. To walk through places I had only seen in frames. To feel the quiet density of a city that moves like water. I had a timeline. I had a vision. What I didn't have was the readiness that timeline required.` },
      { type:'image', url: IMGS.log3_content, caption:'A city that existed in imagination long before arrival' },
      { type:'text', content:`When it didn't happen — not because the desire failed, but because the conditions weren't right — I had two choices. I could mourn the gap between what I wanted and what was. Or I could understand that timing is not random. It has reasons, even when those reasons are invisible.\n\nThe dream didn't shrink. The timeline did. And in the space that created, I found things I wouldn't have found if I'd been moving too fast to notice them.\n\nTiming matters. Not because the universe is patient, but because you have to be.` }
    ]
  },
  {
    id: 'log-004',
    title: 'Dual Path',
    date: '2024-09-03',
    tags: ['conflict', 'discipline', 'growth'],
    type: 'text',
    thumbnail: IMGS.log4_thumb,
    blocks: [
      { type:'text', content:`There is a particular kind of tension that comes from loving two things that make competing demands on the same hours. For me, it was formal study and the craft I had chosen outside of it. Both mattered. Both required time I didn't have in infinite supply.` },
      { type:'text', content:`The conflict was real. Not manufactured for drama. Some nights I'd be hours into building something — a system, a tool, an idea — and I'd realize I had a test in the morning I hadn't prepared for. Some mornings I'd study with the persistent awareness that I was neglecting something I cared about more.\n\nThe resolution wasn't elegant. I didn't find a perfect balance. What I found was a working agreement — with myself. Study is not the enemy of passion. Passion is not the enemy of structure. They require negotiation, not elimination.` },
      { type:'image', url: IMGS.log4_content, caption:'Two paths — not a fork, but a parallel walk' },
      { type:'text', content:`I decided I would not choose between them. I would carry both — not equally at all times, but with the awareness that both deserved to exist. Some weeks the craft got more. Some weeks the studies demanded it. The observer's role was to notice which, and adjust — without apology, without abandonment.` }
    ]
  }
];

/* ──────────────────────────────────────────────
   STATE
────────────────────────────────────────────── */
let logs = [];
let activeFilter = 'all';
let searchQuery  = '';
let isAdminAuthed = false;
let editorBlocks = [];
let editingId = null;
let isGridView = true;

/* ──────────────────────────────────────────────
   STORAGE
────────────────────────────────────────────── */
function loadLogs() {
  try {
    const s = localStorage.getItem('obs_logs_v2');
    if (s) {
      const saved = JSON.parse(s);
      const savedIds = new Set(saved.map(l => l.id));
      const merged = [...saved];
      SAMPLE_LOGS.forEach(sl => { if (!savedIds.has(sl.id)) merged.push(sl); });
      return merged;
    }
  } catch(e) {}
  return [...SAMPLE_LOGS];
}
function saveLogs() {
  try { localStorage.setItem('obs_logs_v2', JSON.stringify(logs)); } catch(e) {}
}

/* ──────────────────────────────────────────────
   RAIN CANVAS
────────────────────────────────────────────── */
function initRain() {
  const c = document.getElementById('rain-canvas');
  if (!c) return null;
  const ctx = c.getContext('2d');
  let drops = [];

  const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };

  const mkDrop = () => ({
    x: Math.random() * c.width,
    y: Math.random() * -c.height,
    len: Math.random() * 55 + 15,
    spd: Math.random() * 5 + 7,
    a: Math.random() * 0.22 + 0.04,
    w: Math.random() * 0.7 + 0.2
  });

  const init = () => {
    drops = [];
    const n = Math.floor(c.width / 7);
    for (let i = 0; i < n; i++) {
      const d = mkDrop();
      d.y = Math.random() * c.height;
      drops.push(d);
    }
  };

  resize(); init();
  window.addEventListener('resize', () => { resize(); init(); });

  return () => {
    ctx.clearRect(0, 0, c.width, c.height);
    drops.forEach(d => {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.len * 0.12, d.y + d.len);
      ctx.strokeStyle = `rgba(170,195,255,${d.a})`;
      ctx.lineWidth = d.w;
      ctx.lineCap = 'round';
      ctx.stroke();
      d.y += d.spd;
      if (d.y - d.len > c.height) Object.assign(d, mkDrop());
    });
  };
}

/* ──────────────────────────────────────────────
   HOME PARTICLES CANVAS
────────────────────────────────────────────── */
function initHomeParticles() {
  const c = document.getElementById('home-particles-canvas');
  if (!c) return null;
  const ctx = c.getContext('2d');
  let pts = [];

  const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };

  const mkPt = () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 1.2 + 0.3,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.12,
    a: Math.random() * 0.35 + 0.1
  });

  resize();
  for (let i = 0; i < 60; i++) pts.push(mkPt());
  window.addEventListener('resize', resize);

  return () => {
    ctx.clearRect(0, 0, c.width, c.height);
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,169,110,${p.a})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > c.width) p.vx *= -1;
      if (p.y < 0 || p.y > c.height) p.vy *= -1;
    });
  };
}

/* ──────────────────────────────────────────────
   INTRO PARTICLES
────────────────────────────────────────────── */
function spawnIntroParticles() {
  const wrap = document.getElementById('intro-particles');
  if (!wrap) return;
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'iparticle';
    const sz = Math.random() * 4 + 1;
    p.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${Math.random()*100}%;
      bottom:${Math.random()*-10}%;
      animation-duration:${Math.random()*18+10}s;
      animation-delay:${Math.random()*-20}s;
      opacity:0;
    `;
    wrap.appendChild(p);
  }
}

/* ──────────────────────────────────────────────
   CUSTOM CURSOR
────────────────────────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  const hoverEls = () => document.querySelectorAll('a,button,.log-card,.fpill,.sr-item');

  const checkHover = e => {
    const over = [...hoverEls()].some(el => el.contains(e.target) || el === e.target);
    document.body.classList.toggle('cursor-hover', over);
  };
  document.addEventListener('mouseover', checkHover);

  const animate = () => {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animate);
  };
  animate();
}

/* ──────────────────────────────────────────────
   INTRO SEQUENCE
────────────────────────────────────────────── */
function runIntro() {
  // Set bg
  const bg = document.getElementById('intro-bg');
  if (bg) {
    bg.style.backgroundImage = `url('${IMGS.intro}')`;
    const tmp = new Image();
    tmp.onload = () => bg.classList.add('loaded');
    tmp.src = IMGS.intro;
  }

  spawnIntroParticles();

  // Progress fill
  const fill = document.getElementById('intro-progress-fill');
  const totalDuration = 12200;
  let start = null;
  const animProg = (ts) => {
    if (!start) start = ts;
    const pct = Math.min(((ts - start) / totalDuration) * 100, 100);
    if (fill) fill.style.width = pct + '%';
    if (pct < 100) requestAnimationFrame(animProg);
  };
  requestAnimationFrame(animProg);

  // Lines schedule
  const schedule = [
    { id:'ipre',  delay:300  },
    { id:'il1',   delay:900  },
    { id:'il2',   delay:2400 },
    { id:'il3',   delay:4200 },
    { id:'il4',   delay:5500 },
    { id:'il5',   delay:7100 },
    { id:'il6',   delay:9000 },
    { id:'il7',   delay:10200},
  ];

  schedule.forEach(({id, delay}) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.classList.add('vis');
    }, delay);
  });

  // Enter button
  setTimeout(() => {
    const e = document.getElementById('intro-enter');
    if (e) e.classList.add('vis');
  }, 11400);
}

/* ──────────────────────────────────────────────
   ENTER SITE
────────────────────────────────────────────── */
function enterSite() {
  const intro = document.getElementById('intro');
  const site  = document.getElementById('site');

  intro.style.transition = 'opacity 1.3s ease';
  intro.style.opacity    = '0';
  intro.style.pointerEvents = 'none';

  setTimeout(() => {
    intro.classList.add('hidden');
    site.classList.remove('site-hidden');
    requestAnimationFrame(() => {
      setTimeout(() => site.classList.add('site-visible'), 50);
    });
    bootSite();
  }, 1300);
}

/* ──────────────────────────────────────────────
   BOOT MAIN SITE
────────────────────────────────────────────── */
function bootSite() {
  logs = loadLogs();
  setImages();
  renderLogs();
  updateHomeStat();
  initScrollReveal();
  initNavActive();
  initParallax();
  initSearch();
  initFilterBar();
  initGridToggle();
}

/* ──────────────────────────────────────────────
   SET IMAGES
────────────────────────────────────────────── */
function setImages() {
  // Home bg
  const hbg = document.getElementById('home-bg');
  if (hbg) hbg.style.backgroundImage = `url('${IMGS.home}')`;

  // About bg
  const abg = document.getElementById('about-bg');
  if (abg) abg.style.backgroundImage = `url('${IMGS.about_bg}')`;

  // About image stack
  const ai1 = document.getElementById('aimg1');
  const ai2 = document.getElementById('aimg2');
  if (ai1) ai1.style.backgroundImage = `url('${IMGS.accent1}')`;
  if (ai2) ai2.style.backgroundImage = `url('${IMGS.accent2}')`;
}

/* ──────────────────────────────────────────────
   HOME STAT COUNTER
────────────────────────────────────────────── */
function updateHomeStat() {
  const el = document.getElementById('hs-logs');
  if (!el) return;
  let n = 0;
  const target = logs.length;
  const iv = setInterval(() => {
    n = Math.min(n + 1, target);
    el.textContent = n;
    if (n >= target) clearInterval(iv);
  }, 80);
}

/* ──────────────────────────────────────────────
   RENDER LOGS
────────────────────────────────────────────── */
function getFiltered() {
  return logs.filter(log => {
    const mf = activeFilter === 'all' || log.tags.includes(activeFilter);
    const q  = searchQuery.toLowerCase();
    const ms = !q ||
      log.title.toLowerCase().includes(q) ||
      log.tags.some(t => t.toLowerCase().includes(q)) ||
      log.blocks.some(b => b.type === 'text' && b.content.toLowerCase().includes(q));
    return mf && ms;
  });
}

function renderLogs() {
  const grid = document.getElementById('logs-grid');
  const count = document.getElementById('log-count');
  if (!grid) return;

  const filtered = getFiltered();
  if (count) count.textContent = `${filtered.length} log${filtered.length !== 1 ? 's' : ''}`;

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No logs match that search.</div>';
    return;
  }

  filtered.forEach((log, i) => {
    const card = buildCard(log, i);
    grid.appendChild(card);
  });
}

function buildCard(log, idx) {
  const card = document.createElement('div');
  card.className = 'log-card';
  card.style.animationDelay = `${idx * 0.07}s`;

  const excerpt = getExcerpt(log);
  const tagsHtml = log.tags.map(t => `<span class="ctag">${t}</span>`).join('');

  card.innerHTML = `
    <div class="card-thumb">
      ${log.thumbnail
        ? `<img data-src="${log.thumbnail}" alt="${log.title}" />`
        : `<div class="card-thumb-placeholder">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1">
               <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
             </svg>
           </div>`
      }
      <div class="card-thumb-cover"></div>
      <div class="card-badge">${log.type}</div>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="card-date">${formatDate(log.date)}</span>
        <span class="card-type">◆</span>
      </div>
      <h3 class="card-title">${log.title}</h3>
      <p class="card-excerpt">${excerpt}</p>
      <div class="card-tags">${tagsHtml}</div>
    </div>
  `;

  const img = card.querySelector('img[data-src]');
  if (img) lazyLoad(img);

  card.addEventListener('click', () => openModal(log));
  return card;
}

function getExcerpt(log) {
  const b = log.blocks.find(b => b.type === 'text');
  if (!b) return '';
  const t = b.content.replace(/\n/g,' ');
  return t.length > 130 ? t.slice(0, 130) + '…' : t;
}

function formatDate(d) {
  if (!d) return '';
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
}

/* ──────────────────────────────────────────────
   LAZY LOAD
────────────────────────────────────────────── */
function lazyLoad(img) {
  const src = img.dataset.src;
  if (!src) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const tmp = new Image();
        tmp.onload = () => { img.src = src; img.classList.add('loaded'); };
        tmp.onerror = () => {
          const wrap = img.parentElement;
          if (wrap) wrap.innerHTML = `<div class="card-thumb-placeholder"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>`;
        };
        tmp.src = src;
        obs.unobserve(img);
      }
    });
  },{rootMargin:'250px'});
  obs.observe(img);
}

/* ──────────────────────────────────────────────
   MODAL
────────────────────────────────────────────── */
function openModal(log) {
  const modal   = document.getElementById('log-modal');
  const content = document.getElementById('modal-content');
  const shell   = document.getElementById('modal-shell');
  if (!modal || !content) return;

  const tagsHtml = log.tags.map(t => `<span class="mtag">${t}</span>`).join('');
  const blocksHtml = log.blocks.map(renderBlock).join('');

  content.innerHTML = `
    <div class="modal-hero-wrap">
      ${log.thumbnail
        ? `<img class="modal-hero" src="${log.thumbnail}" alt="${log.title}" loading="lazy"/>`
        : `<div class="modal-hero-wrap" style="aspect-ratio:16/8;background:var(--surface2);display:flex;align-items:center;justify-content:center;"><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>`
      }
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-title">${log.title}</div>
    </div>
    <div class="modal-meta-bar">
      <span class="modal-date-tag">${formatDate(log.date)}</span>
      <div class="modal-tags">${tagsHtml}</div>
    </div>
    <div class="modal-body">${blocksHtml}</div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Reading progress
  const progressBar = document.getElementById('modal-progress');
  shell.addEventListener('scroll', () => {
    if (!progressBar) return;
    const pct = (shell.scrollTop / (shell.scrollHeight - shell.clientHeight)) * 100;
    progressBar.style.width = Math.min(pct, 100) + '%';
  });
}

function closeModal() {
  const modal = document.getElementById('log-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function renderBlock(b) {
  if (b.type === 'text') {
    const paras = b.content.split('\n').filter(p=>p.trim()).map(p=>`<p>${p}</p>`).join('');
    return `<div class="cb cb-text">${paras}</div>`;
  }
  if (b.type === 'image') {
    return `<div class="cb cb-image">
      <img src="${b.url}" alt="${b.caption||''}" loading="lazy"/>
      ${b.caption?`<p class="cb-caption">${b.caption}</p>`:''}
    </div>`;
  }
  if (b.type === 'video') {
    const url = toEmbed(b.url);
    return `<div class="cb cb-video"><iframe src="${url}" allowfullscreen allow="autoplay;encrypted-media"></iframe></div>`;
  }
  return '';
}

function toEmbed(url) {
  if (!url) return '';
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  if (url.includes('embed')) return url;
  return url;
}

/* ──────────────────────────────────────────────
   FILTER
────────────────────────────────────────────── */
function initFilterBar() {
  document.querySelectorAll('.fpill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fpill').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.f;
      renderLogs();
    });
  });
}

/* ──────────────────────────────────────────────
   SEARCH
────────────────────────────────────────────── */
function initSearch() {
  const btn     = document.getElementById('search-btn');
  const drawer  = document.getElementById('search-drawer');
  const closeBtn= document.getElementById('search-close');
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  btn?.addEventListener('click', () => {
    drawer.classList.add('open');
    setTimeout(()=>input?.focus(),200);
  });

  closeBtn?.addEventListener('click', () => {
    drawer.classList.remove('open');
    searchQuery = '';
    if (input) input.value = '';
    renderLogs();
    if (results) results.innerHTML = '';
  });

  input?.addEventListener('input', () => {
    searchQuery = input.value;
    renderSearchResults(results);
    renderLogs();
  });
}

function renderSearchResults(container) {
  if (!container) return;
  container.innerHTML = '';
  if (!searchQuery.trim()) return;

  const filtered = getFiltered();
  if (filtered.length === 0) {
    container.innerHTML = '<p class="sr-none">No results found.</p>';
    return;
  }

  filtered.slice(0,5).forEach(log => {
    const item = document.createElement('div');
    item.className = 'sr-item';
    item.innerHTML = `
      ${log.thumbnail ? `<img class="sr-thumb" src="${log.thumbnail}" alt="" loading="lazy"/>` : ''}
      <div class="sr-info">
        <div class="sr-title">${log.title}</div>
        <div class="sr-tags">${log.tags.join(' · ')}</div>
      </div>
    `;
    item.addEventListener('click', () => {
      openModal(log);
      document.getElementById('search-drawer')?.classList.remove('open');
    });
    container.appendChild(item);
  });
}

/* ──────────────────────────────────────────────
   GRID TOGGLE (grid/list)
────────────────────────────────────────────── */
function initGridToggle() {
  const btn  = document.getElementById('grid-toggle');
  const grid = document.getElementById('logs-grid');
  if (!btn || !grid) return;

  btn.addEventListener('click', () => {
    isGridView = !isGridView;
    if (isGridView) {
      grid.style.display = 'grid';
      grid.style.gridTemplateColumns = '';
    } else {
      grid.style.display = 'grid';
      grid.style.gridTemplateColumns = '1fr';
      // Reset nth-child overrides
      document.querySelectorAll('.log-card').forEach(c => {
        c.style.gridColumn = 'span 1';
      });
    }
    renderLogs();
  });
}

/* ──────────────────────────────────────────────
   SCROLL REVEAL
────────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-up');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.delay || 0);
        setTimeout(() => e.target.classList.add('revealed'), delay);
        obs.unobserve(e.target);
      }
    });
  },{rootMargin:'-50px 0px',threshold:0.05});
  els.forEach(el => obs.observe(el));
}

/* ──────────────────────────────────────────────
   PARALLAX
────────────────────────────────────────────── */
function initParallax() {
  const homeBg = document.getElementById('home-bg');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        if (homeBg) homeBg.style.transform = `translateY(${sy * 0.3}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ──────────────────────────────────────────────
   NAV ACTIVE
────────────────────────────────────────────── */
function initNavActive() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nl');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nl[data-section="${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  },{threshold:0.4});
  sections.forEach(s => obs.observe(s));

  // Smooth scroll on nav click
  links.forEach(l => {
    l.addEventListener('click', e => {
      const sec = document.getElementById(l.dataset.section);
      if (sec) { e.preventDefault(); sec.scrollIntoView({behavior:'smooth'}); }
    });
  });

  // Home cta
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
    });
  });
}

/* ──────────────────────────────────────────────
   ADMIN — EDITOR
────────────────────────────────────────────── */
window.addBlock = function(type) {
  editorBlocks.push({ id: Date.now(), type, content:'', url:'', caption:'' });
  renderBlockEditor();
};

window.removeBlock = function(id) {
  editorBlocks = editorBlocks.filter(b => b.id !== id);
  renderBlockEditor();
};

window.updateBlock = function(id, field, val) {
  const b = editorBlocks.find(b => b.id === id);
  if (b) b[field] = val;
  updateAdminPreview();
};

function renderBlockEditor() {
  const list = document.getElementById('blocks-list');
  if (!list) return;
  list.innerHTML = '';

  editorBlocks.forEach(b => {
    const el = document.createElement('div');
    el.className = 'block-editor-item';

    let field = '';
    if (b.type === 'text') {
      field = `<textarea class="bei-textarea" placeholder="Write content…"
        onchange="updateBlock(${b.id},'content',this.value)"
        oninput="updateBlock(${b.id},'content',this.value)">${b.content}</textarea>`;
    } else if (b.type === 'image') {
      field = `
        <input class="adm-input" style="margin-bottom:0.4rem" placeholder="Image URL…"
          value="${b.url}" onchange="updateBlock(${b.id},'url',this.value)"/>
        <input class="adm-input" placeholder="Caption (optional)…"
          value="${b.caption}" onchange="updateBlock(${b.id},'caption',this.value)"/>`;
    } else if (b.type === 'video') {
      field = `<input class="adm-input" placeholder="YouTube or video URL…"
        value="${b.url}" onchange="updateBlock(${b.id},'url',this.value)"/>`;
    }

    el.innerHTML = `
      <div class="bei-hd">
        <span class="bei-type">${b.type}</span>
        <button class="bei-rm" onclick="removeBlock(${b.id})">✕</button>
      </div>
      ${field}
    `;
    list.appendChild(el);
  });
}

function updateAdminPreview() {
  const p = document.getElementById('adm-preview');
  if (!p || p.classList.contains('hidden')) return;
  p.innerHTML = editorBlocks.map(b => {
    if (b.type === 'text') return `<p style="margin-bottom:0.8rem;font-size:0.84rem;color:var(--white-d)">${b.content.replace(/\n/g,'<br/>')}</p>`;
    if (b.type === 'image') return b.url ? `<img src="${b.url}" style="width:100%;border-radius:6px;margin-bottom:0.5rem;" loading="lazy"/>` : '';
    if (b.type === 'video') return `<p style="font-size:0.75rem;color:var(--gold)">Video: ${b.url}</p>`;
    return '';
  }).join('');
}

function saveLog() {
  const title = document.getElementById('f-title')?.value.trim();
  const date  = document.getElementById('f-date')?.value;
  const tags  = document.getElementById('f-tags')?.value.split(',').map(t=>t.trim()).filter(Boolean);
  const thumb = document.getElementById('f-thumb')?.value.trim();
  const type  = document.getElementById('f-type')?.value;

  if (!title) { alert('Please enter a title.'); return; }

  const blocks = editorBlocks.map(b => {
    if (b.type==='text')  return {type:'text', content:b.content};
    if (b.type==='image') return {type:'image', url:b.url, caption:b.caption};
    if (b.type==='video') return {type:'video', url:b.url};
    return null;
  }).filter(Boolean);

  if (editingId) {
    const idx = logs.findIndex(l=>l.id===editingId);
    if (idx>-1) logs[idx] = {...logs[idx], title, date, tags, thumbnail:thumb, type, blocks};
    editingId = null;
  } else {
    logs.unshift({id:'log-'+Date.now(), title, date, tags, type, thumbnail:thumb, blocks});
  }

  saveLogs();
  renderLogs();
  updateHomeStat();
  resetAdminForm();
  renderManageList();
  alert('Log saved successfully.');
}

function resetAdminForm() {
  ['f-title','f-date','f-tags','f-thumb'].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.value='';
  });
  editorBlocks = [];
  editingId = null;
  renderBlockEditor();
}

function renderManageList() {
  const list = document.getElementById('manage-list');
  if (!list) return;
  list.innerHTML = '';

  if (!logs.length) {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--white-d);font-style:italic;font-size:0.88rem">No logs yet.</p>';
    return;
  }

  logs.forEach(log => {
    const el = document.createElement('div');
    el.className = 'mi';
    el.innerHTML = `
      <span class="mi-title">${log.title}</span>
      <span class="mi-date">${formatDate(log.date)}</span>
      <div class="mi-actions">
        <button class="mi-btn edit" onclick="editLog('${log.id}')">Edit</button>
        <button class="mi-btn del" onclick="deleteLog('${log.id}')">Delete</button>
      </div>
    `;
    list.appendChild(el);
  });
}

window.editLog = function(id) {
  const log = logs.find(l=>l.id===id);
  if (!log) return;
  editingId = id;
  document.getElementById('f-title').value = log.title||'';
  document.getElementById('f-date').value  = log.date||'';
  document.getElementById('f-tags').value  = (log.tags||[]).join(', ');
  document.getElementById('f-thumb').value = log.thumbnail||'';
  document.getElementById('f-type').value  = log.type||'text';
  editorBlocks = (log.blocks||[]).map((b,i)=>({...b,id:Date.now()+i}));
  renderBlockEditor();
  switchAdmTab('create');
};

window.deleteLog = function(id) {
  if (!confirm('Delete this log permanently?')) return;
  logs = logs.filter(l=>l.id!==id);
  saveLogs();
  renderLogs();
  updateHomeStat();
  renderManageList();
};

function switchAdmTab(name) {
  document.querySelectorAll('.adm-tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===name));
  document.querySelectorAll('.adm-panel').forEach(p=>{
    p.classList.toggle('active', p.id===`tab-${name}`);
    p.classList.toggle('hidden', p.id!==`tab-${name}`);
  });
}

/* ──────────────────────────────────────────────
   MAIN INIT
────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Cursor */
  initCursor();

  /* Rain + animation loop */
  const drawRain = initRain();

  let homeDrawFn = null;
  const loop = () => {
    if (drawRain) drawRain();
    if (homeDrawFn) homeDrawFn();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  /* Intro */
  runIntro();

  /* Enter button */
  document.getElementById('enter-btn')?.addEventListener('click', () => {
    enterSite();
    setTimeout(()=>{
      homeDrawFn = initHomeParticles();
    }, 1500);
  });

  /* Modal events */
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click', closeModal);

  /* Admin open/close */
  document.getElementById('admin-veil')?.addEventListener('click', closeAdmin);
  document.getElementById('admin-close')?.addEventListener('click', closeAdmin);

  document.getElementById('admin-login')?.addEventListener('click', () => {
    const pass = document.getElementById('admin-pass')?.value;
    if (pass === 'observer2024') {
      isAdminAuthed = true;
      document.getElementById('admin-auth')?.classList.add('hidden');
      document.getElementById('admin-dash')?.classList.remove('hidden');
      renderManageList();
    } else {
      const inp = document.getElementById('admin-pass');
      if (inp) {
        inp.style.borderColor = '#ff6b6b';
        inp.value = '';
        inp.placeholder = 'Incorrect passphrase';
        setTimeout(()=>{inp.style.borderColor='';inp.placeholder='Enter passphrase…';}, 2000);
      }
    }
  });

  document.getElementById('admin-pass')?.addEventListener('keydown', e=>{
    if (e.key==='Enter') document.getElementById('admin-login')?.click();
  });

  document.getElementById('save-btn')?.addEventListener('click', saveLog);

  /* Admin tabs */
  document.querySelectorAll('.adm-tab').forEach(t=>{
    t.addEventListener('click',()=>switchAdmTab(t.dataset.tab));
  });

  /* Admin preview */
  document.getElementById('preview-toggle')?.addEventListener('click',()=>{
    const p = document.getElementById('adm-preview');
    const isHid = p.classList.contains('hidden');
    p.classList.toggle('hidden',!isHid);
    document.getElementById('preview-toggle').textContent = isHid ? '▾ Live Preview' : '▸ Live Preview';
    if (isHid) updateAdminPreview();
  });

  /* Keyboard shortcuts */
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key==='O') {
      e.preventDefault();
      const panel = document.getElementById('admin');
      if (panel.classList.contains('hidden')) openAdmin();
      else closeAdmin();
    }
    if (e.key==='Escape') {
      closeModal();
      closeAdmin();
      document.getElementById('search-drawer')?.classList.remove('open');
    }
  });

});

function openAdmin() {
  document.getElementById('admin')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (isAdminAuthed) {
    document.getElementById('admin-auth')?.classList.add('hidden');
    document.getElementById('admin-dash')?.classList.remove('hidden');
    renderManageList();
  }
}
function closeAdmin() {
  document.getElementById('admin')?.classList.add('hidden');
  document.body.style.overflow = '';
}
