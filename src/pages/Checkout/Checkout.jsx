//import react packages
import React from 'react';

//import mantine packages
import { Container, Input, Select } from '@mantine/core'

//import icons
import arrowdown from '../../assets/preheader/arrow-down.webp'

//import Checkout css file
import './Checkout.css'

const Checkout = () => {

    const countryArray = [
        { value: 'react', label: 'React' },
    ]

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
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-div-container-main-checkout-summary">
                                <div className="checkout-div-container-main-checkout-summary-heading">
                                    <h1>Order Summery (1)</h1>
                                </div>
                                <div className="checkout-div-container-main-checkout-summary-content">

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