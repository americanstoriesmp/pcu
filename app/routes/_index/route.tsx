import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import {
	Box,
	Button,
	Card,
	Flex,
	Link,
	Text,
	TextField,
} from "@radix-ui/themes";
import { useLoaderData } from "@remix-run/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import MenuItem from "~/components/shared/MenuItem";

import background from "/background.png?url";
import nextBackground from "/statistics-bg.png?url";
import imageBottom from "/bottom-effect.png?url";
import imageTop from "/top-effect.png?url";
import gtaVLogo from "/gta-logo.png?url";
import ComposedGrids from "./components/grids";

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
			name: "description",
			content: `Bienvenido a la comunidad de rol en español de ${appName}.`,
		},
		{
			property: "og:title",
			content: `${appName} - ${appSlogan}`,
		},
		{
			property: "og:description",
			content: `Explora ${appName}, la comunidad líder de roleplay en español para GTA V. Vive aventuras únicas, crea tu historia y forma parte de nuestra vibrante comunidad.`,
		},
		{
			property: "og:image",
			content: `${appName}`,
		},
		{
			name: "robots",
			content: "index, follow",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content: `${appUrl || "https://americanstories.mp"}`,
		},
	];
};

export default function Index() {
	const { appName } = useLoaderData<typeof loader>();
	return (
		<>
			<section
				className={`relative  w-full h-[90%] select-none`}
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
						className="mt-10 p-6"
						gap="6"
						direction={{
							initial: "column",
							sm: "row",
						}}
					>
						<div className="relative w-full flex">
							<Text
								className="leading-none text-transparent text-5xl md:text-4xl lg:text-8xl font-archivo-expanded font-bold z-10"
								style={{
									WebkitTextStroke:
										"1px rgba(236,237,240,.08)",
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
								<Text
									className="font-archivo-expanded font-4xl"
									weight="light"
								>
									Una nueva experiencia de rol
								</Text>
							</div>
						</div>
						<Card className="w-full">A</Card>
					</Flex>
					<Flex className="w-full px-8">
						<ComposedGrids />
						<Card className="w-full">Hello</Card>
					</Flex>
					<img
						className="absolute bottom-0 w-full"
						src={imageBottom}
					/>
				</article>
			</section>
			<section
				className="relative"
				style={{ backgroundImage: `url(${nextBackground})` }}
			>
				<img className="absolute top-0 w-full z-10" src={imageTop} />
				<div className="absolute -top-40 md:-top-10 w-full z-20 flex justify-center items-center px-4 sm:px-0">
					<Box asChild>
						<div className="p-4 sm:p-6 rounded-[40px] sm:rounded-[80px] w-full max-w-3xl">
							<Flex
								gap={{
									initial: "4",
									sm: "6",
									md: "9",
								}}
								align="center"
								direction={{
									initial: "column",
									sm: "row",
								}}
							>
								<Text
									size={{ initial: "3", sm: "4", md: "5" }}
									weight="bold"
									className="text-center sm:text-left"
								>
									Nuestro boletín
								</Text>
								<Flex
									gap="2"
									direction={{
										initial: "column",
										sm: "row",
									}}
									className="w-full sm:w-1/2 flex-1"
								>
									<TextField.Root
										placeholder="Tu correo electrónico"
										className="w-full"
									>
										<TextField.Slot>
											<EnvelopeClosedIcon />
										</TextField.Slot>
									</TextField.Root>
									<Button
										variant="solid"
										className="w-full sm:w-auto"
									>
										Suscribirse
										<FaRegPaperPlane className="ml-2" />
									</Button>
								</Flex>
							</Flex>
						</div>
					</Box>
				</div>
				<article className="max-w-screen-xl h-screen flex flex-col xl:flex-row justify-evenly items-center px-8 mx-auto">
					<Flex direction="column" gap="4">
						<Text
							className="text-4xl font-archivo-expanded text-center"
							color="gray"
						>
							¿CÓMO JUGAR?
						</Text>
						<Text
							className="text-center"
							size="2"
							weight="medium"
							color="gray"
						>
							Para poder jugar en American Stories, primero debes
							tener una{" "}
							<strong>
								copia original de Grand Theft Auto V
							</strong>{" "}
							y adicionalmente, tener instalado{" "}
							<strong>RAGE Multiplayer</strong> en tu computadora.
							Si cuentas con ambos, puedes proceder a registrarte
							en nuestro servidor.
						</Text>
						<Flex className="mt-12">
							<Card className="w-full xl:w-96 h-96 border-2 border-[#21222c] rounded-xl flex flex-col justify-between p-5 how-to-play-step-1-bg hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
								<Flex direction="column" gap="4">
									<Flex justify="between" align="start">
										<Text
											size="2"
											weight="bold"
											color="gray"
										>
											PASO 1
										</Text>
										<img src={gtaVLogo} className="w-14" />
									</Flex>
									<Text size="5" weight="bold">
										Necesitarás una copia con licencia de
										Grand Theft Auto V
									</Text>
									<Text size="2">
										Puedes comprarlo en{" "}
										<Link href="#">Steam</Link>,{" "}
										<Link href="#">
											Rockstar Games Launcher
										</Link>{" "}
										o <Link href="#">Epic Games Store</Link>
									</Text>
								</Flex>
							</Card>
						</Flex>
					</Flex>
				</article>
			</section>
		</>
	);
}
