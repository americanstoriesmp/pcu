import { json, type LoaderFunction, type MetaFunction } from '@remix-run/node';
import { Box, Card, Flex, Grid, Link, Text } from '@radix-ui/themes';
import { useLoaderData } from '@remix-run/react';
import MenuItem from '~/components/shared/MenuItem';
import { useState, useEffect } from 'react';
import { Button } from '@radix-ui/themes';
import { ArrowUpIcon } from '@radix-ui/react-icons';

import background from '/background.png?url';
import nextBackground from '/statistics-bg.png?url';
import imageBottom from '/bottom-effect.png?url';
import imageTop from '/top-effect.png?url';
import gtaVLogo from '/gta-logo.png?url';
import Newsletter from './components/newsletter';

export const loader: LoaderFunction = async () => {
	return json({
		appName: process.env.APP_NAME,
		appSlogan: process.env.APP_SLOGAN,
		appUrl: process.env.APP_URL,
	});
};
export const meta: MetaFunction = () => {
	const { appName, appSlogan, appUrl } = useLoaderData<typeof loader>();
	return [
		{ title: appName },
		{
			name: 'description',
			content: `Bienvenido a la comunidad de rol en español de ${appName}.`,
		},
		{
			property: 'og:title',
			content: `${appName} - ${appSlogan}`,
		},
		{
			property: 'og:description',
			content: `Explora ${appName}, la comunidad líder de roleplay en español para GTA V. Vive aventuras únicas, crea tu historia y forma parte de nuestra vibrante comunidad.`,
		},
		{
			property: 'og:image',
			content: `${appName}`,
		},
		{
			name: 'robots',
			content: 'index, follow',
		},
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:url',
			content: `${appUrl || 'https://americanstories.mp'}`,
		},
	];
};

