import React from 'react';

const Star = ({ filled }) => {
    return (
        <span>
            {filled ? '★' : '☆'}
        </span>
    );
};

export default Star;
