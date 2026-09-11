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
              Лендінг, каса, CRM, пошук і айдентика - в одній системі. Продукт,
              яким можна керувати продажами, а не набір розрізнених підрядників.
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
              <a className="btn btn--ghost" href="#cases">
                Дивитись кейси
              </a>
            </div>
          </Reveal>
        </div>
        <figure className="hero__mark" aria-label="DemWay">
          <span className="hero__ring" aria-hidden="true" />
          <div className="hero__stage">
            <div className="hero__planet">
              <img src={moon} alt="" width={1100} height={1100} />
            </div>
            <div className="hero__brand">
              <img src={mark} alt="" width={740} height={414} />
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}
