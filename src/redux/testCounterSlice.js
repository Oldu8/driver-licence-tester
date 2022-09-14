import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'


const testCounterSlice = createSlice({
    name: "results",
    initialState: {
        testsData: {
            drivingRules: {
                test1: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
                test2: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
                test3: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
                test4: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
                test5: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
            },
            drivingSigns: {
                test1: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
                test2: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
                test3: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
                test4: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
                test5: {
                    status: 'Not started',
                    correct: 0,
                    incorrect: 0,
                },
            }
        }
    },
    reducers: {
        setStatus: (state, action) => {
            const { category, number } = action.payload
            const testNumber = 'test' + number;
            const currentState = current(state.testsData);
            let currStatus = currentState[category][testNumber].status;
            let currInCorrect = currentState[category][testNumber].incorrect
            if (currStatus === 'Not started') {
                state.testsData[category][testNumber].status = 'Started'
            }
            else if (currStatus === 'Started' && currInCorrect < 5) {
                state.testsData[category][testNumber].status = 'Successfully'
            } else if (currentState === 'Started' && currInCorrect > 4) {
                state.testsData[category][testNumber].status = 'Failed'
            }
        },
        setScore(state, action) {

        }
    },
})

export const { setStatus, setScore } = testCounterSlice.actions;
export default testCounterSlice.reducer
