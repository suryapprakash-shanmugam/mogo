//import react packages
import React, { useEffect, useState } from 'react'

//import mantine packages
import { Container, Input, Text } from '@mantine/core'

//import react router dom packages
import { Link, useNavigate } from 'react-router-dom'

//import Login css
import './Login.css'

//import custompasswordinput from component
import CustomPasswordInput from '../../../components/Admin/CustomPasswordInput/CustomPasswordInput'

//import images
import logo from '../../../assets/Mogo-Logo.png'
import email from '../../../assets/product/email.webp'

// Controller
import { hanldeLoginAdmin } from '../../../controller/loginAuth/LoginAuth'

// redux State Hanlder
import { useDispatch } from 'react-redux'
import { setLoginStatus } from '../../../StateHandler/Slice/Login/LoginSlice'

const Login = () => {
    // Naviagate
    const naviagate = useNavigate()

    // reducer State 
    const dispatch = useDispatch()

    // Login Click Hanlde 
    const hanldeLoginClick = () => {
        hanldeLoginAdmin(
            loginData,
            dispatch,
            setValidateData,
            validateData,
            naviagate)
    }

    // useState
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [validateData, setValidateData] = useState({
        email: 0,
        password: 0
    })

    // Handle Password Onchange
    const passwordOnchange = (e) => {
        setLoginData({ ...loginData, password: e.target.value })
    }

    // useEffect 
    useEffect(() => {
        if (loginData.email) {
            setValidateData({ ...validateData, email: 0 })
        }
        if (loginData.password) {
            setValidateData({ ...validateData, password: 0 })
        }
    }, [loginData.email, loginData.password])

    useEffect(() => {
        if (sessionStorage.getItem('MogoAdminAccessToken102') && sessionStorage.getItem('MogoAdminAccessToken101')) {
            dispatch(setLoginStatus(true))
            window.location.reload(naviagate('/admin_dashboard'))
        }
    }, [])
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
                                        <Input.Wrapper
                                            error={
                                                `${validateData.email === 1 ? 'Please Enter Email' :
                                                    validateData.email === 2 ? 'Please Enter Valid Email' :
                                                        ''
                                                }`
                                            }
                                        >
                                            <Input
                                                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                                rightSection={<img src={email} width={15} alt='email icon' />}
                                                placeholder="Your email" />
                                        </Input.Wrapper>
                                    </div>
                                    <div className="login-div-container-main-card-content-form-individual">
                                        <CustomPasswordInput
                                            validateData={validateData}
                                            passwordOnchange={passwordOnchange}
                                            placeholder="Password" />
                                    </div>
                                    <div className="login-div-container-main-card-content-form-individual-button">
                                        <Text onClick={hanldeLoginClick}><button>Login</button></Text>
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