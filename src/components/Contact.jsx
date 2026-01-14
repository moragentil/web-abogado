import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'

const contacts = [
  { icon: Phone, label: 'Teléfono', value: '+54 221 123-4567' },
  { icon: Mail, label: 'Email', value: 'jorge@consultoratramites.com' },
  { icon: MapPin, label: 'Oficina', value: 'La Plata, Buenos Aires' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+54 9 221 123-4567', link: 'https://wa.me/5492211234567' },
]

function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-3">
            Contacto
          </h2>
          <p className="text-lg text-gray-600">
            Estoy aquí para ayudarte. Completa el formulario o contáctame directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Datos de contacto */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Información de Contacto</h3>
              <div className="grid grid-cols-1 gap-4">
                {contacts.map(({ icon: Icon, label, value, link }) => (
                  <div 
                    key={label} 
                    className="bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary-light" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm mb-1">{label}</h4>
                      {link ? (
                        <a 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-700 hover:text-primary-light hover:underline font-medium text-sm"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-700 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-primary mb-3">Horario de Atención</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold">Lunes a Viernes:</span> 9:00 - 18:00</p>
                <p><span className="font-semibold">Sábados:</span> 9:00 - 13:00</p>
              </div>
            </div>
          </div>

                    {/* Formulario */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-6">Envía tu consulta</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block font-semibold text-gray-800 mb-2 text-sm">
                  Nombre Completo
                </label>
                <input 
                  id="nombre" 
                  type="text" 
                  placeholder="Tu nombre" 
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-semibold text-gray-800 mb-2 text-sm">
                  Email
                </label>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="tu@email.com" 
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block font-semibold text-gray-800 mb-2 text-sm">
                  Teléfono
                </label>
                <input 
                  id="telefono" 
                  type="tel" 
                  placeholder="+54 11 1234-5678" 
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="tramite" className="block font-semibold text-gray-800 mb-2 text-sm">
                  Tipo de Trámite
                </label>
                <select 
                  id="tramite" 
                  defaultValue=""
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm"
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
                  <option>Informes catastrales</option>
                  <option>Sucesiones</option>
                  <option>Certificación de años de servicio</option>
                  <option>Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block font-semibold text-gray-800 mb-2 text-sm">
                  Consulta / Mensaje
                </label>
                <textarea 
                  id="mensaje" 
                  rows="4" 
                  placeholder="Cuéntame sobre tu trámite o consulta..." 
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary-light focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-vertical text-sm"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-light transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-6">
            Ubicación de la Oficina
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52562.19281010535!2d-57.99570084863281!3d-34.92144999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              height="400"
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
