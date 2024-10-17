import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { loader } from '../_auth/route';
import { Button, Flex, Grid, Text } from '@radix-ui/themes';
import { FaGoogle } from 'react-icons/fa';
import { TextSeparator } from '~/components/shared/LineSeparator';
import RegisterForm from '~/components/shared/RegisterForm';
import { Toaster } from 'react-hot-toast';

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
								<Button variant="surface" className="flex-1">
									<FaGoogle /> Google
								</Button>
							</Flex>
						</Grid>
						<TextSeparator title="O regístrate con tu e-mail" />
					</>
				}
			/>
		</>
	);
}
