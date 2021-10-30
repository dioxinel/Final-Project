import { createAction } from '@reduxjs/toolkit';
import api from '../api';

export const addProducts = createAction('products/add');
export const addFavorites = createAction('product-favorites/add');
export const addProductToFavorites = createAction('products/addToFavorites');
export const removeProductFromFavorites = createAction(
	'products/removeFromFavorites',
);
export const clearProductsStore = createAction('products/clearStore');
export const setSearchProduct = createAction('searchProduct/set');
export const clearSearchProductPage = createAction('searchProductPage/clear');
export const setKeywords = createAction('keywords/set');
export const addSearchProduct = createAction('searchProduct/add');
export const setActiveCategory = createAction('activeCategory/set');
export const setProducts = createAction('products/set');
export const setSort = createAction('sort/set');

export const setViewer = createAction('viewer/set');
export const removeViewer = createAction('viewer/remove');
export const setPostAuthAction = createAction('viewerPostAuthAction/set');

export const startLoading = createAction('loading/start');
export const endLoading = createAction('loading/end');
export const errorLoading = createAction('loading/error');

export const addItemToCart = createAction('cartItem/add');
export const removeItemFromCart = createAction('cartItem/remove');
export const setCartItemCount = createAction('cartItemCount/set');
export const setCartItems = createAction('cartItems/set');
export const removeCartItems = createAction('cartItems/remove');

export const asyncRequest = (payload) => async (dispatch) => {
	try {
		dispatch(errorLoading(''));
		dispatch(startLoading());
		const res = await payload.request(payload.params);
		dispatch(payload.action(res.data));
	} catch (err) {
		console.log(err);
		dispatch(errorLoading(err.message));
	} finally {
		dispatch(endLoading());
	}
};

export const searchProduct = (payload) => async (dispatch) => {
	try {
		dispatch(errorLoading(''));
		dispatch(startLoading());
		dispatch(clearSearchProductPage());
		const res = await api.searchProduct({ keywords: payload });

		if (res.data.length === 0) {
			dispatch(setSearchProduct(['not found']));
			return;
		}
		dispatch(setSearchProduct(res.data));
		dispatch(setKeywords(payload));
	} catch (err) {
		console.log(err);
		dispatch(errorLoading(err.message));
	} finally {
		dispatch(endLoading());
	}
};

export const bootstrap = (payload) => async (dispatch) => {
	dispatch(setCartItems());
	try {
		const token = window.localStorage.getItem('___token');
		if (!token) {
			return;
		}
		api.setToken(token);

		const res = await api.getViewer();
		dispatch(setViewer(res.data));
	} catch (err) {}
};

export const postAuthAction = (payload) => async (dispatch) => {
	if (payload.action === 'addToCart') {
		dispatch(addItemToCart(payload.props));
	} else if (payload.action === 'buyNow') {
		dispatch(addItemToCart(payload.props.product));
		dispatch(
			setCartItemCount({
				id: payload.props.product.id,
				count: payload.props.count,
			}),
		);
	} else {
		dispatch(addProductToFavorites(payload.props.id));
		await api.addToFavorites(payload.props.id);
	}
};
