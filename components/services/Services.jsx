import Image from "next/image";
import React from "react";
import consult from "@/public/images/services/consult.svg";
import repair from "@/public/images/services/repair.svg";
import solarpanel from "@/public/images/services/solarpanel.svg";
import warranty from "@/public/images/services/warranty.svg";

function Services() {
	return (
		<div className="section">
			<div className="container">
				<h2 className="servicesTitle">Our Services</h2>
				<div className="iconsCards">
					<div className="card">
						<Image src={solarpanel} alt="chart" className="icon" />
						<h3 className="servicesSubTitle">Solar panel installation</h3>
						<p className="servicesDescription">
							Professional Solar Panel Installation: Our experienced technicians
							will handle the entire installation process from start to finish.
							We use high-quality materials and the latest technology to ensure
							your solar system is efficient and durable. Our team will install
							the panels with minimal disruption to your home, ensuring a clean
							and seamless setup.
						</p>
					</div>
					<div className="card">
						<Image src={repair} alt="eco" className="icon" />
						<h3 className="servicesSubTitle">Maintenance and support</h3>
						<p className="servicesDescription">
							Comprehensive Maintenance and Support: We offer ongoing
							maintenance and support to keep your solar system running at peak
							performance. Our services include regular inspections, cleaning,
							and repairs. You can count on us for prompt assistance whenever
							you need it, ensuring your investment continues to deliver maximum
							savings.
						</p>
					</div>
					<div className="card">
						<Image src={consult} alt="electro" className="icon" />
						<h3 className="servicesSubTitle">Consultations and savings calculations</h3>
						<p className="servicesDescription">
							Expert Consultations and Savings Calculations: Our specialists
							provide personalized consultations to help you understand the
							benefits of solar energy for your home. We'll perform a detailed
							analysis of your energy usage and calculate potential savings. Our
							goal is to give you a clear picture of how much you can save by
							switching to solar power.
						</p>
					</div>
					<div className="card">
						<Image src={warranty} alt="light" className="icon" />
						<h3 className="servicesSubTitle">Warranty and service</h3>
						<p className="servicesDescription">
							Reliable Warranty and Service: We stand behind the quality of our
							installations with comprehensive warranties. Our warranties cover
							both the solar panels and the installation work, giving you peace
							of mind. Additionally, our customer service team is available 24/7
							to address any questions or concerns you may have, ensuring you
							receive the best possible support.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
