import React from 'react';
import HeaderContainer from '../header/header_container';
import {defaultCoverPic, defaultProfilePic} from '../links';
import { hashHistory } from 'react-router';


class Profile extends React.Component {
	constructor(props) {
		super(props);

	}


	componentDidMount(){
		this.props.getUser(this.props.currentUser);
	}




  render() {

		let coverPic;
		if (this.props.profile.cover_photo_url){
			coverPic = this.props.profile.cover_photo_url;
		} else {
			coverPic = defaultCoverPic;
		}

		let profilePic;
		if (this.props.profile.profile_pic_url){
			profilePic = this.props.profile.profile_pic_url;
		} else {
			profilePic = defaultProfilePic;
		}

		let firstName;
		if (this.props.profile.first_name){
			firstName = this.props.profile.first_name;
		} else {
			firstName = "Enter";
		}

		let lastName;
		if (this.props.profile.last_name){
			lastName = this.props.profile.last_name;
		} else {
			lastName = "Name";
		}

		let town;
		if (this.props.profile.city){
			town = this.props.profile.city;
		} else {
			town = "Anywhere";
		}

		let country;
		if (this.props.profile.country){
			country = this.props.profile.country;
		} else {
			country = "Planet Earth";
		}

		let bio;
		if (this.props.profile.bio){
			bio = this.props.profile.bio;
		} else {
			bio = "I really want to update my bio!";
		}

		const editButton = e => {
			e.preventDefault();
			hashHistory.push("/profile/edit");
		};


		return (
      <div>

        <HeaderContainer />

        <div className="profile">
          <div className="cover-photo" style={{backgroundImage: `url('${coverPic}')`, height: "400px", width: "auto"}} >

          </div>
					<div className="profile-photo"
								style={{backgroundImage: `url('${defaultProfilePic}')`,
								height: "110px", width: "110px", margin: "-55px auto 0px auto"}} >

					</div>
					<div className="edit-profile" style={{ margin: "-55px auto 0px auto"}} >
							<div>
								<button onClick={editButton}>Edit your profile</button>

							</div>

					</div>
          <div className="name">
						<br/>
            <h1>{firstName} {lastName}</h1>
						<br/>
						<h2>{town}, {country}</h2>
						<br/>
						<hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
