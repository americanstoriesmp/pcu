import { Flex, Text } from '@radix-ui/themes';
import { Link } from '@remix-run/react';
import { CommonComponentType } from '~/lib/common/types';

type MenuItemProps = Pick<CommonComponentType, 'title' | 'icon' | 'href'>;

/**
 * MenuItem component is a shared component that displays a menu item with an icon and text.
 *
 * @param icon
 * @param text
 * @param href
 * @returns
 */
export default function MenuItem({ icon, title, href }: MenuItemProps) {
	return (
		<Flex
			gap="2"
			align="center"
			className="font-archivo p-6 relative select-none text-lg font-bold"
		>
			<div className="absolute inset-0  hover:-skew-x-12 hover:bg-[var(--indigo-6)]"></div>
			{icon && <div className="relative z-10">{icon}</div>}
			<Text className="relative hover:text-[var(--indigo-11)]">
				<Link to={href}>{title}</Link>
			</Text>
		</Flex>
	);
}
