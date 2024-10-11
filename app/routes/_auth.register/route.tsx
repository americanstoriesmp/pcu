import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { loader } from '../_auth/route';
import {
	Box,
	Button,
	Card,
	Checkbox,
	Flex,
	Grid,
	Link,
	Text,
	TextField,
	Theme,
} from '@radix-ui/themes';
import { FaDiscord, FaGoogle } from 'react-icons/fa';
import { TextSeparator } from '~/components/shared/LineSeparator';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '~/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import RegisterForm from '~/components/shared/RegisterForm';
const formSchema = z
	.object({
		username: z.string().min(2, { message: 'Mínimo 2 caracteres.' }),
		email: z.string().email({ message: 'Email inválido.' }),
		password: z.string().min(8, { message: 'Mínimo 8 caracteres.' }),
		password_confirmation: z.string(),
		consent: z.boolean().refine(val => val === true, {
			message: 'Debes aceptar los términos y condiciones.',
		}),
	})
	.refine(data => data.password === data.password_confirmation, {
		message: 'Las contraseñas no coinciden.',
		path: ['password_confirmation'],
	});
export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [{ title: `Registro | ${data.appName}` }];
};

export default function RegisterPage() {
	return (
		<RegisterForm
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
							<Button variant="surface" className="flex-1">
								<FaDiscord /> Discord
							</Button>
						</Flex>
					</Grid>
					<TextSeparator title="O regístrate con tu e-mail" />
				</>
			}
		/>
	);
}
