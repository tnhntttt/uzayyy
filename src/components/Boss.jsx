import React from 'react';
import './Boss.css'; // Assuming you have a CSS file for custom styles

const Boss = () => {
    const health = 100; // Replace with actual health state
    const phase = 1; // Replace with actual phase state

    return (
        <div className='boss-container'>
            <div className='boss-sprite'>
                {/* Add your boss sprite image here */}
                <img src='path/to/boss-sprite.png' alt='Boss' />
            </div>
            <div className='health-bar'>
                <div className='health' style={{ width: `${health}%` }}></div>
            </div>
            <div className='phase-indicator'>
                Phase: {phase}
            </div>
        </div>
    );
};

export default Boss;