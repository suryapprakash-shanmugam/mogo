//import react packages
import React, { useState, useEffect } from 'react'

//import Individual css
import './Individual.css'

//import react-router-dom packages
import { Link } from 'react-router-dom'

// import mantine packages
import { Modal, Card, Badge, Table, Menu as MenuMantine, Select, Button } from '@mantine/core';


// Font Awesome
import 'font-awesome/css/font-awesome.min.css';

import image2 from '../../../../assets/home/grid-category/bed_linen.webp'

const Individual = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // const [Statusopened, { statusopen, statusclose }] = useDisclosure(false);
    const [modalOpen, setModalOpen] = useState(false)
    const ProductOptions = () => (
        <MenuMantine shadow="md" width={200}>
            <MenuMantine.Target>
                <button className='Individual-select-option'>Select an option <i className='fa fa-caret-down'></i></button>
            </MenuMantine.Target>
            <MenuMantine.Dropdown>
                <MenuMantine.Item onClick={() => setModalOpen(true)} icon={<i className='fa fa-edit' />}>Update Order Status</MenuMantine.Item>
                <MenuMantine.Item icon={<i className='fa fa-times' />}>Delete</MenuMantine.Item>
            </MenuMantine.Dropdown>
        </MenuMantine>
    );

    const ProductDetails = [
        {
            ProductId: '32',
            ProductImage: image2,
            ProductDesc: 'Men outerwear navy color (Color: Blue)',
            UploadedBy: 'By Mogo',
            UnitPrice: '$84.15',
            Quantity: '1',
            VAT: '',
            ShippingCost: '$15',
            Total: '$84.15',
            Status: 'Completed',
            Updated: '5 months ago',
            Options: <ProductOptions />, // Use the wrapper component here
        },
        // ... Add more product details
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
            <td>{ProductDetail.Options}</td>
        </tr>
    ));


    return (
        <div>
            <Card shadow="sm" padding="lg" radius="md" withBorder className='card-order-style'>
                <div className="card-order-title">
                    <h3>Order Details</h3>
                    <Link className="individual-view-invoice-btn"><i className='fa fa-file-text-o'></i>&nbsp;&nbsp;&nbsp;View Invoice</Link>
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
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder className='card-order-style margin-card-05'>
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
            </Card>

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
                            <p>$61</p>
                            <p>$30</p>
                        </div>
                    </div>
                    <hr className='Individual-display-amount-right-hr' />
                    <div className="Individual-display-amount-main">
                        <div className="Individual-display-amount-left">
                            <b>Total</b>
                        </div>
                        <div className="Individual-display-amount-right">
                            <p>$91</p>
                        </div>
                    </div>
                </Card>
            </div>



            <Modal
                size={'lg'}
                opened={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Update Order Status"
            >
                <Select
                    label="Status"
                    dropdownPosition="bottom"
                    className='individual-selectbox-style'
                    // placeholder="Pick one"
                    data={[
                        { value: 'Awaiting Payment', label: 'Awaiting Payment' },
                        { value: 'Payment Received', label: 'Payment Received' },
                        { value: 'Processing', label: 'Processing' },
                        { value: 'Shipped', label: 'Shipped' },
                        { value: 'Refund Approved', label: 'Refund Approved' },
                    ]}
                />
                <div className="model-btn-style">
                    <Button color="teal">
                        Save Changes
                    </Button>
                    <Button color="red" onClick={() => setModalOpen(false)}>
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

export default Individual