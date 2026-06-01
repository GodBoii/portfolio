import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type AnimatedTextProps = {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, wordIndex) => {
        const start = wordIndex / words.length
        const end = (wordIndex + 1) / words.length
        return (
          <Word
            key={wordIndex}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        )
      })}
    </p>
  )
}

function Word({
  word,
  range,
  progress,
}: {
  word: string
  range: [number, number]
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  const characters = word.split('')

  return (
    <span className="inline-block whitespace-pre">
      {characters.map((char, i) => (
        <span key={i} className="relative inline-block">
          <span className="invisible">{char}</span>
          <motion.span
            className="absolute inset-0 inline-block"
            style={{ opacity }}
          >
            {char}
          </motion.span>
        </span>
      ))}
      {/* word separator (space) */}
      {word !== '' && <span>{' '}</span>}
    </span>
  )
}
