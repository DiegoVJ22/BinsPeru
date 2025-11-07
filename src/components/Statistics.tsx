export const Statistics = () => {
	interface statsProps {
		quantity: string;
		description: string;
	}

	const stats: statsProps[] = [
		{
			quantity: '13K+',
			description: 'Usuarios',
		},
		{
			quantity: '20+',
			description: 'Vendedores',
		},
		{
			quantity: '3',
			description: 'Grupos',
		},
	];

	return (
		<section id="statistics">
			<div className="grid grid-cols-3 gap-8">
				{stats.map(({ quantity, description }: statsProps) => (
					<div key={description} className="space-y-2 text-center">
						<h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
						<p className="text-xl text-muted-foreground">{description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
