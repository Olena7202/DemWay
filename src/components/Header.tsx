import { useEffect, useState } from 'react'
import { Wordmark } from './Wordmark'

const links = [
  { href: '#why', label: 'Про нас' },
  { href: '#services', label: 'Послуги' },
  { href: '#cases', label: 'Кейси' },
  { href: '#approach', label: 'Підхід' },
  { href: '#contact', label: 'Контакти' },
]

function NavLinks({ onSelect }: { onSelect: () => void }) {
  return (
    <>
      {links.map((link) => (
        <a key={link.href} href={link.href} onClick={onSelect}>
          {link.label}
        </a>
      ))}
      <a className="nav__cta" href="#contact" onClick={onSelect}>
        Бриф
      </a>
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
        <a href="#top" className="brand" aria-label="DemWay digital agency" onClick={close}>
          <Wordmark />
        </a>
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
