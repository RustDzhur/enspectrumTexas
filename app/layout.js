import Head from "next/head";
import "./styles/globals.css";
import "./styles/hero.css";
import "./styles/burger.css";
import "./styles/whySolar.css";
import "./styles/aboutUs.css";
import "./styles/services.css";
import "./styles/howItWorks.css";
import "./styles/ourSuccessfullProjects.css";
import "./styles/projectsSlider.css";
import "./styles/fqa.css";
import "./styles/accordion.css";

export const metadata = {
	title: "Enspectrum LLC",
	description:
		"Enspectrum LLC specializes in residential solar panel installations, providing customized solar solutions, professional installation, and ongoing maintenance to help homeowners reduce energy costs and embrace sustainable living.",
	icons: [
		{
			rel: "icon",
			type: "image/x-icon",
			url: "/favicon.ico",
			media: "(prefers-color-scheme: light)",
		},
		{
			rel: "icon",
			type: "image/svg",
			url: "/favicon-dark.svg",
			media: "(prefers-color-scheme: dark)",
		},
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<link rel="icon" href="/favicon.ico" sizes="any"/>
				<link rel="icon" href="/favicon-dark.svg" type="image/svg+xml"/>
			</Head>
			<body>{children}</body>
		</html>
	);
}
