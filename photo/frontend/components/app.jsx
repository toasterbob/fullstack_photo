import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="home">
    <div className="header"><img src="http://res.cloudinary.com/dseky3p5e/image/upload/c_scale,w_210/v1484119573/v8_c5rdfy.png" /></div>
    <div className="splash">
      <GreetingContainer />
      { children }
    </div>
  </div>
);

export default App;
