import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchWishList } from '../../redux/slices/WishListSlice';
import tabTitle from '../../funcs/tabTitle';
import { STATUSES } from '../../redux/statuses/STATUSES';
import WishGame from '../../components/wish-game/WishGame';
import styles from './WishList.module.css'
import Rejected from '../../components/rejected/Rejected';
import Loading from '../../components/loading/Loading';

const WishList = () => {

  tabTitle("My wishlist")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {wish_list_data, status} = useSelector(state => state.wish_list);

  useEffect(() => {
    dispatch(fetchWishList())
  }, [dispatch])

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <p>My wishlist</p>
      </div>
      <div className={styles.games}>
        {
          !wish_list_data?.length ? (
            <div className={styles.empty}>
              <p>There aren't games</p>
              <button onClick={() => navigate('/games/all-games')}>Let's go to Games</button>
            </div>
          ) : (
            status === STATUSES.LOADING ? (
              <Loading/>
            ) : status === STATUSES.ERROR ? (
              <Rejected/>
            ) : (
              wish_list_data?.map(game => {
                return <WishGame key={game?.id} game={game} />
              })
            )
          )
        }
      </div>
    </section>
  )
}

export default WishList