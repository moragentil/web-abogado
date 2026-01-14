import { Scale } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <Scale className="icon" />
            <span>Consultora de Trámites</span>
          </div>
          <p className="muted-text">
            Jorge - Abogado especializado en trámites legales. Seriedad, confiabilidad y rapidez en cada gestión.
          </p>
        </div>
        <div>
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#sobre-jorge">Sobre Jorge</a>
            </li>
            <li>
              <a href="#testimonios">Testimonios</a>
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
          <p className="muted-text" style={{ marginTop: '12px' }}>
            <strong>La Plata, Buenos Aires</strong>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Consultora de Trámites - Jorge. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
