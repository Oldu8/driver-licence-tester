import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.listOfLinks}>
        <div className={styles.leftLinks}>
          <nav className={styles.navLink}><Link to='/'>Main Page</Link></nav>
          <nav className={styles.navLink}><Link to='/list_with_province'>List of Province</Link></nav>
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
