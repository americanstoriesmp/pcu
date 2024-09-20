import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { loader } from "../_auth/route";
import * as Register from "../_auth/_components/register";

export const meta: MetaFunction = () => {
	const data = useLoaderData<typeof loader>();

	return [{ title: `Registro | ${data.appName}` }];
};

export default function RegisterPage() {
	return (
		<Register.Root
			onSubmit={(event) => {
				event.preventDefault();
			}}
		>
			<Register.EmailField>
				<Register.Label>Email</Register.Label>
				<Register.EmailInput />
			</Register.EmailField>

			<Register.PasswordField>
				<Register.Label>Password</Register.Label>
				<Register.PasswordInput />
			</Register.PasswordField>

			<Register.ConfirmPasswordField>
				<Register.Label>Confirm password</Register.Label>
				<Register.ConfirmPasswordInput />
			</Register.ConfirmPasswordField>

			<Register.Submit>Sign up</Register.Submit>
		</Register.Root>
	);
}
