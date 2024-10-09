import { LoaderFunction, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = async ({
	request,
	params,
}: LoaderFunctionArgs) => {
	const { profile, storedInDatabase } = (await authenticator.isAuthenticated(
		request
	)) as CreatedSession;

	return redirect(
		`/?new=user&profile_name=${profile._json.email.split('@')[0]}${!storedInDatabase ? '&registered=false' : ''}&source=${params.provider}`
	);
};
