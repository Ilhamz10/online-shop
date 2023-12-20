import React from 'react';

import classes from './Checkbox.module.css';
import checkedCheckbox from '../../../assets/icons/checked-checkbox.svg';
import checkbox from '../../../assets/icons/checkbox (1).svg';

const Checkbox = ({ id, label, type, iconColor, color, ...props }) => {
	return (
		<div className={`${classes.Checkbox} ${classes[type]}`}>
			{type === 'category' && (
				<label className={classes.categoryLabel} htmlFor={id}>
					<img className={classes.checkedImg} src={checkedCheckbox} alt='' />
					<img className={classes.uncheckedImg} src={checkbox} alt='' />
					<span>{label}</span>
				</label>
			)}
			{type === 'color' && (
				<label className={classes.colorLabel} htmlFor={id}>
					<div style={{background: color}} className={`${classes.color} ${classes[color]}`}>
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
					</div>
                    <span>{label}</span>
				</label>
			)}
			<input type='checkbox' id={id} {...props}/>
		</div>
	);
};

export default Checkbox;
