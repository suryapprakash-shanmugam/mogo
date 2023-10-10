import { ThemeIcon } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import { CircleCheck, X } from "tabler-icons-react"
import { CreateUserAddress } from "../../config/quries/Address/userAddress"
import { changePassword } from "../../config/quries/users/usersQuery"

export const hanldeCreateUserAddressControl = async (
    userAddress,
    setUserAddress,
    validateUserAddress,
    setValidateUserAddress,
    setAddressModalOpen,
    queryClient
) => {
    const token = sessionStorage.getItem('MogoUserAccessToken101')
    const {
        address_type,
        first_name,
        last_name,
        email,
        number,
        address,
        country,
        state,
        city,
        zip_code
    } = userAddress
    const payload = {
        address_type: address_type,
        first_name: first_name,
        last_name: last_name,
        email: email,
        number: number,
        user_address: address,
        country: country,
        state: state,
        city: city,
        zip_code: zip_code,
        user_id: token
    }
    if (address_type.trim()) {
        if (first_name.trim()) {
            if (last_name.trim()) {
                if (email.trim()) {
                    if (email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                        if (number.trim()) {
                            if (number.trim().match(/^\d{10}$/)) {
                                if (address.trim()) {
                                    if (country.trim()) {
                                        if (state.trim()) {
                                            if (city.trim()) {
                                                if (zip_code.trim()) {
                                                    await CreateUserAddress(payload)
                                                        .then((result) => {
                                                            showNotification({
                                                                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                                                                    <CircleCheck color="green" />
                                                                </ThemeIcon>,
                                                                message: "Address Created Successfully",
                                                            })
                                                            setAddressModalOpen(false)
                                                            queryClient.invalidateQueries('userAddress')
                                                            setUserAddress({
                                                                ...userAddress,
                                                                address_type: '',
                                                                first_name: '',
                                                                last_name: '',
                                                                email: "",
                                                                number: '',
                                                                address: '',
                                                                country: '',
                                                                state: '',
                                                                city: '',
                                                                zip_code: ''
                                                            })
                                                            setValidateUserAddress({
                                                                ...validateUserAddress,
                                                                address_type: 0,
                                                                first_name: 0,
                                                                last_name: 0,
                                                                email: 0,
                                                                number: 0,
                                                                address: 0,
                                                                country: 0,
                                                                state: 0,
                                                                city: 0,
                                                                zip_code: 0
                                                            })
                                                        })
                                                        .catch((error) => {
                                                            showNotification({
                                                                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                                                    <X color="red" />
                                                                </ThemeIcon>,
                                                                message: "Error Creating User Address",
                                                            })
                                                        })
                                                }
                                                else {
                                                    showNotification({
                                                        icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                                            <X color="red" />
                                                        </ThemeIcon>,
                                                        message: "Zip Code is Compulsory",
                                                    })
                                                    setValidateUserAddress({ ...validateUserAddress, zip_code: 1 })
                                                }
                                            }
                                            else {
                                                showNotification({
                                                    icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                                        <X color="red" />
                                                    </ThemeIcon>,
                                                    message: "City is Compulsory",
                                                })
                                                setValidateUserAddress({ ...validateUserAddress, city: 1 })
                                            }
                                        }
                                        else {
                                            showNotification({
                                                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                                    <X color="red" />
                                                </ThemeIcon>,
                                                message: "State is Compulsory",
                                            })
                                            setValidateUserAddress({ ...validateUserAddress, state: 1 })
                                        }
                                    }
                                    else {
                                        showNotification({
                                            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                                <X color="red" />
                                            </ThemeIcon>,
                                            message: "County is Compulsory",
                                        })
                                        setValidateUserAddress({ ...validateUserAddress, country: 1 })
                                    }
                                }
                                else {
                                    showNotification({
                                        icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                            <X color="red" />
                                        </ThemeIcon>,
                                        message: "Address is Compulsory",
                                    })
                                    setValidateUserAddress({ ...validateUserAddress, address: 1 })
                                }
                            }
                            else {
                                showNotification({
                                    icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                        <X color="red" />
                                    </ThemeIcon>,
                                    message: "Mobile Number is Compulsory",
                                })
                                setValidateUserAddress({ ...validateUserAddress, number: 2 })
                            }
                        }
                        else {
                            showNotification({
                                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                    <X color="red" />
                                </ThemeIcon>,
                                message: "Mobile Number is Compulsory",
                            })
                            setValidateUserAddress({ ...validateUserAddress, number: 1 })
                        }
                    }
                    else {
                        showNotification({
                            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                <X color="red" />
                            </ThemeIcon>,
                            message: "Please Enter Valid Email Address",
                        })
                        setValidateUserAddress({ ...validateUserAddress, email: 2 })
                    }
                }
                else {
                    showNotification({
                        icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                            <X color="red" />
                        </ThemeIcon>,
                        message: "Email is Compulsory",
                    })
                    setValidateUserAddress({ ...validateUserAddress, email: 1 })
                }
            }
            else {
                showNotification({
                    icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                        <X color="red" />
                    </ThemeIcon>,
                    message: "Last Name is Compulsory",
                })
                setValidateUserAddress({ ...validateUserAddress, last_name: 1 })
            }
        }
        else {
            showNotification({
                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                    <X color="red" />
                </ThemeIcon>,
                message: "First Name is Compulsory",
            })
            setValidateUserAddress({ ...validateUserAddress, first_name: 1 })
        }
    }
    else {
        showNotification({
            icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                <X color="red" />
            </ThemeIcon>,
            message: "Address Type is Compulsory",
        })
        setValidateUserAddress({ ...validateUserAddress, address_type: 1 })
    }
}



