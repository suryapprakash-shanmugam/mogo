import { Avatar, Flex, Input, Modal, PasswordInput, Select, Tabs, Text, ThemeIcon } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Camera, CircleCheck, Pencil, Trash, X } from 'tabler-icons-react';
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
import { handleChangePasswordControl, hanldeCreateUserAddressControl } from "../../../controller/userAddress/userAddress"
import { deleteUserAddress, listAddressByUserID } from '../../../config/quries/Address/userAddress';
import { openConfirmModal } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
const UserProfile = () => {

    const loaction = useNavigate()

    // array for breadcrumb
    const items = [
        { title: 'Home', href: '/' },
        { title: 'User Profile', href: '/your_account' },
    ];
    const [addressModalOpen, setAddressModalOpen] = useState(false)

    const [oldpasswordinput, setoldpasswordInput] = useState('')
    const [newpasswordinput, setnewpasswordInput] = useState('')
    const [confirmpasswordinput, setconfirmpasswordInput] = useState('')



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
            queryClient,
            userData
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
                console.log(res);
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
            onError:(err)=>{
                console.log(err);
            }
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
            setValidateUserAddress,
            setAddressModalOpen,
            queryClient
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

    // const user Addres
    const { data: userAddressDetails } = useQuery(
        ['userAddress', sessionStorage.getItem('MogoUserAccessToken101')],
        listAddressByUserID,
    )

    // Edit State 
    const [editAddressModel, setEditAddressModel] = useState(false)
    const [editUserAddress, setEditUserAddress] = useState({
        id: '',
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

    // Handle Delete Address
    const hanldeDeleteUserAddresss = (e) => {
        openConfirmModal({
            overlayOpacity: "0.55",
            overlayBlur: "3",
            zIndex: '123456789',
            centered: true,
            title: <p style={{ fontFamily: "Poppins" }}>Are you Sure ?</p>,
            children: (
                <Text size="md" color='red'>
                    !! Once Deleted You Can't Get Back Address Details Again
                </Text>
            ),
            labels: { confirm: "Delete", cancel: "Cancel" },
            onConfirm: () => {
                deleteUserAddress(e)
                    .then(() => {
                        queryClient.invalidateQueries("userAddress")
                        showNotification({
                            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                                <CircleCheck color="green" />
                            </ThemeIcon>,
                            message: "Address Deleted Successfully",
                        })
                    })
                    .catch(() => {
                        showNotification({
                            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                <X color="red" />
                            </ThemeIcon>,
                            message: "User Not Allowed to Delete Address",
                        })
                    })
            }
        })
    }

    const handleEidtAddress = (address) => {
        setEditAddressModel(true)
        setEditUserAddress({
            ...editUserAddress,
            id: address._id,
            address_type: address.address_type,
            first_name: address.first_name,
            last_name: address.last_name,
            email: address.email,
            number: address.number,
            address: address.address,
            country: address.country,
            state: address.state,
            city: address.city,
            zip_code: address.zip_code
        })
    }

    const [validatePassword, setValidatePasssword] = useState({
        oldPassword: 0,
        newPassword: 0,
        confirmPassword: 0
    })

    const hanldeChangePassword = () => {
        handleChangePasswordControl(
            confirmpasswordinput,
            newpasswordinput,
            oldpasswordinput,
            setconfirmpasswordInput,
            setnewpasswordInput,
            setoldpasswordInput,
            setValidatePasssword,
            validatePassword
        )
    }

    useEffect(() => {
        if (oldpasswordinput) {
            setValidatePasssword({ ...validatePassword, oldPassword: 0 })
        }
        if (newpasswordinput) {
            setValidatePasssword({ ...validatePassword, newPassword: 0 })
        }
        if (confirmpasswordinput) {
            setValidatePasssword({ ...validatePassword, confirmPassword: 0 })
        }
    }, [oldpasswordinput, newpasswordinput, confirmpasswordinput])



    return (
        <div>

            {/* Edit Address */}

            <Modal
                zIndex={1212111}
                size="xl"
                opened={editAddressModel}
                onClose={() => setEditAddressModel(false)}
                title=""
                transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
                className='sellerbalance-edit-modal'
            >
                <div className="sellerbalance-edit-modal-header">
                    <h4>Edit address</h4>
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
                                    value={editUserAddress.address_type}
                                    onChange={(e) => setEditUserAddress({
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
                                        value={editUserAddress.first_name}
                                        onChange={(e) => setEditUserAddress({
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
                                        value={editUserAddress.last_name}
                                        onChange={(e) => setEditUserAddress({
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
                                        value={editUserAddress.email}
                                        onChange={(e) => setEditUserAddress({
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
                                        value={editUserAddress.number}
                                        onChange={(e) => setEditUserAddress({
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
                                    value={editUserAddress.address}
                                    onChange={(e) => setEditUserAddress({
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
                                    value={editUserAddress.country}
                                    onChange={
                                        (e) => setEditUserAddress({ ...userAddress, country: e })
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
                                    value={editUserAddress.state}
                                    onChange={
                                        (e) => setEditUserAddress({ ...userAddress, state: e })
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
                                        value={editUserAddress.city}
                                        onChange={(e) => setEditUserAddress({
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
                                        value={editUserAddress.zip_code}
                                        onChange={(e) => setEditUserAddress({
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


            {/* Edit Address ENd */}


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
                                                } alt='User_Profile' />
                                                : (
                                                    updateUser.profile_image ?
                                                        <img src={
                                                            `
                                               ${`${config.baseUrlApi}/assets/userprofile/${updateUser.profile_image}`
                                                            }
                                               `}
                                                            alt='User_Profile'
                                                        /> :
                                                        <Avatar
                                                            size={'xl'}

                                                            radius="xl" src={user_profile} />
                                                )
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
                                                onChange={(e) =>
                                                    setUpdateUser({
                                                        ...updateUser,
                                                        number: e.target.value
                                                    })}
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
                                    {userAddressDetails?.data?.data && userAddressDetails.data.data.length > 0 ? (
                                        userAddressDetails?.data?.data?.map((address, index) => (
                                            <div key={index} className="user-profile-div-container-content-tabs-panel-shipping-address">
                                                <h5>{address?.address_type}</h5>
                                                <p>{address?.first_name} {address?.last_name}</p>
                                                <p>{`${address?.address}${address?.city}, ${address?.country}, ${address?.state}, ${address?.zip_code}`}</p>
                                                <p>{address?.email}</p>
                                                <p>{address?.number}</p>
                                                <Flex
                                                    onClick={() => hanldeDeleteUserAddresss(address._id)}
                                                    align={'center'}
                                                    gap={5} style={{ cursor: 'pointer' }}>
                                                    <Trash
                                                        strokeWidth={1} size={'1rem'} />
                                                    <p>
                                                        Delete Address
                                                    </p>
                                                </Flex>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No address available. Click to Add Address</p>
                                    )}

                                </div>
                                <div className="shipping-address-add-button">
                                    <button onClick={() => { setAddressModalOpen(true) }}><img src={plus} width={11} />Add New Address</button>
                                </div>
                            </Tabs.Panel>

                            <Tabs.Panel className='user-profile-div-container-content-tabs-panel' value="changepassword" pl="xs">
                                <div className="user-profile-form">
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            error={`${validatePassword.oldPassword === 1 ?
                                                'Please Enter Old Password' :
                                                validatePassword.oldPassword === 2 ?
                                                    'Invalid Password' : ''
                                                }`}
                                        >
                                            <PasswordInput
                                                label="Old Password"
                                                value={oldpasswordinput} onChange={(e) => setoldpasswordInput(e.target.value)}
                                            />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            error={`${validatePassword.newPassword === 1 ?
                                                'Please Enter New  Password' :
                                                validatePassword.newPassword === 2 ?
                                                    'Invalid Password' : ''
                                                }`}
                                        >
                                            <PasswordInput
                                                label="New Password"
                                                value={newpasswordinput} onChange={(e) => setnewpasswordInput(e.target.value)}
                                            />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input">
                                        <Input.Wrapper
                                            error={`${validatePassword.confirmPassword === 1 ?
                                                'Please Enter Password' :
                                                validatePassword.confirmPassword === 2 ?
                                                    'Confirm Password not match with new Password' : ''
                                                }`}
                                        >
                                            <PasswordInput
                                                label="Confirm Password"
                                                value={confirmpasswordinput} onChange={(e) => setconfirmpasswordInput(e.target.value)}
                                            />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="user-profile-form-input-button">
                                        <button
                                            onClick={hanldeChangePassword}
                                        >Save Changes</button>
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
                                    searchable
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
                                    searchable
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