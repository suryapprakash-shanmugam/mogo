//import react packages
import React, { useEffect, useState } from 'react'

//import mantine hooks
import { useMediaQuery } from '@mantine/hooks';

//import react-router-dom packages
import { Link, useLocation, useNavigate } from 'react-router-dom';

//import mantine packages
import { Menu as MenuMantine, ScrollArea, Tooltip } from '@mantine/core'

//import react-pro-slider packages
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

//import font-awesome packages
import 'font-awesome/css/font-awesome.min.css';

//import VendorRouters css
import './VendorRouters.css'

//import dashboard from pages->admin->dashboard
import Dashboard from './pages/Vendor/Dashboard/Dashboard';

import AddProduct from './pages/Vendor/Product/AddProduct/AddProduct';

import Products from './pages/Vendor/Product/Products/Products';
import ProductIndividual from './pages/Vendor/Product/ProductIndividual/ProductIndividual';
import PendingProducts from './pages/Vendor/Product/PendingProducts/PendingProducts';
import HiddenProducts from './pages/Vendor/Product/HiddenProducts/HiddenProducts';
import ExpiredProducts from './pages/Vendor/Product/ExpiredProducts/ExpiredProducts';
import SoldProducts from './pages/Vendor/Product/SoldProducts/SoldProducts';
import Drafts from './pages/Vendor/Product/Drafts/Drafts';

//import images
import Logo from '../src/assets/Mogo-Logo.png'
import Logo_favicon from '../src/assets/Mogo-Logo-Favicon.png'

// State Handler
import { useDispatch, useSelector } from 'react-redux';
import { setLoginStatus } from './StateHandler/Slice/Login/LoginSlice';
import QuoteRequests from './pages/Vendor/QuoteRequests/QuoteRequests';
import RefundRequests from './pages/Vendor/RefundRequests/RefundRequests';
import IndividualRefund from './pages/Vendor/RefundRequests/IndividualRefund/IndividualRefund';


