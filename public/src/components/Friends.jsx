import React from 'react';
import ReactDOM from 'react-dom';
import FriendEntry from './FriendEntry.jsx';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div>
          <h1>Friends</h1>
          <input
            placeholder='Add friend by e-mail'
            name='name' type='text'
            onChange={this.props.addFriendChange}
            id='input-name'
            className='flex-column-name'
          />
          <a
            className='btn-circle'
            onClick={this.props.addFriend}>
          </a>
        </div>
        <div>
          <br></br>
          {this.props.addFriendStatus}
          <br></br>
          <br></br>
          <br></br>
        </div>
        {this.props.friendsList.map(friend => <FriendEntry friend={friend} removeFriend={this.props.removeFriend}/>)}
      </div>
    )
  }
}

export default Friends;
