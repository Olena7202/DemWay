import { useEffect, useRef, useState, type FormEvent } from 'react'
import { contactInbox } from '../data/contact'
import { serviceGroups, services } from '../data/services'
import { Reveal } from './Reveal'
import { useLocale } from '../i18n/locale'
import { localizeService } from '../i18n/services'
import type { Copy } from '../i18n/copy'

const channels = ['phone', 'telegram', 'email'] as const

type Channel = (typeof channels)[number]

function replyMeta(t: Copy, channel: Channel) {
  if (channel === 'phone') {
    return {
      label: t.contact.phoneLabel,
      name: 'phone',
      type: 'tel',
      placeholder: '+380',
      autoComplete: 'tel',
    }
  }
  if (channel === 'telegram') {
    return {
      label: t.contact.telegramLabel,
      name: 'telegram',
      type: 'text',
      placeholder: '@nickname',
      autoComplete: 'username',
    }
  }
  return {
    label: t.contact.emailLabel,
    name: 'email',
    type: 'email',
    placeholder: 'name@company.com',
    autoComplete: 'email',
  }
}

function field(data: FormData, name: string) {
  return String(data.get(name) ?? '').trim()
}

function isActivateMessage(message: string) {
  return /activat/i.test(message)
}

function ServiceSelect({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  const { t, locale } = useLocale()
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (event: MouseEvent) => {
      if (!box.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function pick(next: string) {
    onChange(next)
    setOpen(false)
  }

  return (
    <div className={`contact-select${open ? ' is-open' : ''}`} ref={box}>
      <input type="hidden" name="service" value={value} />
      <button
        className="contact-select__btn"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {value}
      </button>
      {open ? (
        <div className="contact-select__menu" role="listbox" aria-label={t.contact.service}>
          <button
            type="button"
            role="option"
            aria-selected={value === t.contact.fullSystem}
            className={value === t.contact.fullSystem ? 'is-on' : ''}
            onClick={() => pick(t.contact.fullSystem)}
          >
            {t.contact.fullSystem}
          </button>
          {serviceGroups.map((group) => (
            <div key={group} className="contact-select__group">
              <p>{t.groups[group]}</p>
              {services
                .filter((service) => service.group === group)
                .map((service) => {
                  const title = localizeService(service, locale).title
                  return (
                    <button
                      key={service.slug}
                      type="button"
                      role="option"
                      aria-selected={value === title}
                      className={value === title ? 'is-on' : ''}
                      onClick={() => pick(title)}
                    >
                      {title}
                    </button>
                  )
                })}
            </div>
          ))}
          <button
            type="button"
            role="option"
            aria-selected={value === t.contact.other}
            className={value === t.contact.other ? 'is-on' : ''}
            onClick={() => pick(t.contact.other)}
          >
            {t.contact.other}
          </button>
        </div>
      ) : null}
    </div>
  )
}

export function Contact() {
  const { t, locale } = useLocale()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [localeTick, setLocaleTick] = useState(locale)
  const [direction, setDirection] = useState(t.contact.fullSystem)
  const [channel, setChannel] = useState<Channel>('telegram')
  const reply = replyMeta(t, channel)

  if (localeTick !== locale) {
    setLocaleTick(locale)
    setDirection(t.contact.fullSystem)
    setError('')
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending) return

    const data = new FormData(event.currentTarget)

    if (field(data, 'website')) {
      setSent(true)
      return
    }

    const name = field(data, 'name')
    const replyValue = field(data, reply.name)
    const task = field(data, 'task')

    if (!name || !replyValue || !task) {
      setError(t.contact.error)
      return
    }

    setSending(true)
    setError('')

    const payload: Record<string, string> = {
      _subject: `DemWay: запит від ${name}`,
      _template: 'table',
      _captcha: 'false',
      "Ім'я": name,
      Компанія: field(data, 'company') || '—',
      Послуга: field(data, 'service') || direction,
      Задача: task,
      'Канал відповіді': channel,
      Контакт: replyValue,
    }

    if (channel === 'email') {
      payload._replyto = replyValue
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactInbox}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const raw = await response.text()
      let result: { success?: string | boolean; message?: string } = {}
      try {
        result = JSON.parse(raw) as { success?: string | boolean; message?: string }
      } catch {
        throw new Error('bad response')
      }

      const message = String(result.message ?? '')
      const ok = result.success === true || result.success === 'true'

      if (ok || isActivateMessage(message)) {
        setSent(true)
        return
      }

      throw new Error(message || 'send failed')
    } catch {
      setError(t.contact.sendFail)
    } finally {
      setSending(false)
    }
  }

  const channelLabel: Record<Channel, string> = {
    phone: t.contact.phone,
    telegram: t.contact.telegram,
    email: t.contact.email,
  }

  return (
    <section className="contact" id="contact" data-scene="close">
      <Reveal from="left">
        <div className="contact__intro">
          <p className="eyebrow">{t.contact.kicker}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <ul className="contact__notes">
            <li>
              <span>1</span>
              {t.contact.notes[0]}
            </li>
            <li>
              <span>2</span>
              {t.contact.notes[1]}
            </li>
          </ul>
        </div>
      </Reveal>

      {sent ? (
        <Reveal delay={80} from="right">
          <div className="contact__receipt" role="status">
            <h3>{t.contact.received}</h3>
            <p className="contact__receipt-note">
              {t.contact.reply.replace(/\s+\S+$/, '')}{' '}
              <span className="contact__end">
                {t.contact.reply.trim().split(/\s+/).at(-1)}
                <span className="contact__stars" aria-hidden="true">
                <svg viewBox="0 0 36 28" fill="none">
                  <path
                    d="M13 3.2 14.55 10.15 21.7 11.7 14.55 13.25 13 20.2 11.45 13.25 4.3 11.7 11.45 10.15Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.2 2.4 27.85 5.2l2.9.65-2.9.65-.65 2.8-.65-2.8-2.9-.65 2.9-.65Z"
                    stroke="currentColor"
                    strokeWidth="1.05"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.4 8.6 32.85 10.5l1.95.45-1.95.45-.45 1.9-.45-1.9-1.95-.45 1.95-.45Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              </span>
            </p>
          </div>
        </Reveal>
      ) : (
        <Reveal delay={80} from="right">
          <form className="contact__form" key={locale} onSubmit={onSubmit}>
            <label className="contact__honey" aria-hidden="true">
              {t.contact.honey}
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              {t.contact.name}
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={t.contact.namePh}
              />
            </label>
            <label>
              {t.contact.company}
              <input
                name="company"
                type="text"
                placeholder={t.contact.companyPh}
              />
            </label>
            <label className="contact__full">
              {t.contact.service}
              <ServiceSelect value={direction} onChange={setDirection} />
            </label>
            <label className="contact__full">
              {t.contact.task}
              <textarea
                name="task"
                rows={4}
                required
                placeholder={t.contact.taskPh}
              />
            </label>
            <fieldset className="contact__full contact__picks">
              <legend>{t.contact.channel}</legend>
              <input type="hidden" name="channel" value={channel} />
              <div className="contact__chips contact__chips--channels">
                {channels.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`contact__chip${channel === item ? ' contact__chip--on' : ''}`}
                    aria-pressed={channel === item}
                    onClick={() => setChannel(item)}
                  >
                    {channelLabel[item]}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="contact__full" key={reply.name}>
              {reply.label}
              <input
                name={reply.name}
                type={reply.type}
                required
                autoComplete={reply.autoComplete}
                placeholder={reply.placeholder}
              />
            </label>
            <label className="contact__check">
              <input name="consent" type="checkbox" required />
              <span>{t.contact.consent}</span>
            </label>
            {error ? (
              <p className="contact__error" role="alert">
                {error}
              </p>
            ) : null}
            <button className="btn btn--pink btn--slide" type="submit" disabled={sending}>
              <span>
                <span>{sending ? t.contact.sending : t.contact.send}</span>
                <span>{sending ? t.contact.sending : t.contact.send}</span>
              </span>
            </button>
          </form>
        </Reveal>
      )}
    </section>
  )
}
