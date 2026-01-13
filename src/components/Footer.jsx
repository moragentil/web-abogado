import { Scale } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <Scale className="icon" />
            <span>Estudio Jurídico</span>
          </div>
          <p className="muted-text">
            Comprometidos con la excelencia legal y la defensa de sus derechos desde 2009.
          </p>
        </div>
        <div>
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#experiencia">Experiencia</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Horario de Atención</h4>
          <p className="muted-text">Lunes a Viernes: 9:00 - 18:00</p>
          <p className="muted-text">Sábados: 9:00 - 13:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Estudio Jurídico. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
