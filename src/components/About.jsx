import { Award, Clock, MapPin } from 'lucide-react'
import abogadoImg from '../assets/fondo-escritorio.webp'

const highlights = [
  {
    icon: Award,
    title: 'Profesionalismo',
    description: 'Equipo con amplia experiencia en la gestión de trámites y diligencias.',
  },
  {
    icon: Clock,
    title: 'Rapidez',
    description: 'Resolución eficiente de tus gestiones en el menor tiempo posible.',
  },
  {
    icon: MapPin,
    title: 'Ubicación Estratégica',
    description: 'Oficina en La Plata para facilitar todos tus trámites.',
  },
]

function About() {
  return (
    <section id="sobre-nosotros" className="py-16 bg-gray-50 scroll-m-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3a52] mb-5">
              Sobre Nosotros
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-3">
              Somos una consultora especializada en la gestión de trámites. 
              Nuestro objetivo es brindarte un servicio de calidad, caracterizado por la seriedad, confiabilidad y rapidez en cada gestión.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Con una ubicación estrategica en la ciudad de La Plata, facilitamos el acceso a los organismos necesarios para resolver tus trámites de manera eficiente. 
              Nuestro compromiso es acompañarte en cada paso del proceso con profesionalismo y dedicación.
            </p>
            
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1a3a52]/10 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#1a3a52]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a3a52] mb-1 text-sm">{title}</h4>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="h-[400px] w-full max-w-sm rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={abogadoImg} 
                alt="Jorge - Consultora de Trámites" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About