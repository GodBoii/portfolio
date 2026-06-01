import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'

const GH = 'https://github.com/GodBoii'
const PYPI_BADGE = 'https://img.shields.io/pypi/v/mtpx?style=flat-square&color=b600a8&label=PyPI'

type Project = {
  number: string
  name: string
  category: string
  href: string
  description: string
  stack: string[]
  accent: 'magenta' | 'violet' | 'orange'
  badge?: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'AI-OS',
    category: 'Open Source · AI',
    href: `${GH}/AI-OS`,
    description:
      'A from-scratch AI operating system — the runtime that hosts models, agents, memory, and tools behind one coherent interface.',
    stack: ['Python', 'Agents', 'Runtime'],
    accent: 'magenta',
  },
  {
    number: '02',
    name: 'mtpx',
    category: 'PyPI · Protocol',
    href: `${GH}/Model-Tool-protocol-`,
    description:
      'Model Tool Protocol — a published PyPI package (mtpx 0.1.0) defining how language models call tools, services, and other systems safely and predictably.',
    stack: ['Python', 'Protocol', 'PyPI'],
    accent: 'violet',
    badge: PYPI_BADGE,
  },
  {
    number: '03',
    name: 'Polymathic Cognitive Architecture',
    category: 'Research · Architecture',
    href: `${GH}/Polymathic-Cognitive-Architecture-PCA-`,
    description:
      'A polymathic cognitive architecture — structured reasoning, multi-domain context, and self-reflective loops that go beyond single-pass LLM inference.',
    stack: ['Architecture', 'Reasoning', 'Memory'],
    accent: 'magenta',
  },
  {
    number: '04',
    name: 'Agentic Trading',
    category: 'Agents · Finance',
    href: `${GH}/agentic-trading`,
    description:
      'Autonomous trading agents that research, decide, and execute — built on top of the same agent runtime as AI-OS.',
    stack: ['Agents', 'Markets', 'Automation'],
    accent: 'orange',
  },
  {
    number: '05',
    name: 'Cross-Communication Protocol',
    category: 'Protocol · Infra',
    href: `${GH}/Cross-communication-protocol`,
    description:
      'A protocol for systems to talk to systems — a contract layer between agents, services, and external tools that doesn\'t depend on a single vendor.',
    stack: ['Protocol', 'Messaging', 'Infra'],
    accent: 'violet',
  },
  {
    number: '06',
    name: 'Aetheria AI',
    category: 'Product · Web',
    href: `${GH}/Aetheria-ai-website`,
    description:
      'Aetheria — the public face of the stack. A website and product surface for the AI systems built on AI-OS, mtpx, and PCA.',
    stack: ['Web', 'Product', 'AI'],
    accent: 'orange',
  },
]

const ACCENT_GRADIENT: Record<Project['accent'], string> = {
  magenta:
    'radial-gradient(ellipse at top left, rgba(182,0,168,0.35) 0%, rgba(118,33,177,0.15) 50%, transparent 75%)',
  violet:
    'radial-gradient(ellipse at top right, rgba(118,33,177,0.4) 0%, rgba(70,40,180,0.15) 50%, transparent 75%)',
  orange:
    'radial-gradient(ellipse at bottom left, rgba(190,76,0,0.35) 0%, rgba(182,0,168,0.15) 50%, transparent 75%)',
}

const TOTAL = PROJECTS.length

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="relative z-10 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14"
      style={{ background: '#0C0C0C' }}
    >
      <div className="px-5 pt-20 sm:px-8 sm:pt-24 md:px-10 md:pt-32">
        <FadeIn
          delay={0}
          y={20}
          className="mb-6 flex items-center justify-center gap-3 sm:mb-8"
        >
          <span className="block h-px w-8 bg-[#D7E2EA]/30 sm:w-12" />
          <span className="text-[10px] font-light uppercase tracking-[0.4em] text-[#D7E2EA]/60 sm:text-xs">
            Shipped · Open Source
          </span>
          <span className="block h-px w-8 bg-[#D7E2EA]/30 sm:w-12" />
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mb-10 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20"
        >
          Projects
        </FadeIn>
      </div>

      {/*
        The container itself is what scrolls. Height = TOTAL * 100vh.
        Each card sits inside a 100vh wrapper, with the inner motion.div
        sticky to top-24 / md:top-32. Because all stickies share the same
        top offset and the wrappers stack vertically, the next card slides
        up and visually covers the previous one as you scroll — the
        classic "deck of cards" effect.
      */}
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10"
        style={{ height: `${TOTAL * 100}vh` }}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* Tail spacer so the last card has room to fully cover the previous one */}
      <div className="h-10" aria-hidden />
    </section>
  )
}

