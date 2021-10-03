import { createReducer } from '@reduxjs/toolkit';
import { setViewer } from './actions';
import { initialStore } from './initialStore';

export const viewerReducer = createReducer(initialStore, {
	[setViewer]: (state, action) => {
		return (state = {
			...state,
			viewer: action.payload,
		});
	},
});
