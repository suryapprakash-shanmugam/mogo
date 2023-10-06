export const handleRegisterControl = async (
    userRegisterValue,
    setUserRegisterValue,
    validateUserRegisterValue,
    setValidateUserRegisterValue
) => {
    const {
        first_name,
        last_name,
        email,
        password,
        conform_password
    } = userRegisterValue
    if (first_name.trim()) {
        if (last_name.trim()) {
            if (email.trim()) {
                if (email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    if (password.trim()) {
                        if (conform_password.trim()) {
                            if (password.trim() === conform_password.trim()) {
                                // await 
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