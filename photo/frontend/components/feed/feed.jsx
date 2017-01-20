import React from 'react';
import Masonry from 'react-masonry-component';
import HeaderContainer from '../header/header_container';
import { Link } from 'react-router';

class Feed extends React.Component {
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
        return photos.map( (photo, idx) => (

          <div key={idx} className="photo-feed">
            <div className="frame">
              <div className="pic-holder">
                <div className="pic">
                  <Link to={`/profile/${photo.user_id}`}>
                    <img src={photo.photo_url} alt={photo.description} />
                  </Link>
                </div>
              </div>

              <Link to={`/profile/${photo.user_id}`}>
                <div className="author2">
                  <div>
                    <img src={photo.profile_pic_url} className="small-profile" />
                  </div>
                  <div className="photo-author">
                    &nbsp; {photo.username}
                  </div>
                </div>
              </Link>
              <div className="description">
                <br/>{photo.description || "Untitled"}<br/>
              </div>
            </div>
          </div>
        ));

      }

    }



  render() {


    return (
      <div className="feed-main">
        <HeaderContainer />
        <div>
          <div className="intro">
            <br/>
            <h2>Welcome to your feed.  Follow more people to see their photos.</h2>
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

  export default Feed;
