function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0f2639] via-[#1a3a52] to-[#2c5f7e] min-h-[calc(100vh-73px)] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.1),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14">
        <div className="space-y-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 bg-white/10 px-4 py-2 rounded-full border border-white/15 backdrop-blur-md">
            Consultora de Trámites
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight drop-shadow-lg">
              Te ayudamos a gestionar tus trámites legales de manera rápida y segura
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-light text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Somos una consultora especializada en la gestión de trámites. <span className='hidden sm:inline'>Nuestro compromiso es brindarte un servicio caracterizado por la seriedad, confiabilidad y rapidez en cada gestión. </span> 
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-white/85 text-sm">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15">Seriedad</span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15">Confiabilidad</span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15">Rapidez</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center bg-white text-[#1a3a52] px-5 py-3 rounded-xl font-bold hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl text-sm sm:text-base"
            >
              Consultar Trámite
            </a>
            <a 
              href="https://wa.me/5492215459763" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white px-5 py-3 rounded-xl font-bold hover:-translate-y-1 hover:bg-white/20 transition-all text-sm sm:text-base"
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
