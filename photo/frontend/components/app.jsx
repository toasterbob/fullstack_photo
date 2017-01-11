import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div className="home">
    <div className="header">
      <div>
        <img src="http://res.cloudinary.com/dseky3p5e/image/upload/c_scale,w_142/v1484119573/v8_c5rdfy.png" />
      </div>
      <div>
        <HeaderContainer />

      </div>
    </div>
    <div className="splash">


      { children }

      <div className="titles">
        <br />
        <h1> Tell your life story in pictures</h1>
        <h2>Showcase your adventures, share your amazing photos, stay inspired!</h2>

      </div>
    </div>
  </div>
);

export default App;
