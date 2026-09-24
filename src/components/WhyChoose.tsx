import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'

export function WhyChoose() {
  const { t } = useLocale()
  const block = t.whyChoose

  return (
    <section className="why-choose" id="why-choose" data-scene="ink">
      <Reveal once>
        <div className="why-choose__head">
          <h2>{block.title}</h2>
        </div>
      </Reveal>
      <ol className="why-choose__rows">
        {block.points.map((point, index) => {
          const Heading = point.heading
          return (
            <li key={point.title}>
              <Reveal delay={index * 160} from="up" once>
                <article className="reason">
                  <span className="reason__n" aria-hidden="true">
                    {index + 1}
                  </span>
                  <Heading className="reason__title">{point.title}</Heading>
                  <p className="reason__text">{point.text}</p>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
