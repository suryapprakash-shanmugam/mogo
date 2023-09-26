import React from 'react';

import './NumericInput.css'

function NumericInput({ value, onChange, label }) {
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

        // Allow only numeric characters and a single decimal point
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
            />
        </div>
    );
}

export default NumericInput