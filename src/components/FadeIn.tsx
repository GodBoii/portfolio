import { motion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode, type ElementType } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: ElementType
} & Omit<HTMLMotionProps<'div'>, 'ref' | 'children' | 'className'>

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = 'div',
  ...rest
}: FadeInProps) {
  const MotionComponent = motion.create(as as ElementType)
  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...(rest as object)}
    >
      {children}
    </MotionComponent>
  )
}
