import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
	return (
		<nav className='bg-dark-blue text-white fixed w-full top-0 z-20 shadow-lg'>
			<div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
				<h1 className='text-3xl font-bold text-gold'>MM99 Coaching</h1>
				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						className='text-white focus:outline-none'
					>
						{isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
					</button>
				</div>
				<div className='hidden md:flex space-x-6'>
					<a
						href='#why'
						className='hover:text-light-gold transition-colors text-lg'
					>
						Why Join
					</a>
					<a
						href='#offer'
						className='hover:text-light-gold transition-colors text-lg'
					>
						What We Offer
					</a>
					<a
						href='#benefits'
						className='hover:text-light-gold transition-colors text-lg'
					>
						Student Benefits
					</a>
					<a
						href='#marketing'
						className='hover:text-light-gold transition-colors text-lg'
					>
						Marketing Support
					</a>
					<a
						href='#join'
						className='hover:text-light-gold transition-colors text-lg'
					>
						How to Join
					</a>
				</div>
			</div>
			{isMenuOpen && (
				<div className='md:hidden bg-dark-blue text-white px-4 py-4'>
					<a
						href='#why'
						className='block py-2 hover:text-light-gold text-lg'
						onClick={toggleMenu}
					>
						Why Join
					</a>
					<a
						href='#offer'
						className='block py-2 hover:text-light-gold text-lg'
						onClick={toggleMenu}
					>
						What We Offer
					</a>
					<a
						href='#benefits'
						className='block py-2 hover:text-light-gold text-lg'
						onClick={toggleMenu}
					>
						Student Benefits
					</a>
					<a
						href='#marketing'
						className='block py-2 hover:text-light-gold text-lg'
						onClick={toggleMenu}
					>
						Marketing Support
					</a>
					<a
						href='#join'
						className='block py-2 hover:text-light-gold text-lg'
						onClick={toggleMenu}
					>
						How to Join
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
