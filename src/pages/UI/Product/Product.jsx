//import react packages
import React, { useEffect, useState } from 'react'

import config from "../../../config/server/Servers"

import { useParams } from 'react-router-dom';

//import mantine packages
import { Container, Input, Modal, Rating, ScrollArea, Select, Tabs, Text, Textarea } from '@mantine/core'

//import react-router-dom packages

//import breadcrumb from components->breadcrumb
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';

import { categoryArray } from './ProductArray';

//import Product css
import './Product.css'


import ReactHtmlParser from 'react-html-parser';

//import icons
import eye from '../../../assets/product/eye.webp'
import heart from '../../../assets/product/heart.webp'
import comment from '../../../assets/product/comment.webp'
import email from '../../../assets/product/email.webp'
import phone from '../../../assets/product/phone.webp'
import send from '../../../assets/product/send.webp'
import cart_fill from '../../../assets/header/cart_fill.webp'
import wishlist from '../../../assets/header/wishlist.webp'
import wishlist_fill from '../../../assets/header/wishlist_fill.webp'
import facebook_fill from '../../../assets/footer/follow-as/facebook_fill.webp'
import instagram_fill from '../../../assets/footer/follow-as/instagram_fill.webp'
import twitter_fill from '../../../assets/footer/follow-as/twitter_fill.webp'
import whatsapp_fill from '../../../assets/footer/follow-as/whatsapp_fill.webp'
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import OfferSlider from '../../../components/UI/OfferSlider/OfferSlider';
import angleleft from '../../../assets/pagination/angleleft.webp'
import angleright from '../../../assets/pagination/angleright.webp'

//import images
import image1 from '../../../assets/home/grid-category/baby_linen.webp'
import image2 from '../../../assets/home/grid-category/bath_linen.webp'
import image3 from '../../../assets/home/grid-category/bed_linen.webp'
import image4 from '../../../assets/home/grid-category/kitchen_linen.webp'
import image5 from '../../../assets/home/grid-category/living_linen.webp'
import image6 from '../../../assets/home/grid-category/table_linen.webp'
import image7 from '../../../assets/home/season/season1.webp'
import image8 from '../../../assets/home/season/season2.webp'

//import react router dom packages
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { setProductList } from '../../../StateHandler/Slice/Products/ProductSlice';
import { getProductByID, listAllProduct } from '../../../config/quries/Products/ProductQuries';



