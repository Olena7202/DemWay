import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

let lastY = 0
let goingDown = true
let scrollBound = false

function bindScroll() {
  if (scrollBound) return
  scrollBound = true
  lastY = window.scrollY
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY
      if (y !== lastY) goingDown = y > lastY
      lastY = y
    },
    { passive: true },
  )
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in')
      return
    }

    bindScroll()

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.toggle('from-up', !goingDown)
          el.classList.toggle('from-down', goingDown)
          el.classList.add('is-in')
          return
        }

        el.classList.toggle('from-up', goingDown)
        el.classList.toggle('from-down', !goingDown)
        el.classList.remove('is-in')
      },
      { threshold: 0.18, rootMargin: '-6% 0px -12% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`teaser-in from-down ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
