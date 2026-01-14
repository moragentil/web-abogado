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
    <section id="sobre-jorge" className="section muted">
      <div className="container about-grid">
        <div>
          <h2>Sobre Jorge</h2>
          <p className="lead">
            Soy Jorge, abogado especializado en la gestión de trámites legales. Mi objetivo es brindarte 
            un servicio de calidad, caracterizado por la seriedad, confiabilidad y rapidez en cada gestión.
          </p>
          <p className="lead">
            Con ubicación estratégica en La Plata, facilito el acceso a todos los organismos necesarios 
            para resolver tus trámites de manera eficiente. Mi compromiso es acompañarte en cada paso 
            del proceso con profesionalismo y dedicación.
          </p>
          <div className="highlight-list">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="highlight-item">
                <div className="highlight-icon">
                  <Icon className="icon" />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-image-placeholder">
          <div className="image-box">
            <p>Foto profesional de Jorge</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About