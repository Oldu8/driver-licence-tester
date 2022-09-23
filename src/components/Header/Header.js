import styles from './Header.module.scss';
import Burger from './Burger/Burger';

function Header() {
  return (
    <header className={styles.header}>
      <Burger />
    </header >
  );
}

export default Header;
