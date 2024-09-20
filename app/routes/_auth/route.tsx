import { Box, Grid, Text, Theme } from "@radix-ui/themes";
import { json, LoaderFunction } from "@remix-run/node";
import { Link, MetaFunction, Outlet, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
	return json({ appName: process.env.APP_NAME });
};

export default function Layout() {
	const { appName } = useLoaderData<typeof loader>();

	return (
		<Grid
			columns={{ initial: "1", md: "2" }}
			gap="2"
			width={"auto"}
			className="h-full"
		>
			<Box
				display={{ initial: "none", md: "block" }}
				style={{
					alignContent: "center",
					justifyContent: "center",
				}}
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
					className="font-archivo-expanded"
				>
					{appName?.toUpperCase()}
				</Text>
			</Box>
			<div className="bg-blue-300 flex items-center justify-center">
				<Outlet />
			</div>
		</Grid>
	);
}
