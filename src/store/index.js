import { configureStore } from '@reduxjs/toolkit';
import cartSlicer from './cart-slice';
import filterSlicer from './filter-slice';
import sortSlicer from './sort-slice';

const store = configureStore({
	reducer: {
		cart: cartSlicer.reducer,
		filter: filterSlicer.reducer,
		sort: sortSlicer.reducer,
	},
});

export default store;
