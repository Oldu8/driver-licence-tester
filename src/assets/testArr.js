import ds_t1_q1 from "./testsImg/ds_t1_q1.png"
import ds_t1_q2 from "./testsImg/ds_t1_q2.png"
import ds_t1_q3 from "./testsImg/ds_t1_q3.png"
import ds_t1_q4 from "./testsImg/ds_t1_q4.png"
import ds_t1_q5 from "./testsImg/ds_t1_q5.png"

import dr_t1_q2 from "./testsImg/dr_t1_q2.png"
export const testsArr = {
    drivingRules: {
        test1: [
            {
                question: "In which of the following locations is it dangerous or unlawful to make a U-turn ?",
                incorrect_answers: [
                    "In a curve or on a hill, where visibility is less then 150 meteres in either direction",
                    "On a railway crossing or within 30 meteres of a railway crossing",
                    "Within 150 metres of a bridge, viaduct, or tunnel if the driver's view is obstructed",
                ],
                correct_answer: 'In all of the above locations'
            },
            {
                question: "At an intersection, the traffic light is red, but a police officer motions you to go through. What should you do ?",
                img: dr_t1_q2,
                incorrect_answers: [
                    "Stop and make sure that the police officer really wants you to go through",
                    "Tell the police officer that the light is red",
                    "Wait for the light to turn green"
                ],
                correct_answer: "Go through"
            },
            {
                question: "If you right wheels drop off the roadway, what is the best way to get back onto the roadway ?",
                incorrect_answers: [
                    "Apply the brakes to reduce your speed",
                    "Steer hard to the left",
                    "Apply the brakes and steer hard to the left",
                ],
                correct_answer: "Take your foot off the gas pedal, let your vehicle slow down, and gently steer back onto the roadway"
            },
            {
                question: "When changing lanes on a multi-lane highway, a driver should",
                incorrect_answers: [
                    "use the horn",
                    "activate the emergency signal",
                    "move into the new lane as fast as possible"
                ],
                correct_answer: "check the mirrors and signal"
            },
            {
                question: "To pull out of a parking space, you should",
                incorrect_answers: [
                    "honk your horn and slowly pull away from the curb",
                    "check for traffic, signal, and quickly pull away from the curb",
                    "check for traffic, signal, and pull away from the curb when it is safe to do so",
                ],
                correct_answer: "signal and pull away from the curb"
            },
            // {
            //     question: "",
            //     incorrect_answers: [
            //         "",
            //         "",
            //         ""
            //     ],
            //     correct_answer: ''
            // },
        ],
        test2: {},
        test3: {},
        test4: {},
        test5: {}
    },
    drivingSigns: {
        test1: [
            {
                question: "What does this sign mean ?",
                img: ds_t1_q1,
                incorrect_answers: [
                    "No trucks allowed",
                    "Slow down for trucks",
                    "Truck route"
                ],
                correct_answer: "Truck entrance ahead on the right"
            },
            {
                question: "What does a pair of these signs mean ?",
                img: ds_t1_q2,
                incorrect_answers: [
                    "Do not park in the area between the signs",
                    "Do not stop in the area between the signs expect to load or unload passengers or merchhandise",
                    "Do not stand in the area between the signs"
                ],
                correct_answer: "Do not stop in the area between the signs"
            },
            {
                question: "What does this road sing mean ?",
                img: ds_t1_q3,
                incorrect_answers: [
                    "You may not turn left on a red light",
                    "There is no road on the right side of the intersection",
                    "You may not turn right on a green light",
                ],
                correct_answer: "You may not turn right on a red light"
            },
            {
                question: "What does this sign mean ?",
                img: ds_t1_q4,
                incorrect_answers: [
                    "Ther is winding road ahead",
                    "The road turns right and then left",
                    "Pass other traffic on the right"
                ],
                correct_answer: "Keep right of the obstacle ahead"
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q5,
                incorrect_answers: [
                    "Hidden intersection ahead",
                    "Hidden bus bay ahead",
                    "School zone ahead"
                ],
                correct_answer: "Hidden school bus stop ahead"
            },
            // {
            //     question: "",
            //     options: [
            //         "",
            //         "",
            //         "",
            //         ""
            //     ],
            //     correct_answer: ''
            // },
        ],
        test2: {},
        test3: {},
        test4: {},
        test5: {}
    }
}

const initialState = {
    tests: {
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
}