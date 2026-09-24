import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function OpeningOffers() {
  const { t } = useLocale()
  const offers = t.openingOffers
  const trackRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const narrow = window.matchMedia('(max-width: 1180px)')

    let startX = 0
    let startY = 0
    let startLeft = 0
    let axis: 'x' | 'y' | null = null
    let dragging = false

    const snap = () => {
      const items = [...el.children] as HTMLElement[]
      if (!items.length) return
      const left = el.scrollLeft
      let best = items[0]
      let dist = Number.POSITIVE_INFINITY
      for (const item of items) {
        const next = Math.abs(item.offsetLeft - left)
        if (next < dist) {
          dist = next
          best = item
        }
      }
      el.scrollTo({ left: best.offsetLeft, behavior: 'smooth' })
    }

    const onDown = (event: PointerEvent) => {
      if (!narrow.matches) return
      if ((event.target as HTMLElement).closest('a, button')) return
      dragging = true
      axis = null
      startX = event.clientX
      startY = event.clientY
      startLeft = el.scrollLeft
    }

    const onMove = (event: PointerEvent) => {
      if (!dragging || !narrow.matches) return
      const dx = event.clientX - startX
      const dy = event.clientY - startY
      if (!axis) {
        if (Math.abs(dx) < 12 && Math.abs(dy) < 12) return
        axis = Math.abs(dx) > Math.abs(dy) * 1.2 ? 'x' : 'y'
        if (axis === 'x') {
          try {
            el.setPointerCapture(event.pointerId)
          } catch {
            /* ignore */
          }
        } else {
          dragging = false
        }
      }
      if (axis !== 'x') return
      event.preventDefault()
      el.scrollLeft = startLeft - dx
    }

    const onUp = () => {
      if (!dragging && axis !== 'x') {
        axis = null
        return
      }
      const shouldSnap = axis === 'x'
      dragging = false
      axis = null
      if (shouldSnap) snap()
    }

    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove, { passive: false })
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    return () => {
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
    }
  }, [])

  return (
    <section className="offers" id="offers" data-scene="ink">
      <Reveal once>
        <div className="section-head">
          <h2>{offers.title}</h2>
        </div>
      </Reveal>

      <ul className="offers__grid" ref={trackRef}>
        {offers.items.map((pack) => {
          const featured = Boolean(pack.featured)
          return (
            <li key={pack.name}>
              <article className={`offer-card${featured ? ' offer-card--hit' : ''}`}>
                {featured ? (
                  <span className="offer-card__glow" aria-hidden="true" />
                ) : null}
                <div className="offer-card__meta">
                  <p className="offer-card__label">{pack.label}</p>
                  <p className="offer-card__save">{offers.save}</p>
                </div>
                <h3>{pack.name}</h3>
                <p className="offer-card__for">{pack.for}</p>
                <p className="offer-card__includes">{offers.includes}</p>
                <ul className="offer-card__items">
                  {pack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="offer-card__result">
                  <strong>{offers.resultLabel}:</strong> {pack.result}
                </p>
                <div className="offer-card__price">
                  <span className="offer-card__was">{pack.was}</span>
                  <span className="offer-card__now">{pack.now}</span>
                </div>
                <div className="offer-card__cta">
                  <Link
                    className="btn btn--pink btn--slide"
                    to={{ pathname: '/', search: `?paket=${pack.id}`, hash: '#contact' }}
                  >
                    <span>
                      <span>{offers.discuss}</span>
                      <span>{offers.discuss}</span>
                    </span>
                  </Link>
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      <p className="offers__note">{offers.note}</p>
    </section>
  )
}
