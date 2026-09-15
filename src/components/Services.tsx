import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  clusterServices,
  groupFromAnchor,
  serviceGroupAnchors,
  services,
  type Service,
  type ServiceGroup,
} from '../data/services'
import { Reveal } from './Reveal'
import { ScrollReveal } from './ScrollReveal'
import { ServiceTabs } from './ServiceTabs'

function firstSlug(next: ServiceGroup) {
  return clusterServices(next)[0]?.items[0]?.slug ?? services[0].slug
}

export function Services() {
  const location = useLocation()
  const navigate = useNavigate()
  const [group, setGroup] = useState<ServiceGroup>('Сайти')
  const [open, setOpen] = useState(services[0].slug)
  const clusters = useMemo(() => clusterServices(group), [group])
  const current =
    services.find((service) => service.slug === open && service.group === group) ??
    clusters[0]?.items[0]

  useEffect(() => {
    const napryam = new URLSearchParams(location.search).get('napryam')
    const hash = location.hash.replace('#', '')
    const fromGroup = groupFromAnchor(napryam) ?? groupFromAnchor(hash)
    if (fromGroup) {
      setGroup(fromGroup)
      setOpen(firstSlug(fromGroup))
      return
    }
    const found = services.find((service) => service.slug === hash)
    if (!found) return
    setGroup(found.group)
    setOpen(found.slug)
  }, [location.search, location.hash])

  function pickGroup(next: ServiceGroup) {
    setGroup(next)
    setOpen(firstSlug(next))
    navigate(
      { pathname: '/poslugy', search: `?napryam=${serviceGroupAnchors[next]}` },
      { replace: true },
    )
    document.getElementById('services')?.scrollIntoView({ block: 'start' })
  }

  function pickService(slug: string) {
    setOpen(slug)
    if (!window.matchMedia('(max-width: 960px)').matches) return
    window.requestAnimationFrame(() => {
      document.getElementById('svc-detail')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <section className="services services--page" id="services" data-scene="blush">
      <div className="services__top">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Послуги</p>
            <h1 className="services__h1">Каталог пакетів</h1>
            <p>Оберіть напрям і пакет — склад і ціна відкриються поруч. Суми орієнтовні, «від».</p>
          </div>
        </Reveal>
        <Reveal delay={60} from="soft">
          <ServiceTabs group={group} onChange={pickGroup} />
        </Reveal>
      </div>

      <div className="svc-catalog">
        <div
          key={group}
          className={`teaser-board${clusters.length === 1 ? ' teaser-board--one' : ''}`}
          role="navigation"
          aria-label={`Пакети: ${group}`}
        >
          {clusters.map((cluster, clusterIndex) => (
            <div key={cluster.label} className="teaser-cluster">
              <ScrollReveal delay={clusterIndex * 70}>
                <p className="teaser-cluster__label">{cluster.label}</p>
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
                      onClick={() => pickService(service.slug)}
                    >
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
          <div key={current.slug} className="svc-picked" id="svc-detail">
            <header className="section-head svc-detail__head">
              <p className="svc-detail__code">
                {group} · обраний пакет
              </p>
              <h2>{current.title}</h2>
              <p>{current.text}</p>
            </header>
            <ServicePlans service={current} />
          </div>
        ) : null}
      </div>
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
            {featured ? <p className="plan__tag">Частіше обирають</p> : null}
            <p className="plan__price">{plan.price}</p>
            {plan.note ? <p className="plan__note">{plan.note}</p> : null}
            <ul className="plan__items">
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn btn--pink" href="#contact">
              Обговорити пакет
            </a>
          </article>
        )
      })}
    </div>
  )
}
