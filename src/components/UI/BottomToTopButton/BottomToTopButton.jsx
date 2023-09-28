//import react packages
import React, { useState, useEffect } from 'react';

//import BottomToTopButton css file
import './BottomToTopButton.css';

//import uparrow image from assets
import uparrow from '../../../assets/uparrow.webp'

function BottomToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    return (
        <img src={uparrow} alt="bottom to top" className={`bottom-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop} />
    );
}

export default BottomToTopButton;
