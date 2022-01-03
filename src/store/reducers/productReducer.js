import { createReducer, current } from '@reduxjs/toolkit';
import {
	addFavorites,
	addProducts,
	addProductToFavorites,
	removeProductFromFavorites,
	setProducts,
	setProductsFilterParams,
} from '../actions';
import { initialStore } from '../initialStore';

import { getItemById } from '../../utils/utils';

export const productsReducer = createReducer(initialStore, {
	[setProducts]: (state, action) => {
		if (action.payload.length < 20 && action.payload.length !== 0) {
			state.productsFilterParams.isMoreProducts = false;
		}
		state.products = action.payload;
	},

	[addProducts]: (state, action) => {
		if (action.payload.length < 20) {
			state.productsFilterParams.isMoreProducts = false;
		}
		state.products = [...current(state.products), ...action.payload];
	},

	[addFavorites]: (state, action) => {
		state.favorites = action.payload;
	},

	[addProductToFavorites]: (state, action) => {
		let product = getItemById(current(state).products, action.payload);

		let idx = current(state).products.indexOf(product);

		if (idx >= 0) {
			state.products[idx].favorite = true;
		}

		if (current(state).favorites.length) {
			state.favorites = [
				{ ...product, favorite: true },
				...current(state).favorites,
			];
		}
	},

	[removeProductFromFavorites]: (state, action) => {
		if (current(state).favorites.length) {
			state.favorites = current(state).favorites.filter((item) => {
				return item.id !== Number(action.payload);
			});
		}

		if (current(state).products.length) {
			const product = getItemById(current(state).products, action.payload);
			if (!product) return;
			const idx = current(state).products.indexOf(product);

			state.products[idx].favorite = false;
		}
	},

	[setProductsFilterParams]: (state, action) => {
		for (let key in action.payload) {
			state.productsFilterParams[key] = action.payload[key];
		}
	},
});
