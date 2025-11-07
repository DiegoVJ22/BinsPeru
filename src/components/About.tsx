import { Statistics } from './Statistics';
import AboutImage from '/src/assets/about.png';

export const About = () => {
	return (
		<section id="about" className="container py-24 sm:py-32">
			<div className="bg-muted/50 border rounded-lg py-12">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					<img
						src={AboutImage}
						alt=""
						className="w-[350px] object-contain rounded-full border-4 border-primary/20 mx-auto md:mx-0 "
					/>
					<div className="bg-green-0 flex flex-col justify-between">
						<div className="pb-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
									Sobre{' '}
								</span>
								Nosotros
							</h2>
							<p className="text-xl text-muted-foreground mt-4">
								Nacido en la pandemia como un grupo de Telegram, Bins Peru es
								hoy la comunidad más grande y exitosa del país, impulsada por un
								espíritu colaborativo. Nuestro objetivo es transformar el
								mercado, integrando soluciones que simplifican la vida de
								compradores y vendedores. Nos dedicamos a conectar compradores
								con las soluciones perfectas para sus necesidades y presupuesto,
								y a ayudar a los vendedores a maximizar el valor de sus
								servicios, basándonos en un profundo conocimiento de cada
								cliente.
							</p>
						</div>

						<Statistics />
					</div>
				</div>
			</div>
		</section>
	);
};
