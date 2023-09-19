//import react packages
import React from 'react'

//import mantine packages
import { Container, Input, PasswordInput, Text } from '@mantine/core'

//import react router dom packages
import { Link } from 'react-router-dom'

//import Login css
import './Login.css'

//import images
import logo from '../../../assets/Mogo-Logo.png'
import email from '../../../assets/product/email.webp'



const Login = () => {
    return (
        <div>
            <div className="login-div">
                <Container className='login-div-container' size={'82rem'}>
                    <div className="login-div-container-main">
                        <div className="login-div-container-main-card">
                            <div className="login-div-container-main-card-heading">
                                <div className="login-div-container-main-card-heading-logo">
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                            <div className="login-div-container-main-card-content">
                                <div className="login-div-container-main-card-content-heading">
                                    <h4>Login</h4>
                                </div>
                                <div className="login-div-container-main-card-content-form">
                                    <div className="login-div-container-main-card-content-form-individual">
                                        <Input.Wrapper>
                                            <Input
                                                rightSection={<img src={email} width={15} alt='email icon' />}
                                                placeholder="Your email" />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="login-div-container-main-card-content-form-individual">
                                        <PasswordInput
                                            rightSection={<img src={email} width={15} alt='email icon' />}
                                            placeholder="Password"
                                            radius="xs"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Text component={Link} to={'/'}><p className='goto-home'>Go to the Homepage</p></Text>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Login