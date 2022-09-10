import styles from './TestBlock.module.scss';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { setStatus } from '../../redux/testCounterSlice'


function TestBlock({ title, number, category, setCategory, setTestNumber }) {

  const state = useSelector((state) => state.testsData.tests)
  const dispatch = useDispatch()

  const handleClick = (category, number, setCategory, setTestNumber) => {
    dispatch(setStatus({ number, category }))
    setCategory(category);
    setTestNumber(number);
  }
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
        <p className={styles.status}>{state[category]['test' + number].status}</p>
      </div>
      <Button sx={btnStyle}
        // href='/quiz'
        onClick={() => handleClick(category, number, setCategory, setTestNumber)}>Start</Button>
    </li>

  );
}

export default TestBlock;
