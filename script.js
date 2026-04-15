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
  `<h2>Neue Ladeinfrastruktur für Unternehmen</h2>
  <p><strong>Datum:</strong> 28. Dezember 2025</p>
  <p><em>Wie ein mittelständisches Unternehmen zum Vorreiter der Elektromobilität wurde:</em></p>
  <p>Stellen Sie sich vor, Ihr Firmenparkplatz wird zum Innovationszentrum. 2025 begleitete DRIVEPLAN ein traditionsreiches Logistikunternehmen auf dem Weg zur eigenen Ladeinfrastruktur. Nach einer umfassenden Analyse entwickelten wir ein maßgeschneidertes Konzept: 20 Ladepunkte, intelligente Steuerung, Solarstrom vom eigenen Dach und ein dynamisches Lastmanagement, das auch in Spitzenzeiten für reibungslosen Betrieb sorgt. Die Geschäftsführung berichtet heute von gesunkenen Betriebskosten, motivierten Mitarbeitenden und einem neuen Image als nachhaltiger Arbeitgeber. <br><br><strong>Unser Versprechen:</strong> Wir machen Ihr Unternehmen fit für die Zukunft – mit Technik, die begeistert, und Lösungen, die sich rechnen. Lassen Sie sich inspirieren und erfahren Sie, wie auch Sie von unserer Erfahrung profitieren können!</p>`,
  `<h2>Energiemanagement: Trends 2026</h2>
  <p><strong>Datum:</strong> 15. Dezember 2025</p>
  <p><em>Die Zukunft der Energie ist digital, vernetzt und nachhaltig.</em></p>
  <p>2026 steht im Zeichen der Transformation: Unternehmen setzen auf smarte Energiemanagement-Systeme, die nicht nur den Verbrauch überwachen, sondern aktiv steuern. Ein Beispiel aus der Praxis: Ein Industriebetrieb konnte durch die Einführung von KI-gestützter Verbrauchsoptimierung seine Energiekosten um 18% senken – und das bei wachsender Produktion! DRIVEPLAN begleitet Sie von der ersten Analyse bis zur Implementierung modernster Technologien. <br><br>Wir zeigen Ihnen, wie Sie mit intelligenten Speicherlösungen, flexiblen Tarifen und der Integration erneuerbarer Energien nicht nur Kosten sparen, sondern auch Ihre Nachhaltigkeitsziele erreichen. <strong>Entdecken Sie die Trends, die Ihr Unternehmen 2026 prägen werden!</strong></p>`,
  `<h2>Fördermöglichkeiten 2026: So profitieren Unternehmen</h2>
  <p><strong>Datum:</strong> 01. Dezember 2025</p>
  <p><em>Förderprogramme als Schlüssel zur nachhaltigen Transformation:</em></p>
  <p>2026 steht im Zeichen der nachhaltigen Entwicklung und Digitalisierung. Unternehmen, die in innovative Technologien, Energieeffizienz oder neue Mobilitätslösungen investieren, können von einer Vielzahl an Fördermöglichkeiten profitieren. Doch der Weg durch die Förderlandschaft ist oft komplex: Es gilt, die passenden Programme zu finden, die eigenen Ziele klar zu definieren und überzeugende Konzepte zu entwickeln.<br><br>
DRIVEPLAN begleitet Unternehmen auf diesem Weg – von der ersten Idee bis zur erfolgreichen Umsetzung. Wir analysieren gemeinsam die individuellen Potenziale, beraten zu aktuellen Trends und helfen, Projekte strategisch auszurichten. So wird Förderung nicht nur zum finanziellen Vorteil, sondern zum echten Innovationsmotor. <br><br>
Wer die Chancen erkennt und gezielt nutzt, kann sein Unternehmen zukunftssicher aufstellen, neue Märkte erschließen und nachhaltigen Mehrwert schaffen. Lassen Sie sich inspirieren, wie Fördermöglichkeiten 2026 Ihr Unternehmen voranbringen können!</p>`,
  `<h2>Mobilitätskonzepte 2026: Die Stadt bewegt sich neu</h2>
  <p><strong>Datum:</strong> 15. Dezember 2025</p>
  <p><em>Wie innovative Ideen Städte verändern:</em></p>
  <p>DRIVEPLAN arbeitet mit Kommunen und Unternehmen an der Mobilität von morgen. In einem aktuellen Projekt wurde ein ganzes Stadtquartier mit Sharing-Angeboten, E-Bussen und smarten Ladepunkten ausgestattet. Das Ergebnis: weniger Verkehr, bessere Luft und mehr Lebensqualität für die Bewohner. <br><br>Unsere Konzepte verbinden Ökologie, Ökonomie und soziale Aspekte – und machen Städte zu Vorreitern der Mobilitätswende. <strong>Erleben Sie, wie wir gemeinsam mit Ihnen neue Wege gehen und nachhaltige Mobilität erlebbar machen!</strong></p>`,
  `<h2>Sektorkopplung: Wie aus Einzelanlagen ein intelligentes Energiesystem wird</h2>
  <p><strong>Datum:</strong> 30. März 2026</p>
  <p><em>Die Energiewende beginnt nicht nur bei erneuerbaren Anlagen. Sie beginnt im Energiesystem selbst.</em></p>
  <p>Die kommenden Jahre entscheiden nicht nur darüber, wie schnell neue Technologien ausgebaut werden, sondern vor allem darüber, wie gut sie miteinander verbunden sind. Genau hier setzt Sektorkopplung an: Industrie, Stromerzeugung, Gebäude und Mobilität wachsen zu einem integrierten Gesamtsystem zusammen. Was früher getrennt geplant wurde, muss heute gemeinsam gedacht, digital gesteuert und wirtschaftlich orchestriert werden.<br><br>
Elektrifizierung verändert dabei die Rolle klassischer Infrastruktur grundlegend. Energie wird zunehmend lokal erzeugt, flexibel gespeichert und intelligent verteilt. Ein Produktionsstandort mit PV-Anlage, Batteriespeicher, Wärmepumpe, Ladeinfrastruktur und Lastmanagement ist kein Zukunftsbild mehr, sondern ein realer Baustein eines resilienten Energiesystems. Die eigentliche Leistung entsteht nicht in einer einzelnen Komponente, sondern in der Systemlogik, die Lasten verschiebt, Netzspitzen vermeidet und Energie dort verfügbar macht, wo sie den größten Nutzen stiftet.<br><br>
Für Unternehmen bedeutet das einen strategischen Perspektivwechsel: Weg von isolierten Einzelmaßnahmen, hin zu einem skalierbaren Architekturansatz. Wer heute nur Technik beschafft, verschenkt Potenzial. Wer stattdessen auf integrierte Planung setzt, schafft Versorgungssicherheit, reduziert Energiekosten, stärkt die Wettbewerbsfähigkeit und schafft die Grundlage für zukünftiges Wachstum.<br><br>
<strong>Die Herausforderung der nächsten Jahre ist daher klar:</strong> nicht nur mehr Technologie, sondern bessere Integration. DRIVEPLAN unterstützt Sie dabei, aus vielen Einzelbausteinen ein stabiles, intelligentes und zukunftsfähiges Energiesystem zu formen.</p>`,
  `<h2>Vom Verbraucher zum Netzelement: Ladeinfrastruktur als aktiver Systembaustein</h2>
  <p><strong>Datum:</strong> 30. März 2026</p>
  <p><em>Die nächste Evolutionsstufe der Elektromobilität ist nicht die höchste Ladeleistung, sondern die intelligente Systemintegration.</em></p>
  <p>Ladeinfrastruktur war lange ein klassischer Energieverbraucher: Strom wird bezogen, Fahrzeuge werden geladen, Netzspitzen steigen. Dieses Modell verändert sich gerade grundlegend. Mit der Kombination aus Photovoltaik, Speicher und intelligentem Lastmanagement wird aus Ladeinfrastruktur ein aktives Netzelement, das Energie nicht nur nutzt, sondern systemdienlich steuert.<br><br>
Die Wirkung dieser Vernetzung ist konkret messbar. Lokal erzeugte Energie kann direkt in Ladeprozesse fließen, Zwischenspeicher glätten Lastspitzen und dynamische Steuerung priorisiert Ladefenster nach Netzsituation, Tarifstruktur und betrieblichem Bedarf. Dadurch sinkt die Netzbelastung spürbar, die Wirtschaftlichkeit steigt durch besseren Eigenverbrauch und der Betrieb gewinnt Flexibilität bei schwankender Verfügbarkeit von Energie und Leistung.<br><br>
Entscheidend ist: Nicht die einzelne Komponente schafft den Mehrwert, sondern ihr Zusammenspiel. Erst wenn Erzeugung, Speicherung und Steuerung als integriertes System geplant werden, entsteht eine robuste Infrastruktur, die mit dem Unternehmen wächst. Genau darin liegt die strategische Chance für die nächsten Jahre: Ladeinfrastruktur wird vom Kostenfaktor zur aktiven Energieplattform.<br><br>
<strong>DRIVEPLAN entwickelt dafür skalierbare Gesamtkonzepte</strong> - technisch belastbar, wirtschaftlich fundiert und bereit für die Anforderungen eines zunehmend vernetzten Energiesystems.</p>`,
  `<h2>E-LKW Flotten im Wandel: Vom Pilotprojekt zur skalierbaren Logistikstrategie</h2>
  <p><strong>Datum:</strong> 30. März 2026</p>
  <p><em>Elektrifizierung im Schwerlastverkehr wird dann erfolgreich, wenn Fahrzeuge, Ladeinfrastruktur und Energieplanung als ein gemeinsames System betrieben werden.</em></p>
  <p>E-LKW Flotten markieren den nächsten großen Transformationsschritt in der Logistik. Während einzelne Fahrzeuge in Pilotprojekten bereits Alltag sind, liegt die eigentliche Herausforderung in der Skalierung: Mehr Fahrzeuge, engere Zeitfenster, höhere Energieleistungen und gleichzeitig maximale Betriebssicherheit. Genau hier entscheidet sich, ob Elektromobilität zur strategischen Stärke oder zum operativen Engpass wird.<br><br>
Der Schlüssel liegt in der intelligenten Kopplung von Tourenplanung, Ladefenstern und Standortenergie. Wenn Ladepunkte nicht isoliert betrieben, sondern mit Lastmanagement, Speichern und lokaler Erzeugung verknüpft werden, entsteht ein robustes Gesamtsystem. Lastspitzen lassen sich reduzieren, Standzeiten aktiv nutzen und Energiekosten dynamisch optimieren. Das Ergebnis ist eine Flotte, die nicht nur emissionsärmer fährt, sondern auch wirtschaftlicher und planbarer arbeitet.<br><br>
Für Unternehmen bedeutet das einen klaren Wettbewerbsvorteil: Hohe Fahrzeugverfügbarkeit trotz wachsender Elektrifizierungsquote, mehr Transparenz über Energie- und Betriebskosten sowie eine belastbare Grundlage für Ausschreibungen, Nachhaltigkeitsberichte und zukünftige CO2-Anforderungen. Wer heute systemisch plant, sichert sich morgen Skalierungsfähigkeit entlang der gesamten Lieferkette.<br><br>
<strong>DRIVEPLAN begleitet diesen Wandel von der Standortanalyse bis zum rollierenden Flottenausbau</strong> - mit technischen Konzepten, die auf reale Logistikprozesse abgestimmt sind und mit jedem zusätzlichen E-LKW stabil mitwachsen.</p>`
];

function openNewsModal(idx) {
  const modal = document.getElementById('news-modal');
  modal.style.display = 'flex';
  document.getElementById('news-modal-body').innerHTML = newsDetails[idx];
  document.body.style.overflow = 'hidden';
  setTimeout(() => modal.classList.add('active'), 10);
}
function closeNewsModal() {
  const modal = document.getElementById('news-modal');
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}
// Schließen per Klick auf Hintergrund und Escape-Taste
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('news-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeNewsModal();
    });
    document.addEventListener('keydown', function(e) {
      if (modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) closeNewsModal();
    });
  }
});
document.getElementById('y') && (document.getElementById('y').textContent = new Date().getFullYear());

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
