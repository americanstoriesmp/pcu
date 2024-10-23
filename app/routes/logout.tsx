import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

/**
 * Logout loader function.
 *
 * @param request LoaderFunctionArgs
 * @returns
 */
export const loader: LoaderFunction = async ({
	request,
}: LoaderFunctionArgs) => {
	const user = await authenticator.isAuthenticated(request);
	if (user)
		return await authenticator.logout(request, {
			redirectTo: '/',
		});
};
