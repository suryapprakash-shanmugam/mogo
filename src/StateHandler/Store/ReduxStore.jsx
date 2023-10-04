import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../Slice/Login/LoginSlice";
import { carouselSlice } from "../Slice/Home/Carousel/CarouselSlice";

export const store = configureStore({
    reducer: {
        loginStatus: loginSlice.reducer,
        carouselDetails: carouselSlice.reducer
    }
})