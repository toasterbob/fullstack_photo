import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ProfileContainer from './profile/profile_container';
import ProfileFormContainer from './profile/profile_form_container';
import PhotoContainer from './photo/photo_container';
import PhotosUserContainer from './photo/photos_user_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/profile');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } onEnter={_redirectIfLoggedIn}/>
        <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
        <Route path="/profile" component={ ProfileContainer } onEnter={_ensureLoggedIn}/>
        <Route path="/profile/:id" component={ ProfileContainer } onEnter={_ensureLoggedIn}/>
        <Route path="/photo" component={ PhotoContainer } onEnter={_ensureLoggedIn}/>
        <Route path="/photos" component={ PhotosUserContainer } onEnter={_ensureLoggedIn}/>
    </Router>
  </Provider>
);
};

export default Root;
