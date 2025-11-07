import { FaTelegram } from 'react-icons/fa';
import { Button, buttonVariants } from './ui/button';

export const Cta = () => {
	return (
		<section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
			<div className="container lg:grid lg:grid-cols-2 place-items-center">
				<div className="lg:col-start-1">
					<h2 className="text-3xl md:text-4xl font-bold ">
						Conviértete en parte de
						<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
							{' '}
							BINS PERÚ{' '}
						</span>
						ahora mismo
					</h2>
					<p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
						Más de 13,000 miembros ya compran seguro y con mejores precios. ¿Vas
						a seguir perdiendo el tiempo?
					</p>
				</div>

				<div className="space-y-4 lg:col-start-2">
					<a
						rel="noreferrer noopener"
						href="https://t.me/binsperu"
						target="_blank"
						className={
							buttonVariants({
								variant: 'default',
							}) + ' w-full md:mr-4 md:w-auto gap-2 mb-2 lg:mb-0'
						}
					>
						Unirme al grupo
						<FaTelegram className="w-5 h-5" />
					</a>
					<a href="#about">
						<Button variant="outline" className="w-full md:w-auto">
							Conoce más sobre nosotros
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
};
