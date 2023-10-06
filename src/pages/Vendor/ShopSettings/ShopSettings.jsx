import React, { useState } from 'react'
import { Card, Input, Select, Textarea } from '@mantine/core'
import './ShopSettings.css'
import arrowdown from '../../../assets/preheader/arrow-down.webp'
const ShopSettings = () => {

    const [shopName, setShopName] = useState('')
    const [shopDescription, setShopDescription] = useState('')
    const [shopCountry, setShopCountry] = useState('')
    const [shopState, setShopState] = useState('')
    const [shopCity, setShopCity] = useState('')
    const [shopAddress, setShopAddress] = useState('')
    const [shopZipCode, setShopZipCode] = useState('')

    const countryOptions = [
        { value: 'React', label: 'React' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Svelte', label: 'Svelte' },
        { value: 'Vue', label: 'Vue' },
    ];
    const stateOptions = [
        { value: 'React', label: 'React' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Svelte', label: 'Svelte' },
        { value: 'Vue', label: 'Vue' },
    ];
    const cityOptions = [
        { value: 'React', label: 'React' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Svelte', label: 'Svelte' },
        { value: 'Vue', label: 'Vue' },
    ];

    const handileShopCountry = (selectedValue) => {
        setShopCountry(selectedValue)
    }
    const handileShopState = (selectedValue) => {
        setShopState(selectedValue)
    }
    const handileShopCity = (selectedValue) => {
        setShopCity(selectedValue)
    }

    return (
        <div>
            <div className="shopsettings-div">
                <Card className='shopsettings-div-card1'>
                    <div className="shopsettings-div-card1-heading">
                        <h4>Shop Settings</h4>
                    </div>
                    <div className="shopsettings-div-card1-content">
                        <div className="shopsettings-div-card-content-input">
                            <Input.Wrapper
                                label="Shop Name"
                            >
                                <Input value={shopName} onChange={(e) => setShopName(e.target.value)} />
                            </Input.Wrapper>
                        </div>
                        <div className="shopsettings-div-card-content-input">
                            <Textarea
                                autosize
                                minRows={3}
                                label="Shop Description"
                                value={shopDescription} onChange={(e) => setShopDescription(e.target.value)}
                            />
                        </div>
                        <div className="shopsettings-div-card-content-input select-div">
                            <Select
                                label="Shop Location"
                                rightSection={<img src={arrowdown} width={10} alt="arrow down icon" />}
                                placeholder="Country"
                                searchable
                                nothingFound="No options"
                                data={countryOptions}
                                value={shopCountry} onChange={handileShopCountry}

                            />
                            <Select
                                label="Shop Location"
                                rightSection={<img src={arrowdown} width={10} alt="arrow down icon" />}
                                placeholder="State"
                                searchable
                                nothingFound="No options"
                                data={stateOptions}
                                value={shopState} onChange={handileShopState}
                            />
                            <Select
                                label="Shop Location"
                                rightSection={<img src={arrowdown} width={10} alt="arrow down icon" />}
                                placeholder="City"
                                searchable
                                nothingFound="No options"
                                data={cityOptions}
                                value={shopCity} onChange={handileShopCity}
                            />
                        </div>
                        <div className="shopsettings-div-card-content-input select-div2">
                            <Input id="input-demo" placeholder="Address" value={shopAddress} onChange={(e) => setShopAddress(e.target.value)} />
                            <Input id="input-demo" placeholder="Zip Code" value={shopZipCode} onChange={(e) => setShopZipCode(e.target.value)} />
                        </div>
                    </div>
                </Card>
                <Card className='shopsettings-div-card2'>
                    <div className="shopsettings-div-card2-heading">
                        <h4>Cash On Delivery</h4>
                    </div>
                    <div className="shopsettings-div-card2-content">

                    </div>
                </Card>
            </div>
        </div>
    )
}

export default ShopSettings