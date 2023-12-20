import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import logo from '../../assets/icons/LOGO.svg';
import basket from '../../assets/icons/cart.svg';
import close from '../../assets/icons/close.svg';
import img from '../../assets/images/product.png';
import menuIcon from '../../assets/icons/menu.svg';
import rightArrow from '../../assets/icons/chevron_right_black.svg';

import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const Header = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const dispatch = useDispatch();

	const [cartIsShow, setCartIsShow] = useState(false);
	const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);

	const totalPrice = cartItems.reduce((sum, item) => {
		return sum + item.totalPrice;
	}, 0);

	function openCart() {
		setCartIsShow(true);
	}

	function closeCart() {
		setCartIsShow(false);
	}

	function closeCartLeave() {
		if (cartItems.length === 0) {
			setCartIsShow(0);
		}
	}

	function removeProductHandler(id) {
		dispatch(cartActions.removeFromCart(id));
	}

	return (
		<>
			<header>
				<div className={classes.headerTop}>
					Special offer + Free delivery 2-4 days in UK
				</div>
				<div className={`${classes.headerBottom} container`}>
					<div className={classes.logo}>
						<img src={logo} alt='' />
					</div>
					<div className={classes.navigation}>
						<nav>
							<ul>
								<li>
									<NavLink to={'/'}>Catalogue</NavLink>
								</li>
								<li>
									<NavLink to={'info_pages/track_your_order'}>Track your order</NavLink>
								</li>
								<li>
									<NavLink>FAQ</NavLink>
								</li>
								<li>
									<NavLink>Contact us</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className={classes.headerBtns}>
						<div className={classes.basketBtn}>
							<Link to={'/cart'} onMouseEnter={openCart}>
								<img src={basket} alt='' />
							</Link>
							<div className={classes.cartQuantity}>{totalQuantity}</div>
						</div>
						<div className={classes.menuBtn}>
							<button onClick={() => setMobileMenuIsActive((prev) => !prev)}>
								{mobileMenuIsActive ? (
									<img src={close} alt='' />
								) : (
									<img src={menuIcon} alt='' />
								)}
							</button>
						</div>
					</div>
				</div>
			</header>
			<div
				className={`${classes.navigationMobile} ${
					mobileMenuIsActive && classes.active
				}`}>
				<nav>
					<ul>
						<li>
							<NavLink to={'/'}>Catalogue</NavLink>
							<img src={rightArrow} alt='' />
						</li>
						<li>
							<NavLink to={'info_pages/track_your_order'}>Track your order</NavLink>
							<img src={rightArrow} alt='' />
						</li>
						<li>
							<NavLink>FAQ</NavLink>
							<img src={rightArrow} alt='' />
						</li>
						<li>
							<NavLink>Contact us</NavLink>
							<img src={rightArrow} alt='' />
						</li>
					</ul>
				</nav>
			</div>
			<div className={classes.menuActiveBackground}></div>
			<div className={classes.cartCont}>
				<div
					className={`${classes.cartBackground} ${
						cartIsShow && classes.active
					}`}></div>
				<div
					onMouseLeave={closeCartLeave}
					className={`${classes.cart} ${cartIsShow && classes.active}`}>
					{cartItems.length === 0 && (
						<div className={classes.cartTop} style={{ margin: 0 }}>
							<p>Your bag is empty</p>
						</div>
					)}
					{cartItems.length > 0 && (
						<>
							<div className={classes.cartTop}>
								<p>Summary ({totalQuantity})</p>
								<button onClick={closeCart} className={classes.btnCloseCart}>
									<img src={close} alt='' />
								</button>
							</div>
							<div className={classes.line}></div>
							<div className={classes.cartBody}>
								{cartItems.map((item) => (
									<div className={classes.cartProduct}>
										<div className={classes.cartImg}>
											<img src={img} alt='' />
										</div>
										<div className={classes.cartBodyMain}>
											<div className={classes.cartProductInfo}>
												<p>Nike Sportswear Club Fleece</p>
												<p className={classes.size}>Size: M</p>
												<p className={classes.color}>Color: Blue</p>
											</div>
											<div className={classes.options}>
												<button
													onClick={() => removeProductHandler(item.itemId)}>
													Remove X
												</button>
												<p>Quantity {item.quantity}</p>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className={classes.line}></div>
							<div className={classes.cartFooter}>
								<div className={classes.cartSummary}>
									<p>Summary</p>
									<p>{totalPrice}$</p>
								</div>
								<div className={classes.cartButtons}>
									<button>Buy Now</button>
									<button>View Bag</button>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
