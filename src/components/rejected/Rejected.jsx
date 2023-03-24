import React from 'react'
import styles from './Rejected.module.css'

const Rejected = () => {
  return (
    <div className={styles.error}>
      <p>Something went wrong!</p>
    </div>
  )
}

export default Rejected