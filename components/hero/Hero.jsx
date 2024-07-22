import React from "react";
import logo from "@/public/images/logo/logo.png";
import profit from "@/public/images/icons/profit.png";
import environmentalism from "@/public/images/icons/environmentalism.png";
import renewableEnergy from "@/public/images/icons/renewable-energy.png";
import saving from "@/public/images/icons/saving.png";
import Image from "next/image";
import Link from "next/link";

const links = [
	{ name: "Main", link: "/" },
	{ name: "About Us", link: "/about" },
	{ name: "Services", link: "/services" },
	{ name: "Projects", link: "/projects" },
	{ name: "News", link: "/news" },
	{ name: "Contact", link: "/contact" },
];

function Hero() {
	return (
		<>
			<div className="bg">
				<div className="container">
					<div className="navigation">
						<Image src={logo} alt="logo" className="logo" />
						<div className="linksContainer">
							{links.map((item, index) => (
								<Link href={item.link} key={index} className="link">
									{item.name}
								</Link>
							))}
						</div>
						<div>
							<Link href="/quote" className="quoteBtn">
								FREE QUOTE
							</Link>
						</div>
					</div>
					<h1 className="title">
						Solar Energy: Your Contribution to Ecology and Cost Savings
					</h1>
					<h2 className="subtitle">
						Save on energy bills and contribute to a greener planet.
					</h2>
					<div className="heroBtns">
						<div className="quoteBtn">Get Your Free Solar Quote Today</div>
						<div className="quoteBtn">See How Much You Can Save</div>
					</div>
					<h3 className="subsubtitle">
						Reduce your energy bills by up to 70% with solar power. Invest in
						renewable energy and increase your home value.
					</h3>
					<div className="advantagesContainer">
						<Image src={profit} alt="profit" className="advantagesIcon" />
						<Image
							src={environmentalism}
							alt="environmentalism"
							className="advantagesIcon"
						/>
						<Image
							src={renewableEnergy}
							alt="renewableEnergy"
							className="advantagesIcon"
						/>
						<Image src={saving} alt="saving" className="advantagesIcon" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
