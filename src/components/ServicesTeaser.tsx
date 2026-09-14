import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { clusterServices, serviceGroups } from '../data/services'
import { Reveal } from './Reveal'
import { ScrollReveal } from './ScrollReveal'
import { ServiceTabs } from './ServiceTabs'

export function ServicesTeaser() {
  const [group, setGroup] = useState<(typeof serviceGroups)[number]>('Сайти')
  const clusters = useMemo(() => clusterServices(group), [group])

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
          <ServiceTabs group={group} onChange={setGroup} />
        </Reveal>
      </div>

      <div
        key={group}
        className={`teaser-board${clusters.length === 1 ? ' teaser-board--one' : ''}`}
      >
        {clusters.map((cluster, clusterIndex) => (
          <div key={cluster.label} className="teaser-cluster">
            <ScrollReveal delay={clusterIndex * 70}>
              <p className="teaser-cluster__label">
                {cluster.label}
                <span> · {String(cluster.items.length).padStart(2, '0')}</span>
              </p>
            </ScrollReveal>
            <ul className="teaser-list">
              {cluster.items.map((service, index) => (
                <li key={service.slug}>
                  <ScrollReveal delay={clusterIndex * 70 + (index + 1) * 55}>
                    <Link className="teaser-row" to={`/poslugy#${service.slug}`}>
                      <span className="teaser-row__code">{service.code}</span>
                      <span className="teaser-row__body">
                        <span className="teaser-row__title">{service.title}</span>
                        <span className="teaser-row__text">{service.text}</span>
                      </span>
                      <span className="teaser-row__from">
                        {service.plans[0].price}
                      </span>
                    </Link>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Reveal delay={180} from="soft">
        <div className="hero__actions teaser-catalog">
          <Link className="btn btn--ghost" to="/poslugy">
            Увесь каталог пакетів
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
