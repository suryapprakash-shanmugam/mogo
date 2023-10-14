import React from 'react'
import './SubHomeSlider.css'
import bestsellers from '../../../../assets/Banner/banner-div/bestsellers.png'
import buy from '../../../../assets/Banner/banner-div/buy.jpg'
import coupons from '../../../../assets/Banner/banner-div/coupons.png'
import newlaunches from '../../../../assets/Banner/banner-div/newlaunches.png'
import trending from '../../../../assets/Banner/banner-div/trending.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

import { useMediaQuery } from '@mantine/hooks'

const SubHomeSlider = () => {

    const header1060MediaQuery = useMediaQuery('(max-width:1151px)')
    const header768MediaQuery = useMediaQuery('(max-width:768px)')

    return (
        <div>
            <div className="sub-div-carosel">
                {header1060MediaQuery ? <>
                    <Swiper
                        slidesPerView={header768MediaQuery ? '2' :'3' }
                        spaceBetween={30}
                        loop={true}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        <div className="sub-div-carosel-main">
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                            <SwiperSlide>
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
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </> : <>
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
                </>
                }

            </div>
        </div>
    )
}

export default SubHomeSlider