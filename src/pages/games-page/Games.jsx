import React, { useCallback, useEffect, useRef } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Game from '../../components/game/Game';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/slices/GamesSlice';
import tabTitle from '../../funcs/tabTitle';
import { fetchCats } from '../../redux/slices/CatSlice';
import { STATUSES } from '../../redux/statuses/STATUSES';
import styles from './Games.module.css'
import Loading from '../../components/loading/Loading';
import Rejected from '../../components/rejected/Rejected';

const Games = () => {

  tabTitle("Games")
  const {cat} = useParams();
  const term = useRef("");
  const dispatch = useDispatch();
  const {data, status} = useSelector(state => state.games);
  const {cats, status: catStatus} = useSelector(state => state.cat);
  const countRef = useRef(0);
  countRef.current++
  console.log("Games rendered " + countRef.current + " times")

  const activeLink = ({isActive}) => ({color: isActive ? "orange" : null})
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(fetchGames(term.current.value));
    term.current.value = ""
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchGames())
    dispatch(fetchCats())
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <div className={styles.sections}>
        <div className={styles.sidebar}>
          <div className={styles.categories}>
            {
              catStatus === STATUSES.LOADING ? (
                <Loading/>
              ) : catStatus === STATUSES.ERROR ? (
                <Rejected/>
              ) : (
                cats?.map((cat) => {
                  return (
                    <div key={cat?.id}>
                      <NavLink to={`/games/${cat?.category.toLowerCase()}`} style={activeLink}>{cat?.category === "all-games" ? "All Games" : cat?.category}</NavLink>
                    </div>
                  )
                })
              )
            }
          </div>
        </div>
        <div className={styles.games}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <input type="text" ref={term} placeholder='Search for your best game'/>
              <button><SearchOutlinedIcon/></button>
            </div>
          </form>
          <div className={styles.display}>
            {
              status === STATUSES.LOADING ? (
                <Loading/>
              ) : status === STATUSES.ERROR ? (
                <Rejected/>
              ) : cat && cat !== "all-games" ? (
                data?.filter(game => game?.genre === cat)?.map(game => {
                  return <Game key={game.id} game={game} />
                })
              ) : cat === "all-games" || !cat ? (
                data?.map(game => {
                  return <Game key={game.id} game={game} />
                })
              ) : (
                data?.map(game => {
                  return <Game key={game.id} game={game} />
                })
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Games