//import react packages
import React, { useState } from 'react';

//import mantine packages
import { Checkbox, Container, Input, Radio, Select, Text } from '@mantine/core'

//import icons
import arrowdown from '../../assets/preheader/arrow-down.webp'

//import Checkout css file
import './Checkout.css'

//import react router dom packages
import { Link } from 'react-router-dom';

const Checkout = () => {

    const countryArray = [
        { value: 'react', label: 'React' },
    ]

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <div className="checkout-div">
                <Container className='checkout-div-container' size={'82rem'}>
                    <div className="checkout-div-container-main">
                        <div className="checkout-div-container-main-checkout">
                            <div className="checkout-div-container-main-checkout-shipping">
                                <div className="checkout-div-container-main-checkout-shipping-heading">
                                    <h1>Checkout</h1>
                                </div>
                                <div className="checkout-div-container-main-checkout-shipping-content">
                                    <div className="checkout-div-container-main-checkout-shipping-guest">
                                        <p>You are checking out as a guest. Have an account? &nbsp;<span>Login</span></p>
                                    </div>
                                    <div className="checkout-div-container-main-checkout-shipping-information-head">
                                        <h1>1. Shipping Information</h1>
                                        <p>Shipping address</p>
                                    </div>
                                    <div className="checkout-div-container-main-checkout-shipping-information-form">
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-group">
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Input.Wrapper
                                                    label="First Name"
                                                >
                                                    <Input placeholder="" />
                                                </Input.Wrapper>
                                            </div>
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Input.Wrapper
                                                    label="Last Name"
                                                >
                                                    <Input placeholder="" />
                                                </Input.Wrapper>
                                            </div>
                                        </div>
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-group">
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Input.Wrapper
                                                    label="Email"
                                                >
                                                    <Input placeholder="" />
                                                </Input.Wrapper>
                                            </div>
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Input.Wrapper
                                                    label="Phone Number"
                                                >
                                                    <Input placeholder="" />
                                                </Input.Wrapper>
                                            </div>
                                        </div>
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-group-address">
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Input.Wrapper
                                                    label="Address"
                                                >
                                                    <Input placeholder="" />
                                                </Input.Wrapper>
                                            </div>
                                        </div>
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-group">
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Select
                                                    label="Country"
                                                    searchable
                                                    nothingFound="No options"
                                                    rightSection={<img src={arrowdown} width={15} alt='arrow down icon' />}
                                                    data={countryArray}
                                                />
                                            </div>
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Select
                                                    label="State"
                                                    searchable
                                                    nothingFound="No options"
                                                    rightSection={<img src={arrowdown} width={15} alt='arrow down icon' />}
                                                    data={countryArray}
                                                />
                                            </div>
                                        </div>
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-group">
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Input.Wrapper
                                                    label="City"
                                                >
                                                    <Input placeholder="" />
                                                </Input.Wrapper>
                                            </div>
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Input.Wrapper
                                                    label="Zip Code"
                                                >
                                                    <Input placeholder="" />
                                                </Input.Wrapper>
                                            </div>
                                        </div>
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-group-checkbox">
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Checkbox
                                                    label="Use same address for billing address"
                                                />
                                            </div>
                                        </div>
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-group-return-cart-continue-payment">
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                                <Text component={Link} to='/cart'>
                                                    <p className='checkout-div-container-main-checkout-shipping-information-form-group-return-cart'>{`< Return to cart`}</p>
                                                </Text>
                                            </div>
                                            <div className="checkout-div-container-main-checkout-shipping-information-form-input paymenmt-method">
                                                <button className='checkout-div-container-main-checkout-shipping-information-form-group-continue-payment'>Contine to Payment Method</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-div-container-main-checkout-payment-method-content">
                                    <div className="checkout-div-container-main-checkout-shipping-information-head">
                                        <h1>2. Payment Method</h1>
                                    </div>
                                    <div className="checkout-div-container-main-checkout-payment-method-form">
                                        <Radio
                                            label="Bank Transfer"
                                            description="Make your payment directly into our bank account."
                                            size="xs"
                                            checked={selectedOption === 'bank-transfer'}
                                            onChange={() => handleRadioChange('bank-transfer')}
                                        />
                                        <Radio
                                            label="Cash On Delivery"
                                            description="After Product Received Pay Amount"
                                            size="xs"
                                            checked={selectedOption === 'cash-on-delivery'}
                                            onChange={() => handleRadioChange('cash-on-delivery')}
                                        />
                                        <Radio
                                            label="By Online"
                                            description="Pay Amount Via Payment Gateway"
                                            size="xs"
                                            checked={selectedOption === 'by-online'}
                                            onChange={() => handleRadioChange('by-online')}
                                        />
                                    </div>
                                    <div className="checkout-div-container-main-checkout-shipping-information-form-input mt-15">
                                        <Checkbox
                                            label={
                                                <>
                                                    I have read and agree to the{' '}
                                                    <Link to="/terms-and-conditions" className='preheader-register-model-tearms-and-conditions-link'>Terms & Conditions</Link>
                                                </>
                                            }
                                        />
                                    </div>
                                    <div className="checkout-div-container-main-checkout-shipping-information-form-group-return-cart-continue-payment">
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                            <Text component={Link} to='/cart'>
                                                <p className='checkout-div-container-main-checkout-shipping-information-form-group-return-cart'>{`< Return to cart`}</p>
                                            </Text>
                                        </div>
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-input paymenmt-method">
                                            <button className='checkout-div-container-main-checkout-shipping-information-form-group-continue-payment'>Contine to Payment</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-div-container-main-checkout-payment-method-content">
                                    <div className="checkout-div-container-main-checkout-shipping-information-head">
                                        <h1>3. Payment</h1>
                                    </div>
                                    <div className="checkout-div-container-main-checkout-shipping-information-form-group-return-cart-continue-payment payment">
                                        <div className="checkout-div-container-main-checkout-shipping-information-form-input">
                                            <Text component={Link} to='/orderplaced'>
                                                <button className='checkout-div-container-main-checkout-shipping-information-form-group-continue-payment'>Place Order</button>
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-div-container-main-checkout-summary">
                                <div className="checkout-div-container-main-checkout-summary-heading">
                                    <h1>Order Summery (1)</h1>
                                </div>
                                <div className="checkout-div-container-main-checkout-summary-content">
                                    <div className="checkout-div-container-main-checkout-summary-content-order-summary-details">
                                        <div className="checkout-div-container-main-checkout-summary-content-order-summary-details-show-image">

                                        </div>
                                        <div className="checkout-div-container-main-checkout-summary-content-order-summary-details-show-product-details">
                                            <h1>Floral women sundress (Color: Dark, Size: S)</h1>
                                            <div className="cart-div-container-main-cart-products-content-vendor">
                                                <p>By <span>Mogo</span></p>
                                            </div>
                                            <div className="cart-div-container-main-cart-products-content-price mt-15">
                                                <div className="cart-div-container-main-cart-products-content-price-heading">
                                                    <p>Quantity:</p>
                                                </div>
                                                <div className="cart-div-container-main-cart-products-content-price-price">
                                                    <p>1</p>
                                                </div>
                                            </div>
                                            <div className="cart-div-container-main-cart-products-content-price">
                                                <div className="cart-div-container-main-cart-products-content-price-heading">
                                                    <p>Price:</p>
                                                </div>
                                                <div className="cart-div-container-main-cart-products-content-price-price">
                                                    <p><span>$</span>80.10</p>
                                                </div>
                                            </div>
                                            <div className="cart-div-container-main-cart-products-content-price">
                                                <div className="cart-div-container-main-cart-products-content-price-heading">
                                                    <p>VAT:</p>
                                                </div>
                                                <div className="cart-div-container-main-cart-products-content-price-price">
                                                    <p><span>$</span>80.10</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-div-container-main-checkout-summary-content-order-summary-details-show-product-total">
                                        <div className="cart-div-container-main-right-details">
                                            <p>Sub Total</p>
                                            <p><span>$</span>80.10</p>
                                        </div>
                                        <div className="cart-div-container-main-right-details">
                                            <p>VAT</p>
                                            <p><span>$</span>80.10</p>
                                        </div>
                                        <div className="cart-div-container-main-right-details">
                                            <p>Shipping</p>
                                            <p><span>$</span>80.10</p>
                                        </div>
                                        <div className="hrline"></div>
                                        <div className="cart-div-container-main-right-details">
                                            <p>Total</p>
                                            <p><span>$</span>80.10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div >
    )
}

export default Checkout