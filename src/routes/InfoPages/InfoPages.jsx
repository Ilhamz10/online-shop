import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import classes from './InfoPages.module.css';
import arrowDown from '../../assets/icons/chevron_down_black.svg';

const InfoPages = () => {
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '/info_pages/privacy_policy':
				setDropdownActiveValue('Privacy policy');
				break;
			case '/info_pages/terms_and_conditions':
				setDropdownActiveValue('Terms and Conditions');
				break;
			case '/info_pages/payment_info':
				setDropdownActiveValue('Payment Info');
				break;
			case '/info_pages/track_your_order':
				setDropdownActiveValue('Track Your Order');
				break;
			case '/info_pages/contact_us':
				setDropdownActiveValue('Contact Us');
				break;
			case '/info_pages/faqs':
				setDropdownActiveValue('FAQs');
				break;
		}
	}, []);

	const [dropdownIsActive, setDropdownIsActive] = useState(false);
	const [dropdownActiveValue, setDropdownActiveValue] = useState('');

	return (
		<div className={`${classes.InfoPages} container`}>
			<div className='sm:block hidden relative'>
				<div
					className='flex justify-center items-center text-sm text-[#222] w-full h-11 bg-[#F4F5F5] relative'
					onClick={() => setDropdownIsActive((prev) => !prev)}>
					{dropdownActiveValue}
					<img
						style={{ transition: '.2s' }}
						src={arrowDown}
						className={!dropdownIsActive ? 'absolute right-3' : 'absolute rotate-180 right-3'}
						alt=''
					/>
				</div>
				{dropdownIsActive && (
					<ul className='absolute bg-white w-full z-[1] text-center flex flex-col gap-5 pt-7'>
						<li onClick={() => setDropdownIsActive((prev) => !prev)}>
							<NavLink
								onClick={() => setDropdownActiveValue('Privacy policy')}
								to={'/info_pages/privacy_policy'}>
								Privacy policy
							</NavLink>
						</li>
						<li onClick={() => setDropdownIsActive((prev) => !prev)}>
							<NavLink
								onClick={() => setDropdownActiveValue('Terms and Conditions')}
								to={'/info_pages/terms_and_conditions'}>
								Terms and Conditions
							</NavLink>
						</li>
						<li onClick={() => setDropdownIsActive((prev) => !prev)}>
							<NavLink
								onClick={() => setDropdownActiveValue('Payment Info')}
								to={'/info_pages/payment_info'}>
								Payment Info
							</NavLink>
						</li>
						<li onClick={() => setDropdownIsActive((prev) => !prev)}>
							<NavLink
								onClick={() => setDropdownActiveValue('Track Your Order')}
								to={'/info_pages/track_your_order'}>
								Track Your Order
							</NavLink>
						</li>
						<li onClick={() => setDropdownIsActive((prev) => !prev)}>
							<NavLink
								onClick={() => setDropdownActiveValue('Contact Us')}
								to={'/info_pages/contact_us'}>
								Contact Us
							</NavLink>
						</li>
						<li onClick={() => setDropdownIsActive((prev) => !prev)}>
							<NavLink
								onClick={() => setDropdownActiveValue('FAQs')}
								to={'/info_pages/faqs'}>
								FAQs
							</NavLink>
						</li>
					</ul>
				)}
			</div>
			<nav className='px-8 sm:hidden'>
				<ul className='flex flex-col gap-4'>
					<li>
						<NavLink
							to={'/info_pages/privacy_policy'}
							className={({ isActive }) => (isActive ? 'underline' : '')}>
							Privacy policy
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/info_pages/terms_and_conditions'}
							className={({ isPending, isActive }) =>
								isActive ? 'underline' : ''
							}>
							Terms and Conditions
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/info_pages/payment_info'}
							className={({ isPending, isActive }) =>
								isActive ? 'underline' : ''
							}>
							Payment Info
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/info_pages/track_your_order'}
							className={({ isPending, isActive }) =>
								isActive ? 'underline' : ''
							}>
							Track Your Order
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/info_pages/contact_us'}
							className={({ isPending, isActive }) =>
								isActive ? 'underline' : ''
							}>
							Contact Us
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/info_pages/faqs'}
							className={({ isPending, isActive }) =>
								isActive ? 'underline' : ''
							}>
							FAQs
						</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default InfoPages;
