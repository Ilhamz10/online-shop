import React, { useState } from 'react';

import classes from './Catalog.module.css';
import catalogImage from '../../assets/images/main-image.png';
import closeBtn from '../../assets/icons/close.svg';
import rightArrow from '../../assets/icons/chevron_right.svg';

import FillterButton from '../../components/UI/FilterButton/FillterButton';
import ProductCard from '../../components/ProductCard/ProductCard';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../store/filter-slice';
import Dropdown from '../../components/UI/Dropdown/Dropdown';

const SIZES = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
const categoryFilters = ['KnitwearKnitwear', 'Shirts', 'Polo Shirts'];
const COLORS = [
	{ iconColor: 'white', color: 'black', label: 'Black' },
	{ iconColor: 'black', color: 'white', label: 'White' },
	{ iconColor: 'black', color: '#0CC108', label: 'Green' },
	{ iconColor: 'black', color: '#FC77FF', label: 'Pink' },
	{ iconColor: 'black', color: '#FF8A00', label: 'Orange' },
];

export const DUMMY_PRODUCTS = [
	{
		id: 1,
		productTitle: 'Nike Sportswear Club Fleece',
		productDescription: 'Overdyed stock logo mock',
		price: 300,
		priceWithDiscount: 250,
		sizes: [
			{ size: 'XXS', disable: false },
			{ size: 'XS', disable: false },
			{ size: 'S', disable: false },
			{ size: 'M', disable: true },
			{ size: 'L', disable: false },
			{ size: 'XL', disable: true },
			{ size: 'XXL', disable: false },
		],
		filters: {
			category: 'Shirts',
			size: ['XXS', 'L', 'XL'],
			color: 'Black',
		},
	},
	{
		id: 2,
		productTitle: 'Nike Sportswear Club Fleece',
		productDescription: 'Overdyed stock logo mock',
		price: 300,
		priceWithDiscount: 260,
		sizes: [
			{ size: 'XXS', disable: false },
			{ size: 'XS', disable: true },
			{ size: 'S', disable: false },
			{ size: 'M', disable: false },
			{ size: 'L', disable: false },
			{ size: 'XL', disable: false },
			{ size: 'XXL', disable: true },
		],
		filters: {
			category: 'KnitwearKnitwear',
			size: ['XXS', 'L', 'XL'],
			color: 'Black',
		},
	},
	{
		id: 3,
		productTitle: 'Nike Sportswear Club Fleece',
		productDescription: 'Overdyed stock logo mock',
		price: 300,
		priceWithDiscount: 270,
		sizes: [
			{ size: 'XXS', disable: false },
			{ size: 'XS', disable: true },
			{ size: 'S', disable: false },
			{ size: 'M', disable: false },
			{ size: 'L', disable: false },
			{ size: 'XL', disable: false },
			{ size: 'XXL', disable: true },
		],
		filters: {
			category: 'KnitwearKnitwear',
			size: ['XXS', 'L', 'XL'],
			color: 'Black',
		},
	},
	{
		id: 4,
		productTitle: 'Nike Sportswear Club Fleece',
		productDescription: 'Overdyed stock logo mock',
		price: 300,
		priceWithDiscount: 280,
		sizes: [
			{ size: 'XXS', disable: false },
			{ size: 'XS', disable: true },
			{ size: 'S', disable: false },
			{ size: 'M', disable: false },
			{ size: 'L', disable: false },
			{ size: 'XL', disable: false },
			{ size: 'XXL', disable: true },
		],
		filters: {
			category: 'KnitwearKnitwear',
			size: ['XXS', 'L', 'XL'],
			color: 'Black',
		},
	},
];

