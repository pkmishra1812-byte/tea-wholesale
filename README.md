# Golden Leaf Tea Co. — Website

Premium tea wholesale website built with **React 18 + Tailwind CSS v3 + React Router v6**.

---

## 📁 Folder Structure

```
tea-wholesale/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx        ← Sticky nav, mobile drawer, scroll-aware
│   │   │   ├── Footer.jsx        ← Full footer with links & contact
│   │   │   └── Layout.jsx        ← Wraps every page (Header + Outlet + Footer)
│   │   ├── home/
│   │   │   ├── HeroBanner.jsx    ← Auto-sliding hero with CTA
│   │   │   ├── FeaturesStrip.jsx ← 4-column feature highlights
│   │   │   ├── TeaCategories.jsx ← 6-card tea collection grid
│   │   │   ├── StatsSection.jsx  ← Dark stats strip
│   │   │   ├── Testimonials.jsx  ← 3 client quotes
│   │   │   └── CTABanner.jsx     ← Wholesale call-to-action
│   │   ├── shared/
│   │   │   ├── PageHero.jsx      ← Reusable page hero for inner pages
│   │   │   └── ComingSoon.jsx    ← Placeholder for unbuilt pages
│   │   └── ui/                   ← (empty) Put reusable UI atoms here
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── OurCompanyPage.jsx
│   │   ├── SustainabilityPage.jsx
│   │   ├── OurOfferingPage.jsx
│   │   ├── WholesalePage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── NewsPage.jsx
│   │   ├── CareersPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── PoliciesPage.jsx
│   │   ├── FAQPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── hooks/
│   │   └── useScrolled.js        ← Detects scroll position for sticky header
│   ├── context/                  ← (empty) Add React context/providers here
│   ├── data/
│   │   ├── navigation.js         ← All nav links & site config
│   │   └── homeData.js           ← Hero slides, categories, stats, testimonials
│   ├── assets/
│   │   ├── images/               ← Add product/hero images here
│   │   └── icons/                ← SVG icons
│   ├── styles/
│   │   └── index.css             ← Global styles, Tailwind directives, custom classes
│   ├── utils/                    ← (empty) Helper functions
│   ├── App.jsx                   ← Route definitions
│   └── index.js                  ← React entry point
├── tailwind.config.js            ← Custom colors, fonts, animations
├── postcss.config.js
└── package.json
```

---

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

---

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `tea-700` | Warm brown | Primary brand color |
| `forest-600` | Deep green | Secondary / sustainability |
| `cream` | Off-white `#faf6ef` | Background |
| `charcoal` | Dark `#1c1a17` | Text / dark sections |
| Font Display | Playfair Display | Headings |
| Font Body | Lato | Body text |
| Font Accent | Cormorant Garamond | Italic subtitles |

---

## 📌 Navigation Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/our-company` | Our Company |
| `/sustainability` | Sustainability |
| `/our-offering` | Our Offering |
| `/wholesale` | Wholesale |
| `/blog` | Blog |
| `/news` | News |
| `/careers` | Careers |
| `/contact` | Contact Us |
| `/policies` | Policies |
| `/faq` | FAQ |

---

## 📝 Next Steps

1. Replace placeholder emoji cards in `TeaCategories.jsx` with real product images
2. Build out each inner page by replacing `<ComingSoon />` with real content
3. Add cart/e-commerce logic to the `🛒` icon in `Header.jsx`
4. Connect a CMS (Contentful / Sanity) for Blog & News pages
5. Add a contact form in `ContactPage.jsx` with API integration
