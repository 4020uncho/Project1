import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import coursenav from '../../components/coursenav/Nav1'
import Nav1 from '../../components/coursenav/Nav1'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
import HomeCarousel from '../../components/carousel/Homecarousel'

const Courses = () => {
  return (
    <div>
    <div>
      <Navbar/>
      <Nav1/>
      <HomeCarousel/>
      <Footer/>
    </div>
     <Outlet />
    </div>
  )
}

export default Courses