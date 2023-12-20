import React from 'react';

import classes from './Cart.module.css';
import paymentCard1 from '../../assets/icons/visa.svg';
import paymentCard2 from '../../assets/icons/MC.svg';
import paymentCard3 from '../../assets/icons/Amex.svg';
import paymentCard4 from '../../assets/icons/Gpay.svg';
import paymentCard5 from '../../assets/icons/Gpay (1).svg';
import paymentCard6 from '../../assets/icons/Apple.svg';

import Navigation from '../../components/UI/Navigation/Navigation';
import { useSelector } from 'react-redux';
import ProductOfCart from '../../components/ProductOfCart/ProductOfCart';
import { Link } from 'react-router-dom';
import AlsoLikeSection from '../Product/AlsoLikeSection/AlsoLikeSection';

const HEADER = [{ link: '/cart', linkText: 'Shoping Cart' }];

const Cart = () => {
	const cartProducts = useSelector((state) => state.cart.items);

	const totalPrice = cartProducts.reduce(
		(total, item) => total + item.totalPrice,
		0
	);

	return (
		<div className={`${classes.Cart}`}>
			<div className='container'>
				<Navigation links={HEADER} />
				<div className={classes.cartContent}>
					<div className={classes.allCarts}>
						{cartProducts.map((product) => (
							<ProductOfCart product={product} />
						))}
					</div>
					<div className={classes.checkoutBlock}>
						<div className={classes.checkoutBlockHeader}>
							<p>Summary</p>
						</div>
						<div className={classes.checkoutBlockBody}>
							<div className={classes.subtotal}>
								<p>Subtotal</p>
								<p>${totalPrice}</p>
							</div>
							<div className={classes.shipping}>
								<p>Shipping cost</p>
								<p>Free</p>
							</div>
						</div>
						<div className={classes.checkoutBlockFooter}>
							<div className={classes.total}>
								<p>Total</p>
								<p>${totalPrice}</p>
							</div>
							<button className={classes.checkoutBtn}>Checkout</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${classes.info}`}>
				<div className={classes.customerService}>
					<div className={classes.infoTitle}>Customer Service</div>
					<p>For any questions or to request assistance:</p>
					<Link>Contact us</Link>
				</div>
				<div className={classes.guaranty}>
					<div className={classes.infoTitle}>Guarantee</div>
					<p>
						If you're not satisfied with your purchase, we offer a 100% Money
						Back Guarantee. <br /> No Questions Asked.
					</p>
				</div>
				<div className={classes.payment}>
					<div className={classes.infoTitle}>Safe Payment With</div>
					<div className={classes.paymentCards}>
						<img src={paymentCard1} alt='' />
						<img src={paymentCard2} alt='' />
						<img src={paymentCard3} alt='' />
						<img src={paymentCard4} alt='' />
						<img src={paymentCard5} alt='' />
						<img src={paymentCard6} alt='' />
					</div>
				</div>
			</div>
			<div className='container'>
				<AlsoLikeSection />
			</div>
		</div>
	);
};

export default Cart;
