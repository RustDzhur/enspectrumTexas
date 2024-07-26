import React from "react";
import howItWorks from "@/public/images/howItWorks/process.png"
import Image from "next/image";

function HowItWorks() {
	return (
		<div className="section">
			<div className="container">
				<h2 className="howItWorksTitle">How It Works</h2>
                <Image src={howItWorks} alt="how it works" className="howItWorksImage"/>

			</div>
		</div>
	);
}

export default HowItWorks;
