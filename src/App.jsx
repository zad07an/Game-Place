import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from './layouts/Layouts'
import Games from './pages/games-page/Games'
import Home from './pages/home-page/Home'
import LoginForm from './pages/login-form/LoginForm'
import SignupForm from './pages/signup-form/SignupForm'
import SingleGame from './pages/single-game-page/SingleGame'
import WishList from './pages/wish-list-page/WishList'
import './styles/global.css'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route element={<Layouts/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/games/:cat' element={<Games/>}/>
          <Route path='/game/:title/:id' element={<SingleGame/>}/>
          <Route path='/wishlist' element={<WishList/>}/>
        </Route>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/sign-up' element={<SignupForm/>}/>
      </Routes>
    </div>
  )
}

export default App