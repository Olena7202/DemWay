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
import { useLocale } from '../i18n/locale'
import { localizeService } from '../i18n/services'

function firstSlug(next: ServiceGroup) {
  return clusterServices(next)[0]?.items[0]?.slug ?? services[0].slug
}

export function Services() {
  const { t, locale } = useLocale()
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
    if (found) {
      setGroup(found.group)
      setOpen(found.slug)
      return
    }
    if (hash === 'contact' || hash === 'faq') return
    setGroup('Сайти')
    setOpen(firstSlug('Сайти'))
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
            <p className="eyebrow">{t.catalog.kicker}</p>
            <h1 className="services__h1">{t.catalog.title}</h1>
            <p>{t.catalog.text}</p>
          </div>
        </Reveal>
        <Reveal delay={60} from="soft">
          <ServiceTabs group={group} onChange={pickGroup} />
        </Reveal>
      </div>

      <div className="svc-catalog">
        {t.groupLeads[group] ? (
          <p className="svc-catalog__lead">{t.groupLeads[group]}</p>
        ) : null}
        <div className="svc-catalog__split">
          <div
            key={group}
            className={`teaser-board${clusters.length === 1 ? ' teaser-board--one' : ''}`}
            role="navigation"
            aria-label={`${t.catalog.packagesAria}: ${t.groups[group]}`}
          >
            {clusters.map((cluster, clusterIndex) => (
              <div key={cluster.label} className="teaser-cluster">
                <ScrollReveal delay={clusterIndex * 70}>
                  <p className="teaser-cluster__label">
                    {t.clusters[cluster.label] ?? cluster.label}
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
                        onClick={() => pickService(service.slug)}
                      >
                        <span className="teaser-row__body">
                        <span className="teaser-row__title">
                          {localizeService(service, locale).title}
                        </span>
                        </span>
                        {service.plans[0].price ? (
                          <span className="teaser-row__from">{service.plans[0].price}</span>
                        ) : null}
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
                  {t.groups[group]} · {t.catalog.picked}
                </p>
                <h2>{localizeService(current, locale).title}</h2>
                <p>{localizeService(current, locale).text}</p>
              </header>
              <ServicePlans service={localizeService(current, locale)} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function ServicePlans({ service }: { service: Service }) {
  const { t } = useLocale()
  const hintWithPrice = service.group === 'Реклама'
  return (
    <div className={`svc__plans svc__plans--${service.plans.length}`}>
      {service.plans.map((plan, planIndex) => (
          <article
            key={plan.name}
            className={`plan${planIndex === 0 ? ' plan--base' : ''}`}
          >
            {plan.name ? <p className="plan__name">{plan.name}</p> : null}
            {plan.price ? <p className="plan__price">{plan.price}</p> : null}
            {hintWithPrice && plan.note ? (
              <p className="plan__hint">{plan.note}</p>
            ) : null}
            {plan.term ? (
              <p className="plan__term">
                <span>{t.catalog.term}</span>
                {plan.term}
              </p>
            ) : null}
            {plan.items.length ? (
              <PlanItems key={`${service.slug}-${plan.name}`} slug={service.slug} items={plan.items} />
            ) : null}
            {!hintWithPrice && plan.note ? (
              <p className="plan__note">{plan.note}</p>
            ) : null}
            <a className="btn btn--pink" href="#contact">
              {t.catalog.discuss}
            </a>
          </article>
      ))}
    </div>
  )
}

const clipSlugs = new Set([
  'korporatyvnyy',
  'katalog',
  'redyzayn-korporatyvnyy',
  'crm',
  'crm-business',
])

function PlanItems({ slug, items }: { slug: string; items: string[] }) {
  const { t } = useLocale()
  const clip = clipSlugs.has(slug) && items.length > 4
  const preview = Math.ceil(items.length / 2)
  const [open, setOpen] = useState(false)
  const visible = clip && !open ? items.slice(0, preview) : items

  return (
    <div className={`plan__scope${clip && !open ? ' is-clip' : ''}`}>
      <ul className="plan__items">
        {visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {clip ? (
        <button
          type="button"
          className="plan__more"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? t.catalog.collapse : t.catalog.expand}
        </button>
      ) : null}
    </div>
  )
}
