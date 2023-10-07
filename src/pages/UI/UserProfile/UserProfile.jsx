import { Input, Modal, PasswordInput, Select, Tabs } from '@mantine/core';
import React, { useState } from 'react'
import { Camera } from 'tabler-icons-react';
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb'
import './UserProfile.css'
import edit from '../../../assets/admin/table/dropdown/edit.png'
import trash from '../../../assets/admin/table/dropdown/trash.png'
import plus from '../../../assets/admin/table/dropdown/plus-filled.png'
import anglebottom from '../../../assets/preheader/arrow-down.webp'

const UserProfile = () => {

    // array for breadcrumb
    const items = [
        { title: 'Home', href: '/' },
        { title: 'User Profile', href: '/your_account' },
    ];
    const [addressModalOpen, setAddressModalOpen] = useState(false)

    const country = [
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
    ]
    const state = [
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
    ]

    const [emailinput, setEmailInput] = useState('')
    const [firstNameinput, setfirstNameInput] = useState('')
    const [lastNameinput, setlastNameInput] = useState('')
    const [phoneinput, setphoneInput] = useState('')
    const [oldpasswordinput, setoldpasswordInput] = useState('')
    const [newpasswordinput, setnewpasswordInput] = useState('')
    const [confirmpasswordinput, setconfirmpasswordInput] = useState('')
    const [addresstitleinput, setaddresstitleInput] = useState('')
    const [addfirstnameinput, setaddfirstnameInput] = useState('')
    const [addlastnameinput, setaddlastnameInput] = useState('')
    const [addemailinput, setaddemailInput] = useState('')
    const [addphoneinput, setaddphoneInput] = useState('')
    const [addaddressinput, setaddaddressInput] = useState('')
    const [shopCountry, setShopCountry] = useState('')
    const [shopState, setShopState] = useState('')
    const [shopCity, setShopCity] = useState('')
    const [shopZIpcode, setShopZIpcode] = useState('')

    const handileShopCountry = (selectedValue) => {
        setShopCountry(selectedValue)
    }
    const handileShopState = (selectedValue) => {
        setShopState(selectedValue)
    }

    return (
        <div>
            <div className="user-profile-div">
                <div className="user-profile-div-container">
                    <div className="category-div-container-breadcrumb">
                        <Breadcrumb value={items} />
                    </div>
                    <div className="user-profile-div-container-heading">
                        <h2>User Profile</h2>
                    </div>
                    <div className="user-profile-div-container-content">
                        <Tabs variant="pills" radius="xs" orientation="vertical" defaultValue="profile" className='user-profile-div-container-content-tabs'>
                            <Tabs.List>
                                <Tabs.Tab value="profile">User Profile</Tabs.Tab>
                                <Tabs.Tab value="shipaddress">Shipping Address</Tabs.Tab>
                                <Tabs.Tab value="changepassword">Change Password</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel className='user-profile-div-container-content-tabs-panel' value="profile" pl="xs">
                                <div className="user-profile-container">
                                    <div className="user-profile-div-container-content-tabs-panel-profile-image">
                                        <img />
                                    </div>
                                    <div className="user-profile-div-container-content-tabs-panel-profile-image-icon">
                                        <Camera
                                            size={32}
                                            strokeWidth={1.5}
                                            color={'#fff'}
                                        />;
                                    </div>
                                </div>
                                <div className="user-profile-form">
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            label="Email Address"
                                        >
                                            <Input placeholder="Your email" value={emailinput} onChange={(e) => setEmailInput(e.target.value)} />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            label="First Name"
                                        >
                                            <Input placeholder="First Name" value={firstNameinput} onChange={(e) => setfirstNameInput(e.target.value)} />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            label="Last Name"
                                        >
                                            <Input placeholder="Last Name" value={lastNameinput} onChange={(e) => setlastNameInput(e.target.value)} />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            label="Phone Number"
                                        >
                                            <Input placeholder="Phone Number" value={phoneinput} onChange={(e) => setphoneInput(e.target.value)} />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input-button">
                                        <button>Save Changes</button>
                                    </div>
                                </div>
                            </Tabs.Panel>

                            <Tabs.Panel className='user-profile-div-container-content-tabs-panel' value="shipaddress" pl="xs">
                                <div className="user-profile-div-container-content-tabs-panel-shipping">
                                    <div className="user-profile-div-container-content-tabs-panel-shipping-address">
                                        <h5>Home</h5>
                                        <p>Peter Jone</p>
                                        <p>150 Chatham St, Unit 4 Hamilton LKL2B6  Hamilton/Ontario/Canada</p>
                                        <p>codingest@gmail.com</p>
                                        <p>9876543210</p>
                                        <div className="user-profile-div-container-content-tabs-panel-shipping-address-button">
                                            <button><img src={edit} width={11} />Edit</button>
                                            <button><img src={trash} width={11} />Delete</button>
                                        </div>
                                    </div>
                                    <div className="user-profile-div-container-content-tabs-panel-shipping-address">
                                        <h5>Home</h5>
                                        <p>Peter Jone</p>
                                        <p>150 Chatham St, Unit 4 Hamilton LKL2B6  Hamilton/Ontario/Canada</p>
                                        <p>codingest@gmail.com</p>
                                        <p>9876543210</p>
                                        <div className="user-profile-div-container-content-tabs-panel-shipping-address-button">
                                            <button onClick={() => { setAddressModalOpen(true) }}><img src={edit} width={11} />Edit</button>
                                            <button><img src={trash} width={11} />Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="shipping-address-add-button">
                                    <button onClick={() => { setAddressModalOpen(true) }}><img src={plus} width={11} />Add New Address</button>
                                </div>
                            </Tabs.Panel>

                            <Tabs.Panel className='user-profile-div-container-content-tabs-panel' value="changepassword" pl="xs">
                                <div className="user-profile-form">
                                    <div className="user-profile-form-input">
                                        <PasswordInput
                                            label="Old Password"
                                            value={oldpasswordinput} onChange={(e) => setoldpasswordInput(e.target.value)}
                                        />
                                    </div>
                                    <div className="user-profile-form-input">
                                        <PasswordInput
                                            label="New Password"
                                            value={newpasswordinput} onChange={(e) => setnewpasswordInput(e.target.value)}
                                        />
                                    </div>
                                    <div className="user-profile-form-input">
                                        <PasswordInput
                                            label="Confirm Password"
                                            value={confirmpasswordinput} onChange={(e) => setconfirmpasswordInput(e.target.value)}
                                        />
                                    </div>
                                    <div className="user-profile-form-input-button">
                                        <button>Save Changes</button>
                                    </div>
                                </div>
                            </Tabs.Panel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <Modal
                zIndex={1212111}
                size="xl"
                opened={addressModalOpen}
                onClose={() => setAddressModalOpen(false)}
                title=""
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='sellerbalance-edit-modal'
            >
                <div className="sellerbalance-edit-modal-header">
                    <h4>Add Address</h4>
                </div>
                <div className="sellerbalance-edit-modal-body">
                    <div className="sellerbalance-edit-modal-body-content">
                        <div className="user-profile-form-input">
                            <Input.Wrapper
                                label="Addres Title"
                            >
                                <Input placeholder="Addres Title" value={addresstitleinput} onChange={(e) => setaddresstitleInput(e.target.value)} />
                            </Input.Wrapper>
                        </div>
                        <div className="shipping-address-model-form-input">


                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    label="First Name"
                                >
                                    <Input placeholder="First Name" value={addfirstnameinput} onChange={(e) => setaddfirstnameInput(e.target.value)} />
                                </Input.Wrapper>
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    label="Last Name"
                                >
                                    <Input placeholder="Last Name" value={addlastnameinput} onChange={(e) => setaddlastnameInput(e.target.value)} />
                                </Input.Wrapper>
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    label="Email Address"
                                >
                                    <Input placeholder="Your email" value={addemailinput} onChange={(e) => setaddemailInput(e.target.value)} />
                                </Input.Wrapper>
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    label="Phone Number"
                                >
                                    <Input placeholder="Phone Number" value={addphoneinput} onChange={(e) => setaddphoneInput(e.target.value)} />
                                </Input.Wrapper>
                            </div>
                        </div>
                        <div className="user-profile-form-input">
                            <Input.Wrapper
                                label="Address"
                            >
                                <Input placeholder="Address" value={addaddressinput} onChange={(e) => setaddaddressInput(e.target.value)} />
                            </Input.Wrapper>
                        </div>
                        <div className="shipping-address-model-form-input">
                            <div className="user-profile-form-input">
                                <Select
                                    label="Country"
                                    placeholder="Country"
                                    rightSection={<img src={anglebottom} width={11} />}
                                    data={country}
                                    value={shopCountry} onChange={handileShopCountry}
                                />
                            </div>
                            <div className="user-profile-form-input">
                                <Select
                                    label="State"
                                    placeholder="State"
                                    rightSection={<img src={anglebottom} width={11} />}
                                    data={state}
                                    value={shopState} onChange={handileShopState}
                                />
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    label="City"
                                >
                                    <Input placeholder="City" value={shopCity} onChange={(e) => setShopCity(e.target.value)} />
                                </Input.Wrapper>
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    label="Zip Code"
                                >
                                    <Input placeholder="Zip Code" value={shopZIpcode} onChange={(e) => setShopZIpcode(e.target.value)} />
                                </Input.Wrapper>
                            </div>
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-button ht-20">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UserProfile