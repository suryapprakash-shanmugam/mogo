import { createSlice } from "@reduxjs/toolkit";
import { productState } from "../../InitialState/Products/ProductsState";

export const productSlice = createSlice({
    name: 'ProductList',
    initialState: productState,
    reducers: {
        setProductList: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setProductList } = productSlice.actions;