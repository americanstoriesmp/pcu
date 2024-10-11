import { useLoaderData } from '@remix-run/react';
import { loader } from '../route';
import { Text } from '@radix-ui/themes';
import RegisterForm from '~/components/shared/RegisterForm';

export default function NewAccount() {
	const { profile, storedInDatabase } = useLoaderData<typeof loader>();
	const needsRegistration = !storedInDatabase && profile;
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
						<div className="w-full h-full flex items-center justify-center">
							<RegisterForm
								title="Crea una nueva cuenta de usuario"
								header={
									<>
										<Text size="2" className="leading-2">
											No encontramos una cuenta asociada a{' '}
											<strong>{profile?._json.email}</strong>.
											<br />
											Por favor, completa el siguiente formulario para crear una
											nueva cuenta.
										</Text>
									</>
								}
								email={profile?._json.email}
							/>
						</div>
					</section>
				</>
			)}
		</>
	);
}
