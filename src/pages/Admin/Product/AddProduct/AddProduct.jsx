//import react packages
import React from 'react'

//import AddProduct css
import './AddProduct.css'

//import mantine packages
import { Input } from '@mantine/core';


const AddProduct = () => {
    return (
        <div>
            <div className="add-product-div">
                <div className="add-product-div-container">
                    <div className="add-product-div-container-left">
                        <div className="add-product-div-container-left-product-name">
                            <Input.Wrapper label="Add new product" description="" error="">
                                <Input placeholder="Product Name" />
                            </Input.Wrapper>
                        </div>
                    </div>
                    <div className="add-product-div-container-right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct