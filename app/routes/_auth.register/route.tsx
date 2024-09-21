import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { loader } from "../_auth/route";
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
} from "@radix-ui/themes";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import { TextSeparator } from "~/components/shared/LineSeparator";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const formSchema = z
	.object({
		username: z.string().min(2, { message: "Mínimo 2 caracteres." }),
		email: z.string().email({ message: "Email inválido." }),
		password: z.string().min(8, { message: "Mínimo 8 caracteres." }),
		password_confirmation: z.string(),
		consent: z.boolean().refine((val) => val === true, {
			message: "Debes aceptar los términos y condiciones.",
		}),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: "Las contraseñas no coinciden.",
		path: ["password_confirmation"],
	});
export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [{ title: `Registro | ${data.appName}` }];
};

export default function RegisterPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			consent: false,
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Box maxWidth="600px" className="font-archivo">
			<Card size="5" className="p-4">
				<Flex direction="column" gap="2" py="3" px="2">
					<Text as="div" weight="bold" size="6" align="center">
						Registra una nueva cuenta
					</Text>
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
					<TextSeparator text="O regístrate con tu e-mail" />

					<Theme panelBackground="solid">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-3"
							>
								<Flex gap="2">
									<FormField
										control={form.control}
										name="username"
										render={({ field }) => (
											<FormItem>
												<FormLabel asChild>
													<Text>
														Nombre de usuario
													</Text>
												</FormLabel>
												<FormControl>
													<TextField.Root
														placeholder="Trevor"
														name={field.name}
														value={field.value}
														onChange={
															field.onChange
														}
														color={
															form.formState
																.errors[
																field.name
															]
																? "red"
																: "indigo"
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
											<FormItem>
												<FormLabel asChild>
													<Text>
														Correo electrónico
													</Text>
												</FormLabel>
												<FormControl>
													<TextField.Root
														placeholder="trevor@faceinvader.net"
														name={field.name}
														value={field.value}
														onChange={
															field.onChange
														}
														color={
															form.formState
																.errors[
																field.name
															]
																? "red"
																: "indigo"
														}
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
														onChange={
															field.onChange
														}
														color={
															form.formState
																.errors[
																field.name
															]
																? "red"
																: "indigo"
														}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password_confirmation"
										render={({ field }) => (
											<FormItem>
												<FormLabel asChild>
													<Text>
														Confirmar contraseña
													</Text>
												</FormLabel>
												<FormControl>
													<TextField.Root
														placeholder="********"
														type="password"
														name={field.name}
														value={field.value}
														onChange={
															field.onChange
														}
														color={
															form.formState
																.errors[
																field.name
															]
																? "red"
																: "indigo"
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
														onCheckedChange={
															field.onChange
														}
													/>
												</FormControl>
												<Text as="span" size="2">
													Acepto los{" "}
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
	);
}
