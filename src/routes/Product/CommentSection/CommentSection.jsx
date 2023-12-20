import React from 'react';

import Comment from '../../../components/Comment/Comment';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import './slider.css'
import classes from './CommentSection.module.css';
import fullStar from '../../../assets/icons/full-star.svg';
import halfStar from '../../../assets/icons/half-star.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	FreeMode,
} from 'swiper/modules';

const CommentSection = () => {
	return (
		<div className={classes.rewiesSection}>
			<div className={classes.reviewSectionTop}>
				<div className={classes.reviewSectionTopLeft}>
					<div className={classes.reviewSectionTitle}>
						<h2>Reviews</h2>
						<span>15</span>
					</div>
					<div className={classes.reviewSectionTopStars}>
						<div className={classes.stars}>
							<img src={fullStar} alt='' />
							<img src={fullStar} alt='' />
							<img src={fullStar} alt='' />
							<img src={fullStar} alt='' />
							<img src={halfStar} alt='' />
						</div>
						<p>4.6</p>
					</div>
				</div>
				<div className={classes.reviewSectionTopRight}>
					<button className={classes.reviewButton}>Write a Review</button>
				</div>
			</div>
			<Swiper
				style={{ width: '100%', margin: 0 }}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				loop={false}
				scrollbar={{ enabled: true, horizontalClass: 'myScrollBar' }}
				spaceBetween={8}
				slidesPerView={3.5}>
				<SwiperSlide>
					<Comment />
				</SwiperSlide>
				<SwiperSlide>
					<Comment />
				</SwiperSlide>
				<SwiperSlide>
					<Comment />
				</SwiperSlide>
				<SwiperSlide>
					<Comment />
				</SwiperSlide>
				<SwiperSlide>
					<Comment />
				</SwiperSlide>
				<SwiperSlide>
					<Comment />
				</SwiperSlide>
				<SwiperSlide>
					<Comment />
				</SwiperSlide>
			</Swiper>
			<div className='sliderButtons'>
				<button className='prevButton'>prev</button>
				<button className='nextButton'>next</button>
			</div>
		</div>
	);
};

export default CommentSection;
