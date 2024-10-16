import { LoaderFunction, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';
import { AuthService } from '~/services/auth.service';
import { commitSession, getSession } from '~/services/session.server';

export const loader: LoaderFunction = async ({
	request,
	params,
}: LoaderFunctionArgs) => {
	const { accountConfigured, backendIdentity, backendJwt } =
		(await authenticator.isAuthenticated(request)) as CreatedSession;
	const configured = await AuthService.checkUserState(backendJwt);
	const session = await getSession(request.headers.get('Cookie'));
	const { profile } = session.get('__session') as CreatedSession;

	console.log('profile', profile);
	console.log('configured', configured);

	return redirect(
		`/?new=user&profile_name=${backendIdentity}${!accountConfigured ? '&registered=false' : ''}&source=${params.provider}`
		// {
		// 	headers: {
		// 		'Set-Cookie': await commitSession(session),
		// 	},
		// }
	);
};
