//import react packages
import React from 'react'

//import mantine packages
import { Container } from '@mantine/core'

//import SellOnMogo css
import './SellOnMogo.css'

//import breadcrumb from components folder
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';

const SellOnMogo = () => {

    // array for breadcrumb
    const items = [
        { title: 'Home', href: '/' },
        { title: 'Sell On Mogo', href: '/sellonmogo' },
    ];

    return (
        <div>
            <div className="sellonmogo-div">
                <Container className='sellonmogo-div-container' size={'82rem'}>
                    <div className="category-div-container-breadcrumb">
                        <Breadcrumb value={items} />
                    </div>
                    <div className="sellonmogo-div-container-heading">
                        <h1>Sell on Mogo</h1>
                    </div>
                    <div className="sellonmogo-div-container-content">
                        <p>At Mogo, we make it easy and hassle-free for you to sell your products to customers all over the world. Whether you are a professional seller or just looking to make some extra cash, Mogo provides you with the perfect platform to showcase your products and reach a wider audience.</p>
                        <p>Our platform is designed to provide you with the tools and support you need to create a successful online business. With a user-friendly interface and powerful features, you can easily list your products, manage your inventory, and process orders.</p>
                        <p>At Mogo, we understand that selling online can be a daunting task. That's why we offer a range of resources to help you succeed. From seller guides and tutorials to customer support and seller forums, we are committed to helping you grow your business and achieve your goals.</p>
                        <p>With Mogo, you can sell a wide range of products, including fashion, beauty, home and garden, electronics, and more. Our platform is designed to provide you with maximum exposure and reach, so you can connect with customers from all over the world.</p>
                        <p>Join the Mogo community today and start selling your products to a global audience. With our powerful platform and dedicated support team, the sky is the limit for your online business.</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default SellOnMogo