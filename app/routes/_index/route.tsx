import { json, type LoaderFunction, type MetaFunction } from '@remix-run/node';
import { Badge, Card, Flex, Link, Text } from '@radix-ui/themes';
import { useLoaderData } from '@remix-run/react';
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
				className="w-full h-[105%] select-none relative top-0 left-0 bg-cover bg-center bg-no-repeat pt-2 sm:pt-14 md:pt-12 lg:pt-20 xl:pt-24"
				style={{ backgroundImage: `url(${background})` }}
			>
				<article className="mt-20 flex w-full flex-col md:flex-row gap-x-6 items-center overflow-hidden px-2 sm:mt-[2.1rem] sm:px-6 bounds:mt-[4.1rem] boundsXS:mt-[10.7rem] boundsXS:px-6 min-[1921px]:px-24 min-[1920px]:mt-2">
					<div className="relative w-full hidden md:flex">
						<Text
							className="absolute bottom-2 -top-10 lg:-top-16 leading-none text-transparent text-5xl md:text-4xl lg:text-6xl bounds:text-8xl bounds:-top-20 font-archivo-expanded font-bold z-10"
							style={{
								WebkitTextStroke: '1px rgba(236,237,240,.08)',
							}}
						>
							ROLE PLAY COMMUNITY
						</Text>
						<div className="absolute -bottom-18 lg:-bottom-16 bounds:-bottom-20 right-0 flex gap-x-2 items-center">
							<Text
								weight="bold"
								className="text-md hidden lg:block font-archivo-expanded bounds:text-2xl"
							>
								{appName}
							</Text>
							<Text className="text-xl font-archivo-expanded md:text-2xl hidden lg:block">
								\\
							</Text>
							<Text className="font-archivo-expanded font-4xl" weight="light">
								Una nueva experiencia de rol
							</Text>
						</div>
					</div>
					<Flex className="w-full md:relative md:border-l md:border-solid md:border-grayOpacity h-full">
						<Flex className="w-full h-full boundsXS:border-b boundsXS:border-solid boundsXS:border-grayOpacity">
							<div className="flex h-full w-[34%] border border-l-0 border-t-0 border-solid border-grayOpacity pb-2 pr-2 sm:w-[50%] md:pl-2 md:pt-2 bounds:p-4 boundsXS:w-[30%] boundsXS:border-b-0">
								<Card className="group relative flex h-28 w-full p-3 text-left text-base font-medium uppercase leading-none duration-300 ease-out hover:text-[0.875rem] md:h-[6.5rem] bounds:h-[11.5rem] bounds:p-5 bounds:text-[1.25rem] bounds:hover:text-[1.25rem] bounds:leading-none">
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
							</div>
							<div className="flex flex-col items-start pl-[1.188rem] pt-[.75rem] md:pl-[2.75rem] md:pt-[0.625rem] lg:pl-[1.688rem] bounds:pt-[1.438rem] boundsXS:ml-[12.3rem] boundsXS:border-l boundsXS:border-solid boundsXS:border-grayOpacity">
								<div className="flex flex-col items-start gap-[1.125rem] md:gap-3 lg:gap-4 bounds:gap-[1.75rem]">
									<Text
										as="p"
										className="text-[0.822rem] font-light leading-[83.6%] lg:text-[1.313rem] font-archivo"
									>
										Jugadores conectados
									</Text>
									<Text
										as="p"
										className="text-[2.935rem] font-black leading-[83.6%] lg:text-[4.188rem] boundsXS:text-[4.688rem]"
									>
										0
									</Text>
									<Badge
										color="red"
										className="font-archivo-expanded animate-pulse"
									>
										Aún seguimos en desarrollo
									</Badge>
								</div>
							</div>
						</Flex>
					</Flex>

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
