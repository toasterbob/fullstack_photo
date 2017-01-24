import React from 'react';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';
import ModalStyle2 from './modal_style2';


class PhotosUser extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
			modalOpen: false,
			image_url: ""
		};

    this.photoRender = this.photoRender.bind(this);
    this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

  componentWillReceiveProps(newProps) {
    if (this.props.userId !== newProps.userId) {
			this.props.getPhotos(newProps.userId);
		}

    this.setState(newProps.photo);

  }

  componentDidMount() {


    this.props.getPhotos(this.props.userId);
  }

	openModal() {
		this.setState({modalOpen: true});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

	handleClick(photo) {

    this.setState({image_url: photo.photo_url}) ;
    this.setState({ modalOpen: true });
  }

  photoRender() {
      let photos = this.props.photo;

      if (photos[0]){

        return photos.map( (photo, idx) => (
          <div key={idx} className="photos" >
            <div onClick={() => this.handleClick(photo)}>
              <img src={photo.photo_url}/>
            </div>

          </div>
        ));

      }

    }




  render() {


    return (
        <div>
          <div>
						<Modal
              contentLabel="Modal"
              style={ModalStyle2}
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}>
              <div className="modal-body">
                <img src={this.state.image_url}/>
								<div className="close-button">
									<button onClick={this.closeModal}>Close</button>
								</div>
              </div>
            </Modal>
            <div className="center-masonry">

              <Masonry
                elementType={'div'}
                disableImagesLoaded={false}
                className='board'
                options={{isFitWidth: true}}
                >

                {this.photoRender()}

              </Masonry>

          </div>
        </div>
      </div>

    );

  }


  }

  export default PhotosUser;
