import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { buttonVariants } from './ui/button';
import { HeroCards } from './HeroCards';
import { FaTelegram } from 'react-icons/fa';
import BinsPeruLogo from '/src/assets/logo.jpg';

export const Hero = () => {
	const [memberCount, setMemberCount] = useState(0);

	useEffect(() => {
		const target = 13000;
		const duration = 1500; // ms
		const start = performance.now();

		const step = (now: number) => {
			const progress = Math.min((now - start) / duration, 1);
			const value = Math.floor(progress * target);
			setMemberCount(value);

			if (progress < 1) {
				requestAnimationFrame(step);
			}
		};

		requestAnimationFrame(step);
	}, []);

	return (
		<section className="container min-h-screen grid lg:grid-cols-2 place-items-center py-10 md:py-32 gap-10">
			<div className="text-center lg:text-start space-y-6 mt-5 md:mt-0">
				{/* Chip superior */}
				<div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs md:text-sm text-primary">
					<span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
					<span>Comunidad #1 de ventas en Telegram</span>
				</div>

				{/* Logo / imagen solo en móvil */}
				<div className="lg:hidden flex justify-center mt-4">
					<img
						src={BinsPeruLogo}
						alt="BINS PERÚ"
						className="w-36 h-36 rounded-full border-2 border-primary/30 shadow-lg shadow-primary/20"
					/>
				</div>

				{/* Título */}
				<h1 className="font-extrabold tracking-tight space-y-2">
					<span
						className="
							block
							text-5xl
							md:text-7xl
							lg:text-8xl
							uppercase
							metallic-text
							leading-tight
						"
					>
						BINS PERÚ
					</span>

					{/* Subtítulo SOLO en móvil */}
					<span className="block md:hidden text-muted-foreground text-sm">
						Ofertas reales • Compras seguras • Soporte ante estafas
					</span>
				</h1>

				{/* Descripción SOLO desde md en adelante */}
				<p className="hidden md:block text-base md:text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0">
					Encuentra productos exclusivos, precios bajos y vendedores verificados
					en el grupo de ventas más activo del Perú. Únete gratis y no te
					pierdas las mejores oportunidades.
				</p>

				{/* CTA principal */}
				<div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 max-w-md mx-auto lg:mx-0">
					<a
						rel="noreferrer noopener"
						href="https://t.me/binsperu"
						target="_blank"
						className={
							buttonVariants({
								variant: 'default',
								size: 'lg',
							}) +
							' w-full md:w-auto flex items-center justify-center gap-2 text-base md:text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow'
						}
					>
						Unirme al Grupo
						<FaTelegram className="w-5 h-5" />
					</a>

					<a href="#about">
						<Button
							variant="outline"
							size="lg"
							className="w-full md:w-auto border-primary/40 text-primary hover:bg-primary/10 hover:text-primary/90 transition-colors"
						>
							Conoce más sobre nosotros
						</Button>
					</a>
				</div>

				{/* Social proof + seguridad */}
				<div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-xs md:text-sm text-foreground/75 max-w-md mx-auto lg:mx-0">
					<div className="flex justify-between md:justify-start md:gap-6 w-full md:w-auto">
						<div className="flex flex-col items-start">
							<span className="text-sm md:text-base font-semibold text-primary">
								+{memberCount.toLocaleString('es-PE')}
							</span>
							<span>Miembros activos</span>
						</div>
						<div className="flex flex-col items-start">
							<span className="text-sm md:text-base font-semibold text-primary">
								24/7
							</span>
							<span>Ofertas constantes</span>
						</div>
					</div>
					{/* <div className="flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/5 px-3 py-2">
						<span className="inline-block h-2 w-2 rounded-full bg-primary" />
						<p className="leading-snug">
							Vendedores certificados y soporte contra estafadores.
						</p>
					</div> */}
				</div>
			</div>

			{/* Hero cards sections */}
			<div className="z-10">
				<HeroCards />
			</div>

			{/* Shadow effect (tu estilo original) */}
			<div className="shadow"></div>
		</section>
	);
};
