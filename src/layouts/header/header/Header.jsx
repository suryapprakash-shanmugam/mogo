//import react pakages
import { Button, Container, Input, Paper, Select, Text } from '@mantine/core'
import React from 'react'

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
                        <div className="header-div-container-cart-wishlist-sell-now-cart">
                            <div className="header-div-container-cart-wishlist-sell-now-cart-image">
                                <img src={cart} alt="carticon" />
                            </div>
                            <div className="header-div-container-cart-wishlist-sell-now-cart-content">
                                <p>Cart</p>
                            </div>
                        </div>
                        <div className="header-div-container-cart-wishlist-sell-now-wishlist">
                            <div className="header-div-container-cart-wishlist-sell-now-wishlist-image">
                                <img src={wishlist} alt="heart-icon" />
                            </div>
                            <div className="header-div-container-cart-wishlist-sell-now-wishlist-content">
                                <p>Wishlist</p>
                            </div>
                        </div>
                        <div className="header-div-container-cart-wishlist-sell-now-sellnow">
                            <button>Sell Now</button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header