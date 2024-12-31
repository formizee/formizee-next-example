import Image from "next/image";

export const Header = () => (
	<header className="flex flex-row gap-4">
		<h1 className="font-semibold text-3xl">Formizee.</h1>
		<span className="font-medium text-2xl">+</span>
		<Image
			className="w-28"
			src="/next.svg"
			alt="Next.js logo"
			width={160}
			height={28}
			priority
		/>
	</header>
);
