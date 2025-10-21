# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

<div align="center">

<img alt="DartStream" src="https://dummyimage.com/1200x280/42489E/ffffff&text=DartStream+Web" />

# DartStream Web (Nuxt 3)

Responsive marketing site built with Nuxt 3 + Tailwind CSS. SVG‑driven visuals, pricing comparisons, and a polished mobile experience.

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-Internal-blue.svg)](#license)

</div>

## 🚀 Live Demo

https://dart-stream-6gugqz9rf-minkha-afks-projects.vercel.app/

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Mobile vs Desktop](#mobile-vs-desktop)
- [Key Components](#key-components)
- [Navigation & Links](#navigation--links)
- [SVG Usage](#svg-usage)
- [Tailwind Conventions](#tailwind-conventions)
- [Pricing Page](#pricing-page)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features
- Nuxt 3 (Vue 3 + Vite) + Tailwind CSS
- SVG components (import `.svg` directly)
- Reusable UI (buttons, pricing cards, section titles)
- Mobile-first behavior with scroll-snap sliders
- Consistent containers (`max-w-7xl mx-auto px-6`)

## Tech Stack
- Nuxt 3, Vue 3, Vite
- Tailwind CSS
- Inline SVG components

## Screenshots
> Add screenshots or GIFs here (desktop + mobile).

## Project Structure
```
components/
	common/ (buttons, cards, titles)
	layout/ (TheHeader, TheFooter)
	sections/home/ (Hero, Services, Partners, HowItWorks, PricingSection, CtaBanner, FinalCta)
pages/ (index, pricing, faq, signin, thankyou,coming-soon)
assets/icons (svg icons)
assets/images (dashboard)
```

## Getting Started
Install dependencies and run dev (PowerShell):
```powershell
npm install; npm run dev
# or
pnpm install; pnpm dev
# or
yarn install; yarn dev
# or
bun install; bun run dev
```
Build & preview:
```powershell
npm run build; npm run preview
```

## Scripts
- `dev` – start dev server at http://localhost:3000
- `build` – production build
- `preview` – preview built app locally

## Mobile vs Desktop
We use responsive utilities and, where needed, CSS fallbacks to control what renders on each form factor.

- Utilities: `hidden md:block`, `md:hidden`, `md:flex`
- Fallback CSS (in some components) to enforce behavior, e.g.: `.desktop-finalcta { display: none !important; }` within `@media (max-width: 767px)`.

Special cases:
- Header: hamburger (ham.svg) on mobile with vertical menu; full nav on desktop.
- FinalCta: desktop-only; hidden on mobile (Tailwind + CSS fallback).
- CtaBanner: mobile variant mimics FinalCta; desktop uses a light card.
- Services: desktop uses `ServiceCard.vue`; mobile uses `ServiceCardMobile.vue` (first card highlighted).
- HowItWorks / Partners: decorative SVGs hidden on mobile.
- Pricing cards: horizontal scroll-snap on mobile; 3-card row on desktop.

## Key Components
- `components/layout/TheHeader.vue` – fixed header, scroll handling, mobile menu.
- `components/layout/TheFooter.vue` – stacked mobile layout, multi-column desktop.
- `components/sections/home/HeroSection.vue` – title + optional SVGs; mobile uses text replacement for Dart.
- `components/sections/home/ServicesSection.vue` – desktop/mobile split with dedicated components.
- `components/sections/home/PricingSection.vue` – mobile card slider on home page.
- `pages/pricing.vue` – full pricing with a mobile plan toggle + desktop comparison table.

## Navigation & Links
- Header navigation uses NuxtLink to route between pages:
	- Home → `/`
	- Pricing → `/pricing`
	- Docs → `/thankyou`
	- FAQ → `/faq`
- Primary CTAs (Cloud / Open Source buttons, and CTA Banner buttons) link to the sign-in page: `/signin`.
- The "View full price comparison" action routes to the full pricing page: `/pricing`.
- Footer contains link groups for Company and Resources. Some entries are placeholders (`#`) you can wire up to real routes or external URLs.

## SVG Usage
```vue
<script setup>
import WhitecloudSvg from '~/assets/icons/whitecloud.svg'
</script>
<template>
	<WhitecloudSvg class="w-6 h-6" />
</template>
```
Tips: ensure color contrast; size with `w-5 h-5`/`w-6 h-6`; use `flex-shrink-0` in flex rows.

## Tailwind Conventions
- Brand color: `#42489E`
- Container: `max-w-7xl mx-auto px-6`
- Responsive typography: e.g., `text-3xl md:text-5xl`

## Pricing Page
- Desktop: full comparison table
- Mobile: plan toggle (Open Source / Cloud) + compact feature list with ticks
- Cards: swipeable on mobile (`overflow-x-auto`, `snap-x snap-mandatory`)

## Troubleshooting
- Desktop block visible on mobile: verify responsive classes and CSS fallbacks; hard reload.
- SVG not visible: check `fill`/`stroke` vs background; try `w-6 h-6`.
- Scroll-snap: child width fixed (`w-[320px]`), parent has `overflow-x-auto` + `snap-x snap-mandatory`.
- Port in use: change dev port or stop overlapping process.

## 📝 Notes on Tradeoffs

To stay within the recommended 6-8 hour timebox, I prioritized a clean component architecture and achieving responsiveness. With additional time, I would have implemented transition animations for interactive elements like the mobile menu to enhance the user experience.

## Contributing
1. Branch from `main`
2. Keep PRs focused
3. Preserve desktop when adding mobile changes
4. Ensure lint/build passes

## License
Internal/demo use.

---

Detailed docs live in [`docs/PROJECT_README.md`](./docs/PROJECT_README.md).
