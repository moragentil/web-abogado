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
            Estoy aquí para ayudarte. Completa el formulario o contáctame directamente por WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 md:p-8 mb-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block font-semibold text-gray-800 mb-2">
                Nombre Completo
              </label>
              <input 
                id="nombre" 
                type="text" 
                placeholder="Tu nombre" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-light focus:ring-4 focus:ring-primary/10 outline-none transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-800 mb-2">
                Email
              </label>
              <input 
                id="email" 
                type="email" 
                placeholder="tu@email.com" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-light focus:ring-4 focus:ring-primary/10 outline-none transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="telefono" className="block font-semibold text-gray-800 mb-2">
                Teléfono
              </label>
              <input 
                id="telefono" 
                type="tel" 
                placeholder="+54 11 1234-5678" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-light focus:ring-4 focus:ring-primary/10 outline-none transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="tramite" className="block font-semibold text-gray-800 mb-2">
                Tipo de Trámite
              </label>
              <select 
                id="tramite" 
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-light focus:ring-4 focus:ring-primary/10 outline-none transition-all"
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
            
            <div className="md:col-span-2">
              <label htmlFor="mensaje" className="block font-semibold text-gray-800 mb-2">
                Consulta / Mensaje
              </label>
              <textarea 
                id="mensaje" 
                rows="5" 
                placeholder="Cuéntame sobre tu trámite o consulta..." 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-light focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-vertical"
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-light transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Enviar Consulta
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map(({ icon: Icon, label, value, link }) => (
            <div 
              key={label} 
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Icon className="w-8 h-8 text-primary-light mx-auto mb-4" />
              <h4 className="font-bold text-primary mb-2">{label}</h4>
              {link ? (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-light hover:underline font-semibold"
                >
                  {value}
                </a>
              ) : (
                <p className="text-gray-600">{value}</p>
              )}
            </div>
          ))}
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