const VendorRouters = () => {
    window.scrollTo(0, 0)
    const adminsidenavmediaquery = useMediaQuery('(max-width:768px)')
    const [collapsed, setCollapsed] = useState(false);

    // Dispatch 
    const dispatch = useDispatch()

    useEffect(() => {
        if (adminsidenavmediaquery) {
            setCollapsed(true)
        }
        else {
            setCollapsed(false)
        }
    }, [adminsidenavmediaquery])
    window.scrollTo(0, 0)
    const location = useLocation();
    const bodyContent = {
        '/vendor_dashboard': <Dashboard />,
        '/vendor_addproduct': <AddProduct />,
        '/vendor_productsdetails': <Products />,
        '/vendor_productsdetails_individual': <ProductIndividual />,
        '/vendor_pending_products': <PendingProducts />,
        '/vendor_hidden_products': <HiddenProducts />,
        '/vendor_expired_products': <ExpiredProducts />,
        '/vendor_sold_products': <SoldProducts />,
        '/vendor_drafts_products': <Drafts />,
        '/vendor_quoterequests': <QuoteRequests />,
        '/vendor_refundrequests': <RefundRequests />,
        '/vendor_individualrefund': <IndividualRefund />,
        
    }

    const renderBodyData = bodyContent[location.pathname] || null
    // Login Status Checking
    const loginStatus = useSelector((state) => state?.loginStatus?.value)

    // Navigate to Push 
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (sessionStorage.getItem('MogoAdminAccessToken102') && sessionStorage.getItem('MogoAdminAccessToken101')) {
    //         dispatch(setLoginStatus(true))
    //     }
    //     else {
    //         window.location.reload(navigate('/admin'))
    //     }
    // }, [])
    return (
        <div>
            <div className='admin-sidenav' >
                <Sidebar collapsed={collapsed} style={{ zIndex: "9999" }} transitionDuration={1000}>
                    <div className="admin-sidebar-logo">
                        <Link to="/admin_dashboard">
                            <div className={collapsed === false ? `admin-sidebar-logo-img` : `admin-sidebar-logo-img-favicon`}>
                                {
                                    collapsed === false ? <img src={Logo} alt="" /> : <img className='Logo_favicon' src={Logo_favicon} alt="" />
                                }
                            </div>
                        </Link>
                    </div>
                    <Menu className='admin-sidenav-menu-style' style={{ position: "relative", color: '#959cac' }}>
                        <Tooltip
                            label="Home"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="/vendor_dashboard">
                                <MenuItem component="span" active icon={<i className='fa fa-home' />}>
                                    Home
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Add Product"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="/vendor_addproduct">
                                <MenuItem component="span" active icon={<i className='fa fa-shopping-basket' />}>
                                    Add Product
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Products"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <SubMenu label="Products" icon={<i className='fa fa-shopping-basket' />}>
                                <Link to="/vendor_productsdetails">
                                    <MenuItem component="span"> Products</MenuItem>
                                </Link>
                                <Link to="/vendor_pending_products">
                                    <MenuItem component="span"> Pending Products</MenuItem>
                                </Link>
                                <Link to="/vendor_hidden_products">
                                    <MenuItem component="span"> Hidden Products</MenuItem>
                                </Link>
                                <Link to="/vendor_expired_products">
                                    <MenuItem component="span"> Expired Products</MenuItem>
                                </Link>
                                <Link to="/vendor_sold_products">
                                    <MenuItem component="span"> Sold Products</MenuItem>
                                </Link>
                                <Link to="/vendor_drafts_products">
                                    <MenuItem component="span"> Drafts</MenuItem>
                                </Link>
                                {/* <Link to="">
                                    <MenuItem component="span"> Bulk Product Upload</MenuItem>
                                </Link> */}
                            </SubMenu>
                        </Tooltip>
                        <Tooltip
                            label="Quote Requests"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="/vendor_quoterequests">
                                <MenuItem component="span" active icon={<i className='fa fa-tag' />}>
                                    Quote Requests
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Refund Requests"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="/vendor_refundrequests">
                                <MenuItem component="span" active icon={<i className='fa fa-flag' />}>
                                    Refund Requests
                                </MenuItem>
                            </Link>
                        </Tooltip>
                    </Menu>
                </Sidebar>
                <ScrollArea w={"100%"}>
                    <main className='admin-sidenav-main-admin-content' >
                        <div className='admin-sidenav-topbar-color'>
                            <div>
                                <button className="admin-sidenav-toggle-style-button" onClick={() => setCollapsed(!collapsed)}>
                                    <i className='fa fa-bars'></i>
                                </button>
                            </div>
                            <div className="admin-user-profile-dropdown">
                                <MenuMantine shadow="md" width={200}>
                                    <MenuMantine.Target>
                                        <div className='admin-user-profile-dropdown-button-style'>
                                            <div className="admin-user-profile-dropdown-button-img">
                                                {   /* <img src={admin_user_profile} alt="" /> */}
                                            </div>
                                            <div className="admin-user-profile-dropdown-button-content">
                                                <p>
                                                    Admin
                                                </p>
                                            </div>
                                        </div>
                                    </MenuMantine.Target>

                                    <MenuMantine.Dropdown>
                                        <MenuMantine.Item icon={<i className='fa fa-th-large' />}>Dashboard</MenuMantine.Item>
                                        <MenuMantine.Item icon={<i className='fa fa-user' />}>Profile</MenuMantine.Item>
                                        <MenuMantine.Item icon={<i className='fa fa-cog' />}>Update Profile</MenuMantine.Item>
                                        <MenuMantine.Item icon={<i className='fa fa-user' />}>Change Password</MenuMantine.Item>
                                        <MenuMantine.Divider />
                                        <MenuMantine.Item icon={<i className='fa fa-sign-out' />}>Logout</MenuMantine.Item>
                                    </MenuMantine.Dropdown>
                                </MenuMantine>
                            </div>
                        </div>
                        <div className="admin-all-pages-content">
                            <div>{renderBodyData}</div>
                        </div>
                    </main>
                </ScrollArea>
            </div>
        </div>
    )
}

export default VendorRouters