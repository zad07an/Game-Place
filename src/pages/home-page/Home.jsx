import React, { useRef } from 'react'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import {container, hero, hero_title, hero_button} from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import tabTitle from '../../funcs/tabTitle';

const Home = () => {

  tabTitle("Home")
  const navigate = useNavigate();
  const countRef = useRef(0);
  countRef.current++
  console.log("Home rendered " + countRef.current + " times")

  return (
    <section className={container}>
      <div className={hero}>
        <div className={hero_title}>
          <h1>Game store</h1>
        </div>
        <div className={hero_button}>
          <button onClick={() => navigate('/games/all-games')}><SportsEsportsOutlinedIcon/> See more games</button>
        </div>
      </div>
    </section>
  )
}

export default Home