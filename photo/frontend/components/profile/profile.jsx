import React from 'react';
import HeaderContainer from '../header/header_container';
import {defaultCoverPic, defaultProfilePic} from '../links';


let coverPic = defaultCoverPic;
let profilePic = defaultProfilePic;

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}



  render() {
    return (
      <div>

        <HeaderContainer />

        <div className="profile">
          <div className="cover-photo" style={{backgroundImage: `url('${coverPic}')`, height: "300px", width: "auto"}} >

          </div>
					<div className="cover-photo"
								style={{backgroundImage: `url('${defaultProfilePic}')`,
								height: "110px", width: "110px", margin: "-55px auto 0px auto"}} >

					</div>
          <div className="name">
            <h1>Guest User</h1>
						<br/>
						<h2>Anywhere, USA</h2>
						<h2>{this.props.currentUser.id}</h2>
						<hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
