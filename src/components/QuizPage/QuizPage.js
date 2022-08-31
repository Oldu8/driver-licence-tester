import styles from './QuizPage.module.scss';
import { Link } from 'react-router-dom';
import quizbanner from '../../assets/images/quizBanner.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
// import { useHistory } from "react-router-dom";

function QuizPage({ userName, setUserName }) {
  const [error, setError] = useState(false)
  const [quiezStarted, setQuiezStarted] = useState(false)
  // const history = useHistory();

  const handleSubmit = () => {
    userName.length < 3 ?
      setError(true) :
      setQuiezStarted(true)
    // history.push('/test1');
  }

  const errorStyle = {
    margin: "10px auto 30px auto",
    width: '300px'
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.headline}>Quiz settings</h2>
        <div className={styles.imageContainer}>
          <img src={quizbanner} className={styles.img} alt='quiz banner'></img>
        </div>
        <p className={styles.mainText}>Please enter you name</p>
      </div>
      {!quiezStarted ?
        <div className={styles.settingsSelect}>
          {error ? <div className={styles.error}>Username is empty or has less than 3 symbols</div> : false}
          <TextField label="Enter your name" variant='outlined' sx={errorStyle} onChange={(e) => setUserName(e.target.value)} />
          <Button variant="contained" color='primary' size="large" sx={{ width: '300px' }} onClick={handleSubmit}>Start quiz</Button>
        </div>
        :
        <div>First question</div>
      }

    </div>
  );
}

export default QuizPage;
