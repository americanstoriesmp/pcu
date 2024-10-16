import { GoogleProfile } from 'remix-auth-google';

declare global {
	type Profile = Pick<GoogleProfile, '_json'>;

	type StrapiUser = {
		username: string;
		email: string;
	};

	/**
	 * The object returned by the .authenticate() method.
	 */
	interface CreatedSession {
		profile: Profile;
		extra: StrapiSession;
	}

	/**
	 * Wraps all the information we need to store in the session
	 * incoming from the backend.
	 */
	interface StrapiSession {
		jwt: string;
		user: StrapiUser;
		oauth?: boolean;
		persist?: boolean;
		setupFinished?: boolean; // this property tells us if the user has finished the setup process after oauth. If not, we will redirect them to the setup page.
	}

	/**
	 * The state of the user.
	 * - CONFIGURED: The user has already created an account after OAuth sign in.
	 * - NOT_CONFIGURED: The user has not created an account after OAuth sign in.
	 * - ANONYMOUS: The user is not logged in or has not signed in with OAuth.
	 */
	type UserState = 'CONFIGURED' | 'NOT_CONFIGURED' | 'ANONYMOUS';
}
