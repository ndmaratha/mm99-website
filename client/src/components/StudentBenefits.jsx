import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import happyStudent from "../assets/images/meditate.png";

const StudentBenefits = () => {
	return (
		<section id='benefits' className='grid md:grid-cols-2 gap-8 items-center'>
			<img
				src={happyStudent}
				alt='Happy Student'
				className='rounded-lg shadow-md w-full object-cover h-80'
			/>
			<div>
				<h2 className='text-4xl font-bold text-gold mb-6'>
					Benefits for Your Students
				</h2>
				<ul className='space-y-4 text-lg'>
					<li className='flex items-start'>
						<FaCheckCircle className='text-gold mr-3 mt-1' size={28} />
						<span className='text-dark-blue'>
							<strong>Personalized Learning:</strong> Talent Blueprint
							diagnostics
						</span>
					</li>
					<li className='flex items-start'>
						<FaCheckCircle className='text-gold mr-3 mt-1' size={28} />
						<span className='text-dark-blue'>
							<strong>Zen Mind Training:</strong> Focus, memory & motivation
							boost
						</span>
					</li>
					<li className='flex items-start'>
						<FaCheckCircle className='text-gold mr-3 mt-1' size={28} />
						<span className='text-dark-blue'>
							<strong>Proven Success:</strong> Top ranks in competitive exams
						</span>
					</li>
					<li className='flex items-start'>
						<FaCheckCircle className='text-gold mr-3 mt-1' size={28} />
						<span className='text-dark-blue'>
							<strong>Regular Assessments:</strong> Mock tests & feedback
						</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default StudentBenefits;
