import React from 'react';

import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({ links }) => {
	return (
		<ul className={classes.navigation}>
			{links.map((link) => (
				<li className={classes.navItem}>
					<NavLink
						to={link.link}
						className={({ isActive }) =>
							isActive
								? `${classes.navLink} ${classes.active}`
								: `${classes.navLink}`
						}>
						{link.linkText}
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default Navigation;
