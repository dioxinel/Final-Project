import { configureStore } from '@reduxjs/toolkit'
import { itemsReducer } from './reducer'
import { initialStore } from './initialStore'

export const store = configureStore({
  reducer: itemsReducer,
  preloadedState: initialStore
})