//import react packages
import React from 'react'

//import HomeSlider css
import './HomeSlider.css'

//import swipper
import { Swiper, SwiperSlide } from 'swiper/react';

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
    { image: slider1 },
    { image: slider2 },
    { image: slider3 },
]

const HomeSlider = () => {
    return (
        <div>
            <div className="homeSlider">
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
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
                                <SwiperSlide key={index}><img src={slider.image} alt="" /></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider