import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.wrap}>
      <a href={"https://www.linkedin.com/in/olehdudkoca/"} className={styles.content}>
        <p className={styles.name}>Made by Oleh Dudko</p>
      </a>
    </footer>
  );
}

export default Footer;
