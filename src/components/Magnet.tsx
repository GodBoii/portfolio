import { useRef, useState, type ReactNode, type CSSProperties } from 'react'

type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  style?: CSSProperties
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [transform, setTransform] = useState('translate3d(0, 0, 0)')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = Math.abs(e.clientX - centerX)
    const distY = Math.abs(e.clientY - centerY)

    if (distX < rect.width / 2 + padding && distY < rect.height / 2 + padding) {
      setIsActive(true)
      const tx = (e.clientX - centerX) / strength
      const ty = (e.clientY - centerY) / strength
      setTransform(`translate3d(${tx}px, ${ty}px, 0)`)
    } else {
      setIsActive(false)
      setTransform('translate3d(0, 0, 0)')
    }
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    setTransform('translate3d(0, 0, 0)')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
