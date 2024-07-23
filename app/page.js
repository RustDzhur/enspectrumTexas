import AboutUs from "@/components/aboutUs/AboutUs";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import WhySolar from "@/components/whySolar/WhySolar";

export default function Home() {
	return (
		<main>
			<Hero />
			<WhySolar/>
			<AboutUs/>
			<Services/>
		</main>
	);
}
