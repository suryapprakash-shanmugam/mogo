//import react packages
import React from 'react'

//import mantine packages
import { Container } from '@mantine/core'

// import TermsAndConditions css
import './TermsAndConditions.css'

//import Breadcrumb component
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';

const TermsAndConditions = () => {

  // array for breadcrumb
  const items = [
    { title: 'Home', href: '/' },
    { title: 'Terms and Conditions', href: '/terms-and-conditions' },
  ];

  return (
    <div>
      <div className="terms-and-conditions-div">
        <Container className='terms-and-conditions-div-container' size={'82rem'}>
          <div className="category-div-container-breadcrumb">
            <Breadcrumb value={items} />
          </div>
          <div className="terms-and-conditions-div-container-heading">
            <h1>Terms & Conditions</h1>
            <p>Welcome to Mogo! These terms and conditions (the “Agreement”) govern your use of the Mogo website (the “Site”) and the services offered by Mogo (the “Services”). Please read these terms carefully before using the Site or the Services. By using the Site or the Services, you agree to be bound by these terms and conditions.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>Description of Services:</h1>
            <p>Mogo is an e-commerce website that allows users to buy and sell products, including but not limited to, fashion, beauty, home and garden, electronics, and more. Mogo provides a platform for buyers and sellers to connect and facilitate transactions. Mogo is not responsible for the quality, safety, or legality of any products listed on the Site.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>User Accounts:</h1>
            <p>In order to access certain features of the Site or use the Services, you must create an account with Mogo. You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify Mogo immediately of any unauthorized use of your account or password, or any other breach of security.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>Listing and Selling Products:</h1>
            <p>As a seller on Mogo, you agree to comply with all applicable laws and regulations. You are solely responsible for the products you list and sell on the Site, including but not limited to, the accuracy of the product description, pricing, and shipping information. You agree to fulfill all orders promptly and to the buyer’s satisfaction. Mogo may remove or suspend any listing that violates these terms and conditions.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>Buying Products:</h1>
            <p>As a buyer on Mogo, you agree to comply with all applicable laws and regulations. You are solely responsible for the purchases you make on the Site, including but not limited to, reviewing the product description, pricing, and shipping information. You agree to pay for all purchases promptly and to contact the seller or Mogo if there are any issues with the product.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>Payment:</h1>
            <p>Mogo uses third-party payment processors to facilitate transactions. Mogo is not responsible for any errors, fees, or other issues related to these payment processors. You agree to pay all fees associated with your use of the Site and the Services.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>Intellectual Property:</h1>
            <p>Mogo owns all intellectual property rights related to the Site and the Services, including but not limited to, trademarks, logos, and copyrights. You may not use any of Mogo’s intellectual property without prior written consent.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>Privacy Policy:</h1>
            <p>Mogo respects your privacy and has a Privacy Policy that explains how we collect, use, and disclose information. By using the Site or the Services, you agree to be bound by the Privacy Policy.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>Disclaimer of Warranties:</h1>
            <p>Mogo provides the Site and the Services “as is” and without warranty of any kind. Mogo makes no representations or warranties, express or implied, including but not limited to, warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>Limitation of Liability:</h1>
            <p>Mogo is not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or the Services, even if Mogo has been advised of the possibility of such damages. Mogo’s total liability in connection with the Site or the Services is limited to the fees paid by you for the use of the Services.</p>
          </div>
          <div className="terms-and-conditions-div-container-details">
            <h1>Indemnification:</h1>
            <p>You agree to indemnify and hold harmless Mogo, its affiliates, and their respective officers, directors, employees, and agents from any and all claims, damages, expenses, or liabilities arising out of or related to your use of the Site or the Services, your violation of these terms and conditions</p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default TermsAndConditions