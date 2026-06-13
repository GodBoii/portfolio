import { useState } from 'react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import ContactModal from './ContactModal'
import Magnet from './Magnet'
import PortraitTransition from './PortraitTransition'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Build', href: '#price' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: 'https://github.com/GodBoii' },
]

export default function HeroSection() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <section
      className="relative flex h-screen w-full flex-col overflow-x-clip"
      style={{ overflowX: 'clip' }}
    >
      {/* Ambient glow behind portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px] sm:bottom-[-10%] sm:top-auto sm:h-[70vh] sm:w-[70vh] sm:translate-y-0"
        style={{
          background:
            'radial-gradient(circle, rgba(182,0,168,0.35) 0%, rgba(118,33,177,0.18) 40%, transparent 70%)',
        }}
      />

      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        duration={0.7}
        className="relative z-20 flex w-full items-center px-6 pt-6 md:px-10 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex-1 text-center text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 first:text-left last:text-right hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn
        as="div"
        delay={0.15}
        y={40}
        duration={0.7}
        className="relative z-10 mt-12 w-full px-3 sm:mt-16 md:mt-20"
      >
        <h1 className="hero-heading font-black uppercase leading-[0.82] tracking-tight">
          <span
            className="block text-[clamp(1.6rem,5.5vw,5.5rem)] font-medium text-[#D7E2EA]/60"
            style={{ letterSpacing: '-0.02em' }}
          >
            Hi, i&apos;m
          </span>
          <span
            className="mt-1 block w-full whitespace-nowrap"
            style={{ fontSize: 'clamp(3.5rem, 14vw, 16rem)' }}
          >
            prajwal
          </span>
          <span
            className="mt-3 block text-[clamp(0.7rem,1.4vw,1.1rem)] font-light uppercase tracking-[0.35em] text-[#D7E2EA]/55 sm:mt-4"
          >
            Building AI Systems &amp; Agentic Infrastructure
          </span>
        </h1>
      </FadeIn>

      {/* Portrait with scroll-driven cross-fade transition */}
      <FadeIn
        delay={0.6}
        y={30}
        duration={0.9}
        className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-x-[-50%] sm:translate-y-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet padding={150} strength={3} className="pointer-events-auto">
          <div className="relative aspect-square w-full">
            {/* Backlit glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 scale-110 blur-2xl"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(182,0,168,0.35) 0%, rgba(190,76,0,0.18) 40%, transparent 70%)',
              }}
            />
            <div
              className="relative h-full w-full"
              style={{
                filter:
                  'drop-shadow(0 25px 50px rgba(0,0,0,0.55)) drop-shadow(0 0 80px rgba(182,0,168,0.15))',
              }}
            >
              <PortraitTransition className="absolute inset-0 h-full w-full" />
            </div>
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="relative z-20 mt-auto flex w-full items-end justify-between gap-4 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          duration={0.7}
          className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
        >
          AI systems &amp; agentic infrastructure — protocols, models, and tools that actually ship
        </FadeIn>
        <FadeIn delay={0.5} y={20} duration={0.7}>
          <ContactButton onClick={() => setContactOpen(true)} />
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <FadeIn
        delay={0.9}
        y={10}
        duration={0.7}
        className="absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 text-[10px] font-light uppercase tracking-[0.3em] text-[#D7E2EA]/50 md:flex md:flex-col md:items-center md:gap-2"
      >
        <span>Scroll</span>
        <span className="block h-8 w-px animate-pulse bg-[#D7E2EA]/40" />
      </FadeIn>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  )
}
