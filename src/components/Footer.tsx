import { Link, NavLink, useLocation } from 'react-router-dom'
import { Wordmark } from './Wordmark'
import { Reveal } from './Reveal'
import { contactInbox, instagramUrl } from '../data/contact'
import { serviceGroupAnchors, serviceGroups } from '../data/services'
import { useLocale } from '../i18n/locale'

export function Footer() {
  const { t } = useLocale()
  const location = useLocation()
  const onServices = location.pathname.replace(/\/$/, '').endsWith('/poslugy')
  const contactTo = onServices
    ? { pathname: '/poslugy', hash: '#contact' }
    : { pathname: '/', hash: '#contact' }
  const faqTo = onServices
    ? { pathname: '/poslugy', hash: '#faq' }
    : { pathname: '/', hash: '#faq' }

  return (
    <footer className="site-footer" data-scene="close">
      <Reveal from="soft">
        <div className="site-footer__head">
          <Link to="/" className="brand" aria-label="DemWay digital agency">
            <Wordmark />
          </Link>
          <p className="site-footer__aside">
            <span>UA · online</span>
            <span>{t.footer.aside}</span>
          </p>
        </div>

        <div className="site-footer__cols">
          <nav className="site-footer__col" aria-label={t.footer.services}>
            <p className="site-footer__label">{t.footer.services}</p>
            <ul>
              {serviceGroups.map((group) => (
                <li key={group}>
                  <Link to={`/poslugy?napryam=${serviceGroupAnchors[group]}`}>
                    {t.groups[group]}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="site-footer__more" to="/poslugy">
                  {t.footer.catalog}
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label={t.footer.company}>
            <p className="site-footer__label">{t.footer.company}</p>
            <ul>
              <li>
                <Link to={{ pathname: '/', hash: '#why' }}>{t.nav.about}</Link>
              </li>
              <li>
                <Link to={{ pathname: '/', hash: '#cases' }}>{t.nav.cases}</Link>
              </li>
              <li>
                <Link to={{ pathname: '/', hash: '#approach' }}>{t.nav.approach}</Link>
              </li>
              <li>
                <Link to={faqTo}>FAQ</Link>
              </li>
              <li>
                <NavLink
                  to="/poslugy"
                  className={({ isActive }) => (isActive ? 'is-current' : '')}
                >
                  {t.catalog.title}
                </NavLink>
              </li>
              <li>
                <Link to={contactTo}>{t.nav.brief}</Link>
              </li>
            </ul>
          </nav>

          <div className="site-footer__col site-footer__col--contact">
            <p className="site-footer__label">{t.footer.contacts}</p>
            <ul>
              <li>
                <span>{t.footer.mail}</span>
                <a href={`mailto:${contactInbox}`}>{contactInbox}</a>
              </li>
              <li>
                <span>{t.footer.channel}</span>
                <Link to={contactTo}>{t.footer.channelValue}</Link>
              </li>
              <li>
                <span>{t.footer.format}</span>
                <p>{t.footer.formatValue}</p>
              </li>
              <li>
                <span>{t.footer.hours}</span>
                <p>{t.footer.hoursValue}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bar">
          <a
            className="site-footer__social"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram DemWay"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
              />
            </svg>
          </a>
          <span>© {new Date().getFullYear()} DemWay</span>
        </div>
      </Reveal>
    </footer>
  )
}
