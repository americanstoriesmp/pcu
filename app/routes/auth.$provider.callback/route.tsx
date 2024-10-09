import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
	request,
	params,
}: LoaderFunctionArgs) => {
	return await authenticator.authenticate(params.provider as string, request, {
		successRedirect: `/auth/${params.provider}/redirect`,
		failureRedirect: '/sign-in',
	});
};
