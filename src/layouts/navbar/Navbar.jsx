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
                        <ul className='product-dropdown-hover navbar-div-container-ul2'>
                            <li>Table Linen</li>
                            <li>Kitchen Linen</li>
                            <li>Bath Linen</li>
                            <li>Bed Linen</li>
                            <li>Living Linen</li>
                            <li>Baby Linen</li>
                            <div className="navbar-div-container-ul-dropdown">
                                <div className="navbar-div-container-ul-dropdown-content">
                                    <div className="navbar-div-container-ul-dropdown-content-table">
                                        <p className="navbar-div-container-ul-dropdown-content-table-head">Table Linen</p>
                                        <ul className='navbar-div-container-ul-dropdown-content-table-categories'>
                                            <li>Table Cloth</li>
                                            <li>Place Mat</li>
                                            <li>Table Runner</li>
                                            <li>Table Napkins</li>
                                            <li>Napkins Rings</li>
                                            <li>Coasters</li>
                                            <li>Bread Baskets</li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-kitchen">
                                        <p className="navbar-div-container-ul-dropdown-content-kitchen-head">Kitchen Linen</p>
                                        <ul className='navbar-div-container-ul-dropdown-content-kitchen-categories'>
                                            <li>Aprons</li>
                                            <li>Gloves</li>
                                            <li>Pot Holders</li>
                                            <li>kitchen Towels</li>
                                            <li>Dish Cloths</li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-bath">
                                        <p className="navbar-div-container-ul-dropdown-content-bath-head">Bath Linen</p>
                                        <ul className='navbar-div-container-ul-dropdown-content-bath-categories'>
                                            <li>Bath Towels</li>
                                            <li>Hand Towels</li>
                                            <li>Face Towels</li>
                                            <li>Bath Mats</li>
                                            <li>Bathrobes</li>
                                            <li>Shower Curtains</li>
                                            <li>Towel Racks</li>
                                            <li>Towel Rings</li>
                                            <li>Towel Hooks</li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-bed">
                                        <p className="navbar-div-container-ul-dropdown-content-bed-head">Bed Linen</p>
                                        <ul className='navbar-div-container-ul-dropdown-content-bed-categories'>
                                            <li>Bed Sheets</li>
                                            <li>Pillowcases</li>
                                            <li>Duvet Covers</li>
                                            <li>Bedspreads</li>
                                            <li>Blankets and Throws</li>
                                            <li>Cushions</li>
                                            <li>Thermal Blankets</li>
                                            <li>Quilts</li>
                                            <li>Bolsters</li>
                                            <li>Shams</li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-living">
                                        <p className="navbar-div-container-ul-dropdown-content-living-head">Living Linen</p>
                                        <ul className='navbar-div-container-ul-dropdown-content-living-categories'>
                                            <li>Curtains</li>
                                            <li>Throws</li>
                                            <li>Mattress</li>
                                            <li>Window Panel</li>
                                            <li>Cushion</li>
                                            <li>Chair Pads</li>
                                            <li>Box Cushions</li>
                                            <li>Hammocks</li>
                                            <li>Chair Covers</li>
                                            <li>Door Stoppers</li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-baby">
                                        <p className="navbar-div-container-ul-dropdown-content-baby-head">Baby Linen</p>
                                        <div className="navbar-div-container-ul-dropdown-content-baby-category-div">
                                            <ul className='navbar-div-container-ul-dropdown-content-baby-categories'>
                                                <li>Hoodies</li>
                                                <li>Blanket</li>
                                                <li>Booties</li>
                                                <li>Cap</li>
                                                <li>Head Band</li>
                                                <li>Wrap</li>
                                                <li>Wipes</li>
                                                <li>Gloves</li>
                                                <li>Bathrobe</li>
                                                <li>Playsuit</li>
                                            </ul>
                                            <ul className='navbar-div-container-ul-dropdown-content-baby-categories'>
                                                <li>Sleeping Bag</li>
                                                <li>Changing Pad Cover</li>
                                                <li>Duvet & Pillow</li>
                                                <li>Bib</li>
                                                <li>Soft Toys</li>
                                                <li>Feeding Bottle Cover</li>
                                                <li>Fitted Sheet</li>
                                                <li>Apron</li>
                                                <li>Bumper</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </Container>
            </div>
        </div>
    )
}

export default Navbar