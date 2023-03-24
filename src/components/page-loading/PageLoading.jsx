import { CircularProgress } from '@mui/material'
import React from 'react'
import styles from './PageLoading.module.css'

const PageLoading = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress color='warning'/>
    </div>
  )
}

export default PageLoading