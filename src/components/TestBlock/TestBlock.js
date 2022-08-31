import styles from './TestBlock.module.scss';
import Button from '@mui/material/Button';

function TestBlock({ title, number, url }) {
  const btnStyle = {
    color: 'white',
    border: '2px solid rgb(3, 0, 8);',
    backgroundColor: 'rgb(237, 166, 35)',
    fontWeight: 600,
    padding: "10px",
    borderRadius: "15px"
  }
  return (
    <li className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.quentity}>30 questions</p>
        <p className={styles.status}>Not started</p>
      </div>
      <Button sx={btnStyle} href={url}>Start</Button>
    </li>

  );
}

export default TestBlock;
