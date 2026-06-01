# Prajwal — 3D Creator Portfolio

A dark, motion-rich single-page portfolio for a 3D creator. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React. Font is Kanit (Google Fonts).

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS 3** for styling
- **Framer Motion 12** for animations (scroll progress, sticky card stacking, fade-ins, scroll-driven text reveal, magnetic hover)
- **Lucide React** for icons

## Sections

1. **Hero** — full-viewport with custom cursor, scroll progress bar, ambient glow, magnetic portrait, animated heading
2. **Marquee** — two rows of motion GIFs scrolling in opposite directions based on page scroll
3. **About** — centered, with character-by-character scroll-revealed paragraph and decorative 3D images
4. **Services** — white section with hover-animated service list
5. **Projects** — three sticky-stacking project cards (deck-of-cards effect) with scale + lift
6. **Footer** — "Available for work" indicator, mailto, social links, back-to-top

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
├── App.tsx                      # composition root + cursor hiding
├── main.tsx                     # React entry
├── index.css                    # global styles, scrollbar, hero-heading gradient
└── components/
    ├── HeroSection.tsx
    ├── MarqueeSection.tsx
    ├── AboutSection.tsx
    ├── ServicesSection.tsx
    ├── ProjectsSection.tsx
    ├── Footer.tsx
    ├── FadeIn.tsx               # whileInView fade-in wrapper
    ├── Magnet.tsx               # mouse-following magnetic hover
    ├── AnimatedText.tsx         # per-character scroll-reveal text
    ├── ContactButton.tsx        # gradient pill button
    ├── LiveProjectButton.tsx    # ghost outline pill button
    ├── CustomCursor.tsx         # mix-blend-difference cursor
    ├── ScrollProgress.tsx       # top scroll bar
    ├── Preloader.tsx            # splash with progress counter
    └── Noise.tsx                # filmic grain overlay

public/
└── Godboy.png                   # transparent portrait (background removed)
```

## Notes

- Portrait is loaded from `/public/Godboy.png` (background already removed).
- External assets (motion GIFs, 3D decorative images, project images) are loaded from `motionsites.ai`, `images.higgs.ai`, and Figma-hosted URLs as specified in the design brief.
