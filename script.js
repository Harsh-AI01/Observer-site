/* ═══════════════════════════════════════════════════
   OBSERVER v3 — script.js
   Full System: Persistence · Soundscape · Feedback
═══════════════════════════════════════════════════ */
'use strict';

/* ─────────────────────────────────────────
   IMAGES MAP
───────────────────────────────────────── */
const IMG = {
  intro:       'https://cdn.discordapp.com/attachments/1478315058621583385/1494965089709592659/From_KlickPin_CF_Dreamy_hidden_country_gems_today_made_to_spark_ideas_in_seconds_to_spark_your_next_plan_-_Pin-649855421273372559.jpg?ex=69e4863c&is=69e334bc&hm=19cbab02e71fe314b8f9c79386f6e06788ad1f0c2465f569194d48ec59c125a5&',
  home:        'https://cdn.discordapp.com/attachments/1478315058621583385/1494966132141199553/From_KlickPin_CF_Try_Simple_wedding_hair_ideas_that_are_packed_with_ideas_people_keep_saving_and_clicking_on_lately_for_ideas_worth_saving_right_now_-_Pin-35395547065515167.jpg?ex=69e48735&is=69e335b5&hm=5a8bcaa9167a5ed3bb7207e316f7c1a9c4128322869220131b41d516955d54c6&',
  l1t:         'https://cdn.discordapp.com/attachments/1478315058621583385/1494966338815524934/From_KlickPin_CF_Seasonal_Remote_Work_Tips_on_a_Budget_-_Pin-314126142774853663.jpg?ex=69e48766&is=69e335e6&hm=50448072415a6b13333f2590fccf5b353825c598f651af0eb830898bb98d1976&',
  l1c:         'https://cdn.discordapp.com/attachments/1478315058621583385/1494966794165813248/From_KlickPin_CF_Need_fresh_inspiration__Save_these_viral_beach_trip_ideas_everyone_will_ask_you_about_using_simple_ideas_you_can_actually_pull_off_and_make_every_-_Pin-172122017008669939.jpg?ex=69e487d2&is=69e33652&hm=3f3d16b37ad694c2ab6fbdb146ddc7d4c64661a03b15ada4769786ab4b7aeded&',
  l2t:         'https://cdn.discordapp.com/attachments/1478315058621583385/1494967086043365388/From_KlickPin_CF_Amazing_Comfort_Food_Recipes_on_a_Budget_-_Pin-473159504624239119.jpg?ex=69e48818&is=69e33698&hm=1a7d31d822c25519cd66de9d6de326289b62d9a78c36046750e1efb61098bb40&',
  l2c:         'https://cdn.discordapp.com/attachments/1478315058621583385/1494967413127647262/From_KlickPin_CF_12_Modern_garden_wedding_decor_ideas_that_feel_fresh_elevated_and_surprisingly_easy_to_recreate_at_home_for_anyone_who_wants_easy_but_elegant_-_Pin-622270873554086811_1.jpg?ex=69e48866&is=69e336e6&hm=dc4ce8b639bcbfa2c4393c42c620264e983188d3a5a0b4b874182ab2ecdd3d0c&',
  l3c:         'https://cdn.discordapp.com/attachments/1478315058621583385/1494967648918835210/From_KlickPin_CF_Pin_this_guide_to_viral_digital_planning_ideas_that_help_you_get_the_look_without_the_stress_with_beginner-friendly_tips_and_easy_details_and_-_Pin-569564684148209881.jpg?ex=69e4889e&is=69e3371e&hm=37859cd29280fe9b4b97e5906ac4bb4a48ef7332b4a0aa6bb315a5c6fbb4de26&',
  l4t:         'https://cdn.discordapp.com/attachments/1478315058621583385/1494967971980902461/From_KlickPin_CF_Road_Trip_Essentials_for_Spring_87606_-_Pin-375909900150801468.jpg?ex=69e488eb&is=69e3376b&hm=b728e107035eebfd2e1ce47932883494631cc01e1945d7095d6a5cab155e763f&',
  l4c:         'https://cdn.discordapp.com/attachments/1478315058621583385/1494968367260504094/From_KlickPin_CF_From_beginner_to_obsessed_Steal_these_cozy_family_routine_ideas_perfect_for_saving_sharing_and_recreating_later_using_simple_ideas_you_can_-_Pin-526710118943744108.jpg?ex=69e48949&is=69e337c9&hm=245486cdb567c4765660ee8aefdbcb515913c344cd0b4e00b4e807c567eeb138&',
  about:       'https://cdn.discordapp.com/attachments/1478315058621583385/1494968616049705010/From_KlickPin_CF_Copy_this_guide_to_viral_pet-friendly_home_ideas_everyone_will_ask_you_about_with_smart_steps_cute_details_and_cozy_vibes_and_turn_simple_-_Pin-22729173116308757.jpg?ex=69e48985&is=69e33805&hm=f1d7bc52143f9cd37389983e472ecc52c0b2140dcd333430fe687ca3e0575a62&',
  acc1:        'https://cdn.discordapp.com/attachments/1478315058621583385/1494968835843948664/From_KlickPin_CF_Everyday_leadership_reflections_with_ideas_people_actually_use_for_living_that_stay_calm_and_fair_-_Pin-7036943160154573.jpg?ex=69e489b9&is=69e33839&hm=615f79be1079676470e283fc77cc8de816f3ef4a8efe6377ff0c9b5aee1e3c14&',
  acc2:        'https://cdn.discordapp.com/attachments/1478315058621583385/1494969045710274672/From_KlickPin_CF_Pin_by_R_A_on_Quick_Saves___Animal_spirit_guides_Joker_drawings_169_wallpaper.jpg?ex=69e489eb&is=69e3386b&hm=58af1132080896212952e78b5bf1716c696d28732cecb919f7261c5ecc5cc356&',
  // Curated Unsplash direct CDN IDs for remaining logs
  l3t:  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=75&auto=format&fit=crop',
  l5t:  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=75&auto=format&fit=crop',
  l5c:  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=75&auto=format&fit=crop',
  l6t:  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=75&auto=format&fit=crop',
  l6c:  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=75&auto=format&fit=crop',
  l7t:  'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=75&auto=format&fit=crop',
  l7c:  'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=75&auto=format&fit=crop',
  mood1:'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&q=70&auto=format&fit=crop',
  mood2:'https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=600&q=70&auto=format&fit=crop',
  mood3:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=70&auto=format&fit=crop',
  mood4:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=70&auto=format&fit=crop',
  mood5:'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&q=70&auto=format&fit=crop',
  sound:'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1400&q=70&auto=format&fit=crop',
};

