//import react packages
import React from 'react'

//import mantine packages
import { Card, Text } from '@mantine/core'

//import react router dom packages
import { Link } from 'react-router-dom'

//import RefundRequests css
import './RefundRequests.css'

//import icons
import info from '../../../assets/admin/table/dropdown/info.png'
import check from '../../../assets/admin/table/dropdown/check.png'
import checkfilled from '../../../assets/admin/table/dropdown/check-filled.png'

const RefundRequests = () => {
    return (
        <div>
            <div className="refund-requests-div">
                <Card className='refund-requests-div-card'>
                    <div className="refund-requests-div-card-heading">
                        <h3>Refund Requests</h3>
                    </div>
                    <div className="refund-requests-div-card-body">
                        <div className="refund-requests-div-card-body-main">
                            <table className='refund-requests-div-card-body-table'>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                        <th>Buyer</th>
                                        <th>Status</th>
                                        <th>Updated</th>
                                        <th>Date</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Text component={Link} to="/individualorder">
                                                #10005 - Motivation piano with cello and drums
                                            </Text>
                                        </td>
                                        <td>$19</td>
                                        <td>Admin</td>
                                        <td>Processing</td>
                                        <td>7 months ago</td>
                                        <td>2023-02-28 / 06:39</td>
                                        <td>
                                            <div className="refund-requests-div-card-body-table-button">
                                                <Text component={Link} to="/vendor_individualrefund">
                                                    <button className='refund-requests-div-card-body-table-button-details'><img src={info} alt='' width={12} />Details</button>
                                                </Text>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Text component={Link} to="/individualorder">
                                                #10005 - Motivation piano with cello and drums
                                            </Text>
                                        </td>
                                        <td>$19</td>
                                        <td>Admin</td>
                                        <td>Processing</td>
                                        <td>7 months ago</td>
                                        <td>2023-02-28 / 06:39</td>
                                        <td>
                                            <div className="refund-requests-div-card-body-table-button">
                                                <Text component={Link} to="/vendor_individualrefund">
                                                    <button className='refund-requests-div-card-body-table-button-details'><img src={info} alt='' width={12} />Details</button>
                                                </Text>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default RefundRequests