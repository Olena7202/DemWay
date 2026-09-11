import { useEffect, useState } from 'react'

const scenes = ['khaki', 'why', 'blush', 'cases', 'ink', 'close'] as const
type Scene = (typeof scenes)[number]

export function PageBg() {
  const [scene, setScene] = useState<Scene>('khaki')

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-scene]'))
    if (!nodes.length) return

    let frame = 0

    const read = () => {
      frame = 0
      const marker = window.innerHeight * 0.34
      let next: Scene = 'khaki'

      for (const node of nodes) {
        const key = node.getAttribute('data-scene') as Scene | null
        if (!key || !scenes.includes(key)) continue
        const box = node.getBoundingClientRect()
        if (box.top <= marker && box.bottom > marker) next = key
      }

      setScene((current) => (current === next ? current : next))
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
    <div className="page-bg" data-scene={scene} aria-hidden="true">
      <div className="page-bg__wash" />
      <div className="page-bg__veil" />
      <div className="page-bg__grid" />
      <div className="page-bg__grain" />
    </div>
  )
}
