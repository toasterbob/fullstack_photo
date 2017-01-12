import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.demoLogin = this.demoLogin.bind(this);
	}

  demoLogin(e) {
    e.preventDefault();
    this.props.guestUser();
  }

  render() {
    return (
      <button className="header-button" onClick={this.demoLogin}> Guest Demo</button>
    );
  }
}

export default Title;
