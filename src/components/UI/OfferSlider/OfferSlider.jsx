//import react packages
import React, { useRef } from 'react'

//import mantine components
import { Container, Rating, Center, Space } from '@mantine/core'

//import OfferSlider css
import './OfferSlider.css'

import { Carousel } from '@mantine/carousel';

import Autoplay from 'embla-carousel-autoplay';

//import react-router-dom packages
import { Link } from 'react-router-dom'

//import images
import baby_linen from '../../../assets/home/grid-category/baby_linen.webp'
import bath_linen from '../../../assets/home/grid-category/bath_linen.webp'
import wishlist from '../../../assets/header/wishlist.webp'
import cart from '../../../assets/header/cart.webp'

const OfferSlider = ({ header, header2 }) => {

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    //offerslider array
    const offerSliderArray = [
        {
            offer: '10%',
            image: baby_linen,
            secondImage: bath_linen,
            heading: 'This is demo',
            productshop: 'Shopiezy',
            productrating: '4',
            wishlistcount: '3',
            productoldprice: '30',
            currencysymbol: '$',
            productnewprice: '25',
            link: '/products',
            like: '0',
        },
        {
            offer: '10%',
            image: baby_linen,
            secondImage: bath_linen,
            heading: 'This is demo',
            productshop: 'Shopiezy',
            productrating: '4',
            wishlistcount: '3',
            productoldprice: '30',
            currencysymbol: '$',
            productnewprice: '29',
            link: '/products',
            like: '0',
        },
        {
            offer: '10%',
            image: baby_linen,
            secondImage: bath_linen,
            heading: 'This is demo',
            productshop: 'Shopiezy',
            productrating: '4',
            wishlistcount: '3',
            productoldprice: '30',
            currencysymbol: '$',
            productnewprice: '25',
            link: '/products',
            like: '0',
        },
        {
            offer: '10%',
            image: baby_linen,
            secondImage: bath_linen,
            heading: 'This is demo',
            productshop: 'Shopiezy',
            productrating: '4',
            wishlistcount: '3',
            productoldprice: '50',
            currencysymbol: '$',
            productnewprice: '25',
            link: '/products',
            like: '0',
        },
        {
            offer: '10%',
            image: baby_linen,
            secondImage: bath_linen,
            heading: 'This is demo',
            productshop: 'Shopiezy',
            productrating: '4',
            wishlistcount: '3',
            productoldprice: '40',
            currencysymbol: '$',
            productnewprice: '25',
            link: '/products',
            like: '0',
        },
        {
            offer: '10%',
            image: baby_linen,
            secondImage: bath_linen,
            heading: 'This is demo',
            productshop: 'Shopiezy',
            productrating: '4',
            wishlistcount: '3',
            productoldprice: '30',
            currencysymbol: '$',
            productnewprice: '25',
            link: '/products',
            like: '0',
        },
        {
            offer: '10%',
            image: baby_linen,
            secondImage: bath_linen,
            heading: 'This is demo',
            productshop: 'Shopiezy',
            productrating: '4',
            wishlistcount: '3',
            productoldprice: '35',
            currencysymbol: '$',
            productnewprice: '25',
            link: '/products',
            like: '0',
        },
        {
            offer: '10%',
            image: baby_linen,
            secondImage: bath_linen,
            heading: 'This is demo',
            productshop: 'Shopiezy',
            productrating: '4',
            wishlistcount: '3',
            productoldprice: '30',
            currencysymbol: '$',
            productnewprice: '26',
            link: '/products',
            like: '0',
        },
    ]
    const slidesToShow = 5;
    const calculatedSlideSize = `${100 / slidesToShow}%`;


    return (
        <div>
            <div className='offerslider-div'>
                <Container size={'82rem'} className='offerslider-div-container'>
                    <Center>
                        <h1 className='offerslider-div-container-heading'>
                            {header}
                            &nbsp;
                            <span className='second-header-color'>
                                {header2}
                            </span>
                        </h1>
                    </Center>
                    <Carousel
                        align="start"
                        controlsOffset="md"
                        loop
                        slideSize={calculatedSlideSize} 
                        slideGap="xs"
                        controlSize={36}
                        className='offerslider-div-container-slider'
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}
                        dragFree
                    >
                        {
                            offerSliderArray.map((offerSlider, index) => {
                                return (
                                    <Carousel.Slide key={index} className='offerslider-div-container-slider-individual'>
                                        <Link to={offerSlider.link}>
                                            <div className="offerslider-div-container-slider-image">
                                                <img src={offerSlider.image} alt="" />
                                                <img src={offerSlider.secondImage} className="second-image" alt="" />
                                                <div className="offerslider-div-container-slider-individual-wishlist-cart">
                                                    <div id="offerslider-div-container-slider-individual-wishlist-cart-wishlist">
                                                        <img src={wishlist} width='10' alt="" />
                                                    </div>
                                                    <div id="offerslider-div-container-slider-individual-wishlist-cart-cart">
                                                        <img src={cart} width='10' alt="" />
                                                    </div>
                                                </div>
                                                <div className="offerslider-div-container-slider-individual-discount"><p>{offerSlider.offer}</p></div>
                                            </div>
                                        </Link>
                                        <div className="offerslider-div-container-slider-content">
                                            <div className="offerslider-div-container-slider-content-heading">
                                                <p>{offerSlider.heading}</p>
                                            </div>
                                            <div className="offerslider-div-container-slider-content-seller">
                                                <p>{offerSlider.productshop}</p>
                                            </div>
                                            {/* <div className="offerslider-div-container-slider-content-rating-wishlist">
                                                <div className="offerslider-div-container-slider-content-rating-wishlist-rating">
                                                    <Rating value={offerSlider.productrating} readOnly />
                                                </div>
                                                <div className="offerslider-div-container-slider-content-rating-wishlist-wishlist">
                                                    <img src={wishlist} width="20" alt="" />
                                                </div>
                                            </div> */}
                                            <div className="homeproductlist-div-container-content-product-content-rating-like">
                                                <div className="homeproductlist-div-container-content-product-content-rating-like-rating">
                                                    <Rating value={offerSlider.productrating} readOnly />
                                                </div>
                                                <div className="homeproductlist-div-container-content-product-content-rating-like-like">
                                                    <div className="homeproductlist-div-container-content-product-content-rating-like-like-image">
                                                        <img src={wishlist} alt="" width={10} />
                                                    </div>
                                                    {offerSlider.like}
                                                </div>
                                            </div>
                                            <div className="offerslider-div-container-slider-content-price">
                                                <p className="offerslider-div-container-slider-content-price-old">{` ${offerSlider.currencysymbol}`}{offerSlider.productoldprice}</p>
                                                <p className="offerslider-div-container-slider-content-price-new">{` ${offerSlider.currencysymbol}`}{offerSlider.productnewprice}</p>
                                            </div>
                                        </div>
                                    </Carousel.Slide>
                                )
                            })
                        }
                    </Carousel>
                </Container>
            </div>
        </div>
    )
}

export default OfferSlider