//import react packages
import { Card, Text } from '@mantine/core'
import React from 'react'

//import IndividualRefund css
import './IndividualRefund.css'

//import react router dom packages
import { Link } from 'react-router-dom'

//import icons
import list from '../../../../assets/admin/payout/list.png'

const IndividualRefund = () => {
    return (
        <div>
            <div className="individual-refund-div">
                <Card className='individual-refund-div-card'>
                    <div className="individual-refund-div-card-heading">
                        <h3>Refund</h3>
                        <Text component={Link} to="/refundrequests">
                            <button><img src={list} width={14} alt='list icon' />Refund Requests</button>
                        </Text>
                    </div>
                    <div className="individual-refund-div-card-body">
                        <div className="individual-refund-div-card-body-heading">
                            <p>Product: <Text component={Link} to="/individualorder">#10005 - Motivation piano with cello and drums</Text></p>
                        </div>
                        <div className="individual-refund-div-card-body-main-table">
                            <table className="individual-refund-div-card-body-table">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Total</th>
                                        <th>Buyer</th>
                                        <th>Seller</th>
                                        <th>Last Update</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Processing</td>
                                        <td>$19</td>
                                        <td>Trendshop</td>
                                        <td>Admin</td>
                                        <td>7 months ago</td>
                                        <td>2023-02-28 / 06:39</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='hr-line' />
                        <div className="individual-refund-div-card-body-content">
                            <div className="individual-refund-div-card-body-content-individual">
                                <div className="individual-refund-div-card-body-content-individual-image">

                                </div>
                                <div className="individual-refund-div-card-body-content-individual-content">
                                    <div className="individual-refund-div-card-body-content-individual-content-heading">
                                        <h5>Trendshop</h5>
                                        <p>7 months ago</p>
                                    </div>
                                    <div className="individual-refund-div-card-body-content-individual-content-content">
                                        <p>I want refund</p>
                                    </div>
                                </div>
                            </div>
                            <div className="individual-refund-div-card-body-content-individual">
                                <div className="individual-refund-div-card-body-content-individual-image">

                                </div>
                                <div className="individual-refund-div-card-body-content-individual-content">
                                    <div className="individual-refund-div-card-body-content-individual-content-heading">
                                        <h5>Trendshop</h5>
                                        <p>7 months ago</p>
                                    </div>
                                    <div className="individual-refund-div-card-body-content-individual-content-content">
                                        <p>I want refund</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default IndividualRefund