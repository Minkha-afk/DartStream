# DartStream Web (Nuxt 3)

An opinionated Nuxt 3 + Tailwind CSS app powering the DartStream marketing site with responsive pages, SVG-driven visuals, and consistent design across desktop and mobile.

## Contents
- Features
- Tech Stack
- Project Structure
- Getting Started
- NPM Scripts
- Development Notes
- Mobile vs Desktop Behavior
- Key Components and Sections
- SVG Usage
- Tailwind Conventions
- Pricing Page Responsiveness
- Troubleshooting
- Contributing

## ✨ Features
- Nuxt 3 (Vue 3 + Vite) with auto-imports and SFCs
- Tailwind CSS styling with responsive design and custom brand color `#42489E`
- SVG-as-components via Vite; import `.svg` directly into Vue SFCs
- Reusable UI components (CommonAppButton, PricingCard, SectionTitle, Service cards)
- Mobile UX patterns: scroll-snap sliders, conditional rendering per breakpoint
- Consistent layout containers (`max-w-7xl`, `px-6`)

## 🧰 Tech Stack
- Framework: Nuxt 3 (Vue 3)
- Bundler: Vite
- Styles: Tailwind CSS
- Icons/Graphics: Inline SVG components (via Vite SVG handling)

## 📁 Project Structure (high level)
```
Stream/
  app/
    app.vue
  assets/
    icons/*.svg
    images/Dashboard1.png
  components/
    common/
      CommonAppButton.vue
      PricingCard.vue
      ServiceCard.vue
      ServiceCardMobile.vue
      SectionTitle.vue
    layout/
      TheHeader.vue
      TheFooter.vue
    sections/home/
      HeroSection.vue
      ServicesSection.vue
      PartnersSection.vue
      HowItWorksSection.vue
      PricingSection.vue
      CtaBanner.vue
      FinalCta.vue
  pages/
    index.vue
    pricing.vue
    faq.vue
    signin.vue
    thankyou.vue
    coming-soon
  nuxt.config.ts
  package.json
  tailwind config (if present)
```

## 🚀 Getting Started
Install dependencies:
```bash
# npm
npm install
# pnpm
pnpm install
# yarn
yarn install
# bun
bun install
```
Run dev server (http://localhost:3000):
```bash
# npm
npm run dev
# pnpm
pnpm dev
# yarn
yarn dev
# bun
bun run dev
```
Build for production:
```bash
# npm
npm run build
# pnpm
pnpm build
# yarn
yarn build
# bun
bun run build
```
Preview production build:
```bash
# npm
npm run preview
# pnpm
pnpm preview
# yarn
yarn preview
# bun
bun run preview
```

## 📜 NPM Scripts
- `dev`: start dev server
- `build`: production build
- `preview`: preview built app locally

## 🧑‍💻 Development Notes
- Always use the container pattern: `max-w-7xl mx-auto px-6` for consistent page gutters.
- Prefer responsive utilities (`md:`/`lg:`) to add behavior without changing desktop defaults.
- When adjusting mobile layout, do not hamper desktop: add mobile-specific overrides and keep desktop intact.

## 📱 Mobile vs Desktop Behavior
Some sections render different markup/styles per breakpoint. We use both Tailwind classes and, where necessary, CSS fallbacks.

- Utilities: `hidden md:block`, `md:hidden`, `md:flex`.
- CSS fallbacks for enforcement (used in some components):
  - Example: `.desktop-finalcta { display: none !important; }` inside `@media (max-width: 767px)`.

Special handling:
- Header: hamburger (`ham.svg`) on mobile toggles a vertical menu; desktop shows full nav + CTA.
- FinalCta: desktop-only; hidden on mobile via Tailwind + CSS fallback.
- CtaBanner: dedicated mobile block that mimics FinalCta styling; desktop uses a light card.
- Services: desktop uses `ServiceCard.vue` (original design); mobile uses `ServiceCardMobile.vue` with the first card highlighted.
- Partners / How It Works: decorative SVGs are hidden on mobile.
- Pricing cards: scroll-snap slider on mobile; 3-card row on desktop.

## 🔑 Key Components & Sections
- `components/layout/TheHeader.vue`: scroll-aware header, desktop nav + mobile hamburger.
- `components/layout/TheFooter.vue`: mobile-first stacked layout; desktop multi-column.
- `components/sections/home/HeroSection.vue`: text + optional SVGs; hides decorative icons on mobile; replaces Dart SVG with text on small screens.
- `components/sections/home/ServicesSection.vue`: splits mobile/desktop; imports `ServiceCardMobile.vue` for mobile.
- `components/sections/home/PricingSection.vue`: includes mobile slider for cards (Home).
- `pages/pricing.vue`: dedicated pricing page with mobile plan toggle list and a desktop comparison table.

## 🖼️ SVG Usage
Import and use SVGs as components:
```vue
<script setup>
import WhitecloudSvg from '~/assets/icons/whitecloud.svg'
</script>
<template>
  <WhitecloudSvg class="w-6 h-6" />
</template>
```
Tips:
- Control sizing via Tailwind (`w-5 h-5`, `w-6 h-6`).
- Ensure icon contrast on colored backgrounds (adjust `fill`/`stroke` if needed).
- Use `flex-shrink-0` to prevent icons from compressing in tight flex rows.

## 🎨 Tailwind Conventions
- Primary brand color: `#42489E` (`text-[#42489E]`, `outline-[#42489E]`).
- Container: `max-w-7xl mx-auto px-6`.
- Typography adjusts by breakpoint (e.g., `text-3xl md:text-5xl`).

## 💸 Pricing Page Responsiveness
- Desktop: full comparison table remains intact.
- Mobile: table is replaced by a stacked plan view with a toggle (Open Source / Cloud) and a compact feature list with ticks.
- Cards: horizontally swipeable (`overflow-x-auto`, `snap-x snap-mandatory`), with static pagination dots.

## 🧪 Troubleshooting
- Desktop block visible on mobile: verify `hidden md:block` and any component CSS fallbacks; perform a hard reload.
- SVG invisible: check `fill`/`stroke` vs background; bump size to `w-6 h-6`.
- Scroll-snap not working: ensure child widths are fixed (`w-[320px]`) and parent has `overflow-x-auto` + `snap-x snap-mandatory`.
- Port in use: change dev port or stop the conflicting process.

## 🤝 Contributing
1. Branch from `main`.
2. Keep PRs focused (one feature/fix per PR).
3. Preserve desktop behavior when adding mobile changes.
4. Verify lint/build passes before opening a PR.

## 📄 License
Provided as-is for internal/demo usage.
