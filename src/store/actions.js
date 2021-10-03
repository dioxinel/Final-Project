import { createAction } from '@reduxjs/toolkit';
import api from '../api';

export const setViewer = createAction('viewer/set');

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
