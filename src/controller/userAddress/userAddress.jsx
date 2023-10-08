import { ThemeIcon } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import { CircleCheck, X } from "tabler-icons-react"

export const hanldeCreateUserAddressControl = (
    userAddress,
    setUserAddress,
    validateUserAddress,
    setValidateUserAddress
) => {
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