import { Link } from 'react-router-dom'
import {
  serviceClusters,
  serviceGroupAnchors,
  serviceGroups,
} from '../data/services'
import { Reveal } from './Reveal'

const marks: Record<(typeof serviceGroups)[number], string> = {
  Сайти: 'WEB',
  SEO: 'SEO',
  Реклама: 'ADS',
  Системи: 'SYS',
  Айдентика: 'ID',
}

const blurbs: Record<(typeof serviceGroups)[number], string> = {
  Сайти: 'Лендінг, візитка чи каталог — сайт під заявку й запуск реклами.',
  SEO: 'Аудит, оптимізація й тексти, щоб вас знаходили в пошуку.',
  Реклама: 'Google, Meta й аналітика в одному контурі під заявку.',
  Системи: 'CRM, щоб продажі не губились між чатами.',
  Айдентика: 'Логотип і носії, які тримають бренд разом.',
}

const cards = serviceGroups.map((name, index) => ({
  name,
  mark: marks[name],
  text: blurbs[name],
  cat: serviceClusters[name][0].label,
  code: String(index + 1).padStart(2, '0'),
}))

export function ServicesTeaser() {
  return (
    <section className="services" id="services" data-scene="blush">
      <Reveal>
        <div className="services__intro">
          <div className="section-head services__head">
            <p className="eyebrow">Послуги</p>
            <h2>Напрями, з яких збираємо систему</h2>
            <p>
              Натисніть квадрат напряму — відкриється вкладка каталогу з іншими
              пакетами цього блоку.
            </p>
          </div>
          <div className="hero__actions teaser-catalog">
            <Link className="btn btn--ink" to="/poslugy">
              Увесь каталог пакетів
            </Link>
          </div>
        </div>
      </Reveal>

      <ul className="case-grid services__cards">
        {cards.map((card, index) => (
          <li key={card.name}>
            <Reveal delay={index * 90} from="scale">
              <Link
                className="case-card"
                to={`/poslugy?napryam=${serviceGroupAnchors[card.name]}`}
                aria-label={`Відкрити вкладку «${card.name}» і подивитись пакети`}
              >
                <span className="case-card__top">
                  <span className="case-card__code">{card.code}</span>
                  <span className="case-card__cat">{card.cat}</span>
                </span>
                <span className="case-card__visual" aria-hidden="true">
                  <span className="case-card__mark">{card.mark}</span>
                </span>
                <span className="case-card__copy">
                  <span className="case-card__title">{card.name}</span>
                  <span className="case-card__text">{card.text}</span>
                  <span className="case-card__go">
                    Відкрити вкладку з пакетами
                    <span aria-hidden="true"> →</span>
                  </span>
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
