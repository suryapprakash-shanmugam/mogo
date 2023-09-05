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

//import images for season sale

import season1 from '../../assets/home/season/season1.webp'
import season2 from '../../assets/home/season/season2.webp'
import HomeProductsList from '../../components/HomeProductsList/HomeProductsList'

const Home = () => {

  //send heading Special Offers
  const specialheader = 'Special Offers';
  //send heading Clothing
  const clothingheader = 'Clothing';
  //send heading Special Offers
  const jewelryheader = 'Jewelry & Accessories';

  //send heading and sub heading to Featured products
  const featuredheader = 'Featured Products';
  const featuredsubheader = 'Last added featured products';

  //send heading and sub heading to new Arrivals products
  const newarrivalheader = 'New Arrivals';
  const newarrivalsubheader = 'Last added products';


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
      <OfferSlider header={specialheader} />
      <Container size={'82rem'} className='home-season-sale'>
        <div className="home-season-sale-season">
          <div className="home-season-sale-season1">
            <div className="home-season-sale-season1-image">
              <img src={season1} alt="" />
            </div>
          </div>
          <div className="home-season-sale-season2">
            <div className="home-season-sale-season2-image">
              <img src={season2} alt="" />
            </div>
          </div>
        </div>
      </Container>
      <HomeProductsList header={featuredheader} subheader={featuredsubheader} />
      <HomeProductsList header={newarrivalheader} subheader={newarrivalsubheader} />
      <Container size={'82rem'} className='home-season-sale'>
        <div className="home-season-sale-season">
          <div className="home-season-sale-season1">
            <div className="home-season-sale-season1-image">
              <img src={season1} alt="" />
            </div>
          </div>
          <div className="home-season-sale-season2">
            <div className="home-season-sale-season2-image">
              <img src={season2} alt="" />
            </div>
          </div>
          <div className="home-season-sale-season2">
            <div className="home-season-sale-season2-image">
              <img src={season2} alt="" />
            </div>
          </div>
        </div>
      </Container>
      <OfferSlider header={clothingheader} />
      <OfferSlider header={jewelryheader} />
    </div>
  )
}

export default Home