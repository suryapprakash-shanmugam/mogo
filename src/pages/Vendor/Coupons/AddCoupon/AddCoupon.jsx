import { Card, Checkbox, Group, Radio, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import './AddCoupon.css'
import list from '../../../../assets/admin/payout/list.png'
import { Link } from 'react-router-dom'
import Coupon from '../../../../components/Admin/Coupon/Coupon'
import NumericInput from '../../../../components/UI/Input/NumericInput'
import ReactDatePicker from 'react-datepicker'
const AddCoupon = () => {

    const [numberofDaysmaxValue, setNumberofDaysMaxValue] = useState('');
    const [numberofCouponsmaxValue, setNumberofCouponsMaxValue] = useState('');
    const [orderAmountmaxValue, setOrderAmountMaxValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const subcategories = ['Sub Category 1', 'Sub Category 2', 'Sub Category 3'];

    const [categoryChecked, setCategoryChecked] = useState(false);
    const [subCategoryStates, setSubCategoryStates] = useState({});

    const toggleSubCategory = (subCategory) => {
        setSubCategoryStates((prevState) => ({
            ...prevState,
            [subCategory]: !prevState[subCategory],
        }));
    };

    const handleCategoryChange = (e) => {
        const isChecked = e.target.checked;
        setCategoryChecked(isChecked);

        const updatedSubCategoryStates = {};
        subcategories.forEach((subCategory) => {
            updatedSubCategoryStates[subCategory] = isChecked;
        });
        setSubCategoryStates(updatedSubCategoryStates);
    };
    const areAllSubCategoriesUnchecked = !Object.values(subCategoryStates).some((value) => value);

    useEffect(() => {
        if (areAllSubCategoriesUnchecked) {
            setCategoryChecked(false);
        }
    }, [areAllSubCategoriesUnchecked]);


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
                        <div className="addcoupon-div-card-content-input">
                            <Radio.Group
                                name="coupon_usage_type"
                                label="Coupon Usage Type"
                            >
                                <Group mt="xs">
                                    <Radio value="Each user can use it for only one order" label="Each user can use it for only one order" />
                                    <Radio value="Each user can use it for multiple orders" label="Each user can use it for multiple orders" />
                                </Group>
                            </Radio.Group>
                        </div>
                        <div className="addcoupon-div-card-content-input">
                            <label>Expiry Date</label>
                            <div className="datepicker-style-addcoupon">
                                <ReactDatePicker
                                    className='addcoupon-div-card-content-datepicker-style'
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </div>
                        </div>
                        <div className="addcoupon-div-card-content-input-checkbox">
                            <label>Products</label>
                            <div className="category-checkbox">
                                <Checkbox label="Category" checked={categoryChecked} onChange={handleCategoryChange} />
                            </div>
                            <div className="subcategory-checkbox">
                                {subcategories.map((subCategory) => (
                                    <Checkbox
                                        key={subCategory}
                                        label={subCategory}
                                        checked={subCategoryStates[subCategory] || false}
                                        onChange={() => toggleSubCategory(subCategory)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="addcoupon-div-card-button">
                            <button>Add Coupon</button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default AddCoupon