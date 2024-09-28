import { Flex, Text } from '@radix-ui/themes';

interface StatItemProps {
	title: string;
	value: number;
}

export default function StatItem({ title, value }: StatItemProps) {
	return (
		<Flex direction="column">
			<Text
				className="text-center"
				color="indigo"
				size={{
					initial: '6',
					sm: '7',
					md: '9',
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
