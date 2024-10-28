import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { redirect, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/services/auth.server';
import NavigationMenu from './(components)/NavigationMenu';
import { CommonComponentType } from '~/lib/common/types';
import { HomeIcon } from '@radix-ui/react-icons';
import { FaUserEdit } from 'react-icons/fa';
import { Theme } from '@radix-ui/themes';

/**
 * Loader function for dashboard.
 *
 * @param request
 * @returns
 */
export const loader: LoaderFunction = async ({
	request,
}: LoaderFunctionArgs) => {
	const auth = await authenticator.isAuthenticated(request, {
		//failureRedirect: '/sign-in',
	});

	return { ...auth };
};

export default function Dashboard() {
	//const { extra } = useLoaderData<typeof loader>() as CreatedSession;

	return (
		<Theme accentColor="blue" asChild>
			<main className="h-full w-full flex">
				<div className="w-[15rem] bg-blue-1 h-full">
					<NavigationMenu />
				</div>
				<div className="flex-1 bg-slate-900 p-8">
					<h1>Dashboard</h1>
					<p>Welcome asas</p>
				</div>
			</main>
		</Theme>
	);
}
