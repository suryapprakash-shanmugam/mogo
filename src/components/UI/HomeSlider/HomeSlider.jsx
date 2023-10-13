import React from 'react'

//import HomeSlider css
import './HomeSlider.css'

//import swipper
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom'

//import css and other data for slider
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import modules for slider
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';

// Redux State
import { useSelector } from 'react-redux';

// Mantine
import { Button, Image, Title } from '@mantine/core';
//slider array
import bestsellers from '../../../assets/Banner/banner-div/bestsellers.png'
import buy from '../../../assets/Banner/banner-div/buy.jpg'
import coupons from '../../../assets/Banner/banner-div/coupons.png'
import newlaunches from '../../../assets/Banner/banner-div/newlaunches.png'
import trending from '../../../assets/Banner/banner-div/trending.png'

const HomeSlider = () => {

    // State 
    const carousel = useSelector((state) => state.carouselDetails.value)
    return (
        <div>
            <div className="homeslider">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    effect={'fade'}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, EffectFade, Navigation]}
                    className="mySwiper"
                >
                    {
                        carousel.map((value, index) => {
                            return (
                                <SwiperSlide key={index} className='homeslider-carousel-slides'>
                                    {/* <div className='homeslider-carousel-image'>
                                        <Image w={'100%'} height={'76vh'} src={value.image} />
                                    </div> */}
                                    <div
                                        className='homeslider-carousel-slides-div carocal-div'
                                    >
                                        <div
                                            className='header-slider-banner-content'
                                        >
                                            <Title className='home-page-banner-content-title'>
                                                {value.title}
                                            </Title>
                                            <Title className='home-page-banner-content-title'>
                                                {value.content}
                                            </Title>
                                            <Button className='home-page-banner-content-btn'>
                                                Explore More
                                            </Button>
                                        </div>
                                        <div className='slider-side-image carocal-div-image'>
                                            <Image
                                                className='mantine-banner-image'
                                                w={'100%'}
                                                src={value.image} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className="sub-div-carosel">
                    <div className="sub-div-carosel-main">
                        <div className="sub-div-carosel-main-grid">
                            <div className="sub-div-carosel-main-grid-heading">
                                <p>Buy it again</p>
                            </div>
                            <div className="sub-div-carosel-main-grid-content">
                                <div className="sub-div-carosel-main-grid-content-left">
                                    <img src={buy} />
                                </div>
                                <div className="sub-div-carosel-main-grid-content-right">
                                    <p>Easily find supplies from past orders</p>
                                </div>
                                <p></p>
                                <p className='know-more-link'>Know More</p>
                            </div>
                        </div>
                        <div className="sub-div-carosel-main-grid">
                            <div className="sub-div-carosel-main-grid-heading">
                                <p>Trending deals</p>
                            </div>
                            <div className="sub-div-carosel-main-grid-content">
                                <div className="sub-div-carosel-main-grid-content-left">
                                    <img src={trending} />
                                </div>
                                <div className="sub-div-carosel-main-grid-content-right">
                                    <p>Explore great deals on Top products + Bank discount & Bonus cashback</p>
                                </div>
                                <p></p>
                                <p className='know-more-link'>Know More</p>
                            </div>
                        </div>
                        <div className="sub-div-carosel-main-grid">
                            <div className="sub-div-carosel-main-grid-heading">
                                <p>Mogo Bestsellers</p>
                            </div>
                            <div className="sub-div-carosel-main-grid-content">
                                <div className="sub-div-carosel-main-grid-content-left">
                                    <img src={bestsellers} />
                                </div>
                                <div className="sub-div-carosel-main-grid-content-right">
                                    <p>Check out offers on our top selling products this season.</p>
                                </div>
                                <p></p>
                                <p className='know-more-link'>Know More</p>
                            </div>
                        </div>
                        <div className="sub-div-carosel-main-grid">
                            <div className="sub-div-carosel-main-grid-heading">
                                <p>Mogo Coupons</p>
                            </div>
                            <div className="sub-div-carosel-main-grid-content">
                                <div className="sub-div-carosel-main-grid-content-left">
                                    <img src={coupons} />
                                </div>
                                <div className="sub-div-carosel-main-grid-content-right">
                                    <p>Save extra on 20 lakh+ products</p>
                                </div>
                                <p></p>
                                <p className='know-more-link'>Know More</p>
                            </div>
                        </div>
                        <div className="sub-div-carosel-main-grid">
                            <div className="sub-div-carosel-main-grid-heading">
                                <p>New launches</p>
                            </div>
                            <div className="sub-div-carosel-main-grid-content">
                                <div className="sub-div-carosel-main-grid-content-left">
                                    <img src={newlaunches} />
                                </div>
                                <div className="sub-div-carosel-main-grid-content-right">
                                    <p>300+ New arrivals from Top Brands + Bank discount & Bonus cashback</p>
                                </div>
                                <p></p>
                                <p className='know-more-link'>Know More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSlider