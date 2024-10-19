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
		return await authenticator.authenticate('local', request, {
			successRedirect: '/dashboard',
			context,
			throwOnError: true,
		});
	} catch (error) {
		console.log('An error occurred.');
		return { error: 'An error occurred.' };
	}
};
