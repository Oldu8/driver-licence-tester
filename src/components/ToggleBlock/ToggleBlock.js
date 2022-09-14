import styles from './ToggleBlock.module.scss';
import { useState } from 'react';
import TestBlock from '../TestBlock/TestBlock';
import { Accordion } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from 'react-redux'

function ToggleBlock({ title, category, setCategory, setTestNumber }) {

  const arrayWithTests = useSelector((state) => Object.keys(state.testArr[category]))
  // console.log(arrayWithTests)


  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ width: '300px' }}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {expanded ? <ul className={styles.listOfTests}>
            {arrayWithTests.map((item, index) => {
              return <TestBlock title={item} number={index + 1} key={item} category={category} setCategory={setCategory} setTestNumber={setTestNumber} />
            })}
          </ul> : false}
        </AccordionDetails>
      </Accordion>
    </section >

  );
}

export default ToggleBlock;
