import { getApiUrl } from '~/lib/utils';

export class AuthService {
	/**
	 * Checks if there is an account with the given email.
	 *
	 * @param email
	 * @returns Promise<boolean>
	 */
	public static async checkIfExists(email: string): Promise<boolean> {
		const PATH_TO_FETCH = `users?filters[$and][0][email][$eq]=${email}`;

		try {
			const response = await fetch(getApiUrl(PATH_TO_FETCH), {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await response.json();

			return result.length > 0;
		} catch (error) {
			console.error(
				`[ERROR]: Failed to check if email exists (${this.name}): ${error}`
			);
		}
		return false;
	}

	/**
	 * Checks if the user is already configured after OAuth sign in.
	 * In some cases, you need to create a user account after OAuth sign in.
	 *
	 * So the "configured" state tells us if users have already created an account with
	 * their username and password after signing in with OAuth.
	 *
	 * Useful when we need to managa some aspects of the app based on the user's configuration.
	 *
	 * @returns Promise<boolean>
	 */
	public static async alreadyConfigured(token?: string): Promise<boolean> {
		const PATH_TO_FETCH = `users/me`;

		try {
			const response = await fetch(getApiUrl(PATH_TO_FETCH), {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			const result = await response.json();

			return !!result.createdAfterOAuth;
		} catch (error) {
			console.error(
				`[ERROR]: Failed to check if user is configured (${this.name}): ${error}`
			);
		}
		return false;
	}

	/**
	 * Checks the state of the user.
	 *
	 * - `CONFIGURED`: The user has already created an account after OAuth sign in.
	 * - `NOT_CONFIGURED`: The user has not created an account after OAuth sign in.
	 * - `ANONYMOUS`: The user is not logged in or has not signed in with OAuth.
	 *
	 * @returns Promise<UserState>
	 */
	public static async checkUserState(token: string): Promise<UserState> {
		const configured = await this.alreadyConfigured(token);

		if (configured) {
			return 'CONFIGURED';
		}

		if (configured === false) {
			return 'NOT_CONFIGURED';
		}

		return 'ANONYMOUS';
	}

	/**
	 * Logs the user in.
	 *
	 * @param identifier
	 * @param password
	 * @returns
	 */
	public static async login(identifier: string, password: string) {
		const PATH_TO_LOGIN = `auth/local`;
		const response = await fetch(getApiUrl(PATH_TO_LOGIN), {
			method: 'POST',
			body: JSON.stringify({
				identifier,
				password,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (response.ok) {
			return result;
		} else {
			throw new Error(result.error.message);
		}
	}
}
