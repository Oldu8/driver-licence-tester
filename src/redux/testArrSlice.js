import { createSlice } from "@reduxjs/toolkit";
import { testsArr } from "../assets/testArr"


const testArrSlice = createSlice({
    name: "DOWNLOAD_TESTS",
    initialState: { ...testsArr },
    reducers: {
        getTestArr(state, action) {
            console.log(action);

        }
    },
})

export const { getTestArr } = testArrSlice.actions;
export default testArrSlice.reducer