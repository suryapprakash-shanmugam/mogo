import { Input, Rating, Text, Textarea } from '@mantine/core';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb'
import list from '../../../assets/admin/payout/list.png'
import './UserOrdersIndividual.css'
import image2 from '../../../assets/home/grid-category/bed_linen.webp'
import { Modal, Card, Badge, Table, Menu as MenuMantine, Select, Button } from '@mantine/core';
const UserOrdersIndividual = () => {

    const [ratingModalOpen, setratingModalOpen] = useState(false)

    // array for breadcrumb
    const items = [
        { title: 'Home', href: '/' },
        { title: 'User Orders', href: '/your_orders' },
        { title: 'Order 001', href: '/your_orders_individual' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // const [Statusopened, { statusopen, statusclose }] = useDisclosure(false);
    const [modalOpen, setModalOpen] = useState(false)

    const ProductDetails = [
        {
            ProductId: '32',
            ProductImage: image2,
            ProductDesc: 'Men outerwear navy color (Color: Blue)',
            UploadedBy: 'By Mogo',
            UnitPrice: '₹84.15',
            Quantity: '1',
            VAT: '',
            ShippingCost: '₹15',
            Total: '₹84.15',
            Status: 'Completed',
            Updated: '5 months ago',
            Rating: '0',
        },
    ];

    const ProductDetailsRows = ProductDetails.map((ProductDetail, index) => (
        <tr key={index}>
            <td>{ProductDetail.ProductId}</td>
            <td className='LatestProducts-Table-td-style'>
                <div>
                    <div className="LatestProducts-Table-td-style-image">
                        <img src={ProductDetail.ProductImage} alt="" />
                    </div>
                    <div className="LatestProducts-Table-td-style-title">
                        <p>{ProductDetail.ProductDesc}</p>
                        <span>{ProductDetail.UploadedBy}</span>
                    </div>
                </div>
            </td>
            <td>{ProductDetail.UnitPrice}</td>
            <td>{ProductDetail.Quantity}</td>
            <td>{ProductDetail.VAT}</td>
            <td>{ProductDetail.ShippingCost}</td>
            <td>{ProductDetail.Total}</td>
            <td>{ProductDetail.Status}</td>
            <td>{ProductDetail.Updated}</td>
            <td><Rating onClick={() => { setratingModalOpen(true) }} value={ProductDetail.Rating} /></td>
        </tr>
    ));


    return (
        <div>
            <div className='user-orders-individual-div'>


                <div shadow="sm" padding="lg" radius="md" withBorder className='user-orders-individual-div-container'>
                    <div className="category-div-container-breadcrumb">
                        <Breadcrumb value={items} />
                    </div>
                    <div className="user-orders-individual-div-container-heading">
                        <h3>Order Details</h3>
                        <Text component={Link} to="/your_orders">
                            <button className='sales-button user-orders-button-style'><img src={list} width={12} alt="list icon" /> Orders</button>
                        </Text>
                    </div>
                    <div className="card-order-full-details">
                        <div className="card-order-full-details-left-main">
                            <div className="card-order-full-details-left-head">
                                <h4>Order#10005</h4>
                            </div>
                            <div className="card-order-full-details-left-content">
                                <div className="card-order-full-details-left-left">
                                    <ul>
                                        <li>Status</li>
                                        <li>Order Id</li>
                                        <li>Order Number</li>
                                        <li>Payment Method</li>
                                        <li>Currency</li>
                                        <li>Payment Status</li>
                                        <li>Updated</li>
                                        <li>Date</li>
                                    </ul>
                                </div>
                                <div className="card-order-full-details-left-right">
                                    <ul>
                                        <li><Badge color="gray" radius="sm">Processing</Badge></li>
                                        <li>5</li>
                                        <li>10005</li>
                                        <li>Bank Transfer</li>
                                        <li>USD</li>
                                        <li>Awaiting Payment</li>
                                        <li>2023-07-28 / 12:44 (15 days ago)</li>
                                        <li>2023-07-28 / 12:44 (15 days ago)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-order-full-details-right-main">
                            <div className="card-order-full-details-right-head">
                                <h4>Buyer</h4>
                            </div>
                            <div className="card-order-full-details-right-content-main">
                                <div className="card-order-full-details-right-left-image">
                                    <img src={image2} alt="" />
                                </div>
                                <div className='card-order-full-details-right-content'>
                                    <div className="card-order-full-details-right-left">
                                        <ul>
                                            <li>Buyer</li>
                                            <li>Phone Number</li>
                                            <li>Email</li>
                                        </ul>
                                    </div>
                                    <div className="card-order-full-details-right-right">
                                        <ul>
                                            <li>Manoj D</li>
                                            <li>9688885330</li>
                                            <li>manoj.keerthu17@gmail.com</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-order-full-details padding-05">
                        <div className="card-order-full-details-left-main">
                            <div className="card-order-full-details-left-head">
                                <h4>Billing Address</h4>
                            </div>
                            <div className="card-order-full-details-left-content">
                                <div className="card-order-full-details-left-left">
                                    <ul>
                                        <li>First Name</li>
                                        <li>Last Name</li>
                                        <li>Email</li>
                                        <li>Phone Number</li>
                                        <li>Address</li>
                                        <li>Country</li>
                                        <li>State</li>
                                        <li>City</li>
                                        <li>Zip Code</li>
                                    </ul>
                                </div>
                                <div className="card-order-full-details-left-right">
                                    <ul>
                                        <li>Manoj</li>
                                        <li>D</li>
                                        <li>manoj.keerthu17@gmail.com</li>
                                        <li>9688885330</li>
                                        <li>4th Cross Road, sengunthapuram</li>
                                        <li>India</li>
                                        <li>Tamil Nadu</li>
                                        <li>Karur</li>
                                        <li>639002</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="card-order-full-details-right-main">
                            <div className="card-order-full-details-right-head">
                                <h4>Shipping Address</h4>
                            </div>
                            <div className="card-order-full-details-right-content-main">
                                <div className='card-order-full-details-right-content'>
                                    <div className="card-order-full-details-left-left">
                                        <ul>
                                            <li>First Name</li>
                                            <li>Last Name</li>
                                            <li>Email</li>
                                            <li>Phone Number</li>
                                            <li>Address</li>
                                            <li>Country</li>
                                            <li>State</li>
                                            <li>City</li>
                                            <li>Zip Code</li>
                                        </ul>
                                    </div>
                                    <div className="card-order-full-details-left-right">
                                        <ul>
                                            <li>Manoj</li>
                                            <li>D</li>
                                            <li>manoj.keerthu17@gmail.com</li>
                                            <li>9688885330</li>
                                            <li>4th Cross Road, sengunthapuram</li>
                                            <li>India</li>
                                            <li>Tamil Nadu</li>
                                            <li>Karur</li>
                                            <li>639002</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div shadow="sm" padding="lg" radius="md" withBorder className='user-orders-individual-div-container'>
                    <div className="card-order-title">
                        <h3>Products</h3>
                    </div>
                    <div className="card-order-full-details">
                        <Table verticalSpacing="sm" highlightOnHover withBorder withColumnBorders>
                            <thead>
                                <tr>
                                    <th>Product Id</th>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>VAT</th>
                                    <th>Shipping Cost</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Updated</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>{ProductDetailsRows}</tbody>
                        </Table>
                    </div>
                    <div className="temp">
                        <div></div>
                        <div></div>
                        <Card shadow="sm" padding="lg" className='Individual-display-amount'>
                            <div className="Individual-display-amount-main">
                                <div className="Individual-display-amount-left">
                                    <b>Subtotal</b>
                                    <b>Shipping</b>
                                </div>
                                <div className="Individual-display-amount-right">
                                    <p>₹61</p>
                                    <p>₹30</p>
                                </div>
                            </div>
                            <hr className='Individual-display-amount-right-hr' />
                            <div className="Individual-display-amount-main">
                                <div className="Individual-display-amount-left">
                                    <b>Total</b>
                                </div>
                                <div className="Individual-display-amount-right">
                                    <p>₹91</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <Modal
                    zIndex={1212111}
                    centered
                    size="xl"
                    opened={ratingModalOpen}
                    onClose={() => setratingModalOpen(false)}
                    title=""
                    transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                    className='sellerbalance-edit-modal'
                >
                    <div className="sellerbalance-edit-modal-header">
                        <h4>Rate This Product</h4>
                    </div>
                    <div className="sellerbalance-edit-modal-body">
                        <div className="sellerbalance-edit-modal-body-content">
                            <div className="user-rating-div">
                                <p>Rating</p>
                                <Rating value={0} />
                            </div>
                            <div className="user-profile-form-input">
                                <Textarea
                                    placeholder="Write a Review ...."
                                    minRows={4}
                                />
                            </div>
                            <div className="sellerbalance-edit-modal-body-content-button ht-20 user-review-model-button">
                                <button className='user-review-model-button-close' onClick={() => setratingModalOpen(false)}>Close</button>
                                <button>Submit</button>

                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default UserOrdersIndividual