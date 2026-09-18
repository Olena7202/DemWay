import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function OpeningOffers() {
  const { t } = useLocale()
  const offers = t.openingOffers

  return (
    <section className="offers" id="offers" data-scene="cases">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">{offers.kicker}</p>
          <h2>{offers.title}</h2>
          <p>{offers.text}</p>
        </div>
      </Reveal>

      <ul className="offers__grid">
        {offers.items.map((pack, index) => (
          <li key={pack.name}>
            <Reveal delay={index * 110} from="scale">
              <article className={`offer-card${index === 1 ? ' offer-card--hit' : ''}`}>
                <p className="offer-card__badge">{offers.badge}</p>
                <h3>{pack.name}</h3>
                <p className="offer-card__for">{pack.for}</p>
                <p className="offer-card__price">
                  <span className="offer-card__was">{pack.was}</span>
                  <span className="offer-card__now">{pack.now}</span>
                </p>
                <ul className="offer-card__items">
                  {pack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="btn btn--pink" to={{ pathname: '/', hash: '#contact' }}>
                  {offers.discuss}
                </Link>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="offers__note">{offers.note}</p>
    </section>
  )
}
