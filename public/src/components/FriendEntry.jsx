import React from 'react';

class FriendEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  handleOnClick() {
    this.props.removeFriend(this.props.friend.email);
  }
  render() {
    return (
      <span className='flex-container'>
        <div className='flex-column-receiptItem'>
          {this.props.friend.name}
        </div>
        <div className='flex-container'>
          <a
            onClick={this.handleOnClick.bind(this)}
            className='delete-btn flex-column-deleteItem'>
          </a>
        </div>
      </span>
    );
  }
}

export default FriendEntry;
