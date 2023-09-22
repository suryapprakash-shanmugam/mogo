//import react packages
import { Container } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

//import Navbar css
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar-div">
                <Container size={'82rem'} className='navbar-div-container'>
                    <ul className='navbar-div-container-ul'>
                        {/* <li><Link to='/' className='navbar-link'>Home</Link></li> */}
                        <ul className='product-dropdown-hover navbar-div-container-ul2'>
                            <li>Home Linen</li>
                            <li>Bed Linen</li>
                            <li>Kitchen Linen</li>
                            <li>Table Linen</li>
                            <li>Bath Linen</li>
                            <li>Baby Linen</li>
                            <div className="navbar-div-container-ul-dropdown">
                                <div className="navbar-div-container-ul-dropdown-content">
                                    <div className="navbar-div-container-ul-dropdown-content-table">
                                        <Link to='/category/tablelinen' className='navbar-link'>
                                            <p className="navbar-div-container-ul-dropdown-content-table-head">Table Linen</p>
                                        </Link>
                                        <ul className='navbar-div-container-ul-dropdown-content-table-categories'>
                                            <li><Link className='navbar-link' to='/tablelinen/cloth'>Table Cloth</Link></li>
                                            <li><Link className='navbar-link' to='/tablelinen/placemat'>Place Mat</Link></li>
                                            <li><Link className='navbar-link' to='/tablelinen/runner'>Table Runner</Link></li>
                                            <li><Link className='navbar-link' to='/tablelinen/napkins'>Table Napkins</Link></li>
                                            <li><Link className='navbar-link' to='/tablelinen/napkinsrings'>Napkins Rings</Link></li>
                                            <li><Link className='navbar-link' to='/tablelinen/coasters'>Coasters</Link></li>
                                            <li><Link className='navbar-link' to='/tablelinen/breadbaskets'>Bread Baskets</Link></li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-kitchen">
                                        <Link to='/category/kitchenlinen' className='navbar-link'>
                                            <p className="navbar-div-container-ul-dropdown-content-kitchen-head">Kitchen Linen</p>
                                        </Link>
                                        <ul className='navbar-div-container-ul-dropdown-content-kitchen-categories'>
                                            <li><Link className='navbar-link' to={'/kitchenlinen/aprons'}>Aprons</Link></li>
                                            <li><Link className='navbar-link' to={'/kitchenlinen/gloves'}>Gloves</Link></li>
                                            <li><Link className='navbar-link' to={'/kitchenlinen/potholders'}>Pot Holders</Link></li>
                                            <li><Link className='navbar-link' to={'/kitchenlinen/towels'}>kitchen Towels</Link></li>
                                            <li><Link className='navbar-link' to={'/kitchenlinen/dishcloths'}>Dish Cloths</Link></li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-bath">
                                        <Link to='/category/bathlinen' className='navbar-link'>
                                            <p className="navbar-div-container-ul-dropdown-content-bath-head">Bath Linen</p>
                                        </Link>
                                        <ul className='navbar-div-container-ul-dropdown-content-bath-categories'>
                                            <li><Link className='navbar-link' to={'/bathlinen/towels'}>Bath Towels</Link></li>
                                            <li><Link className='navbar-link' to={'/bathlinen/handtowels'}>Hand Towels</Link></li>
                                            <li><Link className='navbar-link' to={'/bathlinen/facetowels'}>Face Towels</Link></li>
                                            <li><Link className='navbar-link' to={'/bathlinen/mats'}>Bath Mats</Link></li>
                                            <li><Link className='navbar-link' to={'/bathlinen/robes'}>Bathrobes</Link></li>
                                            <li><Link className='navbar-link' to={'/bathlinen/curtains'}>Shower Curtains</Link></li>
                                            <li><Link className='navbar-link' to={'/bathlinen/towelracks'}>Towel Racks</Link></li>
                                            <li><Link className='navbar-link' to={'/bathlinen/towelrings'}>Towel Rings</Link></li>
                                            <li><Link className='navbar-link' to={'/bathlinen/towelhooks'}>Towel Hooks</Link></li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-bed">
                                        <Link to='/category/bedlinen' className='navbar-link'>
                                            <p className="navbar-div-container-ul-dropdown-content-bed-head">Bed Linen</p>
                                        </Link>
                                        <ul className='navbar-div-container-ul-dropdown-content-bed-categories'>
                                            <li><Link className='navbar-link' to={'/bedlinen/bedsheets'}>Bed Sheets</Link></li>
                                            <li><Link className='navbar-link' to={'/bedlinen/pillowcases'}>Pillowcases</Link></li>
                                            <li><Link className='navbar-link' to={'/bedlinen/duvetcovers'}>Duvet Covers</Link></li>
                                            <li><Link className='navbar-link' to={'/bedlinen/bedspreads'}>Bedspreads</Link></li>
                                            <li><Link className='navbar-link' to={'/bedlinen/blankets_throws'}>Blankets and Throws</Link></li>
                                            <li><Link className='navbar-link' to={'/bedlinen/cushions'}>Cushions</Link></li>
                                            <li><Link className='navbar-link' to={'/bedlinen/thermalblankets'}>Thermal Blankets</Link></li>
                                            <li><Link className='navbar-link' to={'/bedlinen/quilts'}>Quilts</Link></li>
                                            <li><Link className='navbar-link' to={'/bedlinen/bolsters'}>Bolsters</Link></li>
                                            <li><Link className='navbar-link' to={'/bedlinen/shams'}>Shams</Link></li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-living">
                                        <Link to='/category/livinglinen' className='navbar-link'>
                                            <p className="navbar-div-container-ul-dropdown-content-living-head">Living Linen</p>
                                        </Link>
                                        <ul className='navbar-div-container-ul-dropdown-content-living-categories'>
                                            <li><Link className='navbar-link' to={'/livinglinen/curtains'}>Curtains</Link></li>
                                            <li><Link className='navbar-link' to={'/livinglinen/throws'}>Throws</Link></li>
                                            <li><Link className='navbar-link' to={'/livinglinen/mattress'}>Mattress</Link></li>
                                            <li><Link className='navbar-link' to={'/livinglinen/windowpanel'}>Window Panel</Link></li>
                                            <li><Link className='navbar-link' to={'/livinglinen/cushion'}>Cushion</Link></li>
                                            <li><Link className='navbar-link' to={'/livinglinen/chairpads'}>Chair Pads</Link></li>
                                            <li><Link className='navbar-link' to={'/livinglinen/boxcushions'}>Box Cushions</Link></li>
                                            <li><Link className='navbar-link' to={'/livinglinen/hammocks'}>Hammocks</Link></li>
                                            <li><Link className='navbar-link' to={'/livinglinen/chaircovers'}>Chair Covers</Link></li>
                                            <li><Link className='navbar-link' to={'/livinglinen/doorstoppers'}>Door Stoppers</Link></li>
                                        </ul>
                                    </div>
                                    <div className="navbar-div-container-ul-dropdown-content-baby">
                                        <Link to='/category/babylinen' className='navbar-link'>
                                            <p className="navbar-div-container-ul-dropdown-content-baby-head">Baby Linen</p>
                                        </Link>
                                        <div className="navbar-div-container-ul-dropdown-content-baby-category-div">
                                            <ul className='navbar-div-container-ul-dropdown-content-baby-categories'>
                                                <li><Link className='navbar-link' to={'/babylinen/hoodies'}>Hoodies</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/blanket'}>Blanket</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/booties'}>Booties</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/cap'}>Cap</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/headband'}>Head Band</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/wrap'}>Wrap</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/wipes'}>Wipes</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/gloves'}>Gloves</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/bathrobe'}>Bathrobe</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/playmat'}>Playsuit</Link></li>
                                            </ul>
                                            <ul className='navbar-div-container-ul-dropdown-content-baby-categories'>
                                                <li><Link className='navbar-link' to={'/babylinen/sleepingbag'}>Sleeping Bag</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/padcover'}>Changing Pad Cover</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/duvet_pillow'}>Duvet & Pillow</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/bib'}>Bib</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/toys'}>Soft Toys</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/bottlecover'}>Feeding Bottle Cover</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/fittedsheet'}>Fitted Sheet</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/apron'}>Apron</Link></li>
                                                <li><Link className='navbar-link' to={'/babylinen/bumper'}>Bumper</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        {/* <li><Link className='navbar-link' to={'/about'}>About Us</Link></li>
                        <li><Link className='navbar-link' to={'/contact'}>Contact Us</Link></li> */}
                    </ul>
                </Container>
            </div>
        </div>
    )
}

export default Navbar