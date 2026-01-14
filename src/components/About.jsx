import { Award, Clock, MapPin } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'Profesionalismo',
    description: 'Abogado con amplia experiencia en gestión de trámites legales.',
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
    <section id="sobre-jorge" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
              Sobre Jorge
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Soy Jorge, abogado especializado en la gestión de trámites legales. Mi objetivo es brindarte 
              un servicio de calidad, caracterizado por la seriedad, confiabilidad y rapidez en cada gestión.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Con ubicación estratégica en La Plata, facilito el acceso a todos los organismos necesarios 
              para resolver tus trámites de manera eficiente. Mi compromiso es acompañarte en cada paso 
              del proceso con profesionalismo y dedicación.
            </p>
            
            <div className="space-y-5">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{title}</h4>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="h-[500px] w-full max-w-md aspect-3/4 bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl border-4 border-dashed border-gray-400 flex items-center justify-center p-8">
              <p className="text-center text-gray-600 font-semibold text-lg">
                Foto profesional de Jorge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About