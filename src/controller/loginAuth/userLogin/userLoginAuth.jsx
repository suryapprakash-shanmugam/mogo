import { showNotification } from "@mantine/notifications"
import { userLoginAPI, userRegisterAPI } from "../../../config/quries/users/usersQuery"
import { ThemeIcon } from "@mantine/core"
import { CircleCheck, X } from "tabler-icons-react"
import { setUserData } from "../../../StateHandler/Slice/UserSlice/UserSliceData"

export const handleRegisterControl = async (
    userRegisterValue,
    setUserRegisterValue,
    validateUserRegisterValue,
    setValidateUserRegisterValue,
    setRegisterModalOpen
) => {
    const {
        first_name,
        last_name,
        email,
        password,
        conform_password
    } = userRegisterValue
    const payload = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    }
    if (first_name.trim()) {
        if (last_name.trim()) {
            if (email.trim()) {
                if (email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    if (password.trim()) {
                        if (conform_password.trim()) {
                            if (password.trim() === conform_password.trim()) {
                                await userRegisterAPI(payload)
                                    .then((result) => {
                                        setUserData(result.data?.data)
                                        sessionStorage.setItem('MogoUserAccessToken101', result.data?.data?.insertedId)
                                        sessionStorage.setItem('MogoUserAccessToken102', result.data?.data?.accessToken)
                                        showNotification({
                                            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                                                <CircleCheck color="green" />
                                            </ThemeIcon>,
                                            message: "Register Successfully",
                                        })
                                        setRegisterModalOpen(false)
                                        setUserRegisterValue({
                                            ...userRegisterValue,
                                            first_name: '',
                                            last_name: '',
                                            email: '',
                                            password: '',
                                            conform_password: ''
                                        })
                                    })
                                    .catch(() => {
                                        showNotification({
                                            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                                <X color="red" />
                                            </ThemeIcon>,
                                            message: "Error Registering User",

                                        })
                                    })
                            }
                            else {
                                setValidateUserRegisterValue({ ...validateUserRegisterValue, conform_password: 2 })
                            }
                        }
                        else {
                            setValidateUserRegisterValue({ ...validateUserRegisterValue, conform_password: 1 })
                        }
                    }
                    else {
                        setValidateUserRegisterValue({ ...validateUserRegisterValue, password: 1 })
                    }
                }
                else {
                    setValidateUserRegisterValue({ ...validateUserRegisterValue, email: 2 })
                }
            } else {
                setValidateUserRegisterValue({ ...validateUserRegisterValue, email: 1 })
            }
        }
        else {
            setValidateUserRegisterValue({ ...validateUserRegisterValue, last_name: 1 })
        }
    }
    else {
        setValidateUserRegisterValue({ ...validateUserRegisterValue, first_name: 1 })
    }
}


export const handleLoginControl = async (
    userLogin,
    setuserLogin,
    userLoginValidation,
    setUserLoginValidation,
    setLoginModalOpen
) => {
    const {
        email, password
    } = userLogin
    const payload = {
        email: email,
        password: password
    }
    if (email.trim()) {
        if (email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            if (password.trim()) {
                await userLoginAPI(payload)
                    .then((result) => {
                        sessionStorage.setItem('MogoUserAccessToken101', result.data?.data?._id)
                        sessionStorage.setItem('MogoUserAccessToken102', result.data?.data?.accessToken)
                        showNotification({
                            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                                <CircleCheck color="green" />
                            </ThemeIcon>,
                            message: "Login Successfully",
                        })
                        setuserLogin({
                            ...userLogin,
                            email: '',
                            password: ''
                        })
                        setLoginModalOpen(false)
                    })
                    .catch((err) => {
                        if (err.response.status == 401) {
                            showNotification({
                                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                    <X color="red" />
                                </ThemeIcon>,
                                message: "Incorrect Password",
                            })
                            setUserLoginValidation({ ...userLoginValidation, password: 2 })
                        }
                        else if (err.response.status == 500) {
                            showNotification({
                                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                                    <X color="green" />
                                </ThemeIcon>,
                                message: "User Not Found",
                            })
                            setUserLoginValidation({ ...userLoginValidation, email: 3 })
                        }
                    })
            }
            else {
                setUserLoginValidation({ ...userLoginValidation, password: 1 })
            }
        }
        else {
            setUserLoginValidation({ ...userLoginValidation, email: 2 })
        }
    }
    else {
        setUserLoginValidation({ ...userLoginValidation, email: 1 })
    }
}