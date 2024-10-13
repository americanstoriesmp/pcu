import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
	request,
}: LoaderFunctionArgs) => {
	const user = await authenticator.isAuthenticated(request);
	if (user)
		return authenticator.logout(request, {
			redirectTo: '/',
		});
};
