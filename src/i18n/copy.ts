import type { ServiceGroup } from '../data/services'

export type Locale = 'uk' | 'en'

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
  groups: Record<ServiceGroup, string>
  clusters: Record<string, string>
  teaserBlurbs: Record<ServiceGroup, string>
  catalog: {
    kicker: string
    title: string
    text: string
    tabsAria: string
    packagesAria: string
    picked: string
    featured: string
    discuss: string
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
    done: string
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
  }
}

export const copy: Record<Locale, Copy> = {
  uk: {
    meta: {
      title: 'DemWay — digital agency',
      description:
        'DemWay — digital агенція: лендінг, CRM, SEO, Google Ads, Meta Ads, аналіз ринку, банери та логотип.',
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
      cases: 'Дивитись кейси',
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
    groups: {
      Сайти: 'Сайти',
      SEO: 'SEO',
      Реклама: 'Реклама',
      Системи: 'Системи',
      Айдентика: 'Айдентика',
    },
    clusters: {
      'Новий сайт': 'Новий сайт',
      Оновлення: 'Оновлення',
      'Аудит і супровід': 'Аудит і супровід',
      'Локально і тексти': 'Локально і тексти',
      Google: 'Google',
      'Meta і листи': 'Meta і листи',
      Продажі: 'Продажі',
      Бренд: 'Бренд',
    },
    teaserBlurbs: {
      Сайти: 'Лендінг, візитка чи каталог — сайт під заявку й запуск реклами.',
      SEO: 'Аудит, оптимізація й тексти, щоб вас знаходили в пошуку.',
      Реклама: 'Google, Meta й аналітика в одному контурі під заявку.',
      Системи: 'CRM, щоб продажі не губились між чатами.',
      Айдентика: 'Логотип і носії, які тримають бренд разом.',
    },
    catalog: {
      kicker: 'Послуги',
      title: 'Каталог пакетів',
      text: 'Оберіть напрям і пакет — склад і ціна відкриються поруч. Суми орієнтовні, «від».',
      tabsAria: 'Напрями послуг',
      packagesAria: 'Пакети',
      picked: 'обраний пакет',
      featured: 'Частіше обирають',
      discuss: 'Обговорити пакет',
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
          q: 'Що потрібно від вас, щоб стартувати?',
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
      done: 'Готово',
      received: 'Запит отримано',
      reply: 'Звʼяжемось у канал, який ви обрали — без шаблонної презентації.',
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
    },
  },
  en: {
    meta: {
      title: 'DemWay — digital agency',
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
      cases: 'See the work',
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
    groups: {
      Сайти: 'Websites',
      SEO: 'SEO',
      Реклама: 'Ads',
      Системи: 'Systems',
      Айдентика: 'Identity',
    },
    clusters: {
      'Новий сайт': 'New site',
      Оновлення: 'Refresh',
      'Аудит і супровід': 'Audit & retainers',
      'Локально і тексти': 'Local & copy',
      Google: 'Google',
      'Meta і листи': 'Meta & email',
      Продажі: 'Sales',
      Бренд: 'Brand',
    },
    teaserBlurbs: {
      Сайти: 'Landing, brochure or catalog — a site built for leads and ads.',
      SEO: 'Audit, optimization and copy so people can find you in search.',
      Реклама: 'Google, Meta and analytics in one loop built for inquiries.',
      Системи: 'CRM so sales do not get lost between chats.',
      Айдентика: 'Logo and assets that keep the brand together.',
    },
    catalog: {
      kicker: 'Services',
      title: 'Package catalog',
      text: 'Pick a direction and a package — scope and price open beside it. Prices are estimates, “from”.',
      tabsAria: 'Service directions',
      packagesAria: 'Packages',
      picked: 'selected package',
      featured: 'Most chosen',
      discuss: 'Discuss this package',
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
          q: 'What do you need from us to start?',
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
      done: 'Done',
      received: 'Request received',
      reply: 'We will write in the channel you chose — no template pitch.',
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
    },
  },
}