const Product = ({ category, subcategory, heading }) => {
    window.scrollTo(0, 0)

    // Path Id 
    const location = useParams()

    const [individualProduct, setIndividialProduct] = useState('')
    const convertedString = category.replace(/_/g, ' ');
    const convertedString1 = subcategory.replace(/_/g, ' ');
    const convertedString2 = heading.replace(/_/g, ' ');

    const categoryItems = [];
    //array for product
    const productArray = [
        {
            color: '1',
            image: [
                {
                    image: image1,
                },
                {
                    image: image2,
                }
            ]
        }
    ]

    // array for breadcrumb

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

    const [questionModalOpen, setQuestionModalOpen] = useState(false)
    const [questionSubject, setQuestionSubject] = useState(convertedString2)

    const handleInputChange = (e) => {
        setQuestionSubject(e.target.value);
    };

    // Quantity Value 
    const [quantityValue, setQuantityValue] = useState(1)

    // useEffect 
    useEffect(() => {
        if (quantityValue <= 0) {
            setQuantityValue(1)
        }
    }, [quantityValue])

    const [isWishlist, setIsWishlist] = useState(true);

    const toggleWishlist = () => {
        setIsWishlist(!isWishlist);
    };

    //send heading Clothing
    const moreheader = 'Related';
    const moreheader2 = ' Products';
    const likeheader = 'You May Also';
    const likeheader2 = 'Like';

    const [selectedColor, setSelectedColor] = useState('1');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleColorButtonClick = (color) => {
        setSelectedColor(color);
        setCurrentImageIndex(0);
    };

    const handleImageClick = (imageSrc, imageIndex) => {
        setCurrentImageIndex(imageIndex);
    };

    // Function to handle next image
    const handleNextImage = () => {
        if (selectedColor) {
            const selectedProduct = productArray.find(
                (product) => product.color === selectedColor
            );
            if (selectedProduct && selectedProduct.image.length > 0) {
                setCurrentImageIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % selectedProduct.image.length;
                    return newIndex;
                });
            }
        }
    };

    // Function to handle previous image
    const handlePreviousImage = () => {
        if (selectedColor) {
            const selectedProduct = productArray.find(
                (product) => product.color === selectedColor
            );
            if (selectedProduct && selectedProduct.image.length > 0) {
                setCurrentImageIndex((prevIndex) => {
                    const newIndex =
                        (prevIndex - 1 + selectedProduct.image.length) %
                        selectedProduct.image.length;
                    return newIndex;
                });
            }
        }
    };
    // Function to get the currently displayed image
    const getCurrentImage = () => {
        if (selectedColor) {
            const selectedProduct = productArray.find(
                (product) => product.color === selectedColor
            );
            if (
                selectedProduct &&
                selectedProduct.image.length > 0 &&
                currentImageIndex >= 0 &&
                currentImageIndex < selectedProduct.image.length
            ) {
                return selectedProduct.image[currentImageIndex].image;
            }
        }
        return null;
    };

    // ProductList
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



    useQuery(
        ['individualProduct', location.heading],
        getProductByID,
        {
            onSuccess: (res) => {
                setIndividialProduct(res?.data?.data?.result)
            }
        }
    )

    const items = [
        { title: 'Home', href: '/' },
        { title: 'Products', href: '/products' },
        { title: categoryvaluesvalue, href: categoryvalueslink },
        { title: subcategoryvalue, href: subcategorylink },
        { title: individualProduct?.name, href: '/' },
    ];

    const [productImage, setProductImage] = useState()


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
                                        {selectedColor && (
                                            <div className="product-div-container-main-product-display-image-container-images-div">
                                                {/* {productArray
                                                    .find((product) => product.color === selectedColor)
                                                    .image.map((img, index) => (
                                                        <img
                                                            key={index}
                                                            src={img.image}
                                                            alt={`product ${index}`}
                                                            onClick={() => handleImageClick(img.image, index)}
                                                        />
                                                    ))} */}

                                                {
                                                    individualProduct?.product_gallery_image?.map((value, index) => (
                                                        <img
                                                            key={index}
                                                            // src={img.image}
                                                            src={`${config.baseUrlApi}/assets/productImages/${value}`}
                                                            alt={`product ${index}`}
                                                            // onClick={() => handleImageClick(value, index)}
                                                            onClick={() => setProductImage(value)}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        )}
                                    </div>
                                    {selectedColor && (
                                        <div className="product-div-container-main-product-display-image-container-mainimage">
                                            <img
                                                src={
                                                    productImage ?
                                                        `${config.baseUrlApi}/assets/productImages/${productImage}`
                                                        :
                                                        `${config.baseUrlApi}/assets/productImages/${individualProduct.product_image}
                                                    `
                                                }
                                                alt={`First product of Selected Color`}
                                            />
                                            <div className="product-div-container-main-product-display-image-container-prev-next">
                                                <button onClick={handlePreviousImage}><img src={angleleft} alt="angleleft icon" /></button>
                                                <button onClick={handleNextImage}><img src={angleright} alt="angleright icon" /></button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="product-div-container-main-product-display-content">
                                <div className="product-div-container-main-product-display-content-heading">
                                    <h1>{individualProduct?.name}</h1>
                                </div>
                                <div className="product-div-container-main-product-display-content-shoper">
                                    <div className="product-div-container-main-product-display-content-shoper-by-rating">
                                        <p>By <span>
                                            {individualProduct?.admin_id ?
                                                'Admin' : individualProduct?.vendor_id ? 'Vendor' : ''}
                                        </span></p>
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
                                <div className="product-div-container-main-product-display-content-price-askquestion">
                                    <div className="product-div-container-main-product-display-content-price-askquestion-price">
                                        <div className="product-div-container-main-product-display-content-price-askquestion-price-price">

                                            <p className='old-price'>
                                                {individualProduct?.actual_price
                                                    ?
                                                    '₹' + individualProduct?.actual_price :
                                                    '₹ 299'
                                                }
                                            </p>
                                            <p className='current-price'>
                                                {individualProduct?.sale_price
                                                    ?
                                                    '₹' + individualProduct?.sale_price :
                                                    '₹ 199'
                                                }
                                            </p>
                                        </div>
                                        <div className="product-div-container-main-product-display-content-price-askquestion-price-discount">
                                            <p>34%</p>
                                        </div>
                                    </div>
                                    <div className="product-div-container-main-product-display-content-price-askquestion-askquestion">
                                        <button onClick={() => setQuestionModalOpen(true)}>
                                            <div className="product-div-container-main-product-display-content-price-askquestion-askquestion-image">
                                                <img src={email} width={12} alt="email icon" />
                                            </div>
                                            <div className="product-div-container-main-product-display-content-price-askquestion-askquestion-content">Ask Question</div>
                                        </button>
                                    </div>
                                </div>
                                <div className="product-div-container-main-product-display-content-status-sku">
                                    <div className="product-div-container-main-product-display-content-status">
                                        <div className="product-div-container-main-product-display-content-status-heading">
                                            <p>Status</p>
                                        </div>
                                        <div className="product-div-container-main-product-display-content-status-status">
                                            <p>In Stock</p>
                                        </div>
                                    </div>
                                    <div className="product-div-container-main-product-display-content-sku">
                                        <div className="product-div-container-main-product-display-content-sku-heading">
                                            <p>SKU</p>
                                        </div>
                                        <div className="product-div-container-main-product-display-content-sku-sku">
                                            <p>
                                                {
                                                    individualProduct?.SKU
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-div-container-main-product-display-content-variation-size">
                                    {/* <div className="product-div-container-main-product-display-content-variation">
                                        <div className="product-div-container-main-product-display-content-variation-heading">
                                            <p>Color</p>
                                        </div>
                                        <div className="product-div-container-main-product-display-content-variation-color">
                                            <div className="product-div-container-main-product-display-content-variation-color-individual">
                                                {productArray.map((product) => (
                                                    <button
                                                        key={product.color}
                                                        onClick={() => handleColorButtonClick(product.color)}
                                                    >
                                                        {product.color}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="product-div-container-main-product-display-content-size">
                                        <div className="product-div-container-main-product-display-content-size-heading">
                                            <p>Size</p>
                                        </div>
                                        <div className="product-div-container-main-product-display-content-size-color">
                                            <div className="product-div-container-main-product-display-content-size-color-individual">
                                                <button></button>
                                                <button></button>
                                                <button></button>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="product-div-container-main-product-display-content-counter-cart-wishlist">
                                    <div className='product-div-container-main-product-display-content-counter-cart-wishlist-counter'>
                                        <button
                                            disabled={quantityValue === 1 ? true : false}
                                            onClick={() => setQuantityValue(quantityValue - 1)}
                                        >
                                            -
                                        </button>
                                        <input
                                            onChange={(e) => setQuantityValue(parseInt(e.target.value))}
                                            className='product-div-container-main-product-display-content-counter-cart-wishlist-counter-input'
                                            value={quantityValue}
                                        />

                                        <button
                                            onClick={() => setQuantityValue(quantityValue + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="product-div-container-main-product-display-content-counter-cart-wishlist-cart">
                                        <Text component={Link} to={'/cart'}>
                                            <button>
                                                <img src={cart_fill} width={14} alt="cart icon" />
                                                Add to Cart
                                            </button>
                                        </Text>
                                    </div>
                                    <div className="product-div-container-main-product-display-content-counter-cart-wishlist-wishlist">
                                        <button onClick={toggleWishlist}>
                                            {isWishlist ? (
                                                <>
                                                    <img src={wishlist} width={26} alt="wishlist icon" /> Add to Wishlist
                                                </>
                                            ) : (
                                                <>
                                                    <img src={wishlist_fill} width={25} alt="wishlist color icon" /> Remove from Wishlist
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="product-div-container-main-product-display-content-share">
                                    <div className="product-div-container-main-product-display-content-share-heading">
                                        <p>Share:</p>
                                    </div>
                                    <div className="product-div-container-main-product-display-content-share-icons">
                                        <div className="product-div-container-main-product-display-content-share-icon">
                                            <img src={facebook_fill} alt="facebook" />
                                        </div>
                                        <div className="product-div-container-main-product-display-content-share-icon">
                                            <img src={twitter_fill} alt="twitter" />
                                        </div>
                                        <div className="product-div-container-main-product-display-content-share-icon">
                                            <img src={instagram_fill} alt="instagram" />
                                        </div>
                                        <div className="product-div-container-main-product-display-content-share-icon">
                                            <img src={whatsapp_fill} alt="whatsapp" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-div-container-main-product-details">
                            <Tabs variant="outline" radius="xs" defaultValue="description">
                                <Tabs.List>
                                    <Tabs.Tab value="description">Description</Tabs.Tab>
                                    <Tabs.Tab value="additional">Additional Information</Tabs.Tab>
                                    <Tabs.Tab value="shipping">Shipping & Location</Tabs.Tab>
                                    <Tabs.Tab value="reviews">Reviews (1)</Tabs.Tab>
                                    <Tabs.Tab value="comments">Comments (0)</Tabs.Tab>
                                </Tabs.List>

                                <Tabs.Panel value="description" pt="xs">
                                    <div className="product-div-container-main-product-details-tab-description">
                                        <h2>
                                            {individualProduct.name}
                                        </h2>

                                        {ReactHtmlParser(individualProduct.description)}
                                        {/* <p>Many scholars believe, however, that the first crude garments and ornaments worn by humans were designed not for utilitarian but for religious or ritual purposes. Other basic functions of dress include identifying the wearer and making the wearer appear more attractive.</p>
                                        <p>Although it is clear why such uses of dress developed and remain significant, it can often be difficult to determine how they are achieved. Some garments thought of as beautiful offer no protection whatsoever and may in fact even injure the wearer. Items that definitely identify one wearer can lose their meaning in another time and place.</p>
                                        <p>There are no simple answers to such questions, of course, and any one reason is influenced by a multitude of others, but certainly one of the most prevalent theories is that fashion evolved in conjunction with capitalism and the development of modern socioeconomic classes. Thus, in relatively static societies with limited movement between classes, as in many parts of Asia until modern times or in Europe before the Middle Ages, styles did not undergo a pattern of change. In contrast, when lower classes have the ability to copy upper classes, the upper classes quickly instigate fashion changes that demonstrate their authority and high position. During the 20th century, for example, improved communication and manufacturing technology enabled new styles to trickle down from the elite to the masses at ever faster speeds, with the result that fashion change accelerated.</p> */}
                                    </div>
                                </Tabs.Panel>

                                <Tabs.Panel value="additional" pt="xs">
                                    <div className="product-div-container-main-product-details-tab-additional">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Brand</td>
                                                    <td>Mango</td>
                                                </tr>
                                                <tr>
                                                    <td>Fabric</td>
                                                    <td>Cotton, Silk</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Tabs.Panel>

                                <Tabs.Panel value="shipping" pt="xs">
                                    <div className="product-div-container-main-product-details-tab-shipping">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Shipping Cost</td>
                                                    <td>
                                                        <div className="product-div-container-main-product-details-tab-shipping-select">
                                                            <Select
                                                                label="Select Your Location"
                                                                placeholder="Pick one"
                                                                searchable
                                                                className='product-div-container-main-product-details-tab-shipping-select-country'
                                                                nothingFound="No Countries Found"
                                                                data={['React', 'Angular', 'Svelte', 'Vue']}
                                                                rightSection={<img src={arrowdown} width={15} alt="arrowdown icon" />}
                                                            />
                                                            <Select
                                                                label=""
                                                                className='product-div-container-main-product-details-tab-shipping-select-state'
                                                                placeholder="Pick one"
                                                                searchable
                                                                nothingFound="No Countries Found"
                                                                data={['React', 'Angular', 'Svelte', 'Vue']}
                                                                rightSection={<img src={arrowdown} width={15} alt="arrowdown icon" />}
                                                            />
                                                        </div>
                                                        <div className="product-div-container-main-product-details-tab-shipping-details">
                                                            <div className="product-div-container-main-product-details-tab-shipping-details-heding">
                                                                <p>Free Shipping</p>
                                                            </div>
                                                            <div className="product-div-container-main-product-details-tab-shipping-details-content">
                                                                <p>(Minimum order amount: ₹100)</p>
                                                            </div>
                                                        </div>
                                                        <div className="product-div-container-main-product-details-tab-shipping-details">
                                                            <div className="product-div-container-main-product-details-tab-shipping-details-heding">
                                                                <p>Flat Rate</p>
                                                            </div>
                                                            <div className="product-div-container-main-product-details-tab-shipping-details-content">
                                                                <p>: ₹15</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Delivery Time</td>
                                                    <td>Ready to ship in 2-3 Business Days</td>
                                                </tr>
                                                <tr>
                                                    <td>Shop Location</td>
                                                    <td>Florida, United States</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="product-div-container-main-product-details-tab-shipping-map">
                                            <div className="mapouter">
                                                <div className="gmap_canvas">
                                                    <iframe
                                                        className="gmap_iframe"
                                                        width="100%"
                                                        frameBorder="0"
                                                        scrolling="no"
                                                        marginHeight="0"
                                                        marginWidth="0"
                                                        title='vendor map'
                                                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=karur&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tabs.Panel>
                                <Tabs.Panel value="reviews" pt="xs">
                                    <div className="product-div-container-main-product-details-tab-reviews">
                                        <div className="product-div-container-main-product-details-tab-reviews-heding">
                                            <Rating value={5} readOnly />
                                            Reviews (1)
                                        </div>
                                        <div className="product-div-container-main-product-details-tab-reviews-content">
                                            <div className="product-div-container-main-product-details-tab-reviews-content-reviewer">
                                                <div className="product-div-container-main-product-details-tab-reviews-content-reviewer-image"></div>
                                                <div className="product-div-container-main-product-details-tab-reviews-content-reviewer-content">
                                                    <Rating value={5} readOnly />
                                                    <p className='product-div-container-main-product-details-tab-reviews-content-reviewer-content-heading'>Peter Jone</p>
                                                    <p className='product-div-container-main-product-details-tab-reviews-content-reviewer-content-review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolorem laudantium voluptas dignissimos, rerum quasi tempora quia culpa, quibusdam vel, est ut sit fugit! Accusantium, aperiam. At vel nemo corrupti.</p>
                                                    <p className='product-div-container-main-product-details-tab-reviews-content-reviewer-content-time'>6 month ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tabs.Panel>
                                <Tabs.Panel value="comments" pt="xs">
                                    <div className="product-div-container-main-product-details-tab-comments">
                                        <div className="product-div-container-main-product-details-tab-comments-main">
                                            <div className="product-div-container-main-product-details-tab-comments-main-show-comment">
                                                <p className="product-div-container-main-product-details-tab-comments-main-show-comment-heading">Comments (1)</p>
                                                <ScrollArea h={250} offsetScrollbars scrollbarSize={6} scrollHideDelay={500}>
                                                    <div className="product-div-container-main-product-details-tab-comments-main-show-comment-individual">
                                                        <div className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-image"></div>
                                                        <div className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-content">
                                                            <p className='product-div-container-main-product-details-tab-comments-main-show-comment-individual-content-user'>Admin</p>
                                                            <p className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-content-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, inventore corporis neque beatae minima ipsam voluptatum laboriosam, aliquam atque vero mollitia accusantium doloribus at repellendus! Facilis, cum. Minus, sed sit?</p>
                                                            <p className="product-div-container-main-product-details-tab-comments-main-show-comment-individual-content-time">1 hour Ago</p>
                                                        </div>
                                                    </div>
                                                </ScrollArea>
                                            </div>
                                            <div className="product-div-container-main-product-details-tab-comments-main-comment-form">
                                                <label htmlFor="product-div-container-main-product-details-tab-comments-main-comment-form-textarea">Add a comment</label>
                                                <Textarea
                                                    placeholder="Comment"
                                                    autosize
                                                    minRows={6}
                                                    className='product-div-container-main-product-details-tab-comments-main-comment-form-textarea'
                                                />
                                                <button className='product-div-container-main-product-details-tab-comments-main-comment-form-button'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </Tabs.Panel>
                            </Tabs>
                        </div>
                    </div>
                    <OfferSlider header={moreheader} header2={moreheader2} />
                    <OfferSlider header={likeheader} header2={likeheader2} />
                </Container>
                <Modal
                    zIndex={12121}
                    size="lg"
                    opened={questionModalOpen}
                    onClose={() => setQuestionModalOpen(false)}
                    className='product-div-ask-question-modal'
                >
                    <div className="product-div-ask-question-modal-content">
                        <div className="product-div-ask-question-modal-content-heading">
                            <h1>Send Message</h1>
                        </div>
                        <div className="product-div-ask-question-modal-content-main">
                            <div className="product-div-ask-question-modal-content-shoper-details">
                                <div className="product-div-ask-question-modal-content-shoper-details-image"></div>
                                <div className="product-div-ask-question-modal-content-shoper-details-details">
                                    <div className="product-div-ask-question-modal-content-shoper-details-details-name">
                                        <h1>Mogo</h1>
                                    </div>
                                    <div className="product-div-ask-question-modal-content-shoper-details-details-call">
                                        <div className="product-div-ask-question-modal-content-shoper-details-details-call-icon">
                                            <img src={phone} alt="phone icon" />
                                        </div>
                                        <div className="product-div-ask-question-modal-content-shoper-details-details-call-content">
                                            <p>+91 9876543210</p>
                                        </div>
                                    </div>
                                    <div className="product-div-ask-question-modal-content-shoper-details-details-call">
                                        <div className="product-div-ask-question-modal-content-shoper-details-details-call-icon">
                                            <img src={email} alt="email icon" />
                                        </div>
                                        <div className="product-div-ask-question-modal-content-shoper-details-details-call-content">
                                            <p>info@mogo.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-div-ask-question-modal-content-form">
                                <Input.Wrapper
                                    id="input-subject"
                                    label="Subject"
                                >
                                    <Input id="input-subject" placeholder="Subject" value={questionSubject}
                                        onChange={handleInputChange} />
                                </Input.Wrapper>
                                <Textarea
                                    placeholder="Write a message..."
                                    label="Message"
                                    radius="xs"
                                    minRows={3}
                                />
                                <div className="product-div-ask-question-modal-content-form-button">
                                    <div className="product-div-ask-question-modal-content-form-button-content">
                                        <button>
                                            <img src={send} width={14} alt="send icon" />
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Product