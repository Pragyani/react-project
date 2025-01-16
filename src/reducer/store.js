import { configureStore } from "@reduxjs/toolkit";
import reducer from './index';

const store = configureStore({
    reducer: {
        inputSlice: reducer.inputSliceIndexReducer
    }
});

export default store;