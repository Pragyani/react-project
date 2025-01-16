import { createSlice } from "@reduxjs/toolkit";

export const inputSliceIndex = createSlice({
    name: 'inputslice',
    initialState: '',
    reducers: {
        setInput: (state, action) => action.payload
    }
});

export const { setInput } = inputSliceIndex.actions;

export default {
    inputSliceIndexReducer: inputSliceIndex.reducer
};
