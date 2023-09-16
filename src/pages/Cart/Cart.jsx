//import react packages
import React, { useEffect, useState } from 'react'

//import mantine packages
import { Container, Input, Text } from '@mantine/core'

//import Cart css
import './Cart.css'

//import icons
import close from '../../assets/cart/close.webp'
import arrowleft from '../../assets/cart/arrowleft.webp'

//import images
import amex from '../../assets/footer/copyright/amex.webp'
import discover from '../../assets/footer/copyright/discover.webp'
import maestro from '../../assets/footer/copyright/maestro.webp'
import mastercard from '../../assets/footer/copyright/mastercard.webp'
import visa from '../../assets/footer/copyright/visa.webp'

//import react router dom packages
import { Link } from 'react-router-dom'

const Cart = () => {

    // Quantity Value 
    const [quantityValue, setQuantityValue] = useState(1)

    // useEffect 
    useEffect(() => {
        if (quantityValue <= 0) {
            setQuantityValue(1)
        }
        // setTotalPrice(quantityValue * 999)
    }, [quantityValue])

    return (
        <div>
            <div className="cart-div">
                <Container className='cart-div-container' size={'82rem'}>
                    <div className="cart-div-container-main">
                        <div className="cart-div-container-main-left">
                            <div className="cart-div-container-main-left-main">
                                <div className="cart-div-container-main-heading">
                                    <h1>My Cart (1)</h1>
                                </div>
                                <div className="cart-div-container-main-cart-products">
                                    <div className="cart-div-container-main-cart-products-image">
                                        <div className="cart-div-container-main-cart-products-image-img">

                                        </div>
                                    </div>
                                    <div className="cart-div-container-main-cart-products-content">
                                        <div className="cart-div-container-main-cart-products-content-heading">
                                            <p>Floral women sundress (Color: Dark, Size: S)</p>
                                        </div>
                                        <div className="cart-div-container-main-cart-products-content-vendor">
                                            <p>By <span>Mogo</span></p>
                                        </div>
                                        <div className="cart-div-container-main-cart-products-content-price mt-15">
                                            <div className="cart-div-container-main-cart-products-content-price-heading">
                                                <p>Unit Price:</p>
                                            </div>
                                            <div className="cart-div-container-main-cart-products-content-price-price">
                                                <p><span>$</span>80.10</p>
                                            </div>
                                        </div>
                                        <div className="cart-div-container-main-cart-products-content-price">
                                            <div className="cart-div-container-main-cart-products-content-price-heading">
                                                <p>Total:</p>
                                            </div>
                                            <div className="cart-div-container-main-cart-products-content-price-price">
                                                <p><span>$</span>80.10</p>
                                            </div>
                                        </div>
                                        <div className="cart-div-container-main-cart-products-content-price">
                                            <div className="cart-div-container-main-cart-products-content-price-heading">
                                                <p>VAT (15%):</p>
                                            </div>
                                            <div className="cart-div-container-main-cart-products-content-price-price">
                                                <p><span>$</span>80.10</p>
                                            </div>
                                        </div>
                                        <div className="cart-div-container-main-cart-products-content-button">
                                            <button><img src={close} width={10} alt="close icon" />Remove</button>
                                        </div>
                                    </div>
                                    <div className="cart-div-container-main-cart-products-count">
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
                                    </div>
                                </div>
                            </div>
                            <div className="cart-div-container-main-left-keep-shoping mt-15">
                                <Text component={Link} to={'/'}>
                                    <button><img src={arrowleft} width={14} alt="arrow left icon" />Keep Shopping</button>
                                </Text>
                            </div>
                        </div>
                        <div className="cart-div-container-main-right">
                            <div className="cart-div-container-main-right-details">
                                <p>Sub Total</p>
                                <p><span>$</span>80.10</p>
                            </div>
                            <div className="cart-div-container-main-right-details">
                                <p>VAT</p>
                                <p><span>$</span>80.10</p>
                            </div>
                            <div className="hrline"></div>
                            <div className="cart-div-container-main-right-details">
                                <p>Total</p>
                                <p><span>$</span>80.10</p>
                            </div>
                            <div className="cart-div-container-main-right-checkout-button mb-15">
                                <Text component={Link} to='/checkout'>
                                    <button>Continue to Checkout</button>
                                </Text>
                            </div>
                            <div className="cart-div-container-main-right-checkout-accepted-payments">
                                <img src={visa} width={42} height={26} alt="" />
                                <img src={mastercard} width={42} height={26} alt="" />
                                <img src={maestro} width={42} height={26} alt="" />
                                <img src={discover} width={42} height={26} alt="" />
                                <img src={amex} width={42} height={26} alt="" />
                            </div>
                            <div className="hrline"></div>
                            <div className="cart-div-container-main-right-discount-coupen-form">
                                <label htmlFor="Discount Coupen">Discount Coupen</label>
                                <div className="cart-div-container-main-right-discount-coupen-form-form">
                                    <div className="cart-div-container-main-right-discount-coupen-form-input">
                                        <Input placeholder="Coupon Code" />
                                    </div>
                                    <div className="cart-div-container-main-right-discount-coupen-form-button">
                                        <button>Apply</button>
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

export default Cart