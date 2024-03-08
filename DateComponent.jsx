import React from 'react';

const DateComponent = ({ date }) => {
    const estDate = new Date(date);
    estDate.setHours(estDate.getHours() - 5); // Adjust for EST timezone (5 hours behind UTC)

    return (
        <div>
            <p>Original Date: {date}</p>
            <p>EST Date: {estDate.toString()}</p>
        </div>
    );
};

export default DateComponent;