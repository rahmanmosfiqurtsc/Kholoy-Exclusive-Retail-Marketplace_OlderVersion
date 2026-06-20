import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Banners from '../components/Banners'
import FlashSale from '../components/FlashSale'
import Categories from '../components/Categories'




const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Banners />
      <FlashSale/>
      <Categories/>
  
    </div>
  )
}

export default Home
