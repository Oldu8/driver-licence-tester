import React from 'react'
import styles from './InfoBlock.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function InfoBlock({ title, text, id, expanded, onChange }) {
    const blockId = `panel${id}bh-header`
    const ariaControls = `panel${id}bh-content`
    return (
        <>
            <Accordion expanded={expanded === `panel${id}`} onChange={onChange(`panel${id}`)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={ariaControls}
                    id={blockId}
                >
                    <h5 className={styles.header}>
                        {title}
                    </h5>
                </AccordionSummary>
                <AccordionDetails>
                    <p className={styles.text}>{`${text}`}</p>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
