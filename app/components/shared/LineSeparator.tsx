import { Flex, Separator, Text } from '@radix-ui/themes';
import { CommonComponentType } from '~/lib/common/types';

type TextSeparatorProps = Pick<CommonComponentType, 'title'>;
/**
 * TextSeparator component is a shared component that displays a text in the middle of two horizontal separators.
 *
 * @param text
 * @returns
 */
export const TextSeparator = ({ title }: TextSeparatorProps) => {
	return (
		<>
			<Flex justify="center" align="center" gapX="1">
				<Separator orientation="horizontal" style={{ flexGrow: 1 }} />
				<Text as="span" size="2" color="gray">
					{title}
				</Text>
				<Separator orientation="horizontal" style={{ flexGrow: 1 }} />
			</Flex>
		</>
	);
};
