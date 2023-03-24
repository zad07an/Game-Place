import { CircularProgress } from '@mui/material'
import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress color='warning'/>
    </div>
  )
}

export default Loading