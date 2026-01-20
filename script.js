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
  <p>DRIVEPLAN arbeitet mit Kommunen und Unternehmen an der Mobilität von morgen. In einem aktuellen Projekt wurde ein ganzes Stadtquartier mit Sharing-Angeboten, E-Bussen und smarten Ladepunkten ausgestattet. Das Ergebnis: weniger Verkehr, bessere Luft und mehr Lebensqualität für die Bewohner. <br><br>Unsere Konzepte verbinden Ökologie, Ökonomie und soziale Aspekte – und machen Städte zu Vorreitern der Mobilitätswende. <strong>Erleben Sie, wie wir gemeinsam mit Ihnen neue Wege gehen und nachhaltige Mobilität erlebbar machen!</strong></p>`
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
    fetch('/', {
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

// Snowfall Effect
const snowfallContainer = document.querySelector('.snowfall');
if (snowfallContainer) {
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    
    // Random position
    snowflake.style.left = Math.random() * 100 + '%';
    
    // Random size (0.5 - 1.5)
    const size = 0.5 + Math.random();
    snowflake.style.fontSize = size + 'rem';
    
    // Random duration (8-15 seconds)
    const duration = 8 + Math.random() * 7;
    snowflake.style.animationDuration = duration + 's';
    
    // Random delay
    snowflake.style.animationDelay = Math.random() * 2 + 's';
    
    snowfallContainer.appendChild(snowflake);
    
    // Remove after animation
    setTimeout(() => {
      snowflake.remove();
    }, (duration + 2) * 1000);
  }
  
  // Create initial snowflakes
  for (let i = 0; i < 30; i++) {
    setTimeout(createSnowflake, i * 200);
  }
  
  // Continuously add new snowflakes
  setInterval(createSnowflake, 400);
}
