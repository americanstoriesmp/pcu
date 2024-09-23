import React from "react";
import bgOrigin from "/cubes-origin.png?url";
import bgReplace from "/cubes-replace.png?url";

export default function ComposedGrids() {
	const [hovered, setHovered] = React.useState(false);

	React.useEffect(() => {
		// interact with the grid and set opacity to 1 when hovered
		const grid = document.querySelector(".grid");
		const gridItems = document.querySelectorAll(".grid > div > span");
		gridItems.forEach((item) => {
			const spanItem = item as HTMLElement;
			spanItem.addEventListener("mouseover", () => {
				spanItem.style.opacity = "1";
			});
			spanItem.addEventListener("mouseleave", () => {
				spanItem.style.opacity = "0";
			});
		});
	}, []);
	return (
		<>
			<div className="relative mr-[0.313rem] hidden h-[14.595rem] min-w-[25.625rem] max-w-[25.625rem] md:flex lg:aspect-video lg:h-auto lg:min-w-[31.625rem] lg:max-w-[31.625rem] xl:min-w-[41.625rem] xl:max-w-[41.625rem] bounds:mr-3 bounds:min-w-[47.625rem] bounds:max-w-[47.625rem] boundsXS:min-w-[62.75rem] boundsXS:max-w-[62.75rem]">
				<div
					className="grid size-full"
					style={{
						gridTemplateColumns: "repeat(7, 1fr)",
						gridTemplateRows: "repeat(4, 25%)",
					}}
				>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "0% 0%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "0% 0%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "16.666666666666668% 0%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "16.6667% 0%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "33.3333% 0%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "33.3333% 0%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "50% 0%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "50% 0%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "66.66666666666667% 0%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "66.6667% 0%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "83.3333% 0%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "83.3333% 0%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "100% 0%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "100% 0%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "0% 33.333333333333336%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "0% 33.3333%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition:
									"16.666666666666668% 33.333333333333336%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "16.6667% 33.3333%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "33.3333% 33.3333%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "33.3333% 33.3333%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "50% 33.3333%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "50% 33.3333%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition:
									"66.66666666666667% 33.3333%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "66.6667% 33.3333%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "83.3333% 33.3333%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "83.3333% 33.3333%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "100% 33.3333%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "100% 33.3333%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "0% 66.66666666666667%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "0% 66.6667%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition:
									"16.666666666666668% 66.66666666666667%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition:
									"16.666666666666668% 66.66666666666667%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition:
									"33.333333333333336% 66.66666666666667%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "33.3333% 66.6667%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "50% 66.66666666666667%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "50% 66.6667%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition:
									"66.66666666666667% 66.66666666666667%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "66.6667% 66.6667%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "83.3333% 66.6667%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "83.3333% 66.6667%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "100% 66.6667%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "100% 66.6667%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "0% 100%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "0% 100%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "16.666666666666668% 100%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "16.6667% 100%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "33.3333% 100%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "33.3333% 100%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "50% 100%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "50% 100%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "66.66666666666667% 100%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "66.6667% 100%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "83.3333% 100%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "83.3333% 100%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
					<div className="relative size-full">
						<div
							className="size-full"
							style={{
								backgroundImage: `url(${bgOrigin})`,
								backgroundPosition: "100% 100%",
								backgroundSize: "700% 400%",
							}}
						></div>
						<span
							className="absolute left-0 top-0 size-full transition-opacity ease-linear duration-[1s]"
							style={{
								backgroundImage: `url(${bgReplace})`,
								backgroundPosition: "100% 100%",
								backgroundSize: "700% 400%",
								opacity: 0,
							}}
						></span>
					</div>
				</div>
			</div>
		</>
	);
}
