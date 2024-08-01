"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import one from "@/public/images/projects/1.jpg";
import two from "@/public/images/projects/2.jpg";
import three from "@/public/images/projects/3.jpg";
import four from "@/public/images/projects/4.jpg";
import five from "@/public/images/projects/5.jpg";
import six from "@/public/images/projects/6.jpg";
import seven from "@/public/images/projects/7.jpg";
import eight from "@/public/images/projects/8.jpg";
import nine from "@/public/images/projects/9.jpg";
import ten from "@/public/images/projects/10.jpg";
import eleven from "@/public/images/projects/11.jpg";
import twelw from "@/public/images/projects/12.jpg";
import therteen from "@/public/images/projects/13.jpg";
import fourteen from "@/public/images/projects/14.jpg";
import fifteen from "@/public/images/projects/15.jpg";
import sixteen from "@/public/images/projects/16.jpg";
import seventeen from "@/public/images/projects/17.jpg";
import eighteen from "@/public/images/projects/18.jpg";
import nineteen from "@/public/images/projects/19.jpg";
import twenty from "@/public/images/projects/20.jpg";
import twentyone from "@/public/images/projects/21.jpg";
import twentytwo from "@/public/images/projects/22.jpg";
import twentythree from "@/public/images/projects/23.jpg";
import twentyfour from "@/public/images/projects/24.jpg";
import twentyfive from "@/public/images/projects/25.jpg";
import twentysix from "@/public/images/projects/26.jpg";
import twentyseven from "@/public/images/projects/27.jpg";
import twentyeight from "@/public/images/projects/28.jpg";
import twentynine from "@/public/images/projects/29.jpg";
import thirty from "@/public/images/projects/30.jpg";
import thirtyone from "@/public/images/projects/31.jpg";
import thirtytwo from "@/public/images/projects/32.jpg";
import thirtythree from "@/public/images/projects/33.jpg";
import thirtyfour from "@/public/images/projects/34.jpg";
import thirtyfive from "@/public/images/projects/35.jpg";
import thirtysix from "@/public/images/projects/36.jpg";
import thirtyseven from "@/public/images/projects/37.jpg";
import thirtyeight from "@/public/images/projects/38.jpg";

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
				{img.map((url, alt) => (
					<SwiperSlide key={url}>
						<Image src={url.url} alt={alt.alt} className="gallery"/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
