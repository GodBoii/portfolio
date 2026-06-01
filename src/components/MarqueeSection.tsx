import { useEffect, useRef, useState } from 'react'

const ALL_GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const ROW_1 = ALL_GIFS.slice(0, 11)
const ROW_2 = ALL_GIFS.slice(11)

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
          Selected works · 2024 — 2026
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
          {[...ROW_1, ...ROW_1, ...ROW_1].map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(182,0,168,0.25)]"
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
          {[...ROW_2, ...ROW_2, ...ROW_2].map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(118,33,177,0.25)]"
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
