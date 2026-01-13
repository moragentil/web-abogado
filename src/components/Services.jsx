import { Award, Briefcase, Scale, Users } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Derecho Corporativo',
    description:
      'Asesoramiento integral para empresas, contratos comerciales y constitución de sociedades.',
  },
  {
    icon: Users,
    title: 'Derecho Familiar',
    description:
      'Divorcios, custodia de menores, pensiones alimenticias y adopciones con sensibilidad y profesionalismo.',
  },
  {
    icon: Scale,
    title: 'Derecho Civil',
    description: 'Contratos, sucesiones, responsabilidad civil y resolución de conflictos patrimoniales.',
  },
  {
    icon: Award,
    title: 'Derecho Laboral',
    description: 'Defensa de derechos laborales, despidos, indemnizaciones y negociaciones colectivas.',
  },
  {
    icon: Briefcase,
    title: 'Derecho Penal',
    description: 'Defensa penal estratégica con experiencia en casos complejos y recursos de apelación.',
  },
  {
    icon: Users,
    title: 'Derecho Inmobiliario',
    description: 'Compraventa de propiedades, contratos de arrendamiento y resolución de conflictos.',
  },
]

function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Áreas de Práctica</h2>
          <p>Servicios legales especializados adaptados a sus necesidades.</p>
        </div>
        <div className="cards-grid">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card">
              <Icon className="icon large" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
