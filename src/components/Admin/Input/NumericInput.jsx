import React from 'react';

import './NumericInput.css'

function NumericInput({ value, onChange, label, placeholder }) {
    const handleInputChange = (event) => {
        let numericValue = event.target.value;

        const parts = numericValue.split('.');
        if (parts.length > 2) {
            const integerPart = parts[0];
            const decimalPart = parts.slice(1).join('');
            numericValue = `${integerPart}.${decimalPart}`;
        }
        numericValue = numericValue.replace(/[^0-9.]/g, '');

        onChange(numericValue);
    };

    return (
        <div className='numeric-input-form'>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className='numeric-input'
                placeholder={placeholder}
            />
        </div>
    );
}

export default NumericInput