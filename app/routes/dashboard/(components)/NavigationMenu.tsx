import { useState, useEffect } from 'react';
import { Box } from '@radix-ui/themes';
import { CommonComponentType } from '~/lib/common/types';
import NavigationItem from './NavigationItem';
import HomeIcon from './icons/Home';
import CertificationsIcon from './icons/Certifications';
import PeopleIcon from './icons/People';
import Clock from './icons/Clock';

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
			title: 'Administración',
			href: '/console/admin',
			icon: <PeopleIcon />,
		},
		{
			title: 'Historial',
			href: '/console/history',
			icon: <Clock />,
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
			<Box className="flex flex-col flex-1 w-full mt-2 p-2 border-b border-zinc-700">
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
			<Box className="flex h-20 items-center justify-center p-2">ALO</Box>
		</section>
	);
}
