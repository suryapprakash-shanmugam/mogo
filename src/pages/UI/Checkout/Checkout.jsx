//import react packages
import React, { useState } from 'react';

//import mantine packages
import { Button, Checkbox, Container, Input, Modal, PasswordInput, Radio, Select, Text } from '@mantine/core'

//import icons
import arrowdown from '../../../assets/preheader/arrow-down.webp'

import image1 from '../../../assets/home/grid-category/baby_linen.webp'

//import Checkout css file
import './Checkout.css'

//import react router dom packages
import { Link } from 'react-router-dom';

import { handleLoginControl, handleRegisterControl } from '../../../controller/loginAuth/userLogin/userLoginAuth'
import { findUserByid } from '../../../config/quries/users/usersQuery'
import { setUserData } from '../../../StateHandler/Slice/UserSlice/UserSliceData'

const Checkout = () => {

    // Register User Values 
    const [userRegisterValue, setUserRegisterValue] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: "",
        conform_password: ''
    })
    const [userLogin, setuserLogin] = useState({
        email: '',
        password: ''
    })

    // Validate Login User
    const [userLoginValidation, setUserLoginValidation] = useState({
        email: 0,
        password: 0
    })

    // Validation For Register Values
    const [validateUserRegisterValue, setValidateUserRegisterValue] = useState({
        first_name: 0,
        last_name: 0,
        email: 0,
        password: 0,
        conform_password: 0,
        check_box: ''
    })

    const handleLogin = () => {
        handleLoginControl(
          userLogin,
          setuserLogin,
          userLoginValidation,
          setUserLoginValidation,
          setLoginModalOpen
        )
      }


    // Handle Event 
    const handleRegisterClick = () => {
        handleRegisterControl(
            userRegisterValue,
            setUserRegisterValue,
            validateUserRegisterValue,
            setValidateUserRegisterValue,
            setRegisterModalOpen
        )
    }

    const countryArray = [
        { value: 'react', label: 'React' },
    ]

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (option) => {
        setSelectedOption(option);
    };

    const [registermodalOpen, setRegisterModalOpen] = useState(false)
    //usestate for open login modal
    const [loginmodalOpen, setLoginModalOpen] = useState(false)

    //usestate for open login modal
    const [forgotmodalOpen, setForgotModalOpen] = useState(false)

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
                                        <p>You are checking out as a guest. Have an account? &nbsp;<span onClick={() => setLoginModalOpen(true)}>Login</span></p>
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
                                            <img src={image1} />
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
            {/* Register model starts */}
            <Modal
                zIndex={1234569}
                size="md"
                centered
                opened={registermodalOpen}
                onClose={() => setRegisterModalOpen(false)}
                title=""
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='preheader-register-modal'
            >
                <div className="preheader-register-modal-header">
                    <h1>Register</h1>
                </div>
                <div className="preheader-register-modal-body">
                    <div className="preheader-register-modal-body-content">
                        <Input.Wrapper label="First Name"
                            error={`${validateUserRegisterValue.first_name === 1 ? 'Please Enter First Name' : ''
                                }`}
                        >
                            <Input
                                value={userRegisterValue.first_name}
                                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, first_name: e.target.value })}
                                placeholder="First Name"
                            />
                        </Input.Wrapper>
                        <Input.Wrapper
                            label='Last Name'
                            error={`${validateUserRegisterValue.last_name === 1 ? 'Please Enter Last Name' : ''
                                }`}
                        >
                            <Input
                                value={userRegisterValue.last_name}
                                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, last_name: e.target.value })}
                                placeholder="Last Name"
                            />
                        </Input.Wrapper>
                        <Input.Wrapper
                            label='Email '
                            error={`${validateUserRegisterValue.email === 1 ? 'Please Enter Email' :
                                validateUserRegisterValue.email === 2 ? 'Please Enter Valid Email Address' :
                                    ''
                                }`}
                        >
                            <Input
                                value={userRegisterValue.email}
                                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, email: e.target.value })}
                                placeholder="Email Address"
                            />
                        </Input.Wrapper>
                        <Input.Wrapper
                            label='Password '
                            error={`${validateUserRegisterValue.password === 1 ? 'Please Enter Password' : ''
                                }`}
                        >
                            <PasswordInput
                                value={userRegisterValue.password}
                                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, password: e.target.value })}
                                placeholder="Password"
                                className='preheader-register-model-password-show-hide-btn'
                            />
                        </Input.Wrapper>
                        <Input.Wrapper
                            label='Conform Password '
                            error={`${validateUserRegisterValue.conform_password === 1 ? 'Please Enter Conform Password' :
                                validateUserRegisterValue.conform_password === 2 ? `Conform password doesn't match with password ` :
                                    ''
                                }`}
                        >
                            <PasswordInput
                                value={userRegisterValue.conform_password}
                                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, conform_password: e.target.value })}
                                placeholder="Confirm Password"
                                className='preheader-register-model-password-show-hide-btn'
                            />
                        </Input.Wrapper>
                        <Checkbox
                            onChange={(e) => setValidateUserRegisterValue({ ...validateUserRegisterValue, check_box: e.currentTarget.checked })}
                            className='preheader-register-model-checkbox'
                            label={
                                <>
                                    I have read and agree to the{' '}
                                    <Link onClick={() => setRegisterModalOpen(false)} to="/terms-and-conditions" className='preheader-register-model-tearms-and-conditions-link'>Terms & Conditions</Link>
                                </>
                            }
                        />
                        <Button
                            disabled={!validateUserRegisterValue.check_box}
                            onClick={handleRegisterClick}
                        >
                            Register
                        </Button>
                        <p className='preheader-register-model-goto-login'>Have an account? <span onClick={() => { setRegisterModalOpen(false); setLoginModalOpen(true); }}>Login</span></p>
                    </div>
                </div>
            </Modal>
            {/*Register modal end */}
            {/* Login model starts */}
            <Modal
                zIndex={1234569}
                size="md"
                centered
                opened={loginmodalOpen}
                onClose={() => setLoginModalOpen(false)}
                title=""
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='preheader-login-modal'
            >
                <div className="preheader-login-modal-header">
                    <h1>Login</h1>
                </div>
                <div className="preheader-login-modal-body">
                    <div className="preheader-login-modal-body-content">
                        <Input.Wrapper
                            label="Email Id"
                            error={`${userLoginValidation.email === 1 ?
                                'Please Enter Email id' :
                                userLoginValidation.email === 2 ?
                                    'Please Enter Valid Email id' :
                                    userLoginValidation.email === 3 ?
                                        'Email not found' : ''
                                }`}
                        >
                            <Input
                                placeholder="Email Address"
                                value={userLogin.email}
                                onChange={(e) => setuserLogin({ ...userLogin, email: e.target.value })}
                            />
                        </Input.Wrapper>
                        <Input.Wrapper
                            label="Password"
                            error={`${userLoginValidation.password === 1 ?
                                'Please Enter Password' :
                                userLoginValidation.password === 2 ?
                                    'Incorrect Password' : ''
                                }`}
                        >
                            <PasswordInput
                                placeholder="Password"
                                className='preheader-login-model-password-show-hide-btn'
                                value={userLogin.password}
                                onChange={(e) => setuserLogin({ ...userLogin, password: e.target.value })}
                            />
                        </Input.Wrapper>
                        <p className='preheader-login-model-goto-forgot-password' onClick={() => { setForgotModalOpen(true); setLoginModalOpen(false); }}>Forgot Password?</p>
                        <button
                            onClick={handleLogin}
                        >
                            Login</button>
                        <p className='preheader-login-model-goto-login'>Don't have an account? <span onClick={() => { setRegisterModalOpen(true); setLoginModalOpen(false); }}>Register</span></p>
                    </div>
                </div>
            </Modal>
            {/*Login modal end */}
            {/* Forgot model starts */}
            <Modal
                zIndex={12121}
                size="md"
                centered
                opened={forgotmodalOpen}
                onClose={() => setForgotModalOpen(false)}
                title=""
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='preheader-login-modal'
            >
                <div className="preheader-login-modal-header">
                    <h1>Reset Password</h1>
                </div>
                <div className="preheader-login-modal-body">
                    <div className="preheader-login-modal-body-content">
                        <p className='preheader-forgot-model-sub-heading'>Enter your email address</p>
                        <Input
                            placeholder="Email Address"
                        />
                        <Input
                            placeholder="OTP In Email"
                        />
                        <button>Submit</button>
                    </div>
                </div>
            </Modal>
            {/*Forgot modal end */}
        </div>
    )
}

export default Checkout