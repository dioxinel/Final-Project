import { createReducer, current } from '@reduxjs/toolkit';
import {
	addFavorites,
	addProducts,
	addProductToFavorites,
	setSearchProduct,
	clearProductsStore,
	removeProductFromFavorites,
	setKeywords,
	addSearchProduct,
	clearSearchProductPage,
} from '../actions';
import { initialStore } from '../initialStore';

import { getItemById } from '../../utils';

export const productsReducer = createReducer(initialStore, {
	[addProducts]: (state, action) => {
		if (action.payload.length < 20 || action.payload[19].id <= 1) {
			state.productsPage.isMoreProducts = false;
		}
		state.productsPage.fetchFrom = current(state).productsPage.fetchFrom + 20;
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
		state.productsPage.products = [];
		state.productsPage.fetchFrom = 0;
	},

	[setSearchProduct]: (state, action) => {
		if (action.payload.length < 20 && action.payload.length !== 0) {
			state.searchProductPage.isMoreProducts = false;
		}
		state.searchProductPage.fetchFrom = 20;
		state.searchProduct = action.payload;
	},

	[addSearchProduct]: (state, action) => {
		if (action.payload.length < 20) {
			state.searchProductPage.isMoreProducts = false;
		}
		state.searchProductPage.fetchFrom =
			current(state).searchProductPage.fetchFrom + 20;
		state.searchProduct = [...current(state).searchProduct, ...action.payload];
	},

	[setKeywords]: (state, action) => {
		state.searchProductPage.keywords = action.payload;
	},

	[clearSearchProductPage]: (state, action) => {
		state.searchProductPage.keywords = '';
		state.searchProductPage.fetchFrom = 0;
		state.searchProductPage.isMoreProducts = true;
	},
});