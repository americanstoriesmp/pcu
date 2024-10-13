import { Flex, Text } from '@radix-ui/themes';
import { cn } from '~/lib/utils';

interface StatItemProps {
	title: string;
	value: number;
	extraClasses?: string;
}

export default function StatItem({
	title,
	value,
	extraClasses,
}: StatItemProps) {
	return (
		<Flex direction="column" className={cn(extraClasses)}>
			<Text
				className="text-center"
				color="indigo"
				size={{
					initial: '6',
					sm: '7',
					md: '9',
				}}
				weight={{
					initial: 'bold',
				}}
			>
				{value}
			</Text>
			<Text
				className="text-center"
				size={{
					initial: '3',
					sm: '4',
					md: '4',
				}}
			>
				{title}
			</Text>
		</Flex>
	);
}
