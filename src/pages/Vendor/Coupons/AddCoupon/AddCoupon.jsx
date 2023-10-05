import { Card, Text } from '@mantine/core'
import React, { useState } from 'react'
import './AddCoupon.css'
import list from '../../../../assets/admin/payout/list.png'
import { Link } from 'react-router-dom'
import Coupon from '../../../../components/Admin/Coupon/Coupon'
import NumericInput from '../../../../components/UI/Input/NumericInput'
const AddCoupon = () => {

    const [numberofDaysmaxValue, setNumberofDaysMaxValue] = useState('');
    const [numberofCouponsmaxValue, setNumberofCouponsMaxValue] = useState('');
    const [orderAmountmaxValue, setOrderAmountMaxValue] = useState('');
    return (
        <div>
            <div className="addcoupon-div">
                <Card className='addcoupon-div-card'>
                    <div className="addcoupon-div-card-heading">
                        <h4>Add Coupon</h4>
                        <Text component={Link} to="/vendor_coupons">
                            <button><img src={list} width={14} alt="list icon" />Coupons</button>
                        </Text>
                    </div>
                    <div className="addcoupon-div-card-content">
                        <Coupon />
                        <div className="addcoupon-div-card-content-input">
                            <NumericInput
                                value={numberofDaysmaxValue}
                                onChange={setNumberofDaysMaxValue}
                                label="Number of Days"
                            />
                        </div>
                        <div className="addcoupon-div-card-content-input">
                            <NumericInput
                                value={numberofCouponsmaxValue}
                                onChange={setNumberofCouponsMaxValue}
                                label="Number of Coupons"
                            />
                        </div>
                        <div className="addcoupon-div-card-content-input">
                            <NumericInput
                                value={orderAmountmaxValue}
                                onChange={setOrderAmountMaxValue}
                                label="Minimum order amount"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default AddCoupon