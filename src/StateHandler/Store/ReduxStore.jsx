import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../Slice/Login/LoginSlice";
import { carouselSlice } from "../Slice/Home/Carousel/CarouselSlice";
import { userDataSlice } from "../Slice/UserSlice/UserSliceData";
import { productSlice } from "../Slice/Products/ProductSlice";

export const store = configureStore({
    reducer: {
        loginStatus: loginSlice.reducer,
        carouselDetails: carouselSlice.reducer,
        userData: userDataSlice.reducer,
        productList: productSlice.reducer
    }
})