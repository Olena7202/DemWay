import type { ServiceGroup } from '../data/services'

export type Locale = 'uk' | 'en'

export type Copy = {
  meta: { title: string; tab: string; description: string }
  nav: {
    about: string
    services: string
    approach: string
    contact: string
    brief: string
    openMenu: string
    closeMenu: string
    aria: string
    language: string
    packages: string
  }
  hero: { titleName: string; titleAgency: string; lede: string; discuss: string; cases: string }
  why: {
    kicker: string
    title: string
    text: string
    lead: string
    leadText: string
    points: { title: string; text: string }[]
  }
  whyChoose: {
    kicker: string
    title: string
    points: { title: string; text: string; heading: 'h3' | 'h4' }[]
  }
  servicesTeaser: {
    kicker: string
    title: string
    text: string
    catalog: string
    openTab: string
    go: string
  }
  openingOffers: {
    kicker: string
    title: string
    text: string
    includes: string
    resultLabel: string
    save: string
    discuss: string
    note: string
    items: {
      id: string
      label: string
      name: string
      for: string
      result: string
      was: string
      now: string
      featured?: boolean
      items: [string, string, string]
    }[]
  }
  groups: Record<ServiceGroup, string>
  groupHeadings: Partial<Record<ServiceGroup, string>>
  clusters: Record<string, string>
  clusterLeads: Partial<Record<string, string>>
  groupLeads: Partial<Record<ServiceGroup, string>>
  teaserBlurbs: Record<ServiceGroup, string>
  catalog: {
    kicker: string
    title: string
    text: string
    tabsAria: string
    packagesAria: string
    picked: string
    quote: string
    discuss: string
    term: string
    expand: string
    collapse: string
  }
  approach: {
    kicker: string
    title: string
    steps: { title: string; text: string; heading?: 'h3' | 'h4' }[]
  }
  faq: {
    kicker: string
    title: string
    text: string
    items: { q: string; a: string }[]
  }
  contact: {
    kicker: string
    title: string
    text: string
    notes: [string, string]
    received: string
    reply: string
    name: string
    namePh: string
    company: string
    companyPh: string
    service: string
    task: string
    taskPh: string
    channel: string
    phone: string
    telegram: string
    email: string
    phoneLabel: string
    telegramLabel: string
    emailLabel: string
    consent: string
    send: string
    sending: string
    error: string
    sendFail: string
    fullSystem: string
    other: string
    honey: string
    privacy: string
    offer: string
    consentJoin: string
  }
  legal: {
    kicker: string
    title: string
    description: string
    updated: string
    privacyTitle: string
    privacy: { title: string; text: string }[]
    offerTitle: string
    offer: { title: string; text: string }[]
  }
  notFound: {
    kicker: string
    title: string
    text: string
    home: string
    catalog: string
  }
  footer: {
    aside: string
    services: string
    company: string
    contacts: string
    catalog: string
    mail: string
    channel: string
    channelValue: string
    format: string
    formatValue: string
    hours: string
    hoursValue: string
    rights: string
  }
}

