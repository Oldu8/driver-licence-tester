import styles from './ToggleBlock.module.scss';
import { useState } from 'react';
import TestBlock from '../TestBlock/TestBlock';

const testArr = [
  { title: 'Test 1', number: 1, url: '/tests/test1' },
  { title: 'Test 2', number: 2, url: '/tests/test2' },
  { title: 'Test 3', number: 3, url: '/tests/test3' },
  { title: 'Test 4', number: 4, url: '/tests/test4' },
  { title: 'Test 5', number: 5, url: '/tests/test5' }
]

function ToggleBlock({ title }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section>
      <div className={styles.container} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen ? <ul className={styles.listOfTests}>
        {testArr.map((item) => {
          return <TestBlock title={item.title} number={item.number} url={item.url} />
        })}
      </ul> : false}
    </section>

  );
}

export default ToggleBlock;
