import styles from './InfoPage.module.scss';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


function InfoPage() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.mainTitle}>General information about recieving driver license</h2>
      <p className={styles.subtitle}>Here you will find basic information regarding obtaining a driver's license in Ontario, Canada. Thanks to the collected and grouped information, you will be able to better understand what tasks you will face and will be able to better prepare before trying to pass a test for knowledge of traffic rules or signs.</p>
      <div className={styles.box}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, }}>
              How many questions are there in the theory test for knowledge of road rules and signs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.text}>The whole test consists of 2 parts. Each block will have 20 questions. In order to successfully pass the test, you must correctly answer at least 16 questions. First you go through the first block of questions, and if you passed it successfully, then in a few minutes the next block of questions will begin.
            </p>
            <p className={styles.text}>In the first block there will be questions that relate to the rules of the road in Ontario, Canada. The second block of questions contains questions that only concern road signs in Ontario.
            </p>
            <p className={styles.text}>Time for the test is unlimited. During the test, you will be able to freely switch the language between your chosen language and English.
            </p>

          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, }}>How much it costs ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.text}>
              The first time you visit an official DriveTest dealership in Ontario, you will be required to pay CAD 106 for paperwork and a road sign test.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 600, }}>
              How can I find an Authorized Driver's License Dealer in Ontario?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.text}>
              It is very easy to find them, there are official representations in almost every major city of Ontario. To search only authorized dealers, look on the maps for information about DriveTest.
            </p>
            <a className={styles.externalLink} target="_blank" href='https://www.google.com/maps/search/drivetest+ontario/@43.8966235,-79.9149102,8.72z'>This is link that leads to google maps with Drive Test</a>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 600, }}>What is Ontario driver test ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.text}>
              This is a public administration test that assesses your driving skills and knowledge in Ontario. The test includes 3 levels, which correspond to the rights of 3 different categories. Namely:
            </p>
            <ul className={styles.unOrderList}>
              <li className={styles.unOrderItem}>G1: The theory test regarding traffic rules and signs in Ontario.</li>
              <li className={styles.unOrderItem}>G2: Practical vehicle driving with an instructor in the city.</li>
              <li className={styles.unOrderItem}>G Full: Practical driving of a vehicle along with an instructor outside the city on a highway or motorway.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default InfoPage;
