import styles from './QuizBlock.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import Button from '@mui/material/Button';

function QuizBlock({ currentQuestion, setCurrentQuestion, options, quizArr, correct, setScoreCorrect, setScoreWrong, scoreCorrect, scoreWrong }) {
  const [selected, setSelected] = useState()
  const [checked, setChecked] = useState(false)

  const checkAnswer = () => {
    { selected === correct ? setScoreCorrect(scoreCorrect + 1) : setScoreWrong(scoreWrong + 1) }
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
                [styles.correct]: selected === i && checked && i === correct,
                [styles.inCorrect]: selected === i && checked && i !== correct,
                [styles.disabledCorrect]: selected !== i && checked && i === correct,
                [styles.disabledWrong]: selected !== i && checked && i !== correct,
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
