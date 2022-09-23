import React from 'react'
import styles from './MyButton.module.scss'

function MyButton({ link, name }) {
    return (
        <a href={link} className={styles.button}>{name}</a>
    )
}

export default MyButton