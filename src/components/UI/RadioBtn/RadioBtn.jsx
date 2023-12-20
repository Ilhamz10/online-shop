import React, { useState } from 'react';

import classes from './RadioBtn.module.css';

const RadioBtn = ({ id, label, name, disabled, type, color, iconColor, setProperty }) => {
	return (
		<div className={classes.RadioBtn}>
			<label
				style={type === 'color' ? { background: color } : {}}
				className={`${disabled && classes.disabled} ${classes[type]} ${
					color === 'black' && 'border-2 border-[#454545]'
				}`}
				htmlFor={disabled ? '' : id}>
				<svg
					width='10'
					height='9'
					viewBox='0 0 10 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M0.5 4.3148L3.01852 7.14813L9 0.851837'
						stroke={iconColor}
						strokeWidth='1.25926'
					/>
				</svg>
				{type === 'size' && label}
			</label>
			<input onChange={() => setProperty(label)} type='radio' name={name} id={id} />
		</div>
	);
};

export default RadioBtn;
