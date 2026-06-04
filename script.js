// TEST: Sichtbarkeit und Debug
console.log('DEBUG: script.js geladen');
['features','projects-teaser','about','faq','cta-band'].forEach(id => {
  const el = document.querySelector('.'+id);
  if (el) {
    const style = window.getComputedStyle(el);
    console.log(`DEBUG: .${id} display=${style.display}, opacity=${style.opacity}`);
  } else {
    console.log(`DEBUG: .${id} nicht gefunden!`);
  }
});

// Jahr im Footer
// News-&-Blog: Modal/Popup für News-Details
const newsDetails = [
  '<h2>Ladeinfrastruktur im Unternehmensbetrieb</h2><p><strong>Praxisfokus:</strong> Skalierbare Systeme statt Einzelloesungen.</p><p>DRIVEPLAN zeigt, wie Ladeinfrastruktur technisch belastbar und wirtschaftlich sinnvoll in bestehende Betriebsprozesse integriert wird.</p>',
  '<h2>Energiemanagement: Trends 2026</h2><p><strong>Ausblick:</strong> Daten, Steuerung und Flexibilitaet.</p><p>Unternehmen profitieren von integrierten Energiesystemen mit Monitoring, Lastprognose und intelligenter Betriebsfuehrung.</p>',
  '<h2>Fördermöglichkeiten 2026</h2><p><strong>Chancen:</strong> Investitionen strategisch absichern.</p><p>Mit der richtigen Strukturierung lassen sich Förderprogramme effizient für Infrastruktur-, Energie- und Transformationsprojekte nutzen.</p>',
  '<h2>Mobilitaetskonzepte im Quartier</h2><p>Kommunale und betriebliche Mobilitaet verlangt integrierte Planung von Verkehr, Energie und digitalem Betrieb.</p>',
  '<h2>Sektorkopplung in der Praxis</h2><p>Strom, Waerme und Mobilitaet werden zu einem steuerbaren Gesamtsystem verbunden.</p>',
  '<h2>Ladeinfrastruktur als Netzelement</h2><p>Mit Lastmanagement, Speicher und PV wird Ladeinfrastruktur vom Verbraucher zum aktiven Systembaustein.</p>',
  '<h2>E-LKW Flotten strategisch skalieren</h2><p>Flottenelektrifizierung gelingt durch abgestimmte Planung von Standortenergie, Ladefenstern und Tourenlogik.</p>'
];

function openNewsModal(idx) {
  const modal = document.getElementById('news-modal');
  const body = document.getElementById('news-modal-body');
  if (!modal || !body) return;
  body.innerHTML = newsDetails[idx] || '<h2>Beitrag</h2><p>Inhalte werden aktualisiert.</p>';
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  setTimeout(() => modal.classList.add('active'), 10);
}

function closeNewsModal() {
  const modal = document.getElementById('news-modal');
  if (!modal) return;
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 220);
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('news-modal');
  if (!modal) return;
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeNewsModal();
  });
  document.addEventListener('keydown', (event) => {
    if (modal.style.display === 'flex' && (event.key === 'Escape' || event.key === 'Esc')) {
      closeNewsModal();
    }
  });
});

document.getElementById('y') && (document.getElementById('y').textContent = new Date().getFullYear());

function initFooterContactHints() {
  const footerContactLinks = document.querySelectorAll('.site-footer .footer-quick-link[href^="mailto:"], .site-footer .footer-quick-link[href^="tel:"]');
  footerContactLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    const isPhoneLink = href.startsWith('tel:');
    const copyValue = isPhoneLink ? '03342 / 6998894' : href.replace(/^mailto:/, '');
    link.dataset.copy = copyValue;
    link.setAttribute('aria-label', `${link.textContent.trim()} ${copyValue}`);
  });
}

initFooterContactHints();

