import React from "react";
import Image from "next/image";
import about from "@/public/images/aboutUs/aboutUs.jpg";
import lamp from "@/public/images/aboutUs/lamp.svg";
import solar from "@/public/images/aboutUs/solar.svg";

function AboutUs() {
	return (
		<div className="section">
			<div className="container">
				<h2 className="subtitleAboutUs">About Us</h2>
				<div className="contentAboutUs">
					<Image src={about} alt="about Us" className="aboutUsImage" />
					<div className="rightSideAboutUs">
						<h3 className="subsubtitleAboutUs">
							We offer the best services in the field of renewable energy!
						</h3>
						<p className="descriptionAboutUs">
							We are a company that started in the early 2000s in Ukraine. At
							that time, it was difficult to buy solar panels, and they were
							very expensive. That's why we ordered the components and made the
							solar panels ourselves in our garage. As a result, we grew into a
							major company in Ukraine, but the war forced us to relocate to
							USA. Now we are starting from scratch, but with extensive
							experience under our belt.
						</p>
						<div>
							<div className="advantagesContainerAboutUs">
								<div className="advantagesAboutUs">
									<Image
										src={lamp}
										alt="lamp"
										className="advantagesAboutUsImage"
									/>
									<p className="advantagesText">High-Detail Solar Solutions</p>
								</div>
								<div className="advantagesAboutUs">
									<Image
										src={solar}
										alt="solar"
										className="advantagesAboutUsImage"
									/>
									<p className="advantagesText">
										Your Best Partner in Renewable Energy
									</p>
								</div>
							</div>

							<div className="moreAboutUsBtn">More About Us</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
