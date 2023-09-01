//import react package
import { Container, Modal, Select } from '@mantine/core'
import React, { useState } from 'react'

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
                <img src={map} alt="Loaction Image" />
              </div>
              <div className="preheader-container-location-currency-user-location-text">
                <p>Location</p>
              </div>
            </div>
            <div className="preheader-container-location-currency-user-currency">
              <Select
                defaultValue={currencyArray[0].value}
                rightSection={<img height={'10px'} src={arrowdown} />}
                data={currencyArray}
              />
            </div>
            <div className="preheader-container-location-currency-user-user">
              <div className="preheader-container-location-currency-user-user-image">
                <img src={user} />
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
      <Modal
        size="lg"
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Select Location"
        transitionProps={{ transition: 'fade', duration: 350, timingFunction: 'linear' }}
      // className='category-modal-style'
      >

      </Modal>
    </div>
  )
}

export default Preheader