import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { API_URL } from './common/constants';

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
	'Your account email is not confirmed':
		'El correo electrónico no está confirmado.',
	'Your account has been blocked by an administrator': 'Cuenta bloqueada.',
	'Username already taken': 'El nombre de usuario ya está en uso.',
	'Email or Username are already taken':
		'El correo o nombre de usuario ya están en uso.',
};

export function getErrorMessage(key: string): string {
	return DefaultBackendErrors[key] ?? 'Error desconocido.';
}
