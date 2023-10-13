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

//import AdminRouters css
import './AdminRouters.css'

//import dashboard from pages->admin->dashboard
import Dashboard from './pages/Admin/Dashboard/Dashboard';

//import Individual from pages->admin->Orders->Individual
import Individual from './pages/Admin/Orders/Orders/Individual/Individual';

//import Orders from pages->admin->Orders
import Orders from './pages/Admin/Orders/Orders/Orders';

//import Orders from pages->admin->Orders->transactions
import Transactions from './pages/Admin/Orders/Transactions/Transactions';

//import Earnings from pages->admin->Earnings->Earnings
import Earnings from './pages/Admin/Earnings/Earnings/Earnings';

//import SellerBalances from pages->admin->Earnings->SellerBalances
import SellerBalances from './pages/Admin/Earnings/SellerBalances/SellerBalances';

//import AddPayout from pages->admin->Payout->AddPayout
import AddPayout from './pages/Admin/Payouts/AddPayout/AddPayout';

//import PayoutRequests from pages->admin->Payout->PayoutRequests
import PayoutRequests from './pages/Admin/Payouts/PayoutRequests/PayoutRequests';

//import RefundRequests from pages->admin->RefundRequests
import RefundRequests from './pages/Admin/RefundRequests/RefundRequests';

//import IndividualRefund from pages->admin->RefundRequests->IndividualRefund
import IndividualRefund from './pages/Admin/RefundRequests/IndividualRefund/IndividualRefund';

//import AddProduct from pages->admin->product->addproduct
import AddProduct from './pages/Admin/Product/AddProduct/AddProduct';

//import Products from pages->admin->product->products
import Products from './pages/Admin/Product/Products/Products';

//import ProductIndividual from pages->admin->product->ProductIndividual
import ProductIndividual from './pages/Admin/Product/ProductIndividual/ProductIndividual';

//import SpecialProducts from pages->admin->product->SpecialProducts
import SpecialProducts from './pages/Admin/Product/SpecialProducts/SpecialProducts';

//import PendingProducts from pages->admin->product->PendingProducts
import PendingProducts from './pages/Admin/Product/PendingProducts/PendingProducts';

//import HiddenProducts from pages->admin->product->HiddenProducts
import HiddenProducts from './pages/Admin/Product/HiddenProducts/HiddenProducts';

//import ExpiredProducts from pages->admin->product->ExpiredProducts
import ExpiredProducts from './pages/Admin/Product/ExpiredProducts/ExpiredProducts';

//import SoldProducts from pages->admin->product->SoldProducts
import SoldProducts from './pages/Admin/Product/SoldProducts/SoldProducts';

import Drafts from './pages/Admin/Product/Drafts/Drafts';

//import DeletedProducts from pages->admin->product->DeletedProducts
import DeletedProducts from './pages/Admin/Product/DeletedProducts/DeletedProducts';

//import Category from pages->admin->Category
import Category from './pages/Admin/Category/Category';

//import FeaturedProducts from pages->admin->FeaturedProducts
import FeaturedProducts from './pages/Admin/FeaturedProducts/FeaturedProducts';

//import QuoteRequests from pages->admin->QuoteRequests
import QuoteRequests from './pages/Admin/QuoteRequests/QuoteRequests';

import ApprovedProductComments from './pages/Admin/Comments/ProductComments/ApprovedProductComments';
import PendingProductComments from './pages/Admin/Comments/ProductComments/PendingProductComments';
import ApprovedBlogComments from './pages/Admin/Comments/BlogComments/ApprovedBlogComments';
import PendingBlogComments from './pages/Admin/Comments/BlogComments/PendingBlogComments';
import GeneralSettings from './pages/Admin/GeneralSettings/GeneralSettings';

//import Blogs from pages->admin->Blogs
import Blogs from './pages/Admin/Blogs/Blogs';

//import images
import Logo from '../src/assets/Mogo-Logo.png'
import Logo_favicon from '../src/assets/Mogo-Logo-Favicon.png'

// State Handler
import { useDispatch, useSelector } from 'react-redux';
import { setLoginStatus } from './StateHandler/Slice/Login/LoginSlice';
import { useQuery } from 'react-query';
import { getAdminByID } from './config/quries/AdminLogin/Quries';
import Location from './pages/Admin/Location/Location';
import Users from './pages/Admin/Users/Users';
import Reviews from './pages/Admin/Reviews/Reviews';


