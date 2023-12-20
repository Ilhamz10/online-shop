import React, { useState } from 'react';

import classes from './Productcard.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { Link } from 'react-router-dom';
import RadioBtn from '../UI/RadioBtn/RadioBtn';

import whiteClose from '../../assets/icons/close-white.svg';

const ProductCard = ({
	id,
	title,
	description,
	price,
	priceWithDiscount,
	sizes,
}) => {
	const [quickShopIsActive, setQuickShopIsActive] = useState(false);
	const dispatch = useDispatch();

	const [size, setSize] = useState('');
	const [color, setColor] = useState('');

	function addToCartHandler() {
		dispatch(
			cartActions.addToCart({
				id: id,
				title,
				description,
				price: priceWithDiscount,
				size,
				color,
			})
		);
	}

	return (
		<div className={classes.ProductCard}>
			<div className={classes.cardTop}>90% off until midnight</div>
			<div className={classes.productImg}>
				<div className={classes.quickShopBackground}></div>
				<div
					className={`${classes.quickShop} ${
						quickShopIsActive && classes.active
					}`}>
					<div className={classes.quickShopTop}>
						<p>{title}</p>
						<button onClick={() => setQuickShopIsActive(false)}>
							<img src={whiteClose} alt='' />
						</button>
					</div>
					<div className='w-full h-px bg-[white]'></div>
					<div className={classes.quickShopContent}>
						<div className={`${classes.color} flex gap-5 items-center`}>
							<span>Color</span>
							<div className='flex gap-5'>
								<RadioBtn
									type={'color'}
									id={'white1' + id}
									name={'quickShopColor' + id}
									color={'white'}
									iconColor={'black'}
									setProperty={setColor}
									label={'White'}
								/>
								<RadioBtn
									type={'color'}
									id={'black1' + id}
									name={'quickShopColor' + id}
									color={'black'}
									iconColor={'white'}
									setProperty={setColor}
									label={'Black'}
								/>
								<RadioBtn
									type={'color'}
									id={'green1' + id}
									name={'quickShopColor' + id}
									color={'#0CC108'}
									iconColor={'white'}
									setProperty={setColor}
									label={'Green'}
								/>
							</div>
							{color.length === 0 && (
								<span className='text-[#CD1010]'>Select a color</span>
							)}
						</div>
						<hr />
						<div className={classes.size}>
							<p className='flex gap-5'>
								Size{' '}
								{size.length === 0 && (
									<span className='text-[#CD1010]'>Select a size</span>
								)}
							</p>
							<div className={classes.allSizes}>
								{sizes.map((size) => (
									<RadioBtn
										id={'quickShow' + id + size.size}
										key={id + size.size}
										label={size.size}
										type={'size'}
										name={'quickShowSize' + id}
										disabled={size.disable}
										setProperty={setSize}
									/>
								))}
							</div>
						</div>
						<hr />
						<div className={classes.buttons}>
							<button>Buy now</button>
							<button onClick={addToCartHandler}>Add to bag</button>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.productInfo}>
				<Link to={`product/${id}/description`} className={classes.productTitle}>
					{title}
				</Link>
				<p className={classes.productDescription}>{description}</p>
				<div className={classes.productPrice}>
					<div className={classes.price}>
						<p className={classes.discountPrice}>{priceWithDiscount}$</p>
						<p className={classes.highPrice}>({price}$)</p>
					</div>
					<button onClick={() => setQuickShopIsActive((prev) => !prev)}>
						Quick shop {quickShopIsActive ? '-' : '+'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
