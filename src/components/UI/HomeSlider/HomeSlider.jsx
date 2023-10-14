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

import SubHomeSlider from './SubHomeSlider/SubHomeSlider';

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
                <SubHomeSlider />
            </div>
        </div>
    )
}

export default HomeSlider