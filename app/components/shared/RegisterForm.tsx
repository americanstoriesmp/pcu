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

const formSchema = z
	.object({
		username: z.string().min(2, { message: 'Mínimo 2 caracteres.' }),
		email: z.string().email({ message: 'Email inválido.' }),
		password: z.string().min(8, { message: 'Mínimo 8 caracteres.' }),
		confirmPassword: z.string(),
		consent: z.boolean().refine(val => val === true, {
			message: 'Debes aceptar los términos y condiciones.',
		}),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Las contraseñas no coinciden.',
		path: ['confirmPassword'],
	});

type RegisterFormProps = Pick<CommonComponentType, 'title'> & {
	header?: React.ReactNode;
	email?: string;
	username?: string;
	provider: 'local' | 'google';
};

export type RegisterFormSchema = z.infer<typeof formSchema>;

export default function RegisterForm({
	header,
	email,
	title,
	username,
	provider,
}: RegisterFormProps) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: username ?? '',
			email: email ?? '',
			password: '',
			confirmPassword: '',
			consent: false,
		},
	});

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
									action={`/auth/register?provider=${provider}`}
									method="post"
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
