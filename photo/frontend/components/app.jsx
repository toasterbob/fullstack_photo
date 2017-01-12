import React from 'react';
import HeaderContainer from './header/header_container';
import { hashHistory } from 'react-router';
import { login } from '../actions/session_actions';


const signupButton = e => {
  e.preventDefault();
  hashHistory.push("/signup");
};

const loginGuestButton = e => {
  e.preventDefault();
  const user = {username: "guest", password: "password"}; //need to create in database
  login(user);
};

const App = ({ children }) => {

  return (
  <div className="home">

    <HeaderContainer />

    <div className="splash">

      { children }

      <div className="titles">

        <div className="title-text">

          <h1> Tell your life story in pictures</h1>
          <h2>Showcase your adventures, share your amazing photos, stay inspired!</h2>
          <br />
          <div className="buttons">
            <button className="header-button" onClick={signupButton}> &nbsp; Get Started</button>
            <button className="header-button" onClick={loginGuestButton}>   Guest Demo </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

export default App;
