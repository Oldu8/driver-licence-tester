import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footer}>
      Made by Oleh Dudko
    </div>
  );
}

export default Footer;
