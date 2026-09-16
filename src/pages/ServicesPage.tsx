import { useEffect } from 'react'
import { Services } from '../components/Services'
import { Faq } from '../components/Faq'
import { Contact } from '../components/Contact'
import { useLocale } from '../i18n/locale'

export function ServicesPage() {
  const { t, locale } = useLocale()

  useEffect(() => {
    document.title = `${t.catalog.title} - DemWay`
    return () => {
      document.title = t.meta.title
    }
  }, [locale, t])

  return (
    <>
      <Services />
      <Faq />
      <Contact />
    </>
  )
}
