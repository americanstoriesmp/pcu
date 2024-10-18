import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
	Box,
	Button,
	Card,
	Flex,
	Grid,
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
import { loader } from '../_auth/route';
import ProviderButton from '~/components/shared/ProviderButton';

const formSchema = z.object({
	identifier: z.string().min(1, { message: 'Ingresa tu nombre de usuario.' }),
	password: z.string().min(1, { message: 'Ingresa tu contraseña.' }),
});

export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [{ title: `Inicio de sesión | ${data.appName}` }];
};

export default function SignInPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			identifier: '',
			password: '',
		},
	});
	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const response = await fetch('/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams(values as any).toString(),
			});
			console.log(JSON.stringify(response));
		} catch (error) {
			console.error(`[ERROR]: Failed to login: ${error}`);
		}
	}

	return (
		<Box maxWidth="600px" className="font-archivo">
			<Card size="5" className="p-4">
				<Flex direction="column" gap="2" py="3" px="2">
					<Text as="div" weight="bold" size="6" align="center">
						Inicia sesión en tu cuenta
					</Text>
					<Grid gap="1">
						<Text as="span" weight="light" size="2" align="center">
							Inicia sesión con
						</Text>
						<Flex gap="2" className="w-full">
							<ProviderButton
								variant="surface"
								className="w-full"
								provider="google"
							>
								<FaGoogle /> Google
							</ProviderButton>
							{/* <ProviderButton
								variant="surface"
								className="w-full"
								provider="discord"
							>
								<FaDiscord /> Discord
							</ProviderButton> */}
						</Flex>
					</Grid>
					<TextSeparator title="O ingresa tus credenciales" />

					<Theme panelBackground="solid">
						<Form {...form}>
							<form
								//method="post"
								//action="/auth/login"
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-3"
							>
								<FormField
									control={form.control}
									name="identifier"
									render={({ field }) => (
										<FormItem>
											<FormLabel asChild>
												<Text>Nombre de usuario</Text>
											</FormLabel>
											<FormControl>
												<TextField.Root
													placeholder="Trevor"
													name={field.name}
													value={field.value}
													onChange={field.onChange}
													color={
														form.formState.errors[field.name] ? 'red' : 'indigo'
													}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel asChild>
												<Text>Contraseña</Text>
											</FormLabel>
											<FormControl>
												<TextField.Root
													placeholder="********"
													type="password"
													name={field.name}
													value={field.value}
													onChange={field.onChange}
													color={
														form.formState.errors[field.name] ? 'red' : 'indigo'
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button type="submit" className="w-full">
									Iniciar sesión
								</Button>
							</form>
						</Form>
					</Theme>
				</Flex>
			</Card>
		</Box>
	);
}
