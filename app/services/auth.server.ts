import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/session.server';
import { GoogleStrategy } from 'remix-auth-google';
import { AuthService } from './auth.service';

export const authenticator = new Authenticator<CreatedSession>(sessionStorage, {
	sessionKey: '__session',
});

const getCallback = (provider: string) => {
	return `http://localhost:5173/auth/${provider}/callback`;
};

authenticator.use(
	new GoogleStrategy<CreatedSession>(
		{
			clientID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
			callbackURL: getCallback('google'),
		},
		async ({ profile }) => {
			// const accountWithMailExists =
			// 	await AuthService.checkIfExistsSomeAccounWithThatEmail(
			// 		profile.emails[0].value
			// 	);
			const storedInDatabase = false;
			console.log(`[INFO]: Account with email exists: ${storedInDatabase}`);

			return {
				profile,
				storedInDatabase,
			};
		}
	),
	'google'
);
