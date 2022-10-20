import React from 'react'
import styles from './MyButton.module.scss'
import { Link } from 'react-router-dom';


function MyButton({ link, name }) {
    return (
        <Link to={link} className={styles.button}>{name}</Link>
    )
}

export default MyButton