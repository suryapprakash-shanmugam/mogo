//import react packages
import React, { useState } from 'react'

//import mantine packages
import { Container, Rating } from '@mantine/core'

//import react-router-dom packages
import { Link } from 'react-router-dom'

//import HomeProductsList css
import './HomeProductsList.css'

//import images
import bath_linen from '../../../assets/home/grid-category/bath_linen.webp'
import kitchen_linen from '../../../assets/home/grid-category/kitchen_linen.webp'

import wishlist from '../../../assets/header/wishlist.webp'
import cart from '../../../assets/header/cart.webp'

import arrowdown from '../../../assets/preheader/arrow-down.webp'


const HomeProductsList = ({ header, subheader }) => {

    const initialItemsToShow = 5; // Number of items to show initially
    const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

    const handleShowMoreClick = () => {
        // Increase the number of items to show when the button is clicked
        setItemsToShow(itemsToShow + initialItemsToShow);
    };

    //homeproductlist array
    const homeProductListArray = [
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
        {
            image: bath_linen,
            secondimage: kitchen_linen,
            header: 'Colorful women scarfs',
            shopname: 'Shopiezy',
            rating: '0',
            like: '0',
            currencysymbol: '$',
            price: '10',
            link: '/products',
        },
    ]

    return (
        <div>
            <div className="homeproductlist-div">
                <Container size={'82rem'} className='homeproductlist-div-container'>
                    <div className="homeproductlist-div-container-heading">
                        <h1>{header}</h1>
                        <p>{subheader}</p>
                    </div>
                    <div className="homeproductlist-div-container-content">
                        {
                            homeProductListArray.slice(0, itemsToShow).map((homeProductList, index) => {
                                return (
                                    <div key={index} className="homeproductlist-div-container-content-product">
                                        <Link to={homeProductList.link}>
                                            <div className="homeproductlist-div-container-content-product-image">
                                                <div className="homeproductlist-div-container-content-product-image-img">
                                                    <img src={homeProductList.image} alt="" />
                                                    <img src={homeProductList.secondimage} alt="" id='second-image' />
                                                    <div className="homeproductlist-div-container-content-product-wishlist-cart">
                                                        <div className="homeproductlist-div-container-content-product-wishlist-cart-wishlist">
                                                            <div className="homeproductlist-div-container-content-product-wishlist-cart-wishlist-image">
                                                                <img src={wishlist} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="homeproductlist-div-container-content-product-wishlist-cart-cart">
                                                            <div className="homeproductlist-div-container-content-product-wishlist-cart-cart-image">
                                                                <img src={cart} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="homeproductlist-div-container-content-product-content">
                                            <div className="homeproductlist-div-container-content-product-content-header">
                                                <p>{homeProductList.header}</p>
                                            </div>
                                            <div className="homeproductlist-div-container-content-product-content-shop-name">
                                                <p>{homeProductList.shopname}</p>
                                            </div>
                                            <div className="homeproductlist-div-container-content-product-content-rating-like">
                                                <div className="homeproductlist-div-container-content-product-content-rating-like-rating">
                                                    <Rating value={homeProductList.rating} readOnly />
                                                </div>
                                                <div className="homeproductlist-div-container-content-product-content-rating-like-like">
                                                    <div className="homeproductlist-div-container-content-product-content-rating-like-like-image">
                                                        <img src={wishlist} alt="" width={10} />
                                                    </div>
                                                    {homeProductList.like}
                                                </div>
                                            </div>
                                            <div className="homeproductlist-div-container-content-product-content-price">
                                                <h1>{`${homeProductList.currencysymbol}${homeProductList.price}`}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {itemsToShow < homeProductListArray.length && (
                        <div className="homeproductlist-div-container-content-product-content-show-more">
                            <button onClick={handleShowMoreClick} className=''>Load More <img src={arrowdown} width={10} alt="" /></button>
                        </div>
                    )}
                </Container>
            </div>
        </div>
    )
}

export default HomeProductsList