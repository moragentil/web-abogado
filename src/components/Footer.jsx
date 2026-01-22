import { Scale, Mail, Phone, MessageCircle } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#0f2639] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-bold text-white">Consultora de Trámites</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Especializada en la gestión de diligencias. Seriedad, confiabilidad y rapidez en cada gestión.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors block">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="text-gray-300 hover:text-white transition-colors block">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-300 hover:text-white transition-colors block">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors block">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+542215459763" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>221 545-9763</span>
              </a>
              <a 
                href="mailto:jorge@consultoratramites.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>jorge@consultoratramites.com</span>
              </a>
              <a 
                href="https://wa.me/5492215459763" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Horario de Atención</h4>
            <div className="space-y-2.5 text-sm">
              <p className="text-gray-300">
                <span className="font-medium text-white">Lunes a Viernes:</span><br />
                9:00 - 18:00
              </p>
              <p className="text-white font-semibold mt-4 pt-2">
                La Plata, Buenos Aires
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © 2026 Consultora de Trámites - Jorge. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
