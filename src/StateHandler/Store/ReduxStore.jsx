import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../Slice/Login/LoginSlice";

export const store = configureStore({
    reducer: {
        loginStatus: loginSlice.reducer
    }
})