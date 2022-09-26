import styles from './HomePage.module.scss';
import mainBanner from '../../assets/images/mainBanner.svg'
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <h2 className={styles.headline}>Welcome to our Ontario G1 Driving test</h2>
                <div className={styles.imageContainer}>
                    <img src={mainBanner} className={styles.img} alt='general image about driver test'></img>
                </div>
                <p className={styles.mainText}>Here you can find all rules and tests that can help you to prepare for government exams. You can learn rules and then practice or you can start practicing in all themes at once</p>
            </div>
            <div className={styles.links}>
                <Link to='/rules'><span className={styles.link}>Rules</span></Link>
                <Link to='/tests'><span className={styles.link}>Tests</span></Link>
            </div>
        </section>
    );
}

export default HomePage
    ;