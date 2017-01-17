import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class Photo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      description: '',
      photo_url: 'http://res.cloudinary.com/dseky3p5e/image/upload/c_scale,w_546/c_crop,w_500/v1484683909/preview_zwqsko.png',
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
      <div className="photo-header" onClick={this.openModal}>
            <div className="upload-icon"></div>
            <div className="upload-text" >&nbsp; Upload</div>


            <Modal
              contentLabel="Modal"
              style={ModalStyle}
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}>

              <div className="photo-form">
                    <div className="preview">
                      <div className="photo-preview" style={{backgroundImage: `url('${this.state.photo_url}')`, height: "275px", width: "500px",
                        backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "contain",
                        backgroundColor: "#edf2f9"}}></div>

                      <div className="upload-button">
                        <button className="upload" onClick={this.photoWidget}>&nbsp; &nbsp; Select Your Photo &nbsp; &nbsp;</button>
                      </div>

                    </div>
                  <form onSubmit={this.handleSubmit}>

                  <h3>Photo Journal Entry</h3>
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
                </div>
            </Modal>

      </div>


    );

  }


}

export default Photo;
