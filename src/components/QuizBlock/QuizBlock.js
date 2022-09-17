import styles from './QuizBlock.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { scoreInc, scoreDec } from "../../redux/testCounterSlice"

function QuizBlock({ currentQuestion, setCurrentQuestion, options, quizArr, correctAns, scoreCorrect, scoreWrong }) {
  const dispatch = useDispatch()

  const [selected, setSelected] = useState()
  const [checked, setChecked] = useState(false)

  const checkAnswer = () => {
    { selected === correctAns ? dispatch(scoreInc()) : dispatch(scoreDec()) }
    setChecked(true);
  }
  const nextQuestion = () => {
    setChecked(false);
    setSelected();
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div className={styles.quizBox}>
      <h2 className={styles.title}>Question {currentQuestion + 1}</h2>
      <div className={styles.box}>
        <h4 className={styles.question}>{quizArr[currentQuestion].question}</h4>
        <div className={styles.options}>
          {options.map((i) => {
            return <button
              className={classNames(styles.option, {
                [styles.selectedOption]: selected === i,
                [styles.correct]: selected === i && checked && i === correctAns,
                [styles.inCorrect]: selected === i && checked && i !== correctAns,
                [styles.disabledCorrect]: selected !== i && checked && i === correctAns,
                [styles.disabledWrong]: selected !== i && checked && i !== correctAns,
              })}
              key={i}
              onClick={() => setSelected(i)}
            >{i}</button>
          })}
        </div>
      </div>
      <div className={styles.buttonsBlock}>
        {checked ?
          <Button color="secondary" variant="contained" size="large" onClick={() => nextQuestion()}>Next question</Button>
          :
          <Button color="primary" variant="contained" size="large" onClick={() => checkAnswer()}>Check answer!</Button>}
      </div>
    </div>
  );
}

export default QuizBlock;
