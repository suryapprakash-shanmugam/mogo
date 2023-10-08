import { Input, Modal, PasswordInput, Select, Tabs } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Camera } from 'tabler-icons-react';
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb'
import './UserProfile.css'
import edit from '../../../assets/admin/table/dropdown/edit.png'
import trash from '../../../assets/admin/table/dropdown/trash.png'
import plus from '../../../assets/admin/table/dropdown/plus-filled.png'
import anglebottom from '../../../assets/preheader/arrow-down.webp'
import user_profile from '../../../assets/user/user_profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateUserControl } from '../../../controller/loginAuth/userLogin/userLoginAuth';
import { useQuery, useQueryClient } from 'react-query';
import { setUserData } from '../../../StateHandler/Slice/UserSlice/UserSliceData';
import { findUserByid } from '../../../config/quries/users/usersQuery';
import config from "../../../config/server/Servers"
import { addressCountries, selectedListStates } from '../../../StateHandler/InitialState/Address/AddressState';
import { hanldeCreateUserAddressControl } from "../../../controller/userAddress/userAddress"
const UserProfile = () => {

    const loaction = useNavigate()

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

    useEffect(() => {
        if (!sessionStorage.getItem('MogoUserAccessToken102') &&
            !sessionStorage.getItem('MogoUserAccessToken101')
        ) {
            window.location.reload(loaction('/'))
        }
    })


    // Query
    const userData = useSelector((state) => state.userData.value)
    const [selectedImage, setSelectedImage] = useState(null)

    // Update User Data 
    const [updateUser, setUpdateUser] = useState({
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name,
        number: userData.mobile_number ? userData.mobile_number : '',
        profile_image: userData.profile_image ? userData.profile_image : ''
    })

    // validate update user
    const [validateUser, setValidateUser] = useState({
        email: 0,
        first_name: 0,
        last_name: 0,
        number: 0
    })

    const queryClient = useQueryClient()

    // Handle Controler
    const handleUpdateUser = () => {
        handleUpdateUserControl(
            updateUser,
            setUpdateUser,
            validateUser,
            setValidateUser,
            queryClient
        )
    }

    // Profile Image Upload
    const fileInputRef = useRef(null);
    const handleUpdateProfileImage = () => {
        fileInputRef.current.click();
        setUpdateUser({ ...updateUser, profile_image: '' })
    };
    const handleFileUpload = (e) => {
        const selectedFile = e.target.files[0];
        setSelectedImage(selectedFile)
        setUpdateUser({ ...updateUser, profile_image: selectedFile });
    };

    const dispatch = useDispatch()

    // Fetching User By ID
    useQuery(
        ['userData', sessionStorage.getItem('MogoUserAccessToken101')],
        findUserByid,
        {
            onSuccess: (res) => {
                dispatch(setUserData(res?.data?.data))
                setUpdateUser({
                    ...updateUser,
                    email: res.data.data.email,
                    first_name: res.data.data.first_name,
                    last_name: res.data.data.last_name,
                    number: res.data.data.mobile_number,
                    profile_image: res.data.data.profile_image
                })
            },
        }
    )


    // User Address Details 
    const [userAddress, setUserAddress] = useState({
        address_type: '',
        first_name: '',
        last_name: '',
        email: "",
        number: '',
        address: '',
        country: '',
        state: '',
        city: '',
        zip_code: ''
    })

    const [validateUserAddress, setValidateUserAddress] = useState({
        address_type: 0,
        first_name: 0,
        last_name: 0,
        email: 0,
        number: 0,
        address: 0,
        country: 0,
        state: 0,
        city: 0,
        zip_code: 0
    })

    // handle User Address
    const handleCreateUserAddress = () => {
        hanldeCreateUserAddressControl(
            userAddress,
            setUserAddress,
            validateUserAddress,
            setValidateUserAddress
        )
    }

    // Validate User Address
    useEffect(() => {
        if (userAddress.address_type) {
            setValidateUserAddress({ ...validateUserAddress, address_type: 0 })
        }
        if (userAddress.first_name) {
            setValidateUserAddress({ ...validateUserAddress, first_name: 0 })
        }
        if (userAddress.last_name) {
            setValidateUserAddress({ ...validateUserAddress, last_name: 0 })
        }
        if (userAddress.email) {
            setValidateUserAddress({ ...validateUserAddress, email: 0 })
        }
        if (userAddress.number) {
            setValidateUserAddress({ ...validateUserAddress, number: 0 })
        }
        if (userAddress.address) {
            setValidateUserAddress({ ...validateUserAddress, address: 0 })
        }
        if (userAddress.country) {
            setValidateUserAddress({ ...validateUserAddress, country: 0 })
        }
        if (userAddress.state) {
            setValidateUserAddress({ ...validateUserAddress, state: 0 })
        }
        if (userAddress.city) {
            setValidateUserAddress({ ...validateUserAddress, city: 0 })
        }
        if (userAddress.zip_code) {
            setValidateUserAddress({ ...validateUserAddress, zip_code: 0 })
        }
    }, [userAddress])

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
                                        {
                                            selectedImage ?
                                                <img src={
                                                    URL.createObjectURL(selectedImage)
                                                } alt='User_Profile' /> :
                                                <img src={
                                                    `
                                                   ${`${config.baseUrlApi}/assets/userprofile/${updateUser.profile_image}`
                                                    }
                                                   `}
                                                    alt='User_Profile'
                                                />

                                        }
                                    </div>
                                    <div className="user-profile-div-container-content-tabs-panel-profile-image-icon">
                                        <Camera
                                            onClick={handleUpdateProfileImage}
                                            size={32}
                                            strokeWidth={1.5}
                                            color={'#fff'}
                                        />
                                        <input
                                            onChange={handleFileUpload}
                                            accept="image/*"
                                            type='file'
                                            style={{ display: 'none' }}
                                            ref={fileInputRef} />
                                    </div>
                                </div>
                                <div className="user-profile-form">
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            label="Email Address"

                                        >
                                            <Input
                                                disabled
                                                placeholder="Your email"
                                                value={updateUser.email}
                                                onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })} />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            label="First Name"
                                            error={
                                                `${validateUser.first_name === 1 ?
                                                    'Please Enter First Name' :
                                                    ''
                                                }`
                                            }
                                        >
                                            <Input
                                                placeholder="First Name"
                                                value={updateUser.first_name}
                                                onChange={(e) => setUpdateUser({ ...updateUser, first_name: e.target.value })}
                                            />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            label="Last Name"
                                            error={
                                                `${validateUser.last_name === 1 ?
                                                    'Please Enter Last Name' :
                                                    ''
                                                }`
                                            }
                                        >
                                            <Input
                                                placeholder="Last Name"
                                                value={updateUser.last_name}
                                                onChange={(e) => setUpdateUser({ ...updateUser, last_name: e.target.value })}
                                            />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            label="Phone Number"
                                            error={
                                                `${validateUser.number === 1 ?
                                                    'Please Enter Phone Number' :
                                                    validateUser.number === 2 ?
                                                        'Please Enter Valid Number' : ''
                                                }`
                                            }
                                        >
                                            <Input
                                                placeholder="Phone Number"
                                                value={updateUser.number}
                                                onChange={(e) => setUpdateUser({ ...updateUser, number: e.target.value })}
                                            />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input-button">
                                        <button
                                            style={{ cursor: 'pointer' }}
                                            onClick={handleUpdateUser}
                                        >Save Changes</button>
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
                                error={`${validateUserAddress.address_type === 1 ?
                                    'Address Type is Compulsory' : ''
                                    }`}
                                label="Addres Title"
                            >
                                <Input
                                    placeholder="Addres Title"
                                    value={userAddress.address_type}
                                    onChange={(e) => setUserAddress({
                                        ...userAddress,
                                        address_type: e.target.value
                                    })}
                                />
                            </Input.Wrapper>
                        </div>
                        <div className="shipping-address-model-form-input">
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    error={`${validateUserAddress.first_name === 1 ?
                                        'First Name is Compulsory' : ''
                                        }`}
                                    label="First Name"
                                >
                                    <Input
                                        placeholder="First Name"
                                        value={userAddress.first_name}
                                        onChange={(e) => setUserAddress({
                                            ...userAddress,
                                            first_name: e.target.value
                                        })}
                                    />
                                </Input.Wrapper>
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    error={`${validateUserAddress.last_name === 1 ?
                                        'Last Name is Compulsory' : ''
                                        }`}
                                    label="Last Name"
                                >
                                    <Input
                                        placeholder="Last Name"
                                        value={userAddress.last_name}
                                        onChange={(e) => setUserAddress({
                                            ...userAddress,
                                            last_name: e.target.value
                                        })}
                                    />
                                </Input.Wrapper>
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    label="Email Address"
                                    error={`${validateUserAddress.email === 1 ?
                                        'Email is Compulsory' :
                                        validateUserAddress.email === 2 ?
                                            'Please Enter Valid email Address' : ''
                                        }`}
                                >
                                    <Input
                                        placeholder="Your email"
                                        value={userAddress.email}
                                        onChange={(e) => setUserAddress({
                                            ...userAddress,
                                            email: e.target.value
                                        })}
                                    />
                                </Input.Wrapper>
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    label="Phone Number"
                                    error={`${validateUserAddress.number === 1 ?
                                        'Mobile Number is Compulsory' :
                                        validateUserAddress.number === 2 ?
                                            'Please Enter Valid Mobile Number' : ''
                                        }`}
                                >
                                    <Input
                                        placeholder="Phone Number"
                                        value={userAddress.number}
                                        onChange={(e) => setUserAddress({
                                            ...userAddress,
                                            number: e.target.value
                                        })}
                                    />
                                </Input.Wrapper>
                            </div>
                        </div>
                        <div className="user-profile-form-input">
                            <Input.Wrapper
                                label="Address"
                                error={`${validateUserAddress.address === 1 ?
                                    'Address is Compulsory' : ''
                                    }`}
                            >
                                <Input
                                    placeholder="Address"
                                    value={userAddress.address}
                                    onChange={(e) => setUserAddress({
                                        ...userAddress,
                                        address: e.target.value
                                    })}
                                />
                            </Input.Wrapper>
                        </div>
                        <div className="shipping-address-model-form-input">
                            <div className="user-profile-form-input">
                                <Select
                                    error={`${validateUserAddress.country === 1 ?
                                        'Country is Compulsory' : ''
                                        }`}
                                    label="Country"
                                    placeholder="Country"
                                    rightSection={<img src={anglebottom} width={11} />}
                                    data={addressCountries?.map(data => ({
                                        value: data,
                                        label: data
                                    }))}
                                    value={userAddress.country}
                                    onChange={
                                        (e) => setUserAddress({ ...userAddress, country: e })
                                    }
                                />
                            </div>
                            <div className="user-profile-form-input">
                                <Select
                                    error={`${validateUserAddress.state === 1 ?
                                        'State is Compulsory' : ''
                                        }`}
                                    label="State"
                                    placeholder="State"
                                    rightSection={<img src={anglebottom} width={11} />}
                                    data={
                                        selectedListStates[userAddress.country ? userAddress.country : 'India']?.map(data => ({
                                            value: data,
                                            label: data
                                        }))
                                    }
                                    value={userAddress.state}
                                    onChange={
                                        (e) => setUserAddress({ ...userAddress, state: e })
                                    }
                                />
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    label="City"
                                    error={`${validateUserAddress.city === 1 ?
                                        'City is Compulsory' : ''
                                        }`}
                                >
                                    <Input
                                        placeholder="City"
                                        value={userAddress.city}
                                        onChange={(e) => setUserAddress({
                                            ...userAddress,
                                            city: e.target.value
                                        })}
                                    />
                                </Input.Wrapper>
                            </div>
                            <div className="user-profile-form-input">
                                <Input.Wrapper
                                    error={`${validateUserAddress.zip_code === 1 ?
                                        'Zip Code is Compulsory' : ''
                                        }`}
                                    label="Zip Code"
                                >
                                    <Input placeholder="Zip Code"
                                        value={userAddress.zip_code}
                                        onChange={(e) => setUserAddress({
                                            ...userAddress,
                                            zip_code: e.target.value
                                        })}
                                    />
                                </Input.Wrapper>
                            </div>
                        </div>
                        <div className="sellerbalance-edit-modal-body-content-button ht-20">
                            <button
                                onClick={handleCreateUserAddress}
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UserProfile