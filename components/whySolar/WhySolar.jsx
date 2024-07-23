import React from "react";
import Image from "next/image";
import chart from "@/public/images/icons/whySolar/chart-upward.svg";
import eco from "@/public/images/icons/whySolar/eco-friendly.svg";
import electro from "@/public/images/icons/whySolar/electricity.svg";
import light from "@/public/images/icons/whySolar/light-bulb.svg";

function WhySolar() {
	return (
		<div className="section">
			<div className="container">
				<h2 className="subtitleWhySolar">Why Choose Solar Energy?</h2>
				<div className="iconsCards">
					<div className="card">
						<Image src={chart} alt="chart" className="icon" />
						Increase property value
					</div>
					<div className="card">
						<Image src={eco} alt="eco" className="icon" />
						Eco-friendly and reduce carbon footprint
					</div>
					<div className="card">
						<Image src={electro} alt="electro" className="icon" />
						Save on electricity bills
					</div>
					<div className="card">
						<Image src={light} alt="light" className="icon" />
						Independence from energy companies
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhySolar;
