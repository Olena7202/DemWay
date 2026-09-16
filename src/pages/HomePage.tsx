import { Hero } from '../components/Hero'
import { Why } from '../components/Why'
import { ServicesTeaser } from '../components/ServicesTeaser'
import { Cases } from '../components/Cases'
import { Approach } from '../components/Approach'
import { Faq } from '../components/Faq'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <Why />
      <ServicesTeaser />
      <Cases />
      <Approach />
      <Faq />
      <Contact />
    </>
  )
}
