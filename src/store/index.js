import { configureStore } from "@reduxjs/toolkit";
import { loaderReducer } from "@store/loader-slice/loaderSlice";

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
    },
});
