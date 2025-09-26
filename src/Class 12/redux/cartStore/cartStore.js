import { configureStore } from "@reduxjs/toolkit";
import { cartSlicer } from "../cartSlicer/cartSlicer";

export const cartStore=configureStore({
    reducer:{
        cart:cartSlicer.reducer
    }
})