function initProjectModal() {
  const cards = document.querySelectorAll('.project-detail[data-project]');
  const modal = document.getElementById('project-modal');
  if (!cards.length || !modal) return;

  const modalHero = document.getElementById('project-modal-hero');
  const modalKicker = document.getElementById('project-modal-kicker');
  const modalTitle = document.getElementById('project-modal-title');
  const modalSummary = document.getElementById('project-modal-summary');
  const modalDelivery = document.getElementById('project-modal-delivery');
  const modalApproach = document.getElementById('project-modal-approach');
  const modalValue = document.getElementById('project-modal-value');
  const modalTrust = document.getElementById('project-modal-trust');
  const modalKpis = document.getElementById('project-modal-kpis');
  const modalVisuals = document.getElementById('project-modal-visuals');
  const modalPhases = document.getElementById('project-modal-phases');
  const modalOutcomes = document.getElementById('project-modal-outcomes');
  const closeButtons = modal.querySelectorAll('[data-project-close]');

  const projectData = {
    ladehub: {
      tone: 'teal',
      kicker: 'Schnelllade-Architektur',
      title: 'Ladehub: Skalierbarer Innenstadt-Standort',
      summary: 'Das Projekt zeigt, wie ein urbaner Ladehub technisch stabil und wirtschaftlich leistungsfähig betrieben werden kann.',
      delivery: 'Umgesetzt wurden Standortanalyse, Anschlussstrategie, Verkehrslogik, Betreiberlayout und ein stufenfähiger Ausbauplan für Last- und Nutzerwachstum.',
      approach: 'Die technische Auslegung kombiniert Lastmanagement, Priorisierungslogik und netzdienliche Leistungssteuerung für hohe Verfügbarkeit bei begrenzter Netzkapazität.',
      value: 'Der Betreiber erhält einen robusten Betrieb mit geringeren Leistungskosten, klaren Ausbaupfaden und kurzer Time-to-Market für neue Ladepunkte.',
      background: 'assets/eCharge.PNG',
      metrics: [
        { value: '12', label: 'Ladepunkte initial' },
        { value: '500 kW', label: 'Ausgelegte Spitzenleistung' },
        { value: '-18%', label: 'Reduktion Netzspitzen' }
      ],
      trust: ['Technische Machbarkeitsprüfung', 'Wirtschaftlicher Ausbaupfad', 'Betriebs- und Risikokonzept'],
      visuals: [
        { type: 'analysis', title: 'Standortanalyse', text: 'Anschluss, Verkehr und Lastprofile wurden auf Ausbaufähigkeit abgestimmt.' },
        { type: 'integration', title: 'Systemintegration', text: 'Leistungssteuerung und Priorisierung sichern stabile Ladezeiten.' },
        { type: 'impact', title: 'Betriebswirkung', text: 'Netzspitzen sinken, Betriebskosten bleiben planbar.' }
      ],
      phases: [
        { title: 'Phase 1: Analyse', text: 'Standort-, Netz- und Nutzungsprofile wurden technisch und wirtschaftlich bewertet.' },
        { title: 'Phase 2: Konzeption', text: 'Layout, Leistungsgrößen und Lastmanagement wurden zu einem skalierbaren Systemdesign verdichtet.' },
        { title: 'Phase 3: Umsetzungspfad', text: 'Ein priorisierter Rolloutplan mit klaren Investitionsstufen und Meilensteinen wurde vorbereitet.' }
      ],
      outcomes: [
        'Kürzere Projektanlaufzeit durch belastbare Entscheidungsgrundlage',
        'Planbarer Ausbau ohne unnötige Überdimensionierung',
        'Messbar geringere Lastspitzen im späteren Betrieb'
      ]
    },
    mikronetz: {
      tone: 'blue',
      kicker: 'Energie-Systemdesign',
      title: 'Mikronetz: PV, Speicher und Laststeuerung aus einem Guss',
      summary: 'Die Lösung verbindet Erzeugung, Speicherung und Verbrauch zu einem steuerbaren Energiesystem mit messbarer Wirkung auf Kosten und Emissionen.',
      delivery: 'Lieferumfang waren Lastprofilaufnahme, Speicherdimensionierung, Betriebsstrategie für Erzeugung/Last und ein wirtschaftlicher Rolloutplan inkl. ROI-Pfad.',
      approach: 'Die Regelstrategie verschiebt Lasten dynamisch, priorisiert Eigenverbrauch und nutzt Speicherkapazität gezielt für Lastspitzenkappung und Tarifoptimierung.',
      value: 'Der Kunde steigert Versorgungssicherheit, reduziert externe Energiebezüge und gewinnt ein transparent steuerbares Energiesystem für weitere Standortentwicklung.',
      background: 'assets/Micro.png',
      metrics: [
        { value: '1.2 MWh', label: 'Speicherkapazitaet' },
        { value: '-24%', label: 'CO₂-Reduktion' },
        { value: '6.5 Jahre', label: 'Wirtschaftlicher ROI' }
      ],
      trust: ['Systemarchitektur aus einer Hand', 'Transparenter ROI-Nachweis', 'Energie- und CO₂-Wirkung belegt'],
      visuals: [
        { type: 'analysis', title: 'Energieprofil', text: 'Erzeugung und Last wurden zu einem steuerbaren Gesamtbild verdichtet.' },
        { type: 'integration', title: 'Speicherlogik', text: 'Dynamische Lade- und Entladefenster stärken Eigenverbrauch und Netzentlastung.' },
        { type: 'impact', title: 'Wirtschaftlichkeit', text: 'CO₂- und Energiekosten sinken bei resilienterer Versorgung.' }
      ],
      phases: [
        { title: 'Phase 1: Lasttransparenz', text: 'Lastgänge, Erzeugungsfenster und Kostenstrukturen wurden detailliert modelliert.' },
        { title: 'Phase 2: Regelstrategie', text: 'Speicher- und Laststeuerung wurde auf Eigenverbrauch, Netzentlastung und Tarifoptimierung ausgerichtet.' },
        { title: 'Phase 3: Wirtschaftlicher Rollout', text: 'Der Ausbaupfad wurde in Investitionsstufen mit klarer ROI-Priorisierung gegliedert.' }
      ],
      outcomes: [
        'Reduzierte Energiebezugskosten bei höherer Versorgungssicherheit',
        'Skalierbares Energiesystem für weitere Ausbaustufen',
        'Nachvollziehbarer Business Case für Management und Finanzierung'
      ]
    },
    smartcharge360: {
      tone: 'amber',
      kicker: 'Digitales Lastmanagement',
      title: 'SmartCharge360: Datengetriebene Lade- und Leistungssteuerung',
      summary: 'Das Projekt demonstriert, wie datenbasierte Steuerung mehr Ladeleistung bei gleichzeitig kontrollierter Netzanschlussgrenze ermöglicht.',
      delivery: 'Implementiert wurden Monitoring, Lastprognose, Prioritätsregeln und ein Betriebsmodell für Ladepunkte mit unterschiedlichen Nutzungsprofilen.',
      approach: 'Messwerte und Betriebslogik werden in Echtzeit zu einer dynamischen Leistungszuweisung verknüpft, um Lastspitzen zu glätten und Engpässe zu vermeiden.',
      value: 'Der Kunde gewinnt mehr nutzbare Kapazität ohne teuren Anschlussausbau und schafft eine stabile technische Basis für weiteres Flottenwachstum.',
      background: 'assets/Apps.png',
      metrics: [
        { value: '24', label: 'Steuerbare Ladepunkte' },
        { value: '400 kW', label: 'Aktive Laststeuerung' },
        { value: '-30%', label: 'Spitzenlastreduktion' }
      ],
      trust: ['Echtzeit-Datenbasis', 'Robuste Steuerlogik', 'Auslegung für Flottenwachstum'],
      visuals: [
        { type: 'analysis', title: 'Datenmonitoring', text: 'Messwerte werden kontinuierlich für Lastprognose und Priorisierung genutzt.' },
        { type: 'integration', title: 'Steuerlogik', text: 'Leistung wird in Echtzeit auf Ladepunkte und Zeitfenster verteilt.' },
        { type: 'impact', title: 'Skalierbarkeit', text: 'Mehr Flottenleistung ohne sofortigen Anschlussausbau.' }
      ],
      phases: [
        { title: 'Phase 1: Datenmodell', text: 'Ladeverhalten, Betriebsfenster und Anschlussgrenzen wurden in ein belastbares Steuerungsmodell überführt.' },
        { title: 'Phase 2: Echtzeit-Regelung', text: 'Prioritätslogiken für Fahrzeugklassen und Zeitfenster wurden in den laufenden Betrieb integriert.' },
        { title: 'Phase 3: Skalierungsbetrieb', text: 'Das System wurde auf wachsende Flottenlasten ausgelegt, ohne frühzeitigen Netzausbau zu erzwingen.' }
      ],
      outcomes: [
        'Höhere Ladeverfügbarkeit im Tagesgeschäft',
        'Deutlich kontrolliertere Spitzenlasten im Betrieb',
        'Sichere Basis für den nächsten Flottenausbau'
      ]
    }
  };

  function renderTrust(items) {
    modalTrust.innerHTML = items
      .map((item) => `<span class="project-trust-pill">${item}</span>`)
      .join('');
  }

  function renderMetrics(items) {
    modalKpis.innerHTML = items
      .map((item) => `<article class="project-kpi-card"><strong>${item.value}</strong><span>${item.label}</span></article>`)
      .join('');
  }

  function renderVisuals(items) {
    modalVisuals.innerHTML = items
      .map((item) => `
        <article class="project-mini-card project-mini-card--${item.type}">
          <span class="project-mini-icon" aria-hidden="true"></span>
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </article>
      `)
      .join('');
  }

  function renderPhases(items) {
    modalPhases.innerHTML = items
      .map((item) => `
        <li class="project-phase-item">
          <h5>${item.title}</h5>
          <p>${item.text}</p>
        </li>
      `)
      .join('');
  }

  function renderOutcomes(items) {
    modalOutcomes.innerHTML = items
      .map((item) => `<li>${item}</li>`)
      .join('');
  }

  function openProjectModal(key) {
    const data = projectData[key];
    if (!data) return;

    modal.dataset.tone = data.tone;
    modalHero.style.setProperty('--project-bg', `url('${data.background}')`);
    modalKicker.textContent = data.kicker;
    modalTitle.textContent = data.title;
    modalSummary.textContent = data.summary;
    modalDelivery.textContent = data.delivery;
    modalApproach.textContent = data.approach;
    modalValue.textContent = data.value;
    renderTrust(data.trust);
    renderMetrics(data.metrics);
    renderVisuals(data.visuals);
    renderPhases(data.phases);
    renderOutcomes(data.outcomes);

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => modal.classList.add('is-open'));
  }

  function closeProjectModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    window.setTimeout(() => {
      if (!modal.classList.contains('is-open')) {
        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
      }
    }, 220);
  }

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a, button')) return;
      const key = card.getAttribute('data-project');
      if (key) openProjectModal(key);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const key = card.getAttribute('data-project');
        if (key) openProjectModal(key);
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', closeProjectModal);
  });

  document.addEventListener('keydown', (event) => {
    if (!modal.hidden && (event.key === 'Escape' || event.key === 'Esc')) {
      closeProjectModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', initProjectModal);

// Mobile Navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Reveal-on-scroll
const reveals = document.querySelectorAll('.reveal-up');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, {threshold: 0.12});
reveals.forEach(el => obs.observe(el));

// Leistungs-Keywords: Klick zeigt professionelle Kurzinfo
function initServiceKeywordInfo() {
  const tags = document.querySelectorAll('.tags .tag-item');
  if (!tags.length) return;

  function hideDetail(detail) {
    detail.classList.remove('is-visible');
    window.setTimeout(() => {
      if (!detail.classList.contains('is-visible')) detail.hidden = true;
    }, 230);
  }

  function showTagInfo(tag) {
    const serviceBody = tag.closest('.service-body');
    if (!serviceBody) return;

    const detail = serviceBody.querySelector('.tag-detail');
    if (!detail) return;

    const tagGroup = serviceBody.querySelectorAll('.tags .tag-item');
    const isSameActive = tag.classList.contains('is-active') && detail.classList.contains('is-visible');

    tagGroup.forEach(item => {
      item.setAttribute('aria-pressed', 'false');
      item.classList.remove('is-active');
    });

    if (isSameActive) {
      hideDetail(detail);
      return;
    }

    tag.setAttribute('aria-pressed', 'true');
    tag.classList.add('is-active');

    const info = tag.getAttribute('data-info') || '';
    const title = (tag.textContent || '').trim();

    if (!info) {
      hideDetail(detail);
      return;
    }

    detail.innerHTML = '';
    const label = document.createElement('span');
    label.className = 'tag-detail-label';
    label.textContent = 'Leistungsdetail';

    const heading = document.createElement('span');
    heading.className = 'tag-detail-title';
    heading.textContent = title;

    const body = document.createElement('span');
    body.className = 'tag-detail-text';
    body.textContent = info;

    detail.append(label, heading, body);
    detail.hidden = false;
    requestAnimationFrame(() => detail.classList.add('is-visible'));
  }

  tags.forEach(tag => {
    tag.addEventListener('click', () => showTagInfo(tag));
    tag.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showTagInfo(tag);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initServiceKeywordInfo);

// Counter animation
function animateCount(el) {
  const target = Number(el.getAttribute('data-count') || '0');
  const dur = 1200;
  const start = performance.now();
  function tick(ts){
    const p = Math.min((ts - start) / dur, 1);
    el.textContent = Math.floor(p * target);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll('[data-count]').forEach(animateCount);

// Parallax entfernt: statisches Bild für bessere Ruhe im Layout
// Dark-Mode Toggle + Persistenz
const root = document.documentElement;
const modeBtn = document.querySelector('.mode-toggle');
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);

if (modeBtn) {
  const updateIcon = () => modeBtn.textContent =
    (root.getAttribute('data-theme') === 'dark') ? '☀️' : '🌙';
  updateIcon();
  modeBtn.addEventListener('click', () => {
    const next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });
}

// Lazy Loading für Background-Images
const lazyBgs = document.querySelectorAll('[data-bg]');
if (lazyBgs.length > 0) {
  const bgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const bg = el.getAttribute('data-bg');
        if (bg) {
          el.style.backgroundImage = `url('${bg}')`;
          el.removeAttribute('data-bg');
        }
        bgObserver.unobserve(el);
      }
    });
  }, {rootMargin: '50px'});
  lazyBgs.forEach(el => bgObserver.observe(el));
}

