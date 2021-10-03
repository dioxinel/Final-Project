import { configureStore } from '@reduxjs/toolkit';
import { initialStore } from './initialStore';
import { viewerReducer } from './reducer';

export const store = configureStore({
	reducer: { viewer: viewerReducer },
	preloadedState: initialStore,
});
