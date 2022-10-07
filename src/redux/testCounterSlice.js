import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const createInitialTest = () => ({
    status: 'Not started',
    correct: 0,
    incorrect: 0,
});
const createRules = () => {
    return Array.from(new Array(5), (_, i) => i).reduce((acc, item, index) => {
        acc[`test${index + 1}`] = createInitialTest()
        return acc
    }, {})
}

const testCounterSlice = createSlice({
    name: "results",
    initialState: {
        testsData: {
            drivingRules: createRules(),
            drivingSigns: createRules(),
        }
    },
    reducers: {
        setStartStatus: (state, action) => {
            const { category, number } = action.payload
            const testNumber = 'test' + number;
            const currentState = current(state.testsData);
            let currStatus = currentState[category][testNumber].status;
            if (currStatus === 'Not started') {
                state.testsData[category][testNumber].status = 'Started'
                state.currentTest = { testNumber, category }
            }
        },
        setFinishStatus: (state, action) => {
            const { testNumber, category } = action.payload
            const currentState = current(state.testsData);
            let currInCorrect = currentState[category][testNumber].incorrect
            let currCorrect = currentState[category][testNumber].correct
            if (currCorrect > 16) {
                state.testsData[category][testNumber].status = 'Passed';

            } else if (currentState === 'Started' && currInCorrect > 4) {
                state.testsData[category][testNumber].status = 'Failed'
            }
        },
        setScore(state, action) {
            const { category, testNumber } = current(state.currentTest)
            { action.payload === "inc" ? state.testsData[category][testNumber].correct += 1 : state.testsData[category][testNumber].incorrect += 1; }
        },
        setClearResults(state, action) {
            const { category, testNumber } = action.payload
            const currentState = state.testsData;
            currentState[category][testNumber].incorrect = 0;
            currentState[category][testNumber].correct = 0;
        }
    },
})

export const { setStartStatus, setFinishStatus, setScore, setClearResults } = testCounterSlice.actions;
export default testCounterSlice.reducer
