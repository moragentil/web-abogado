import { Scale } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6" />
              <span className="text-lg font-bold">Consultora de Trámites</span>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Jorge - Abogado especializado en trámites legales. Seriedad, confiabilidad y rapidez en cada gestión.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#sobre-jorge" className="text-blue-200 hover:text-white transition-colors">
                  Sobre Jorge
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-blue-200 hover:text-white transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-blue-200 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Horario de Atención</h4>
            <p className="text-blue-200 mb-2">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-blue-200 mb-4">Sábados: 9:00 - 13:00</p>
            <p className="text-white font-semibold mt-4">
              La Plata, Buenos Aires
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © 2026 Consultora de Trámites - Jorge. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
