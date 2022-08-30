import styles from './TestBlock.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function TestBlock({ title, number, url }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.quentity}>30 questions</p>
        <input className={styles.status} type='checkbox'></input>
      </div>
      <div className={styles.button}><Link to={url}>Start</Link></div>
    </li>

  );
}

export default TestBlock;
