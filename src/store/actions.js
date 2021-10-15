import { createAction } from '@reduxjs/toolkit';
import api from '../api';

export const addProducts = createAction('products/add');
export const addFavorites = createAction('product-favorites/add');
export const addProductToFavorites = createAction('products/addToFavorites');
export const removeProductFromFavorites = createAction(
	'products/removeFromFavorites',
);
export const clearProductsStore = createAction('products/clearStore');

export const setViewer = createAction('viewer/set');
export const removeViewer = createAction('viewer/remove');

export const startLoading = createAction('loading/start');
export const endLoading = createAction('loading/end');
export const errorLoading = createAction('loading/error');

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

export const bootstrap = (payload) => async (dispatch) => {
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
