import { Flex, Text } from '@radix-ui/themes';
import MenuItem from '../shared/MenuItem';

interface MenuItemInfo {
	text: string;
	href: string;
}

interface MenuHeaderProps {
	title: string;
	childs: Array<MenuItemInfo>;
}

export default function MenuHeader({ title, childs }: MenuHeaderProps) {
	return (
		<>
			<header className="sticky top-0 z-50 shadow-lg bg-[#21222c] bg-opacity-20">
				<nav className="max-w-screen-xl flex flex-row mx-auto justify-between items-center px-8">
					<Text className="text-2xl font-bold font-archivo-expanded">
						{title}
					</Text>
					<Flex>
						{childs.map((child, index) => (
							<MenuItem key={index} text={child.text} href={child.href} />
						))}
					</Flex>
				</nav>
			</header>
		</>
	);
}
