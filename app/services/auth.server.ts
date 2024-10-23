import { Authenticator, AuthorizationError } from 'remix-auth';
import { sessionStorage } from '~/services/session.server';
import { GoogleStrategy } from 'remix-auth-google';
import { FormStrategy } from 'remix-auth-form';
import { getApiUrl } from '~/lib/utils';
import { AuthService } from './auth.service';

/**
 * Created session interface.
 */
export const authenticator = new Authenticator<CreatedSession>(sessionStorage, {
	sessionKey: '__session',
});

/**
 * Get the callback URL for the OAuth provider.
 *
 * @param provider
 * @returns
 */
const getCallback = (provider: string) => {
	return `http://localhost:5174/auth/${provider}/callback`;
};

/**
 * Google OAuth strategy.
 */
authenticator.use(
	new GoogleStrategy<CreatedSession>(
		{
			clientID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
			callbackURL: getCallback('google'),
		},
		async ({ profile, accessToken, extraParams }) => {
			const PATH_TO_AUTHENTICATE = `auth/google/callback?access_token=${accessToken}&id_token=${extraParams.id_token}`;

			const response = await fetch(getApiUrl(PATH_TO_AUTHENTICATE));
			const result = await response.json();

			return {
				profile,
				extra: {
					jwt: result.jwt,
					user: {
						email: result.user.email,
						username: result.user.username,
					},
					oauth: true,
					persist: true,
					setupFinished: result.user.createdAfterOAuth,
				},
			};
		}
	),
	'google'
);

/**
 * Local strategy with form.
 */
authenticator.use(
	new FormStrategy<CreatedSession>(async ({ form }) => {
		let identifier = form.get('identifier');
		let password = form.get('password');

		try {
			const result = await AuthService.login(
				identifier as string,
				password as string
			);

			console.log(result);

			return {
				extra: {
					jwt: result.jwt,
					user: {
						email: result.user.email,
						username: result.user.username,
					},
					oauth: false,
					setupFinished: true,
				},
			};
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new AuthorizationError(error.message);
			} else {
				throw new AuthorizationError('An unknown error occurred');
			}
		}
	}),
	'local'
);
