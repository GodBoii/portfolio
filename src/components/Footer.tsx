import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import { Mail, Instagram, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/GodBoii', Icon: Github },
  { label: 'PyPI', href: 'https://pypi.org/project/mtpx/0.1.0/', Icon: ArrowUpRight },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'Twitter', href: '#', Icon: Twitter },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden px-5 pb-10 pt-24 sm:px-8 sm:pt-32 md:px-10 md:pt-40"
      style={{ background: '#0C0C0C' }}
    >
      {/* Big CTA */}
      <div className="mx-auto max-w-6xl">
        <FadeIn
          delay={0}
          y={40}
          className="mb-10 flex flex-col items-center text-center"
        >
          <h2 className="hero-heading text-[clamp(2.75rem,11vw,150px)] font-black uppercase leading-[0.95] tracking-tight">
            Let&apos;s build<br />the future
          </h2>
        </FadeIn>

        <FadeIn
          delay={0.15}
          y={20}
          className="mb-16 flex flex-col items-center justify-center gap-4 sm:mb-20 md:mb-24"
        >
          <p className="max-w-xl text-center text-[clamp(0.9rem,1.6vw,1.15rem)] font-light leading-relaxed text-[#D7E2EA]/70">
            Building an AI system, an agent, or a protocol? Want to talk shop, or just want to say hi? My inbox is always open.
          </p>
          <a
            href="mailto:prajwalghadge2005@gmail.com"
            className="group inline-flex items-center gap-2 text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:text-white sm:text-lg"
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="border-b border-[#D7E2EA]/40 pb-0.5 transition-colors group-hover:border-white">
              prajwalghadge2005@gmail.com
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <ContactButton className="mt-2" />
        </FadeIn>

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-[#D7E2EA]/15 to-transparent" />

        {/* Bottom row */}
        <FadeIn
          delay={0.2}
          y={15}
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div className="flex items-center gap-3 text-xs font-light uppercase tracking-[0.25em] text-[#D7E2EA]/50 sm:text-sm">
            <span>© {new Date().getFullYear()}</span>
            <span className="h-1 w-1 rounded-full bg-[#D7E2EA]/30" />
            <span>Built in the open</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#D7E2EA]/15 text-[#D7E2EA]/70 transition-all duration-300 hover:scale-110 hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/[0.06] hover:text-white sm:h-11 sm:w-11"
              >
                <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              </a>
            ))}
          </div>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            className="group inline-flex items-center gap-2 text-xs font-light uppercase tracking-[0.25em] text-[#D7E2EA]/50 transition-colors hover:text-[#D7E2EA] sm:text-sm"
          >
            <span>Back to top</span>
            <span className="block h-3 w-3 rotate-[-45deg] border-r border-t border-current transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </FadeIn>
      </div>

      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 -z-0 h-96 w-[80vw] max-w-3xl -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(182,0,168,0.25) 0%, rgba(118,33,177,0.12) 50%, transparent 70%)',
        }}
      />
    </footer>
  )
}
