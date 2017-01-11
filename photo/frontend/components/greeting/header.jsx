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

     &nbsp; fadf &nbsp;

    <button className="header-button" onClick={signupButton}>Sign up</button>

  </nav>
);

const personalHeader = (currentUser, logout) => (

  <hgroup className="header-group">
    <div>
      Hi, adfds {currentUser.username}!
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  </hgroup>
);

const Header = ({ currentUser, logout}) => (
  currentUser ? personalHeader(currentUser, logout) : sessionLinks()
);

export default Header;
