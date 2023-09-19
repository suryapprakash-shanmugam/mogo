//import react packages
import React, { useState } from 'react';

//import icons
import lock from '../../../assets/admin/login/lock.webp';
import unlock from '../../../assets/admin/login/unlock.webp';

//import CustomPasswordInput css
import './CustomPasswordInput.css'

const CustomPasswordInput = ({ placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="custom-password-input">
            <input
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
    );
};

export default CustomPasswordInput;