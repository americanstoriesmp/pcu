import { Card, Flex, Link, Text } from '@radix-ui/themes';

interface StepCardProps {
	title: string;
	imageSrc: string;
	footer: React.ReactNode;
}

export default function StepCard({ title, imageSrc, footer }: StepCardProps) {
	return (
		<>
			<Card className="w-full xl:w-96 h-96 border-2 border-[#21222c] rounded-xl flex flex-col justify-between p-5 how-to-play-step-1-bg hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
				<Flex direction="column" gap="4" justify="between" className="h-full">
					<Flex justify="between" align="start">
						<Text size="2" weight="bold" color="gray">
							{title}
						</Text>
						<img src={imageSrc} className="w-14" />
					</Flex>
					{footer}
				</Flex>
			</Card>
		</>
	);
}
