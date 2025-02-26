import React from "react";

const Header = () => {
	return (
		<header className='bg-teal-500 text-white pt-28 pb-16 text-center relative overflow-hidden'>
			<div className='max-w-7xl mx-auto px-4'>
				<h1 className='text-5xl md:text-6xl font-bold text-gold mb-6'>
					Join MM99 & Redefine Academic Excellence
				</h1>
				<p className='text-2xl md:text-3xl mb-8'>
					Transform education in your region with Minimum Marks 99
				</p>
				<a
					href='#join'
					className='inline-block bg-red-500 text-white py-4 px-10 rounded-md text-xl font-semibold hover:bg-red-600 transition-all'
				>
					Become an Associate Center
				</a>
			</div>
		</header>
	);
};

export default Header;
