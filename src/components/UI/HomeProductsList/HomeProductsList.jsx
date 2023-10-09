//import react packages
import React, { useEffect, useState } from 'react'

//import mantine packages
import { Center, Container, Rating } from '@mantine/core'

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
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { listAllProduct } from '../../../config/quries/Products/ProductQuries'
import { setProductList } from '../../../StateHandler/Slice/Products/ProductSlice'

import config from "../../../config/server/Servers"
import { categoryById } from '../../../config/quries/Category/CategoryQueries'
import { subCategorById } from '../../../config/quries/SubCategory/SubCategoryQuries'


const HomeProductsList = ({ header, subheader, header2 }) => {

    const initialItemsToShow = 5;
    const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

    const handleShowMoreClick = () => {
        setItemsToShow(itemsToShow + initialItemsToShow);
    };

    //homeproductlist array
    // const homeProductListArray = [
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    //     {
    //         image: bath_linen,
    //         secondimage: kitchen_linen,
    //         header: 'Colorful women scarfs',
    //         shopname: 'Shopiezy',
    //         rating: '0',
    //         like: '0',
    //         currencysymbol: '$',
    //         price: '10',
    //         link: '/products',
    //     },
    // ]

    const productList = useSelector((state) => state.productList.value)
    const dispatch = useDispatch()

    // const productList = 
    useQuery('productList',
        listAllProduct,
        {
            onSuccess: (res) => {
                dispatch(setProductList(res?.data?.data?.result))
            },
        }
    )

    const [shuffledProducts, setShuffledProducts] = useState([]);
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };
    useEffect(() => {
        const shuffled = shuffleArray(productList);
        setShuffledProducts(shuffled);
    }, [productList]);

    const [categoryId, setCategoryId] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [subCategoryId, setSubCategoryId] = useState('')
    const [subCategoryName, setSubCategoryName] = useState('')

    // handle Add to cart

    // Category 
    useQuery(
        ['categoryByid', categoryId],
        categoryById,
        {
            onSuccess: (res) => {
                const filter = res.data?.data?.result?.name.replace(' ', "_")
                setCategoryName(filter)
            }
        }
    )

    useQuery(
        ['subcategoryByid', subCategoryId],
        subCategorById,
        {
            onSuccess: (res) => {
                const filter = res.data?.data?.result?.name.replace(' ', "_")
                setSubCategoryName(filter)
            }
        }
    )


    return (
        <div>
            <div className="homeproductlist-div">
                <Container size={'82rem'} className='homeproductlist-div-container'>
                    <Center>
                        <div className="homeproductlist-div-container-heading">
                            <h1>
                                {header}
                                &nbsp;
                                <span className='second-header-color'>
                                    {header2}
                                </span>
                            </h1>
                            <p>{subheader}</p>
                        </div>
                    </Center>
                    <div className="homeproductlist-div-container-content">
                        {
                            shuffledProducts.slice(0, itemsToShow).map((homeProductList, index) => {
                                return (
                                    <div key={index} className="homeproductlist-div-container-content-product">
                                        <Link
                                            onMouseOver={() => {
                                                setCategoryId(homeProductList.product_category);
                                                setSubCategoryId(homeProductList.product_subcategory)
                                            }}
                                            onClick={() => {
                                                setCategoryId(homeProductList.product_category);
                                                setSubCategoryId(homeProductList.product_subcategory)
                                            }}
                                            to={`/product/${categoryName}/${subCategoryName}/${homeProductList._id}`}
                                        // to={homeProductList.link}
                                        >
                                            <div className="homeproductlist-div-container-content-product-image">
                                                <div className="homeproductlist-div-container-content-product-image-img">
                                                    <img src={`${config.baseUrlApi}/assets/productImages/${homeProductList.product_image}`} alt="" />
                                                    <img src={`${config.baseUrlApi}/assets/productImages/${homeProductList.product_gallery_image[1]}`} alt="" id='second-image' />
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
                                                <p>{homeProductList.name}</p>
                                            </div>
                                            <div className="homeproductlist-div-container-content-product-content-shop-name">
                                                <p>
                                                    Mogo
                                                    {/* {homeProductList.shopname} */}
                                                </p>
                                            </div>
                                            <div className="homeproductlist-div-container-content-product-content-rating-like">
                                                <div className="homeproductlist-div-container-content-product-content-rating-like-rating">
                                                    <Rating value={5} readOnly />
                                                </div>
                                                <div className="homeproductlist-div-container-content-product-content-rating-like-like">
                                                    <div className="homeproductlist-div-container-content-product-content-rating-like-like-image">
                                                        <img src={wishlist} alt="" width={10} />
                                                    </div>
                                                    {homeProductList.like}
                                                </div>
                                            </div>
                                            <div className="homeproductlist-div-container-content-product-content-price">
                                                <h1>₹{`${homeProductList.sale_price ? homeProductList.sale_price : 199}`}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* {
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
                        } */}
                    </div>
                    {/* {itemsToShow < homeProductListArray.length && (
                        <div className="homeproductlist-div-container-content-product-content-show-more">
                            <button onClick={handleShowMoreClick} className=''>Load More <img src={arrowdown} width={10} alt="" /></button>
                        </div>
                    )} */}
                </Container>
            </div>
        </div>
    )
}

export default HomeProductsList