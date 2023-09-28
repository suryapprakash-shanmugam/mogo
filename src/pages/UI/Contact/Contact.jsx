//import react packages
import React, { useState } from 'react'

//import mantine packages
import { Checkbox, Container, Input, Textarea } from '@mantine/core'


//import Contact css
import './Contact.css'

//import breadcrumb component from component folder
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';

//import react router dom packages
import { Link } from 'react-router-dom';

//import icons

import email from '../../../assets/product/email.webp'
import phone from '../../../assets/product/phone.webp'
import map from '../../../assets/preheader/map.webp'
import facebook_fill from '../../../assets/footer/follow-as/facebook_fill.webp'
import instagram_fill from '../../../assets/footer/follow-as/instagram_fill.webp'
import twitter_fill from '../../../assets/footer/follow-as/twitter_fill.webp'
import whatsapp_fill from '../../../assets/footer/follow-as/whatsapp_fill.webp'

import facebook from '../../../assets/footer/follow-as/facebook.webp'
import instagram from '../../../assets/footer/follow-as/instagram.webp'
import twitter from '../../../assets/footer/follow-as/twitter.webp'
import whatsapp from '../../../assets/footer/follow-as/whatsapp.webp'

const Contact = () => {

    // array for breadcrumb
    const items = [
        { title: 'Home', href: '/' },
        { title: 'Contact', href: '/contact' },
    ];

    const [showImageFacebook, setShowImageFacebook] = useState(false)
    const [showImageInsta, setShowImageInsta] = useState(false)
    const [showImageTwitter, setShowImageTwitter] = useState(false)
    const [showImagewhatsapp, setShowImagewhatsapp] = useState(false)

    return (
        <div>
            <div className="contact-div">
                <Container className='contact-div-container' size={'82rem'}>
                    <div className="category-div-container-breadcrumb">
                        <Breadcrumb value={items} />
                    </div>
                    <div className="contact-div-container-heading">
                        <h1>Contact</h1>
                    </div>
                    <div className="contact-div-container-content">
                        <p>We are here to help you with any questions, concerns, or feedback you may have about our platform. Whether you are a buyer or a seller, our team is dedicated to providing you with the best possible support. If you need assistance with an order, have questions about our platform, or simply want to provide feedback, please don't hesitate to contact us. You can reach us through our contact form, located on this page. Simply fill out the form with your details and a brief message, and we will get back to you as soon as possible.</p>
                        <p>Alternatively, you can also reach us through our social media channels or email. Our team is available to assist you with any questions or concerns you may have.</p>
                        <div className="contact-div-container-content-main">
                            <div className="contact-div-container-content-main-form">
                                <div className="contact-div-container-content-main-form-individual">
                                    <Input.Wrapper>
                                        <Input placeholder="Name" />
                                    </Input.Wrapper>
                                </div>
                                <div className="contact-div-container-content-main-form-individual">
                                    <Input.Wrapper>
                                        <Input placeholder="Email Address" />
                                    </Input.Wrapper>
                                </div>
                                <div className="contact-div-container-content-main-form-individual">
                                    <Textarea
                                        placeholder="Message"
                                        minRows={5}
                                    />
                                </div>
                                <div className="contact-div-container-content-main-form-individual">
                                    <Checkbox
                                        className='preheader-register-model-checkbox'
                                        label={
                                            <>
                                                I have read and agree to the{' '}
                                                <Link to="/terms-and-conditions" className='preheader-register-model-tearms-and-conditions-link'>Terms & Conditions</Link>
                                            </>
                                        }
                                    />
                                </div>
                                <div className="contact-div-container-content-main-form-individual">
                                    <button className='contact-div-container-content-main-form-button'>Submit</button>
                                </div>
                            </div>
                            <div className="contact-div-container-content-main-socialmedia">
                                <div className="contact-div-container-content-main-socialmedia-contact">
                                    <div className="contact-div-container-content-main-socialmedia-contact-icon">
                                        <img src={phone} width={15} alt="phone icon" />
                                    </div>
                                    <div className="contact-div-container-content-main-socialmedia-contact-content">
                                        <p>(541) 754-30103</p>
                                    </div>
                                </div>
                                <div className="contact-div-container-content-main-socialmedia-contact">
                                    <div className="contact-div-container-content-main-socialmedia-contact-icon">
                                        <img src={email} width={15} alt="mail icon" />
                                    </div>
                                    <div className="contact-div-container-content-main-socialmedia-contact-content">
                                        <p>edward_test@domain.com</p>
                                    </div>
                                </div>
                                <div className="contact-div-container-content-main-socialmedia-contact">
                                    <div className="contact-div-container-content-main-socialmedia-contact-icon">
                                        <img src={map} width={15} alt="map icon" />
                                    </div>
                                    <div className="contact-div-container-content-main-socialmedia-contact-content">
                                        <p>3111 Camino Del Rio N Suite 400 San Diego</p>
                                    </div>
                                </div>
                                <div className="contact-div-container-content-main-socialmedia-socialmedia">
                                    <div className="contact-div-container-content-main-socialmedia-socialmedia-contect" onMouseEnter={() => setShowImageFacebook(true)} onMouseLeave={() => setShowImageFacebook(false)}>
                                        {
                                            showImageFacebook ? <img src={facebook} width={20} alt="facebook icon" /> : <img src={facebook_fill} width={20} alt="facebook icon" />
                                        }
                                    </div>
                                    <div className="contact-div-container-content-main-socialmedia-socialmedia-contect" onMouseEnter={() => setShowImageInsta(true)} onMouseLeave={() => setShowImageInsta(false)}>
                                        {
                                            showImageInsta ? <img src={instagram} width={20} alt="instagram icon" /> : <img src={instagram_fill} width={20} alt="instagram icon" />
                                        }
                                    </div>
                                    <div className="contact-div-container-content-main-socialmedia-socialmedia-contect" onMouseEnter={() => setShowImageTwitter(true)} onMouseLeave={() => setShowImageTwitter(false)}>
                                        {
                                            showImageTwitter ? <img src={twitter} width={20} alt="twitter icon" /> : <img src={twitter_fill} width={20} alt="twitter icon" />
                                        }
                                    </div>
                                    <div className="contact-div-container-content-main-socialmedia-socialmedia-contect" onMouseEnter={() => setShowImagewhatsapp(true)} onMouseLeave={() => setShowImagewhatsapp(false)}>
                                        {
                                            showImagewhatsapp ? <img src={whatsapp} width={20} alt="whatsapp icon" /> : <img src={whatsapp_fill} width={20} alt="whatsapp icon" />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="contact-div-location">
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
                                src="https://maps.google.com/maps?width=600&amp;height=1200&amp;hl=en&amp;q=karur&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact