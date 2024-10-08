import { Flex, Separator, Text } from '@radix-ui/themes';

/**
 * TextSeparator component is a shared component that displays a text in the middle of two horizontal separators.
 *
 * @param text
 * @returns
 */
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
