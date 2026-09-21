import type { ServiceGroup } from '../data/services'

export type Locale = 'uk' | 'en' | 'pl'

export type Copy = {
  meta: { title: string; description: string }
  nav: {
    about: string
    services: string
    cases: string
    approach: string
    contact: string
    brief: string
    openMenu: string
    closeMenu: string
    aria: string
    language: string
  }
  hero: { lede: string; discuss: string; cases: string }
  why: {
    kicker: string
    title: string
    text: string
    points: { title: string; text: string }[]
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
  clusters: Record<string, string>
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
  cases: {
    kicker: string
    title: string
    text: string
    items: { category: string; title: string; text: string }[]
  }
  approach: {
    kicker: string
    title: string
    steps: { title: string; text: string }[]
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
      title: 'DemWay - digital agency',
      description:
        'DemWay - digital агенція: лендінг, CRM, SEO, Google Ads, Meta Ads, аналіз ринку, банери та логотип.',
    },
    nav: {
      about: 'Про нас',
      services: 'Послуги',
      cases: 'Кейси',
      approach: 'Підхід',
      contact: 'Контакти',
      brief: 'Бриф',
      openMenu: 'Відкрити меню',
      closeMenu: 'Закрити меню',
      aria: 'Навігація',
      language: 'Мова',
    },
    hero: {
      lede: 'Кожне рішення будуємо навколо вашого бізнесу: сайти й лендінги, CRM, пошук, реклама та айдентика — від першого контакту до покупки.',
      discuss: 'Обговорити задачу',
      cases: 'Дивитись послуги',
    },
    why: {
      kicker: 'Про нас',
      title: 'Перетворюємо ідеї на бізнес, який рухається вперед',
      text: 'Ми створюємо сайти та лендінги, впроваджуємо CRM-рішення, працюємо з SEO та рекламою, формуємо айдентику бренду. Кожне рішення будуємо навколо вашого бізнесу, його цілей і шляху клієнта - від першого контакту до покупки.',
      points: [
        {
          title: 'Експертиза',
          text: 'Розуміємо бізнес комплексно та поєднуємо розробку, маркетинг і технології в одну систему',
        },
        {
          title: 'Чесність',
          text: 'Дедлайни й зона відповідальності прозорі. Не обіцяємо неможливе і не зникаємо після запуску.',
        },
        {
          title: 'Результат',
          text: 'Кожен інструмент працює на спільну ціль - більше клієнтів, продажів і розвиток бізнесу.',
        },
      ],
    },
    servicesTeaser: {
      kicker: 'Послуги',
      title: 'Напрями, з яких збираємо систему',
      text: 'Натисніть квадрат напряму — відкриється вкладка каталогу з іншими пакетами цього блоку.',
      catalog: 'Увесь каталог пакетів',
      openTab: 'Відкрити вкладку «{name}» і подивитись пакети',
      go: 'Відкрити вкладку з пакетами',
    },
    openingOffers: {
      kicker: 'Пакети',
      title: 'Оберіть формат запуску',
      text: 'Не збирайте сайт, рекламу і SEO з окремих послуг. Три готові збірки зі знижкою 15% — під етап, на якому зараз ваш бізнес.',
      includes: 'Що входить',
      resultLabel: 'Результат',
      save: '−15%',
      discuss: 'Хочу цей пакет',
      note: 'Медіабюджет реклами, хостинг і домен — не входять у вартість.',
      items: [
        {
          label: 'Для нового бізнесу',
          name: 'Запуск заявок',
          for: 'Немає сторінки під рекламу. Потрібна коротка посадка, пошук і лист, щоб перші звернення не губились.',
          result: 'Готова точка входу в рекламу і ланцюжок, яким заявка доходить до пошти.',
          was: '16 000 грн',
          now: '13 500 грн',
          items: ['Лендінг Старт', 'Пошукова реклама', 'Email-маркетинг'],
        },
        {
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
    clusters: {
      'Новий сайт': 'Новий сайт',
      Оновлення: 'Оновлення',
      'Лендінг і сайт': 'Лендінг і сайт',
      'SEO-оптимізація': 'SEO-оптимізація',
      'Google Ads': 'Google Ads',
      'Meta Ads': 'Meta Ads',
      'Email і тести': 'Email і тести',
      Продажі: 'Продажі',
      Бренд: 'Бренд',
    },
    groupLeads: {},
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
    cases: {
      kicker: 'Кейси',
      title: 'Система в роботі, не в презентації',
      text: 'Чотири напрями, з яких уже збираємо контур під задачу бізнесу.',
      items: [
        {
          category: 'Лендінг',
          title: 'Локальна студія',
          text: 'Посадкова під запис і форму, яку можна одразу взяти в роботу.',
        },
        {
          category: 'Каса POS',
          title: 'Роздріб',
          text: 'Вітрина, оплата й облік — щоб продажі не губились між чатами.',
        },
        {
          category: 'Meta Ads',
          title: 'Заявки з реклами',
          text: 'Креативи й посадкова в одному контурі, бюджет іде в заявку.',
        },
        {
          category: 'Логотип',
          title: 'Експертний бренд',
          text: 'Знак і проста система використання на носіях і в мережі.',
        },
      ],
    },
    approach: {
      kicker: 'Підхід',
      title: 'Від першої розмови до системного результату',
      steps: [
        {
          title: 'Знайомство',
          text: 'Обговорюємо бізнес, продукт, цілі й очікування. Фіксуємо, що має змінитись після запуску.',
        },
        {
          title: 'Аналіз',
          text: 'Дивимось нішу, конкурентів, попит і поточні канали. Без цього не збираємо архітектуру навмання.',
        },
        {
          title: 'Стратегія',
          text: 'Обираємо пріоритети: лендінг, CRM, SEO чи реклама. План робіт і терміни — до першого макета.',
        },
        {
          title: 'Реалізація',
          text: 'Дизайн, збірка, інтеграції, креативи. Віддаємо робочий продукт, а не концепт на слайді.',
        },
        {
          title: 'Запуск',
          text: 'Публікуємо, підключаємо форми, касу, рекламу. Система починає збирати заявки.',
        },
        {
          title: 'Аналіз і розвиток',
          text: 'Міряємо заявки, видимість, угоди. Тестуємо й підкручуємо, щоб ріст не зупинявся після старту.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Питання, які ставлять перед стартом',
      text: 'Коротко про запуск, строки й комунікацію. Якщо вашого питання немає — напишіть у бриф, відповімо в той самий канал.',
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
          q: 'Чи можна замовити одну послугу, а не все під ключ?',
          a: 'Так. Можна стартувати з лендінгу, SEO, реклами, CRM або айдентики. Якщо далі знадобиться повний контур — зберемо його навколо вже зробленого, без перезапуску з нуля.',
        },
        {
          q: 'Що потрібно від мене, щоб стартувати?',
          a: 'Короткий опис бізнесу, доступ до поточних каналів, якщо вони вже є, і людина з вашого боку для швидких рішень. Тексти й фото можемо зібрати разом. Ідеальне ТЗ не чекаємо.',
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
      consent: 'Погоджуюсь на обробку даних для відповіді по запиту.',
      send: 'Надіслати',
      sending: 'Надсилаємо…',
      error: 'Заповніть обовʼязкові поля.',
      sendFail: 'Не вдалось надіслати. Спробуйте ще раз.',
      fullSystem: 'Система під ключ',
      other: 'Інше',
      honey: 'Сайт',
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
      description:
        'DemWay is a digital agency: landing pages, CRM, SEO, Google Ads, Meta Ads, market analysis, banners and logo.',
    },
    nav: {
      about: 'About',
      services: 'Services',
      cases: 'Work',
      approach: 'Approach',
      contact: 'Contact',
      brief: 'Brief',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      aria: 'Navigation',
      language: 'Language',
    },
    hero: {
      lede: 'Every solution is built around your business: websites and landing pages, CRM, search, ads and identity — from first contact to purchase.',
      discuss: 'Discuss a project',
      cases: 'See services',
    },
    why: {
      kicker: 'About',
      title: 'We turn ideas into a business that keeps moving',
      text: 'We build websites and landing pages, implement CRM, work with SEO and ads, and shape brand identity. Each decision is built around your business, its goals and the customer path — from first contact to purchase.',
      points: [
        {
          title: 'Expertise',
          text: 'We see the business as a whole and join development, marketing and technology into one system.',
        },
        {
          title: 'Honesty',
          text: 'Deadlines and ownership stay clear. We do not promise the impossible or disappear after launch.',
        },
        {
          title: 'Results',
          text: 'Every tool works toward one goal — more clients, more sales and a business that grows.',
        },
      ],
    },
    servicesTeaser: {
      kicker: 'Services',
      title: 'Directions we assemble into a system',
      text: 'Tap a direction card to open the catalog tab with the other packages in that block.',
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
          label: 'For a new business',
          name: 'Lead launch',
          for: 'No page ready for ads yet. You need a short landing, search and email so the first enquiries don’t get lost.',
          result: 'A live entry point for ads and a path that delivers the lead to your inbox.',
          was: '16 000 UAH',
          now: '13 500 UAH',
          items: ['Landing Start', 'Search ads', 'Email marketing'],
        },
        {
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
    clusters: {
      'Новий сайт': 'New site',
      Оновлення: 'Refresh',
      'Лендінг і сайт': 'Landing & site',
      'SEO-оптимізація': 'SEO optimization',
      'Google Ads': 'Google Ads',
      'Meta Ads': 'Meta Ads',
      'Email і тести': 'Email & tests',
      Продажі: 'Sales',
      Бренд: 'Brand',
    },
    groupLeads: {},
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
    cases: {
      kicker: 'Work',
      title: 'A system in use, not on a slide',
      text: 'Four directions we already assemble around a business brief.',
      items: [
        {
          category: 'Landing',
          title: 'Local studio',
          text: 'A booking page and form you can put to work right away.',
        },
        {
          category: 'POS',
          title: 'Retail',
          text: 'Showcase, payments and stock — so sales are not lost in chats.',
        },
        {
          category: 'Meta Ads',
          title: 'Leads from ads',
          text: 'Creatives and a landing page in one loop, budget going to inquiries.',
        },
        {
          category: 'Logo',
          title: 'Expert brand',
          text: 'A mark and a simple system for use on assets and online.',
        },
      ],
    },
    approach: {
      kicker: 'Approach',
      title: 'From the first call to a working system',
      steps: [
        {
          title: 'Intro',
          text: 'We talk through the business, product, goals and expectations. We lock what should change after launch.',
        },
        {
          title: 'Research',
          text: 'We look at the niche, competitors, demand and current channels. No architecture on a guess.',
        },
        {
          title: 'Strategy',
          text: 'We pick priorities: landing, CRM, SEO or ads. Scope and timeline — before the first mockup.',
        },
        {
          title: 'Build',
          text: 'Design, development, integrations, creatives. You get a working product, not a slide deck.',
        },
        {
          title: 'Launch',
          text: 'We publish, connect forms, checkout and ads. The system starts collecting inquiries.',
        },
        {
          title: 'Grow',
          text: 'We measure leads, visibility, deals. Then we test and tune so growth does not stop after go-live.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Questions people ask before we start',
      text: 'A short take on kickoff, timelines and communication. If yours is missing — write in the brief and we reply in the same channel.',
      items: [
        {
          q: 'How do we start working with DemWay?',
          a: 'Send the brief below or write on Telegram: who you are, what you already have, and what should exist after launch. We reply in the channel you pick, clarify scope and timeline, then send an estimate. No pitch deck, no long form.',
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
          a: 'A short description of the business, access to current channels if they exist, and someone on your side for fast decisions. Copy and photos we can gather together. We do not wait for a perfect brief.',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Send the brief — we will estimate the work',
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
      task: 'The brief *',
      taskPh: 'What exists now and what should appear after launch',
      channel: 'How to reply *',
      phone: 'Phone',
      telegram: 'Telegram',
      email: 'Email',
      phoneLabel: 'Phone number *',
      telegramLabel: 'Telegram handle *',
      emailLabel: 'Email *',
      consent: 'I agree to data processing so you can reply to this request.',
      send: 'Send',
      sending: 'Sending…',
      error: 'Please fill in the required fields.',
      sendFail: 'Could not send. Please try again.',
      fullSystem: 'Full system',
      other: 'Other',
      honey: 'Website',
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
  pl: {
    meta: {
      title: 'DemWay - digital agency',
      description:
        'DemWay to agencja digital: landingi, CRM, SEO, Google Ads, Meta Ads, analiza rynku, banery i logo.',
    },
    nav: {
      about: 'O nas',
      services: 'Usługi',
      cases: 'Realizacje',
      approach: 'Podejście',
      contact: 'Kontakt',
      brief: 'Brief',
      openMenu: 'Otwórz menu',
      closeMenu: 'Zamknij menu',
      aria: 'Nawigacja',
      language: 'Język',
    },
    hero: {
      lede: 'Każdą decyzję budujemy wokół Twojego biznesu: strony i landingi, CRM, wyszukiwanie, reklama i identyfikacja — od pierwszego kontaktu do zakupu.',
      discuss: 'Omówić zadanie',
      cases: 'Zobacz usługi',
    },
    why: {
      kicker: 'O nas',
      title: 'Zamieniamy pomysły w biznes, który idzie do przodu',
      text: 'Tworzymy strony i landingi, wdrażamy CRM, pracujemy z SEO i reklamą, budujemy identyfikację marki. Każdą decyzję opieramy na Twoim biznesie, celach i ścieżce klienta — od pierwszego kontaktu do zakupu.',
      points: [
        {
          title: 'Ekspertyza',
          text: 'Widzimy biznes całościowo i łączymy development, marketing i technologie w jeden system.',
        },
        {
          title: 'Uczciwość',
          text: 'Terminy i zakres odpowiedzialności są jasne. Nie obiecujemy niemożliwego i nie znikamy po starcie.',
        },
        {
          title: 'Rezultat',
          text: 'Każde narzędzie pracuje na jeden cel — więcej klientów, sprzedaży i rozwój biznesu.',
        },
      ],
    },
    servicesTeaser: {
      kicker: 'Usługi',
      title: 'Kierunki, z których składamy system',
      text: 'Kliknij kafelek kierunku — otworzy się zakładka katalogu z pozostałymi pakietami tego bloku.',
      catalog: 'Cały katalog pakietów',
      openTab: 'Otwórz zakładkę «{name}» i zobacz pakiety',
      go: 'Otwórz zakładkę z pakietami',
    },
    openingOffers: {
      kicker: 'Pakiety',
      title: 'Wybierz format startu',
      text: 'Nie składaj strony, reklam i SEO z osobnych usług. Trzy gotowe zestawy ze zniżką 15% — pod etap, na którym jest teraz Twój biznes.',
      includes: 'Co wchodzi',
      resultLabel: 'Rezultat',
      save: '−15%',
      discuss: 'Chcę ten pakiet',
      note: 'Budżet reklamowy, hosting i domena nie wchodzą w cenę.',
      items: [
        {
          label: 'Dla nowego biznesu',
          name: 'Start zgłoszeń',
          for: 'Nie ma jeszcze strony pod reklamę. Potrzebny krótki landing, wyszukiwarka i e-mail, żeby pierwsze zgłoszenia się nie gubiły.',
          result: 'Gotowy punkt wejścia w reklamę i ścieżka, którą zgłoszenie trafia na pocztę.',
          was: '16 000 UAH',
          now: '13 500 UAH',
          items: ['Landing Start', 'Reklama w wyszukiwarce', 'E-mail marketing'],
        },
        {
          label: 'Najczęściej wybierany',
          name: 'Strona już jest',
          for: 'Strona stoi, zgłoszeń mało. Dodajemy widoczność w wyszukiwarce, reklamę i test, co naprawdę konwertuje.',
          result: 'Istniejąca strona zaczyna przynosić zgłoszenia, a nie tylko „być w internecie”.',
          was: '15 500 UAH',
          now: '12 900 UAH',
          featured: true,
          items: ['SEO', 'Reklama w wyszukiwarce', 'Testy A/B'],
        },
        {
          label: 'Dla krótkiej obecności',
          name: 'Witryna w sieci',
          for: 'Potrzebna zwięzła firma w sieci — nie korporacja, lecz wizytówka, Instagram i podstawowe SEO.',
          result: 'Markę można znaleźć, pokazać i odpalić w reklamie z jednej spójnej podstawy.',
          was: '22 000 UAH',
          now: '18 500 UAH',
          items: ['Strona wizytówka', 'Instagram Ads', 'SEO'],
        },
      ],
    },
    groups: {
      Сайти: 'Strony',
      Редизайн: 'Redesign',
      SEO: 'SEO',
      Реклама: 'Reklama',
      Системи: 'Systemy',
      Айдентика: 'Identyfikacja',
    },
    clusters: {
      'Новий сайт': 'Nowa strona',
      Оновлення: 'Odświeżenie',
      'Лендінг і сайт': 'Landing i strona',
      'SEO-оптимізація': 'Optymalizacja SEO',
      'Google Ads': 'Google Ads',
      'Meta Ads': 'Meta Ads',
      'Email і тести': 'E-mail i testy',
      Продажі: 'Sprzedaż',
      Бренд: 'Marka',
    },
    groupLeads: {},
    teaserBlurbs: {
      Сайти: 'Landing, wizytówka albo katalog — strona pod zgłoszenia i reklamy.',
      Редизайн: 'Odświeżamy landing, wizytówkę, stronę korporacyjną albo katalog.',
      SEO: 'Słowa kluczowe, metatagi i URL — podstawowe SEO on-site.',
      Реклама: 'Wyszukiwanie, display i produkty w Google, Instagram i Facebook Ads, e-mail i testy A/B.',
      Системи: 'CRM, żeby sprzedaż nie ginęła między czatami.',
      Айдентика: 'Logo i nośniki, które trzymają markę razem.',
    },
    catalog: {
      kicker: 'Usługi',
      title: 'Katalog pakietów',
      text: 'Wybierz kierunek i pakiet — zakres otworzy się obok.',
      tabsAria: 'Kierunki usług',
      packagesAria: 'Pakiety',
      picked: 'wybrany pakiet',
      quote: 'Cena — według indywidualnej wyceny',
      discuss: 'Omówić pakiet',
      term: 'Termin',
      expand: 'Rozwiń',
      collapse: 'Zwiń',
    },
    cases: {
      kicker: 'Realizacje',
      title: 'System w pracy, nie na slajdzie',
      text: 'Cztery kierunki, z których już składamy obieg pod zadanie biznesu.',
      items: [
        {
          category: 'Landing',
          title: 'Lokalne studio',
          text: 'Strona pod zapis i formularz, który od razu można wziąć do pracy.',
        },
        {
          category: 'POS',
          title: 'Detal',
          text: 'Witryna, płatność i ewidencja — żeby sprzedaż nie ginęła w czatach.',
        },
        {
          category: 'Meta Ads',
          title: 'Zgłoszenia z reklam',
          text: 'Kreacje i landing w jednym obiegu, budżet idzie w zgłoszenie.',
        },
        {
          category: 'Logo',
          title: 'Marka ekspercka',
          text: 'Znak i prosty system użycia na nośnikach i w sieci.',
        },
      ],
    },
    approach: {
      kicker: 'Podejście',
      title: 'Od pierwszej rozmowy do systemowego rezultatu',
      steps: [
        {
          title: 'Poznanie',
          text: 'Omawiamy biznes, produkt, cele i oczekiwania. Ustalamy, co ma się zmienić po starcie.',
        },
        {
          title: 'Analiza',
          text: 'Patrzymy na niszę, konkurencję, popyt i obecne kanały. Bez tego nie składamy architektury na ślepo.',
        },
        {
          title: 'Strategia',
          text: 'Wybieramy priorytety: landing, CRM, SEO albo reklama. Plan i terminy — przed pierwszą makietą.',
        },
        {
          title: 'Realizacja',
          text: 'Projekt, budowa, integracje, kreacje. Oddajemy działający produkt, nie koncept na slajdzie.',
        },
        {
          title: 'Start',
          text: 'Publikujemy, podłączamy formularze, kasę, reklamy. System zaczyna zbierać zgłoszenia.',
        },
        {
          title: 'Analiza i rozwój',
          text: 'Mierzymy zgłoszenia, widoczność, transakcje. Testujemy i dopracowujemy, żeby wzrost nie zatrzymał się po starcie.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Pytania, które padają przed startem',
      text: 'Krótko o starcie, terminach i komunikacji. Jeśli nie ma Twojego pytania — napisz w briefie, odpowiemy w tym samym kanale.',
      items: [
        {
          q: 'Jak zacząć współpracę z DemWay?',
          a: 'Napisz zadanie w formularzu poniżej albo na Telegramie: kim jesteś, co już jest i co ma powstać po starcie. Odpowiadamy w wybranym kanale, doprecyzowujemy zakres i terminy — potem wycena. Bez szablonowej prezentacji i długiej ankiety.',
        },
        {
          q: 'Jaki jest termin realizacji projektu?',
          a: 'Zależy od usługi i zakresu pracy. Po pierwszej konsultacji układamy jasny plan, etapy i uzgadniamy terminy. Jeśli chodzi o kompleksowe wsparcie marketingowe, to systematyczna, długoterminowa praca z regularną analizą i korektą strategii.',
        },
        {
          q: 'Jak wygląda komunikacja?',
          a: 'Pracujemy we wspólnym czacie projektowym: akceptujemy materiały, omawiamy bieżące zadania i szybko rozwiązujemy sprawy operacyjne. Zawsze wiesz, co jest w toku i na jakim etapie jest projekt.',
        },
        {
          q: 'Jak powstaje budżet?',
          a: 'Najpierw zakres i terminy, potem liczby. Pakiety w katalogu to orientacja. Kwota końcowa zależy od integracji, treści i tego, czy bierzemy jedną usługę, czy system. Po uzgodnieniu bez ukrytych dopłat.',
        },
        {
          q: 'Czy można zamówić jedną usługę, a nie wszystko pod klucz?',
          a: 'Tak. Można zacząć od landingu, SEO, reklamy, CRM albo identyfikacji. Jeśli później będzie potrzebny pełny obieg — złożymy go wokół tego, co już jest, bez startu od zera.',
        },
        {
          q: 'Czego potrzebujesz ode mnie, żeby zacząć?',
          a: 'Krótki opis biznesu, dostęp do obecnych kanałów, jeśli już są, i osoba po Twojej stronie do szybkich decyzji. Teksty i zdjęcia możemy zebrać razem. Idealnego briefu nie czekamy.',
        },
      ],
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Napisz zadanie — przygotujemy wycenę',
      text: 'Bez ankiety na dwa ekrany. Krótko: kim jesteś, co uruchomić, jak wygodnie odpowiedzieć.',
      notes: [
        'Odpowiadamy w tym samym kanale, który wybierzesz.',
        'Najpierw zakres i terminy, potem liczby — bez szablonowej prezentacji.',
      ],
      received: 'Otrzymaliśmy już Twoje zgłoszenie.',
      reply: 'Wkrótce się odezwiemy, żeby zacząć Twoją digital-historię',
      name: 'Imię *',
      namePh: 'Olena',
      company: 'Firma',
      companyPh: 'Nazwa marki',
      service: 'Co uruchamiamy *',
      task: 'Zadanie *',
      taskPh: 'Co już jest i co ma pojawić się po starcie',
      channel: 'Jak odpowiedzieć *',
      phone: 'Telefon',
      telegram: 'Telegram',
      email: 'Email',
      phoneLabel: 'Numer telefonu *',
      telegramLabel: 'Nick na Telegramie *',
      emailLabel: 'Email *',
      consent: 'Zgadzam się na przetwarzanie danych w celu odpowiedzi na zapytanie.',
      send: 'Wyślij',
      sending: 'Wysyłamy…',
      error: 'Uzupełnij wymagane pola.',
      sendFail: 'Nie udało się wysłać. Spróbuj ponownie.',
      fullSystem: 'System pod klucz',
      other: 'Inne',
      honey: 'Strona',
    },
    footer: {
      aside: 'Od kontaktu do umowy',
      services: 'Usługi',
      company: 'Firma',
      contacts: 'Kontakt',
      catalog: 'Cały katalog',
      mail: 'E-mail',
      channel: 'Kanał',
      channelValue: 'Telegram, telefon, e-mail',
      format: 'Format',
      formatValue: 'Ukraina · online',
      hours: 'Godziny',
      hoursValue: 'Pn–Pt, 10:00–18:00',
      rights: 'Wszelkie prawa zastrzeżone',
    },
  },
}
