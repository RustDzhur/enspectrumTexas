import React from "react";
import Accordion from "./Accordion";

const faqData = [
	{
		question: "What is the cost of installation?",
		answer:
			"The cost of installation varies depending on the size of the system and specific requirements of your home. On average, homeowners can expect to invest between $10,000 and $30,000 before any tax credits or incentives. We offer free consultations to provide a customized quote based on your energy needs and home specifications.",
	},
	{
		question: "How long does the installation take?",
		answer:
			"The installation process typically takes 1 to 3 days, depending on the complexity and size of the system. However, the overall timeline from consultation to having your system fully operational can be 2 to 6 weeks, accounting for design, permitting, and scheduling.",
	},
	{
		question: "What is the warranty on the equipment?",
		answer:
			"We provide a comprehensive warranty that includes a 25-year performance warranty on solar panels and a 10-year warranty on inverters and other system components. Additionally, we offer a 10-year workmanship warranty to ensure your installation is free from defects.",
	},
	{
		question: "Can solar panels be installed on any house?",
		answer:
			"Solar panels can be installed on most houses, but certain factors such as roof condition, orientation, shading, and structural integrity need to be considered. During our free consultation, we conduct a thorough assessment to determine the suitability of your home for solar installation and recommend the best solution tailored to your specific needs.",
	},
	{
		question: "How do solar panels affect my roof?",
		answer:
			"Solar panels actually protect and preserve the portion of the roof they cover by shielding it from the elements. Our professional installation ensures that panels are securely attached without damaging your roof. We also conduct a thorough roof inspection before installation to ensure it’s in good condition.",
	},
	{
		question:
			"What happens if my solar panels produce more electricity than I use?",
		answer:
			"If your solar panels generate more electricity than you consume, the excess power is typically sent back to the grid, and you may receive credits from your utility company through a process called net metering. This can help offset your electricity costs during times when your system is producing less power, like at night or on cloudy days.",
	},
	{
		question: "Do solar panels work in cloudy or rainy weather?",
		answer:
			"Yes, solar panels can still generate electricity during cloudy or rainy weather, although their efficiency is reduced compared to sunny days. Modern solar panels are designed to work efficiently in a variety of weather conditions, ensuring you continue to benefit from solar energy year-round.",
	},
	// Add more FAQs as needed
];

function Fqa() {
	return (
		<div className="section">
			<div className="container">
				<h2 className="fqaTitle">Frequently Asked Questions</h2>
				{faqData.map((faq, index) => (
					<div key={index}>
						<Accordion question={faq.question} answer={faq.answer} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Fqa;
