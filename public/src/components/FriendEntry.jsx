import React from 'react';


class FriendEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  handleOnClick() {
    console.log('click');
    this.props.removeFriend(this.props.friend.email);
  }
  render() {
    return (
      <span className='flex-container'>
        <div

          className='flex-column-receiptItem'
        >
          {this.props.friend.name}
        </div>
        <div className='flex-container'>
          <a
          onClick={this.handleOnClick.bind(this)}
          className='delete-btn flex-column-deleteItem'
          ></a>
        </div>
      </span>
    );

  }
}

export default FriendEntry;

/*
  <div>
    <div className='flex-container flex-column-receiptItem'>
      <span className='flex-column-name receipt-item-name'>{item[0].name}</span>
      <span className='flex-column-amount receipt-item-amount'>{item[0].amount}</span>
    </div>
    <div className='flex-container receipt-members-list'>
      {item[0].members.map((member, index) => {
        return <span key={index} className='receipt-member'>{member}</span>
      })}
    </div>
  </div>
*/
