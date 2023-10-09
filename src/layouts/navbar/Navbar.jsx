//import react packages
import { Accordion, Avatar, Container, Divider, Drawer, Flex, ScrollArea, Space, Title } from '@mantine/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//import Navbar css
import './Navbar.css'
import { useQuery } from 'react-query'
import { categoryListAPI } from '../../config/quries/Category/CategoryQueries'
import { Menu2 } from 'tabler-icons-react'
import { useDisclosure } from '@mantine/hooks'
import { useSelector } from 'react-redux'

import config from "../../config/server/Servers"

const Navbar = () => {
    // Drawer State 
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedCategory, setSelectedCategory] = useState({
        category: null,
        subCategory: null,
        childCategory: null
    })

    // Category
    const [categoryList, setCategoryList] = useState()

    useQuery(
        'categoryList',
        categoryListAPI,
        {
            onSuccess: (res) => {
                setCategoryList(res?.data?.data?.result)
            }
        }
    )

    // Drawer Category
    const categoryAccordion = Array.isArray(categoryList) ? (
        categoryList.map((cateValue, cindex) => (
            <Accordion.Item key={cindex} value={cateValue.name}>
                <Accordion.Control
                    onClick={() => setSelectedCategory({ ...selectedCategory, category: cateValue._id })}
                    className='category-accordion-heading'
                >
                    <div className='category-accordion-heading-left'>
                        <p>{cateValue.name}</p>
                    </div>
                </Accordion.Control>
                <Accordion.Panel>
                    {Array.isArray(cateValue.subCategory) ? (
                        cateValue.subCategory.map((subValue, sIndex) => (
                            <Accordion key={sIndex} >
                                <Accordion.Item value={subValue.name}>
                                    <Accordion.Control
                                        onClick={() => setSelectedCategory({ ...selectedCategory, subCategory: subValue._id })}
                                        className='subcategory-accordion-heading'
                                    >
                                        <div className='subcategory-accordion-heading-left'>
                                            <p>{subValue.name}</p>
                                        </div>
                                    </Accordion.Control>
                                </Accordion.Item>
                            </Accordion>
                        ))
                    ) : (
                        "Nothing Found"
                    )}
                </Accordion.Panel>
            </Accordion.Item>
        ))
    ) : 'No Categories Found to Display';



    const userData = useSelector((state) => state.userData.value)

    return (
        <div>
            <Drawer
                size={300}
                className='home-category-drawer'
                onClose={close}
                zIndex={12345610} opened={opened}
                p={0}
                withCloseButton={false}>
                <ScrollArea>

                    <Divider />
                    <div className='home-category-drawer-header'>
                        <Flex style={{ cursor: 'pointer' }} align={'center'} gap={'1rem'}>
                            <Avatar size={'1.8rem'} radius="lg"
                                src={
                                    userData.profile_image
                                        ? `${config.baseUrlApi}/assets/userprofile/${userData.profile_image}`
                                        : ''
                                }
                            />
                            <p className='para_color open-sanserif'>
                                {
                                    userData.first_name ?
                                        userData.first_name : (
                                            <p style={{ display: 'flex' }}>
                                                Hai,<Space w={'0.4rem'} />sign in
                                            </p>
                                        )
                                }
                            </p>
                        </Flex>
                    </div>
                    <Title order={4} p={'xs'} pl={'lg'} pt={'sm'}>
                        Trending
                    </Title>
                    <Title className='drawer-title' order={6} pb={'xs'} pl={'lg'} pt={'xs'}>
                        Best Deals
                    </Title>
                    <Title className='drawer-title' order={6} pb={'xs'} pl={'lg'} pt={'xs'}>
                        Today's Deals
                    </Title>
                    <Title className='drawer-title' order={6} pb={'xs'} pl={'lg'} pt={'xs'}>
                        New Releases
                    </Title>
                    <Space h={'sm'} />
                    <Divider />
                    <Title order={4} p={'xs'} pl={'lg'}>
                        Shop By Category
                    </Title>
                    <Accordion variant="filled" p={0}>
                        <Accordion.Item p={0} value='Home Textiles'>
                            <Accordion.Control>
                                <Title className='drawer-title' order={6}>
                                    Home Textiles
                                </Title>
                            </Accordion.Control>
                            <Accordion.Panel>
                                {categoryAccordion}
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='Electronics' >
                            <Accordion.Control>
                                <Title className='drawer-title' order={6}>
                                    Electronics
                                </Title>
                            </Accordion.Control>
                            <Accordion.Panel pl={'sm'}>
                                Comming Soon
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='Furniture' >
                            <Accordion.Control>
                                <Title className='drawer-title' order={6}>
                                    Furniture
                                </Title>
                            </Accordion.Control>
                            <Accordion.Panel pl={'sm'}>
                                Comming Soon
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='Fashions' >
                            <Accordion.Control>
                                <Title className='drawer-title' order={6}>
                                    Fashions
                                </Title>
                            </Accordion.Control>
                            <Accordion.Panel pl={'sm'}>
                                Comming Soon
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='Mobiles' >
                            <Accordion.Control>
                                <Title className='drawer-title' order={6}>
                                    Mobiles
                                </Title>
                            </Accordion.Control>
                            <Accordion.Panel pl={'sm'}>
                                Comming Soon
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item pb={'xs'} value='Groceries' >
                            <Accordion.Control>
                                <Title className='drawer-title' order={6}>
                                    Groceries
                                </Title>
                            </Accordion.Control>
                            <Accordion.Panel pl={'sm'}>
                                Comming Soon
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <Divider />
                    <Title order={4} p={'xs'} pl={'lg'} pt={'sm'}>
                        Help & Settings
                    </Title>
                    <Title className='drawer-title' order={6} pb={'xs'} pl={'lg'} pt={'xs'}>
                        Your Account
                    </Title>
                    <Title className='drawer-title' order={6} pb={'xs'} pl={'lg'} pt={'xs'}>
                        Customer Service
                    </Title>
                    <Title className='drawer-title' order={6} pb={'xs'} pl={'lg'} pt={'xs'}>
                        Sign Out
                    </Title>
                </ScrollArea>
            </Drawer>
            <div>
                <div className="navbar-div">
                    <div className='navbar-data'>
                        <ul>
                            <li
                                style={{ cursor: 'pointer' }}
                                onClick={open}
                            >
                                <Menu2 size={'1rem'} />
                                ALL
                            </li>
                            <li>
                                Buy Again
                            </li>
                            <li>
                                Best Deals
                            </li>
                            <li>
                                Today's Deals
                            </li>
                            <li>
                                New Releases
                            </li>
                        </ul>
                    </div>
                    <Container size={'82rem'} className='navbar-div-container'>
                        <ul className='navbar-div-container-ul'>
                            <ul className='product-dropdown-hover navbar-div-container-ul2'>
                                <li >
                                    Home Textiles
                                </li>
                                <li>Electronic's</li>
                                <li>Furniture</li>
                                <li>Fashions</li>
                                <li>Mobiles</li>
                                <li>Groceries</li>
                                <li>
                                    <Title order={5}>
                                        Returns & Orders
                                    </Title>
                                </li>
                                {/* <div className="navbar-div-container-ul-dropdown">
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
                                </div> */}
                            </ul>
                            {/* <li><Link className='navbar-link' to={'/about'}>About Us</Link></li>
                        <li><Link className='navbar-link' to={'/contact'}>Contact Us</Link></li> */}
                        </ul>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Navbar