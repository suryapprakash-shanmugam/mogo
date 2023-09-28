//import react packages
import React from 'react'

//import mantine packages
import { Card, Select, Text } from '@mantine/core'

//import AddPayout css
import './AddPayout.css'

//import react router dom packages
import { Link } from 'react-router-dom'

//import icons
import list from '../../../../assets/admin/payout/list.png'
import arrowdown from '../../../../assets/preheader/arrow-down.webp'


const AddPayout = () => {

    const userArray = [
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue' },
        { value: 'svelte', label: 'Svelte' },
    ]

    return (
        <div>
            <div className="addpayout-div">
                <Card className='addpayout-div-card'>
                    <div className="addpayment-div-card-header">
                        <h3>Add Payout</h3>
                        <Text component={Link} to="/payoutrequests">
                            <button><img src={list} width={14} alt='list icon' />Payment Requests</button>
                        </Text>
                    </div>
                    <div className="addpayout-div-card-body">
                        <div className="addpayout-div-card-body-input">
                            <Select
                                label="User"
                                rightSection={<img src={arrowdown} width={10} alt="anglebottom icon" />}
                                searchable
                                data={userArray}
                            />
                        </div>
                        <div className="addpayout-div-card-body-input">
                            <Select
                                label="Withdrawal Method"
                                rightSection={<img src={arrowdown} width={10} alt="anglebottom icon" />}
                                searchable
                                data={userArray}
                            />
                        </div>
                        <div className="addpayout-div-card-body-input">
                            <Select
                                label="Withdrawal Amount"
                                rightSection={<img src={arrowdown} width={10} alt="anglebottom icon" />}
                                searchable
                                data={userArray}
                            />
                        </div>
                        <div className="addpayout-div-card-body-input">
                            <Select
                                label="Status"
                                rightSection={<img src={arrowdown} width={10} alt="anglebottom icon" />}
                                searchable
                                data={userArray}
                            />
                        </div>
                    </div>
                    <div className="addpayout-div-card-button">
                        <button>Add Payment</button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default AddPayout