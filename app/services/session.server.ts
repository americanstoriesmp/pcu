import { createCookieSessionStorage } from '@remix-run/node';

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: '__session',
		sameSite: 'lax',
		path: '/',

		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		secrets: [process.env.SESSION_SECRET || 'dev'],
	},
});

export const { getSession, commitSession, destroySession } = sessionStorage;
