import { PageBg } from './components/PageBg'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Why } from './components/Why'
import { Services } from './components/Services'
import { Cases } from './components/Cases'
import { Approach } from './components/Approach'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="page">
      <PageBg />
      <Header />
      <main>
        <Hero />
        <Why />
        <Services />
        <Cases />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
