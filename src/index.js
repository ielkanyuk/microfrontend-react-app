import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase/app";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyAslppeU148B9Azg20MOOAYwQ3N525qgy8",
    authDomain: "microfrontend-react-app.firebaseapp.com",
    databaseURL: "https://microfrontend-react-app.firebaseio.com",
    projectId: "microfrontend-react-app",
    storageBucket: "microfrontend-react-app.appspot.com",
    messagingSenderId: "1037465465598",
    appId: "1:1037465465598:web:da3437fdcbef7adfb7ebaf"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default function (rootDiv) {
    class Hello extends React.Component {
        render() {
            return React.createElement('div', null, `Привет, ${this.props.toWhat}`);
        }
    }

    ReactDOM.render(
        React.createElement(Hello, {toWhat: 'мир'}, null),
        document.getElementById(rootDiv)
    );
    // return () => ReactDOM.render(<App/>, rootDiv);
    // return () => ReactDOM.unmountComponentAtNode(rootDiv);
}