import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import canadaFlag from "../../assets/logos/canadaFlag.svg"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Header() {
  const buttonSettings = {
    color: 'white',
    border: '1px solid white',
    fontWeight: 700,
    marginRight: "15px",
    padding: "7px 10px",
    minWidth: "150px"
  }

  return (
    <div className={styles.header}>
      <div className={styles.listOfLinks}>
        <Stack direction="row">
          <Button sx={buttonSettings} href='/'>Home</Button >
          <Button sx={buttonSettings} href='/tests'>Tests</Button >
          <Button sx={buttonSettings} href='/rules'>Rules</Button >
          <Button sx={buttonSettings} href='/result'>Result</Button >
          <Button sx={buttonSettings} href='/info'>General Info</Button >
        </Stack >
      </div>
    </div >
  );
}

export default Header;
