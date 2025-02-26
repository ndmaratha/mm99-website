import React from "react";
import { FaBullhorn } from "react-icons/fa";
import Market from "../assets/images/marketing.png";

const MarketingSupport = () => {
	return (
		<section id='marketing' className='bg-dark-blue text-white p-8 rounded-lg'>
			<h2 className='text-4xl font-bold text-gold text-center mb-8'>
				Marketing & Branding Support
			</h2>
			<div className='grid md:grid-cols-2 gap-6'>
				<div>
					<ul className='space-y-4 text-lg'>
						<li className='flex items-start'>
							<FaBullhorn className='text-light-gold mr-3 mt-1' size={28} />
							<span>
								<strong>Dedicated Webpage:</strong> SEO-optimized with admission
								& UPI payment integration
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
								<strong>Local Branding:</strong> Brochures, banners & community
								outreach guidance
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
	);
};

export default MarketingSupport;
