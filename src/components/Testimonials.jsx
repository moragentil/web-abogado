import { Star } from 'lucide-react'
import fondoOpiniones from '../assets/fondo-opiniones2.webp'

const testimonials = [
	{
		name: 'Ariel',
		text: 'Excelente atención de Jorge, asistió a familiares míos en Tartagal por documentación necesaria para iniciar una sucesión. Muy eficiente y recomendable!',
	},
	{
		name: 'Mariano',
		text: 'Excelente servicio y atención! Súper diligentes! En mi experiencia personal muy rápidos en las gestiones y a un precio más que razonable, lo recomiendo!',
	},
	{
		name: 'Marta',
		text: 'En mi caso personal les recomiendo 100% el servicio de diligencias y trámites, muy confiables, expedición y muy accesible. Lo recomiendo!',
	},
	{
		name: 'Willy',
		text: 'Agradezco a esta oficina Consultora de Trámites por su responsabilidad y seriedad en los trámites de documentos municipales que encargué. Es una oficina para recomendar. ¡Gracias!',
	},
	{
		name: 'Javier',
		text: 'Espectacular la atención en un trámite que tenía estancado hace años, me lo hizo rapidísimo. Gracias por todo.',
	},
]

function Testimonials() {
	return (
		<section
			id="testimonios"
			className="py-16 relative overflow-hidden bg-cover bg-center bg-fixed scroll-m-10"
			style={{
				backgroundImage: `url(${fondoOpiniones})`,
			}}
		>
			{/* Capa de color encima */}
			<div className="absolute inset-0 bg-[#1a3a52]/85"></div>

			{/* Contenido que se mueve al scrollear */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-10">
					<h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
						Opiniones de Clientes
					</h2>
					<p className="text-base text-white/90">
						Lo que dicen quienes confiaron en nuestros servicios
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{testimonials.map(({ name, text }) => (
						<div
							key={name}
							className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col"
						>
							<div className="flex gap-1 mb-3">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
							<p className="text-gray-700 text-sm leading-relaxed mb-3 flex-grow">
								"{text}"
							</p>
							<p className="font-bold text-[#1a3a52] text-sm">
								— {name}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials