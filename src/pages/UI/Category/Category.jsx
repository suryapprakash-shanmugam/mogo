//import react packages
import React, { useState } from 'react'

//import mantine packages
import { Checkbox, Container, Input, Rating, ScrollArea, Select } from '@mantine/core'

//import Breadcrumb component from components->Breadcrumb
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb'

//import Category css file
import './Category.css'

//import image for pagination
import angleleft from '../../../assets/pagination/angleleft.webp'
import angleright from '../../../assets/pagination/angleright.webp'

import { Link, useLocation } from 'react-router-dom'

//import react pagination package
import ReactPaginate from 'react-paginate';

//import icons
import cart from '../../../assets/header/cart.webp'
import wishlist from '../../../assets/header/wishlist.webp'
import arrowdown from '../../../assets/preheader/arrow-down.webp'

//import demo images
import baby_linen from '../../../assets/home/grid-category/baby_linen.webp'
import bath_linen from '../../../assets/home/grid-category/bath_linen.webp'
import NumericInput from '../../../components/UI/Input/NumericInput'

const Category = () => {

    const location = useLocation()

    const value = {
        "/products": { title: 'Products', href: '/products' },
        "/category/tablelinen": { title: 'Table Linen', href: '/category/tablelinen' },
        "/category/kitchenlinen": { title: 'Kitchen Linen', href: '/category/kitchenlinen' },
        "/category/bathlinen": { title: 'Bath Linen', href: '/category/bathlinen' },
        "/category/bedlinen": { title: 'Bed Linen', href: '/category/bedlinen' },
        "/category/livinglinen": { title: 'Living Linen', href: '/category/livinglinen' },
        "/category/babylinen": { title: 'Baby Linen', href: '/category/babylinen' },
        "/babylinen/hoodies": { title: 'Hoodies', href: '/babylinen/hoodies', },
        "/babylinen/blanket": { title: 'Blanket', href: '/babylinen/blanket', },
        "/babylinen/booties": { title: 'Booties', href: '/babylinen/booties', },
        "/babylinen/cap": { title: 'Cap', href: '/babylinen/cap', },
        "/babylinen/headband": { title: 'Head Band', href: '/babylinen/headband', },
        "/babylinen/wrap": { title: 'Wrap', href: '/babylinen/wrap', },
        "/babylinen/wipes": { title: 'Wipes', href: '/babylinen/wipes', },
        "/babylinen/gloves": { title: 'Gloves', href: '/babylinen/gloves', },
        "/babylinen/bathrobe": { title: 'Bathrobe', href: '/babylinen/bathrobe', },
        "/babylinen/playmat": { title: 'Playsuit', href: '/babylinen/playmat', },
        "/babylinen/sleepingbag": { title: 'Sleeping Bag', href: '/babylinen/sleepingbag', },
        "/babylinen/padcover": { title: 'Changing Pad Cover', href: '/babylinen/padcover', },
        "/babylinen/duvet_pillow": { title: 'Duvet & Pillow', href: '/babylinen/duvet_pillow', },
        "/babylinen/bib": { title: 'Bib', href: '/babylinen/bib', },
        "/babylinen/toys": { title: 'Soft Toys', href: '/babylinen/toys', },
        "/babylinen/bottlecover": { title: 'Feeding Bottle Cover', href: '/babylinen/bottlecover', },
        "/babylinen/fittedsheet": { title: 'Fitted Sheet', href: '/babylinen/fittedsheet', },
        "/babylinen/apron": { title: 'Apron', href: '/babylinen/apron', },
        "/babylinen/bumper": { title: 'Bumper', href: '/babylinen/bumper', },
        "/livinglinen/curtains": { title: 'Curtains', href: '/livinglinen/curtains', },
        "/livinglinen/throws": { title: 'Throws', href: '/livinglinen/throws', },
        "/livinglinen/mattress": { title: 'Mattress', href: '/livinglinen/mattress', },
        "/livinglinen/windowpanel": { title: 'Window Panel', href: '/livinglinen/windowpanel', },
        "/livinglinen/cushion": { title: 'Cushion', href: '/livinglinen/cushion', },
        "/livinglinen/chairpads": { title: 'Chair Pads', href: '/livinglinen/chairpads', },
        "/livinglinen/boxcushions": { title: 'Box Cushions', href: '/livinglinen/boxcushions', },
        "/livinglinen/hammocks": { title: 'Hammocks', href: '/livinglinen/hammocks', },
        "/livinglinen/chaircovers": { title: 'Chair Covers', href: '/livinglinen/chaircovers', },
        "/livinglinen/doorstoppers": { title: 'Door Stoppers', href: '/livinglinen/doorstoppers', },
        "/bedlinen/bedsheets": { title: 'Bed Sheets', href: '/bedlinen/bedsheets', },
        "/bedlinen/pillowcases": { title: 'Pillowcases', href: '/bedlinen/pillowcases', },
        "/bedlinen/duvetcovers": { title: 'Duvet Covers', href: '/bedlinen/duvetcovers', },
        "/bedlinen/bedspreads": { title: 'Bedspreads', href: '/bedlinen/bedspreads', },
        "/bedlinen/blankets_throws": { title: 'Blankets and Throws', href: '/bedlinen/blankets_throws', },
        "/bedlinen/cushions": { title: 'Cushions', href: '/bedlinen/cushions', },
        "/bedlinen/thermalblankets": { title: 'Thermal Blankets', href: '/bedlinen/thermalblankets', },
        "/bedlinen/quilts": { title: 'Quilts', href: '/bedlinen/quilts', },
        "/bedlinen/bolsters": { title: 'Bolsters', href: '/bedlinen/bolsters', },
        "/bedlinen/shams": { title: 'Shams', href: '/bedlinen/shams', },
        "/bathlinen/towels": { title: 'Bath Towels', href: '/bathlinen/towels', },
        "/bathlinen/handtowels": { title: 'Hand Towels', href: '/bathlinen/handtowels', },
        "/bathlinen/facetowels": { title: 'Face Towels', href: '/bathlinen/facetowels', },
        "/bathlinen/mats": { title: 'Bath Mats', href: '/bathlinen/mats', },
        "/bathlinen/robes": { title: 'Bathrobes', href: '/bathlinen/robes', },
        "/bathlinen/curtains": { title: 'Shower Curtains', href: '/bathlinen/curtains', },
        "/bathlinen/towelracks": { title: 'Towel Racks', href: '/bathlinen/towelracks', },
        "/bathlinen/towelrings": { title: 'Towel Rings', href: '/bathlinen/towelrings', },
        "/bathlinen/towelhooks": { title: 'Towel Hooks', href: '/bathlinen/towelhooks', },
        "/kitchenlinen/aprons": { title: 'Aprons', href: '/kitchenlinen/aprons', },
        "/kitchenlinen/gloves": { title: 'Gloves', href: '/kitchenlinen/gloves', },
        "/kitchenlinen/potholders": { title: 'Pot Holders', href: '/kitchenlinen/potholders', },
        "/kitchenlinen/towels": { title: 'kitchen Towels', href: '/kitchenlinen/towels', },
        "/kitchenlinen/dishcloths": { title: 'Dish Cloths', href: '/kitchenlinen/dishcloths', },
        "/tablelinen/cloth": { title: 'Table Cloth', href: '/tablelinen/cloth', },
        "/tablelinen/placemat": { title: 'Place Mat', href: '/tablelinen/placemat', },
        "/tablelinen/runner": { title: 'Table Runner', href: '/tablelinen/runner', },
        "/tablelinen/napkins": { title: 'Table Napkins', href: '/tablelinen/napkins', },
        "/tablelinen/napkinsrings": { title: 'Napkins Rings', href: '/tablelinen/napkinsrings', },
        "/tablelinen/coasters": { title: 'Coasters', href: '/tablelinen/coasters', },
        "/tablelinen/breadbaskets": { title: 'Bread Baskets', href: '/tablelinen/breadbaskets', },
    }

    const categoryArray = [
        {
            category: 'Products',
            link: '/products',
            value: [
                { value: 'Table Linen', link: '/category/tablelinen', },
                { value: 'Kitchen Linen', link: '/category/kitchenlinen', },
                { value: 'Bath Linen', link: '/category/bathlinen', },
                { value: 'Bed Linen', link: '/category/bedlinen', },
                { value: 'Living Linen', link: '/category/livinglinen', },
                { value: 'Baby Linen', link: '/category/babylinen', },
            ]
        },
        {
            category: 'Table Linen',
            value: [
                { value: 'Table Cloth', link: '/tablelinen/cloth', },
                { value: 'Place Mat', link: '/tablelinen/placemat', },
                { value: 'Table Runner', link: '/tablelinen/runner', },
                { value: 'Table Napkins', link: '/tablelinen/napkins', },
                { value: 'Napkins Rings', link: '/tablelinen/napkinsrings', },
                { value: 'Coasters', link: '/tablelinen/coasters', },
                { value: 'Bread Baskets', link: '/tablelinen/breadbaskets', },
            ]
        },
        {
            category: 'Kitchen Linen',
            value: [
                { value: 'Aprons', link: '/kitchenlinen/aprons', },
                { value: 'Gloves', link: '/kitchenlinen/gloves', },
                { value: 'Pot Holders', link: '/kitchenlinen/potholders', },
                { value: 'kitchen Towels', link: '/kitchenlinen/towels', },
                { value: 'Dish Cloths', link: '/kitchenlinen/dishcloths', },
            ]
        },
        {
            category: 'Bath Linen',
            value: [
                { value: 'Bath Towels', link: '/bathlinen/towels', },
                { value: 'Hand Towels', link: '/bathlinen/handtowels', },
                { value: 'Face Towels', link: '/bathlinen/facetowels', },
                { value: 'Bath Mats', link: '/bathlinen/mats', },
                { value: 'Bathrobes', link: '/bathlinen/robes', },
                { value: 'Shower Curtains', link: '/bathlinen/curtains', },
                { value: 'Towel Racks', link: '/bathlinen/towelracks', },
                { value: 'Towel Rings', link: '/bathlinen/towelrings', },
                { value: 'Towel Hooks', link: '/bathlinen/towelhooks', },
            ]
        },
        {
            category: 'Bed Linen',
            value: [
                { value: 'Bed Sheets', link: '/bedlinen/bedsheets', },
                { value: 'Pillowcases', link: '/bedlinen/pillowcases', },
                { value: 'Duvet Covers', link: '/bedlinen/duvetcovers', },
                { value: 'Bedspreads', link: '/bedlinen/bedspreads', },
                { value: 'Blankets and Throws', link: '/bedlinen/blankets_throws', },
                { value: 'Cushions', link: '/bedlinen/cushions', },
                { value: 'Thermal Blankets', link: '/bedlinen/thermalblankets', },
                { value: 'Quilts', link: '/bedlinen/quilts', },
                { value: 'Bolsters', link: '/bedlinen/bolsters', },
                { value: 'Shams', link: '/bedlinen/shams', },
            ]
        },
        {
            category: 'Living Linen',
            value: [
                { value: 'Curtains', link: '/livinglinen/curtains', },
                { value: 'Throws', link: '/livinglinen/throws', },
                { value: 'Mattress', link: '/livinglinen/mattress', },
                { value: 'Window Panel', link: '/livinglinen/windowpanel', },
                { value: 'Cushion', link: '/livinglinen/cushion', },
                { value: 'Chair Pads', link: '/livinglinen/chairpads', },
                { value: 'Box Cushions', link: '/livinglinen/boxcushions', },
                { value: 'Hammocks', link: '/livinglinen/hammocks', },
                { value: 'Chair Covers', link: '/livinglinen/chaircovers', },
                { value: 'Door Stoppers', link: '/livinglinen/doorstoppers', },
            ]
        },
        {
            category: 'Baby Linen',
            value: [
                { value: 'Hoodies', link: '/babylinen/hoodies', },
                { value: 'Blanket', link: '/babylinen/blanket', },
                { value: 'Booties', link: '/babylinen/booties', },
                { value: 'Cap', link: '/babylinen/cap', },
                { value: 'Head Band', link: '/babylinen/headband', },
                { value: 'Wrap', link: '/babylinen/wrap', },
                { value: 'Wipes', link: '/babylinen/wipes', },
                { value: 'Gloves', link: '/babylinen/gloves', },
                { value: 'Bathrobe', link: '/babylinen/bathrobe', },
                { value: 'Playsuit', link: '/babylinen/playmat', },
                { value: 'Sleeping Bag', link: '/babylinen/sleepingbag', },
                { value: 'Changing Pad Cover', link: '/babylinen/padcover', },
                { value: 'Duvet & Pillow', link: '/babylinen/duvet_pillow', },
                { value: 'Bib', link: '/babylinen/bib', },
                { value: 'Soft Toys', link: '/babylinen/toys', },
                { value: 'Feeding Bottle Cover', link: '/babylinen/bottlecover', },
                { value: 'Fitted Sheet', link: '/babylinen/fittedsheet', },
                { value: 'Apron', link: '/babylinen/apron', },
                { value: 'Bumper', link: '/babylinen/bumper', },
            ]
        },
    ]

    // array for breadcrumb
    const items = [
        { title: 'Home', href: '/' },
        { title: 'Products', href: '/products' },
    ];

    const foundItem = categoryArray.find(category => {
        return category.value.find(item => item.link === location.pathname);
    });


    if (foundItem) {
        const categoryValue = foundItem.category;
        const categoryInfo = categoryArray[0].value.find(item => item.value === categoryValue);

        if (categoryInfo) {
            const { value, link } = categoryInfo;
            items.push({ title: value, href: link });
        }

    }

    if (location.pathname !== '/products') {
        items.push(value[location.pathname])
    }
    const categoryZero = categoryArray[0]; 

    const foundItemsInCategoryZero = items.filter((item) => {
        return categoryZero.value.some((categoryItem) => categoryItem.link === item.href);
    });

    const output = foundItemsInCategoryZero[0]?.title;

    const matchingCategory = categoryArray.find((category) => category.category === output);


    const returnValue = items[items.length - 1]?.title

    //display individual product array
    const productDetailsArray = [
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: 'Featured',
            link: '/product',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: 'Featured',
            link: '/product',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '',
            newprice: '80',
            featured: 'Featured',
            link: '/product',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: '',
            link: '/product',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: '',
            link: '/product',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '',
            newprice: '80',
            featured: 'Featured',
            link: '/product',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '',
            newprice: '80',
            featured: 'Featured',
            link: '/product',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: 'Featured',
            link: '/product',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '',
            newprice: '80',
            featured: '',
            link: '/product',
        },
        {
            image: baby_linen,
            secondimage: bath_linen,
            heading: 'This a heading',
            seller: 'Shopiezy',
            rating: '3',
            like: '0',
            currencysymbol: '$',
            oldprice: '80',
            newprice: '80',
            featured: 'Featured',
            link: '/product',
        },
    ]
    const ITEMS_PER_PAGE = 12;
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const totalPages = Math.ceil(productDetailsArray.length / ITEMS_PER_PAGE);

    const displayedItems = productDetailsArray.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage * ITEMS_PER_PAGE) + ITEMS_PER_PAGE
    );

    //display brand array

    const brandArray = [
        {
            brandname: 'Brand 1',
        },
        {
            brandname: 'Brand 2',
        },
        {
            brandname: 'Brand 3',
        },
        {
            brandname: 'Brand 4',
        },
        {
            brandname: 'Brand 5',
        },
        {
            brandname: 'Brand 6',
        },
    ]
    const brandArray1 = [
        {
            brandname: 'Brand 7',
        },
        {
            brandname: 'Brand 8',
        },
        {
            brandname: 'Brand 9',
        },
        {
            brandname: 'Brand 10',
        },
        {
            brandname: 'Brand 11',
        },
        {
            brandname: 'Brand 12',
        },
    ]

    const [filterText, setFilterText] = useState('');
    const [filterText1, setFilterText1] = useState(''); 
    const [filteredBrands, setFilteredBrands] = useState(brandArray); 
    const [filteredBrands1, setFilteredBrands1] = useState(brandArray1); 

    // Function to handle input change
    const handleInputChange = (event) => {
        const searchText = event.target.value;
        setFilterText(searchText);
        const filtered = brandArray.filter((brand) =>
            brand.brandname.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredBrands(filtered);
    };
    const handleInputChange1 = (event) => {
        const searchText = event.target.value;
        setFilterText1(searchText);
        const filtered = brandArray1.filter((brand) =>
            brand.brandname.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredBrands1(filtered);
    };

    //sortby select array
    const sortByArray = [
        { value: 'mostrating', label: 'Most Recent' },
        { value: 'lowestrating', label: 'Lowest Price' },
        { value: 'hightpricing', label: 'Highest Price' },
        { value: 'highestrating', label: 'Highest Rating' },
    ]

    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');


    const category = 'Table_Linen';
    const subcategory = 'Table_Napkins';
    const heading = 'This_is_a_heading';



    return (
        <div>
            <div className="category-div">
                <Container size={'82rem'} className='category-div-container'>
                    <div className="category-div-container-breadcrumb">
                        <Breadcrumb value={items} />
                    </div>
                    <div className='category-div-container-heading-sort-by'>
                        <h1>{returnValue}</h1>
                        <div className="category-div-container-main-product-sortby">
                            <div className="category-div-container-main-product-sortby-form">
                                <div className="category-div-container-main-product-sortby-form-label">
                                    <p>Sort By:</p>
                                </div>
                                <div className="category-div-container-main-product-sortby-form-select">
                                    <Select
                                        defaultValue={sortByArray[0].value}
                                        rightSection={<img src={arrowdown} width='10' alt='arrow down' />}
                                        data={sortByArray}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="category-div-container-main">
                        <div className="category-div-container-main-filter">
                            <div className="category-div-container-main-filter-main">
                                <ScrollArea h={225} offsetScrollbars scrollbarSize={6} scrollHideDelay={500}>
                                    <div className={returnValue !== 'Products' ? 'category-div-container-main-filter-main-category' : 'category-div-container-main-filter-main-category-product'}>
                                        <p className='category-div-container-main-filter-main-category-head'>Category</p>
                                        <div className="category-div-container-main-filter-main-category-content">
                                            {
                                                location.pathname === '/products' ? (
                                                    <>

                                                        {
                                                            categoryArray.map((category, index) => {
                                                                if (category.category === returnValue) {
                                                                    return (
                                                                        <div key={index}>
                                                                            {category.value.map((categoryval, innerIndex) => {
                                                                                return (
                                                                                    <Link key={innerIndex} className='category-div-container-main-filter-main-category-content-link' to={categoryval.link}>
                                                                                        <p className={`${returnValue === categoryval.value ? 'category-div-container-main-filter-main-category-content-link-active' : ''}`} key={innerIndex}>{categoryval.value}</p>
                                                                                    </Link>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                    )
                                                                }
                                                                return null;
                                                            })
                                                        }
                                                    </>
                                                ) : (
                                                    <>

                                                        {matchingCategory && matchingCategory.value.length > 0 && (
                                                            <div>
                                                                {matchingCategory.value.map((categoryval, innerIndex) => (
                                                                    <Link
                                                                        key={innerIndex}
                                                                        className='category-div-container-main-filter-main-category-content-link'
                                                                        to={categoryval.link}
                                                                    >
                                                                        <p className={`${returnValue === categoryval.value ? 'category-div-container-main-filter-main-category-content-link-active' : ''}`} key={innerIndex}>{categoryval.value}</p>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                )
                                            }
                                        </div>

                                    </div>
                                </ScrollArea>
                                <hr />
                                {
                                    returnValue !== 'Products' ? (
                                        <>
                                            <ScrollArea h={250} offsetScrollbars scrollbarSize={6} scrollHideDelay={500}>
                                                <div className="category-div-container-main-filter-main-brand">
                                                    <p className='category-div-container-main-filter-main-category-head'>Brand</p>
                                                    <div className="category-div-container-main-filter-main-brand-form-display">
                                                        <div className="category-div-container-main-filter-main-brand-form-display-form">
                                                            <Input
                                                                value={filterText}
                                                                onChange={handleInputChange}
                                                                placeholder="Search Brand"
                                                            />
                                                        </div>
                                                        <div className="category-div-container-main-filter-main-brand-form-display-display">
                                                            {filteredBrands.map((brand, index) => (
                                                                <Checkbox
                                                                    key={index}
                                                                    label={brand.brandname}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </ScrollArea>
                                            <hr />
                                            <div className="category-div-container-main-filter-main-fabric">
                                                <p className='category-div-container-main-filter-main-category-head'>Fabric</p>
                                                <div className="category-div-container-main-filter-main-fabric-form-display">
                                                    <div className="category-div-container-main-filter-main-fabric-form-display-form">
                                                        <Input
                                                            value={filterText1}
                                                            onChange={handleInputChange1}
                                                            placeholder="Search Fabric"
                                                        />
                                                    </div>
                                                    <ScrollArea h={175} offsetScrollbars scrollbarSize={6} scrollHideDelay={500}>
                                                        <div className="category-div-container-main-filter-main-fabric-form-display-display">
                                                            {filteredBrands1.map((brand, index) => (
                                                                <Checkbox
                                                                    key={index}
                                                                    label={brand.brandname}
                                                                />
                                                            ))}
                                                        </div>
                                                    </ScrollArea>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="category-div-container-main-filter-main-price">
                                                <p className='category-div-container-main-filter-main-category-head'>Price</p>
                                                <div className="category-div-container-main-filter-main-price-form">
                                                    <div className="category-div-container-main-filter-main-price-form-min-input">
                                                        <NumericInput
                                                            value={minValue}
                                                            onChange={setMinValue}
                                                            label="Min"
                                                        />
                                                    </div>
                                                    <div className="category-div-container-main-filter-main-price-form-max-input">
                                                        <NumericInput
                                                            value={maxValue}
                                                            onChange={setMaxValue}
                                                            label="Max"
                                                        />
                                                    </div>
                                                    <div className="category-div-container-main-filter-main-price-form-button">
                                                        <button><img src={angleright} width="50" alt="angle right icon" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="category-div-container-main-filter-main-price">
                                            <p className='category-div-container-main-filter-main-category-head'>Price</p>
                                            <div className="category-div-container-main-filter-main-price-form">
                                                <div className="category-div-container-main-filter-main-price-form-min-input">
                                                    <NumericInput
                                                        value={minValue}
                                                        onChange={setMinValue}
                                                        label="Min"
                                                    />
                                                </div>
                                                <div className="category-div-container-main-filter-main-price-form-max-input">
                                                    <NumericInput
                                                        value={maxValue}
                                                        onChange={setMaxValue}
                                                        label="Max"
                                                    />
                                                </div>
                                                <div className="category-div-container-main-filter-main-price-form-button">
                                                    <button><img src={angleright} width="50" alt="angle right icon" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="category-div-container-main-product">

                            <div className="category-div-container-main-product-product_display">
                                {
                                    displayedItems.map((productDetails, index) => {
                                        return (
                                            <div key={index} className="category-div-container-main-product-product_display-individual">
                                                <Link to={`${productDetails.link}/${category}/${subcategory}/${heading}`}>
                                                    <div className="category-div-container-main-product-product_display-individual-image">
                                                        <img src={productDetails.image} alt="first product" />
                                                        <img src={productDetails.secondimage} id="category_second_image" alt="second product" />
                                                        {
                                                            productDetails.featured !== '' ?
                                                                <div className="category-div-container-main-product-product_display-individual-image-featured">
                                                                    <p>{productDetails.featured}</p>
                                                                </div> : ''
                                                        }
                                                        <div className="category-div-container-main-product-product_display-individual-image-cart-wishlist">
                                                            <div className="category-div-container-main-product-product_display-individual-image-cart-wishlist-cart">
                                                                <img src={cart} width={20} alt="cart icon" />
                                                            </div>
                                                            <div className="category-div-container-main-product-product_display-individual-image-cart-wishlist-wishlist">
                                                                <img src={wishlist} width={20} alt="wishlist icon" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="category-div-container-main-product-product_display-individual-content">
                                                    <div className="category-div-container-main-product-product_display-individual-heading">
                                                        <p>{productDetails.heading}</p>
                                                    </div>
                                                    <div className="category-div-container-main-product-product_display-individual-shop-name">
                                                        <p>{productDetails.seller}</p>
                                                    </div>
                                                    <div className="category-div-container-main-product-product_display-individual-rating-heart">
                                                        <div className="category-div-container-main-product-product_display-individual-rating-heart-rating">
                                                            <Rating value={productDetails.rating} readOnly />
                                                        </div>
                                                        <div className="category-div-container-main-product-product_display-individual-rating-heart-heart">
                                                            <div><img src={wishlist} width={14} alt="" /></div>
                                                            <div>{productDetails.like}</div>
                                                        </div>

                                                    </div>
                                                    <div className="category-div-container-main-product-product_display-individual-price">
                                                        {
                                                            productDetails.oldprice !== '' ? <p className='oldprice'>{`${productDetails.currencysymbol}${productDetails.oldprice}`}</p> : ''
                                                        }
                                                        <p>{`${productDetails.currencysymbol}${productDetails.newprice}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="pagination-container">
                                <ReactPaginate
                                    previousLabel={<img src={angleleft} width="20" alt='pagination left icon' />}
                                    nextLabel={<img src={angleright} width="20" alt='pagination right icon' />}
                                    pageCount={totalPages}
                                    onPageChange={handlePageChange}
                                    forcePage={currentPage}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                    previousClassName={currentPage === 0 ? 'disabled' : ''}
                                    nextClassName={currentPage === totalPages - 1 ? 'disabled' : ''}
                                    disabledClassName={'disabled'}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Category