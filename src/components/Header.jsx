import { Scale } from 'lucide-react'

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <div className="brand">
          <Scale className="icon" />
          <span>Estudio Jurídico</span>
        </div>
        <nav className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <button className="btn btn-primary">Consulta Gratuita</button>
      </div>
    </header>
  )
}

export default Header
