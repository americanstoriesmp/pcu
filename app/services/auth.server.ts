import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/session.server';
import { GoogleStrategy } from 'remix-auth-google';
import { AuthService } from './auth.service';

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
			const accountWithMailExists =
				await AuthService.checkIfExistsSomeAccounWithThatEmail(
					profile._json.email
				);
			const storedInDatabase = accountWithMailExists;

			const response = await fetch(
				`http://localhost:1337/api/auth/google/callback?access_token=${accessToken}&id_token=${extraParams.id_token}`
			);
			const result = await response.json();

			return {
				profile,
				storedInDatabase,
				backendJwt: result.jwt,
				backendIdentity: result.user.username,
			};
		}
	),
	'google'
);
