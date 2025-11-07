import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

interface TestimonialProps {
	image: string;
	name: string;
	userName: string;
	comment: string;
}

const testimonials: TestimonialProps[] = [
	{
		image: 'https://github.com/shadcn.png',
		name: 'Usuario 1',
		userName: '@Usuario1',
		comment: 'Lorem ipsum dolor sit amet,empor incididunt',
	},
	{
		image: 'https://github.com/shadcn.png',
		name: 'Usuario 2',
		userName: '@Usuario2',
		comment:
			'Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
	},

	{
		image: 'https://github.com/shadcn.png',
		name: 'Usuario 3',
		userName: '@Usuario3',
		comment:
			'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
	},
	{
		image: 'https://github.com/shadcn.png',
		name: 'Usuario 4',
		userName: '@Usuario4',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	},
	{
		image: 'https://github.com/shadcn.png',
		name: 'Usuario 5',
		userName: '@Usuario5',
		comment:
			'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.',
	},
	{
		image: 'https://github.com/shadcn.png',
		name: 'Usuario 6',
		userName: '@Usuario6',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];

export const Testimonials = () => {
	return (
		<section id="testimonials" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold">
				Descubre Por Qué{' '}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					{' '}
					Las Personas Aman{' '}
				</span>
				a BINS PERÚ
			</h2>

			<p className="text-xl text-muted-foreground pt-4 pb-8">
				Lee las opiniones de nuestros clientes satisfechos y descubre cómo hemos
				transformados sus vidas.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
				{testimonials.map(
					({ image, name, userName, comment }: TestimonialProps) => (
						<Card
							key={userName}
							className="max-w-md md:break-inside-avoid overflow-hidden"
						>
							<CardHeader className="flex flex-row items-center gap-4 pb-2">
								<Avatar>
									<AvatarImage alt="" src={image} />
									<AvatarFallback>OM</AvatarFallback>
								</Avatar>

								<div className="flex flex-col">
									<CardTitle className="text-lg">{name}</CardTitle>
									<CardDescription>{userName}</CardDescription>
								</div>
							</CardHeader>

							<CardContent>{comment}</CardContent>
						</Card>
					)
				)}
			</div>
		</section>
	);
};
