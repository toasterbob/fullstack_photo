import React from 'react';
import Masonry from 'react-masonry-component';



class PhotosUser extends React.Component {
	constructor(props) {
		super(props);

    this.photoRender = this.photoRender.bind(this);
	}

  componentWillReceiveProps(newProps) {
    this.setState(newProps.photo);

  }

  componentDidMount() {
    let user = this.props.currentUser;

    this.props.getPhotos(user.id);
  }

  photoRender() {
      let photos = this.props.photo;

      if (photos[0]){

        return photos.map( (photo, idx) => (
          <div key={idx} className="photos" >
            <img src={photo.photo_url}/>
          </div>
        ));

      }

    }



  render() {


    return (
        <div>
          <div>
            <div>
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
