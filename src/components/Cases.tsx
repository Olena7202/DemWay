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

      <ul className="service-tiles">
        {cases.map((item, index) => (
          <li key={item.code}>
            <Reveal delay={index * 80} from="scale">
              <a className="service-tile" href="#contact">
                <span className="service-tile__cat">{item.category}</span>
                <span className="service-tile__mark" aria-hidden="true">
                  {item.mark}
                </span>
                <span className="service-tile__copy">
                  <span className="service-tile__name">{item.title}</span>
                  <span className="service-tile__text">{item.text}</span>
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
