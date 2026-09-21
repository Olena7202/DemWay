import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function Faq() {
  const { t } = useLocale()
  return (
    <section className="faq" id="faq" data-scene="close">
      <Reveal from="left">
        <div className="faq__intro">
          <p className="eyebrow">{t.faq.kicker}</p>
          <h2>{t.faq.title}</h2>
          <p>{t.faq.text}</p>
        </div>
      </Reveal>

      <Reveal delay={80} from="right">
        <div className="faq__list">
          {t.faq.items.map((item, index) => (
            <details key={item.q} className="faq-item" name="faq">
              <summary>
                <span className="faq-item__n">{String(index + 1).padStart(2, '0')}</span>
                <span className="faq-item__q">{item.q}</span>
                <span className="faq-item__mark" aria-hidden="true" />
              </summary>
              <div className="faq-item__body">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
