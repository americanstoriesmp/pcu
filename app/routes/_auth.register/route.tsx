import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { loader } from '../_auth/route';
import { Flex, Grid, Text } from '@radix-ui/themes';
import { TextSeparator } from '~/components/shared/LineSeparator';
import RegisterForm from '~/components/shared/RegisterForm';
import { Toaster } from 'react-hot-toast';
import ProviderButton from '~/components/shared/ProviderButton';

export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [{ title: `Registro | ${data.appName}` }];
};

export default function RegisterPage() {
	return (
		<>
			<Toaster position="bottom-right" />
			<RegisterForm
				provider="local"
				title="Registra una nueva cuenta"
				header={
					<>
						<Grid gap="1">
							<Text as="span" weight="light" size="2" align="center">
								O elige una de las siguientes opciones
							</Text>
							<Flex gap="2" className="w-full">
								<ProviderButton
									variant="surface"
									className="w-full"
									provider="google"
								>
									Google
								</ProviderButton>
							</Flex>
						</Grid>
						<TextSeparator title="O regístrate con tu e-mail" />
					</>
				}
			/>
		</>
	);
}
