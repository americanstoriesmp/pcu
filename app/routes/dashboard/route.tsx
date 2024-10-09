import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { redirect, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
	request,
}: LoaderFunctionArgs) => {
	const { profile, storedInDatabase } = await authenticator.isAuthenticated(
		request,
		{
			failureRedirect: '/sign-in',
		}
	);

	if (!profile) redirect('/sign-in');

	return { profile, storedInDatabase };
};

export default function Dashboard() {
	const { profile, storedInDatabase } = useLoaderData<
		typeof loader
	>() as CreatedSession;

	return (
		<div className="text-white mt-20">
			<h1>Welcome {JSON.stringify(profile._json.email)}!</h1>
			<h1>{String(storedInDatabase)}</h1>
			<p>This is a protected page</p>
		</div>
	);
}
