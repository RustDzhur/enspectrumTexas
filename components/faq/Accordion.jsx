"use client";

import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="accordion-item">
			<button
				className={`accordion-button ${isOpen ? "active" : ""}`}
				onClick={toggleAccordion}>
				{question}
			</button>
			<div className={`accordion-content ${isOpen ? "show" : ""}`}>
				{answer}
			</div>
		</div>
	);
};

export default Accordion;
