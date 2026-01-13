import './App.css'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
