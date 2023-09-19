//import react package
import React, { useState } from 'react'

//import manitine packages
import { Checkbox, Container, Input, Modal, PasswordInput, Select, Text } from '@mantine/core'


//import react router dom packages
import { Link } from 'react-router-dom'

//import Preheader css file
import './Preheader.css'

//import images for preheader
import map from '../../../assets/preheader/map.webp'
import arrowdown from '../../../assets/preheader/arrow-down.webp'
import user from '../../../assets/preheader/user.webp'

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
              <div className="preheader-container-location-currency-user-location-image">
                <img src={map} alt="Loaction" />
              </div>
              <div className="preheader-container-location-currency-user-location-text">
                <p>Location</p>
              </div>
            </div>
            <div className="preheader-container-location-currency-user-currency">
              <Select
                defaultValue={currencyArray[0].value}
                rightSection={<img height={'10px'} alt="arrowdown" src={arrowdown} />}
                data={currencyArray}
              />
            </div>
            <div className="preheader-container-location-currency-user-user">
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
            </div>
          </div>
        </Container>
      </div>

      {/* model starts */}
      <Modal
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
        size="md"
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
            <Input
              placeholder="First Name"
            />
            <Input
              placeholder="Last Name"
            />
            <Input
              placeholder="Email Address"
            />
            <PasswordInput
              placeholder="Password"
              className='preheader-register-model-password-show-hide-btn'
            />
            <PasswordInput
              placeholder="Confirm Password"
              className='preheader-register-model-password-show-hide-btn'
            />
            <Checkbox
              className='preheader-register-model-checkbox'
              label={
                <>
                  I have read and agree to the{' '}
                  <Link onClick={() => setRegisterModalOpen(false)} to="/terms-and-conditions" className='preheader-register-model-tearms-and-conditions-link'>Terms & Conditions</Link>
                </>
              }
            />
            <button>Register</button>
            <p className='preheader-register-model-goto-login'>Have an account? <span onClick={() => { setRegisterModalOpen(false); setLoginModalOpen(true); }}>Login</span></p>
          </div>
        </div>
      </Modal>
      {/*Register modal end */}
      {/* Login model starts */}
      <Modal
        size="md"
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
            <Input
              placeholder="Email Address"
            />
            <PasswordInput
              placeholder="Password"
              className='preheader-login-model-password-show-hide-btn'
            />
            <p className='preheader-login-model-goto-forgot-password' onClick={() => { setForgotModalOpen(true); setLoginModalOpen(false); }}>Forgot Password?</p>
            <button>Login</button>
            <p className='preheader-login-model-goto-login'>Don't have an account? <span onClick={() => { setRegisterModalOpen(true); setLoginModalOpen(false); }}>Register</span></p>
          </div>
        </div>
      </Modal>
      {/*Login modal end */}
      {/* Forgot model starts */}
      <Modal
        size="md"
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