import React, { useState } from 'react';
import Navigation from '../../../components/UI/Navigation/Navigation';

import inputInvalid from '../../../assets/icons/input_invalid.svg';
import inputValid from '../../../assets/icons/input_valid.svg';

const HEADER = [
	{
		link: '/info_pages/contact_us',
		linkText: 'Contact Us',
	},
];

const Contact = () => {
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [contactValue, setContactValue] = useState('');
	const [commentValue, setCommentValue] = useState('');

	return (
		<div>
			<Navigation links={HEADER} />
			<form className='max-w-xl flex flex-col gap-5'>
				<div className='flex flex-col relative'>
					<label className='mb-2 text-[#222] text-sm' htmlFor='#name'>
						Name*
					</label>
					<input
						value={nameValue}
						onChange={(e) => setNameValue(e.target.value)}
						className={
							nameValue
								? 'px-3 border border-[#187E4D] rounded-lg h-10 outline-none'
								: 'px-3 border border-[#BE343C] rounded-lg h-10'
						}
						type='text'
						id='name'
					/>
					<img
						src={!nameValue ? inputInvalid : inputValid}
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
				<div className='flex flex-col relative'>
					<label className='mb-2 text-[#222] text-sm' htmlFor='#number'>
						Number*
					</label>
					<input
						onChange={(e) => setContactValue(e.target.value)}
						className={
							contactValue
								? 'px-3 border border-[#187E4D] rounded-lg h-10 outline-none'
								: 'px-3 border border-[#BE343C] rounded-lg h-10'
						}
						type='text'
						id='number'
					/>
					<img
						src={!contactValue ? inputInvalid : inputValid}
						className='absolute right-3 bottom-[10px]'
						alt=''
					/>
				</div>
				<div className='flex flex-col relative'>
					<label className='mb-2 text-[#222] text-sm' htmlFor='#comment'>
						Comment*
					</label>
					<input
						onChange={(e) => setCommentValue(e.target.value)}
						className={
							commentValue
								? 'px-3 border border-[#187E4D] rounded-lg h-10 outline-none'
								: 'px-3 border border-[#BE343C] rounded-lg h-10'
						}
						type='text'
						id='comment'
					/>
					<img
						src={!commentValue ? inputInvalid : inputValid}
						className='absolute right-3 bottom-[10px]'
						alt=''
					/>
				</div>
				<button className='sm:mx-auto w-[200px] rounded-lg py-[15px] bg-black text-white text-base'>
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
