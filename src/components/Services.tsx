import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
// import cubeLeg from '../assets/cube-leg.png';
import { FaUsers } from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';

interface ServiceProps {
	title: string;
	description: string;
	icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
	{
		title: 'Acceso a Ofertas Exclusivas',
		description:
			'Descubre productos únicos, liquidaciones y promociones antes que el resto, seleccionadas diariamente por la comunidad de BINS PERÚ.',
		icon: <MdDiscount className="text-primary w-8 h-8" />,
	},
	{
		title: 'Compras Seguras',
		description:
			'Conecta solo con vendedores certificados, referencias reales y soporte ante posibles estafas para que compres con total confianza.',
		icon: <AiFillSafetyCertificate className="text-primary w-8 h-8" />,
	},
	{
		title: 'Acompañamiento y Comunidad Activa',
		description:
			'Recibe recomendaciones, resolvemos dudas en tiempo real y te ayudamos a encontrar la mejor opción según tu necesidad y presupuesto.',
		icon: <FaUsers className="text-primary w-8 h-8" />,
	},
];

export const Services = () => {
	return (
		<section className="container py-24 sm:py-32">
			<div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
				<div>
					<h2 className="text-3xl md:text-4xl font-bold">
						<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
							Conoce los{' '}
						</span>
						Beneficios
					</h2>

					<p className="text-muted-foreground text-xl mt-4 mb-8 ">
						Nuestros servicios están diseñados para ofrecer soluciones
					</p>

					<div className="flex flex-col gap-8">
						{serviceList.map(({ icon, title, description }: ServiceProps) => (
							<Card key={title}>
								<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
									<div className="mt-1 bg-primary/20 p-2 rounded-full">
										{icon}
									</div>
									<div>
										<CardTitle>{title}</CardTitle>
										<CardDescription className="text-md mt-2">
											{description}
										</CardDescription>
									</div>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>

				<img
					src="src/assets/beneficios.png"
					className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
					alt="About services"
				/>
			</div>
		</section>
	);
};
