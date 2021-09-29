import { createReducer } from "@reduxjs/toolkit";
import { initialStore } from "./index";

export const itemsReducer = createReducer(initialStore, {
  'items/add': (state, action) => {
    state.items = action.payload
  },
})

