import { createSlice } from "@reduxjs/toolkit";
import { loginState } from "../../InitialState/Login/LoginState";

export const loginSlice = createSlice({
    name: 'loginStatus',
    initialState: loginState,
    reducers: {
        setLoginStatus: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setLoginStatus } = loginSlice.actions