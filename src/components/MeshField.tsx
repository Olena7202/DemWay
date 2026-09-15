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
  active: number
  circle: number
}

const DENSITY = 5200
const NEAREST = 3
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
    let mouseX = 0
    let mouseY = 0
    let hasPointer = false

    const createPoints = () => {
      const step = Math.sqrt(width < 720 ? 7800 : DENSITY)
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
            active: 0,
            circle: 0,
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
      if (reduce) return
      let t = (now - point.startTime) / point.duration
      if (t >= 1) {
        point.startX = point.x
        point.startY = point.y
        point.targetX = point.originX + (Math.random() * 48 - 24)
        point.targetY = point.originY + (Math.random() * 48 - 24)
        point.startTime = now
        point.duration = 1000 + Math.random() * 1000
        t = 0
      }
      t = t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
      point.x = point.startX + (point.targetX - point.startX) * t
      point.y = point.startY + (point.targetY - point.startY) * t
    }

    const updateActivity = () => {
      if (!hasPointer) {
        for (const point of points) {
          point.active *= 0.9
          point.circle *= 0.9
        }
        return
      }

      for (const point of points) {
        const dx = mouseX - point.x
        const dy = mouseY - point.y
        const dist = dx * dx + dy * dy
        if (dist < 3200) {
          point.active = 0.4
          point.circle = 0.85
        } else if (dist < 11000) {
          point.active = 0.18
          point.circle = 0.4
        } else if (dist < 20000) {
          point.active = 0.07
          point.circle = 0.16
        } else {
          point.active *= 0.88
          point.circle *= 0.88
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      updateActivity()
      const now = performance.now()

      for (const point of points) shiftPoint(point, now)

      ctx.lineWidth = 1
      for (const point of points) {
        if (point.active <= 0.02) continue
        for (const neighbor of point.closest) {
          const dist = Math.hypot(point.x - neighbor.x, point.y - neighbor.y)
          const alpha = point.active * (1 - dist / 130)
          if (alpha <= 0.02) continue
          ctx.strokeStyle = `rgba(${STROKE}, ${Math.min(alpha, 0.32)})`
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(neighbor.x, neighbor.y)
          ctx.stroke()
        }
      }

      for (const point of points) {
        if (point.circle <= 0.04) continue
        ctx.fillStyle = `rgba(${STROKE}, ${0.06 + point.circle * 0.28})`
        ctx.beginPath()
        ctx.arc(point.x, point.y, 0.9, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const tick = () => {
      frame = requestAnimationFrame(tick)
      draw()
    }

    const onMouseMove = (event: MouseEvent) => {
      hasPointer = true
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return
      hasPointer = true
      mouseX = touch.clientX
      mouseY = touch.clientY
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
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouch, { passive: true })
    document.addEventListener('visibilitychange', onHide)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouch)
      document.removeEventListener('visibilitychange', onHide)
    }
  }, [])

  return <canvas className="page-bg__mesh" ref={ref} aria-hidden="true" />
}
