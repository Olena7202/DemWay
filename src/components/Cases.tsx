import { cases } from '../data/cases'
import { Reveal } from './Reveal'

export function Cases() {
  return (
    <section className="cases" id="cases" data-scene="cases">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">Кейси</p>
          <h2>Система в роботі, не в презентації</h2>
          <p>Чотири напрями, з яких уже збираємо контур під задачу бізнесу.</p>
        </div>
      </Reveal>

      <ul className="case-grid">
        {cases.map((item, index) => (
          <li key={item.code}>
            <Reveal delay={index * 100} from="scale">
              <a className="case-card" href="#contact">
                <span className="case-card__top">
                  <span className="case-card__code">{item.code}</span>
                  <span className="case-card__cat">{item.category}</span>
                </span>
                <span className="case-card__visual" aria-hidden="true">
                  <span className="case-card__mark">{item.mark}</span>
                </span>
                <span className="case-card__copy">
                  <span className="case-card__title">{item.title}</span>
                  <span className="case-card__text">{item.text}</span>
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