/* ─────────────────────────────────────────
   DEFAULT LOGS (7 entries)
───────────────────────────────────────── */
const DEFAULT_LOGS = [
  {
    id:'log-001', title:'The Weight of Distance',
    date:'2024-01-14', tags:['reflection','reality'],
    type:'text', thumbnail: IMG.l1t,
    moodImages:[IMG.l1c, IMG.mood1, IMG.mood2],
    soundtrack:{ title:'Solitude Waves', playlistLink:'' },
    content:[
      {type:'text', value:`Distance has a weight that most people don't calculate. Not the distance between places — the distance between who you were and who you're becoming. I felt it as a slow erosion. One morning I woke up and realised I had drifted so far from my own intentions that I couldn't hear them anymore.`},
      {type:'image', value: IMG.l1c},
      {type:'text', value:`The dangerous thing about distance is that it accumulates invisibly. Day by day, nothing feels wrong. But over weeks, over months, you look back and realise you are somewhere entirely unintended.\n\nI began documenting this. Not to mourn the gap — but to measure it. To understand its shape. To find the thread back.`}
    ]
  },
  {
    id:'log-002', title:'Loss of Control',
    date:'2024-02-28', tags:['discipline','conflict'],
    type:'text', thumbnail: IMG.l2t,
    moodImages:[IMG.l2c, IMG.mood3, ''],
    soundtrack:{ title:'Dark Ambient', playlistLink:'' },
    content:[
      {type:'text', value:`There's a particular shame in watching yourself lose control — not in a dramatic way, but in the slow, bureaucratic way. Missed commitments. Postponed decisions. The slow accumulation of undone things pressing against the walls of each day.`},
      {type:'image', value: IMG.l2c},
      {type:'text', value:`Control is not about rigidity. I understand that now. What I lost wasn't a grip on things — it was a relationship with intention. The moment you stop being deliberate, events start happening to you instead of because of you.\n\nReclaiming that isn't an act of force. It is an act of attention. And attention, I am learning, is the rarest resource I have.`}
    ]
  },
  {
    id:'log-003', title:'Blame and Silence',
    date:'2024-03-19', tags:['reality','growth'],
    type:'mixed', thumbnail: IMG.l3t,
    moodImages:[IMG.l3c, IMG.mood4, ''],
    soundtrack:{ title:'Into the Void', playlistLink:'' },
    content:[
      {type:'text', value:`Blame is a language people use when they don't have the vocabulary for complexity. I was told my work suffered because of decisions I had made outside of it. The accusation wasn't entirely wrong — but it wasn't entirely honest either.`},
      {type:'image', value: IMG.l3c},
      {type:'text', value:`Silence was my first response. Not because I had nothing to say — but because I understood that the conversation wasn't designed to reach a conclusion. It was designed to place a weight.\n\nI accepted the weight. Not out of defeat. Out of strategy. Arguing your case to someone who has already decided the verdict is not debate — it is theatre. I chose to stop performing and start correcting.\n\nThe system doesn't care who is right. It responds to what is done.`}
    ]
  },
  {
    id:'log-004', title:'Dream Collapse',
    date:'2024-04-22', tags:['reflection','growth'],
    type:'text', thumbnail: IMG.l4t,
    moodImages:[IMG.l4c, IMG.mood5, ''],
    soundtrack:{ title:'Fading Signal', playlistLink:'' },
    content:[
      {type:'text', value:`I had a timeline. It was specific — not vague hope, but a structured plan for where I would be and when. I had attached meaning to the dates. I had told myself that by a certain point, certain things would be real.`},
      {type:'image', value: IMG.l4c},
      {type:'text', value:`None of them were.\n\nDream Collapse is not the moment the dream dies. It is the quieter moment when you realise it was always more fragile than you admitted. The scaffolding was built from assumption, not from preparation.\n\nWhat I learned is that a plan without contingency is a fantasy with a deadline. The real work is building systems that survive contact with reality — not dreams that depend on everything going correctly.`}
    ]
  },
  {
    id:'log-005', title:'The Reset Point',
    date:'2024-06-01', tags:['growth','discipline'],
    type:'text', thumbnail: IMG.l5t,
    moodImages:[IMG.l5c, IMG.mood1, ''],
    soundtrack:{ title:'Empty Space', playlistLink:'' },
    content:[
      {type:'text', value:`There comes a moment — if you are paying attention — when you recognise that you need to stop rebuilding on top of a compromised foundation. Not everything can be repaired from the inside. Some things require a reset.`},
      {type:'image', value: IMG.l5c},
      {type:'text', value:`The Reset Point is not failure. It is clarity — a sudden lucidity about what has been obscured. I chose mine deliberately. I cleared the commitments I could no longer honour. I documented what I was walking away from and why.\n\nStarting over is only shameful if you learned nothing from what ended. I brought the lessons. I left the weight. The new structure is smaller — but it is built on ground that has been tested.`}
    ]
  },
  {
    id:'log-006', title:'Conflict of Paths',
    date:'2024-07-30', tags:['conflict','discipline'],
    type:'text', thumbnail: IMG.l6t,
    moodImages:[IMG.l6c, IMG.mood2, ''],
    soundtrack:{ title:'Between Two Worlds', playlistLink:'' },
    content:[
      {type:'text', value:`The conflict was not between two bad choices. That would have been easier. It was between two things I genuinely valued — two directions that both deserved time I didn't have in unlimited supply.`},
      {type:'image', value: IMG.l6c},
      {type:'text', value:`Formal obligation on one side. The craft on the other. Both pulling with the full weight of their legitimacy. And in the middle — a version of me trying to serve both without shortchanging either.\n\nThe resolution I found was not elegant. It was a negotiated truce — weeks where one priority led, and weeks where the other reclaimed ground. Not balance, exactly. More like alternating dominance, managed with awareness.\n\nI stopped looking for a permanent solution. The conflict is structural. What changes is how deliberately I navigate it.`}
    ]
  },
  {
    id:'log-007', title:'Awareness Phase',
    date:'2024-09-11', tags:['awareness','growth','reflection'],
    type:'text', thumbnail: IMG.l7t,
    moodImages:[IMG.l7c, IMG.mood3, IMG.mood5],
    soundtrack:{ title:'Signal Clear', playlistLink:'' },
    content:[
      {type:'text', value:`There is a phase — and not everyone reaches it — where the noise quiets enough that you can hear yourself think. Where the reactivity drops and something resembling clarity emerges. I call it the Awareness Phase, though it has no clean edges.`},
      {type:'image', value: IMG.l7c},
      {type:'text', value:`In this phase I began to see the patterns. Not just in my behaviour — but in how I had been interpreting events around me. The stories I had been telling myself. The filters through which I processed experience.\n\nSome of those filters were protecting me. Others were distorting everything I looked at.\n\nThe work of this phase is discernment — learning which is which. Keeping what serves clarity. Dismantling what serves only comfort.\n\nThis is not a destination. It is a mode of operation. One I intend to maintain.`}
    ]
  }
];

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
const STORE_KEY    = 'obs_v3_logs';
const FB_KEY       = 'obs_v3_feedback';
const DRAFT_KEY    = 'obs_v3_draft';
const PASS         = 'abhi2024';

