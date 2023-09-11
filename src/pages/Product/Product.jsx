//import react packages
import React from 'react'

//import mantine packages
import { Container, Rating } from '@mantine/core'

//import react-router-dom packages

//import breadcrumb from components->breadcrumb
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import { categoryArray } from './ProductArray';

//import Product css
import './Product.css'

//import icons
import eye from '../../assets/product/eye.webp'
import heart from '../../assets/product/heart.webp'
import comment from '../../assets/product/comment.webp'


// array for breadcrumb

const Product = ({ category, subcategory, heading }) => {
    const convertedString = category.replace(/_/g, ' ');
    const convertedString1 = subcategory.replace(/_/g, ' ');
    const convertedString2 = heading.replace(/_/g, ' ');

    const categoryItems = [];

    categoryArray
        .flatMap(category => category.value)
        .filter(item => convertedString.includes(item.value))
        .forEach(item => {
            categoryItems.push({ value: item.value, link: item.link });
        });

    const categoryvaluestemp = categoryItems.map(item => item.value);
    const categorylinkstemp = categoryItems.map(item => item.link);

    const categoryvaluesvalue = categoryvaluestemp[0]
    const categoryvalueslink = categorylinkstemp[0]

    const result = categoryArray.filter(data => data.category.includes(categoryvaluesvalue))

    const temp = result[0];

    const result1 = temp.value.filter(data => data.value === convertedString1);

    const subcategoryvalue = result1[0].value
    const subcategorylink = result1[0].link
    const productheading = convertedString2

    const items = [
        { title: 'Home', href: '/' },
        { title: 'Products', href: '/products' },
        { title: categoryvaluesvalue, href: categoryvalueslink },
        { title: subcategoryvalue, href: subcategorylink },
        { title: productheading, href: '/' },
    ];



    return (
        <div>
            <div className="product-div">
                <Container className='product-div-container' size={'82rem'}>
                    <div className="product-div-container-breadcrumb">
                        <Breadcrumb value={items} />
                    </div>
                    <div className="product-div-container-main">
                        <div className="product-div-container-main-product-display">
                            <div className="product-div-container-main-product-display-image">
                                <div className="product-div-container-main-product-display-image-container">
                                    <div className="product-div-container-main-product-display-image-container-images">
                                        <div className="product-div-container-main-product-display-image-container-images-div">

                                        </div>
                                        <div className="product-div-container-main-product-display-image-container-images-div">

                                        </div>
                                        <div className="product-div-container-main-product-display-image-container-images-div">

                                        </div>
                                    </div>
                                    <div className="product-div-container-main-product-display-image-container-mainimage">

                                    </div>
                                </div>
                            </div>
                            <div className="product-div-container-main-product-display-content">
                                <div className="product-div-container-main-product-display-content-heading">
                                    <h1>dfewf</h1>
                                </div>
                                <div className="product-div-container-main-product-display-content-shoper">
                                    <div className="product-div-container-main-product-display-content-shoper-by-rating">
                                        <p>By </p>
                                        <div className="product-div-container-main-product-display-content-shoper-by-rating-rating">
                                            <Rating value={5} readOnly />
                                            <p>{'(1)'}</p>
                                        </div>
                                    </div>
                                    <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment">
                                        <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-icon-div">
                                            <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-eye">
                                                <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-eye-icon">
                                                    <img src={eye} alt="eye icon" />
                                                </div>
                                                <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-eye-number">
                                                    <p>5</p>
                                                </div>
                                            </div>
                                            <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-eye">
                                                <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-eye-icon">
                                                    <img src={heart} alt="heart icon" />
                                                </div>
                                                <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-eye-number">
                                                    <p>5</p>
                                                </div>
                                            </div>
                                            <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-eye">
                                                <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-eye-icon">
                                                    <img src={comment} alt="comment icon" />
                                                </div>
                                                <div className="product-div-container-main-product-display-content-shoper-eye-heart-comment-eye-number">
                                                    <p>5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Product