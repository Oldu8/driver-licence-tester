import React, { useState } from 'react'
import RightNave from '../RightNave/RightNave'
import styles from './Burger.module.scss'

function Burger() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={styles.burgerWrap} open={open} onClick={() => setOpen(!open)}>
        <div className={!open ? styles.burgerItem : styles.burgerItemOpen} />
        <div className={!open ? styles.burgerItem : styles.burgerItemOpen} />
        <div className={!open ? styles.burgerItem : styles.burgerItemOpen} />
      </div>
      <RightNave open={open} />
    </>

  )
}

export default Burger