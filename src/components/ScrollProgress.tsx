import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.2,
  })

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, #18011F 0%, #B600A8 35%, #7621B0 70%, #BE4C00 100%)',
      }}
    />
  )
}
