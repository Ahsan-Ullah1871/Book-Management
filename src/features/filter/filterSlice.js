import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	search_text: "",
	featured: false,
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setSearchKey: (state, action) => {
			state.search_text = action.payload;
		},
		setType: (state, action) => {
			state.featured = action.payload;
		},
	},
});

export default filterSlice.reducer;
export const { setSearchKey, setType } = filterSlice.actions;
