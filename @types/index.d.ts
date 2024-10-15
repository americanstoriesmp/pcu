import { GoogleProfile } from 'remix-auth-google';

declare global {
	type Profile = Pick<GoogleProfile, '_json'>;

	type StrapiUser = {
		username: string;
		email: string;
	};

	interface CreatedSession {
		profile: Profile;
		storedInDatabase: boolean;
		backendJwt: string;
		backendIdentity: string;
	}

	interface StrapiSession {
		jwt: string;
		user: StrapiUser;
		oauth?: boolean;
		persist?: boolean;
		setupFinished?: boolean; // this property tells us if the user has finished the setup process after oauth. If not, we will redirect them to the setup page.
	}
}
