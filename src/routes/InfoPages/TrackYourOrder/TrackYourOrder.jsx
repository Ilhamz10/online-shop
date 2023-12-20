import React, { useState } from 'react';
import Navigation from '../../../components/UI/Navigation/Navigation';

import inputInvalid from '../../../assets/icons/input_invalid.svg';
import inputValid from '../../../assets/icons/input_valid.svg';

const HEADER = [
	{
		link: '/info_pages/track_your_order',
		linkText: 'Track Your Order',
	},
];

const TrackYourOrder = () => {
	const [emailValue, setEmailValue] = useState('');
	const [orderIdValue, setOrderIdValue] = useState('');
	const [trackingNumberValue, setTrackingNumberValue] = useState('');

	return (
		<div>
			<Navigation links={HEADER} />
			<form className='max-w-xl flex flex-col gap-5 mb-[60px]'>
				<div className='flex flex-col relative'>
					<label className='mb-2 text-[#222] text-sm' htmlFor='#order-id'>
						Order ID*
					</label>
					<input
						onChange={(e) => setOrderIdValue(e.target.value)}
						className={
							orderIdValue
								? 'px-3 border border-[#187E4D] rounded-lg h-10 outline-none'
								: 'px-3 border border-[#BE343C] rounded-lg h-10'
						}
						type='text'
						id='order-id'
					/>
					<img
						src={!orderIdValue ? inputInvalid : inputValid}
						className='absolute right-3 bottom-[10px]'
						alt=''
					/>
				</div>
				<div className='flex flex-col relative'>
					<label className='mb-2 text-[#222] text-sm' htmlFor='#email'>
						E-mail*
					</label>
					<input
						onChange={(e) => setEmailValue(e.target.value)}
						className={
							emailValue
								? 'px-3 border border-[#187E4D] rounded-lg h-10 outline-none'
								: 'px-3 border border-[#BE343C] rounded-lg h-10'
						}
						type='text'
						id='email'
					/>
					<img
						src={!emailValue ? inputInvalid : inputValid}
						className='absolute right-3 bottom-[10px]'
						alt=''
					/>
				</div>
				<button className='sm:mx-auto w-[200px] rounded-lg py-[15px] bg-black text-white text-base'>
					Track
				</button>
			</form>

			<form className='max-w-xl flex flex-col gap-5'>
				<p className='text-lg text-black'>
					Or you can track your order using the tracking number
				</p>
				<div className='flex flex-col relative'>
					<label className='mb-2 text-[#222] text-sm' htmlFor='#track'>
						Tracking number*
					</label>
					<input
						onChange={(e) => setTrackingNumberValue(e.target.value)}
						className={
							trackingNumberValue
								? 'px-3 border border-[#187E4D] rounded-lg h-10 outline-none'
								: 'px-3 border border-[#BE343C] rounded-lg h-10'
						}
						type='text'
						id='track'
					/>
          <img
						src={!trackingNumberValue ? inputInvalid : inputValid}
						className='absolute right-3 bottom-[10px]'
						alt=''
					/>
				</div>
				<button className='sm:mx-auto w-[200px] rounded-lg py-[15px] bg-black text-white text-base'>
					Track
				</button>
			</form>
		</div>
	);
};

export default TrackYourOrder;
