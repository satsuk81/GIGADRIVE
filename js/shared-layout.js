'use strict';

const SHARED_HEADER = `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="wrap nav-inner">
    <a href="index.html" class="nav-brand" aria-label="GIGADRIVE home">
      <div>
        <img src="images/GD_1-Primary Logo_Colored.png" alt="GIGADRIVE" class="site-logo" />
      </div>
    </a>
    <ul class="nav-links" role="list">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="lessons.html">Lessons &amp; Prices</a></li>
      <li><a href="faq.html">FAQ</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="contact.html" class="nav-book">Book Now</a></li>
    </ul>
    <button class="nav-burger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<nav class="nav-drawer" aria-label="Mobile navigation">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="lessons.html">Lessons &amp; Prices</a>
  <a href="faq.html">FAQ</a>
  <a href="contact.html">Contact</a>
  <a href="contact.html" class="nav-book">Book Now</a>
</nav>
`;

const SHARED_HEADER_SOCIAL = SHARED_HEADER
  .replace(
    '      <li><a href="contact.html">Contact</a></li>',
    '      <li><a href="social.html">Social</a></li>\n      <li><a href="contact.html">Contact</a></li>'
  )
  .replace(
    '  <a href="contact.html">Contact</a>',
    '  <a href="social.html">Social</a>\n  <a href="contact.html">Contact</a>'
  );

const SHARED_HEADER_LEGAL = SHARED_HEADER
  .replace(
    '      <li><a href="contact.html">Contact</a></li>',
    '      <li><a href="contact.html">Contact</a></li>\n      <li><a href="privacy.html">Privacy</a></li>'
  )
  .replace(
    '  <a href="contact.html">Contact</a>',
    '  <a href="contact.html">Contact</a>\n  <a href="privacy.html">Privacy</a>'
  );

const SHARED_HEADER_HOLDING = `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="wrap nav-inner">
    <a href="index.html" class="nav-brand" aria-label="GIGADRIVE home">
      <div>
        <img src="images/GD_1-Primary Logo_Colored.png" alt="GIGADRIVE" class="site-logo" />
      </div>
    </a>
  </div>
</nav>
`;

const SHARED_FOOTER = `
<footer class="footer" role="contentinfo">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="wordmark"><em class="giga">GIGA</em><span>DRIVE</span></div>
        <div class="slogan">Get In Gear And Drive</div>
        <p>Professional driving lessons across Gravesend and surrounding areas. DVSA-approved, outstanding pass rates.</p>
        <div class="footer-plate-row">
          <div class="plate plate--sm" aria-label="G16DRV"><span class="plate-num">G16DRV</span></div>
        </div>
        <div class="footer-socials">
          <a href="https://www.facebook.com/GIGADRIVEUK" class="footer-social-link" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="https://www.instagram.com/GIGADRIVEUK" class="footer-social-link" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          <a href="https://www.tiktok.com/@GIGADRIVEUK" class="footer-social-link" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="lessons.html">Lessons &amp; Prices</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="contact.html">Book a Lesson</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Our Lessons</h4>
        <ul>
          <li><a href="lessons.html#beginner">Beginner Lessons</a></li>
          <li><a href="lessons.html#refresher">Refresher Lessons</a></li>
          <li><a href="lessons.html#theory">Theory Support</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-row"><svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg><span><a href="tel:+447700000000" style="color:rgba(255,255,255,0.55);">07700 000 000</a></span></div>
        <div class="footer-contact-row"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg><span><a href="mailto:gigadriveuk@gmail.com" style="color:rgba(255,255,255,0.55);">gigadriveuk@gmail.com</a></span></div>
        <div class="footer-contact-row"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><span>Gravesend, Kent, UK</span></div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="wrap footer-bottom-inner">
      <p>© 2026 <em class="giga">GIGA</em><span class="drive">DRIVE</span>. All rights reserved. Gravesend, Kent, UK.</p>
      <div class="footer-bottom-links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="privacy.html#cookies">Cookies</a>
        <a href="privacy.html#terms">Terms</a>
      </div>
    </div>
  </div>
</footer>
`;

const SHARED_FOOTER_SOCIAL = SHARED_FOOTER
  .replace(
    '          <li><a href="contact.html">Contact</a></li>',
    '          <li><a href="social.html">Social Media</a></li>\n          <li><a href="contact.html">Contact</a></li>'
  )
  .replace(
    'All rights reserved. Gravesend, Kent, UK.',
    'All rights reserved. Gravesend, Kent, UK.'
  );

const SHARED_FOOTER_LEGAL = `
<footer class="footer" role="contentinfo">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="wordmark"><em class="giga">GIGA</em><span>DRIVE</span></div>
        <div class="slogan">Get In Gear And Drive</div>
        <p>Professional driving lessons across Gravesend and surrounding areas. DVSA-approved, outstanding pass rates.</p>
      </div>
      <div class="footer-col"></div>
      <div class="footer-col"></div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="privacy.html#privacy">Privacy Policy</a></li>
          <li><a href="privacy.html#cookies">Cookie Policy</a></li>
          <li><a href="privacy.html#terms">Terms of Use</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="wrap footer-bottom-inner">
      <p>© 2026 <em class="giga">GIGA</em><span class="drive">DRIVE</span>. All rights reserved. Gravesend, Kent, UK.</p>
      <div class="footer-bottom-links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="privacy.html#cookies">Cookies</a>
        <a href="privacy.html#terms">Terms</a>
      </div>
    </div>
  </div>
</footer>
`;

const SHARED_FOOTER_HOLDING = `
<footer class="footer" style="padding: 0;" role="contentinfo">
  <div class="footer-bottom">
    <div class="wrap footer-bottom-inner">
      <p>© 2026 <em class="giga">GIGA</em><span class="drive">DRIVE</span>. All rights reserved. Gravesend, Kent, UK.</p>
      <div class="footer-bottom-links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="privacy.html#cookies">Cookies</a>
        <a href="privacy.html#terms">Terms</a>
      </div>
    </div>
  </div>
</footer>
`;

function injectSharedLayout() {
  const layout = document.body?.dataset.layout || 'main';

  let headerMarkup = SHARED_HEADER;
  let footerMarkup = SHARED_FOOTER;

  if (layout === 'social') {
    headerMarkup = SHARED_HEADER_SOCIAL;
    footerMarkup = SHARED_FOOTER_SOCIAL;
  } else if (layout === 'legal') {
    headerMarkup = SHARED_HEADER_LEGAL;
    footerMarkup = SHARED_FOOTER_LEGAL;
  } else if (layout === 'holding') {
    headerMarkup = SHARED_HEADER_HOLDING;
    footerMarkup = SHARED_FOOTER_HOLDING;
  }

  const headerHost = document.getElementById('site-header');
  if (headerHost) headerHost.innerHTML = headerMarkup;

  const footerHost = document.getElementById('site-footer');
  if (footerHost) footerHost.innerHTML = footerMarkup;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectSharedLayout);
} else {
  injectSharedLayout();
}
