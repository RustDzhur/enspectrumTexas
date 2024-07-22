import React from "react";
import logo from "@/public/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "../burgerMenu/BurgerMenu";

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

						<div className="burgerStyles">
							<BurgerMenu />
							<Link href="/quote" className="quoteBtn">
								FREE QUOTE
							</Link>
						</div>
					</div>
					<div className="heroContent">
						<div className="heroLeftBlock">
							<h1 className="title">
								Solar Energy: Your Contribution to Ecology and Cost Savings
							</h1>
						</div>

						<div className="heroRightBlock">
							<h2 className="subtitle">
								Save on energy bills and contribute to a greener planet.
							</h2>
							<div className="heroBtns">
								<div className="quoteBtnHero">
								Get Free Quote
								</div>
								<div className="quoteBtnHero">See Savings</div>
							</div>
							<h3 className="subsubtitle">
								Reduce your energy bills by up to 70% with solar power. Invest
								in renewable energy and increase your home value.
							</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
