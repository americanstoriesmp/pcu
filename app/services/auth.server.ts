import { Authenticator } from 'remix-auth';
import { sessionStorage } from '~/services/session.server';
import { DiscordStrategy } from 'remix-auth-discord';
import { GoogleStrategy } from 'remix-auth-google';
import { AuthService } from './auth.service';

export const authenticator = new Authenticator(sessionStorage, {
	sessionKey: '__session',
});

const getCallback = (provider: string) => {
	return `http://localhost:5173/auth/${provider}/callback`;
};

authenticator.use(
	new GoogleStrategy(
		{
			clientID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
			callbackURL: getCallback('google'),
		},
		async ({ profile }) => {
			const accountWithMailExists =
				await AuthService.checkIfExistsSomeAccounWithThatEmail(
					profile.emails[0].value
				);
			console.log(
				`[INFO]: Account with email exists: ${accountWithMailExists}`
			);

			return profile;
		}
	),
	'google'
);

authenticator.use(
	new DiscordStrategy(
		{
			clientID: import.meta.env.VITE_DISCORD_CLIENT_ID,
			clientSecret: import.meta.env.VITE_DISCORD_CLIENT_SECRET,
			callbackURL: getCallback('discord'),
		},
		async ({ profile }) => {
			return profile;
		}
	)
);
