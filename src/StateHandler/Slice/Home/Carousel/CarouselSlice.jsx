import { createSlice } from "@reduxjs/toolkit";
import { carouselState } from "../../../InitialState/Home/Carousel/CarouselState";

export const carouselSlice = createSlice({
    name: 'carouselDetails',
    initialState: carouselState,
    reducers: {
        setCarouselDetails: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setCarouselDetails } = carouselSlice.actions