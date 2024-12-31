import Image from "next/image";

export const Footer = () => (
	<footer className="flex flex-col items-start sm:items-center justify-center p-8">
		<div className="flex flex-col sm:flex-row gap-6">
			<a
				className="flex font-secondary items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://docs.formizee.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/file.svg"
					alt="File icon"
					width={16}
					height={16}
				/>
				Learn
			</a>
			<a
				className="flex font-secondary items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://docs.formizee.com/docs/quickstart"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/window.svg"
					alt="Window icon"
					width={16}
					height={16}
				/>
				Examples
			</a>
			<a
				className="flex font-secondary items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://formizee.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					aria-hidden
					src="/globe.svg"
					alt="Globe icon"
					width={16}
					height={16}
				/>
				formizee.com
			</a>
		</div>
	</footer>
);