const Catalog = () => {
	const selectedFilters = useSelector((state) => state.filter.selectedFilters);
	const selectedSort = useSelector((state) => state.sort.sort);

	const [isFilteresOpen, setIsFilteresOpen] = useState(false);
	const [products, setProducts] = useState(DUMMY_PRODUCTS);

	const filteredProducts = products.filter((product) => {
		const filteredByCategory =
			selectedFilters.category.includes(product.filters.category) ||
			!selectedFilters.category.length;

		const filteredByColor =
			selectedFilters.color.includes(product.filters.color) ||
			!selectedFilters.color.length;

		const filteredBySize =
			selectedFilters.size.some((size) =>
				product.filters.size.includes(size)
			) || !selectedFilters.size.length;

		if (filteredByCategory && filteredByColor && filteredBySize) {
			return true;
		}
	});

	const sortedAndFilteredProducts = sortProduct();

	function sortProduct() {
		switch (selectedSort) {
			case 'Price: high to low':
				return [...filteredProducts].sort(
					(prodA, prodB) => prodB.priceWithDiscount - prodA.priceWithDiscount
				);
			case 'Price: low to high':
				return [...filteredProducts].sort(
					(prodA, prodB) => prodA.priceWithDiscount - prodB.priceWithDiscount
				);
			default:
				return [...filteredProducts];
		}
	}

	const dispatch = useDispatch();

	function setFilterHandler(label, filterType) {
		const filterAlreadyChecked = selectedFilters[filterType].some((myFilter) =>
			myFilter.includes(label)
		);

		if (!filterAlreadyChecked) {
			dispatch(
				filterActions.addToFilters({
					filterType: filterType,
					filter: label,
				})
			);
		} else {
			dispatch(
				filterActions.removeFilter({
					filterType: filterType,
					filter: label,
				})
			);
		}
	}

	let selectedFiltersCount = 0;
	for (let filterType in selectedFilters) {
		selectedFiltersCount += selectedFilters[filterType].length;
	}

	return (
		<section>
			<div className={`${classes.catalogContent} container`}>
				<div className={classes.catalogImg}>
					<img src={catalogImage} alt='' />
				</div>
				<div className={classes.topFilters}>
					<FillterButton
						type={'radio'}
						checked={true}
						label={'Man'}
						id={1}
						name={'gender'}
					/>
					<FillterButton
						type={'radio'}
						label={'Woman'}
						id={2}
						name={'gender'}
					/>
					<FillterButton type={'radio'} label={'Kids'} id={3} name={'gender'} />
					<FillterButton
						type={'radio'}
						label={'Shoes'}
						id={4}
						name={'gender'}
					/>
				</div>
				<div className={classes.mainCatalog}>
					<div
						className={`${classes.sideFilters} ${
							isFilteresOpen ? classes.open : ''
						}`}>
						<form>
							<div className={classes.sideFiltersTop}>
								<h2>Filters ({selectedFiltersCount})</h2>
								<input type='reset' value={'Reset all'} />
								<button className='hidden sm:block' onClick={() => setIsFilteresOpen(false)}>
									<img src={closeBtn} alt='' />
								</button>
							</div>
							<div className={classes.allFilters}>
								<div className={classes.category}>
									<p>Category</p>
									<div className={classes.categoryButtons}>
										{categoryFilters.map((label, index) => (
											<div>
												<Checkbox
													type={'category'}
													key={index}
													id={'check' + index}
													label={label}
													onChange={() => setFilterHandler(label, 'category')}
												/>
											</div>
										))}
									</div>
								</div>
								<div className={classes.size}>
									<p>Size</p>
									<div className={classes.sizeButtons}>
										{SIZES.map((size, index) => (
											<FillterButton
												id={`size${index}`}
												key={index}
												label={size}
												name={'size'}
												type={'checkbox'}
												onChange={() => setFilterHandler(size, 'size')}
											/>
										))}
									</div>
								</div>
								<div className={classes.price}>
									<p>Price</p>
									<div className={classes.priceButtons}>
										<input type='text' placeholder='30$' />
										<input type='text' placeholder='5800$' />
									</div>
								</div>
								<div className={classes.color}>
									<p>Color</p>
									<div className={classes.colorButtons}>
										{COLORS.map((item, index) => (
											<Checkbox
												id={'color' + index}
												key={index}
												label={item.label}
												type={'color'}
												iconColor={item.iconColor}
												color={item.color}
												onChange={() => setFilterHandler(item.label, 'color')}
											/>
										))}
									</div>
								</div>
								<div className={classes.sideFiltersFooter}>
									<input type='reset' value={'Reset all'} />
									<button type='button' onClick={() => setIsFilteresOpen(false)}>
										Show results ({filteredProducts.length}){' '}
										<img src={rightArrow} alt='' />
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className={classes.products}>
						<div className={classes.banner}></div>
						<div className={classes.sort}>
							<p>{filteredProducts.length} results</p>
							<div className={classes.sortContainer}>
								<Dropdown
									items={[
										'Our Picks',
										'Newest first',
										'Price: high to low',
										'Price: low to high',
									]}
								/>
							</div>
							<button
								className={classes.openFiltersBtn}
								onClick={() => setIsFilteresOpen(true)}>
								Filters +
							</button>
						</div>
						<div className={classes.allProducts}>
							{sortedAndFilteredProducts.map((product) => (
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
				</div>
			</div>
		</section>
	);
};

export default Catalog;
