import styles from './ResultPage.module.scss';
import resultBanner from "../../assets/images/resultBanner.svg"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react";

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

  useEffect(() => {
    console.log(finalArr)
  }, [])

  function createData(name) {
    return { name };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.headline}>Good job! <br /> Here you can find your tests results</h2>
        <div className={styles.imageContainer}>
          <img src={resultBanner} className={styles.img} alt='result banner'></img>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell >Test category</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Correct</TableCell>
              <TableCell >Incorrect</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default ResultPage;
