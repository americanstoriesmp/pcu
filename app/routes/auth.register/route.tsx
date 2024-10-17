import { ActionFunction, ActionFunctionArgs, redirect } from '@remix-run/node';
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

	let err = null;

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
					password: data.password,
					...(provider === 'local' ? { email: data.email } : {}),
					...(provider === 'google'
						? { confirmPassword: data.confirmPassword }
						: {}),
					...(provider === 'google' ? { createdAfterOAuth: true } : {}),
				}),
				headers: {
					'Content-Type': 'application/json',
					...(provider !== 'local'
						? { Authorization: `Bearer ${useAuth.extra.jwt}` }
						: {}),
				},
			}
		);

		return await response.json();
	};

	const formData = await request.formData();
	const data: DataSubmit = {
		username: formData.get('username') as string,
		password: formData.get('password') as string,
		email: formData.get('email') as string,
		confirmPassword: formData.get('confirmPassword') as string,
	};

	try {
		err = await submitForm(data);
		// get session
		const session = await getSession(request.headers.get('Cookie'));
		const sessionInfo = session.get(authenticator.sessionKey) as CreatedSession;

		sessionInfo.extra.setupFinished = true;
		session.set(authenticator.sessionKey, sessionInfo);

		return redirect(provider === 'local' ? '/sign-in' : '/dashboard', {
			headers: {
				...(provider !== 'local'
					? { 'Set-Cookie': await commitSession(session) }
					: {}),
			},
		});
	} catch (error) {
		throw new Error(err?.error.details.field);
	}
};
