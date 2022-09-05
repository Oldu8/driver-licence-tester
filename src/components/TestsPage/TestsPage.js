import styles from './TestsPage.module.scss';
import { Link } from 'react-router-dom';
import ToggleBlock from '../ToggleBlock/ToggleBlock';
import testBanner from "../../assets/images/testBanner.svg"

function TestsPage({ setCategory, setTestNumber }) {
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
        <ToggleBlock title='Driving rules' category='drivingRules' setCategory={setCategory} setTestNumber={setTestNumber} />
        <ToggleBlock title='Driving signs' category='drivingSigns' setCategory={setCategory} setTestNumber={setTestNumber} />
        <ToggleBlock title='Random questions' category='random' setCategory={setCategory} setTestNumber={setTestNumber} />
      </div>
    </section>
  );
}

export default TestsPage;
