import React from 'react';
import Masonry from 'react-masonry-component';
import HeaderContainer from '../header/header_container';


class PhotosAll extends React.Component {
	constructor(props) {
		super(props);

    this.photoRender = this.photoRender.bind(this);
	}

  componentWillReceiveProps(newProps) {
    this.setState(newProps.photo);

  }

  componentDidMount() {

    this.props.getPhotos();
  }

  photoRender() {
      let photos = this.props.photo;

      if (photos[0]){
        photos.reverse();
        return photos.map( (photo, idx) => (
          <div key={idx} className="photo-feed" >
            <img src={photo.photo_url}/>
          </div>
        ));

      }

    }



  render() {


    return (
      <div>
        <HeaderContainer />
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

      </div>


    );

  }


  }

  export default PhotosAll;
