import { useEffect, useRef } from 'react'
import moon from '../assets/logo-moon.png'

const RING = '114, 130, 94'

export function MeshField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const texture = new Image()
    texture.src = moon

    let width = 0
    let height = 0
    let dpr = 1
    let frame = 0
    let mouseX = 0
    let mouseY = 0
    let drawX = 0
    let drawY = 0
    let hasPointer = false
    let seeded = false
    let glow = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      glow += ((hasPointer ? 1 : 0) - glow) * 0.08
      if (glow < 0.02) return

      drawX += (mouseX - drawX) * 0.14
      drawY += (mouseY - drawY) * 0.14

      const now = reduce ? 0 : performance.now()
      const radius = 34
      const spin = now * 0.00028
      const alpha = glow * 0.55

      const atmosphere = ctx.createRadialGradient(
        drawX,
        drawY,
        radius * 0.2,
        drawX,
        drawY,
        radius * 2.4,
      )
      atmosphere.addColorStop(0, `rgba(${RING}, ${0.16 * alpha})`)
      atmosphere.addColorStop(0.45, `rgba(${RING}, ${0.06 * alpha})`)
      atmosphere.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = atmosphere
      ctx.beginPath()
      ctx.arc(drawX, drawY, radius * 2.4, 0, Math.PI * 2)
      ctx.fill()

      ctx.save()
      ctx.globalAlpha = alpha
      ctx.beginPath()
      ctx.arc(drawX, drawY, radius, 0, Math.PI * 2)
      ctx.clip()
      if (texture.complete && texture.naturalWidth) {
        ctx.drawImage(texture, drawX - radius, drawY - radius, radius * 2, radius * 2)
      } else {
        const body = ctx.createRadialGradient(
          drawX - radius * 0.28,
          drawY - radius * 0.32,
          4,
          drawX,
          drawY,
          radius,
        )
        body.addColorStop(0, '#3a4334')
        body.addColorStop(0.55, '#12140f')
        body.addColorStop(1, '#050505')
        ctx.fillStyle = body
        ctx.fillRect(drawX - radius, drawY - radius, radius * 2, radius * 2)
      }
      ctx.restore()

      ctx.strokeStyle = `rgba(${RING}, ${0.22 * glow})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(drawX, drawY, radius, 0, Math.PI * 2)
      ctx.stroke()

      ctx.save()
      ctx.translate(drawX, drawY)
      ctx.rotate(spin)
      ctx.strokeStyle = `rgba(${RING}, ${0.38 * glow})`
      ctx.lineWidth = 1
      ctx.setLineDash([5, 9])
      ctx.beginPath()
      ctx.ellipse(0, 0, radius * 1.72, radius * 0.52, 0.18, 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])

      const sat = now * 0.0011
      const sx = Math.cos(sat) * radius * 1.72
      const sy = Math.sin(sat) * radius * 0.52
      ctx.fillStyle = `rgba(${RING}, ${0.85 * glow})`
      ctx.beginPath()
      ctx.arc(sx, sy, 2.2, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const tick = () => {
      frame = requestAnimationFrame(tick)
      draw()
    }

    const onMouseMove = (event: MouseEvent) => {
      hasPointer = true
      mouseX = event.clientX
      mouseY = event.clientY
      if (!seeded) {
        drawX = mouseX
        drawY = mouseY
        seeded = true
      }
    }

    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return
      hasPointer = true
      mouseX = touch.clientX
      mouseY = touch.clientY
      if (!seeded) {
        drawX = mouseX
        drawY = mouseY
        seeded = true
      }
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
