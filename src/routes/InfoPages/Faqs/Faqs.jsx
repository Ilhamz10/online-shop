import React from 'react';
import Navigation from '../../../components/UI/Navigation/Navigation';

const HEADER = [{ link: '/info_pages/faqs', linkText: 'FAQs' }];

const Faqs = () => {
	return (
		<div className='pe-9 sm:pe-0'>
			<Navigation links={HEADER} />
			<div className='max-w-[940px] grid gap-7'>
				<div className='grid gap-5'>
					<h3 className='text-lg font-medium text-[#222]'>
						How do I place my order?
					</h3>
					<div className='text-base text-[#222]'>
						<p>
							Simply choose your style on the product page, then click the “Buy
							Now” button and follow the simple steps to complete your order.
						</p>
						<br />
						<p>
							We’ll prepare your order and let you know when it's on its way!
						</p>
					</div>
				</div>
				<div className='grid gap-5'>
					<h3 className='text-lg font-medium text-[#222]'>
						How Long will it take to ship my order?
					</h3>
					<p className='text-base text-[#222]'>
						Orders from our store typically ship within 3 to 5 business days.
						For international orders, transit will take an additional 1 to 2
						weeks
					</p>
				</div>
				<div className='grid gap-5'>
					<h3 className='text-lg font-medium text-[#222]'>
						My tracking number isn’t working
					</h3>
					<p className='text-base text-[#222]'>
						Tracking numbers can take 1-2 days to appear in the shipping
						carrier's system. Occasionally, the shipping carrier can lose an
						order. If the tracking number is still not working within a few
						days, please contact the shipping carrier.
					</p>
				</div>
				<div className='grid gap-5'>
					<h3 className='text-lg font-medium text-[#222]'>
						I need help with a late order
					</h3>
					<p className='text-base text-[#222]'>
						Orders from our store typically ship within 3 to 5 business days.
						For international orders, transit will take an additional 1 to 2
						weeks. If your order has not arrived after 5 business days
						(domestic) and 15 business days (international), please contact us
						for timely support.
					</p>
				</div>
				<div className='grid gap-5'>
					<h3 className='text-lg font-medium text-[#222]'>Payment</h3>
					<p className='text-base text-[#222]'>
						What type of payments do you accept? We accept Visa, Mastercard as
						well as Paypal. When will my card be charged? Just after your order
						has been successfully placed.
					</p>
				</div>
				<div className='grid gap-5'>
					<h3 className='text-lg font-medium text-[#222]'>
						How secure is my personal information?
					</h3>
					<p className='text-base text-[#222]'>
						We strictly adhere to the highest industry standards to protect your
						personal information when you checkout and purchase from our store.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
