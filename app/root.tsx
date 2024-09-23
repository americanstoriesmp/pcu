import {
	json,
	Links,
	Meta,
	MetaFunction,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css?url";

import { Theme, ThemePanel } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Anton&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Anton&family=Londrina+Solid:wght@100;300;400;900&display=swap",
	},
];

export const loader: LoaderFunction = async () => {
	return json({
		keywords: process.env.APP_KEYWORDS,
		appName: process.env.APP_NAME,
		appSlogan: process.env.APP_SLOGAN,
	});
};

export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [
		{
			title: `${data.appName} - ${data.appSlogan}`,
		},
	];
};

export function Layout({ children }: { children: React.ReactNode }) {
	const { keywords } = useLoaderData<typeof loader>();
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="keywords" content={keywords} />
				<meta name="authors" content="copacabana; tomms2;" />
				<Meta />
				<Links />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Theme
						grayColor="sage"
						// panelBackground="solid"
						radius="small"
						scaling="105%"
					>
						<div className="w-screen h-screen overflow-x-hidden scrollbar-themed">
							{children}
						</div>
					</Theme>
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
