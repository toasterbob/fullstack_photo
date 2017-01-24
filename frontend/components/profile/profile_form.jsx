import React from 'react';
import { Link } from 'react-router';
import {defaultCoverPic, defaultProfilePic} from '../links';

class ProfileForm extends React.Component {
	constructor(props) {
		super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      first_name: '',
      last_name: '',
      city: '',
      country: '',
      email: '',
      bio: '',
      cover_photo_url: '',
      profile_pic_url: ''
    };
	}

  componentDidMount(){
		this.props.getUser(this.props.currentUser);
	}

  componentWillReceiveProps(newProps) {
    this.setState(newProps.profile);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
    this.closeModal();
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


		return (
      <div className="profile-form">
        <div className="cover-photo" style={{backgroundImage: `url('${coverPic}')`, height: "150px", width: "600px"}} >
          <div className="combo">
            <div className="camera"></div>
          <div>&nbsp; Change your cover photo</div>
          </div>
        </div>
        <div className="profile-photo"
              style={{backgroundImage: `url('${defaultProfilePic}')`,
              height: "110px", width: "110px", margin: "-55px auto 0px auto"}} >
              <div className="camera"></div>
        </div>

          <div className="form-fields">

          <form onSubmit={this.handleSubmit}>
            <h3>Name</h3>
            <label>
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')} />
            </label>
            &nbsp; &nbsp;
            <label>
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')} />
            </label>
            <br />
            <h3>Location</h3>
            <label>
              <input
                type="text"
                value={this.state.city}
                onChange={this.update('city')} />
            </label>
            &nbsp; &nbsp;
            <label>
              <input
                type="text"
                value={this.state.country}
                onChange={this.update('country')} />
            </label>
            <br />


          <h3>About</h3>
          <br/>
            <label>
              <textarea
                value={this.state.bio}
                onChange={this.update('bio')} />
            </label>
            <br/><br/>

            <div className="submitButton">
              <input type="submit" value="Save" />
            </div>

          </form>
          </div>
      </div>
    );
  }
}

export default ProfileForm;
