import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
// import { DiscountIcon, LightBulbIcon } from './Icons';
// import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { FaTelegram } from 'react-icons/fa';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { FaCrown } from 'react-icons/fa6';

export const DiscountPercentIcon = () => {
	return (
		<RiDiscountPercentFill
			className="
				w-8 h-8
				text-primary
			"
		/>
	);
};

export const HeroCards = () => {
	return (
		<div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
			{/* Testimonial */}
			<Card className="absolute w-[340px] bg-background/95 backdrop-blur-sm border border-primary/15 rounded-2xl drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="flex flex-row items-center gap-4 pb-2">
					<Avatar>
						<AvatarImage
							alt=""
							src="/src/assets/adam.jpg"
							className="border-2 border-primary/30 shadow-lg shadow-primary/20 rounded-full"
						/>
						<AvatarFallback>SH</AvatarFallback>
					</Avatar>

					<div className="flex flex-col">
						<CardTitle className="text-lg">ADAM</CardTitle>
						<a
							href="https://t.me/owneradan"
							target="_blank"
							rel="noreferrer noopener"
						>
							<CardDescription className="text-primary">
								@owneradan
							</CardDescription>
						</a>
					</div>
				</CardHeader>

				<CardContent className="flex justify-content-center items-center gap-2 ml-2 text-xs">
					<FaCrown className="text-primary" />
					Fundador de Bins Perú
				</CardContent>
			</Card>

			{/* Team */}
			<Card className="absolute right-[20px] top-8 w-80 flex flex-col justify-center items-center bg-background/95 backdrop-blur-sm border border-primary/15 rounded-2xl drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="mt-16 flex justify-center items-center pb-2">
					<img
						src="/src/assets/logo.jpg"
						alt="user avatar"
						className="absolute grayscale-[0%] -top-12 rounded-full w-32 h-32 aspect-square object-cover"
					/>
					<CardTitle className="text-center text-lg">BINS PERÚ</CardTitle>
					<CardDescription className="font-normal text-xs text-primary">
						Comunidad #1 de ventas
					</CardDescription>
				</CardHeader>

				<CardContent className="text-center text-xs pb-2">
					<p>
						Grupo oficial de Bins Perú en Telegram. ¡Únete ahora y encuentra
						productos exclusivos!
					</p>
				</CardContent>

				<CardFooter>
					<div>
						<a
							rel="noreferrer noopener"
							href="https://t.me/binsperu"
							target="_blank"
							className={buttonVariants({
								variant: 'ghost',
								size: 'sm',
							})}
						>
							<span className="sr-only">Telegram icon</span>
							<FaTelegram className="text-primary w-5 h-5" />
						</a>
					</div>
				</CardFooter>
			</Card>

			{/* Pricing */}
			<Card className="absolute top-[150px] left-[50px] w-72 bg-background/95 backdrop-blur-sm border border-primary/15 rounded-2xl drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader>
					<CardTitle className="text-lg flex item-center justify-between">
						Grandes Beneficios
						<Badge className="text-xs bg-primary/10 text-primary border border-primary/30 uppercase tracking-wide">
							Gratis
						</Badge>
					</CardTitle>

					<CardDescription className="text-xs">
						Sin costos ocultos ni suscripciones. Únete y comienza a comprar hoy.
					</CardDescription>
				</CardHeader>

				<CardContent>
					<a
						href="https://t.me/binsperu"
						target="_blank"
						rel="noreferrer noopener"
						className={
							buttonVariants({
								variant: 'default',
								size: 'sm',
							}) + ' w-full flex items-center justify-center gap-2 text-xs'
						}
					>
						Unirme al Grupo
						<FaTelegram className="w-4 h-4" />
					</a>
				</CardContent>

				<hr className="w-4/5 m-auto mb-4" />

				<CardFooter className="flex">
					<div className="space-y-2 text-xs">
						{[
							'Ofertas todos los días',
							'Vendedores certificados',
							'Acceso a productos exclusivos',
							'Comunidad activa y soporte ante estafas',
						].map((benefit) => (
							<span key={benefit} className="flex items-center">
								<Check className="w-3 h-3 text-primary" />
								<span className="ml-2 text-foreground/80">{benefit}</span>
							</span>
						))}
					</div>
				</CardFooter>
			</Card>

			{/* Service */}
			<Card className="absolute w-[350px] -right-[10px] bottom-[70px]  bg-background/95 backdrop-blur-sm border border-primary/15 rounded-2xl drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
					<div className="mt-1 bg-primary/20 p-1 rounded-2xl">
						<DiscountPercentIcon />
					</div>
					<div>
						<CardTitle className="text-lg">Ofertas Increibles</CardTitle>
						<CardDescription className="text-xs mt-2">
							Encuentra las mejores ofertas, actualizadas diariamente por
							nuestra comunidad.
						</CardDescription>
					</div>
				</CardHeader>
			</Card>
		</div>
	);
};
