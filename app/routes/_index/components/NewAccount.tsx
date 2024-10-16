import { useLoaderData } from '@remix-run/react';
import { loader } from '../route';
import { Text } from '@radix-ui/themes';
import RegisterForm, {
	RegisterFormSchema,
} from '~/components/shared/RegisterForm';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { getApiUrl } from '~/lib/utils';

type DataSubmit = Pick<
	RegisterFormSchema,
	'username' | 'password' | 'confirmPassword'
>;

export default function NewAccount() {
	const { profile, configured, identity, jwt } = useLoaderData<typeof loader>();

	const needsRegistration = React.useMemo(
		() => !configured && profile,
		[configured, profile]
	);

	const submitForm = async (data: DataSubmit) => {
		const response = await fetch(getApiUrl('users/me'), {
			method: 'PUT',
			body: JSON.stringify({
				username: data.username,
				password: data.password,
				confirmPassword: data.confirmPassword,
				createdAfterOAuth: true,
			}),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
		});

		const result = await response.json();

		if (response.ok) {
			window.location.href = '/dashboard';
		} else {
			throw new Error(result.error.details.field);
		}
	};
	return (
		<>
			{needsRegistration && (
				<>
					<section
						className={`fixed w-full top-0 left-0 right-0 bottom-0 h-full z-[9999] ${needsRegistration ? 'block' : 'hidden'}`}
						style={{
							background:
								'radial-gradient(80.56% 128.89% at 50% 0,#334155 0,#1e293b 100%)',
							opacity: 0.98,
						}}
					>
						<Toaster position="bottom-right" />
						<div className="w-full h-full flex items-center justify-center">
							<RegisterForm
								title="Crea una nueva cuenta de usuario"
								header={
									<>
										<Text size="2" className="leading-2">
											Notamos que no hay ninguna cuenta registrada con el correo{' '}
											<strong>{profile?._json.email}</strong>.
											<br />
											Por favor, completa el siguiente formulario para crear una
											nueva cuenta.
										</Text>
									</>
								}
								email={profile?._json.email}
								username={identity}
								handler={submitForm}
							/>
						</div>
					</section>
				</>
			)}
		</>
	);
}
