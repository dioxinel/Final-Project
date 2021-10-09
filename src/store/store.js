import { configureStore } from '@reduxjs/toolkit';
import { initialStore } from './initialStore';
import { loadingReducer, viewerReducer } from './reducer';

export const store = configureStore({
	reducer: { viewer: viewerReducer, loading: loadingReducer },
	preloadedState: initialStore,
});
