//import react packages
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//import mantine components
import { Container, Rating, Center } from '@mantine/core'

//import OfferSlider css
import './OfferSlider.css'

import { Carousel } from '@mantine/carousel';

import Autoplay from 'embla-carousel-autoplay';

//import react-router-dom packages
import { Link } from 'react-router-dom'

//import images
import wishlist from '../../../assets/header/wishlist.webp'
import cart from '../../../assets/header/cart.webp'
import { useDispatch, useSelector } from 'react-redux';
import { listAllProduct } from '../../../config/quries/Products/ProductQuries';
import { setProductList } from '../../../StateHandler/Slice/Products/ProductSlice';
import { useQuery } from 'react-query';
import config from "../../../config/server/Servers"
import ReactHtmlParser from 'react-html-parser';
import { categoryById } from '../../../config/quries/Category/CategoryQueries';
import { subCategorById } from '../../../config/quries/SubCategory/SubCategoryQuries';
import { handleAddtoCartControl } from '../../../controller/cart/cartController';
import Cookies from 'js-cookie';

const OfferSlider = ({ header, header2 }) => {
    const navigate = useNavigate()

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    //offerslider array
    const slidesToShow = 5;
    const calculatedSlideSize = `${100 / slidesToShow}%`;


    // State Handler
    const productList = useSelector((state) => state.productList.value)
    const dispatch = useDispatch()

    // const productList = 
    useQuery('productList',
        listAllProduct,
        {
            refetchOnWindowFocus: false,
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
            refetchOnWindowFocus: false,
            enabled: !!categoryId,
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
            refetchOnWindowFocus: false,
            enabled: !!subCategoryId,
            onSuccess: (res) => {
                const filter = res.data?.data?.result?.name.replace(' ', "_")
                setSubCategoryName(filter)
            }
        }
    )

    // Cart State
    const [cartArray, setCartArray] = useState([])
    // User ID
    const user_id = sessionStorage.getItem('MogoUserAccessToken101')
    const handleAddtoCart = (id) => {
        if (user_id) {
            const payload = {
                product_id: id,
                user_id: user_id
            }
            handleAddtoCartControl(payload)
            navigate('/')
        }
        else {
            setCartArray([...cartArray, id])
            const serializedArray = JSON.stringify(cartArray);
            Cookies.set('Product_id', serializedArray)
        }
    }

    const getCookie = Cookies.get('Product_id')
    const cartArrayList = getCookie ? JSON.parse(getCookie) : [];

    const hanldeNavigatePage = (product) => {
        setCategoryId(product.product_category);
        setSubCategoryId(product.product_subcategory)
        if (categoryId && subCategoryId) {
            navigate(`/product/${categoryName}/${subCategoryName}/${product._id}`)
        }
    }

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
                            shuffledProducts.map((product, index) => {
                                return (
                                    <Carousel.Slide key={index} className='offerslider-div-container-slider-individual'>
                                        <div className="offerslider-div-container-slider-image">
                                            <div
                                                className='offerslider-div-container-slider-image-router'
                                                onClick={() => {
                                                    hanldeNavigatePage(product)
                                                }}
                                                onMouseOver={() => {
                                                    setCategoryId(product.product_category);
                                                    setSubCategoryId(product.product_subcategory)
                                                }}
                                            >
                                                <img src={`${config.baseUrlApi}/assets/productImages/${product.product_image}`} alt="" />
                                                <img className="second-image" src={`${config.baseUrlApi}/assets/productImages/${product.product_gallery_image[1]}`} alt="" />
                                            </div>
                                            {/* <img src={offerSlider.secondImage} alt="" /> */}
                                            <div className="offerslider-div-container-slider-individual-wishlist-cart">
                                                <div id="offerslider-div-container-slider-individual-wishlist-cart-wishlist">
                                                    <img src={wishlist} width='10' alt="" />
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        handleAddtoCart(product._id);
                                                    }}
                                                    id="offerslider-div-container-slider-individual-wishlist-cart-cart">
                                                    <img src={cart} width='10' alt="" />
                                                </div>
                                            </div>
                                            <div className="offerslider-div-container-slider-individual-discount">
                                                <p>
                                                    34%
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            onClick={() => {
                                                hanldeNavigatePage(product)
                                            }}
                                            className="offerslider-div-container-slider-content">
                                            <div className="offerslider-div-container-slider-content-heading">
                                                <p style={{ padding: '1rem 0' }}>
                                                    {product.name}
                                                </p>
                                            </div>
                                            <div className="offerslider-div-container-slider-content-seller">
                                                <p>
                                                    Mogo
                                                    {/* {ReactHtmlParser(product.short_description)} */}
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
                                                    {/* {offerSlider.like} */}
                                                </div>
                                            </div>
                                            <div className="offerslider-div-container-slider-content-price">
                                                <p className="offerslider-div-container-slider-content-price-old">
                                                    ₹{product.actual_price ? product.actual_price : 299}
                                                </p>
                                                <p className="offerslider-div-container-slider-content-price-new">
                                                    ₹{product.sale_price ? product.sale_price : 199}
                                                </p>
                                            </div>
                                        </div>
                                    </Carousel.Slide>
                                )
                            })
                        }
                        {/* {
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
                        } */}
                    </Carousel>
                </Container>
            </div>
        </div>
    )
}

export default OfferSlider