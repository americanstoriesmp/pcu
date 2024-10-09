import { useLoaderData } from '@remix-run/react';
import { loader } from '../route';

export default function NewAccount() {
	const { profile, storedInDatabase } = useLoaderData<
		typeof loader
	>() as CreatedSession;
	return (
		<>
			<section
				className="fixed w-full top-0 left-0 right-0 bottom-0 h-full z-[9999]"
				style={{
					background:
						'radial-gradient(80.56% 128.89% at 50% 0,#334155 0,#1e293b 100%)',
					opacity: 0.98,
				}}
			>
				<span>This is a test.</span>
			</section>
		</>
	);
}
