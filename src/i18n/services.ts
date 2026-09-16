import type { Service, ServiceGroup } from '../data/services'
import type { Locale } from './copy'

type PlanCopy = { name?: string; note?: string; items?: string[] }
type ServiceCopy = { title?: string; text?: string; plans?: PlanCopy[] }

const en: Record<string, ServiceCopy> = {
  lending: {
    title: 'Landing page',
    text: 'A one-page site for inquiries: structure, design and a form ready for ads.',
    plans: [
      {
        name: 'Start',
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
    text: 'A short company site: who you are, what you do, how to reach you — no extra sections.',
    plans: [
      {
        name: 'Start',
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
    text: 'A multi-page company site: services, about, blog, careers — a system you can grow.',
    plans: [
      {
        name: 'Start',
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
          'Domain and hosting setup',
          'Content upload from the client',
          'QA before launch',
          '1 month of free support',
        ],
      },
    ],
  },
  katalog: {
    title: 'Catalog site',
    text: 'A catalog of products or services: categories, cards, search and inquiry. Business adds a cart and online payment.',
    plans: [
      {
        name: 'Start',
        items: [
          'Custom site design',
          'Responsive layout for all devices',
          'Up to 50 products',
          'Catalog with categories',
          'Product card: photos, copy, specs, price',
          'Product search',
          'Basic filters',
          'Inquiry / order form',
          'Social and messenger buttons',
          'About page',
          'Contact page',
          'Blog or news feed',
          'Domain and hosting setup',
          'Content upload from the client',
          'QA before launch',
          '1 month of free support',
        ],
      },
      {
        name: 'Business',
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
          'Domain and hosting setup',
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
  'redyzayn-korporatyvnyy': {
    title: 'Corporate redesign',
    text: 'We refresh look and ease of a multi-page site while keeping the content you need.',
    plans: [
      {
        name: 'Start',
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
  pereyizd: {
    title: 'Move off a website builder',
    text: 'We take the site off Tilda, Wix or another builder onto a custom build you can grow.',
    plans: [
      {
        name: 'Start',
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
  'seo-audyt': {
    title: 'SEO audit',
    text: 'A review of the site: tech, content, visibility. What blocks growth in Google and where to start.',
    plans: [
      {
        name: 'Start',
        items: [
          'Technical audit',
          'Semantics and page review',
          'Priority fix list',
          'Written report',
        ],
      },
      {
        name: 'Plus',
        items: [
          'Everything in Start',
          'SERP competitor review',
          '1–3 month work plan',
          'Short call on findings',
        ],
      },
    ],
  },
  'seo-optymizatsiya': {
    title: 'SEO optimization',
    text: 'Ongoing visibility work: tech, content, pages. Three retainer levels.',
    plans: [
      {
        name: 'Small business',
        items: [
          'Support for a small site',
          'Technical fixes by priority',
          'Optimization of key pages',
          'Monthly report',
        ],
      },
      {
        name: 'Business',
        items: [
          'Everything in Small business',
          'Content plan and new landings',
          'Semantics expansion',
          'Regular edits for growing queries',
        ],
      },
      {
        name: 'Pro',
        items: [
          'Everything in Business',
          'Several directions and a competitive niche',
          'Deeper analytics and priorities',
          'Tighter retainer and recommendations',
        ],
      },
    ],
  },
  'lokalne-seo': {
    title: 'Local SEO',
    text: 'Visibility in the city and on the map: Google Business, local queries, reviews.',
    plans: [
      {
        name: 'Start',
        items: [
          'Google Business Profile setup',
          'Local keyword set',
          'Basic on-site edits',
          'Review recommendations',
        ],
      },
      {
        name: 'Plus',
        items: [
          'Everything in Start',
          'Ongoing profile management',
          'Local pages for areas or services',
          'Monthly visibility report',
        ],
      },
    ],
  },
  'seo-teksty': {
    title: 'SEO copy',
    text: 'Search copy: clear for people and built around queries they use to find you.',
    plans: [
      {
        name: 'Start',
        items: [
          'Semantics for a set of pages',
          'Up to 5 SEO texts',
          'Headlines and meta descriptions',
          'Two revision rounds',
        ],
      },
      {
        name: 'Plus',
        items: [
          'Up to 12 SEO texts',
          'Structure by query clusters',
          'Internal linking',
          'Publishing recommendations',
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
        note: 'Ad spend is billed separately',
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
  'google-ads-vedennya': {
    title: 'Google Ads management',
    text: 'Monthly optimization of live campaigns: bids, ads, cost per lead.',
    plans: [
      {
        name: 'Retainer',
        note: 'Ad spend is billed separately',
        items: [
          'Regular campaign edits',
          'Ad tests',
          'Cost-per-lead control',
          'Monthly report',
        ],
      },
      {
        name: 'Business',
        note: 'Ad spend is billed separately',
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
        note: 'Ad spend is billed separately',
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
        note: 'Ad spend is billed separately',
        items: [
          'Funnel: leads and remarketing',
          'Creative series and tests',
          'Ongoing optimization',
          'Report on leads and cost per lead',
        ],
      },
    ],
  },
  email: {
    title: 'Email marketing',
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
      {
        name: 'Business',
        items: [
          'Everything in Start',
          'Several scenarios and a nurture path',
          'Site and CRM integration',
          'Cadence recommendations',
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
      {
        name: 'Business',
        items: [
          'A series of tests across the funnel',
          'Several hypotheses (offer, form, CTA)',
          'Report and next-test priorities',
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
        items: [
          'Business needs review',
          'CRM structure',
          'Client database',
          'Client card',
          'Lead and deal tracking',
          'Sales pipeline',
          'Deal stages',
          'Search and filters',
          'Interaction history',
          'Task creation and control',
          'Roles and basic access',
          'Basic stats',
          'Responsive interface',
          'System QA',
          'CRM training',
        ],
      },
      {
        name: 'Business',
        items: [
          'Everything in CRM Start',
          'Extended clients and deals',
          'Several sales pipelines',
          'Extended roles and access',
          'Dashboard and deeper analytics',
          'Process automation',
          'Automatic task creation',
          'Email alerts',
          'Telegram alerts',
          'Website integration',
          'Automatic lead handoff into CRM',
          'Online payment integration',
          'Data import and export',
          'Advanced search and filters',
          'Custom setup for the business',
          'QA and launch',
          'Team training',
          '1 month of free support',
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

export function localizeService(service: Service, locale: Locale): Service {
  if (locale === 'uk') return service
  const overlay = en[service.slug]
  if (!overlay) return service
  return {
    ...service,
    title: overlay.title ?? service.title,
    text: overlay.text ?? service.text,
    plans: service.plans.map((plan, index) => ({
      ...plan,
      name: overlay.plans?.[index]?.name ?? plan.name,
      note: overlay.plans?.[index]?.note ?? plan.note,
      items: overlay.plans?.[index]?.items ?? plan.items,
    })),
  }
}

export function localizeGroup(group: ServiceGroup, locale: Locale) {
  if (locale === 'uk') return group
  return (
    {
      Сайти: 'Websites',
      SEO: 'SEO',
      Реклама: 'Ads',
      Системи: 'Systems',
      Айдентика: 'Identity',
    } as Record<ServiceGroup, string>
  )[group]
}
