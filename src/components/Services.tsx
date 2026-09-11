import { useMemo, useState } from 'react'
import { services } from '../data/services'
import { Reveal } from './Reveal'

const groups = ['Продукт', 'Ріст', 'Айдентика'] as const

export function Services() {
  const [group, setGroup] = useState<(typeof groups)[number]>('Продукт')

  const visible = useMemo(
    () => services.filter((service) => service.group === group),
    [group],
  )

  return (
    <section className="services" id="services" data-scene="blush">
      <div className="services__top">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Послуги</p>
            <h2>Напрями, з яких збираємо систему</h2>
            <p>Один інструмент або повний контур — під задачу бізнесу.</p>
          </div>
        </Reveal>

        <Reveal delay={60} from="soft">
          <div className="service-tabs" role="tablist" aria-label="Напрями послуг">
            {groups.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={group === item}
                className={`service-tab${group === item ? ' service-tab--active' : ''}`}
                onClick={() => setGroup(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <ul className={`service-grid service-grid--${visible.length}`}>
        {visible.map((service, index) => (
          <li key={`${group}-${service.code}`}>
            <Reveal delay={index * 80} from="scale">
              <article className="service-card">
                <span className="service-card__code">{service.code}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="service-card__link" href="#contact">
                  Обговорити
                </a>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
