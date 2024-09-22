import { Flex, Separator, Text } from "@radix-ui/themes";

export const TextSeparator = ({ text }: { text: string }) => {
	return (
		<>
			<Flex justify="center" align="center" gapX="1">
				<Separator orientation="horizontal" style={{ flexGrow: 1 }} />
				<Text as="span" size="2" color="gray">
					{text}
				</Text>
				<Separator orientation="horizontal" style={{ flexGrow: 1 }} />
			</Flex>
		</>
	);
};