function ProjectCard({
  project,
  index,
  progress,
}: {
  project: Project
  index: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  // The Nth card (0-indexed) starts pinning at the start of its 100vh slot.
  // It should scale down as the (N+1)th card begins to pin.
  // Section total scroll length = TOTAL viewports. Each card's "active"
  // range is [index/TOTAL, (index+1)/TOTAL].
  const start = index / TOTAL
  const peak = (index + 1) / TOTAL

  // Scale 1 -> ~0.92 as the next card takes over.
  const scale = useTransform(progress, [start, peak], [1, 0.92])
  // A tiny upward translate for the previous card so it visually recedes.
  const y = useTransform(progress, [start, peak], [0, -40])
  // Slight border-radius growth as the card lifts off the stack.
  const radius = useTransform(progress, [start, peak], [40, 60])
  // Shadow grows as the card lifts.
  const shadow = useTransform(
    progress,
    [start, peak],
    [
      '0 20px 50px -10px rgba(0,0,0,0.45)',
      '0 40px 80px -10px rgba(182,0,168,0.25)',
    ],
  )

  return (
    <div className="h-screen w-full">
      <motion.div
        style={{ scale, y, borderRadius: radius, boxShadow: shadow }}
        className="sticky top-24 overflow-hidden border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:top-32 md:p-8"
      >
        {/* Accent background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
          style={{ background: ACCENT_GRADIENT[project.accent] }}
        />

        {/* Top row */}
        <div className="relative z-10 mb-6 flex flex-col items-start justify-between gap-4 md:mb-8 md:flex-row md:items-end">
          <div className="flex items-end gap-4 md:gap-8">
            <div className="hero-heading text-[clamp(3rem,10vw,140px)] font-black leading-none">
              {project.number}
            </div>
            <div className="flex flex-col gap-1 pb-2 md:pb-4">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 md:text-sm">
                {project.category}
              </span>
              <h3 className="hero-heading text-[clamp(1.5rem,3vw,2.5rem)] font-black uppercase leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton
            href={project.href}
            className="self-end md:self-auto"
          />
        </div>

        {/* Body — description + terminal-style stack/code block */}
        <div className="relative z-10 grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-4">
          <div className="md:col-span-2 flex flex-col gap-3 md:gap-4">
            <div
              className="w-full overflow-hidden rounded-[24px] border border-[#D7E2EA]/12 bg-white/[0.03] p-5 sm:rounded-[32px] sm:p-6 md:rounded-[40px] md:p-8"
              style={{ minHeight: 'clamp(220px, 28vw, 380px)' }}
            >
              <p className="text-[clamp(0.95rem,1.6vw,1.15rem)] font-light leading-relaxed text-[#D7E2EA]/85">
                {project.description}
              </p>
              {project.badge && (
                <div className="mt-6">
                  <img
                    src={project.badge}
                    alt="mtpx on PyPI"
                    className="h-5"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
            <div
              className="w-full overflow-hidden rounded-[24px] border border-[#D7E2EA]/12 bg-black/60 p-4 font-mono text-[clamp(0.7rem,1.05vw,0.95rem)] leading-relaxed text-[#D7E2EA]/80 sm:rounded-[32px] sm:p-5 md:rounded-[40px] md:p-6"
              style={{ minHeight: 'clamp(120px, 14vw, 200px)' }}
            >
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#b600a8]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7621b0]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D7E2EA]/30" />
              </div>
              <div className="text-[#b600a8]/90">$</div>
              <div className="break-all">
                git clone {project.href}.git
              </div>
              <div className="text-[#D7E2EA]/40">→ {project.name.toLowerCase()}/</div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-[24px] border border-[#D7E2EA]/12 bg-white/[0.02] p-5 sm:rounded-[32px] sm:p-6 md:col-span-3 md:rounded-[40px] md:p-10"
            style={{ minHeight: 'clamp(290px, 38vw, 570px)' }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA]/75 sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-heading text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.95]">
              {project.name}
            </div>
            <div className="mt-4 h-px w-16 bg-[#D7E2EA]/30" />
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/80 transition-colors hover:text-[#D7E2EA]"
            >
              View on GitHub
              <span className="block h-3 w-3 rotate-[-45deg] border-r border-t border-current" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
