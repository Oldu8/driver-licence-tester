import { createSlice } from "@reduxjs/toolkit";

const currentTestSlice = createSlice({
    name: "SET_TEST_DATA",
    initialState: {},
    reducers: {
        setStatus(state, action) {

        },
        setScore(state, action) {

        }
    },
})

export const { setStatus, setScore } = currentTestSlice.actions;
export default currentTestSlice.reducer