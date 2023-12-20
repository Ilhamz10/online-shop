import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedFilters: { category: [], color: [], size: [] },
};

const filterSlicer = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		addToFilters(state, action) {
			const selectedFilter = action.payload;
			state.selectedFilters[selectedFilter.filterType].push(selectedFilter.filter);
		},
		removeFilter(state, action) {
			const myFilter = action.payload;
			state.selectedFilters[myFilter.filterType] = state.selectedFilters[myFilter.filterType].filter(
				(filt) => filt !== myFilter.filter
			);
		},
	},
});

export const filterActions = filterSlicer.actions;

export default filterSlicer;
