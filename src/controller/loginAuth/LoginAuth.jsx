import { showNotification } from "@mantine/notifications"
import { loginAdmin } from "../../config/quries/Quries"
import { ThemeIcon } from "@mantine/core"
import { CircleCheck, X } from "tabler-icons-react"
import { setLoginStatus } from "../../StateHandler/Slice/Login/LoginSlice"

export const hanldeLoginAdmin = async (loginData, dispatch, setValidateData, validateData, naviagate) => {
    const {
        email,
        password
    } = loginData
    const payload = {
        email: email.trim(),
        password: password.trim()
    }
    if (email.trim()) {
        if (email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            if (password.trim()) {
                await loginAdmin(payload)
                    .then((result) => {
                        sessionStorage.setItem('MogoAdminAccessToken101', result.data?.data?._id)
                        sessionStorage.setItem('MogoAdminAccessToken102', result.data?.data?.accessToken)
                        showNotification({
                            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                                <CircleCheck color="green" />
                            </ThemeIcon>,
                            message: "Login Successfull",

                        })
                        dispatch(setLoginStatus(true))
                        window.location.reload(naviagate('/admin_dashboard'))
                    })
                    .catch((error) => {
                        if (error.response?.data?.error == 'Invalid Password!') {
                            showNotification({
                                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                    <X color="red" />
                                </ThemeIcon>,
                                message: "Invalid Password",
                            })
                            setValidateData({ ...validateData, password: 2 })
                        }
                        else if (error?.response?.status == 500) {
                            showNotification({
                                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                    <X color="red" />
                                </ThemeIcon>,
                                message: "User Not Found",
                            })
                            setValidateData({ ...validateData, email: 2 })
                        }
                    })
            }
            else {
                setValidateData({ ...validateData, password: 1 })
            }
        }
        else {
            setValidateData({ ...validateData, email: 2 })
        }
    }
    else {
        setValidateData({ ...validateData, email: 1 })
    }
}