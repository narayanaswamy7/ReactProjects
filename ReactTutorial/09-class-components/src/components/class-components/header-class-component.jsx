import React, { Component } from 'react';

class HeaderClass extends Component {
    render() {
        return (
            <p>Welcome, {this.props.username}! (using class component)</p>
        );
    }
}

export default HeaderClass;
