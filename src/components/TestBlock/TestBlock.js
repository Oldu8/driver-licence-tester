import styles from './TestBlock.module.scss';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { setStartStatus, setClearResults } from '../../redux/testCounterSlice'


function TestBlock({ title, number, category, setCategory, setTestNumber }) {
  const state = useSelector((state) => state.userData.testsData)
  const stateTests = useSelector((state) => state.testArr)
  const testNumber = 'test' + number

  const dispatch = useDispatch()

  const handleClick = (category, number) => {
    dispatch(setStartStatus({ number, category }))
  }
  const btnStyle = {
    color: 'white',
    border: '2px solid rgb(3, 0, 8);',
    width: '80px',
    backgroundColor: 'rgb(237, 166, 35)',
    fontWeight: 600,
    padding: "10px",
    borderRadius: "15px"
  }
  return (
    <li className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.quentity}>{stateTests[category][testNumber].length + ' questions'}</p>
        <p className={styles.status}>{state[category]['test' + number].status}</p>
      </div>
      <Button sx={btnStyle}
        href='/quiz'
        onClick={() => handleClick(category, number)}>{state[category]['test' + number].status === 'Not started' ? 'Start' : 'Retake'}</Button>
    </li>

  );
}

export default TestBlock;
