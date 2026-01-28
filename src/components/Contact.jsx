import { Mail, MapPin, Phone, MessageCircle, CheckCircle, XCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const contacts = [
  { icon: Phone, label: 'Teléfono', value: '+54 221 694-3746' },
  { icon: Mail, label: 'Email', value: 'tramitesar@yahoo.com.ar' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+54 9 221 545-9763', link: 'https://wa.me/5492215459763' },
  { icon: MapPin, label: 'Oficina', value: 'Calle 8 y 55 local Nro 4, La Plata' },
]

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.sendForm(
        'service_bcb97ss',    // Service ID
        'template_91ksu3h',   // Template ID
        e.target,             // El formulario completo
        'nVhdidvfv_w3zTlw3'   // Public Key
      )

      console.log('Email enviado:', result.text)
      setSubmitStatus('success')
      e.target.reset() // Limpia el formulario
    } catch (error) {
      console.error('Error al enviar email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contacto" className="py-16 bg-gray-50 scroll-m-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3a52] mb-2">
            Contacto
          </h2>
          <p className="text-base text-gray-600">
            Completá el formulario o contáctame directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Datos de contacto */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-[#1a3a52] mb-4">Información de Contacto</h3>
              <div className="grid grid-cols-1 gap-3">
                {contacts.map(({ icon: Icon, label, value, link }) => (
                  <div 
                    key={label} 
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-3"
                  >
                    <div className="bg-[#1a3a52]/10 p-2.5 rounded-lg">
                      <Icon className="w-5 h-5 text-[#2c5f7e]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a3a52] text-xs mb-0.5">{label}</h4>
                      {link ? (
                        <a 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-700 hover:text-[#2c5f7e] hover:underline font-medium text-xs"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-700 text-xs">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-md">
              <h4 className="font-bold text-[#1a3a52] mb-2.5 text-sm">Horario de Atención</h4>
              <div className="space-y-1.5 text-xs text-gray-700">
                <p><span className="font-semibold">Lunes a Viernes:</span> 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-xl p-5">
            <h3 className="text-lg font-bold text-[#1a3a52] mb-4">Envía tu consulta</h3>
            
            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-xs font-medium">¡Consulta enviada con éxito! Te contactaremos pronto.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-xs font-medium">Error al enviar. Por favor, intenta nuevamente.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="nombre" className="block font-semibold text-gray-800 mb-1.5 text-xs">
                  Nombre Completo
                </label>
                <input 
                  id="nombre" 
                  name="nombre"
                  type="text" 
                  placeholder="Tu nombre" 
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#2c5f7e] focus:ring-2 focus:ring-[#1a3a52]/10 outline-none transition-all text-xs disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-semibold text-gray-800 mb-1.5 text-xs">
                  Email
                </label>
                <input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="tu@email.com" 
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#2c5f7e] focus:ring-2 focus:ring-[#1a3a52]/10 outline-none transition-all text-xs disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block font-semibold text-gray-800 mb-1.5 text-xs">
                  Teléfono
                </label>
                <input 
                  id="telefono" 
                  name="telefono"
                  type="tel" 
                  placeholder="+54 11 1234-5678" 
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#2c5f7e] focus:ring-2 focus:ring-[#1a3a52]/10 outline-none transition-all text-xs disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
              
              <div>
                <label htmlFor="tramite" className="block font-semibold text-gray-800 mb-1.5 text-xs">
                  Tipo de Trámite
                </label>
                <select 
                  id="tramite" 
                  name="tramite"
                  defaultValue=""
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#2c5f7e] focus:ring-2 focus:ring-[#1a3a52]/10 outline-none transition-all text-xs disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="" disabled>Selecciona un trámite</option>
                  <option>Declaratoria de herederos</option>
                  <option>Informe sobre inmuebles / estudio de título</option>
                  <option>Informe sobre garantía de un inmueble</option>
                  <option>Créditos hipotecarios UVA / Procrear</option>
                  <option>Partidas (nacimiento, matrimonio, defunción)</option>
                  <option>Diligenciamiento de oficios y cédulas</option>
                  <option>Informes de juicios universales</option>
                  <option>Informes comerciales</option>
                  <option>Valuaciones Fiscales</option>
                  <option>Sucesiones</option>
                  <option>Certificación de años de servicio</option>
                  <option>Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block font-semibold text-gray-800 mb-1.5 text-xs">
                  Consulta / Mensaje
                </label>
                <textarea 
                  id="mensaje" 
                  name="mensaje"
                  rows="3" 
                  placeholder="Cuéntame sobre tu trámite o consulta..." 
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-[#2c5f7e] focus:ring-2 focus:ring-[#1a3a52]/10 outline-none transition-all resize-vertical text-xs disabled:bg-gray-100 disabled:cursor-not-allowed"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#1a3a52] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#2c5f7e] transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold text-[#1a3a52] text-center mb-5">
            Ubicación de la Oficina
          </h3>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.8821688741036!2d-57.94787983043056!3d-34.91827579863765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e71a2f377305%3A0x8833e68b1ed06dba!2sConsultora%20de%20Tr%C3%A1mites!5e0!3m2!1sen!2sar!4v1769092252043!5m2!1sen!2sar"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Oficina La Plata"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
