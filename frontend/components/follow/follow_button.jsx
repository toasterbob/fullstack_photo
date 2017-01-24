import React from 'react';


class FollowButton extends React.Component {
	constructor(props) {
		super(props);


    this.handleSubmit = this.handleSubmit.bind(this);
    this.unfollowSubmit = this.unfollowSubmit.bind(this);
	}


  handleSubmit(e) {
    let id = this.props.userId;
    let follow = {following_id: id};
    e.preventDefault();
    this.props.followUser(follow);
  }

  unfollowSubmit(e) {
    let id = this.props.userId;
    e.preventDefault();
    this.props.unfollowUser(id);
  }


  render() {
    let someButton;
    if (this.props.profile.followed) {
      someButton = <button className="following" onClick={this.unfollowSubmit}>&nbsp; &nbsp; Unfollow &nbsp; &nbsp; </button>;
    } else {
       someButton = <button onClick={this.handleSubmit}>&nbsp; &nbsp; Follow &nbsp; &nbsp; </button>;
    }

    return (
      <div>
          {someButton}
      </div>


    );

  }


}

export default FollowButton;
