import styles from './QuizPage.module.scss';
import { Link } from 'react-router-dom';
import quizbanner from '../../assets/images/quizBanner.svg'
import resultQuizBanner from '../../assets/images/resultQuizBanner.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { testsArr } from "../../assets/testArr.js"
import QuizBlock from '../QuizBlock/QuizBlock';
import { CircularProgress } from '@mui/material';


function QuizPage({ userName, setUserName, category = 'drivingRules', testNumber = 1 }) {
  const quizArr = testsArr[category]['test' + testNumber];

  const [error, setError] = useState(false)
  const [quiezStarted, setQuiezStarted] = useState(false)

  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreCorrect, setScoreCorrect] = useState(0);
  const [scoreWrong, setScoreWrong] = useState(0);


  const handleShuffle = (answers) => {
    return answers.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    if (currentQuestion < quizArr.length) {
      setOptions(
        quizArr &&
        handleShuffle([
          quizArr[currentQuestion]?.correct_answer,
          ...quizArr[currentQuestion]?.incorrect_answers
        ])
      )
    }
  }, [currentQuestion])


  const handleSubmit = () => {
    userName.length < 3 ?
      setError(true) :
      setQuiezStarted(true)
  }

  const errorStyle = {
    margin: "10px auto 30px auto",
    width: '300px'
  }


  return (
    <div className={styles.container}>
      {!quiezStarted ?
        <>
          <div className={styles.content}>
            <h2 className={styles.headline}>Quiz settings</h2>
            <div className={styles.imageContainer}>
              <img src={quizbanner} className={styles.img} alt='quiz banner'></img>
            </div>
            <p className={styles.mainText}>Please enter you name</p>
          </div>
          <div className={styles.settingsSelect}>
            {error ? <div className={styles.error}>Username is empty or has less than 3 symbols</div> : false}
            <TextField label="Enter your name" variant='outlined' sx={errorStyle} onChange={(e) => setUserName(e.target.value)} />
            <Button variant="contained" color='primary' size="large" sx={{ width: '300px' }} onClick={handleSubmit}>Start quiz</Button>
          </div>
        </>
        :
        <div>
          <h5 className={styles.welcomeHeadline}>Welcome, {userName}</h5>
          {
            quizArr ? <>
              {currentQuestion === quizArr.length ?
                <div className={styles.resultBox}>
                  <h4 className={styles.resultTitle}>You finished the test!</h4>
                  <div className={styles.imageContainer}>
                    <img src={resultQuizBanner} className={styles.img} alt='quiz banner'></img>
                  </div>
                  <Button color="success" variant="contained" size="large"
                    // href='/result'
                    sx={{ marginTop: "40px" }}>Show me result!</Button>
                </div>
                :
                <section className={styles.content}>
                  <div className={styles.info}>
                    <p className={styles.category}>Cateogory is {category}</p>
                    <p className={styles.score}>Correct - {scoreCorrect}</p>
                    <p className={styles.score}>Inccorect - {scoreWrong}</p>
                    <p className={styles.queistionNumber}>Question {currentQuestion + 1} out of {quizArr.length}</p>
                  </div>
                  <QuizBlock
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    options={options}
                    quizArr={quizArr}
                    correct={quizArr[currentQuestion]?.correct_answer}
                    scoreCorrect={scoreCorrect}
                    scoreWrong={scoreWrong}
                    setScoreCorrect={setScoreCorrect}
                    setScoreWrong={setScoreWrong}
                  />

                </section>
              }
            </>
              :
              <CircularProgress />
          }
        </div>
      }
    </div>
  );
}

export default QuizPage;
