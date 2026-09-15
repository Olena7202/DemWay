import { Reveal } from './Reveal'

const points = [
  {
    title: 'Експертиза',
    text: 'Розуміємо бізнес комплексно та поєднуємо розробку, маркетинг і технології в одну систему',
  },
  {
    title: 'Чесність',
    text: 'Дедлайни й зона відповідальності прозорі. Не обіцяємо неможливе і не зникаємо після запуску.',
  },
  {
    title: 'Результат',
    text: 'Кожен інструмент працює на спільну ціль - більше клієнтів, продажів і розвиток бізнесу.',
  },
]

export function Why() {
  return (
    <section className="why" id="why" data-scene="why">
      <Reveal className="why__kicker">
        <p className="eyebrow">Про нас</p>
      </Reveal>
      <Reveal className="why__copy">
        <div className="section-head why__head">
          <h2>Перетворюємо ідеї на бізнес, який рухається вперед</h2>
          <p>
            Ми створюємо сайти та лендінги, впроваджуємо CRM-рішення, працюємо з SEO та рекламою, 
            формуємо айдентику бренду. Кожне рішення будуємо навколо вашого бізнесу, його цілей і шляху клієнта - 
            від першого контакту до покупки. 
          </p>
        </div>
      </Reveal>
      <ul className="why__grid">
        {points.map((point, index) => (
          <li key={point.title}>
            <Reveal delay={index * 120} from="right">
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
