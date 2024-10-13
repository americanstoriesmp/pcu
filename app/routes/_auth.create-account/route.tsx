import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { loader } from '../_auth/route';

export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [{ title: `Crear una nueva cuenta | ${data.appName}` }];
};

export default function CreateAccount() {
	return <></>;
}
