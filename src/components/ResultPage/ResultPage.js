import styles from './ResultPage.module.scss';
import resultBanner from "../../assets/images/resultBanner.svg"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'
import { StyledTableCell, StyledTableRow } from "../../functions/funcForMUITable";


function ResultPage() {
  const state = useSelector((state) => state.userData.testsData)

  const finalArr = [];
  function cycle(obj) {
    for (let key in obj) {
      for (let key2 in obj[key]) {
        const tempRes = [];
        tempRes.push(key, key2)
        const tempArr = Object.values(obj[key][key2])
        tempRes.push(tempArr.flat())
        finalArr.push(tempRes.flat());
      }
    }
    return finalArr
  }
  cycle(state)

  function createData(category, testNumber, status, correct, inccorect) {
    return { category, testNumber, status, correct, inccorect };
  }
  const rows = finalArr.map((i, index) => {
    return createData(...finalArr[index])
  })


  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.headline}>Good job! <br /> Here you can find your tests results</h2>
        <div className={styles.imageContainer}>
          <img src={resultBanner} className={styles.img} alt='result banner'></img>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Test category</StyledTableCell>
              <StyledTableCell align="center">Test number</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Correct</StyledTableCell>
              <StyledTableCell align="center">Incorrect</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              < StyledTableRow key={(row.testNumber + row.category)} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{row.category}</TableCell>
                <TableCell align="center">{row.testNumber}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.correct}</TableCell>
                <TableCell align="center">{row.inccorect}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section >
  );
}

export default ResultPage;