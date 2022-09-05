import styles from './QuizBlock.module.scss';
import { Link } from 'react-router-dom';

function QuizBlock({ arr }) {
  return (
    <section className={styles.content}>
      <div>
        Progress: 0%
        <p>Question 1 out of 30</p>
      </div>
      <div className={styles.quizBox}>
        <h3 className={styles.title}>Question</h3>
        <ul className={styles.optionsBox}>
          <li className={styles.option}>1</li>
          <li className={styles.option}>2</li>
          <li className={styles.option}>3</li>
          <li className={styles.option}>4</li>
        </ul>
      </div>
    </section>
  );
}

export default QuizBlock;
