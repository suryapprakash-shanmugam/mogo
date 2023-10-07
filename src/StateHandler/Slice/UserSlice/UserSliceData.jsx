import { createSlice } from "@reduxjs/toolkit";
import { userDataState } from "../../InitialState/userState/userState";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: userDataState,
    reducers: {
        setUserData: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setUserData } = userDataSlice.actions