import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  className?: string
}

export default function PortraitTransition({ className = '' }: Props) {
  // Track raw page scroll. We map scrollY [0, vh*0.9] -> progress [0, 1].
  // This runs the transition as the user scrolls the hero out of view.
  const { scrollY } = useScroll()
  const [vh, setVh] = useState(0)

  useEffect(() => {
    const update = () => setVh(window.innerHeight)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const progress = useTransform(scrollY, [0, Math.max(1, vh * 0.9)], [0, 1])

  return (
    <div className={className}>
      <Portrait src="/portrait-1.png" alt="Prajwal" progress={progress} variant={1} />
      <Portrait src="/portrait-2.png" alt="Prajwal" progress={progress} variant={2} />
    </div>
  )
}

function Portrait({
  src,
  alt,
  progress,
  variant,
}: {
  src: string
  alt: string
  progress: MotionValue<number>
  variant: 1 | 2
}) {
  // Image 1: visible at start, fades out + blurs + drifts up as the user scrolls
  const opacity1 = useTransform(progress, [0, 0.3, 0.75], [1, 1, 0])
  const scale1 = useTransform(progress, [0, 0.75], [1, 1.1])
  const y1 = useTransform(progress, [0, 0.75], [0, -50])
  const blur1 = useTransform(progress, [0, 0.4, 0.75], [0, 2, 14])

  // Image 2: hidden at start, fades in + sharpens + drifts up from below
  const opacity2 = useTransform(progress, [0.3, 0.55, 0.9], [0, 0.5, 1])
  const scale2 = useTransform(progress, [0.3, 0.9], [0.95, 1])
  const y2 = useTransform(progress, [0.3, 0.9], [50, 0])
  const blur2 = useTransform(progress, [0.3, 0.7, 0.9], [14, 4, 0])

  if (variant === 1) {
    return (
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        className="absolute inset-0 m-auto h-full w-full select-none object-contain"
        style={{
          opacity: opacity1,
          scale: scale1,
          y: y1,
          filter: useTransform(blur1, (b) => `blur(${b}px)`),
        }}
      />
    )
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      className="absolute inset-0 m-auto h-full w-full select-none object-contain"
      style={{
        opacity: opacity2,
        scale: scale2,
        y: y2,
        filter: useTransform(blur2, (b) => `blur(${b}px)`),
      }}
    />
  )
}
