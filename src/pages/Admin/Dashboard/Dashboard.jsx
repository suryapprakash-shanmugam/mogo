import React, { useEffect } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom';


// Font Awesome Icons
import 'font-awesome/css/font-awesome.min.css';



// Tabler Icons
import { Basket, Plus } from 'tabler-icons-react';


// Mantine Core
import { Accordion, Table } from '@mantine/core';


// Images
import image1 from '../../../assets/home/grid-category/baby_linen.webp'
import image2 from '../../../assets/home/grid-category/bed_linen.webp'


const Dashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const LatestOrders = [
        { Order: '#10005', Total: '$91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
        { Order: '#10005', Total: '$91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
        { Order: '#10005', Total: '$91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
        { Order: '#10005', Total: '$91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
        { Order: '#10005', Total: '$91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
    ];
    const LatestOrdersrows = LatestOrders.map((LatestOrder, index) => (
        <tr key={index}>
            <td>{LatestOrder.Order}</td>
            <td>{LatestOrder.Total}</td>
            <td>{LatestOrder.Status}</td>
            <td>{LatestOrder.Date}</td>
            <td>
                <Link className="admin-dashboard-details-link" to={LatestOrder.path}>{LatestOrder.Details} </Link>
            </td>
        </tr>
    ));
    const LatestTransactions = [
        { Id: '01', Order: '#10005', PaymentAmount: '$91', PaymentMethod: '	Bank Transfer', Status: 'Processing', Date: '2023-07-28 / 12:44' },
        { Id: '01', Order: '#10005', PaymentAmount: '$91', PaymentMethod: '	Bank Transfer', Status: 'Processing', Date: '2023-07-28 / 12:44' },
        { Id: '01', Order: '#10005', PaymentAmount: '$91', PaymentMethod: '	Bank Transfer', Status: 'Processing', Date: '2023-07-28 / 12:44' },
    ];
    const LatestTransactionsrows = LatestTransactions.map((LatestTransaction, index) => (
        <tr key={index}>
            <td>{LatestTransaction.Id}</td>
            <td>{LatestTransaction.Order}</td>
            <td>{LatestTransaction.PaymentAmount}</td>
            <td>{LatestTransaction.PaymentMethod}</td>
            <td>{LatestTransaction.Status}</td>
            <td>{LatestTransaction.Date}</td>
        </tr>
    ));
    const LatestProducts = [
        { Id: '01', Name: 'Hygro 100% Cotton Single Duvet Cover-White', UploadedTime: '5 months ago', image: image1, Details: 'Details', path: "/admindashboard/individualproduct" },
        { Id: '01', Name: 'Hygro 100% Cotton Single Duvet Cover-White', UploadedTime: '5 months ago', image: image1, Details: 'Details', path: "/admindashboard/individualproduct" },
        { Id: '01', Name: 'Hygro 100% Cotton Single Duvet Cover-White', UploadedTime: '5 months ago', image: image1, Details: 'Details', path: "/admindashboard/individualproduct" },
    ];
    const LatestProductsrows = LatestProducts.map((LatestProduct, index) => (
        <tr key={index} className='LatestProducts-Table-tr-style'>
            <td>{LatestProduct.Id}</td>
            <td className='LatestProducts-Table-td-style'>
                <div className="LatestProducts-Table-td-style-image">
                    <img src={LatestProduct.image} alt="" />
                </div>
                <div className="LatestProducts-Table-td-style-title">
                    <p>{LatestProduct.Name}</p>
                    <span>{LatestProduct.Name}</span>
                </div>
            </td>
            <td>
                <Link className="admin-dashboard-details-link" to={LatestProduct.path}>{LatestProduct.Details} </Link>
            </td>
        </tr>
    ));
    const LatestPendingProducts = [
        { Id: '01', Name: 'Hygro 100% Cotton Single Duvet Cover-White', UploadedTime: '5 months ago', image: image1, Details: 'Details', path: "/admindashboard/individualproduct" },
        { Id: '01', Name: 'Hygro 100% Cotton Single Duvet Cover-White', UploadedTime: '5 months ago', image: image1, Details: 'Details', path: "/admindashboard/individualproduct" },
    ];
    const LatestPendingProductsrows = LatestPendingProducts.map((LatestPendingProduct, index) => (
        <tr key={index} className='LatestProducts-Table-tr-style'>
            <td>{LatestPendingProduct.Id}</td>
            <td className='LatestProducts-Table-td-style'>
                <div className="LatestProducts-Table-td-style-image">
                    <img src={LatestPendingProduct.image} alt="" />
                </div>
                <div className="LatestProducts-Table-td-style-title">
                    <p>{LatestPendingProduct.Name}</p>
                    <span>{LatestPendingProduct.Name}</span>
                </div>
            </td>
            <td>
                <Link className="admin-dashboard-details-link" to={LatestPendingProduct.path}>{LatestPendingProduct.Details} </Link>
            </td>
        </tr>
    ));
    const LatestTransactionsFeatured = [
        { Id: '01', PaymentMethod: 'Bank Transfer', PaymentAmount: '$91', Status: 'Processing', Date: '2023-07-28 / 12:44' },
        { Id: '01', PaymentMethod: 'Bank Transfer', PaymentAmount: '$91', Status: 'Processing', Date: '2023-07-28 / 12:44' },
        { Id: '01', PaymentMethod: 'Bank Transfer', PaymentAmount: '$91', Status: 'Processing', Date: '2023-07-28 / 12:44' },
    ];
    const LatestTransactionsFeaturedrows = LatestTransactionsFeatured.map((LatestTransactionFeatured, index) => (
        <tr key={index}>
            <td>{LatestTransactionFeatured.Id}</td>
            <td>{LatestTransactionFeatured.PaymentMethod}</td>
            <td>{LatestTransactionFeatured.PaymentAmount}</td>
            <td>{LatestTransactionFeatured.Status}</td>
            <td>{LatestTransactionFeatured.Date}</td>
        </tr>
    ));
    const LatestReviews = [
        { Id: '01', Username: 'User 1', Review: 'This is a good product from best vendor' },
        { Id: '01', Username: 'User 1', Review: 'This is a good product from best vendor' },
        { Id: '01', Username: 'User 1', Review: 'This is a good product from best vendor' },
    ];
    const LatestReviewsrows = LatestReviews.map((LatestReview, index) => (
        <tr key={index}>
            <td>{LatestReview.Id}</td>
            <td>{LatestReview.Username}</td>
            <td>{LatestReview.Review}</td>
        </tr>
    ));
    const LatestComments = [
        { Id: '01', Username: 'User 1', Comment: 'This is a good product from best vendor', CommentDate: '5 months ago' },
        { Id: '01', Username: 'User 1', Comment: 'This is a good product from best vendor', CommentDate: '5 months ago' },
        { Id: '01', Username: 'User 1', Comment: 'This is a good product from best vendor', CommentDate: '5 months ago' },
    ];
    const LatestCommentsrows = LatestComments.map((LatestComment, index) => (
        <tr key={index}>
            <td>{LatestComment.Id}</td>
            <td>{LatestComment.Username}</td>
            <td>
                <div className="LatestProducts-Table-td-style-title">
                    <p>{LatestComment.Comment}</p>
                    <span>{LatestComment.CommentDate}</span>
                </div>
            </td>
        </tr>
    ));
    const LatestMembers = [
        { userimage: image2, username: 'Mogo', userlastlogin: '2 days ago' },
        { userimage: image2, username: 'Mogo', userlastlogin: '2 days ago' },
        { userimage: image2, username: 'Mogo', userlastlogin: '2 days ago' },
        { userimage: image2, username: 'Mogo', userlastlogin: '2 days ago' },
        { userimage: image2, username: 'Mogo', userlastlogin: '2 days ago' },
    ]
    return (
        <div>
            <div className="admin-dashboard">
                <div className="admin-dashboard-show-count-main-div">
                    <div className="admin-dashboard-show-count-orders">
                        <div className="admin-dashboard-show-count-orders-left">
                            <h1>5</h1>
                            <p>Orders</p>
                        </div>
                        <div className="admin-dashboard-show-count-orders-right">
                            <Link to="/admindashboard/orders">
                                <i className='fa fa-shopping-cart'></i>
                            </Link>
                        </div>
                    </div>
                    <div className="admin-dashboard-show-count-products">
                        <div className="admin-dashboard-show-count-products-left">
                            <h1>5</h1>
                            <p>Products</p>
                        </div>
                        <div className="admin-dashboard-show-count-products-right">
                            <Link to="/admindashboard/products">
                                <Basket
                                    size={38}
                                    strokeWidth={2}
                                    className="admin-dashboard-show-count-tabler-icons"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="admin-dashboard-show-count-sales-amount">
                        <div className="admin-dashboard-show-count-sales-amount-left">
                            <h1>5</h1>
                            <p>Sales Amount</p>
                        </div>
                        <div className="admin-dashboard-show-count-sales-amount-right">
                            <Link to="/admindashboard/transactions">
                                <i className='fa fa-money'></i>
                            </Link>
                        </div>
                    </div>
                    <div className="admin-dashboard-show-count-users">
                        <div className="admin-dashboard-show-count-users-left">
                            <h1>5</h1>
                            <p>Users</p>
                        </div>
                        <div className="admin-dashboard-show-count-users-right">
                            <Link to="/admindashboard/users_users">
                                <i className='fa fa-users'></i>
                            </Link>
                        </div>
                    </div>
                    <div className="admin-dashboard-show-count-vendors">
                        <div className="admin-dashboard-show-count-vendors-left">
                            <h1>5</h1>
                            <p>Vendors</p>
                        </div>
                        <div className="admin-dashboard-show-count-vendors-right">
                            <Link to="/admindashboard/users_users">
                                <i className='fa fa-users'></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="admin-dashboard-show-latest">
                    <Accordion
                        radius="lg"
                        variant="separated"
                        transitionDuration={1000}
                        defaultValue="Latest Orders"
                        chevron={<Plus size="1rem" />}
                        styles={{
                            chevron: {
                                '&[data-rotate]': {
                                    transform: 'rotate(45deg)',
                                },
                            },
                        }}>
                        <Accordion.Item
                            value="Latest Orders"
                        >
                            <Accordion.Control>Latest Orders</Accordion.Control>
                            <Accordion.Panel>
                                <Table highlightOnHover>
                                    <thead className='admin-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Order</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className='admin-dashboard-show-latest-table-td'>{LatestOrdersrows}</tbody>
                                </Table>
                                <div className="admin-dashboard-show-latest-show-more-main">
                                    <div className="admin-dashboard-show-latest-show-more">
                                        <Link to="/admindashboard/orders">View All</Link>
                                    </div>
                                </div>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion
                        radius="lg"
                        variant="separated"
                        transitionDuration={1000}
                        defaultValue="Latest Transactions"
                        chevron={<Plus size="1rem" />}
                        styles={{
                            chevron: {
                                '&[data-rotate]': {
                                    transform: 'rotate(45deg)',
                                },
                            },
                        }}
                    >
                        <Accordion.Item
                            value="Latest Transactions"
                        >
                            <Accordion.Control>Latest Transactions</Accordion.Control>
                            <Accordion.Panel>
                                <Table highlightOnHover>
                                    <thead className='admin-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Id</th>
                                            <th>Order</th>
                                            <th>Payment Amount</th>
                                            <th>Payment Method</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className='admin-dashboard-show-latest-table-td'>{LatestTransactionsrows}</tbody>
                                </Table>
                                <div className="admin-dashboard-show-latest-show-more-main">
                                    <div className="admin-dashboard-show-latest-show-more">
                                        <Link to="/admindashboard/transactions">View All</Link>
                                    </div>
                                </div>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion
                        radius="lg"
                        variant="separated"
                        transitionDuration={1000}
                        defaultValue="Latest Products"
                        chevron={<Plus size="1rem" />}
                        styles={{
                            chevron: {
                                '&[data-rotate]': {
                                    transform: 'rotate(45deg)',
                                },
                            },
                        }}
                    >
                        <Accordion.Item
                            value="Latest Products"
                        >
                            <Accordion.Control>Latest Products</Accordion.Control>
                            <Accordion.Panel>
                                <Table highlightOnHover>
                                    <thead className='admin-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className='admin-dashboard-show-latest-table-td'>{LatestProductsrows}</tbody>
                                </Table>
                                <div className="admin-dashboard-show-latest-show-more-main">
                                    <div className="admin-dashboard-show-latest-show-more">
                                        <Link to="/admindashboard/transactions">View All</Link>
                                    </div>
                                </div>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion
                        radius="lg"
                        variant="separated"
                        transitionDuration={1000}
                        defaultValue="Latest Pending Products"
                        chevron={<Plus size="1rem" />}
                        styles={{
                            chevron: {
                                '&[data-rotate]': {
                                    transform: 'rotate(45deg)',
                                },
                            },
                        }}
                    >
                        <Accordion.Item
                            value="Latest Pending Products"
                        >
                            <Accordion.Control>Latest Pending Products</Accordion.Control>
                            <Accordion.Panel>
                                <Table highlightOnHover>
                                    <thead className='admin-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className='admin-dashboard-show-latest-table-td'>{LatestPendingProductsrows}</tbody>
                                </Table>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion
                        radius="lg"
                        variant="separated"
                        transitionDuration={1000}
                        defaultValue="Latest Transactions (Featured Products)"
                        chevron={<Plus size="1rem" />}
                        styles={{
                            chevron: {
                                '&[data-rotate]': {
                                    transform: 'rotate(45deg)',
                                },
                            },
                        }}
                    >
                        <Accordion.Item
                            value="Latest Transactions (Featured Products)"
                        >
                            <Accordion.Control>Latest Transactions <span>(Featured Products)</span></Accordion.Control>
                            <Accordion.Panel>
                                <Table highlightOnHover>
                                    <thead className='admin-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Id</th>
                                            <th>Payment Method</th>
                                            <th>Payment Amount</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className='admin-dashboard-show-latest-table-td'>{LatestTransactionsFeaturedrows}</tbody>
                                </Table>
                                <div className="admin-dashboard-show-latest-show-more-main">
                                    <div className="admin-dashboard-show-latest-show-more">
                                        <Link to="/admindashboard/featured_products_transactions">View All</Link>
                                    </div>
                                </div>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion
                        radius="lg"
                        variant="separated"
                        transitionDuration={1000}
                        defaultValue="Latest Reviews"
                        chevron={<Plus size="1rem" />}
                        styles={{
                            chevron: {
                                '&[data-rotate]': {
                                    transform: 'rotate(45deg)',
                                },
                            },
                        }}
                    >
                        <Accordion.Item
                            value="Latest Reviews"
                        >
                            <Accordion.Control>Latest Reviews</Accordion.Control>
                            <Accordion.Panel>
                                <Table highlightOnHover>
                                    <thead className='admin-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Id</th>
                                            <th>UserName</th>
                                            <th>Review</th>
                                        </tr>
                                    </thead>
                                    <tbody className='admin-dashboard-show-latest-table-td'>{LatestReviewsrows}</tbody>
                                </Table>
                                <div className="admin-dashboard-show-latest-show-more-main">
                                    <div className="admin-dashboard-show-latest-show-more">
                                        <Link to="/admindashboard/reviews">View All</Link>
                                    </div>
                                </div>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion
                        radius="lg"
                        variant="separated"
                        transitionDuration={1000}
                        defaultValue="Latest Comments"
                        chevron={<Plus size="1rem" />}
                        styles={{
                            chevron: {
                                '&[data-rotate]': {
                                    transform: 'rotate(45deg)',
                                },
                            },
                        }}
                    >
                        <Accordion.Item
                            value="Latest Comments"
                        >
                            <Accordion.Control>Latest Comments</Accordion.Control>
                            <Accordion.Panel>
                                <Table highlightOnHover>
                                    <thead className='admin-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Id</th>
                                            <th>UserName</th>
                                            <th>Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody className='admin-dashboard-show-latest-table-td'>{LatestCommentsrows}</tbody>
                                </Table>
                                <div className="admin-dashboard-show-latest-show-more-main">
                                    <div className="admin-dashboard-show-latest-show-more">
                                        <Link to="/admindashboard/product_comments">View All</Link>
                                    </div>
                                </div>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion
                        radius="lg"
                        variant="separated"
                        transitionDuration={1000}
                        defaultValue="Latest Members"
                        chevron={<Plus size="1rem" />}
                        styles={{
                            chevron: {
                                '&[data-rotate]': {
                                    transform: 'rotate(45deg)',
                                },
                            },
                        }}
                    >
                        <Accordion.Item
                            value="Latest Members"
                        >
                            <Accordion.Control>Latest Members</Accordion.Control>
                            <Accordion.Panel>
                                <div className="latestmembers-container">
                                    {
                                        LatestMembers.map(
                                            (Latestmember, index) => {
                                                return (
                                                    <div key={index} className="latestmembers-content">
                                                        <div className="latestmembers-content-image">
                                                            <img src={Latestmember.userimage} alt="" />
                                                        </div>
                                                        <h4>{Latestmember.username}</h4>
                                                        <p>{Latestmember.userlastlogin}</p>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                                <div className="admin-dashboard-show-latest-show-more-main">
                                    <div className="admin-dashboard-show-latest-show-more">
                                        <Link to="/admindashboard/users_users">View All</Link>
                                    </div>
                                </div>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Dashboard