//import react packages
import { Container } from '@mantine/core'
import React from 'react'

//import Navbar css
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar-div">
                <Container size={'82rem'} className='navbar-div-container'>
                    <ul className='navbar-div-container-ul'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Table Linen</li>
                        <li>Kitchen Linen</li>
                        <li>Bath Linen</li>
                        <li>Bed Linen</li>
                        <li>Living Linen</li>
                        <li>Baby Linen</li>
                        <li>Contact Us</li>
                    </ul>
                    {/* <div className="navbar-div-container-ul-dropdown"></div> */}
                </Container>
            </div>
        </div>
    )
}

export default Navbar