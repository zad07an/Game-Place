import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import {FiDownload} from 'react-icons/all'
import styles from './Game.module.css'

const  Game = ({game}) => {

  const navigate = useNavigate();

  return (
    <div className={styles.box}>
      <div className={styles.thumbnail} onClick={() => navigate(`/game/${game?.title?.toLowerCase()}/${game?.id}`)}>
        <div>
          <span>See</span>
        </div>
        <img src={game?.thumbnail} alt="" />
      </div>
      <div className={styles.title}>
        <p>{game?.title.length > 19 ? game?.title.substring(0, 19) + "..." : game?.title}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.download}><FiDownload/> Download</button>
      </div>
    </div>
  )
}

export default memo(Game, (prevProps, nextProps) => {
  if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
    return true
  }
  return false
})