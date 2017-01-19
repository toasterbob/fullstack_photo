import React from 'react';


class FollowButton extends React.Component {
	constructor(props) {
		super(props);


    this.handleSubmit = this.handleSubmit.bind(this);
	}


  handleSubmit(e) {
    let id = this.props.userId;
    let follow = {following_id: id};
    e.preventDefault();
    this.props.followUser(follow);
  }


  render() {
    console.log(this.props.userId);
    let someButton;


    return (
      <div>
          <button onClick={this.handleSubmit}>&nbsp; &nbsp; Follow &nbsp; &nbsp; </button>
      </div>


    );

  }


}

export default FollowButton;
