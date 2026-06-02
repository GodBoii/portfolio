import { useEffect, useRef, useState } from 'react'

type Tile =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string }

// Real project assets — replaces stock motionsites.ai GIFs
const TILES: Tile[] = [
  { type: 'video', src: '/MTP-website.mp4' },
  { type: 'image', src: '/aetheria-ai-chatUI.png', alt: 'Aetheria AI chat UI' },
  { type: 'video', src: '/agentic-trading.mp4' },
  { type: 'video', src: '/aehteriaai-website.mp4' },
  { type: 'image', src: '/aetheria-ai-login.png', alt: 'Aetheria AI login' },
  { type: 'video', src: '/mtp-CLI.mp4' },
  { type: 'video', src: '/aehteriai-ppt-website.mp4' },
]

// Split tiles across two rows. With 7 tiles: 4 on row 1, 3 on row 2.
const ROW_1 = TILES.slice(0, 4)
const ROW_2 = TILES.slice(4)

const ROW_CLASSES =
  'h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover transition-transform duration-500'

function Tile({ tile, hoverShadow }: { tile: Tile; hoverShadow: string }) {
  if (tile.type === 'video') {
    return (
      <video
        src={tile.src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`${ROW_CLASSES} hover:scale-[1.02] ${hoverShadow}`}
      />
    )
  }
  return (
    <img
      src={tile.src}
      alt={tile.alt}
      loading="lazy"
      className={`${ROW_CLASSES} hover:scale-[1.02] ${hoverShadow}`}
    />
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(value)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden pt-24 pb-10 sm:pt-32 md:pt-40"
      style={{ background: '#0C0C0C' }}
    >
      {/* Section eyebrow */}
      <div className="mb-8 flex items-center gap-4 px-5 sm:mb-10 sm:px-8 md:mb-12 md:px-10">
        <span className="block h-px w-10 bg-[#D7E2EA]/30 sm:w-16" />
        <span className="text-[10px] font-light uppercase tracking-[0.4em] text-[#D7E2EA]/50 sm:text-xs">
          Open Source · AI · Agents · Protocols · 2024 — 2026
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div
          className="flex w-max gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {[...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1].map((tile, i) => (
            <Tile
              key={`r1-${i}`}
              tile={tile}
              hoverShadow="hover:shadow-[0_20px_60px_rgba(182,0,168,0.25)]"
            />
          ))}
        </div>

        <div
          className="flex w-max gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {[...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2].map((tile, i) => (
            <Tile
              key={`r2-${i}`}
              tile={tile}
              hoverShadow="hover:shadow-[0_20px_60px_rgba(118,33,177,0.25)]"
            />
          ))}
        </div>
      </div>

      {/* Edge fade masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40 md:w-56"
        style={{
          background:
            'linear-gradient(90deg, #0C0C0C 0%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40 md:w-56"
        style={{
          background:
            'linear-gradient(270deg, #0C0C0C 0%, transparent 100%)',
        }}
      />
    </section>
  )
}
