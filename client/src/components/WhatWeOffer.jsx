import React from "react";
import { FaLaptopCode, FaBullhorn, FaCheckCircle } from "react-icons/fa";

const WhatWeOffer = () => {
	return (
		<section id='offer' className='bg-teal-500 text-white p-8 rounded-lg'>
			<h2 className='text-4xl font-bold text-gold text-center mb-8'>
				What We Offer Associate Centers
			</h2>
			<div className='grid md:grid-cols-3 gap-6'>
				<div className='text-center'>
					<FaLaptopCode className='text-light-gold mx-auto mb-4' size={48} />
					<h3 className='text-2xl font-semibold'>Training Programs</h3>
					<p className='text-lg'>
						Proprietary methods, Zen Mind Activation & Talent Blueprint
					</p>
				</div>
				<div className='text-center'>
					<FaBullhorn className='text-light-gold mx-auto mb-4' size={48} />
					<h3 className='text-2xl font-semibold'>Study Materials</h3>
					<p className='text-lg'>High-quality resources for NEET, JEE & more</p>
				</div>
				<div className='text-center'>
					<FaCheckCircle className='text-light-gold mx-auto mb-4' size={48} />
					<h3 className='text-2xl font-semibold'>Operational Support</h3>
					<p className='text-lg'>Step-by-step guidance & digital tools</p>
				</div>
			</div>
		</section>
	);
};

export default WhatWeOffer;
