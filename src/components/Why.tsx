import { Reveal } from './Reveal'

const points = [
  {
    n: '01',
    title: 'Експертиза',
    text: 'Лендінг, каса, CRM, SEO й айдентика — збираємо під реальні продажі, а не під трендовий слайд.',
  },
  {
    n: '02',
    title: 'Чесність',
    text: 'Дедлайни й зона відповідальності прозорі. Не обіцяємо неможливе і не зникаємо після запуску.',
  },
  {
    n: '03',
    title: 'Результат',
    text: 'KPI — не «ліди для звіту», а заявка, угода, видимість. Міряємо те, що рухає бізнес.',
  },
]

export function Why() {
  return (
    <section className="why" id="why" data-scene="why">
      <Reveal>
        <div className="section-head why__head">
          <p className="eyebrow">Про нас</p>
          <h2>DemWay збирає просування в одну систему</h2>
          <p>
            Ми будуємо те, чим бізнес реально продає: лендінг, касу, CRM, видимість
            у пошуку й айдентику. Не роздаємо задачі попідрядниках і не зникаємо
            після запуску. Працюємо поруч із вами — від першого екрану до заявки,
            яку можна взяти в роботу.
          </p>
        </div>
      </Reveal>
      <ul className="why__rail">
        {points.map((point, index) => (
          <li key={point.n}>
            <Reveal delay={index * 100} from="soft">
              <article className="why__stat">
                <span className="why__n">{point.n}</span>
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
