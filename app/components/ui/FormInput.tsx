import * as Form from "@radix-ui/react-form";
import { Checkbox, Text, TextField } from "@radix-ui/themes";

interface FormFieldProps {
	name: string;
	label: string;
	type: string;
	placeholder: string;
	required?: boolean;
}

const FormField = ({
	name,
	label,
	type,
	placeholder,
	required = false,
}: FormFieldProps) => (
	<Form.Field name={name}>
		<div className={type === "checkbox" ? "flex items-center gap-2" : ""}>
			{type === "checkbox" && (
				<Form.Control required={required} type={type} asChild>
					<Checkbox />
				</Form.Control>
			)}
			<Form.Label asChild>
				<Text weight="medium">
					{label}
					{required && <span className="text-red-500 ml-1">*</span>}
				</Text>
			</Form.Label>
		</div>
		{type !== "checkbox" && (
			<Form.Control asChild type={type} required={required}>
				<TextField.Root placeholder={placeholder} />
			</Form.Control>
		)}
		<Form.Message match="valueMissing" style={{ color: "red" }} asChild>
			<Text size="2">El campo {label.toLowerCase()} es requerido</Text>
		</Form.Message>
		<Form.Message match="typeMismatch" style={{ color: "red" }} asChild>
			<Text size="1">
				Proporcione un valor válido para {label.toLowerCase()}
			</Text>
		</Form.Message>
	</Form.Field>
);

export default FormField;
