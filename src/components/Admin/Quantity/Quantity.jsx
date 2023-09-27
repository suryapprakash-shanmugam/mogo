import React from 'react';

import './Quantity.css'

function Quantity({ value, onChange }) {
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

        if (numericValue === '' || parseFloat(numericValue) < 1) {
            onChange(''); // Set the value to an empty string for displaying the placeholder
        } else {
            onChange(numericValue);
        }
    };

    return (
        <div className='numeric-input-form'>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                // placeholder={value === '' ? 'Value should be at least 1' : ''}
                className='numeric-input'
            />
        </div>
    );
}

export default Quantity
