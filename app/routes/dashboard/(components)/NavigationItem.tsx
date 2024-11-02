import { Box, Text } from '@radix-ui/themes';
import { CommonComponentType } from '~/lib/common/types';

type NavigationItemProps = Pick<CommonComponentType, 'title' | 'href' | 'icon'>;

export default function NavigationItem({
	title,
	href,
	icon,
}: NavigationItemProps) {
	return (
		<>
			<Box className="flex p-2 items-center text-start mt-1 rounded-lg gap-x-4 hover:bg-blue-9 hover:text-blue-12 hover:cursor-pointer">
				<Box className="w-6 justify-center flex">{icon}</Box>
				<Text size="3" className="flex-1" weight="medium">
					{title}
				</Text>
			</Box>
		</>
	);
}
