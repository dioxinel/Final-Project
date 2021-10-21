import { configureStore } from '@reduxjs/toolkit';
import { initialStore } from './initialStore';
import {
	cartReducer,
	loadingReducer,
	productsReducer,
	viewerReducer,
} from './reducer';

export const store = configureStore({
	reducer: {
		viewer: viewerReducer,
		loading: loadingReducer,
		products: productsReducer,
		cart: cartReducer,
	},
	preloadedState: initialStore,
});
