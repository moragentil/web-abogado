import { Mail, MapPin, Phone } from 'lucide-react'

const contacts = [
  { icon: Phone, label: 'Teléfono', value: '+54 11 1234-5678' },
  { icon: Mail, label: 'Email', value: 'contacto@estudio.com' },
  { icon: MapPin, label: 'Oficina', value: 'Av. Corrientes 1234, CABA' },
]

function Contact() {
  return (
    <section id="contacto" className="section muted">
      <div className="container contact">
        <div className="section-header">
          <h2>Agenda tu Consulta</h2>
          <p>Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo.</p>
        </div>

        <div className="card form-card">
          <form className="form-grid">
            <div className="field">
              <label htmlFor="nombre">Nombre Completo</label>
              <input id="nombre" type="text" placeholder="Juan Pérez" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="juan@ejemplo.com" />
            </div>
            <div className="field">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" type="tel" placeholder="+54 11 1234-5678" />
            </div>
            <div className="field">
              <label htmlFor="asunto">Área de Interés</label>
              <select id="asunto" defaultValue="Derecho Corporativo">
                <option>Derecho Corporativo</option>
                <option>Derecho Familiar</option>
                <option>Derecho Civil</option>
                <option>Derecho Laboral</option>
                <option>Derecho Penal</option>
                <option>Derecho Inmobiliario</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" rows="5" placeholder="Cuéntanos sobre tu caso o consulta..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary full">
              Enviar Consulta
            </button>
          </form>
        </div>

        <div className="cards-grid contact-grid">
          {contacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="card contact-card">
              <Icon className="icon large" />
              <h4>{label}</h4>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
