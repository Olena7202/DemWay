import { useState, type FormEvent } from 'react'
import { services } from '../data/services'
import { Reveal } from './Reveal'

const directions = ['Система під ключ', ...services.map((service) => service.title)]
const channels = ['Телефон', 'Telegram', 'Email']

export function Contact() {
  const [sent, setSent] = useState(false)
  const [direction, setDirection] = useState('Система під ключ')
  const [channel, setChannel] = useState('Telegram')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
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
        <p className="contact__done" role="status">
          Дякуємо. Запит отримано — звʼяжемось найближчим часом.
        </p>
      ) : (
        <Reveal delay={80} from="right">
          <form className="contact__form" onSubmit={onSubmit}>
            <label>
              Імʼя *
              <input name="name" type="text" required autoComplete="name" placeholder="Олена" />
            </label>
            <label>
              Телефон *
              <input name="phone" type="tel" required autoComplete="tel" placeholder="+380" />
            </label>
            <label className="contact__full">
              Компанія
              <input name="company" type="text" placeholder="Назва бренду" />
            </label>
            <fieldset className="contact__full contact__picks">
              <legend>Що запускаємо *</legend>
              <input type="hidden" name="service" value={direction} />
              <div className="contact__chips">
                {directions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`contact__chip${direction === item ? ' contact__chip--on' : ''}`}
                    onClick={() => setDirection(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="contact__full">
              Задача *
              <textarea
                name="task"
                rows={5}
                required
                placeholder="Що вже є і що має зʼявитись після запуску"
              />
            </label>
            <fieldset className="contact__full contact__picks">
              <legend>Як відповісти *</legend>
              <input type="hidden" name="channel" value={channel} />
              <div className="contact__chips">
                {channels.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`contact__chip${channel === item ? ' contact__chip--on' : ''}`}
                    onClick={() => setChannel(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="contact__check">
              <input name="consent" type="checkbox" required />
              <span>Погоджуюсь на обробку даних для відповіді по запиту.</span>
            </label>
            <button className="btn btn--pink btn--slide" type="submit">
              <span>
                <span>Надіслати</span>
                <span>Надіслати</span>
              </span>
            </button>
          </form>
        </Reveal>
      )}
    </section>
  )
}
