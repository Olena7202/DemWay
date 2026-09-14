import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  clusterServices,
  serviceGroups,
  services,
  type Service,
} from '../data/services'
import { Reveal } from './Reveal'
import { ScrollReveal } from './ScrollReveal'
import { ServiceTabs } from './ServiceTabs'

export function Services() {
  const location = useLocation()
  const [group, setGroup] = useState<(typeof serviceGroups)[number]>('Сайти')
  const [open, setOpen] = useState(services[0].slug)
  const clusters = useMemo(() => clusterServices(group), [group])
  const current =
    services.find((service) => service.slug === open && service.group === group) ??
    clusters[0]?.items[0]

  useEffect(() => {
    const slug = location.hash.replace('#', '')
    const found = services.find((service) => service.slug === slug)
    if (!found) return
    setGroup(found.group)
    setOpen(found.slug)
  }, [location.hash])

  function pickGroup(next: (typeof serviceGroups)[number]) {
    setGroup(next)
    const first = clusterServices(next)[0]?.items[0]
    if (first) setOpen(first.slug)
  }

  return (
    <section className="services services--page" id="services" data-scene="blush">
      <div className="services__top">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Послуги</p>
            <h1 className="services__h1">Каталог пакетів</h1>
            <p>
              Оберіть напрям, потім послугу. Ціни — орієнтир «від». Фінал після
              короткого брифу.
            </p>
          </div>
        </Reveal>
        <Reveal delay={60} from="soft">
          <ServiceTabs group={group} onChange={pickGroup} />
        </Reveal>
      </div>

      <div
        key={group}
        className={`teaser-board${clusters.length === 1 ? ' teaser-board--one' : ''}`}
        role="navigation"
        aria-label={group}
      >
        {clusters.map((cluster, clusterIndex) => (
          <div key={cluster.label} className="teaser-cluster">
            <ScrollReveal delay={clusterIndex * 70}>
              <p className="teaser-cluster__label">
                {cluster.label}
                <span> · {String(cluster.items.length).padStart(2, '0')}</span>
              </p>
            </ScrollReveal>
            <div className="teaser-list">
              {cluster.items.map((service, index) => (
                <ScrollReveal
                  key={service.slug}
                  delay={clusterIndex * 70 + (index + 1) * 55}
                >
                  <button
                    type="button"
                    className={`teaser-row${open === service.slug ? ' is-on' : ''}`}
                    aria-current={open === service.slug ? 'true' : undefined}
                    onClick={() => setOpen(service.slug)}
                  >
                    <span className="teaser-row__code">{service.code}</span>
                    <span className="teaser-row__body">
                      <span className="teaser-row__title">{service.title}</span>
                    </span>
                    <span className="teaser-row__from">{service.plans[0].price}</span>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>

      {current ? (
        <div key={current.slug} className="svc-picked">
          <header className="section-head svc-detail__head" id={current.slug}>
            <p className="eyebrow">{current.code}</p>
            <h2>{current.title}</h2>
            <p>{current.text}</p>
          </header>
          <ServicePlans service={current} />
        </div>
      ) : null}
    </section>
  )
}

function ServicePlans({ service }: { service: Service }) {
  return (
    <div className={`svc__plans svc__plans--${service.plans.length}`}>
      {service.plans.map((plan, planIndex) => {
        const featured =
          service.plans.length > 1 && planIndex === service.plans.length - 1
        return (
          <article
            key={plan.name}
            className={`plan${planIndex === 0 ? ' plan--base' : ''}${featured ? ' plan--plus' : ''}`}
          >
            <p className="plan__name">{plan.name}</p>
            <p className="plan__price">{plan.price}</p>
            {plan.note ? <p className="plan__note">{plan.note}</p> : null}
            <ul className="plan__items">
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className={`btn ${featured ? 'btn--pink' : 'btn--ghost'}`}
              href="#contact"
            >
              Обговорити пакет
            </a>
          </article>
        )
      })}
    </div>
  )
}
