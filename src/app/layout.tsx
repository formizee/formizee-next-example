import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
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
				className={`${inter.variable} ${spaceGrotesk.variable} items-center justify-center flex flex-col min-h-screen bg-white text-black font-sans antialiased`}
			>
				<Header />
				<main className="flex flex-col w-full max-w-96 sm:max-w-[420px] items-center justify-center p-4">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
