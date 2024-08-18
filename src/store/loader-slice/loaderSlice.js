import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageLoading: false,
};

const loaderSlice = createSlice({
    name: "Loader State",
    initialState,
    reducers: {
        togglePageLoader: (state, action) => {
            state.pageLoading = action.payload;
        },
    },
});

export const { togglePageLoader } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