// WebP-Support Detection & Lazy Loading
function supportsWebP() {
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

const webpSupported = supportsWebP();
const lazyImages = document.querySelectorAll('img[data-src]');
if (lazyImages.length > 0) {
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        let src = img.getAttribute('data-src');
        const webpSrc = img.getAttribute('data-webp');
        
        if (webpSupported && webpSrc) {
          src = webpSrc;
        }
        
        img.src = src;
        img.removeAttribute('data-src');
        img.removeAttribute('data-webp');
        imgObserver.unobserve(img);
      }
    });
  }, {rootMargin: '50px'});
  lazyImages.forEach(img => imgObserver.observe(img));
}

// Scroll-to-Top Button
const scrollBtn = document.querySelector('.scroll-to-top');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Netlify-Forms: Inline-Bestätigung nach Absenden (ohne Weiterleitung)
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  var feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var data = new FormData(form);
    var params = new URLSearchParams();
    data.forEach(function(value, key) { params.append(key, value); });
    fetch('/kontakt.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    })
    .then(function(response) {
      if (response.ok) {
        feedback.innerHTML = '<span class="feedback-icon" aria-hidden="true">✔️</span><div class="feedback-content"><span class="feedback-title">Vielen Dank!</span><span class="feedback-message">Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns zeitnah bei Ihnen.</span></div>';
        feedback.className = 'form-feedback success visible';
        feedback.style.display = 'flex';
        form.reset();
      } else {
        throw new Error('Fehler beim Senden');
      }
    })
    .catch(function() {
      feedback.innerHTML = '<span class="feedback-icon" aria-hidden="true">❌</span><div class="feedback-content"><span class="feedback-title">Fehler!</span><span class="feedback-message">Leider konnte die Nachricht nicht gesendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt per E-Mail.</span></div>';
      feedback.className = 'form-feedback error visible';
      feedback.style.display = 'flex';
    });
  });
});

