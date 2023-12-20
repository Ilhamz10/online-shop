import React, { useState } from 'react';
import classes from './Accordion.module.css';
import AccordionItem from './AccordionItem';

const Accordion = ({ list }) => {
	const [openId, setOpenId] = useState(null);

	return (
		<ul className={classes.Accordion}>
			{list.map((item) => (
				<AccordionItem
					key={item.id}
					body={item.body}
					title={item.title}
					isOpen={item.id === openId}
					onClick={() =>
						item.id === openId ? setOpenId(null) : setOpenId(item.id)
					}
				/>
			))}
		</ul>
	);
};

export default Accordion;
