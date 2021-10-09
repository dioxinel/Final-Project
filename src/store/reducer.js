import { createReducer } from '@reduxjs/toolkit';
import { endLoading, errorLoading, setViewer, startLoading } from './actions';
import { initialStore } from './initialStore';
import api from '../api';

export const viewerReducer = createReducer(initialStore, {
	[setViewer]: (state, action) => {
		if (action.payload.hasOwnProperty('token')) {
			state.viewer = action.payload.account;
			api.setToken(action.payload.token);
		} else {
			state.viewer = action.payload;
		}
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
