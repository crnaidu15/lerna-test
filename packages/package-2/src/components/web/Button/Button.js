import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={() => alert('hi')}>
                Web Button
            </button>
        )
    }
}

export default Button;