import ds_t1_q1 from "./testsImg/ds_t1_q1.png"
import ds_t1_q2 from "./testsImg/ds_t1_q2.png"
import ds_t1_q3 from "./testsImg/ds_t1_q3.png"
import ds_t1_q4 from "./testsImg/ds_t1_q4.png"
import ds_t1_q5 from "./testsImg/ds_t1_q5.png"
import ds_t1_q6 from "./testsImg/ds_t1_q6.png"
import ds_t1_q7 from "./testsImg/ds_t1_q7.png"
import ds_t1_q8 from "./testsImg/ds_t1_q8.png"
import ds_t1_q9 from "./testsImg/ds_t1_q9.png"
import ds_t1_q10 from "./testsImg/ds_t1_q10.png"
import ds_t1_q11 from "./testsImg/ds_t1_q11.png"
import ds_t1_q12 from "./testsImg/ds_t1_q12.png"
import ds_t1_q13 from "./testsImg/ds_t1_q13.png"
import ds_t1_q14 from "./testsImg/ds_t1_q14.png"
import ds_t1_q15 from "./testsImg/ds_t1_q15.png"
import ds_t1_q16 from "./testsImg/ds_t1_q16.png"
import ds_t1_q17 from "./testsImg/ds_t1_q17.png"
import ds_t1_q18 from "./testsImg/ds_t1_q18.png"
import ds_t1_q19 from "./testsImg/ds_t1_q19.png"
import ds_t1_q20 from "./testsImg/ds_t1_q20.png"

import ds_t2_q1 from "./testsImg/ds_t2_q1.png"
import ds_t2_q2 from "./testsImg/ds_t2_q2.png"
import ds_t2_q3 from "./testsImg/ds_t2_q3.png"
import ds_t2_q4 from "./testsImg/ds_t2_q4.png"
import ds_t2_q5 from "./testsImg/ds_t2_q5.png"
import ds_t3_q1 from "./testsImg/ds_t3_q1.png"
import ds_t3_q2 from "./testsImg/ds_t3_q2.png"
import ds_t3_q3 from "./testsImg/ds_t3_q3.png"
import ds_t3_q4 from "./testsImg/ds_t3_q4.png"
import ds_t3_q5 from "./testsImg/ds_t3_q5.png"
import ds_t4_q1 from "./testsImg/ds_t4_q1.png"
import ds_t4_q2 from "./testsImg/ds_t4_q2.png"
import ds_t4_q3 from "./testsImg/ds_t4_q3.png"
import ds_t4_q4 from "./testsImg/ds_t4_q4.png"
import ds_t4_q5 from "./testsImg/ds_t4_q5.png"
import ds_t5_q1 from "./testsImg/ds_t5_q1.png"
import ds_t5_q2 from "./testsImg/ds_t5_q2.png"
import ds_t5_q3 from "./testsImg/ds_t5_q3.png"
import ds_t5_q4 from "./testsImg/ds_t5_q4.png"
import ds_t5_q5 from "./testsImg/ds_t5_q5.png"

