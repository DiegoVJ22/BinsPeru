import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
	question: string;
	answer: string;
	value: string;
}

const FAQList: FAQProps[] = [
	{
		question: '¿Unirme a BINS PERÚ tiene algún costo?',
		answer:
			'No. El acceso al grupo es 100% gratuito. Puedes ver ofertas, reseñas y recomendaciones sin pagar nada.',
		value: 'item-1',
	},
	{
		question: '¿Cómo funcionan las ventas dentro del grupo?',
		answer:
			'Los compradores preguntan por el producto que buscan  y los vendedores responden con sus opciones. La comunidad y el equipo recomiendan con quién comprar según reputación, referencias y experiencias reales para ayudarte a elegir la mejor opción.',
		value: 'item-2',
	},
	{
		question: '¿Cómo sé que los vendedores son confiables?',
		answer:
			'Contamos con un sistema de verificación interna, feedback de la comunidad y supervisión constante. Destacamos a los vendedores con buen historial y tomamos acción ante reportes o conductas sospechosas.',
		value: 'item-3',
	},
	{
		question:
			'¿Qué pasa si sospecho de una estafa o tuve un problema con una compra?',
		answer:
			'Puedes reportarlo de inmediato en el grupo con nuestro Sabuesos. Revisamos el caso, bloqueamos a estafadores y orientamos a la víctima con la información disponible para que no vuelva a ocurrir.',
		value: 'item-4',
	},
	{
		question: '¿Puedo vender en BINS PERÚ?',
		answer:
			'Sí, pero seguimos reglas claras. Debes cumplir nuestras políticas, brindar datos reales, respetar a los compradores y mantener una buena reputación. Según tu desempeño, puedes acceder a mayor visibilidad dentro de la comunidad.',
		value: 'item-5',
	},
];

export const FAQ = () => {
	return (
		<section id="faq" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold mb-4">
				Preguntas{' '}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Frecuentes
				</span>
			</h2>

			<Accordion type="single" collapsible className="w-full AccordionRoot">
				{FAQList.map(({ question, answer, value }: FAQProps) => (
					<AccordionItem key={value} value={value}>
						<AccordionTrigger className="text-left">
							{question}
						</AccordionTrigger>

						<AccordionContent>{answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<h3 className="font-medium mt-4">
				¿Estás Listo?{' '}
				<a
					rel="noreferrer noopener"
					target="_blank"
					href="https://t.me/binsperu"
					className="text-primary transition-all border-primary hover:border-b-2"
				>
					Unirme
				</a>
			</h3>
		</section>
	);
};
