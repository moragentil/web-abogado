import { Scale, MessageCircle } from 'lucide-react'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-primary">Consultora de Trámites</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#servicios" className="text-gray-600 hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#sobre-jorge" className="text-gray-600 hover:text-primary transition-colors">
              Sobre Jorge
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-primary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
          
          <a 
            href="https://wa.me/5492211234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-primary text-[white] px-4 py-2.5 rounded-xl font-bold hover:bg-primary-light transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
