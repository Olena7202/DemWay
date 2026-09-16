import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { PageBg } from './components/PageBg'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import './App.css'

function dismissBoot() {
  const html = document.documentElement
  const boot = document.getElementById('boot')
  html.classList.remove('is-booting')
  html.classList.add('is-booted')
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  if (!boot) return
  boot.classList.add('is-away')
  window.setTimeout(() => boot.remove(), 800)
}

function ScrollTo() {
  const location = useLocation()
  const firstPaint = useRef(true)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, '')
    const onCatalog = path.endsWith('/poslugy')
    const hash = location.hash
    let timer = 0
    let frame = 0
    let attempts = 0

    const afterBoot = (fn: () => void) => {
      if (document.documentElement.classList.contains('is-booting')) {
        timer = window.setTimeout(() => afterBoot(fn), 32)
        return
      }
      fn()
    }

    afterBoot(() => {
      if (firstPaint.current) {
        firstPaint.current = false
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        if (hash && !onCatalog) {
          history.replaceState(null, '', `${location.pathname}${location.search}`)
        }
        window.setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 80)
        window.setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 400)
        return
      }

      if (!hash || (onCatalog && hash !== '#contact')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        return
      }

      const seek = () => {
        const node = document.querySelector(hash)
        if (node) {
          node.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        attempts += 1
        if (attempts < 40) frame = window.requestAnimationFrame(seek)
      }
      frame = window.requestAnimationFrame(seek)
    })

    return () => {
      window.clearTimeout(timer)
      window.cancelAnimationFrame(frame)
    }
  }, [location.pathname, location.hash, location.search])

  return null
}

function App() {
  useEffect(() => {
    const boot = document.getElementById('boot')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const minMs = reduce ? 240 : 2200
    const started = performance.now()
    let cancelled = false
    let later = 0

    const finish = () => {
      if (cancelled) return
      cancelled = true
      const wait = Math.max(0, minMs - (performance.now() - started))
      later = window.setTimeout(dismissBoot, wait)
    }

    const images = [...(boot?.querySelectorAll('img') ?? [])]
    const imageReady = Promise.all(
      images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), { once: true })
              img.addEventListener('error', () => resolve(), { once: true })
            }),
      ),
    )

    Promise.all([document.fonts.ready, imageReady]).then(finish)
    const failsafe = window.setTimeout(finish, 4200)

    return () => {
      cancelled = true
      window.clearTimeout(failsafe)
      window.clearTimeout(later)
    }
  }, [])

  return (
    <>
      <PageBg />
      <Header />
      <div className="page">
        <ScrollTo />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/poslugy" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
