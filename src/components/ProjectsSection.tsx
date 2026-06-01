import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'

const PROJECTS = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
]

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
            Recent work
          </span>
          <span className="block h-px w-8 bg-[#D7E2EA]/30 sm:w-12" />
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading mb-10 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20"
        >
          Project
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

type Project = (typeof PROJECTS)[number]

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
        {/* Top row */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:mb-8 md:flex-row md:items-end">
          <div className="flex items-end gap-4 md:gap-8">
            <div className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#D7E2EA]">
              {project.number}
            </div>
            <div className="flex flex-col gap-1 pb-2 md:pb-4">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 md:text-sm">
                {project.category}
              </span>
              <h3 className="text-[clamp(1.25rem,2.5vw,2.25rem)] font-medium uppercase leading-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton className="self-end md:self-auto" />
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-4">
          <div className="flex flex-col gap-3 md:col-span-2 md:gap-4">
            <div
              className="group/img w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={project.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
            </div>
            <div
              className="group/img w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={project.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
            </div>
          </div>
          <div
            className="group/img overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] md:col-span-3"
            style={{ height: 'clamp(290px, 38vw, 570px)' }}
          >
            <img
              src={project.col2Img}
              alt={project.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
