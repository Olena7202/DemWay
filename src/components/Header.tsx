import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Wordmark } from './Wordmark'
import { useLocale } from '../i18n/locale'

function NavLinks({ onSelect }: { onSelect: () => void }) {
  const { t } = useLocale()
  const location = useLocation()
  const onServices = location.pathname.replace(/\/$/, '').endsWith('/poslugy')
  const contactTo = onServices
    ? { pathname: '/poslugy', hash: '#contact' }
    : { pathname: '/', hash: '#contact' }

  return (
    <>
      <Link to={{ pathname: '/', hash: '#why' }} onClick={onSelect}>
        {t.nav.about}
      </Link>
      <NavLink
        to="/poslugy"
        className={({ isActive }) => (isActive ? 'is-current' : '')}
        onClick={onSelect}
      >
        {t.nav.services}
      </NavLink>
      <Link to={{ pathname: '/', hash: '#approach' }} onClick={onSelect}>
        {t.nav.approach}
      </Link>
      <Link to={contactTo} onClick={onSelect}>
        {t.nav.contact}
      </Link>
      <Link className="nav__cta" to={contactTo} onClick={onSelect}>
        {t.nav.brief}
      </Link>
    </>
  )
}

function LangSwitch() {
  const { locale, setLocale, t } = useLocale()
  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      <button
        type="button"
        className={locale === 'uk' ? 'is-on' : ''}
        onClick={() => setLocale('uk')}
      >
        UA
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={locale === 'en' ? 'is-on' : ''}
        onClick={() => setLocale('en')}
      >
        EN
      </button>
    </div>
  )
}

export function Header() {
  const { t } = useLocale()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function close() {
    setOpen(false)
  }

  return (
    <>
      <header
        className={`site-header${scrolled && !open ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
      >
        <Link
          to="/"
          className="brand"
          aria-label="DemWay digital agency"
          onClick={close}
        >
          <Wordmark />
        </Link>
        <nav className="nav nav--bar" aria-label={t.nav.aria}>
          <NavLinks onSelect={close} />
        </nav>
        <div className="header-end">
          <LangSwitch />
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <nav
        className={`nav nav--sheet${open ? ' is-open' : ''}`}
        aria-label={t.nav.aria}
        aria-hidden={!open}
      >
        <NavLinks onSelect={close} />
        <LangSwitch />
      </nav>
    </>
  )
}
