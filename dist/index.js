// import React from 'react';
// import ReactDOM from 'react-dom';

export default function (rootDiv, React, ReactDOM) {
    class Hello extends React.Component {
        render() {
            return React.createElement('div', null, `Привет, ${this.props.toWhat}`);
        }
    }

    ReactDOM.render(
        React.createElement(Hello, {toWhat: 'мир'}, null),
        document.getElementById(rootDiv)
    );
}