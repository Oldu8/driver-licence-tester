import { configureStore } from "@reduxjs/toolkit";
import testCounterReducer from "./testCounterSlice.js";
import testArrReducer from "./testArrSlice.js";


export const store = configureStore({
    reducer: {
        testsData: testCounterReducer,
        testArr: testArrReducer,
    },
})