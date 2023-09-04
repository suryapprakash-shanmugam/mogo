//import react package
import React from 'react'

//import mantine packages
import { Container } from '@mantine/core'

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

//import OfferSlider from components ->OfferSlider
import OfferSlider from '../../components/OfferSlider/OfferSlider'


//import images for category grid

import table_linen from '../../assets/home/grid-category/table_linen.webp'
import bath_linen from '../../assets/home/grid-category/bath_linen.webp'
import kitchen_linen from '../../assets/home/grid-category/kitchen_linen.webp'
import bed_linen from '../../assets/home/grid-category/bed_linen.webp'
import living_linen from '../../assets/home/grid-category/living_linen.webp'
import baby_linen from '../../assets/home/grid-category/baby_linen.webp'

const Home = () => {
  return (
    <div>
      <Preheader />
      <Header />
      <Navbar />
      <HomeSlider />
      <Container className='product-category-grid' size={'82rem'}>
        <div className="product-category-grid-div">
          <div className="product-category-grid-div-table">
            <div className="product-category-grid-div-table-image">
              <img src={table_linen} alt="table linen image" />
              <div className="product-category-grid-div-image-content">Table Linen</div>
            </div>
          </div>
          <div className="product-category-grid-div-kitchen">
            <div className="product-category-grid-div-kitchen-image">
              <img src={kitchen_linen} alt="kitchen linen image" />
              <div className="product-category-grid-div-image-content">Kitchen Linen</div>
            </div>
          </div>
          <div className="product-category-grid-div-bath">
            <div className="product-category-grid-div-bath-image">
              <img src={bath_linen} alt="bath linen image" />
              <div className="product-category-grid-div-image-content">Bath Linen</div>
            </div>
          </div>
          <div className="product-category-grid-div-bed">
            <div className="product-category-grid-div-bed-image">
              <img src={bed_linen} alt="bed linen image" />
              <div className="product-category-grid-div-image-content">Bed Linen</div>
            </div>
          </div>
          <div className="product-category-grid-div-living">
            <div className="product-category-grid-div-living-image">
              <img src={baby_linen} alt="baby linen image" />
              <div className="product-category-grid-div-image-content">Baby Linen</div>
            </div>
          </div>
          <div className="product-category-grid-div-baby">
            <div className="product-category-grid-div-baby-image">
              <img src={living_linen} alt="baby linen image" />
              <div className="product-category-grid-div-image-content">Living Linen</div>
            </div>
          </div>
        </div>
      </Container>
      <OfferSlider />
    </div>
  )
}

export default Home