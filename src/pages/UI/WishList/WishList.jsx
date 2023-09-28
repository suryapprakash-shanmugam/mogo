//import react packages
import React from 'react'

//import mantine packages
import { Container } from '@mantine/core'

//import WishList css
import './WishList.css'

//import Breadcrumb from components folder
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';


import HomeProductsList from '../../../components/UI/HomeProductsList/HomeProductsList';

const WishList = () => {

    // array for breadcrumb
    const items = [
        { title: 'Home', href: '/' },
        { title: 'Wishlist', href: '/wishlist' },
    ];

    //send heading and sub heading to Featured products
    const wishlistheader = 'Wishlist';
    const wishlistsubheader = '';


    return (
        <div>
            <div className="wishlist-div">
                <Container className='wishlist-div-container' size={'82rem'}>
                    <div className="category-div-container-breadcrumb">
                        <Breadcrumb value={items} />
                    </div>
                    <HomeProductsList header={wishlistheader} subheader={wishlistsubheader} />
                </Container>
            </div>
        </div>
    )
}

export default WishList