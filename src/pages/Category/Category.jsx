//import react packages
import React, { useState } from 'react'

//import mantine packages
import { Container, Rating, Select } from '@mantine/core'

//import Breadcrumb component from components->Breadcrumb
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

//import Category css file
import './Category.css'

//import image for pagination
import angleleft from '../../assets/pagination/angleleft.webp'
import angleright from '../../assets/pagination/angleright.webp'

import { useLocation } from 'react-router-dom'

//import react pagination package
import ReactPaginate from 'react-paginate';

//import icons
import cart from '../../assets/header/cart.webp'
import wishlist from '../../assets/header/wishlist.webp'
import arrowdown from '../../assets/preheader/arrow-down.webp'

//import demo images
import baby_linen from '../../assets/home/grid-category/baby_linen.webp'
import bath_linen from '../../assets/home/grid-category/bath_linen.webp'

const Category = () => {

    const location = useLocation()

    const value = {
        "/category/tablelinen": { title: 'Table Linen', href: '/category/tablelinen' },
        "/category/kitchenlinen": { title: 'Kitchen Linen', href: '/category/kitchenlinen' },
        "/category/bathlinen": { title: 'Bath Linen', href: '/category/bathlinen' },
        "/category/bedlinen": { title: 'Bed Linen', href: '/category/bedlinen' },
        "/category/livinglinen": { title: 'Living Linen', href: '/category/livinglinen' },
        "/category/babylinen": { title: 'Baby Linen', href: '/category/babylinen' },
    }

    // array for breadcrumb
    const items = [
        { title: 'Home', href: '/' },
        { title: 'Category', href: '/category' },
    ];
    if (location.pathname !== '/category') {
        items.push(value[location.pathname])
    }

    const returnValue = items[items.length - 1].title

    //display individual product array
    const productDetailsArray = [
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: 'Featured',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: 'Featured',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '',
            newprice: '80',
            featured: 'Featured',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: '',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: '',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '',
            newprice: '80',
            featured: 'Featured',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '',
            newprice: '80',
            featured: 'Featured',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: 'Featured',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '',
            newprice: '80',
            featured: '',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: 'Featured',
        },
    ]
    const ITEMS_PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const totalPages = Math.ceil(productDetailsArray.length / ITEMS_PER_PAGE);

    const displayedItems = productDetailsArray.slice(
        currentPage * ITEMS_PER_PAGE,
        // (currentPage + 1) * ITEMS_PER_PAGE
        (currentPage * ITEMS_PER_PAGE) + ITEMS_PER_PAGE
    );

    //sortby select array
    const sortByArray = [
        { value: 'mostrating', label: 'Most Recent' },
        { value: 'lowestrating', label: 'Lowest Price' },
        { value: 'hightpricing', label: 'Highest Price' },
        { value: 'highestrating', label: 'Highest Rating' },
    ]

    return (
        <div>
            <div className="category-div">
                <Container size={'82rem'} className='category-div-container'>
                    <div className="category-div-container-breadcrumb">
                        <Breadcrumb value={items} />
                    </div>
                    <h1>{returnValue}</h1>
                    <div className="category-div-container-main">
                        <div className="category-div-container-main-filter">
                            <div className="category-div-container-main-filter-main">
                                <div className="category-div-container-main-filter-main-category">
                                    <p className='category-div-container-main-filter-main-category-head'>Category</p>
                                </div>
                                <hr />
                                <div className="category-div-container-main-filter-main-brand">
                                    <p className='category-div-container-main-filter-main-category-head'>Brand</p>
                                </div>
                                <hr />
                                <div className="category-div-container-main-filter-main-fabric">
                                    <p className='category-div-container-main-filter-main-category-head'>Fabric</p>
                                </div>
                            </div>
                        </div>
                        <div className="category-div-container-main-product">
                            <div className="category-div-container-main-product-sortby">
                                <div className="category-div-container-main-product-sortby-form">
                                    <div className="category-div-container-main-product-sortby-form-label">
                                        <p>Sort By:</p>
                                    </div>
                                    <div className="category-div-container-main-product-sortby-form-select">
                                        <Select
                                            defaultValue={sortByArray[0].value}
                                            rightSection={<img src={arrowdown} width='10' />}
                                            data={sortByArray}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="category-div-container-main-product-product_display">
                                {
                                    displayedItems.map((productDetails, index) => {
                                        return (
                                            <div key={index} className="category-div-container-main-product-product_display-individual">
                                                <div className="category-div-container-main-product-product_display-individual-image">
                                                    <img src={productDetails.image} alt="first product" />
                                                    <img src={productDetails.secondimage} id="category_second_image" alt="second product" />
                                                    {
                                                        productDetails.featured != '' ?
                                                            <div className="category-div-container-main-product-product_display-individual-image-featured">
                                                                <p>{productDetails.featured}</p>
                                                            </div> : ''
                                                    }
                                                    <div className="category-div-container-main-product-product_display-individual-image-cart-wishlist">
                                                        <div className="category-div-container-main-product-product_display-individual-image-cart-wishlist-cart">
                                                            <img src={cart} alt="cart icon" />
                                                        </div>
                                                        <div className="category-div-container-main-product-product_display-individual-image-cart-wishlist-wishlist">
                                                            <img src={wishlist} alt="wishlist icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="category-div-container-main-product-product_display-individual-heading">
                                                    <p>{productDetails.heading}</p>
                                                </div>
                                                <div className="category-div-container-main-product-product_display-individual-shop-name">
                                                    <p>{productDetails.seller}</p>
                                                </div>
                                                <div className="category-div-container-main-product-product_display-individual-rating-heart">
                                                    <div className="category-div-container-main-product-product_display-individual-rating-heart-rating">
                                                        <Rating value={productDetails.rating} readOnly />
                                                    </div>
                                                    <div className="category-div-container-main-product-product_display-individual-rating-heart-heart">
                                                        <div><img src={wishlist} width={15} alt="" /></div>
                                                        <div>{productDetails.like}</div>
                                                    </div>

                                                </div>
                                                <div className="category-div-container-main-product-product_display-individual-price">
                                                    {
                                                        productDetails.oldprice != '' ? <p className='oldprice'>{`${productDetails.currencysymbol}${productDetails.oldprice}`}</p> : ''
                                                    }
                                                    <p>{`${productDetails.currencysymbol}${productDetails.newprice}`}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="pagination-container">
                                <ReactPaginate
                                    previousLabel={<img src={angleleft} width="20" alt='pagination left icon' />}
                                    nextLabel={<img src={angleright} width="20" alt='pagination right icon' />}
                                    pageCount={totalPages}
                                    onPageChange={handlePageChange}
                                    forcePage={currentPage}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                    previousClassName={currentPage === 0 ? 'disabled' : ''}
                                    nextClassName={currentPage === totalPages - 1 ? 'disabled' : ''}
                                    disabledClassName={'disabled'}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Category