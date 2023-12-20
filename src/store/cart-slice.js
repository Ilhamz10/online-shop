import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	totalQuantity: 0,
};

const cartSlicer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const newItem = action.payload;
			const existingProduct = state.items.find(
				(item) => item.itemId === newItem.id
			);

			if (!existingProduct) {
				state.totalQuantity++;
				state.items.push({
					itemId: newItem.id,
					itemTitle: newItem.title,
					itemDescription: newItem.description,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					itemSize: newItem.size,
					itemColor: newItem.color,
				});
			} else {
				state.totalQuantity++;
				existingProduct.quantity = existingProduct.quantity + 1;
				existingProduct.itemSize = newItem.size;
				existingProduct.totalPrice = existingProduct.totalPrice + newItem.price;
			}
		},
		removeFromCart(state, action) {
			let id = action.payload;
			const deletedItem = state.items.find((item) => item.itemId === id);
			state.items = state.items.filter((item) => item.itemId !== id);
			state.totalQuantity = state.totalQuantity - deletedItem.quantity;
		},
	},
});

export const cartActions = cartSlicer.actions;

export default cartSlicer;
