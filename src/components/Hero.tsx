import { Reveal } from './Reveal'
import planet from '../assets/logo-orb.png'

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
        <figure className="hero__mark">
          <Reveal from="scale">
            <img
              src={planet}
              alt="DemWay"
              width={1100}
              height={1100}
            />
          </Reveal>
        </figure>
      </div>
    </section>
  )
}
