import {
	ActionFunction,
	ActionFunctionArgs,
	redirect,
	redirectDocument,
} from '@remix-run/node';
import { RegisterFormSchema } from '~/components/shared/RegisterForm';
import { getApiUrl } from '~/lib/utils';
import { authenticator } from '~/services/auth.server';
import { commitSession, getSession } from '~/services/session.server';

export let loader = () => redirect('/sign-in');

type DataSubmit = Pick<
	RegisterFormSchema,
	'username' | 'password' | 'confirmPassword' | 'email'
>;

/**
 * This is like a controller, it handles the form submission with two variants.
 * The first one is for the local provider, which is a POST request to the API.
 * The second one is for the Google provider, which is a PUT request to the API.
 *
 * The form data is extracted from the request and sent to the API.
 *
 * @todo Add a better error handling mechanism.
 * @todo Add support for Toasts on server-side https://remix.run/resources/remix-toast.
 *
 * @param request
 * @returns
 */
export let action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
	const url = new URL(request.url);
	const provider = url.searchParams.get('provider');

	const useAuth = (await authenticator.isAuthenticated(
		request
	)) as CreatedSession;

	const submitForm = async (data: DataSubmit) => {
		const response = await fetch(
			getApiUrl(provider === 'local' ? 'auth/local/register' : 'users/me'),
			{
				method: provider === 'local' ? 'POST' : 'PUT',
				body: JSON.stringify({
					username: data.username,
					...(provider === 'local'
						? {
								email: data.email,
								password: data.password,
							}
						: {}),
					...(provider === 'google'
						? {
								createdAfterOAuth: true,
								provider: 'local',
							}
						: {}),
				}),
				headers: {
					'Content-Type': 'application/json',
					...(provider !== 'local'
						? { Authorization: `Bearer ${useAuth.extra.jwt}` }
						: {}),
				},
			}
		);

		if (!response.ok) {
			const result = await response.json();
			throw new Error(result.error.message);
		} else {
			return response.json();
		}
	};

	const formData = await request.formData();
	const data: DataSubmit = {
		username: formData.get('username') as string,
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		confirmPassword: formData.get('confirmPassword') as string,
	};

	try {
		const result = await submitForm(data);

		// get session
		if (provider === 'google') {
			const session = await getSession(request.headers.get('Cookie'));
			const sessionInfo = session.get(
				authenticator.sessionKey
			) as CreatedSession;

			sessionInfo.extra.setupFinished = true;
			session.set(authenticator.sessionKey, sessionInfo);

			return redirectDocument(
				'/dashboard',
				// @todo: Check why this is not working. It's just set the headers but redirection doesn't work.
				{
					headers: {
						'Set-Cookie': await commitSession(session),
					},
				}
			);
		}
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Response(error.message, { status: 409 });
		} else {
			throw new Response('Error desconocido', { status: 500 });
		}
	}

	return redirect('/sign-in');
};
