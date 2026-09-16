import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function Why() {
  const { t } = useLocale()
  return (
    <section className="why" id="why" data-scene="why">
      <Reveal className="why__kicker">
        <p className="eyebrow">{t.why.kicker}</p>
      </Reveal>
      <Reveal className="why__copy">
        <div className="section-head why__head">
          <h2>{t.why.title}</h2>
          <p>{t.why.text}</p>
        </div>
      </Reveal>
      <ul className="why__grid">
        {t.why.points.map((point, index) => (
          <li key={point.title}>
            <Reveal delay={index * 200} from="right">
              <article className={`why__card why__card--${index + 1}`}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
