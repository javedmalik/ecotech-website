# Ecotech Recyclers — Website

A modern, production-grade static website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** (App Router) | Framework, SSG, SEO |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations |
| **next-themes** | Dark/Light mode |

---

## 📁 Project Structure

```
ecotech-website/
├── app/
│   ├── layout.tsx        # Root layout with SEO metadata + JSON-LD
│   ├── page.tsx          # Main page assembling all sections
│   └── globals.css       # Global styles, custom fonts, utilities
├── components/
│   ├── Navbar.tsx        # Sticky nav with dark mode toggle
│   ├── HeroSlider.tsx    # Auto-playing banner slider (4 slides)
│   ├── StatsTicker.tsx   # Animated scrolling stats ticker
│   ├── About.tsx         # About section with stats
│   ├── Services.tsx      # Services cards grid
│   ├── Materials.tsx     # Tabbed materials panel
│   ├── Process.tsx       # 5-step process timeline
│   ├── Values.tsx        # Core values + Why Us
│   ├── Contact.tsx       # Secure contact form
│   └── Footer.tsx        # Full footer with links
├── content/              # ← EDIT CONTENT HERE
│   ├── site.ts           # Site config, nav, SEO metadata
│   ├── hero.ts           # Hero slider content (4 slides)
│   ├── about.ts          # About section content
│   ├── services.ts       # Services list
│   ├── values.ts         # Core values + Why Us
│   └── process.ts        # Process steps + Materials + Contact
├── public/
│   ├── logo.jpeg         # Company logo
│   ├── robots.txt        # SEO robots
│   ├── sitemap.xml       # XML sitemap
│   └── site.webmanifest  # PWA manifest
├── next.config.js        # Security headers, image config
├── tailwind.config.js    # Custom colors, fonts, animations
└── tsconfig.json
```

---

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Copy logo

Place your logo at `public/logo.jpeg` (already included).

### 3. Configure environment

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production

```bash
npm run build
npm start
```

---

## ✏️ Editing Content

All website content is separated into files in the `content/` folder:

| File | What to edit |
|------|-------------|
| `content/site.ts` | Company name, URL, SEO keywords, nav links, social |
| `content/hero.ts` | Hero slider slides (headline, subtitle, CTA) |
| `content/about.ts` | About us text, vision, certifications, stats |
| `content/services.ts` | Service cards (title, description, highlights) |
| `content/values.ts` | Core values and "Why choose us" points |
| `content/process.ts` | Process steps, materials list, contact details |

---

## 🔒 Security Features

- **Security HTTP headers** via `next.config.js`:
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `X-XSS-Protection`
  - `Strict-Transport-Security` (HSTS)
  - `Content-Security-Policy`
  - `Referrer-Policy`
  - `Permissions-Policy`
- **No `poweredByHeader`** (hides Next.js fingerprint)
- **Form validation** (client-side) with input sanitization
- **Input length limits** on all form fields
- **XSS prevention** via sanitize helper

---

## 🎨 Features

- ✅ **Hero Banner Slider** — 4 animated slides, auto-play, touch/click controls
- ✅ **Dark / Light Mode** — System default, toggleable
- ✅ **Fully Responsive** — Mobile-first design
- ✅ **SEO Optimized** — Metadata, OpenGraph, Twitter cards, JSON-LD structured data
- ✅ **Framer Motion** — Scroll-triggered animations, stagger effects
- ✅ **Separate content files** — Easy to update without touching components
- ✅ **Security headers** — Production-grade HTTP security
- ✅ **Accessible** — ARIA labels, semantic HTML, keyboard navigation

---

## 🌐 Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### Static Export

```bash
# Add to next.config.js: output: 'export'
npm run build
# Deploy the `out/` folder to any static host
```

---

## 📞 Contact Form Integration

The contact form is ready for backend integration. Update `handleSubmit` in `components/Contact.tsx`:

```typescript
// Replace the setTimeout mock with your API:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(sanitizedData),
});
```

Popular options: **Formspree**, **EmailJS**, **Resend**, or your own API route.

---

## 🏗️ Recommended Next Steps

1. Add real contact form API (`/api/contact` route or Formspree)
2. Replace placeholder phone/email in `content/process.ts`
3. Add Google Analytics (set `NEXT_PUBLIC_GA_ID`)
4. Replace `sitemap.xml` with dynamic generation
5. Add real images for each section
6. Configure your domain in `content/site.ts`

---

*Built for Ecotech Recyclers (OPC) Pvt. Ltd. — Waste to Worth*
