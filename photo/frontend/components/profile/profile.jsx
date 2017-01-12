import React from 'react';
import HeaderContainer from '../header/header_container';

class Profile extends React.Component {
	constructor(props) {
		super(props);

	}


  render() {
    return (
      <div>

        <HeaderContainer />
        <br/>
        <h1>Welcome to your profile page!</h1>
        <h2>It's amazing!</h2>
      </div>
    );
  }
}

export default Profile;
