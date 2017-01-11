import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="home">
    <div className="header"><h1>Photo Journal</h1></div>
    <div className="splash">
      <GreetingContainer />
      { children }
    </div>
  </div>
);

export default App;
