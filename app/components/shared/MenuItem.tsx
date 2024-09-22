import { Flex, Text } from "@radix-ui/themes";
import { Link } from "@remix-run/react";

interface MenuItemProps {
	icon?: React.ReactNode;
	text: string;
	href: string;
}

export default function MenuItem({ icon, text, href }: MenuItemProps) {
	return (
		<Flex
			gap="2"
			align="center"
			className="font-medium hover:text-[var(--indigo-11)] hover:font-bold"
		>
			{icon && icon}
			<Text>
				<Link to={href}>{text}</Link>
			</Text>
		</Flex>
	);
}
