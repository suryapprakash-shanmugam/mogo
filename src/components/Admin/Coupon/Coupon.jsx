import React, { useState } from 'react';
import './Coupon.css';

function Coupon({ onChange }) {
  const [randomString, setRandomString] = useState('');
  const [customValue, setCustomValue] = useState('');
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijhlmnopqrstuvwxyz';
    let result = '';
    const length = 8;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    setRandomString(result);
    setIsInputDisabled(true);
    const combinedValue = customValue + result;
    if (typeof onChange === 'function') {
      onChange({ target: { value: combinedValue } });
    }
  };

  const handleCustomValueChange = (e) => {
    setCustomValue(e.target.value);
  };

  const clearGeneratedString = () => {
    setRandomString('');
    setIsInputDisabled(false);
  };

  return (
    <div>
      <div className="coupon-component-div">
        <label>Coupon Code</label>
        <div className="coupon-component-div-form">
          <input
            type="text"
            value={customValue + randomString}
            placeholder="Coupon Code"
            onChange={handleCustomValueChange}
            disabled={isInputDisabled}
          />
          <button onClick={generateRandomString} disabled={isInputDisabled}>Generate</button>
          <button className='coupon-clear-button' onClick={clearGeneratedString}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
