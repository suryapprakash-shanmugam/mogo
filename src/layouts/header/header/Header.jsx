//import react pakages
import React, { useState } from 'react'

//import mantine packages
import { Button, Checkbox, Container, Input, Modal, Paper, PasswordInput, Select, Text } from '@mantine/core'

//import react router dom packages
import { Link } from 'react-router-dom'

//import Header css
import './Header.css'

//import images
import logo from '../../../assets/Mogo-Logo.png'
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import search from '../../../assets/header/search.webp'
import cart from '../../../assets/header/cart.webp'
import wishlist from '../../../assets/header/wishlist.webp'

//select category array in search
const searchCategoryArray = [
    { value: 'all', label: 'All Categories' },
    { value: 'tablelinen', label: 'Table Linen' },
    { value: 'kitchenlinen', label: 'Kitchen Linen' },
    { value: 'bathlinen', label: 'Bath Linen' },
    { value: 'bedlinen', label: 'Bed Linen' },
    { value: 'livinglinen', label: 'Living Linen' },
    { value: 'babylinen', label: 'Baby Linen' },
]

const Header = () => {

    //usestate for open register modal
    const [registermodalOpen, setRegisterModalOpen] = useState(false)
    //usestate for open login modal
    const [loginmodalOpen, setLoginModalOpen] = useState(false)

    //usestate for open login modal
    const [forgotmodalOpen, setForgotModalOpen] = useState(false)

    return (
        <div>
            <div className="header-div">
                <Container size={'82rem'} className='header-div-container'>
                    <Text className="header-div-container-logo" component={Link} to='/'>
                        <img src={logo} alt="logo" />
                    </Text>
                    <div className="header-div-container-search">
                        <Paper className="header-div-container-search-paper">
                            <Select
                                rightSection={<img src={arrowdown} alt="arrowdown" width='10px' />}
                                className="header-div-container-search-category-select"
                                defaultValue={searchCategoryArray[0].value}
                                data={searchCategoryArray}
                            />
                            <Input
                                className='header-div-container-search-input'
                                placeholder="Enter text"
                            />
                            <Button className='header-div-container-search-button'><img src={search} width="20px" alt="search-icon" /></Button>
                        </Paper>
                    </div>
                    <div className="header-div-container-cart-wishlist-sell-now">
                        <Text component={Link} to='/cart'>
                            <div className="header-div-container-cart-wishlist-sell-now-cart">
                                <div className="header-div-container-cart-wishlist-sell-now-cart-image">
                                    <img src={cart} alt="carticon" />
                                </div>
                                <div className="header-div-container-cart-wishlist-sell-now-cart-content">
                                    <p>Cart</p>
                                </div>
                            </div>
                        </Text>
                        <Text component={Link} to='/wishlist'>
                            <div className="header-div-container-cart-wishlist-sell-now-wishlist">
                                <div className="header-div-container-cart-wishlist-sell-now-wishlist-image">
                                    <img src={wishlist} alt="heart-icon" />
                                </div>
                                <div className="header-div-container-cart-wishlist-sell-now-wishlist-content">
                                    <p>Wishlist</p>
                                </div>
                            </div>
                        </Text>
                        <div className="header-div-container-cart-wishlist-sell-now-sellnow">
                            <button onClick={() => setLoginModalOpen(true)}>Sell Now</button>
                        </div>
                    </div>
                </Container>

                {/* Register model starts */}
                <Modal
                    size="md"
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
                            <Input
                                placeholder="First Name"
                            />
                            <Input
                                placeholder="Last Name"
                            />
                            <Input
                                placeholder="Email Address"
                            />
                            <PasswordInput
                                placeholder="Password"
                                className='preheader-register-model-password-show-hide-btn'
                            />
                            <PasswordInput
                                placeholder="Confirm Password"
                                className='preheader-register-model-password-show-hide-btn'
                            />
                            <Checkbox
                                className='preheader-register-model-checkbox'
                                label={
                                    <>
                                        I have read and agree to the{' '}
                                        <Link onClick={() => setRegisterModalOpen(false)} to="/terms-and-conditions" className='preheader-register-model-tearms-and-conditions-link'>Terms & Conditions</Link>
                                    </>
                                }
                            />
                            <button>Register</button>
                            <p className='preheader-register-model-goto-login'>Have an account? <span onClick={() => { setRegisterModalOpen(false); setLoginModalOpen(true); }}>Login</span></p>
                        </div>
                    </div>
                </Modal>
                {/*Register modal end */}
                {/* Login model starts */}
                <Modal
                    size="md"
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
                            <Input
                                placeholder="Email Address"
                            />
                            <PasswordInput
                                placeholder="Password"
                                className='preheader-login-model-password-show-hide-btn'
                            />
                            <p className='preheader-login-model-goto-forgot-password' onClick={() => { setForgotModalOpen(true); setLoginModalOpen(false); }}>Forgot Password?</p>
                            <button>Login</button>
                            <p className='preheader-login-model-goto-login'>Don't have an account? <span onClick={() => { setRegisterModalOpen(true); setLoginModalOpen(false); }}>Register</span></p>
                        </div>
                    </div>
                </Modal>
                {/*Login modal end */}
                {/* Forgot model starts */}
                <Modal
                    size="md"
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
        </div>
    )
}

export default Header