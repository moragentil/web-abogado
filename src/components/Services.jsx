import { FileText, Home, Shield, CreditCard, FileCheck, Scale, Building, Briefcase } from 'lucide-react'

const importantServices = [
  {
    icon: FileText,
    title: 'Inscripción de declaratoria de herederos',
    description: 'Gestión completa del trámite de declaratoria de herederos ante los organismos correspondientes.',
  },
  {
    icon: Home,
    title: 'Informe sobre inmuebles / estudio de título',
    description: 'Análisis exhaustivo de la situación legal de inmuebles y verificación de títulos de propiedad.',
  },
  {
    icon: Shield,
    title: 'Informe sobre garantía de un inmueble',
    description: 'Evaluación detallada de garantías inmobiliarias para créditos y préstamos.',
  },
  {
    icon: CreditCard,
    title: 'Trámites para créditos hipotecarios UVA / Procrear',
    description: 'Asistencia integral en toda la documentación necesaria para créditos hipotecarios.',
  },
  {
    icon: FileCheck,
    title: 'Partidas de nacimiento, matrimonio y defunción',
    description: 'Gestión rápida de partidas oficiales del Registro Civil.',
  },
]

const additionalServices = [
  {
    icon: Scale,
    title: 'Diligenciamiento de oficios y cédulas judiciales',
    description: 'Tramitación eficiente de comunicaciones judiciales.',
  },
  {
    icon: Briefcase,
    title: 'Informes de juicios universales',
    description: 'Sucesiones, quiebras y concursos preventivos.',
  },
  {
    icon: Building,
    title: 'Informes comerciales',
    description: 'Búsqueda y análisis de información comercial de personas y empresas.',
  },
  {
    icon: Home,
    title: 'Informes catastrales',
    description: 'Certificados de catastro, cédulas, planchetas y valuación fiscal.',
  },
  {
    icon: FileText,
    title: 'Sucesiones en Provincia de Bs. As. y Capital Federal',
    description: 'Gestión completa de trámites sucesorios en ambas jurisdicciones.',
  },
  {
    icon: FileCheck,
    title: 'Certificación de años de servicio',
    description: 'Tramitación en IPS / ANSES y reclamos administrativos.',
  },
]

function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros Servicios</h2>
          <p>Tramitación profesional y confiable para todas tus necesidades legales</p>
        </div>

        <h3 className="subsection-title">Trámites Más Importantes</h3>
        <div className="cards-grid">
          {importantServices.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card service-card">
              <Icon className="icon large" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Trámites para Acompañar</h3>
        <div className="cards-grid">
          {additionalServices.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card service-card">
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
