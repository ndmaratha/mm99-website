import React from "react";

const HowToJoin = () => {
	return (
		<section id='join' className='bg-teal-500 text-white p-8 rounded-lg'>
			<h2 className='text-4xl font-bold text-gold text-center mb-8'>
				How to Join MM99
			</h2>
			<div className='grid md:grid-cols-4 gap-6'>
				<div className='text-center'>
					<span className='text-5xl text-light-gold font-bold'>1</span>
					<p className='mt-2 text-xl'>Express Interest</p>
					<p className='text-lg'>Fill out the form</p>
				</div>
				<div className='text-center'>
					<span className='text-5xl text-light-gold font-bold'>2</span>
					<p className='mt-2 text-xl'>Orientation Session</p>
					<p className='text-lg'>Learn our systems</p>
				</div>
				<div className='text-center'>
					<span className='text-5xl text-light-gold font-bold'>3</span>
					<p className='mt-2 text-xl'>Set Up Center</p>
					<p className='text-lg'>Get MM99 guidance</p>
				</div>
				<div className='text-center'>
					<span className='text-5xl text-light-gold font-bold'>4</span>
					<p className='mt-2 text-xl'>Launch & Grow</p>
					<p className='text-lg'>Start transforming lives</p>
				</div>
			</div>
			<div className='text-center mt-8'>
				<a
					href='#form'
					className='inline-block bg-red-500 text-white py-4 px-10 rounded-md text-xl font-semibold hover:bg-red-600 transition-all'
				>
					Apply Now
				</a>
			</div>
		</section>
	);
};

export default HowToJoin;
