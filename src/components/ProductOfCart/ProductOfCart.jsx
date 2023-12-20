import React from 'react';

import product1 from '../../assets/images/product2.png';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductOfCart = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<div className='flex gap-5 border-t-2 border-t-[#e6e6e6] pt-4 first:border-0 sm:gap-2'>
			<img src={product1} className='w-full max-w-xs sm:max-w-[100px] sm:h-[147px] object-cover' alt='' />
			<div className='w-full sm:text-sm sm:flex sm:flex-col sm:justify-between sm:items-start'>
				<div>
					<div className='flex gap-2 text-xl justify-between text-[#222] font-medium sm:text-sm'>
						<h2>{product.itemTitle}</h2>
						<div>{product.totalPrice}$</div>
					</div>
					<div className='flex gap-2 my-4 sm:my-2'>
						<p>Quantity:</p>
						<div className='flex gap-2'>
							<button>-</button>
							<p>{product.quantity}</p>
							<button>+</button>
						</div>
					</div>
					<div className='flex gap-2 mb-2 sm:mb-0'>
						<p>Size:</p>
						<p>{product.itemSize}</p>
					</div>
					<div className='flex gap-2 mb-8 sm:mb-0'>
						<p>Color:</p>
						<p>{product.itemColor}</p>
					</div>
				</div>
				<button
					className='text-base text-[#222] sm:text-sm'
					onClick={() => dispatch(cartActions.removeFromCart(product.itemId))}>
					Remove X
				</button>
			</div>
		</div>
	);
};

export default ProductOfCart;
