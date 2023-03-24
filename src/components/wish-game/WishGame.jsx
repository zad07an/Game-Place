import React, { memo } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {FiDownload} from 'react-icons/all'
import styles from './WishGame.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishList } from '../../redux/slices/WishListSlice';

const WishGame = ({game}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemove = (id) => dispatch(removeFromWishList(id));
  const handleNavigate = (title, id) => navigate(`/game/${title.toLowerCase()}/${id}`);

  return (
    <div key={game?.id} className={styles.game}>
      <div className={styles.remove}>
        <button onClick={() => handleRemove(game?.id)}><DeleteOutlineOutlinedIcon/></button>
      </div>
      <div className={styles.image} onClick={() => handleNavigate(game?.title, game?.id)}>
        <img src={game?.thumbnail} alt="" />
      </div>
      <div className={styles.game_title}>
        <Link to={`/game/${game?.title?.toLowerCase()}/${game?.id}`}>{game?.title}</Link>
      </div>
      <div className={styles.download}>
        <button>Download</button>
      </div>
      <div className={styles.buttons_media}>
        <button className={styles.download_button} onClick={() => handleRemove(game?.id)}><FiDownload/>Download</button>
        <button className={styles.remove_button} onClick={() => handleRemove(game?.id)}><DeleteOutlineOutlinedIcon/>Remove</button>
      </div>
    </div>
  )
}

export default memo(WishGame, (prevProps, nextProps) => {
  if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
    return true;
  }
  return false;
})