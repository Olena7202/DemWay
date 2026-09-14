import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    n: '01',
    title: 'Знайомство',
    text: 'Обговорюємо бізнес, продукт, цілі й очікування. Фіксуємо, що має змінитись після запуску.',
  },
  {
    n: '02',
    title: 'Аналіз',
    text: 'Дивимось нішу, конкурентів, попит і поточні канали. Без цього не збираємо архітектуру навмання.',
  },
  {
    n: '03',
    title: 'Стратегія',
    text: 'Обираємо пріоритети: лендінг, каса POS, CRM, SEO чи реклама. План робіт і терміни — до першого макета.',
  },
  {
    n: '04',
    title: 'Реалізація',
    text: 'Дизайн, збірка, інтеграції, креативи. Віддаємо робочий продукт, а не концепт на слайді.',
  },
  {
    n: '05',
    title: 'Запуск',
    text: 'Публікуємо, підключаємо форми, касу, рекламу. Система починає збирати заявки.',
  },
  {
    n: '06',
    title: 'Аналіз і розвиток',
    text: 'Міряємо заявки, видимість, угоди. Тестуємо й підкручуємо, щоб ріст не зупинявся після старту.',
  },
]

export function Approach() {
  const pinRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLUListElement>(null)
  const barRef = useRef<HTMLSpanElement>(null)
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' &&
    (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(max-width: 720px)').matches),
  )

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const phone = window.matchMedia('(max-width: 720px)')
    const sync = () => setReduced(motion.matches || phone.matches)
    sync()
    motion.addEventListener('change', sync)
    phone.addEventListener('change', sync)
    return () => {
      motion.removeEventListener('change', sync)
      phone.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (reduced) return
    const pin = pinRef.current
    const stage = stageRef.current
    const rail = railRef.current
    const bar = barRef.current
    if (!pin || !stage || !rail) return

    let frame = 0
    let current = 0
    let lastActive = 0
    let lastProgress = 0

    const tick = () => {
      frame = requestAnimationFrame(tick)
      const total = Math.max(1, pin.offsetHeight - window.innerHeight)
      const next = Math.min(1, Math.max(0, -pin.getBoundingClientRect().top / total))
      const max = Math.max(0, rail.scrollWidth - stage.clientWidth)
      const target = next * max
      const rising = next >= lastProgress
      lastProgress = next
      current += (target - current) * (rising ? 0.09 : 0.28)
      if (Math.abs(target - current) < 0.4) current = target
      rail.style.transform = `translate3d(${-current}px, 0, 0)`
      const p = max > 0 ? current / max : 0
      if (bar) bar.style.width = `${p * 100}%`
      const index = Math.min(steps.length - 1, Math.round(p * (steps.length - 1)))
      if (index !== lastActive) {
        lastActive = index
        setActive(index)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reduced])

  if (reduced) {
    return (
      <section className="approach approach--plain" id="approach" data-scene="ink">
        <div className="section-head">
          <p className="eyebrow">Підхід</p>
          <h2>Від першої розмови до системного результату</h2>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.n}>
              <article className="step-card">
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>
    )
  }

  return (
    <section className="approach" id="approach" data-scene="ink">
      <div className="approach-pin" ref={pinRef}>
        <div className="approach-pin__sticky">
          <header className="approach-pin__head">
            <p className="eyebrow">Підхід</p>
            <p className="approach-pin__count" aria-live="polite">
              {steps[active].n}
              <span> / 06</span>
            </p>
            <h2>Від першої розмови до системного результату</h2>
          </header>

          <div className="approach-stage" ref={stageRef}>
            <ul className="approach-rail" ref={railRef}>
              {steps.map((step, index) => (
                <li key={step.n}>
                  <article
                    className={`approach-slide${index === active ? ' is-active' : ''}`}
                  >
                    <span className="approach-slide__ghost" aria-hidden="true">
                      {step.n}
                    </span>
                    <p className="approach-slide__n">{step.n}</p>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <div className="approach-nav" aria-hidden="true">
            <ol className="approach-dots">
              {steps.map((step, index) => (
                <li
                  key={step.n}
                  className={index === active ? 'is-on' : ''}
                />
              ))}
            </ol>
            <div className="approach-progress">
              <span ref={barRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
