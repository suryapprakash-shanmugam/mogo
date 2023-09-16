//import react packeges
import React from 'react'

//import mantine packages
import { Container, Text } from '@mantine/core'

//import react router dom packages
import { Link } from 'react-router-dom'

//import OrderPlaced css
import './OrderPlaced.css'

//import checkicon
    import check from '../../assets/orderplaced/check.gif'

const OrderPlaced = () => {
    return (
        <div>
            <div className="orderplaced-div">
                <Container className='orderplaced-div-container' size={'82rem'}>
                    <div className="orderplaced-div-container-main">
                        <div className="orderplaced-div-container-main-icon">
                            <img src={check} alt="check icon" width={100} />
                        </div>
                        <div className="orderplaced-div-container-main-details">
                            <h1>Your order has been successfully completed!</h1>
                            <p className='order-number-display'>Order: #10016</p>
                        </div>
                        <div className="orderplaced-div-container-main-goback">
                            <Text component={Link} to='/'>
                                <button>Back to Home</button>
                            </Text>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default OrderPlaced