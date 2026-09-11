import { useEffect, useState } from 'react'
import { Wordmark } from './Wordmark'

const links = [
  { href: '#why', label: 'Про нас' },
  { href: '#services', label: 'Послуги' },
  { href: '#cases', label: 'Кейси' },
  { href: '#approach', label: 'Підхід' },
  { href: '#contact', label: 'Контакти' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled || open ? ' is-scrolled' : ''}`}>
      <a href="#top" className="brand" aria-label="DemWay digital agency" onClick={() => setOpen(false)}>
        <Wordmark />
      </a>

      <nav className={`nav ${open ? 'nav--open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav__cta" href="#contact" onClick={() => setOpen(false)}>
          Бриф
        </a>
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
  )
}
