export type CaseItem = {
  code: string
  category: string
  title: string
  text: string
  mark: string
}

export const cases: CaseItem[] = [
  {
    code: '1',
    category: 'Лендінг',
    title: 'Локальна студія',
    text: 'Посадкова під запис і форму, яку можна одразу взяти в роботу.',
    mark: 'WEB',
  },
  {
    code: '2',
    category: 'Каса POS',
    title: 'Роздріб',
    text: 'Вітрина, оплата й облік — щоб продажі не губились між чатами.',
    mark: 'POS',
  },
  {
    code: '3',
    category: 'Meta Ads',
    title: 'Заявки з реклами',
    text: 'Креативи й посадкова в одному контурі, бюджет іде в заявку.',
    mark: 'ADS',
  },
  {
    code: '4',
    category: 'Логотип',
    title: 'Експертний бренд',
    text: 'Знак і проста система використання на носіях і в мережі.',
    mark: 'ID',
  },
]
