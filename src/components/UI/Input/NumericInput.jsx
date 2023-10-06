import React from 'react';

import './NumericInput.css'

function NumericInput({ value, onChange, label }) {
    const handleInputChange = (event) => {
        const numericValue = event.target.value === '' ? '' : event.target.value.replace(/[^0-9]/g, '');
        onChange(numericValue);
    };

    return (
        <div className='numeric-input-form'>
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className='numeric-input'
            />
        </div>
    );
}

export default NumericInput