let logs         = [];
let feedback     = [];
let activeFilter = 'all';
let searchQ      = '';
let authed       = false;
let editorBlocks = [];
let editId       = null;
let autosave     = false;
let autosaveTimer= null;

/* ─────────────────────────────────────────
   PERSISTENCE — Core Functions
───────────────────────────────────────── */
function saveLogs() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(logs)); } catch(e) {}
}

function loadLogs() {
  try {
    const s = localStorage.getItem(STORE_KEY);
    if (s) {
      const saved = JSON.parse(s);
      // Merge: add any default logs not yet in saved
      const savedIds = new Set(saved.map(l => l.id));
      DEFAULT_LOGS.forEach(dl => { if (!savedIds.has(dl.id)) saved.push(dl); });
      return saved;
    }
  } catch(e) {}
  return [...DEFAULT_LOGS];
}

function updateLogs(newLogs) {
  logs = newLogs;
  saveLogs();
  renderLogs();
  renderManage();
  renderSoundscape();
  updateHomeStat();
}

function saveFeedback() {
  try { localStorage.setItem(FB_KEY, JSON.stringify(feedback)); } catch(e) {}
}

function loadFeedback() {
  try {
    const s = localStorage.getItem(FB_KEY);
    return s ? JSON.parse(s) : [];
  } catch(e) { return []; }
}

function saveDraft() {
  const draft = {
    title: g('f-title')?.value,
    date:  g('f-date')?.value,
    tags:  g('f-tags')?.value,
    thumb: g('f-thumb')?.value,
    m1:    g('f-m1')?.value,
    m2:    g('f-m2')?.value,
    m3:    g('f-m3')?.value,
    stitle:g('f-stitle')?.value,
    slink: g('f-slink')?.value,
    blocks: editorBlocks
  };
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(draft)); } catch(e) {}
}

function loadDraft() {
  try {
    const s = localStorage.getItem(DRAFT_KEY);
    return s ? JSON.parse(s) : null;
  } catch(e) { return null; }
}

function clearDraft() {
  try { localStorage.removeItem(DRAFT_KEY); } catch(e) {}
}

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
const g = id => document.getElementById(id);
const qs = (sel, ctx=document) => ctx.querySelector(sel);

function fmtDate(d) {
  if (!d) return '';
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
}

function excerpt(log, len=130) {
  const b = log.content?.find(b => b.type === 'text');
  if (!b) return '';
  const t = b.value.replace(/\n/g,' ');
  return t.length > len ? t.slice(0, len) + '…' : t;
}

function toEmbed(url) {
  if (!url) return '';
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  return url;
}

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

function lazyImg(el) {
  const src = el.dataset.src;
  if (!src) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const tmp = new Image();
        tmp.onload = () => { el.src = src; el.classList.add('ld'); };
        tmp.src = src;
        obs.unobserve(el);
      }
    });
  }, { rootMargin:'300px' });
  obs.observe(el);
}

