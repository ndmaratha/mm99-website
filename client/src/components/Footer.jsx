import React from "react";
import { FaRocket } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-dark-blue text-white py-8 text-center'>
			<p className='text-2xl mb-2'>
				Your Success is Our Mission. Let’s Make 99% a Reality!{" "}
				<FaRocket className='inline-block ml-2' size={28} />
			</p>
			<p className='text-lg'>© 2025 MM99 Coaching. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
