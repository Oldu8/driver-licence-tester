import styles from './RulesPage.module.scss';
import rulesBanner from '../../assets/images/rulesBanner.svg'
import rulesSmallBanner from '../../assets/images/rulesSmallBanner.svg'

import { Link } from 'react-router-dom';

function RulesPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.headline}>How to get Ontario Driver Licence ?</h2>
        <div className={styles.imageContainer}>
          <img src={rulesBanner} className={styles.img} alt='rules banner'></img>
        </div>
        <p className={styles.mainText}>On this page, you will learn the basic requirements and how to obtain your driving license in Ontario.
          Please read all the necessary points in detail before starting.</p>
      </div>
      <div className={styles.infoBlock}>
        <article className={styles.article}>
          <h2 className={styles.subHeadline}>
            What is G Driving Licences ?
          </h2>
          <p className={styles.subText}>
            In Ontario there are three categories of license for driving different vehicles. In this topic we will be discussed for the most popular category - a car category.
          </p>
          <ul className={styles.ul1}>
            <li className={styles.li1}>
              <strong>G1 Licence: </strong>This is a first level of Driver Licence. If you pass an approved course, you can complete Level One in eight months. While at Level One, the following rules apply:
              <ul className={styles.ul2}>
                <li className={styles.li2}>
                  You must not drive if you have been drinking alcohol. Your blood-alcohol level must be zero.
                </li>
                <li className={styles.li2}>
                  You must not drive alone. An accompanying driver must sit in the front passenger seat. The accompanying driver must have a valid Class G Full (or higher) licence, at least four years of driving experience and a blood-alcohol level of less than .05% when accompanying you. Tour years of experience.
                </li>
                <li className={styles.li2}>
                  Each person in the vehicle must have a working seatbelt.
                </li>
                <li className={styles.li2}>
                  You must not drive on 400-series highways with a posted speed limit over 80 km/h. However, if your accompanying driver is a driving instructor, you may drive on any road.
                </li>
                <li className={styles.li2}>
                  You must not drive between midnight and 5 a.m.
                </li>
              </ul>
            </li>
            <li className={styles.li1}>
              <strong>G2 Licence: </strong>This is a second level of Driver Licence. You must pass a road test of your driving skills to move to Level Two. At this time, you will be given a Class G2 licence. Level Two lasts at least 12 months. At this level, you have more privileges because of your driving experience.
              <ul className={styles.ul2}>
                <li className={styles.li2}>
                  You must not drive if you have been drinking alcohol. Your blood-alcohol level must be zero.
                </li>
                <li className={styles.li2}> You must not drive if you have been drinking alcohol. Your blood-alcohol level must be zero.
                </li>
                <li className={styles.li2}> Each person in the vehicle must have a working seatbelt.
                </li>
                <li className={styles.li2}>In addition, the following restrictions apply between the hours of midnight and 5 a.m. to G2 drivers aged 19 years and under.
                </li>
                <li className={styles.li2}>In the first six months after receiving your G2 licence, you are allowed to carry only one passenger aged 19 or under.
                </li>
                <li className={styles.li2}>After six months with your G2 licence and until you obtain your full G licence or turn 20, you are allowed to carry up to three passengers aged 19 or under.
                </li>
              </ul>
            </li>
            <li className={styles.li1}> <strong>G Full Licence:</strong>  After 12 months at Level Two, you may take a road test to qualify for full licence privileges. You must pass this test to get a Class G licence.
            </li>
          </ul>
        </article>
        <article className={styles.article}>
          <h2 className={styles.subHeadline}>
            What is requirements for G Full Class for new drivers ?
          </h2>
          <p className={styles.subText}>
            As said in official website of DriveTest: <quote>In Ontario, driving is a privilege that must be earned.</quote> We fully agree with this statement. So the main requirements for new driver are:
          </p>
          <span className={styles.boxWithImg}>
            <div className={styles.imageContainer}>
              <img src={rulesSmallBanner} className={styles.imgSmall} alt='rules banner'></img>
            </div>
            <ul className={styles.requirements}>
              <li className={styles.li2}>
                You must be at least 16 old at the time of your application in DriveTest Service.
              </li>
              <li className={styles.li2}>
                You have to meet vision standarts that was by the Ministry of Transportation. Here is the <a href='https://drivetest.ca/tests/vision-tests/'>link</a> about this requirements.
              </li>
              <li className={styles.li2}>
                You have to pass a knowledge test about the driving rules and road signs in Ontario. Here we can help with our tests. You can find list of tests on <Link to='/tests'>Test Page</Link>.
              </li>
              <li className={styles.li2}>
                You have to pass G2 road test in the city.
              </li>
              <li className={styles.li2}>
                You have to pass G Full road test outside the city and on the highway.
              </li>
            </ul>
          </span>
        </article>
      </div>
    </section>
  );
}

export default RulesPage;
