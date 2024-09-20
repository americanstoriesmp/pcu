import { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { loader } from "../_auth/route";

export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [{ title: `Inicio de sesión | ${data.appName}` }];
};

export default function SignIn() {
	return (
		<div>
			<h1>Inicio de sesion</h1>
			<p>Este es un archivo básico de Remix.</p>
			<Link to="/about">Ir a la página Acerca de</Link>
		</div>
	);
}
