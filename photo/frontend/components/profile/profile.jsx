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

      </div>
    );
  }
}

export default Profile;
