import FadeIn from './FadeIn'

const SERVICES = [
  {
    number: '01',
    name: 'AI Systems & Agents',
    description:
      'Designing and shipping agentic systems end-to-end — reasoning loops, tool use, memory, and orchestration. From solo agents to multi-agent swarms that actually coordinate.',
  },
  {
    number: '02',
    name: 'Protocol Design',
    description:
      'Specifying and implementing the contracts between models, tools, and services — Model Tool Protocol (mtpx), cross-system communication, and message-passing standards.',
  },
  {
    number: '03',
    name: 'Cognitive Architecture',
    description:
      'Building the structural layer above raw LLMs: Polymathic Cognitive Architecture, context graphs, planning hierarchies, and self-reflective loops.',
  },
  {
    number: '04',
    name: 'AI Tooling & SDKs',
    description:
      'Python packages, CLIs, and developer tooling that make AI systems usable — clean APIs, sensible defaults, and batteries-included examples.',
  },
  {
    number: '05',
    name: 'Open Source',
    description:
      'Everything ships open. Public repos at github.com/GodBoii for AI-OS, mtpx, PCA, agentic trading, and the protocols that connect them.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="relative w-full rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        delay={0}
        y={20}
        className="mb-6 flex items-center justify-center gap-3 sm:mb-8"
      >
        <span className="block h-px w-8 bg-[#0C0C0C]/30 sm:w-12" />
        <span className="text-[10px] font-light uppercase tracking-[0.4em] text-[#0C0C0C]/60 sm:text-xs">
          What i build
        </span>
        <span className="block h-px w-8 bg-[#0C0C0C]/30 sm:w-12" />
      </FadeIn>
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
      >
        Services
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="group relative border-b border-[#0C0C0C]/[0.15] py-8 transition-all duration-500 first:border-t hover:px-4 sm:py-10 md:py-12 md:hover:px-8"
          >
            <div className="pointer-events-none absolute inset-0 -z-0 origin-left scale-x-0 bg-gradient-to-r from-[#0C0C0C]/[0.04] via-[#0C0C0C]/[0.02] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <div className="relative z-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-10">
              <div className="shrink-0 text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C] transition-transform duration-500 group-hover:translate-x-2">
                {service.number}
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight text-[#0C0C0C]">
                  {service.name}
                </h3>
                <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C]/60">
                  {service.description}
                </p>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center self-center text-[#0C0C0C]/30 transition-all duration-500 group-hover:translate-x-0 group-hover:text-[#0C0C0C] md:flex">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
