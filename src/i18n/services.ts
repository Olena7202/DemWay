import type { Service, ServiceGroup } from '../data/services'
import type { Locale } from './copy'

type PlanCopy = { name?: string; note?: string; term?: string; items?: string[] }
type ServiceCopy = { title?: string; text?: string; plans?: PlanCopy[] }

const en: Record<string, ServiceCopy> = {
  lending: {
    title: 'Landing page',
    text: 'A landing page to advertise one product or service — a clear path and high conversion.',
    plans: [
      {
        name: 'Start',
        note: 'Hosting and domain are not included',
        term: '5–7 days',
        items: [
          'Custom design',
          'Up to 6 sections',
          'Responsive layout',
          'Inquiry form',
          'Email alerts for new leads',
          '1 month of free support',
        ],
      },
      {
        name: 'Plus',
        note: 'Hosting and domain are not included',
        term: '5–7 days',
        items: [
          'Custom design for the brand',
          '8–12 sections',
          'Responsive layout',
          'Inquiry form + email alerts',
          'Online payment integration',
          '2 months of free support',
        ],
      },
    ],
  },
  vizytka: {
    title: 'Brochure site',
    text: 'A multi-page site for a company or specialist: services, portfolio, reviews, blog and contacts.',
    plans: [
      {
        name: 'Start',
        note: 'Hosting and domain are not included',
        term: '10–15 days',
        items: [
          'Custom design',
          '3–5 core pages',
          'Responsive layout',
          'Company / services info',
          'Contact form',
          'Social buttons',
          'A month of free support',
        ],
      },
    ],
  },
  korporatyvnyy: {
    title: 'Corporate website',
    text: 'A company system site: practices, cases, team, careers, blog and marketing integrations.',
    plans: [
      {
        name: 'Start',
        note: 'Hosting and domain are not included',
        term: '14–21 days',
        items: [
          'Custom site design',
          'Visual identity concept',
          'Responsive layout for all devices',
          'Up to 10–15 pages',
          'Home page',
          'About page',
          'Service / practice pages',
          'Contact page',
          'Blog or news feed',
          'Multilingual setup',
          'Feedback forms',
          'Social and messenger buttons',
          'Map with the company location',
          'Content upload from the client',
          'QA before launch',
          '1 month of free support',
        ],
      },
    ],
  },
  katalog: {
    title: 'Catalog site',
    text: 'A product showcase with inquiries — no cart, not a webshop. For B2B, manufacturers and suppliers.',
    plans: [
      {
        name: 'No checkout',
        note: 'Hosting and domain are not included',
        term: '21–29 days',
        items: [
          'Custom site design',
          'Responsive layout for all devices',
          'Up to 50 products',
          'Catalog with categories',
          'Product card: photos, copy, specs, price',
          'Product search',
          'Basic filters',
          'Inquiry / contact form',
          'Social and messenger buttons',
          'About page',
          'Contact page',
          'Blog or news feed',
          'Content upload from the client',
          'QA before launch',
          '1 month of free support',
        ],
      },
      {
        name: 'Business',
        note: 'Hosting and domain are not included',
        term: '21–29 days',
        items: [
          'Custom design and brand look',
          'Responsive layout for all devices',
          'Up to 200 products',
          'Extended catalog with subcategories',
          'Richer product cards',
          'Catalog search',
          'Advanced filters and sorting',
          'Wishlist',
          'Cart',
          'Checkout form',
          'Online payment integration',
          'Feedback forms',
          'Multilingual setup',
          'Social and messenger buttons',
          'Content upload from the client',
          'QA before launch',
          '2 months of free support',
        ],
      },
    ],
  },
  'redyzayn-lending': {
    title: 'Landing redesign',
    text: 'We refresh the landing: structure, visuals and form — without building the site from scratch.',
    plans: [
      {
        name: 'Start',
        term: '5–7 days',
        items: [
          'Review of the current site',
          'Updated structure and messaging',
          'Custom modern design',
          'UI/UX improvements',
          'Responsive version for all devices',
          'Visual style update',
          'Block and CTA optimization',
          'Better inquiry forms',
          'Front-end of the new design',
          'QA after redesign',
        ],
      },
    ],
  },
  'redyzayn-vizytka': {
    title: 'Brochure site redesign',
    text: 'We refresh a short company site: who you are, what you do, how to reach you — without a rebuild from scratch.',
    plans: [
      {
        name: 'Start',
        term: '10–12 days',
        items: [
          'Review of the current site',
          'Updated structure for 3–5 pages',
          'Custom modern design',
          'UI/UX improvements',
          'Responsive version for all devices',
          'Company / services block update',
          'Better contact form',
          'Updated social buttons',
          'Front-end of the new design',
          'QA after redesign',
        ],
      },
    ],
  },
  'redyzayn-korporatyvnyy': {
    title: 'Corporate redesign',
    text: 'We refresh look and ease of a multi-page site while keeping the content you need.',
    plans: [
      {
        name: 'Start',
        term: '14–21 days',
        items: [
          'Review of the current site',
          'Structure and usability review',
          'Updated site structure',
          'Custom modern design',
          'Brand look and visual concept update',
          'UI/UX improvements',
          'Responsive design for all devices',
          'Navigation optimization',
          'Page and block updates',
          'Better feedback forms',
          'Updated CTAs',
          'Mobile adaptation of the design',
          'Front-end of the new design',
          'QA after redesign',
          'Support after launch',
        ],
      },
    ],
  },
  'redyzayn-katalog': {
    title: 'Catalog site redesign',
    text: 'We refresh a product or service catalog: categories, cards, search and inquiry — keeping your content.',
    plans: [
      {
        name: 'Start',
        term: '14–21 days',
        items: [
          'Review of the current catalog',
          'Updated category and card structure',
          'Custom modern design',
          'Catalog and filter UI/UX improvements',
          'Responsive design for all devices',
          'Product / service card update',
          'Search and navigation optimization',
          'Better inquiry / order form',
          'Front-end of the new design',
          'QA after redesign',
          'Support after launch',
        ],
      },
    ],
  },
  pereyizd: {
    title: 'Move off a website builder',
    text: 'We take the site off Tilda, Wix or another builder onto a custom build you can grow.',
    plans: [
      {
        name: 'Start',
        term: '14–21 days',
        items: [
          'Review of the current site',
          'Move of structure and content',
          'Design rebuild or adaptation',
          'Custom build without builder limits',
          'Responsive layout for all devices',
          'Move of forms and features',
          'Image transfer and optimization',
          'Sanity check of the site',
          'QA before launch',
          '1 month of free support',
        ],
      },
    ],
  },
  'mobilna-adaptatsiya': {
    title: 'Mobile adaptation',
    text: 'We bring the existing site to a usable look on phones: layout, buttons, speed.',
    plans: [
      {
        name: 'Start',
        term: '5–7 days',
        items: [
          'Adaptation for phones and tablets',
          'Block placement optimization',
          'Correct text and image display',
          'Menu and navigation adaptation',
          'Button and form optimization',
          'Spacing and sizing setup',
          'Checks on different screen sizes',
          'Load-speed optimization',
          'Mobile QA',
        ],
      },
    ],
  },
  'seo-optymizatsiya': {
    title: 'On-site SEO optimization',
    text: 'Core on-site SEO: keywords, meta and page URLs.',
    plans: [
      {
        name: 'Scope',
        items: [
          'Core keyword research',
          'Meta tags and descriptions',
          'URL optimization',
        ],
      },
    ],
  },
  'google-ads': {
    title: 'Google Ads',
    text: 'Campaign launch in Google: search around the offer and landing page. Media budget is separate.',
    plans: [
      {
        name: 'Launch',
        note: 'media budget billed separately',
        items: [
          'Account and tag setup',
          '1–2 campaigns around the offer',
          'Ads and keywords',
          'Link to the site form',
          'Report after go-live',
        ],
      },
    ],
  },
  'poshukova-reklama': {
    title: 'Search ads',
    text: 'For customers already looking for your product or service.',
    plans: [
      {
        name: 'Launch',
        note: 'media budget billed separately',
        items: [
          'Account and tag setup',
          '1–2 search campaigns around the offer',
          'Ads and keywords',
          'Link to the site form',
          'Report after go-live',
        ],
      },
    ],
  },
  'mediyna-reklama': {
    title: 'Display ads',
    text: 'For reach, recognition and bringing potential clients back.',
    plans: [
      {
        name: 'Launch',
        note: 'media budget billed separately',
        items: [
          'Account and tag setup',
          'Display campaigns and remarketing',
          'Banners around the offer',
          'Link to the site and form',
          'Report after go-live',
        ],
      },
    ],
  },
  'tovarna-reklama': {
    title: 'Shopping ads',
    text: 'For online stores: products with photo, price and a link to the site.',
    plans: [
      {
        name: 'Launch',
        note: 'media budget billed separately',
        items: [
          'Merchant Center setup',
          'Product feed and cards',
          'Shopping campaigns for the catalog',
          'Link to stock and price',
          'Report after go-live',
        ],
      },
    ],
  },
  'google-ads-vedennya': {
    title: 'Google Ads management',
    text: 'Monthly optimization of live campaigns: bids, ads, cost per lead.',
    plans: [
      {
        name: 'Retainer',
        note: 'media budget billed separately',
        items: [
          'Regular campaign edits',
          'Ad tests',
          'Cost-per-lead control',
          'Monthly report',
        ],
      },
      {
        name: 'Business',
        note: 'media budget billed separately',
        items: [
          'Everything in Retainer',
          'Several campaigns and remarketing',
          'Link to the landing page and CRM',
          'Budget recommendations',
        ],
      },
    ],
  },
  target: {
    title: 'Paid social',
    text: 'Facebook and Instagram: audiences, creatives, leads into a product already built. Media budget is separate.',
    plans: [
      {
        name: 'Start',
        note: 'media budget billed separately',
        items: [
          'Account and pixel setup',
          '1–2 campaigns',
          'Audiences around the offer',
          'Basic creatives',
          'Report after launch',
        ],
      },
      {
        name: 'Business',
        note: 'media budget billed separately',
        items: [
          'Funnel: leads and remarketing',
          'Creative series and tests',
          'Ongoing optimization',
          'Report on leads and cost per lead',
        ],
      },
    ],
  },
  'instagram-ads': {
    title: 'Instagram Ads',
    text: 'Attracting attention, a new audience and potential clients.',
    plans: [
      {
        name: 'Start',
        note: 'media budget billed separately',
        items: [
          'Account and pixel setup',
          '1–2 Instagram campaigns',
          'Audiences around the offer',
          'Basic creatives',
          'Report after launch',
        ],
      },
    ],
  },
  'facebook-ads': {
    title: 'Facebook Ads',
    text: 'Targeted ads for acquisition, engagement and sales.',
    plans: [
      {
        name: 'Start',
        note: 'media budget billed separately',
        items: [
          'Account and pixel setup',
          '1–2 Facebook campaigns',
          'Audiences around the offer',
          'Basic creatives',
          'Report after launch',
        ],
      },
    ],
  },
  email: {
    title: 'Automation and client communication',
    text: 'Email setup: list, sequences, templates. So the lead does not stop after the first contact.',
    plans: [
      {
        name: 'Start',
        items: [
          'ESP setup',
          '1–2 sequences (lead, reminder)',
          'Branded email template',
          'Basic segmentation',
        ],
      },
    ],
  },
  analytics: {
    title: 'Google Analytics',
    text: 'Analytics setup: events, leads, sources. So you can see what works.',
    plans: [
      {
        name: 'Start',
        items: [
          'GA4 and core events',
          'Form tracking',
          'Link to Google Ads / Meta',
          'Short account guide',
        ],
      },
      {
        name: 'Plus',
        items: [
          'Everything in Start',
          'Funnel to lead and purchase',
          'Custom reports',
          'Duplicate and data-loss check',
        ],
      },
    ],
  },
  'ab-test': {
    title: 'A/B testing',
    text: 'We compare screen, offer or form variants — and keep the one that collects more leads.',
    plans: [
      {
        name: 'Start',
        items: [
          'Hypothesis and one test',
          'Two variants of a block or screen',
          'Measurement setup',
          'Conclusion after data comes in',
        ],
      },
    ],
  },
  crm: {
    title: 'CRM',
    text: 'Pipeline, deal stages and client history. So the team sees where the lead is and what is next.',
    plans: [
      {
        name: 'Start',
        term: '21–30 days',
        items: [
          'Business needs review',
          'CRM structure',
          'Client and contact database',
          'Client card',
          'Lead and deal database',
          'Sales pipeline',
          'Deal statuses and stages',
          'Client interaction history',
          'Task creation and control',
          'Task reminders',
          'Search and filters',
          'User roles',
          'Basic access rights',
          'Basic stats and reports',
          'Responsive interface',
          'Data import',
          'Basic email integration',
          'System QA',
          'Setup and launch',
          '1 month of technical support',
        ],
      },
    ],
  },
  'crm-business': {
    title: 'CRM Business',
    text: 'CRM with a dashboard, site integration, leads into the system, email and Telegram.',
    plans: [
      {
        name: 'Business',
        term: '21–30 days',
        items: [
          'Needs and business-process review',
          'CRM structure',
          'Client and contact database',
          'Client card',
          'Lead and deal database',
          'Sales pipeline',
          'Deal stages and statuses',
          'Client interaction history',
          'Task creation and control',
          'Reminders and deadlines',
          'User roles',
          'Basic access rights',
          'Search and filters',
          'Data import',
          'Data export',
          'Dashboard with key metrics',
          'Basic analytics and reports',
          'Email notifications',
          'Telegram notifications',
          'Website integration',
          'Automatic lead handoff from the site into CRM',
          'Responsive interface',
          'System QA',
          'Setup and launch',
          'Staff training',
          '1 month of technical support',
        ],
      },
    ],
  },
  logotyp: {
    title: 'Logo design',
    text: 'A mark and usage rules: color, type, applications. So the brand reads at first glance.',
    plans: [
      {
        name: 'Start',
        term: '4–5 days',
        items: [
          '3 logo concepts',
          'One option chosen for refinement',
          'Up to 5 revisions of the chosen mark',
          'Type and color pairing',
          'Logo files ready for use',
          'PNG, JPG, PDF, SVG',
          'Versions for light and dark backgrounds',
          'Print-ready files',
        ],
      },
    ],
  },
  polihrafiya: {
    title: 'Print design',
    text: 'Asset design: cards, letterheads, brochures. One language with the logo and the site.',
    plans: [
      {
        name: 'Start',
        term: '4–5 days',
        items: [
          'Business card design',
          'Letterhead design',
          'Brochure design',
          'Flyer design',
          'Adaptation for different formats',
          'Brand colors, type and elements',
          'One visual system with the logo and site',
          'Print-ready layouts',
          'Files in the formats printers need',
        ],
      },
    ],
  },
}


const overlays: Partial<Record<Locale, Record<string, ServiceCopy>>> = { en }

export function localizeService(service: Service, locale: Locale): Service {
  if (locale === 'uk') return service
  const overlay = overlays[locale]?.[service.slug]
  if (!overlay) return service
  return {
    ...service,
    title: overlay.title ?? service.title,
    text: overlay.text ?? service.text,
    plans: service.plans.map((plan, index) => ({
      ...plan,
      name: overlay.plans?.[index]?.name ?? plan.name,
      note: overlay.plans?.[index]?.note ?? plan.note,
      term: overlay.plans?.[index]?.term ?? plan.term,
      items: overlay.plans?.[index]?.items ?? plan.items,
    })),
  }
}

export function localizeGroup(group: ServiceGroup, locale: Locale) {
  if (locale === 'uk') return group
  return (
    {
      Сайти: 'Websites',
      Редизайн: 'Redesign',
      SEO: 'SEO',
      Реклама: 'Ads',
      Системи: 'Systems',
      Айдентика: 'Identity',
    } as Record<ServiceGroup, string>
  )[group]
}
