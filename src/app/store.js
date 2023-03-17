import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/ApiSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		filter_book: filterReducer,
	},
	middleware: (getDefaultMiddleWares) =>
		getDefaultMiddleWares().concat(apiSlice.middleware),
});

