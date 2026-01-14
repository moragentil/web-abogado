import logoHero from '../assets/logo-hero.png'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0f2639] via-[#1a3a52] to-[#2c5f7e] min-h-[calc(100vh-73px)] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.1),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_35%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Logo - Primero en móvil, segundo en desktop */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <img 
              src={logoHero}
              alt="Consultora de Trámites - Jorge" 
              className="w-full max-w-[300px] sm:max-w-[250px] lg:max-w-sm drop-shadow-2xl"
            />
          </div>

          {/* Contenido de texto - Segundo en móvil, primero en desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-white leading-tight mb-4 drop-shadow-lg">
              Te ayudamos a gestionar tus trámites legales de manera rápida y segura
            </h1>
            <p className="text-sm sm:text-base font-light text-white/95 mb-5 leading-relaxed drop-shadow-md">
              Soy Jorge, abogado especializado en trámites legales. <span className='hidden sm:inline'>Mi compromiso es brindarte un servicio caracterizado por la seriedad, confiabilidad y rapidez en cada gestión. </span> 
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start">
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center bg-white text-[#1a3a52] px-5 py-2.5 rounded-xl font-bold hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl text-sm sm:text-base"
              >
                Consultar Trámite
              </a>
              <a 
                href="https://wa.me/5492211234567" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white px-5 py-2.5 rounded-xl font-bold hover:-translate-y-1 hover:bg-white/20 transition-all text-sm sm:text-base"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
