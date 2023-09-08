//import react packages
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

import slider1 from '../../assets/home/slider/slider1.webp'
import slider2 from '../../assets/home/slider/slider2.webp'
import slider3 from '../../assets/home/slider/slider3.webp'
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
    return (
        <div>
            <div className="homeslider">
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    effect={'fade'}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, EffectFade, Navigation]}
                    className="mySwiper"
                >
                    {
                        sliderArray.map((slider, index) => {
                            return (
                                <SwiperSlide className='homeslider-slide' key={index}>
                                    <div className="overlay"></div>
                                    <img src={slider.image} alt="slider" />
                                    <div className={`homeslider-slide-content`}>
                                        <p className="typing-text">{slider.content}</p>
                                        <Link to={slider.link}>
                                            <button className='drop-button'>Buy Now</button>
                                        </Link>
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