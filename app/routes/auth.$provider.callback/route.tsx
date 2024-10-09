import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export let loader: LoaderFunction = ({
	request,
	params,
}: LoaderFunctionArgs) => {
	return authenticator.authenticate(params.provider as string, request, {
		successRedirect: '/dashboard',
		failureRedirect: '/sign-in',
	});
};
