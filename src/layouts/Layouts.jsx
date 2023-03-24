import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import UseScrollTop from '../hooks/UseScrollTop'

const Layouts = () => {
  return (
    <>
    <UseScrollTop/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layouts