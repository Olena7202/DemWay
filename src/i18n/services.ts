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
    title: 'SEO optimization',
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

const pl: Record<string, ServiceCopy> = {
  lending: {
    title: 'Landing page',
    text: 'Strona lądowania do reklamy jednego produktu lub usługi — jasny scenariusz i wysoka konwersja.',
    plans: [
      {
        name: 'Start',
        note: 'Hosting i domena nie wchodzą w cenę',
        term: '5–7 dni',
        items: [
          'Indywidualny projekt',
          'Do 6 sekcji',
          'Wersja responsywna',
          'Formularz zgłoszeń',
          'Powiadomienia e-mail o nowych leadach',
          '1 miesiąc bezpłatnego wsparcia',
        ],
      },
      {
        name: 'Plus',
        note: 'Hosting i domena nie wchodzą w cenę',
        term: '5–7 dni',
        items: [
          'Indywidualny projekt pod markę',
          '8–12 sekcji',
          'Wersja responsywna',
          'Formularz zgłoszeń + powiadomienia e-mail',
          'Integracja płatności online',
          '2 miesiące bezpłatnego wsparcia',
        ],
      },
    ],
  },
  vizytka: {
    title: 'Strona wizytówka',
    text: 'Wielostronicowa strona firmy lub specjalisty: usługi, portfolio, opinie, blog i kontakt.',
    plans: [
      {
        name: 'Start',
        note: 'Hosting i domena nie wchodzą w cenę',
        term: '10–15 dni',
        items: [
          'Indywidualny projekt',
          '3–5 kluczowych podstron',
          'Wersja responsywna',
          'Informacje o firmie / usługach',
          'Formularz kontaktowy',
          'Przyciski social',
          'Miesiąc bezpłatnego wsparcia',
        ],
      },
    ],
  },
  korporatyvnyy: {
    title: 'Strona korporacyjna',
    text: 'Systemowa strona firmy: kierunki, case’y, zespół, oferty pracy, blog i integracje marketingowe.',
    plans: [
      {
        name: 'Start',
        note: 'Hosting i domena nie wchodzą w cenę',
        term: '14–21 dni',
        items: [
          'Indywidualny projekt strony',
          'Koncepcja identyfikacji wizualnej',
          'Wersja responsywna na wszystkie urządzenia',
          'Do 10–15 podstron',
          'Strona główna',
          'Strona O nas',
          'Podstrony usług / praktyk',
          'Strona kontaktu',
          'Blog lub aktualności',
          'Przygotowanie wersji wielojęzycznej',
          'Formularze zwrotne',
          'Przyciski social i komunikatorów',
          'Mapa z lokalizacją firmy',
          'Wgranie treści od klienta',
          'QA przed startem',
          '1 miesiąc bezpłatnego wsparcia',
        ],
      },
    ],
  },
  katalog: {
    title: 'Strona katalogowa',
    text: 'Witryna asortymentu i zapytania. Bez koszyka i płatności — nie sklep internetowy. Dla B2B, producentów i dostawców.',
    plans: [
      {
        name: 'Bez płatności',
        note: 'Hosting i domena nie wchodzą w cenę',
        term: '21–29 dni',
        items: [
          'Indywidualny projekt strony',
          'Wersja responsywna na wszystkie urządzenia',
          'Do 50 produktów',
          'Katalog z kategoriami',
          'Karta produktu: zdjęcia, opis, parametry, cena',
          'Wyszukiwanie produktów',
          'Podstawowe filtry',
          'Formularz zapytania / kontaktu',
          'Przyciski social i komunikatorów',
          'Strona O nas',
          'Strona kontaktu',
          'Blog lub aktualności',
          'Wgranie treści od klienta',
          'QA przed startem',
          '1 miesiąc bezpłatnego wsparcia',
        ],
      },
      {
        name: 'Business',
        note: 'Hosting i domena nie wchodzą w cenę',
        term: '21–29 dni',
        items: [
          'Indywidualny projekt i wygląd marki',
          'Wersja responsywna na wszystkie urządzenia',
          'Do 200 produktów',
          'Rozszerzony katalog z podkategoriami',
          'Bogatsze karty produktów',
          'Wyszukiwanie w katalogu',
          'Zaawansowane filtry i sortowanie',
          'Lista życzeń',
          'Koszyk',
          'Formularz zamówienia',
          'Integracja płatności online',
          'Formularze zwrotne',
          'Przygotowanie wersji wielojęzycznej',
          'Przyciski social i komunikatorów',
          'Wgranie treści od klienta',
          'QA przed startem',
          '2 miesiące bezpłatnego wsparcia',
        ],
      },
    ],
  },
  'redyzayn-lending': {
    title: 'Redesign landingu',
    text: 'Odświeżamy landing: strukturę, warstwę wizualną i formularz — bez budowy strony od zera.',
    plans: [
      {
        name: 'Start',
        term: '5–7 dni',
        items: [
          'Przegląd obecnej strony',
          'Zaktualizowana struktura i przekaz',
          'Indywidualny nowoczesny projekt',
          'Ulepszenia UI/UX',
          'Wersja responsywna na wszystkie urządzenia',
          'Aktualizacja stylu wizualnego',
          'Optymalizacja bloków i CTA',
          'Lepsze formularze zgłoszeń',
          'Front-end nowego projektu',
          'QA po redesignie',
        ],
      },
    ],
  },
  'redyzayn-vizytka': {
    title: 'Redesign strony wizytówki',
    text: 'Odświeżamy krótką stronę firmy: kim jesteście, co robicie, jak się skontaktować — bez przebudowy od zera.',
    plans: [
      {
        name: 'Start',
        term: '10–12 dni',
        items: [
          'Przegląd obecnej strony',
          'Zaktualizowana struktura 3–5 podstron',
          'Indywidualny nowoczesny projekt',
          'Ulepszenia UI/UX',
          'Wersja responsywna na wszystkie urządzenia',
          'Aktualizacja bloku firmy / usług',
          'Lepszy formularz kontaktowy',
          'Zaktualizowane przyciski social',
          'Front-end nowego projektu',
          'QA po redesignie',
        ],
      },
    ],
  },
  'redyzayn-korporatyvnyy': {
    title: 'Redesign korporacyjny',
    text: 'Odświeżamy wygląd i wygodę wielostronicowej strony, zachowując potrzebne treści.',
    plans: [
      {
        name: 'Start',
        term: '14–21 dni',
        items: [
          'Przegląd obecnej strony',
          'Przegląd struktury i użyteczności',
          'Zaktualizowana struktura strony',
          'Indywidualny nowoczesny projekt',
          'Aktualizacja wyglądu marki i koncepcji wizualnej',
          'Ulepszenia UI/UX',
          'Projekt responsywny na wszystkie urządzenia',
          'Optymalizacja nawigacji',
          'Aktualizacje podstron i bloków',
          'Lepsze formularze zwrotne',
          'Zaktualizowane CTA',
          'Adaptacja mobilna projektu',
          'Front-end nowego projektu',
          'QA po redesignie',
          'Wsparcie po starcie',
        ],
      },
    ],
  },
  'redyzayn-katalog': {
    title: 'Redesign strony katalogowej',
    text: 'Odświeżamy katalog produktów lub usług: kategorie, karty, wyszukiwanie i zgłoszenie — z zachowaniem Twoich treści.',
    plans: [
      {
        name: 'Start',
        term: '14–21 dni',
        items: [
          'Przegląd obecnego katalogu',
          'Zaktualizowana struktura kategorii i kart',
          'Indywidualny nowoczesny projekt',
          'Ulepszenia UI/UX katalogu i filtrów',
          'Projekt responsywny na wszystkie urządzenia',
          'Aktualizacja karty produktu / usługi',
          'Optymalizacja wyszukiwania i nawigacji',
          'Lepszy formularz zgłoszenia / zamówienia',
          'Front-end nowego projektu',
          'QA po redesignie',
          'Wsparcie po starcie',
        ],
      },
    ],
  },
  pereyizd: {
    title: 'Przeniesienie z kreatora stron',
    text: 'Zdejmujemy stronę z Tildy, Wix lub innego kreatora na autorską realizację, którą można rozwijać.',
    plans: [
      {
        name: 'Start',
        term: '14–21 dni',
        items: [
          'Przegląd obecnej strony',
          'Przeniesienie struktury i treści',
          'Przebudowa lub adaptacja projektu',
          'Autorska realizacja bez limitów kreatora',
          'Wersja responsywna na wszystkie urządzenia',
          'Przeniesienie formularzy i funkcji',
          'Transfer i optymalizacja zdjęć',
          'Kontrola spójności strony',
          'QA przed startem',
          '1 miesiąc bezpłatnego wsparcia',
        ],
      },
    ],
  },
  'mobilna-adaptatsiya': {
    title: 'Adaptacja mobilna',
    text: 'Doprowadzamy istniejącą stronę do wygodnego wyglądu na telefonach: układ, przyciski, szybkość.',
    plans: [
      {
        name: 'Start',
        term: '5–7 dni',
        items: [
          'Adaptacja na telefony i tablety',
          'Optymalizacja układu bloków',
          'Poprawne wyświetlanie tekstu i zdjęć',
          'Adaptacja menu i nawigacji',
          'Optymalizacja przycisków i formularzy',
          'Ustawienie odstępów i rozmiarów',
          'Testy na różnych szerokościach ekranu',
          'Optymalizacja szybkości ładowania',
          'QA mobilne',
        ],
      },
    ],
  },
  'seo-optymizatsiya': {
    title: 'Optymalizacja SEO',
    text: 'Podstawowe SEO on-site: słowa kluczowe, meta i adresy URL stron.',
    plans: [
      {
        name: 'Zakres',
        items: [
          'Dobór głównych słów kluczowych',
          'Metatagi i opisy',
          'Optymalizacja adresów URL',
        ],
      },
    ],
  },
  'google-ads': {
    title: 'Google Ads',
    text: 'Start kampanii w Google: wyszukiwanie wokół oferty i strony lądowania. Budżet mediowy rozliczany osobno.',
    plans: [
      {
        name: 'Start',
        note: 'budżet mediowy osobno',
        items: [
          'Konfiguracja konta i tagów',
          '1–2 kampanie wokół oferty',
          'Reklamy i słowa kluczowe',
          'Powiązanie z formularzem na stronie',
          'Raport po starcie',
        ],
      },
    ],
  },
  'poshukova-reklama': {
    title: 'Reklama w wyszukiwarce',
    text: 'Dla klientów, którzy już szukają Twojego produktu lub usługi.',
    plans: [
      {
        name: 'Start',
        note: 'budżet mediowy osobno',
        items: [
          'Konfiguracja konta i tagów',
          '1–2 kampanie wyszukiwania wokół oferty',
          'Reklamy i słowa kluczowe',
          'Powiązanie z formularzem na stronie',
          'Raport po starcie',
        ],
      },
    ],
  },
  'mediyna-reklama': {
    title: 'Reklama display',
    text: 'Dla zasięgu, rozpoznawalności i powrotu potencjalnych klientów.',
    plans: [
      {
        name: 'Start',
        note: 'budżet mediowy osobno',
        items: [
          'Konfiguracja konta i tagów',
          'Kampanie display i remarketing',
          'Banery wokół oferty',
          'Powiązanie ze stroną i formularzem',
          'Raport po starcie',
        ],
      },
    ],
  },
  'tovarna-reklama': {
    title: 'Reklama produktowa',
    text: 'Dla sklepów internetowych: produkty ze zdjęciem, ceną i linkiem do strony.',
    plans: [
      {
        name: 'Start',
        note: 'budżet mediowy osobno',
        items: [
          'Konfiguracja Merchant Center',
          'Feed i karty produktów',
          'Kampanie Shopping pod katalog',
          'Powiązanie ze stanem i ceną',
          'Raport po starcie',
        ],
      },
    ],
  },
  'google-ads-vedennya': {
    title: 'Prowadzenie Google Ads',
    text: 'Miesięczna optymalizacja już uruchomionych kampanii: stawki, reklamy, koszt zgłoszenia.',
    plans: [
      {
        name: 'Retainer',
        note: 'budżet mediowy osobno',
        items: [
          'Regularne korekty kampanii',
          'Testy reklam',
          'Kontrola kosztu zgłoszenia',
          'Raport miesięczny',
        ],
      },
      {
        name: 'Business',
        note: 'budżet mediowy osobno',
        items: [
          'Wszystko z pakietu Retainer',
          'Kilka kampanii i remarketing',
          'Powiązanie z landingiem i CRM',
          'Rekomendacje budżetowe',
        ],
      },
    ],
  },
  target: {
    title: 'Reklama w social media',
    text: 'Facebook i Instagram: grupy odbiorców, kreacje, zgłoszenia do już zbudowanego produktu. Budżet mediowy rozliczany osobno.',
    plans: [
      {
        name: 'Start',
        note: 'budżet mediowy osobno',
        items: [
          'Konfiguracja konta i piksela',
          '1–2 kampanie',
          'Grupy odbiorców wokół oferty',
          'Podstawowe kreacje',
          'Raport po starcie',
        ],
      },
      {
        name: 'Business',
        note: 'budżet mediowy osobno',
        items: [
          'Lejek: zgłoszenia i remarketing',
          'Serie kreacji i testy',
          'Bieżąca optymalizacja',
          'Raport ze zgłoszeń i kosztu leada',
        ],
      },
    ],
  },
  'instagram-ads': {
    title: 'Instagram Ads',
    text: 'Przyciąganie uwagi, nowej publiczności i potencjalnych klientów.',
    plans: [
      {
        name: 'Start',
        note: 'budżet mediowy osobno',
        items: [
          'Konfiguracja konta i piksela',
          '1–2 kampanie na Instagramie',
          'Grupy odbiorców wokół oferty',
          'Podstawowe kreacje',
          'Raport po starcie',
        ],
      },
    ],
  },
  'facebook-ads': {
    title: 'Facebook Ads',
    text: 'Reklama targetowana do pozyskania, interakcji i sprzedaży.',
    plans: [
      {
        name: 'Start',
        note: 'budżet mediowy osobno',
        items: [
          'Konfiguracja konta i piksela',
          '1–2 kampanie na Facebooku',
          'Grupy odbiorców wokół oferty',
          'Podstawowe kreacje',
          'Raport po starcie',
        ],
      },
    ],
  },
  email: {
    title: 'E-mail marketing',
    text: 'Uruchomienie maili: baza, sekwencje, szablony. Żeby zgłoszenie nie urywało się po pierwszym kontakcie.',
    plans: [
      {
        name: 'Start',
        items: [
          'Konfiguracja ESP',
          '1–2 sekwencje (zgłoszenie, przypomnienie)',
          'Szablon e-maila w identyfikacji marki',
          'Podstawowa segmentacja',
        ],
      },
    ],
  },
  analytics: {
    title: 'Google Analytics',
    text: 'Konfiguracja analityki: zdarzenia, zgłoszenia, źródła. Żeby było widać, co działa.',
    plans: [
      {
        name: 'Start',
        items: [
          'GA4 i kluczowe zdarzenia',
          'Śledzenie formularzy',
          'Powiązanie z Google Ads / Meta',
          'Krótki przewodnik po koncie',
        ],
      },
      {
        name: 'Plus',
        items: [
          'Wszystko z pakietu Start',
          'Lejek do zgłoszenia i zakupu',
          'Niestandardowe raporty',
          'Kontrola duplikatów i utraty danych',
        ],
      },
    ],
  },
  'ab-test': {
    title: 'Testy A/B',
    text: 'Porównujemy warianty ekranu, oferty albo formularza — i zostawiamy ten, który zbiera więcej zgłoszeń.',
    plans: [
      {
        name: 'Start',
        items: [
          'Hipoteza i jeden test',
          'Dwa warianty bloku lub ekranu',
          'Konfiguracja pomiaru',
          'Wniosek po zebraniu danych',
        ],
      },
    ],
  },
  crm: {
    title: 'CRM',
    text: 'Lejek, etapy transakcji i historia klienta. Żeby zespół widział, gdzie jest zgłoszenie i co dalej.',
    plans: [
      {
        name: 'Start',
        term: '21–30 dni',
        items: [
          'Analiza potrzeb biznesu',
          'Opracowanie struktury CRM',
          'Baza klientów i kontaktów',
          'Karta klienta',
          'Baza leadów i transakcji',
          'Lejek sprzedaży',
          'Statusy i etapy transakcji',
          'Historia interakcji z klientami',
          'Tworzenie i kontrola zadań',
          'Przypomnienia o zadaniach',
          'Wyszukiwanie i filtracja',
          'Role użytkowników',
          'Podstawowe prawa dostępu',
          'Podstawowe statystyki i raporty',
          'Interfejs responsywny',
          'Import danych',
          'Podstawowa integracja z e-mail',
          'Testowanie systemu',
          'Konfiguracja i start',
          '1 miesiąc wsparcia technicznego',
        ],
      },
    ],
  },
  'crm-business': {
    title: 'CRM Business',
    text: 'CRM z dashboardem, integracją strony, zgłoszeniami do systemu, e-mailem i Telegramem.',
    plans: [
      {
        name: 'Business',
        term: '21–30 dni',
        items: [
          'Analiza potrzeb i procesów biznesowych',
          'Opracowanie struktury CRM',
          'Baza klientów i kontaktów',
          'Karta klienta',
          'Baza leadów i transakcji',
          'Lejek sprzedaży',
          'Etapy i statusy transakcji',
          'Historia interakcji z klientami',
          'Tworzenie i kontrola zadań',
          'Przypomnienia i deadline’y',
          'Role użytkowników',
          'Podstawowe prawa dostępu',
          'Wyszukiwanie i filtracja',
          'Import danych',
          'Eksport danych',
          'Dashboard z kluczowymi wskaźnikami',
          'Podstawowa analityka i raporty',
          'Powiadomienia e-mail',
          'Powiadomienia Telegram',
          'Integracja ze stroną',
          'Automatyczne przekazywanie zgłoszeń ze strony do CRM',
          'Interfejs responsywny',
          'Testowanie systemu',
          'Konfiguracja i start',
          'Szkolenie zespołu',
          '1 miesiąc wsparcia technicznego',
        ],
      },
    ],
  },
  logotyp: {
    title: 'Projekt logo',
    text: 'Znak i zasady użycia: kolor, typografia, aplikacje. Żeby marka była czytelna od pierwszego wejrzenia.',
    plans: [
      {
        name: 'Start',
        term: '4–5 dni',
        items: [
          '3 koncepcje logo',
          'Jeden wariant wybrany do dopracowania',
          'Do 5 korekt wybranego znaku',
          'Dobór krojów i kolorów',
          'Pliki logo gotowe do użycia',
          'PNG, JPG, PDF, SVG',
          'Wersje na jasne i ciemne tło',
          'Pliki do druku',
        ],
      },
    ],
  },
  polihrafiya: {
    title: 'Projekt poligraficzny',
    text: 'Projekt nośników: wizytówki, papier firmowy, broszury. Jeden język z logo i stroną.',
    plans: [
      {
        name: 'Start',
        term: '4–5 dni',
        items: [
          'Projekt wizytówki',
          'Projekt papieru firmowego',
          'Projekt broszury',
          'Projekt ulotki',
          'Adaptacja na różne formaty',
          'Kolory, typografia i elementy marki',
          'Jeden system wizualny z logo i stroną',
          'Makiety gotowe do druku',
          'Pliki w formatach dla drukarni',
        ],
      },
    ],
  },
}

const overlays: Partial<Record<Locale, Record<string, ServiceCopy>>> = { en, pl }

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
      Сайти: locale === 'pl' ? 'Strony' : 'Websites',
      Редизайн: 'Redesign',
      SEO: 'SEO',
      Реклама: locale === 'pl' ? 'Reklama' : 'Ads',
      Системи: locale === 'pl' ? 'Systemy' : 'Systems',
      Айдентика: locale === 'pl' ? 'Identyfikacja' : 'Identity',
    } as Record<ServiceGroup, string>
  )[group]
}
