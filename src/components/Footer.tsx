import { Wordmark } from "./Wordmark";
import { Reveal } from "./Reveal";

const links = [
  { href: "#why", label: "Про нас" },
  { href: "#services", label: "Послуги" },
  { href: "#cases", label: "Кейси" },
  { href: "#approach", label: "Підхід" },
  { href: "#contact", label: "Контакти" },
];

export function Footer() {
  return (
    <footer className="site-footer" data-scene="close">
      <Reveal from="soft">
        <div className="site-footer__top">
          <a
            href="#top"
            className="brand"
            aria-label="DemWay digital agency"
          >
            <Wordmark />
          </a>
          <nav className="site-footer__nav" aria-label="Нижня навігація">
            {links.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nav__cta" href="#contact">
              Бриф
            </a>
          </nav>
        </div>
        <p className="site-footer__line">
          Зберемо систему, яка веде до продажу. Без зайвого шуму — лише те, що
          працює разом.
        </p>
        <div className="site-footer__bar">
          <span>© {new Date().getFullYear()} DemWay</span>
          <a href="#top">Нагору</a>
        </div>
      </Reveal>
    </footer>
  );
}
