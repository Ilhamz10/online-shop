import React from 'react';

import classes from './Product.module.css';
import product2 from '../../assets/images/product2.png';
import rightArrow from '../../assets/icons/chevron_right.svg';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import ProductSliderSection from './ProductSliderSection/ProductSliderSection';
import Accordion from '../../components/UI/Accordion/Accordion';
import AlsoLikeSection from './AlsoLikeSection/AlsoLikeSection';

import CommentSection from './CommentSection/CommentSection';
import Navigation from '../../components/UI/Navigation/Navigation';

const NAVIGATION_LINKS = [
	{ link: 'description', linkText: 'Description' },
	{ link: 'toob', linkText: 'TOOB' },
	{ link: 'history', linkText: 'History' },
	{ link: 'material', linkText: 'Material' },
	{ link: 'washing-instructions', linkText: 'Washing instructions' },
];

const ACCORDION_LIST = [
	{
		id: 1,
		title: 'Free shipping in United Kingdom',
		body: 'All purchases are shipped from our warehouse in United Kingdom and are fully insured with a tracking number. Tracked delivery between 2-4 days in United Kingdom + Free Delivery.',
	},
	{
		id: 2,
		title: '5 years warranty',
		body: 'All purchases are shipped from our warehouse in United Kingdom and are fully insured with a tracking number. Tracked delivery between 2-4 days in United Kingdom + Free Delivery.',
	},
	{
		id: 3,
		title: '100% money-back guarantee',
		body: 'All purchases are shipped from our warehouse in United Kingdom and are fully insured with a tracking number. Tracked delivery between 2-4 days in United Kingdom + Free Delivery.',
	},
];

const Product = () => {
	return (
		<section>
			<div className={`${classes.productContent} container`}>
				<div className={classes.banner}></div>
				<div className={classes.breadCrumbs}>
					<ul>
						<li>
							<Link>Catalogue</Link>
						</li>
						<li>
							<img src={rightArrow} alt='' />
						</li>
						<li>
							<Link>Man</Link>
						</li>
						<li>
							<img src={rightArrow} alt='' />
						</li>
						<li>Nike Sportswear Club Fleece</li>
					</ul>
				</div>
				<div className={classes.allSections}>
					<ProductSliderSection />
					<div className={classes.shippingSection}>
						<Accordion list={ACCORDION_LIST} />
						<img className={classes.shippingImage} src={product2} alt='' />
					</div>
					<div className={classes.productInfoSection}>
						<Navigation links={NAVIGATION_LINKS} />
						<Outlet />
					</div>
					<AlsoLikeSection />
					<CommentSection />
				</div>
			</div>
		</section>
	);
};

export default Product;
