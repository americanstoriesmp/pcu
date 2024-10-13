export class AuthService {
	public static async checkIfExistsSomeAccounWithThatEmail(
		email: string
	): Promise<boolean> {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/users?filters[$and][0][email][$eq]=${email}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const result = await response.json();

			return result.length > 0;
		} catch (error) {
			console.error(
				`[ERROR]: Failed to check if email exists (${this.name}): ${error}`
			);
		}
		return false;
	}
}
