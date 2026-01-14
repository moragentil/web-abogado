function Hero() {
  return (
    <section className="bg-linear-to-br from-[#0f2639] via-[#1a3a52] to-[#2c5f7e] py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.1),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Te ayudamos a gestionar tus trámites legales de manera rápida y segura
          </h1>
          <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
            Soy Jorge, abogado especializado en trámites legales con ubicación estratégica en La Plata. 
            Con años de experiencia, te brindo un servicio confiable, eficiente y accesible para resolver todas tus gestiones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center bg-white text-[#1a3a52] px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl text-lg"
            >
              Consultar Trámite
            </a>
            <a 
              href="https://wa.me/5492211234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 hover:bg-white/20 transition-all text-lg"
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
