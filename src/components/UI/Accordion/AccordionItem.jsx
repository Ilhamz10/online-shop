import React, { useRef } from 'react';

import classes from './Accordion.module.css';

import upArrow from '../../../assets/icons/chevron_up.svg'

const AccordionItem = ({ title, body, onClick, isOpen }) => {
	const itemRef = useRef(null);
	return (
		<li className={classes.accordionItem}>
			<button onClick={onClick} className={classes.accordionHeader}>
				{title}
                <img className={classes.arrowIcon} src={upArrow} style={
					!isOpen ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }
				} alt="" />
			</button>
			<div
				style={
					isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
				}
				className={classes.accordionCollapse}>
				<div ref={itemRef} className={classes.accordionBody}>
					{body}
				</div>
			</div>
		</li>
	);
};

export default AccordionItem;
