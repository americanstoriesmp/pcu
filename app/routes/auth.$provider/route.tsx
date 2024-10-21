import { ActionFunction, ActionFunctionArgs, redirect } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export let loader = () => redirect('/sign-in');

export let action: ActionFunction = async ({
	request,
	params,
	context,
}: ActionFunctionArgs) => {
	try {
		return authenticator.authenticate(params.provider as string, request, {
			successRedirect: '/dashboard',
			context,
			throwOnError: true,
		});
	} catch (error: unknown) {
		if (error instanceof Error) {
			return new Response(
				JSON.stringify({
					message: error.message,
					extra: error,
				}),
				{ status: 400 }
			);
		} else {
			return new Response('Unexpected Error', { status: 500 });
		}
	}
};
