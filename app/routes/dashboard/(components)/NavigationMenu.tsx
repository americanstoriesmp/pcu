import { useState, useEffect } from 'react';
import { Box } from '@radix-ui/themes';
import { CommonComponentType } from '~/lib/common/types';
import NavigationItem from './NavigationItem';
import HomeIcon from './icons/Home';
import CertificationsIcon from './icons/Certifications';
import PeopleIcon from './icons/People';
import Clock from './icons/Clock';
import Add from './icons/Add';
import Wrench from './icons/Wrench';
import Bank from './icons/Bank';

/**
 * NavigationMenu component is a shared component that displays a navigation menu.
 *
 * @returns
 */
export default function NavigationMenu() {
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	const items: Array<Pick<CommonComponentType, 'title' | 'href' | 'icon'>> = [
		{
			title: 'Dashboard',
			href: '/dashboard',
			icon: <HomeIcon />,
		},
		{
			title: 'Certificaciones',
			href: '/console/certifications',
			icon: <CertificationsIcon />,
		},
		{
			title: 'Personajes',
			href: '/console/characters',
			icon: <PeopleIcon />,
		},
		{
			title: 'Historial',
			href: '/console/history',
			icon: <Clock />,
		},
	];

	const privilededItems: Array<
		Pick<CommonComponentType, 'title' | 'href' | 'icon'>
	> = [
		{
			title: 'Admin',
			href: '/console/admin',
			icon: <Wrench />,
		},
		{
			title: 'Moderación',
			href: '/console/moderation',
			icon: <Bank />,
		},
		{
			title: 'Crear',
			href: '/console/create',
			icon: <Add />,
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="flex flex-col mx-auto items-center py-2 px-0.5 h-full">
			<Box className="h-20 items-center justify-center flex w-full font-anton">
				<p>{currentDateTime.toLocaleString()}</p>
			</Box>
			<Box className="flex flex-col flex-1 w-full mt-2 p-2 border-b border-blue-6">
				<Box className="pb-4">
					{items.map((item, index) => (
						<>
							<NavigationItem
								icon={item.icon}
								title={item.title}
								href={item.href}
							/>
						</>
					))}
				</Box>
				<Box className="pt-4 border-t border-blue-6">
					{privilededItems.map((item, index) => (
						<>
							<NavigationItem
								icon={item.icon}
								title={item.title}
								href={item.href}
							/>
						</>
					))}
				</Box>
			</Box>
			<Box className="flex h-20 items-center justify-center p-2">ALO</Box>
		</section>
	);
}
