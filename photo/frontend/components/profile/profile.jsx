import React from 'react';
import HeaderContainer from '../header/header_container';
import {defaultCoverPic, defaultProfilePic} from '../links';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import ProfileFormContainer from './profile_form_container';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
      last_name: '',
      city: '',
      country: '',
      email: '',
      bio: '',
      cover_photo_url: '',
      profile_pic_url: '',
			modalOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(newProps) {
    this.setState(newProps.profile);
  }

	componentDidMount(){
		this.props.getUser(this.props.currentUser);
	}

	openModal() {
		this.setState({modalOpen: true});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

	handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
    this.closeModal();
  }

	update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
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
								<button onClick={this.openModal}>Edit your profile</button>
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

									<div>

										<Modal
											contentLabel="Modal"
											style={ModalStyle}
											isOpen={this.state.modalOpen}
											onRequestClose={this.closeModal}>
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
															<div>
																<button className="modalClose" onClick={this.closeModal}>Cancel</button>
															</div>
															<div>
																<input type="submit" value="Save" />
															</div>
								            </div>

								          </form>
								          </div>
								      </div>
										</Modal>
									</div>
      </div>

    );
  }
}

export default Profile;
