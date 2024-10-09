import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { redirect, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
	request,
}: LoaderFunctionArgs) => {
	const user = await authenticator.isAuthenticated(request, {
		failureRedirect: '/sign-in',
	});

	if (!user) redirect('/sign-in');

	return { user };
};

export default function Dashboard() {
	const { user } = useLoaderData<typeof loader>();

	return (
		<div className="text-white mt-20">
			<h1>Welcome {user._json.email}!</h1>
			<p>This is a protected page</p>
		</div>
	);
}
