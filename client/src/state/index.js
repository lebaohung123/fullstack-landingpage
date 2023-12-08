import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isCartOpen: false,
	carts: [],
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		},
		addToCart: (state, action) => {
			state.carts = [...state.carts, action.payload];
		},
		removeFromCart: (state, action) => {
			const newCart = state.carts.filter((item) => item.id !== action.payload);
			state.carts = newCart;
		},
		increaseCount: (state, action) => {
			state.carts = state.carts.map((item) => {
				if (item.id === action.payload.id) {
					item.id++;
				}
				return item;
			});
		},
		decreaseCount: (state, action) => {
			state.carts = state.carts.map((item) => {
				if (item.id === action.payload.id && item.id >=1) {
					return item.id-- ;
				}
				return increaseCount;
			});
		},
	},
});

export const { setItems } = cartSlice.actions;
export default cartSlice.reducer;
