import React, { useState } from "react";
import {
	FaCheckCircle,
	FaBullhorn,
	FaGraduationCap,
	FaHandsHelping,
	FaLaptopCode,
	FaRocket,
	FaBars,
	FaTimes,
} from "react-icons/fa";
import "@fontsource/cardo"; // Imports Cardo font (weight 400 by default)
import studentsStudying from "./assets/images/whyjoin.png";
import trainingSession from "./assets/images/studentbenifits.png";
import happyStudent from "./assets/images/meditate.png";
import marketingMaterials from "./assets/images/how.png";
import Market from "./assets/images/marketing.png";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className='min-h-screen bg-white text-dark-blue'>
			{/* Hero Section */}
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

			{/* Main Content */}
			<main className='max-w-7xl mx-auto px-4 py-12 space-y-16'>
				{/* Why Join Section */}
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
									<strong>Exclusive Framework:</strong> Use our Teach, Test,
									Refine, Excel (TTRE) system
								</span>
							</li>
							<li className='flex items-start'>
								<FaRocket className='text-gold mr-3 mt-1' size={28} />
								<span className='text-dark-blue'>
									<strong>Build a Legacy:</strong> Establish a hub of excellence
									in your Tehsil
								</span>
							</li>
							<li className='flex items-start'>
								<FaCheckCircle className='text-gold mr-3 mt-1' size={28} />
								<span className='text-dark-blue'>
									<strong>Nationwide Recognition:</strong> Join a brand known
									for innovation & results
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

				{/* What We Offer Section */}
				<section id='offer' className='bg-teal-500 text-white p-8 rounded-lg'>
					<h2 className='text-4xl font-bold text-gold text-center mb-8'>
						What We Offer Associate Centers
					</h2>
					<div className='grid md:grid-cols-3 gap-6'>
						<div className='text-center'>
							<FaLaptopCode
								className='text-light-gold mx-auto mb-4'
								size={48}
							/>
							<h3 className='text-2xl font-semibold'>Training Programs</h3>
							<p className='text-lg'>
								Proprietary methods, Zen Mind Activation & Talent Blueprint
							</p>
						</div>
						<div className='text-center'>
							<FaBullhorn className='text-light-gold mx-auto mb-4' size={48} />
							<h3 className='text-2xl font-semibold'>Study Materials</h3>
							<p className='text-lg'>
								High-quality resources for NEET, JEE & more
							</p>
						</div>
						<div className='text-center'>
							<FaCheckCircle
								className='text-light-gold mx-auto mb-4'
								size={48}
							/>
							<h3 className='text-2xl font-semibold'>Operational Support</h3>
							<p className='text-lg'>Step-by-step guidance & digital tools</p>
						</div>
					</div>
				</section>

				{/* Student Benefits Section */}
				<section
					id='benefits'
					className='grid md:grid-cols-2 gap-8 items-center'
				>
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
									<strong>Proven Success:</strong> Top ranks in competitive
									exams
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

				{/* Marketing Support Section */}
				<section
					id='marketing'
					className='bg-dark-blue text-white p-8 rounded-lg'
				>
					<h2 className='text-4xl font-bold text-gold text-center mb-8'>
						Marketing & Branding Support
					</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						<div>
							<ul className='space-y-4 text-lg'>
								<li className='flex items-start'>
									<FaBullhorn className='text-light-gold mr-3 mt-1' size={28} />
									<span>
										<strong>Dedicated Webpage:</strong> SEO-optimized with
										admission & UPI payment integration
									</span>
								</li>
								<li className='flex items-start'>
									<FaBullhorn className='text-light-gold mr-3 mt-1' size={28} />
									<span>
										<strong>Digital Marketing:</strong> Social media templates,
										Google Ads & email campaigns
									</span>
								</li>
								<li className='flex items-start'>
									<FaBullhorn className='text-light-gold mr-3 mt-1' size={28} />
									<span>
										<strong>Local Branding:</strong> Brochures, banners &
										community outreach guidance
									</span>
								</li>
								<li className='flex items-start'>
									<FaBullhorn className='text-light-gold mr-3 mt-1' size={28} />
									<span>
										<strong>Analytics:</strong> Real-time tracking with Google
										Analytics & performance reports
									</span>
								</li>
							</ul>
						</div>
						<img
							src={Market}
							alt='Marketing Materials'
							className='rounded-lg shadow-md w-full object-cover h-80'
						/>
					</div>
				</section>

				{/* How to Join Section */}
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
			</main>

			{/* Footer */}
			<footer className='bg-dark-blue text-white py-8 text-center'>
				<p className='text-2xl mb-2'>
					Your Success is Our Mission. Let’s Make 99% a Reality!{" "}
					<FaRocket className='inline-block ml-2' size={28} />
				</p>
				<p className='text-lg'>© 2025 MM99 Coaching. All Rights Reserved.</p>
			</footer>

			{/* CSS */}
			<style jsx global>{`
				:root {
					--gold: #e6a800;
					--red: #ef4444; /* Tailwind red-500 */
					--dark-blue: #012d5a;
					--white: #ffffff;
					--light-gold: #f2c94c;
					--dark-red: #dc2626; /* Tailwind red-600 for hover */
				}
				body {
					font-family: "Cardo", serif;
					color: var(--dark-blue);
				}
				h1,
				h2,
				h3 {
					font-family: "Cardo", serif;
				}
				.text-gold {
					color: var(--gold);
				}
				.text-red-500 {
					color: var(--red);
				}
				.text-dark-blue {
					color: var(--dark-blue);
				}
				.text-light-gold {
					color: var(--light-gold);
				}
				.bg-dark-blue {
					background-color: var(--dark-blue);
				}
				.bg-red-500 {
					background-color: var(--red);
				}
				.hover\:bg-red-600:hover {
					background-color: var(--dark-red);
				}
				.transition-all {
					transition: all 0.3s ease;
				}
				.shadow-md {
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
				}
				.rounded-lg {
					border-radius: 0.5rem;
				}
			`}</style>
		</div>
	);
}

export default App;
