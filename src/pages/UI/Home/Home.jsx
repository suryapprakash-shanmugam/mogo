//import react package
import React from 'react'

//import mantine packages
import { Button, Card, Center, Container, Space, Title } from '@mantine/core'

import { Link } from 'react-router-dom'

//import home css file
import './Home.css'

//import HomeSlider from components ->homeslider
import HomeSlider from '../../../components/UI/HomeSlider/HomeSlider'

//import OfferSlider from components ->OfferSlider
import OfferSlider from '../../../components/UI/OfferSlider/OfferSlider'

//import HomeProductsList from components ->HomeProductsList
import HomeProductsList from '../../../components/UI/HomeProductsList/HomeProductsList'

//import HomeBlogs from components ->HomeBlogs
import HomeBlogs from '../../../components/UI/HomeBlogs/HomeBlogs'

//import images for category grid

import table_linen from '../../../assets/Home_Catgeory_Images/electronics.png'
import bath_linen from '../../../assets/Home_Catgeory_Images/Furniture.png'
import kitchen_linen from '../../../assets/Home_Catgeory_Images/Fashions.png'
import bed_linen from '../../../assets/Home_Catgeory_Images/Groceries.png'
import living_linen from '../../../assets/IconWebp/livinglinen.webp'
import baby_linen from '../../../assets/Home_Catgeory_Images/Mobiles.png'

//import images for season sale

import season1 from '../../../assets/home/season/season1.webp'
import season2 from '../../../assets/home/season/season2.webp'
import { useQuery } from 'react-query'
import { listAllProduct } from '../../../config/quries/Products/ProductQuries'
import { useDispatch, useSelector } from 'react-redux'
import { setProductList } from '../../../StateHandler/Slice/Products/ProductSlice'

const Home = () => {

  //send heading Special Offers
  const specialheader = 'Special';
  const specialheader2 = 'Offers'
  //send heading Clothing
  const clothingheader = 'Clothing';
  //send heading Special Offers
  const jewelryheader = 'Jewelry & Accessories';

  //send heading and sub heading to Featured products
  const featuredheader = 'Featured';
  const featuredheader2 = 'Products';
  const featuredsubheader = 'Last added featured products';

  //send heading and sub heading to new Arrivals products
  const newarrivalheader = 'New';
  const newarrivalheader2 = 'Arrivals';
  const newarrivalsubheader = 'Last added products';

  //send heading and sub heading to blogs
  const blogheader = 'Latest';
  const blogheader2 = 'Blog Posts';
  const blogsubheader = 'Last added blog posts';

  // Product Array
  const flexProductDetails = [
    {
      image: living_linen,
      title: 'Home Textiles',
      path: '/category/babylinen'
    },
    {
      image: table_linen,
      title: 'Electronics',
      path: '/comming/soon'
    },
    {
      image: kitchen_linen,
      title: 'Fashions',
      path: '/comming_soon'
    },
    {
      image: bath_linen,
      title: 'Furniture',
      path: '/comming_soon'
    },
    {
      image: bed_linen,
      title: 'Groceries',
      path: '/comming_soon'
    },
    {
      image: baby_linen,
      title: 'Mobiles & Tabs',
      path: '/comming_soon'
    },
  ]

  // State Handler
  const productList = useSelector((state) => state.productList.value)
  const dispatch = useDispatch()

  // const productList = 
  useQuery('productList',
    listAllProduct,
    {
      onSuccess: (res) => {
        dispatch(setProductList(res?.data?.data?.result))
      },
    }
  )


  return (
    <div>
      <HomeSlider />
      <div className='home-page-product-flex-container'>
        {
          flexProductDetails.map((value, index) => (
            <div key={index} className='home-page-product-flex'>
              <Card
                className='home-page-product-flex-card'
                miw={'150px'}
                p={'1rem'}
                component={Link}
                to={value.path}
                withBorder shadow="sm" radius="lg">
                <div className='home-page-product-flex-image'>
                  <img
                    src={value.image} />
                </div>
                <Space h={'1rem'} />
                <Center>
                  <Title order={5}>
                    {value.title}
                  </Title>
                </Center>
              </Card>
            </div>
          ))
        }
      </div>
      <OfferSlider header={specialheader} header2={specialheader2} />
      <Container size={'82rem'} className='home-season-sale'>
        <div className="home-season-sale-season">
          <div className="home-season-sale-season1">
            <Link to='/category'>
              <div className="home-season-sale-season1-image">
                <img src={season1} alt="season1" />
              </div>
            </Link>
          </div>
          <div className="home-season-sale-season2">
            <Link to='/category'>
              <div className="home-season-sale-season2-image">
                <img src={season2} alt="season2" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <HomeProductsList header={featuredheader} header2={featuredheader2} subheader={featuredsubheader} />
      <HomeProductsList header={newarrivalheader} header2={newarrivalheader2} subheader={newarrivalsubheader} />
      <Container size={'82rem'} className='home-season-sale'>
        <div className="home-season-sale-season">
          <div className="home-season-sale-season1">
            <Link to='/category'>
              <div className="home-season-sale-season1-image">
                <img src={season1} alt="home-season-sale-season1" />
              </div>
            </Link>
          </div>
          <div className="home-season-sale-season2">
            <Link to='/category'>
              <div className="home-season-sale-season2-image">
                <img src={season2} alt="home-season-sale-season2" />
              </div>
            </Link>
          </div>
          <div className="home-season-sale-season2">
            <Link to='/category'>
              <div className="home-season-sale-season2-image">
                <img src={season2} alt="home-season-sale-season3" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
      {/* <OfferSlider header={clothingheader} />
      <OfferSlider header={jewelryheader} /> */}
      <HomeBlogs header={blogheader} header2={blogheader2} subheader={blogsubheader} />
    </div>
  )
}

export default Home