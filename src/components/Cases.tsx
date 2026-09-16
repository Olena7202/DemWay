import { cases } from '../data/cases'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function Cases() {
  const { t } = useLocale()
  return (
    <section className="cases" id="cases" data-scene="cases">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">{t.cases.kicker}</p>
          <h2>{t.cases.title}</h2>
          <p>{t.cases.text}</p>
        </div>
      </Reveal>

      <ul className="service-tiles">
        {cases.map((item, index) => {
          const copy = t.cases.items[index]
          return (
            <li key={item.code}>
              <Reveal delay={index * 80} from="scale">
                <a className="service-tile" href="#contact">
                  <span className="service-tile__cat">{copy.category}</span>
                  <span className="service-tile__mark" aria-hidden="true">
                    {item.mark}
                  </span>
                  <span className="service-tile__copy">
                    <span className="service-tile__name">{copy.title}</span>
                    <span className="service-tile__text">{copy.text}</span>
                  </span>
                </a>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