export const handleChangePasswordControl = async (
    confirmpasswordinput,
    newpasswordinput,
    oldpasswordinput,
    setconfirmpasswordInput,
    setnewpasswordInput,
    setoldpasswordInput,
    setValidatePasssword,
    validatePassword
) => {
    const payload = {
        id: sessionStorage.getItem('MogoUserAccessToken101'),
        body: {
            password: oldpasswordinput,
            new_password: newpasswordinput
        }
    }
    if (oldpasswordinput.trim()) {
        if (newpasswordinput.trim()) {
            if (confirmpasswordinput.trim()) {
                if (newpasswordinput.trim() === confirmpasswordinput.trim()) {
                    await changePassword(payload)
                        .then((res) => {
                            if (res.data.data.result == "Invalid Old Password") {
                                showNotification({
                                    icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                        <X color="red" />
                                    </ThemeIcon>,
                                    message: "Invalid Old Password",
                                })
                                setValidatePasssword({ ...validatePassword, oldPassword: 2 })
                            }
                            else {
                                showNotification({
                                    icon: <ThemeIcon variant="light" radius="xl" size="xl" color="green">
                                        <CircleCheck color="green" />
                                    </ThemeIcon>,
                                    message: "Password Changed Successfully",
                                })
                                setconfirmpasswordInput('')
                                setnewpasswordInput('')
                                setoldpasswordInput('')
                                setValidatePasssword({
                                    ...validatePassword,
                                    oldPassword: 0,
                                    newPassword: 0,
                                    confirmPassword: 0
                                })
                            }
                        })
                        .catch((err) => {
                            showNotification({
                                icon: <ThemeIcon variant="light" radius="xl" size="xl" color="red">
                                    <X color="red" />
                                </ThemeIcon>,
                                message: "user Not Allowed to Change password",
                            })
                        })
                }
                else {
                    setValidatePasssword({ ...validatePassword, confirmPassword: 2 })
                }
            }
            else {
                setValidatePasssword({ ...validatePassword, confirmPassword: 1 })
            }
        }
        else {
            setValidatePasssword({ ...validatePassword, newPassword: 1 })
        }
    }
    else {
        setValidatePasssword({ ...validatePassword, oldPassword: 1 })
    }
}