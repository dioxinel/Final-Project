import { createReducer, current } from '@reduxjs/toolkit';
import {
	addFavorites,
	addProducts,
	addProductToFavorites,
	setSearchProduct,
	removeFromProductsStore,
	removeProductFromFavorites,
	setKeywords,
	addSearchProduct,
	clearSearchProductPage,
	setActiveCategory,
	setProducts,
	setSort,
} from '../actions';
import { initialStore } from '../initialStore';

import { getItemById } from '../../utils/utils';

export const productsReducer = createReducer(initialStore, {
	[setProducts]: (state, action) => {
		state.productsPage = { isMoreProducts: true, fetchFrom: 0 };
		if (action.payload.length < 20 && action.payload.length !== 0) {
			state.productsPage.isMoreProducts = false;
		}
		state.productsPage.fetchFrom = 20;
		state.products = action.payload;
	},

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
		let product = getItemById(current(state).products, action.payload);

		let idx = current(state).products.indexOf(product);

		if (idx >= 0) {
			state.products[idx].favorite = true;
		}

		if (current(state).searchProduct.length) {
			product = getItemById(current(state).searchProduct, action.payload);
			idx = current(state).searchProduct.indexOf(product);
			state.searchProduct[idx].favorite = true;
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

	[removeFromProductsStore]: (state, action) => {
		state.favorites = [];
		state.productsPage.products = [];
		state.products = [];
		state.productsPage = { isMoreProducts: true, fetchFrom: 0 };
		state.searchProduct = [];
		state.searchProductPage = {
			isMoreProducts: true,
			fetchFrom: 0,
			keywords: '',
		};
		state.activeCategory = '';
		state.sort = '';
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

	[setActiveCategory]: (state, action) => {
		state.activeCategory = action.payload;
	},

	[setSort]: (state, action) => {
		state.sort = action.payload;
	},
});
