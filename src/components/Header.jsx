import { Scale, MessageCircle } from 'lucide-react'

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <div className="brand">
          <Scale className="icon" />
          <span>Consultora de Trámites</span>
        </div>
        <nav className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#sobre-jorge">Sobre Jorge</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a href="https://wa.me/5492211234567" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <MessageCircle className="icon-inline" />
          WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
