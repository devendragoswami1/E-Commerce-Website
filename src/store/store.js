import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../storeSlices/cartSlice";

const store = configureStore({
    reducer : {
        cart : cartSlice,
    },
})

export default store;
