import { Flex, Text } from '@radix-ui/themes';
import MenuItem from '../shared/MenuItem';
import { useLocation } from 'react-router-dom';
import { CommonComponentType } from '~/lib/common/types';

interface MenuItemInfo {
	href: string;
}

type MenuHeaderProps = Pick<CommonComponentType, 'title'> & {
	childs: Array<Pick<CommonComponentType, 'title'> & MenuItemInfo>;
};

/**
 * MenuHeader component is a shared component that displays a menu header with menu items.
 *
 * @param title
 * @param childs
 * @returns
 */
export default function MenuHeader({ title, childs }: MenuHeaderProps) {
	const location = useLocation();
	const hiddenRoutes = ['/register', '/login']; // register routes where the component should be hidden.

	if (hiddenRoutes.includes(location.pathname)) {
		return null; // returns null if route mathces hiddenRoutes. This will hide the component.
	}
	return (
		<>
			<header className="sticky top-0 z-50 shadow-lg bg-[#21222c]">
				<nav className="max-w-screen-xl flex flex-row mx-auto justify-between items-center px-8">
					<Text className="text-2xl font-bold font-archivo-expanded">
						{title}
					</Text>
					<Flex>
						{childs.map((child, index) => (
							<MenuItem key={index} text={child.title} href={child.href} />
						))}
					</Flex>
				</nav>
			</header>
		</>
	);
}
