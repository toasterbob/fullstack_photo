import React from 'react';
import { Link } from 'react-router';

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
  }

  render() {


		return (
      <div>
          <h3>Update Profile</h3>

          <form onSubmit={this.handleSubmit}>
            <label>First Name: &nbsp;
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')} />
            </label>
            <br />

            <label>Last Name: &nbsp;
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')} />
            </label>
            <br />

            <label>City: &nbsp;
              <input
                type="text"
                value={this.state.city}
                onChange={this.update('city')} />
            </label>
            <br />

            <label>Country: &nbsp;
              <input
                type="text"
                value={this.state.country}
                onChange={this.update('country')} />
            </label>
            <br />

            <label>Email: &nbsp;
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')} />
            </label>
            <br />

            <label>About: &nbsp;
              <input
                type="comment"
                value={this.state.bio}
                onChange={this.update('bio')} />
            </label>
            <br />

            <label>Cover Photo: &nbsp;
              <input
                type="text"
                value={this.state.cover_photo_url}
                onChange={this.update('cover_photo_url')} />
            </label>
            <br />

            <label>Profile Pic: &nbsp;
              <input
                type="text"
                value={this.state.profile_pic_url}
                onChange={this.update('profile_pic_url')} />
            </label>
            <br />
            <input type="submit" value="Update Profile" />
          </form>

      </div>
    );
  }
}

export default ProfileForm;
