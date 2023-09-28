//import react packages
import React, { useState } from 'react';

//import icons
import lock from '../../../assets/admin/login/lock.webp';
import unlock from '../../../assets/admin/login/unlock.webp';

//import CustomPasswordInput css
import './CustomPasswordInput.css'
import { Input } from '@mantine/core';

const CustomPasswordInput = ({ placeholder, passwordOnchange, validateData }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Input.Wrapper
            error={`${validateData.password === 1 ? 'Please Enter Password' :
                validateData.password === 2 ? 'Invalid Password' : ''
                }`}>
            <div className="custom-password-input">
                <input
                    onChange={(e) => passwordOnchange(e)}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    className="password-input"
                />
                <img
                    src={showPassword ? unlock : lock}
                    alt={showPassword ? 'unlock icon' : 'lock icon'}
                    className="lock-icon"
                    onClick={togglePasswordVisibility}
                />
            </div>
        </Input.Wrapper>
    );
};

export default CustomPasswordInput;