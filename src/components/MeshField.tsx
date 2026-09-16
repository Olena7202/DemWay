import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
  originX: number
  originY: number
  startX: number
  startY: number
  targetX: number
  targetY: number
  startTime: number
  duration: number
  closest: Point[]
}

const DENSITY = 4000
const NEAREST = 5
const STROKE = '114, 130, 94'

export function MeshField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let points: Point[] = []
    let width = 0
    let height = 0
    let dpr = 1
    let frame = 0

    const createPoints = () => {
      const step = Math.sqrt(width < 720 ? 5600 : DENSITY)
      points = []
      for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
          const px = x + Math.random() * step
          const py = y + Math.random() * step
          points.push({
            x: px,
            y: py,
            originX: px,
            originY: py,
            startX: px,
            startY: py,
            targetX: px,
            targetY: py,
            startTime: performance.now(),
            duration: 1000 + Math.random() * 1000,
            closest: [],
          })
        }
      }

      for (const p1 of points) {
        const closest: { point: Point; distance: number }[] = []
        for (const p2 of points) {
          if (p1 === p2) continue
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = dx * dx + dy * dy
          if (closest.length < NEAREST) {
            closest.push({ point: p2, distance })
            closest.sort((a, b) => a.distance - b.distance)
          } else if (distance < closest[closest.length - 1].distance) {
            closest.pop()
            closest.push({ point: p2, distance })
            closest.sort((a, b) => a.distance - b.distance)
          }
        }
        p1.closest = closest.map((item) => item.point)
      }
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      createPoints()
    }

    const shiftPoint = (point: Point, now: number) => {
      if (reduce) {
        point.x = point.originX
        point.y = point.originY
        return
      }
      let t = (now - point.startTime) / point.duration
      if (t >= 1) {
        point.startX = point.x
        point.startY = point.y
        point.targetX = point.originX + (Math.random() * 100 - 50)
        point.targetY = point.originY + (Math.random() * 100 - 50)
        point.startTime = now
        point.duration = 1000 + Math.random() * 1000
        t = 0
      }
      t = t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2
      point.x = point.startX + (point.targetX - point.startX) * t
      point.y = point.startY + (point.targetY - point.startY) * t
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const now = performance.now()

      for (const point of points) shiftPoint(point, now)

      ctx.lineWidth = 1
      for (const point of points) {
        for (const neighbor of point.closest) {
          if (neighbor.x < point.x) continue
          const dist = Math.hypot(point.x - neighbor.x, point.y - neighbor.y)
          const alpha = 0.22 * (1 - dist / 160)
          if (alpha <= 0.02) continue
          ctx.strokeStyle = `rgba(${STROKE}, ${alpha})`
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(neighbor.x, neighbor.y)
          ctx.stroke()
        }
      }

      for (const point of points) {
        ctx.fillStyle = `rgba(${STROKE}, 0.22)`
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const tick = () => {
      frame = requestAnimationFrame(tick)
      draw()
    }

    const onHide = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame)
        frame = 0
        return
      }
      if (!frame) frame = requestAnimationFrame(tick)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onHide)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onHide)
    }
  }, [])

  return <canvas className="page-bg__mesh" ref={ref} aria-hidden="true" />
}
