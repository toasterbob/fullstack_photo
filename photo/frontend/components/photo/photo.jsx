import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class Photo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      description: '',
      photo_url: '',
			modalOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.photoWidget = this.photoWidget.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  openModal() {
		this.setState({modalOpen: true});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

  handleSubmit(e) {
    e.preventDefault();
    this.props.uploadPhoto(this.state);
    this.closeModal();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  photoWidget() {
    cloudinary.openUploadWidget({ cloud_name: 'dseky3p5e',
                                  upload_preset: 'regular' },
                                  (error, result) => {
        this.setState({photo_url: result[0].secure_url});
      });
  }

  render() {

    return (
      <div>

            <div className="photoUpload" onClick={this.openModal}>Upload</div>


            <Modal
              contentLabel="Modal"
              style={ModalStyle}
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}>
              <div onClick={this.photoWidget}>UPLOAD YOUR PHOTO! </div>
                <form onSubmit={this.handleSubmit}>
                  <h3>Name</h3>

                <h3>Journal Entry</h3>
                <br/>
                  <label>
                    <textarea
                      value={this.state.description}
                      onChange={this.update('description')} />
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
            </Modal>

      </div>


    );

  }


}

export default Photo;
