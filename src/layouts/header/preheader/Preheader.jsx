//import react package
import React, { useEffect, useState } from 'react'

//import manitine packages
import { Avatar, Button, Center, Checkbox, Container, Flex, Group, Input, Menu, Modal, PasswordInput, Select, Text } from '@mantine/core'


//import react router dom packages
import { Link } from 'react-router-dom'

//import Preheader css file
import './Preheader.css'

//import images for preheader
import map from '../../../assets/preheader/map.webp'
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import user from '../../../assets/preheader/user.webp'
import { ChevronDown, MapPin } from 'tabler-icons-react'

// Flags
import Flag from "react-country-flag"
import { handleLoginControl, handleRegisterControl } from '../../../controller/loginAuth/userLogin/userLoginAuth'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { findUserByid } from '../../../config/quries/users/usersQuery'
import { setUserData } from '../../../StateHandler/Slice/UserSlice/UserSliceData'
import config from "../../../config/server/Servers"

const Preheader = () => {

  //currency array
  const currencyArray = [
    {
      value: 'inr',
      label: 'INR (₹)'
    },
    {
      value: 'usd',
      label: 'USD ($)'
    },
    {
      value: 'eur',
      label: 'EUR (€)'
    }
  ]

  //usestate for open location modal
  const [modalOpen, setModalOpen] = useState(false)
  //usestate for open register modal
  const [registermodalOpen, setRegisterModalOpen] = useState(false)
  //usestate for open login modal
  const [loginmodalOpen, setLoginModalOpen] = useState(false)

  //usestate for open login modal
  const [forgotmodalOpen, setForgotModalOpen] = useState(false)

  // Langage
  const languageState = [
    {
      value: 'india',
      label: 'English',

    },
    {
      value: 'tamil',
      label: 'Tamil',
    },
    {
      value: 'hindi',
      label: 'Hindi',
    },
  ]

  const [valueIcon, setValueIcon] = useState('india')

  const filterData = languageState.filter(language => language.value === valueIcon)

  //Language Select Items
  const SelectItem = React.forwardRef(
    ({ icon, label, value, ...others }, ref) => (
      <div ref={ref} {...others}>
        <Group noWrap style={{ display: "flex", alignItems: "center" }}>
          {icon}
          <div>
            <Text size="sm">{label}</Text>
          </div>
        </Group>
      </div>
    )
  );


  // Register User Values 
  const [userRegisterValue, setUserRegisterValue] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: "",
    conform_password: ''
  })
  const [userLogin, setuserLogin] = useState({
    email: '',
    password: ''
  })

  // Validate Login User
  const [userLoginValidation, setUserLoginValidation] = useState({
    email: 0,
    password: 0
  })

  // Validation For Register Values
  const [validateUserRegisterValue, setValidateUserRegisterValue] = useState({
    first_name: 0,
    last_name: 0,
    email: 0,
    password: 0,
    conform_password: 0,
    check_box: ''
  })


  // Handle Event 
  const handleRegisterClick = () => {
    handleRegisterControl(
      userRegisterValue,
      setUserRegisterValue,
      validateUserRegisterValue,
      setValidateUserRegisterValue,
      setRegisterModalOpen
    )
  }

  // Validating Input Fields
  useEffect(() => {
    if (userRegisterValue.first_name.trim()) {
      setValidateUserRegisterValue({ ...validateUserRegisterValue, first_name: 0 })
    }
    if (userRegisterValue.last_name.trim()) {
      setValidateUserRegisterValue({ ...validateUserRegisterValue, last_name: 0 })
    }
    if (userRegisterValue.email.trim()) {
      setValidateUserRegisterValue({ ...validateUserRegisterValue, email: 0 })
    }
    if (userRegisterValue.password.trim()) {
      setValidateUserRegisterValue({ ...validateUserRegisterValue, password: 0 })
    }
    if (userRegisterValue.conform_password.trim()) {
      setValidateUserRegisterValue({ ...validateUserRegisterValue, conform_password: 0 })
    }
  }, [userRegisterValue])


  const userData = useSelector((state) => state.userData.value)
  const dispatch = useDispatch()

  // Fetching User By ID
  useQuery(
    ['userData', sessionStorage.getItem('MogoUserAccessToken101')],
    findUserByid,
    {
      enabled: !!sessionStorage.getItem('MogoUserAccessToken101'),
      onSuccess: (res) => {
        dispatch(setUserData(res?.data?.data))
      },
    }
  )

  const handleLogout = () => {
    sessionStorage.removeItem('MogoUserAccessToken102')
    sessionStorage.removeItem('MogoUserAccessToken101')
    dispatch(setUserData(''))
    window.location.reload()
  }

  const handleLogin = () => {
    handleLoginControl(
      userLogin,
      setuserLogin,
      userLoginValidation,
      setUserLoginValidation,
      setLoginModalOpen
    )
  }


  // Handle Your Account
  const handleYourAccount = () => {
    setLoginModalOpen(true)
  }


  return (
    <div>
      <div className="preheader">
        <Container size={'82rem'} className='preheader-container'>
          <div className="preheader-container-contact-sell">
            <div className="preheader-container-contact-sell-contact">
              <Text component={Link} to='/contact'>
                <p>Contact</p>
              </Text>
            </div>
            <div className="preheader-container-contact-sell-sell">
              <Text component={Link} to='/sellonmogo'>
                <p>Sell on Mogo</p>
              </Text>
            </div>
          </div>
          <div className="preheader-container-location-currency-user">
            <div onClick={() => setModalOpen(true)} className="preheader-container-location-currency-user-location">
              {/* <div className="preheader-container-location-currency-user-location-image">
                <img src={map} alt="Loaction" />
              </div> */}
              <div className="preheader-container-location-currency-user-location-text">
                <MapPin strokeWidth={1} size={'1.1rem'} />
                <p>Location</p>
              </div>
            </div>
            <Select
              zIndex={1234568}
              defaultValue="india"
              itemComponent={SelectItem}
              value={languageState.label}
              className='lang-select'
              rightSection={<ChevronDown color='white' strokeWidth={1} size="1.2rem" />}
              onChange={(e) => setValueIcon(e)}
              icon={filterData[0].icon}
              data={languageState}
              transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
            />
            <div className="preheader-container-location-currency-user-currency">
              <Select
                zIndex={1234568} defaultValue={currencyArray[0].value}
                rightSection={<ChevronDown color='white' strokeWidth={1} size="1.2rem" />}
                data={currencyArray}
              />
            </div>
            <Menu zIndex={1234568}>
              <Menu.Target>
                <Flex style={{ cursor: 'pointer' }} align={'center'} gap={'0.4rem'}>
                  <Avatar size={'2rem'} radius="lg"
                    src={
                      userData.profile_image
                        ? `${config.baseUrlApi}/assets/userprofile/${userData.profile_image}`
                        : ''
                    }
                  />
                  <p>
                    {
                      userData.first_name ?
                        userData.first_name :
                        ' Login'
                    }
                  </p>
                  <ChevronDown color='rgb(168, 147, 135)' strokeWidth={1} size="1.2rem" />
                </Flex>
              </Menu.Target>
              <Menu.Dropdown>
                <div className="preheader-container-location-currency-user-user-dropdown">
                  {
                    userData.first_name ?
                      <p>
                        <Center color='black' p='lg'>
                          {userData.first_name} {userData.last_name}
                        </Center>
                      </p>
                      : <div className="preheader-container-location-currency-user-user-dropdown-signin">
                        <Menu.Item
                          className='preheader-container-location-currency-user-user-dropdown-signin-button'
                          onClick={() => setLoginModalOpen(true)}
                        >
                          Signin
                        </Menu.Item>
                        <p onClick={() => setRegisterModalOpen(true)}>
                          <Menu.Item
                            p={0}
                            className='preheader-container-location-currency-user-user-dropdown-signin-p'
                          >
                            New Customer ?
                            &nbsp;
                            <span>
                              Start here
                            </span>
                          </Menu.Item>
                        </p>
                      </div>
                  }
                  <hr />
                  <div className="preheader-container-location-currency-user-user-dropdown-extra">
                    <p>
                      <Menu.Item
                        onClick={!sessionStorage.getItem('MogoUserAccessToken101') && handleYourAccount}
                        component={Link} to={`${sessionStorage.getItem('MogoUserAccessToken101') ?
                          '/your_account' : '/'
                          }`} className="navbar-link">
                        Your Account
                      </Menu.Item>
                    </p>
                    <p>
                      <Menu.Item
                        onClick={!sessionStorage.getItem('MogoUserAccessToken101') && handleYourAccount}
                        component={Link} to={`${sessionStorage.getItem('MogoUserAccessToken101') ?
                          '/your_orders' : '/'
                          }`}
                      >
                        Your Orders
                      </Menu.Item>
                    </p>
                    <p>
                      <Menu.Item>
                        Seller Account
                      </Menu.Item>
                    </p>
                    <p>
                      <Menu.Item>
                        Become Seller
                      </Menu.Item>
                    </p>
                    {
                      userData.first_name &&
                      <p onClick={handleLogout}>
                        <Menu.Item>
                          Log out
                        </Menu.Item>
                      </p>
                    }

                  </div>
                </div>
              </Menu.Dropdown>
            </Menu>
            {/* <div className="preheader-container-location-currency-user-user">
              <div className="preheader-container-location-currency-user-user-image">
                <img src={user} alt="user-icon" />
              </div>
              <div className="preheader-container-location-currency-user-user-dropdown">
                <div className="preheader-container-location-currency-user-user-dropdown-signin">
                  <button onClick={() => setLoginModalOpen(true)}>Signin</button>
                  <p onClick={() => setRegisterModalOpen(true)}>New Customer ? <span>Start here</span></p>
                </div>
                <hr />
                <div className="preheader-container-location-currency-user-user-dropdown-extra">
                  <p>Your Account</p>
                  <p>Your Orders</p>
                  <p>Seller Account</p>
                  <p>Become Seller</p>
                </div>
              </div>
            </div> */}
          </div>
        </Container>
      </div>

      {/* model starts */}
      <Modal
        zIndex={1234569}
        size="md"
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title=""
        transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
        className='preheader-location-modal'
        centered
      >
        <div className="preheader-location-modal-header">
          <h1>Select Location</h1>
        </div>
        <div className="preheader-location-modal-body">
          <div className="preheader-location-modal-body-head">
            <p>Mogo allows you to shop from anywhere in the world.</p>
          </div>
          <div className="preheader-location-modal-body-content">
            <Input
              icon={<img src={map} alt="map-marker-icon" width="15" />}
              placeholder="Enter Location"
            />
            <button>Update Location</button>
          </div>
        </div>
      </Modal>
      {/* modal end */}
      {/* Register model starts */}
      <Modal
        zIndex={1234569}
        size="md"
        centered
        opened={registermodalOpen}
        onClose={() => setRegisterModalOpen(false)}
        title=""
        transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
        className='preheader-register-modal'
      >
        <div className="preheader-register-modal-header">
          <h1>Register</h1>
        </div>
        <div className="preheader-register-modal-body">
          <div className="preheader-register-modal-body-content">
            <Input.Wrapper label="First Name"
              error={`${validateUserRegisterValue.first_name === 1 ? 'Please Enter First Name' : ''
                }`}
            >
              <Input
                value={userRegisterValue.first_name}
                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, first_name: e.target.value })}
                placeholder="First Name"
              />
            </Input.Wrapper>
            <Input.Wrapper
              label='Last Name'
              error={`${validateUserRegisterValue.last_name === 1 ? 'Please Enter Last Name' : ''
                }`}
            >
              <Input
                value={userRegisterValue.last_name}
                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, last_name: e.target.value })}
                placeholder="Last Name"
              />
            </Input.Wrapper>
            <Input.Wrapper
              label='Email '
              error={`${validateUserRegisterValue.email === 1 ? 'Please Enter Email' :
                validateUserRegisterValue.email === 2 ? 'Please Enter Valid Email Address' :
                  ''
                }`}
            >
              <Input
                value={userRegisterValue.email}
                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, email: e.target.value })}
                placeholder="Email Address"
              />
            </Input.Wrapper>
            <Input.Wrapper
              label='Password '
              error={`${validateUserRegisterValue.password === 1 ? 'Please Enter Password' : ''
                }`}
            >
              <PasswordInput
                value={userRegisterValue.password}
                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, password: e.target.value })}
                placeholder="Password"
                className='preheader-register-model-password-show-hide-btn'
              />
            </Input.Wrapper>
            <Input.Wrapper
              label='Conform Password '
              error={`${validateUserRegisterValue.conform_password === 1 ? 'Please Enter Conform Password' :
                validateUserRegisterValue.conform_password === 2 ? `Conform password doesn't match with password ` :
                  ''
                }`}
            >
              <PasswordInput
                value={userRegisterValue.conform_password}
                onChange={(e) => setUserRegisterValue({ ...userRegisterValue, conform_password: e.target.value })}
                placeholder="Confirm Password"
                className='preheader-register-model-password-show-hide-btn'
              />
            </Input.Wrapper>
            <Checkbox
              onChange={(e) => setValidateUserRegisterValue({ ...validateUserRegisterValue, check_box: e.currentTarget.checked })}
              className='preheader-register-model-checkbox'
              label={
                <>
                  I have read and agree to the{' '}
                  <Link onClick={() => setRegisterModalOpen(false)} to="/terms-and-conditions" className='preheader-register-model-tearms-and-conditions-link'>Terms & Conditions</Link>
                </>
              }
            />
            <Button
              disabled={!validateUserRegisterValue.check_box}
              onClick={handleRegisterClick}
            >
              Register
            </Button>
            <p className='preheader-register-model-goto-login'>Have an account? <span onClick={() => { setRegisterModalOpen(false); setLoginModalOpen(true); }}>Login</span></p>
          </div>
        </div>
      </Modal>
      {/*Register modal end */}
      {/* Login model starts */}
      <Modal
        zIndex={1234569}
        size="md"
        centered
        opened={loginmodalOpen}
        onClose={() => setLoginModalOpen(false)}
        title=""
        transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
        className='preheader-login-modal'
      >
        <div className="preheader-login-modal-header">
          <h1>Login</h1>
        </div>
        <div className="preheader-login-modal-body">
          <div className="preheader-login-modal-body-content">
            <Input.Wrapper
              label="Email Id"
              error={`${userLoginValidation.email === 1 ?
                'Please Enter Email id' :
                userLoginValidation.email === 2 ?
                  'Please Enter Valid Email id' :
                  userLoginValidation.email === 3 ?
                    'Email not found' : ''
                }`}
            >
              <Input
                placeholder="Email Address"
                value={userLogin.email}
                onChange={(e) => setuserLogin({ ...userLogin, email: e.target.value })}
              />
            </Input.Wrapper>
            <Input.Wrapper
              label="Password"
              error={`${userLoginValidation.password === 1 ?
                'Please Enter Password' :
                userLoginValidation.password === 2 ?
                  'Incorrect Password' : ''
                }`}
            >
              <PasswordInput
                placeholder="Password"
                className='preheader-login-model-password-show-hide-btn'
                value={userLogin.password}
                onChange={(e) => setuserLogin({ ...userLogin, password: e.target.value })}
              />
            </Input.Wrapper>
            <p className='preheader-login-model-goto-forgot-password' onClick={() => { setForgotModalOpen(true); setLoginModalOpen(false); }}>Forgot Password?</p>
            <button
              onClick={handleLogin}
            >
              Login</button>
            <p className='preheader-login-model-goto-login'>Don't have an account? <span onClick={() => { setRegisterModalOpen(true); setLoginModalOpen(false); }}>Register</span></p>
          </div>
        </div>
      </Modal>
      {/*Login modal end */}
      {/* Forgot model starts */}
      <Modal
        zIndex={12121}
        size="md"
        centered
        opened={forgotmodalOpen}
        onClose={() => setForgotModalOpen(false)}
        title=""
        transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
        className='preheader-login-modal'
      >
        <div className="preheader-login-modal-header">
          <h1>Reset Password</h1>
        </div>
        <div className="preheader-login-modal-body">
          <div className="preheader-login-modal-body-content">
            <p className='preheader-forgot-model-sub-heading'>Enter your email address</p>
            <Input
              placeholder="Email Address"
            />
            <Input
              placeholder="OTP In Email"
            />
            <button>Submit</button>
          </div>
        </div>
      </Modal>
      {/*Forgot modal end */}
    </div>
  )
}

export default Preheader