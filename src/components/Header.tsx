import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Wordmark } from './Wordmark'

function NavLinks({ onSelect }: { onSelect: () => void }) {
  const location = useLocation()
  const onServices = location.pathname.replace(/\/$/, '').endsWith('/poslugy')
  const contactTo = onServices
    ? { pathname: '/poslugy', hash: '#contact' }
    : { pathname: '/', hash: '#contact' }

  return (
    <>
      <Link to={{ pathname: '/', hash: '#why' }} onClick={onSelect}>
        Про нас
      </Link>
      <NavLink
        to="/poslugy"
        className={({ isActive }) => (isActive ? 'is-current' : '')}
        onClick={onSelect}
      >
        Послуги
      </NavLink>
      <Link to={{ pathname: '/', hash: '#cases' }} onClick={onSelect}>
        Кейси
      </Link>
      <Link to={{ pathname: '/', hash: '#approach' }} onClick={onSelect}>
        Підхід
      </Link>
      <Link to={contactTo} onClick={onSelect}>
        Контакти
      </Link>
      <Link className="nav__cta" to={contactTo} onClick={onSelect}>
        Бриф
      </Link>
    </>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
        <nav className="nav nav--bar" aria-label="Навігація">
          <NavLinks onSelect={close} />
        </nav>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>
      <nav
        className={`nav nav--sheet${open ? ' is-open' : ''}`}
        aria-label="Мобільне меню"
        aria-hidden={!open}
      >
        <NavLinks onSelect={close} />
      </nav>
    </>
  )
}
