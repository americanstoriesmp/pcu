import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { loader } from "../_auth/route";
import {
	Box,
	Button,
	Card,
	Flex,
	Grid,
	Separator,
	Switch,
	Text,
	TextArea,
	Theme,
} from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { FaGoogle } from "react-icons/fa";
import { TextSeparator } from "~/components/shared/LineSeparator";

export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [{ title: `Registro | ${data.appName}` }];
};

export default function RegisterPage() {
	return (
		<Box maxWidth="600px" className="">
			<Card size="5" className="p-4">
				<Flex direction="column" gap="2" py="3" px="2">
					<Text as="div" weight="bold" size="6" align="center">
						Registro de cuenta
					</Text>
					<Grid gap="1">
						<Text as="span" weight="light" size="2" align="center">
							Empieza con tu cuenta de Google
						</Text>
						<Button variant="surface">
							<FaGoogle /> Google
						</Button>
					</Grid>
					<TextSeparator text="O regístrate con tu e-mail" />
				</Flex>
			</Card>
		</Box>
	);
}