export const copy: Record<Locale, Copy> = {
  uk: {
    meta: {
      title: 'Діджитал агенція - розробка сайту, маркетинг, SEO та реклама|DemWay',
      tab: 'DemWay agency',
      description:
        'Діджитал агентство DemWay поєднує усе необхідне для розвитку вашого бізнесу. Розробка сайту,SEO,контекстна реклама, Google Ads та email - маркетинг в одному місці. Замовляйте digital-послуги під ключ та зростайте онлайн з нами!',
    },
    nav: {
      about: 'Про нас',
      services: 'Послуги',
      approach: 'Підхід',
      contact: 'Контакти',
      brief: 'Обговорити проєкт',
      packages: 'Пакети',
      openMenu: 'Відкрити меню',
      closeMenu: 'Закрити меню',
      aria: 'Навігація',
      language: 'Мова',
    },
    hero: {
      titleName: 'DemWay -',
      titleAgency: 'digital-агенція повного циклу',
      lede: 'Перетворюємо бізнес на бренд, який знаходять, обирають і запам’ятовують. Створюємо сайт, залучаємо клієнтів та розвиваємо бізнес з нуля.',
      discuss: 'Обговорити задачу',
      cases: 'Дивитись послуги',
    },
    why: {
      kicker: 'DemWay',
      title: 'Про нас',
      text: 'DemWay - діджитал агентство, яке допомагає бізнесу вибудувати зрозумілу digital-систему без необхідності самостійно розбиратися в маркетингу. Ми поєднуємо стратегію, креатив і технології, щоб маркетингові рішення відповідали цілям бізнесу, його можливостям та бюджету.',
      lead: 'Digital-маркетинг як система для розвитку бізнесу',
      leadText:
        'Digital-маркетинг — це не окремі рекламні інструменти, а система, у якій кожен канал працює на спільну ціль. Ми допомагаємо вибудувати послідовний шлях від першого контакту з брендом до залучення та утримання клієнта.',
      points: [
        {
          title: 'Для кого ми працюємо',
          text: 'Працюємо з бізнесами, які хочуть розвиватись онлайн, але не мають власного маркетолога або чіткого digital-плану. Допомагаємо як новим проєктам, так і компаніям, які прагнуть оновити сайт, покращити просування чи систематизувати маркетинг.',
        },
        {
          title: 'Від ідеї до результату з чіткою стратегією',
          text: 'Не просто виконуємо окремі завдання, а формуємо стратегію, визначаємо пріоритети й підбираємо маркетингові рішення, які відповідають вашим цілям та бюджету.',
        },
      ],
    },
    whyChoose: {
      kicker: 'Чому ми',
      title: 'Чому обирають наше діджитал агентство',
      points: [
        {
          title: 'Рішення під конкретний бізнес',
          heading: 'h3',
          text: 'Не шаблон «для всіх». Сайт, SEO і рекламу збираємо під нішу, продукт і бюджет.',
        },
        {
          title: 'Прозорий процес роботи',
          heading: 'h4',
          text: 'Дедлайни й зона відповідальності зрозумілі. Не обіцяємо неможливе і не зникаємо після запуску.',
        },
        {
          title: 'Орієнтація на результат',
          heading: 'h4',
          text: 'Кожен інструмент працює на заявки, продажі й розвиток, а не на «просто бути в інтернеті».',
        },
      ],
    },
    servicesTeaser: {
      kicker: 'Послуги',
      title: 'Послуги діджитал агентства',
      text: 'Ми зібрали ключові маркетингові послуги в одному місці, щоб бізнесу не доводилося збирати діджитал по частинках. Від створення сайту та SEO-оптимізації до реклами та ремаркетингу - будуємо систему, де кожен інструмент працює на спільну ціль.',
      catalog: 'Увесь каталог пакетів',
      openTab: 'Відкрити вкладку «{name}» і подивитись пакети',
      go: 'Відкрити вкладку з пакетами',
    },
    openingOffers: {
      kicker: 'Пакети',
      title: 'Оберіть формат запуску',
      text: 'Не збирайте сайт, рекламу і SEO з окремих послуг. Три готові збірки зі знижкою 15% - під етап, на якому зараз ваш бізнес.',
      includes: 'Що входить',
      resultLabel: 'Результат',
      save: '−15%',
      discuss: 'Хочу цей пакет',
      note: 'Медіабюджет реклами, хостинг і домен — не входять у вартість.',
      items: [
        {
          id: 'start-leads',
          label: 'Для нового бізнесу',
          name: 'Запуск заявок',
          for: 'Немає сторінки під рекламу. Потрібна коротка посадка, пошук і лист, щоб перші звернення не губились.',
          result: 'Готова точка входу в рекламу і ланцюжок, яким заявка доходить до пошти.',
          was: '16 000 грн',
          now: '13 500 грн',
          items: ['Лендінг Старт', 'Пошукова реклама', 'Email-маркетинг'],
        },
        {
          id: 'site-exists',
          label: 'Найчастіше обирають',
          name: 'Сайт уже є',
          for: 'Сторінка стоїть, але заявок мало. Додаємо видимість у пошуку, рекламу і перевірку, що саме конвертує.',
          result: 'Існуючий сайт починає приводити звернення, а не просто «бути в інтернеті».',
          was: '15 500 грн',
          now: '12 900 грн',
          featured: true,
          items: ['SEO-оптимізація', 'Пошукова реклама', 'A/B тестування'],
        },
        {
          id: 'presence',
          label: 'Для короткої присутності',
          name: 'Вітрина в мережі',
          for: 'Потрібна компактна компанія в мережі — не корпоратив, а візитка, Instagram і базова оптимізація.',
          result: 'Бренд можна знайти, показати і запустити в рекламу з однієї узгодженої основи.',
          was: '22 000 грн',
          now: '18 500 грн',
          items: ['Сайт-візитка', 'Instagram Ads', 'SEO-оптимізація'],
        },
      ],
    },
    groups: {
      Сайти: 'Сайти',
      Редизайн: 'Редизайн',
      SEO: 'SEO',
      Реклама: 'Реклама',
      Системи: 'Системи',
      Айдентика: 'Айдентика',
    },
    groupHeadings: {
      Сайти: 'Розробка сайтів',
      Редизайн: 'Редизайн',
      SEO: 'SEO',
      Реклама: 'Реклама',
      Системи: 'Системи',
    },
    clusters: {
      'Новий сайт': 'Новий сайт',
      Оновлення: 'Оновлення',
      'Редизайн сайтів': 'Редизайн сайтів',
      'SEO-просування': 'SEO-просування',
      'Google Ads': 'Google Ads',
      'Meta Ads': 'Meta Ads',
      'Email-маркетинг': 'Email-маркетинг',
      Системи: 'Системи',
      'CRM та автоматизація': 'CRM та автоматизація',
      Бренд: 'Бренд',
    },
    clusterLeads: {
      'SEO-просування':
        'Залучаємо цільових клієнтів із пошуку, підвищуємо видимість сайту та отримуємо стабільний органічний трафік без постійної оплати за кожен клік.',
      'Google Ads':
        'Налаштовуємо Google Ads для залучення цільової аудиторії та контролю рекламних витрат. Визначаємо потрібні кампанії, аудиторії та цілі, а після запуску аналізуємо дані й оптимізуємо рекламу.',
      'Meta Ads':
        'Запускаємо таргетовану рекламу в Meta для підвищення впізнаваності бренду, залучення нової аудиторії, повернення потенційних клієнтів і просування конкретних пропозицій.',
      'Email-маркетинг':
        'Створюємо комунікацію, яка нагадує про бренд, повертає аудиторію та підтримує повторні покупки. Не втрачаємо контакт із клієнтами після першої взаємодії.',
      Системи:
        'Будуємо digital-системи, які спрощують роботу з клієнтами, продажами та маркетингом. Поєднуємо інструменти так, щоб дані не залишалися окремо в різних сервісах.',
      'CRM та автоматизація':
        'Структуруємо процес роботи з потенційними клієнтами, щоб жодна заявка не губилася, а команда розуміла, на якому етапі перебуває кожен контакт.',
    },
    groupLeads: {
      Сайти:
        'Створюємо сайти, які не просто презентують бізнес, а допомагають досягати комерційних цілей. Розробляємо нові проєкти, оновлюємо наявні та адаптуємо їх під потреби користувачів і бізнесу.',
      Редизайн:
        'Оновлюємо сайт, коли його вигляд, структура або логіка вже не відповідають бренду та очікуванням аудиторії. Редизайн допомагає зробити сайт сучаснішим, зрозумілішим і зручнішим без втрати його основної цінності для бізнесу.',
      SEO: 'SEO — ключовий елемент успішної стратегії просування. Бути в правильному місці в правильний час — це не магія, а якісна SEO-оптимізація сайту. Аналізуємо сайт, пошуковий попит і конкурентне середовище, щоб визначити точки росту.',
      Реклама:
        'Запускаємо рекламу там, де потенційні клієнти вже шукають рішення або взаємодіють із брендами. Підбираємо рекламні канали відповідно до цілей, аудиторії та доступного бюджету.',
      Системи:
        'Будуємо digital-системи, які спрощують роботу з клієнтами, продажами та маркетингом. Поєднуємо інструменти так, щоб дані не залишалися окремо в різних сервісах.',
    },
    teaserBlurbs: {
      Сайти: 'Лендінг, візитка чи каталог — сайт під заявку й запуск реклами.',
      Редизайн: 'Оновлюємо лендінг, візитку, корпоративний сайт чи каталог.',
      SEO: 'Ключові слова, метатеги і URL — базова оптимізація під пошук.',
      Реклама: 'Пошук, медійка й товари в Google, Instagram, Facebook Ads, email і A/B тести.',
      Системи: 'CRM, щоб продажі не губились між чатами.',
      Айдентика: 'Логотип і носії, які тримають бренд разом.',
    },
    catalog: {
      kicker: 'Послуги',
      title: 'Каталог пакетів',
      text: 'Оберіть напрям і пакет — склад відкриється поруч.',
      tabsAria: 'Напрями послуг',
      packagesAria: 'Пакети',
      picked: 'обраний пакет',
      quote: 'Вартість — за індивідуальним прорахунком',
      discuss: 'Обговорити пакет',
      term: 'Термін',
      expand: 'Розгорнути',
      collapse: 'Згорнути',
    },
    approach: {
      kicker: 'Підхід',
      title: 'Наш підхід до роботи',
      steps: [
        {
          title: 'Аналіз бізнесу та цілей',
          heading: 'h3',
          text: 'Обговорюємо бізнес, продукт, цілі й очікування. Фіксуємо, що має змінитись після запуску.',
        },
        {
          title: 'Формування digital-стратегії',
          heading: 'h4',
          text: 'Обираємо пріоритети: лендінг, CRM, SEO чи реклама. План робіт і терміни — до першого макета.',
        },
        {
          title: 'Вибір каналів просування',
          heading: 'h4',
          text: 'Дивимось нішу, конкурентів, попит і поточні канали. Без цього не збираємо архітектуру навмання.',
        },
        {
          title: 'Реалізація та запуск',
          heading: 'h3',
          text: 'Дизайн, збірка, інтеграції, креативи. Публікуємо, підключаємо форми, касу, рекламу — система починає збирати заявки.',
        },
        {
          title: 'A/B тестування',
          heading: 'h4',
          text: 'Перевіряємо гіпотези на живих сторінках і креативах. Лишаємо те, що дає заявки, а не «гарніше виглядає».',
        },
        {
          title: 'Оптимізація результатів',
          heading: 'h4',
          text: 'Міряємо заявки, видимість, угоди. Тестуємо й підкручуємо, щоб ріст не зупинявся після старту.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Питання, які часто задають',
      text: 'Коротко про запуск, строки й комунікацію. Якщо вашого питання немає — напишіть у форму, відповімо в той самий канал.',
      items: [
        {
          q: 'Як почати працювати з DemWay?',
          a: 'Напишіть задачу в формі нижче або через Telegram: хто ви, що вже є і що має зʼявитись після запуску. Відповідаємо в обраний канал, уточнюємо обсяг і строки — далі прорахунок. Без шаблонної презентації й довгої анкети.',
        },
        {
          q: 'Який термін реалізації проєкту?',
          a: 'Все залежить від послуги та обсягу роботи. Після першої консультації ми формуємо чіткий план, етапи роботи та погоджуємо терміни. Якщо йдеться про комплексний маркетинговий супровід, це системна довгострокова робота з регулярним аналізом і коригуванням стратегії.',
        },
        {
          q: 'Як відбувається комунікація?',
          a: 'Комунікація відбувається у спільному робочому чаті, де погоджуємо матеріали, обговорюємо поточні задачі та оперативно вирішуємо робочі питання. Ви завжди розумієте, що зараз у роботі та на якому етапі знаходиться проєкт.',
        },
        {
          q: 'Як формується бюджет?',
          a: 'Спочатку обсяг і строки, потім цифри. Пакети в каталозі — орієнтир. Фінальна сума залежить від інтеграцій, контенту й того, чи беремо одну послугу, чи систему. Після узгодження без прихованих доплат.',
        },
        {
          q: 'Чи можна замовити одну послугу, а не повний пакет?',
          a: 'Так. Можна стартувати з лендінгу, SEO, реклами, CRM або айдентики. Якщо далі знадобиться повний контур — зберемо його навколо вже зробленого, без перезапуску з нуля.',
        },
        {
          q: 'Є ідея, але немає чіткого розуміння,яким має бути мій бренд. Що робити?',
          a: 'Короткий опис бізнесу, доступ до поточних каналів, якщо вони вже є, і людина з вашого боку для швидких рішень. Тексти й фото можемо зібрати разом. Ідеальне ТЗ не чекаємо.',
        },
        {
          q: 'Які результати очікувати від співпраці?',
          a: 'Працююча точка входу для клієнтів, зрозумілий канал заявок і план, що робити далі. Цифри залежать від ніші й бюджету — фіксуємо після старту, без обіцянок «гарантованих продажів».',
        },
      ],
    },
    contact: {
      kicker: 'Контакти',
      title: 'Напишіть задачу — зберемо прорахунок',
      text: 'Без анкети на два екрани. Коротко: хто ви, що треба запустити, як зручно відповісти.',
      notes: [
        'Відповідаємо в той самий канал, який оберете.',
        'Спочатку обсяг і строки, потім цифри — без шаблонної презентації.',
      ],
      received: 'Ми вже отримали вашу заявку.',
      reply: 'Скоро зв’яжемося з вами, щоб почати вашу digital-історію',
      name: 'Імʼя *',
      namePh: 'Олена',
      company: 'Компанія',
      companyPh: 'Назва бренду',
      service: 'Що запускаємо *',
      task: 'Задача *',
      taskPh: 'Що вже є і що має зʼявитись після запуску',
      channel: 'Як відповісти *',
      phone: 'Телефон',
      telegram: 'Telegram',
      email: 'Email',
      phoneLabel: 'Номер телефону *',
      telegramLabel: 'Нік у Telegram *',
      emailLabel: 'Email *',
      consent: 'Погоджуюсь на обробку даних для відповіді по запиту згідно з',
      privacy: 'політикою конфіденційності',
      offer: 'публічною офертою',
      consentJoin: 'та',
      send: 'Надіслати',
      sending: 'Надсилаємо…',
      error: 'Заповніть обовʼязкові поля.',
      sendFail: 'Не вдалось надіслати. Спробуйте ще раз.',
      fullSystem: 'Система під ключ',
      other: 'Інше',
      honey: 'Сайт',
    },
    legal: {
      kicker: 'Документи',
      title: 'Політика та оферта',
      description:
        'Як DemWay обробляє дані з форми та на яких умовах надає послуги.',
      updated: 'Оновлено 21 вересня 2026',
      privacyTitle: 'Політика конфіденційності',
      privacy: [
        {
          title: 'Хто обробляє дані',
          text: 'Оператор — DemWay (digital-агенція, формат Україна · онлайн). Контакт: demway.agency@gmail.com, Telegram @DemWay_Team.',
        },
        {
          title: 'Які дані збираємо',
          text: 'З форми: імʼя, компанія, обрана послуга чи пакет, опис задачі, канал відповіді та контакт (телефон, Telegram або email). На сайті зберігаємо обрану мову в браузері.',
        },
        {
          title: 'Навіщо',
          text: 'Щоб відповісти на запит, уточнити обсяг і строки, підготувати прорахунок і вести листування по проєкту. Підстава — ваша згода в формі та необхідність виконати запит до укладення договору.',
        },
        {
          title: 'Кому передаємо',
          text: 'Заявку можемо надіслати на пошту через FormSubmit і в робочий чат через Telegram. Іншим третім особам дані не продаємо і не передаємо для їхнього маркетингу.',
        },
        {
          title: 'Скільки зберігаємо',
          text: 'Поки ведемо листування і стільки, скільки потрібно для обліку послуг і вимог закону. Далі видаляємо або знеособлюємо за запитом на demway.agency@gmail.com.',
        },
        {
          title: 'Ваші права',
          text: 'Можна запитати доступ, виправлення, видалення, обмеження обробки або відкликати згоду. Це не впливає на вже надіслану відповідь, якщо вона вже пішла в роботу.',
        },
      ],
      offerTitle: 'Публічна оферта',
      offer: [
        {
          title: 'Предмет',
          text: 'DemWay пропонує послуги з сайтів, реклами, SEO, CRM та айдентики. Надсилання форми — запит на прорахунок, а не автоматичне замовлення. Договір укладається після узгодження обсягу, строків і вартості.',
        },
        {
          title: 'Вартість',
          text: 'Пакети на головній зі знижкою −15% — орієнтир на зазначених умовах. Каталог — склад послуг без публічної ціни: сума за індивідуальним прорахунком. Медіабюджет реклами, хостинг і домен у вартість пакетів не входять, якщо не погоджено окремо.',
        },
        {
          title: 'Строки і результат',
          text: 'Строки в каталозі орієнтовні. Фінальний план фіксуємо після консультації. Результат — погоджений обсяг робіт, не гарантія продажів чи позицій у пошуку.',
        },
        {
          title: 'Оплата і зміни',
          text: 'Порядок оплати — у рахунку або договорі. Зміни обсягу погоджуємо письмово (чат або email). Право на матеріали переходить після повної оплати відповідного етапу, якщо інше не зазначено.',
        },
        {
          title: 'Право',
          text: 'Стосунки регулює законодавство України. Спори — переговори, далі суди України за місцем реєстрації виконавця, якщо інше не вимагає закон.',
        },
      ],
    },
    notFound: {
      kicker: 'Помилка',
      title: 'Такої сторінки немає',
      text: 'Посилання застаріле або адресу введено з помилкою. Поверніться на головну або відкрийте каталог пакетів.',
      home: 'На головну',
      catalog: 'Каталог пакетів',
    },
    footer: {
      aside: 'Від контакту до угоди',
      services: 'Послуги',
      company: 'Компанія',
      contacts: 'Контакти',
      catalog: 'Увесь каталог',
      mail: 'Пошта',
      channel: 'Канал',
      channelValue: 'Telegram, телефон, email',
      format: 'Формат',
      formatValue: 'Україна · онлайн',
      hours: 'Години',
      hoursValue: 'Пн–Пт, 10:00–18:00',
      rights: 'Усі права захищені',
    },
  },
  en: {
    meta: {
      title: 'DemWay - digital agency',
      tab: 'DemWay agency',
      description:
        'DemWay is a digital agency: landing pages, CRM, SEO, Google Ads, Meta Ads, market analysis, banners and logo.',
    },
    nav: {
      about: 'About',
      services: 'Services',
      approach: 'Approach',
      contact: 'Contact',
      brief: 'Discuss a project',
      packages: 'Bundles',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      aria: 'Navigation',
      language: 'Language',
    },
    hero: {
      titleName: 'DemWay-',
      titleAgency: 'full-cycle digital agency',
      lede: 'Every solution is built around your business: websites and landing pages, CRM, search, ads and identity — from first contact to purchase.',
      discuss: 'Discuss a project',
      cases: 'See services',
    },
    why: {
      kicker: 'DemWay',
      title: 'About us',
      text: 'DemWay is a digital agency that helps businesses build a clear digital system without having to figure out marketing on their own. We combine strategy, creative and technology so marketing decisions match the business goals, capacity and budget.',
      lead: 'Digital marketing as a system for business growth',
      leadText:
        'Digital marketing is not a set of separate ad tools, but a system where every channel works toward one goal. We help build a consistent path from the first contact with the brand to attracting and retaining the client.',
      points: [
        {
          title: 'Who we work with',
          text: 'We work with businesses that want to grow online but do not have an in-house marketer or a clear digital plan. We help both new projects and companies that want to refresh a site, improve promotion or systematize marketing.',
        },
        {
          title: 'From idea to result with a clear strategy',
          text: 'We do not just execute separate tasks: we form a strategy, set priorities and pick marketing solutions that match your goals and budget.',
        },
      ],
    },
    whyChoose: {
      kicker: 'Why us',
      title: 'Why choose DemWay',
      points: [
        {
          title: 'Built for your business',
          heading: 'h3',
          text: 'Not a template pack. Site, SEO and ads match your niche, product and budget.',
        },
        {
          title: 'A transparent process',
          heading: 'h4',
          text: 'Deadlines and ownership stay clear. We do not promise the impossible or disappear after launch.',
        },
        {
          title: 'Focused on results',
          heading: 'h4',
          text: 'Every tool works toward leads, sales and growth — not just being online.',
        },
      ],
    },
    servicesTeaser: {
      kicker: 'Services',
      title: 'Digital agency services',
      text: 'We gathered the core marketing services in one place so a business does not have to assemble digital piece by piece. From site creation and SEO to ads and remarketing — we build a system where every tool works toward one goal.',
      catalog: 'Full package catalog',
      openTab: 'Open the “{name}” tab and see packages',
      go: 'Open the packages tab',
    },
    openingOffers: {
      kicker: 'Bundles',
      title: 'Choose how we start',
      text: 'Don’t piece together a site, ads and SEO from a dozen separate services. Three ready bundles at 15% off — matched to the stage your business is in.',
      includes: 'What’s included',
      resultLabel: 'Result',
      save: '−15%',
      discuss: 'I want this bundle',
      note: 'Ad spend, hosting and domain are not included.',
      items: [
        {
          id: 'start-leads',
          label: 'For a new business',
          name: 'Lead launch',
          for: 'No page ready for ads yet. You need a short landing, search and email so the first enquiries don’t get lost.',
          result: 'A live entry point for ads and a path that delivers the lead to your inbox.',
          was: '16 000 UAH',
          now: '13 500 UAH',
          items: ['Landing Start', 'Search ads', 'Email marketing'],
        },
        {
          id: 'site-exists',
          label: 'Most chosen',
          name: 'Site already live',
          for: 'The site exists, leads are thin. We add search visibility, ads and a test of what actually converts.',
          result: 'The site you already have starts bringing enquiries, not just sitting online.',
          was: '15 500 UAH',
          now: '12 900 UAH',
          featured: true,
          items: ['SEO', 'Search ads', 'A/B testing'],
        },
        {
          id: 'presence',
          label: 'For a short presence',
          name: 'Presence online',
          for: 'A compact company on the web — not a corporate build, but a brochure site, Instagram and basic SEO.',
          result: 'The brand can be found, shown and advertised from one coherent base.',
          was: '22 000 UAH',
          now: '18 500 UAH',
          items: ['Brochure site', 'Instagram Ads', 'SEO'],
        },
      ],
    },
    groups: {
      Сайти: 'Websites',
      Редизайн: 'Redesign',
      SEO: 'SEO',
      Реклама: 'Ads',
      Системи: 'Systems',
      Айдентика: 'Identity',
    },
    groupHeadings: {
      Сайти: 'Website development',
      Редизайн: 'Redesign',
      SEO: 'SEO',
      Реклама: 'Ads',
      Системи: 'Systems',
    },
    clusters: {
      'Новий сайт': 'New site',
      Оновлення: 'Refresh',
      'Редизайн сайтів': 'Website redesign',
      'SEO-просування': 'SEO promotion',
      'Google Ads': 'Google Ads',
      'Meta Ads': 'Meta Ads',
      'Email-маркетинг': 'Email marketing',
      Системи: 'Systems',
      'CRM та автоматизація': 'CRM and automation',
      Бренд: 'Brand',
    },
    clusterLeads: {
      'SEO-просування':
        'We attract target clients from search, raise site visibility and get steady organic traffic without paying for every click.',
      'Google Ads':
        'We set up Google Ads to attract a target audience and keep ad spend under control. We define the campaigns, audiences and goals you need, then after launch we analyse the data and optimise the ads.',
      'Meta Ads':
        'We run targeted ads in Meta to raise brand recognition, attract a new audience, bring potential clients back and promote specific offers.',
      'Email-маркетинг':
        'We build communication that reminds people of the brand, brings the audience back and supports repeat purchases. We do not lose contact with clients after the first interaction.',
      Системи:
        'We build digital systems that make work with clients, sales and marketing simpler. We connect tools so data does not sit apart in different services.',
      'CRM та автоматизація':
        'We structure how you work with potential clients so no lead is lost and the team can see which stage each contact is at.',
    },
    groupLeads: {
      Сайти:
        'We create sites that do more than present the business: they help hit commercial goals. We build new projects, refresh existing ones and adapt them to user and business needs.',
      Редизайн:
        'We refresh a site when its look, structure or logic no longer match the brand and audience expectations. Redesign makes the site more modern, clearer and easier to use without losing its core value for the business.',
      SEO: 'SEO is a key part of a working promotion strategy. Being in the right place at the right time is not magic — it is solid on-site SEO. We review the site, search demand and the competitive field to find growth points.',
      Реклама:
        'We run ads where potential clients already look for a solution or engage with brands. We pick channels to match goals, audience and budget.',
      Системи:
        'We build digital systems that make work with clients, sales and marketing simpler. We connect tools so data does not sit apart in different services.',
    },
    teaserBlurbs: {
      Сайти: 'Landing, brochure or catalog — a site built for leads and ads.',
      Редизайн: 'Refresh a landing, brochure, corporate site or catalog.',
      SEO: 'Keywords, meta tags and URLs — core on-site SEO.',
      Реклама: 'Search, display and shopping in Google, Instagram and Facebook Ads, plus email and A/B tests.',
      Системи: 'CRM so sales do not get lost between chats.',
      Айдентика: 'Logo and assets that keep the brand together.',
    },
    catalog: {
      kicker: 'Services',
      title: 'Package catalog',
      text: 'Pick a direction and a package — scope opens beside it.',
      tabsAria: 'Service directions',
      packagesAria: 'Packages',
      picked: 'selected package',
      quote: 'Price — by individual quote',
      discuss: 'Discuss this package',
      term: 'Timeline',
      expand: 'Show more',
      collapse: 'Show less',
    },
    approach: {
      kicker: 'Approach',
      title: 'Our approach to work',
      steps: [
        {
          title: 'Business and goals analysis',
          heading: 'h3',
          text: 'We talk through the business, product, goals and expectations. We lock what should change after launch.',
        },
        {
          title: 'Digital strategy',
          heading: 'h4',
          text: 'We pick priorities: landing, CRM, SEO or ads. Scope and timeline — before the first mockup.',
        },
        {
          title: 'Choosing promotion channels',
          heading: 'h4',
          text: 'We look at the niche, competitors, demand and current channels. No architecture on a guess.',
        },
        {
          title: 'Delivery and launch',
          heading: 'h3',
          text: 'Design, development, integrations, creatives. We publish, connect forms, checkout and ads so the system starts collecting inquiries.',
        },
        {
          title: 'A/B testing',
          heading: 'h4',
          text: 'We test hypotheses on live pages and creatives. We keep what brings inquiries, not what merely looks better.',
        },
        {
          title: 'Result optimization',
          heading: 'h4',
          text: 'We measure leads, visibility, deals. Then we test and tune so growth does not stop after go-live.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Questions people ask before we start',
      text: 'A short take on kickoff, timelines and communication. If yours is missing — write in the form and we reply in the same channel.',
      items: [
        {
          q: 'How do we start working with DemWay?',
          a: 'Write in the form below or on Telegram: who you are, what you already have, and what should exist after launch. We reply in the channel you pick, clarify scope and timeline, then send an estimate. No pitch deck, no long form.',
        },
        {
          q: 'How long does a project take?',
          a: 'It depends on the service and the scope of work. After the first consultation we put together a clear plan, work stages and agreed timelines. Ongoing marketing support is long-term systemic work, with regular analysis and strategy adjustments.',
        },
        {
          q: 'How does communication work?',
          a: 'We work in a shared project chat: we approve materials, discuss current tasks and resolve day-to-day questions quickly. You always know what is in progress and which stage the project is at.',
        },
        {
          q: 'How is the budget set?',
          a: 'Scope and timeline first, then numbers. Catalog packages are a guide. The final sum depends on integrations, content and whether we take one service or a full system. No hidden extras after we agree.',
        },
        {
          q: 'Can I order one service, not a full system?',
          a: 'Yes. You can start with a landing page, SEO, ads, CRM or identity. If you later need the full loop, we build it around what is already done — without starting from scratch.',
        },
        {
          q: 'What do you need from me to start?',
          a: 'A short description of the business, access to current channels if they exist, and someone on your side for fast decisions. Copy and photos we can gather together. We do not wait for a perfect spec.',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Write the task — we will estimate the work',
      text: 'No two-screen questionnaire. Short: who you are, what to launch, how to reply.',
      notes: [
        'We reply in the same channel you choose.',
        'Scope and timeline first, then numbers — no template pitch.',
      ],
      received: 'We already received your request.',
      reply: 'We’ll be in touch soon to start your digital story',
      name: 'Name *',
      namePh: 'Helen',
      company: 'Company',
      companyPh: 'Brand name',
      service: 'What we launch *',
      task: 'The task *',
      taskPh: 'What exists now and what should appear after launch',
      channel: 'How to reply *',
      phone: 'Phone',
      telegram: 'Telegram',
      email: 'Email',
      phoneLabel: 'Phone number *',
      telegramLabel: 'Telegram handle *',
      emailLabel: 'Email *',
      consent: 'I agree to data processing so you can reply to this request, as set out in the',
      privacy: 'privacy policy',
      offer: 'public offer',
      consentJoin: 'and the',
      send: 'Send',
      sending: 'Sending…',
      error: 'Please fill in the required fields.',
      sendFail: 'Could not send. Please try again.',
      fullSystem: 'Full system',
      other: 'Other',
      honey: 'Website',
    },
    legal: {
      kicker: 'Legal',
      title: 'Privacy and offer',
      description: 'How DemWay handles form data and the terms for our services.',
      updated: 'Updated 21 September 2026',
      privacyTitle: 'Privacy policy',
      privacy: [
        {
          title: 'Who processes the data',
          text: 'Controller: DemWay (digital agency, Ukraine · online). Contact: demway.agency@gmail.com, Telegram @DemWay_Team.',
        },
        {
          title: 'What we collect',
          text: 'From the form: name, company, chosen service or bundle, task description, reply channel and contact (phone, Telegram or email). The site stores the language choice in your browser.',
        },
        {
          title: 'Why',
          text: 'To reply to the request, clarify scope and timeline, prepare a quote and continue project correspondence. Legal basis: consent in the form and steps needed to handle a pre-contract enquiry.',
        },
        {
          title: 'Who we share with',
          text: 'We may send the request by email via FormSubmit and to our work chat via Telegram. We do not sell data or pass it to others for their marketing.',
        },
        {
          title: 'How long we keep it',
          text: 'For as long as we correspond and as required for service records and the law. After that we delete or anonymise it on request to demway.agency@gmail.com.',
        },
        {
          title: 'Your rights',
          text: 'You can ask for access, correction, deletion, restriction, or withdraw consent. That does not undo a reply already sent if work has started.',
        },
      ],
      offerTitle: 'Public offer',
      offer: [
        {
          title: 'Subject',
          text: 'DemWay offers websites, ads, SEO, CRM and identity work. Sending the form is a quote enquiry, not an automatic order. A contract is formed after we agree scope, timeline and price.',
        },
        {
          title: 'Price',
          text: 'Homepage bundles at −15% are a guide under the stated terms. The catalog lists scope without a public price: the sum is by individual quote. Ad spend, hosting and domain are not included unless agreed separately.',
        },
        {
          title: 'Timeline and result',
          text: 'Catalog timelines are estimates. The final plan is locked after a consultation. You get the agreed scope of work, not a guarantee of sales or search rankings.',
        },
        {
          title: 'Payment and changes',
          text: 'Payment terms appear on the invoice or contract. Scope changes are agreed in writing (chat or email). Rights in the materials pass after full payment of the relevant stage unless stated otherwise.',
        },
        {
          title: 'Law',
          text: 'Ukrainian law applies. Disputes: talks first, then Ukrainian courts at the contractor’s place of registration unless the law requires otherwise.',
        },
      ],
    },
    notFound: {
      kicker: 'Error',
      title: 'This page is missing',
      text: 'The link is outdated or the address has a typo. Go home or open the package catalog.',
      home: 'Go home',
      catalog: 'Package catalog',
    },
    footer: {
      aside: 'From contact to deal',
      services: 'Services',
      company: 'Company',
      contacts: 'Contact',
      catalog: 'Full catalog',
      mail: 'Email',
      channel: 'Channel',
      channelValue: 'Telegram, phone, email',
      format: 'Format',
      formatValue: 'Ukraine · online',
      hours: 'Hours',
      hoursValue: 'Mon–Fri, 10:00–18:00',
      rights: 'All rights reserved',
    },
  },
}