// === FRÜHLING — KIRSCHBLÜTEN GARTEN ===
const _sc = document.querySelector('.snowfall');
if (_sc && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

  const PETALS = [
    ['#f4c3d8','#e88bae','#fff4f7'],
    ['#fad2e0','#f0a0c0','#fffafc'],
    ['#f0bcdb','#d878a8','#fce8f4']
  ];
  const BFLY = [
    { w1:'#f5943e', w2:'#c46018', vein:'#6a2e00', body:'#1a0a00' },
    { w1:'#7bb8e8', w2:'#3d7cb8', vein:'#1a3d5c', body:'#080e18' },
    { w1:'#aad45a', w2:'#70aa22', vein:'#354f0a', body:'#141e04' }
  ];
  const isMobile = window.innerWidth < 650;

  // --- Bodenbepflanzung (einmalig) ---
  (function buildGround() {
    const cfg = [
      { n: isMobile ? 10 : 22, hmin:16, hmax:26, wmin:1.4, wmax:2.2, op:.20, ca:'#56b870', cb:'#3a8a50', fq:.18 },
      { n: isMobile ?  8 : 18, hmin:26, hmax:44, wmin:2,   wmax:3.2, op:.30, ca:'#6ccc86', cb:'#46a864', fq:.22 },
      { n: isMobile ?  5 : 12, hmin:40, hmax:62, wmin:2.6, wmax:4.2, op:.42, ca:'#84d89e', cb:'#52b472', fq:.28 }
    ];
    cfg.forEach(c => {
      for (let i = 0; i < c.n; i++) {
        const g = document.createElement('span');
        g.className = 'sp-grass';
        const h  = c.hmin + Math.random() * (c.hmax - c.hmin);
        const w  = c.wmin + Math.random() * (c.wmax - c.wmin);
        const tl = (Math.random() * 20 - 10).toFixed(1);
        const sd = (3.4 + Math.random() * 4.2).toFixed(2);
        const sa = (Math.random() * 2.8).toFixed(2);
        g.style.left       = (Math.random() * 100).toFixed(2) + '%';
        g.style.height     = h.toFixed(1) + 'px';
        g.style.width      = w.toFixed(1) + 'px';
        g.style.opacity    = c.op;
        g.style.background = `linear-gradient(180deg,${c.ca},${c.cb})`;
        g.style.setProperty('--tl', tl + 'deg');
        g.style.setProperty('--sd', sd + 's');
        g.style.setProperty('--sa', sa + 's');
        _sc.appendChild(g);
        if (Math.random() < c.fq) {
          const fc = PETALS[Math.floor(Math.random() * PETALS.length)];
          const fl = document.createElement('span');
          fl.className = 'sp-gflower';
          fl.style.left    = (parseFloat(g.style.left) + (Math.random() * 3 - 1.5)).toFixed(2) + '%';
          fl.style.bottom  = (h * 0.84).toFixed(1) + 'px';
          fl.style.opacity = Math.min(c.op + 0.12, 0.62);
          fl.style.setProperty('--petal', fc[0]);
          fl.style.setProperty('--sd', sd + 's');
          fl.style.setProperty('--sa', (parseFloat(sa) + 0.4).toFixed(2) + 's');
          _sc.appendChild(fl);
        }
      }
    });
  })();

  // --- Fallende Sakura-Blüte ---
  function mkPetal() {
    const pal = PETALS[Math.floor(Math.random() * PETALS.length)];
    const el  = document.createElement('div');
    el.className = 'sp-petal';
    el.style.left = (Math.random() * 112 - 6).toFixed(2) + '%';
    const dur = (8 + Math.random() * 9).toFixed(2);
    const sz  = (0.62 + Math.random() * 0.54).toFixed(3);
    const op  = (0.50 + Math.random() * 0.32).toFixed(2);
    const dR  = isMobile ? 0.5 : 1;
    const dx1 = (Math.random() * 80  * dR - 40 * dR).toFixed(1);
    const dx2 = (Math.random() * 100 * dR - 50 * dR).toFixed(1);
    const dx3 = (Math.random() * 70  * dR - 35 * dR).toFixed(1);
    const r0  = Math.random() * 360 | 0;
    const r1  = r0 + (Math.random() * 150 - 75  | 0);
    const r2  = r1 + (Math.random() * 150 - 75  | 0);
    const r3  = r2 + (Math.random() * 150 - 75  | 0);
    el.innerHTML = `<svg viewBox="0 0 26 26" aria-hidden="true" focusable="false"><g transform="translate(13,13)"><ellipse rx="3.4" ry="5.4" fill="${pal[0]}" transform="rotate(0) translate(0,-5)"/><ellipse rx="3.4" ry="5.4" fill="${pal[0]}" transform="rotate(72) translate(0,-5)"/><ellipse rx="3.4" ry="5.4" fill="${pal[1]}" transform="rotate(144) translate(0,-5)"/><ellipse rx="3.4" ry="5.4" fill="${pal[1]}" transform="rotate(216) translate(0,-5)"/><ellipse rx="3.4" ry="5.4" fill="${pal[0]}" transform="rotate(288) translate(0,-5)"/><circle r="2.2" fill="${pal[2]}"/></g></svg>`;
    el.style.setProperty('--sz',  sz);
    el.style.setProperty('--dur', dur + 's');
    el.style.setProperty('--op',  op);
    el.style.setProperty('--dx1', dx1 + 'px');
    el.style.setProperty('--dx2', dx2 + 'px');
    el.style.setProperty('--dx3', dx3 + 'px');
    el.style.setProperty('--r0',  r0 + 'deg');
    el.style.setProperty('--r1',  r1 + 'deg');
    el.style.setProperty('--r2',  r2 + 'deg');
    el.style.setProperty('--r3',  r3 + 'deg');
    _sc.appendChild(el);
    setTimeout(() => el.remove(), (parseFloat(dur) + 2) * 1000);
  }

  // --- Atmosphärisches Lichtstäubchen ---
  function mkDust() {
    const el = document.createElement('div');
    el.className = 'sp-dust';
    el.style.left   = (Math.random() * 100).toFixed(2) + '%';
    el.style.bottom = (Math.random() * 40).toFixed(1) + 'px';
    const dur   = (14 + Math.random() * 14).toFixed(2);
    const drift = (Math.random() * 60  - 30).toFixed(1);
    const op    = (0.26 + Math.random() * 0.28).toFixed(2);
    const sz    = (1.6  + Math.random() * 2.8).toFixed(1);
    el.style.setProperty('--dur',   dur + 's');
    el.style.setProperty('--drift', drift + 'px');
    el.style.setProperty('--op',    op);
    el.style.setProperty('--sz',    sz + 'px');
    _sc.appendChild(el);
    setTimeout(() => el.remove(), (parseFloat(dur) + 1) * 1000);
  }

  // --- Seltener Schmetterling ---
  function mkButterfly() {
    const pal = BFLY[Math.floor(Math.random() * BFLY.length)];
    const el  = document.createElement('div');
    el.className = 'sp-butterfly';
    el.style.left = (12 + Math.random() * 76).toFixed(2) + '%';
    const dur = (14 + Math.random() * 8).toFixed(2);
    el.style.setProperty('--dur',  dur + 's');
    const bR = isMobile ? 0.48 : 1;
    el.style.setProperty('--bx1', (Math.random() * 110 * bR - 55 * bR).toFixed(1) + 'px');
    el.style.setProperty('--bx2', (Math.random() * 120 * bR - 60 * bR).toFixed(1) + 'px');
    el.style.setProperty('--bx3', (Math.random() * 80  * bR - 40 * bR).toFixed(1) + 'px');
    el.style.setProperty('--sz',  (0.70 + Math.random() * 0.36).toFixed(2));
    el.innerHTML = `<svg viewBox="0 0 64 44" aria-hidden="true" focusable="false"><g class="bw-l"><path d="M30,22 C22,7 5,4 4,14 C3,23 14,26 30,22Z" fill="${pal.w1}" opacity=".86"/><path d="M30,22 C12,22 5,35 12,39 C18,42 26,33 30,22Z" fill="${pal.w2}" opacity=".80"/><path d="M30,22 C22,14 10,9 4,14" stroke="${pal.vein}" stroke-width=".55" fill="none" opacity=".42"/></g><g class="bw-r"><path d="M34,22 C42,7 59,4 60,14 C61,23 50,26 34,22Z" fill="${pal.w1}" opacity=".86"/><path d="M34,22 C52,22 59,35 52,39 C46,42 38,33 34,22Z" fill="${pal.w2}" opacity=".80"/><path d="M34,22 C42,14 54,9 60,14" stroke="${pal.vein}" stroke-width=".55" fill="none" opacity=".42"/></g><ellipse cx="32" cy="22" rx="1.9" ry="10" fill="${pal.body}" opacity=".88"/><circle cx="32" cy="12" r="2" fill="${pal.body}" opacity=".88"/><path d="M31,11 C28,5 24,2 20,2" stroke="${pal.body}" stroke-width=".9" fill="none"/><path d="M33,11 C36,5 40,2 44,2" stroke="${pal.body}" stroke-width=".9" fill="none"/><circle cx="20" cy="2" r="1.4" fill="${pal.body}"/><circle cx="44" cy="2" r="1.4" fill="${pal.body}"/></svg>`;
    _sc.appendChild(el);
    setTimeout(() => el.remove(), (parseFloat(dur) + 2) * 1000);
  }

  // --- Spawn ---
  for (let i = 0; i < (isMobile ? 5 : 10); i++) setTimeout(mkPetal, i * 620);
  for (let i = 0; i < (isMobile ? 4 :  8); i++) setTimeout(mkDust,  300 + i * 900);
  setInterval(mkPetal, isMobile ? 1900 : 1050);
  setInterval(mkDust,  isMobile ? 4500 : 2400);
  setTimeout(mkButterfly, 5000 + Math.random() * 6000);
  setInterval(() => { if (Math.random() < .72) mkButterfly(); }, isMobile ? 30000 : 20000);
}
