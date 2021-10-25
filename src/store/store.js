import { configureStore } from '@reduxjs/toolkit';
import { initialStore } from './initialStore';
import { viewerReducer } from './reducers/viewerReducer';
import { cartReducer } from './reducers/cartReducer';
import { loadingReducer } from './reducers/loadingReducer';
import { productsReducer } from './reducers/productReducer';

export const store = configureStore({
	reducer: {
		viewer: viewerReducer,
		loading: loadingReducer,
		products: productsReducer,
		cart: cartReducer,
	},
	preloadedState: initialStore,
});
