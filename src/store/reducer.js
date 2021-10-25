import { createReducer, current } from '@reduxjs/toolkit';
import {
	addFavorites,
	addItemToCart,
	addProducts,
	addProductToFavorites,
	setSearchProduct,
	clearProductsStore,
	endLoading,
	errorLoading,
	removeCartItems,
	removeItemFromCart,
	removeProductFromFavorites,
	removeViewer,
	setCartItemCount,
	setCartItems,
	setViewer,
	startLoading,
} from './actions';
import { initialStore } from './initialStore';
import api from '../api';
import { getFullPriceAndCount, getItemById } from '../utils';

export const viewerReducer = createReducer(initialStore, {
	[setViewer]: (state, action) => {
		state.isLoggedIn = true;
		if (action.payload.hasOwnProperty('token')) {
			state.viewer = action.payload.account;
			api.setToken(action.payload.token);
		} else {
			state.viewer = action.payload;
		}
	},

	[removeViewer]: (state, action) => {
		state.isLoggedIn = false;
		state.viewer = {};
	},
});

export const loadingReducer = createReducer(initialStore, {
	[startLoading]: (state, action) => {
		state.isLoading = true;
	},

	[endLoading]: (state, action) => {
		state.isLoading = false;
	},

	[errorLoading]: (state, action) => {
		state.error = action.payload;
	},
});

export const productsReducer = createReducer(initialStore, {
	[addProducts]: (state, action) => {
		if (action.payload.length < 20 || action.payload[19].id <= 1) {
			state.isMoreProducts = false;
		}
		state.fetchFrom = current(state).fetchFrom + 20;
		state.products = [...current(state.products), ...action.payload];
	},

	[addFavorites]: (state, action) => {
		state.favorites = action.payload;
	},

	[addProductToFavorites]: (state, action) => {
		const product = getItemById(current(state).products, action.payload);
		const idx = current(state).products.indexOf(product);

		if (current(state).favorites.length) {
			state.favorites = [
				{ ...product, favorite: true },
				...current(state).favorites,
			];
		}

		state.products[idx].favorite = true;
	},

	[removeProductFromFavorites]: (state, action) => {
		if (current(state).favorites.length) {
			state.favorites = current(state).favorites.filter((item) => {
				return item.id !== Number(action.payload);
			});
		}

		if (current(state).products.length) {
			const product = getItemById(current(state).products, action.payload);
			const idx = current(state).products.indexOf(product);

			state.products[idx].favorite = false;
		}
	},

	[clearProductsStore]: (state, action) => {
		state.favorites = [];
		state.products = [];
		state.fetchFrom = 0;
	},
	[setSearchProduct]: (state, action) => {
		state.searchProduct = action.payload;
	},
});

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
