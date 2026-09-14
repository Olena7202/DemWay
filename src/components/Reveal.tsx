import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'up' | 'left' | 'right' | 'soft' | 'scale' | 'slide' | 'orb'
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  from = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    let frame = 0

    const read = () => {
      frame = 0
      if (el.classList.contains('is-visible')) return
      const box = el.getBoundingClientRect()
      const view = window.innerHeight
      if (box.top < view * 0.9 && box.bottom > 48) {
        el.classList.add('is-visible')
      }
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal reveal--${from} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
