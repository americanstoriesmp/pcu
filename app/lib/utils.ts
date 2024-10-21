import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { API_URL } from './common/constants';
import { RegisterFormSchema } from '~/components/shared/RegisterForm';

/**
 * Combines class names and tailwind classes.
 *
 * @param inputs
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Returns the full API URL with the given path.
 *
 * @param path
 * @returns string
 */
export function getApiUrl(path: string): string {
	if (path.startsWith('/')) {
		path = path.slice(1);
	}
	return `${API_URL}/${path}`;
}

/**
 * Returns the error message for the given key.
 *
 * @param key
 * @returns string
 */
const DefaultBackendErrors: Record<string, string> = {
	'Invalid identifier or password': 'Usuario o contraseña incorrectos.',
};

export function getErrorMessage(key: string): string {
	return DefaultBackendErrors[key] ?? 'Error desconocido.';
}
