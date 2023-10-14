//import react pakages
import React, { useState } from 'react'

//import mantine packages
import { Button, Checkbox, Container, Flex, Image, Input, Modal, Paper, PasswordInput, Select } from '@mantine/core'

//import react router dom packages
import { Link } from 'react-router-dom'

//import Header css
import './Header.css'

//import images
import logo from '../../../assets/BrandLogo/brnad_logo.png'
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import search from '../../../assets/header/search.webp'
import cart from '../../../assets/header/cart.webp'
import wishlist from '../../../assets/header/wishlist.webp'
import { Heart, ShoppingCart } from 'tabler-icons-react'
import { useMediaQuery } from '@mantine/hooks'

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

    const header1060MediaQuery = useMediaQuery('(max-width:1061px)')
    const header786MediaQuery = useMediaQuery('(max-width:787px)')
    const header500MediaQuery = useMediaQuery('(max-width:501px)')
    return (
        <div>
            <div className="header-div">
                <Flex pt={'0.3rem'} pb={'1rem'} pl={'2rem'} pr={'2rem'} align={'center'} justify={'space-around'}>
                    <Flex align={'center'} gap={header1060MediaQuery ? '0.5rem' : '2rem'}>
                        <Image component={Link} to='/' width={header1060MediaQuery ? '130px' : '160px'} src={logo} alt="logo" />
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
                    </Flex>
                    <Flex gap={header786MediaQuery ? '0.3rem' : '1.5rem'} className='search-engine-right' align={'center'}>
                        <Flex component={Link} to="/cart" className="navbar-link" gap={3} align={'center'}>
                            <ShoppingCart
                                strokeWidth={1}
                                size={header786MediaQuery ? '1.5rem' : '2rem'}
                            />
                            <p>
                                Cart
                            </p>
                        </Flex>
                        <Flex component={Link} to="/wishlist" className="navbar-link" gap={3} align={'center'}>
                            <Heart
                                strokeWidth={1}
                                size={header786MediaQuery ? '1.5rem' : '2rem'}
                            />
                            <p>
                                Wishlist
                            </p>
                        </Flex>
                        <Button
                            className='header-div-container-cart-wishlist-sell-now-sellnow-button'
                            onClick={() => setLoginModalOpen(true)}>
                            Sell Now
                        </Button>

                    </Flex>
                </Flex>
                <Modal
                    zIndex={12121}
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
                            <button
                            // onClick={handleRegister}
                            >Register</button>
                            <p className='preheader-register-model-goto-login'>Have an account? <span onClick={() => { setRegisterModalOpen(false); setLoginModalOpen(true); }}>Login</span></p>
                        </div>
                    </div>
                </Modal>
                {/*Register modal end */}
                {/* Login model starts */}
                <Modal
                    zIndex={12121212}
                    size="md"
                    opened={loginmodalOpen}
                    onClose={() => setLoginModalOpen(false)}
                    title=""
                    centered
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
                    zIndex={12121}
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