/* ─────────────────────────────────────────
   RAIN CANVAS
───────────────────────────────────────── */
function initRain() {
  const c = g('rain-cv');
  if (!c) return null;
  const ctx = c.getContext('2d');
  let drops = [];

  const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
  const mkDrop = () => ({ x: Math.random()*c.width, y: Math.random()*-c.height, len: Math.random()*50+12, spd: Math.random()*4+6, a: Math.random()*.2+.04, w: Math.random()*.65+.2 });
  const init = () => { drops = Array.from({length: Math.floor(c.width/7)}, () => { const d=mkDrop(); d.y=Math.random()*c.height; return d; }); };

  resize(); init();
  window.addEventListener('resize', () => { resize(); init(); });

  return () => {
    ctx.clearRect(0, 0, c.width, c.height);
    drops.forEach(d => {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.len*.1, d.y + d.len);
      ctx.strokeStyle = `rgba(160,190,255,${d.a})`;
      ctx.lineWidth = d.w;
      ctx.lineCap = 'round';
      ctx.stroke();
      d.y += d.spd;
      if (d.y - d.len > c.height) Object.assign(d, mkDrop());
    });
  };
}

/* ─────────────────────────────────────────
   HOME PARTICLES
───────────────────────────────────────── */
function initHomeParticles() {
  const c = g('home-cv');
  if (!c) return null;
  const ctx = c.getContext('2d');
  let pts = [];

  const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
  resize();
  pts = Array.from({length:55}, () => ({
    x: Math.random()*c.width, y: Math.random()*c.height,
    r: Math.random()*1.1+.3,
    vx:(Math.random()-.5)*.14, vy:(Math.random()-.5)*.11,
    a: Math.random()*.32+.08
  }));
  window.addEventListener('resize', resize);

  return () => {
    ctx.clearRect(0, 0, c.width, c.height);
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(201,169,110,${p.a})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>c.width) p.vx*=-1;
      if (p.y<0||p.y>c.height) p.vy*=-1;
    });
  };
}

/* ─────────────────────────────────────────
   CURSOR
───────────────────────────────────────── */
function initCursor() {
  const dot = g('cursor-dot'), ring = g('cursor-ring');
  if (!dot||!ring) return;
  let mx=0, my=0, rx=0, ry=0;

  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+'px'; dot.style.top=my+'px';
  });
  document.addEventListener('mouseover', e => {
    const over = e.target.closest('a,button,.lc,.fp,.sr-item,.mi,.sc') !== null;
    document.body.classList.toggle('ch', over);
  });

  (function animRing() {
    rx += (mx-rx)*.1; ry += (my-ry)*.1;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(animRing);
  })();
}

