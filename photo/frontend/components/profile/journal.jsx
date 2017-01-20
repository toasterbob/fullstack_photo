import React from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle2 from '../photo/modal_style2';

class Journal extends React.Component {
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
			console.log(newProps.userId);
			this.props.getPhotos(newProps.userId);
		}

    this.setState(newProps.photo);

  }

  componentDidMount() {
		console.log(this.props.userId);
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

          <div key={idx} className="photo-feed">
            <div className="frame">
              <div className="pic-holder">
                <div className="pic">
									<div onClick={() => this.handleClick(photo)}>
		                  <img src={photo.photo_url} alt={photo.description} />
		              </div>
                </div>
              </div>

              
              <div className="description">
                <br/>{photo.description || "UNTITLED"}<br/>
              </div>
            </div>
          </div>
        ));

      }

    }



  render() {


    return (
      <div className="journal-main">
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
          <div className="intro">
            <br/>
            <h2>My Photo Journal.</h2>
            <br/>
          </div>
          <div>
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

      </div>


    );

  }


  }

  export default Journal;
