import React, { useState } from 'react';
import './Coupon.css'

function Coupon() {
    const [randomString, setRandomString] = useState('');


    const generateRandomString = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        const length = 8;

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        setRandomString(result);
    };

    return (
        <div>
            <div className="coupon-component-div">
                <label>Coupon Code</label>
                <div className="coupon-component-div-form">
                    <input
                        type="text"
                        value={randomString}
                        placeholder="Coupon Code"
                        readOnly
                    />
                    <button onClick={generateRandomString}>Generate</button>
                </div>
            </div>
        </div>
    );
}

export default Coupon;
