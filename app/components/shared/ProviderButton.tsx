import * as React from 'react';
import { ButtonProps, Button as BaseButton } from '@radix-ui/themes';
import { cn } from '~/lib/utils';
import { Form } from '@remix-run/react';

type SocialsProvider = 'google' | 'discord';

type ProviderButtonPros = Pick<ButtonProps, 'variant' | 'size'> & {
	provider: SocialsProvider;
	className?: string;
	children: React.ReactNode;
};

const ProviderButton: React.FC<ProviderButtonPros> = ({
	variant = 'surface',
	size,
	provider,
	className,
	children,
	...props
}) => {
	return (
		<Form action={`/auth/${provider}`} className="flex-1" method="POST">
			<BaseButton
				className={cn(className)}
				variant={variant}
				size={size}
				{...props}
			>
				{children}
			</BaseButton>
		</Form>
	);
};

export default ProviderButton;
