import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Formizee Next.js",
	description: "A little example of a Next.js project with Formizee.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${spaceGrotesk.variable} flex flex-col min-h-screen bg-background text-foreground font-sans antialiased`}
			>
				<main className="flex flex-col flex-grow items-center justify-center p-8">
					<header className="flex flex-row gap-4 sm:gap-6">
						<h1 className="font-bold text-2xl sm:text-4xl">Formizee.</h1>
						<span className="font-semibold tex-2xl sm:text-4xl">+</span>
						<Image
							className="dark:invert w-28 sm:w-40"
							src="/next.svg"
							alt="Next.js logo"
							width={160}
							height={28}
							priority
						/>
					</header>
					{children}
				</main>
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
			</body>
		</html>
	);
}
