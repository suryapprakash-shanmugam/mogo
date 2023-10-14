import React, { useEffect } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom';


// Font Awesome Icons
import 'font-awesome/css/font-awesome.min.css';



// Tabler Icons
import { Basket, Plus } from 'tabler-icons-react';


// Mantine Core
import { Accordion, Card, Table } from '@mantine/core';

import PieChart from '../../../components/Vendor/PieChart/PieChart'
import LineChart from '../../../components/Vendor/LineChart/LineChart'


// Images
import image1 from '../../../assets/home/grid-category/baby_linen.webp'
import image2 from '../../../assets/home/grid-category/bed_linen.webp'


const Dashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const LatestOrders = [
        { Order: '#10005', Total: '₹91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
        { Order: '#10005', Total: '₹91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
        { Order: '#10005', Total: '₹91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
        { Order: '#10005', Total: '₹91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
        { Order: '#10005', Total: '₹91', Status: 'Processing', Date: '2023-07-28 / 12:44', Details: 'Details', path: "/individualorder" },
    ];
    const LatestOrdersrows = LatestOrders.map((LatestOrder, index) => (
        <tr key={index}>
            <td>{LatestOrder.Order}</td>
            <td>{LatestOrder.Total}</td>
            <td>{LatestOrder.Status}</td>
            <td>{LatestOrder.Date}</td>
            <td>
                <Link className="vendor-dashboard-details-link" to={LatestOrder.path}>{LatestOrder.Details} </Link>
            </td>
        </tr>
    ));
    const LatestTransactions = [
        { Id: '01', Order: '#10005', PaymentAmount: '₹91', PaymentMethod: '	Bank Transfer', Status: 'Processing', Date: '2023-07-28 / 12:44' },
        { Id: '01', Order: '#10005', PaymentAmount: '₹91', PaymentMethod: '	Bank Transfer', Status: 'Processing', Date: '2023-07-28 / 12:44' },
        { Id: '01', Order: '#10005', PaymentAmount: '₹91', PaymentMethod: '	Bank Transfer', Status: 'Processing', Date: '2023-07-28 / 12:44' },
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
                <Link className="vendor-dashboard-details-link" to={LatestProduct.path}>{LatestProduct.Details} </Link>
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
                <Link className="vendor-dashboard-details-link" to={LatestPendingProduct.path}>{LatestPendingProduct.Details} </Link>
            </td>
        </tr>
    ));
    const LatestTransactionsFeatured = [
        { Id: '01', PaymentMethod: 'Bank Transfer', PaymentAmount: '₹91', Status: 'Processing', Date: '2023-07-28 / 12:44' },
        { Id: '01', PaymentMethod: 'Bank Transfer', PaymentAmount: '₹91', Status: 'Processing', Date: '2023-07-28 / 12:44' },
        { Id: '01', PaymentMethod: 'Bank Transfer', PaymentAmount: '₹91', Status: 'Processing', Date: '2023-07-28 / 12:44' },
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
            <div className="vendor-dashboard">
                <div className="vendor-dashboard-show-count-main-div">
                    <div className="vendor-dashboard-show-count-orders">
                        <div className="vendor-dashboard-show-count-orders-left">
                            <h1>5</h1>
                            <p>Orders</p>
                        </div>
                        <div className="vendor-dashboard-show-count-orders-right">
                            <Link to="/admindashboard/orders">
                                <i className='fa fa-shopping-cart'></i>
                            </Link>
                        </div>
                    </div>
                    <div className="vendor-dashboard-show-count-users">
                        <div className="vendor-dashboard-show-count-users-left">
                            <h1>5</h1>
                            <p>Balance</p>
                        </div>
                        <div className="vendor-dashboard-show-count-users-right">
                            <Link to="/admindashboard/users_users">
                                <i className='fa fa-money'></i>
                            </Link>
                        </div>
                    </div>
                    <div className="vendor-dashboard-show-count-products">
                        <div className="vendor-dashboard-show-count-products-left">
                            <h1>5</h1>
                            <p>Products</p>
                        </div>
                        <div className="vendor-dashboard-show-count-products-right">
                            <Link to="/admindashboard/products">
                                <Basket
                                    size={38}
                                    strokeWidth={2}
                                    className="vendor-dashboard-show-count-tabler-icons"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="vendor-dashboard-show-count-sales-amount">
                        <div className="vendor-dashboard-show-count-sales-amount-left">
                            <h1>5</h1>
                            <p>Pending Products</p>
                        </div>
                        <div className="vendor-dashboard-show-count-sales-amount-right">
                            <Link to="/admindashboard/transactions">
                                <i className='fa fa-money'></i>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="vendor-dashboard-chart">
                    <Card className='vendor-dashboard-chart-pie-chart'>
                        <PieChart />
                    </Card>
                    <Card className='vendor-dashboard-chart-line-chart' style={{ height: '400px' }}>
                        <LineChart />
                    </Card>
                </div>
                <div className="vendor-dashboard-show-latest">
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
                                    <thead className='vendor-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Order</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className='vendor-dashboard-show-latest-table-td'>{LatestOrdersrows}</tbody>
                                </Table>
                                <div className="vendor-dashboard-show-latest-show-more-main">
                                    <div className="vendor-dashboard-show-latest-show-more">
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
                                    <thead className='vendor-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Id</th>
                                            <th>UserName</th>
                                            <th>Review</th>
                                        </tr>
                                    </thead>
                                    <tbody className='vendor-dashboard-show-latest-table-td'>{LatestReviewsrows}</tbody>
                                </Table>
                                <div className="vendor-dashboard-show-latest-show-more-main">
                                    <div className="vendor-dashboard-show-latest-show-more">
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
                                    <thead className='vendor-dashboard-show-latest-table-th'>
                                        <tr>
                                            <th>Id</th>
                                            <th>UserName</th>
                                            <th>Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody className='vendor-dashboard-show-latest-table-td'>{LatestCommentsrows}</tbody>
                                </Table>
                                <div className="vendor-dashboard-show-latest-show-more-main">
                                    <div className="vendor-dashboard-show-latest-show-more">
                                        <Link to="/admindashboard/product_comments">View All</Link>
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