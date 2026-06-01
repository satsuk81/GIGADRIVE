/* ================================================================
   GIGADRIVE — MAIN JAVASCRIPT
   ================================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar: scroll class + active page link ─────────────────
  const navbar = document.querySelector('.navbar');
  const markActive = () => {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === page ||
        (page === '' && a.getAttribute('href') === 'index.html'));
    });
  };
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('is-scrolled', scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  markActive();

  // ── Mobile nav burger ────────────────────────────────────────
  const burger = document.querySelector('.nav-burger');
  const drawer = document.querySelector('.nav-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const open = drawer.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open);
      const [s1, s2, s3] = burger.querySelectorAll('span');
      if (open) {
        s1.style.transform = 'rotate(45deg) translate(5px,5px)';
        s2.style.opacity   = '0';
        s3.style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        [s1, s2, s3].forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }));
  }

  // ── Smooth scroll for in-page anchors ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;
      window.scrollTo({ top: target.offsetTop - offset - 12, behavior: 'smooth' });
    });
  });

  // ── FAQ accordion ────────────────────────────────────────────
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item   = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Scroll-reveal (IntersectionObserver) ────────────────────
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  // ── Number plate wiggle on hover ─────────────────────────────
  document.querySelectorAll('.plate').forEach(p => {
    p.addEventListener('mouseenter', () => {
      p.style.transition = 'transform 0.18s ease';
      p.style.transform  = 'scale(1.06) rotate(-1.5deg)';
    });
    p.addEventListener('mouseleave', () => { p.style.transform = ''; });
  });

  // ── Contact form — EmailJS ───────────────────────────────────
  // TODO: Replace the three placeholder values below with your real EmailJS IDs.
  // Sign up at https://www.emailjs.com, create a service + template, then copy:
  //   YOUR_PUBLIC_KEY  → Account > API Keys
  //   YOUR_SERVICE_ID  → Email Services > your service
  //   YOUR_TEMPLATE_ID → Email Templates > your template
  const EMAILJS_PUBLIC_KEY  = 'vO2HzkiGLBq6IuzPT';
  const EMAILJS_SERVICE_ID  = 'service_5rrapzf';
  const EMAILJS_TEMPLATE_ID = 'template_xftl3xd';

  function sendContactForm(formEl) {
    return emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formEl);
  }

  const form = document.getElementById('gigaContactForm');
  if (form) {
    if (typeof emailjs !== 'undefined') {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn  = form.querySelector('[type="submit"]');
      const orig = btn.innerHTML;

      const successEl = document.getElementById('form-success');
      const errorEl   = document.getElementById('form-error');
      if (successEl) successEl.hidden = true;
      if (errorEl)   errorEl.hidden   = true;

      btn.innerHTML = '⏳ Sending…';
      btn.disabled  = true;

      sendContactForm(form)
        .then(() => {
          btn.innerHTML          = '✅ Message Sent!';
          btn.style.background   = 'var(--c-success)';
          btn.style.borderColor  = 'var(--c-success)';
          if (successEl) successEl.hidden = false;
          form.reset();
          setTimeout(() => {
            btn.innerHTML         = orig;
            btn.style.background  = '';
            btn.style.borderColor = '';
            btn.disabled          = false;
          }, 4500);
        })
        .catch(() => {
          btn.innerHTML = orig;
          btn.disabled  = false;
          if (errorEl) errorEl.hidden = false;
        });
    });
  }

  // ── Cookie / GDPR notice ─────────────────────────────────────
  if (!localStorage.getItem('gd_cookies_ok')) {
    const bar = document.createElement('div');
    bar.id = 'cookieBar';
    bar.style.cssText = `
      position:fixed;bottom:0;left:0;right:0;z-index:9999;
      background:var(--c-dark);color:rgba(255,255,255,0.82);
      display:flex;align-items:center;justify-content:space-between;
      flex-wrap:wrap;gap:1rem;padding:1rem 1.5rem;
      box-shadow:0 -4px 24px rgba(0,0,0,0.35);font-size:0.875rem;
    `;
    bar.innerHTML = `
      <span>🍪 We use cookies to give you the best experience.
        <a href="privacy.html" style="color:var(--c-accent);">Privacy Policy</a>.</span>
      <button id="cookieOK" style="
        background:var(--c-accent);color:var(--c-dark);border:none;
        border-radius:6px;padding:0.5rem 1.5rem;font-family:var(--font-head);
        font-weight:700;font-size:0.9rem;cursor:pointer;">Accept</button>
    `;
    document.body.appendChild(bar);
    document.getElementById('cookieOK').addEventListener('click', () => {
      localStorage.setItem('gd_cookies_ok', '1');
      bar.remove();
    });
  }

});
