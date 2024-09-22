import { Box, Grid, Text, Theme } from "@radix-ui/themes";
import { json, LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import bgImage from "/ucp-bg.png?url";

export const loader: LoaderFunction = async () => {
	return json({ appName: process.env.APP_NAME });
};

export default function Layout() {
	const { appName } = useLoaderData<typeof loader>();

	return (
		<Grid
			columns={{ initial: "1", md: "2" }}
			width={"auto"}
			className="h-full max-h-screen overflow-hidden"
		>
			<Box
				display={{ initial: "none", md: "block" }}
				style={{
					alignContent: "center",
					justifyContent: "center",
				}}
				className="bg-gray-200"
			>
				<Theme
					appearance="light"
					panelBackground="translucent"
					hasBackground={false}
				>
					<Text
						style={{
							display: "flex",
							alignContent: "center",
							justifyContent: "center",
						}}
						size={"7"}
						weight={{
							initial: "medium",
							md: "bold",
						}}
						className="font-archivo-expanded select-none"
					>
						{appName?.toUpperCase()}
					</Text>
				</Theme>
			</Box>
			<section
				className={`flex items-center justify-center p-2 bg-cover bg-center bg-no-repeat`}
				style={{
					backgroundImage: `url(${bgImage})`,
				}}
			>
				<div className="w-full h-full relative">
					<section className="w-full h-full flex items-center justify-center">
						<Outlet />
					</section>
					<div className="absolute bottom-0 left-0 w-full h-10 text-center">
						<Text size="2" weight="medium">
							Todos los derechos reservados ©{" "}
							{new Date().getFullYear()} {appName}
						</Text>
					</div>
				</div>
			</section>
		</Grid>
	);
}
