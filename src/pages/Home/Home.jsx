//import react package
import React from 'react'

//import home css file
import './Home.css'

//import preheader file from layout -> header -> preheader 
import Preheader from '../../layouts/header/preheader/Preheader'

//import header file from layout -> header -> header
import Header from '../../layouts/header/header/Header'

//import header file from layout -> navbar
import Navbar from '../../layouts/navbar/Navbar'

//import HomeSlider from components ->homeslider
import HomeSlider from '../../components/HomeSlider/HomeSlider'

const Home = () => {
  return (
    <div>
      <Preheader />
      <Header />
      <Navbar />
      <HomeSlider />
    </div>
  )
}

export default Home