import { buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { FaTelegram } from 'react-icons/fa';
import AdamPerfil from '/src/assets/adam.jpg';
import CaputinPerfil from '/src/assets/caputin.avif';
import ElmerPerfil from '/src/assets/elmer.avif';
import ThorPerfil from '/src/assets/thor.avif';

interface TeamProps {
	imageUrl: string;
	name: string;
	position: string;
	description: string;
	socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
	url: string;
}

const teamList: TeamProps[] = [
	{
		imageUrl: AdamPerfil,
		name: 'ADAM',
		position: '@owneradam',
		description: 'FUNDADOR',
		socialNetworks: [
			{
				url: 'https://t.me/owneradan',
			},
		],
	},
	{
		imageUrl: CaputinPerfil,
		name: 'Caputin',
		position: '@fuxkcaputin',
		description: 'CO-FUNDADOR',
		socialNetworks: [
			{
				url: 'https://t.me/binsperu/10014/953781',
			},
		],
	},
	{
		imageUrl: ElmerPerfil,
		name: 'Elmer Galarga',
		position: '@Elmergalarga1',
		description: 'CO-FUNDADOR',
		socialNetworks: [
			{
				url: 'https://t.me/binsperu/10014/953781',
			},
		],
	},
	{
		imageUrl: ThorPerfil,
		name: 'Thor',
		position: '@KingThorV',
		description: 'CO-FUNDADOR',
		socialNetworks: [
			{
				url: 'https://t.me/KingThorV',
			},
		],
	},
];

export const Team = () => {
	return (
		<section id="team" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold">
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Nuestros{' '}
				</span>
				Fundadores
			</h2>

			<p className="mt-4 mb-16 text-xl text-muted-foreground">
				Conoce al equipo dedicado que impulsa nuestra misión y visión.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
				{teamList.map(
					({
						imageUrl,
						name,
						position,
						description,
						socialNetworks,
					}: TeamProps) => (
						<Card
							key={name}
							className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
						>
							<CardHeader className="mt-8 flex justify-center items-center pb-2">
								<img
									src={imageUrl}
									alt={`${name} ${position}`}
									className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
								/>
								<CardTitle className="text-center">{name}</CardTitle>
								<CardDescription className="text-primary">
									{position}
								</CardDescription>
							</CardHeader>

							<CardContent className="text-center pb-2">
								{description}
							</CardContent>

							<CardFooter>
								{socialNetworks.map(({ url }: SociaNetworkslProps) => (
									<div key={name}>
										<a
											rel="noreferrer noopener"
											href={url}
											target="_blank"
											className={buttonVariants({
												variant: 'ghost',
												size: 'sm',
											})}
										>
											<FaTelegram className="h-6 w-6" />
										</a>
									</div>
								))}
							</CardFooter>
						</Card>
					)
				)}
			</div>
		</section>
	);
};
