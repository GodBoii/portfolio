import FadeIn from './FadeIn'
import { Github, Star, GitFork, ExternalLink } from 'lucide-react'

const GH = 'https://github.com/GodBoii'

type Repo = {
  name: string
  href: string
  description: string
  language?: string
  languageColor?: string
  pinned?: boolean
}

const REPOS: Repo[] = [
  {
    name: 'AI-OS',
    href: `${GH}/AI-OS`,
    description: 'A from-scratch AI operating system — runtime, agents, memory, tools.',
    language: 'Python',
    languageColor: '#3572A5',
    pinned: true,
  },
  {
    name: 'AI-OS-website',
    href: `${GH}/AI-OS-website`,
    description: 'The website for AI-OS — landing page, docs surface, and product front door.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    pinned: true,
  },
  {
    name: 'MTP-Model-Tools-Protocol-',
    href: `${GH}/MTP-Model-Tools-Protocol-`,
    description: 'Model Tools Protocol (MTPX) — agent API, docs, and PyPI package for tool-using models.',
    language: 'Python',
    languageColor: '#3572A5',
    pinned: true,
  },
  {
    name: 'Polymathic-Cognitive-Architecture-PCA-',
    href: `${GH}/Polymathic-Cognitive-Architecture-PCA-`,
    description: 'Polymathic Cognitive Architecture — structured reasoning beyond single-pass LLMs.',
    pinned: true,
  },
  {
    name: 'agentic-trading',
    href: `${GH}/agentic-trading`,
    description: 'Autonomous trading agents — research, decide, execute.',
    pinned: true,
  },
  {
    name: 'Cross-communication-protocol',
    href: `${GH}/Cross-communication-protocol`,
    description: 'Cross-Communication Protocol — agents and services that talk to each other.',
    pinned: true,
  },
  {
    name: 'Aetheria-ai-website',
    href: `${GH}/Aetheria-ai-website`,
    description: 'Aetheria AI — the public face of the stack.',
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    name: 'Best',
    href: `${GH}/Best`,
    description: 'A curated collection of what i consider the best of the stack.',
  },
]

export default function OpenSourceSection() {
  return (
    <section
      id="github"
      className="relative w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn
          delay={0}
          y={20}
          className="mb-6 flex items-center justify-center gap-3 sm:mb-8"
        >
          <span className="block h-px w-8 bg-[#D7E2EA]/30 sm:w-12" />
          <span className="text-[10px] font-light uppercase tracking-[0.4em] text-[#D7E2EA]/60 sm:text-xs">
            Open Source
          </span>
          <span className="block h-px w-8 bg-[#D7E2EA]/30 sm:w-12" />
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mb-6 text-center text-[clamp(2.75rem,10vw,140px)] font-black uppercase leading-[0.95] tracking-tight"
        >
          GitHub
        </FadeIn>
        <FadeIn
          delay={0.1}
          y={20}
          className="mb-14 flex justify-center sm:mb-20"
        >
          <a
            href={GH}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-3 text-[clamp(0.9rem,1.6vw,1.15rem)] font-light text-[#D7E2EA]/75 transition-colors hover:text-[#D7E2EA]"
          >
            <Github className="h-5 w-5" />
            <span className="border-b border-[#D7E2EA]/30 pb-0.5 transition-colors group-hover:border-[#D7E2EA]">
              github.com/GodBoii
            </span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REPOS.map((repo, i) => (
            <FadeIn
              key={repo.name}
              delay={i * 0.05}
              y={24}
              className="group relative h-full"
            >
              <a
                href={repo.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-full flex-col rounded-2xl border border-[#D7E2EA]/12 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D7E2EA]/40 hover:bg-white/[0.04] sm:p-6"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <Github className="h-4 w-4 shrink-0 text-[#D7E2EA]/70" />
                    <h3 className="truncate text-base font-semibold text-[#D7E2EA]">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-[#D7E2EA]/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D7E2EA]/80" />
                </div>
                <p className="mb-5 text-sm font-light leading-relaxed text-[#D7E2EA]/65">
                  {repo.description}
                </p>
                <div className="mt-auto flex items-center gap-4 text-xs font-light text-[#D7E2EA]/55">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: repo.languageColor ?? '#D7E2EA' }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" />
                    <span>Star</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" />
                    <span>Fork</span>
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
