import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  AtSign,
  Phone,
  MessageCircle,
  ArrowUpRight,
  X,
  Copy,
  Check,
} from 'lucide-react'
import FadeIn from './FadeIn'

type ContactModalProps = {
  open: boolean
  onClose: () => void
}

const PHONE_RAW = '9619039912'
const PHONE_DISPLAY = '+91 96190 39912'
const PHONE_TEL = `+91${PHONE_RAW}`
const PHONE_WHATSAPP = `https://wa.me/91${PHONE_RAW}`
const EMAIL = 'prajwalghadge2005@gmail.com'

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/7.15.4.2.15.25/',
    handle: '@7.15.4.2.15.25',
    Icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prajwal-ghadge-44a1a1242/',
    handle: 'Prajwal Ghadge',
    Icon: Linkedin,
  },
  {
    label: 'Threads',
    href: 'https://www.threads.com/@7.15.4.2.15.25',
    handle: '@7.15.4.2.15.25',
    Icon: AtSign,
  },
  {
    label: 'X',
    href: 'https://x.com/Godboiiiiii',
    handle: '@Godboiiiiii',
    Icon: Twitter,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/GodBoii',
    handle: 'GodBoii',
    Icon: Github,
  },
]

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const [copied, setCopied] = useState(false)

  // ESC to close
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Body scroll lock
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Auto-focus close on open
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => closeBtnRef.current?.focus(), 50)
      return () => clearTimeout(t)
    }
  }, [open])

  // Reset copy state when modal closes
  useEffect(() => {
    if (!open) setCopied(false)
  }, [open])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore
    }
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            key="panel"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="modal-scroll relative w-full max-w-5xl overflow-y-auto rounded-3xl border border-[#D7E2EA]/10 bg-[#0C0C0C] shadow-2xl"
            style={{ maxHeight: '90vh' }}
          >
            {/* Brand glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[100px]"
              style={{
                background:
                  'radial-gradient(circle, rgba(182,0,168,0.28) 0%, rgba(118,33,177,0.14) 50%, transparent 70%)',
              }}
            />

            <div className="relative z-10 p-6 sm:p-8 md:p-12">
              {/* Header */}
              <div className="mb-8 flex items-start justify-between gap-4 sm:mb-10">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="block h-px w-8 bg-[#D7E2EA]/30 sm:w-12" />
                    <span className="text-[10px] font-light uppercase tracking-[0.4em] text-[#D7E2EA]/60 sm:text-xs">
                      Get in touch
                    </span>
                    <span className="block h-px w-8 bg-[#D7E2EA]/30 sm:w-12" />
                  </div>
                  <h2
                    id="contact-modal-title"
                    className="hero-heading text-[clamp(2rem,7vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tight"
                  >
                    Let&apos;s connect
                  </h2>
                  <p className="mt-4 max-w-md text-sm font-light text-[#D7E2EA]/60 sm:text-base">
                    Pick a channel — fastest response on email and WhatsApp.
                  </p>
                </div>

                <button
                  ref={closeBtnRef}
                  onClick={onClose}
                  aria-label="Close contact dialog"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D7E2EA]/15 text-[#D7E2EA]/70 transition-all duration-300 hover:scale-110 hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:h-11 sm:w-11"
                >
                  <X className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                </button>
              </div>

              {/* Phone row */}
              <FadeIn delay={0} y={20} className="mb-3">
                <div className="group flex flex-col items-stretch gap-3 rounded-2xl border border-[#D7E2EA]/15 p-5 transition-colors duration-300 hover:border-[#D7E2EA]/35 sm:flex-row sm:items-center sm:gap-5 sm:p-6">
                  <div className="flex flex-1 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.04] text-[#D7E2EA] sm:h-14 sm:w-14">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-light uppercase tracking-[0.35em] text-[#D7E2EA]/50 sm:text-xs">
                        Phone
                      </div>
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="mt-1 block truncate text-lg font-medium text-white transition-colors hover:text-[#D7E2EA] sm:text-2xl"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/80 bg-white/[0.04] px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:flex-none sm:px-5 sm:py-3 sm:text-sm"
                    >
                      <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      Call
                    </a>
                    <a
                      href={PHONE_WHATSAPP}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:flex-none sm:px-5 sm:py-3 sm:text-sm"
                      style={{
                        background:
                          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow:
                          '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                        outline: '2px solid white',
                        outlineOffset: '-3px',
                      }}
                    >
                      <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Email row */}
              <FadeIn delay={0.05} y={20} className="mb-8 sm:mb-10">
                <div className="group flex flex-col items-stretch gap-3 rounded-2xl border border-[#D7E2EA]/15 p-5 transition-colors duration-300 hover:border-[#D7E2EA]/35 sm:flex-row sm:items-center sm:gap-5 sm:p-6">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex flex-1 items-center gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.04] text-[#D7E2EA] sm:h-14 sm:w-14">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-light uppercase tracking-[0.35em] text-[#D7E2EA]/50 sm:text-xs">
                        Email
                      </div>
                      <div className="mt-1 truncate text-base font-medium text-white sm:text-xl">
                        {EMAIL}
                      </div>
                    </div>
                  </a>
                  <button
                    onClick={handleCopy}
                    aria-label="Copy email address"
                    className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-[#D7E2EA]/30 px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 hover:scale-[1.02] hover:border-white hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:self-auto sm:px-5 sm:py-3 sm:text-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </FadeIn>

              {/* Section divider */}
              <div className="mb-6 flex items-center gap-3 sm:mb-8">
                <span className="block h-px flex-1 bg-gradient-to-r from-transparent via-[#D7E2EA]/20 to-transparent" />
                <span className="text-[10px] font-light uppercase tracking-[0.4em] text-[#D7E2EA]/50 sm:text-xs">
                  Socials
                </span>
                <span className="block h-px flex-1 bg-gradient-to-r from-transparent via-[#D7E2EA]/20 to-transparent" />
              </div>

              {/* Social grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-3">
                {SOCIALS.map(({ label, href, handle, Icon }, i) => (
                  <FadeIn key={label} delay={i * 0.05} y={20}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-[#D7E2EA]/15 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-[#D7E2EA]/40 hover:bg-[#D7E2EA]/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:p-6"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute left-0 right-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#B600A8] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                      />
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D7E2EA]/15 text-[#D7E2EA] transition-all duration-300 group-hover:scale-110 group-hover:border-[#D7E2EA]/50 group-hover:text-white sm:h-12 sm:w-12">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-[#D7E2EA]/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white sm:h-5 sm:w-5" />
                      </div>
                      <div className="mt-auto">
                        <div className="text-[10px] font-light uppercase tracking-[0.35em] text-[#D7E2EA]/50 sm:text-xs">
                          {label}
                        </div>
                        <div className="mt-1 truncate text-sm font-medium text-white sm:text-base">
                          {handle}
                        </div>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
