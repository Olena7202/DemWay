import { Link } from 'react-router-dom'
import {
  serviceGroupAnchors,
  serviceGroups,
} from '../data/services'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

const marks: Record<(typeof serviceGroups)[number], string> = {
  Сайти: 'WEB',
  SEO: 'SEO',
  Реклама: 'ADS',
  Системи: 'SYS',
  Айдентика: 'ID',
}

export function ServicesTeaser() {
  const { t } = useLocale()
  return (
    <section className="services" id="services" data-scene="blush">
      <Reveal>
        <div className="services__intro">
          <div className="section-head services__head">
            <p className="eyebrow">{t.servicesTeaser.kicker}</p>
            <h2>{t.servicesTeaser.title}</h2>
            <p>{t.servicesTeaser.text}</p>
          </div>
          <div className="hero__actions teaser-catalog">
            <Link className="btn btn--ink" to="/poslugy">
              {t.servicesTeaser.catalog}
            </Link>
          </div>
        </div>
      </Reveal>

      <ul className="case-grid services__cards">
        {serviceGroups.map((name, index) => {
          const label = t.groups[name]
          return (
            <li key={name}>
              <Reveal delay={index * 90} from="scale">
                <Link
                  className="case-card"
                  to={`/poslugy?napryam=${serviceGroupAnchors[name]}`}
                  aria-label={t.servicesTeaser.openTab.replace('{name}', label)}
                >
                  <span className="case-card__top">
                    <span className="case-card__code">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>
                  <span className="case-card__visual" aria-hidden="true">
                    <span className="case-card__mark">{marks[name]}</span>
                  </span>
                  <span className="case-card__copy">
                    <span className="case-card__text">{t.teaserBlurbs[name]}</span>
                    <span className="case-card__go">
                      {t.servicesTeaser.go}
                      <span aria-hidden="true"> →</span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
