import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/session.server';
import { GoogleStrategy } from 'remix-auth-google';
import { AuthService } from './auth.service';
import { getApiUrl } from '~/lib/utils';

export const authenticator = new Authenticator<CreatedSession>(sessionStorage, {
	sessionKey: '__session',
});

const getCallback = (provider: string) => {
	return `http://localhost:5174/auth/${provider}/callback`;
};

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
