import styles from './HomePage.module.scss';
import mainBanner from '../../assets/images/mainBanner.svg'
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.headline}>Welcome to our Ontario G1 Driving test</h1>
                <div className={styles.imageContainer}>
                    <img src={mainBanner} className={styles.img} alt='general banner'></img>
                </div>
                <p className={styles.mainText}>Let's get acquainted. On this site you can find a lot of useful information on how to pass the G1 theory test in Ontario. In addition, you can find useful information in the Rules or General Information sections.</p>
            </div>
            {/* <div className={styles.ads}> Syuda reklamy</div> */}
            <section className={styles.block}>
                <h2 className={styles.subTitle}>
                    How to prepare for the G1 theory test on knowledge of traffic rules and road signs in Ontario?
                </h2>
                <p className={styles.subText}>
                    Since you are here, you obviously want to pass your theory test on the first try. This is a wise decision, so we recommend that you use our ready-made traffic and road sign tests. You can find them at the link below. We have collected the most up-to-date tests for 2022. Therefore, be sure that if you pass them several times, you will feel much more prepared for the real test. But besides the tests, you can visit the Rules section to get acquainted with the general requirements, restrictions, regulations and other information related to driving a car.
                </p>
            </section>
            <div className={styles.links}>
                <Link to='/rules'><span className={styles.link}>Visit Rules page</span></Link>
                <Link to='/tests'><span className={styles.link}>Visit Tests Page</span></Link>
            </div>
            {/* <div className={styles.ads}> Syuda reklamy</div> */}
            <section className={styles.block}>
                <h2 className={styles.subTitle}>
                    So, how would we recommend preparing to take the G1 theory test in Ontario?
                </h2>
                <p className={styles.subText}>
                    In fact, the training system was invented a long time ago, and we propose to repeat it. It's simple enough, and we've broken it down into 3 steps to get you ready to take the G1 test in Ontario.
                </p>
                <div className={styles.stepsBlock}>
                    <div className={styles.step}>
                        <h3 className={styles.stepHeadline}>
                            Step 1. Go through the rulebook.
                        </h3>
                        <p className={styles.stepText}>
                            It's actually not as terrible as it might seem. The Ontario 2022 Driving Rules Book is detailed enough, has enough illustrations, which greatly speeds up and simplifies understanding of the rules of the road. At this stage, your task is rather to review all the information and underline or write down the most important points in your opinion that you should pay attention to and remember.
                        </p>
                        <Link to='/rules'><span className={styles.stepLink}>To Rules Page</span></Link>
                    </div>
                    <div className={styles.step}>
                        <h3 className={styles.stepHeadline}>
                            Step 2. Challenge yourself with our tests.
                        </h3>
                        <p className={styles.stepText}>
                            Everything is simple here, you go to the section with tests, select the desired section - road signs or traffic rules. And take test after test until you will pass everything. If you were able to cope with each of the tests and received a positive result, that's mean that you already skilled one. So you can proceed to the next stage.
                        </p>
                        <Link to='/tests'><span className={styles.stepLink}>To Tests Page</span></Link>
                    </div>
                    <div className={styles.step}>
                        <h3 className={styles.stepHeadline}>
                            Step 3. Prove that you deserve a driver's license.
                        </h3>
                        <p className={styles.stepText}>
                            So this is the final step. You have already read the book and know the general amount of information. You prepared according to our tests, which are constantly updated, and are as similar as possible to those that will be. All you have to do is come and calmly pass the real test and get a G1 driver's license. Good luck!
                        </p>
                        <a href='https://drivetest.ca/find-a-drivetest-centre/find-a-drivetest-centre/' target="_blank"><span className={styles.stepLink}>Find DriveTest Center</span></a>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default HomePage
    ;