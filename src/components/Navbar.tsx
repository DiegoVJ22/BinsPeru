import { useState } from 'react';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

// import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { BinsPeruIcon } from './Icons';
import { FaFacebook, FaTelegram, FaTiktok } from 'react-icons/fa';

interface RouteProps {
	href: string;
	label: string;
	target?: string; // Added target property
}

const routeList: RouteProps[] = [
	{
		href: '#about',
		label: 'Nosotros',
	},
	{
		href: '#testimonials',
		label: 'Testimonios',
	},
	{
		href: 'https://quemandoestafadoresperu.com/',
		target: '_blank',
		label: 'Estafadores',
	},
	{
		href: '#faq',
		label: 'FAQ',
	},
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
			<NavigationMenu className="mx-auto">
				<NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
					<NavigationMenuItem className="font-bold flex">
						<a
							rel="noreferrer noopener"
							href="/"
							className="ml-2 font-bold text-2xl flex justify-content-center items-center md:text-3xl navbar-logo"
						>
							<BinsPeruIcon />
							<span className="metallic-text">BINS PERÚ</span>
						</a>
					</NavigationMenuItem>

					{/* mobile */}
					<span className="flex md:hidden">
						<ModeToggle />

						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger className="px-2">
								<Menu
									className="flex md:hidden h-5 w-5"
									onClick={() => setIsOpen(true)}
								>
									<span className="sr-only">Menu Icon</span>
								</Menu>
							</SheetTrigger>

							<SheetContent side={'left'}>
								<SheetHeader>
									<SheetTitle className="font-bold text-xl">Menú</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col justify-center items-center gap-2 mt-4">
									{routeList.map(({ href, label }: RouteProps) => (
										<a
											rel="noreferrer noopener"
											key={label}
											href={href}
											onClick={() => setIsOpen(false)}
											className={buttonVariants({ variant: 'ghost' })}
										>
											{label}
										</a>
									))}
									<div className="gap-2 flex">
										<a
											rel="noreferrer noopener"
											href="https://telegram.org"
											target="_blank"
											className={`border ${buttonVariants({
												variant: 'secondary',
											})}`}
										>
											<FaTelegram className="w-5 h-5" />{' '}
										</a>

										<a
											rel="noreferrer noopener"
											href="https://facebook.com"
											target="_blank"
											className={`border ${buttonVariants({
												variant: 'secondary',
											})}`}
										>
											<FaFacebook className="w-5 h-5" />{' '}
										</a>

										<a
											rel="noreferrer noopener"
											href="https://tiktok.com"
											target="_blank"
											className={`border ${buttonVariants({
												variant: 'secondary',
											})}`}
										>
											<FaTiktok className="w-5 h-5" />{' '}
										</a>
									</div>
								</nav>
							</SheetContent>
						</Sheet>
					</span>

					{/* desktop */}
					<nav className="hidden md:flex gap-2">
						{routeList.map((route: RouteProps, i) => (
							<a
								rel="noreferrer noopener"
								href={route.href}
								target={route.target}
								key={i}
								className={`text-[17px] ${buttonVariants({
									variant: 'ghost',
								})}`}
							>
								{route.label}
							</a>
						))}
					</nav>

					<div className="hidden md:flex gap-2">
						<a
							rel="noreferrer noopener"
							href="https://t.me/binsperu"
							target="_blank"
							className={`border ${buttonVariants({ variant: 'secondary' })}`}
						>
							<FaTelegram className="w-5 h-5" />{' '}
						</a>

						<a
							rel="noreferrer noopener"
							href="https://www.facebook.com/profile.php?id=61570033945970"
							target="_blank"
							className={`border ${buttonVariants({ variant: 'secondary' })}`}
						>
							<FaFacebook className="w-5 h-5" />{' '}
						</a>

						<a
							rel="noreferrer noopener"
							href="https://www.tiktok.com/@binsperu.pe?lang=es"
							target="_blank"
							className={`border ${buttonVariants({ variant: 'secondary' })}`}
						>
							<FaTiktok className="w-5 h-5" />{' '}
						</a>

						<ModeToggle />
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};
