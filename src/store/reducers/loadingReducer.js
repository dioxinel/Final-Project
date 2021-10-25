import { createReducer } from '@reduxjs/toolkit';
import { endLoading, errorLoading, startLoading } from '../actions';
import { initialStore } from '../initialStore';

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
