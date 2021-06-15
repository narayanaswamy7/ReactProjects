import React from 'react';

function HeaderFunc(props) {
    return (
        <header>Welcome, {props.username}! (using functional component)</header>
    );
}

export default HeaderFunc;