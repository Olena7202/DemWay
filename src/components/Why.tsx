import { Reveal } from './Reveal'

const points = [
  {
    n: '01',
    title: 'Експертиза',
    text: 'Розуміємо бізнес комплексно та поєднуємо розробку, маркетинг і технології в одну систему',
  },
  {
    n: '02',
    title: 'Чесність',
    text: 'Дедлайни й зона відповідальності прозорі. Не обіцяємо неможливе і не зникаємо після запуску.',
  },
  {
    n: '03',
    title: 'Результат',
    text: 'Кожен інструмент працює на спільну ціль - більше клієнтів, продажів і розвиток бізнесу.',
  },
]

export function Why() {
  return (
    <section className="why" id="why" data-scene="why">
      <Reveal>
        <div className="section-head why__head">
          <p className="eyebrow">Про нас</p>
          <h2>Перетворюємо ідеї на бізнес, який рухається вперед</h2>
          <p>
            Ми створюємо сайти та лендінги, впроваджуємо CRM та POS-рішення, працюємо з SEO та рекламою, 
            формуємо айдентику бренду. Кожне рішення будуємо навколо вашого бізнесу, його цілей і шляху клієнта - 
            від першого контакту до покупки. 
          </p>
        </div>
      </Reveal>
      <ul className="why__orbs">
        {points.map((point, index) => (
          <li key={point.n}>
            <Reveal delay={index * 160} from="orb">
              <article className="why__orb">
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