/* ─────────────────────────────────────────
   INTRO PARTICLES
───────────────────────────────────────── */
function spawnIntroParticles() {
  const w = g('intro-ptcl');
  if (!w) return;
  for (let i=0; i<22; i++) {
    const p = document.createElement('div');
    p.className = 'iptcl';
    const sz = Math.random()*3.5+.8;
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;bottom:${Math.random()*-10}%;animation-duration:${Math.random()*17+9}s;animation-delay:${Math.random()*-20}s`;
    w.appendChild(p);
  }
}

/* ─────────────────────────────────────────
   INTRO SEQUENCE
───────────────────────────────────────── */
function runIntro() {
  const bg = g('intro-bg');
  if (bg) {
    bg.style.backgroundImage = `url('${IMG.intro}')`;
    const t = new Image();
    t.onload = () => bg.classList.add('loaded');
    t.src = IMG.intro;
  }

  spawnIntroParticles();

  // Progress bar
  const fill = g('intro-fill');
  const total = 13000;
  let start = null;
  (function animProg(ts) {
    if (!start) start = ts;
    const pct = Math.min(((ts-start)/total)*100, 100);
    if (fill) fill.style.width = pct + '%';
    if (pct < 100) requestAnimationFrame(animProg);
  })(performance.now());

  // Lines schedule
  [
    ['itag', 300],['il1',900],['il2',2400],
    ['il3',4100],['il4',6100],['il5',8400],['il6',9700]
  ].forEach(([id,d]) => setTimeout(() => { const el=g(id); el&&el.classList.add('v'); }, d));

  setTimeout(() => { const el=g('ienter'); el&&el.classList.add('v'); }, 11200);
}

/* ─────────────────────────────────────────
   ENTER SITE
───────────────────────────────────────── */
function enterSite() {
  const intro = g('intro'), site = g('site');
  intro.style.transition = 'opacity 1.3s ease';
  intro.style.opacity = '0';
  intro.style.pointerEvents = 'none';
  setTimeout(() => {
    intro.classList.add('hidden');
    site.classList.remove('site-off');
    requestAnimationFrame(() => setTimeout(() => site.classList.add('site-on'), 40));
    bootSite();
  }, 1300);
}

/* ─────────────────────────────────────────
   BOOT SITE
───────────────────────────────────────── */
function bootSite() {
  logs     = loadLogs();
  feedback = loadFeedback();

  setStaticImages();
  renderLogs();
  renderSoundscape();
  renderFeedback();
  updateHomeStat();
  initScrollReveal();
  initNavActive();
  initParallax();
  initSearch();
  initFilters();
}

/* ─────────────────────────────────────────
   STATIC IMAGES
───────────────────────────────────────── */
function setStaticImages() {
  const setBG = (id, url) => { const el=g(id); if(el) el.style.backgroundImage=`url('${url}')`; };
  setBG('home-bg',   IMG.home);
  setBG('about-bg',  IMG.about);
  setBG('sound-bg',  IMG.sound);
  setBG('ai1',       IMG.acc1);
  setBG('ai2',       IMG.acc2);
}

/* ─────────────────────────────────────────
   HOME STAT
───────────────────────────────────────── */
function updateHomeStat() {
  const el = g('hs-count');
  if (!el) return;
  const target = logs.length;
  let n = 0;
  const iv = setInterval(() => {
    n = Math.min(n+1, target);
    el.textContent = n;
    if (n>=target) clearInterval(iv);
  }, 70);
}

/* ─────────────────────────────────────────
   FILTER LOGS
───────────────────────────────────────── */
function getFiltered() {
  return logs.filter(log => {
    const mf = activeFilter==='all' || log.tags?.includes(activeFilter);
    const q  = searchQ.toLowerCase();
    const ms = !q || log.title.toLowerCase().includes(q) ||
      log.tags?.some(t => t.toLowerCase().includes(q)) ||
      log.content?.some(b => b.type==='text' && b.value.toLowerCase().includes(q));
    return mf && ms;
  });
}

/* ─────────────────────────────────────────
   RENDER LOGS
───────────────────────────────────────── */
function renderLogs() {
  const grid  = g('logs-grid');
  const count = g('log-count');
  if (!grid) return;

  const filtered = getFiltered();
  if (count) count.textContent = `${filtered.length} log${filtered.length!==1?'s':''}`;

  // Efficient DOM update: clear and rebuild only if needed
  grid.innerHTML = '';

  if (!filtered.length) {
    grid.innerHTML = '<div class="no-res">No logs match that search.</div>';
    return;
  }

  const frag = document.createDocumentFragment();
  filtered.forEach((log, i) => {
    frag.appendChild(buildCard(log, i));
  });
  grid.appendChild(frag);
}

function buildCard(log, idx) {
  const card = document.createElement('div');
  card.className = 'lc';
  card.style.animationDelay = `${idx * .065}s`;

  const tagsHtml = (log.tags||[]).map(t=>`<span class="ltag">${t}</span>`).join('');
  const ex = excerpt(log);

  card.innerHTML = `
    <div class="lc-thumb">
      ${log.thumbnail
        ? `<img data-src="${log.thumbnail}" alt="${log.title}"/>`
        : `<div class="lc-thumb-ph"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>`
      }
      <div class="lc-thumb-ov"></div>
      <div class="lc-badge">${log.type||'text'}</div>
    </div>
    <div class="lc-body">
      <div class="lc-meta">
        <span class="lc-date">${fmtDate(log.date)}</span>
        <span class="lc-type">◆</span>
      </div>
      <h3 class="lc-title">${log.title}</h3>
      <p class="lc-ex">${ex}</p>
      <div class="lc-tags">${tagsHtml}</div>
    </div>`;

  const img = card.querySelector('img[data-src]');
  if (img) lazyImg(img);
  card.addEventListener('click', () => openModal(log));
  return card;
}

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
function openModal(log) {
  const modal = g('log-modal'), body = g('modal-body'), shell = g('modal-shell');
  if (!modal||!body) return;

  const tagsHtml   = (log.tags||[]).map(t=>`<span class="mmtag">${t}</span>`).join('');
  const moodImgs   = (log.moodImages||[]).filter(Boolean);
  const moodHtml   = moodImgs.length
    ? `<div class="mood-strip">${moodImgs.map(u=>`<div class="mood-img"><img src="${u}" loading="lazy" alt=""/></div>`).join('')}</div>` : '';

  const st = log.soundtrack;
  const soundHtml = st?.title
    ? `<div class="modal-sound" id="ms-${log.id}">
        <span class="ms-icon">♫</span>
        <div class="ms-info">
          <div class="ms-title">${st.title}</div>
          <div class="ms-sub">Soundtrack</div>
        </div>
        ${st.playlistLink ? `<button class="ms-btn" onclick="toggleModalSound('${log.id}','${encodeURIComponent(st.playlistLink)}')">Play</button>` : ''}
       </div>
       <div class="ms-embed hidden" id="mse-${log.id}"></div>` : '';

  const contentHtml = (log.content||[]).map(renderBlock).join('');

  body.innerHTML = `
    <div class="mhero-wrap">
      ${log.thumbnail ? `<img class="mhero" src="${log.thumbnail}" alt="${log.title}" loading="lazy"/>` : `<div style="aspect-ratio:16/8;background:var(--surf2)"></div>`}
      <div class="mhero-ov"></div>
      <div class="mhero-title">${log.title}</div>
    </div>
    <div class="mmeta">
      <span class="mmeta-date">${fmtDate(log.date)}</span>
      <div class="mmeta-tags">${tagsHtml}</div>
    </div>
    <div class="mbody">
      ${moodHtml}
      ${soundHtml}
      ${contentHtml}
    </div>`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  shell.scrollTop = 0;

  // Reading progress
  const prog = g('modal-prog');
  const onScroll = () => {
    if (prog) prog.style.width = Math.min((shell.scrollTop/(shell.scrollHeight-shell.clientHeight))*100, 100)+'%';
  };
  shell.addEventListener('scroll', onScroll);
  modal._removeScroll = () => shell.removeEventListener('scroll', onScroll);
}

window.toggleModalSound = function(logId, encodedLink) {
  const link = decodeURIComponent(encodedLink);
  const embed = g(`mse-${logId}`);
  const btn = qs(`#ms-${logId} .ms-btn`);
  if (!embed) return;
  const isOpen = embed.classList.contains('open');
  if (isOpen) {
    embed.classList.remove('open');
    embed.innerHTML = '';
    if (btn) btn.textContent = 'Play';
  } else {
    embed.innerHTML = `<iframe src="${link}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    embed.classList.add('open');
    if (btn) btn.textContent = 'Close';
  }
};

function closeModal() {
  const modal = g('log-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  if (modal._removeScroll) { modal._removeScroll(); delete modal._removeScroll; }
}

function renderBlock(b) {
  if (b.type==='text') {
    const paras = b.value.split('\n').filter(p=>p.trim()).map(p=>`<p>${p}</p>`).join('');
    return `<div class="cb cb-text">${paras}</div>`;
  }
  if (b.type==='image') return `<div class="cb cb-image"><img src="${b.value}" loading="lazy" alt=""/></div>`;
  if (b.type==='video') {
    const embed = toEmbed(b.value);
    return `<div class="cb cb-video"><iframe src="${embed}" allowfullscreen allow="autoplay;encrypted-media"></iframe></div>`;
  }
  return '';
}

/* ─────────────────────────────────────────
   SOUNDSCAPE SECTION
───────────────────────────────────────── */
function renderSoundscape() {
  const grid = g('sound-grid');
  if (!grid) return;

  const withSound = logs.filter(l => l.soundtrack?.title);
  if (!withSound.length) {
    grid.innerHTML = '<p style="color:var(--wd);font-style:italic;font-size:.9rem">No soundscapes added yet. Edit logs to add soundtracks.</p>';
    return;
  }

  grid.innerHTML = '';
  withSound.forEach(log => {
    const sc = document.createElement('div');
    sc.className = 'sc';
    sc.dataset.id = log.id;
    sc.innerHTML = `
      <div class="sc-head">
        <button class="sc-play" onclick="toggleSound('${log.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
        </button>
        <div class="sc-info">
          <div class="sc-title">${log.soundtrack.title}</div>
          <div class="sc-log">${log.title}</div>
        </div>
      </div>
      <div class="sc-wave">${Array.from({length:8},(_,i)=>`<span style="height:${4+Math.random()*10}px"></span>`).join('')}</div>
      ${log.soundtrack.playlistLink
        ? `<div class="sc-embed" id="sce-${log.id}"><iframe src="${log.soundtrack.playlistLink}" allow="autoplay; clipboard-write; encrypted-media; fullscreen" loading="lazy"></iframe></div>`
        : `<div style="padding:0 1.3rem .8rem;font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--wf)">No playlist linked</div>`
      }`;
    grid.appendChild(sc);
  });
}

let activeSound = null;
window.toggleSound = function(id) {
  const card = document.querySelector(`.sc[data-id="${id}"]`);
  const embed = g(`sce-${id}`);
  if (!card) return;

  if (activeSound && activeSound !== id) {
    const prev = document.querySelector(`.sc[data-id="${activeSound}"]`);
    const prevEmbed = g(`sce-${activeSound}`);
    if (prev) prev.classList.remove('playing');
    if (prevEmbed) prevEmbed.classList.remove('open');
  }

  const isPlaying = card.classList.contains('playing');
  card.classList.toggle('playing', !isPlaying);
  if (embed) embed.classList.toggle('open', !isPlaying);
  activeSound = isPlaying ? null : id;
};

/* ─────────────────────────────────────────
   FEEDBACK
───────────────────────────────────────── */
function renderFeedback() {
  const list = g('fb-list'), empty = g('fb-empty');
  if (!list) return;

  // Remove old items but keep empty placeholder
  list.querySelectorAll('.fb-item').forEach(el => el.remove());

  if (!feedback.length) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  // Show newest first
  [...feedback].reverse().forEach(f => {
    const el = document.createElement('div');
    el.className = 'fb-item';
    el.innerHTML = `
      <div class="fbi-top">
        <span class="fbi-name">${f.name || 'Anonymous'}</span>
        <span class="fbi-time">${f.time}</span>
      </div>
      <p class="fbi-msg">${f.message}</p>`;
    list.appendChild(el);
  });
}

function submitFeedback() {
  const name = g('fb-name')?.value.trim() || 'Anonymous';
  const msg  = g('fb-msg')?.value.trim();
  if (!msg) { alert('Please write a message.'); return; }

  const entry = {
    name,
    message: msg,
    time: new Date().toLocaleString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})
  };
  feedback.push(entry);
  saveFeedback();
  renderFeedback();
  if (g('fb-name')) g('fb-name').value = '';
  if (g('fb-msg'))  g('fb-msg').value = '';
}

/* ─────────────────────────────────────────
   SEARCH
───────────────────────────────────────── */
function initSearch() {
  const btn   = g('search-btn');
  const bar   = g('search-bar');
  const input = g('search-input');
  const close = g('search-x');

  btn?.addEventListener('click', () => {
    bar.classList.add('open');
    setTimeout(()=>input?.focus(), 200);
  });
  close?.addEventListener('click', () => {
    bar.classList.remove('open');
    searchQ = ''; if (input) input.value = ''; renderLogs();
  });
  input?.addEventListener('input', debounce(() => {
    searchQ = input.value;
    renderLogs();
    if (searchQ) g('logs')?.scrollIntoView({behavior:'smooth'});
  }, 250));
}

/* ─────────────────────────────────────────
   FILTERS
───────────────────────────────────────── */
function initFilters() {
  document.querySelectorAll('.fp').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fp').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.f;
      renderLogs();
    });
  });
}

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const d = parseInt(e.target.dataset.d||0);
        setTimeout(() => e.target.classList.add('revealed'), d);
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin:'-50px 0px', threshold:.05 });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));
}

/* ─────────────────────────────────────────
   PARALLAX
───────────────────────────────────────── */
function initParallax() {
  const homeBg = g('home-bg');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (homeBg) homeBg.style.transform = `translateY(${window.scrollY*.28}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ─────────────────────────────────────────
   NAV ACTIVE
───────────────────────────────────────── */
function initNavActive() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nv');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l=>l.classList.remove('active'));
        const a = document.querySelector(`.nv[data-s="${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold:.35 });
  sections.forEach(s=>obs.observe(s));

  links.forEach(l => {
    l.addEventListener('click', e => {
      const sec = document.getElementById(l.dataset.s);
      if (sec) { e.preventDefault(); sec.scrollIntoView({behavior:'smooth'}); }
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
    });
  });
}

/* ─────────────────────────────────────────
   ADMIN — BLOCK EDITOR
───────────────────────────────────────── */
window.addBlock = function(type) {
  editorBlocks.push({ id: Date.now(), type, value:'' });
  renderBlocks();
  if (autosave) scheduleDraftSave();
};
window.removeBlock = function(id) {
  editorBlocks = editorBlocks.filter(b=>b.id!==id);
  renderBlocks();
  if (autosave) scheduleDraftSave();
};
window.updateBlockVal = function(id, val) {
  const b = editorBlocks.find(b=>b.id===id);
  if (b) b.value = val;
  updateAdmPreview();
  if (autosave) scheduleDraftSave();
};

function renderBlocks() {
  const list = g('blocks-list');
  if (!list) return;
  list.innerHTML = '';
  editorBlocks.forEach(b => {
    const el = document.createElement('div');
    el.className = 'bei';
    let field = '';
    if (b.type==='text') {
      field = `<textarea class="bei-ta" placeholder="Write content…" onchange="updateBlockVal(${b.id},this.value)" oninput="updateBlockVal(${b.id},this.value)">${b.value}</textarea>`;
    } else {
      field = `<input class="ai" placeholder="${b.type==='image'?'Image URL…':'Video URL…'}" value="${b.value}" onchange="updateBlockVal(${b.id},this.value)"/>`;
    }
    el.innerHTML = `<div class="bei-hd"><span class="bei-type">${b.type}</span><button class="bei-rm" onclick="removeBlock(${b.id})">✕</button></div>${field}`;
    list.appendChild(el);
  });
}

function updateAdmPreview() {
  const p = g('adm-preview');
  if (!p||p.classList.contains('hidden')) return;
  p.innerHTML = editorBlocks.map(b => {
    if (b.type==='text') return `<p style="margin-bottom:.6rem;font-size:.83rem;color:var(--wd)">${b.value.replace(/\n/g,'<br/>')}</p>`;
    if (b.type==='image') return b.value ? `<img src="${b.value}" style="width:100%;border-radius:6px;margin-bottom:.4rem" loading="lazy"/>` : '';
    return `<p style="font-size:.72rem;color:var(--gold)">Video: ${b.value}</p>`;
  }).join('');
}

function scheduleDraftSave() {
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(saveDraft, 1200);
}

window.previewThumb = function(url) {
  const p = g('thumb-preview');
  if (!p) return;
  if (!url) { p.classList.add('hidden'); p.innerHTML=''; return; }
  p.classList.remove('hidden');
  p.innerHTML = `<img src="${url}" alt="preview" onerror="this.parentElement.classList.add('hidden')" loading="lazy"/>`;
};

/* ─────────────────────────────────────────
   SAVE LOG
───────────────────────────────────────── */
function saveLog() {
  const title  = g('f-title')?.value.trim();
  const date   = g('f-date')?.value;
  const tagStr = g('f-tags')?.value || '';
  const thumb  = g('f-thumb')?.value.trim();
  const type   = g('f-type')?.value || 'text';
  const m1     = g('f-m1')?.value.trim();
  const m2     = g('f-m2')?.value.trim();
  const m3     = g('f-m3')?.value.trim();
  const stitle = g('f-stitle')?.value.trim();
  const slink  = g('f-slink')?.value.trim();

  if (!title) { alert('Please enter a title.'); return; }

  const tags = tagStr.split(',').map(t=>t.trim()).filter(Boolean);
  const content = editorBlocks.map(b => ({ type: b.type, value: b.value }));
  const moodImages = [m1||'', m2||'', m3||''];
  const soundtrack = { title: stitle||'', playlistLink: slink||'' };

  if (editId) {
    const idx = logs.findIndex(l=>l.id===editId);
    if (idx>-1) logs[idx] = {...logs[idx], title, date, tags, thumbnail:thumb, type, moodImages, soundtrack, content};
    editId = null;
  } else {
    logs.unshift({ id:'log-'+Date.now(), title, date, tags, type, thumbnail:thumb, moodImages, soundtrack, content });
  }

  saveLogs();
  renderLogs();
  renderManage();
  renderSoundscape();
  updateHomeStat();
  clearDraft();
  resetForm();
  alert('Log saved successfully.');
}

function resetForm() {
  ['f-title','f-date','f-tags','f-thumb','f-m1','f-m2','f-m3','f-stitle','f-slink'].forEach(id => {
    const el=g(id); if(el) el.value='';
  });
  const tp=g('thumb-preview'); if(tp){tp.classList.add('hidden');tp.innerHTML='';}
  editorBlocks = []; editId = null;
  renderBlocks();
}

/* ─────────────────────────────────────────
   MANAGE LIST
───────────────────────────────────────── */
function renderManage() {
  const list = g('manage-list');
  if (!list) return;
  list.innerHTML = '';

  if (!logs.length) {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--wd);font-style:italic;font-size:.88rem">No logs yet.</p>';
    return;
  }

  logs.forEach(log => {
    const el = document.createElement('div');
    el.className = 'mi';
    el.innerHTML = `
      <span class="mi-title">${log.title}</span>
      <span class="mi-date">${fmtDate(log.date)}</span>
      <div class="mi-acts">
        <button class="mib edit" onclick="editLog('${log.id}')">Edit</button>
        <button class="mib del" onclick="deleteLog('${log.id}')">Delete</button>
      </div>`;
    list.appendChild(el);
  });
}

window.editLog = function(id) {
  const log = logs.find(l=>l.id===id);
  if (!log) return;
  editId = id;
  const sv = (eid, val) => { const el=g(eid); if(el) el.value=val||''; };
  sv('f-title', log.title);
  sv('f-date',  log.date);
  sv('f-tags',  (log.tags||[]).join(', '));
  sv('f-thumb', log.thumbnail);
  sv('f-type',  log.type);
  const mi = log.moodImages||[];
  sv('f-m1', mi[0]); sv('f-m2', mi[1]); sv('f-m3', mi[2]);
  sv('f-stitle', log.soundtrack?.title);
  sv('f-slink',  log.soundtrack?.playlistLink);
  editorBlocks = (log.content||[]).map((b,i)=>({...b, id:Date.now()+i}));
  renderBlocks();
  if (log.thumbnail) window.previewThumb(log.thumbnail);
  switchTab('create');
};

window.deleteLog = function(id) {
  if (!confirm('Delete this log permanently?')) return;
  updateLogs(logs.filter(l=>l.id!==id));
};

/* ─────────────────────────────────────────
   ADMIN TABS
───────────────────────────────────────── */
function switchTab(name) {
  document.querySelectorAll('.at').forEach(t => t.classList.toggle('active', t.dataset.t===name));
  document.querySelectorAll('.ap').forEach(p => {
    p.classList.toggle('active', p.id===`ap-${name}`);
    p.classList.toggle('hidden', p.id!==`ap-${name}`);
  });
  if (name==='manage') renderManage();
}

/* ─────────────────────────────────────────
   ADMIN OPEN / CLOSE
───────────────────────────────────────── */
function openAdmin() {
  g('admin')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (authed) {
    g('adm-auth')?.classList.add('hidden');
    g('adm-dash')?.classList.remove('hidden');
    renderManage();
  }
}
function closeAdmin() {
  g('admin')?.classList.add('hidden');
  document.body.style.overflow = '';
}

/* ─────────────────────────────────────────
   MAIN INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();

  // Rain + animation loop
  const drawRain = initRain();
  let drawHome = null;

  (function loop() {
    drawRain?.();
    drawHome?.();
    requestAnimationFrame(loop);
  })();

  runIntro();

  // Enter
  g('enter-btn')?.addEventListener('click', () => {
    enterSite();
    setTimeout(() => { drawHome = initHomeParticles(); }, 1500);
  });

  // Modal
  g('modal-close')?.addEventListener('click', closeModal);
  g('modal-ov')?.addEventListener('click', closeModal);

  // Admin
  g('adm-veil')?.addEventListener('click', closeAdmin);
  g('adm-close')?.addEventListener('click', closeAdmin);

  g('adm-login')?.addEventListener('click', () => {
    const p = g('adm-pass')?.value;
    if (p === PASS) {
      authed = true;
      g('adm-auth')?.classList.add('hidden');
      g('adm-dash')?.classList.remove('hidden');
      renderManage();
      // Load draft if any
      const d = loadDraft();
      if (d && !editId) {
        const sv = (eid, val) => { const el=g(eid); if(el) el.value=val||''; };
        sv('f-title',d.title); sv('f-date',d.date); sv('f-tags',d.tags);
        sv('f-thumb',d.thumb); sv('f-m1',d.m1); sv('f-m2',d.m2); sv('f-m3',d.m3);
        sv('f-stitle',d.stitle); sv('f-slink',d.slink);
        if (d.blocks?.length) { editorBlocks=d.blocks.map((b,i)=>({...b,id:Date.now()+i})); renderBlocks(); }
        if (d.thumb) window.previewThumb(d.thumb);
      }
    } else {
      const inp = g('adm-pass');
      if (inp) {
        inp.style.borderColor='#ff6b6b'; inp.value=''; inp.placeholder='Incorrect passphrase';
        setTimeout(()=>{inp.style.borderColor='';inp.placeholder='Passphrase…';},2200);
      }
    }
  });
  g('adm-pass')?.addEventListener('keydown', e => { if(e.key==='Enter') g('adm-login')?.click(); });

  // Save
  g('save-btn')?.addEventListener('click', saveLog);

  // Autosave checkbox
  g('autosave-chk')?.addEventListener('change', e => { autosave=e.target.checked; });

  // Tabs
  document.querySelectorAll('.at').forEach(t => t.addEventListener('click', ()=>switchTab(t.dataset.t)));

  // Preview
  g('prev-tog')?.addEventListener('click', () => {
    const p = g('adm-preview');
    const hidden = p.classList.contains('hidden');
    p.classList.toggle('hidden', !hidden);
    g('prev-tog').textContent = hidden ? '▾ Live Preview' : '▸ Live Preview';
    if (hidden) updateAdmPreview();
  });

  // Settings
  g('reset-logs')?.addEventListener('click', () => {
    if (!confirm('Reset all logs to defaults? This cannot be undone.')) return;
    try { localStorage.removeItem(STORE_KEY); } catch(e) {}
    updateLogs([...DEFAULT_LOGS]);
    alert('Logs reset to defaults.');
  });
  g('reset-feedback')?.addEventListener('click', () => {
    if (!confirm('Clear all feedback?')) return;
    feedback = [];
    saveFeedback();
    renderFeedback();
  });
  g('export-logs')?.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(logs, null, 2)], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'observer-logs.json';
    a.click();
  });

  // Feedback
  g('fb-submit')?.addEventListener('click', submitFeedback);
  g('fb-msg')?.addEventListener('keydown', e => { if(e.ctrlKey&&e.key==='Enter') submitFeedback(); });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key==='O') {
      e.preventDefault();
      g('admin')?.classList.contains('hidden') ? openAdmin() : closeAdmin();
    }
    if (e.key==='Escape') {
      closeModal();
      closeAdmin();
      g('search-bar')?.classList.remove('open');
    }
  });
});
