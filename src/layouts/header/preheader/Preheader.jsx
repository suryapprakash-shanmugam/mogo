//import react package
import React, { useState } from 'react'

//import manitine packages
import { Container, Input, Modal, Select } from '@mantine/core'


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

  return (
    <div>
      <div className="preheader">
        <Container size={'82rem'} className='preheader-container'>
          <div className="preheader-container-contact-sell">
            <div className="preheader-container-contact-sell-contact">
              <p>Contact</p>
            </div>
            <div className="preheader-container-contact-sell-sell">
              <p>Sell on Mogo</p>
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
                  <button>Signin</button>
                  <p>New Customer ? <span>Start here</span></p>
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
    </div>
  )
}

export default Preheader