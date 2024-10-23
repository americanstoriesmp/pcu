import { LoaderFunction, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
	request,
	params,
}: LoaderFunctionArgs) => {
	const { extra } = (await authenticator.isAuthenticated(
		request
	)) as CreatedSession;

	return redirect(
		extra.setupFinished
			? '/dashboard'
			: `/?new=user&profile_name=${extra.user.username}&source=${params.provider}`
	);
};
