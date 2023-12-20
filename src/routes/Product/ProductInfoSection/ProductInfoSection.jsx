import React from 'react';

import classes from './ProductInfoSection.module.css';
import product1 from '../../../assets/images/product1.png';

const ProductInfoSection = () => {
	return (
		<div className={classes.ProductInfoSection}>
			<img src={product1} className={classes.productInfoImage} />
			<div className={classes.productInfo}>
				<div className={classes.productInfoTitle}>
					The revolutionary TOOB technology is ready to improve your life
				</div>
				<div className={classes.productInfoText}>
					The name TOOB comes from an abbreviation of inner tube. A 2-layer
					opaque transparent polyurethane layer is applied to a coloured cotton
					base layer. The very slight movement of these two layers gives the
					distressed, used appearance and transparent external taping on the
					seams completes the used rubber effect.
				</div>
				<img src={product1} className={classes.productInfoImage} />
				<ul className={classes.productInfoList}>
					<li className={classes.productInfoListItem}>
						<span>Composition</span>
						<ul className={classes.productInfoListItemList}>
							<li>Face: Polyurethan,</li>
							<li>Back: Cotton</li>
						</ul>
					</li>
					<li className={classes.productInfoListItem}>
						<span>Filament Section</span>
						<ul className={classes.productInfoListItemList}>
							<li>Face: Polyurethan,</li>
							<li>Back: Cotton</li>
						</ul>
					</li>
					<li className={classes.productInfoListItem}>
						<span>Fabric Features</span>
						<ol className={classes.productInfoListItemList}>
							<li>Water Resistant</li>
							<li>Coated </li>
							<li>2L</li>
							<li>Bonded</li>
							<li>Windproof</li>
						</ol>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProductInfoSection;
