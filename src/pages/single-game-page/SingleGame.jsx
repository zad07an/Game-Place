import React, { useCallback, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { addToWishList, removeFromWishList } from '../../redux/slices/WishListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleGame } from '../../redux/slices/SingleGameSlice';
import tabTitle from '../../funcs/tabTitle';
import GameCarousel from '../../components/game-carousel/GameCarousel';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { STATUSES } from '../../redux/statuses/STATUSES';
import styles from './SingleGame.module.css'
import PageLoading from '../../components/page-loading/PageLoading';
import PageRejected from '../../components/page-rejected/PageRejected';

const SingleGame = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const {game, status} = useSelector(state => state.single_game);
  const {wish_list_data} = useSelector(state => state.wish_list);
  tabTitle(`${game?.title}`)

  useEffect(() => {
    dispatch(fetchSingleGame(id))
  }, [dispatch]);

  const addedInWish = useMemo(() => wish_list_data?.find(item => item.id === game?.id), [wish_list_data]);
  const handleAddToWishList = useCallback(() => dispatch(addToWishList(game)), [dispatch, game])
  const handleRemoveFromWishList = useCallback(() => dispatch(removeFromWishList(game?.id)), [dispatch, game?.id])

  if (status === STATUSES.LOADING) return <PageLoading/>
  if (status === STATUSES.ERROR) return <PageRejected/>
  return (
    <section className={styles.container}>
      <div className={styles.game}>
        <div className={styles.image_box}>
          <div className={styles.image}>
            <img src={game?.thumbnail} alt="" />
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.title}>
            <p>{game?.title}</p>
          </div>
          <div className={styles.desc}>
            <p>{game?.desc}</p>
          </div>
          <div className={styles.genre}>
            <p>Genre: {game?.genre}</p>
          </div>
          <div className={styles.rating_downloads_rated}>
            <div className={styles.rating}>
              <p>4.4 <StarOutlinedIcon/></p>
              <p>15.5K reviews</p>
            </div>
            <div className={styles.downloads}>
              <p>1M+</p>
              <p>Downloads</p>
            </div>  
            <div className={styles.rated}>
              <p>3+</p>
              <p>Rated for 3+</p>
            </div>
          </div>
          <div className={styles.download_wish}>
            <button>Download</button>
            {
              addedInWish ? (
                <div className={styles.wish} onClick={handleRemoveFromWishList}>
                  <p>
                    <BookmarkRemoveOutlinedIcon sx={{color: "orange"}}/> Added in wishlist
                  </p>
                </div>
                ) : (
                <div className={styles.wish} onClick={handleAddToWishList}>
                  <p>
                    <BookmarkAddOutlinedIcon/> Add to wishlist
                  </p>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <GameCarousel game={game} />
    </section>
  )
}

export default SingleGame