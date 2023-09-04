//import react packages
import React, { useRef, useState } from 'react'

//import mantine components
import { Container, Rating } from '@mantine/core'

//import OfferSlider css
import './OfferSlider.css'

import { Carousel } from '@mantine/carousel';

import Autoplay from 'embla-carousel-autoplay';

import { useEmblaCarousel } from 'embla-carousel-react';

//import images
import baby_linen from '../../assets/home/grid-category/baby_linen.webp'
import wishlist from '../../assets/header/wishlist.webp'

const OfferSlider = () => {

    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <div>
            <div className='offerslider-div'>
                <Container size={'82rem'} className='offerslider-div-container'>
                    <h2 className='offerslider-div-container-heading'>Special Offers</h2>
                    <Carousel
                        align="start"
                        controlsOffset="md"
                        loop
                        slideSize="20%"
                        slideGap="xl"
                        className='offerslider-div-container-slider'
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}
                        dragFree>
                        <Carousel.Slide className='offerslider-div-container-slider-individual'>
                            <div className="offerslider-div-container-slider-image">
                                <img src={baby_linen} alt="" />
                            </div>
                            <div className="offerslider-div-container-slider-content">
                                <div className="offerslider-div-container-slider-content-heading">
                                    <p>This is demo</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-seller">
                                    <p>Shopiezy</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-rating-wishlist">
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-rating">
                                        <Rating value={4} readOnly />
                                    </div>
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-wishlist">
                                        <img src={wishlist} width="20" alt="" />
                                    </div>
                                </div>
                                <div className="offerslider-div-container-slider-content-price">
                                    <p className="offerslider-div-container-slider-content-price-old">$36</p>
                                    <p className="offerslider-div-container-slider-content-price-new">$25.20</p>
                                </div>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide className='offerslider-div-container-slider-individual'>
                            <div className="offerslider-div-container-slider-image">
                                <img src={baby_linen} alt="" />
                            </div>
                            <div className="offerslider-div-container-slider-content">
                                <div className="offerslider-div-container-slider-content-heading">
                                    <p>This is demo</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-seller">
                                    <p>Shopiezy</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-rating-wishlist">
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-rating">
                                        <Rating value={4} readOnly />
                                    </div>
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-wishlist">
                                        <img src={wishlist} width="20" alt="" />
                                    </div>
                                </div>
                                <div className="offerslider-div-container-slider-content-price">
                                    <p className="offerslider-div-container-slider-content-price-old">$36</p>
                                    <p className="offerslider-div-container-slider-content-price-new">$25.20</p>
                                </div>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide className='offerslider-div-container-slider-individual'>
                            <div className="offerslider-div-container-slider-image">
                                <img src={baby_linen} alt="" />
                            </div>
                            <div className="offerslider-div-container-slider-content">
                                <div className="offerslider-div-container-slider-content-heading">
                                    <p>This is demo</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-seller">
                                    <p>Shopiezy</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-rating-wishlist">
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-rating">
                                        <Rating value={4} readOnly />
                                    </div>
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-wishlist">
                                        <img src={wishlist} width="20" alt="" />
                                    </div>
                                </div>
                                <div className="offerslider-div-container-slider-content-price">
                                    <p className="offerslider-div-container-slider-content-price-old">$36</p>
                                    <p className="offerslider-div-container-slider-content-price-new">$25.20</p>
                                </div>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide className='offerslider-div-container-slider-individual'>
                            <div className="offerslider-div-container-slider-image">
                                <img src={baby_linen} alt="" />
                            </div>
                            <div className="offerslider-div-container-slider-content">
                                <div className="offerslider-div-container-slider-content-heading">
                                    <p>This is demo</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-seller">
                                    <p>Shopiezy</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-rating-wishlist">
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-rating">
                                        <Rating value={4} readOnly />
                                    </div>
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-wishlist">
                                        <img src={wishlist} width="20" alt="" />
                                    </div>
                                </div>
                                <div className="offerslider-div-container-slider-content-price">
                                    <p className="offerslider-div-container-slider-content-price-old">$36</p>
                                    <p className="offerslider-div-container-slider-content-price-new">$25.20</p>
                                </div>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide className='offerslider-div-container-slider-individual'>
                            <div className="offerslider-div-container-slider-image">
                                <img src={baby_linen} alt="" />
                            </div>
                            <div className="offerslider-div-container-slider-content">
                                <div className="offerslider-div-container-slider-content-heading">
                                    <p>This is demo</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-seller">
                                    <p>Shopiezy</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-rating-wishlist">
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-rating">
                                        <Rating value={4} readOnly />
                                    </div>
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-wishlist">
                                        <img src={wishlist} width="20" alt="" />
                                    </div>
                                </div>
                                <div className="offerslider-div-container-slider-content-price">
                                    <p className="offerslider-div-container-slider-content-price-old">$36</p>
                                    <p className="offerslider-div-container-slider-content-price-new">$25.20</p>
                                </div>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide className='offerslider-div-container-slider-individual'>
                            <div className="offerslider-div-container-slider-image">
                                <img src={baby_linen} alt="" />
                            </div>
                            <div className="offerslider-div-container-slider-content">
                                <div className="offerslider-div-container-slider-content-heading">
                                    <p>This is demo</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-seller">
                                    <p>Shopiezy</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-rating-wishlist">
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-rating">
                                        <Rating value={4} readOnly />
                                    </div>
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-wishlist">
                                        <img src={wishlist} width="20" alt="" />
                                    </div>
                                </div>
                                <div className="offerslider-div-container-slider-content-price">
                                    <p className="offerslider-div-container-slider-content-price-old">$36</p>
                                    <p className="offerslider-div-container-slider-content-price-new">$25.20</p>
                                </div>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide className='offerslider-div-container-slider-individual'>
                            <div className="offerslider-div-container-slider-image">
                                <img src={baby_linen} alt="" />
                            </div>
                            <div className="offerslider-div-container-slider-content">
                                <div className="offerslider-div-container-slider-content-heading">
                                    <p>This is demo</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-seller">
                                    <p>Shopiezy</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-rating-wishlist">
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-rating">
                                        <Rating value={4} readOnly />
                                    </div>
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-wishlist">
                                        <img src={wishlist} width="20" alt="" />
                                    </div>
                                </div>
                                <div className="offerslider-div-container-slider-content-price">
                                    <p className="offerslider-div-container-slider-content-price-old">$36</p>
                                    <p className="offerslider-div-container-slider-content-price-new">$25.20</p>
                                </div>
                            </div>
                        </Carousel.Slide>
                        <Carousel.Slide className='offerslider-div-container-slider-individual'>
                            <div className="offerslider-div-container-slider-image">
                                <img src={baby_linen} alt="" />
                            </div>
                            <div className="offerslider-div-container-slider-content">
                                <div className="offerslider-div-container-slider-content-heading">
                                    <p>This is demo</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-seller">
                                    <p>Shopiezy</p>
                                </div>
                                <div className="offerslider-div-container-slider-content-rating-wishlist">
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-rating">
                                        <Rating value={4} readOnly />
                                    </div>
                                    <div className="offerslider-div-container-slider-content-rating-wishlist-wishlist">
                                        <img src={wishlist} width="20" alt="" />
                                    </div>
                                </div>
                                <div className="offerslider-div-container-slider-content-price">
                                    <p className="offerslider-div-container-slider-content-price-old">$36</p>
                                    <p className="offerslider-div-container-slider-content-price-new">$25.20</p>
                                </div>
                            </div>
                        </Carousel.Slide>
                    </Carousel>
                </Container>
            </div>
        </div>
    )
}

export default OfferSlider