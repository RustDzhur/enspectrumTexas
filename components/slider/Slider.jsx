"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import one from "@/public/images/projects/one.jpg";
import two from "@/public/images/projects/two.jpg";
import three from "@/public/images/projects/three.jpg";
import four from "@/public/images/projects/four.jpg";
import five from "@/public/images/projects/five.jpg";
import six from "@/public/images/projects/six.jpg";
import seven from "@/public/images/projects/seven.jpg";
import eight from "@/public/images/projects/eight.jpg";
import nine from "@/public/images/projects/nine.jpg";
import ten from "@/public/images/projects/ten.jpg";
import eleven from "@/public/images/projects/eleven.jpg";
import twelw from "@/public/images/projects/twelw.jpg";
import therteen from "@/public/images/projects/therteen.jpg";
import fourteen from "@/public/images/projects/fourteen.jpg";
import fifteen from "@/public/images/projects/fifteen.jpg";
import sixteen from "@/public/images/projects/sixteen.jpg";
import seventeen from "@/public/images/projects/seventeen.jpg";
import eighteen from "@/public/images/projects/eighteen.jpg";
import nineteen from "@/public/images/projects/nineteen.jpg";
import twenty from "@/public/images/projects/twenty.jpg";
import twentyone from "@/public/images/projects/twentyone.jpg";
import twentytwo from "@/public/images/projects/twentytwo.jpg";
import twentythree from "@/public/images/projects/twentythree.jpg";
import twentyfour from "@/public/images/projects/twentyfour.jpg";
import twentyfive from "@/public/images/projects/twentyfive.jpg";
import twentysix from "@/public/images/projects/twentysix.jpg";
import twentyseven from "@/public/images/projects/twentyseven.jpg";
import twentyeight from "@/public/images/projects/twentyeight.jpg";
import twentynine from "@/public/images/projects/twentynine.jpg";
import thirty from "@/public/images/projects/thirty.jpg";
import thirtyone from "@/public/images/projects/thirtyone.jpg";
import thirtytwo from "@/public/images/projects/thirtytwo.jpg";
import thirtythree from "@/public/images/projects/thirtythree.jpg";
import thirtyfour from "@/public/images/projects/thirtyfour.jpg";
import thirtyfive from "@/public/images/projects/thirtyfive.jpg";
import thirtysix from "@/public/images/projects/thirtysix.jpg";
import thirtyseven from "@/public/images/projects/thirtyseven.jpg";
import thirtyeight from "@/public/images/projects/thirtyeight.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const img = [
	{ url: one, alt: "solar plant" },
	{ url: two, alt: "solar plant" },
	{ url: three, alt: "solar plant" },
	{ url: four, alt: "solar plant" },
	{ url: five, alt: "solar plant" },
	{ url: six, alt: "solar plant" },
	{ url: seven, alt: "solar plant" },
	{ url: eight, alt: "solar plant" },
	{ url: nine, alt: "solar plant" },
	{ url: ten, alt: "solar plant" },
	{ url: eleven, alt: "solar plant" },
	{ url: twelw, alt: "solar plant" },
	{ url: therteen, alt: "solar plant" },
	{ url: fourteen, alt: "solar plant" },
	{ url: fifteen, alt: "solar plant" },
	{ url: sixteen, alt: "solar plant" },
	{ url: seventeen, alt: "solar plant" },
	{ url: eighteen, alt: "solar plant" },
	{ url: nineteen, alt: "solar plant" },
	{ url: twenty, alt: "solar plant" },
	{ url: twentyone, alt: "solar plant" },
	{ url: twentytwo, alt: "solar plant" },
	{ url: twentythree, alt: "solar plant" },
	{ url: twentyfour, alt: "solar plant" },
	{ url: twentyfive, alt: "solar plant" },
	{ url: twentysix, alt: "solar plant" },
	{ url: twentyseven, alt: "solar plant" },
	{ url: twentyeight, alt: "solar plant" },
	{ url: twentynine, alt: "solar plant" },
	{ url: thirty, alt: "solar plant" },
	{ url: thirtyone, alt: "solar plant" },
	{ url: thirtytwo, alt: "solar plant" },
	{ url: thirtythree, alt: "solar plant" },
	{ url: thirtyfour, alt: "solar plant" },
	{ url: thirtyfive, alt: "solar plant" },
	{ url: thirtysix, alt: "solar plant" },
	{ url: thirtyseven, alt: "solar plant" },
	{ url: thirtyeight, alt: "solar plant" },
];

export default function ProjectsSlider() {
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				breakpoints={{
					375: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				navigation={true}
				autoplay={{ delay: 1000, disableOnInteraction: false }}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper">
				{img.map((image, index) => (
					<SwiperSlide key={index}>
						<Image src={image.url} alt={image.alt} className="gallery" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
