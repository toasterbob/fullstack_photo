
import React from 'react';
import ReactDOM from 'react-dom';
//import {signup, login, logout} from './util/session_api_util';
import {uploadPhoto} from './actions/photo_actions';
import configureStore from './store/store.js';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    const root = document.getElementById('root');
     window.store = store;
     window.uploadPhoto = uploadPhoto;
    Modal.setAppElement(document.body);
    ReactDOM.render(<Root store={ store }/>, root);
});
