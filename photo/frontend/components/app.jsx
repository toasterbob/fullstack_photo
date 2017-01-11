import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div className="home">

    <HeaderContainer />

    <div className="splash">

      { children }

      <div className="titles">
        <br />
        <div className="title-text">

          <h1> Tell your life story in pictures</h1>
          <h2>Showcase your adventures, share your amazing photos, stay inspired!</h2>
          <br/> <br/><br/> <br/>
        </div>
      </div>
    </div>
  </div>
);

export default App;
