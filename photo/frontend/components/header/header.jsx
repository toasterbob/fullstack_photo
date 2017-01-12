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

const logoLink = "http://res.cloudinary.com/dseky3p5e/image/upload/c_scale,w_142/v1484119573/v8_c5rdfy.png";

const sessionLinks = () => (
  <div className="header">
    <div>
      <a href="/">
        <img src={logoLink} />
      </a>
    </div>
    <div>
      <nav className="login-signup">
        <button className="header-button" onClick={loginButton}>Login</button>
        <button className="header-button" onClick={signupButton}>Sign up</button>
      </nav>
    </div>
  </div>
);

const personalHeader = (currentUser, logout) => (

  <div className="header">
    <div >
      <img src={logoLink} />
    </div>
    <div className="header-greet">
      Welcome, {currentUser.username} &nbsp;
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  </div>
);

const Header = ({ currentUser, logout}) => (
  currentUser ? personalHeader(currentUser, logout) : sessionLinks()
);

export default Header;
