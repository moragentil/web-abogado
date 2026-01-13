import { Award, Scale, Users } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: '15+ Años de Experiencia',
    description: 'Más de una década defendiendo los derechos de nuestros clientes.',
  },
  {
    icon: Users,
    title: '500+ Casos Exitosos',
    description: 'Resultados comprobados en múltiples áreas del derecho.',
  },
  {
    icon: Scale,
    title: 'Atención Personalizada',
    description: 'Cada caso recibe dedicación exclusiva y estrategia a medida.',
  },
]

const credentials = [
  'Licenciado en Derecho - Universidad Nacional',
  'Maestría en Derecho Corporativo - Universidad de Buenos Aires',
  'Miembro del Colegio de Abogados',
  'Especialización en Litigación Civil y Comercial',
  'Profesor invitado en seminarios de derecho corporativo',
]

function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container experience-grid">
        <div>
          <h2>Experiencia y Compromiso</h2>
          <p className="lead">
            Nuestro estudio se ha consolidado como referente en la práctica legal, brindando soluciones efectivas y
            personalizadas a cada cliente.
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
        <div className="credentials">
          <h3>Credenciales Profesionales</h3>
          <ul>
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
