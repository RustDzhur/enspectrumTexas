import "./styles/globals.css";
import "./styles/hero.css";
import "./styles/burger.css";
import "./styles/whySolar.css";
import "./styles/aboutUs.css";
import "./styles/services.css";
import "./styles/howItWorks.css";
import "./styles/ourSuccessfullProjects.css";


export const metadata = {
	title: "Enspectrum LLC",
	description:
		"Enspectrum LLC specializes in residential solar panel installations, providing customized solar solutions, professional installation, and ongoing maintenance to help homeowners reduce energy costs and embrace sustainable living.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
