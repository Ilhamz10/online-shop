import React from 'react';

import classes from './Footer.module.css';
import whitelogo from '../../assets/icons/LOGO-WHITE.svg';

const Footer = () => {
	return (
		<footer>
			<div className={`${classes.footerContent} container`}>
				<div className={classes.links}>
					<a href='#'>Terms of privacy</a>
					<a href='#'>Payment methods</a>
					<a href='#'>Privacy policy</a>
				</div>
				<div className={classes.allRights}>
					<div className={classes.allRightsText}>
						<p>© 2023 Name</p>
						<p>All Rights Reserved</p>
					</div>
					<div className={classes.logo}>
						<img src={whitelogo} alt='' />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