const AdminRouters = () => {
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
        '/admin_dashboard': <Dashboard />,
        '/individualorder': <Individual />,
        '/orders': <Orders />,
        '/transactions': <Transactions />,
        '/earnings': <Earnings />,
        '/sellerbalances': <SellerBalances />,
        '/addpayout': <AddPayout />,
        '/payoutrequests': <PayoutRequests />,
        '/refundrequests': <RefundRequests />,
        '/individualrefund': <IndividualRefund />,
        '/addproduct': <AddProduct />,
        '/productsdetails': <Products />,
        '/productsdetails_individual': <ProductIndividual />,
        '/special_products': <SpecialProducts />,
        '/pending_products': <PendingProducts />,
        '/hidden_products': <HiddenProducts />,
        '/expired_products': <ExpiredProducts />,
        '/sold_products': <SoldProducts />,
        '/drafts_products': <Drafts />,
        '/deleted_products': <DeletedProducts />,
        '/categorylist': <Category />,
        '/featuredproducts': <FeaturedProducts />,
        '/quoterequests': <QuoteRequests />,
        '/blogs': <Blogs />,
        '/location': <Location />,
        '/users': <Users />,
        '/reviews': <Reviews />,
        '/pending_product_comments': <PendingProductComments />,
        '/approved_product_comments': <ApprovedProductComments />,
        '/pending_blog_comments': <PendingBlogComments />,
        '/approved_blog_comments': <ApprovedBlogComments />,
        '/general_settings': <GeneralSettings />,
    }

    const renderBodyData = bodyContent[location.pathname] || null
    // Login Status Checking
    const loginStatus = useSelector((state) => state?.loginStatus?.value)

    // Navigate to Push 
    const navigate = useNavigate()
    const adminId = sessionStorage.getItem('MogoAdminAccessToken101')
    const { data } = useQuery(
        ['adminData', adminId],
        getAdminByID,
        {
            enabled: !!adminId,
        }
    )

    // Login status Checking
    useEffect(() => {
        if (sessionStorage.getItem('MogoAdminAccessToken102') && sessionStorage.getItem('MogoAdminAccessToken101')) {
            dispatch(setLoginStatus(true))
            // if (data?.data?.data?.email) {
            // }
            // else {
            //     window.location.reload(navigate('/admin'))
            // }
        }
        else {
            window.location.reload(navigate('/admin'))
        }
    }, [sessionStorage.getItem('MogoAdminAccessToken102'), sessionStorage.getItem('MogoAdminAccessToken101')])


    const handleLogout = () => {
        sessionStorage.removeItem('MogoAdminAccessToken101')
        sessionStorage.removeItem('MogoAdminAccessToken102')
    }

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
                            <Link to="/admin_dashboard">
                                <MenuItem component="span" active icon={<i className='fa fa-home' />}>
                                    Home
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Orders"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <SubMenu label="Orders" icon={<i className='fa fa-shopping-cart' />}>
                                <Link to="/orders">
                                    <MenuItem component="span"> Orders</MenuItem>
                                </Link>
                                <Link to="/transactions">
                                    <MenuItem component="span"> Transactions</MenuItem>
                                </Link>
                            </SubMenu>
                        </Tooltip>
                        <Tooltip
                            label="Earnings"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <SubMenu label="Earnings" icon={<i className='fa fa-money' />}>
                                <Link to="/earnings">
                                    <MenuItem component="span"> Earnings</MenuItem>
                                </Link>
                                <Link to="/sellerbalances">
                                    <MenuItem component="span"> Seller Balances</MenuItem>
                                </Link>
                            </SubMenu>
                        </Tooltip>
                        <Tooltip
                            label="Payouts"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <SubMenu label="Payouts" icon={<i className='fa fa-credit-card' />}>
                                <Link to="/addpayout">
                                    <MenuItem component="span"> Add Payout</MenuItem>
                                </Link>
                                <Link to="/payoutrequests">
                                    <MenuItem component="span"> Payout Requests</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Payout Settings</MenuItem>
                                </Link>
                            </SubMenu>
                        </Tooltip>
                        <Tooltip
                            label="Refund Requests"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="/refundrequests">
                                <MenuItem component="span" active icon={<i className='fa fa-flag' />}>
                                    Refund Requests
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
                                <Link to="/productsdetails">
                                    <MenuItem component="span"> Products</MenuItem>
                                </Link>
                                <Link to="/addproduct">
                                    <MenuItem component="span"> Add Product</MenuItem>
                                </Link>
                                <Link to="/special_products">
                                    <MenuItem component="span"> Special Products</MenuItem>
                                </Link>
                                <Link to="/pending_products">
                                    <MenuItem component="span"> Pending Products</MenuItem>
                                </Link>
                                <Link to="/hidden_products">
                                    <MenuItem component="span"> Hidden Products</MenuItem>
                                </Link>
                                <Link to="/expired_products">
                                    <MenuItem component="span"> Expired Products</MenuItem>
                                </Link>
                                <Link to="/sold_products">
                                    <MenuItem component="span"> Sold Products</MenuItem>
                                </Link>
                                <Link to="/drafts_products">
                                    <MenuItem component="span"> Drafts</MenuItem>
                                </Link>
                                <Link to="/deleted_products">
                                    <MenuItem component="span"> Deleted Products</MenuItem>
                                </Link>
                                {/* <Link to="">
                                    <MenuItem component="span"> Bulk Product Upload</MenuItem>
                                </Link> */}
                            </SubMenu>
                        </Tooltip>
                        <Tooltip
                            label="Featured Products"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="/featuredproducts">
                                <MenuItem component="span" active icon={<i className='fa fa-usd' />}>
                                    Featured Products
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Quote Requests"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="/quoterequests">
                                <MenuItem component="span" active icon={<i className='fa fa-tag' />}>
                                    Quote Requests
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Categories"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="/categorylist">
                                <MenuItem component="span" active icon={<i className='fa fa-folder-open' />}>
                                    Categories
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        {/* <Tooltip
                            label="Sub Categories"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <SubMenu label="Sub Categories" icon={<i className='fa fa-folder-open' />}>
                                <Link to="">
                                    <MenuItem component="span"> Sub Categories</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Bulk Sub Category Upload</MenuItem>
                                </Link>
                            </SubMenu>
                        </Tooltip>
                        <Tooltip
                            label="Child Categories"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <SubMenu label="Child Categories" icon={<i className='fa fa-folder-open' />}>
                                <Link to="">
                                    <MenuItem component="span"> Child Categories</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Bulk Child Category Upload</MenuItem>
                                </Link>
                            </SubMenu>
                        </Tooltip> */}
                        <Tooltip
                            label="Blog"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            {/* <SubMenu label="Blog" icon={<i className='fa fa-file-text' />}>
                                <Link to="">
                                    <MenuItem component="span"> Posts</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Categories</MenuItem>
                                </Link>
                            </SubMenu> */}
                            <Link to="/blogs">
                                <MenuItem component="span" active icon={<i className='fa fa-file-text' />}>
                                    Blogs
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Location"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            {/* <SubMenu label="Location" icon={<i className='fa fa-map-marker' />}>
                                <Link to="">
                                    <MenuItem component="span"> Countries</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> States</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Cities</MenuItem>
                                </Link>
                            </SubMenu> */}
                            <Link to="/location">
                                <MenuItem component="span" active icon={<i className='fa fa-map-marker' />}>
                                    Location
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Users"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            {/* <SubMenu label="Users" icon={<i className='fa fa-users' />}>
                                <Link to="">
                                    <MenuItem component="span"> Admin</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Vendors</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Users</MenuItem>
                                </Link>
                            </SubMenu> */}
                            <Link to="/users">
                                <MenuItem component="span" active icon={<i className='fa fa-users' />}>
                                    Users
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Reviews"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="/reviews">
                                <MenuItem component="span" active icon={<i className='fa fa-star' />}>
                                    Reviews
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Comments"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <SubMenu label="Comments" icon={<i className='fa fa-comments' />}>
                                <Link to="/pending_product_comments">
                                    <MenuItem component="span"> Product Comments</MenuItem>
                                </Link>
                                <Link to="/pending_blog_comments">
                                    <MenuItem component="span"> Blog Comments</MenuItem>
                                </Link>
                            </SubMenu>
                        </Tooltip>
                        <Tooltip
                            label="Newsletter"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <Link to="">
                                <MenuItem component="span" active icon={<i className='fa fa-envelope-o' />}>
                                    Newsletter
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="General Settings"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            {/* <SubMenu label="General Settings" icon={<i className='fa fa-cog' />}>
                                <Link to="">
                                    <MenuItem component="span"> General Settings</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Language Settings</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Social Login</MenuItem>
                                </Link>
                            </SubMenu> */}
                            <Link to="/general_settings">
                                <MenuItem component="span" active icon={<i className='fa fa-cog' />}>
                                    General Settings
                                </MenuItem>
                            </Link>
                        </Tooltip>
                        <Tooltip
                            label="Payment Settings"
                            color="teal"
                            position="bottom-end"
                            withArrow
                            disabled={collapsed !== true ? true : false}
                        >
                            <SubMenu label="Payment Settings" icon={<i className='fa fa-credit-card-alt' />}>
                                <Link to="">
                                    <MenuItem component="span"> Payment Settings</MenuItem>
                                </Link>
                                <Link to="">
                                    <MenuItem component="span"> Currency Settings</MenuItem>
                                </Link>
                            </SubMenu>
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
                                        <MenuMantine.Item
                                            onClick={handleLogout}
                                            icon={<i className='fa fa-sign-out' />}>Logout</MenuMantine.Item>
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

export default AdminRouters