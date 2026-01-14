function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Te ayudamos a gestionar tus trámites legales de manera rápida y segura</h1>
          <p>
            Soy Jorge, abogado especializado en trámites legales con ubicación estratégica en La Plata.
            Con años de experiencia, te brindo un servicio confiable, eficiente y accesible para resolver todas tus gestiones.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-light">Consultar Trámite</a>
            <a href="https://wa.me/5492211234567" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
