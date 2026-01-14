import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ariel',
    text: 'Excelente atención de Jorge, asistió a familiares míos en Tartagal por documentación necesaria para iniciar una sucesión. Muy eficiente y recomendable!',
  },
  {
    name: 'Mariano',
    text: 'Excelente servicio y atención! Súper diligentes! En mi experiencia personal muy rápidos en las gestiones y a un precio más que razonable, lo recomiendo!',
  },
  {
    name: 'Marta',
    text: 'En mi caso personal les recomiendo 100% el servicio de diligencias y trámites, muy confiables, expedición y muy accesible. Lo recomiendo!',
  },
  {
    name: 'Willy',
    text: 'Agradezco a esta oficina Consultora de Trámites por su responsabilidad y seriedad en los trámites de documentos municipales que encargué. Es una oficina para recomendar. ¡Gracias!',
  },
  {
    name: 'Javier',
    text: 'Espectacular la atención en un trámite que tenía estancado hace años, me lo hizo rapidísimo. Gracias por todo.',
  },
]

function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-3">
            Opiniones de Clientes
          </h2>
          <p className="text-lg text-gray-600">
            Lo que dicen quienes confiaron en nuestros servicios
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, text }) => (
            <div 
              key={name} 
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-4 flex-grow">
                "{text}"
              </p>
              <p className="font-bold text-primary">
                — {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials