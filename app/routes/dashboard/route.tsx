import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
	request,
	params,
}: LoaderFunctionArgs) => {
	const user = authenticator.isAuthenticated(request, {
		failureRedirect: '/sign-in',
	});

	return { user };
};

export default function Dashboard() {
	const { user } = useLoaderData<typeof loader>();

	return (
		<div className="text-white mt-20">
			<h1>Welcome {JSON.stringify(user)}!</h1>
			<p>This is a protected page</p>
		</div>
	);
}
