import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="home">
    <div className="header"><img src="http://res.cloudinary.com/dseky3p5e/image/upload/c_scale,w_186/v1484119092/v7_uvpirv.png" /></div>
    <div className="splash">
      <GreetingContainer />
      { children }
    </div>
  </div>
);

export default App;
