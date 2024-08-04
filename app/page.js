import AboutUs from "@/components/aboutUs/AboutUs";
import Fqa from "@/components/faq/Fqa";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import OurSuccessfulProjects from "@/components/ourSuccessfulProjects/OurSuccessfulProjects";
import Services from "@/components/services/Services";
import WhySolar from "@/components/whySolar/WhySolar";

export default function Home() {
	return (
		<main>
			<Hero />
			<WhySolar/>
			<AboutUs/>
			<Services/>
			<HowItWorks/>
			<OurSuccessfulProjects/>
			<Fqa/>
		</main>
	);
}
