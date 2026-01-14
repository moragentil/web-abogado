function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-light to-primary py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.08),transparent_30%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_25%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Te ayudamos a gestionar tus trámites legales de manera rápida y segura
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Soy Jorge, abogado especializado en trámites legales con ubicación estratégica en La Plata. 
            Con años de experiencia, te brindo un servicio confiable, eficiente y accesible para resolver todas tus gestiones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-xl font-bold hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl"
            >
              Consultar Trámite
            </a>
            <a 
              href="https://wa.me/5492211234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/80 px-6 py-3 rounded-xl font-bold hover:-translate-y-1 transition-all"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
