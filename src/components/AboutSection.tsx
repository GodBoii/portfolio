import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'

const ABOUT_TEXT =
  "I design and build AI systems, agentic infrastructure, and the protocols that hold them together — from a Model Tool Protocol (mtpx) on PyPI to a Polymathic Cognitive Architecture and an AI-OS. I ship end-to-end: research, architecture, code, and tooling. If you're working on agents, LLM infra, or anything where models need to talk to tools, systems, and each other — let's build."

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative 3D images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] left-[1%] z-0 w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full"
        />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] z-0 w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full"
        />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] right-[1%] z-0 w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full"
        />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] z-0 w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full"
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center">
        <FadeIn
          delay={0}
          y={20}
          className="mb-8 inline-flex items-center gap-3 sm:mb-10"
        >
          <span className="block h-px w-8 bg-[#D7E2EA]/40 sm:w-12" />
          <span className="text-[10px] font-light uppercase tracking-[0.4em] text-[#D7E2EA]/60 sm:text-xs">
            About
          </span>
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
        >
          About me
        </FadeIn>

        <div className="mt-10 flex max-w-[560px] flex-col items-center gap-16 sm:mt-14 sm:gap-20 md:mt-16 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />
          <FadeIn delay={0.4} y={20}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70 transition-colors hover:text-[#D7E2EA]"
            >
              <span className="border-b border-[#D7E2EA]/30 pb-0.5">Or reach out directly</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
