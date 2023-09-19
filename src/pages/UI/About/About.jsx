//import react packages
import React from 'react'

//import mantine packages
import { Container } from '@mantine/core'

//import About css
import './About.css'

//import breadcrumb from components folder
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';

const About = () => {

  // array for breadcrumb
  const items = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
  ];

  return (
    <div>
      <div className="about-div">
        <Container className='about-div-container' size={'82rem'}>
          <div className="category-div-container-breadcrumb">
            <Breadcrumb value={items} />
          </div>
          <div className="about-div-container-main">
            <div className="about-div-container-main-head">
              <h1>About Us</h1>
            </div>
            <div className="about-div-container-main-content">
              <p>Welcome to Mogo! We are a dynamic and innovative e-commerce platform that connects buyers and sellers from all over the world. At Mogo, we are committed to providing our users with a seamless and enjoyable shopping experience.</p>
              <p>Our platform is designed to make buying and selling easy and hassle-free. Whether you are looking to purchase the latest fashion trends or sell your handmade crafts, Mogo is the perfect place to do it. With a wide range of categories to choose from, including fashion, beauty, home and garden, electronics, and more, there is something for everyone on Mogo.</p>
              <p>Our team of experts is dedicated to ensuring that our users have access to the best products and services. We work hard to maintain the highest standards of quality, safety, and reliability on our platform. We constantly monitor our site to ensure that all listings meet our guidelines and are free from fraud and scams.</p>
              <p>At Mogo, we believe in the power of community. We strive to create a platform where buyers and sellers can connect and build long-lasting relationships. Our community is made up of individuals from all walks of life who share a passion for great products and exceptional service.</p>
              <p>We are committed to providing our users with the best possible experience. That’s why we offer a range of tools and features that make it easy to buy and sell on our platform. Our user-friendly interface is designed to be intuitive and easy to navigate, so you can find what you are looking for quickly and easily.</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default About