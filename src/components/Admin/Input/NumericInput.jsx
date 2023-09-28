import React from 'react';

import './NumericInput.css'

function NumericInput({ value, onChange, label, placeholder }) {
    const handleInputChange = (event) => {
        let numericValue = event.target.value;
        // Ensure that there's only one decimal point
        const parts = numericValue.split('.');
        if (parts.length > 2) {
            // If there are more than one decimal points, remove extras
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