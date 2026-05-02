import React from 'react';

const DifficultySelector = ({ onSelect }) => {
    return (
        <div>
            <h2>Select Difficulty</h2>
            <button onClick={() => onSelect('Easy')}>Easy</button>
            <button onClick={() => onSelect('Normal')}>Normal</button>
            <button onClick={() => onSelect('Hard')}>Hard</button>
        </div>
    );
};

export default DifficultySelector;