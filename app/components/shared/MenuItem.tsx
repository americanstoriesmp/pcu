import { Flex, Text } from '@radix-ui/themes';
import { Link } from '@remix-run/react';

interface MenuItemProps {
	icon?: React.ReactNode;
	text: string;
	href: string;
}

/**
 * MenuItem component is a shared component that displays a menu item with an icon and text.
 *
 * @param icon
 * @param text
 * @param href
 * @returns
 */
export default function MenuItem({ icon, text, href }: MenuItemProps) {
	return (
		<Flex
			gap="2"
			align="center"
			className="font-archivo p-6 relative select-none text-lg font-bold"
		>
			<div className="absolute inset-0  hover:-skew-x-12 hover:bg-[var(--indigo-6)]"></div>
			{icon && <div className="relative z-10">{icon}</div>}
			<Text className="relative hover:text-[var(--indigo-11)]">
				<Link to={href}>{text}</Link>
			</Text>
		</Flex>
	);
}
