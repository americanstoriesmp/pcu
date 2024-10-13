import { ActionFunction, ActionFunctionArgs, redirect } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export let loader = () => redirect('/sign-in');

export let action: ActionFunction = ({
	request,
	params,
}: ActionFunctionArgs) => {
	return authenticator.authenticate(params.provider as string, request);
};
