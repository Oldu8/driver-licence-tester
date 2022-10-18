import styles from './QuizPage.module.scss';
import quizbanner from '../../assets/images/quizBanner.svg'
import resultQuizBanner from '../../assets/images/resultQuizBanner.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { testsArr } from "../../assets/testArr.js"
import QuizBlock from '../QuizBlock/QuizBlock';
import { CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { setClearResults } from '../../redux/testCounterSlice'


function QuizPage() {
  const dispatch = useDispatch()
  const stateResult = useSelector((state) => state.userData.testsData)

  const currentTestObj = useSelector((state) => state.userData)
  const { testNumber, category } = currentTestObj?.currentTest;
  const quizArr = testsArr[category][testNumber];
  const { correct, incorrect } = stateResult[category][testNumber]

  // Local states to start quiz
  const [error, setError] = useState(false)
  const [quiezStarted, setQuiezStarted] = useState(false)

  // Local states to render questions
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //States that should push date to redux
  const [userName, setUserName] = useState('');


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
  }, [currentQuestion, quizArr])

  const handleSubmit = () => {
    userName.length < 3 ?
      setError(true) :
      setQuiezStarted(true)
    dispatch(setClearResults({ testNumber, category }))
  }

  const errorStyle = {
    margin: "10px auto 30px auto",
    width: '300px'
  }


  return (
    <div className={styles.wrapper}>
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
          {
            quizArr ? <>
              {currentQuestion === quizArr.length ?
                <div className={styles.resultBox}>
                  {incorrect < 5 ?
                    <h4 className={styles.resultSubtitle}>Congratulations,{userName} <br /> You passed the test!</h4> :
                    <h4 className={styles.resultSubtitle}>Unfortunately, {userName}, you failed the test</h4>}
                  <div className={styles.mainText}>You did {correct + 1} correct answers and {incorrect} mistakes</div>
                  <div className={styles.imageContainer}>
                    <img src={resultQuizBanner} className={styles.img} alt='quiz banner'></img>
                  </div>
                  <Button color="success" variant="contained" size="large"
                    href='/result'
                    sx={{ marginTop: "40px" }}>Show all my test results!</Button>
                </div>
                :
                <>
                  <h5 className={styles.welcomeHeadline}>Welcome, {userName}</h5>
                  <section className={styles.content}>
                    <div className={styles.info}>
                      <p className={styles.category}>Category is {category === 'drivingRules' ? 'Driving Rules' : 'Driving Signs'}</p>
                      <p className={styles.score}>Correct - {correct}</p>
                      <p className={styles.score}>Inccorect - {incorrect}</p>
                      <p className={styles.queistionNumber}>Question {currentQuestion + 1} out of {quizArr.length}</p>
                    </div>
                    <QuizBlock
                      currentQuestion={currentQuestion}
                      setCurrentQuestion={setCurrentQuestion}
                      options={options}
                      quizArr={quizArr}
                      correctAns={quizArr[currentQuestion]?.correct_answer}
                    />
                  </section>
                </>
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
