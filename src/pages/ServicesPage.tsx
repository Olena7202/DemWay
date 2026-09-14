import { useEffect } from 'react'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'

export function ServicesPage() {
  useEffect(() => {
    document.title = 'Послуги — DemWay'
    return () => {
      document.title = 'DemWay — digital agency'
    }
  }, [])

  return (
    <>
      <Services />
      <Contact />
    </>
  )
}
