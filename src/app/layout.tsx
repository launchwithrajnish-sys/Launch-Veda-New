import type { Metadata } from "next";
import "../index.css";
import FAQSchemaDetector from "../components/FAQSchemaDetector";
import ScrollToTop from "../components/ui/ScrollToTop";

export const metadata: Metadata = {
	title: {
		default: "LaunchVeda | Turn Your Idea Into a Brand",
		template: "%s | LaunchVeda",
	},
	description:
		"LaunchVeda is India’s No.1 Product Launch Company helping founders launch Perfume, Cosmetic, Ayurveda, and Nutraceutical brands with formulation, manufacturing, branding, compliance, website, marketplace listing, and advanced growth marketing support.",
	openGraph: {
		title: "LaunchVeda | Turn Your Idea Into a Brand",
		description:
			"Launch your Perfume, Ayurveda, Cosmetic, or Nutraceutical brand with our complete ecosystem.",
		url: "https://launchveda.com",
		siteName: "LaunchVeda",
		images: [
			{
				url: "/background_image.png",
				width: 1200,
				height: 630,
				alt: "LaunchVeda Ecosystem",
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "LaunchVeda | Turn Your Idea Into a Brand",
		description:
			"Launch your Perfume, Ayurveda, Cosmetic, or Nutraceutical brand with our complete ecosystem.",
		images: ["/background_image.png"],
	},
	alternates: {
		canonical: "https://launchveda.com",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="preload"
					href="/herrrrooo.webp"
					as="image"
					type="image/webp"
					fetchPriority="high"
					media="(min-width: 640px)"
				/>
			</head>
			<body className="antialiased">
				<noscript>
					<style>{`
            * {
              opacity: 1 !important;
              visibility: visible !important;
              transform: none !important;
            }
          `}</style>
				</noscript>
				{children}

				<FAQSchemaDetector />
				<ScrollToTop />
			</body>
		</html>
	);
}
