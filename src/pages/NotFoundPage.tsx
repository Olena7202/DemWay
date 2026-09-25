import { Link } from 'react-router-dom'
import moon from '../assets/logo-moon.png'
import mark from '../assets/logo-dw.png'
import { Reveal } from '../components/Reveal'
import { useLocale } from '../i18n/locale'

export function NotFoundPage() {
  const { t } = useLocale()
  const page = t.notFound

  return (
    <section className="hero lost" id="lost" data-scene="khaki">
      <div className="hero__grid">
        <div className="hero__copy">
          <Reveal>
            <p className="eyebrow">{page.kicker}</p>
            <p className="lost__code" aria-hidden="true">
              404
            </p>
            <h1>{page.title}</h1>
          </Reveal>
          <Reveal delay={90} from="soft">
            <p className="lede">{page.text}</p>
          </Reveal>
        </div>
        <figure
          className="hero__mark"
          aria-hidden="true"
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
        <Reveal delay={160} from="soft" className="hero__cta">
          <div className="hero__actions">
            <Link className="btn btn--pink btn--slide" to="/">
              <span>
                <span>{page.home}</span>
                <span>{page.home}</span>
              </span>
            </Link>
            <Link className="btn btn--ink btn--slide" to="/poslugy">
              <span>
                <span>{page.catalog}</span>
                <span>{page.catalog}</span>
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
