import {
	json,
	LoaderFunctionArgs,
	type LoaderFunction,
	type MetaFunction,
} from '@remix-run/node';
import { Badge, Flex, Link, Text } from '@radix-ui/themes';
import { useLoaderData } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { Button } from '@radix-ui/themes';
import { ArrowUpIcon } from '@radix-ui/react-icons';

import background from '/background.png?url';
import nextBackground from '/statistics-bg.png?url';
import imageBottom from '/bottom-effect.png?url';
import imageTop from '/top-effect.png?url';
import gtaVLogo from '/gta-logo.png?url';
import rageMpLogo from '/rage-logo.png?url';
import Newsletter from './components/newsletter';
import StatItem from './components/statItem';
import StepCard from './components/HowToPlayStep';
import NewAccount from './components/NewAccount';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
	request,
}: LoaderFunctionArgs) => {
	const { profile, storedInDatabase, backendIdentity } =
		await authenticator.isAuthenticated(request, {
			failureRedirect: '/sign-in',
		});

	return json({
		appName: process.env.APP_NAME,
		appSlogan: process.env.APP_SLOGAN,
		appUrl: process.env.APP_URL,
		profile: profile ?? null,
		storedInDatabase: storedInDatabase ?? false,
		backendIdentity,
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
	const { appName, profile } = useLoaderData<typeof loader>();
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
				className="w-full h-[130%] xxs:h-[100%] sm:h-[105%] md:h-[95%] boundsXS:h-[95%] select-none relative top-0 left-0 bg-cover bg-center bg-no-repeat pt-2 sm:pt-14 md:pt-12 lg:pt-20 xl:pt-24"
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
					<Flex
						className="w-full md:relative md:border-l md:border-solid md:border-grayOpacity h-full"
						direction="column"
					>
						<Flex className="w-full h-full boundsXS:border-b boundsXS:border-solid boundsXS:border-grayOpacity">
							<div className="flex h-full w-[34%] border border-l-0 border-t-0 border-solid border-grayOpacity pb-2 pr-2 sm:w-[50%] md:pl-2 md:pt-2 bounds:p-4 boundsXS:w-[30%] boundsXS:border-b-0">
								<Link href="register">
									<div className="bg-[#21222c] group relative flex h-28 w-full p-3 text-left text-base font-medium uppercase leading-none duration-300 ease-out hover:bg-[var(--indigo-6)] hover:text-[0.875rem] md:h-[6.5rem] bounds:h-[11.5rem] bounds:p-5 bounds:text-[1.25rem] bounds:hover:text-[1.25rem] bounds:leading-none">
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
									</div>
								</Link>
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
										Todavía en desarrollo
									</Badge>
								</div>
							</div>
						</Flex>
						<Link href="#how-to-play" className="w-full h-full">
							<Flex className="-mt-px flex w-full justify-end h-full boundsXS:pl-0">
								<div className="boundsXS:w-[30%] boundsXS:mr-[12.3rem] shrink-0"></div>
								<div className="flex w-[calc(66%+1px)] border border-b-0 border-r-0 border-solid border-grayOpacity pl-2 pt-2 md:border-b md:border-r md:pb-2 md:pr-2 sm:w-[calc(50%+1px)] boundsXS:w-1/2 bounds:p-4">
									<span className="bg-[#21222c] group relative flex h-[7rem] w-full flex-row items-start justify-start p-4 text-base font-medium uppercase leading-none duration-300 ease-out hover:bg-[var(--indigo-6)] hover:text-[0.875rem] md:h-[5.940rem] md:p-3 bounds:h-[6rem] bounds:p-5 bounds:text-[1.5rem] bounds:hover:text-[1.25rem] boundsXS:h-[9rem]">
										<Text className="font-archivo">Empezar</Text>
										<svg className="icon absolute bottom-3 right-2 size-[3.75rem] origin-bottom-right duration-300 ease-out group-hover:scale-[140%] md:size-[3.25rem] boundsXS:size-[5rem]">
											<use xlinkHref="/sprites.svg#launcher-download-arrow" />
										</svg>
									</span>
								</div>
							</Flex>
						</Link>
					</Flex>
				</article>
				<article className="w-full flex justify-center pt-8 sm:pt-14 md:pt-12 lg:pt-20 bounds:pt-8 xl:pt-12 mx-auto px-2 sm:px-6 boundsXS:px-6 min-[1921px]:px-24 bounds:pt-20">
					<Flex direction="column">
						<Text
							className="text-center font-thin"
							size={{
								initial: '7',
								sm: '8',
								md: '9',
							}}
						>
							ESTADÍSTICAS
						</Text>
						<div className="font-archivo text-center font-thin mt-6 bounds:mt-20 gap-12 grid grid-cols-1 lg:grid-cols-3">
							<StatItem title="usuarios" value={0} />
							<StatItem title="personajes" value={0} />
							<StatItem title="jugando" value={0} />
						</div>
					</Flex>
				</article>
				<img className="absolute bottom-0 w-full" src={imageBottom} />
			</section>
			<section
				className="w-full h-auto sm:h-[100%] select-none relative top-0 left-0 bg-cover bg-center bg-no-repeat pt-2 sm:pt-14 md:pt-12 lg:pt-20 xl:pt-24"
				style={{ backgroundImage: `url(${nextBackground})` }}
			>
				<img className="absolute top-0 w-full z-10" src={imageTop} />
				<img className="absolute bottom-0 w-full z-10" src={imageBottom} />
				<div className="absolute -top-40 md:-top-10 w-full z-20 flex justify-center items-center px-4 sm:px-0">
					<Newsletter />
				</div>
				<article
					className="max-w-screen-xl flex flex-col xl:flex-row justify-evenly items-center px-8 mx-auto pt-20 md:pt-0"
					id="how-to-play"
				>
					<Flex direction="column" gap="4">
						<Text
							className="text-2xl md:text-4xl font-archivo-expanded text-center"
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
						<Flex
							className="mt-12 flex mx-auto"
							gap="2"
							direction={{
								initial: 'column',
								sm: 'row',
							}}
						>
							<StepCard
								title="PASO 1"
								imageSrc={gtaVLogo}
								footer={
									<>
										<Flex direction="column">
											<Text size="5" weight="bold">
												Necesitarás una copia con licencia de Grand Theft Auto V
											</Text>
											<Text size="2">
												Puedes comprarlo en <Link href="#">Steam</Link>,{' '}
												<Link href="#">Rockstar Games Launcher</Link> o{' '}
												<Link href="#">Epic Games Store</Link>
											</Text>
										</Flex>
									</>
								}
							/>
							<StepCard
								title="PASO 2"
								imageSrc={rageMpLogo}
								footer={
									<>
										<Flex direction="column">
											<Text size="5" weight="bold">
												Instala RAGE Multiplayer
											</Text>
											<Text size="2">
												Visita la página oficial de{' '}
												<Link href="#">RAGE Multiplayer</Link> para descargar el
												cliente
											</Text>
											<Button className="mt-4" variant="solid">
												Descargar
											</Button>
										</Flex>
									</>
								}
							/>
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

			{profile && <NewAccount />}
		</>
	);
}
