import React from 'react';

function GreetingFunc(props) {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "Morning";
    } else if (hours >= 12 && hours <= 17) {
        timeOfDay = "Afternoon";
    } else {
        timeOfDay = "Night";
    }

    return (
        <h1>Hello, Good {timeOfDay} to you!</h1>
    );
}

export default GreetingFunc;