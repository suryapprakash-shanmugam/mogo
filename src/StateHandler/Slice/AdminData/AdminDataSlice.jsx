import { createSlice } from "@reduxjs/toolkit";
import { AdminDataState } from "../../InitialState/AdminData/AdminDataState";

export const AdminDataSlice = createSlice({
    name: 'AdminData',
    initialState: AdminDataState,
    reducers: {
        setAdminData: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setAdminData } = AdminDataSlice.actions