
import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
// import {signup, login, logout} from './actions/session_actions';
import configureStore from './store/store.js';
// import Root from './components/root';
//
// document.addEventListener('DOMContentLoaded', () => {
//     let store;
//     if (window.currentUser) {
//       const preloadedState = { session: { currentUser: window.currentUser } };
//       store = configureStore(preloadedState);
//     } else {
//       store = configureStore();
//     }
//     //const store = configureStore();
//     const root = document.getElementById('root');
//     window.store = store;
//     window.login = login;
//     window.logout = logout;
//     ReactDOM.render(<Root store={ store }/>, root);
// });
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = configureStore();
    ReactDOM.render(<h1>Welcome to Photo Journal</h1>, root);
});
