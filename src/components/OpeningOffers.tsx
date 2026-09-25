import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function OpeningOffers() {
  const { t } = useLocale()
  const offers = t.openingOffers

  return (
    <section className="offers" id="offers" data-scene="ink">
      <Reveal once>
        <div className="section-head">
          <p className="eyebrow">{offers.kicker}</p>
          <h2>{offers.title}</h2>
        </div>
      </Reveal>

      <ul className="offers__grid">
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
