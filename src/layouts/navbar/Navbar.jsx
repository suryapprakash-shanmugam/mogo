//import react packages
import { Accordion, Avatar, Container, Divider, Drawer, Flex, ScrollArea, Space, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//import Navbar css
import './Navbar.css'
import { useQuery } from 'react-query'
import { categoryListAPI } from '../../config/quries/Category/CategoryQueries'
import { Menu2, TransferOut } from 'tabler-icons-react'
import { useDisclosure } from '@mantine/hooks'
import { useSelector } from 'react-redux'

import config from "../../config/server/Servers"
import { subCategoryListByCategoryID } from '../../config/quries/SubCategory/SubCategoryQuries'

const Navbar = () => {
    // Drawer State 
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedCategory, setSelectedCategory] = useState({
        category: null,
        subCategory: null,
        childCategory: null
    })

    const header1060MediaQuery = useMediaQuery('(max-width:1061px)')
    const header786MediaQuery = useMediaQuery('(max-width:787px)')
    const header500MediaQuery = useMediaQuery('(max-width:501px)')
    // Category
    const [categoryList, setCategoryList] = useState()
    const [subCategoryList, setSubCategoryList] = useState()
    useQuery(
        'categoryList',
        categoryListAPI,
        {
            onSuccess: (res) => {
                setCategoryList(res?.data?.data?.result)
            }
        }
    )

    const [openAccordionItems, setOpenAccordionItems] = useState([]);

    const toggleAccordion = (value) => {
        if (openAccordionItems.includes(value)) {
            setOpenAccordionItems(openAccordionItems.filter((item) => item !== value));
        } else {
            setOpenAccordionItems([...openAccordionItems, value]);
        }
    };

    useQuery(
        [
            'subCategoryList',
            selectedCategory.category
        ],
        subCategoryListByCategoryID,
        {
            enabled: !!selectedCategory.category,
            onSuccess: (res) => {
                setSubCategoryList(res?.data?.data?.result)
            }
        }
    )

    // Drawer Category
    const categoryAccordion = Array.isArray(categoryList) ? (
        categoryList.map((cateValue, cindex) => (
            <Accordion variant='filled' p={0}>
                <Accordion.Item key={cindex} value={cateValue.name}>
                    <Accordion.Control
                        pb={cindex === 6 && 'md'}
                        onClick={() => {
                            setSelectedCategory({ ...selectedCategory, category: cateValue._id })
                        }}
                        className='category-accordion-heading'
                    >
                        <div className='category-accordion-heading-left'>
                            <p>{cateValue.name}</p>
                        </div>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Accordion>
                            {Array.isArray(subCategoryList) ? (
                                subCategoryList.map((subValue, sIndex) => (
                                    <Accordion.Item value={subValue.name}>
                                        <Accordion.Control>
                                            <Title order={6} p={'xs'} style={{ fontWeight: '400' }}>
                                                {subValue.name}
                                            </Title>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            Comming Soon
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                ))
                            ) : (
                                "Comming Soon"
                            )}
                        </Accordion>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        ))
    ) : 'No Categories Found to Display';

    const accordianHeader = [
        'Home Textiles',
        'Electronics',
        'Furniture',
        'Fashions',
        'Mobiles',
        'Groceries'
    ]

    const drawerAccord = accordianHeader.map((value, index) => (
        <Accordion variant="filled" p={0}>
            <Accordion.Item p={0} value='Home Textiles' key={index}>
                <Accordion.Control>
                    <Title className='drawer-title' order={6}>
                        {value}
                    </Title>
                </Accordion.Control>
                {
                    index === 0 ?
                        <Accordion.Panel>
                            {categoryAccordion}
                        </Accordion.Panel> :
                        <Accordion.Panel pl={'sm'}>
                            Comming Soon
                        </Accordion.Panel>
                }

            </Accordion.Item>
        </Accordion>
    ))



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
                        <Flex
                            w={'100%'}
                            justify={'space-between'}
                            style={{ cursor: 'pointer' }} align={'center'}>
                            <div>
                                <Flex
                                    align={'center'} gap={'1rem'}>
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
                            <div>
                                {
                                    userData.first_name ?
                                        <TransferOut
                                            color='white'
                                            size={'1.5rem'}
                                        />
                                        : ''
                                }
                            </div>
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
                    {
                        drawerAccord
                    }
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
                <div>
                    <Flex>

                    </Flex>
                </div>
            </Drawer>
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
                <div>
                    <ul className='navbar-div-container-ul'>
                        <ul className='product-dropdown-hover navbar-div-container-ul2
                        poppins-font-family
                        '>
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
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar