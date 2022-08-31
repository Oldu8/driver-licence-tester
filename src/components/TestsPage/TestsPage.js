import styles from './TestsPage.module.scss';
import { Link } from 'react-router-dom';
import ToggleBlock from '../ToggleBlock/ToggleBlock';
import testBanner from "../../assets/images/testBanner.svg"

function TestsPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.headline}>Choose test category to start</h2>
        <div className={styles.imageContainer}>
          <img src={testBanner} className={styles.img} alt='quiz banner'></img>
        </div>
        <p className={styles.mainText}>Please select one of the options below to take the test.</p>
      </div>
      <div className={styles.links}>
        <ToggleBlock title='Driving rules' />
        <ToggleBlock title='Driving signs' />
        <ToggleBlock title='Random questions' />
      </div>
    </section>
  );
}

export default TestsPage;
