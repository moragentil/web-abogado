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
  },
  {
    icon: Briefcase,
    title: 'Informes de juicios universales (sucesiones, quiebras, concursos)',
  },
  {
    icon: Building,
    title: 'Informes comerciales',
  },
  {
    icon: Home,
    title: 'Informes catastrales (certificados, cédulas, planchetas, valuación)',
  },
  {
    icon: FileText,
    title: 'Sucesiones en Provincia de Bs. As. y Capital Federal',
  },
  {
    icon: FileCheck,
    title: 'Certificación de años de servicio en IPS / ANSES',
  },
]

function Services() {
  return (
    <section id="servicios" className="py-20 bg-white scroll-m-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a3a52] mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600">
            Tramitación profesional y confiable para todas tus necesidades legales
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {importantServices.map(({ icon: Icon, title, description }) => (
            <div 
              key={title} 
              className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all sm:min-h-[280px] flex flex-col"
            >
              {/* Móvil: ícono al lado del título */}
              <div className="flex items-start gap-1 sm:block mb-2 sm:mb-0">
                <Icon className="w-4 h-4 sm:w-8 sm:h-8 text-[#2c5f7e] flex-shrink-0 sm:mb-4" />
                <h3 className="text-sm sm:text-base font-bold text-[#1a3a52] leading-snug flex-1 sm:mb-3">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-600 text-center mb-6 mt-16">
          Trámites Adicionales
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {additionalServices.map(({ icon: Icon, title }) => (
            <div 
              key={title} 
              className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-white hover:border-[#2c5f7e] hover:shadow-md transition-all"
            >
              <Icon className="w-5 h-5 text-[#2c5f7e] flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
