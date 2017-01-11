import React from 'react';
import { Link, hashHistory } from 'react-router';

const loginButton = e => {
  e.preventDefault();
  hashHistory.push("/login");
};

const signupButton = e => {
  e.preventDefault();
  hashHistory.push("/signup");
};

const sessionLinks = () => (
  <nav className="login-signup">

    <button className="header-button" onClick={loginButton}>Login</button>

     &nbsp; &nbsp;
     
    <button className="header-button" onClick={signupButton}>Sign up</button>

  </nav>
);

const personalGreeting = (currentUser, logout) => (

  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
