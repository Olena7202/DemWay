import { useEffect, useRef, useState, type FormEvent } from 'react'
import { contactInbox } from '../data/contact'
import { serviceGroups, services } from '../data/services'
import { Reveal } from './Reveal'

const channels = ['Телефон', 'Telegram', 'Email'] as const

type Channel = (typeof channels)[number]

const replyField: Record<
  Channel,
  { label: string; name: string; type: string; placeholder: string; autoComplete: string }
> = {
  Телефон: {
    label: 'Номер телефону *',
    name: 'phone',
    type: 'tel',
    placeholder: '+380',
    autoComplete: 'tel',
  },
  Telegram: {
    label: 'Нік у Telegram *',
    name: 'telegram',
    type: 'text',
    placeholder: '@nickname',
    autoComplete: 'username',
  },
  Email: {
    label: 'Email *',
    name: 'email',
    type: 'email',
    placeholder: 'name@company.com',
    autoComplete: 'email',
  },
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
        <div className="contact-select__menu" role="listbox" aria-label="Що запускаємо">
          <button
            type="button"
            role="option"
            aria-selected={value === 'Система під ключ'}
            className={value === 'Система під ключ' ? 'is-on' : ''}
            onClick={() => pick('Система під ключ')}
          >
            Система під ключ
          </button>
          {serviceGroups.map((group) => (
            <div key={group} className="contact-select__group">
              <p>{group}</p>
              {services
                .filter((service) => service.group === group)
                .map((service) => (
                  <button
                    key={service.slug}
                    type="button"
                    role="option"
                    aria-selected={value === service.title}
                    className={value === service.title ? 'is-on' : ''}
                    onClick={() => pick(service.title)}
                  >
                    {service.title}
                  </button>
                ))}
            </div>
          ))}
          <button
            type="button"
            role="option"
            aria-selected={value === 'Інше'}
            className={value === 'Інше' ? 'is-on' : ''}
            onClick={() => pick('Інше')}
          >
            Інше
          </button>
        </div>
      ) : null}
    </div>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [direction, setDirection] = useState('Система під ключ')
  const [channel, setChannel] = useState<Channel>('Telegram')
  const reply = replyField[channel]

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
      setError('Заповніть обовʼязкові поля.')
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

    if (channel === 'Email') {
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
      setError('Не вдалось надіслати. Спробуйте ще раз.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact" id="contact" data-scene="close">
      <Reveal from="left">
        <div className="contact__intro">
          <p className="eyebrow">Контакти</p>
          <h2>Напишіть задачу — зберемо прорахунок</h2>
          <p>
            Без анкети на два екрани. Коротко: хто ви, що треба запустити, як зручно
            відповісти.
          </p>
          <ul className="contact__notes">
            <li>
              <span>01</span>
              Відповідаємо в той самий канал, який оберете.
            </li>
            <li>
              <span>02</span>
              Спочатку обсяг і строки, потім цифри — без шаблонної презентації.
            </li>
          </ul>
        </div>
      </Reveal>

      {sent ? (
        <div className="contact__receipt" role="status">
          <p className="eyebrow">Готово</p>
          <h3>Запит отримано</h3>
          <p>Звʼяжемось у канал, який ви обрали — без шаблонної презентації.</p>
        </div>
      ) : (
        <Reveal delay={80} from="right">
          <form className="contact__form" onSubmit={onSubmit}>
            <label className="contact__honey" aria-hidden="true">
              Сайт
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
            <label>
              Імʼя *
              <input name="name" type="text" required autoComplete="name" placeholder="Олена" />
            </label>
            <label>
              Компанія
              <input name="company" type="text" placeholder="Назва бренду" />
            </label>
            <label className="contact__full">
              Що запускаємо *
              <ServiceSelect value={direction} onChange={setDirection} />
            </label>
            <label className="contact__full">
              Задача *
              <textarea
                name="task"
                rows={4}
                required
                placeholder="Що вже є і що має зʼявитись після запуску"
              />
            </label>
            <fieldset className="contact__full contact__picks">
              <legend>Як відповісти *</legend>
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
                    {item}
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
              <span>Погоджуюсь на обробку даних для відповіді по запиту.</span>
            </label>
            {error ? (
              <p className="contact__error" role="alert">
                {error}
              </p>
            ) : null}
            <button className="btn btn--pink btn--slide" type="submit" disabled={sending}>
              <span>
                <span>{sending ? 'Надсилаємо…' : 'Надіслати'}</span>
                <span>{sending ? 'Надсилаємо…' : 'Надіслати'}</span>
              </span>
            </button>
          </form>
        </Reveal>
      )}
    </section>
  )
}
