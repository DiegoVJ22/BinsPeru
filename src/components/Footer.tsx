import { BinsPeruIcon } from './Icons';

export const Footer = () => {
	return (
		<footer id="footer">
			<hr className="w-11/12 mx-auto" />

			<section className="container py-20 grid grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-8">
				<div className="col-span-full xl:col-span-2">
					<a
						rel="noreferrer noopener"
						href="/"
						className="font-bold text-xl flex"
					>
						<BinsPeruIcon />
						BINS PERÚ
					</a>
				</div>

				{/* <div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Follow US</h3>
					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							className="opacity-60 hover:opacity-100"
						>
							Github
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							className="opacity-60 hover:opacity-100"
						>
							Twitter
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							className="opacity-60 hover:opacity-100"
						>
							Dribbble
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Platforms</h3>
					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							className="opacity-60 hover:opacity-100"
						>
							Web
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							className="opacity-60 hover:opacity-100"
						>
							Mobile
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="#"
							className="opacity-60 hover:opacity-100"
						>
							Desktop
						</a>
					</div>
				</div> */}

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Información</h3>
					<div>
						<a
							rel="noreferrer noopener"
							href="#about"
							className="opacity-60 hover:opacity-100"
						>
							Nosotros
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="#testimonials"
							className="opacity-60 hover:opacity-100"
						>
							Testimonios
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="#faq"
							className="opacity-60 hover:opacity-100"
						>
							FAQ
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Comunidad</h3>
					<div>
						<a
							rel="noreferrer noopener"
							href="https://t.me/binsperu"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Telegram
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="https://www.facebook.com/profile.php?id=61570033945970"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Facebook
						</a>
					</div>

					<div>
						<a
							rel="noreferrer noopener"
							href="https://www.tiktok.com/@binsperu.pe?lang=es"
							target="_blank"
							className="opacity-60 hover:opacity-100"
						>
							Tiktok
						</a>
					</div>
				</div>
			</section>

			<section className="container pb-14 text-center">
				<h3>
					&copy; 2025 Landing page made by{' '}
					<a
						rel="noreferrer noopener"
						target="_blank"
						href="https://t.me/XeX_Morgan"
						className="text-primary transition-all border-primary hover:border-b-2"
					>
						@XeX_Morgan
					</a>
				</h3>
			</section>
		</footer>
	);
};
