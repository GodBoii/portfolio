import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 25, stiffness: 250, mass: 0.5 })
  const springY = useSpring(y, { damping: 25, stiffness: 250, mass: 0.5 })

  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor="hover"]')
      setHovering(!!interactive)
    }
    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [x, y, visible])

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference md:block"
        style={{
          x: springX,
          y: springY,
          opacity: visible ? 1 : 0,
          scale: hovering ? 0 : 1,
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 mix-blend-difference md:block"
        style={{
          x: springX,
          y: springY,
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: visible ? 1 : 0,
          background: hovering ? 'rgba(255,255,255,0.08)' : 'transparent',
        }}
        transition={{
          width: { duration: 0.25, ease: 'easeOut' },
          height: { duration: 0.25, ease: 'easeOut' },
          opacity: { duration: 0.2 },
        }}
      />
    </>
  )
}
