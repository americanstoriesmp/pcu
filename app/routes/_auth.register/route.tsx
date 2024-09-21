import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { loader } from "../_auth/route";
import { Box, Button, Card, Flex, Grid, Text } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import { TextSeparator } from "~/components/shared/LineSeparator";
import FormField from "~/components/ui/FormInput";
import React from "react";

export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [{ title: `Registro | ${data.appName}` }];
};

export default function RegisterPage() {
	const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);

	const handleTermsChange = (checked: boolean) => {
		setTermsAccepted(checked);
	};

	return (
		<Box maxWidth="600px" className="">
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

					<Form.Root
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<Grid columns="1" gapY="2">
							<Grid
								columns={{
									initial: "1",
									md: "2",
								}}
								gap="2"
							>
								<FormField
									name="email"
									label="Correo electrónico"
									type="email"
									placeholder="Correo electrónico"
									required
								/>
								<FormField
									name="username"
									label="Nombre de usuario"
									type="text"
									placeholder="Nombre de usuario"
									required
								/>
							</Grid>
							<Grid
								columns={{
									initial: "1",
									md: "2",
								}}
								gap="2"
							>
								<FormField
									name="password"
									label="Contraseña"
									type="password"
									placeholder="Contraseña"
									required
								/>
								<FormField
									name="password_confirmation"
									label="Confirmar contraseña"
									type="password"
									placeholder="Confirmar contraseña"
									required
								/>
							</Grid>
							<FormField
								name="terms"
								label="Acepto los términos y condiciones"
								type="checkbox"
								placeholder="Acepto los términos y condiciones"
								required
							/>
							<Form.Submit asChild>
								<Button type="submit">Registrarme</Button>
							</Form.Submit>
						</Grid>
					</Form.Root>
				</Flex>
			</Card>
		</Box>
	);
}
