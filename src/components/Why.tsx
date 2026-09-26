import moon from '../assets/logo-moon.png'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function Why() {
  const { t } = useLocale()
  return (
    <section className="why" id="why" data-scene="why">
      <Reveal className="why__kicker">
        <h2 className="eyebrow">{t.why.title}</h2>
      </Reveal>
      <Reveal className="why__copy">
        <div className="section-head why__head">
          <p className="why__intro">{t.why.text}</p>
        </div>
      </Reveal>
      <ul className="why__grid">
        {t.why.points.map((point, index) => (
          <li key={point.title}>
            <Reveal delay={index * 200} from="right">
              <article className={`why__card why__card--${index + 1}`}>
                <span
                  className="why__planet"
                  aria-hidden="true"
                  style={{ backgroundImage: `url(${moon})` }}
                />
                <h4 className="why__card-title">{point.title}</h4>
                <p>{point.text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
