import {
	Box,
	Button,
	Card,
	Checkbox,
	Flex,
	Link,
	Text,
	TextField,
	Theme,
} from '@radix-ui/themes';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CommonComponentType } from '~/lib/common/types';
import { toast } from 'react-hot-toast';
import React from 'react';
import { getErrorMessage } from '~/lib/utils';

const createFormSchema = (withPassword: boolean) => {
	return z
		.object({
			username: z.string().min(2, { message: 'Mínimo 2 caracteres.' }),
			email: z.string().email({ message: 'Email inválido.' }),
			password: withPassword
				? z.string().min(8, { message: 'Mínimo 8 caracteres.' })
				: z.string().optional(),
			confirmPassword: withPassword ? z.string() : z.string().optional(),
			consent: z.boolean().refine(val => val === true, {
				message: 'Debes aceptar los términos y condiciones.',
			}),
		})
		.refine(data => data.password === data.confirmPassword, {
			message: 'Las contraseñas no coinciden.',
			path: ['confirmPassword'],
		});
};

type RegisterFormProps = Pick<CommonComponentType, 'title'> & {
	header?: React.ReactNode;
	email?: string;
	username?: string;
	provider: 'local' | 'google';
};

export type RegisterFormSchema = z.infer<ReturnType<typeof createFormSchema>>;

export default function RegisterForm({
	header,
	email,
	title,
	username,
	provider,
}: RegisterFormProps) {
	const withPassword = React.useMemo<boolean>(() => {
		return provider === 'local';
	}, [provider]);

	const formSchema = React.useMemo(
		() => createFormSchema(withPassword),
		[withPassword]
	);

	const form = useForm<RegisterFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: username ?? '',
			email: email ?? '',
			password: '',
			confirmPassword: '',
			consent: false,
		},
	});

	const [loading, setLoading] = React.useState<boolean>(false);

	/**
	 * Handle the promise.
	 * Proxy method that will trigger a toast promise within the onSubmit method.
	 *
	 * @param values
	 */
	async function handlePromise(values: RegisterFormSchema) {
		setLoading(true);
		toast
			.promise(onSubmit(values), {
				loading: 'Creando cuenta...',
				success: '¡Bienvenido!',
				error: (error: Error) => `${error.message}`,
			})
			.finally(() => setLoading(false));
	}

	/**
	 * Handle the promise with the given values and return the response.
	 * It will throw an error if the response is not ok.
	 * Also, we need to redirect the user to the dashboard or sign in page client-side.
	 *
	 * @param values
	 * @returns
	 */
	async function onSubmit(values: RegisterFormSchema) {
		const response = await fetch(`/auth/register?provider=${provider}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams(values as any).toString(),
		});

		if (!response.ok) {
			const errorText = await response.text();

			console.log(`Error is: ${errorText}`);
			throw new Error(getErrorMessage(errorText) || 'Error desconocido');
		}

		window.location.href = provider === 'google' ? '/dashboard' : '/sign-in';
	}

	return (
		<>
			<Box maxWidth="600px" className="font-archivo">
				<Card size="5" className="p-4">
					<Flex direction="column" gap="2" py="3" px="2">
						<Text as="div" weight="bold" size="6" align="center">
							{title}
						</Text>
						{header && (header as React.ReactElement)}

						<Theme panelBackground="solid">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(handlePromise)}
									className="space-y-3"
								>
									<Flex gap="2">
										<FormField
											control={form.control}
											name="username"
											render={({ field }) => (
												<FormItem className="w-full">
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
																form.formState.errors[field.name]
																	? 'red'
																	: 'indigo'
															}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel asChild>
														<Text>Correo electrónico</Text>
													</FormLabel>
													<FormControl>
														<TextField.Root
															placeholder="trevor@faceinvader.net"
															name={field.name}
															value={field.value}
															onChange={field.onChange}
															color={
																form.formState.errors[field.name]
																	? 'red'
																	: 'indigo'
															}
															disabled={!!email}
														/>
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
									</Flex>
									{withPassword && (
										<Flex gap="2">
											<FormField
												control={form.control}
												name="password"
												render={({ field }) => (
													<FormItem className="w-full">
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
																	form.formState.errors[field.name]
																		? 'red'
																		: 'indigo'
																}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="confirmPassword"
												render={({ field }) => (
													<FormItem className="w-full">
														<FormLabel asChild>
															<Text>Confirmar contraseña</Text>
														</FormLabel>
														<FormControl>
															<TextField.Root
																placeholder="********"
																type="password"
																name={field.name}
																value={field.value}
																onChange={field.onChange}
																color={
																	form.formState.errors[field.name]
																		? 'red'
																		: 'indigo'
																}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</Flex>
									)}
									<FormField
										control={form.control}
										name="consent"
										render={({ field }) => (
											<FormItem>
												<Flex gap="2" align="center">
													<FormControl>
														<Checkbox
															checked={field.value}
															onCheckedChange={field.onChange}
														/>
													</FormControl>
													<Text as="span" size="2">
														Acepto los{' '}
														<Link href="/terminos-y-condiciones">
															términos y condiciones
														</Link>
													</Text>
												</Flex>

												<FormMessage />
											</FormItem>
										)}
									/>
									<Button type="submit" className="w-full">
										Registrarme
									</Button>
								</form>
							</Form>
						</Theme>
					</Flex>
				</Card>
			</Box>
		</>
	);
}
