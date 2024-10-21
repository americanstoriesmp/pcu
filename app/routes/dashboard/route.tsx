import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { redirect, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
	request,
}: LoaderFunctionArgs) => {
	const auth = await authenticator.isAuthenticated(request, {
		failureRedirect: '/sign-in',
	});

	if (!auth) redirect('/sign-in');

	return { ...auth };
};

export default function Dashboard() {
	const { extra } = useLoaderData<typeof loader>() as CreatedSession;

	return (
		<div className="text-white mt-20">
			<h1>{JSON.stringify(extra.user.email)}</h1>
			<p>This is a protected page</p>
		</div>
	);
}
