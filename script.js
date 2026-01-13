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
const newsDetails = [];

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

// Form Feedback
const contactForm = document.querySelector('form[name="kontakt"]');
const formFeedback = document.querySelector('.form-feedback');

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', (e) => {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Wird gesendet...';
      submitBtn.disabled = true;
    }
  });
  
  // Netlify Form Success Handler
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    formFeedback.style.display = 'flex';
    contactForm.style.display = 'none';
    window.scrollTo({ top: formFeedback.offsetTop - 100, behavior: 'smooth' });
  }
}

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
