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
    <section id="testimonios" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Opiniones de Clientes</h2>
          <p>Lo que dicen quienes confiaron en nuestros servicios</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(({ name, text }) => (
            <div key={name} className="card testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="icon star-icon" />
                ))}
              </div>
              <p className="testimonial-text">"{text}"</p>
              <p className="testimonial-author">— {name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials