import styles from './ToggleBlock.module.scss';
import { useState } from 'react';
import TestBlock from '../TestBlock/TestBlock';
import { Accordion } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const testArr = [
  { title: 'Test 1', number: 1, url: '/tests/test1' },
  { title: 'Test 2', number: 2, url: '/tests/test2' },
  { title: 'Test 3', number: 3, url: '/tests/test3' },
  { title: 'Test 4', number: 4, url: '/tests/test4' },
  { title: 'Test 5', number: 5, url: '/tests/test5' }
]

function ToggleBlock({ title }) {
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
            {testArr.map((item) => {
              return <TestBlock title={item.title} number={item.number} url={item.url} key={item.number} />
            })}
          </ul> : false}
        </AccordionDetails>
      </Accordion>
    </section >

  );
}

export default ToggleBlock;
