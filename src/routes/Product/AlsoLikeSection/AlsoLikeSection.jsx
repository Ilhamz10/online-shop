import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard' 
import { DUMMY_PRODUCTS } from '../../Catalog/Catalog';

import classes from './AlsoLikeSection.module.css'

const AlsoLikeSection = () => {
	return (
		<div className={classes.alsoLikeSection}>
			<h2 className={classes.title}>You May Also Like</h2>
			<div className={classes.allProducts}>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductCard
						id={product.id}
						key={product.id}
						description={product.productDescription}
						price={product.price}
						priceWithDiscount={product.priceWithDiscount}
						title={product.productTitle}
						sizes={product.sizes}
					/>
				))}
			</div>
		</div>
	);
};

export default AlsoLikeSection;
