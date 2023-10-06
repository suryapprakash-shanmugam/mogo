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

// import slider images for slider

import slider1 from '../../../assets/Banner/DemoBanner.jpg'
import slider2 from '../../../assets/home/slider/slider2.webp'
import slider3 from '../../../assets/home/slider/slider3.webp'

// Redux State
import { useSelector } from 'react-redux';

// Mantine
import { Button, Image, Title } from '@mantine/core';
//slider array

const sliderArray = [
    {
        image: slider1,
        content: 'Table Linen',
        link: '/category/tablelinen',
    },
    {
        image: slider2,
        content: "Living Linen",
        link: '/category/livinglinen',
    },
    {
        image: slider3,
        content: "Bed Linen.",
        link: '/category/bedlinen',
    },
]

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
                                    <div className='homeslider-carousel-image'>
                                        <Image w={'100%'} height={'76vh'} src={value.image} />
                                    </div>
                                    <div
                                        className={`homeslider-carousel-content 
                                    ${index === 1 ?
                                                'right-content' : ''
                                            }`}>
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
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider