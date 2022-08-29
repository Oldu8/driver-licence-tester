import styles from './TestsPage.module.scss';
import { Link } from 'react-router-dom';
import quizBanner from "../../assets/images/quizBanner.svg"
// import downArrow from "../../assets/icons/downArrow.svg"

function TestsPage() {
  return (
    <section>
      <div className={styles.content}>
        <h2 className={styles.headline}>Choose test category to start</h2>
        <div className={styles.imageContainer}>
          <img src={quizBanner} className={styles.img} alt='quiz banner'></img>
        </div>
        <p className={styles.mainText}>Please select one of the options below to take the test.</p>
      </div>
      <div className={styles.links}>
        <div className={styles.link}>Driving rules</div>
        <div className={styles.link}>Driving signs</div>
        <div className={styles.link}>Random questions</div>

      </div>
    </section>
  );
}

export default TestsPage;
