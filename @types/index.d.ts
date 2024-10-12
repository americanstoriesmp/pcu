import { GoogleProfile } from 'remix-auth-google';

declare global {
	type Profile = Pick<GoogleProfile, '_json'>;

	interface CreatedSession {
		profile: Profile;
		storedInDatabase: boolean;
		backendJwt: string;
		backendIdentity: string;
	}
}
