import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'

const contacts = [
  { icon: Phone, label: 'Teléfono', value: '+54 221 123-4567' },
  { icon: Mail, label: 'Email', value: 'jorge@consultoratramites.com' },
  { icon: MapPin, label: 'Oficina', value: 'La Plata, Buenos Aires' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+54 9 221 123-4567', link: 'https://wa.me/5492211234567' },
]

function Contact() {
  return (
    <section id="contacto" className="section muted">
      <div className="container contact">
        <div className="section-header">
          <h2>Contacto</h2>
          <p>Estoy aquí para ayudarte. Completa el formulario o contáctame directamente por WhatsApp.</p>
        </div>

        <div className="card form-card">
          <form className="form-grid">
            <div className="field">
              <label htmlFor="nombre">Nombre Completo</label>
              <input id="nombre" type="text" placeholder="Tu nombre" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" type="tel" placeholder="+54 11 1234-5678" required />
            </div>
            <div className="field">
              <label htmlFor="tramite">Tipo de Trámite</label>
              <select id="tramite" defaultValue="">
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
            <div className="field full">
              <label htmlFor="mensaje">Consulta / Mensaje</label>
              <textarea id="mensaje" rows="5" placeholder="Cuéntame sobre tu trámite o consulta..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary full">
              Enviar Consulta
            </button>
          </form>
        </div>

        <div className="cards-grid contact-grid">
          {contacts.map(({ icon: Icon, label, value, link }) => (
            <div key={label} className="card contact-card">
              <Icon className="icon large" />
              <h4>{label}</h4>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="contact-link">
                  {value}
                </a>
              ) : (
                <p>{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="map-container">
          <h3>Ubicación de la Oficina</h3>
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52562.19281010535!2d-57.99570084863281!3d-34.92144999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
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