import dr_t1_q2 from "./testsImg/dr_t1_q2.png"
import dr_t1_q9 from "./testsImg/dr_t1_q9.png"
import dr_t2_q2 from "./testsImg/dr_t2_q2.png"
import dr_t2_q4 from "./testsImg/dr_t2_q4.png"
import dr_t5_q5 from "./testsImg/dr_t5_q5.png"



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
            {
                question: "In Ontario, whe must you turn on your headlights?",
                incorrect_answers: [
                    "Between half and hour after sunset and half an hour before sunrise, and at any time you cannot see clearly for a distance of 150 metres.",
                    "Between dusk and dawn, and at any other time you cannot se clearly for a distance of 150 metres.",
                    "Between sunset and sunrise, and at any other time you cannot see clearly for distance of 150 metres."
                ],
                correct_answer: 'Between half an hour before sunset and half an hour after sunrise, and at any other time you cannot see clearly for a distance of 150 metres.'
            },
            {
                question: "When driving in heavy fog, you should use your",
                incorrect_answers: [
                    "parking lights nad high-beam headlights.",
                    "high-beam headlights.",
                    "parking lights."
                ],
                correct_answer: 'low-beam headlights.'
            },
            {
                question: "The two-second rule is use to determine",
                incorrect_answers: [
                    "how fast you can react to obstacles.",
                    "how fast you are travelling.",
                    "how much gas you will save."
                ],
                correct_answer: 'whether you are following at a safe distance'
            },
            {
                question: "If two vehicles approach an uncontrolled intersection from opposite directions at the same time, one going straight while the other is turning left, which vehicle has the right-of-way?",
                img: dr_t1_q9,
                incorrect_answers: [
                    "The one turning left has the right-of-way.",
                    "Both have the right-of-way.",
                    "Both vehicles should stop first and then proceed."
                ],
                correct_answer: 'The one going straight has the right-of-way.'
            },
            {
                question: "When getting out of your car on a busy street, you should open the door",
                incorrect_answers: [
                    "after making the proper signals.",
                    "when you turn on your four-way flashers.",
                    "at any time."
                ],
                correct_answer: 'when you are sure that it can be done safely.'
            },
            {
                question: "A person whose driver's license is under suspension, may",
                incorrect_answers: [
                    "drive in an emergency.",
                    "drive when accompanied by licensed driver.",
                    "drive to and from work."
                ],
                correct_answer: 'not drive under any circumstances.'
            },
            {
                question: "Which of the following classes of vehicles may carry a red light visible from the front?",
                incorrect_answers: [
                    "Trucks",
                    "Bicycles",
                    "Recreational vehicles"
                ],
                correct_answer: 'Emergency vehicles'
            },
            {
                question: "When descending a long, steep hill, how should you control your speed?",
                incorrect_answers: [
                    "Shift into neutral.",
                    "Keep applying the brakes.",
                    "Turn off the ignition."
                ],
                correct_answer: 'Shift into a lower gear.'
            },
            {
                question: "If you become very tired while driving, you should",
                incorrect_answers: [
                    "driver faster to your destination.",
                    "open your windows to allow fresh air in the car.",
                    "drink coffee."
                ],
                correct_answer: 'stop and rest.'
            },
            {
                question: "While driving, a Level Two (Class G2) driver must not have a blood alcohol concentration greater than",
                incorrect_answers: [
                    "0.05%",
                    "0.08%",
                    "0.02%"
                ],
                correct_answer: 'zero.'
            },
            {
                question: "When may lend your driver's licence to another person? ",
                incorrect_answers: [
                    "In emergencies",
                    "Whan that person is learning to drive",
                    "For indentification purposes only"
                ],
                correct_answer: 'Never'
            },
            {
                question: "If you approach several snowplows clearing a freeway, you should NOT",
                incorrect_answers: [
                    "wait for the plows to allow traffic safety pass.",
                    "keep a safe distance.",
                    "do any of the above."
                ],
                correct_answer: 'try to pass between them.'
            },
            {
                question: "Examples of hands-free devices include",
                incorrect_answers: [
                    "a Global Positioning System (GPS) device that is properly secured to the dashboard or another accessible place in the vehicle.",
                    "a portable audio player (such as an MP3 player) that has been plugged into the vehicle's sound system with a preset playlist.",
                    "a cell phone with an earpiece or headset using voice dialling, or plugged into the vehicle's sound system."
                ],
                correct_answer: 'all of the above.'
            },
            {
                question: "On a highway, when may you drive at the maximum speed limit?",
                incorrect_answers: [
                    "Only on one-way roadways.",
                    "At any time.",
                    "Only in the daytime."
                ],
                correct_answer: "Only when it's safe to do so."
            },
            {
                question: "If the signal light changes from green to yellow as you approach an intersection, what should you do?",
                incorrect_answers: [
                    "Continue through the intersection without slowing or stopping.",
                    "Speed up to get past the yellow light before it turns red.",
                    "Sound your horn to warm pedestrians and other drivers that you do not intend to stop."
                ],
                correct_answer: 'Stop. If a stop cannot be made safely, proceed with caution.'
            },
        ],
        test2: [
            {
                question: "If one of your tires suddenly blows out while your're driving, what should you do?",
                incorrect_answers: [
                    "Bring the vehicle to a stop off the road",
                    "Take your foot off the gas pedal",
                    "Concentrate on steering"
                ],
                correct_answer: 'Do all of the above'
            },
            {
                question: "You are on two-lane road. There is a solid yellow line next to a broken yellow line in the center of the road. The solid yellow line is on your side of the road. Which of the following statements is true?",
                img: dr_t2_q2,
                incorrect_answers: [
                    "Pass only when no traffic is in sight",
                    "It is safe to pass",
                    "It is safe to pass in the daytime"
                ],
                correct_answer: 'It is unsafe to pass'
            },
            {
                question: "If you brakes fail, ",
                incorrect_answers: [
                    "apply the parking brake gently but firmly",
                    "pump the brake peadk",
                    "turn on your emergency flashers "
                ],
                correct_answer: 'do all of the above'
            },
            {
                question: "A school bus with flashing red lights is stopped ahead of you. What does the law require you to do when meeting or overtaking the bus?",
                img: dr_t2_q4,
                incorrect_answers: [
                    "Id does not matter as long as you sound your horn",
                    "Slow down and pass with care",
                    "Wait for approaching vehicles to pass"
                ],
                correct_answer: 'Remain stopped until the bus proceeds or the red lights stop flashing'
            },
            {
                question: "The use of alcohol or drugs affects a driver by impairing which of the following?",
                incorrect_answers: [
                    "Vision",
                    "Judgement",
                    "Reaction time"
                ],
                correct_answer: 'All of the above'
            },
            {
                question: "When you are in a roundabout,",
                incorrect_answers: [
                    "you can change lanes.",
                    "drive in clockwise direction.",
                    "you can stop."
                ],
                correct_answer: 'drive in a counter-clockwise direction.'
            },

        ],
        test3: [{
            question: "Are drivers responsible for requiring their passengers to buckle up?",
            incorrect_answers: [
                "Only those passengers over 18 yead old",
                "Only those passengers in the fron seat",
                "Only those passengers who are 16 years of age older"
            ],
            correct_answer: 'Only those passengers under 16 years of age'
        },
        {
            question: "In Ontario, you may not carry __________ in a house or boat trailer while you are towing it",
            incorrect_answers: [
                "firearms",
                "pets",
                "flammable materials"
            ],
            correct_answer: 'people'
        },
        {
            question: "If you are convicted of driving at 50 km/h or more over the speed limit, you will face which of the following penalties?",
            incorrect_answers: [
                "Jail sentence of up to 6 months",
                "$2,000 to $10,000 fine",
                "License suspention for up to 2 years or 6 demerit points"
            ],
            correct_answer: 'All of the above'
        },
        {
            question: "If the traffic signal light facing you is red and you intend to go straight through the intersection, what must you do?",
            incorrect_answers: [
                "Stop, yield to pedestrians, and then procced with caution",
                "Slow down and the proceed when the way is clear",
                "Stop and then proceed when the way is clear"
            ],
            correct_answer: 'Stop and then proceed only when the signal turns green and the way is clear'
        },
        {
            question: "A flashing green light at an intersection where left and right turns are permitted means ",
            incorrect_answers: [
                "you may go straight",
                "you may turn left",
                "you may turn right"
            ],
            correct_answer: 'all of the above'
        },
        ],
        test4: [
            {
                question: "Never change lanes in traffic without",
                incorrect_answers: [
                    "looking into the rear-view mirror only",
                    "blowing your horn and looking to make sure that the lane change can be performed safety",
                    "giving the proper signal and slowing down"
                ],
                correct_answer: 'giving the proper signal and looking to make sure that the lane change can be performed safety'
            },
            {
                question: "What shoud you do when the driver of another vehicle signals that he or she intends to pass your vehicle?",
                incorrect_answers: [
                    "Signal to other driver to remain behind you",
                    "Move to the left to block the passing vehicle ",
                    "Move to the right side of your lane and increase your speed"
                ],
                correct_answer: 'Move to the right side of your lane and do not increase your speed'
            },
            {
                question: "Which of the following statements about parking light is true ?",
                incorrect_answers: [
                    "You can use your parking lights when driving on well-lit street",
                    "You cna use your parking lights when driving in heavy fog",
                    "You can use your parking lights at any time"
                ],
                correct_answer: 'You should use your parking lights only for parking'
            },
            {
                question: "A G2 driver age 19 or younger who has more than 6 months of driving expirience may carry ______ unrelated passsenger(s) age 19 or younger between midnight and 5:00 am",
                incorrect_answers: [
                    "4",
                    "1",
                    "2"
                ],
                correct_answer: '3'
            },
            {
                question: "If you are convicted for the first time of driving while your license is suspended, you will get and additional six-month suspension, and you will alse face which of the following additional penalties?",
                incorrect_answers: [
                    "A fine of between $1,000 and $5,000",
                    "Six month in jail",
                    "Neither jail time nor a fine"
                ],
                correct_answer: 'Either jail time or fine or both'
            },
        ],
        test5: [
            {
                question: "A Level One learner driver may practice driving under the supervision of a licensed driver who has at least ______ of driving experience.",
                incorrect_answers: [
                    "2 years",
                    "3 years",
                    "5 years"
                ],
                correct_answer: '4 years'
            },
            {
                question: "On a roadway where traffic is moving in both directions, in what position must you be before making a left turn?",
                incorrect_answers: [
                    "In any position as long as you signal",
                    "Close to the right-hand side of the roadway",
                    "Close to the left-hand side of the roadway"
                ],
                correct_answer: 'To the right of and as close to center line of the roadway as possible.'
            },
            {
                question: "You must report an accident to the police if",
                incorrect_answers: [
                    "damage property other than vehicles is over $2,000",
                    "damage to vehicles is over $2,000",
                    "someone has been hurt of killed"
                ],
                correct_answer: 'any of the above are true'
            },
            {
                question: "When approaching a construction area, what should you do?",
                incorrect_answers: [
                    "Speed up to get out of the area quickly.",
                    "Honk your horn a few times to warm the workers.",
                    "Come to a complete stop until the workers signal you to proceed."
                ],
                correct_answer: 'Slow down any yield the right-of-way if necessary.'
            },
            {
                question: "What does a red signal light with a green arrow mean ?",
                img: dr_t5_q5,
                incorrect_answers: [
                    "Stop and wait for the green light before turning in the direction of the arrow.",
                    "Stop and wait for a green light. The green arrow is a signal for pedestrians.",
                    "Stop and then you may turn in the direction of the arrow."
                ],
                correct_answer: 'You may turn in the direction of the arrow.'
            },
        ]
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
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q6,
                incorrect_answers: [
                    "This lane is for buses only",
                    "This lane is not for bicycles",
                    "This lane is for trucks only",
                ],
                correct_answer: 'This lane is for bicycles only.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q7,
                incorrect_answers: [
                    "You may stop temporarily to load or unload merchandise but not passengers.",
                    "You may not stop for any reason.",
                    "You may stop temporarily to load or unload passengers or merchandise."
                ],
                correct_answer: 'You may stop temporarily to load or unload passengers but not merchandise.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q8,
                incorrect_answers: [
                    "Watch for pedestrians and be prepared to share for the road with them.",
                    "There is road work ahead.",
                    "A traffic control person is ahead. Drive slowly and watch for instructions."
                ],
                correct_answer: 'A survey crew is working of the road ahead.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q9,
                incorrect_answers: [
                    "Divided roadway ahead",
                    "Low-clearance underpass ahead",
                    "Falling rocks"
                ],
                correct_answer: 'Pavement ends'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q10,
                incorrect_answers: [
                    "Accekeration lane ahead.",
                    "Narrow passage ahead.",
                    "Left lane ends ahead."
                ],
                correct_answer: 'Right lane ends ahead.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q11,
                incorrect_answers: [
                    "No smoking for more than 3 minutes.",
                    "No stopping for more than 3 minutes.",
                    "Idling permitted for at least 3 minutes."
                ],
                correct_answer: 'No idling for more than 3 minutes.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q12,
                incorrect_answers: [
                    "School zone ahead.",
                    "Bumpy road ahead.",
                    "Possible falling rocks. "
                ],
                correct_answer: 'Underpasss ahead.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q13,
                incorrect_answers: [
                    "Keep right if there is faster traffic.",
                    "There is a sharp bend or curve in the road ahead.",
                    "This lane exits to the right."
                ],
                correct_answer: 'There is a slight bend or curve in the road ahead.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q14,
                incorrect_answers: [
                    "Do not honk at animals.",
                    "There is a zoo ahead.",
                    "Deer are welcome."
                ],
                correct_answer: 'Deer regularly cross here.'
            }, {
                question: "What does this road sign mean ?",
                img: ds_t1_q15,
                incorrect_answers: [
                    "Ther is movable bridge ahead.",
                    "Do not enter",
                    "There is a construction zone ahead."
                ],
                correct_answer: 'There may be water flowing over the road.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q16,
                incorrect_answers: [
                    "There is a playground to the right.",
                    "Danger, the road ends ahead.",
                    "Take a detour."
                ],
                correct_answer: 'Danger, there is a sharp turn ahead.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q17,
                incorrect_answers: [
                    "Yield to the left.",
                    "Road turns left.",
                    "Slight bend or curve in the road ahead."
                ],
                correct_answer: "Close lane."
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q18,
                incorrect_answers: [
                    "A road is branching off ahead.",
                    "There is a slight bend or curve in the road ahead.",
                    "Keep right of the traffic island."
                ],
                correct_answer: 'There is a passing lane ahead.'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t1_q19,
                incorrect_answers: [
                    "Np Stopping",
                    "No parking",
                    "No trucks"
                ],
                correct_answer: 'No passing'
            },
            {
                question: "Upon approaching a yield sign, what must you do?",
                img: ds_t1_q20,
                incorrect_answers: [
                    "Slow down as other vehicles give you the righ-of-way.",
                    "Stop, then enter traffic quickly.",
                    "Stop, then enter traffic slowly."
                ],
                correct_answer: 'Slow down, stop if necessary, and yield the right-of-way.'
            },
        ],
        test2: [
            {
                question: "What does this sign mean ?",
                img: ds_t2_q1,
                incorrect_answers: [
                    "Slow down to prevent hydroplaning",
                    "The paved surface ends ahead",
                    "The pavement has been milled or grooved"
                ],
                correct_answer: 'The pavement is slippery when wet'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t2_q2,
                incorrect_answers: [
                    "Hotel",
                    "Narrow road ahead",
                    "Airport"
                ],
                correct_answer: 'Movable bridge ahead'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t2_q3,
                incorrect_answers: [
                    "Left turns prohibited",
                    "U-turns allowed",
                    "Right turns prohibited"
                ],
                correct_answer: 'U-turns prohibited'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t2_q4,
                incorrect_answers: [
                    "You have the right-of-way",
                    "A railway crossing is ahead",
                    "A school zone is ahead"
                ],
                correct_answer: 'You must give the right-of-way'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t2_q5,
                incorrect_answers: [
                    "Slow-moving vehicles ahead",
                    "Dead-end street ahead",
                    "Yield right-of-way"
                ],
                correct_answer: 'Stop signal ahead'
            },
        ],
        test3: [
            {
                question: "What does this road sign mean ?",
                img: ds_t3_q1,
                incorrect_answers: [
                    "You may park here",
                    "School buses load or unload in this area by turning on the flashing red lights and extending the stop arm",
                    "You must be driving a school bus to enter this area"
                ],
                correct_answer: 'School buses load or unload in this area without using the flashing red lights or the stop arm'
            },
            {
                question: "This road sign indicates ?",
                img: ds_t3_q2,
                incorrect_answers: [
                    "You must not enter this area",
                    "You may drive in any directions from any lane",
                    "You may not turn here"
                ],
                correct_answer: 'The direction of travel for each lane'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t3_q3,
                incorrect_answers: [
                    "Playground",
                    "Park ahead",
                    "Park ahead"
                ],
                correct_answer: 'School zone'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t3_q4,
                incorrect_answers: [
                    "This is pedestrian crosswalk",
                    "The speed limit is 40 km/h at all times",
                    "This is playground"
                ],
                correct_answer: 'During school hours when the yellow light are flasing, the speed limit is 40 km/h'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t3_q5,
                incorrect_answers: [
                    "Recreation are ahead",
                    "Hospital ahead",
                    "Restroom availability"
                ],
                correct_answer: 'Disabled parking area'
            },
        ],
        test4: [
            {
                question: "What does this road sign mean ?",
                img: ds_t4_q1,
                incorrect_answers: [
                    "A highway interchange is 300 metres ahead",
                    "Keep right",
                    "U-turns are permitted 300 metres ahead"
                ],
                correct_answer: 'A roundabout is 300 metres ahead'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t4_q2,
                incorrect_answers: [
                    "Keep right",
                    "This road turns slighly right ahead",
                    "Traffic must exit to the right"
                ],
                correct_answer: 'This road sharply right ahead'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t4_q3,
                incorrect_answers: [
                    "Pedestrian crossing",
                    "Do not enter",
                    "Uncontrolled intersection"
                ],
                correct_answer: 'Railway crossing'
            },
            {
                question: "What does this construction sign mean ?",
                img: ds_t4_q4,
                incorrect_answers: [
                    "The pavement is milled or grooved",
                    "Slow down and obey the flagger's direction",
                    "The flagger is off duty"
                ],
                correct_answer: 'Ther is road work operation ahead'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t4_q5,
                incorrect_answers: [
                    "No trucks allowed",
                    "Passing not allowed",
                    "Steep hill ahead"
                ],
                correct_answer: 'Possible falling rocks ahead'
            },
        ],
        test5: [
            {
                question: "What does this road sign mean ?",
                img: ds_t5_q1,
                incorrect_answers: [
                    "Hidden intersection",
                    "No left turns",
                    "Merging traffic ahead"
                ],
                correct_answer: 'Road branching off ahead'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t5_q2,
                incorrect_answers: [
                    "School zone",
                    "Provincial park",
                    "Detour"
                ],
                correct_answer: 'Directions to cities and towns'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t5_q3,
                incorrect_answers: [
                    "Road work ahead",
                    "Pedestrian area",
                    "Survey crew working ahead"
                ],
                correct_answer: 'Traffic control person ahead'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t5_q4,
                incorrect_answers: [
                    "A hidden school bus stop",
                    "Truck entrance ahead on the right",
                    "Hidden driveway ahead"
                ],
                correct_answer: 'Bus entrance ahead on the right'
            },
            {
                question: "What does this road sign mean ?",
                img: ds_t5_q5,
                incorrect_answers: [
                    "There is a stop sign ahead",
                    "Slow down and proceed with caution",
                    "Slow down and yield to approaching vehicles"
                ],
                correct_answer: 'Stop and yield to approaching vehicles'
            },
        ]
    }
}

// {
//     question: "",
//         incorrect_answers: [
//             "",
//             "",
//             ""
//         ],
//             correct_answer: ''
// },