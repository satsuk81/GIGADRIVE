# GIGADRIVE — Website

> **Get In Gear And Drive** · North Kent Driving School · Vehicle GIGADRV

A clean, modern, fully responsive 5-page website for the GIGADRIVE driving school, built with pure HTML, CSS and vanilla JavaScript — no build tools, no frameworks, no dependencies beyond Google Fonts.

---

## 📁 File Structure

```
├── index.html          Home page
├── about.html          About / Instructor page
├── lessons.html        Lesson types + pricing + FAQ
├── contact.html        Contact form + map placeholder
├── privacy.html        Privacy Policy, Cookie Policy, Terms
│
├── css/
│   ├── variables.css   ← THEME CONFIG (colours, fonts, logo sizes)
│   ├── style.css       Full site stylesheet
│   └── fonts.css       @font-face for Charles Wright (optional)
│
├── js/
│   ├── shared-layout.js Shared header/footer injection (`data-layout`: main, social, legal)
│   └── main.js          Navbar, mobile menu, FAQ, animations, form
│
└── images/
    ├── logo.svg            (add your own logo here)
    ├── logo-white.svg      (white variant for footer/dark backgrounds)
    ├── instructor.jpg      (add instructor photo)
    ├── og-image.jpg        (1200×630 social share image)
    └── GD_32x32.ico        (browser tab icon)
```

---

## 🎨 Changing the Colour Scheme

Open **`css/variables.css`** — all colours are CSS custom properties at the top of the file.

```css
--c-primary:     #0B1F3A;   /* Midnight Navy  — change to your primary */
--c-accent:      #FFD000;   /* Electric Yellow — change to your accent  */
```

Two ready-made alternate themes (Racing Red, British Racing Green) are commented out at the bottom of `variables.css` — simply uncomment one to switch theme instantly.

---

## 🖼️ Adding a Logo

1. Drop your logo files into the `images/` folder:
   - `logo.svg` — full-colour version (for white navbar background)
   - `logo-white.svg` — white/light version (for dark footer)

2. In each HTML file, find the `.nav-brand` section and replace the wordmark `<div>` with:
   ```html
   <img src="images/logo.svg" alt="GIGADRIVE" class="site-logo" />
   ```

3. In the footer, find `<div class="wordmark">` and replace with:
   ```html
   <img src="images/logo-white.svg" alt="GIGADRIVE" class="site-logo site-logo--footer" />
   ```

Logo sizing is controlled in `css/variables.css`:
```css
--logo-h:        44px;    /* navbar logo height    */
--logo-h-footer: 36px;    /* footer logo height    */
```

---

## 📞 Updating Contact Details

Search across all files for the placeholder values and replace with your real details:

| Placeholder | Replace with |
|---|---|
| `07700 000 000` | Your phone number |
| `gigadriveuk@gmail.com` | Your email address |
| `https://www.facebook.com/GigaDrive` | Your Facebook page URL |
| `https://www.instagram.com/GigaDrive` | Your Instagram URL |
| `https://www.tiktok.com/@GigaDrive` | Your TikTok URL |
| `https://www.youtube.com/@GigaDrive` | Your YouTube URL |
| `https://x.com/GigaDrive` | Your X/Twitter URL |

---

## 🗺️ Adding a Google Map

On `contact.html`, find the comment block:
```html
<!-- ── MAP EMBED ─────────...
```

1. Go to [maps.google.com](https://maps.google.com)
2. Search for your area or a specific address
3. Click **Share → Embed a map**
4. Copy the `<iframe>` code
5. Replace the `<div class="map-placeholder">` block with your iframe

---

## 📧 Making the Contact Form Send Emails

The form is wired up in `js/main.js`. Choose one of these free options:

### Option A — Formspree (easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form to get your form ID
3. In `contact.html`, change the `<form>` opening tag to:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B — EmailJS (no server needed)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. Update the `sendContactForm()` function in `js/main.js` with your service ID, template ID and public key

### Option C — Netlify Forms (if hosting on Netlify)
Add `netlify` attribute to the form:
```html
<form name="gigadrive-contact" method="POST" data-netlify="true">
```

---

## 🚀 Deployment

This site is plain HTML — deploy anywhere with zero build steps:

| Platform | How |
|---|---|
| **GitHub Pages** | Push to a `gh-pages` branch or configure in repo Settings |
| **Netlify** | Drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | Run `vercel` in the folder after installing the Vercel CLI |
| **cPanel / FTP** | Upload all files to `public_html` |

---

## 🔢 Number Plate Styling

The GIGADRV number plate is rendered entirely in CSS — no image needed.

- `.plate.plate--lg` — Large (hero / CTA band)
- `.plate.plate--md` — Medium (lesson cards, info cards)
- `.plate.plate--sm` — Small (footer, area cards)

The GB/EU colour strip on the left is created via `::before` pseudo-element in `css/style.css`.

### Using the Authentic Charles Wright Font (optional)
1. Purchase the Charles Wright font from a licensed vendor
2. Place the font files in `css/fonts/`
3. Uncomment the `@font-face` block in `css/fonts.css`
4. Change `--plate-font` in `css/variables.css` from `Arial Black` to `'CharlesWright'`

---

## ✏️ Prices & Content

- **Prices** are in `lessons.html` and `index.html` — update to match your current rates
- **Coverage areas** are tag lists — add/remove `<span class="area-tag">` items
- **Testimonials** are on `index.html` — replace with real pupil quotes
- **Pass rate & stats** are on `index.html` and `about.html` — update to your actual figures
- All prices show "correct May 2026" — update the month/year as needed

---

## 🌐 SEO

Each page has:
- Unique `<title>` and `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:image`)
- Twitter Card meta tags
- Semantic HTML5 landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`, `aria-label`)
- `aria-labelledby` on all major sections

Update `og:url` in `index.html` with your actual domain.

---

## 📱 Browser Support

- Chrome, Edge, Firefox, Safari (latest 2 major versions)
- iOS Safari 14+, Android Chrome 90+
- Fully responsive: mobile, tablet, desktop

---

## 📄 Licence

Website design and code © 2026 GIGADRIVE. All rights reserved.
