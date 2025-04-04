import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MemorUs",
  description: "MemorUs: Capture. Share. Remember",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
				suppressHydrationWarning>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{/* <SessionProvider session={}> */}
						<Navbar />
						{children}
					{/* </SessionProvider> */}
				</ThemeProvider>
			</body>
		</html>
	)
}
