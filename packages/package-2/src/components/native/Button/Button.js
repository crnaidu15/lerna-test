import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={() => alert('hi')}>
               Native Button
            </button>
        )
    }
}

export default Button;