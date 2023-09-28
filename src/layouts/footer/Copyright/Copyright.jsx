//import react pakages
import React from 'react'

//import mantine packages
import { Container } from '@mantine/core'

//import Copyright css
import './Copyright.css'

//import images
import amex from '../../../assets/footer/copyright/amex.webp'
import discover from '../../../assets/footer/copyright/discover.webp'
import maestro from '../../../assets/footer/copyright/maestro.webp'
import mastercard from '../../../assets/footer/copyright/mastercard.webp'
import visa from '../../../assets/footer/copyright/visa.webp'

const Copyright = () => {
  return (
    <div>
      <div className="copyright-div">
        <Container className='copyright-div-container' size={'82rem'}>
          <div className="copyright-div-container-copyright">
            <p>Copyright 2023 Mogo - All Rights Reserved. Designed and Developed By Weboney</p>
          </div>
          <div className="copyright-div-container-cards">
            <img src={visa} width={35} height={22} alt="" />
            <img src={mastercard} width={35} height={22} alt="" />
            <img src={maestro} width={35} height={22} alt="" />
            <img src={discover} width={35} height={22} alt="" />
            <img src={amex} width={35} height={22} alt="" />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Copyright