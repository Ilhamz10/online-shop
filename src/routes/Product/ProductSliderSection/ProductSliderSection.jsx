import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';

import classes from './ProductSliderSection.module.css';
import product1 from '../../../assets/images/product1.png';
import product2 from '../../../assets/images/product2.png';
import product3 from '../../../assets/images/product3.png';

const ProductSliderSection = () => {
	return (
		<div className={classes.productSection}>
			<Swiper
				style={{ width: '100%', margin: 0 }}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				loop={true}
				pagination={{
					enabled: true,
					bulletClass: 'swiper-pagination-bullet myBullet',
				}}
				spaceBetween={50}
				slidesPerView={1}>
				<SwiperSlide>
					<img src={product1} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product2} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product3} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product2} alt='' />
				</SwiperSlide>
			</Swiper>
			<div className={classes.productInfoPanel}>
				<div className={classes.productPanelTop}>
					<div className={classes.productTitleCont}>
						<p className={classes.productDiscount}>-90%</p>
						<p className={classes.productTitle}>Nike Sportswear Club Fleece</p>
						<p className={classes.productDescription}>
							Overdyed stock logo mock
						</p>
					</div>
					<div className={classes.productPriceCont}>
						<p className={classes.productPriceDiscount}>300$</p>
						<p className={classes.productPrice}>(300$)</p>
					</div>
				</div>
				<div className={classes.productPanelCenter}>
					<div className={classes.productSize}>
						<p>Size guide</p>
						<div className={classes.option}>
							<select>
								<option disabled selected value="">Select value</option>
								<option value={'XXS'}>XXS</option>
								<option value={'XS'}>XS</option>
								<option value={'S'}>S</option>
							</select>
						</div>
					</div>
					<div className={classes.productColor}>
						<p className={classes.productColorText}>
							Color <span>Black</span>
						</p>
					</div>
				</div>
				<div className={classes.productPanelBottom}>
					<p>
						Sale ending in <span>06:06:06</span>
					</p>
					<div className={classes.productPanelButtons}>
						<button>Buy Now</button>
						<button>Add to bag</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductSliderSection;
