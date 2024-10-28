import { Box, Card, Text } from '@radix-ui/themes';
import { CommonComponentType } from '~/lib/common/types';

type NavigationItemProps = Pick<CommonComponentType, 'title' | 'href' | 'icon'>;

export default function NavigationItem({
	title,
	href,
	icon,
}: NavigationItemProps) {
	return (
		<>
			<Box className="flex p-2 items-center w-full mt-1 rounded-lg gap-x-4 hover:bg-indigo-800 hover:text-indigo-200">
				<Box asChild>{icon}</Box>
				<Text size="2" className="flex-1" weight="medium">
					{title}
				</Text>
			</Box>
		</>
	);
}
