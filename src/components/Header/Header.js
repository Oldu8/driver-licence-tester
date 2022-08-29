import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import canadaFlag from "../../assets/logos/canadaFlag.svg"

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.listOfLinks}>

        <div className={styles.leftLinks}>
          {/* <div className={styles.navLink}>
            <img src={canadaFlag} className={styles.img} alt='Canada flag'></img>
          </div> */}
          <nav className={styles.navLink}><Link to='/'>Main Page</Link></nav>
          <nav className={styles.navLink}><Link to='/tests'>Tests</Link></nav>
          <nav className={styles.navLink}><Link to='/rules'>Rules</Link></nav>
          <nav className={styles.navLink}><Link to='/result'>Result</Link></nav>
        </div>
        <div className={styles.cabinetBlock}>
          <nav className={styles.navLink}>
            <Link to='/cabinet'>To your cabinet</Link>
          </nav>
        </div>
      </div>

    </div>
  );
}

export default Header;
