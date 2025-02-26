import React from "react";
import {
	FaGraduationCap,
	FaHandsHelping,
	FaRocket,
	FaCheckCircle,
} from "react-icons/fa";
import studentsStudying from "../assets/images/whyjoin.png";

const WhyJoin = () => {
	return (
		<section id='why' className='grid md:grid-cols-2 gap-8 items-center'>
			<div>
				<h2 className='text-4xl font-bold text-gold mb-6'>
					Why Become an MM99 Associate Center?
				</h2>
				<ul className='space-y-4 text-lg'>
					<li className='flex items-start'>
						<FaGraduationCap className='text-gold mr-3 mt-1' size={28} />
						<span className='text-dark-blue'>
							<strong>Catalyst for Change:</strong> Bring a proven system
							achieving 99% marks in NEET, JEE & more
						</span>
					</li>
					<li className='flex items-start'>
						<FaHandsHelping className='text-gold mr-3 mt-1' size={28} />
						<span className='text-dark-blue'>
							<strong>Exclusive Framework:</strong> Use our Teach, Test, Refine,
							Excel (TTRE) system
						</span>
					</li>
					<li className='flex items-start'>
						<FaRocket className='text-gold mr-3 mt-1' size={28} />
						<span className='text-dark-blue'>
							<strong>Build a Legacy:</strong> Establish a hub of excellence in
							your Tehsil
						</span>
					</li>
					<li className='flex items-start'>
						<FaCheckCircle className='text-gold mr-3 mt-1' size={28} />
						<span className='text-dark-blue'>
							<strong>Nationwide Recognition:</strong> Join a brand known for
							innovation & results
						</span>
					</li>
				</ul>
			</div>
			<img
				src={studentsStudying}
				alt='Students Studying'
				className='rounded-lg shadow-md w-full object-cover h-80'
			/>
		</section>
	);
};

export default WhyJoin;
