//import react packages
import React from 'react'

//import mantine pakages
import { Button, Container, Flex, div, Input, Text, Title, Group, Space } from '@mantine/core'

//import Footer css
import './Footer.css'

//import images
import logo from '../../../assets/Mogo-Logo.png'
import facebook from '../../../assets/footer/follow-as/facebook.webp'
import instagram from '../../../assets/footer/follow-as/instagram.webp'
import twitter from '../../../assets/footer/follow-as/twitter.webp'
import whatsapp from '../../../assets/footer/follow-as/whatsapp.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="footer-div">
                <div
                    className='footer-container'
                >
                    <div className='footer-content'>
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <ul className='logo-color-2'>
                            <li>
                                Our platform is designed to provide you with the tools and support you need to create a successful online business.
                            </li>
                        </ul>
                    </div>
                    <div className='footer-content'>
                        <Title order={2} className='color-white'>
                            Quick Links
                        </Title>
                        <ul className='logo-color-2'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Blogs</li>
                            <li>Contact Us</li>
                            <li>Help Center</li>
                        </ul>
                    </div>
                    <div className='footer-content'>
                        <Title order={2} className='color-white'>
                            Information
                        </Title>
                        <ul className='logo-color-2'>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Return & Refund Policy</li>
                            <li>Shipping Policy</li>
                            <li>Cancellation Policy</li>
                        </ul>
                    </div>
                    <div className='footer-content'>
                        <Title order={2} className='color-white'>
                            Follow As
                        </Title>
                        <ul className='logo-color-2'>
                            <li>
                                <Flex className='follow-as-icon'>
                                    <img src={facebook} width={18} alt="" />
                                    <p>@mogo_ecomm</p>
                                </Flex>
                            </li>
                            <li>
                                <Flex className='follow-as-icon'>
                                    <img src={instagram} width={18} alt="" />
                                    <p>@mogo_ecommernce</p>
                                </Flex>
                            </li>
                        </ul>
                        <div style={{ paddingTop: '2rem' }}>
                            <Title className='color-white' order={4}>
                                Newsletter
                            </Title>
                            <div className="footer-div-container-main-follow-as-newsletter-newsletter-form">
                                <Input
                                    placeholder="Enter your email"
                                />
                                <Button variant="light">Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Container size={'82rem'} className='footer-div-container'>
                    <div className="footer-div-container-main">
                        <div className="footer-div-container-main-logo-description-address-contact">
                            <div className="footer-div-container-main-logo-description-address-contact-logo">
                                <div className="footer-div-container-main-logo-description-address-contact-logo-image">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <div className="footer-div-container-main-logo-description-address-contact-description">
                                <p>Our platform is designed to provide you with the tools and support you need to create a successful online business.</p>
                            </div>
                            <div className="footer-div-container-main-logo-description-address-contact-address">
                                <p>Camino Del Rio N Suite 400 San Diego</p>
                            </div>
                            <div className="footer-div-container-main-logo-description-address-contact-contact">
                                <p>+1-202-555-0190</p>
                            </div>
                        </div>
                        <div className="footer-div-container-main-quick-links">
                            <div className="footer-div-container-main-quick-links-heading">
                                <h2>Quick Links</h2>
                            </div>
                            <div className="footer-div-container-main-quick-links-ul">
                                <ul>
                                    <li><Text className='footer-link' component={Link} to={'/'}>Home</Text></li>
                                    <li>Blogs</li>
                                    <li><Text className='footer-link' component={Link} to={'/contact'}>Contact Us</Text></li>
                                    <li>Help Center</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-div-container-main-information">
                            <div className="footer-div-container-main-information-heading">
                                <h2>Information</h2>
                            </div>
                            <div className="footer-div-container-main-information-ul">
                                <ul>
                                    <li><Text className='footer-link' component={Link} to={'/terms-and-conditions'}>Terms & Conditions</Text></li>
                                    <li>About Us</Text></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-div-container-main-follow-as-newsletter">
                            <div className="footer-div-container-main-follow-as-newsletter-follow-as">
                                <div className="footer-div-container-main-follow-as-newsletter-follow-as-heading">
                                    <h2>Follow As</h2>
                                </div>
                                <div className="footer-div-container-main-follow-as-newsletter-follow-as-icon">
                                    <div className='follow-as-icon'>
                                        <img src={facebook} width={18} alt="" />
                                        <p>@mogo_ecomm</p>
                                    </div>
                                    <div className='follow-as-icon'>
                                        <img src={instagram} width={18} alt="" />
                                        <p>@mogo_ecommernce</p>
                                    </div>
                                    <div className='follow-as-icon'>
                                        <img src={twitter} width={18} alt="" />
                                        <p>@mogo_ecommernce</p>
                                    </div>
                                    <div className='follow-as-icon'>
                                        <img src={whatsapp} width={18} alt="" />
                                        <p>@mogo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-div-container-main-follow-as-newsletter-newsletter">
                                <div className="footer-div-container-main-follow-as-newsletter-newsletter-heading">
                                    <h2>Newsletter</h2>
                                </div>
                                <div className="footer-div-container-main-follow-as-newsletter-newsletter-form">
                                    <Input
                                        placeholder="Enter your email"
                                    />
                                    <Button variant="light">Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container> */}
            </div>
        </div>
    )
}

export default Footer