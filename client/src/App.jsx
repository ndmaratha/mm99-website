import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header"; // New import
import WhyJoin from "./components/WhyJoin";
import WhatWeOffer from "./components/WhatWeOffer";
import StudentBenefits from "./components/StudentBenefits";
import MarketingSupport from "./components/MarketingSupport";
import HowToJoin from "./components/HowToJoin";
import Footer from "./components/Footer";
import "@fontsource/cardo";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className='min-h-screen bg-white text-dark-blue'>
			{/* <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
			<Header /> {/* Added Header */}
			<main className='max-w-7xl mx-auto px-4 py-12 space-y-16'>
				<WhyJoin />
				<WhatWeOffer />
				<StudentBenefits />
				<MarketingSupport />
				<HowToJoin />
			</main>
			<Footer />
			<style jsx global>{`
				:root {
					--gold: #e6a800;
					--red: #ef4444;
					--dark-blue: #012d5a;
					--white: #ffffff;
					--light-gold: #f2c94c;
					--dark-red: #dc2626;
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
