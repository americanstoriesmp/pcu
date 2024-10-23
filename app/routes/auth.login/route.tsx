import { ActionFunction, ActionFunctionArgs } from '@remix-run/node';
import { authenticator } from '../../services/auth.server';

/**
 * Login action.
 * @todo: Enhance error exceptions.
 *
 * @param request
 * @param context
 * @returns
 */
export let action: ActionFunction = async ({
	request,
	context,
}: ActionFunctionArgs) => {
	try {
		return authenticator.authenticate('local', request, {
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