export default function Index() {
	const { appName } = useLoaderData<typeof loader>();
	const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollableDiv = document.querySelector('.scrollbar-themed');
			if (scrollableDiv) {
				setShowScrollButton(scrollableDiv.scrollTop > 300);
			}
		};

		const scrollableDiv = document.querySelector('.scrollbar-themed');
		if (scrollableDiv) {
			scrollableDiv.addEventListener('scroll', handleScroll);
			return () => scrollableDiv.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const scrollToTop = () => {
		const scrollableDiv = document.querySelector('.scrollbar-themed');
		if (scrollableDiv) {
			scrollableDiv.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return (
		<>
			<section
				className={`relative  w-full h-[105%] select-none`}
				style={{ backgroundImage: `url(${background})` }}
			>
				<header className="sticky top-0 z-50 shadow-lg bg-[#21222c] bg-opacity-20">
					<nav className="max-w-screen-xl flex flex-row mx-auto justify-between items-center px-8">
						<Text className="text-2xl font-bold font-archivo-expanded">
							{appName.toUpperCase()}
						</Text>
						<Flex>
							<MenuItem text="COMUNIDAD" href="/forum" />
							<MenuItem text="UCP" href="/dashboard" />
							<MenuItem text="CHANGELOG" href="/releases" />
						</Flex>
					</nav>
				</header>
				<article className="w-full h-screen flex flex-col">
					<Flex
						className="p-6"
						gap="6"
						direction={{
							initial: 'column',
							sm: 'row',
						}}
					>
						<div className="relative w-full flex">
							<Text
								className="leading-none text-transparent text-5xl md:text-4xl lg:text-8xl font-archivo-expanded font-bold z-10"
								style={{
									WebkitTextStroke: '1px rgba(236,237,240,.08)',
								}}
							>
								ROLE PLAY IN A NUTSHELL
							</Text>
							<div className="absolute -bottom-2 md:bottom-0 right-0 flex gap-x-2 items-center">
								<Text
									weight="bold"
									className="text-xl font-archivo-expanded lg:text-2xl"
								>
									{appName}
								</Text>
								<Text className="text-xl font-archivo-expanded md:text-2xl hidden md:block">
									\\
								</Text>
								<Text className="font-archivo-expanded font-4xl" weight="light">
									Una nueva experiencia de rol
								</Text>
							</div>
						</div>
						<Box className="w-full h-full">
							<Grid
								columns={{
									initial: '1',
									sm: '2',
									md: '3',
									lg: '4',
								}}
								className="h-full"
							>
								<Box className="col-span-1 sm:col-span-2 lg:col-span-1 p-3 border border-indigo-200/15">
									<Card className="flex h-full group transition-colors duration-300 relative overflow-hidden hover:bg-[var(--indigo-6)]">
										<div className="w-full h-full transition-colors duration-300">
											<span className="text-white font-archivo font-medium transition-all duration-300 group-hover:text-xs md:text-lg bounds:text-[1.45rem] bounds:group-hover:text-[1.25rem] bounds:leading-none">
												Registra tu cuenta
											</span>
											<svg
												className="absolute bottom-2 right-2 w-6 h-6 transition-all duration-300 group-hover:scale-150 group-hover:text-white bounds:w-12 bounds:h-12"
												style={{
													transformOrigin: 'bottom right',
												}}
											>
												<use xlinkHref="/sprites.svg#corner-arrow" />
											</svg>
										</div>
									</Card>
								</Box>
								<Box className="col-span-1 sm:col-span-2 md:col-span-1 p-3 border border-indigo-200/15"></Box>
								<Box className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 p-3 border border-indigo-200/15">
									<Box className="flex h-full overflow-hidden">
										<Text size="9" className="font-archivo-expanded">
											En línea
										</Text>
									</Box>
								</Box>
							</Grid>
						</Box>
					</Flex>
					{/* <Flex className="w-full px-8">
						<ComposedGrids />
						<Card className="w-full">Hello</Card>
					</Flex> */}
					<img className="absolute bottom-0 w-full" src={imageBottom} />
				</article>
			</section>
			<section
				className="relative"
				style={{ backgroundImage: `url(${nextBackground})` }}
			>
				<img className="absolute top-0 w-full z-10" src={imageTop} />
				<img className="absolute bottom-0 w-full z-10" src={imageBottom} />
				<div className="absolute -top-40 md:-top-10 w-full z-20 flex justify-center items-center px-4 sm:px-0">
					<Newsletter />
				</div>
				<article className="max-w-screen-xl h-screen flex flex-col xl:flex-row justify-evenly items-center px-8 mx-auto">
					<Flex direction="column" gap="4">
						<Text
							className="text-4xl font-archivo-expanded text-center"
							color="gray"
						>
							¿CÓMO JUGAR?
						</Text>
						<Text className="text-center" size="2" weight="medium" color="gray">
							Para poder jugar en American Stories, primero debes tener una{' '}
							<strong>copia original de Grand Theft Auto V</strong> y
							adicionalmente, tener instalado <strong>RAGE Multiplayer</strong>{' '}
							en tu computadora. Si cuentas con ambos, puedes proceder a
							registrarte en nuestro servidor.
						</Text>
						<Flex className="mt-12">
							<Card className="w-full xl:w-96 h-96 border-2 border-[#21222c] rounded-xl flex flex-col justify-between p-5 how-to-play-step-1-bg hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
								<Flex direction="column" gap="4">
									<Flex justify="between" align="start">
										<Text size="2" weight="bold" color="gray">
											PASO 1
										</Text>
										<img src={gtaVLogo} className="w-14" />
									</Flex>
									<Text size="5" weight="bold">
										Necesitarás una copia con licencia de Grand Theft Auto V
									</Text>
									<Text size="2">
										Puedes comprarlo en <Link href="#">Steam</Link>,{' '}
										<Link href="#">Rockstar Games Launcher</Link> o{' '}
										<Link href="#">Epic Games Store</Link>
									</Text>
								</Flex>
							</Card>
						</Flex>
					</Flex>
				</article>
			</section>

			{showScrollButton && (
				<Button
					onClick={scrollToTop}
					className="fixed bottom-4 right-4 z-50 rounded-full p-2 flex items-center gap-x-2"
					variant="solid"
				>
					<ArrowUpIcon width="20" height="20" />
					<Text size="3">Ir arriba</Text>
				</Button>
			)}
		</>
	);
}
