import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';

export const loader: LoaderFunction = async ({
	params,
	request,
}: LoaderFunctionArgs) => {
	const { provider } = params;
	const url = new URL(request.url);
	const id_token = url.searchParams.get('id_token');

	const response = await fetch(
		`http://localhost:1337/api/auth/${provider}/callback?access_token=${id_token}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	const data = await response.json();

	return new Response(JSON.stringify(data), {
		status: response.status,
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
