import { createReducer, current } from '@reduxjs/toolkit';
import {
	addItemToCart,
	removeCartItems,
	removeItemFromCart,
	setCartItemCount,
	setCartItems,
} from '../actions';
import { getFullPriceAndCount, getItemById } from '../../utils';
import { initialStore } from '../initialStore';

export const cartReducer = createReducer(initialStore, {
	[setCartItems]: (state, action) => {
		state.items = JSON.parse(window.sessionStorage.getItem('cart'))
			? JSON.parse(window.sessionStorage.getItem('cart'))
			: [];
		getFullPriceAndCount(current(state).items, state);
	},

	[addItemToCart]: (state, action) => {
		const double = getItemById(current(state).items, action.payload.id);
		if (double) {
			state.items = [
				{ ...double, count: double.count + 1 },
				...current(state).items.filter((item) => item.id !== action.payload.id),
			];
		} else {
			const newItem = { ...action.payload, count: 1 };
			state.items = [...state.items, newItem];
		}
		window.sessionStorage.setItem('cart', JSON.stringify(current(state).items));
		getFullPriceAndCount(current(state).items, state);
	},

	[removeItemFromCart]: (state, action) => {
		state.items = current(state).items.filter((item) => {
			return item.id !== action.payload;
		});
		window.sessionStorage.setItem('cart', JSON.stringify(current(state).items));
		getFullPriceAndCount(current(state).items, state);
	},
	[setCartItemCount]: (state, action) => {
		const item = { ...getItemById(current(state).items, action.payload.id) };
		item.count = action.payload.count;
		state.items = [
			item,
			...current(state).items.filter((item) => item.id !== action.payload.id),
		];
		window.sessionStorage.setItem('cart', JSON.stringify(current(state).items));
		getFullPriceAndCount(current(state).items, state);
	},

	[removeCartItems]: (state, action) => {
		state.items = [];
		window.sessionStorage.removeItem('cart');
		state.totalPrice = 0;
		state.totalCount = 0;
	},
});
