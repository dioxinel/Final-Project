import { createReducer, current } from '@reduxjs/toolkit';
import {
	addFavorites,
	addProducts,
	addProductToFavorites,
	clearProductsStore,
	endLoading,
	errorLoading,
	removeProductFromFavorites,
	removeViewer,
	setViewer,
	startLoading,
} from './actions';
import { initialStore } from './initialStore';
import api from '../api';
import { getItemById } from '../utils';

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
		console.log(product);

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
});
