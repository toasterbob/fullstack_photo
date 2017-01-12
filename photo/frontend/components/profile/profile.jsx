import React from 'react';
import HeaderContainer from '../header/header_container';


let defaultCoverPic = "https://source.unsplash.com/2oFdVd00xOg/1600x500";
let defaultProfilePic = "http://res.cloudinary.com/dseky3p5e/image/upload/c_scale,w_110/v1484255960/profile_ans18c.png";

class Profile extends React.Component {
	constructor(props) {
		super(props);
    this.coverPhoto = this.coverPhoto.bind(this);
	}

  coverPhoto(cover, photo){
    defaultCoverPic = cover;
		defaultProfilePic = photo;
  }

  render() {
    return (
      <div>

        <HeaderContainer />

        <div className="profile">
          <div className="cover-photo" style={{backgroundImage: `url('${defaultCoverPic}')`, height: "300px", width: "auto"}} >

          </div>
					<div className="cover-photo"
								style={{backgroundImage: `url('${defaultProfilePic}')`,
								height: "110", width: "110px", margin: "-55px auto 0px auto"}} >

					</div>
          <div>
            <h1>Welcome to your profile page!</h1>
            <h2>It's amazing!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
