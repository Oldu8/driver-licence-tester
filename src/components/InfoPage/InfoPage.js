import styles from './InfoPage.module.scss';
import { useState } from 'react';
import InfoBlock from './InfoBlock/InfoBlock';
import data from '../../assets/generalInfo.json'


function InfoPage() {
  const arr = JSON.parse(JSON.stringify(data));
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.mainTitle}>General information about driver license G1,G2, G-Full</h2>
      <p className={styles.subtitle}>Here you will find basic information regarding obtaining a driver's license in Ontario, Canada. Thanks to the collected and grouped information, you will be able to better understand what tasks you will face and will be able to better prepare before trying to pass a test for knowledge of traffic rules or signs.</p>
      <div className={styles.box}>
        {arr.map((i, idx) => {
          return <InfoBlock title={i.title} text={i.text} id={idx++} onChange={handleChange} expanded={expanded} key={idx} />
        })}
      </div>
    </div>
  );
}

export default InfoPage;
