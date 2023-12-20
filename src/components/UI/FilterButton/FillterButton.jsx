import React from 'react';

import classes from './FillterButton.module.css';

const FillterButton = ({ type, name, id, label, checked, ...props }) => {
	return (
		<>
			{type === 'radio' && (
				<div className={`${classes.fillterButton} ${classes[type]}`}>
					<label htmlFor={id}>{label}</label>
					<input {...props} defaultChecked={checked} type={type} id={id} name={name} />
				</div>
			)}
			{type === 'checkbox' && (
				<div className={`${classes.fillterButton} ${classes[type]}`}>
					<label htmlFor={id}>{label}</label>
					<input {...props} defaultChecked={checked} type={type} id={id} name={name} />
				</div>
			)}
		</>
	);
};

export default FillterButton;
