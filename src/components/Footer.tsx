import { Link, NavLink, useLocation } from 'react-router-dom'
import { Wordmark } from './Wordmark'
import { Reveal } from './Reveal'

export function Footer() {
  const location = useLocation()
  const onServices = location.pathname.replace(/\/$/, '').endsWith('/poslugy')
  const contactTo = onServices
    ? { pathname: '/poslugy', hash: '#contact' }
    : { pathname: '/', hash: '#contact' }
  const topTo = onServices ? '/poslugy' : { pathname: '/', hash: '#top' }

  return (
    <footer className="site-footer" data-scene="close">
      <Reveal from="soft">
        <div className="site-footer__top">
          <Link to="/" className="brand" aria-label="DemWay digital agency">
            <Wordmark />
          </Link>
          <nav className="site-footer__nav" aria-label="Нижня навігація">
            <Link to={{ pathname: '/', hash: '#why' }}>Про нас</Link>
            <NavLink
              to="/poslugy"
              className={({ isActive }) => (isActive ? 'is-current' : '')}
            >
              Послуги
            </NavLink>
            <Link to={{ pathname: '/', hash: '#cases' }}>Кейси</Link>
            <Link to={{ pathname: '/', hash: '#approach' }}>Підхід</Link>
            <Link to={contactTo}>Контакти</Link>
            <Link className="nav__cta" to={contactTo}>
              Бриф
            </Link>
          </nav>
        </div>
        <p className="site-footer__line">
          Зберемо систему, яка веде до продажу. Без зайвого шуму — лише те, що
          працює разом.
        </p>
        <div className="site-footer__bar">
          <span>© {new Date().getFullYear()} DemWay</span>
          <Link to={topTo}>Нагору</Link>
        </div>
      </Reveal>
    </footer>
  )
}
