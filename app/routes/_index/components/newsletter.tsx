import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text, TextField, Button } from "@radix-ui/themes";
import { FaRegPaperPlane } from "react-icons/fa";

export default function Newsletter() {
	return (
		<>
			<Box asChild>
				<div className="p-4 sm:p-6 rounded-[40px] sm:rounded-[80px] w-full max-w-3xl">
					<Flex
						gap={{
							initial: "4",
							sm: "6",
							md: "9",
						}}
						align="center"
						direction={{
							initial: "column",
							sm: "row",
						}}
					>
						<Text
							size={{ initial: "3", sm: "4", md: "5" }}
							weight="bold"
							className="text-center sm:text-left"
						>
							Nuestro boletín
						</Text>
						<Flex
							gap="2"
							direction={{
								initial: "column",
								sm: "row",
							}}
							className="w-full sm:w-1/2 flex-1"
						>
							<TextField.Root
								placeholder="Tu correo electrónico"
								className="w-full"
							>
								<TextField.Slot>
									<EnvelopeClosedIcon />
								</TextField.Slot>
							</TextField.Root>
							<Button
								variant="solid"
								className="w-full sm:w-auto"
							>
								Suscribirse
								<FaRegPaperPlane className="ml-2" />
							</Button>
						</Flex>
					</Flex>
				</div>
			</Box>
		</>
	);
}
