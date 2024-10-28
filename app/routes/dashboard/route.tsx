import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { redirect, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/services/auth.server';
import NavigationMenu from './(components)/NavigationMenu';
import { CommonComponentType } from '~/lib/common/types';
import { HomeIcon } from '@radix-ui/react-icons';
import { FaUserEdit } from 'react-icons/fa';

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
		<main className="flex w-full h-full">
			<div className="w-[15rem] bg-[#0D1526]">
				<NavigationMenu />
			</div>
			<div className="flex-1 bg-slate-900 p-8">
				<h1>Dashboard</h1>
				<p>Welcome asas</p>
			</div>
		</main>
	);
}
