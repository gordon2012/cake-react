import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
    render() {
        return <h2>Hello {this.props.greetee}!</h2>
    }
}
