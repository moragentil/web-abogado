import { Scale, MessageCircle, Menu, X } from 'lucide-react'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-[#1a3a52] ">Consultora de Trámites</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#servicios" className="text-gray-600 hover:text-[#1a3a52] transition-colors">
              Servicios
            </a>
            <a href="#sobre-nosotros" className="text-gray-600 hover:text-[#1a3a52] transition-colors">
              Sobre Nosotros
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-[#1a3a52] transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-[#1a3a52] transition-colors">
              Contacto
            </a>
          </nav>
          
          {/* Desktop WhatsApp Button */}
          <a 
            href="https://wa.me/5492215459763" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex items-center gap-2 bg-[#1a3a52] text-white px-4 py-2.5 rounded-xl font-bold hover:bg-[#2c5f7e] transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#1a3a52] hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0  z-40"
              onClick={closeMenu}
            ></div>
            
            {/* Menu Panel */}
            <nav className="fixed top-[73px] left-0 right-0 bg-white shadow-lg z-50 md:hidden border-b border-gray-200">
              <div className="flex flex-col gap-1 p-4">
                
                <a 
                  href="#servicios" 
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-[#1a3a52] transition-colors py-2 px-4 rounded-lg hover:bg-gray-100 font-semibold"
                >
                  Servicios
                </a>
                <a 
                  href="#sobre-nosotros" 
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-[#1a3a52] transition-colors py-2 px-4 rounded-lg hover:bg-gray-100 font-semibold"
                >
                  Sobre Nosotros
                </a>
                <a 
                  href="#testimonios" 
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-[#1a3a52] transition-colors py-2 px-4 rounded-lg hover:bg-gray-100 font-semibold"
                >
                  Testimonios
                </a>
                <a 
                  href="#contacto" 
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-[#1a3a52] transition-colors py-2 px-4 rounded-lg hover:bg-gray-100 font-semibold"
                >
                  Contacto
                </a>
                <a 
                  href="https://wa.me/5492215459763" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-[#1a3a52] text-white px-4 py-2.5 rounded-xl font-bold hover:bg-[#2c5f7e] transition-all shadow-lg mt-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
