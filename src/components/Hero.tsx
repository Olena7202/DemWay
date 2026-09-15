import moon from '../assets/logo-moon.png'
import mark from '../assets/logo-dw.png'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section className="hero" id="top" data-scene="khaki">
      <div className="hero__grid">
        <div className="hero__copy">
          <Reveal>
            <h1 className="hero__title">
              <span className="hero__title-name">DemWay —</span>
              <span className="hero__title-agency">digital agency</span>
            </h1>
          </Reveal>
          <Reveal delay={90} from="soft">
            <p className="lede">
              Кожне рішення будуємо навколо вашого бізнесу: сайти й лендінги, CRM,
              пошук, реклама та айдентика — від першого контакту до покупки.
            </p>
          </Reveal>
          <Reveal delay={160} from="soft">
            <div className="hero__actions">
              <a className="btn btn--pink btn--slide" href="#contact">
                <span>
                  <span>Обговорити задачу</span>
                  <span>Обговорити задачу</span>
                </span>
              </a>
              <a className="btn btn--ink" href="#cases">
                Дивитись кейси
              </a>
            </div>
          </Reveal>
        </div>
        <figure
          className="hero__mark"
          aria-label="DemWay"
          onContextMenu={(event) => event.preventDefault()}
          onDragStart={(event) => event.preventDefault()}
        >
          <div className="hero__stage">
            <div
              className="hero__planet"
              style={{ backgroundImage: `url(${moon})` }}
            />
            <div
              className="hero__brand"
              style={{ backgroundImage: `url(${mark})` }}
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
