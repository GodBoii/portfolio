import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Preloader() {
  const [done, setDone] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 1400
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setCount(Math.floor(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 250)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: '#0C0C0C' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="hero-heading text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-none tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Prajwal
            </motion.div>
            <div className="flex w-48 flex-col items-center gap-3">
              <div className="h-px w-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full origin-left bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: count / 100 }}
                  transition={{ ease: 'linear', duration: 0.05 }}
                  style={{ width: '100%' }}
                />
              </div>
              <motion.span
                className="text-xs font-light uppercase tracking-[0.3em] text-[#D7E2EA]/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {count.toString().padStart(3, '0')}
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
