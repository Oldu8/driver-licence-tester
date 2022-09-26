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

function ToggleBlock({ title, category }) {

  const arrayWithTests = useSelector((state) => Object.keys(state.testArr[category]))

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className={styles.wrapper}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ minWidth: '300px', }}
        >
          <Typography sx={{ minWidth: '33%', flexShrink: 0, minHeight: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {expanded ? <ul className={styles.listOfTests}>
            {arrayWithTests.map((item, index) => {
              return <TestBlock title={item} number={index + 1} key={item} category={category} />
            })}
          </ul> : false}
        </AccordionDetails>
      </Accordion>
    </section >

  );
}

export default ToggleBlock;
